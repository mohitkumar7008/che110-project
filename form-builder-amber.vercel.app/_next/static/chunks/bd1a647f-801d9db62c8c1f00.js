"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [434], {
        46431: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(67294),
                r = i(62972),
                s = function(t) {
                    if (t && t.__esModule) return t;
                    var e = Object.create(null);
                    return t && Object.keys(t).forEach(function(i) {
                        if ("default" !== i) {
                            var n = Object.getOwnPropertyDescriptor(t, i);
                            Object.defineProperty(e, i, n.get ? n : {
                                enumerable: !0,
                                get: function() {
                                    return t[i]
                                }
                            })
                        }
                    }), e.default = t, Object.freeze(e)
                }(n),
                o = n && "object" == typeof n && "default" in n ? n : {
                    default: n
                };
            let a = n.createContext({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                l = n.createContext({}),
                u = n.createContext(null),
                c = r.isBrowser ? n.useLayoutEffect : n.useEffect,
                h = n.createContext({
                    strict: !1
                });

            function m(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }

            function d(t) {
                for (let e in t) r.featureDefinitions[e] = { ...r.featureDefinitions[e],
                    ...t[e]
                }
            }
            let p = n.createContext({}),
                f = n.createContext({}),
                g = Symbol.for("motionComponentSymbol");

            function v({
                preloadedFeatures: t,
                createVisualElement: e,
                useRender: i,
                useVisualState: o,
                Component: v
            }) {
                t && d(t);
                let y = n.forwardRef(function(d, g) {
                    var y, x;
                    let P;
                    let E = { ...n.useContext(a),
                            ...d,
                            layoutId: function({
                                layoutId: t
                            }) {
                                let e = n.useContext(p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(d)
                        },
                        {
                            isStatic: T
                        } = E,
                        S = function(t) {
                            let {
                                initial: e,
                                animate: i
                            } = function(t, e) {
                                if (r.isControllingVariants(t)) {
                                    let {
                                        initial: e,
                                        animate: i
                                    } = t;
                                    return {
                                        initial: !1 === e || r.isVariantLabel(e) ? e : void 0,
                                        animate: r.isVariantLabel(i) ? i : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, n.useContext(l));
                            return n.useMemo(() => ({
                                initial: e,
                                animate: i
                            }), [m(e), m(i)])
                        }(d),
                        A = o(d, T);
                    if (!T && r.isBrowser) {
                        S.visualElement = function(t, e, i, r) {
                            let {
                                visualElement: s
                            } = n.useContext(l), o = n.useContext(h), m = n.useContext(u), d = n.useContext(a).reducedMotion, p = n.useRef();
                            r = r || o.renderer, !p.current && r && (p.current = r(t, {
                                visualState: e,
                                parent: s,
                                props: i,
                                presenceContext: m,
                                blockInitialAnimation: !!m && !1 === m.initial,
                                reducedMotionConfig: d
                            }));
                            let f = p.current;
                            n.useInsertionEffect(() => {
                                f && f.update(i, m)
                            }), c(() => {
                                f && f.render()
                            }), n.useEffect(() => {
                                f && f.updateFeatures()
                            });
                            let g = window.HandoffAppearAnimations ? c : n.useEffect;
                            return g(() => {
                                f && f.animationState && f.animationState.animateChanges()
                            }), f
                        }(v, A, E, e);
                        let i = n.useContext(f),
                            r = n.useContext(h).strict;
                        S.visualElement && (P = S.visualElement.loadFeatures(E, r, t, i))
                    }
                    return s.createElement(l.Provider, {
                        value: S
                    }, P && S.visualElement ? s.createElement(P, {
                        visualElement: S.visualElement,
                        ...E
                    }) : null, i(v, d, (y = S.visualElement, x = g, n.useCallback(t => {
                        t && A.mount && A.mount(t), y && (t ? y.mount(t) : y.unmount()), x && ("function" == typeof x ? x(t) : r.isRefObject(x) && (x.current = t))
                    }, [y])), A, T, S.visualElement))
                });
                return y[g] = v, y
            }

            function y(t) {
                function e(e, i = {}) {
                    return v(t(e, i))
                }
                if ("undefined" == typeof Proxy) return e;
                let i = new Map;
                return new Proxy(e, {
                    get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                })
            }
            let x = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function P(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (x.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let E = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function T(t, e, i) {
                for (let n in e) r.isMotionValue(e[n]) || r.isForcedMotionValue(n, i) || (t[n] = e[n])
            }

            function S(t, e, i) {
                let s = {},
                    o = function(t, e, i) {
                        let s = t.style || {},
                            o = {};
                        return T(o, s, t), Object.assign(o, function({
                            transformTemplate: t
                        }, e, i) {
                            return n.useMemo(() => {
                                let n = E();
                                return r.buildHTMLStyles(n, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, n.vars, n.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(o) : o
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = o, s
            }
            let A = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function b(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || A.has(t)
            }
            let w = t => !b(t);

            function D(t) {
                t && (w = e => e.startsWith("on") ? !b(e) : t(e))
            }
            try {
                D(i(78208).Z)
            } catch (t) {}

            function V(t, e, i) {
                let n = {};
                for (let r in t)("values" !== r || "object" != typeof t.values) && (w(r) || !0 === i && b(r) || !e && !b(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                return n
            }
            let C = () => ({ ...E(),
                attrs: {}
            });

            function R(t, e, i, s) {
                let o = n.useMemo(() => {
                    let i = C();
                    return r.buildSVGAttrs(i, e, {
                        enableHardwareAcceleration: !1
                    }, r.isSVGTag(s), t.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    T(e, t.style, t), o.style = { ...e,
                        ...o.style
                    }
                }
                return o
            }

            function B(t) {
                let e = n.useRef(null);
                return null === e.current && (e.current = t()), e.current
            }

            function L(t) {
                let e = r.isMotionValue(t) ? t.get() : t;
                return r.isCustomValue(e) ? e.toValue() : e
            }
            let M = t => (e, i) => {
                    let s = n.useContext(l),
                        o = n.useContext(u),
                        a = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, n, s, o) {
                            let a = {
                                latestValues: function(t, e, i, n) {
                                    let s = {},
                                        o = n(t, {});
                                    for (let t in o) s[t] = L(o[t]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = t, u = r.isControllingVariants(t), c = r.isVariantNode(t);
                                    e && c && !u && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                    let h = !!i && !1 === i.initial;
                                    h = h || !1 === a;
                                    let m = h ? l : a;
                                    if (m && "boolean" != typeof m && !r.isAnimationControls(m)) {
                                        let e = Array.isArray(m) ? m : [m];
                                        e.forEach(e => {
                                            let i = r.resolveVariantFromProps(t, e);
                                            if (!i) return;
                                            let {
                                                transitionEnd: n,
                                                transition: o,
                                                ...a
                                            } = i;
                                            for (let t in a) {
                                                let e = a[t];
                                                if (Array.isArray(e)) {
                                                    let t = h ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (s[t] = e)
                                            }
                                            for (let t in n) s[t] = n[t]
                                        })
                                    }
                                    return s
                                }(n, s, o, t),
                                renderState: e()
                            };
                            return i && (a.mount = t => i(n, t, a)), a
                        })(t, e, s, o);
                    return i ? a() : B(a)
                },
                k = {
                    useVisualState: M({
                        scrapeMotionValuesFromProps: r.scrapeMotionValuesFromProps,
                        createRenderState: C,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            try {
                                i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                i.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            r.buildSVGAttrs(i, n, {
                                enableHardwareAcceleration: !1
                            }, r.isSVGTag(e.tagName), t.transformTemplate), r.renderSVG(e, i)
                        }
                    })
                },
                j = {
                    useVisualState: M({
                        scrapeMotionValuesFromProps: r.scrapeMotionValuesFromProps$1,
                        createRenderState: E
                    })
                };

            function F(t, {
                forwardMotionProps: e = !1
            }, i, s) {
                let o = P(t) ? k : j;
                return { ...o,
                    preloadedFeatures: i,
                    useRender: function(t = !1) {
                        let e = (e, i, s, {
                            latestValues: o
                        }, a) => {
                            let l = P(e) ? R : S,
                                u = l(i, o, a, e),
                                c = V(i, "string" == typeof e, t),
                                h = { ...c,
                                    ...u,
                                    ref: s
                                },
                                {
                                    children: m
                                } = i,
                                d = n.useMemo(() => r.isMotionValue(m) ? m.get() : m, [m]);
                            return n.createElement(e, { ...h,
                                children: d
                            })
                        };
                        return e
                    }(e),
                    createVisualElement: s,
                    Component: t
                }
            }

            function I(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let O = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function U(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let z = t => e => O(e) && t(e, U(e));

            function G(t, e, i, n) {
                return I(t, e, z(i), n)
            }

            function N(t) {
                let e = null;
                return () => {
                    let i = () => {
                        e = null
                    };
                    return null === e && (e = t, i)
                }
            }
            let H = N("dragHorizontal"),
                $ = N("dragVertical");

            function W(t) {
                let e = !1;
                if ("y" === t) e = $();
                else if ("x" === t) e = H();
                else {
                    let t = H(),
                        i = $();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function Y() {
                let t = W(!0);
                return !t || (t(), !1)
            }
            class X {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function _(t, e) {
                let i = "onHover" + (e ? "Start" : "End"),
                    n = (n, s) => {
                        if ("touch" === n.type || Y()) return;
                        let o = t.getProps();
                        t.animationState && o.whileHover && t.animationState.setActive("whileHover", e), o[i] && r.frame.update(() => o[i](n, s))
                    };
                return G(t.current, "pointer" + (e ? "enter" : "leave"), n, {
                    passive: !t.getProps()[i]
                })
            }
            let K = (t, e) => !!e && (t === e || K(t, e.parentElement));

            function q(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, U(i))
            }
            let Z = new WeakMap,
                J = new WeakMap,
                Q = t => {
                    let e = Z.get(t.target);
                    e && e(t)
                },
                tt = t => {
                    t.forEach(Q)
                },
                te = {
                    some: 0,
                    all: 1
                },
                ti = {
                    inView: {
                        Feature: class extends X {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: n = "some",
                                    once: r
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof n ? n : te[n]
                                }, o = t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: n
                                    } = this.node.getProps(), s = e ? i : n;
                                    s && s(t)
                                };
                                return function(t, e, i) {
                                    let n = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        J.has(i) || J.set(i, {});
                                        let n = J.get(i),
                                            r = JSON.stringify(e);
                                        return n[r] || (n[r] = new IntersectionObserver(tt, {
                                            root: t,
                                            ...e
                                        })), n[r]
                                    }(e);
                                    return Z.set(t, i), n.observe(t), () => {
                                        Z.delete(t), n.unobserve(t)
                                    }
                                }(this.node.current, s, o)
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends X {
                            constructor() {
                                super(...arguments), this.removeStartListeners = r.noop, this.removeEndListeners = r.noop, this.removeAccessibleListeners = r.noop, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        n = (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: n
                                            } = this.node.getProps();
                                            r.frame.update(() => {
                                                K(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                            })
                                        },
                                        s = G(window, "pointerup", n, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        o = G(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = r.pipe(s, o), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = t => {
                                            if ("Enter" !== t.key || this.isPressing) return;
                                            let e = t => {
                                                "Enter" === t.key && this.checkPressEnd() && q("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && r.frame.update(() => i(t, e))
                                                })
                                            };
                                            this.removeEndListeners(), this.removeEndListeners = I(this.node.current, "keyup", e), q("down", (t, e) => {
                                                this.startPress(t, e)
                                            })
                                        },
                                        e = I(this.node.current, "keydown", t),
                                        i = () => {
                                            this.isPressing && q("cancel", (t, e) => this.cancelPress(t, e))
                                        },
                                        n = I(this.node.current, "blur", i);
                                    this.removeAccessibleListeners = r.pipe(e, n)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: n
                                } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && r.frame.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Y()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && r.frame.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = G(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = I(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = r.pipe(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends X {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = r.pipe(I(this.node.current, "focus", () => this.onFocus()), I(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends X {
                            mount() {
                                this.unmount = r.pipe(_(this.node, !0), _(this.node, !1))
                            }
                            unmount() {}
                        }
                    }
                };

            function tn(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function tr(t, e, i = {}) {
                let n = r.resolveVariant(t, e, i.custom),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = n ? () => Promise.all(r.animateTarget(t, n, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(ts).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(tr(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function ts(t, e) {
                return t.sortNodePosition(e)
            }

            function to(t, e, i = {}) {
                let n;
                if (t.notify("AnimationStart", e), Array.isArray(e)) {
                    let r = e.map(e => tr(t, e, i));
                    n = Promise.all(r)
                } else if ("string" == typeof e) n = tr(t, e, i);
                else {
                    let s = "function" == typeof e ? r.resolveVariant(t, e, i.custom) : e;
                    n = Promise.all(r.animateTarget(t, s, i))
                }
                return n.then(() => t.notify("AnimationComplete", e))
            }
            let ta = [...r.variantPriorityOrder].reverse(),
                tl = r.variantPriorityOrder.length;

            function tu(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let tc = 0,
                th = {
                    animation: {
                        Feature: class extends X {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => to(t, e, i))),
                                        i = {
                                            animate: tu(!0),
                                            whileInView: tu(),
                                            whileHover: tu(),
                                            whileTap: tu(),
                                            whileDrag: tu(),
                                            whileFocus: tu(),
                                            exit: tu()
                                        },
                                        n = !0,
                                        s = (e, i) => {
                                            let n = r.resolveVariant(t, i);
                                            if (n) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: i,
                                                    ...r
                                                } = n;
                                                e = { ...e,
                                                    ...r,
                                                    ...i
                                                }
                                            }
                                            return e
                                        };

                                    function o(o, a) {
                                        let l = t.getProps(),
                                            u = t.getVariantContext(!0) || {},
                                            c = [],
                                            h = new Set,
                                            m = {},
                                            d = 1 / 0;
                                        for (let e = 0; e < tl; e++) {
                                            var p;
                                            let f = ta[e],
                                                g = i[f],
                                                v = void 0 !== l[f] ? l[f] : u[f],
                                                y = r.isVariantLabel(v),
                                                x = f === a ? g.isActive : null;
                                            !1 === x && (d = e);
                                            let P = v === u[f] && v !== l[f] && y;
                                            if (P && n && t.manuallyAnimateOnMount && (P = !1), g.protectedKeys = { ...m
                                                }, !g.isActive && null === x || !v && !g.prevProp || r.isAnimationControls(v) || "boolean" == typeof v) continue;
                                            let E = (p = g.prevProp, "string" == typeof v ? v !== p : !!Array.isArray(v) && !tn(v, p)),
                                                T = E || f === a && g.isActive && !P && y || e > d && y,
                                                S = Array.isArray(v) ? v : [v],
                                                A = S.reduce(s, {});
                                            !1 === x && (A = {});
                                            let {
                                                prevResolvedValues: b = {}
                                            } = g, w = { ...b,
                                                ...A
                                            }, D = t => {
                                                T = !0, h.delete(t), g.needsAnimating[t] = !0
                                            };
                                            for (let t in w) {
                                                let e = A[t],
                                                    i = b[t];
                                                m.hasOwnProperty(t) || (e !== i ? r.isKeyframesTarget(e) && r.isKeyframesTarget(i) ? !tn(e, i) || E ? D(t) : g.protectedKeys[t] = !0 : void 0 !== e ? D(t) : h.add(t) : void 0 !== e && h.has(t) ? D(t) : g.protectedKeys[t] = !0)
                                            }
                                            g.prevProp = v, g.prevResolvedValues = A, g.isActive && (m = { ...m,
                                                ...A
                                            }), n && t.blockInitialAnimation && (T = !1), T && !P && c.push(...S.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: f,
                                                    ...o
                                                }
                                            })))
                                        }
                                        if (h.size) {
                                            let e = {};
                                            h.forEach(i => {
                                                let n = t.getBaseTarget(i);
                                                void 0 !== n && (e[i] = n)
                                            }), c.push({
                                                animation: e
                                            })
                                        }
                                        let f = Boolean(c.length);
                                        return n && !1 === l.initial && !t.manuallyAnimateOnMount && (f = !1), n = !1, f ? e(c) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: o,
                                        setActive: function(e, n, r) {
                                            var s;
                                            if (i[e].isActive === n) return Promise.resolve();
                                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                            }), i[e].isActive = n;
                                            let a = o(r, e);
                                            for (let t in i) i[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(i) {
                                            e = i(t)
                                        },
                                        getState: () => i
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), r.isAnimationControls(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends X {
                            constructor() {
                                super(...arguments), this.id = tc++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let r = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && r.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    }
                };
            class tm {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = tf(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = r.distance2D(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: s
                            } = r.frameData;
                            this.history.push({ ...n,
                                timestamp: s
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = td(e, this.transformPagePoint), r.frame.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, r = tf("pointercancel" === t.type ? this.lastMoveEventInfo : td(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), n && n(t, r)
                        }, !O(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let n = U(t),
                        s = td(n, this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = r.frameData;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, tf(s, this.history)), this.removeListeners = r.pipe(G(window, "pointermove", this.handlePointerMove), G(window, "pointerup", this.handlePointerUp), G(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), r.cancelFrame(this.updatePoint)
                }
            }

            function td(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function tp(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function tf({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: tp(t, tg(e)),
                    offset: tp(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            s = tg(t);
                        for (; i >= 0 && (n = t[i], !(s.timestamp - n.timestamp > r.secondsToMilliseconds(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let o = r.millisecondsToSeconds(s.timestamp - n.timestamp);
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (s.x - n.x) / o,
                            y: (s.y - n.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function tg(t) {
                return t[t.length - 1]
            }

            function tv(t) {
                return t.max - t.min
            }

            function ty(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function tx(t, e, i, n = .5) {
                t.origin = n, t.originPoint = r.mix(e.min, e.max, t.origin), t.scale = tv(i) / tv(e), (ty(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = r.mix(i.min, i.max, t.origin) - t.originPoint, (ty(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function tP(t, e, i, n) {
                tx(t.x, e.x, i.x, n ? n.originX : void 0), tx(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function tE(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + tv(e)
            }

            function tT(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + tv(e)
            }

            function tS(t, e, i) {
                tT(t.x, e.x, i.x), tT(t.y, e.y, i.y)
            }

            function tA(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function tb(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function tw(t, e, i) {
                return {
                    min: tD(t, e),
                    max: tD(t, i)
                }
            }

            function tD(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }

            function tV(t) {
                return [t("x"), t("y")]
            }
            let tC = new WeakMap;
            class tR {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = r.createBox(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let n = t => {
                            this.stopAnimation(), e && this.snapToCursor(U(t, "page").point)
                        },
                        s = (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: s
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = W(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tV(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (r.percent.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = tv(n);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), s && r.frame.update(() => s(t, e), !1, !0);
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        o = (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        a = (t, e) => this.stop(t, e);
                    this.panSession = new tm(t, {
                        onSessionStart: n,
                        onStart: s,
                        onMove: o,
                        onSessionEnd: a
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: s
                    } = this.getProps();
                    s && r.frame.update(() => s(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !tB(t, n, this.currentDirection)) return;
                    let s = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? r.mix(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? r.mix(i, t, n.max) : Math.min(t, i)), t
                    }(o, this.constraints[t], this.elastic[t])), s.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && r.isRefObject(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: tA(t.x, i, r),
                            y: tA(t.y, e, n)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: tw(t, "left", "right"),
                            y: tw(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && tV(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !r.isRefObject(e)) return !1;
                    let n = e.current;
                    r.invariant(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: s
                    } = this.visualElement;
                    if (!s || !s.layout) return !1;
                    let o = r.measurePageBox(n, s.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: tb((t = s.layout.layoutBox).x, o.x),
                            y: tb(t.y, o.y)
                        };
                    if (i) {
                        let t = i(r.convertBoxToBoundingBox(a));
                        this.hasMutatedConstraints = !!t, t && (a = r.convertBoundingBoxToBox(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {}, l = tV(o => {
                        if (!tB(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    });
                    return Promise.all(l).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(r.animateMotionValue(t, i, 0, e))
                }
                stopAnimation() {
                    tV(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        n = i[e];
                    return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    tV(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!tB(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, s = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: o
                            } = n.layout.layoutBox[e];
                            s.set(t[e] - r.mix(i, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!r.isRefObject(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    tV(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = tv(t),
                                    s = tv(e);
                                return s > n ? i = r.progress(e.min, e.max - n, t.min) : n > s && (i = r.progress(t.min, t.max - s, e.min)), r.clamp(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), tV(e => {
                        if (!tB(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: s,
                                max: o
                            } = this.constraints[e];
                        i.set(r.mix(s, o, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    tC.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = G(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            r.isRefObject(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        s = n.addEventListener("measure", i);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), i();
                    let o = I(window, "resize", () => this.scalePositionWithinConstraints()),
                        a = n.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (tV(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        o(), e(), s(), a && a()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function tB(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let tL = t => (e, i) => {
                    t && r.frame.update(() => t(e, i))
                },
                tM = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tk = tM.length,
                tj = t => "string" == typeof t ? parseFloat(t) : t,
                tF = t => "number" == typeof t || r.px.test(t);

            function tI(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tO = tz(0, .5, r.circOut),
                tU = tz(.5, .95, r.noop);

            function tz(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(r.progress(t, e, n))
            }

            function tG(t, e) {
                t.min = e.min, t.max = e.max
            }

            function tN(t, e) {
                tG(t.x, e.x), tG(t.y, e.y)
            }

            function tH(t, e, i, n, s) {
                return t -= e, t = r.scalePoint(t, 1 / i, n), void 0 !== s && (t = r.scalePoint(t, 1 / s, n)), t
            }

            function t$(t, e, [i, n, s], o, a) {
                ! function(t, e = 0, i = 1, n = .5, s, o = t, a = t) {
                    if (r.percent.test(e)) {
                        e = parseFloat(e);
                        let t = r.mix(a.min, a.max, e / 100);
                        e = t - a.min
                    }
                    if ("number" != typeof e) return;
                    let l = r.mix(o.min, o.max, n);
                    t === o && (l -= e), t.min = tH(t.min, e, i, l, s), t.max = tH(t.max, e, i, l, s)
                }(t, e[i], e[n], e[s], e.scale, o, a)
            }
            let tW = ["x", "scaleX", "originX"],
                tY = ["y", "scaleY", "originY"];

            function tX(t, e, i, n) {
                t$(t.x, e, tW, i ? i.x : void 0, n ? n.x : void 0), t$(t.y, e, tY, i ? i.y : void 0, n ? n.y : void 0)
            }

            function t_(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function tK(t) {
                return t_(t.x) && t_(t.y)
            }

            function tq(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function tZ(t) {
                return tv(t.x) / tv(t.y)
            }
            class tJ {
                constructor() {
                    this.members = []
                }
                add(t) {
                    r.addUniqueItem(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (r.removeItem(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function tQ(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
            }
            let t0 = (t, e) => t.depth - e.depth;
            class t1 {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    r.addUniqueItem(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    r.removeItem(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(t0), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let t5 = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                t3 = ["", "X", "Y", "Z"],
                t2 = 0,
                t4 = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function t7({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: s
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = t2++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            t4.totalNodes = t4.resolvedTargetDeltas = t4.recalculatedProjection = 0, this.nodes.forEach(t8), this.nodes.forEach(es), this.nodes.forEach(eo), this.nodes.forEach(et), window.MotionDebug && window.MotionDebug.record(t4)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new t1)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new r.SubscriptionManager), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = r.isSVGElement(e), this.instance = e;
                        let {
                            layoutId: n,
                            layout: s,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (s || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = r.delay(n, 250), t5.hasAnimatedSinceResize && (t5.hasAnimatedSinceResize = !1, this.nodes.forEach(er))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && o && (n || s) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let s = this.options.transition || o.getDefaultTransition() || em,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: l
                                } = o.getProps(),
                                u = !this.targetLayout || !tq(this.targetLayout, n) || i,
                                c = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || e && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, c);
                                let e = { ...r.getValueTransition(s, "layout"),
                                    onPlay: a,
                                    onComplete: l
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || er(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, r.cancelFrame(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ea), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ei);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.nodes.forEach(en), this.nodes.forEach(t6), this.nodes.forEach(t9), this.clearAllSnapshots(), r.steps.update.process(r.frameData), r.steps.preRender.process(r.frameData), r.steps.render.process(r.frameData))
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(ee), this.sharedNodes.forEach(el)
                    }
                    scheduleUpdateProjection() {
                        r.frame.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        r.frame.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = r.createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!s) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !tK(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            o = n !== this.prevTransformTemplateValue;
                        t && (e || r.hasTransform(this.latestValues) || o) && (s(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), ed((e = n).x), ed(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return r.createBox();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (r.translateAxis(e.x, i.offset.x), r.translateAxis(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = r.createBox();
                        tN(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: s,
                                    options: o
                                } = n;
                            if (n !== this.root && s && o.layoutScroll) {
                                if (s.isRoot) {
                                    tN(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (r.translateAxis(e.x, -i.offset.x), r.translateAxis(e.y, -i.offset.y))
                                }
                                r.translateAxis(e.x, s.offset.x), r.translateAxis(e.y, s.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = r.createBox();
                        tN(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && r.transformBox(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), r.hasTransform(n.latestValues) && r.transformBox(i, n.latestValues)
                        }
                        return r.hasTransform(this.latestValues) && r.transformBox(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = r.createBox();
                        tN(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !r.hasTransform(i.latestValues)) continue;
                            r.hasScale(i.latestValues) && i.updateSnapshot();
                            let n = r.createBox(),
                                s = i.measurePageBox();
                            tN(n, s), tX(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return r.hasTransform(this.latestValues) && tX(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== r.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, s;
                        let o = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                        let a = Boolean(this.resumingFrom) || this !== o,
                            l = !(t || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (l) return;
                        let {
                            layout: u,
                            layoutId: c
                        } = this.options;
                        if (this.layout && (u || c)) {
                            if (this.resolvedRelativeTargetAt = r.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = r.createBox(), this.relativeTargetOrigin = r.createBox(), tS(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tN(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = r.createBox(), this.targetWithTransforms = r.createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, s = this.relativeParent.target, tE(i.x, n.x, s.x), tE(i.y, n.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : tN(this.target, this.layout.layoutBox), r.applyBoxDelta(this.target, this.targetDelta)) : tN(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = r.createBox(), this.relativeTargetOrigin = r.createBox(), tS(this.relativeTargetOrigin, this.target, t.target), tN(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                t4.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || r.hasScale(this.parent.latestValues) || r.has2DTranslate(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === r.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: s,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || o)) return;
                        tN(this.layoutCorrected, this.layout.layoutBox), r.applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, i);
                        let {
                            target: a
                        } = e;
                        if (!a) return;
                        this.projectionDelta || (this.projectionDelta = r.createDelta(), this.projectionDeltaWithTransform = r.createDelta());
                        let l = this.treeScale.x,
                            u = this.treeScale.y,
                            c = this.projectionTransform;
                        tP(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.projectionTransform = tQ(this.projectionDelta, this.treeScale), (this.projectionTransform !== c || this.treeScale.x !== l || this.treeScale.y !== u) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), t4.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            s = n ? n.latestValues : {},
                            o = { ...this.latestValues
                            },
                            a = r.createDelta();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let l = r.createBox(),
                            u = n ? n.source : void 0,
                            c = this.layout ? this.layout.source : void 0,
                            h = u !== c,
                            m = this.getStack(),
                            d = !m || m.members.length <= 1,
                            p = Boolean(h && !d && !0 === this.options.crossfade && !this.path.some(eh));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var n, u;
                            let c = e / 1e3;
                            eu(a.x, t.x, c), eu(a.y, t.y, c), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (tS(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), n = this.relativeTarget, u = this.relativeTargetOrigin, ec(n.x, u.x, l.x, c), ec(n.y, u.y, l.y, c), i && tq(this.relativeTarget, i) && (this.isProjectionDirty = !1), i || (i = r.createBox()), tN(i, this.relativeTarget)), h && (this.animationValues = o, function(t, e, i, n, s, o) {
                                s ? (t.opacity = r.mix(0, void 0 !== i.opacity ? i.opacity : 1, tO(n)), t.opacityExit = r.mix(void 0 !== e.opacity ? e.opacity : 1, 0, tU(n))) : o && (t.opacity = r.mix(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let s = 0; s < tk; s++) {
                                    let o = `border${tM[s]}Radius`,
                                        a = tI(e, o),
                                        l = tI(i, o);
                                    if (void 0 === a && void 0 === l) continue;
                                    a || (a = 0), l || (l = 0);
                                    let u = 0 === a || 0 === l || tF(a) === tF(l);
                                    u ? (t[o] = Math.max(r.mix(tj(a), tj(l), n), 0), (r.percent.test(l) || r.percent.test(a)) && (t[o] += "%")) : t[o] = l
                                }(e.rotate || i.rotate) && (t.rotate = r.mix(e.rotate || 0, i.rotate || 0, n))
                            }(o, s, this.latestValues, c, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = c
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (r.cancelFrame(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = r.frame.update(() => {
                            t5.hasAnimatedSinceResize = !0, this.currentAnimation = r.animateSingleValue(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: s
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && ep(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || r.createBox();
                                let e = tv(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = tv(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            tN(e, i), r.transformBox(e, s), tP(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new tJ);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < t3.length; e++) {
                            let r = "rotate" + t3[e];
                            i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let s = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = L(t.pointerEvents) || "", n.transform = s ? s(this.latestValues, "") : "none", n;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = L(t.pointerEvents) || ""), this.hasProjected && !r.hasTransform(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
                        }
                        let a = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), n.transform = tQ(this.projectionDeltaWithTransform, this.treeScale, a), s && (n.transform = s(a, n.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, o.animationValues ? n.opacity = o === this ? null !== (i = null !== (e = a.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, r.scaleCorrectors) {
                            if (void 0 === a[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = r.scaleCorrectors[t], s = "none" === n.transform ? a[t] : e(a[t], o);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = s
                            } else n[t] = s
                        }
                        return this.options.layoutId && (n.pointerEvents = o === this ? L(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ei), this.root.sharedNodes.clear()
                    }
                }
            }

            function t6(t) {
                t.updateLayout()
            }

            function t9(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: s
                    } = t.options, o = i.source !== t.layout.source;
                    "size" === s ? tV(t => {
                        let n = o ? i.measuredBox[t] : i.layoutBox[t],
                            r = tv(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : ep(s, i.layoutBox, e) && tV(n => {
                        let r = o ? i.measuredBox[n] : i.layoutBox[n],
                            s = tv(e[n]);
                        r.max = r.min + s, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + s)
                    });
                    let a = r.createDelta();
                    tP(a, e, i.layoutBox);
                    let l = r.createDelta();
                    o ? tP(l, t.applyTransform(n, !0), i.measuredBox) : tP(l, e, i.layoutBox);
                    let u = !tK(a),
                        c = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: s,
                                layout: o
                            } = n;
                            if (s && o) {
                                let a = r.createBox();
                                tS(a, i.layoutBox, s.layoutBox);
                                let l = r.createBox();
                                tS(l, e, o.layoutBox), tq(a, l) || (c = !0), n.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: c
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function t8(t) {
                t4.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function et(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function ee(t) {
                t.clearSnapshot()
            }

            function ei(t) {
                t.clearMeasurements()
            }

            function en(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function er(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function es(t) {
                t.resolveTargetDelta()
            }

            function eo(t) {
                t.calcProjection()
            }

            function ea(t) {
                t.resetRotation()
            }

            function el(t) {
                t.removeLeadSnapshot()
            }

            function eu(t, e, i) {
                t.translate = r.mix(e.translate, 0, i), t.scale = r.mix(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function ec(t, e, i, n) {
                t.min = r.mix(e.min, i.min, n), t.max = r.mix(e.max, i.max, n)
            }

            function eh(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let em = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function ed(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function ep(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !ty(tZ(e), tZ(i), .2)
            }
            let ef = t7({
                    attachResizeListener: (t, e) => I(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                eg = {
                    current: void 0
                },
                ev = t7({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!eg.current) {
                            let t = new ef({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), eg.current = t
                        }
                        return eg.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                ey = t => !t.isLayoutDirty && t.willUpdate(!1);

            function ex(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let eP = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!r.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = ex(t, e.target.x),
                        n = ex(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };

            function eE() {
                let t = n.useContext(u);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: i,
                    register: r
                } = t, s = n.useId();
                n.useEffect(() => r(s), []);
                let o = () => i && i(s);
                return !e && i ? [!1, o] : [!0]
            }
            class eT extends o.default.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: s
                    } = t;
                    r.addScaleCorrector(eA), s && (e.group && e.group.add(s), i && i.register && n && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), s.setOptions({ ...s.options,
                        onExitComplete: () => this.safeToRemove()
                    })), t5.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: s
                    } = this.props, o = i.projection;
                    return o && (o.isPresent = s, n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === s || (s ? o.promote() : o.relegate() || r.frame.postRender(() => {
                        let t = o.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function eS(t) {
                let [e, i] = eE(), r = n.useContext(p);
                return o.default.createElement(eT, { ...t,
                    layoutGroup: r,
                    switchLayoutGroup: n.useContext(f),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let eA = {
                    borderRadius: { ...eP,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: eP,
                    borderTopRightRadius: eP,
                    borderBottomLeftRadius: eP,
                    borderBottomRightRadius: eP,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = r.complex.parse(t);
                            if (n.length > 5) return t;
                            let s = r.complex.createTransformer(t),
                                o = "number" != typeof n[0] ? 1 : 0,
                                a = i.x.scale * e.x,
                                l = i.y.scale * e.y;
                            n[0 + o] /= a, n[1 + o] /= l;
                            let u = r.mix(a, l, .5);
                            return "number" == typeof n[2 + o] && (n[2 + o] /= u), "number" == typeof n[3 + o] && (n[3 + o] /= u), s(n)
                        }
                    }
                },
                eb = {
                    pan: {
                        Feature: class extends X {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = r.noop
                            }
                            onPointerDown(t) {
                                this.session = new tm(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: tL(t),
                                    onStart: tL(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, n && r.frame.update(() => n(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = G(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends X {
                            constructor(t) {
                                super(t), this.removeGroupControls = r.noop, this.removeListeners = r.noop, this.controls = new tR(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || r.noop
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: ev,
                        MeasureLayout: eS
                    }
                },
                ew = (t, e) => P(t) ? new r.SVGVisualElement(e, {
                    enableHardwareAcceleration: !1
                }) : new r.HTMLVisualElement(e, {
                    enableHardwareAcceleration: !0
                }),
                eD = {
                    layout: {
                        ProjectionNode: ev,
                        MeasureLayout: eS
                    }
                },
                eV = { ...th,
                    ...ti,
                    ...eb,
                    ...eD
                },
                eC = y((t, e) => F(t, e, eV, ew)),
                eR = y(F);

            function eB() {
                let t = n.useRef(!1);
                return c(() => (t.current = !0, () => {
                    t.current = !1
                }), []), t
            }

            function eL() {
                let t = eB(),
                    [e, i] = n.useState(0),
                    s = n.useCallback(() => {
                        t.current && i(e + 1)
                    }, [e]),
                    o = n.useCallback(() => r.frame.postRender(s), [s]);
                return [o, e]
            }
            class eM extends s.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function ek({
                children: t,
                isPresent: e
            }) {
                let i = n.useId(),
                    r = n.useRef(null),
                    o = n.useRef({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return n.useInsertionEffect(() => {
                    let {
                        width: t,
                        height: n,
                        top: s,
                        left: a
                    } = o.current;
                    if (e || !r.current || !t || !n) return;
                    r.current.dataset.motionPopId = i;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [e]), s.createElement(eM, {
                    isPresent: e,
                    childRef: r,
                    sizeRef: o
                }, s.cloneElement(t, {
                    ref: r
                }))
            }
            let ej = ({
                children: t,
                initial: e,
                isPresent: i,
                onExitComplete: r,
                custom: o,
                presenceAffectsLayout: a,
                mode: l
            }) => {
                let c = B(eF),
                    h = n.useId(),
                    m = n.useMemo(() => ({
                        id: h,
                        initial: e,
                        isPresent: i,
                        custom: o,
                        onExitComplete: t => {
                            for (let e of (c.set(t, !0), c.values()))
                                if (!e) return;
                            r && r()
                        },
                        register: t => (c.set(t, !1), () => c.delete(t))
                    }), a ? void 0 : [i]);
                return n.useMemo(() => {
                    c.forEach((t, e) => c.set(e, !1))
                }, [i]), s.useEffect(() => {
                    i || c.size || !r || r()
                }, [i]), "popLayout" === l && (t = s.createElement(ek, {
                    isPresent: i
                }, t)), s.createElement(u.Provider, {
                    value: m
                }, t)
            };

            function eF() {
                return new Map
            }

            function eI(t) {
                return n.useEffect(() => () => t(), [])
            }
            let eO = t => t.key || "",
                eU = ({
                    children: t,
                    custom: e,
                    initial: i = !0,
                    onExitComplete: o,
                    exitBeforeEnter: a,
                    presenceAffectsLayout: l = !0,
                    mode: u = "sync"
                }) => {
                    r.invariant(!a, "Replace exitBeforeEnter with mode='wait'");
                    let h = n.useContext(p).forceRender || eL()[0],
                        m = eB(),
                        d = function(t) {
                            let e = [];
                            return n.Children.forEach(t, t => {
                                n.isValidElement(t) && e.push(t)
                            }), e
                        }(t),
                        f = d,
                        g = new Set,
                        v = n.useRef(f),
                        y = n.useRef(new Map).current,
                        x = n.useRef(!0);
                    if (c(() => {
                            x.current = !1,
                                function(t, e) {
                                    t.forEach(t => {
                                        let i = eO(t);
                                        e.set(i, t)
                                    })
                                }(d, y), v.current = f
                        }), eI(() => {
                            x.current = !0, y.clear(), g.clear()
                        }), x.current) return s.createElement(s.Fragment, null, f.map(t => s.createElement(ej, {
                        key: eO(t),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: l,
                        mode: u
                    }, t)));
                    f = [...f];
                    let P = v.current.map(eO),
                        E = d.map(eO),
                        T = P.length;
                    for (let t = 0; t < T; t++) {
                        let e = P[t]; - 1 === E.indexOf(e) && g.add(e)
                    }
                    return "wait" === u && g.size && (f = []), g.forEach(t => {
                        if (-1 !== E.indexOf(t)) return;
                        let i = y.get(t);
                        if (!i) return;
                        let n = P.indexOf(t),
                            r = () => {
                                y.delete(t), g.delete(t);
                                let e = v.current.findIndex(e => e.key === t);
                                if (v.current.splice(e, 1), !g.size) {
                                    if (v.current = d, !1 === m.current) return;
                                    h(), o && o()
                                }
                            };
                        f.splice(n, 0, s.createElement(ej, {
                            key: eO(i),
                            isPresent: !1,
                            onExitComplete: r,
                            custom: e,
                            presenceAffectsLayout: l,
                            mode: u
                        }, i))
                    }), f = f.map(t => {
                        let e = t.key;
                        return g.has(e) ? t : s.createElement(ej, {
                            key: eO(t),
                            isPresent: !0,
                            presenceAffectsLayout: l,
                            mode: u
                        }, t)
                    }), s.createElement(s.Fragment, null, g.size ? f : f.map(t => n.cloneElement(t)))
                };

            function ez(t) {
                return "function" == typeof t
            }
            let eG = n.createContext(null),
                eN = t => !0 === t,
                eH = t => eN(!0 === t) || "id" === t,
                e$ = ({
                    children: t,
                    id: e,
                    inherit: i = !0
                }) => {
                    let r = n.useContext(p),
                        o = n.useContext(eG),
                        [a, l] = eL(),
                        u = n.useRef(null),
                        c = r.id || o;
                    null === u.current && (eH(i) && c && (e = e ? c + "-" + e : c), u.current = {
                        id: e,
                        group: eN(i) && r.group || function() {
                            let t = new Set,
                                e = new WeakMap,
                                i = () => t.forEach(ey);
                            return {
                                add: n => {
                                    t.add(n), e.set(n, n.addEventListener("willUpdate", i))
                                },
                                remove: n => {
                                    t.delete(n);
                                    let r = e.get(n);
                                    r && (r(), e.delete(n)), i()
                                },
                                dirty: i
                            }
                        }()
                    });
                    let h = n.useMemo(() => ({ ...u.current,
                        forceRender: a
                    }), [l]);
                    return s.createElement(p.Provider, {
                        value: h
                    }, t)
                },
                eW = n.createContext(null),
                eY = n.forwardRef(function({
                    children: t,
                    as: e = "ul",
                    axis: i = "y",
                    onReorder: o,
                    values: a,
                    ...l
                }, u) {
                    let c = B(() => eC(e)),
                        h = [],
                        m = n.useRef(!1);
                    return r.invariant(Boolean(a), "Reorder.Group must be provided a values prop"), n.useEffect(() => {
                        m.current = !1
                    }), s.createElement(c, { ...l,
                        ref: u,
                        ignoreStrict: !0
                    }, s.createElement(eW.Provider, {
                        value: {
                            axis: i,
                            registerItem: (t, e) => {
                                e && -1 === h.findIndex(e => t === e.value) && (h.push({
                                    value: t,
                                    layout: e[i]
                                }), h.sort(e_))
                            },
                            updateOrder: (t, e, i) => {
                                if (m.current) return;
                                let n = function(t, e, i, n) {
                                    if (!n) return t;
                                    let s = t.findIndex(t => t.value === e);
                                    if (-1 === s) return t;
                                    let o = n > 0 ? 1 : -1,
                                        a = t[s + o];
                                    if (!a) return t;
                                    let l = t[s],
                                        u = a.layout,
                                        c = r.mix(u.min, u.max, .5);
                                    return 1 === o && l.layout.max + i > c || -1 === o && l.layout.min + i < c ? r.moveItem(t, s, s + o) : t
                                }(h, t, e, i);
                                h !== n && (m.current = !0, o(n.map(eX).filter(t => -1 !== a.indexOf(t))))
                            }
                        }
                    }, t))
                });

            function eX(t) {
                return t.value
            }

            function e_(t, e) {
                return t.layout.min - e.layout.min
            }

            function eK(t) {
                let e = B(() => r.motionValue(t)),
                    {
                        isStatic: i
                    } = n.useContext(a);
                if (i) {
                    let [, i] = n.useState(t);
                    n.useEffect(() => e.on("change", i), [])
                }
                return e
            }

            function eq(t, e) {
                let i = eK(e()),
                    n = () => i.set(e());
                return n(), c(() => {
                    let e = () => r.frame.update(n, !1, !0),
                        i = t.map(t => t.on("change", e));
                    return () => {
                        i.forEach(t => t()), r.cancelFrame(n)
                    }
                }), i
            }

            function eZ(t, e, i, n) {
                let s = "function" == typeof e ? e : r.transform(e, i, n);
                return Array.isArray(t) ? eJ(t, s) : eJ([t], ([t]) => s(t))
            }

            function eJ(t, e) {
                let i = B(() => []);
                return eq(t, () => {
                    i.length = 0;
                    let n = t.length;
                    for (let e = 0; e < n; e++) i[e] = t[e].get();
                    return e(i)
                })
            }

            function eQ(t, e = 0) {
                return r.isMotionValue(t) ? t : eK(e)
            }
            let e0 = n.forwardRef(function({
                    children: t,
                    style: e = {},
                    value: i,
                    as: o = "li",
                    onDrag: a,
                    layout: l = !0,
                    ...u
                }, c) {
                    let h = B(() => eC(o)),
                        m = n.useContext(eW),
                        d = {
                            x: eQ(e.x),
                            y: eQ(e.y)
                        },
                        p = eZ([d.x, d.y], ([t, e]) => t || e ? 1 : "unset"),
                        f = n.useRef(null);
                    r.invariant(Boolean(m), "Reorder.Item must be a child of Reorder.Group");
                    let {
                        axis: g,
                        registerItem: v,
                        updateOrder: y
                    } = m;
                    return n.useEffect(() => {
                        v(i, f.current)
                    }, [m]), s.createElement(h, {
                        drag: g,
                        ...u,
                        dragSnapToOrigin: !0,
                        style: { ...e,
                            x: d.x,
                            y: d.y,
                            zIndex: p
                        },
                        layout: l,
                        onDrag: (t, e) => {
                            let {
                                velocity: n
                            } = e;
                            n[g] && y(i, d[g].get(), n[g]), a && a(t, e)
                        },
                        onLayoutMeasure: t => {
                            f.current = t
                        },
                        ref: c,
                        ignoreStrict: !0
                    }, t)
                }),
                e1 = {
                    renderer: ew,
                    ...th,
                    ...ti
                },
                e5 = { ...e1,
                    ...eb,
                    ...eD
                };

            function e3(t, e, i) {
                n.useInsertionEffect(() => t.on(e, i), [t, e, i])
            }

            function e2(t, e) {
                r.warning(Boolean(!e || e.current), `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
            }
            let e4 = () => ({
                scrollX: r.motionValue(0),
                scrollY: r.motionValue(0),
                scrollXProgress: r.motionValue(0),
                scrollYProgress: r.motionValue(0)
            });

            function e7({
                container: t,
                target: e,
                layoutEffect: i = !0,
                ...s
            } = {}) {
                let o = B(e4),
                    a = i ? c : n.useEffect;
                return a(() => (e2("target", e), e2("container", t), r.scroll(({
                    x: t,
                    y: e
                }) => {
                    o.scrollX.set(t.current), o.scrollXProgress.set(t.progress), o.scrollY.set(e.current), o.scrollYProgress.set(e.progress)
                }, { ...s,
                    container: (null == t ? void 0 : t.current) || void 0,
                    target: (null == e ? void 0 : e.current) || void 0
                })), []), o
            }

            function e6(t) {
                let e = n.useRef(0),
                    {
                        isStatic: i
                    } = n.useContext(a);
                n.useEffect(() => {
                    if (i) return;
                    let n = ({
                        timestamp: i,
                        delta: n
                    }) => {
                        e.current || (e.current = i), t(i - e.current, n)
                    };
                    return r.frame.update(n, !0), () => r.cancelFrame(n)
                }, [t])
            }
            class e9 extends r.MotionValue {
                constructor() {
                    super(...arguments), this.members = [], this.transforms = new Set
                }
                add(t) {
                    let e;
                    r.transformProps.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || r.isCSSVariableName(t) || "willChange" === t || (e = r.camelToDash(t)), e && (r.addUniqueItem(this.members, e), this.update())
                }
                remove(t) {
                    r.transformProps.has(t) ? (this.transforms.delete(t), this.transforms.size || r.removeItem(this.members, "transform")) : r.removeItem(this.members, r.camelToDash(t)), this.update()
                }
                update() {
                    this.set(this.members.length ? this.members.join(", ") : "auto")
                }
            }

            function e8() {
                r.hasReducedMotionListener.current || r.initPrefersReducedMotion();
                let [t] = n.useState(r.prefersReducedMotion.current);
                return t
            }

            function it() {
                let t = !1,
                    e = new Set,
                    i = {
                        subscribe: t => (e.add(t), () => void e.delete(t)),
                        start(i, n) {
                            r.invariant(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let s = [];
                            return e.forEach(t => {
                                s.push(to(t, i, {
                                    transitionOverride: n
                                }))
                            }), Promise.all(s)
                        },
                        set: i => (r.invariant(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
                            r.setValues(t, i)
                        })),
                        stop() {
                            e.forEach(t => {
                                ! function(t) {
                                    t.values.forEach(t => t.stop())
                                }(t)
                            })
                        },
                        mount: () => (t = !0, () => {
                            t = !1, i.stop()
                        })
                    };
                return i
            }

            function ie() {
                let t = B(it);
                return c(t.mount, []), t
            }
            class ii {
                constructor() {
                    this.componentControls = new Set
                }
                subscribe(t) {
                    return this.componentControls.add(t), () => this.componentControls.delete(t)
                }
                start(t, e) {
                    this.componentControls.forEach(i => {
                        i.start(t.nativeEvent || t, e)
                    })
                }
            }
            let ir = () => new ii;

            function is(t) {
                return null !== t && "object" == typeof t && g in t
            }

            function io(t) {
                eg.current && (eg.current.isUpdating = !1, eg.current.blockUpdate(), t && t())
            }
            let ia = (t, e) => `${t}: ${e}`,
                il = new Map;

            function iu(t, e, i, n) {
                let s = ia(t, r.transformProps.has(e) ? "transform" : e),
                    o = il.get(s);
                if (!o) return 0;
                let {
                    animation: a,
                    startTime: l
                } = o, u = () => {
                    il.delete(s);
                    try {
                        a.cancel()
                    } catch (t) {}
                };
                if (null === l) return u(), 0; {
                    let t = performance.now();
                    return n.update(() => {
                        i.animation && (i.animation.time = r.millisecondsToSeconds(performance.now() - t))
                    }), n.render(u), t - l || 0
                }
            }
            let ic = () => ({});
            class ih extends r.VisualElement {
                build() {}
                measureInstanceViewportBox() {
                    return r.createBox()
                }
                resetTransform() {}
                restoreTransform() {}
                removeValueFromRenderState() {}
                renderInstance() {}
                scrapeMotionValuesFromProps() {
                    return ic()
                }
                getBaseTargetFromProps() {}
                readValueFromInstance(t, e, i) {
                    return i.initialState[e] || 0
                }
                sortInstanceNodePosition() {
                    return 0
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }) {
                    let n = r.getOrigin(i, t || {}, this);
                    return r.checkTargetForNewValues(this, i, n), {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            let im = M({
                    scrapeMotionValuesFromProps: ic,
                    createRenderState: ic
                }),
                id = t => t > .001 ? 1 / t : 1e5,
                ip = !1,
                ig = 0,
                iv = ({
                    children: t
                }) => (s.useEffect(() => {
                    r.invariant(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
                }, []), s.createElement(e$, {
                    id: B(() => `asl-${ig++}`)
                }, t));
            e.MotionValue = r.MotionValue, e.VisualElement = r.VisualElement, e.addScaleCorrector = r.addScaleCorrector, e.animate = r.animate, e.animateValue = r.animateValue, e.anticipate = r.anticipate, e.backIn = r.backIn, e.backInOut = r.backInOut, e.backOut = r.backOut, e.buildTransform = r.buildTransform, e.cancelFrame = r.cancelFrame, e.cancelSync = r.cancelSync, e.checkTargetForNewValues = r.checkTargetForNewValues, e.circIn = r.circIn, e.circInOut = r.circInOut, e.circOut = r.circOut, e.clamp = r.clamp, e.color = r.color, e.complex = r.complex, e.createBox = r.createBox, e.createScopedAnimate = r.createScopedAnimate, e.cubicBezier = r.cubicBezier, e.delay = r.delay, e.distance = r.distance, e.distance2D = r.distance2D, e.easeIn = r.easeIn, e.easeInOut = r.easeInOut, e.easeOut = r.easeOut, e.frame = r.frame, e.frameData = r.frameData, e.inView = r.inView, e.interpolate = r.interpolate, Object.defineProperty(e, "invariant", {
                enumerable: !0,
                get: function() {
                    return r.invariant
                }
            }), e.isBrowser = r.isBrowser, e.isMotionValue = r.isMotionValue, e.mirrorEasing = r.mirrorEasing, e.mix = r.mix, e.motionValue = r.motionValue, e.optimizedAppearDataAttribute = r.optimizedAppearDataAttribute, e.pipe = r.pipe, e.progress = r.progress, e.px = r.px, e.reverseEasing = r.reverseEasing, e.scroll = r.scroll, e.spring = r.spring, e.stagger = r.stagger, e.steps = r.steps, e.stepsOrder = r.stepsOrder, e.sync = r.sync, e.transform = r.transform, e.visualElementStore = r.visualElementStore, Object.defineProperty(e, "warning", {
                enumerable: !0,
                get: function() {
                    return r.warning
                }
            }), e.wrap = r.wrap, e.AnimatePresence = eU, e.AnimateSharedLayout = iv, e.DeprecatedLayoutGroupContext = eG, e.DragControls = ii, e.FlatTree = t1, e.LayoutGroup = e$, e.LayoutGroupContext = p, e.LazyMotion = function({
                children: t,
                features: e,
                strict: i = !1
            }) {
                let [, r] = n.useState(!ez(e)), o = n.useRef(void 0);
                if (!ez(e)) {
                    let {
                        renderer: t,
                        ...i
                    } = e;
                    o.current = t, d(i)
                }
                return n.useEffect(() => {
                    ez(e) && e().then(({
                        renderer: t,
                        ...e
                    }) => {
                        d(e), o.current = t, r(!0)
                    })
                }, []), s.createElement(h.Provider, {
                    value: {
                        renderer: o.current,
                        strict: i
                    }
                }, t)
            }, e.MotionConfig = function({
                children: t,
                isValidProp: e,
                ...i
            }) {
                e && D(e), (i = { ...n.useContext(a),
                    ...i
                }).isStatic = B(() => i.isStatic);
                let r = n.useMemo(() => i, [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]);
                return s.createElement(a.Provider, {
                    value: r
                }, t)
            }, e.MotionConfigContext = a, e.MotionContext = l, e.PresenceContext = u, e.Reorder = {
                Group: eY,
                Item: e0
            }, e.SwitchLayoutGroupContext = f, e.addPointerEvent = G, e.addPointerInfo = z, e.animateVisualElement = to, e.animationControls = it, e.animations = th, e.calcLength = tv, e.createDomMotionComponent = function(t) {
                return v(F(t, {
                    forwardMotionProps: !1
                }, eV, ew))
            }, e.createMotionComponent = v, e.domAnimation = e1, e.domMax = e5, e.filterProps = V, e.isDragActive = Y, e.isMotionComponent = is, e.isValidMotionProp = b, e.m = eR, e.makeUseVisualState = M, e.motion = eC, e.resolveMotionValue = L, e.startOptimizedAppearAnimation = function(t, e, i, n, s) {
                let o = t.dataset[r.optimizedAppearDataId];
                if (!o) return;
                window.HandoffAppearAnimations = iu;
                let a = ia(o, e),
                    l = r.animateStyle(t, e, [i[0], i[0]], {
                        duration: 1e4,
                        ease: "linear"
                    });
                il.set(a, {
                    animation: l,
                    startTime: null
                });
                let u = () => {
                    l.cancel();
                    let o = r.animateStyle(t, e, i, n);
                    document.timeline && (o.startTime = document.timeline.currentTime), il.set(a, {
                        animation: o,
                        startTime: performance.now()
                    }), s && s(o)
                };
                l.ready ? l.ready.then(u).catch(r.noop) : u()
            }, e.unwrapMotionComponent = function(t) {
                if (is(t)) return t[g]
            }, e.useAnimate = function() {
                let t = B(() => ({
                        current: null,
                        animations: []
                    })),
                    e = B(() => r.createScopedAnimate(t));
                return eI(() => {
                    t.animations.forEach(t => t.stop())
                }), [t, e]
            }, e.useAnimation = ie, e.useAnimationControls = ie, e.useAnimationFrame = e6, e.useCycle = function(...t) {
                let e = n.useRef(0),
                    [i, s] = n.useState(t[e.current]),
                    o = n.useCallback(i => {
                        e.current = "number" != typeof i ? r.wrap(0, t.length, e.current + 1) : i, s(t[e.current])
                    }, [t.length, ...t]);
                return [i, o]
            }, e.useDeprecatedAnimatedState = function(t) {
                let [e, i] = n.useState(t), r = im({}, !1), s = B(() => new ih({
                    props: {},
                    visualState: r,
                    presenceContext: null
                }, {
                    initialState: t
                }));
                n.useEffect(() => (s.mount({}), () => s.unmount()), [s]), n.useEffect(() => {
                    s.update({
                        onUpdate: t => {
                            i({ ...t
                            })
                        }
                    }, null)
                }, [i, s]);
                let o = B(() => t => to(s, t));
                return [e, o]
            }, e.useDeprecatedInvertedScale = function(t) {
                let e = eK(1),
                    i = eK(1),
                    {
                        visualElement: s
                    } = n.useContext(l);
                r.invariant(!!(t || s), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), r.warning(ip, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), ip = !0, t ? (e = t.scaleX || e, i = t.scaleY || i) : s && (e = s.getValue("scaleX", 1), i = s.getValue("scaleY", 1));
                let o = eZ(e, id),
                    a = eZ(i, id);
                return {
                    scaleX: o,
                    scaleY: a
                }
            }, e.useDomEvent = function(t, e, i, r) {
                n.useEffect(() => {
                    let n = t.current;
                    if (i && n) return I(n, e, i, r)
                }, [t, e, i, r])
            }, e.useDragControls = function() {
                return B(ir)
            }, e.useElementScroll = function(t) {
                return e7({
                    container: t
                })
            }, e.useForceUpdate = eL, e.useInView = function(t, {
                root: e,
                margin: i,
                amount: s,
                once: o = !1
            } = {}) {
                let [a, l] = n.useState(!1);
                return n.useEffect(() => {
                    if (!t.current || o && a) return;
                    let n = () => (l(!0), o ? void 0 : () => l(!1)),
                        u = {
                            root: e && e.current || void 0,
                            margin: i,
                            amount: "some" === s ? "any" : s
                        };
                    return r.inView(t.current, n, u)
                }, [e, t, i, o]), a
            }, e.useInstantLayoutTransition = function() {
                return io
            }, e.useInstantTransition = function() {
                let [t, e] = eL();
                return n.useEffect(() => {
                    r.frame.postRender(() => r.frame.postRender(() => r.instantAnimationState.current = !1))
                }, [e]), e => {
                    io(() => {
                        r.instantAnimationState.current = !0, t(), e()
                    })
                }
            }, e.useIsPresent = function() {
                var t;
                return null === (t = n.useContext(u)) || t.isPresent
            }, e.useIsomorphicLayoutEffect = c, e.useMotionTemplate = function(t, ...e) {
                let i = t.length;
                return eq(e.filter(r.isMotionValue), function() {
                    let n = "";
                    for (let s = 0; s < i; s++) {
                        n += t[s];
                        let i = e[s];
                        i && (n += r.isMotionValue(i) ? i.get() : i)
                    }
                    return n
                })
            }, e.useMotionValue = eK, e.useMotionValueEvent = e3, e.usePresence = eE, e.useReducedMotion = e8, e.useReducedMotionConfig = function() {
                let t = e8(),
                    {
                        reducedMotion: e
                    } = n.useContext(a);
                return "never" !== e && ("always" === e || t)
            }, e.useResetProjection = function() {
                let t = s.useCallback(() => {
                    let t = eg.current;
                    t && t.resetTree()
                }, []);
                return t
            }, e.useScroll = e7, e.useSpring = function(t, e = {}) {
                let {
                    isStatic: i
                } = n.useContext(a), s = n.useRef(null), o = eK(r.isMotionValue(t) ? t.get() : t), l = () => {
                    s.current && s.current.stop()
                };
                return n.useInsertionEffect(() => o.attach((t, n) => {
                    if (i) return n(t);
                    if (l(), s.current = r.animateValue({
                            keyframes: [o.get(), t],
                            velocity: o.getVelocity(),
                            type: "spring",
                            restDelta: .001,
                            restSpeed: .01,
                            ...e,
                            onUpdate: n
                        }), !r.frameData.isProcessing) {
                        let t = performance.now() - r.frameData.timestamp;
                        t < 30 && (s.current.time = r.millisecondsToSeconds(t))
                    }
                    return o.get()
                }, l), [JSON.stringify(e)]), c(() => {
                    if (r.isMotionValue(t)) return t.on("change", t => o.set(parseFloat(t)))
                }, [o]), o
            }, e.useTime = function() {
                let t = eK(0);
                return e6(e => t.set(e)), t
            }, e.useTransform = eZ, e.useUnmountEffect = eI, e.useVelocity = function(t) {
                let e = eK(t.getVelocity());
                return e3(t, "velocityChange", t => {
                    e.set(t)
                }), e
            }, e.useViewportScroll = function() {
                return e7()
            }, e.useWillChange = function() {
                return B(() => new e9("auto"))
            }
        }
    }
]);