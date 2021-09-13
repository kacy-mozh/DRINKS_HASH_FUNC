
function HashStorageFunc() {

    var _hash = {};
    this.addValue = function (key, value) {
        _hash[key] = value;
        console.log(_hash);
    }

    this.getValue = function (key) {
        if (key in _hash) {
            return `Напиток: ${key}, алкогольный: ${_hash[key]}.`;
        } else {
            return 'такого напитка нет в базе';
        }
    }

    this.deleteValue = function (key) {
        if (key in _hash) {
            delete _hash[key];
            return `Напиток "${key}" удален из списка.`;
        } else {
            return `такого напитка нет в базе данных`;
        }
    }
    this.getKeys = function () {
        return Object.keys(_hash);
    }
}

let drinkStorage = new HashStorageFunc();

function button1() {
    let drinkName = '';
    do {
        drinkName = prompt('Введите название напитка:');
    } while (drinkName === '' || parseInt(drinkName));

    let drinkValue = '';
    do {
        drinkValue = prompt('алкогольный:')
    } while (drinkValue === '' || parseInt(drinkValue));

    return drinkStorage.addValue(drinkName, drinkValue);
}
let btn1 = document.querySelector('.one').addEventListener('click', button1);

function button2() {
    let drinkName = '';
    do {
        drinkName = prompt('Введите название напитка:');
    } while (drinkName === '' || parseInt(drinkName));
    alert(drinkStorage.getValue(drinkName));
}
let btn2 = document.querySelector('.two').addEventListener('click', button2);

function button3() {
    let drinkName = '';
    do {
        drinkName = prompt('Введите название напитка:');
    } while (drinkName === '' || parseInt(drinkName));
    alert(drinkStorage.deleteValue(drinkName));
}
let btn3 = document.querySelector('.three').addEventListener('click', button3);

function button4() {
    console.log(drinkStorage.getKeys());
}
let btn4 = document.querySelector('.four').addEventListener('click', button4);

/* 1. Разработать класс HashStorageFunc в функциональном стиле (т.е. функцию-конструктор) для хранения в приватном хэше произвольных пар ключ-значение.
Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
Класс должен иметь следующие публичные методы:
•	addValue(key,value) — сохраняет указанное значение под указанным ключом;
•	getValue(key) — возвращает значение по указанному ключу либо undefined;
•	deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
•	getKeys() — возвращает массив, состоящий из одних ключей.

2.
Создать объект drinkStorage класса HashStorageFunc для хранения рецептов напитков.
Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).*/

/* 3. Разработать веб-страницу для работы с хранилищем рецептов напитков.
На странице должны быть кнопки:
•	«ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
•	«получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
•	«удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.
•	«перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).

Пример информации о напитке:
напиток Маргарита алкогольный: да рецепт приготовления: продукт, продукт... смешать... */
