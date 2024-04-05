const { solveQuadratic } = require('./solveQuadratic.helper')


exports.solveInequality = (param) => {
    const { a, b, c, d, e, f, g, h, i, j, k, tossResult, check } = param
   
    if (tossResult === 'bowling') {
        //if target postion team and opposition team are same
        if (check) {
            // console.log(/g/,g);
            const A = (((e + k) * (g + b)) + ((h + k) * (d + b)))
            const B = ((c * (e + k) * (g + b)) + (j * (e + k) * (g + b)) - ((e + k) * (i + b + 1) * (h + k)) + (j * (h + k) * (d + b)) - ((h + k) * (a + b + 1) * (e + k)) + (c * (h + k) * (d + b)))
            const C = ((j * c * (e + k) * (g + b)) - (c * (e + k) * (i + b + 1) * (h + k)) - (j * (h + k) * (a + b + 1) * (e + k)) + (j * c * (h + k) * (d + b)))

            const x = solveQuadratic(A, B, C);
            console.log(x);
            return x[0]
        }
        else {
            const x = (((a + b + 1) * (e + k)) - (d * c) - (b * c) - (k * f * c) - (f * c * e)) / ((k * f) + (f * e) + d + b)

            return x

        }

    }
    if (tossResult === "batting") {
        //if target position team and opposition team are same
        if (check) {
            // console.log(/g/,g);
            const x = (((h + k) * (j + k) * (a + b) * (e + k)) + ((c + k) * (e + k) * (i + b) * (h + k)) - (d * (h + k) * (j + k) * (c + k)) - (g * (c + k) * (e + k) * (j + k))) / (((c + k) * (e + k) * (j + k)) + ((h + k) * (j + k) * (c + k)))
            return x
        } else {
            const x = ((((a + b) * (e + k) - (f * (c + k) * (e + k))) / (c + k)) - d)
            return x
        }
    }
}