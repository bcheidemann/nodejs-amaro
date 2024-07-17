// Loaded from https://dev.jspm.io/npm:@jspm/core@1.1.1/nodelibs/chunk-cffba9d4.js


import { t as t$8 } from "./chunk-dac557ba.js";
import { h as h$3 } from "./chunk-0c2d1322.js";
import t$7 from "./buffer.js";
import a$2 from "./util.js";
import { s as string_decoder } from "./chunk-6e68c801.js";
import r$4 from "./events.js";
var e = r$4.EventEmitter;
var e$1 = {};
const t = {};

function n(e, n, r) {
  r || (r = Error);

  class o extends r {
    constructor(e, t, r) {
      super(function (e, t, r) {
        return "string" == typeof n ? n : n(e, t, r);
      }(e, t, r));
    }

  }

  o.prototype.name = r.name, o.prototype.code = e, t[e] = o;
}

function r(e, t) {
  if (Array.isArray(e)) {
    const n = e.length;
    return e = e.map(e => String(e)), n > 2 ? `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ` + e[n - 1] : 2 === n ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`;
  }

  return `of ${t} ${String(e)}`;
}

n("ERR_INVALID_OPT_VALUE", function (e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError), n("ERR_INVALID_ARG_TYPE", function (e, t, n) {
  let o;
  var E;
  let u;
  if ("string" == typeof t && (E = "not ", t.substr(0, E.length) === E) ? (o = "must not be", t = t.replace(/^not /, "")) : o = "must be", function (e, t, n) {
    return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
  }(e, " argument")) u = `The ${e} ${o} ${r(t, "type")}`;else {
    u = `The "${e}" ${function (e, t, n) {
      return "number" != typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n);
    }(e, ".") ? "property" : "argument"} ${o} ${r(t, "type")}`;
  }
  return u += `. Received type ${typeof n}`, u;
}, TypeError), n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), n("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
}), n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), n("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
}), n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), n("ERR_STREAM_WRITE_AFTER_END", "write after end"), n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), n("ERR_UNKNOWN_ENCODING", function (e) {
  return "Unknown encoding: " + e;
}, TypeError), n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e$1.codes = t;

var r$1 = function () {
  throw new Error("Readable.from is not available in the browser");
};

var r$2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;

function e$2(e) {
  try {
    if (!r$2.localStorage) return !1;
  } catch (r) {
    return !1;
  }

  var t = r$2.localStorage[e];
  return null != t && "true" === String(t).toLowerCase();
}

var t$1 = function (t, n) {
  if (e$2("noDeprecation")) return t;
  var o = !1;
  return function () {
    if (!o) {
      if (e$2("throwDeprecation")) throw new Error(n);
      e$2("traceDeprecation") ? console.trace(n) : console.warn(n), o = !0;
    }

    return t.apply(this || r$2, arguments);
  };
};

function u(e, t) {
  var n = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }

  return n;
}

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function h(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}

var c = t$7.Buffer,
    b = a$2.inspect,
    p = b && b.custom || "inspect";

var g = function () {
  function e() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, e), this.head = null, this.tail = null, this.length = 0;
  }

  var t, n;
  return t = e, (n = [{
    key: "push",
    value: function (e) {
      var t = {
        data: e,
        next: null
      };
      this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
    }
  }, {
    key: "unshift",
    value: function (e) {
      var t = {
        data: e,
        next: this.head
      };
      0 === this.length && (this.tail = t), this.head = t, ++this.length;
    }
  }, {
    key: "shift",
    value: function () {
      if (0 !== this.length) {
        var e = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
      }
    }
  }, {
    key: "clear",
    value: function () {
      this.head = this.tail = null, this.length = 0;
    }
  }, {
    key: "join",
    value: function (e) {
      if (0 === this.length) return "";

      for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;

      return n;
    }
  }, {
    key: "concat",
    value: function (e) {
      if (0 === this.length) return c.alloc(0);

      for (var t, n, r, i = c.allocUnsafe(e >>> 0), a = this.head, o = 0; a;) t = a.data, n = i, r = o, void c.prototype.copy.call(t, n, r), o += a.data.length, a = a.next;

      return i;
    }
  }, {
    key: "consume",
    value: function (e, t) {
      var n;
      return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n;
    }
  }, {
    key: "first",
    value: function () {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function (e) {
      var t = this.head,
          n = 1,
          r = t.data;

      for (e -= r.length; t = t.next;) {
        var i = t.data,
            a = e > i.length ? i.length : e;

        if (a === i.length ? r += i : r += i.slice(0, e), 0 == (e -= a)) {
          a === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(a));
          break;
        }

        ++n;
      }

      return this.length -= n, r;
    }
  }, {
    key: "_getBuffer",
    value: function (e) {
      var t = c.allocUnsafe(e),
          n = this.head,
          r = 1;

      for (n.data.copy(t), e -= n.data.length; n = n.next;) {
        var i = n.data,
            a = e > i.length ? i.length : e;

        if (i.copy(t, t.length - e, 0, a), 0 == (e -= a)) {
          a === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = i.slice(a));
          break;
        }

        ++r;
      }

      return this.length -= r, t;
    }
  }, {
    key: p,
    value: function (e, t) {
      return b(this, function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach(function (t) {
            f(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }({}, t, {
        depth: 0,
        customInspect: !1
      }));
    }
  }]) && h(t.prototype, n), e;
}(),
    y = h$3;

function w(e, t) {
  _(e, t), v(e);
}

function v(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}

function _(e, t) {
  e.emit("error", t);
}

var m = {
  destroy: function (e, t) {
    var n = this,
        r = this._readableState && this._readableState.destroyed,
        i = this._writableState && this._writableState.destroyed;
    return r || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, y.nextTick(_, this, e)) : y.nextTick(_, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
      !t && e ? n._writableState ? n._writableState.errorEmitted ? y.nextTick(v, n) : (n._writableState.errorEmitted = !0, y.nextTick(w, n, e)) : y.nextTick(w, n, e) : t ? (y.nextTick(v, n), t(e)) : y.nextTick(v, n);
    }), this);
  },
  undestroy: function () {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  },
  errorOrDestroy: function (e, t) {
    var n = e._readableState,
        r = e._writableState;
    n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t);
  }
},
    S = e$1.codes.ERR_INVALID_OPT_VALUE;
var R = {
  getHighWaterMark: function (e, t, n, r) {
    var i = function (e, t, n) {
      return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
    }(t, r, n);

    if (null != i) {
      if (!isFinite(i) || Math.floor(i) !== i || i < 0) throw new S(r ? n : "highWaterMark", i);
      return Math.floor(i);
    }

    return e.objectMode ? 16 : 16384;
  }
},
    k = e$1.codes.ERR_STREAM_PREMATURE_CLOSE;

function E() {}

var M,
    j = function e(t, n, r) {
  if ("function" == typeof n) return e(t, null, n);
  n || (n = {}), r = function (e) {
    var t = !1;
    return function () {
      if (!t) {
        t = !0;

        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];

        e.apply(this, r);
      }
    };
  }(r || E);

  var i = n.readable || !1 !== n.readable && t.readable,
      a = n.writable || !1 !== n.writable && t.writable,
      o = function () {
    t.writable || l();
  },
      s = t._writableState && t._writableState.finished,
      l = function () {
    a = !1, s = !0, i || r.call(t);
  },
      d = t._readableState && t._readableState.endEmitted,
      u = function () {
    i = !1, d = !0, a || r.call(t);
  },
      f = function (e) {
    r.call(t, e);
  },
      h = function () {
    var e;
    return i && !d ? (t._readableState && t._readableState.ended || (e = new k()), r.call(t, e)) : a && !s ? (t._writableState && t._writableState.ended || (e = new k()), r.call(t, e)) : void 0;
  },
      c = function () {
    t.req.on("finish", l);
  };

  return !function (e) {
    return e.setHeader && "function" == typeof e.abort;
  }(t) ? a && !t._writableState && (t.on("end", o), t.on("close", o)) : (t.on("complete", l), t.on("abort", h), t.req ? c() : t.on("request", c)), t.on("end", u), t.on("finish", l), !1 !== n.error && t.on("error", f), t.on("close", h), function () {
    t.removeListener("complete", l), t.removeListener("abort", h), t.removeListener("request", c), t.req && t.req.removeListener("finish", l), t.removeListener("end", o), t.removeListener("close", o), t.removeListener("finish", l), t.removeListener("end", u), t.removeListener("error", f), t.removeListener("close", h);
  };
},
    O = h$3;

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var P = j,
    x = Symbol("lastResolve"),
    L = Symbol("lastReject"),
    D = Symbol("error"),
    C = Symbol("ended"),
    A = Symbol("lastPromise"),
    q = Symbol("handlePromise"),
    W = Symbol("stream");

function B(e, t) {
  return {
    value: e,
    done: t
  };
}

function I(e) {
  var t = e[x];

  if (null !== t) {
    var n = e[W].read();
    null !== n && (e[A] = null, e[x] = null, e[L] = null, t(B(n, !1)));
  }
}

function N(e) {
  O.nextTick(I, e);
}

var U = Object.getPrototypeOf(function () {}),
    H = Object.setPrototypeOf((T(M = {
  get stream() {
    return this[W];
  },

  next: function () {
    var e = this,
        t = this[D];
    if (null !== t) return Promise.reject(t);
    if (this[C]) return Promise.resolve(B(void 0, !0));
    if (this[W].destroyed) return new Promise(function (t, n) {
      O.nextTick(function () {
        e[D] ? n(e[D]) : t(B(void 0, !0));
      });
    });
    var n,
        r = this[A];
    if (r) n = new Promise(function (e, t) {
      return function (n, r) {
        e.then(function () {
          if (t[C]) return n(B(void 0, !0)), void 0;
          t[q](n, r);
        }, r);
      };
    }(r, this));else {
      var i = this[W].read();
      if (null !== i) return Promise.resolve(B(i, !1));
      n = new Promise(this[q]);
    }
    return this[A] = n, n;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), T(M, "return", function () {
  var e = this;
  return new Promise(function (t, n) {
    e[W].destroy(null, function (e) {
      if (e) return n(e), void 0;
      t(B(void 0, !0));
    });
  });
}), M), U),
    F = function (e) {
  var t,
      n = Object.create(H, (T(t = {}, W, {
    value: e,
    writable: !0
  }), T(t, x, {
    value: null,
    writable: !0
  }), T(t, L, {
    value: null,
    writable: !0
  }), T(t, D, {
    value: null,
    writable: !0
  }), T(t, C, {
    value: e._readableState.endEmitted,
    writable: !0
  }), T(t, q, {
    value: function (e, t) {
      var r = n[W].read();
      r ? (n[A] = null, n[x] = null, n[L] = null, e(B(r, !1))) : (n[x] = e, n[L] = t);
    },
    writable: !0
  }), t));
  return n[A] = null, P(e, function (e) {
    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
      var t = n[L];
      return null !== t && (n[A] = null, n[x] = null, n[L] = null, t(e)), n[D] = e, void 0;
    }

    var r = n[x];
    null !== r && (n[A] = null, n[x] = null, n[L] = null, r(B(void 0, !0))), n[C] = !0;
  }), e.on("readable", N.bind(null, n)), n;
},
    V = {},
    G = !1,
    Y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;

function K() {
  if (G) return V;
  G = !0;
  var d,
      u = h$3;
  V = C, C.ReadableState = D;
  r$4.EventEmitter;

  var f = function (e, t) {
    return e.listeners(t).length;
  },
      h = e,
      c = t$7.Buffer,
      b = Y.Uint8Array || function () {};

  var p,
      y = a$2;
  p = y && y.debuglog ? y.debuglog("stream") : function () {};

  var w,
      v,
      _,
      S = g,
      k = m,
      E = R.getHighWaterMark,
      M = e$1.codes,
      j = M.ERR_INVALID_ARG_TYPE,
      O = M.ERR_STREAM_PUSH_AFTER_EOF,
      T = M.ERR_METHOD_NOT_IMPLEMENTED,
      P = M.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;

  t$8(C, h);
  var x = k.errorOrDestroy,
      L = ["error", "close", "destroy", "pause", "resume"];

  function D(e, t, n) {
    d = d || ee(), e = e || {}, "boolean" != typeof n && (n = t instanceof d), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = E(this, e, "readableHighWaterMark", n), this.buffer = new S(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (w || (w = string_decoder.StringDecoder), this.decoder = new w(e.encoding), this.encoding = e.encoding);
  }

  function C(e) {
    if (d = d || ee(), !(this instanceof C)) return new C(e);
    var t = this instanceof d;
    this._readableState = new D(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), h.call(this);
  }

  function A(e, t, n, r, i) {
    p("readableAddChunk", t);
    var a,
        o = e._readableState;
    if (null === t) o.reading = !1, function (e, t) {
      if (p("onEofChunk"), t.ended) return;

      if (t.decoder) {
        var n = t.decoder.end();
        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
      }

      t.ended = !0, t.sync ? B(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, I(e)));
    }(e, o);else if (i || (a = function (e, t) {
      var n;
      r = t, c.isBuffer(r) || r instanceof b || "string" == typeof t || void 0 === t || e.objectMode || (n = new j("chunk", ["string", "Buffer", "Uint8Array"], t));
      var r;
      return n;
    }(o, t)), a) x(e, a);else if (o.objectMode || t && t.length > 0) {
      if ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
        return c.from(e);
      }(t)), r) o.endEmitted ? x(e, new P()) : q(e, o, t, !0);else if (o.ended) x(e, new O());else {
        if (o.destroyed) return !1;
        o.reading = !1, o.decoder && !n ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? q(e, o, t, !1) : N(e, o)) : q(e, o, t, !1);
      }
    } else r || (o.reading = !1, N(e, o));
    return !o.ended && (o.length < o.highWaterMark || 0 === o.length);
  }

  function q(e, t, n, r) {
    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && B(e)), N(e, t);
  }

  Object.defineProperty(C.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
      this._readableState && (this._readableState.destroyed = e);
    }
  }), C.prototype.destroy = k.destroy, C.prototype._undestroy = k.undestroy, C.prototype._destroy = function (e, t) {
    t(e);
  }, C.prototype.push = function (e, t) {
    var n,
        r = this._readableState;
    return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t), t = ""), n = !0), A(this, e, t, !1, n);
  }, C.prototype.unshift = function (e) {
    return A(this, e, null, !0, !1);
  }, C.prototype.isPaused = function () {
    return !1 === this._readableState.flowing;
  }, C.prototype.setEncoding = function (e) {
    w || (w = string_decoder.StringDecoder);
    var t = new w(e);
    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;

    for (var n = this._readableState.buffer.head, r = ""; null !== n;) r += t.write(n.data), n = n.next;

    return this._readableState.buffer.clear(), "" !== r && this._readableState.buffer.push(r), this._readableState.length = r.length, this;
  };

  function W(e, t) {
    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
      return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }

  function B(e) {
    var t = e._readableState;
    p("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, u.nextTick(I, e));
  }

  function I(e) {
    var t = e._readableState;
    p("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, J(e);
  }

  function N(e, t) {
    t.readingMore || (t.readingMore = !0, u.nextTick(U, e, t));
  }

  function U(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
      var n = t.length;
      if (p("maybeReadMore read 0"), e.read(0), n === t.length) break;
    }

    t.readingMore = !1;
  }

  function H(e) {
    var t = e._readableState;
    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
  }

  function K(e) {
    p("readable nexttick read 0"), e.read(0);
  }

  function z(e, t) {
    p("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), J(e), t.flowing && !t.reading && e.read(0);
  }

  function J(e) {
    var t = e._readableState;

    for (p("flow", t.flowing); t.flowing && null !== e.read(););
  }

  function Q(e, t) {
    return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
    var n;
  }

  function X(e) {
    var t = e._readableState;
    p("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, u.nextTick(Z, t, e));
  }

  function Z(e, t) {
    if (p("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
      var n = t._writableState;
      (!n || n.autoDestroy && n.finished) && t.destroy();
    }
  }

  function $(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

    return -1;
  }

  return C.prototype.read = function (e) {
    p("read", e), e = parseInt(e, 10);
    var t = this._readableState,
        n = e;
    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? X(this) : B(this), null;
    if (0 === (e = W(e, t)) && t.ended) return 0 === t.length && X(this), null;
    var r,
        i = t.needReadable;
    return p("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", i = !0), t.ended || t.reading ? p("reading or ended", i = !1) : i && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = W(n, t))), null === (r = e > 0 ? Q(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && X(this)), null !== r && this.emit("data", r), r;
  }, C.prototype._read = function (e) {
    x(this, new T("_read()"));
  }, C.prototype.pipe = function (e, t) {
    var n = this,
        r = this._readableState;

    switch (r.pipesCount) {
      case 0:
        r.pipes = e;
        break;

      case 1:
        r.pipes = [r.pipes, e];
        break;

      default:
        r.pipes.push(e);
    }

    r.pipesCount += 1, p("pipe count=%d opts=%j", r.pipesCount, t);
    var i = (!t || !1 !== t.end) && e !== u.stdout && e !== u.stderr ? o : g;

    function a(t, i) {
      p("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, p("cleanup"), e.removeListener("close", c), e.removeListener("finish", b), e.removeListener("drain", s), e.removeListener("error", h), e.removeListener("unpipe", a), n.removeListener("end", o), n.removeListener("end", g), n.removeListener("data", d), l = !0, !r.awaitDrain || e._writableState && !e._writableState.needDrain || s());
    }

    function o() {
      p("onend"), e.end();
    }

    r.endEmitted ? u.nextTick(i) : n.once("end", i), e.on("unpipe", a);

    var s = function (e) {
      return function () {
        var t = e._readableState;
        p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && f(e, "data") && (t.flowing = !0, J(e));
      };
    }(n);

    e.on("drain", s);
    var l = !1;

    function d(t) {
      p("ondata");
      var i = e.write(t);
      p("dest.write", i), !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== $(r.pipes, e)) && !l && (p("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause());
    }

    function h(t) {
      p("onerror", t), g(), e.removeListener("error", h), 0 === f(e, "error") && x(e, t);
    }

    function c() {
      e.removeListener("finish", b), g();
    }

    function b() {
      p("onfinish"), e.removeListener("close", c), g();
    }

    function g() {
      p("unpipe"), n.unpipe(e);
    }

    return n.on("data", d), function (e, t, n) {
      if ("function" == typeof e.prependListener) return e.prependListener(t, n);
      e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n);
    }(e, "error", h), e.once("close", c), e.once("finish", b), e.emit("pipe", n), r.flowing || (p("pipe resume"), n.resume()), e;
  }, C.prototype.unpipe = function (e) {
    var t = this._readableState,
        n = {
      hasUnpiped: !1
    };
    if (0 === t.pipesCount) return this;
    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;

    if (!e) {
      var r = t.pipes,
          i = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;

      for (var a = 0; a < i; a++) r[a].emit("unpipe", this, {
        hasUnpiped: !1
      });

      return this;
    }

    var o = $(t.pipes, e);
    return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this;
  }, C.prototype.on = function (e, t) {
    var n = h.prototype.on.call(this, e, t),
        r = this._readableState;
    return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, p("on readable", r.length, r.reading), r.length ? B(this) : r.reading || u.nextTick(K, this))), n;
  }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function (e, t) {
    var n = h.prototype.removeListener.call(this, e, t);
    return "readable" === e && u.nextTick(H, this), n;
  }, C.prototype.removeAllListeners = function (e) {
    var t = h.prototype.removeAllListeners.apply(this, arguments);
    return "readable" !== e && void 0 !== e || u.nextTick(H, this), t;
  }, C.prototype.resume = function () {
    var e = this._readableState;
    return e.flowing || (p("resume"), e.flowing = !e.readableListening, function (e, t) {
      t.resumeScheduled || (t.resumeScheduled = !0, u.nextTick(z, e, t));
    }(this, e)), e.paused = !1, this;
  }, C.prototype.pause = function () {
    return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  }, C.prototype.wrap = function (e) {
    var t = this,
        n = this._readableState,
        r = !1;

    for (var i in e.on("end", function () {
      if (p("wrapped end"), n.decoder && !n.ended) {
        var e = n.decoder.end();
        e && e.length && t.push(e);
      }

      t.push(null);
    }), e.on("data", function (i) {
      (p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()));
    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
      return function () {
        return e[t].apply(e, arguments);
      };
    }(i));

    for (var a = 0; a < L.length; a++) e.on(L[a], this.emit.bind(this, L[a]));

    return this._read = function (t) {
      p("wrapped _read", t), r && (r = !1, e.resume());
    }, this;
  }, "function" == typeof Symbol && (C.prototype[Symbol.asyncIterator] = function () {
    return void 0 === v && (v = F), v(this);
  }), Object.defineProperty(C.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(C.prototype, "readableBuffer", {
    enumerable: !1,
    get: function () {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(C.prototype, "readableFlowing", {
    enumerable: !1,
    get: function () {
      return this._readableState.flowing;
    },
    set: function (e) {
      this._readableState && (this._readableState.flowing = e);
    }
  }), C._fromList = Q, Object.defineProperty(C.prototype, "readableLength", {
    enumerable: !1,
    get: function () {
      return this._readableState.length;
    }
  }), "function" == typeof Symbol && (C.from = function (e, t) {
    return void 0 === _ && (_ = r$1), _(C, e, t);
  }), V;
}

var z = {},
    J = !1,
    Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;

function X() {
  if (J) return z;
  J = !0;
  var e$2,
      r = h$3;

  function s(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function () {
      !function (e, t, n) {
        var r = e.entry;
        e.entry = null;

        for (; r;) {
          var i = r.callback;
          t.pendingcb--, i(n), r = r.next;
        }

        t.corkedRequestsFree.next = e;
      }(t, e);
    };
  }

  z = P, P.WritableState = T;

  var l = {
    deprecate: t$1
  },
      u = e,
      f = t$7.Buffer,
      h = Q.Uint8Array || function () {};

  var c,
      b = m,
      p = R.getHighWaterMark,
      g = e$1.codes,
      y = g.ERR_INVALID_ARG_TYPE,
      w = g.ERR_METHOD_NOT_IMPLEMENTED,
      v = g.ERR_MULTIPLE_CALLBACK,
      _ = g.ERR_STREAM_CANNOT_PIPE,
      S = g.ERR_STREAM_DESTROYED,
      k = g.ERR_STREAM_NULL_VALUES,
      E = g.ERR_STREAM_WRITE_AFTER_END,
      M = g.ERR_UNKNOWN_ENCODING,
      j = b.errorOrDestroy;

  function O() {}

  function T(t, n, i) {
    e$2 = e$2 || ee(), t = t || {}, "boolean" != typeof i && (i = n instanceof e$2), this.objectMode = !!t.objectMode, i && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = p(this, t, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var a = !1 === t.decodeStrings;
    this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
      !function (e, t) {
        var n = e._writableState,
            i = n.sync,
            a = n.writecb;
        if ("function" != typeof a) throw new v();
        if (function (e) {
          e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
        }(n), t) !function (e, t, n, i, a) {
          --t.pendingcb, n ? (r.nextTick(a, i), r.nextTick(q, e, t), e._writableState.errorEmitted = !0, j(e, i)) : (a(i), e._writableState.errorEmitted = !0, j(e, i), q(e, t));
        }(e, n, i, t, a);else {
          var o = C(n) || e.destroyed;
          o || n.corked || n.bufferProcessing || !n.bufferedRequest || D(e, n), i ? r.nextTick(L, e, n, o, a) : L(e, n, o, a);
        }
      }(n, e);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this);
  }

  function P(t) {
    var n = this instanceof (e$2 = e$2 || ee());
    if (!n && !c.call(P, this)) return new P(t);
    this._writableState = new T(t, this, n), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), u.call(this);
  }

  function x(e, t, n, r, i, a, o) {
    t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new S("write")) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1;
  }

  function L(e, t, n, r) {
    n || !function (e, t) {
      0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
    }(e, t), t.pendingcb--, r(), q(e, t);
  }

  function D(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;

    if (e._writev && n && n.next) {
      var r = t.bufferedRequestCount,
          i = new Array(r),
          a = t.corkedRequestsFree;
      a.entry = n;

      for (var o = 0, l = !0; n;) i[o] = n, n.isBuf || (l = !1), n = n.next, o += 1;

      i.allBuffers = l, x(e, t, !0, t.length, i, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new s(t), t.bufferedRequestCount = 0;
    } else {
      for (; n;) {
        var d = n.chunk,
            u = n.encoding,
            f = n.callback;
        if (x(e, t, !1, t.objectMode ? 1 : d.length, d, u, f), n = n.next, t.bufferedRequestCount--, t.writing) break;
      }

      null === n && (t.lastBufferedRequest = null);
    }

    t.bufferedRequest = n, t.bufferProcessing = !1;
  }

  function C(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
  }

  function A(e, t) {
    e._final(function (n) {
      t.pendingcb--, n && j(e, n), t.prefinished = !0, e.emit("prefinish"), q(e, t);
    });
  }

  function q(e, t) {
    var n = C(t);

    if (n && (!function (e, t) {
      t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, r.nextTick(A, e, t)));
    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
      var i = e._readableState;
      (!i || i.autoDestroy && i.endEmitted) && e.destroy();
    }

    return n;
  }

  return t$8(P, u), T.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;

    return t;
  }, function () {
    try {
      Object.defineProperty(T.prototype, "buffer", {
        get: l.deprecate(function () {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (e) {}
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(P, Symbol.hasInstance, {
    value: function (e) {
      return !!c.call(this, e) || this === P && e && e._writableState instanceof T;
    }
  })) : c = function (e) {
    return e instanceof this;
  }, P.prototype.pipe = function () {
    j(this, new _());
  }, P.prototype.write = function (e, t, n) {
    var i,
        a = this._writableState,
        o = !1,
        s = !a.objectMode && (i = e, f.isBuffer(i) || i instanceof h);
    return s && !f.isBuffer(e) && (e = function (e) {
      return f.from(e);
    }(e)), "function" == typeof t && (n = t, t = null), s ? t = "buffer" : t || (t = a.defaultEncoding), "function" != typeof n && (n = O), a.ending ? function (e, t) {
      var n = new E();
      j(e, n), r.nextTick(t, n);
    }(this, n) : (s || function (e, t, n, i) {
      var a;
      return null === n ? a = new k() : "string" == typeof n || t.objectMode || (a = new y("chunk", ["string", "Buffer"], n)), !a || (j(e, a), r.nextTick(i, a), !1);
    }(this, a, e, n)) && (a.pendingcb++, o = function (e, t, n, r, i, a) {
      if (!n) {
        var o = function (e, t, n) {
          e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = f.from(t, n));
          return t;
        }(t, r, i);

        r !== o && (n = !0, i = "buffer", r = o);
      }

      var s = t.objectMode ? 1 : r.length;
      t.length += s;
      var l = t.length < t.highWaterMark;
      l || (t.needDrain = !0);

      if (t.writing || t.corked) {
        var d = t.lastBufferedRequest;
        t.lastBufferedRequest = {
          chunk: r,
          encoding: i,
          isBuf: n,
          callback: a,
          next: null
        }, d ? d.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
      } else x(e, t, !1, s, r, i, a);

      return l;
    }(this, a, s, e, t, n)), o;
  }, P.prototype.cork = function () {
    this._writableState.corked++;
  }, P.prototype.uncork = function () {
    var e = this._writableState;
    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || D(this, e));
  }, P.prototype.setDefaultEncoding = function (e) {
    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new M(e);
    return this._writableState.defaultEncoding = e, this;
  }, Object.defineProperty(P.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(P.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    }
  }), P.prototype._write = function (e, t, n) {
    n(new w("_write()"));
  }, P.prototype._writev = null, P.prototype.end = function (e, t, n) {
    var i = this._writableState;
    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function (e, t, n) {
      t.ending = !0, q(e, t), n && (t.finished ? r.nextTick(n) : e.once("finish", n));
      t.ended = !0, e.writable = !1;
    }(this, i, n), this;
  }, Object.defineProperty(P.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    }
  }), Object.defineProperty(P.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function (e) {
      this._writableState && (this._writableState.destroyed = e);
    }
  }), P.prototype.destroy = b.destroy, P.prototype._undestroy = b.undestroy, P.prototype._destroy = function (e, t) {
    t(e);
  }, z;
}

var Z = {},
    $ = !1;

function ee() {
  if ($) return Z;
  $ = !0;

  var e = h$3,
      t = Object.keys || function (e) {
    var t = [];

    for (var n in e) t.push(n);

    return t;
  };

  Z = d;
  var n = K(),
      r = X();
  t$8(d, n);

  for (var a = t(r.prototype), s = 0; s < a.length; s++) {
    var l = a[s];
    d.prototype[l] || (d.prototype[l] = r.prototype[l]);
  }

  function d(e) {
    if (!(this instanceof d)) return new d(e);
    n.call(this, e), r.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", u)));
  }

  function u() {
    this._writableState.ended || e.nextTick(f, this);
  }

  function f(e) {
    e.end();
  }

  return Object.defineProperty(d.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(d.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(d.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    }
  }), Object.defineProperty(d.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (e) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    }
  }), Z;
}

var t$2 = K();
var r$3 = e$1.codes.ERR_STREAM_PREMATURE_CLOSE;

function t$3() {}

var n$1 = function e(n, o, a) {
  if ("function" == typeof o) return e(n, null, o);
  o || (o = {}), a = function (e) {
    var r = !1;
    return function () {
      if (!r) {
        r = !0;

        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];

        e.apply(this, n);
      }
    };
  }(a || t$3);

  var i = o.readable || !1 !== o.readable && n.readable,
      l = o.writable || !1 !== o.writable && n.writable,
      c = function () {
    n.writable || s();
  },
      f = n._writableState && n._writableState.finished,
      s = function () {
    l = !1, f = !0, i || a.call(n);
  },
      u = n._readableState && n._readableState.endEmitted,
      d = function () {
    i = !1, u = !0, l || a.call(n);
  },
      b = function (e) {
    a.call(n, e);
  },
      v = function () {
    var e;
    return i && !u ? (n._readableState && n._readableState.ended || (e = new r$3()), a.call(n, e)) : l && !f ? (n._writableState && n._writableState.ended || (e = new r$3()), a.call(n, e)) : void 0;
  },
      m = function () {
    n.req.on("finish", s);
  };

  return !function (e) {
    return e.setHeader && "function" == typeof e.abort;
  }(n) ? l && !n._writableState && (n.on("end", c), n.on("close", c)) : (n.on("complete", s), n.on("abort", v), n.req ? m() : n.on("request", m)), n.on("end", d), n.on("finish", s), !1 !== o.error && n.on("error", b), n.on("close", v), function () {
    n.removeListener("complete", s), n.removeListener("abort", v), n.removeListener("request", m), n.req && n.req.removeListener("finish", s), n.removeListener("end", c), n.removeListener("close", c), n.removeListener("finish", s), n.removeListener("end", d), n.removeListener("error", b), n.removeListener("close", v);
  };
};

function f$1(e, t) {
  var n = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }

  return n;
}

function h$1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function c$1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}

var b$1 = t$7.Buffer,
    p$1 = a$2.inspect,
    g$1 = p$1 && p$1.custom || "inspect";

var y$1 = function () {
  function e() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, e), this.head = null, this.tail = null, this.length = 0;
  }

  var t, n;
  return t = e, (n = [{
    key: "push",
    value: function (e) {
      var t = {
        data: e,
        next: null
      };
      this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
    }
  }, {
    key: "unshift",
    value: function (e) {
      var t = {
        data: e,
        next: this.head
      };
      0 === this.length && (this.tail = t), this.head = t, ++this.length;
    }
  }, {
    key: "shift",
    value: function () {
      if (0 !== this.length) {
        var e = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
      }
    }
  }, {
    key: "clear",
    value: function () {
      this.head = this.tail = null, this.length = 0;
    }
  }, {
    key: "join",
    value: function (e) {
      if (0 === this.length) return "";

      for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;

      return n;
    }
  }, {
    key: "concat",
    value: function (e) {
      if (0 === this.length) return b$1.alloc(0);

      for (var t, n, r, i = b$1.allocUnsafe(e >>> 0), a = this.head, o = 0; a;) t = a.data, n = i, r = o, void b$1.prototype.copy.call(t, n, r), o += a.data.length, a = a.next;

      return i;
    }
  }, {
    key: "consume",
    value: function (e, t) {
      var n;
      return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n;
    }
  }, {
    key: "first",
    value: function () {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function (e) {
      var t = this.head,
          n = 1,
          r = t.data;

      for (e -= r.length; t = t.next;) {
        var i = t.data,
            a = e > i.length ? i.length : e;

        if (a === i.length ? r += i : r += i.slice(0, e), 0 == (e -= a)) {
          a === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(a));
          break;
        }

        ++n;
      }

      return this.length -= n, r;
    }
  }, {
    key: "_getBuffer",
    value: function (e) {
      var t = b$1.allocUnsafe(e),
          n = this.head,
          r = 1;

      for (n.data.copy(t), e -= n.data.length; n = n.next;) {
        var i = n.data,
            a = e > i.length ? i.length : e;

        if (i.copy(t, t.length - e, 0, a), 0 == (e -= a)) {
          a === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = i.slice(a));
          break;
        }

        ++r;
      }

      return this.length -= r, t;
    }
  }, {
    key: g$1,
    value: function (e, t) {
      return p$1(this, function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f$1(Object(n), !0).forEach(function (t) {
            h$1(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f$1(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }({}, t, {
        depth: 0,
        customInspect: !1
      }));
    }
  }]) && c$1(t.prototype, n), e;
}(),
    w$1 = h$3;

function _$1(e, t) {
  m$1(e, t), v$1(e);
}

function v$1(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}

function m$1(e, t) {
  e.emit("error", t);
}

var S$1 = {
  destroy: function (e, t) {
    var n = this,
        r = this._readableState && this._readableState.destroyed,
        i = this._writableState && this._writableState.destroyed;
    return r || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, w$1.nextTick(m$1, this, e)) : w$1.nextTick(m$1, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
      !t && e ? n._writableState ? n._writableState.errorEmitted ? w$1.nextTick(v$1, n) : (n._writableState.errorEmitted = !0, w$1.nextTick(_$1, n, e)) : w$1.nextTick(_$1, n, e) : t ? (w$1.nextTick(v$1, n), t(e)) : w$1.nextTick(v$1, n);
    }), this);
  },
  undestroy: function () {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  },
  errorOrDestroy: function (e, t) {
    var n = e._readableState,
        r = e._writableState;
    n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t);
  }
},
    R$1 = e$1.codes.ERR_INVALID_OPT_VALUE;
var k$1,
    E$1 = {
  getHighWaterMark: function (e, t, n, r) {
    var i = function (e, t, n) {
      return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
    }(t, r, n);

    if (null != i) {
      if (!isFinite(i) || Math.floor(i) !== i || i < 0) throw new R$1(r ? n : "highWaterMark", i);
      return Math.floor(i);
    }

    return e.objectMode ? 16 : 16384;
  }
},
    M$1 = h$3;

function j$1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var O$1 = n$1,
    T$1 = Symbol("lastResolve"),
    x$1 = Symbol("lastReject"),
    P$1 = Symbol("error"),
    D$1 = Symbol("ended"),
    L$1 = Symbol("lastPromise"),
    C$1 = Symbol("handlePromise"),
    A$1 = Symbol("stream");

function W$1(e, t) {
  return {
    value: e,
    done: t
  };
}

function B$1(e) {
  var t = e[T$1];

  if (null !== t) {
    var n = e[A$1].read();
    null !== n && (e[L$1] = null, e[T$1] = null, e[x$1] = null, t(W$1(n, !1)));
  }
}

function q$1(e) {
  M$1.nextTick(B$1, e);
}

var I$1 = Object.getPrototypeOf(function () {}),
    N$1 = Object.setPrototypeOf((j$1(k$1 = {
  get stream() {
    return this[A$1];
  },

  next: function () {
    var e = this,
        t = this[P$1];
    if (null !== t) return Promise.reject(t);
    if (this[D$1]) return Promise.resolve(W$1(void 0, !0));
    if (this[A$1].destroyed) return new Promise(function (t, n) {
      M$1.nextTick(function () {
        e[P$1] ? n(e[P$1]) : t(W$1(void 0, !0));
      });
    });
    var n,
        r = this[L$1];
    if (r) n = new Promise(function (e, t) {
      return function (n, r) {
        e.then(function () {
          if (t[D$1]) return n(W$1(void 0, !0)), void 0;
          t[C$1](n, r);
        }, r);
      };
    }(r, this));else {
      var i = this[A$1].read();
      if (null !== i) return Promise.resolve(W$1(i, !1));
      n = new Promise(this[C$1]);
    }
    return this[L$1] = n, n;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), j$1(k$1, "return", function () {
  var e = this;
  return new Promise(function (t, n) {
    e[A$1].destroy(null, function (e) {
      if (e) return n(e), void 0;
      t(W$1(void 0, !0));
    });
  });
}), k$1), I$1),
    U$1 = function (e) {
  var t,
      n = Object.create(N$1, (j$1(t = {}, A$1, {
    value: e,
    writable: !0
  }), j$1(t, T$1, {
    value: null,
    writable: !0
  }), j$1(t, x$1, {
    value: null,
    writable: !0
  }), j$1(t, P$1, {
    value: null,
    writable: !0
  }), j$1(t, D$1, {
    value: e._readableState.endEmitted,
    writable: !0
  }), j$1(t, C$1, {
    value: function (e, t) {
      var r = n[A$1].read();
      r ? (n[L$1] = null, n[T$1] = null, n[x$1] = null, e(W$1(r, !1))) : (n[T$1] = e, n[x$1] = t);
    },
    writable: !0
  }), t));
  return n[L$1] = null, O$1(e, function (e) {
    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
      var t = n[x$1];
      return null !== t && (n[L$1] = null, n[T$1] = null, n[x$1] = null, t(e)), n[P$1] = e, void 0;
    }

    var r = n[T$1];
    null !== r && (n[L$1] = null, n[T$1] = null, n[x$1] = null, r(W$1(void 0, !0))), n[D$1] = !0;
  }), e.on("readable", q$1.bind(null, n)), n;
},
    H$1 = {},
    F$1 = !1,
    V$1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;

function G$1() {
  if (F$1) return H$1;
  F$1 = !0;
  var l,
      u = h$3;
  H$1 = C, C.ReadableState = L;
  r$4.EventEmitter;

  var f = function (e, t) {
    return e.listeners(t).length;
  },
      h = e,
      c = t$7.Buffer,
      b = V$1.Uint8Array || function () {};

  var p,
      g = a$2;
  p = g && g.debuglog ? g.debuglog("stream") : function () {};

  var w,
      _,
      v,
      m = y$1,
      R = S$1,
      k = E$1.getHighWaterMark,
      M = e$1.codes,
      j = M.ERR_INVALID_ARG_TYPE,
      O = M.ERR_STREAM_PUSH_AFTER_EOF,
      T = M.ERR_METHOD_NOT_IMPLEMENTED,
      x = M.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;

  t$8(C, h);
  var P = R.errorOrDestroy,
      D = ["error", "close", "destroy", "pause", "resume"];

  function L(e, t, n) {
    l = l || Z$1(), e = e || {}, "boolean" != typeof n && (n = t instanceof l), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = k(this, e, "readableHighWaterMark", n), this.buffer = new m(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (w || (w = string_decoder.StringDecoder), this.decoder = new w(e.encoding), this.encoding = e.encoding);
  }

  function C(e) {
    if (l = l || Z$1(), !(this instanceof C)) return new C(e);
    var t = this instanceof l;
    this._readableState = new L(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), h.call(this);
  }

  function A(e, t, n, r, i) {
    p("readableAddChunk", t);
    var a,
        o = e._readableState;
    if (null === t) o.reading = !1, function (e, t) {
      if (p("onEofChunk"), t.ended) return;

      if (t.decoder) {
        var n = t.decoder.end();
        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
      }

      t.ended = !0, t.sync ? q(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, I(e)));
    }(e, o);else if (i || (a = function (e, t) {
      var n;
      r = t, c.isBuffer(r) || r instanceof b || "string" == typeof t || void 0 === t || e.objectMode || (n = new j("chunk", ["string", "Buffer", "Uint8Array"], t));
      var r;
      return n;
    }(o, t)), a) P(e, a);else if (o.objectMode || t && t.length > 0) {
      if ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
        return c.from(e);
      }(t)), r) o.endEmitted ? P(e, new x()) : W(e, o, t, !0);else if (o.ended) P(e, new O());else {
        if (o.destroyed) return !1;
        o.reading = !1, o.decoder && !n ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? W(e, o, t, !1) : N(e, o)) : W(e, o, t, !1);
      }
    } else r || (o.reading = !1, N(e, o));
    return !o.ended && (o.length < o.highWaterMark || 0 === o.length);
  }

  function W(e, t, n, r) {
    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && q(e)), N(e, t);
  }

  Object.defineProperty(C.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
      this._readableState && (this._readableState.destroyed = e);
    }
  }), C.prototype.destroy = R.destroy, C.prototype._undestroy = R.undestroy, C.prototype._destroy = function (e, t) {
    t(e);
  }, C.prototype.push = function (e, t) {
    var n,
        r = this._readableState;
    return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t), t = ""), n = !0), A(this, e, t, !1, n);
  }, C.prototype.unshift = function (e) {
    return A(this, e, null, !0, !1);
  }, C.prototype.isPaused = function () {
    return !1 === this._readableState.flowing;
  }, C.prototype.setEncoding = function (e) {
    w || (w = string_decoder.StringDecoder);
    var t = new w(e);
    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;

    for (var n = this._readableState.buffer.head, r = ""; null !== n;) r += t.write(n.data), n = n.next;

    return this._readableState.buffer.clear(), "" !== r && this._readableState.buffer.push(r), this._readableState.length = r.length, this;
  };

  function B(e, t) {
    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
      return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }

  function q(e) {
    var t = e._readableState;
    p("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, u.nextTick(I, e));
  }

  function I(e) {
    var t = e._readableState;
    p("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, J(e);
  }

  function N(e, t) {
    t.readingMore || (t.readingMore = !0, u.nextTick(G, e, t));
  }

  function G(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
      var n = t.length;
      if (p("maybeReadMore read 0"), e.read(0), n === t.length) break;
    }

    t.readingMore = !1;
  }

  function Y(e) {
    var t = e._readableState;
    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
  }

  function K(e) {
    p("readable nexttick read 0"), e.read(0);
  }

  function z(e, t) {
    p("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), J(e), t.flowing && !t.reading && e.read(0);
  }

  function J(e) {
    var t = e._readableState;

    for (p("flow", t.flowing); t.flowing && null !== e.read(););
  }

  function Q(e, t) {
    return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
    var n;
  }

  function X(e) {
    var t = e._readableState;
    p("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, u.nextTick($, t, e));
  }

  function $(e, t) {
    if (p("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
      var n = t._writableState;
      (!n || n.autoDestroy && n.finished) && t.destroy();
    }
  }

  function ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

    return -1;
  }

  return C.prototype.read = function (e) {
    p("read", e), e = parseInt(e, 10);
    var t = this._readableState,
        n = e;
    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? X(this) : q(this), null;
    if (0 === (e = B(e, t)) && t.ended) return 0 === t.length && X(this), null;
    var r,
        i = t.needReadable;
    return p("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", i = !0), t.ended || t.reading ? p("reading or ended", i = !1) : i && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = B(n, t))), null === (r = e > 0 ? Q(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && X(this)), null !== r && this.emit("data", r), r;
  }, C.prototype._read = function (e) {
    P(this, new T("_read()"));
  }, C.prototype.pipe = function (e, t) {
    var n = this,
        r = this._readableState;

    switch (r.pipesCount) {
      case 0:
        r.pipes = e;
        break;

      case 1:
        r.pipes = [r.pipes, e];
        break;

      default:
        r.pipes.push(e);
    }

    r.pipesCount += 1, p("pipe count=%d opts=%j", r.pipesCount, t);
    var i = (!t || !1 !== t.end) && e !== u.stdout && e !== u.stderr ? o : g;

    function a(t, i) {
      p("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, p("cleanup"), e.removeListener("close", c), e.removeListener("finish", b), e.removeListener("drain", s), e.removeListener("error", h), e.removeListener("unpipe", a), n.removeListener("end", o), n.removeListener("end", g), n.removeListener("data", d), l = !0, !r.awaitDrain || e._writableState && !e._writableState.needDrain || s());
    }

    function o() {
      p("onend"), e.end();
    }

    r.endEmitted ? u.nextTick(i) : n.once("end", i), e.on("unpipe", a);

    var s = function (e) {
      return function () {
        var t = e._readableState;
        p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && f(e, "data") && (t.flowing = !0, J(e));
      };
    }(n);

    e.on("drain", s);
    var l = !1;

    function d(t) {
      p("ondata");
      var i = e.write(t);
      p("dest.write", i), !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== ee(r.pipes, e)) && !l && (p("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause());
    }

    function h(t) {
      p("onerror", t), g(), e.removeListener("error", h), 0 === f(e, "error") && P(e, t);
    }

    function c() {
      e.removeListener("finish", b), g();
    }

    function b() {
      p("onfinish"), e.removeListener("close", c), g();
    }

    function g() {
      p("unpipe"), n.unpipe(e);
    }

    return n.on("data", d), function (e, t, n) {
      if ("function" == typeof e.prependListener) return e.prependListener(t, n);
      e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n);
    }(e, "error", h), e.once("close", c), e.once("finish", b), e.emit("pipe", n), r.flowing || (p("pipe resume"), n.resume()), e;
  }, C.prototype.unpipe = function (e) {
    var t = this._readableState,
        n = {
      hasUnpiped: !1
    };
    if (0 === t.pipesCount) return this;
    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;

    if (!e) {
      var r = t.pipes,
          i = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;

      for (var a = 0; a < i; a++) r[a].emit("unpipe", this, {
        hasUnpiped: !1
      });

      return this;
    }

    var o = ee(t.pipes, e);
    return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this;
  }, C.prototype.on = function (e, t) {
    var n = h.prototype.on.call(this, e, t),
        r = this._readableState;
    return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, p("on readable", r.length, r.reading), r.length ? q(this) : r.reading || u.nextTick(K, this))), n;
  }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function (e, t) {
    var n = h.prototype.removeListener.call(this, e, t);
    return "readable" === e && u.nextTick(Y, this), n;
  }, C.prototype.removeAllListeners = function (e) {
    var t = h.prototype.removeAllListeners.apply(this, arguments);
    return "readable" !== e && void 0 !== e || u.nextTick(Y, this), t;
  }, C.prototype.resume = function () {
    var e = this._readableState;
    return e.flowing || (p("resume"), e.flowing = !e.readableListening, function (e, t) {
      t.resumeScheduled || (t.resumeScheduled = !0, u.nextTick(z, e, t));
    }(this, e)), e.paused = !1, this;
  }, C.prototype.pause = function () {
    return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  }, C.prototype.wrap = function (e) {
    var t = this,
        n = this._readableState,
        r = !1;

    for (var i in e.on("end", function () {
      if (p("wrapped end"), n.decoder && !n.ended) {
        var e = n.decoder.end();
        e && e.length && t.push(e);
      }

      t.push(null);
    }), e.on("data", function (i) {
      (p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()));
    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
      return function () {
        return e[t].apply(e, arguments);
      };
    }(i));

    for (var a = 0; a < D.length; a++) e.on(D[a], this.emit.bind(this, D[a]));

    return this._read = function (t) {
      p("wrapped _read", t), r && (r = !1, e.resume());
    }, this;
  }, "function" == typeof Symbol && (C.prototype[Symbol.asyncIterator] = function () {
    return void 0 === _ && (_ = U$1), _(this);
  }), Object.defineProperty(C.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(C.prototype, "readableBuffer", {
    enumerable: !1,
    get: function () {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(C.prototype, "readableFlowing", {
    enumerable: !1,
    get: function () {
      return this._readableState.flowing;
    },
    set: function (e) {
      this._readableState && (this._readableState.flowing = e);
    }
  }), C._fromList = Q, Object.defineProperty(C.prototype, "readableLength", {
    enumerable: !1,
    get: function () {
      return this._readableState.length;
    }
  }), "function" == typeof Symbol && (C.from = function (e, t) {
    return void 0 === v && (v = r$1), v(C, e, t);
  }), H$1;
}

var Y$1 = {},
    K$1 = !1,
    z$1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;

function J$1() {
  if (K$1) return Y$1;
  K$1 = !0;
  var e$2,
      r = h$3;

  function s(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function () {
      !function (e, t, n) {
        var r = e.entry;
        e.entry = null;

        for (; r;) {
          var i = r.callback;
          t.pendingcb--, i(n), r = r.next;
        }

        t.corkedRequestsFree.next = e;
      }(t, e);
    };
  }

  Y$1 = x, x.WritableState = T;

  var l = {
    deprecate: t$1
  },
      d = e,
      f = t$7.Buffer,
      h = z$1.Uint8Array || function () {};

  var c,
      b = S$1,
      p = E$1.getHighWaterMark,
      g = e$1.codes,
      y = g.ERR_INVALID_ARG_TYPE,
      w = g.ERR_METHOD_NOT_IMPLEMENTED,
      _ = g.ERR_MULTIPLE_CALLBACK,
      v = g.ERR_STREAM_CANNOT_PIPE,
      m = g.ERR_STREAM_DESTROYED,
      R = g.ERR_STREAM_NULL_VALUES,
      k = g.ERR_STREAM_WRITE_AFTER_END,
      M = g.ERR_UNKNOWN_ENCODING,
      j = b.errorOrDestroy;

  function O() {}

  function T(t, n, i) {
    e$2 = e$2 || Z$1(), t = t || {}, "boolean" != typeof i && (i = n instanceof e$2), this.objectMode = !!t.objectMode, i && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = p(this, t, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var a = !1 === t.decodeStrings;
    this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
      !function (e, t) {
        var n = e._writableState,
            i = n.sync,
            a = n.writecb;
        if ("function" != typeof a) throw new _();
        if (function (e) {
          e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
        }(n), t) !function (e, t, n, i, a) {
          --t.pendingcb, n ? (r.nextTick(a, i), r.nextTick(W, e, t), e._writableState.errorEmitted = !0, j(e, i)) : (a(i), e._writableState.errorEmitted = !0, j(e, i), W(e, t));
        }(e, n, i, t, a);else {
          var o = C(n) || e.destroyed;
          o || n.corked || n.bufferProcessing || !n.bufferedRequest || L(e, n), i ? r.nextTick(D, e, n, o, a) : D(e, n, o, a);
        }
      }(n, e);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this);
  }

  function x(t) {
    var n = this instanceof (e$2 = e$2 || Z$1());
    if (!n && !c.call(x, this)) return new x(t);
    this._writableState = new T(t, this, n), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), d.call(this);
  }

  function P(e, t, n, r, i, a, o) {
    t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new m("write")) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1;
  }

  function D(e, t, n, r) {
    n || !function (e, t) {
      0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
    }(e, t), t.pendingcb--, r(), W(e, t);
  }

  function L(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;

    if (e._writev && n && n.next) {
      var r = t.bufferedRequestCount,
          i = new Array(r),
          a = t.corkedRequestsFree;
      a.entry = n;

      for (var o = 0, l = !0; n;) i[o] = n, n.isBuf || (l = !1), n = n.next, o += 1;

      i.allBuffers = l, P(e, t, !0, t.length, i, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new s(t), t.bufferedRequestCount = 0;
    } else {
      for (; n;) {
        var d = n.chunk,
            u = n.encoding,
            f = n.callback;
        if (P(e, t, !1, t.objectMode ? 1 : d.length, d, u, f), n = n.next, t.bufferedRequestCount--, t.writing) break;
      }

      null === n && (t.lastBufferedRequest = null);
    }

    t.bufferedRequest = n, t.bufferProcessing = !1;
  }

  function C(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
  }

  function A(e, t) {
    e._final(function (n) {
      t.pendingcb--, n && j(e, n), t.prefinished = !0, e.emit("prefinish"), W(e, t);
    });
  }

  function W(e, t) {
    var n = C(t);

    if (n && (!function (e, t) {
      t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, r.nextTick(A, e, t)));
    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
      var i = e._readableState;
      (!i || i.autoDestroy && i.endEmitted) && e.destroy();
    }

    return n;
  }

  return t$8(x, d), T.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;

    return t;
  }, function () {
    try {
      Object.defineProperty(T.prototype, "buffer", {
        get: l.deprecate(function () {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (e) {}
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(x, Symbol.hasInstance, {
    value: function (e) {
      return !!c.call(this, e) || this === x && e && e._writableState instanceof T;
    }
  })) : c = function (e) {
    return e instanceof this;
  }, x.prototype.pipe = function () {
    j(this, new v());
  }, x.prototype.write = function (e, t, n) {
    var i,
        a = this._writableState,
        o = !1,
        s = !a.objectMode && (i = e, f.isBuffer(i) || i instanceof h);
    return s && !f.isBuffer(e) && (e = function (e) {
      return f.from(e);
    }(e)), "function" == typeof t && (n = t, t = null), s ? t = "buffer" : t || (t = a.defaultEncoding), "function" != typeof n && (n = O), a.ending ? function (e, t) {
      var n = new k();
      j(e, n), r.nextTick(t, n);
    }(this, n) : (s || function (e, t, n, i) {
      var a;
      return null === n ? a = new R() : "string" == typeof n || t.objectMode || (a = new y("chunk", ["string", "Buffer"], n)), !a || (j(e, a), r.nextTick(i, a), !1);
    }(this, a, e, n)) && (a.pendingcb++, o = function (e, t, n, r, i, a) {
      if (!n) {
        var o = function (e, t, n) {
          e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = f.from(t, n));
          return t;
        }(t, r, i);

        r !== o && (n = !0, i = "buffer", r = o);
      }

      var s = t.objectMode ? 1 : r.length;
      t.length += s;
      var l = t.length < t.highWaterMark;
      l || (t.needDrain = !0);

      if (t.writing || t.corked) {
        var d = t.lastBufferedRequest;
        t.lastBufferedRequest = {
          chunk: r,
          encoding: i,
          isBuf: n,
          callback: a,
          next: null
        }, d ? d.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
      } else P(e, t, !1, s, r, i, a);

      return l;
    }(this, a, s, e, t, n)), o;
  }, x.prototype.cork = function () {
    this._writableState.corked++;
  }, x.prototype.uncork = function () {
    var e = this._writableState;
    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || L(this, e));
  }, x.prototype.setDefaultEncoding = function (e) {
    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new M(e);
    return this._writableState.defaultEncoding = e, this;
  }, Object.defineProperty(x.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(x.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    }
  }), x.prototype._write = function (e, t, n) {
    n(new w("_write()"));
  }, x.prototype._writev = null, x.prototype.end = function (e, t, n) {
    var i = this._writableState;
    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function (e, t, n) {
      t.ending = !0, W(e, t), n && (t.finished ? r.nextTick(n) : e.once("finish", n));
      t.ended = !0, e.writable = !1;
    }(this, i, n), this;
  }, Object.defineProperty(x.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    }
  }), Object.defineProperty(x.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function (e) {
      this._writableState && (this._writableState.destroyed = e);
    }
  }), x.prototype.destroy = b.destroy, x.prototype._undestroy = b.undestroy, x.prototype._destroy = function (e, t) {
    t(e);
  }, Y$1;
}

var Q$1 = {},
    X$1 = !1;

function Z$1() {
  if (X$1) return Q$1;
  X$1 = !0;

  var e = h$3,
      t = Object.keys || function (e) {
    var t = [];

    for (var n in e) t.push(n);

    return t;
  };

  Q$1 = d;
  var n = G$1(),
      r = J$1();
  t$8(d, n);

  for (var a = t(r.prototype), s = 0; s < a.length; s++) {
    var l = a[s];
    d.prototype[l] || (d.prototype[l] = r.prototype[l]);
  }

  function d(e) {
    if (!(this instanceof d)) return new d(e);
    n.call(this, e), r.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", u)));
  }

  function u() {
    this._writableState.ended || e.nextTick(f, this);
  }

  function f(e) {
    e.end();
  }

  return Object.defineProperty(d.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(d.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(d.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    }
  }), Object.defineProperty(d.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (e) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    }
  }), Q$1;
}

var t$4 = J$1();
var t$5 = ee();
var n$2;
n$2 = u$1;
var i = e$1.codes,
    a = i.ERR_METHOD_NOT_IMPLEMENTED,
    o = i.ERR_MULTIPLE_CALLBACK,
    s = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    f$2 = i.ERR_TRANSFORM_WITH_LENGTH_0,
    h$2 = t$5;

function l(t, r) {
  var e = this._transformState;
  e.transforming = !1;
  var n = e.writecb;
  if (null === n) return this.emit("error", new o());
  e.writechunk = null, e.writecb = null, null != r && this.push(r), n(t);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}

function u$1(t) {
  if (!(this instanceof u$1)) return new u$1(t);
  h$2.call(this, t), this._transformState = {
    afterTransform: l.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", m$2);
}

function m$2() {
  var t = this;
  "function" != typeof this._flush || this._readableState.destroyed ? _$2(this, null, null) : this._flush(function (r, e) {
    _$2(t, r, e);
  });
}

function _$2(t, r, e) {
  if (r) return t.emit("error", r);
  if (null != e && t.push(e), t._writableState.length) throw new f$2();
  if (t._transformState.transforming) throw new s();
  return t.push(null);
}

t$8(u$1, h$2), u$1.prototype.push = function (t, r) {
  return this._transformState.needTransform = !1, h$2.prototype.push.call(this, t, r);
}, u$1.prototype._transform = function (t, r, e) {
  e(new a("_transform()"));
}, u$1.prototype._write = function (t, r, e) {
  var n = this._transformState;

  if (n.writecb = e, n.writechunk = t, n.writeencoding = r, !n.transforming) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
}, u$1.prototype._read = function (t) {
  var r = this._transformState;
  null === r.writechunk || r.transforming ? r.needTransform = !0 : (r.transforming = !0, this._transform(r.writechunk, r.writeencoding, r.afterTransform));
}, u$1.prototype._destroy = function (t, r) {
  h$2.prototype._destroy.call(this, t, function (t) {
    r(t);
  });
};
var p$2 = n$2;
var o$1;
o$1 = i$1;
var e$3 = p$2;

function i$1(r) {
  if (!(this instanceof i$1)) return new i$1(r);
  e$3.call(this, r);
}

t$8(i$1, e$3), i$1.prototype._transform = function (r, t, o) {
  o(null, r);
};
var s$1 = o$1;
var t$6;
var o$2 = e$1.codes,
    e$4 = o$2.ERR_MISSING_ARGS,
    f$3 = o$2.ERR_STREAM_DESTROYED;

function i$2(r) {
  if (r) throw r;
}

function u$2(r, o, e, i) {
  i = function (r) {
    var n = !1;
    return function () {
      n || (n = !0, r.apply(void 0, arguments));
    };
  }(i);

  var u = !1;
  r.on("close", function () {
    u = !0;
  }), void 0 === t$6 && (t$6 = n$1), t$6(r, {
    readable: o,
    writable: e
  }, function (r) {
    if (r) return i(r);
    u = !0, i();
  });
  var a = !1;
  return function (n) {
    if (!u && !a) return a = !0, function (r) {
      return r.setHeader && "function" == typeof r.abort;
    }(r) ? r.abort() : "function" == typeof r.destroy ? r.destroy() : (i(n || new f$3("pipe")), void 0);
  };
}

function a$1(r) {
  r();
}

function c$2(r, n) {
  return r.pipe(n);
}

function p$3(r) {
  return r.length ? "function" != typeof r[r.length - 1] ? i$2 : r.pop() : i$2;
}

var v$2 = function () {
  for (var r = arguments.length, n = new Array(r), t = 0; t < r; t++) n[t] = arguments[t];

  var o,
      f = p$3(n);
  if (Array.isArray(n[0]) && (n = n[0]), n.length < 2) throw new e$4("streams");
  var i = n.map(function (r, t) {
    var e = t < n.length - 1;
    return u$2(r, e, t > 0, function (r) {
      o || (o = r), r && i.forEach(a$1), e || (i.forEach(a$1), f(o));
    });
  });
  return n.reduce(c$2);
};

export { t$5 as e, s$1 as i, v$2 as m, t$2 as o, n$1 as r, t$4 as s, p$2 as t };