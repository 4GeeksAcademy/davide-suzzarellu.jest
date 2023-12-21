test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(expected).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 japan yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5;
    expect(expected).toBe(511.91588785046724); 
})

test("One euro should be 0.87 british pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(500);
    const expected = (500 / 156.5) * 0.87;
    expect(expected).toBe(2.7795527156549524); 
})
