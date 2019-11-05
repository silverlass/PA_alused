// funktsiooniNimi([param1, param2,....paramn]){funktsiooni sisu}
function paarsuseKontroll(arv){

let jaak = arv % 2;
if (jaak === 0){
lause = arv + ' on paaris';
}else{
lause = arv + ' on paaritu';
}
return lause;
}
let paarsus;
paarsus = paarsuseKontroll(5);
console.log(paarsus)

