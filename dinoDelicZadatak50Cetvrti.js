function izbrojKaraktereUStringu(nekiString) {
    let brojSuglasnika = 0;
    let brojSamoglasnika = 0;
    for (let i = 0; i < nekiString.length; i++) {
        if (nekiString.charAt(i) === 'a' || nekiString.charAt(i) === 'e' || nekiString.charAt(i) === 'i' || nekiString.charAt(i) === 'o' || nekiString.charAt(i) === 'u') {
            brojSamoglasnika++;
        } else {
            brojSuglasnika++;
        }
    }
    console.log(`String ${nekiString} ima ${nekiString.length} karaktera, od cega je ${brojSamoglasnika} samoglasnika i ${brojSuglasnika} suglasnika.`)
}

izbrojKaraktereUStringu('Kokodzada');