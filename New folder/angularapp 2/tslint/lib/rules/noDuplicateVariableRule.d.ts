import * as ts from "typescript";
import * as Lint from "../lint";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING_FACTORY: (name: string) => string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
