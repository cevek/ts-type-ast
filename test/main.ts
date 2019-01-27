import * as ts from 'typescript';
import { typeAST } from '../src';
import { snapshotTypes } from './snapshot';

const file = __dirname + '/test-file.ts';
const program = ts.createProgram({ rootNames: [file], options: { target: ts.ScriptTarget.Latest, strict: true } });
const checker = program.getTypeChecker();
const sourceFile = program.getSourceFile(file)!;
const types = typeAST(checker, sourceFile);
for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (JSON.stringify(snapshotTypes[i]) !== JSON.stringify(type)) {
        throw new Error(type.name + ' is not same');
    }
}
// console.log(types);
