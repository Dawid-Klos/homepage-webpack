import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

const time = document.querySelector('.time__display--js');
time.innerHTML = moment().startOf('day').fromNow();


const name = 'Dawid';
const age = 24;
function greeting(name,age) {
    console.log(`Cześć! Witam Cię na mojej stronie. Nazywam się ${name} i mam ${age} lata.`);
}
greeting(name,age);


function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*10;
}

const myResult = calculate(3);
console.log(myResult);

const humanOne = {
    name: "Maciek",
    age: 35,
    address: {
        street: "Warszawska",
        city: "Białystok",
        }

};
const humanTwo = {
    name: "Dawid",
    age: 29,
    address: {
        street: "Bukowa",
        city: "Gdańsk",
    }
};

if (humanTwo.age == humanOne.age) {
    console.log("Są w tym samym wieku")
} else {
    console.log("Wiek tych osób jest różny")
};


const myNumber = 7;

switch(myNumber) {
    case 7:
        console.log('Jestem siódemką');
    break;
    case 9:
        console.log('Jestem dziewiątką');
    break;
    default:
        console.log('Jestem czymś innym');
}

if (32>20) {
    console.log('To jest prawda');
} else {
    console.log('To nie jest prawda');
}

(32>20) ? console.log('To jest prawda') : console.log('To nie jest prawda');

const result = (32>20) ? true : false;
console.log(result);