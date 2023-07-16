class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class Person1 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

let person = new Person1("John");
console.log(person.name);

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("john").add("peter");
console.log(`the latest attendee is ${meeting.latest}`);
