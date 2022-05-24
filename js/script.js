/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания


/* 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
   },
   rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && b.length < 50 ) {
                personalMovieDB.movies[a] = b;
                console.log('well');
            } else {
                console.log('error');
                i--;
            }
    
        }
    },
    detectPersonalLevel:  function() {
            if (personalMovieDB.count <= 10) {
            console.log ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log ("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log ("Вы киноман");
        } else {
            console.log ("Произошла ошибка");
        } 
    },  
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log (personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
    
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                personalMovieDB.genres [i-1] = genre;   
            if (genre === null || genre === '') {
              console.log ('вы ввели не правильные данные');
              i--;
            } else {
                personalMovieDB.genres [i-1] = genre; 
          }
        }
     
     personalMovieDB.genres.forEach ((item, i) => {
        console.log (`Любимый жанр ${i + 1} - это ${item}`);
     });
    }
};

     
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/




/* let num = -1;
 function getCoupeNumber(num) {
     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger) {
         return 'Ошибка определения места';
     }
     if (num > 36) {
         return 'Таких мест нет';
     }
     
     for (let i = 4; i <= 36; i = i + 4) {
         if (num <= i) {
             return Math.ceil (i / 4);
         }
     }

}
console.log (getCoupeNumber (num));


 */
/* 
 let time = 5490;
function getTimeFromMinutes(time) {
if (typeof(time) !== 'number' || time < 0 || !Number.isInteger (time)) {
return 'Ошибка';
}
if (time < 60) {
    return `Это 0 часов ${time} минут`;
}
let hourStr = '';
const hour = Math.floor (time / 60);
const minutes = time % 60;
switch (hour) {
    case 0:
        hourStr = 'часов';
        break;
    case 1:
        hourStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hourStr = 'часа';
        break;
        default:
            hourStr = 'часов';
}

return `Это ${hour} ${hourStr} ${minutes} минут`;

}
console.log (getTimeFromMinutes(time)); 
 */
/* let a = 100000, b = 2000, c = -11000, d = 1;
function findMaxNumber(a, b, c, d) {
if ( typeof(a) !== 'number',
    typeof(b) !== 'number',
    typeof(c) !== 'number',
    typeof(d) !== 'number') {
    return 0;
} else 
return Math.max (a, b, c, d);
}
console.log(findMaxNumber(a, b, c, d)); */
/* 
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

showFamily(family);
console.log(showFamily(family)); */
/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
       arr.forEach(item => {
        console.log(item.toLowerCase());
    });
 
}

console.log(standardizeStrings(favoriteCities)); */

/* const someString = 'This is some strange string';

function reverse(str) {
/* if (typeof(str) !== 'string') {
    return "Fall";
  } else {
      console.log(str.split().reverse().join());
  }

}
console.log(reverse(someString).split('').reverse().join('')); */


/* let newStr = '';
 for (let i = str.length - 1; i >= 0; i--) {
   newStr += str[i];
 }
 return newStr;
}

reverse(someString);
console.log(reverse(someString)); */ 

/*  const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.lenght == 0 ? str = "Нет валют" : str = 'Есть доступные валюты \n';

    arr.forEach(function (carr, i) {
        if (carr !== missingCurr) {
            str += `${carr} \n`;
        }
    });
    return str;
}
availableCurr ([...baseCurrencies], [...additionalCurrencies]); 
console.log (availableCurr ([...baseCurrencies], [...additionalCurrencies]), 'CNY'); */

/* function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log (result); */
/* const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);
console.log(transferWaitors(restorantData)); */
/* let x = 5;
let n = 4;

function pow(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow (x, n-1); 
    } 
} 
console.log (pow (x, n)); */

/* 
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

   }

factorial(5);
console.log (factorial(5)); */

/* function fib(num) {
  
         return num <= 1 ? num : fib(num - 1) + fib(num - 2);
    }
   

fib(11);
console.log (fib(11)); */

/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 300,
    budget: 500
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
     volume = square * data.height;

     if(volume * data.moneyPer1m3 <= data.budget  ) {
        return 'хватит';
     } else {
         return 'не хватит';
     }
    
}

console.log(isBudgetEnough(shoppingMallData)); */

/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Kert'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a  = [], b = [], c = [], rest = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else  if (i < 6) {
                b.push(arr[i]);
            } else  if (i < 9) {
                    c.push(arr[i]);
                } else {
                    rest.push(arr[i]);
                }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
} */
/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
} */
/* console.log(sortStudentsByGroups(students)); */

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

/* function showGoodFilms(arr) {
  return arr.filter(item =>  item.rating >= 8);
    
}
console.log(showGoodFilms(films)); */
/* function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`)
};
console.log(showListOfFilms(films)); */
function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}
console.log(setFilmsIds(films));