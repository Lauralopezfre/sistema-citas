export default class Doctor extends User {
  constructor(id, name, password, phone, email, address, date, noLicense, specialty) {
    super(id, name, password, phone, email, address, date);
    (this.noLicense = noLicense), 
    (this.specialty = specialty);
  }
}