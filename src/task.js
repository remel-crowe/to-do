export default class Task {
  constructor(title, description, date, priority, completed) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.completed = completed;
  }

  edit(newData) {}
}
