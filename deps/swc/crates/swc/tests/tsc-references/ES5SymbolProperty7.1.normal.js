//// [ES5SymbolProperty7.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var Symbol;
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    _proto[Symbol.iterator] = function() {};
    return C;
}();
(new C)[Symbol.iterator];
