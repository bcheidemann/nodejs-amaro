//// [exportsAndImportsWithUnderscores2.ts]
"use strict";
//// [m1.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var R;
var _default = R = {
    "__esmodule": true,
    "__proto__": {}
};
//// [m2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _m1 = /*#__PURE__*/ _interop_require_default._(require("./m1"));
var __esmodule = _m1.default.__esmodule, __proto__ = _m1.default.__proto__;
