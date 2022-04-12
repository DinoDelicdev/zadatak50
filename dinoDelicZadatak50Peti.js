function izbrojPonavljanjeKarakteraUStringu(nekiString, nekiKarakter) {
    let brojTrazenogKarakteraUStringu = 0;
    for (let i = 0; i < nekiString.length; i++) {
        if (nekiString.toLowerCase().charAt(i) === nekiKarakter.toLowerCase()) {
            brojTrazenogKarakteraUStringu++;
        }
    }
    console.log(`Karakter "${nekiKarakter}" se u stringu "${nekiString}" ponavlja ${brojTrazenogKarakteraUStringu} puta.`);
}

izbrojPonavljanjeKarakteraUStringu("I mean there was I in a Soho nightclub drinking champagne with this bird called Camilla when I suddenly realised I didn't even do the the bloody pools.", "a");