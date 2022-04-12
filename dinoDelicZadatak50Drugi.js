function provjeriDaLiJeBrojPrimaran(broj) {
    for (let i = 2; i < broj; i++) {
        if (broj % i === 0) {
            return false;
        }  
    }
    return true;
}

//console.log(provjeriDaLiJeBrojPrimaran(1));

function ispisiPrimarneBrojeve(doOvogBroja) {
    for(let i = 1; i < doOvogBroja; i++) {
        if(provjeriDaLiJeBrojPrimaran(i)) {
            console.log(i);
        }
        
    }
}

ispisiPrimarneBrojeve(10000);


