class MyClass {
    // also same behavior for static methods
    methodReturningClass() {
        return class SomeOtherClass {
            constructor(){
            // Assignment to foo goes here
            }
        };
    }
    constructor(args){
        this.foo = "bar";
    // Assignment to foo should go here
    }
}
