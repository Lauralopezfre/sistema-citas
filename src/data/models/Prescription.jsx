export default class Prescription{
    constructor(id, medication, dose, dateStart, dateEnd, time, note) {
        (this.id = id),
        (this.medication = medication),
        (this.dose = dose),
        (this.dateStart = dateStart),
        (this.dateEnd = dateEnd),
        (this.time = time),
        (this.note = note),
        (this.thisIsFinished = false);
    }
  }