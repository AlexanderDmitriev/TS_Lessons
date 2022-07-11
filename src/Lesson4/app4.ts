/* Давайте построим дом */

/* Создайте объект Key */
class Key {
  private signature: number; /* есть только свойство signature */
  /* во время создания объекта генерирует случайное число и сохраняет его в signature */
  constructor() {
    this.signature = Math.random();
  }
  /* метод getSignature возвращает случайное число из signature */
  public getSignature() {
    return this.signature;
  }
}
class Person {
  /* конструктор принимает ключ класса Key и сохраняет его в свойство key */
  constructor(private key: Key) {
    this.key = key;
  }
  /* метод getKey возвращает key */
  getKey = ():Key => {
    return this.key;
  };
}

enum doorType {
  OPENED,
  CLOSED,
}

/* Создайте абстрактный класс House в нем должны быть следующая логика */
abstract class House {
  door: doorType; /* свойство door, она может быть либо закрыта, либо открыта */
  key: Key; /* свойство key - объект класса Key */
  tenants: Person[] = [];
  /* конструктор принимает аргумент класса Key и сохраняет его в свойство key. */
  constructor(door: doorType, key: Key) {
    this.door = door;
    this.key = key;
  }
  /*  метод comeIn, который добавляет объект класса Person в свойство tenants 
и это срабатывает только если door открыта. */
  comeIn = (person: Person):void => {
    if (this.door === doorType.OPENED) {
      this.tenants.push(person);
    }
  };
  /* абстрактный метод openDoor принимает аргумент класса Key */
  abstract openDoor(key: Key): boolean;
}

/* Создайте класс MyHouse который реализует класс House */
class MyHouse extends House {
  /* создаем метод openDoor, так как он принимает ключ, 
сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, 
если да, открываем дверь */
  openDoor(key: Key): boolean {
    return this.key.getSignature() === key.getSignature();
  }
}
const myKey = new Key();
const myHome = new MyHouse(doorType.CLOSED, myKey);
/* Создайте объект Person */
const somePerson = new Person(myKey);

/* Сделайте так, чтобы жилец попал домой. */

const entering = (someOne: Person, someHouse: MyHouse): void => {
  if (someHouse.door === doorType.CLOSED) {
    if (someHouse.openDoor(someOne.getKey())) {
      console.log("Yes");
    } else console.log("Oh, no");
  } else {
    someHouse.comeIn(someOne);
    console.log("Yes");
  }
};

entering(somePerson,myHome);
