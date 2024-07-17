// @target: esnext, es2022, es2015
// @noEmitHelpers: true
// @noTypesAndSymbols: true

declare let dec: any;

class C {
    @dec static #field1 = 0;
}

@dec
class D {
    static #field1 = 0;
    static {
        this.#field1;
        this.#field1 = 1;
    }
}
