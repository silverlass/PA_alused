//Tingimuslaused harjutus 3

let summaKontol =  prompt('Palju sul raha on?');
    
let moneyOut = prompt('Palju sa välja tahad võtta?');
if (parseInt(moneyOut) > parseInt(summaKontol)){
    alert('Sul pole nii palju raha');
}else{
    let moneyLeft = parseInt(summaKontol) - parseInt(moneyOut);
    alert('võtsid välja ' + moneyOut + ' Jääk on ' + moneyLeft);
}
