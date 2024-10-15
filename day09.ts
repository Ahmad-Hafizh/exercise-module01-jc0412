// 1
class Employee {
  name: string;

  working: {
    name: string;
    baseSallary: number;
    extraSallary: number;
    clockIn: string;
    clockOut: string;
    dailyHour: number;
    dailySallary: number;
  }[];

  constructor(_name: string) {
    this.name = _name;

    this.working = [];
  }
}

class FulltimeEmployee extends Employee {
  // #dailyHour: number;
  // #dailySallary: number;
  baseSallary: number;
  extraSallary: number;
  #totalSallary: number;

  constructor(_name: string, _baseSallary: number, _extraSallary: number) {
    super(_name);
    this.#totalSallary = 0;
    this.baseSallary = _baseSallary;
    this.extraSallary = _extraSallary;
    // this.working = [];
  }

  addWorkingHour = (_clockIn: string, _clockOut: string) => {
    // this.#dailyHour = parseInt(`${_clockOut[0]}${_clockOut[1]}`) - parseInt(`${_clockIn[0]}${_clockIn[1]}`);
    // this.#dailySallary = this.#dailyHour <= 6 ? this.#dailyHour * this.baseSallary : (this.#dailyHour - 6) * this.extraSallary + 6 * this.baseSallary;

    const dailyHour = parseInt(`${_clockOut[0]}${_clockOut[1]}`) - parseInt(`${_clockIn[0]}${_clockIn[1]}`);
    const dailySallary = dailyHour <= 6 ? dailyHour * this.baseSallary : (dailyHour - 6) * this.extraSallary + 6 * this.baseSallary;
    this.#totalSallary += dailySallary;

    this.working.push({
      name: this.name,
      baseSallary: this.baseSallary,
      extraSallary: this.extraSallary,
      clockIn: _clockIn,
      clockOut: _clockOut,
      dailyHour: dailyHour,
      dailySallary: dailySallary,
    });
  };

  getSallary = () => {
    return this.#totalSallary;
  };
}
const employee1 = new FulltimeEmployee('edward', 100000, 75000);
employee1.addWorkingHour('15:00', '22:00');
employee1.addWorkingHour('09:00', '10:00');
console.log(employee1.working);
console.log(employee1.getSallary());

const employee2 = new FulltimeEmployee('john', 100000, 75000);
employee2.addWorkingHour('09:00', '12:00');
employee2.addWorkingHour('09:00', '11:00');
console.log(employee2.working);
console.log(employee2.getSallary());
