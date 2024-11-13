import Component from "../framework/component.js";

export default class HabitFilterComponent extends Component {
  getTemplate() {
    return `
      <div class="habit-filter">
        <h2>Фильтры</h2>
        <label for="status-filter">Фильтр по статусу:</label>
        <select class="status-filter">
          <option value="all">Все</option>
          <option value="active">Активные</option>
          <option value="completed">Завершенные</option>
        </select>
      </div>
    `;
  }

  setOnFilterChange(callback) {
    this.getElement()
      .querySelector(".status-filter")
      .addEventListener("change", callback);
  }

  getSelectedFilter() {
    return this.getElement().querySelector(".status-filter").value;
  }
}
