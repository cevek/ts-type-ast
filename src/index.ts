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
        let pos;
        const prefix = 'getTypesFromTsFile parse ts error: ';
        if (diagnostic.file) {
            pos = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start || 0);
            console.error(
                prefix,
                diagnostic.messageText,
                diagnostic.file.fileName + ':' + (pos.line + 1) + ':' + pos.character,
            );
        } else {
            console.error(prefix, diagnostic.messageText);
        }
    });
    return getTypesFromSourceFile(checker, sourceFile);
}
