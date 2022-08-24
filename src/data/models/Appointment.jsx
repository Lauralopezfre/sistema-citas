export default class Appointment {
    constructor(id, doctor, patient, date, time, status, room, additionInfo) {
        (this.id = id),
        (this.doctor = doctor),
        (this.patient = patient),
        (this.date = date),
        (this.time = time),
        (this.status = status),
        (this.room = room),
        (this.additionInfo = additionInfo);
    }
  }