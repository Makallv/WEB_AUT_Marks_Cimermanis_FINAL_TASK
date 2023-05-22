import { faker } from "@faker-js/faker";

class UserData {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.phone = faker.phone.number('##########');

  }
}

export default UserData;