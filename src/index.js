export default function ({ types: t }) {
    return {
        visitor: {
            Program(path, file) {
                // Inject `var CatchPromise = require('catch-promise');`
                var catchPromiseDeclaration = t.variableDeclaration('var', [
                    t.variableDeclarator(
                        t.identifier('regeneratorRuntime'),
                        t.callExpression(
                            t.identifier('require'),
                            [t.stringLiteral('babel-regenerator-runtime')]
                        )
                    )
                ]);
                path.unshiftContainer('body', catchPromiseDeclaration);
            }
        }
    };
}
