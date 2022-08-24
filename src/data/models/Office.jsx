export default class Office {
    constructor(id, doctor, speciality, timeStart, timeEnd, room, appointmets) {
        (this.id = id),
        (this.doctor = doctor),
        (this.speciality = speciality),
        (this.timeStart = timeStart),
        (this.timeEnd = timeEnd),
        (this.room = room),
        (this.appointmets = appointmets);
    }
  }