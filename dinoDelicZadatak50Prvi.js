function ispisiURastucemResdoslijedu(a, b, c) {
    if (a > b && b > c) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${c}, ${b}, ${a}`);
    }
    if (b > a && a > c) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${c}, ${a}, ${b}`);
    }
    if (a > c && c > b) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${b}, ${c}, ${a}`);
    }
    if (b > c && c > a) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${a}, ${c}, ${b}`);
    }
    if (c > a && a > b) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${b}, ${a}, ${c}`);
    }
    if (c > b && b > a) {
        console.log(`Brojevi ${a}, ${b} i ${c} u rastucem redoslijedu su: ${a}, ${b}, ${c}`);
    }
}

ispisiURastucemResdoslijedu(77, 45, 323);