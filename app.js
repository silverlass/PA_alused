// funktsiooniNimi([param1, param2,....paramn]){funktsiooni sisu}
///function paarsuseKontroll(arv){
/*
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
*/
function ristKylikuPindala(kylg1,kylg2){
    pindala = kylg1 * kylg2;
    return pindala;
}
//funktsioon, mis väljastab tulemuse ekraanil

function valjasta(kylg1,kylg2){
    console.log('pikkus = ' + kylg1);
    console.log('laius = ' + kylg2);
    let pindala = ristKylikuPindala(kylg1, kylg2);
    console.log('Pindala = ' + pindala);

}
valjasta(15,5)

