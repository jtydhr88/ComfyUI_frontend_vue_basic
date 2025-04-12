import { app as Pt } from "../../../scripts/app.js";
import { ComponentWidgetImpl as Kt, addWidget as Vt } from "../../../scripts/domWidget.js";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Wt = [], Bt = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), tt = Object.assign, Ht = Object.prototype.hasOwnProperty, q = (t, e) => Ht.call(t, e), d = Array.isArray, M = (t) => L(t) === "[object Map]", Lt = (t) => L(t) === "[object Set]", N = (t) => typeof t == "function", w = (t) => typeof t == "string", T = (t) => typeof t == "symbol", b = (t) => t !== null && typeof t == "object", pt = Object.prototype.toString, L = (t) => pt.call(t), Dt = (t) => L(t).slice(8, -1), Yt = (t) => L(t) === "[object Object]", et = (t) => w(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, A = (t, e) => !Object.is(t, e);
let ft;
const nt = () => ft || (ft = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function st(t) {
  if (d(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = w(i) ? qt(i) : st(i);
      if (s)
        for (const r in s)
          e[r] = s[r];
    }
    return e;
  } else if (w(t) || b(t))
    return t;
}
const Ut = /;(?![^(]*\))/g, $t = /:([^]+)/, Gt = /\/\*[^]*?\*\//g;
function qt(t) {
  const e = {};
  return t.replace(Gt, "").split(Ut).forEach((n) => {
    if (n) {
      const i = n.split($t);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function rt(t) {
  let e = "";
  if (w(t))
    e = t;
  else if (d(t))
    for (let n = 0; n < t.length; n++) {
      const i = rt(t[n]);
      i && (e += i + " ");
    }
  else if (b(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const dt = (t) => !!(t && t.__v_isRef === !0), gt = (t) => w(t) ? t : t == null ? "" : d(t) || b(t) && (t.toString === pt || !N(t.toString)) ? dt(t) ? gt(t.value) : JSON.stringify(t, mt, 2) : String(t), mt = (t, e) => dt(e) ? mt(t, e.value) : M(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, s], r) => (n[D(i, r) + " =>"] = s, n),
    {}
  )
} : Lt(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => D(n))
} : T(e) ? D(e) : b(e) && !d(e) && !Yt(e) ? String(e) : e, D = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    T(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vt, bt = 0, Y;
function it() {
  bt++;
}
function ot() {
  if (--bt > 0)
    return;
  let t;
  for (; Y; ) {
    let e = Y;
    for (Y = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (i) {
          t || (t = i);
        }
      e = n;
    }
  }
  if (t) throw t;
}
let B = !0;
const St = [];
function Jt() {
  St.push(B), B = !1;
}
function Qt() {
  const t = St.pop();
  B = t === void 0 ? !0 : t;
}
class wt {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
  }
  trigger(e) {
    this.version++, this.notify(e);
  }
  notify(e) {
    it();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ot();
    }
  }
}
const v = /* @__PURE__ */ new WeakMap(), C = Symbol(
  ""
), J = Symbol(
  ""
), F = Symbol(
  ""
);
function p(t, e, n) {
  if (B && vt) {
    let i = v.get(t);
    i || v.set(t, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new wt()), s.map = i, s.key = n), s.track();
  }
}
function R(t, e, n, i, s, r) {
  const o = v.get(t);
  if (!o)
    return;
  const c = (l) => {
    l && l.trigger();
  };
  if (it(), e === "clear")
    o.forEach(c);
  else {
    const l = d(t), u = l && et(n);
    if (l && n === "length") {
      const f = Number(i);
      o.forEach((_, g) => {
        (g === "length" || g === F || !T(g) && g >= f) && c(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), u && c(o.get(F)), e) {
        case "add":
          l ? u && c(o.get("length")) : (c(o.get(C)), M(t) && c(o.get(J)));
          break;
        case "delete":
          l || (c(o.get(C)), M(t) && c(o.get(J)));
          break;
        case "set":
          M(t) && c(o.get(C));
          break;
      }
  }
  ot();
}
function I(t) {
  const e = a(t);
  return e === t ? e : (p(e, "iterate", F), y(t) ? e : e.map(h));
}
function ct(t) {
  return p(t = a(t), "iterate", F), t;
}
const Xt = {
  __proto__: null,
  [Symbol.iterator]() {
    return U(this, Symbol.iterator, h);
  },
  concat(...t) {
    return I(this).concat(
      ...t.map((e) => d(e) ? I(e) : e)
    );
  },
  entries() {
    return U(this, "entries", (t) => (t[1] = h(t[1]), t));
  },
  every(t, e) {
    return S(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return S(this, "filter", t, e, (n) => n.map(h), arguments);
  },
  find(t, e) {
    return S(this, "find", t, e, h, arguments);
  },
  findIndex(t, e) {
    return S(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return S(this, "findLast", t, e, h, arguments);
  },
  findLastIndex(t, e) {
    return S(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return S(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return $(this, "includes", t);
  },
  indexOf(...t) {
    return $(this, "indexOf", t);
  },
  join(t) {
    return I(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return $(this, "lastIndexOf", t);
  },
  map(t, e) {
    return S(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return x(this, "pop");
  },
  push(...t) {
    return x(this, "push", t);
  },
  reduce(t, ...e) {
    return _t(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return _t(this, "reduceRight", t, e);
  },
  shift() {
    return x(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return S(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return x(this, "splice", t);
  },
  toReversed() {
    return I(this).toReversed();
  },
  toSorted(t) {
    return I(this).toSorted(t);
  },
  toSpliced(...t) {
    return I(this).toSpliced(...t);
  },
  unshift(...t) {
    return x(this, "unshift", t);
  },
  values() {
    return U(this, "values", h);
  }
};
function U(t, e, n) {
  const i = ct(t), s = i[e]();
  return i !== t && !y(t) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const Zt = Array.prototype;
function S(t, e, n, i, s, r) {
  const o = ct(t), c = o !== t && !y(t), l = o[e];
  if (l !== Zt[e]) {
    const _ = l.apply(t, r);
    return c ? h(_) : _;
  }
  let u = n;
  o !== t && (c ? u = function(_, g) {
    return n.call(this, h(_), g, t);
  } : n.length > 2 && (u = function(_, g) {
    return n.call(this, _, g, t);
  }));
  const f = l.call(o, u, i);
  return c && s ? s(f) : f;
}
function _t(t, e, n, i) {
  const s = ct(t);
  let r = n;
  return s !== t && (y(t) ? n.length > 3 && (r = function(o, c, l) {
    return n.call(this, o, c, l, t);
  }) : r = function(o, c, l) {
    return n.call(this, o, h(c), l, t);
  }), s[e](r, ...i);
}
function $(t, e, n) {
  const i = a(t);
  p(i, "iterate", F);
  const s = i[e](...n);
  return (s === -1 || s === !1) && lt(n[0]) ? (n[0] = a(n[0]), i[e](...n)) : s;
}
function x(t, e, n = []) {
  Jt(), it();
  const i = a(t)[e].apply(t, n);
  return ot(), Qt(), i;
}
const kt = /* @__PURE__ */ zt("__proto__,__v_isRef,__isVue"), Rt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(T)
);
function te(t) {
  T(t) || (t = String(t));
  const e = a(this);
  return p(e, "has", t), e.hasOwnProperty(t);
}
class yt {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, i) {
    if (n === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? ue : Tt : r ? ae : Ot).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = d(e);
    if (!s) {
      let l;
      if (o && (l = Xt[n]))
        return l;
      if (n === "hasOwnProperty")
        return te;
    }
    const c = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      O(e) ? e : i
    );
    return (T(n) ? Rt.has(n) : kt(n)) || (s || p(e, "get", n), r) ? c : O(c) ? o && et(n) ? c : c.value : b(c) ? s ? Et(c) : It(c) : c;
  }
}
class ee extends yt {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, s) {
    let r = e[n];
    if (!this._isShallow) {
      const l = E(r);
      if (!y(i) && !E(i) && (r = a(r), i = a(i)), !d(e) && O(r) && !O(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = d(e) && et(n) ? Number(n) < e.length : q(e, n), c = Reflect.set(
      e,
      n,
      i,
      O(e) ? e : s
    );
    return e === a(s) && (o ? A(i, r) && R(e, "set", n, i) : R(e, "add", n, i)), c;
  }
  deleteProperty(e, n) {
    const i = q(e, n);
    e[n];
    const s = Reflect.deleteProperty(e, n);
    return s && i && R(e, "delete", n, void 0), s;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!T(n) || !Rt.has(n)) && p(e, "has", n), i;
  }
  ownKeys(e) {
    return p(
      e,
      "iterate",
      d(e) ? "length" : C
    ), Reflect.ownKeys(e);
  }
}
class ne extends yt {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const se = /* @__PURE__ */ new ee(), re = /* @__PURE__ */ new ne(), Q = (t) => t, P = (t) => Reflect.getPrototypeOf(t);
function ie(t, e, n) {
  return function(...i) {
    const s = this.__v_raw, r = a(s), o = M(r), c = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, u = s[t](...i), f = n ? Q : e ? X : h;
    return !e && p(
      r,
      "iterate",
      l ? J : C
    ), {
      // iterator protocol
      next() {
        const { value: _, done: g } = u.next();
        return g ? { value: _, done: g } : {
          value: c ? [f(_[0]), f(_[1])] : f(_),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function K(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function oe(t, e) {
  const n = {
    get(s) {
      const r = this.__v_raw, o = a(r), c = a(s);
      t || (A(s, c) && p(o, "get", s), p(o, "get", c));
      const { has: l } = P(o), u = e ? Q : t ? X : h;
      if (l.call(o, s))
        return u(r.get(s));
      if (l.call(o, c))
        return u(r.get(c));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && p(a(s), "iterate", C), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, o = a(r), c = a(s);
      return t || (A(s, c) && p(o, "has", s), p(o, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const o = this, c = o.__v_raw, l = a(c), u = e ? Q : t ? X : h;
      return !t && p(l, "iterate", C), c.forEach((f, _) => s.call(r, u(f), u(_), o));
    }
  };
  return tt(
    n,
    t ? {
      add: K("add"),
      set: K("set"),
      delete: K("delete"),
      clear: K("clear")
    } : {
      add(s) {
        !e && !y(s) && !E(s) && (s = a(s));
        const r = a(this);
        return P(r).has.call(r, s) || (r.add(s), R(r, "add", s, s)), this;
      },
      set(s, r) {
        !e && !y(r) && !E(r) && (r = a(r));
        const o = a(this), { has: c, get: l } = P(o);
        let u = c.call(o, s);
        u || (s = a(s), u = c.call(o, s));
        const f = l.call(o, s);
        return o.set(s, r), u ? A(r, f) && R(o, "set", s, r) : R(o, "add", s, r), this;
      },
      delete(s) {
        const r = a(this), { has: o, get: c } = P(r);
        let l = o.call(r, s);
        l || (s = a(s), l = o.call(r, s)), c && c.call(r, s);
        const u = r.delete(s);
        return l && R(r, "delete", s, void 0), u;
      },
      clear() {
        const s = a(this), r = s.size !== 0, o = s.clear();
        return r && R(
          s,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = ie(s, t, e);
  }), n;
}
function Ct(t, e) {
  const n = oe(t, e);
  return (i, s, r) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? i : Reflect.get(
    q(n, s) && s in i ? n : i,
    s,
    r
  );
}
const ce = {
  get: /* @__PURE__ */ Ct(!1, !1)
}, le = {
  get: /* @__PURE__ */ Ct(!0, !1)
}, Ot = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap();
function fe(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _e(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : fe(Dt(t));
}
function It(t) {
  return E(t) ? t : xt(
    t,
    !1,
    se,
    ce,
    Ot
  );
}
function Et(t) {
  return xt(
    t,
    !0,
    re,
    le,
    Tt
  );
}
function xt(t, e, n, i, s) {
  if (!b(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = s.get(t);
  if (r)
    return r;
  const o = _e(t);
  if (o === 0)
    return t;
  const c = new Proxy(
    t,
    o === 2 ? i : n
  );
  return s.set(t, c), c;
}
function E(t) {
  return !!(t && t.__v_isReadonly);
}
function y(t) {
  return !!(t && t.__v_isShallow);
}
function lt(t) {
  return t ? !!t.__v_raw : !1;
}
function a(t) {
  const e = t && t.__v_raw;
  return e ? a(e) : t;
}
const h = (t) => b(t) ? It(t) : t, X = (t) => b(t) ? Et(t) : t;
function O(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function he(t) {
  return pe(t, !1);
}
function pe(t, e) {
  return O(t) ? t : new de(t, e);
}
class de {
  constructor(e, n) {
    this.dep = new wt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : a(e), this._value = n ? e : h(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, i = this.__v_isShallow || y(e) || E(e);
    e = i ? e : a(e), A(e, n) && (this._rawValue = e, this._value = i ? e : h(e), this.dep.trigger());
  }
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let H = null, ge = null;
const me = (t) => t.__isTeleport;
function Mt(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Mt(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
nt().requestIdleCallback;
nt().cancelIdleCallback;
const be = Symbol.for("v-ndc"), Se = {}, At = (t) => Object.getPrototypeOf(t) === Se, we = (t) => t.__isSuspense, jt = Symbol.for("v-fgt"), Re = Symbol.for("v-txt"), Z = Symbol.for("v-cmt"), V = [];
let m = null;
function z(t = !1) {
  V.push(m = t ? null : []);
}
function ye() {
  V.pop(), m = V[V.length - 1] || null;
}
function Ft(t) {
  return t.dynamicChildren = m || Wt, ye(), m && m.push(t), t;
}
function G(t, e, n, i, s, r) {
  return Ft(
    j(
      t,
      e,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Ce(t, e, n, i, s) {
  return Ft(
    at(
      t,
      e,
      n,
      i,
      s,
      !0
    )
  );
}
function Oe(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Nt = ({ key: t }) => t ?? null, W = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? w(t) || O(t) || N(t) ? { i: H, r: t, k: e, f: !!n } : t : null);
function j(t, e = null, n = null, i = 0, s = null, r = t === jt ? 0 : 1, o = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Nt(e),
    ref: e && W(e),
    scopeId: ge,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: H
  };
  return c ? (ut(l, n), r & 128 && t.normalize(l)) : n && (l.shapeFlag |= w(n) ? 8 : 16), // avoid a block node from tracking itself
  !o && // has current parent block
  m && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && m.push(l), l;
}
const at = Te;
function Te(t, e = null, n = null, i = 0, s = null, r = !1) {
  if ((!t || t === be) && (t = Z), Oe(t)) {
    const c = k(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && ut(c, n), !r && m && (c.shapeFlag & 6 ? m[m.indexOf(t)] = c : m.push(c)), c.patchFlag = -2, c;
  }
  if (Me(t) && (t = t.__vccOpts), e) {
    e = Ie(e);
    let { class: c, style: l } = e;
    c && !w(c) && (e.class = rt(c)), b(l) && (lt(l) && !d(l) && (l = tt({}, l)), e.style = st(l));
  }
  const o = w(t) ? 1 : we(t) ? 128 : me(t) ? 64 : b(t) ? 4 : N(t) ? 2 : 0;
  return j(
    t,
    e,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function Ie(t) {
  return t ? lt(t) || At(t) ? tt({}, t) : t : null;
}
function k(t, e, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: c, transition: l } = t, u = e ? xe(s || {}, e) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && Nt(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? d(r) ? r.concat(W(e)) : [r, W(e)] : W(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: c,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== jt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && k(t.ssContent),
    ssFallback: t.ssFallback && k(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && i && Mt(
    f,
    l.clone(f)
  ), f;
}
function Ee(t = " ", e = 0) {
  return at(Re, null, t, e);
}
function ht(t = "", e = !1) {
  return e ? (z(), Ce(Z, null, t)) : at(Z, null, t);
}
function ut(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (d(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), ut(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !At(e) && (e._ctx = H);
  else N(e) ? (e = { default: e, _ctx: H }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Ee(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function xe(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const s in i)
      if (s === "class")
        e.class !== i.class && (e.class = rt([e.class, i.class]));
      else if (s === "style")
        e.style = st([e.style, i.style]);
      else if (Bt(s)) {
        const r = e[s], o = i[s];
        o && r !== o && !(d(r) && r.includes(o)) && (e[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (e[s] = i[s]);
  }
  return e;
}
{
  const t = nt(), e = (n, i) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
function Me(t) {
  return N(t) && "__vccOpts" in t;
}
const Ae = { key: 0 }, je = { key: 1 }, Fe = {
  __name: "VueExampleComponent",
  setup(t) {
    const e = he(10);
    function n() {
      console.log("removing one"), e.value > 0 && (e.value = e.value - 1, console.log(e.value), console.log("removed one111"));
    }
    return (i, s) => (z(), G("div", null, [
      s[0] || (s[0] = j("h1", null, "Example", -1)),
      j("div", null, "count: " + gt(e.value), 1),
      j("button", { onClick: n }, "Remove one"),
      e.value > 5 ? (z(), G("div", Ae, " > 5 ")) : ht("", !0),
      e.value < 5 ? (z(), G("div", je, " < 5 ")) : ht("", !0)
    ]));
  }
};
Pt.registerExtension({
  name: "vue-basic",
  getCustomWidgets(t) {
    return {
      CUSTOM_VUE_COMPONENT_BASIC(e) {
        const n = {
          name: "custom_vue_component_basic",
          type: "vue-basic"
        }, i = new Kt({
          id: "custom_vue_component_basic",
          node: e,
          name: n.name,
          component: Fe,
          inputSpec: n,
          options: {}
        });
        return Vt(e, i), { widget: i };
      }
    };
  },
  nodeCreated(t) {
    t.constructor.comfyClass === "vue-basic" && console.log(t);
  }
});
