let math = require('mathjs')

export const simplifyExpression = (input) => {
    let simplifiedExpression = input.replace(/\./g, "*")

    var rules = [
        { l: '(n1 + n2) * (n1 + ~n2)', r: 'n1' }, //1
        { l: 'n1 * (n2 + n3)', r: 'n1 * n2 + n1 * n3' }, //2

        { l: 'n1 + 0', r: 'n1' }, //3
        { l: 'n1 * 1', r: 'n1' }, //4
        { l: 'n1 + 1', r: '1' }, //5
        { l: 'n1 * 0', r: '0' }, //6

        { l: 'n1 + n1', r: 'n1' }, //7
        { l: 'n1 * n1', r: 'n1' }, //8
        { l: 'n1 + ~n1', r: '1' }, //9
        { l: 'n1 * ~n1', r: '0' }, //10

        { l: 'n1 + n1 * n2', r: 'n1' },  //11
        { l: 'n1 * (n1 + n2)', r: 'n1' },  //12
        { l: 'n1*n2 + n1*~n2', r: 'n1' }, //13

        { l: '~~n1', r: 'n1' } //14
    ]


    try {
        simplifiedExpression = math.simplify(simplifiedExpression, rules)

        if (simplifiedExpression.isAccessorNode) {
            simplifiedExpression = simplifiedExpression.object
        }
    }
    catch (e) {
        simplifiedExpression = 'Syntax Error! Please review your input!'
    }


    return simplifiedExpression.toString().replace(/\*/g, ".")
}