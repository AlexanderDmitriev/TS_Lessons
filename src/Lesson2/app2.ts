/* Задайте правильные ts типы, для классических js; */

let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: unknown;

age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a:any) => {
  return 100 + a;
};

/* Задавайте тип для переменной в которую можно сохранить любое значение. */

let anything: unknown;
anything = -20;
anything = "Text";
anything = {};

/* Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом. */

let some: string;
some = "Text";
let str: string;
str = some;

/* Сделайте неизменяемый массив со строго описанными типами. Массив для примера. */

let person: [string, number];
person = ["Max", 21];

/* Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY). */

enum isLoading {
  LOADING,
  READY,
}

/* Сделайте переменную, которая может принимать или строку или число. */

let a: number | string;

/* Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable' */
let isEnable: "enable" | "disable";

/* Укажите типы для следующих функций */

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): object {
  throw new Error("Error");
}
/* Создайте свой тип данных на основе имеющихся данных. */

type pages = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
