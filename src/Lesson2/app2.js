"use strict";
/* Задайте правильные ts типы, для классических js; */
let age;
let name1;
let toggle;
let empty;
let notInitialize;
let callback;
age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
    return 100 + a;
};
/* Задавайте тип для переменной в которую можно сохранить любое значение. */
let anything;
anything = -20;
anything = "Text";
anything = {};
/* Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом. */
let some;
some = "Text";
let str;
str = some;
/* Сделайте неизменяемый массив со строго описанными типами. Массив для примера. */
let person;
person = ["Max", 21];
/* Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY). */
var isLoading;
(function (isLoading) {
    isLoading[isLoading["LOADING"] = 0] = "LOADING";
    isLoading[isLoading["READY"] = 1] = "READY";
})(isLoading || (isLoading = {}));
/* Сделайте переменную, которая может принимать или строку или число. */
let a;
/* Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable' */
let isEnable;
/* Укажите типы для следующих функций */
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
