//// [usingDeclarationsInForOf.1.ts]
import { _ as _using_ctx } from "@swc/helpers/_/_using_ctx";
for (let d1 of [
    {
        [Symbol.dispose] () {}
    },
    null,
    void 0
])try {
    var _usingCtx = _using_ctx();
} catch (_) {
    _usingCtx.e = _;
} finally{
    _usingCtx.d();
}
