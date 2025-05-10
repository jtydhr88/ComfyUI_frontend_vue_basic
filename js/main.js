import { app as sn } from "../../../scripts/app.js";
import { ComponentWidgetImpl as ln, addWidget as un } from "../../../scripts/domWidget.js";
import { ref as A, readonly as dn, getCurrentInstance as ee, onMounted as Xt, nextTick as Oe, watch as cn, useId as pn, mergeProps as I, createElementBlock as at, openBlock as z, createElementVNode as M, renderSlot as ft, createTextVNode as Kt, toDisplayString as ut, resolveComponent as ne, resolveDirective as xe, withDirectives as Te, createBlock as ht, resolveDynamicComponent as bn, withCtx as Nt, createCommentVNode as oe, normalizeClass as Et, defineComponent as Vt, Fragment as re, createVNode as Bt, unref as N, renderList as fn, normalizeStyle as gn } from "vue";
import { useI18n as je } from "vue-i18n";
import { app as ae } from "../../scripts/app.js";
function vt(...t) {
  if (t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (!o)
        continue;
      const r = typeof o;
      if (r === "string" || r === "number")
        e.push(o);
      else if (r === "object") {
        const s = Array.isArray(o) ? [vt(...o)] : Object.entries(o).map(([u, i]) => i ? u : void 0);
        e = s.length ? e.concat(s.filter((u) => !!u)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function hn(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function vn(t, e) {
  if (t && e) {
    const n = (o) => {
      hn(t, o) || (t.classList ? t.classList.add(o) : t.className += " " + o);
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function Mt(t, e) {
  if (t && e) {
    const n = (o) => {
      t.classList ? t.classList.remove(o) : t.className = t.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function ie(t) {
  return t ? Math.abs(t.scrollLeft) : 0;
}
function mn(t, e) {
  return t instanceof HTMLElement ? t.offsetWidth : 0;
}
function yn(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function $n(t) {
  return !!(t !== null && typeof t < "u" && t.nodeName && yn(t));
}
function Tt(t) {
  return typeof Element < "u" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function It(t, e = {}) {
  if (Tt(t)) {
    const n = (o, r) => {
      var s, u;
      const i = (s = t == null ? void 0 : t.$attrs) != null && s[o] ? [(u = t == null ? void 0 : t.$attrs) == null ? void 0 : u[o]] : [];
      return [r].flat().reduce((a, l) => {
        if (l != null) {
          const d = typeof l;
          if (d === "string" || d === "number")
            a.push(l);
          else if (d === "object") {
            const c = Array.isArray(l) ? n(o, l) : Object.entries(l).map(([p, b]) => o === "style" && (b || b === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? p : void 0);
            a = c.length ? a.concat(c.filter((p) => !!p)) : a;
          }
        }
        return a;
      }, i);
    };
    Object.entries(e).forEach(([o, r]) => {
      if (r != null) {
        const s = o.match(/^on(.+)/);
        s ? t.addEventListener(s[1].toLowerCase(), r) : o === "p-bind" || o === "pBind" ? It(t, r) : (r = o === "class" ? [...new Set(n("class", r))].join(" ").trim() : o === "style" ? n("style", r).join(";").trim() : r, (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = r), t.setAttribute(o, r));
      }
    });
  }
}
function _n(t, e = {}, ...n) {
  {
    const o = document.createElement(t);
    return It(o, e), o.append(...n), o;
  }
}
function Sn(t, e) {
  return Tt(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function kn(t, e) {
  if (Tt(t)) {
    const n = t.getAttribute(e);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function se(t) {
  if (t) {
    let e = t.offsetHeight;
    const n = getComputedStyle(t);
    return e -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), e;
  }
  return 0;
}
function wn(t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: e.left + (window.pageXOffset || ie(document.documentElement) || ie(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Cn(t, e) {
  return t ? t.offsetHeight : 0;
}
function le(t) {
  if (t) {
    let e = t.offsetWidth;
    const n = getComputedStyle(t);
    return e -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), e;
  }
  return 0;
}
function Pn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function On(t, e = "", n) {
  Tt(t) && n !== null && n !== void 0 && t.setAttribute(e, n);
}
function Le() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(e, n) {
      let o = t.get(e);
      return o ? o.push(n) : o = [n], t.set(e, o), this;
    },
    off(e, n) {
      const o = t.get(e);
      return o && o.splice(o.indexOf(n) >>> 0, 1), this;
    },
    emit(e, n) {
      const o = t.get(e);
      o && o.forEach((r) => {
        r(n);
      });
    },
    clear() {
      t.clear();
    }
  };
}
function dt(t) {
  return t == null || t === "" || Array.isArray(t) && t.length === 0 || !(t instanceof Date) && typeof t == "object" && Object.keys(t).length === 0;
}
function Gt(t) {
  return typeof t == "function" && "call" in t && "apply" in t;
}
function x(t) {
  return !dt(t);
}
function st(t, e = !0) {
  return t instanceof Object && t.constructor === Object && (e || Object.keys(t).length !== 0);
}
function U(t, ...e) {
  return Gt(t) ? t(...e) : t;
}
function V(t, e = !0) {
  return typeof t == "string" && (e || t !== "");
}
function Z(t) {
  return V(t) ? t.replace(/(-|_)/g, "").toLowerCase() : t;
}
function Zt(t, e = "", n = {}) {
  const o = Z(e).split("."), r = o.shift();
  if (r) {
    if (st(t)) {
      const s = Object.keys(t).find((u) => Z(u) === r) || "";
      return Zt(U(t[s], n), o.join("."), n);
    }
    return;
  }
  return U(t, n);
}
function Rt(t, e = !0) {
  return Array.isArray(t) && (e || t.length !== 0);
}
function xn(t) {
  return x(t) && !isNaN(t);
}
function rt(t, e) {
  if (e) {
    const n = e.test(t);
    return e.lastIndex = 0, n;
  }
  return !1;
}
function mt(t) {
  return t && t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Tn(t) {
  return V(t, !1) ? t[0].toUpperCase() + t.slice(1) : t;
}
function Ae(t) {
  return V(t) ? t.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, n) => n === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : t;
}
function ue(t) {
  return V(t) ? t.replace(/[A-Z]/g, (e, n) => n === 0 ? e : "." + e.toLowerCase()).toLowerCase() : t;
}
var Lt = {};
function jn(t = "pui_id_") {
  return Object.hasOwn(Lt, t) || (Lt[t] = 0), Lt[t]++, `${t}${Lt[t]}`;
}
var Ln = Object.defineProperty, An = Object.defineProperties, Nn = Object.getOwnPropertyDescriptors, zt = Object.getOwnPropertySymbols, Ne = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, de = (t, e, n) => e in t ? Ln(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, K = (t, e) => {
  for (var n in e || (e = {}))
    Ne.call(e, n) && de(t, n, e[n]);
  if (zt)
    for (var n of zt(e))
      De.call(e, n) && de(t, n, e[n]);
  return t;
}, Ut = (t, e) => An(t, Nn(e)), ot = (t, e) => {
  var n = {};
  for (var o in t)
    Ne.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && zt)
    for (var o of zt(t))
      e.indexOf(o) < 0 && De.call(t, o) && (n[o] = t[o]);
  return n;
}, Dn = Le(), E = Dn;
function ce(t, e) {
  Rt(t) ? t.push(...e || []) : st(t) && Object.assign(t, e);
}
function En(t) {
  return st(t) && t.hasOwnProperty("$value") && t.hasOwnProperty("$type") ? t.$value : t;
}
function Bn(t) {
  return t.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Ft(t = "", e = "") {
  return Bn(`${V(t, !1) && V(e, !1) ? `${t}-` : t}${e}`);
}
function Ee(t = "", e = "") {
  return `--${Ft(t, e)}`;
}
function In(t = "") {
  const e = (t.match(/{/g) || []).length, n = (t.match(/}/g) || []).length;
  return (e + n) % 2 !== 0;
}
function Be(t, e = "", n = "", o = [], r) {
  if (V(t)) {
    const s = /{([^}]*)}/g, u = t.trim();
    if (In(u))
      return;
    if (rt(u, s)) {
      const i = u.replaceAll(s, (d) => {
        const p = d.replace(/{|}/g, "").split(".").filter((b) => !o.some((g) => rt(b, g)));
        return `var(${Ee(n, Ae(p.join("-")))}${x(r) ? `, ${r}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, l = /var\([^)]+\)/g;
      return rt(i.replace(l, "0"), a) ? `calc(${i})` : i;
    }
    return u;
  } else if (xn(t))
    return t;
}
function zn(t, e, n) {
  V(e, !1) && t.push(`${e}:${n};`);
}
function pt(t, e) {
  return t ? `${t}{${e}}` : "";
}
var yt = (...t) => Vn(T.getTheme(), ...t), Vn = (t = {}, e, n, o) => {
  if (e) {
    const { variable: r, options: s } = T.defaults || {}, { prefix: u, transform: i } = (t == null ? void 0 : t.options) || s || {}, l = rt(e, /{([^}]*)}/g) ? e : `{${e}}`;
    return o === "value" || dt(o) && i === "strict" ? T.getTokenValue(e) : Be(l, void 0, u, [r.excludedKeyRegex], n);
  }
  return "";
};
function Rn(t, e = {}) {
  const n = T.defaults.variable, { prefix: o = n.prefix, selector: r = n.selector, excludedKeyRegex: s = n.excludedKeyRegex } = e, u = (l, d = "") => Object.entries(l).reduce(
    (c, [p, b]) => {
      const g = rt(p, s) ? Ft(d) : Ft(d, Ae(p)), y = En(b);
      if (st(y)) {
        const { variables: h, tokens: v } = u(y, g);
        ce(c.tokens, v), ce(c.variables, h);
      } else
        c.tokens.push((o ? g.replace(`${o}-`, "") : g).replaceAll("-", ".")), zn(c.variables, Ee(g), Be(y, g, o, [s]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: i, tokens: a } = u(t, o);
  return {
    value: i,
    tokens: a,
    declarations: i.join(""),
    css: pt(r, i.join(""))
  };
}
var W = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(t) {
          return { type: "class", selector: t, matched: this.pattern.test(t.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(t) {
          return { type: "attr", selector: `:root${t}`, matched: this.pattern.test(t.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(t) {
          return { type: "media", selector: `${t}{:root{[CSS]}}`, matched: this.pattern.test(t.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(t) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(t.trim()) };
        }
      },
      custom: {
        resolve(t) {
          return { type: "custom", selector: t, matched: !0 };
        }
      }
    },
    resolve(t) {
      const e = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [t].flat().map((n) => {
        var o;
        return (o = e.map((r) => r.resolve(n)).find((r) => r.matched)) != null ? o : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(t, e) {
    return Rn(t, { prefix: e == null ? void 0 : e.prefix });
  },
  getCommon({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var s, u, i, a, l, d, c;
    const { preset: p, options: b } = e;
    let g, y, h, v, w, S, f;
    if (x(p) && b.transform !== "strict") {
      const { primitive: $, semantic: m, extend: O } = p, F = m || {}, { colorScheme: H } = F, q = ot(F, ["colorScheme"]), Y = O || {}, { colorScheme: J } = Y, Q = ot(Y, ["colorScheme"]), R = H || {}, { dark: tt } = R, P = ot(R, ["dark"]), j = J || {}, { dark: L } = j, et = ot(j, ["dark"]), nt = x($) ? this._toVariables({ primitive: $ }, b) : {}, X = x(q) ? this._toVariables({ semantic: q }, b) : {}, lt = x(P) ? this._toVariables({ light: P }, b) : {}, jt = x(tt) ? this._toVariables({ dark: tt }, b) : {}, ct = x(Q) ? this._toVariables({ semantic: Q }, b) : {}, Qt = x(et) ? this._toVariables({ light: et }, b) : {}, te = x(L) ? this._toVariables({ dark: L }, b) : {}, [Ue, We] = [(s = nt.declarations) != null ? s : "", nt.tokens], [Ke, Fe] = [(u = X.declarations) != null ? u : "", X.tokens || []], [He, Ye] = [(i = lt.declarations) != null ? i : "", lt.tokens || []], [Xe, Ge] = [(a = jt.declarations) != null ? a : "", jt.tokens || []], [Ze, qe] = [(l = ct.declarations) != null ? l : "", ct.tokens || []], [Je, Qe] = [(d = Qt.declarations) != null ? d : "", Qt.tokens || []], [tn, en] = [(c = te.declarations) != null ? c : "", te.tokens || []];
      g = this.transformCSS(t, Ue, "light", "variable", b, o, r), y = We;
      const nn = this.transformCSS(t, `${Ke}${He}`, "light", "variable", b, o, r), on = this.transformCSS(t, `${Xe}`, "dark", "variable", b, o, r);
      h = `${nn}${on}`, v = [.../* @__PURE__ */ new Set([...Fe, ...Ye, ...Ge])];
      const rn = this.transformCSS(t, `${Ze}${Je}color-scheme:light`, "light", "variable", b, o, r), an = this.transformCSS(t, `${tn}color-scheme:dark`, "dark", "variable", b, o, r);
      w = `${rn}${an}`, S = [.../* @__PURE__ */ new Set([...qe, ...Qe, ...en])], f = U(p.css, { dt: yt });
    }
    return {
      primitive: {
        css: g,
        tokens: y
      },
      semantic: {
        css: h,
        tokens: v
      },
      global: {
        css: w,
        tokens: S
      },
      style: f
    };
  },
  getPreset({ name: t = "", preset: e = {}, options: n, params: o, set: r, defaults: s, selector: u }) {
    var i, a, l;
    let d, c, p;
    if (x(e) && n.transform !== "strict") {
      const b = t.replace("-directive", ""), g = e, { colorScheme: y, extend: h, css: v } = g, w = ot(g, ["colorScheme", "extend", "css"]), S = h || {}, { colorScheme: f } = S, $ = ot(S, ["colorScheme"]), m = y || {}, { dark: O } = m, F = ot(m, ["dark"]), H = f || {}, { dark: q } = H, Y = ot(H, ["dark"]), J = x(w) ? this._toVariables({ [b]: K(K({}, w), $) }, n) : {}, Q = x(F) ? this._toVariables({ [b]: K(K({}, F), Y) }, n) : {}, R = x(O) ? this._toVariables({ [b]: K(K({}, O), q) }, n) : {}, [tt, P] = [(i = J.declarations) != null ? i : "", J.tokens || []], [j, L] = [(a = Q.declarations) != null ? a : "", Q.tokens || []], [et, nt] = [(l = R.declarations) != null ? l : "", R.tokens || []], X = this.transformCSS(b, `${tt}${j}`, "light", "variable", n, r, s, u), lt = this.transformCSS(b, et, "dark", "variable", n, r, s, u);
      d = `${X}${lt}`, c = [.../* @__PURE__ */ new Set([...P, ...L, ...nt])], p = U(v, { dt: yt });
    }
    return {
      css: d,
      tokens: c,
      style: p
    };
  },
  getPresetC({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var s;
    const { preset: u, options: i } = e, a = (s = u == null ? void 0 : u.components) == null ? void 0 : s[t];
    return this.getPreset({ name: t, preset: a, options: i, params: n, set: o, defaults: r });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var s, u;
    const i = t.replace("-directive", ""), { preset: a, options: l } = e, d = ((s = a == null ? void 0 : a.components) == null ? void 0 : s[i]) || ((u = a == null ? void 0 : a.directives) == null ? void 0 : u[i]);
    return this.getPreset({ name: i, preset: d, options: l, params: n, set: o, defaults: r });
  },
  applyDarkColorScheme(t) {
    return !(t.darkModeSelector === "none" || t.darkModeSelector === !1);
  },
  getColorSchemeOption(t, e) {
    var n;
    return this.applyDarkColorScheme(t) ? this.regex.resolve(t.darkModeSelector === !0 ? e.options.darkModeSelector : (n = t.darkModeSelector) != null ? n : e.options.darkModeSelector) : [];
  },
  getLayerOrder(t, e = {}, n, o) {
    const { cssLayer: r } = e;
    return r ? `@layer ${U(r.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: s }) {
    const u = this.getCommon({ name: t, theme: e, params: n, set: r, defaults: s }), i = Object.entries(o).reduce((a, [l, d]) => a.push(`${l}="${d}"`) && a, []).join(" ");
    return Object.entries(u || {}).reduce((a, [l, d]) => {
      if (d != null && d.css) {
        const c = mt(d == null ? void 0 : d.css), p = `${l}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${p}" ${i}>${c}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: s }) {
    var u;
    const i = { name: t, theme: e, params: n, set: r, defaults: s }, a = (u = t.includes("-directive") ? this.getPresetD(i) : this.getPresetC(i)) == null ? void 0 : u.css, l = Object.entries(o).reduce((d, [c, p]) => d.push(`${c}="${p}"`) && d, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${mt(a)}</style>` : "";
  },
  createTokens(t = {}, e, n = "", o = "", r = {}) {
    return Object.entries(t).forEach(([s, u]) => {
      const i = rt(s, e.variable.excludedKeyRegex) ? n : n ? `${n}.${ue(s)}` : ue(s), a = o ? `${o}.${s}` : s;
      st(u) ? this.createTokens(u, e, i, a, r) : (r[i] || (r[i] = {
        paths: [],
        computed(l, d = {}) {
          var c, p;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, d.binding) : l && l !== "none" ? (p = this.paths.find((b) => b.scheme === l)) == null ? void 0 : p.computed(l, d.binding) : this.paths.map((b) => b.computed(b.scheme, d[b.scheme]));
        }
      }), r[i].paths.push({
        path: a,
        value: u,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(l, d = {}) {
          const c = /{([^}]*)}/g;
          let p = u;
          if (d.name = this.path, d.binding || (d.binding = {}), rt(u, c)) {
            const g = u.trim().replaceAll(c, (v) => {
              var w;
              const S = v.replace(/{|}/g, ""), f = (w = r[S]) == null ? void 0 : w.computed(l, d);
              return Rt(f) && f.length === 2 ? `light-dark(${f[0].value},${f[1].value})` : f == null ? void 0 : f.value;
            }), y = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, h = /var\([^)]+\)/g;
            p = rt(g.replace(h, "0"), y) ? `calc(${g})` : g;
          }
          return dt(d.binding) && delete d.binding, {
            colorScheme: l,
            path: this.path,
            paths: d,
            value: p.includes("undefined") ? void 0 : p
          };
        }
      }));
    }), r;
  },
  getTokenValue(t, e, n) {
    var o;
    const s = ((a) => a.split(".").filter((d) => !rt(d.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(e), u = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, i = [(o = t[s]) == null ? void 0 : o.computed(u)].flat().filter((a) => a);
    return i.length === 1 ? i[0].value : i.reduce((a = {}, l) => {
      const d = l, { colorScheme: c } = d, p = ot(d, ["colorScheme"]);
      return a[c] = p, a;
    }, void 0);
  },
  getSelectorRule(t, e, n, o) {
    return n === "class" || n === "attr" ? pt(x(e) ? `${t}${e},${t} ${e}` : t, o) : pt(t, x(e) ? pt(e, o) : o);
  },
  transformCSS(t, e, n, o, r = {}, s, u, i) {
    if (x(e)) {
      const { cssLayer: a } = r;
      if (o !== "style") {
        const l = this.getColorSchemeOption(r, u);
        e = n === "dark" ? l.reduce((d, { type: c, selector: p }) => (x(p) && (d += p.includes("[CSS]") ? p.replace("[CSS]", e) : this.getSelectorRule(p, i, c, e)), d), "") : pt(i ?? ":root", e);
      }
      if (a) {
        const l = {
          name: "primeui"
        };
        st(a) && (l.name = U(a.name, { name: t, type: o })), x(l.name) && (e = pt(`@layer ${l.name}`, e), s == null || s.layerNames(l.name));
      }
      return e;
    }
    return "";
  }
}, T = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(t = {}) {
    const { theme: e } = t;
    e && (this._theme = Ut(K({}, e), {
      options: K(K({}, this.defaults.options), e.options)
    }), this._tokens = W.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.preset) || {};
  },
  get options() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(t) {
    this.update({ theme: t }), E.emit("theme:change", t);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(t) {
    this._theme = Ut(K({}, this.theme), { preset: t }), this._tokens = W.createTokens(t, this.defaults), this.clearLoadedStyleNames(), E.emit("preset:change", t), E.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(t) {
    this._theme = Ut(K({}, this.theme), { options: t }), this.clearLoadedStyleNames(), E.emit("options:change", t), E.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(t) {
    this._layerNames.add(t);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(t) {
    return W.getTokenValue(this.tokens, t, this.defaults);
  },
  getCommon(t = "", e) {
    return W.getCommon({ name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return W.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return W.getPresetD(n);
  },
  getCustomPreset(t = "", e, n, o) {
    const r = { name: t, preset: e, options: this.options, selector: n, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return W.getPreset(r);
  },
  getLayerOrderCSS(t = "") {
    return W.getLayerOrder(t, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(t = "", e, n = "style", o) {
    return W.transformCSS(t, e, o, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(t = "", e, n = {}) {
    return W.getCommonStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(t, e, n = {}) {
    return W.getStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(t) {
    this._loadingStyles.add(t);
  },
  onStyleUpdated(t) {
    this._loadingStyles.add(t);
  },
  onStyleLoaded(t, { name: e }) {
    this._loadingStyles.size && (this._loadingStyles.delete(e), E.emit(`theme:${e}:load`, t), !this._loadingStyles.size && E.emit("theme:load"));
  }
}, it = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, Mn = ({ dt: t }) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function $t(t) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(t);
}
function pe(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pe(Object(n), !0).forEach(function(o) {
      Un(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Un(t, e, n) {
  return (e = Wn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Wn(t) {
  var e = Kn(t, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function Kn(t, e) {
  if ($t(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if ($t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Fn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ee() && ee().components ? Xt(t) : e ? t() : Oe(t);
}
var Hn = 0;
function Yn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = A(!1), o = A(t), r = A(null), s = Pn() ? window.document : void 0, u = e.document, i = u === void 0 ? s : u, a = e.immediate, l = a === void 0 ? !0 : a, d = e.manual, c = d === void 0 ? !1 : d, p = e.name, b = p === void 0 ? "style_".concat(++Hn) : p, g = e.id, y = g === void 0 ? void 0 : g, h = e.media, v = h === void 0 ? void 0 : h, w = e.nonce, S = w === void 0 ? void 0 : w, f = e.first, $ = f === void 0 ? !1 : f, m = e.onMounted, O = m === void 0 ? void 0 : m, F = e.onUpdated, H = F === void 0 ? void 0 : F, q = e.onLoad, Y = q === void 0 ? void 0 : q, J = e.props, Q = J === void 0 ? {} : J, R = function() {
  }, tt = function(L) {
    var et = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (i) {
      var nt = be(be({}, Q), et), X = nt.name || b, lt = nt.id || y, jt = nt.nonce || S;
      r.value = i.querySelector('style[data-primevue-style-id="'.concat(X, '"]')) || i.getElementById(lt) || i.createElement("style"), r.value.isConnected || (o.value = L || t, It(r.value, {
        type: "text/css",
        id: lt,
        media: v,
        nonce: jt
      }), $ ? i.head.prepend(r.value) : i.head.appendChild(r.value), On(r.value, "data-primevue-style-id", X), It(r.value, nt), r.value.onload = function(ct) {
        return Y == null ? void 0 : Y(ct, {
          name: X
        });
      }, O == null || O(X)), !n.value && (R = cn(o, function(ct) {
        r.value.textContent = ct, H == null || H(X);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, P = function() {
    !i || !n.value || (R(), $n(r.value) && i.head.removeChild(r.value), n.value = !1, r.value = null);
  };
  return l && !c && Fn(tt), {
    id: y,
    name: b,
    el: r,
    css: o,
    unload: P,
    load: tt,
    isLoaded: dn(n)
  };
}
function _t(t) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _t(t);
}
function fe(t, e) {
  return qn(t) || Zn(t, e) || Gn(t, e) || Xn();
}
function Xn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(t, e) {
  if (t) {
    if (typeof t == "string") return ge(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ge(t, e) : void 0;
  }
}
function ge(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Zn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, s, u, i = [], a = !0, l = !1;
    try {
      if (s = (n = n.call(t)).next, e !== 0) for (; !(a = (o = s.call(n)).done) && (i.push(o.value), i.length !== e); a = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!a && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (l) throw r;
      }
    }
    return i;
  }
}
function qn(t) {
  if (Array.isArray(t)) return t;
}
function he(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Wt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? he(Object(n), !0).forEach(function(o) {
      Jn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Jn(t, e, n) {
  return (e = Qn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Qn(t) {
  var e = to(t, "string");
  return _t(e) == "symbol" ? e : e + "";
}
function to(t, e) {
  if (_t(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (_t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var eo = function(e) {
  var n = e.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, no = {}, oo = {}, D = {
  name: "base",
  css: eo,
  style: Mn,
  classes: no,
  inlineStyles: oo,
  load: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, r = o(U(e, {
      dt: yt
    }));
    return x(r) ? Yn(mt(r), Wt({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadStyle: function() {
    var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return T.transformCSS(n.name || e.name, "".concat(r).concat(o));
    });
  },
  getCommonTheme: function(e) {
    return T.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return T.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return T.getDirective(this.name, e);
  },
  getPresetTheme: function(e, n, o) {
    return T.getCustomPreset(this.name, e, n, o);
  },
  getLayerOrderThemeCSS: function() {
    return T.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = U(this.css, {
        dt: yt
      }) || "", r = mt("".concat(o).concat(e)), s = Object.entries(n).reduce(function(u, i) {
        var a = fe(i, 2), l = a[0], d = a[1];
        return u.push("".concat(l, '="').concat(d, '"')) && u;
      }, []).join(" ");
      return x(r) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(r, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return T.getCommonStyleSheet(this.name, e, n);
  },
  getThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [T.getStyleSheet(this.name, e, n)];
    if (this.style) {
      var r = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = U(this.style, {
        dt: yt
      }), u = mt(T.transformCSS(r, s)), i = Object.entries(n).reduce(function(a, l) {
        var d = fe(l, 2), c = d[0], p = d[1];
        return a.push("".concat(c, '="').concat(p, '"')) && a;
      }, []).join(" ");
      x(u) && o.push('<style type="text/css" data-primevue-style-id="'.concat(r, '" ').concat(i, ">").concat(u, "</style>"));
    }
    return o.join("");
  },
  extend: function(e) {
    return Wt(Wt({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
};
function ro() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = pn();
  return "".concat(t).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var ve = D.extend({
  name: "common"
});
function St(t) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, St(t);
}
function ao(t) {
  return Ve(t) || io(t) || ze(t) || Ie();
}
function io(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bt(t, e) {
  return Ve(t) || so(t, e) || ze(t, e) || Ie();
}
function Ie() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ze(t, e) {
  if (t) {
    if (typeof t == "string") return me(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? me(t, e) : void 0;
  }
}
function me(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function so(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, s, u, i = [], a = !0, l = !1;
    try {
      if (s = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        a = !1;
      } else for (; !(a = (o = s.call(n)).done) && (i.push(o.value), i.length !== e); a = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!a && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (l) throw r;
      }
    }
    return i;
  }
}
function Ve(t) {
  if (Array.isArray(t)) return t;
}
function ye(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function k(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ye(Object(n), !0).forEach(function(o) {
      gt(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function gt(t, e, n) {
  return (e = lo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lo(t) {
  var e = uo(t, "string");
  return St(e) == "symbol" ? e : e + "";
}
function uo(t, e) {
  if (St(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (St(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var qt = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(e) {
        E.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, n) {
        var o = this;
        E.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, n, o, r, s, u, i, a, l, d, c, p = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, b = p ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, g = p ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = g || b) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (s = r.onBeforeCreate) === null || s === void 0 || s.call(r);
    var y = (u = this.$primevueConfig) === null || u === void 0 || (u = u.pt) === null || u === void 0 ? void 0 : u._usept, h = y ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.originalValue : void 0, v = y ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 ? void 0 : l.pt;
    (d = v || h) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = ro(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = Sn(Tt(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = k({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(e) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        n == null || n(), o == null || o();
      }
    },
    _mergeProps: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return Gt(e) ? e.apply(void 0, o) : I.apply(void 0, o);
    },
    _load: function() {
      it.isStyleNameLoaded("base") || (D.loadCSS(this.$styleOptions), this._loadGlobalStyles(), it.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, n;
      !it.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (ve.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), it.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      x(e) && D.load(e, k({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!T.isStyleNameLoaded("common")) {
          var o, r, s = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, u = s.primitive, i = s.semantic, a = s.global, l = s.style;
          D.load(u == null ? void 0 : u.css, k({
            name: "primitive-variables"
          }, this.$styleOptions)), D.load(i == null ? void 0 : i.css, k({
            name: "semantic-variables"
          }, this.$styleOptions)), D.load(a == null ? void 0 : a.css, k({
            name: "global-variables"
          }, this.$styleOptions)), D.loadStyle(k({
            name: "global-style"
          }, this.$styleOptions), l), T.setLoadedStyleName("common");
        }
        if (!T.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, p, b, g = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, y = g.css, h = g.style;
          (p = this.$style) === null || p === void 0 || p.load(y, k({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (b = this.$style) === null || b === void 0 || b.loadStyle(k({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), h), T.setLoadedStyleName(this.$style.name);
        }
        if (!T.isStyleNameLoaded("layer-order")) {
          var v, w, S = (v = this.$style) === null || v === void 0 || (w = v.getLayerOrderThemeCSS) === null || w === void 0 ? void 0 : w.call(v);
          D.load(S, k({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), T.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, o, r, s = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, u = s.css, i = (r = this.$style) === null || r === void 0 ? void 0 : r.load(u, k({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = i.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      it.clearLoadedStyleNames(), E.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      E.off("theme:change", this._loadCoreStyles), E.off("theme:change", this._load), E.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var n;
      return this[e] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[e]);
    },
    _getOptionValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Zt(e, n, o);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, u = /./g.test(o) && !!r[o.split(".")[0]], i = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, a = i.mergeSections, l = a === void 0 ? !0 : a, d = i.mergeProps, c = d === void 0 ? !1 : d, p = s ? u ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, b = u ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, k(k({}, r), {}, {
        global: p || {}
      })), g = this._getPTDatasets(o);
      return l || !l && b ? c ? this._mergeProps(c, p, b, g) : k(k(k({}, p), b), g) : k(k({}, b), g);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return I(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", s = o === "root" && x((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return o !== "transition" && k(k({}, o === "root" && k(k(gt({}, "".concat(r, "name"), Z(s ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), s && gt({}, "".concat(r, "extend"), Z(this.$.type.name))), {}, gt({}, "".concat(this.$attrSelector), ""))), {}, gt({}, "".concat(r, "section"), Z(o)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return V(e) || Rt(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, s = function(i) {
        var a, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(i) : i, c = Z(o), p = Z(n.$name);
        return (a = l ? c !== p ? d == null ? void 0 : d[c] : void 0 : d == null ? void 0 : d[c]) !== null && a !== void 0 ? a : d;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: s(e.originalValue),
        value: s(e.value)
      } : s(e, !0);
    },
    _usePT: function(e, n, o, r) {
      var s = function(y) {
        return n(y, o, r);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var u, i = e._usept || ((u = this.$primevueConfig) === null || u === void 0 ? void 0 : u.ptOptions) || {}, a = i.mergeSections, l = a === void 0 ? !0 : a, d = i.mergeProps, c = d === void 0 ? !1 : d, p = s(e.originalValue), b = s(e.value);
        return p === void 0 && b === void 0 ? void 0 : V(b) ? b : V(p) ? p : l || !l && b ? c ? this._mergeProps(c, p, b) : k(k({}, p), b) : b;
      }
      return s(e);
    },
    _useGlobalPT: function(e, n, o) {
      return this._usePT(this.globalPT, e, n, o);
    },
    _useDefaultPT: function(e, n, o) {
      return this._usePT(this.defaultPT, e, n, o);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, k(k({}, this.$params), n));
    },
    ptmi: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = I(this.$_attrsWithoutPT, this.ptm(n, o));
      return r != null && r.hasOwnProperty("id") && ((e = r.id) !== null && e !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, k({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, k(k({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, e, k(k({}, this.$params), o)), s = this._getOptionValue(ve.inlineStyles, e, k(k({}, this.$params), o));
        return [s, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return U(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, k({}, n.$params)) || U(o, k({}, n.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var e, n = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = bt(o, 1), s = r[0];
        return n == null ? void 0 : n.includes(s);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return k(k({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e == null ? void 0 : e.$props,
          state: e == null ? void 0 : e.$data,
          attrs: e == null ? void 0 : e.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = bt(e, 1), o = n[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(e, n) {
        var o = bt(n, 2), r = o[0], s = o[1], u = r.split(":"), i = ao(u), a = i.slice(1);
        return a == null || a.reduce(function(l, d, c, p) {
          return !l[d] && (l[d] = c === p.length - 1 ? s : {}), l[d];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = bt(e, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(e, n) {
        var o = bt(n, 2), r = o[0], s = o[1];
        return e[r] = s, e;
      }, {});
    }
  }
}, co = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, po = D.extend({
  name: "baseicon",
  css: co
});
function kt(t) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kt(t);
}
function $e(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function _e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $e(Object(n), !0).forEach(function(o) {
      bo(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function bo(t, e, n) {
  return (e = fo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function fo(t) {
  var e = go(t, "string");
  return kt(e) == "symbol" ? e : e + "";
}
function go(t, e) {
  if (kt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (kt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ho = {
  name: "BaseIcon",
  extends: qt,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: po,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = dt(this.label);
      return _e(_e({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Re = {
  name: "SpinnerIcon",
  extends: ho
};
function vo(t, e, n, o, r, s) {
  return z(), at("svg", I({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [M("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Re.render = vo;
var mo = ({ dt: t }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
}
`, yo = {
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-badge p-component", {
      "p-badge-circle": x(n.value) && String(n.value).length === 1,
      "p-badge-dot": dt(n.value) && !o.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, $o = D.extend({
  name: "badge",
  style: mo,
  classes: yo
}), _o = {
  name: "BaseBadge",
  extends: qt,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: $o,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function wt(t) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wt(t);
}
function Se(t, e, n) {
  return (e = So(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function So(t) {
  var e = ko(t, "string");
  return wt(e) == "symbol" ? e : e + "";
}
function ko(t, e) {
  if (wt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (wt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Me = {
  name: "Badge",
  extends: _o,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return vt(Se(Se({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, wo = ["data-p"];
function Co(t, e, n, o, r, s) {
  return z(), at("span", I({
    class: t.cx("root"),
    "data-p": s.dataP
  }, t.ptmi("root")), [ft(t.$slots, "default", {}, function() {
    return [Kt(ut(t.value), 1)];
  })], 16, wo);
}
Me.render = Co;
var At = Le();
function Ct(t) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ct(t);
}
function ke(t, e) {
  return To(t) || xo(t, e) || Oo(t, e) || Po();
}
function Po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oo(t, e) {
  if (t) {
    if (typeof t == "string") return we(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? we(t, e) : void 0;
  }
}
function we(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function xo(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, s, u, i = [], a = !0, l = !1;
    try {
      if (s = (n = n.call(t)).next, e !== 0) for (; !(a = (o = s.call(n)).done) && (i.push(o.value), i.length !== e); a = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!a && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (l) throw r;
      }
    }
    return i;
  }
}
function To(t) {
  if (Array.isArray(t)) return t;
}
function Ce(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ce(Object(n), !0).forEach(function(o) {
      Ht(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Ht(t, e, n) {
  return (e = jo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function jo(t) {
  var e = Lo(t, "string");
  return Ct(e) == "symbol" ? e : e + "";
}
function Lo(t, e) {
  if (Ct(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Ct(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var _ = {
  _getMeta: function() {
    return [st(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], U(st(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var o, r, s;
    return (o = (e == null || (r = e.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (s = n.ctx) === null || s === void 0 || (s = s.appContext) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.globalProperties) === null || s === void 0 ? void 0 : s.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: Zt,
  _getPTValue: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var w = _._getOptionValue.apply(_, arguments);
      return V(w) || Rt(w) ? {
        class: w
      } : w;
    }, l = ((e = o.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = l.mergeSections, c = d === void 0 ? !0 : d, p = l.mergeProps, b = p === void 0 ? !1 : p, g = i ? _._useDefaultPT(o, o.defaultPT(), a, s, u) : void 0, y = _._usePT(o, _._getPT(r, o.$name), a, s, C(C({}, u), {}, {
      global: g || {}
    })), h = _._getPTDatasets(o, s);
    return c || !c && y ? b ? _._mergeProps(o, b, g, y, h) : C(C(C({}, g), y), h) : C(C({}, y), h);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return C(C({}, n === "root" && Ht({}, "".concat(o, "name"), Z(e.$name))), {}, Ht({}, "".concat(o, "section"), Z(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(u) {
      var i, a = o ? o(u) : u, l = Z(n);
      return (i = a == null ? void 0 : a[l]) !== null && i !== void 0 ? i : a;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: r(e.originalValue),
      value: r(e.value)
    } : r(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0, u = function(h) {
      return o(h, r, s);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var i, a = n._usept || ((i = e.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, l = a.mergeSections, d = l === void 0 ? !0 : l, c = a.mergeProps, p = c === void 0 ? !1 : c, b = u(n.originalValue), g = u(n.value);
      return b === void 0 && g === void 0 ? void 0 : V(g) ? g : V(b) ? b : d || !d && g ? p ? _._mergeProps(e, p, b, g) : C(C({}, b), g) : g;
    }
    return u(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return _._usePT(e, n, o, r, s);
  },
  _loadStyles: function() {
    var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, s = _._getConfig(o, r), u = {
      nonce: s == null || (e = s.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    _._loadCoreStyles(n, u), _._loadThemeStyles(n, u), _._loadScopedThemeStyles(n, u), _._removeThemeListeners(n), n.$loadStyles = function() {
      return _._loadThemeStyles(n, u);
    }, _._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!it.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var s;
      D.loadCSS(r), (s = o.$style) === null || s === void 0 || s.loadCSS(r), it.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (e = r.theme) === null || e === void 0 ? void 0 : e.call(r)) === "none")) {
      if (!T.isStyleNameLoaded("common")) {
        var u, i, a = ((u = r.$style) === null || u === void 0 || (i = u.getCommonTheme) === null || i === void 0 ? void 0 : i.call(u)) || {}, l = a.primitive, d = a.semantic, c = a.global, p = a.style;
        D.load(l == null ? void 0 : l.css, C({
          name: "primitive-variables"
        }, s)), D.load(d == null ? void 0 : d.css, C({
          name: "semantic-variables"
        }, s)), D.load(c == null ? void 0 : c.css, C({
          name: "global-variables"
        }, s)), D.loadStyle(C({
          name: "global-style"
        }, s), p), T.setLoadedStyleName("common");
      }
      if (!T.isStyleNameLoaded((n = r.$style) === null || n === void 0 ? void 0 : n.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var b, g, y, h, v = ((b = r.$style) === null || b === void 0 || (g = b.getDirectiveTheme) === null || g === void 0 ? void 0 : g.call(b)) || {}, w = v.css, S = v.style;
        (y = r.$style) === null || y === void 0 || y.load(w, C({
          name: "".concat(r.$style.name, "-variables")
        }, s)), (h = r.$style) === null || h === void 0 || h.loadStyle(C({
          name: "".concat(r.$style.name, "-style")
        }, s), S), T.setLoadedStyleName(r.$style.name);
      }
      if (!T.isStyleNameLoaded("layer-order")) {
        var f, $, m = (f = r.$style) === null || f === void 0 || ($ = f.getLayerOrderThemeCSS) === null || $ === void 0 ? void 0 : $.call(f);
        D.load(m, C({
          name: "layer-order",
          first: !0
        }, s)), T.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = e.preset();
    if (o && e.$attrSelector) {
      var r, s, u, i = ((r = e.$style) === null || r === void 0 || (s = r.getPresetTheme) === null || s === void 0 ? void 0 : s.call(r, o, "[".concat(e.$attrSelector, "]"))) || {}, a = i.css, l = (u = e.$style) === null || u === void 0 ? void 0 : u.load(a, C({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = l.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    it.clearLoadedStyleNames(), E.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    E.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, n, o, r, s, u) {
    var i, a, l = "on".concat(Tn(n)), d = _._getConfig(r, s), c = o == null ? void 0 : o.$instance, p = _._usePT(c, _._getPT(r == null || (i = r.value) === null || i === void 0 ? void 0 : i.pt, e), _._getOptionValue, "hooks.".concat(l)), b = _._useDefaultPT(c, d == null || (a = d.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[e], _._getOptionValue, "hooks.".concat(l)), g = {
      el: o,
      binding: r,
      vnode: s,
      prevVnode: u
    };
    p == null || p(c, g), b == null || b(c, g);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return Gt(e) ? e.apply(void 0, o) : I.apply(void 0, o);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(i, a, l, d, c) {
      var p, b, g, y;
      a._$instances = a._$instances || {};
      var h = _._getConfig(l, d), v = a._$instances[e] || {}, w = dt(v) ? C(C({}, n), n == null ? void 0 : n.methods) : {};
      a._$instances[e] = C(C({}, v), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: a,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: v.$el || a || void 0,
        $style: C({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: h,
        $attrSelector: (p = a.$pd) === null || p === void 0 || (p = p[e]) === null || p === void 0 ? void 0 : p.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return _._getPT(h == null ? void 0 : h.pt, void 0, function(f) {
            var $;
            return f == null || ($ = f.directives) === null || $ === void 0 ? void 0 : $[e];
          });
        },
        isUnstyled: function() {
          var f, $;
          return ((f = a._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.unstyled) !== void 0 ? ($ = a._$instances[e]) === null || $ === void 0 || ($ = $.$binding) === null || $ === void 0 || ($ = $.value) === null || $ === void 0 ? void 0 : $.unstyled : h == null ? void 0 : h.unstyled;
        },
        theme: function() {
          var f;
          return (f = a._$instances[e]) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.theme;
        },
        preset: function() {
          var f;
          return (f = a._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.dt;
        },
        /* instance's methods */
        ptm: function() {
          var f, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return _._getPTValue(a._$instances[e], (f = a._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.pt, $, C({}, m));
        },
        ptmo: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return _._getPTValue(a._$instances[e], f, $, m, !1);
        },
        cx: function() {
          var f, $, m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (f = a._$instances[e]) !== null && f !== void 0 && f.isUnstyled() ? void 0 : _._getOptionValue(($ = a._$instances[e]) === null || $ === void 0 || ($ = $.$style) === null || $ === void 0 ? void 0 : $.classes, m, C({}, O));
        },
        sx: function() {
          var f, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return m ? _._getOptionValue((f = a._$instances[e]) === null || f === void 0 || (f = f.$style) === null || f === void 0 ? void 0 : f.inlineStyles, $, C({}, O)) : void 0;
        }
      }, w), a.$instance = a._$instances[e], (b = (g = a.$instance)[i]) === null || b === void 0 || b.call(g, a, l, d, c), a["$".concat(e)] = a.$instance, _._hook(e, i, a, l, d, c), a.$pd || (a.$pd = {}), a.$pd[e] = C(C({}, (y = a.$pd) === null || y === void 0 ? void 0 : y[e]), {}, {
        name: e,
        instance: a._$instances[e]
      });
    }, r = function(i) {
      var a, l, d, c = i._$instances[e], p = c == null ? void 0 : c.watch, b = function(h) {
        var v, w = h.newValue, S = h.oldValue;
        return p == null || (v = p.config) === null || v === void 0 ? void 0 : v.call(c, w, S);
      }, g = function(h) {
        var v, w = h.newValue, S = h.oldValue;
        return p == null || (v = p["config.ripple"]) === null || v === void 0 ? void 0 : v.call(c, w, S);
      };
      c.$watchersCallback = {
        config: b,
        "config.ripple": g
      }, p == null || (a = p.config) === null || a === void 0 || a.call(c, c == null ? void 0 : c.$primevueConfig), At.on("config:change", b), p == null || (l = p["config.ripple"]) === null || l === void 0 || l.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), At.on("config:ripple:change", g);
    }, s = function(i) {
      var a = i._$instances[e].$watchersCallback;
      a && (At.off("config:change", a.config), At.off("config:ripple:change", a["config.ripple"]), i._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(i, a, l, d) {
        i.$pd || (i.$pd = {}), i.$pd[e] = {
          name: e,
          attrSelector: jn("pd")
        }, o("created", i, a, l, d);
      },
      beforeMount: function(i, a, l, d) {
        var c;
        _._loadStyles((c = i.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, l), o("beforeMount", i, a, l, d), r(i);
      },
      mounted: function(i, a, l, d) {
        var c;
        _._loadStyles((c = i.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, l), o("mounted", i, a, l, d);
      },
      beforeUpdate: function(i, a, l, d) {
        o("beforeUpdate", i, a, l, d);
      },
      updated: function(i, a, l, d) {
        var c;
        _._loadStyles((c = i.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, l), o("updated", i, a, l, d);
      },
      beforeUnmount: function(i, a, l, d) {
        var c;
        s(i), _._removeThemeListeners((c = i.$pd[e]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", i, a, l, d);
      },
      unmounted: function(i, a, l, d) {
        var c;
        (c = i.$pd[e]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", i, a, l, d);
      }
    };
  },
  extend: function() {
    var e = _._getMeta.apply(_, arguments), n = ke(e, 2), o = n[0], r = n[1];
    return C({
      extend: function() {
        var u = _._getMeta.apply(_, arguments), i = ke(u, 2), a = i[0], l = i[1];
        return _.extend(a, C(C(C({}, r), r == null ? void 0 : r.methods), l));
      }
    }, _._extend(o, r));
  }
}, Ao = ({ dt: t }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`, No = {
  root: "p-ink"
}, Do = D.extend({
  name: "ripple-directive",
  style: Ao,
  classes: No
}), Eo = _.extend({
  style: Do
});
function Pt(t) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pt(t);
}
function Bo(t) {
  return Ro(t) || Vo(t) || zo(t) || Io();
}
function Io() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zo(t, e) {
  if (t) {
    if (typeof t == "string") return Yt(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yt(t, e) : void 0;
  }
}
function Vo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ro(t) {
  if (Array.isArray(t)) return Yt(t);
}
function Yt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Pe(t, e, n) {
  return (e = Mo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Mo(t) {
  var e = Uo(t, "string");
  return Pt(e) == "symbol" ? e : e + "";
}
function Uo(t, e) {
  if (Pt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Pt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Wo = Eo.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var n = this.getInk(e);
      n || (n = _n("span", Pe(Pe({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(n), this.$el = n);
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, o = e.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && Mt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !se(r) && !le(r)) {
          var s = Math.max(mn(o), Cn(o));
          r.style.height = s + "px", r.style.width = s + "px";
        }
        var u = wn(o), i = e.pageX - u.left + document.body.scrollTop - le(r) / 2, a = e.pageY - u.top + document.body.scrollLeft - se(r) / 2;
        r.style.top = a + "px", r.style.left = i + "px", !this.isUnstyled() && vn(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && Mt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Mt(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? Bo(e.children).find(function(n) {
        return kn(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Ko = ({ dt: t }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding: ${t("button.padding.y")} ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding: ${t("button.sm.padding.y")} ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding: ${t("button.lg.padding.y")} ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}
`;
function Ot(t) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ot(t);
}
function G(t, e, n) {
  return (e = Fo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Fo(t) {
  var e = Ho(t, "string");
  return Ot(e) == "symbol" ? e : e + "";
}
function Ho(t, e) {
  if (Ot(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Ot(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Yo = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-button p-component", G(G(G(G(G(G(G(G(G({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(e) {
    var n = e.props;
    return ["p-button-icon", G({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, Xo = D.extend({
  name: "button",
  style: Ko,
  classes: Yo
}), Go = {
  name: "BaseButton",
  extends: qt,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: Xo,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function xt(t) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xt(t);
}
function B(t, e, n) {
  return (e = Zo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Zo(t) {
  var e = qo(t, "string");
  return xt(e) == "symbol" ? e : e + "";
}
function qo(t, e) {
  if (xt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (xt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Dt = {
  name: "Button",
  extends: Go,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return I(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return dt(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return vt(B(B(B(B(B(B(B(B(B(B({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return vt(B(B({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return vt(B(B({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Re,
    Badge: Me
  },
  directives: {
    ripple: Wo
  }
}, Jo = ["data-p"], Qo = ["data-p"];
function tr(t, e, n, o, r, s) {
  var u = ne("SpinnerIcon"), i = ne("Badge"), a = xe("ripple");
  return t.asChild ? ft(t.$slots, "default", {
    key: 1,
    class: Et(t.cx("root")),
    a11yAttrs: s.a11yAttrs
  }) : Te((z(), ht(bn(t.as), I({
    key: 0,
    class: t.cx("root"),
    "data-p": s.dataP
  }, s.attrs), {
    default: Nt(function() {
      return [ft(t.$slots, "default", {}, function() {
        return [t.loading ? ft(t.$slots, "loadingicon", I({
          key: 0,
          class: [t.cx("loadingIcon"), t.cx("icon")]
        }, t.ptm("loadingIcon")), function() {
          return [t.loadingIcon ? (z(), at("span", I({
            key: 0,
            class: [t.cx("loadingIcon"), t.cx("icon"), t.loadingIcon]
          }, t.ptm("loadingIcon")), null, 16)) : (z(), ht(u, I({
            key: 1,
            class: [t.cx("loadingIcon"), t.cx("icon")],
            spin: ""
          }, t.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : ft(t.$slots, "icon", I({
          key: 1,
          class: [t.cx("icon")]
        }, t.ptm("icon")), function() {
          return [t.icon ? (z(), at("span", I({
            key: 0,
            class: [t.cx("icon"), t.icon, t.iconClass],
            "data-p": s.dataIconP
          }, t.ptm("icon")), null, 16, Jo)) : oe("", !0)];
        }), M("span", I({
          class: t.cx("label")
        }, t.ptm("label"), {
          "data-p": s.dataLabelP
        }), ut(t.label || " "), 17, Qo), t.badge ? (z(), ht(i, {
          key: 2,
          value: t.badge,
          class: Et(t.badgeClass),
          severity: t.badgeSeverity,
          unstyled: t.unstyled,
          pt: t.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : oe("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
Dt.render = tr;
const er = { class: "toolbar" }, nr = { class: "color-picker" }, or = { class: "size-slider" }, rr = ["value"], ar = /* @__PURE__ */ Vt({
  __name: "ToolBar",
  props: {
    colors: {},
    initialColor: {},
    initialBrushSize: {},
    initialTool: {}
  },
  emits: ["tool-change", "color-change", "canvas-clear", "brush-size-change"],
  setup(t, { emit: e }) {
    const { t: n } = je(), o = t, r = e, s = o.colors || ["#000000", "#ff0000", "#0000ff", "#69a869", "#ffff00", "#ff00ff", "#00ffff"], u = A(o.initialColor || "#000000"), i = A(o.initialBrushSize || 5), a = A(o.initialTool || "pen");
    function l(b) {
      a.value = b, r("tool-change", b);
    }
    function d(b) {
      u.value = b, r("color-change", b);
    }
    function c() {
      r("canvas-clear");
    }
    function p(b) {
      const g = b.target;
      i.value = Number(g.value), r("brush-size-change", i.value);
    }
    return (b, g) => {
      const y = xe("tooltip");
      return z(), at(re, null, [
        M("div", er, [
          Te((z(), ht(N(Dt), {
            class: Et({ active: a.value === "pen" }),
            onClick: g[0] || (g[0] = (h) => l("pen"))
          }, {
            default: Nt(() => [
              Kt(ut(N(n)("vue-basic.pen")), 1)
            ]),
            _: 1
          }, 8, ["class"])), [
            [y, { value: N(n)("vue-basic.pen-tooltip"), showDelay: 300 }]
          ]),
          Bt(N(Dt), { onClick: c }, {
            default: Nt(() => [
              Kt(ut(N(n)("vue-basic.clear-canvas")), 1)
            ]),
            _: 1
          })
        ]),
        M("div", nr, [
          (z(!0), at(re, null, fn(N(s), (h, v) => (z(), ht(N(Dt), {
            key: v,
            class: Et({ "color-button": !0, active: u.value === h }),
            onClick: (w) => d(h),
            type: "button",
            title: h
          }, {
            default: Nt(() => [
              M("i", {
                class: "pi pi-circle-fill",
                style: gn({ color: h })
              }, null, 4)
            ]),
            _: 2
          }, 1032, ["class", "onClick", "title"]))), 128))
        ]),
        M("div", or, [
          M("label", null, ut(N(n)("vue-basic.brush-size")) + ": " + ut(i.value) + "px", 1),
          M("input", {
            type: "range",
            min: "1",
            max: "50",
            value: i.value,
            onChange: g[1] || (g[1] = (h) => p(h))
          }, null, 40, rr)
        ])
      ], 64);
    };
  }
}), Jt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
}, ir = /* @__PURE__ */ Jt(ar, [["__scopeId", "data-v-cf7e8687"]]), sr = { class: "drawing-board" }, lr = { class: "canvas-container" }, ur = ["width", "height"], dr = /* @__PURE__ */ Vt({
  __name: "DrawingBoard",
  props: {
    width: {},
    height: {},
    initialColor: {},
    initialBrushSize: {}
  },
  emits: ["mounted", "drawing-start", "drawing", "drawing-end", "state-save", "canvas-clear"],
  setup(t, { expose: e, emit: n }) {
    const o = t, r = o.width || 800, s = o.height || 500, u = o.initialColor || "#000000", i = o.initialBrushSize || 5, a = n, l = A(!1), d = A(0), c = A(0), p = A(null), b = A(!1), g = A(i), y = A(u), h = A(null), v = A(null);
    Xt(() => {
      v.value && (p.value = v.value.getContext("2d"), w(), Oe(() => {
        v.value && a("mounted", v.value);
      }));
    });
    function w() {
      p.value && (p.value.fillStyle = "#ffffff", p.value.fillRect(0, 0, r, s), S(), R());
    }
    function S() {
      p.value && (b.value ? (p.value.globalCompositeOperation = "destination-out", p.value.strokeStyle = "rgba(0,0,0,1)") : (p.value.globalCompositeOperation = "source-over", p.value.strokeStyle = y.value), p.value.lineWidth = g.value, p.value.lineJoin = "round", p.value.lineCap = "round");
    }
    function f(P) {
      l.value = !0;
      const { offsetX: j, offsetY: L } = O(P);
      d.value = j, c.value = L, p.value && (p.value.beginPath(), p.value.moveTo(d.value, c.value), p.value.arc(d.value, c.value, g.value / 2, 0, Math.PI * 2), p.value.fill(), a("drawing-start", {
        x: j,
        y: L,
        tool: b.value ? "eraser" : "pen"
      }));
    }
    function $(P) {
      if (!l.value || !p.value) return;
      const { offsetX: j, offsetY: L } = O(P);
      p.value.beginPath(), p.value.moveTo(d.value, c.value), p.value.lineTo(j, L), p.value.stroke(), d.value = j, c.value = L, a("drawing", {
        x: j,
        y: L,
        tool: b.value ? "eraser" : "pen"
      });
    }
    function m() {
      l.value && (l.value = !1, R(), a("drawing-end"));
    }
    function O(P) {
      let j = 0, L = 0;
      if ("touches" in P) {
        if (P.preventDefault(), v.value) {
          const et = v.value.getBoundingClientRect();
          j = P.touches[0].clientX - et.left, L = P.touches[0].clientY - et.top;
        }
      } else
        j = P.offsetX, L = P.offsetY;
      return { offsetX: j, offsetY: L };
    }
    function F(P) {
      P.preventDefault();
      const L = {
        touches: [P.touches[0]]
      };
      f(L);
    }
    function H(P) {
      if (P.preventDefault(), !l.value) return;
      const L = {
        touches: [P.touches[0]]
      };
      $(L);
    }
    function q(P) {
      b.value = P === "eraser", S();
    }
    function Y(P) {
      y.value = P, S();
    }
    function J(P) {
      g.value = P, S();
    }
    function Q() {
      p.value && (p.value.fillStyle = "#ffffff", p.value.fillRect(0, 0, r, s), S(), R(), a("canvas-clear"));
    }
    function R() {
      v.value && (h.value = v.value.toDataURL("image/png"), h.value && a("state-save", h.value));
    }
    async function tt() {
      if (!v.value)
        throw new Error("Canvas is unable to get current data");
      return h.value ? h.value : v.value.toDataURL("image/png");
    }
    return e({
      setTool: q,
      setColor: Y,
      setBrushSize: J,
      clearCanvas: Q,
      getCurrentCanvasData: tt
    }), (P, j) => (z(), at("div", sr, [
      M("div", lr, [
        M("canvas", {
          ref_key: "canvas",
          ref: v,
          width: N(r),
          height: N(s),
          onMousedown: f,
          onMousemove: $,
          onMouseup: m,
          onMouseleave: m,
          onTouchstart: F,
          onTouchmove: H,
          onTouchend: m
        }, null, 40, ur)
      ])
    ]));
  }
}), cr = /* @__PURE__ */ Jt(dr, [["__scopeId", "data-v-0441e83f"]]), pr = { class: "drawing-app" }, br = /* @__PURE__ */ Vt({
  __name: "DrawingApp",
  props: {
    width: {},
    height: {},
    initialColor: {},
    initialBrushSize: {},
    availableColors: {}
  },
  emits: ["tool-change", "color-change", "brush-size-change", "drawing-start", "drawing", "drawing-end", "state-save", "mounted"],
  setup(t, { expose: e, emit: n }) {
    const o = t, r = o.width || 800, s = o.height || 500, u = o.initialColor || "#000000", i = o.initialBrushSize || 5, a = o.availableColors || ["#000000", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ff00ff", "#00ffff"], l = n, d = A(null), c = A(null);
    function p(m) {
      var O;
      (O = d.value) == null || O.setTool(m), l("tool-change", m);
    }
    function b(m) {
      var O;
      (O = d.value) == null || O.setColor(m), l("color-change", m);
    }
    function g(m) {
      var O;
      (O = d.value) == null || O.setBrushSize(m), l("brush-size-change", m);
    }
    function y() {
      var m;
      (m = d.value) == null || m.clearCanvas();
    }
    function h(m) {
      l("drawing-start", m);
    }
    function v(m) {
      l("drawing", m);
    }
    function w() {
      l("drawing-end");
    }
    function S(m) {
      c.value = m, l("state-save", m);
    }
    function f(m) {
      l("mounted", m);
    }
    async function $() {
      if (c.value)
        return c.value;
      if (d.value)
        try {
          return await d.value.getCurrentCanvasData();
        } catch (m) {
          throw console.error("unable to get canvas data:", m), new Error("unable to get canvas data");
        }
      throw new Error("get canvas data failed");
    }
    return e({
      getCanvasData: $
    }), (m, O) => (z(), at("div", pr, [
      Bt(ir, {
        colors: N(a),
        initialColor: N(u),
        initialBrushSize: N(i),
        onToolChange: p,
        onColorChange: b,
        onBrushSizeChange: g,
        onCanvasClear: y
      }, null, 8, ["colors", "initialColor", "initialBrushSize"]),
      Bt(cr, {
        ref_key: "drawingBoard",
        ref: d,
        width: N(r),
        height: N(s),
        initialColor: N(u),
        initialBrushSize: N(i),
        onDrawingStart: h,
        onDrawing: v,
        onDrawingEnd: w,
        onStateSave: S,
        onMounted: f
      }, null, 8, ["width", "height", "initialColor", "initialBrushSize"])
    ]));
  }
}), fr = /* @__PURE__ */ Jt(br, [["__scopeId", "data-v-4e895e42"]]), gr = /* @__PURE__ */ Vt({
  __name: "VueExampleComponent",
  props: {
    widget: {}
  },
  setup(t) {
    const { t: e } = je(), n = A(null), o = A(null);
    t.widget.node;
    function r(u) {
      o.value = u, console.log("canvas state saved:", u.substring(0, 50) + "...");
    }
    async function s(u, i) {
      const a = await fetch(u).then((b) => b.blob()), l = `${i}_${Date.now()}.png`, d = new File([a], l), c = new FormData();
      return c.append("image", d), c.append("subfolder", "threed"), c.append("type", "temp"), console.log(ae.api.fetchApi), (await ae.api.fetchApi("/upload/image", {
        method: "POST",
        body: c
      })).json();
    }
    return Xt(() => {
      t.widget.serializeValue = async (u, i) => {
        console.log("inside vue"), console.log("node", u), console.log("index", i);
        const a = o.value;
        return {
          image: `threed/${(await s(a, "test_vue_basic")).name} [temp]`
        };
      };
    }), (u, i) => (z(), at("div", null, [
      M("h1", null, ut(N(e)("vue-basic.title")), 1),
      M("div", null, [
        Bt(fr, {
          ref_key: "drawingAppRef",
          ref: n,
          width: 300,
          height: 300,
          onStateSave: r
        }, null, 512)
      ])
    ]));
  }
});
sn.registerExtension({
  name: "vue-basic",
  getCustomWidgets(t) {
    return {
      CUSTOM_VUE_COMPONENT_BASIC(e) {
        const n = {
          name: "custom_vue_component_basic",
          type: "vue-basic"
        }, o = new ln({
          node: e,
          name: n.name,
          component: gr,
          inputSpec: n,
          options: {}
        });
        return un(e, o), { widget: o };
      }
    };
  },
  nodeCreated(t) {
    if (t.constructor.comfyClass !== "vue-basic") return;
    const [e, n] = t.size;
    t.setSize([Math.max(e, 320), Math.max(n, 500)]);
  }
});
