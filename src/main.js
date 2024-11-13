import HabitsPresenter from "./presenter/habits-presenter.js";
import HabitsModel from "./models/habits-model.js";

const bodyContainer = document.querySelector(".container");
const habitsModel = new HabitsModel();
const habitsPresenter = new HabitsPresenter(bodyContainer, habitsModel);

habitsPresenter.init();
