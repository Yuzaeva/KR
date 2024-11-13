import Component from "../framework/component.js";

export default class HabitItemComponent extends Component {
  constructor(habit) {
    super();
    this._habit = habit;
  }

  getTemplate() {
    const { name, description, status } = this._habit;
    return `
      <div class="habit-item">
        <h3 class="title">${name}</h3>
        <p class="description">${description}</p>
        <p class="status">Статус: ${status === "active" ? "Активна" : "Завершена"}</p>
        <button class="edit-button">Редактировать</button>
        <button class="delete-button">Удалить</button>
        <button class="toggle-status-button">
          ${status === "active" ? "Отметить как выполнено" : "Сделать активной"}
        </button>
      </div>
    `;
  }

  setOnEdit(callback) {
    this.getElement()
      .querySelector(".edit-button")
      .addEventListener("click", callback);
  }

  setOnDelete(callback) {
    this.getElement()
      .querySelector(".delete-button")
      .addEventListener("click", callback);
  }

  setOnToggleStatus(callback) {
    this.getElement()
      .querySelector(".toggle-status-button")
      .addEventListener("click", callback);
  }
}
