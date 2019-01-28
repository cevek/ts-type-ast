import * as ts from 'typescript';
import { typeAST } from '../src/typeAST';
import { snapshot } from './snapshot';
import { writeFileSync } from 'fs';

const file = __dirname + '/test-file.ts';
const program = ts.createProgram({ rootNames: [file], options: { target: ts.ScriptTarget.Latest, strict: true } });
const checker = program.getTypeChecker();
const sourceFile = program.getSourceFile(file)!;
const types = typeAST(checker, sourceFile);
if (process.argv.slice(-1)[0] === 'create-snapshot') {
    writeFileSync(__dirname + '/snapshot.ts', 'export const snapshot = ' + JSON.stringify(types, undefined, 4));
}

for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (JSON.stringify(snapshot[i]) !== JSON.stringify(type)) {
        throw new Error(type.name + ' is not same');
    }
}

// console.log(types);
