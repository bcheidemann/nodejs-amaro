f("foo" in m ? true : false);
f("foo" in m ? false : true);
f(g ? true : false);
f(foo() ? true : false);
f("bar" ? true : false);
f(5 ? true : false);
f(5.7 ? true : false);
f(x - y ? true : false);
f(x == y ? true : false);
f(x === y ? !0 : !1);
f(x < y ? !0 : false);
f(x <= y ? true : false);
f(x > y ? true : !1);
f(x >= y ? !0 : !1);
f(g ? false : true);
f(foo() ? false : true);
f("bar" ? false : true);
f(5 ? false : true);
f(5.7 ? false : true);
f(x - y ? false : true);
f(x == y ? !1 : !0);
f(x === y ? false : true);
f(x < y ? false : true);
f(x <= y ? false : !0);
f(x > y ? !1 : true);
f(x >= y ? !1 : !0);
