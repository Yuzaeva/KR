import Component from "../framework/component.js";

export default class HabitListComponent extends Component {
  getTemplate() {
    return `
      <div class="habit-list">
        <h2>Список Привычек</h2>
        <div class="habit-items"></div>
      </div>
    `;
  }

  getHabitItemsContainer() {
    return this.getElement().querySelector(".habit-items");
  }
}
