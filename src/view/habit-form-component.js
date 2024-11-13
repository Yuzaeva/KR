import Component from "../framework/component.js";

export default class HabitFormComponent extends Component {
  getTemplate() {
    return `
      <div class="habit-form">
        <h2>Добавить Привычку</h2>
        <form class="habits__form">
          <label for="habit-name">Название привычки:</label>
          <input type="text" class="habit-name" placeholder="Название" required />
          <label for="habit-description">Описание:</label>
          <textarea class="habit-description" placeholder="Описание привычки" rows="3"></textarea>
          <label for="habit-status">Статус привычки:</label>
          <select class="habit-status" required>
            <option value="active">Активна</option>
            <option value="completed">Завершена</option>
          </select>
          <button type="submit">Добавить Привычку</button>
        </form>
      </div>
    `;
  }

  setOnSubmit(callback) {
    this.getElement()
      .querySelector("form")
      .addEventListener("submit", callback);
  }
}
