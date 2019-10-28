// Muutujad

// var, let, const

//var

var nimi = 'Silver';
console.log(nimi);
nimi = "sillu";
console.log(nimi);

// muutujate initsialiseerimine

var tervitus;
console.log(tervitus);
tervitus = 'tere tulemast';
console.log(tervitus);

// liitnimetused muutujate jaoks
var eesNimi = 'Silver'; //Camel style
var ees_nimi = 'Silver'; // PHP stiil
var EesNimi = 'Silver'; // Pascal stiil
var eesnimi = 'Silver';

// let
let pereNimi ='Lass';
console.log(pereNimi);
pereNimi = '??????';
console.log(pereNimi);

//const

const minuEesNimi = 'Silver';
console.log(minuEesNimi);

//const kasutamise näide 1
const inimene = {nimi:'Silver',vanus: 20};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamise näide 222

const arvud = [1,2,3,4,5];
console.log(arvud);
arvud.push(6);
console.log(arvud);


