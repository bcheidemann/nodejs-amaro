//// [nullishCoalescingOperatorInParameterInitializer.ts]
// https://github.com/microsoft/TypeScript/issues/36295
const a = ()=>undefined;
var _a;
((b = (_a = a()) !== null && _a !== void 0 ? _a : "d")=>{})();
