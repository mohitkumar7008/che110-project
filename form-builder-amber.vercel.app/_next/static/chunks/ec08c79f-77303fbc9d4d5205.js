"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [362], {
        62972: function(e, t) {
            let n, r;
            let i = "undefined" != typeof document;

            function a(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function s(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function o(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let l = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                u = ["initial", ...l];

            function h(e) {
                return o(e.animate) || u.some(t => s(e[t]))
            }

            function c(e) {
                return Boolean(h(e) || e.variants)
            }
            let f = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                p = {};
            for (let e in f) p[e] = {
                isEnabled: t => f[e].some(e => !!t[e])
            };
            let d = {},
                m = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                g = new Set(m);

            function y(e, {
                layout: t,
                layoutId: n
            }) {
                return g.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!d[e] || "opacity" === e)
            }
            let v = e => Boolean(e && e.getVelocity),
                b = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                w = m.length;

            function V(e, {
                enableHardwareAcceleration: t = !0,
                allowTransformNone: n = !0
            }, r, i) {
                let a = "";
                for (let t = 0; t < w; t++) {
                    let n = m[t];
                    if (void 0 !== e[n]) {
                        let t = b[n] || n;
                        a += `${t}(${e[n]}) `
                    }
                }
                return t && !e.z && (a += "translateZ(0)"), a = a.trim(), i ? a = i(e, r ? "" : a) : n && r && (a = "none"), a
            }
            let x = e => t => "string" == typeof t && t.startsWith(e),
                A = x("--"),
                M = x("var(--"),
                S = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
                k = (e, t, n) => Math.min(Math.max(n, e), t),
                C = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                T = { ...C,
                    transform: e => k(0, 1, e)
                },
                E = { ...C,
                    default: 1
                },
                P = e => Math.round(1e5 * e) / 1e5,
                O = /(-)?([\d]*\.?[\d])+/g,
                B = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                F = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function I(e) {
                return "string" == typeof e
            }
            let L = e => ({
                    test: t => I(t) && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                W = L("deg"),
                N = L("%"),
                R = L("px"),
                $ = L("vh"),
                j = L("vw"),
                D = { ...N,
                    parse: e => N.parse(e) / 100,
                    transform: e => N.transform(100 * e)
                },
                z = { ...C,
                    transform: Math.round
                },
                H = {
                    borderWidth: R,
                    borderTopWidth: R,
                    borderRightWidth: R,
                    borderBottomWidth: R,
                    borderLeftWidth: R,
                    borderRadius: R,
                    radius: R,
                    borderTopLeftRadius: R,
                    borderTopRightRadius: R,
                    borderBottomRightRadius: R,
                    borderBottomLeftRadius: R,
                    width: R,
                    maxWidth: R,
                    height: R,
                    maxHeight: R,
                    size: R,
                    top: R,
                    right: R,
                    bottom: R,
                    left: R,
                    padding: R,
                    paddingTop: R,
                    paddingRight: R,
                    paddingBottom: R,
                    paddingLeft: R,
                    margin: R,
                    marginTop: R,
                    marginRight: R,
                    marginBottom: R,
                    marginLeft: R,
                    rotate: W,
                    rotateX: W,
                    rotateY: W,
                    rotateZ: W,
                    scale: E,
                    scaleX: E,
                    scaleY: E,
                    scaleZ: E,
                    skew: W,
                    skewX: W,
                    skewY: W,
                    distance: R,
                    translateX: R,
                    translateY: R,
                    translateZ: R,
                    x: R,
                    y: R,
                    z: R,
                    perspective: R,
                    transformPerspective: R,
                    opacity: T,
                    originX: D,
                    originY: D,
                    originZ: R,
                    zIndex: z,
                    fillOpacity: T,
                    strokeOpacity: T,
                    numOctaves: z
                };

            function q(e, t, n, r) {
                let {
                    style: i,
                    vars: a,
                    transform: s,
                    transformOrigin: o
                } = e, l = !1, u = !1, h = !0;
                for (let e in t) {
                    let n = t[e];
                    if (A(e)) {
                        a[e] = n;
                        continue
                    }
                    let r = H[e],
                        c = S(n, r);
                    if (g.has(e)) {
                        if (l = !0, s[e] = c, !h) continue;
                        n !== (r.default || 0) && (h = !1)
                    } else e.startsWith("origin") ? (u = !0, o[e] = c) : i[e] = c
                }
                if (!t.transform && (l || r ? i.transform = V(e.transform, n, h, r) : i.transform && (i.transform = "none")), u) {
                    let {
                        originX: e = "50%",
                        originY: t = "50%",
                        originZ: n = 0
                    } = o;
                    i.transformOrigin = `${e} ${t} ${n}`
                }
            }

            function U(e, t, n) {
                return "string" == typeof e ? e : R.transform(t + n * e)
            }
            let Y = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                X = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function G(e, {
                attrX: t,
                attrY: n,
                attrScale: r,
                originX: i,
                originY: a,
                pathLength: s,
                pathSpacing: o = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, f) {
                if (q(e, u, h, f), c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: p,
                    style: d,
                    dimensions: m
                } = e;
                p.transform && (m && (d.transform = p.transform), delete p.transform), m && (void 0 !== i || void 0 !== a || d.transform) && (d.transformOrigin = function(e, t, n) {
                    let r = U(t, e.x, e.width),
                        i = U(n, e.y, e.height);
                    return `${r} ${i}`
                }(m, void 0 !== i ? i : .5, void 0 !== a ? a : .5)), void 0 !== t && (p.x = t), void 0 !== n && (p.y = n), void 0 !== r && (p.scale = r), void 0 !== s && function(e, t, n = 1, r = 0, i = !0) {
                    e.pathLength = 1;
                    let a = i ? Y : X;
                    e[a.offset] = R.transform(-r);
                    let s = R.transform(t),
                        o = R.transform(n);
                    e[a.array] = `${s} ${o}`
                }(p, s, o, l, !1)
            }
            let Z = e => "string" == typeof e && "svg" === e.toLowerCase(),
                K = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function _(e, {
                style: t,
                vars: n
            }, r, i) {
                for (let a in Object.assign(e.style, t, i && i.getProjectionStyles(r)), n) e.style.setProperty(a, n[a])
            }
            let J = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function Q(e, t, n, r) {
                for (let n in _(e, t, void 0, r), t.attrs) e.setAttribute(J.has(n) ? n : K(n), t.attrs[n])
            }

            function ee(e, t) {
                let {
                    style: n
                } = e, r = {};
                for (let i in n)(v(n[i]) || t.style && v(t.style[i]) || y(i, e)) && (r[i] = n[i]);
                return r
            }

            function et(e, t) {
                let n = ee(e, t);
                for (let r in e)
                    if (v(e[r]) || v(t[r])) {
                        let t = -1 !== m.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
                        n[t] = e[r]
                    }
                return n
            }

            function en(e, t, n, r = {}, i = {}) {
                return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
            }
            let er = e => Array.isArray(e),
                ei = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                ea = e => er(e) ? e[e.length - 1] || 0 : e,
                es = (e, t) => n => t(e(n)),
                eo = (...e) => e.reduce(es),
                el = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                },
                eu = !0,
                eh = !1,
                ec = ["read", "update", "preRender", "render", "postRender"],
                ef = ec.reduce((e, t) => (e[t] = function(e) {
                    let t = [],
                        n = [],
                        r = 0,
                        i = !1,
                        a = !1,
                        s = new WeakSet,
                        o = {
                            schedule: (e, a = !1, o = !1) => {
                                let l = o && i,
                                    u = l ? t : n;
                                return a && s.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
                            },
                            cancel: e => {
                                let t = n.indexOf(e); - 1 !== t && n.splice(t, 1), s.delete(e)
                            },
                            process: l => {
                                if (i) {
                                    a = !0;
                                    return
                                }
                                if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length)
                                    for (let n = 0; n < r; n++) {
                                        let r = t[n];
                                        r(l), s.has(r) && (o.schedule(r), e())
                                    }
                                i = !1, a && (a = !1, o.process(l))
                            }
                        };
                    return o
                }(() => eh = !0), e), {}),
                ep = e => ef[e].process(el),
                ed = e => {
                    eh = !1, el.delta = eu ? 1e3 / 60 : Math.max(Math.min(e - el.timestamp, 40), 1), el.timestamp = e, el.isProcessing = !0, ec.forEach(ep), el.isProcessing = !1, eh && (eu = !1, requestAnimationFrame(ed))
                },
                em = () => {
                    eh = !0, eu = !0, el.isProcessing || requestAnimationFrame(ed)
                },
                eg = ec.reduce((e, t) => {
                    let n = ef[t];
                    return e[t] = (e, t = !1, r = !1) => (eh || em(), n.schedule(e, t, r)), e
                }, {});

            function ey(e) {
                ec.forEach(t => ef[t].cancel(e))
            }
            let ev = e => e;

            function eb(e, t, n) {
                let r = e.getProps();
                return en(r, t, void 0 !== n ? n : r.custom, function(e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.get()), t
                }(e), function(e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
                }(e))
            }
            let ew = "framerAppearId",
                eV = "data-" + K(ew);
            t.warning = ev, t.invariant = ev;
            let ex = e => 1e3 * e,
                eA = e => e / 1e3,
                eM = {
                    current: !1
                },
                eS = e => Array.isArray(e) && "number" == typeof e[0],
                ek = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
                eC = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: ek([0, .65, .55, 1]),
                    circOut: ek([.55, 0, 1, .45]),
                    backIn: ek([.31, .01, .66, -.59]),
                    backOut: ek([.33, 1.53, .69, .99])
                };

            function eT(e, t, n, {
                delay: r = 0,
                duration: i,
                repeat: a = 0,
                repeatType: s = "loop",
                ease: o,
                times: l
            } = {}) {
                let u = {
                    [t]: n
                };
                l && (u.offset = l);
                let h = function e(t) {
                    if (t) return eS(t) ? ek(t) : Array.isArray(t) ? t.map(e) : eC[t]
                }(o);
                return Array.isArray(h) && (u.easing = h), e.animate(u, {
                    delay: r,
                    duration: i,
                    easing: Array.isArray(h) ? "linear" : h,
                    fill: "both",
                    iterations: a + 1,
                    direction: "reverse" === s ? "alternate" : "normal"
                })
            }
            let eE = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                eP = {},
                eO = {};
            for (let e in eE) eO[e] = () => (void 0 === eP[e] && (eP[e] = eE[e]()), eP[e]);
            let eB = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

            function eF(e, t, n, r) {
                if (e === t && n === r) return ev;
                let i = t => (function(e, t, n, r, i) {
                    let a, s;
                    let o = 0;
                    do(a = eB(s = t + (n - t) / 2, r, i) - e) > 0 ? n = s : t = s; while (Math.abs(a) > 1e-7 && ++o < 12);
                    return s
                })(t, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : eB(i(e), t, r)
            }
            let eI = eF(.42, 0, 1, 1),
                eL = eF(0, 0, .58, 1),
                eW = eF(.42, 0, .58, 1),
                eN = e => Array.isArray(e) && "number" != typeof e[0],
                eR = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                e$ = e => t => 1 - e(1 - t),
                ej = e => 1 - Math.sin(Math.acos(e)),
                eD = e$(ej),
                ez = eR(eD),
                eH = eF(.33, 1.53, .69, .99),
                eq = e$(eH),
                eU = eR(eq),
                eY = e => (e *= 2) < 1 ? .5 * eq(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                eX = {
                    linear: ev,
                    easeIn: eI,
                    easeInOut: eW,
                    easeOut: eL,
                    circIn: ej,
                    circInOut: ez,
                    circOut: eD,
                    backIn: eq,
                    backInOut: eU,
                    backOut: eH,
                    anticipate: eY
                },
                eG = e => {
                    if (Array.isArray(e)) {
                        t.invariant(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [n, r, i, a] = e;
                        return eF(n, r, i, a)
                    }
                    return "string" == typeof e ? (t.invariant(void 0 !== eX[e], `Invalid easing type '${e}'`), eX[e]) : e
                },
                eZ = (e, t) => n => Boolean(I(n) && F.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
                eK = (e, t, n) => r => {
                    if (!I(r)) return r;
                    let [i, a, s, o] = r.match(O);
                    return {
                        [e]: parseFloat(i),
                        [t]: parseFloat(a),
                        [n]: parseFloat(s),
                        alpha: void 0 !== o ? parseFloat(o) : 1
                    }
                },
                e_ = e => k(0, 255, e),
                eJ = { ...C,
                    transform: e => Math.round(e_(e))
                },
                eQ = {
                    test: eZ("rgb", "red"),
                    parse: eK("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + eJ.transform(e) + ", " + eJ.transform(t) + ", " + eJ.transform(n) + ", " + P(T.transform(r)) + ")"
                },
                e0 = {
                    test: eZ("#"),
                    parse: function(e) {
                        let t = "",
                            n = "",
                            r = "",
                            i = "";
                        return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
                            red: parseInt(t, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: eQ.transform
                },
                e1 = {
                    test: eZ("hsl", "hue"),
                    parse: eK("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: t,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + N.transform(P(t)) + ", " + N.transform(P(n)) + ", " + P(T.transform(r)) + ")"
                },
                e2 = {
                    test: e => eQ.test(e) || e0.test(e) || e1.test(e),
                    parse: e => eQ.test(e) ? eQ.parse(e) : e1.test(e) ? e1.parse(e) : e0.parse(e),
                    transform: e => I(e) ? e : e.hasOwnProperty("red") ? eQ.transform(e) : e1.transform(e)
                },
                e5 = (e, t, n) => -n * e + n * t + e;

            function e3(e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            let e9 = (e, t, n) => {
                    let r = e * e;
                    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
                },
                e6 = [e0, eQ, e1],
                e4 = e => e6.find(t => t.test(e));

            function e8(e) {
                let n = e4(e);
                t.invariant(Boolean(n), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let r = n.parse(e);
                return n === e1 && (r = function({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: r
                }) {
                    e /= 360, n /= 100;
                    let i = 0,
                        a = 0,
                        s = 0;
                    if (t /= 100) {
                        let r = n < .5 ? n * (1 + t) : n + t - n * t,
                            o = 2 * n - r;
                        i = e3(o, r, e + 1 / 3), a = e3(o, r, e), s = e3(o, r, e - 1 / 3)
                    } else i = a = s = n;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * a),
                        blue: Math.round(255 * s),
                        alpha: r
                    }
                }(r)), r
            }
            let e7 = (e, t) => {
                    let n = e8(e),
                        r = e8(t),
                        i = { ...n
                        };
                    return e => (i.red = e9(n.red, r.red, e), i.green = e9(n.green, r.green, e), i.blue = e9(n.blue, r.blue, e), i.alpha = e5(n.alpha, r.alpha, e), eQ.transform(i))
                },
                te = {
                    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                    countKey: "Vars",
                    token: "${v}",
                    parse: ev
                },
                tt = {
                    regex: B,
                    countKey: "Colors",
                    token: "${c}",
                    parse: e2.parse
                },
                tn = {
                    regex: O,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: C.parse
                };

            function tr(e, {
                regex: t,
                countKey: n,
                token: r,
                parse: i
            }) {
                let a = e.tokenised.match(t);
                a && (e["num" + n] = a.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...a.map(i)))
            }

            function ti(e) {
                let t = e.toString(),
                    n = {
                        value: t,
                        tokenised: t,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return n.value.includes("var(--") && tr(n, te), tr(n, tt), tr(n, tn), n
            }

            function ta(e) {
                return ti(e).values
            }

            function ts(e) {
                let {
                    values: t,
                    numColors: n,
                    numVars: r,
                    tokenised: i
                } = ti(e), a = t.length;
                return e => {
                    let t = i;
                    for (let i = 0; i < a; i++) t = i < r ? t.replace(te.token, e[i]) : i < r + n ? t.replace(tt.token, e2.transform(e[i])) : t.replace(tn.token, P(e[i]));
                    return t
                }
            }
            let to = e => "number" == typeof e ? 0 : e,
                tl = {
                    test: function(e) {
                        var t, n;
                        return isNaN(e) && I(e) && ((null === (t = e.match(O)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(B)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: ta,
                    createTransformer: ts,
                    getAnimatableNone: function(e) {
                        let t = ta(e),
                            n = ts(e);
                        return n(t.map(to))
                    }
                },
                tu = (e, t) => n => `${n>0?t:e}`;

            function th(e, t) {
                return "number" == typeof e ? n => e5(e, t, n) : e2.test(e) ? e7(e, t) : e.startsWith("var(") ? tu(e, t) : tp(e, t)
            }
            let tc = (e, t) => {
                    let n = [...e],
                        r = n.length,
                        i = e.map((e, n) => th(e, t[n]));
                    return e => {
                        for (let t = 0; t < r; t++) n[t] = i[t](e);
                        return n
                    }
                },
                tf = (e, t) => {
                    let n = { ...e,
                            ...t
                        },
                        r = {};
                    for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = th(e[i], t[i]));
                    return e => {
                        for (let t in r) n[t] = r[t](e);
                        return n
                    }
                },
                tp = (e, n) => {
                    let r = tl.createTransformer(n),
                        i = ti(e),
                        a = ti(n),
                        s = i.numVars === a.numVars && i.numColors === a.numColors && i.numNumbers >= a.numNumbers;
                    return s ? eo(tc(i.values, a.values), r) : (t.warning(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), tu(e, n))
                },
                td = (e, t, n) => {
                    let r = t - e;
                    return 0 === r ? 1 : (n - e) / r
                },
                tm = (e, t) => n => e5(e, t, n);

            function tg(e, n, {
                clamp: r = !0,
                ease: i,
                mixer: a
            } = {}) {
                let s = e.length;
                if (t.invariant(s === n.length, "Both input and output ranges must be the same length"), 1 === s) return () => n[0];
                e[0] > e[s - 1] && (e = [...e].reverse(), n = [...n].reverse());
                let o = function(e, t, n) {
                        let r = [],
                            i = n || function(e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return e2.test(e) ? e7 : tp;
                                else if (Array.isArray(e)) return tc;
                                else if ("object" == typeof e) return tf;
                                return tm
                            }(e[0]),
                            a = e.length - 1;
                        for (let n = 0; n < a; n++) {
                            let a = i(e[n], e[n + 1]);
                            if (t) {
                                let e = Array.isArray(t) ? t[n] || ev : t;
                                a = eo(e, a)
                            }
                            r.push(a)
                        }
                        return r
                    }(n, i, a),
                    l = o.length,
                    u = t => {
                        let n = 0;
                        if (l > 1)
                            for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                        let r = td(e[n], e[n + 1], t);
                        return o[n](r)
                    };
                return r ? t => u(k(e[0], e[s - 1], t)) : u
            }

            function ty(e, t) {
                let n = e[e.length - 1];
                for (let r = 1; r <= t; r++) {
                    let i = td(0, t, r);
                    e.push(e5(n, 1, i))
                }
            }

            function tv(e) {
                let t = [0];
                return ty(t, e.length - 1), t
            }

            function tb({
                duration: e = 300,
                keyframes: t,
                times: n,
                ease: r = "easeInOut"
            }) {
                let i = eN(r) ? r.map(eG) : eG(r),
                    a = {
                        done: !1,
                        value: t[0]
                    },
                    s = (n && n.length === t.length ? n : tv(t)).map(t => t * e),
                    o = tg(s, t, {
                        ease: Array.isArray(i) ? i : t.map(() => i || eW).splice(0, t.length - 1)
                    });
                return {
                    calculatedDuration: e,
                    next: t => (a.value = o(t), a.done = t >= e, a)
                }
            }

            function tw(e, t) {
                return t ? e * (1e3 / t) : 0
            }

            function tV(e, t, n) {
                let r = Math.max(t - 5, 0);
                return tw(n - e(r), t - r)
            }

            function tx(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let tA = ["duration", "bounce"],
                tM = ["stiffness", "damping", "mass"];

            function tS(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function tk({
                keyframes: e,
                restDelta: n,
                restSpeed: r,
                ...i
            }) {
                let a;
                let s = e[0],
                    o = e[e.length - 1],
                    l = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        velocity: f,
                        duration: p,
                        isResolvedFromDuration: d
                    } = function(e) {
                        let n = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!tS(e, tM) && tS(e, tA)) {
                            let r = function({
                                duration: e = 800,
                                bounce: n = .25,
                                velocity: r = 0,
                                mass: i = 1
                            }) {
                                let a, s;
                                t.warning(e <= ex(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - n;
                                o = k(.05, 1, o), e = k(.01, 10, eA(e)), o < 1 ? (a = t => {
                                    let n = t * o,
                                        i = n * e,
                                        a = tx(t, o);
                                    return .001 - (n - r) / a * Math.exp(-i)
                                }, s = t => {
                                    let n = t * o,
                                        i = n * e,
                                        s = Math.pow(o, 2) * Math.pow(t, 2) * e,
                                        l = tx(Math.pow(t, 2), o),
                                        u = -a(t) + .001 > 0 ? -1 : 1;
                                    return u * ((i * r + r - s) * Math.exp(-i)) / l
                                }) : (a = t => {
                                    let n = Math.exp(-t * e),
                                        i = (t - r) * e + 1;
                                    return -.001 + n * i
                                }, s = t => {
                                    let n = Math.exp(-t * e),
                                        i = (r - t) * (e * e);
                                    return n * i
                                });
                                let l = 5 / e,
                                    u = function(e, t, n) {
                                        let r = n;
                                        for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                                        return r
                                    }(a, s, l);
                                if (e = ex(e), isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let t = Math.pow(u, 2) * i;
                                    return {
                                        stiffness: t,
                                        damping: 2 * o * Math.sqrt(i * t),
                                        duration: e
                                    }
                                }
                            }(e);
                            (n = { ...n,
                                ...r,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return n
                    }(i),
                    m = f ? -eA(f) : 0,
                    g = h / (2 * Math.sqrt(u * c)),
                    y = o - s,
                    v = eA(Math.sqrt(u / c)),
                    b = 5 > Math.abs(y);
                if (r || (r = b ? .01 : 2), n || (n = b ? .005 : .5), g < 1) {
                    let e = tx(v, g);
                    a = t => o - Math.exp(-g * v * t) * ((m + g * v * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
                } else if (1 === g) a = e => o - Math.exp(-v * e) * (y + (m + v * y) * e);
                else {
                    let e = v * Math.sqrt(g * g - 1);
                    a = t => {
                        let n = Math.min(e * t, 300);
                        return o - Math.exp(-g * v * t) * ((m + g * v * y) * Math.sinh(n) + e * y * Math.cosh(n)) / e
                    }
                }
                return {
                    calculatedDuration: d && p || null,
                    next: e => {
                        let t = a(e);
                        if (d) l.done = e >= p;
                        else {
                            let i = m;
                            0 !== e && (i = g < 1 ? tV(a, e, t) : 0);
                            let s = Math.abs(i) <= r,
                                u = Math.abs(o - t) <= n;
                            l.done = s && u
                        }
                        return l.value = l.done ? o : t, l
                    }
                }
            }

            function tC({
                keyframes: e,
                velocity: t = 0,
                power: n = .8,
                timeConstant: r = 325,
                bounceDamping: i = 10,
                bounceStiffness: a = 500,
                modifyTarget: s,
                min: o,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, f;
                let p = e[0],
                    d = {
                        done: !1,
                        value: p
                    },
                    m = e => void 0 !== o && e < o || void 0 !== l && e > l,
                    g = e => void 0 === o ? l : void 0 === l ? o : Math.abs(o - e) < Math.abs(l - e) ? o : l,
                    y = n * t,
                    v = p + y,
                    b = void 0 === s ? v : s(v);
                b !== v && (y = b - p);
                let w = e => -y * Math.exp(-e / r),
                    V = e => b + w(e),
                    x = e => {
                        let t = w(e),
                            n = V(e);
                        d.done = Math.abs(t) <= u, d.value = d.done ? b : n
                    },
                    A = e => {
                        m(d.value) && (c = e, f = tk({
                            keyframes: [d.value, g(d.value)],
                            velocity: tV(V, e, d.value),
                            damping: i,
                            stiffness: a,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return A(0), {
                    calculatedDuration: null,
                    next: e => {
                        let t = !1;
                        return (f || void 0 !== c || (t = !0, x(e), A(e)), void 0 !== c && e > c) ? f.next(e - c) : (t || x(e), d)
                    }
                }
            }
            let tT = e => {
                let t = ({
                    timestamp: t
                }) => e(t);
                return {
                    start: () => eg.update(t, !0),
                    stop: () => ey(t),
                    now: () => el.isProcessing ? el.timestamp : performance.now()
                }
            };

            function tE(e) {
                let t = 0,
                    n = e.next(t);
                for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
                return t >= 2e4 ? 1 / 0 : t
            }
            let tP = {
                decay: tC,
                inertia: tC,
                tween: tb,
                keyframes: tb,
                spring: tk
            };

            function tO({
                autoplay: e = !0,
                delay: t = 0,
                driver: n = tT,
                keyframes: r,
                type: i = "keyframes",
                repeat: a = 0,
                repeatDelay: s = 0,
                repeatType: o = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...f
            }) {
                let p, d, m, g, y, v = 1,
                    b = !1,
                    w = () => {
                        p && p(), d = new Promise(e => {
                            p = e
                        })
                    };
                w();
                let V = tP[i] || tb;
                V !== tb && "number" != typeof r[0] && (g = tg([0, 100], r, {
                    clamp: !1
                }), r = [0, 100]);
                let x = V({ ...f,
                    keyframes: r
                });
                "mirror" === o && (y = V({ ...f,
                    keyframes: [...r].reverse(),
                    velocity: -(f.velocity || 0)
                }));
                let A = "idle",
                    M = null,
                    S = null,
                    C = null;
                null === x.calculatedDuration && a && (x.calculatedDuration = tE(x));
                let {
                    calculatedDuration: T
                } = x, E = 1 / 0, P = 1 / 0;
                null !== T && (P = (E = T + s) * (a + 1) - s);
                let O = 0,
                    B = e => {
                        if (null === S) return;
                        v > 0 && (S = Math.min(S, e)), O = null !== M ? M : (e - S) * v;
                        let n = O - t,
                            i = n < 0;
                        O = Math.max(n, 0), "finished" === A && null === M && (O = P);
                        let l = O,
                            u = x;
                        if (a) {
                            let e = O / E,
                                t = Math.floor(e),
                                n = e % 1;
                            !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, a + 1);
                            let r = Boolean(t % 2);
                            r && ("reverse" === o ? (n = 1 - n, s && (n -= s / E)) : "mirror" === o && (u = y));
                            let i = k(0, 1, n);
                            O > P && (i = "reverse" === o && r ? 1 : 0), l = i * E
                        }
                        let h = i ? {
                            done: !1,
                            value: r[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: f
                        } = h;
                        i || null === T || (f = O >= P);
                        let p = null === M && ("finished" === A || "running" === A && f || v < 0 && O <= 0);
                        return c && c(h.value), p && L(), h
                    },
                    F = () => {
                        m && m.stop(), m = void 0
                    },
                    I = () => {
                        A = "idle", F(), w(), S = C = null
                    },
                    L = () => {
                        A = "finished", h && h(), F(), w()
                    },
                    W = () => {
                        if (b) return;
                        m || (m = n(B));
                        let e = m.now();
                        l && l(), null !== M ? S = e - M : S && "finished" !== A || (S = e), C = S, M = null, A = "running", m.start()
                    };
                e && W();
                let N = {
                    then: (e, t) => d.then(e, t),
                    get time() {
                        return eA(O)
                    },
                    set time(newTime) {
                        O = newTime = ex(newTime), null === M && m && 0 !== v ? S = m.now() - newTime / v : M = newTime
                    },
                    get duration() {
                        let e = null === x.calculatedDuration ? tE(x) : x.calculatedDuration;
                        return eA(e)
                    },
                    get speed() {
                        return v
                    },
                    set speed(newSpeed) {
                        if (newSpeed === v || !m) return;
                        v = newSpeed, N.time = eA(O)
                    },
                    get state() {
                        return A
                    },
                    play: W,
                    pause: () => {
                        A = "paused", M = O
                    },
                    stop: () => {
                        b = !0, "idle" !== A && (A = "idle", u && u(), I())
                    },
                    cancel: () => {
                        null !== C && B(C), I()
                    },
                    complete: () => {
                        A = "finished"
                    },
                    sample: e => (S = 0, B(e))
                };
                return N
            }
            let tB = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                tF = (e, t) => "spring" === t.type || "backgroundColor" === e || ! function e(t) {
                    return Boolean(!t || "string" == typeof t && eC[t] || eS(t) || Array.isArray(t) && t.every(e))
                }(t.ease),
                tI = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                tL = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tW = {
                    type: "keyframes",
                    duration: .8
                },
                tN = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tR = (e, {
                    keyframes: t
                }) => t.length > 2 ? tW : g.has(e) ? e.startsWith("scale") ? tL(t[1]) : tI : tN,
                t$ = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tl.test(t) || "0" === t) && !t.startsWith("url(")),
                tj = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tD(e) {
                let [t, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [r] = n.match(O) || [];
                if (!r) return e;
                let i = n.replace(r, ""),
                    a = tj.has(t) ? 1 : 0;
                return r !== n && (a *= 100), t + "(" + a + i + ")"
            }
            let tz = /([a-z-]*)\(.*?\)/g,
                tH = { ...tl,
                    getAnimatableNone: e => {
                        let t = e.match(tz);
                        return t ? t.map(tD).join(" ") : e
                    }
                },
                tq = { ...H,
                    color: e2,
                    backgroundColor: e2,
                    outlineColor: e2,
                    fill: e2,
                    stroke: e2,
                    borderColor: e2,
                    borderTopColor: e2,
                    borderRightColor: e2,
                    borderBottomColor: e2,
                    borderLeftColor: e2,
                    filter: tH,
                    WebkitFilter: tH
                },
                tU = e => tq[e];

            function tY(e, t) {
                let n = tU(e);
                return n !== tH && (n = tl), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
            }
            let tX = e => /^0[^.\s]+$/.test(e);

            function tG(e, t) {
                return e[t] || e.default || e
            }
            let tZ = (e, n, r, i = {}) => a => {
                let s = tG(i, e) || {},
                    o = s.delay || i.delay || 0,
                    {
                        elapsed: l = 0
                    } = i;
                l -= ex(o);
                let u = function(e, t, n, r) {
                        let i, a;
                        let s = t$(t, n);
                        i = Array.isArray(n) ? [...n] : [null, n];
                        let o = void 0 !== r.from ? r.from : e.get(),
                            l = [];
                        for (let e = 0; e < i.length; e++) {
                            var u;
                            (null === i[e] && (i[e] = 0 === e ? o : i[e - 1]), "number" == typeof(u = i[e]) ? 0 === u : null !== u ? "none" === u || "0" === u || tX(u) : void 0) ? l.push(e): "string" == typeof i[e] && (a = i[e])
                        }
                        if (s && l.length && a)
                            for (let e = 0; e < l.length; e++) {
                                let n = l[e];
                                i[n] = tY(t, a)
                            }
                        return i
                    }(n, e, r, s),
                    h = u[0],
                    c = u[u.length - 1],
                    f = t$(e, h),
                    p = t$(e, c);
                t.warning(f === p, `You are trying to animate ${e} from "${h}" to "${c}". ${h} is not an animatable value - to enable this animation set ${h} to a value animatable to ${c} via the \`style\` property.`);
                let d = {
                    keyframes: u,
                    velocity: n.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -l,
                    onUpdate: e => {
                        n.set(e), s.onUpdate && s.onUpdate(e)
                    },
                    onComplete: () => {
                        a(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: e,
                        delay: t,
                        delayChildren: n,
                        staggerChildren: r,
                        staggerDirection: i,
                        repeat: a,
                        repeatType: s,
                        repeatDelay: o,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (d = { ...d,
                        ...tR(e, d)
                    }), d.duration && (d.duration = ex(d.duration)), d.repeatDelay && (d.repeatDelay = ex(d.repeatDelay)), !f || !p || eM.current || !1 === s.type) return function({
                    keyframes: e,
                    delay: t,
                    onUpdate: n,
                    onComplete: r
                }) {
                    let i = () => (n && n(e[e.length - 1]), r && r(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: ev,
                        pause: ev,
                        stop: ev,
                        then: e => (e(), Promise.resolve()),
                        cancel: ev,
                        complete: ev
                    });
                    return t ? tO({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: t,
                        onComplete: i
                    }) : i()
                }(d);
                if (n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate) {
                    let t = function(e, t, {
                        onUpdate: n,
                        onComplete: r,
                        ...i
                    }) {
                        let a, s;
                        let o = eO.waapi() && tB.has(t) && !i.repeatDelay && "mirror" !== i.repeatType && 0 !== i.damping && "inertia" !== i.type;
                        if (!o) return !1;
                        let l = !1,
                            u = () => {
                                s = new Promise(e => {
                                    a = e
                                })
                            };
                        u();
                        let {
                            keyframes: h,
                            duration: c = 300,
                            ease: f,
                            times: p
                        } = i;
                        if (tF(t, i)) {
                            let e = tO({ ...i,
                                    repeat: 0,
                                    delay: 0
                                }),
                                t = {
                                    done: !1,
                                    value: h[0]
                                },
                                n = [],
                                r = 0;
                            for (; !t.done && r < 2e4;) n.push((t = e.sample(r)).value), r += 10;
                            p = void 0, h = n, c = r - 10, f = "linear"
                        }
                        let d = eT(e.owner.current, t, h, { ...i,
                                duration: c,
                                ease: f,
                                times: p
                            }),
                            m = () => d.cancel(),
                            g = () => {
                                eg.update(m), a(), u()
                            };
                        return d.onfinish = () => {
                            e.set(function(e, {
                                repeat: t,
                                repeatType: n = "loop"
                            }) {
                                let r = t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                                return e[r]
                            }(h, i)), r && r(), g()
                        }, {
                            then: (e, t) => s.then(e, t),
                            get time() {
                                return eA(d.currentTime || 0)
                            },
                            set time(newTime) {
                                d.currentTime = ex(newTime)
                            },
                            get speed() {
                                return d.playbackRate
                            },
                            set speed(newSpeed) {
                                d.playbackRate = newSpeed
                            },
                            get duration() {
                                return eA(c)
                            },
                            play: () => {
                                l || (d.play(), ey(m))
                            },
                            pause: () => d.pause(),
                            stop: () => {
                                if (l = !0, "idle" === d.playState) return;
                                let {
                                    currentTime: t
                                } = d;
                                if (t) {
                                    let n = tO({ ...i,
                                        autoplay: !1
                                    });
                                    e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                                }
                                g()
                            },
                            complete: () => d.finish(),
                            cancel: g
                        }
                    }(n, e, d);
                    if (t) return t
                }
                return tO(d)
            };

            function tK(e) {
                return Boolean(v(e) && e.add)
            }
            let t_ = e => /^\-?\d*\.?\d+$/.test(e);

            function tJ(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function tQ(e, t) {
                let n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            class t0 {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return tJ(this.subscriptions, e), () => tQ(this.subscriptions, e)
                }
                notify(e, t, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](e, t, n);
                        else
                            for (let i = 0; i < r; i++) {
                                let r = this.subscriptions[i];
                                r && r(e, t, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let t1 = new Set,
                t2 = e => !isNaN(parseFloat(e));
            class t5 {
                constructor(e, t = {}) {
                    this.version = "10.12.9", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: n,
                            timestamp: r
                        } = el;
                        this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, eg.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => eg.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = t2(this.current), this.owner = t.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new t0);
                    let n = this.events[e].add(t);
                    return "change" === e ? () => {
                        n(), eg.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, t) {
                    this.passiveEffect = e, this.stopPassiveEffect = t
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                setWithVelocity(e, t, n) {
                    this.set(t), this.prev = e, this.timeDelta = n
                }
                jump(e) {
                    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? tw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function t3(e, t) {
                return new t5(e, t)
            }
            let t9 = e => t => t.test(e),
                t6 = [C, R, N, W, j, $, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                t4 = e => t6.find(t9(e)),
                t8 = [...t6, e2, tl],
                t7 = e => t8.find(t9(e));

            function ne(e, t) {
                let n = eb(e, t),
                    {
                        transitionEnd: r = {},
                        transition: i = {},
                        ...a
                    } = n ? e.makeTargetAnimatable(n, !1) : {};
                for (let t in a = { ...a,
                        ...r
                    }) {
                    var s;
                    let n = ea(a[t]);
                    s = t, e.hasValue(s) ? e.getValue(s).set(n) : e.addValue(s, t3(n))
                }
            }

            function nt(e, t) {
                let n = [...t].reverse();
                n.forEach(n => {
                    let r = e.getVariant(n);
                    r && ne(e, r), e.variantChildren && e.variantChildren.forEach(e => {
                        nt(e, t)
                    })
                })
            }

            function nn(e, t, n) {
                var r, i;
                let a = Object.keys(t).filter(t => !e.hasValue(t)),
                    s = a.length;
                if (s)
                    for (let o = 0; o < s; o++) {
                        let s = a[o],
                            l = t[s],
                            u = null;
                        Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (r = n[s]) && void 0 !== r ? r : e.readValue(s)) && void 0 !== i ? i : t[s]), null != u && ("string" == typeof u && (t_(u) || tX(u)) ? u = parseFloat(u) : !t7(u) && tl.test(l) && (u = tY(s, l)), e.addValue(s, t3(u, {
                            owner: e
                        })), void 0 === n[s] && (n[s] = u), null !== u && e.setBaseTarget(s, u))
                    }
            }

            function nr(e, t, n) {
                let r = {};
                for (let i in e) {
                    let e = function(e, t) {
                        if (!t) return;
                        let n = t[e] || t.default || t;
                        return n.from
                    }(i, t);
                    if (void 0 !== e) r[i] = e;
                    else {
                        let e = n.getValue(i);
                        e && (r[i] = e.get())
                    }
                }
                return r
            }

            function ni(e, t, {
                delay: n = 0,
                transitionOverride: r,
                type: i
            } = {}) {
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: s,
                    ...o
                } = e.makeTargetAnimatable(t), l = e.getValue("willChange");
                r && (a = r);
                let u = [],
                    h = i && e.animationState && e.animationState.getState()[i];
                for (let t in o) {
                    let r = e.getValue(t),
                        i = o[t];
                    if (!r || void 0 === i || h && function({
                            protectedKeys: e,
                            needsAnimating: t
                        }, n) {
                            let r = e.hasOwnProperty(n) && !0 !== t[n];
                            return t[n] = !1, r
                        }(h, t)) continue;
                    let s = {
                        delay: n,
                        elapsed: 0,
                        ...a
                    };
                    if (window.HandoffAppearAnimations && !r.hasAnimated) {
                        let n = e.getProps()[eV];
                        n && (s.elapsed = window.HandoffAppearAnimations(n, t, r, eg))
                    }
                    r.start(tZ(t, r, i, e.shouldReduceMotion && g.has(t) ? {
                        type: !1
                    } : s));
                    let c = r.animation;
                    tK(l) && (l.add(t), c.then(() => l.remove(t))), u.push(c)
                }
                return s && Promise.all(u).then(() => {
                    s && ne(e, s)
                }), u
            }
            let na = (e, t) => Math.abs(e - t),
                ns = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                no = () => ({
                    x: ns(),
                    y: ns()
                }),
                nl = () => ({
                    min: 0,
                    max: 0
                }),
                nu = () => ({
                    x: nl(),
                    y: nl()
                });

            function nh({
                top: e,
                left: t,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: t,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function nc(e) {
                return void 0 === e || 1 === e
            }

            function nf({
                scale: e,
                scaleX: t,
                scaleY: n
            }) {
                return !nc(e) || !nc(t) || !nc(n)
            }

            function np(e) {
                return nf(e) || nd(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function nd(e) {
                var t, n;
                return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
            }

            function nm(e, t, n, r, i) {
                return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
            }

            function ng(e, t = 0, n = 1, r, i) {
                e.min = nm(e.min, t, n, r, i), e.max = nm(e.max, t, n, r, i)
            }

            function ny(e, {
                x: t,
                y: n
            }) {
                ng(e.x, t.translate, t.scale, t.originPoint), ng(e.y, n.translate, n.scale, n.originPoint)
            }

            function nv(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function nb(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function nw(e, t, [n, r, i]) {
                let a = void 0 !== t[i] ? t[i] : .5,
                    s = e5(e.min, e.max, a);
                ng(e, t[n], t[r], s, t.scale)
            }
            let nV = ["x", "scaleX", "originX"],
                nx = ["y", "scaleY", "originY"];

            function nA(e, t) {
                nw(e.x, t, nV), nw(e.y, t, nx)
            }

            function nM(e, t) {
                return nh(function(e, t) {
                    if (!t) return e;
                    let n = t({
                            x: e.left,
                            y: e.top
                        }),
                        r = t({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), t))
            }

            function nS(e, n, r) {
                var i;
                if ("string" == typeof e) {
                    let a = document;
                    n && (t.invariant(Boolean(n.current), "Scope provided, but no element detected."), a = n.current), r ? (null !== (i = r[e]) && void 0 !== i || (r[e] = a.querySelectorAll(e)), e = r[e]) : e = a.querySelectorAll(e)
                } else e instanceof Element && (e = [e]);
                return Array.from(e || [])
            }
            let nk = new WeakMap;
            class nC {
                constructor(e) {
                    this.animations = e.filter(Boolean)
                }
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                stop() {
                    this.runAll("stop")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }

            function nT(e) {
                return e instanceof SVGElement && "svg" !== e.tagName
            }
            let nE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function nP(e, n, r = 1) {
                t.invariant(r <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [i, a] = function(e) {
                    let t = nE.exec(e);
                    if (!t) return [, ];
                    let [, n, r] = t;
                    return [n, r]
                }(e);
                if (!i) return;
                let s = window.getComputedStyle(n).getPropertyValue(i);
                return s ? s.trim() : M(a) ? nP(a, n, r + 1) : a
            }
            let nO = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                nB = e => nO.has(e),
                nF = e => Object.keys(e).some(nB),
                nI = e => e === C || e === R,
                nL = (e, t) => parseFloat(e.split(", ")[t]),
                nW = (e, t) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let i = r.match(/^matrix3d\((.+)\)$/);
                    if (i) return nL(i[1], t); {
                        let t = r.match(/^matrix\((.+)\)$/);
                        return t ? nL(t[1], e) : 0
                    }
                },
                nN = new Set(["x", "y", "z"]),
                nR = m.filter(e => !nN.has(e)),
                n$ = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: t = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: t = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    top: (e, {
                        top: t
                    }) => parseFloat(t),
                    left: (e, {
                        left: t
                    }) => parseFloat(t),
                    bottom: ({
                        y: e
                    }, {
                        top: t
                    }) => parseFloat(t) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: t
                    }) => parseFloat(t) + (e.max - e.min),
                    x: nW(4, 13),
                    y: nW(5, 14)
                },
                nj = (e, t, n) => {
                    let r = t.measureViewportBox(),
                        i = t.current,
                        a = getComputedStyle(i),
                        {
                            display: s
                        } = a,
                        o = {};
                    "none" === s && t.setStaticValue("display", e.display || "block"), n.forEach(e => {
                        o[e] = n$[e](r, a)
                    }), t.render();
                    let l = t.measureViewportBox();
                    return n.forEach(n => {
                        let r = t.getValue(n);
                        r && r.jump(o[n]), e[n] = n$[n](l, a)
                    }), e
                },
                nD = (e, n, r = {}, a = {}) => {
                    n = { ...n
                    }, a = { ...a
                    };
                    let s = Object.keys(n).filter(nB),
                        o = [],
                        l = !1,
                        u = [];
                    if (s.forEach(i => {
                            let s;
                            let h = e.getValue(i);
                            if (!e.hasValue(i)) return;
                            let c = r[i],
                                f = t4(c),
                                p = n[i];
                            if (er(p)) {
                                let e = p.length,
                                    n = null === p[0] ? 1 : 0;
                                f = t4(c = p[n]);
                                for (let r = n; r < e && null !== p[r]; r++) s ? t.invariant(t4(p[r]) === s, "All keyframes must be of the same type") : (s = t4(p[r]), t.invariant(s === f || nI(f) && nI(s), "Keyframes must be of the same dimension as the current value"))
                            } else s = t4(p);
                            if (f !== s) {
                                if (nI(f) && nI(s)) {
                                    let e = h.get();
                                    "string" == typeof e && h.set(parseFloat(e)), "string" == typeof p ? n[i] = parseFloat(p) : Array.isArray(p) && s === R && (n[i] = p.map(parseFloat))
                                } else(null == f ? void 0 : f.transform) && (null == s ? void 0 : s.transform) && (0 === c || 0 === p) ? 0 === c ? h.set(s.transform(c)) : n[i] = f.transform(p) : (l || (o = function(e) {
                                    let t = [];
                                    return nR.forEach(n => {
                                        let r = e.getValue(n);
                                        void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                    }), t.length && e.render(), t
                                }(e), l = !0), u.push(i), a[i] = void 0 !== a[i] ? a[i] : n[i], h.jump(p))
                            }
                        }), !u.length) return {
                        target: n,
                        transitionEnd: a
                    }; {
                        let t = u.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = nj(n, e, u);
                        return o.length && o.forEach(([t, n]) => {
                            e.getValue(t).set(n)
                        }), e.render(), i && null !== t && window.scrollTo({
                            top: t
                        }), {
                            target: r,
                            transitionEnd: a
                        }
                    }
                },
                nz = (e, t, n, r) => {
                    var i, a;
                    let s = function(e, { ...t
                    }, n) {
                        let r = e.current;
                        if (!(r instanceof Element)) return {
                            target: t,
                            transitionEnd: n
                        };
                        for (let i in n && (n = { ...n
                            }), e.values.forEach(e => {
                                let t = e.get();
                                if (!M(t)) return;
                                let n = nP(t, r);
                                n && e.set(n)
                            }), t) {
                            let e = t[i];
                            if (!M(e)) continue;
                            let a = nP(e, r);
                            a && (t[i] = a, n || (n = {}), void 0 === n[i] && (n[i] = e))
                        }
                        return {
                            target: t,
                            transitionEnd: n
                        }
                    }(e, t, r);
                    return t = s.target, r = s.transitionEnd, i = t, a = r, nF(i) ? nD(e, i, n, a) : {
                        target: i,
                        transitionEnd: a
                    }
                },
                nH = {
                    current: null
                },
                nq = {
                    current: !1
                };

            function nU() {
                if (nq.current = !0, i) {
                    if (window.matchMedia) {
                        let e = window.matchMedia("(prefers-reduced-motion)"),
                            t = () => nH.current = e.matches;
                        e.addListener(t), t()
                    } else nH.current = !1
                }
            }
            let nY = Object.keys(p),
                nX = nY.length,
                nG = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                nZ = u.length;
            class nK {
                constructor({
                    parent: e,
                    props: t,
                    presenceContext: n,
                    reducedMotionConfig: r,
                    visualState: i
                }, a = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => eg.render(this.render, !1, !0);
                    let {
                        latestValues: s,
                        renderState: o
                    } = i;
                    this.latestValues = s, this.baseTarget = { ...s
                    }, this.initialValues = t.initial ? { ...s
                    } : {}, this.renderState = o, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.isControllingVariants = h(t), this.isVariantNode = c(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(t, {});
                    for (let e in u) {
                        let t = u[e];
                        void 0 !== s[e] && v(t) && (t.set(s[e], !1), tK(l) && l.add(e))
                    }
                }
                scrapeMotionValuesFromProps(e, t) {
                    return {}
                }
                mount(e) {
                    this.current = e, nk.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), nq.current || nU(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nH.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in nk.delete(this.current), this.projection && this.projection.unmount(), ey(this.notifyUpdate), ey(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
                    for (let e in this.features) this.features[e].unmount();
                    this.current = null
                }
                bindToMotionValue(e, t) {
                    let n = g.has(e),
                        r = t.on("change", t => {
                            this.latestValues[e] = t, this.props.onUpdate && eg.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        i = t.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        r(), i()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...t
                }, n, r, i) {
                    let s, o;
                    for (let e = 0; e < nX; e++) {
                        let n = nY[e],
                            {
                                isEnabled: r,
                                Feature: i,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = p[n];
                        a && (s = a), r(t) && (!this.features[n] && i && (this.features[n] = new i(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: r,
                            dragConstraints: o,
                            layoutScroll: l,
                            layoutRoot: u
                        } = t;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: Boolean(r) || o && a(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: i,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let e in this.features) {
                        let t = this.features[e];
                        t.isMounted ? t.update(this.props, this.prevProps) : (t.mount(), t.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nu()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                makeTargetAnimatable(e, t = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, t)
                }
                update(e, t) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
                    for (let t = 0; t < nG.length; t++) {
                        let n = nG[t];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let r = e["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function(e, t, n) {
                        let {
                            willChange: r
                        } = t;
                        for (let i in t) {
                            let a = t[i],
                                s = n[i];
                            if (v(a)) e.addValue(i, a), tK(r) && r.add(i);
                            else if (v(s)) e.addValue(i, t3(a, {
                                owner: e
                            })), tK(r) && r.remove(i);
                            else if (s !== a) {
                                if (e.hasValue(i)) {
                                    let t = e.getValue(i);
                                    t.hasAnimated || t.set(a)
                                } else {
                                    let t = e.getStaticValue(i);
                                    e.addValue(i, t3(void 0 !== t ? t : a, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let r in n) void 0 === t[r] && e.removeValue(r);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(e = !1) {
                    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let e = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                    }
                    let t = {};
                    for (let e = 0; e < nZ; e++) {
                        let n = u[e],
                            r = this.props[n];
                        (s(r) || !1 === r) && (t[n] = r)
                    }
                    return t
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode();
                    if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
                }
                addValue(e, t) {
                    t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
                }
                removeValue(e) {
                    this.values.delete(e);
                    let t = this.valueSubscriptions.get(e);
                    t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== t && (n = t3(t, {
                        owner: this
                    }), this.addValue(e, n)), n
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    var t;
                    let {
                        initial: n
                    } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = en(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                    if (n && void 0 !== r) return r;
                    let i = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === i || v(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new t0), this.events[e].add(t)
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
            }
            class n_ extends nK {
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: t,
                    style: n
                }) {
                    delete t[e], delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: t,
                    ...n
                }, {
                    transformValues: r
                }, i) {
                    let a = nr(n, e || {}, this);
                    if (r && (t && (t = r(t)), n && (n = r(n)), a && (a = r(a))), i) {
                        nn(this, n, a);
                        let e = nz(this, n, a, t);
                        t = e.transitionEnd, n = e.target
                    }
                    return {
                        transition: e,
                        transitionEnd: t,
                        ...n
                    }
                }
            }
            class nJ extends n_ {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (g.has(t)) {
                        let e = tU(t);
                        return e && e.default || 0
                    }
                    return t = J.has(t) ? t : K(t), e.getAttribute(t)
                }
                measureInstanceViewportBox() {
                    return nu()
                }
                scrapeMotionValuesFromProps(e, t) {
                    return et(e, t)
                }
                build(e, t, n, r) {
                    G(e, t, n, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, t, n, r) {
                    Q(e, t, n, r)
                }
                mount(e) {
                    this.isSVGTag = Z(e.tagName), super.mount(e)
                }
            }
            class nQ extends n_ {
                readValueFromInstance(e, t) {
                    if (g.has(t)) {
                        let e = tU(t);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            r = (A(t) ? n.getPropertyValue(t) : n[t]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: t
                }) {
                    return nM(e, t)
                }
                build(e, t, n, r) {
                    q(e, t, n, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t) {
                    return ee(e, t)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    v(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, t, n, r) {
                    _(e, t, n, r)
                }
            }

            function n0(e, t, n) {
                let r = v(e) ? e : t3(e);
                return r.start(tZ("", r, t, n)), r.animation
            }

            function n1(e, t, n, r) {
                var i;
                return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (i = r.get(t)) && void 0 !== i ? i : e
            }
            let n2 = (e, t, n) => {
                let r = t - e;
                return ((n - e) % r + r) % r + e
            };

            function n5(e, t) {
                return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
            }

            function n3(e, t) {
                return t.has(e) || t.set(e, {}), t.get(e)
            }

            function n9(e, t) {
                return t[e] || (t[e] = []), t[e]
            }
            let n6 = e => "number" == typeof e,
                n4 = e => e.every(n6);

            function n8(e, n, r, i) {
                let a = nS(e, i),
                    s = a.length;
                t.invariant(Boolean(s), "No valid element provided.");
                let o = [];
                for (let e = 0; e < s; e++) {
                    let t = a[e];
                    nk.has(t) || function(e) {
                        let t = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            n = nT(e) ? new nJ(t, {
                                enableHardwareAcceleration: !1
                            }) : new nQ(t, {
                                enableHardwareAcceleration: !0
                            });
                        n.mount(e), nk.set(e, n)
                    }(t);
                    let i = nk.get(t),
                        l = { ...r
                        };
                    "function" == typeof l.delay && (l.delay = l.delay(e, s)), o.push(...ni(i, { ...n,
                        transition: l
                    }, {}))
                }
                return new nC(o)
            }
            let n7 = e => Array.isArray(e) && Array.isArray(e[0]),
                re = e => function(t, n, r) {
                    let i;
                    return i = n7(t) ? function(e, t, n) {
                        let r = [],
                            i = function(e, {
                                defaultTransition: t = {},
                                ...n
                            } = {}, r) {
                                let i = t.duration || .3,
                                    a = new Map,
                                    s = new Map,
                                    o = {},
                                    l = new Map,
                                    u = 0,
                                    h = 0,
                                    c = 0;
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n];
                                    if ("string" == typeof a) {
                                        l.set(a, h);
                                        continue
                                    }
                                    if (!Array.isArray(a)) {
                                        l.set(a.name, n1(h, a.at, u, l));
                                        continue
                                    }
                                    let [p, d, m = {}] = a;
                                    void 0 !== m.at && (h = n1(h, m.at, u, l));
                                    let g = 0,
                                        y = (e, n, r, a = 0, s = 0) => {
                                            let o = Array.isArray(e) ? e : [e],
                                                {
                                                    delay: l = 0,
                                                    times: u = tv(o),
                                                    type: f = "keyframes",
                                                    ...p
                                                } = n,
                                                {
                                                    ease: d = t.ease || "easeOut",
                                                    duration: m
                                                } = n,
                                                y = "function" == typeof l ? l(a, s) : l,
                                                v = o.length;
                                            if (v <= 2 && "spring" === f) {
                                                let e = 100;
                                                if (2 === v && n4(o)) {
                                                    let t = o[1] - o[0];
                                                    e = Math.abs(t)
                                                }
                                                let t = { ...p
                                                };
                                                void 0 !== m && (t.duration = ex(m));
                                                let n = function(e, t = 100) {
                                                    let n = tk({
                                                            keyframes: [0, t],
                                                            ...e
                                                        }),
                                                        r = Math.min(tE(n), 2e4);
                                                    return {
                                                        type: "keyframes",
                                                        ease: e => n.next(r * e).value / t,
                                                        duration: eA(r)
                                                    }
                                                }(t, e);
                                                d = n.ease, m = n.duration
                                            }
                                            null != m || (m = i);
                                            let b = h + y,
                                                w = b + m;
                                            1 === u.length && 0 === u[0] && (u[1] = 1);
                                            let V = u.length - o.length;
                                            V > 0 && ty(u, V), 1 === o.length && o.unshift(null),
                                                function(e, t, n, r, i, a) {
                                                    ! function(e, t, n) {
                                                        for (let r = 0; r < e.length; r++) {
                                                            let i = e[r];
                                                            i.at > t && i.at < n && (tQ(e, i), r--)
                                                        }
                                                    }(e, i, a);
                                                    for (let o = 0; o < t.length; o++) {
                                                        var s;
                                                        e.push({
                                                            value: t[o],
                                                            at: e5(i, a, r[o]),
                                                            easing: (s = o, eN(n) ? n[n2(0, n.length, s)] : n)
                                                        })
                                                    }
                                                }(r, o, d, u, b, w), g = Math.max(y + m, g), c = Math.max(w, c)
                                        };
                                    if (v(p)) {
                                        let e = n3(p, s);
                                        y(d, m, n9("default", e))
                                    } else {
                                        let e = nS(p, r, o),
                                            t = e.length;
                                        for (let n = 0; n < t; n++) {
                                            let r = e[n],
                                                i = n3(r, s);
                                            for (let e in d) {
                                                var f;
                                                y(d[e], m[f = e] ? { ...m,
                                                    ...m[f]
                                                } : { ...m
                                                }, n9(e, i), n, t)
                                            }
                                        }
                                        u = h, h += g
                                    }
                                }
                                return s.forEach((e, r) => {
                                    for (let i in e) {
                                        let s = e[i];
                                        s.sort(n5);
                                        let o = [],
                                            l = [],
                                            u = [];
                                        for (let e = 0; e < s.length; e++) {
                                            let {
                                                at: t,
                                                value: n,
                                                easing: r
                                            } = s[e];
                                            o.push(n), l.push(td(0, c, t)), u.push(r || "easeOut")
                                        }
                                        0 !== l[0] && (l.unshift(0), o.unshift(o[0]), u.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), o.push(null)), a.has(r) || a.set(r, {
                                            keyframes: {},
                                            transition: {}
                                        });
                                        let h = a.get(r);
                                        h.keyframes[i] = o, h.transition[i] = { ...t,
                                            duration: c,
                                            ease: u,
                                            times: l,
                                            ...n
                                        }
                                    }
                                }), a
                            }(e, t, n);
                        return i.forEach(({
                            keyframes: e,
                            transition: t
                        }, n) => {
                            let i;
                            i = v(n) ? n0(n, e.default, t.default) : n8(n, e, t), r.push(i)
                        }), new nC(r)
                    }(t, n, e) : "object" != typeof n || Array.isArray(n) ? n0(t, n, r) : n8(t, n, r, e), e && e.animations.push(i), i
                },
                rt = re(),
                rn = new WeakMap;

            function rr({
                target: e,
                contentRect: t,
                borderBoxSize: n
            }) {
                var r;
                null === (r = rn.get(e)) || void 0 === r || r.forEach(r => {
                    r({
                        target: e,
                        contentSize: t,
                        get size() {
                            return function(e, t) {
                                if (t) {
                                    let {
                                        inlineSize: e,
                                        blockSize: n
                                    } = t[0];
                                    return {
                                        width: e,
                                        height: n
                                    }
                                }
                                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                }
                            }(e, n)
                        }
                    })
                })
            }

            function ri(e) {
                e.forEach(rr)
            }
            let ra = new Set,
                rs = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                ro = () => ({
                    time: 0,
                    x: rs(),
                    y: rs()
                }),
                rl = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function ru(e, t, n, r) {
                let i = n[t],
                    {
                        length: a,
                        position: s
                    } = rl[t],
                    o = i.current,
                    l = n.time;
                i.current = e["scroll" + s], i.scrollLength = e["scroll" + a] - e["client" + a], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = td(0, i.scrollLength, i.current);
                let u = r - l;
                i.velocity = u > 50 ? 0 : tw(i.current - o, u)
            }
            let rh = {
                    Enter: [
                        [0, 1],
                        [1, 1]
                    ],
                    Exit: [
                        [0, 0],
                        [1, 0]
                    ],
                    Any: [
                        [1, 0],
                        [0, 1]
                    ],
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                rc = {
                    start: 0,
                    center: .5,
                    end: 1
                };

            function rf(e, t, n = 0) {
                let r = 0;
                if (void 0 !== rc[e] && (e = rc[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (r = t * e), n + r
            }
            let rp = [0, 0],
                rd = {
                    x: 0,
                    y: 0
                },
                rm = new WeakMap,
                rg = new WeakMap,
                ry = new WeakMap,
                rv = e => e === document.documentElement ? window : e,
                rb = {
                    any: 0,
                    all: 1
                },
                rw = e => "object" == typeof e && e.mix,
                rV = e => rw(e) ? e.mix : void 0,
                rx = ec.reduce((e, t) => (e[t] = e => ey(e), e), {});
            t.HTMLVisualElement = nQ, t.MotionValue = t5, t.SVGVisualElement = nJ, t.SubscriptionManager = t0, t.VisualElement = nK, t.addScaleCorrector = function(e) {
                Object.assign(d, e)
            }, t.addUniqueItem = tJ, t.animate = rt, t.animateMotionValue = tZ, t.animateSingleValue = n0, t.animateStyle = eT, t.animateTarget = ni, t.animateValue = tO, t.anticipate = eY, t.applyBoxDelta = ny, t.applyTreeDeltas = function(e, t, n, r = !1) {
                let i, a;
                let s = n.length;
                if (s) {
                    t.x = t.y = 1;
                    for (let o = 0; o < s; o++) {
                        a = (i = n[o]).projectionDelta;
                        let s = i.instance;
                        (!s || !s.style || "contents" !== s.style.display) && (r && i.options.layoutScroll && i.scroll && i !== i.root && nA(e, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }), a && (t.x *= a.x.scale, t.y *= a.y.scale, ny(e, a)), r && np(i.latestValues) && nA(e, i.latestValues))
                    }
                    t.x = nv(t.x), t.y = nv(t.y)
                }
            }, t.backIn = eq, t.backInOut = eU, t.backOut = eH, t.buildHTMLStyles = q, t.buildSVGAttrs = G, t.buildTransform = V, t.camelToDash = K, t.cancelFrame = ey, t.cancelSync = rx, t.checkTargetForNewValues = nn, t.circIn = ej, t.circInOut = ez, t.circOut = eD, t.clamp = k, t.color = e2, t.complex = tl, t.convertBoundingBoxToBox = nh, t.convertBoxToBoundingBox = function({
                x: e,
                y: t
            }) {
                return {
                    top: t.min,
                    right: e.max,
                    bottom: t.max,
                    left: e.min
                }
            }, t.createBox = nu, t.createDelta = no, t.createScopedAnimate = re, t.cubicBezier = eF, t.delay = function(e, t) {
                let n = performance.now(),
                    r = ({
                        timestamp: i
                    }) => {
                        let a = i - n;
                        a >= t && (ey(r), e(a - t))
                    };
                return eg.read(r, !0), () => ey(r)
            }, t.distance = na, t.distance2D = function(e, t) {
                let n = na(e.x, t.x),
                    r = na(e.y, t.y);
                return Math.sqrt(n ** 2 + r ** 2)
            }, t.easeIn = eI, t.easeInOut = eW, t.easeOut = eL, t.featureDefinitions = p, t.frame = eg, t.frameData = el, t.getOrigin = nr, t.getValueTransition = tG, t.has2DTranslate = nd, t.hasReducedMotionListener = nq, t.hasScale = nf, t.hasTransform = np, t.inView = function(e, t, {
                root: n,
                margin: r,
                amount: i = "any"
            } = {}) {
                let a = nS(e),
                    s = new WeakMap,
                    o = e => {
                        e.forEach(e => {
                            let n = s.get(e.target);
                            if (e.isIntersecting !== Boolean(n)) {
                                if (e.isIntersecting) {
                                    let n = t(e);
                                    "function" == typeof n ? s.set(e.target, n) : l.unobserve(e.target)
                                } else n && (n(e), s.delete(e.target))
                            }
                        })
                    },
                    l = new IntersectionObserver(o, {
                        root: n,
                        rootMargin: r,
                        threshold: "number" == typeof i ? i : rb[i]
                    });
                return a.forEach(e => l.observe(e)), () => l.disconnect()
            }, t.initPrefersReducedMotion = nU, t.instantAnimationState = eM, t.interpolate = tg, t.isAnimationControls = o, t.isBrowser = i, t.isCSSVariableName = A, t.isControllingVariants = h, t.isCustomValue = ei, t.isForcedMotionValue = y, t.isKeyframesTarget = er, t.isMotionValue = v, t.isRefObject = a, t.isSVGElement = nT, t.isSVGTag = Z, t.isVariantLabel = s, t.isVariantNode = c, t.measurePageBox = function(e, t, n) {
                let r = nM(e, n),
                    {
                        scroll: i
                    } = t;
                return i && (nb(r.x, i.offset.x), nb(r.y, i.offset.y)), r
            }, t.millisecondsToSeconds = eA, t.mirrorEasing = eR, t.mix = e5, t.motionValue = t3, t.moveItem = function([...e], t, n) {
                let r = t < 0 ? e.length + t : t;
                if (r >= 0 && r < e.length) {
                    let r = n < 0 ? e.length + n : n,
                        [i] = e.splice(t, 1);
                    e.splice(r, 0, i)
                }
                return e
            }, t.noop = ev, t.optimizedAppearDataAttribute = eV, t.optimizedAppearDataId = ew, t.percent = N, t.pipe = eo, t.prefersReducedMotion = nH, t.progress = td, t.px = R, t.removeItem = tQ, t.renderSVG = Q, t.resolveVariant = eb, t.resolveVariantFromProps = en, t.reverseEasing = e$, t.scaleCorrectors = d, t.scalePoint = function(e, t, n) {
                return n + t * (e - n)
            }, t.scrapeMotionValuesFromProps = et, t.scrapeMotionValuesFromProps$1 = ee, t.scroll = function(e, {
                container: t = document.documentElement,
                ...i
            } = {}) {
                let a = ry.get(t);
                a || (a = new Set, ry.set(t, a));
                let s = ro(),
                    o = function(e, t, n, r = {}) {
                        return {
                            measure: () => (function(e, t = e, n) {
                                if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                                    let r = t;
                                    for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
                                }
                                n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
                            })(e, r.target, n),
                            update: t => {
                                var i;
                                ru(e, "x", i = n, t), ru(e, "y", i, t), i.time = t, (r.offset || r.target) && function(e, t, n) {
                                    let {
                                        offset: r = rh.All
                                    } = n, {
                                        target: i = e,
                                        axis: a = "y"
                                    } = n, s = "y" === a ? "height" : "width", o = i !== e ? function(e, t) {
                                        let n = {
                                                x: 0,
                                                y: 0
                                            },
                                            r = e;
                                        for (; r && r !== t;)
                                            if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                                            else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
                                            let {
                                                top: e,
                                                left: t
                                            } = r.getBBox();
                                            for (n.x += t, n.y += e; r && "svg" !== r.tagName;) r = r.parentNode
                                        }
                                        return n
                                    }(i, e) : rd, l = i === e ? {
                                        width: e.scrollWidth,
                                        height: e.scrollHeight
                                    } : {
                                        width: i.clientWidth,
                                        height: i.clientHeight
                                    }, u = {
                                        width: e.clientWidth,
                                        height: e.clientHeight
                                    };
                                    t[a].offset.length = 0;
                                    let h = !t[a].interpolate,
                                        c = r.length;
                                    for (let e = 0; e < c; e++) {
                                        let n = function(e, t, n, r) {
                                            let i = Array.isArray(e) ? e : rp,
                                                a = 0;
                                            return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, rc[e] ? e : "0"]), rf(i[0], n, r) - rf(i[1], t)
                                        }(r[e], u[s], l[s], o[a]);
                                        h || n === t[a].interpolatorOffsets[e] || (h = !0), t[a].offset[e] = n
                                    }
                                    h && (t[a].interpolate = tg(t[a].offset, tv(r)), t[a].interpolatorOffsets = [...t[a].offset]), t[a].progress = t[a].interpolate(t[a].current)
                                }(e, n, r)
                            },
                            notify: () => t(n)
                        }
                    }(t, e, s, i);
                if (a.add(o), !rm.has(t)) {
                    let e = () => {
                            for (let e of a) e.measure()
                        },
                        i = () => {
                            for (let e of a) e.update(el.timestamp)
                        },
                        s = () => {
                            for (let e of a) e.notify()
                        },
                        o = () => {
                            eg.read(e, !1, !0), eg.update(i, !1, !0), eg.update(s, !1, !0)
                        };
                    rm.set(t, o);
                    let l = rv(t);
                    window.addEventListener("resize", o, {
                        passive: !0
                    }), t !== document.documentElement && rg.set(t, "function" == typeof t ? (ra.add(t), r || (r = () => {
                        let e = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            t = {
                                target: window,
                                size: e,
                                contentSize: e
                            };
                        ra.forEach(e => e(t))
                    }, window.addEventListener("resize", r)), () => {
                        ra.delete(t), !ra.size && r && (r = void 0)
                    }) : function(e, t) {
                        n || "undefined" == typeof ResizeObserver || (n = new ResizeObserver(ri));
                        let r = nS(e);
                        return r.forEach(e => {
                            let r = rn.get(e);
                            r || (r = new Set, rn.set(e, r)), r.add(t), null == n || n.observe(e)
                        }), () => {
                            r.forEach(e => {
                                let r = rn.get(e);
                                null == r || r.delete(t), (null == r ? void 0 : r.size) || null == n || n.unobserve(e)
                            })
                        }
                    }(t, o)), l.addEventListener("scroll", o, {
                        passive: !0
                    })
                }
                let l = rm.get(t);
                return eg.read(l, !1, !0), () => {
                    var e;
                    ey(l);
                    let n = ry.get(t);
                    if (!n || (n.delete(o), n.size)) return;
                    let r = rm.get(t);
                    rm.delete(t), r && (rv(t).removeEventListener("scroll", r), null === (e = rg.get(t)) || void 0 === e || e(), window.removeEventListener("resize", r))
                }
            }, t.secondsToMilliseconds = ex, t.setValues = function(e, t) {
                return Array.isArray(t) ? nt(e, t) : "string" == typeof t ? nt(e, [t]) : void ne(e, t)
            }, t.spring = tk, t.stagger = function(e = .1, {
                startDelay: t = 0,
                from: n = 0,
                ease: r
            } = {}) {
                return (i, a) => {
                    let s = "number" == typeof n ? n : function(e, t) {
                            if ("first" === e) return 0; {
                                let n = t - 1;
                                return "last" === e ? n : n / 2
                            }
                        }(n, a),
                        o = e * Math.abs(s - i);
                    if (r) {
                        let t = a * e,
                            n = eG(r);
                        o = n(o / t) * t
                    }
                    return t + o
                }
            }, t.steps = ef, t.stepsOrder = ec, t.sync = eg, t.transform = function(...e) {
                let t = !Array.isArray(e[0]),
                    n = t ? 0 : -1,
                    r = e[0 + n],
                    i = e[1 + n],
                    a = e[2 + n],
                    s = e[3 + n],
                    o = tg(i, a, {
                        mixer: rV(a[0]),
                        ...s
                    });
                return t ? o(r) : o
            }, t.transformBox = nA, t.transformProps = g, t.translateAxis = nb, t.variantPriorityOrder = l, t.visualElementStore = nk, t.warnOnce = function(e, t, n) {
                e || t1.has(t) || (console.warn(t), n && console.warn(n), t1.add(t))
            }, t.wrap = n2
        }
    }
]);