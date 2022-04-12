function generisi10x10Matricu() {
    let matrica = [];
    for (let i = 0; i < 10; i++) {
        let redMatrice = [];
        for(let j = 0; j < 10; j++) {
            let nasumicanBroj = Math.floor(1 + Math.random() * 100);
            redMatrice.push(nasumicanBroj);
        }
        matrica.push(redMatrice);
    }
    return matrica;
}

console.log(generisi10x10Matricu());