import { app as G } from "../../../scripts/app.js";
import { ComponentWidgetImpl as K, addWidget as Q } from "../../../scripts/domWidget.js";
import { defineComponent as $, ref as c, createElementBlock as T, openBlock as x, Fragment as Y, createElementVNode as z, normalizeClass as N, toDisplayString as k, unref as C, renderList as Z, normalizeStyle as ee, onMounted as V, nextTick as te, createVNode as O } from "vue";
import { useI18n as W } from "vue-i18n";
import { app as P } from "../../scripts/app.js";
const ne = { class: "toolbar" }, ae = { class: "color-picker" }, oe = ["onClick", "title"], ie = { class: "size-slider" }, le = ["value"], se = /* @__PURE__ */ $({
  __name: "ToolBar",
  props: {
    colors: {},
    initialColor: {},
    initialBrushSize: {},
    initialTool: {}
  },
  emits: ["tool-change", "color-change", "canvas-clear", "brush-size-change"],
  setup(r, { emit: h }) {
    const { t: i } = W(), n = r, d = h, B = n.colors || ["#000000", "#ff0000", "#0000ff", "#69a869", "#ffff00", "#ff00ff", "#00ffff"], v = c(n.initialColor || "#000000"), p = c(n.initialBrushSize || 5), f = c(n.initialTool || "pen");
    function o(s) {
      f.value = s, d("tool-change", s);
    }
    function l(s) {
      v.value = s, d("color-change", s);
    }
    function u() {
      d("canvas-clear");
    }
    function e(s) {
      const _ = s.target;
      p.value = Number(_.value), d("brush-size-change", p.value);
    }
    return (s, _) => (x(), T(Y, null, [
      z("div", ne, [
        z("button", {
          class: N({ active: f.value === "pen" }),
          onClick: _[0] || (_[0] = (b) => o("pen"))
        }, k(C(i)("vue-basic.pen")), 3),
        z("button", { onClick: u }, k(C(i)("vue-basic.clear-canvas")), 1)
      ]),
      z("div", ae, [
        (x(!0), T(Y, null, Z(C(B), (b, y) => (x(), T("button", {
          key: y,
          class: N({ "color-button": !0, active: v.value === b }),
          onClick: (g) => l(b),
          type: "button",
          title: b
        }, [
          z("i", {
            class: "pi pi-circle-fill",
            style: ee({ color: b })
          }, null, 4)
        ], 10, oe))), 128))
      ]),
      z("div", ie, [
        z("label", null, k(C(i)("vue-basic.brush-size")) + ": " + k(p.value) + "px", 1),
        z("input", {
          type: "range",
          min: "1",
          max: "50",
          value: p.value,
          onChange: _[1] || (_[1] = (b) => e(b))
        }, null, 40, le)
      ])
    ], 64));
  }
}), R = (r, h) => {
  const i = r.__vccOpts || r;
  for (const [n, d] of h)
    i[n] = d;
  return i;
}, re = /* @__PURE__ */ R(se, [["__scopeId", "data-v-f8c077c5"]]), ue = { class: "drawing-board" }, ce = { class: "canvas-container" }, ve = ["width", "height"], fe = /* @__PURE__ */ $({
  __name: "DrawingBoard",
  props: {
    width: {},
    height: {},
    initialColor: {},
    initialBrushSize: {}
  },
  emits: ["mounted", "drawing-start", "drawing", "drawing-end", "state-save", "canvas-clear"],
  setup(r, { expose: h, emit: i }) {
    const n = r, d = n.width || 800, B = n.height || 500, v = n.initialColor || "#000000", p = n.initialBrushSize || 5, f = i, o = c(!1), l = c(0), u = c(0), e = c(null), s = c(!1), _ = c(p), b = c(v), y = c(null), g = c(null);
    V(() => {
      g.value && (e.value = g.value.getContext("2d"), I(), te(() => {
        g.value && f("mounted", g.value);
      }));
    });
    function I() {
      e.value && (e.value.fillStyle = "#ffffff", e.value.fillRect(0, 0, d, B), D(), A());
    }
    function D() {
      e.value && (s.value ? (e.value.globalCompositeOperation = "destination-out", e.value.strokeStyle = "rgba(0,0,0,1)") : (e.value.globalCompositeOperation = "source-over", e.value.strokeStyle = b.value), e.value.lineWidth = _.value, e.value.lineJoin = "round", e.value.lineCap = "round");
    }
    function E(a) {
      o.value = !0;
      const { offsetX: w, offsetY: m } = S(a);
      l.value = w, u.value = m, e.value && (e.value.beginPath(), e.value.moveTo(l.value, u.value), e.value.arc(l.value, u.value, _.value / 2, 0, Math.PI * 2), e.value.fill(), f("drawing-start", {
        x: w,
        y: m,
        tool: s.value ? "eraser" : "pen"
      }));
    }
    function M(a) {
      if (!o.value || !e.value) return;
      const { offsetX: w, offsetY: m } = S(a);
      e.value.beginPath(), e.value.moveTo(l.value, u.value), e.value.lineTo(w, m), e.value.stroke(), l.value = w, u.value = m, f("drawing", {
        x: w,
        y: m,
        tool: s.value ? "eraser" : "pen"
      });
    }
    function t() {
      o.value && (o.value = !1, A(), f("drawing-end"));
    }
    function S(a) {
      let w = 0, m = 0;
      if ("touches" in a) {
        if (a.preventDefault(), g.value) {
          const X = g.value.getBoundingClientRect();
          w = a.touches[0].clientX - X.left, m = a.touches[0].clientY - X.top;
        }
      } else
        w = a.offsetX, m = a.offsetY;
      return { offsetX: w, offsetY: m };
    }
    function U(a) {
      a.preventDefault();
      const m = {
        touches: [a.touches[0]]
      };
      E(m);
    }
    function F(a) {
      if (a.preventDefault(), !o.value) return;
      const m = {
        touches: [a.touches[0]]
      };
      M(m);
    }
    function L(a) {
      s.value = a === "eraser", D();
    }
    function j(a) {
      b.value = a, D();
    }
    function H(a) {
      _.value = a, D();
    }
    function J() {
      e.value && (e.value.fillStyle = "#ffffff", e.value.fillRect(0, 0, d, B), D(), A(), f("canvas-clear"));
    }
    function A() {
      g.value && (y.value = g.value.toDataURL("image/png"), y.value && f("state-save", y.value));
    }
    async function q() {
      if (!g.value)
        throw new Error("Canvas is unable to get current data");
      return y.value ? y.value : g.value.toDataURL("image/png");
    }
    return h({
      setTool: L,
      setColor: j,
      setBrushSize: H,
      clearCanvas: J,
      getCurrentCanvasData: q
    }), (a, w) => (x(), T("div", ue, [
      z("div", ce, [
        z("canvas", {
          ref_key: "canvas",
          ref: g,
          width: C(d),
          height: C(B),
          onMousedown: E,
          onMousemove: M,
          onMouseup: t,
          onMouseleave: t,
          onTouchstart: U,
          onTouchmove: F,
          onTouchend: t
        }, null, 40, ve)
      ])
    ]));
  }
}), he = /* @__PURE__ */ R(fe, [["__scopeId", "data-v-0441e83f"]]), de = { class: "drawing-app" }, pe = /* @__PURE__ */ $({
  __name: "DrawingApp",
  props: {
    width: {},
    height: {},
    initialColor: {},
    initialBrushSize: {},
    availableColors: {}
  },
  emits: ["tool-change", "color-change", "brush-size-change", "drawing-start", "drawing", "drawing-end", "state-save", "mounted"],
  setup(r, { expose: h, emit: i }) {
    const n = r, d = n.width || 800, B = n.height || 500, v = n.initialColor || "#000000", p = n.initialBrushSize || 5, f = n.availableColors || ["#000000", "#ff0000", "#0000ff", "#00ff00", "#ffff00", "#ff00ff", "#00ffff"], o = i, l = c(null), u = c(null);
    function e(t) {
      var S;
      (S = l.value) == null || S.setTool(t), o("tool-change", t);
    }
    function s(t) {
      var S;
      (S = l.value) == null || S.setColor(t), o("color-change", t);
    }
    function _(t) {
      var S;
      (S = l.value) == null || S.setBrushSize(t), o("brush-size-change", t);
    }
    function b() {
      var t;
      (t = l.value) == null || t.clearCanvas();
    }
    function y(t) {
      o("drawing-start", t);
    }
    function g(t) {
      o("drawing", t);
    }
    function I() {
      o("drawing-end");
    }
    function D(t) {
      u.value = t, o("state-save", t);
    }
    function E(t) {
      o("mounted", t);
    }
    async function M() {
      if (u.value)
        return u.value;
      if (l.value)
        try {
          return await l.value.getCurrentCanvasData();
        } catch (t) {
          throw console.error("unable to get canvas data:", t), new Error("unable to get canvas data");
        }
      throw new Error("get canvas data failed");
    }
    return h({
      getCanvasData: M
    }), (t, S) => (x(), T("div", de, [
      O(re, {
        colors: C(f),
        initialColor: C(v),
        initialBrushSize: C(p),
        onToolChange: e,
        onColorChange: s,
        onBrushSizeChange: _,
        onCanvasClear: b
      }, null, 8, ["colors", "initialColor", "initialBrushSize"]),
      O(he, {
        ref_key: "drawingBoard",
        ref: l,
        width: C(d),
        height: C(B),
        initialColor: C(v),
        initialBrushSize: C(p),
        onDrawingStart: y,
        onDrawing: g,
        onDrawingEnd: I,
        onStateSave: D,
        onMounted: E
      }, null, 8, ["width", "height", "initialColor", "initialBrushSize"])
    ]));
  }
}), ge = /* @__PURE__ */ R(pe, [["__scopeId", "data-v-4e895e42"]]), me = /* @__PURE__ */ $({
  __name: "VueExampleComponent",
  props: {
    widget: {}
  },
  setup(r) {
    const { t: h } = W(), i = c(null), n = c(null);
    r.widget.node;
    function d(v) {
      n.value = v, console.log("canvas state saved:", v.substring(0, 50) + "...");
    }
    async function B(v, p) {
      const f = await fetch(v).then((s) => s.blob()), o = `${p}_${Date.now()}.png`, l = new File([f], o), u = new FormData();
      return u.append("image", l), u.append("subfolder", "threed"), u.append("type", "temp"), console.log(P.api.fetchApi), (await P.api.fetchApi("/upload/image", {
        method: "POST",
        body: u
      })).json();
    }
    return V(() => {
      r.widget.serializeValue = async (v, p) => {
        console.log("inside vue"), console.log("node", v), console.log("index", p);
        const f = n.value;
        return {
          image: `threed/${(await B(f, "test_vue_basic")).name} [temp]`
        };
      };
    }), (v, p) => (x(), T("div", null, [
      z("h1", null, k(C(h)("vue-basic.title")), 1),
      z("div", null, [
        O(ge, {
          ref_key: "drawingAppRef",
          ref: i,
          width: 300,
          height: 300,
          onStateSave: d
        }, null, 512)
      ])
    ]));
  }
});
G.registerExtension({
  name: "vue-basic",
  getCustomWidgets(r) {
    return {
      CUSTOM_VUE_COMPONENT_BASIC(h) {
        const i = {
          name: "custom_vue_component_basic",
          type: "vue-basic"
        }, n = new K({
          node: h,
          name: i.name,
          component: me,
          inputSpec: i,
          options: {}
        });
        return Q(h, n), { widget: n };
      }
    };
  },
  nodeCreated(r) {
    if (r.constructor.comfyClass !== "vue-basic") return;
    const [h, i] = r.size;
    r.setSize([Math.max(h, 320), Math.max(i, 500)]);
  }
});
