'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            Program: function Program(path, file) {
                // Inject `var CatchPromise = require('catch-promise');`
                var catchPromiseDeclaration = t.variableDeclaration('var', [t.variableDeclarator(t.identifier('regeneratorRuntime'), t.callExpression(t.identifier('require'), [t.stringLiteral('babel-regenerator-runtime')]))]);
                path.unshiftContainer('body', catchPromiseDeclaration);
            }
        }
    };
};