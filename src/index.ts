import * as ts from 'typescript';
import {getTypesFromSourceFile} from './typeAST';
export {getTypesFromSourceFile} from './typeAST';
export * from './types';

export function getTypesFromTsFile(fileName: string) {
    const program = ts.createProgram({
        options: {
            strict: true,
            module: ts.ModuleKind.ESNext,
        },
        rootNames: [fileName],
    });
    const checker = program.getTypeChecker();
    const sourceFile = program.getSourceFile(fileName)!;
    const diagnostics = [
        ...program.getGlobalDiagnostics(),
        ...program.getSyntacticDiagnostics(),
        ...program.getDeclarationDiagnostics(),
        ...program.getSemanticDiagnostics(),
    ];
    diagnostics.forEach(diagnostic => {
        console.error(diagnostic.messageText, {file: diagnostic.file, pos: diagnostic.start});
    });
    return getTypesFromSourceFile(checker, sourceFile);
}
