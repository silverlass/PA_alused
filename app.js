// funktsiooniNimi([param1, param2,....paramn]){funktsiooni sisu}
function paarsuseKontroll(arv){

let jaak = arv % 2;
if (jaak === 0){
    console.log(arv + ' on paaris');
}else{
    console.log(arv + ' on paaritu');
}

}

paarsuseKontroll(5)
