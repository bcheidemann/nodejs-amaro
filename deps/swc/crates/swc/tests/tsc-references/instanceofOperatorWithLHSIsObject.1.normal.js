//// [instanceofOperatorWithLHSIsObject.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _instanceof } from "@swc/helpers/_/_instanceof";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
var x1;
var x2;
var a;
var b;
var c;
var d;
var r1 = _instanceof(a, x1);
var r2 = _instanceof(b, x2);
var r3 = _instanceof(c, x1);
var r4 = _instanceof(d, x1);
