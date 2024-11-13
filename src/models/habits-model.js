import { habits } from "../mock/habits.js";

export default class HabitsModel {
  constructor() {
    this._habits = [...habits];
  }

  getHabits(filter = "all") {
    if (filter === "all") {
      return this._habits;
    }
    return this._habits.filter((habit) => habit.status === filter);
  }

  addHabit(habit) {
    this._habits.push(habit);
  }

  deleteHabit(id) {
    this._habits = this._habits.filter((habit) => habit.id !== id);
  }

  updateHabit(updatedHabit) {
    this._habits = this._habits.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    );
  }
}
