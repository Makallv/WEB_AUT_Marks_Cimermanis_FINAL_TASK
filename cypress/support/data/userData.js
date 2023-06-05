import { faker } from "@faker-js/faker";

class UserData {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.gender = faker.person.sexType()[0].toUpperCase();
    this.phone = faker.phone.number('##########');

  }
}

export default UserData;