const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}


const fromEuroToPound = function(valueInEuro) {
    let valueInPound =  valueInEuro * 0.87;
    return valueInPound;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = fromEuroToYen(valueInEuro);
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = fromEuroToPound(valueInEuro);
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

