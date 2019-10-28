//Tingimuslaused harjutus 3

let summaKontol =  parseInt(prompt('Palju sul raha on?'));
    
let moneyOut = parseInt(prompt('Palju sa välja tahad võtta?'));
if (moneyOut > summaKontol){
    alert('Sul pole nii palju raha');
}else{
    let moneyLeft = summaKontol - moneyOut;
    alert('võtsid välja ' + moneyOut + ' Jääk on ' + moneyLeft);
}
