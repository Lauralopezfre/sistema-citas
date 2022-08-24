export default class Employment extends User {
    constructor(id, name, password, phone, email, address, date, position ) {
      super(id, name, password, phone, email, address, date);
      (this.position = position);
    }
  }