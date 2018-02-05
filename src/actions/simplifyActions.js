let math = require('mathjs')

export const simplifyExpression = (input) => {
    let simplifiedExpression = ''

    try {
        simplifiedExpression = booleanExpression(input)
    }
    catch (e) {
        simplifiedExpression = 'Syntax Error! Please review your input!'
    }

    return simplifiedExpression
}

const booleanExpression = (input) => {
    // First, parse user input into expression tree
    // Note that the parse doesn't like '.''s so we will convert to manipulate the tree
    let root = math.parse(input.replace(/\./g, "-"))

    // Add parent reference to each node
    // Add additional to indicate if node is left or right child of parent
    root.traverse((node, path, parent) => {
        node.parent = parent
        if (parent && parent.args) {
            node.position = parent.args.indexOf(node)
        }
    })

    // Now we need to set up our tree for a reverse level traversal
    let stack = []
    let queue = []

    queue.push(root)

    while (queue.length > 0) {

        let root = queue.shift()
        stack.push(root)

        if (root.args && root.args[1]) {
            queue.push(root.args[1])
        }

        if (root.args && root.args[0]) {
            queue.push(root.args[0])
        }
    }

    // Stack now contains the correct order
    // We can apply simplification rules starting at lowest level and than working our way up

    while (stack.length > 0) {
        root = stack.pop()

        console.log(`Original Root: ${root}`)

        // Attempt to apply simplification rules
        // If node is a Parenthesis Node, must take extra care
        if (root.isParenthesisNode) {
            let simplifiedExpression = applySimplificationRules(root.content)

            simplifiedExpression.parent = root.parent
            simplifiedExpression.position = root.position

            if (root.parent) {
                root.parent.args[root.position] = simplifiedExpression
            } else {
                root = simplifiedExpression
            }

        } else {
            let otherSimplifiedExpression = applySimplificationRules(root)

            otherSimplifiedExpression.parent = root.parent
            otherSimplifiedExpression.position = root.position

            if (root.parent) {
                root.parent.args[root.position] = otherSimplifiedExpression
            } else {
                root = otherSimplifiedExpression
            }
        }

        console.log(`Simplified Root: ${root}`)
    }

    return root.toString().replace(/-/g, ".")
}



 const applySimplificationRules = (root) => {

     // Attempt to Simplify the operators
     if (root.args && root.args.length === 2) {

         // Apply Anulment Law
         if (root.isOperatorNode && root.op === '-' ) {
             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if ((leftChild.isConstantNode && leftChild.value === '0') ||
                 (rightChild.isConstantNode && rightChild.value === '0') ) {
                 return new math.expression.node.ConstantNode(0)
             }
         } else if (root.isOperatorNode && root.op === '+') {
             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if ((leftChild.isConstantNode && leftChild.value === '1') ||
                 (rightChild.isConstantNode && rightChild.value === '1')) {
                 return new math.expression.node.ConstantNode(1)
             }
         }
         // End of Anulment Rule

         // Apply Identity Law
         if (root.isOperatorNode && root.op === '+' ) {

             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if (leftChild.isConstantNode && leftChild.value === '0') {
                 return rightChild.clone()
             } else if (rightChild.isConstantNode && rightChild.value === '0') {
                 return leftChild.clone()
             }
         } else if (root.isOperatorNode && root.op === '-') {

             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if (leftChild.isConstantNode && leftChild.value === '1') {
                 return rightChild.clone()
             } else if (rightChild.isConstantNode && rightChild.value === '1') {
                 return leftChild.clone()
             }
         }
         // End of Identity Rule

         // Apply Idempotent Law
         if (root.isOperatorNode && (root.op === '+' || root.op === '-')) {

             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if (leftChild.isSymbolNode && rightChild.isSymbolNode && leftChild.name === rightChild.name) {
                 return new math.expression.node.SymbolNode(rightChild.name)
             }
         }
         // End of Idempotent Law

         // Apply Complement Law
         if (root.isOperatorNode && root.op === '-' ) {

             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if (rightChild.isOperatorNode && rightChild.op === '~' ) {
                 // Clear parent reference when doing comparison
                 leftChild.parent = null
                 leftChild.position = 0

                 rightChild.args[0].parent = null
                 rightChild.args[0].position = 0

                 if (leftChild.equals(rightChild.args[0])) {
                     return new math.expression.node.ConstantNode(0)
                 }
             } else if (leftChild.isOperatorNode && leftChild.op === '~' ) {
                 // Clear parent reference when doing comparison
                 rightChild.parent = null
                 rightChild.position = 0

                 leftChild.args[0].parent = null
                 leftChild.args[0].position = 0

                 if (rightChild.equals(leftChild.args[0])) {
                     return new math.expression.node.ConstantNode(0)
                 }
             }
         } else if (root.isOperatorNode && root.op === '+') {

             const leftChild = root.args[0]
             const rightChild = root.args[1]

             if (rightChild.isOperatorNode && rightChild.op === '~' ) {
                 // Clear parent reference when doing comparison
                 leftChild.parent = null
                 leftChild.position = 0

                 rightChild.args[0].parent = null
                 rightChild.args[0].position = 0

                 if (leftChild.equals(rightChild.args[0])) {
                     return new math.expression.node.ConstantNode(1)
                 }
             } else if (leftChild.isOperatorNode && leftChild.op === '~' ) {
                 // Clear parent reference when doing comparison
                 rightChild.parent = null
                 rightChild.position = 0

                 leftChild.args[0].parent = null
                 leftChild.args[0].position = 0

                 if (rightChild.equals(leftChild.args[0])) {
                     return new math.expression.node.ConstantNode(1)
                 }
             }
         }
         // End of Complement Law
     }
     return root
 }