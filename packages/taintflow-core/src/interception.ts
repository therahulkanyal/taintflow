import {Node} from "./nodes";
import {EvaluatedExpression, Mixed} from "./taxonomy";
import * as taxonomy from "./taxonomy";

export type Interceptor = (node: Node) => EvaluatedExpression<Mixed>;

export type Runtime = {intercept: Interceptor} & typeof taxonomy;
