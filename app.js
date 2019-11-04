algarvud= []
for (var i = 1; i<20;i++){
    let count = 0;
    for (var k = 1; k <20;k++){
        if (i % k == 0){
            count = count+1;
        }
    }
    if (count == 2){
        algarvud.push(i);
    }
}
console.log(algarvud)

