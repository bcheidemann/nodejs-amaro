export { x, y };
try {
    var _usingCtx = _using_ctx();
    var x = _usingCtx.u(A);
    var y = _usingCtx.a(B);
} catch (_) {
    _usingCtx.e = _;
} finally{
    await _usingCtx.d();
}
