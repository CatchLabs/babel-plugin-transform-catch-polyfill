export default function ({ types: t }) {
    return {
        visitor: {
            Program(path, file) {
                let exp = t.variableDeclaration('var', [
                    t.variableDeclarator(
                        t.identifier('regeneratorRuntime'),
                        t.callExpression(
                            t.identifier('require'),
                            [t.stringLiteral('cloud/lib/regenerator-runtime')]
                        )
                    )
                ]);
                path.unshiftContainer('body', exp);

                exp = t.variableDeclaration('var', [
                    t.variableDeclarator(
                        t.identifier('Symbol'),
                        t.MemberExpression(
                            t.callExpression(
                                t.identifier('require'),
                                [t.stringLiteral('core-js/library')]
                            ),
                            t.identifier('Symbol'),
                            false
                        )
                    )
                ]);
                path.unshiftContainer('body', exp);
            }
        }
    };
}
