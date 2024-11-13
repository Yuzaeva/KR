import { render } from "../framework/render.js";
import HeaderComponent from "../view/header-component.js";
import HabitFormComponent from "../view/habit-form-component.js";
import HabitListComponent from "../view/habit-list-component.js";
import HabitItemComponent from "../view/habit-item-component.js";
import HabitFilterComponent from "../view/habit-filter-component.js";

export default class HabitsPresenter {
  constructor(container, habitsModel) {
    this._container = container;
    this._habitsModel = habitsModel;

    this._headerComponent = new HeaderComponent();
    this._habitFormComponent = new HabitFormComponent();
    this._habitListComponent = new HabitListComponent();
    this._habitFilterComponent = new HabitFilterComponent();

    this._handleHabitSubmit = this._handleHabitSubmit.bind(this);
    this._handleFilterChange = this._handleFilterChange.bind(this);
  }

  init() {
    render(this._headerComponent, this._container);
    render(this._habitFormComponent, this._container);
    render(this._habitFilterComponent, this._container);
    render(this._habitListComponent, this._container);

    this._habitFormComponent.setOnSubmit(this._handleHabitSubmit);
    this._habitFilterComponent.setOnFilterChange(this._handleFilterChange);

    this._renderHabits();
  }

  _handleHabitSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.querySelector(".habit-name").value;
    const description = form.querySelector(".habit-description").value;
    const status = form.querySelector(".habit-status").value;

    const newHabit = {
      id: Date.now(),
      name,
      description,
      status,
    };

    this._habitsModel.addHabit(newHabit);
    this._renderHabits();
    form.reset();
  }

  _handleFilterChange() {
    this._renderHabits();
  }

  _renderHabits() {
    const container = this._habitListComponent.getHabitItemsContainer();
    container.innerHTML = "";

    const filter = this._habitFilterComponent.getSelectedFilter();
    const habits = this._habitsModel.getHabits(filter);

    habits.forEach((habit) => {
      const habitItemComponent = new HabitItemComponent(habit);

      habitItemComponent.setOnDelete(() => {
        this._habitsModel.deleteHabit(habit.id);
        this._renderHabits();
      });

      habitItemComponent.setOnEdit(() => {
        const newName =
          prompt("Введите новое название", habit.name) || habit.name;
        const newDescription =
          prompt("Введите новое описание", habit.description) ||
          habit.description;
        const newStatus = confirm("Привычка завершена?")
          ? "completed"
          : "active";

        this._habitsModel.updateHabit({
          ...habit,
          name: newName,
          description: newDescription,
          status: newStatus,
        });
        this._renderHabits();
      });

      habitItemComponent.setOnToggleStatus(() => {
        const newStatus = habit.status === "active" ? "completed" : "active";
        this._habitsModel.updateHabit({
          ...habit,
          status: newStatus,
        });
        this._renderHabits();
      });

      render(habitItemComponent, container);
    });
  }
}
