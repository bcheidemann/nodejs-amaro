//// [usingDeclarationsWithLegacyClassDecorators.12.ts]
System.register([
    "@swc/helpers/_/_ts_decorate",
    "@swc/helpers/_/_using_ctx"
], function(_export, _context) {
    "use strict";
    var _ts_decorate, _using_ctx;
    return {
        setters: [
            function(_ts_decorate1) {
                _ts_decorate = _ts_decorate1._;
            },
            function(_using_ctx1) {
                _using_ctx = _using_ctx1._;
            }
        ],
        execute: function() {
            try {
                var _usingCtx = _using_ctx();
                class C {
                }
                _export("D", C = _ts_decorate([
                    dec
                ], C));
                var after = _usingCtx.u(null);
            } catch (_) {
                _usingCtx.e = _;
            } finally{
                _usingCtx.d();
            }
        }
    };
});
