import Component from "../framework/component.js";

export default class HeaderComponent extends Component {
  getTemplate() {
    return `
            <div>
        <h1>Ежедневный Трекер Привычек</h1>

        <details>
          <summary>Как использовать</summary>
          <p>
            Добавляйте привычки, следите за их выполнением и обновляйте статус.
            Вы можете добавлять описание к привычкам и отслеживать их по
            статусу.
          </p>
        </details>
      </div>
    `;
  }
}
