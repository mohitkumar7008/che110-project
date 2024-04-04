"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [630], {
        15948: function(e, r, t) {
            t.r(r), t.d(r, {
                DragDropContext: function() {
                    return nE
                },
                Draggable: function() {
                    return n5
                },
                Droppable: function() {
                    return n6
                },
                resetServerContext: function() {
                    return nx
                },
                useKeyboardSensor: function() {
                    return nd
                },
                useMouseSensor: function() {
                    return nl
                },
                useTouchSensor: function() {
                    return np
                }
            });
            var n, i, a, o, l, c, u, d, s = t(67294),
                p = t(94578),
                f = t(87462),
                g = t(14890),
                m = t(14416),
                v = t(51163),
                b = t(78492),
                h = t(30845),
                I = t(5729),
                y = t(73935),
                D = /[ \t]{2,}/g,
                x = /^[ \t]*/gm;

            function E(e, r) {}

            function C() {}

            function w(e, r, t) {
                var n = r.map(function(r) {
                    var n, i = (n = r.options, (0, f.Z)({}, t, {}, n));
                    return e.addEventListener(r.eventName, r.fn, i),
                        function() {
                            e.removeEventListener(r.eventName, r.fn, i)
                        }
                });
                return function() {
                    n.forEach(function(e) {
                        e()
                    })
                }
            }

            function A(e) {
                this.message = e
            }

            function R(e, r) {
                if (!e) throw new A("Invariant failed")
            }
            E.bind(null, "warn"), E.bind(null, "error"), A.prototype.toString = function() {
                return this.message
            };
            var S = function(e) {
                    function r() {
                        for (var r, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return (r = e.call.apply(e, [this].concat(n)) || this).callbacks = null, r.unbind = C, r.onWindowError = function(e) {
                            var t = r.getCallbacks();
                            t.isDragging() && t.tryAbort(), e.error instanceof A && e.preventDefault()
                        }, r.getCallbacks = function() {
                            if (!r.callbacks) throw Error("Unable to find AppCallbacks in <ErrorBoundary/>");
                            return r.callbacks
                        }, r.setCallbacks = function(e) {
                            r.callbacks = e
                        }, r
                    }(0, p.Z)(r, e);
                    var t = r.prototype;
                    return t.componentDidMount = function() {
                        this.unbind = w(window, [{
                            eventName: "error",
                            fn: this.onWindowError
                        }])
                    }, t.componentDidCatch = function(e) {
                        if (e instanceof A) {
                            this.setState({});
                            return
                        }
                        throw e
                    }, t.componentWillUnmount = function() {
                        this.unbind()
                    }, t.render = function() {
                        return this.props.children(this.setCallbacks)
                    }, r
                }(s.Component),
                B = function(e) {
                    return e + 1
                },
                N = function(e, r) {
                    var t = e.droppableId === r.droppableId,
                        n = B(e.index),
                        i = B(r.index);
                    return t ? "\n      You have moved the item from position " + n + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + n + "\n    in list " + e.droppableId + "\n    to list " + r.droppableId + "\n    in position " + i + "\n  "
                },
                P = function(e, r, t) {
                    return r.droppableId === t.droppableId ? "\n      The item " + e + "\n      has been combined with " + t.draggableId : "\n      The item " + e + "\n      in list " + r.droppableId + "\n      has been combined with " + t.draggableId + "\n      in list " + t.droppableId + "\n    "
                },
                O = function(e) {
                    return "\n  The item has returned to its starting position\n  of " + B(e.index) + "\n"
                },
                T = {
                    dragHandleUsageInstructions: "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
                    onDragStart: function(e) {
                        return "\n  You have lifted an item in position " + B(e.source.index) + "\n"
                    },
                    onDragUpdate: function(e) {
                        var r = e.destination;
                        if (r) return N(e.source, r);
                        var t = e.combine;
                        return t ? P(e.draggableId, e.source, t) : "You are over an area that cannot be dropped on"
                    },
                    onDragEnd: function(e) {
                        if ("CANCEL" === e.reason) return "\n      Movement cancelled.\n      " + O(e.source) + "\n    ";
                        var r = e.destination,
                            t = e.combine;
                        return r ? "\n      You have dropped the item.\n      " + N(e.source, r) + "\n    " : t ? "\n      You have dropped the item.\n      " + P(e.draggableId, e.source, t) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + O(e.source) + "\n  "
                    }
                },
                L = {
                    x: 0,
                    y: 0
                },
                G = function(e, r) {
                    return {
                        x: e.x + r.x,
                        y: e.y + r.y
                    }
                },
                M = function(e, r) {
                    return {
                        x: e.x - r.x,
                        y: e.y - r.y
                    }
                },
                _ = function(e, r) {
                    return e.x === r.x && e.y === r.y
                },
                F = function(e) {
                    return {
                        x: 0 !== e.x ? -e.x : 0,
                        y: 0 !== e.y ? -e.y : 0
                    }
                },
                k = function(e, r, t) {
                    var n;
                    return void 0 === t && (t = 0), (n = {})[e] = r, n["x" === e ? "y" : "x"] = t, n
                },
                W = function(e, r) {
                    return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2))
                },
                U = function(e, r) {
                    return Math.min.apply(Math, r.map(function(r) {
                        return W(e, r)
                    }))
                },
                Z = function(e) {
                    return function(r) {
                        return {
                            x: e(r.x),
                            y: e(r.y)
                        }
                    }
                },
                H = function(e, r) {
                    var t = (0, b.getRect)({
                        top: Math.max(r.top, e.top),
                        right: Math.min(r.right, e.right),
                        bottom: Math.min(r.bottom, e.bottom),
                        left: Math.max(r.left, e.left)
                    });
                    return t.width <= 0 || t.height <= 0 ? null : t
                },
                j = function(e, r) {
                    return {
                        top: e.top + r.y,
                        left: e.left + r.x,
                        bottom: e.bottom + r.y,
                        right: e.right + r.x
                    }
                },
                Y = function(e) {
                    return [{
                        x: e.left,
                        y: e.top
                    }, {
                        x: e.right,
                        y: e.top
                    }, {
                        x: e.left,
                        y: e.bottom
                    }, {
                        x: e.right,
                        y: e.bottom
                    }]
                },
                V = function(e, r, t) {
                    if (t && t.increasedBy) {
                        var n;
                        return (0, f.Z)({}, e, ((n = {})[r.end] = e[r.end] + t.increasedBy[r.line], n))
                    }
                    return e
                },
                q = function(e) {
                    var r, t, n = e.page,
                        i = e.withPlaceholder,
                        a = e.axis,
                        o = e.frame,
                        l = (t = V((r = n.marginBox, o ? j(r, o.scroll.diff.displacement) : r), a, i), o && o.shouldClipSubject ? H(o.pageMarginBox, t) : (0, b.getRect)(t));
                    return {
                        page: n,
                        withPlaceholder: i,
                        active: l
                    }
                },
                z = function(e, r) {
                    e.frame || R(!1);
                    var t = e.frame,
                        n = M(r, t.scroll.initial),
                        i = F(n),
                        a = (0, f.Z)({}, t, {
                            scroll: {
                                initial: t.scroll.initial,
                                current: r,
                                diff: {
                                    value: n,
                                    displacement: i
                                },
                                max: t.scroll.max
                            }
                        }),
                        o = q({
                            page: e.subject.page,
                            withPlaceholder: e.subject.withPlaceholder,
                            axis: e.axis,
                            frame: a
                        });
                    return (0, f.Z)({}, e, {
                        frame: a,
                        subject: o
                    })
                };

            function J(e) {
                return Object.values ? Object.values(e) : Object.keys(e).map(function(r) {
                    return e[r]
                })
            }

            function X(e, r) {
                if (e.findIndex) return e.findIndex(r);
                for (var t = 0; t < e.length; t++)
                    if (r(e[t])) return t;
                return -1
            }

            function K(e, r) {
                if (e.find) return e.find(r);
                var t = X(e, r);
                if (-1 !== t) return e[t]
            }

            function $(e) {
                return Array.prototype.slice.call(e)
            }
            var Q = (0, h.Z)(function(e) {
                    return e.reduce(function(e, r) {
                        return e[r.descriptor.id] = r, e
                    }, {})
                }),
                ee = (0, h.Z)(function(e) {
                    return e.reduce(function(e, r) {
                        return e[r.descriptor.id] = r, e
                    }, {})
                }),
                er = (0, h.Z)(function(e) {
                    return J(e)
                }),
                et = (0, h.Z)(function(e) {
                    return J(e)
                }),
                en = (0, h.Z)(function(e, r) {
                    return et(r).filter(function(r) {
                        return e === r.descriptor.droppableId
                    }).sort(function(e, r) {
                        return e.descriptor.index - r.descriptor.index
                    })
                });

            function ei(e) {
                return e.at && "REORDER" === e.at.type ? e.at.destination : null
            }

            function ea(e) {
                return e.at && "COMBINE" === e.at.type ? e.at.combine : null
            }
            var eo = (0, h.Z)(function(e, r) {
                    return r.filter(function(r) {
                        return r.descriptor.id !== e.descriptor.id
                    })
                }),
                el = function(e) {
                    var r = e.isMovingForward,
                        t = e.draggable,
                        n = e.destination,
                        i = e.insideDestination,
                        a = e.previousImpact;
                    if (!n.isCombineEnabled || !ei(a)) return null;

                    function o(e) {
                        var r = {
                            type: "COMBINE",
                            combine: {
                                draggableId: e,
                                droppableId: n.descriptor.id
                            }
                        };
                        return (0, f.Z)({}, a, {
                            at: r
                        })
                    }
                    var l = a.displaced.all,
                        c = l.length ? l[0] : null;
                    if (r) return c ? o(c) : null;
                    var u = eo(t, i);
                    if (!c) return u.length ? o(u[u.length - 1].descriptor.id) : null;
                    var d = X(u, function(e) {
                        return e.descriptor.id === c
                    }); - 1 !== d || R(!1);
                    var s = d - 1;
                    return s < 0 ? null : o(u[s].descriptor.id)
                },
                ec = function(e, r) {
                    return e.descriptor.droppableId === r.descriptor.id
                },
                eu = {
                    point: L,
                    value: 0
                },
                ed = {
                    invisible: {},
                    visible: {},
                    all: []
                },
                es = {
                    displaced: ed,
                    displacedBy: eu,
                    at: null
                },
                ep = function(e, r) {
                    return function(t) {
                        return e <= t && t <= r
                    }
                },
                ef = function(e) {
                    var r = ep(e.top, e.bottom),
                        t = ep(e.left, e.right);
                    return function(n) {
                        if (r(n.top) && r(n.bottom) && t(n.left) && t(n.right)) return !0;
                        var i = r(n.top) || r(n.bottom),
                            a = t(n.left) || t(n.right);
                        if (i && a) return !0;
                        var o = n.top < e.top && n.bottom > e.bottom,
                            l = n.left < e.left && n.right > e.right;
                        return !!o && !!l || o && a || l && i
                    }
                },
                eg = function(e) {
                    var r = ep(e.top, e.bottom),
                        t = ep(e.left, e.right);
                    return function(e) {
                        return r(e.top) && r(e.bottom) && t(e.left) && t(e.right)
                    }
                },
                em = {
                    direction: "vertical",
                    line: "y",
                    crossAxisLine: "x",
                    start: "top",
                    end: "bottom",
                    size: "height",
                    crossAxisStart: "left",
                    crossAxisEnd: "right",
                    crossAxisSize: "width"
                },
                ev = {
                    direction: "horizontal",
                    line: "x",
                    crossAxisLine: "y",
                    start: "left",
                    end: "right",
                    size: "width",
                    crossAxisStart: "top",
                    crossAxisEnd: "bottom",
                    crossAxisSize: "height"
                },
                eb = function(e) {
                    var r = e.target,
                        t = e.destination,
                        n = e.viewport,
                        i = e.withDroppableDisplacement,
                        a = e.isVisibleThroughFrameFn,
                        o = i ? j(r, t.frame ? t.frame.scroll.diff.displacement : L) : r;
                    return !!t.subject.active && a(t.subject.active)(o) && a(n)(o)
                },
                eh = function(e) {
                    return eb((0, f.Z)({}, e, {
                        isVisibleThroughFrameFn: eg
                    }))
                },
                eI = function(e) {
                    var r;
                    return eb((0, f.Z)({}, e, {
                        isVisibleThroughFrameFn: (r = e.destination.axis, function(e) {
                            var t = ep(e.top, e.bottom),
                                n = ep(e.left, e.right);
                            return function(e) {
                                return r === em ? t(e.top) && t(e.bottom) : n(e.left) && n(e.right)
                            }
                        })
                    }))
                },
                ey = function(e, r, t) {
                    if ("boolean" == typeof t) return t;
                    if (!r) return !0;
                    var n = r.invisible,
                        i = r.visible;
                    if (n[e]) return !1;
                    var a = i[e];
                    return !a || a.shouldAnimate
                };

            function eD(e) {
                var r = e.afterDragging,
                    t = e.destination,
                    n = e.displacedBy,
                    i = e.viewport,
                    a = e.forceShouldAnimate,
                    o = e.last;
                return r.reduce(function(e, r) {
                    var l, c, u = (l = r.page.marginBox, c = {
                            top: n.point.y,
                            right: 0,
                            bottom: 0,
                            left: n.point.x
                        }, (0, b.getRect)((0, b.expand)(l, c))),
                        d = r.descriptor.id;
                    if (e.all.push(d), !eb((0, f.Z)({}, {
                            target: u,
                            destination: t,
                            viewport: i,
                            withDroppableDisplacement: !0
                        }, {
                            isVisibleThroughFrameFn: ef
                        }))) return e.invisible[r.descriptor.id] = !0, e;
                    var s = ey(d, o, a);
                    return e.visible[d] = {
                        draggableId: d,
                        shouldAnimate: s
                    }, e
                }, {
                    all: [],
                    visible: {},
                    invisible: {}
                })
            }

            function ex(e) {
                var r = e.insideDestination,
                    t = e.inHomeList,
                    n = e.displacedBy,
                    i = e.destination,
                    a = function(e, r) {
                        if (!e.length) return 0;
                        var t = e[e.length - 1].descriptor.index;
                        return r.inHomeList ? t : t + 1
                    }(r, {
                        inHomeList: t
                    });
                return {
                    displaced: ed,
                    displacedBy: n,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: i.descriptor.id,
                            index: a
                        }
                    }
                }
            }

            function eE(e) {
                var r = e.draggable,
                    t = e.insideDestination,
                    n = e.destination,
                    i = e.viewport,
                    a = e.displacedBy,
                    o = e.last,
                    l = e.index,
                    c = e.forceShouldAnimate,
                    u = ec(r, n);
                if (null == l) return ex({
                    insideDestination: t,
                    inHomeList: u,
                    displacedBy: a,
                    destination: n
                });
                var d = K(t, function(e) {
                    return e.descriptor.index === l
                });
                if (!d) return ex({
                    insideDestination: t,
                    inHomeList: u,
                    displacedBy: a,
                    destination: n
                });
                var s = eo(r, t),
                    p = t.indexOf(d);
                return {
                    displaced: eD({
                        afterDragging: s.slice(p),
                        destination: n,
                        displacedBy: a,
                        last: o,
                        viewport: i.frame,
                        forceShouldAnimate: c
                    }),
                    displacedBy: a,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: n.descriptor.id,
                            index: l
                        }
                    }
                }
            }

            function eC(e, r) {
                return Boolean(r.effected[e])
            }
            var ew = function(e) {
                    var r = e.isMovingForward,
                        t = e.destination,
                        n = e.draggables,
                        i = e.combine,
                        a = e.afterCritical;
                    if (!t.isCombineEnabled) return null;
                    var o = i.draggableId,
                        l = n[o].descriptor.index;
                    return eC(o, a) ? r ? l : l - 1 : r ? l + 1 : l
                },
                eA = function(e) {
                    var r = e.isMovingForward,
                        t = e.isInHomeList,
                        n = e.insideDestination,
                        i = e.location;
                    if (!n.length) return null;
                    var a = i.index,
                        o = r ? a + 1 : a - 1,
                        l = n[0].descriptor.index,
                        c = n[n.length - 1].descriptor.index;
                    return o < l || o > (t ? c : c + 1) ? null : o
                },
                eR = function(e) {
                    var r = e.isMovingForward,
                        t = e.isInHomeList,
                        n = e.draggable,
                        i = e.draggables,
                        a = e.destination,
                        o = e.insideDestination,
                        l = e.previousImpact,
                        c = e.viewport,
                        u = e.afterCritical,
                        d = l.at;
                    if (d || R(!1), "REORDER" === d.type) {
                        var s = eA({
                            isMovingForward: r,
                            isInHomeList: t,
                            location: d.destination,
                            insideDestination: o
                        });
                        return null == s ? null : eE({
                            draggable: n,
                            insideDestination: o,
                            destination: a,
                            viewport: c,
                            last: l.displaced,
                            displacedBy: l.displacedBy,
                            index: s
                        })
                    }
                    var p = ew({
                        isMovingForward: r,
                        destination: a,
                        displaced: l.displaced,
                        draggables: i,
                        combine: d.combine,
                        afterCritical: u
                    });
                    return null == p ? null : eE({
                        draggable: n,
                        insideDestination: o,
                        destination: a,
                        viewport: c,
                        last: l.displaced,
                        displacedBy: l.displacedBy,
                        index: p
                    })
                },
                eS = function(e) {
                    var r = e.displaced,
                        t = e.afterCritical,
                        n = e.combineWith,
                        i = e.displacedBy,
                        a = Boolean(r.visible[n] || r.invisible[n]);
                    return eC(n, t) ? a ? L : F(i.point) : a ? i.point : L
                },
                eB = function(e) {
                    var r = e.afterCritical,
                        t = e.impact,
                        n = e.draggables,
                        i = ea(t);
                    i || R(!1);
                    var a = i.draggableId;
                    return G(n[a].page.borderBox.center, eS({
                        displaced: t.displaced,
                        afterCritical: r,
                        combineWith: a,
                        displacedBy: t.displacedBy
                    }))
                },
                eN = function(e, r) {
                    return r.margin[e.start] + r.borderBox[e.size] / 2
                },
                eP = function(e, r, t) {
                    return r[e.crossAxisStart] + t.margin[e.crossAxisStart] + t.borderBox[e.crossAxisSize] / 2
                },
                eO = function(e) {
                    var r = e.axis,
                        t = e.moveRelativeTo,
                        n = e.isMoving;
                    return k(r.line, t.marginBox[r.end] + eN(r, n), eP(r, t.marginBox, n))
                },
                eT = function(e) {
                    var r = e.axis,
                        t = e.moveRelativeTo,
                        n = e.isMoving;
                    return k(r.line, t.marginBox[r.start] - (n.margin[r.end] + n.borderBox[r.size] / 2), eP(r, t.marginBox, n))
                },
                eL = function(e) {
                    var r = e.axis,
                        t = e.moveInto,
                        n = e.isMoving;
                    return k(r.line, t.contentBox[r.start] + eN(r, n), eP(r, t.contentBox, n))
                },
                eG = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.draggables,
                        i = e.droppable,
                        a = e.afterCritical,
                        o = en(i.descriptor.id, n),
                        l = t.page,
                        c = i.axis;
                    if (!o.length) return eL({
                        axis: c,
                        moveInto: i.page,
                        isMoving: l
                    });
                    var u = r.displaced,
                        d = r.displacedBy,
                        s = u.all[0];
                    if (s) {
                        var p = n[s];
                        return eC(s, a) ? eT({
                            axis: c,
                            moveRelativeTo: p.page,
                            isMoving: l
                        }) : eT({
                            axis: c,
                            moveRelativeTo: (0, b.offset)(p.page, d.point),
                            isMoving: l
                        })
                    }
                    var f = o[o.length - 1];
                    return f.descriptor.id === t.descriptor.id ? l.borderBox.center : eC(f.descriptor.id, a) ? eO({
                        axis: c,
                        moveRelativeTo: (0, b.offset)(f.page, F(a.displacedBy.point)),
                        isMoving: l
                    }) : eO({
                        axis: c,
                        moveRelativeTo: f.page,
                        isMoving: l
                    })
                },
                eM = function(e, r) {
                    var t = e.frame;
                    return t ? G(r, t.scroll.diff.displacement) : r
                },
                e_ = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.droppable,
                        i = e.draggables,
                        a = e.afterCritical,
                        o = t.page.borderBox.center,
                        l = r.at;
                    return n && l ? "REORDER" === l.type ? eG({
                        impact: r,
                        draggable: t,
                        draggables: i,
                        droppable: n,
                        afterCritical: a
                    }) : eB({
                        impact: r,
                        draggables: i,
                        afterCritical: a
                    }) : o
                },
                eF = function(e) {
                    var r = e_(e),
                        t = e.droppable;
                    return t ? eM(t, r) : r
                },
                ek = function(e, r) {
                    var t = M(r, e.scroll.initial),
                        n = F(t);
                    return {
                        frame: (0, b.getRect)({
                            top: r.y,
                            bottom: r.y + e.frame.height,
                            left: r.x,
                            right: r.x + e.frame.width
                        }),
                        scroll: {
                            initial: e.scroll.initial,
                            max: e.scroll.max,
                            current: r,
                            diff: {
                                value: t,
                                displacement: n
                            }
                        }
                    }
                };

            function eW(e, r) {
                return e.map(function(e) {
                    return r[e]
                })
            }
            var eU = function(e) {
                    var r = e.impact,
                        t = e.viewport,
                        n = e.destination,
                        i = e.draggables,
                        a = e.maxScrollChange,
                        o = ek(t, G(t.scroll.current, a)),
                        l = n.frame ? z(n, G(n.frame.scroll.current, a)) : n,
                        c = r.displaced,
                        u = eD({
                            afterDragging: eW(c.all, i),
                            destination: n,
                            displacedBy: r.displacedBy,
                            viewport: o.frame,
                            last: c,
                            forceShouldAnimate: !1
                        }),
                        d = eD({
                            afterDragging: eW(c.all, i),
                            destination: l,
                            displacedBy: r.displacedBy,
                            viewport: t.frame,
                            last: c,
                            forceShouldAnimate: !1
                        }),
                        s = {},
                        p = {},
                        g = [c, u, d];
                    return c.all.forEach(function(e) {
                        var r = function(e, r) {
                            for (var t = 0; t < r.length; t++) {
                                var n = r[t].visible[e];
                                if (n) return n
                            }
                            return null
                        }(e, g);
                        if (r) {
                            p[e] = r;
                            return
                        }
                        s[e] = !0
                    }), (0, f.Z)({}, r, {
                        displaced: {
                            all: c.all,
                            invisible: s,
                            visible: p
                        }
                    })
                },
                eZ = function(e) {
                    var r = e.pageBorderBoxCenter,
                        t = e.draggable,
                        n = M(G(e.viewport.scroll.diff.displacement, r), t.page.borderBox.center);
                    return G(t.client.borderBox.center, n)
                },
                eH = function(e) {
                    var r = e.draggable,
                        t = e.destination,
                        n = e.newPageBorderBoxCenter,
                        i = e.viewport,
                        a = e.withDroppableDisplacement,
                        o = e.onlyOnMainAxis,
                        l = M(n, r.page.borderBox.center),
                        c = {
                            target: j(r.page.borderBox, l),
                            destination: t,
                            withDroppableDisplacement: a,
                            viewport: i
                        };
                    return void 0 !== o && o ? eI(c) : eh(c)
                },
                ej = function(e) {
                    var r = e.isMovingForward,
                        t = e.draggable,
                        n = e.destination,
                        i = e.draggables,
                        a = e.previousImpact,
                        o = e.viewport,
                        l = e.previousPageBorderBoxCenter,
                        c = e.previousClientSelection,
                        u = e.afterCritical;
                    if (!n.isEnabled) return null;
                    var d = en(n.descriptor.id, i),
                        s = ec(t, n),
                        p = el({
                            isMovingForward: r,
                            draggable: t,
                            destination: n,
                            insideDestination: d,
                            previousImpact: a
                        }) || eR({
                            isMovingForward: r,
                            isInHomeList: s,
                            draggable: t,
                            draggables: i,
                            destination: n,
                            insideDestination: d,
                            previousImpact: a,
                            viewport: o,
                            afterCritical: u
                        });
                    if (!p) return null;
                    var f = eF({
                        impact: p,
                        draggable: t,
                        droppable: n,
                        draggables: i,
                        afterCritical: u
                    });
                    if (eH({
                            draggable: t,
                            destination: n,
                            newPageBorderBoxCenter: f,
                            viewport: o.frame,
                            withDroppableDisplacement: !1,
                            onlyOnMainAxis: !0
                        })) return {
                        clientSelection: eZ({
                            pageBorderBoxCenter: f,
                            draggable: t,
                            viewport: o
                        }),
                        impact: p,
                        scrollJumpRequest: null
                    };
                    var g = M(f, l);
                    return {
                        clientSelection: c,
                        impact: eU({
                            impact: p,
                            viewport: o,
                            destination: n,
                            draggables: i,
                            maxScrollChange: g
                        }),
                        scrollJumpRequest: g
                    }
                },
                eY = function(e) {
                    var r = e.subject.active;
                    return r || R(!1), r
                },
                eV = function(e) {
                    var r = e.isMovingForward,
                        t = e.pageBorderBoxCenter,
                        n = e.source,
                        i = e.droppables,
                        a = e.viewport,
                        o = n.subject.active;
                    if (!o) return null;
                    var l = n.axis,
                        c = ep(o[l.start], o[l.end]),
                        u = er(i).filter(function(e) {
                            return e !== n
                        }).filter(function(e) {
                            return e.isEnabled
                        }).filter(function(e) {
                            return Boolean(e.subject.active)
                        }).filter(function(e) {
                            return ef(a.frame)(eY(e))
                        }).filter(function(e) {
                            var t = eY(e);
                            return r ? o[l.crossAxisEnd] < t[l.crossAxisEnd] : t[l.crossAxisStart] < o[l.crossAxisStart]
                        }).filter(function(e) {
                            var r = eY(e),
                                t = ep(r[l.start], r[l.end]);
                            return c(r[l.start]) || c(r[l.end]) || t(o[l.start]) || t(o[l.end])
                        }).sort(function(e, t) {
                            var n = eY(e)[l.crossAxisStart],
                                i = eY(t)[l.crossAxisStart];
                            return r ? n - i : i - n
                        }).filter(function(e, r, t) {
                            return eY(e)[l.crossAxisStart] === eY(t[0])[l.crossAxisStart]
                        });
                    if (!u.length) return null;
                    if (1 === u.length) return u[0];
                    var d = u.filter(function(e) {
                        return ep(eY(e)[l.start], eY(e)[l.end])(t[l.line])
                    });
                    return 1 === d.length ? d[0] : d.length > 1 ? d.sort(function(e, r) {
                        return eY(e)[l.start] - eY(r)[l.start]
                    })[0] : u.sort(function(e, r) {
                        var n = U(t, Y(eY(e))),
                            i = U(t, Y(eY(r)));
                        return n !== i ? n - i : eY(e)[l.start] - eY(r)[l.start]
                    })[0]
                },
                eq = function(e, r) {
                    var t = e.page.borderBox.center;
                    return eC(e.descriptor.id, r) ? M(t, r.displacedBy.point) : t
                },
                ez = function(e, r) {
                    var t = e.page.borderBox;
                    return eC(e.descriptor.id, r) ? j(t, F(r.displacedBy.point)) : t
                },
                eJ = function(e) {
                    var r = e.pageBorderBoxCenter,
                        t = e.viewport,
                        n = e.destination,
                        i = e.insideDestination,
                        a = e.afterCritical;
                    return i.filter(function(e) {
                        return eh({
                            target: ez(e, a),
                            destination: n,
                            viewport: t.frame,
                            withDroppableDisplacement: !0
                        })
                    }).sort(function(e, t) {
                        var i = W(r, eM(n, eq(e, a))),
                            o = W(r, eM(n, eq(t, a)));
                        return i < o ? -1 : o < i ? 1 : e.descriptor.index - t.descriptor.index
                    })[0] || null
                },
                eX = (0, h.Z)(function(e, r) {
                    var t = r[e.line];
                    return {
                        value: t,
                        point: k(e.line, t)
                    }
                }),
                eK = function(e, r, t) {
                    var n = e.axis;
                    if ("virtual" === e.descriptor.mode) return k(n.line, r[n.line]);
                    var i = e.subject.page.contentBox[n.size],
                        a = en(e.descriptor.id, t).reduce(function(e, r) {
                            return e + r.client.marginBox[n.size]
                        }, 0) + r[n.line] - i;
                    return a <= 0 ? null : k(n.line, a)
                },
                e$ = function(e, r) {
                    return (0, f.Z)({}, e, {
                        scroll: (0, f.Z)({}, e.scroll, {
                            max: r
                        })
                    })
                },
                eQ = function(e, r, t) {
                    var n = e.frame;
                    ec(r, e) && R(!1), e.subject.withPlaceholder && R(!1);
                    var i = eX(e.axis, r.displaceBy).point,
                        a = eK(e, i, t),
                        o = {
                            placeholderSize: i,
                            increasedBy: a,
                            oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
                        };
                    if (!n) {
                        var l = q({
                            page: e.subject.page,
                            withPlaceholder: o,
                            axis: e.axis,
                            frame: e.frame
                        });
                        return (0, f.Z)({}, e, {
                            subject: l
                        })
                    }
                    var c = a ? G(n.scroll.max, a) : n.scroll.max,
                        u = e$(n, c),
                        d = q({
                            page: e.subject.page,
                            withPlaceholder: o,
                            axis: e.axis,
                            frame: u
                        });
                    return (0, f.Z)({}, e, {
                        subject: d,
                        frame: u
                    })
                },
                e0 = function(e) {
                    var r = e.subject.withPlaceholder;
                    r || R(!1);
                    var t = e.frame;
                    if (!t) {
                        var n = q({
                            page: e.subject.page,
                            axis: e.axis,
                            frame: null,
                            withPlaceholder: null
                        });
                        return (0, f.Z)({}, e, {
                            subject: n
                        })
                    }
                    var i = r.oldFrameMaxScroll;
                    i || R(!1);
                    var a = e$(t, i),
                        o = q({
                            page: e.subject.page,
                            axis: e.axis,
                            frame: a,
                            withPlaceholder: null
                        });
                    return (0, f.Z)({}, e, {
                        subject: o,
                        frame: a
                    })
                },
                e1 = function(e) {
                    var r, t = e.previousPageBorderBoxCenter,
                        n = e.moveRelativeTo,
                        i = e.insideDestination,
                        a = e.draggable,
                        o = e.draggables,
                        l = e.destination,
                        c = e.viewport,
                        u = e.afterCritical;
                    if (!n) {
                        if (i.length) return null;
                        var d = {
                                displaced: ed,
                                displacedBy: eu,
                                at: {
                                    type: "REORDER",
                                    destination: {
                                        droppableId: l.descriptor.id,
                                        index: 0
                                    }
                                }
                            },
                            s = eF({
                                impact: d,
                                draggable: a,
                                droppable: l,
                                draggables: o,
                                afterCritical: u
                            }),
                            p = ec(a, l) ? l : eQ(l, a, o);
                        return eH({
                            draggable: a,
                            destination: p,
                            newPageBorderBoxCenter: s,
                            viewport: c.frame,
                            withDroppableDisplacement: !1,
                            onlyOnMainAxis: !0
                        }) ? d : null
                    }
                    var f = Boolean(t[l.axis.line] <= n.page.borderBox.center[l.axis.line]),
                        g = (r = n.descriptor.index, n.descriptor.id === a.descriptor.id || f ? r : r + 1),
                        m = eX(l.axis, a.displaceBy);
                    return eE({
                        draggable: a,
                        insideDestination: i,
                        destination: l,
                        viewport: c,
                        displacedBy: m,
                        last: ed,
                        index: g
                    })
                },
                e4 = function(e) {
                    var r = e.isMovingForward,
                        t = e.previousPageBorderBoxCenter,
                        n = e.draggable,
                        i = e.isOver,
                        a = e.draggables,
                        o = e.droppables,
                        l = e.viewport,
                        c = e.afterCritical,
                        u = eV({
                            isMovingForward: r,
                            pageBorderBoxCenter: t,
                            source: i,
                            droppables: o,
                            viewport: l
                        });
                    if (!u) return null;
                    var d = en(u.descriptor.id, a),
                        s = eJ({
                            pageBorderBoxCenter: t,
                            viewport: l,
                            destination: u,
                            insideDestination: d,
                            afterCritical: c
                        }),
                        p = e1({
                            previousPageBorderBoxCenter: t,
                            destination: u,
                            draggable: n,
                            draggables: a,
                            moveRelativeTo: s,
                            insideDestination: d,
                            viewport: l,
                            afterCritical: c
                        });
                    return p ? {
                        clientSelection: eZ({
                            pageBorderBoxCenter: eF({
                                impact: p,
                                draggable: n,
                                droppable: u,
                                draggables: a,
                                afterCritical: c
                            }),
                            draggable: n,
                            viewport: l
                        }),
                        impact: p,
                        scrollJumpRequest: null
                    } : null
                },
                e2 = function(e) {
                    var r = e.at;
                    return r ? "REORDER" === r.type ? r.destination.droppableId : r.combine.droppableId : null
                },
                e3 = function(e, r) {
                    var t = e2(e);
                    return t ? r[t] : null
                },
                e5 = function(e) {
                    var r = e.state,
                        t = e.type,
                        n = e3(r.impact, r.dimensions.droppables),
                        i = Boolean(n),
                        a = r.dimensions.droppables[r.critical.droppable.id],
                        o = n || a,
                        l = o.axis.direction,
                        c = "vertical" === l && ("MOVE_UP" === t || "MOVE_DOWN" === t) || "horizontal" === l && ("MOVE_LEFT" === t || "MOVE_RIGHT" === t);
                    if (c && !i) return null;
                    var u = "MOVE_DOWN" === t || "MOVE_RIGHT" === t,
                        d = r.dimensions.draggables[r.critical.draggable.id],
                        s = r.current.page.borderBoxCenter,
                        p = r.dimensions,
                        f = p.draggables,
                        g = p.droppables;
                    return c ? ej({
                        isMovingForward: u,
                        previousPageBorderBoxCenter: s,
                        draggable: d,
                        destination: o,
                        draggables: f,
                        viewport: r.viewport,
                        previousClientSelection: r.current.client.selection,
                        previousImpact: r.impact,
                        afterCritical: r.afterCritical
                    }) : e4({
                        isMovingForward: u,
                        previousPageBorderBoxCenter: s,
                        draggable: d,
                        isOver: o,
                        draggables: f,
                        droppables: g,
                        viewport: r.viewport,
                        afterCritical: r.afterCritical
                    })
                };

            function e7(e) {
                return "DRAGGING" === e.phase || "COLLECTING" === e.phase
            }

            function e8(e) {
                var r = ep(e.top, e.bottom),
                    t = ep(e.left, e.right);
                return function(e) {
                    return r(e.y) && t(e.x)
                }
            }
            var e6 = function(e, r) {
                    return (0, b.getRect)(j(e, r))
                },
                e9 = function(e, r) {
                    var t = e.frame;
                    return t ? e6(r, t.scroll.diff.value) : r
                };

            function re(e) {
                var r = e.displaced,
                    t = e.id;
                return Boolean(r.visible[t] || r.invisible[t])
            }
            var rr = function(e) {
                    var r, t, n, i, a = e.pageBorderBoxWithDroppableScroll,
                        o = e.draggable,
                        l = e.destination,
                        c = e.insideDestination,
                        u = e.last,
                        d = e.viewport,
                        s = e.afterCritical,
                        p = l.axis,
                        f = eX(l.axis, o.displaceBy),
                        g = f.value,
                        m = a[p.start],
                        v = a[p.end],
                        b = K(eo(o, c), function(e) {
                            var r = e.descriptor.id,
                                t = e.page.borderBox.center[p.line],
                                n = eC(r, s),
                                i = re({
                                    displaced: u,
                                    id: r
                                });
                            return n ? i ? v <= t : m < t - g : i ? v <= t + g : m < t
                        }),
                        h = (t = (r = {
                            draggable: o,
                            closest: b,
                            inHomeList: ec(o, l)
                        }).draggable, n = r.closest, i = r.inHomeList, n ? i && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null);
                    return eE({
                        draggable: o,
                        insideDestination: c,
                        destination: l,
                        viewport: d,
                        last: u,
                        displacedBy: f,
                        index: h
                    })
                },
                rt = function(e) {
                    var r = e.draggable,
                        t = e.pageBorderBoxWithDroppableScroll,
                        n = e.previousImpact,
                        i = e.destination,
                        a = e.insideDestination,
                        o = e.afterCritical;
                    if (!i.isCombineEnabled) return null;
                    var l = i.axis,
                        c = eX(i.axis, r.displaceBy),
                        u = c.value,
                        d = t[l.start],
                        s = t[l.end],
                        p = K(eo(r, a), function(e) {
                            var r = e.descriptor.id,
                                t = e.page.borderBox,
                                i = t[l.size] / 4,
                                a = eC(r, o),
                                c = re({
                                    displaced: n.displaced,
                                    id: r
                                });
                            return a ? c ? s > t[l.start] + i && s < t[l.end] - i : d > t[l.start] - u + i && d < t[l.end] - u - i : c ? s > t[l.start] + u + i && s < t[l.end] + u - i : d > t[l.start] + i && d < t[l.end] - i
                        });
                    return p ? {
                        displacedBy: c,
                        displaced: n.displaced,
                        at: {
                            type: "COMBINE",
                            combine: {
                                draggableId: p.descriptor.id,
                                droppableId: i.descriptor.id
                            }
                        }
                    } : null
                },
                rn = function(e) {
                    var r, t, n, i, a, o, l, c, u, d, s = e.pageOffset,
                        p = e.draggable,
                        f = e.draggables,
                        g = e.droppables,
                        m = e.previousImpact,
                        v = e.viewport,
                        b = e.afterCritical,
                        h = e6(p.page.borderBox, s),
                        I = (c = (r = {
                            pageBorderBox: h,
                            draggable: p,
                            droppables: g
                        }).pageBorderBox, u = r.draggable, (d = er(r.droppables).filter(function(e) {
                            if (!e.isEnabled) return !1;
                            var r = e.subject.active;
                            if (!r || !(c.left < r.right) || !(c.right > r.left) || !(c.top < r.bottom) || !(c.bottom > r.top)) return !1;
                            if (e8(r)(c.center)) return !0;
                            var t = e.axis,
                                n = r.center[t.crossAxisLine],
                                i = c[t.crossAxisStart],
                                a = c[t.crossAxisEnd],
                                o = ep(r[t.crossAxisStart], r[t.crossAxisEnd]),
                                l = o(i),
                                u = o(a);
                            return !l && !u || (l ? i < n : a > n)
                        })).length ? 1 === d.length ? d[0].descriptor.id : (n = (t = {
                            pageBorderBox: c,
                            draggable: u,
                            candidates: d
                        }).pageBorderBox, i = t.draggable, a = t.candidates, o = i.page.borderBox.center, (l = a.map(function(e) {
                            var r = e.axis,
                                t = k(e.axis.line, n.center[r.line], e.page.borderBox.center[r.crossAxisLine]);
                            return {
                                id: e.descriptor.id,
                                distance: W(o, t)
                            }
                        }).sort(function(e, r) {
                            return r.distance - e.distance
                        }))[0] ? l[0].id : null) : null);
                    if (!I) return es;
                    var y = g[I],
                        D = en(y.descriptor.id, f),
                        x = e9(y, h);
                    return rt({
                        pageBorderBoxWithDroppableScroll: x,
                        draggable: p,
                        previousImpact: m,
                        destination: y,
                        insideDestination: D,
                        afterCritical: b
                    }) || rr({
                        pageBorderBoxWithDroppableScroll: x,
                        draggable: p,
                        destination: y,
                        insideDestination: D,
                        last: m.displaced,
                        viewport: v,
                        afterCritical: b
                    })
                },
                ri = function(e, r) {
                    var t;
                    return (0, f.Z)({}, e, ((t = {})[r.descriptor.id] = r, t))
                },
                ra = function(e) {
                    var r = e.previousImpact,
                        t = e.impact,
                        n = e.droppables,
                        i = e2(r),
                        a = e2(t);
                    if (!i || i === a) return n;
                    var o = n[i];
                    return o.subject.withPlaceholder ? ri(n, e0(o)) : n
                },
                ro = function(e) {
                    var r = e.draggable,
                        t = e.draggables,
                        n = e.droppables,
                        i = e.previousImpact,
                        a = e.impact,
                        o = ra({
                            previousImpact: i,
                            impact: a,
                            droppables: n
                        }),
                        l = e2(a);
                    if (!l) return o;
                    var c = n[l];
                    return ec(r, c) || c.subject.withPlaceholder ? o : ri(o, eQ(c, r, t))
                },
                rl = function(e) {
                    var r = e.state,
                        t = e.clientSelection,
                        n = e.dimensions,
                        i = e.viewport,
                        a = e.impact,
                        o = e.scrollJumpRequest,
                        l = i || r.viewport,
                        c = n || r.dimensions,
                        u = t || r.current.client.selection,
                        d = M(u, r.initial.client.selection),
                        s = {
                            offset: d,
                            selection: u,
                            borderBoxCenter: G(r.initial.client.borderBoxCenter, d)
                        },
                        p = {
                            selection: G(s.selection, l.scroll.current),
                            borderBoxCenter: G(s.borderBoxCenter, l.scroll.current),
                            offset: G(s.offset, l.scroll.diff.value)
                        },
                        g = {
                            client: s,
                            page: p
                        };
                    if ("COLLECTING" === r.phase) return (0, f.Z)({
                        phase: "COLLECTING"
                    }, r, {
                        dimensions: c,
                        viewport: l,
                        current: g
                    });
                    var m = c.draggables[r.critical.draggable.id],
                        v = a || rn({
                            pageOffset: p.offset,
                            draggable: m,
                            draggables: c.draggables,
                            droppables: c.droppables,
                            previousImpact: r.impact,
                            viewport: l,
                            afterCritical: r.afterCritical
                        }),
                        b = ro({
                            draggable: m,
                            impact: v,
                            previousImpact: r.impact,
                            draggables: c.draggables,
                            droppables: c.droppables
                        });
                    return (0, f.Z)({}, r, {
                        current: g,
                        dimensions: {
                            draggables: c.draggables,
                            droppables: b
                        },
                        impact: v,
                        viewport: l,
                        scrollJumpRequest: o || null,
                        forceShouldAnimate: !o && null
                    })
                },
                rc = function(e) {
                    var r = e.impact,
                        t = e.viewport,
                        n = e.draggables,
                        i = e.destination,
                        a = e.forceShouldAnimate,
                        o = r.displaced,
                        l = eD({
                            afterDragging: o.all.map(function(e) {
                                return n[e]
                            }),
                            destination: i,
                            displacedBy: r.displacedBy,
                            viewport: t.frame,
                            forceShouldAnimate: a,
                            last: o
                        });
                    return (0, f.Z)({}, r, {
                        displaced: l
                    })
                },
                ru = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.droppable,
                        i = e.draggables,
                        a = e.viewport;
                    return eZ({
                        pageBorderBoxCenter: eF({
                            impact: r,
                            draggable: t,
                            draggables: i,
                            droppable: n,
                            afterCritical: e.afterCritical
                        }),
                        draggable: t,
                        viewport: a
                    })
                },
                rd = function(e) {
                    var r = e.state,
                        t = e.dimensions,
                        n = e.viewport;
                    "SNAP" !== r.movementMode && R(!1);
                    var i = r.impact,
                        a = n || r.viewport,
                        o = t || r.dimensions,
                        l = o.draggables,
                        c = o.droppables,
                        u = l[r.critical.draggable.id],
                        d = e2(i);
                    d || R(!1);
                    var s = c[d],
                        p = rc({
                            impact: i,
                            viewport: a,
                            destination: s,
                            draggables: l
                        }),
                        f = ru({
                            impact: p,
                            draggable: u,
                            droppable: s,
                            draggables: l,
                            viewport: a,
                            afterCritical: r.afterCritical
                        });
                    return rl({
                        impact: p,
                        clientSelection: f,
                        state: r,
                        dimensions: o,
                        viewport: a
                    })
                },
                rs = function(e) {
                    var r, t = e.draggable,
                        n = e.home,
                        i = e.draggables,
                        a = e.viewport,
                        o = eX(n.axis, t.displaceBy),
                        l = en(n.descriptor.id, i),
                        c = l.indexOf(t); - 1 !== c || R(!1);
                    var u = l.slice(c + 1),
                        d = u.reduce(function(e, r) {
                            return e[r.descriptor.id] = !0, e
                        }, {}),
                        s = {
                            inVirtualList: "virtual" === n.descriptor.mode,
                            displacedBy: o,
                            effected: d
                        };
                    return {
                        impact: {
                            displaced: eD({
                                afterDragging: u,
                                destination: n,
                                displacedBy: o,
                                last: null,
                                viewport: a.frame,
                                forceShouldAnimate: !1
                            }),
                            displacedBy: o,
                            at: {
                                type: "REORDER",
                                destination: {
                                    index: (r = t.descriptor).index,
                                    droppableId: r.droppableId
                                }
                            }
                        },
                        afterCritical: s
                    }
                },
                rp = function(e) {},
                rf = function(e) {},
                rg = function(e) {
                    var r = e.draggable,
                        t = e.offset,
                        n = e.initialWindowScroll,
                        i = (0, b.offset)(r.client, t),
                        a = (0, b.withScroll)(i, n);
                    return (0, f.Z)({}, r, {
                        placeholder: (0, f.Z)({}, r.placeholder, {
                            client: i
                        }),
                        client: i,
                        page: a
                    })
                },
                rm = function(e) {
                    var r = e.frame;
                    return r || R(!1), r
                },
                rv = function(e) {
                    var r = e.additions,
                        t = e.updatedDroppables,
                        n = e.viewport,
                        i = n.scroll.diff.value;
                    return r.map(function(e) {
                        var r = G(i, rm(t[e.descriptor.droppableId]).scroll.diff.value);
                        return rg({
                            draggable: e,
                            offset: r,
                            initialWindowScroll: n.scroll.initial
                        })
                    })
                },
                rb = function(e) {
                    var r = e.state,
                        t = e.published;
                    rp();
                    var n = t.modified.map(function(e) {
                            return z(r.dimensions.droppables[e.droppableId], e.scroll)
                        }),
                        i = (0, f.Z)({}, r.dimensions.droppables, {}, Q(n)),
                        a = ee(rv({
                            additions: t.additions,
                            updatedDroppables: i,
                            viewport: r.viewport
                        })),
                        o = (0, f.Z)({}, r.dimensions.draggables, {}, a);
                    t.removals.forEach(function(e) {
                        delete o[e]
                    });
                    var l = {
                            droppables: i,
                            draggables: o
                        },
                        c = e2(r.impact),
                        u = c ? l.droppables[c] : null,
                        d = rs({
                            draggable: l.draggables[r.critical.draggable.id],
                            home: l.droppables[r.critical.droppable.id],
                            draggables: o,
                            viewport: r.viewport
                        }),
                        s = d.impact,
                        p = d.afterCritical,
                        g = u && u.isCombineEnabled ? r.impact : s,
                        m = rn({
                            pageOffset: r.current.page.offset,
                            draggable: l.draggables[r.critical.draggable.id],
                            draggables: l.draggables,
                            droppables: l.droppables,
                            previousImpact: g,
                            viewport: r.viewport,
                            afterCritical: p
                        });
                    rf();
                    var v = (0, f.Z)({
                        phase: "DRAGGING"
                    }, r, {
                        phase: "DRAGGING",
                        impact: m,
                        onLiftImpact: s,
                        dimensions: l,
                        afterCritical: p,
                        forceShouldAnimate: !1
                    });
                    return "COLLECTING" === r.phase ? v : (0, f.Z)({
                        phase: "DROP_PENDING"
                    }, v, {
                        phase: "DROP_PENDING",
                        reason: r.reason,
                        isWaiting: !1
                    })
                },
                rh = function(e) {
                    return "SNAP" === e.movementMode
                },
                rI = function(e, r, t) {
                    var n, i = {
                        draggables: (n = e.dimensions).draggables,
                        droppables: ri(n.droppables, r)
                    };
                    return !rh(e) || t ? rl({
                        state: e,
                        dimensions: i
                    }) : rd({
                        state: e,
                        dimensions: i
                    })
                };

            function ry(e) {
                return e.isDragging && "SNAP" === e.movementMode ? (0, f.Z)({
                    phase: "DRAGGING"
                }, e, {
                    scrollJumpRequest: null
                }) : e
            }
            var rD = {
                    phase: "IDLE",
                    completed: null,
                    shouldFlush: !1
                },
                rx = function(e, r) {
                    if (void 0 === e && (e = rD), "FLUSH" === r.type) return (0, f.Z)({}, rD, {
                        shouldFlush: !0
                    });
                    if ("INITIAL_PUBLISH" === r.type) {
                        "IDLE" !== e.phase && R(!1);
                        var t = r.payload,
                            n = t.critical,
                            i = t.clientSelection,
                            a = t.viewport,
                            o = t.dimensions,
                            l = t.movementMode,
                            c = o.draggables[n.draggable.id],
                            u = o.droppables[n.droppable.id],
                            d = {
                                selection: i,
                                borderBoxCenter: c.client.borderBox.center,
                                offset: L
                            },
                            s = {
                                client: d,
                                page: {
                                    selection: G(d.selection, a.scroll.initial),
                                    borderBoxCenter: G(d.selection, a.scroll.initial),
                                    offset: G(d.selection, a.scroll.diff.value)
                                }
                            },
                            p = er(o.droppables).every(function(e) {
                                return !e.isFixedOnPage
                            }),
                            g = rs({
                                draggable: c,
                                home: u,
                                draggables: o.draggables,
                                viewport: a
                            }),
                            m = g.impact;
                        return {
                            phase: "DRAGGING",
                            isDragging: !0,
                            critical: n,
                            movementMode: l,
                            dimensions: o,
                            initial: s,
                            current: s,
                            isWindowScrollAllowed: p,
                            impact: m,
                            afterCritical: g.afterCritical,
                            onLiftImpact: m,
                            viewport: a,
                            scrollJumpRequest: null,
                            forceShouldAnimate: null
                        }
                    }
                    if ("COLLECTION_STARTING" === r.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && R(!1), (0, f.Z)({
                        phase: "COLLECTING"
                    }, e, {
                        phase: "COLLECTING"
                    }));
                    if ("PUBLISH_WHILE_DRAGGING" === r.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase || R(!1), rb({
                        state: e,
                        published: r.payload
                    });
                    if ("MOVE" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        e7(e) || R(!1);
                        var v = r.payload.client;
                        return _(v, e.current.client.selection) ? e : rl({
                            state: e,
                            clientSelection: v,
                            impact: rh(e) ? e.impact : null
                        })
                    }
                    if ("UPDATE_DROPPABLE_SCROLL" === r.type) {
                        if ("DROP_PENDING" === e.phase || "COLLECTING" === e.phase) return ry(e);
                        e7(e) || R(!1);
                        var b = r.payload,
                            h = b.id,
                            I = b.newScroll,
                            y = e.dimensions.droppables[h];
                        return y ? rI(e, z(y, I), !1) : e
                    }
                    if ("UPDATE_DROPPABLE_IS_ENABLED" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        e7(e) || R(!1);
                        var D = r.payload,
                            x = D.id,
                            E = D.isEnabled,
                            C = e.dimensions.droppables[x];
                        return C || R(!1), C.isEnabled !== E || R(!1), rI(e, (0, f.Z)({}, C, {
                            isEnabled: E
                        }), !0)
                    }
                    if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        e7(e) || R(!1);
                        var w = r.payload,
                            A = w.id,
                            S = w.isCombineEnabled,
                            B = e.dimensions.droppables[A];
                        return B || R(!1), B.isCombineEnabled !== S || R(!1), rI(e, (0, f.Z)({}, B, {
                            isCombineEnabled: S
                        }), !0)
                    }
                    if ("MOVE_BY_WINDOW_SCROLL" === r.type) {
                        if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
                        e7(e) || R(!1), e.isWindowScrollAllowed || R(!1);
                        var N = r.payload.newScroll;
                        if (_(e.viewport.scroll.current, N)) return ry(e);
                        var P = ek(e.viewport, N);
                        return rh(e) ? rd({
                            state: e,
                            viewport: P
                        }) : rl({
                            state: e,
                            viewport: P
                        })
                    }
                    if ("UPDATE_VIEWPORT_MAX_SCROLL" === r.type) {
                        if (!e7(e)) return e;
                        var O = r.payload.maxScroll;
                        if (_(O, e.viewport.scroll.max)) return e;
                        var T = (0, f.Z)({}, e.viewport, {
                            scroll: (0, f.Z)({}, e.viewport.scroll, {
                                max: O
                            })
                        });
                        return (0, f.Z)({
                            phase: "DRAGGING"
                        }, e, {
                            viewport: T
                        })
                    }
                    if ("MOVE_UP" === r.type || "MOVE_DOWN" === r.type || "MOVE_LEFT" === r.type || "MOVE_RIGHT" === r.type) {
                        if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
                        "DRAGGING" !== e.phase && R(!1);
                        var M = e5({
                            state: e,
                            type: r.type
                        });
                        return M ? rl({
                            state: e,
                            impact: M.impact,
                            clientSelection: M.clientSelection,
                            scrollJumpRequest: M.scrollJumpRequest
                        }) : e
                    }
                    if ("DROP_PENDING" === r.type) {
                        var F = r.payload.reason;
                        return "COLLECTING" !== e.phase && R(!1), (0, f.Z)({
                            phase: "DROP_PENDING"
                        }, e, {
                            phase: "DROP_PENDING",
                            isWaiting: !0,
                            reason: F
                        })
                    }
                    if ("DROP_ANIMATE" === r.type) {
                        var k = r.payload,
                            W = k.completed,
                            U = k.dropDuration,
                            Z = k.newHomeClientOffset;
                        return "DRAGGING" === e.phase || "DROP_PENDING" === e.phase || R(!1), {
                            phase: "DROP_ANIMATING",
                            completed: W,
                            dropDuration: U,
                            newHomeClientOffset: Z,
                            dimensions: e.dimensions
                        }
                    }
                    return "DROP_COMPLETE" === r.type ? {
                        phase: "IDLE",
                        completed: r.payload.completed,
                        shouldFlush: !1
                    } : e
                },
                rE = function(e) {
                    return {
                        type: "PUBLISH_WHILE_DRAGGING",
                        payload: e
                    }
                },
                rC = function() {
                    return {
                        type: "COLLECTION_STARTING",
                        payload: null
                    }
                },
                rw = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_SCROLL",
                        payload: e
                    }
                },
                rA = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_ENABLED",
                        payload: e
                    }
                },
                rR = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
                        payload: e
                    }
                },
                rS = function(e) {
                    return {
                        type: "MOVE",
                        payload: e
                    }
                },
                rB = function() {
                    return {
                        type: "MOVE_UP",
                        payload: null
                    }
                },
                rN = function() {
                    return {
                        type: "MOVE_DOWN",
                        payload: null
                    }
                },
                rP = function() {
                    return {
                        type: "MOVE_RIGHT",
                        payload: null
                    }
                },
                rO = function() {
                    return {
                        type: "MOVE_LEFT",
                        payload: null
                    }
                },
                rT = function() {
                    return {
                        type: "FLUSH",
                        payload: null
                    }
                },
                rL = function(e) {
                    return {
                        type: "DROP_COMPLETE",
                        payload: e
                    }
                },
                rG = function(e) {
                    return {
                        type: "DROP",
                        payload: e
                    }
                },
                rM = function() {
                    return {
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null
                    }
                },
                r_ = {
                    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
                    drop: "cubic-bezier(.2,1,.1,1)"
                },
                rF = {
                    opacity: {
                        drop: 0,
                        combining: .7
                    },
                    scale: {
                        drop: .75
                    }
                },
                rk = {
                    outOfTheWay: .2,
                    minDropTime: .33,
                    maxDropTime: .55
                },
                rW = rk.outOfTheWay + "s " + r_.outOfTheWay,
                rU = {
                    fluid: "opacity " + rW,
                    snap: "transform " + rW + ", opacity " + rW,
                    drop: function(e) {
                        var r = e + "s " + r_.drop;
                        return "transform " + r + ", opacity " + r
                    },
                    outOfTheWay: "transform " + rW,
                    placeholder: "height " + rW + ", width " + rW + ", margin " + rW
                },
                rZ = function(e) {
                    return _(e, L) ? null : "translate(" + e.x + "px, " + e.y + "px)"
                },
                rH = {
                    moveTo: rZ,
                    drop: function(e, r) {
                        var t = rZ(e);
                        return t ? r ? t + " scale(" + rF.scale.drop + ")" : t : null
                    }
                },
                rj = rk.minDropTime,
                rY = rk.maxDropTime,
                rV = rY - rj,
                rq = function(e) {
                    var r = e.current,
                        t = e.destination,
                        n = e.reason,
                        i = W(r, t);
                    if (i <= 0) return rj;
                    if (i >= 1500) return rY;
                    var a = rj + rV * (i / 1500);
                    return Number(("CANCEL" === n ? .6 * a : a).toFixed(2))
                },
                rz = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.dimensions,
                        i = e.viewport,
                        a = e.afterCritical,
                        o = n.draggables,
                        l = n.droppables,
                        c = e2(r),
                        u = c ? l[c] : null,
                        d = l[t.descriptor.droppableId],
                        s = ru({
                            impact: r,
                            draggable: t,
                            draggables: o,
                            afterCritical: a,
                            droppable: u || d,
                            viewport: i
                        });
                    return M(s, t.client.borderBox.center)
                },
                rJ = function(e) {
                    var r = e.draggables,
                        t = e.reason,
                        n = e.lastImpact,
                        i = e.home,
                        a = e.viewport,
                        o = e.onLiftImpact;
                    return n.at && "DROP" === t ? "REORDER" === n.at.type ? {
                        impact: n,
                        didDropInsideDroppable: !0
                    } : {
                        impact: (0, f.Z)({}, n, {
                            displaced: ed
                        }),
                        didDropInsideDroppable: !0
                    } : {
                        impact: rc({
                            draggables: r,
                            impact: o,
                            destination: i,
                            viewport: a,
                            forceShouldAnimate: !0
                        }),
                        didDropInsideDroppable: !1
                    }
                },
                rX = function(e) {
                    var r = e.getState,
                        t = e.dispatch;
                    return function(e) {
                        return function(n) {
                            if ("DROP" !== n.type) {
                                e(n);
                                return
                            }
                            var i = r(),
                                a = n.payload.reason;
                            if ("COLLECTING" === i.phase) {
                                t({
                                    type: "DROP_PENDING",
                                    payload: {
                                        reason: a
                                    }
                                });
                                return
                            }
                            if ("IDLE" !== i.phase) {
                                "DROP_PENDING" === i.phase && i.isWaiting && R(!1), "DRAGGING" === i.phase || "DROP_PENDING" === i.phase || R(!1);
                                var o = i.critical,
                                    l = i.dimensions,
                                    c = l.draggables[i.critical.draggable.id],
                                    u = rJ({
                                        reason: a,
                                        lastImpact: i.impact,
                                        afterCritical: i.afterCritical,
                                        onLiftImpact: i.onLiftImpact,
                                        home: i.dimensions.droppables[i.critical.droppable.id],
                                        viewport: i.viewport,
                                        draggables: i.dimensions.draggables
                                    }),
                                    d = u.impact,
                                    s = u.didDropInsideDroppable,
                                    p = s ? ei(d) : null,
                                    f = s ? ea(d) : null,
                                    g = {
                                        index: o.draggable.index,
                                        droppableId: o.droppable.id
                                    },
                                    m = {
                                        draggableId: c.descriptor.id,
                                        type: c.descriptor.type,
                                        source: g,
                                        reason: a,
                                        mode: i.movementMode,
                                        destination: p,
                                        combine: f
                                    },
                                    v = rz({
                                        impact: d,
                                        draggable: c,
                                        dimensions: l,
                                        viewport: i.viewport,
                                        afterCritical: i.afterCritical
                                    }),
                                    b = {
                                        critical: i.critical,
                                        afterCritical: i.afterCritical,
                                        result: m,
                                        impact: d
                                    };
                                if (!(!_(i.current.client.offset, v) || Boolean(m.combine))) {
                                    t(rL({
                                        completed: b
                                    }));
                                    return
                                }
                                var h = rq({
                                    current: i.current.client.offset,
                                    destination: v,
                                    reason: a
                                });
                                t({
                                    type: "DROP_ANIMATE",
                                    payload: {
                                        newHomeClientOffset: v,
                                        dropDuration: h,
                                        completed: b
                                    }
                                })
                            }
                        }
                    }
                },
                rK = function() {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                },
                r$ = function(e) {
                    var r = function(e) {
                        var r = e.onWindowScroll,
                            t = (0, I.Z)(function() {
                                r(rK())
                            }),
                            n = {
                                eventName: "scroll",
                                options: {
                                    passive: !0,
                                    capture: !1
                                },
                                fn: function(e) {
                                    (e.target === window || e.target === window.document) && t()
                                }
                            },
                            i = C;

                        function a() {
                            return i !== C
                        }
                        return {
                            start: function() {
                                a() && R(!1), i = w(window, [n])
                            },
                            stop: function() {
                                a() || R(!1), t.cancel(), i(), i = C
                            },
                            isActive: a
                        }
                    }({
                        onWindowScroll: function(r) {
                            e.dispatch({
                                type: "MOVE_BY_WINDOW_SCROLL",
                                payload: {
                                    newScroll: r
                                }
                            })
                        }
                    });
                    return function(e) {
                        return function(t) {
                            r.isActive() || "INITIAL_PUBLISH" !== t.type || r.start(), r.isActive() && ("DROP_COMPLETE" === t.type || "DROP_ANIMATE" === t.type || "FLUSH" === t.type) && r.stop(), e(t)
                        }
                    }
                },
                rQ = function(e) {
                    var r = !1,
                        t = !1,
                        n = setTimeout(function() {
                            t = !0
                        }),
                        i = function(i) {
                            r || t || (r = !0, e(i), clearTimeout(n))
                        };
                    return i.wasCalled = function() {
                        return r
                    }, i
                },
                r0 = function() {
                    var e = [],
                        r = function(r) {
                            var t = X(e, function(e) {
                                return e.timerId === r
                            }); - 1 !== t || R(!1), e.splice(t, 1)[0].callback()
                        };
                    return {
                        add: function(t) {
                            var n = setTimeout(function() {
                                return r(n)
                            });
                            e.push({
                                timerId: n,
                                callback: t
                            })
                        },
                        flush: function() {
                            if (e.length) {
                                var r = [].concat(e);
                                e.length = 0, r.forEach(function(e) {
                                    clearTimeout(e.timerId), e.callback()
                                })
                            }
                        }
                    }
                },
                r1 = function(e, r) {
                    if (e === r) return !0;
                    var t = e.draggable.id === r.draggable.id && e.draggable.droppableId === r.draggable.droppableId && e.draggable.type === r.draggable.type && e.draggable.index === r.draggable.index,
                        n = e.droppable.id === r.droppable.id && e.droppable.type === r.droppable.type;
                    return t && n
                },
                r4 = function(e, r) {
                    rp(), r(), rf()
                },
                r2 = function(e, r) {
                    return {
                        draggableId: e.draggable.id,
                        type: e.droppable.type,
                        source: {
                            droppableId: e.droppable.id,
                            index: e.draggable.index
                        },
                        mode: r
                    }
                },
                r3 = function(e, r, t, n) {
                    if (!e) {
                        t(n(r));
                        return
                    }
                    var i = rQ(t);
                    e(r, {
                        announce: i
                    }), i.wasCalled() || t(n(r))
                },
                r5 = function(e, r) {
                    var t = r0(),
                        n = null,
                        i = function(t) {
                            n || R(!1), n = null, r4("onDragEnd", function() {
                                return r3(e().onDragEnd, t, r, T.onDragEnd)
                            })
                        };
                    return {
                        beforeCapture: function(r, t) {
                            n && R(!1), r4("onBeforeCapture", function() {
                                var n = e().onBeforeCapture;
                                n && n({
                                    draggableId: r,
                                    mode: t
                                })
                            })
                        },
                        beforeStart: function(r, t) {
                            n && R(!1), r4("onBeforeDragStart", function() {
                                var n = e().onBeforeDragStart;
                                n && n(r2(r, t))
                            })
                        },
                        start: function(i, a) {
                            n && R(!1);
                            var o = r2(i, a);
                            n = {
                                mode: a,
                                lastCritical: i,
                                lastLocation: o.source,
                                lastCombine: null
                            }, t.add(function() {
                                r4("onDragStart", function() {
                                    return r3(e().onDragStart, o, r, T.onDragStart)
                                })
                            })
                        },
                        update: function(i, a) {
                            var o, l, c = ei(a),
                                u = ea(a);
                            n || R(!1);
                            var d = !r1(i, n.lastCritical);
                            d && (n.lastCritical = i);
                            var s = (null != (o = n.lastLocation) || null != c) && (null == o || null == c || o.droppableId !== c.droppableId || o.index !== c.index);
                            s && (n.lastLocation = c);
                            var p = (null != (l = n.lastCombine) || null != u) && (null == l || null == u || l.draggableId !== u.draggableId || l.droppableId !== u.droppableId);
                            if (p && (n.lastCombine = u), d || s || p) {
                                var g = (0, f.Z)({}, r2(i, n.mode), {
                                    combine: u,
                                    destination: c
                                });
                                t.add(function() {
                                    r4("onDragUpdate", function() {
                                        return r3(e().onDragUpdate, g, r, T.onDragUpdate)
                                    })
                                })
                            }
                        },
                        flush: function() {
                            n || R(!1), t.flush()
                        },
                        drop: i,
                        abort: function() {
                            n && i((0, f.Z)({}, r2(n.lastCritical, n.mode), {
                                combine: null,
                                destination: null,
                                reason: "CANCEL"
                            }))
                        }
                    }
                },
                r7 = function(e, r) {
                    var t = r5(e, r);
                    return function(e) {
                        return function(r) {
                            return function(n) {
                                if ("BEFORE_INITIAL_CAPTURE" === n.type) {
                                    t.beforeCapture(n.payload.draggableId, n.payload.movementMode);
                                    return
                                }
                                if ("INITIAL_PUBLISH" === n.type) {
                                    var i = n.payload.critical;
                                    t.beforeStart(i, n.payload.movementMode), r(n), t.start(i, n.payload.movementMode);
                                    return
                                }
                                if ("DROP_COMPLETE" === n.type) {
                                    var a = n.payload.completed.result;
                                    t.flush(), r(n), t.drop(a);
                                    return
                                }
                                if (r(n), "FLUSH" === n.type) {
                                    t.abort();
                                    return
                                }
                                var o = e.getState();
                                "DRAGGING" === o.phase && t.update(o.critical, o.impact)
                            }
                        }
                    }
                },
                r8 = function(e) {
                    return function(r) {
                        return function(t) {
                            if ("DROP_ANIMATION_FINISHED" !== t.type) {
                                r(t);
                                return
                            }
                            var n = e.getState();
                            "DROP_ANIMATING" !== n.phase && R(!1), e.dispatch(rL({
                                completed: n.completed
                            }))
                        }
                    }
                },
                r6 = function(e) {
                    var r = null,
                        t = null;
                    return function(n) {
                        return function(i) {
                            if (("FLUSH" === i.type || "DROP_COMPLETE" === i.type || "DROP_ANIMATION_FINISHED" === i.type) && (t && (cancelAnimationFrame(t), t = null), r && (r(), r = null)), n(i), "DROP_ANIMATE" === i.type) {
                                var a = {
                                    eventName: "scroll",
                                    options: {
                                        capture: !0,
                                        passive: !1,
                                        once: !0
                                    },
                                    fn: function() {
                                        "DROP_ANIMATING" === e.getState().phase && e.dispatch(rM())
                                    }
                                };
                                t = requestAnimationFrame(function() {
                                    t = null, r = w(window, [a])
                                })
                            }
                        }
                    }
                },
                r9 = function(e) {
                    var r = !1;
                    return function() {
                        return function(t) {
                            return function(n) {
                                if ("INITIAL_PUBLISH" === n.type) {
                                    r = !0, e.tryRecordFocus(n.payload.critical.draggable.id), t(n), e.tryRestoreFocusRecorded();
                                    return
                                }
                                if (t(n), r) {
                                    if ("FLUSH" === n.type) {
                                        r = !1, e.tryRestoreFocusRecorded();
                                        return
                                    }
                                    if ("DROP_COMPLETE" === n.type) {
                                        r = !1;
                                        var i = n.payload.completed.result;
                                        i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId), e.tryRestoreFocusRecorded()
                                    }
                                }
                            }
                        }
                    }
                },
                te = function(e) {
                    return function(r) {
                        return function(t) {
                            if (r(t), "PUBLISH_WHILE_DRAGGING" === t.type) {
                                var n = e.getState();
                                "DROP_PENDING" !== n.phase || n.isWaiting || e.dispatch(rG({
                                    reason: n.reason
                                }))
                            }
                        }
                    }
                },
                tr = g.qC,
                tt = function(e) {
                    var r = e.dimensionMarshal,
                        t = e.focusMarshal,
                        n = e.styleMarshal,
                        i = e.getResponders,
                        a = e.announce,
                        o = e.autoScroller;
                    return (0, g.MT)(rx, tr((0, g.md)(function() {
                        return function(e) {
                            return function(r) {
                                "INITIAL_PUBLISH" === r.type && n.dragging(), "DROP_ANIMATE" === r.type && n.dropping(r.payload.completed.result.reason), ("FLUSH" === r.type || "DROP_COMPLETE" === r.type) && n.resting(), e(r)
                            }
                        }
                    }, function() {
                        return function(e) {
                            return function(t) {
                                ("DROP_COMPLETE" === t.type || "FLUSH" === t.type || "DROP_ANIMATE" === t.type) && r.stopPublishing(), e(t)
                            }
                        }
                    }, function(e) {
                        var t = e.getState,
                            n = e.dispatch;
                        return function(e) {
                            return function(i) {
                                if ("LIFT" !== i.type) {
                                    e(i);
                                    return
                                }
                                var a = i.payload,
                                    o = a.id,
                                    l = a.clientSelection,
                                    c = a.movementMode,
                                    u = t();
                                "DROP_ANIMATING" === u.phase && n(rL({
                                    completed: u.completed
                                })), "IDLE" !== t().phase && R(!1), n(rT()), n({
                                    type: "BEFORE_INITIAL_CAPTURE",
                                    payload: {
                                        draggableId: o,
                                        movementMode: c
                                    }
                                });
                                var d = r.startPublishing({
                                    draggableId: o,
                                    scrollOptions: {
                                        shouldPublishImmediately: "SNAP" === c
                                    }
                                });
                                n({
                                    type: "INITIAL_PUBLISH",
                                    payload: {
                                        critical: d.critical,
                                        dimensions: d.dimensions,
                                        clientSelection: l,
                                        movementMode: c,
                                        viewport: d.viewport
                                    }
                                })
                            }
                        }
                    }, rX, r8, r6, te, function(e) {
                        return function(r) {
                            return function(t) {
                                if ("DROP_COMPLETE" === t.type || "DROP_ANIMATE" === t.type || "FLUSH" === t.type) {
                                    o.stop(), r(t);
                                    return
                                }
                                if ("INITIAL_PUBLISH" === t.type) {
                                    r(t);
                                    var n = e.getState();
                                    "DRAGGING" !== n.phase && R(!1), o.start(n);
                                    return
                                }
                                r(t), o.scroll(e.getState())
                            }
                        }
                    }, r$, r9(t), r7(i, a))))
                },
                tn = function() {
                    return {
                        additions: {},
                        removals: {},
                        modified: {}
                    }
                },
                ti = function(e) {
                    var r = e.scrollHeight,
                        t = e.scrollWidth,
                        n = e.height,
                        i = M({
                            x: t,
                            y: r
                        }, {
                            x: e.width,
                            y: n
                        });
                    return {
                        x: Math.max(0, i.x),
                        y: Math.max(0, i.y)
                    }
                },
                ta = function() {
                    var e = document.documentElement;
                    return e || R(!1), e
                },
                to = function() {
                    var e = ta();
                    return ti({
                        scrollHeight: e.scrollHeight,
                        scrollWidth: e.scrollWidth,
                        width: e.clientWidth,
                        height: e.clientHeight
                    })
                },
                tl = function() {
                    var e = rK(),
                        r = to(),
                        t = e.y,
                        n = e.x,
                        i = ta(),
                        a = i.clientWidth,
                        o = i.clientHeight;
                    return {
                        frame: (0, b.getRect)({
                            top: t,
                            left: n,
                            right: n + a,
                            bottom: t + o
                        }),
                        scroll: {
                            initial: e,
                            current: e,
                            max: r,
                            diff: {
                                value: L,
                                displacement: L
                            }
                        }
                    }
                },
                tc = function(e) {
                    var r = e.critical,
                        t = e.scrollOptions,
                        n = e.registry;
                    rp();
                    var i = tl(),
                        a = i.scroll.current,
                        o = r.droppable,
                        l = n.droppable.getAllByType(o.type).map(function(e) {
                            return e.callbacks.getDimensionAndWatchScroll(a, t)
                        }),
                        c = {
                            draggables: ee(n.draggable.getAllByType(r.draggable.type).map(function(e) {
                                return e.getDimension(a)
                            })),
                            droppables: Q(l)
                        };
                    return rf(), {
                        dimensions: c,
                        critical: r,
                        viewport: i
                    }
                };

            function tu(e, r, t) {
                return t.descriptor.id !== r.id && t.descriptor.type === r.type && "virtual" === e.droppable.getById(t.descriptor.droppableId).descriptor.mode
            }
            var td = function(e, r) {
                    var t, n, i, a, o, l, c = null,
                        u = (n = (t = {
                            callbacks: {
                                publish: r.publishWhileDragging,
                                collectionStarting: r.collectionStarting
                            },
                            registry: e
                        }).registry, i = t.callbacks, a = tn(), o = null, l = function() {
                            o || (i.collectionStarting(), o = requestAnimationFrame(function() {
                                o = null, rp();
                                var e = a,
                                    r = e.additions,
                                    t = e.removals,
                                    l = e.modified,
                                    c = Object.keys(r).map(function(e) {
                                        return n.draggable.getById(e).getDimension(L)
                                    }).sort(function(e, r) {
                                        return e.descriptor.index - r.descriptor.index
                                    }),
                                    u = Object.keys(l).map(function(e) {
                                        var r = n.droppable.getById(e).callbacks.getScrollWhileDragging();
                                        return {
                                            droppableId: e,
                                            scroll: r
                                        }
                                    }),
                                    d = {
                                        additions: c,
                                        removals: Object.keys(t),
                                        modified: u
                                    };
                                a = tn(), rf(), i.publish(d)
                            }))
                        }, {
                            add: function(e) {
                                var r = e.descriptor.id;
                                a.additions[r] = e, a.modified[e.descriptor.droppableId] = !0, a.removals[r] && delete a.removals[r], l()
                            },
                            remove: function(e) {
                                var r = e.descriptor;
                                a.removals[r.id] = !0, a.modified[r.droppableId] = !0, a.additions[r.id] && delete a.additions[r.id], l()
                            },
                            stop: function() {
                                o && (cancelAnimationFrame(o), o = null, a = tn())
                            }
                        }),
                        d = function(r) {
                            c || R(!1);
                            var t = c.critical.draggable;
                            "ADDITION" === r.type && tu(e, t, r.value) && u.add(r.value), "REMOVAL" === r.type && tu(e, t, r.value) && u.remove(r.value)
                        };
                    return {
                        updateDroppableIsEnabled: function(t, n) {
                            e.droppable.exists(t) || R(!1), c && r.updateDroppableIsEnabled({
                                id: t,
                                isEnabled: n
                            })
                        },
                        updateDroppableIsCombineEnabled: function(t, n) {
                            c && (e.droppable.exists(t) || R(!1), r.updateDroppableIsCombineEnabled({
                                id: t,
                                isCombineEnabled: n
                            }))
                        },
                        scrollDroppable: function(r, t) {
                            c && e.droppable.getById(r).callbacks.scroll(t)
                        },
                        updateDroppableScroll: function(t, n) {
                            c && (e.droppable.exists(t) || R(!1), r.updateDroppableScroll({
                                id: t,
                                newScroll: n
                            }))
                        },
                        startPublishing: function(r) {
                            c && R(!1);
                            var t = e.draggable.getById(r.draggableId),
                                n = e.droppable.getById(t.descriptor.droppableId),
                                i = {
                                    draggable: t.descriptor,
                                    droppable: n.descriptor
                                };
                            return c = {
                                critical: i,
                                unsubscribe: e.subscribe(d)
                            }, tc({
                                critical: i,
                                registry: e,
                                scrollOptions: r.scrollOptions
                            })
                        },
                        stopPublishing: function() {
                            if (c) {
                                u.stop();
                                var r = c.critical.droppable;
                                e.droppable.getAllByType(r.type).forEach(function(e) {
                                    return e.callbacks.dragStopped()
                                }), c.unsubscribe(), c = null
                            }
                        }
                    }
                },
                ts = function(e, r) {
                    return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && e.completed.result.draggableId !== r && "DROP" === e.completed.result.reason
                },
                tp = function(e) {
                    window.scrollBy(e.x, e.y)
                },
                tf = (0, h.Z)(function(e) {
                    return er(e).filter(function(e) {
                        return !!e.isEnabled && !!e.frame
                    })
                }),
                tg = function(e) {
                    var r = e.center,
                        t = e.destination,
                        n = e.droppables;
                    if (t) {
                        var i = n[t];
                        return i.frame ? i : null
                    }
                    return K(tf(n), function(e) {
                        return e.frame || R(!1), e8(e.frame.pageMarginBox)(r)
                    })
                },
                tm = {
                    startFromPercentage: .25,
                    maxScrollAtPercentage: .05,
                    maxPixelScroll: 28,
                    ease: function(e) {
                        return Math.pow(e, 2)
                    },
                    durationDampening: {
                        stopDampeningAt: 1200,
                        accelerateAt: 360
                    }
                },
                tv = function(e) {
                    var r = e.startOfRange,
                        t = e.endOfRange,
                        n = e.current,
                        i = t - r;
                    return 0 === i ? 0 : (n - r) / i
                },
                tb = function(e, r) {
                    if (e > r.startScrollingFrom) return 0;
                    if (e <= r.maxScrollValueAt) return tm.maxPixelScroll;
                    if (e === r.startScrollingFrom) return 1;
                    var t = tv({
                        startOfRange: r.maxScrollValueAt,
                        endOfRange: r.startScrollingFrom,
                        current: e
                    });
                    return Math.ceil(tm.maxPixelScroll * tm.ease(1 - t))
                },
                th = tm.durationDampening.accelerateAt,
                tI = tm.durationDampening.stopDampeningAt,
                ty = function(e, r) {
                    var t = Date.now() - r;
                    if (t >= tI) return e;
                    if (t < th) return 1;
                    var n = tv({
                        startOfRange: th,
                        endOfRange: tI,
                        current: t
                    });
                    return Math.ceil(e * tm.ease(n))
                },
                tD = function(e) {
                    var r = e.distanceToEdge,
                        t = e.thresholds,
                        n = e.dragStartTime,
                        i = e.shouldUseTimeDampening,
                        a = tb(r, t);
                    return 0 === a ? 0 : i ? Math.max(ty(a, n), 1) : a
                },
                tx = function(e) {
                    var r = e.container,
                        t = e.distanceToEdges,
                        n = e.dragStartTime,
                        i = e.axis,
                        a = e.shouldUseTimeDampening,
                        o = {
                            startScrollingFrom: r[i.size] * tm.startFromPercentage,
                            maxScrollValueAt: r[i.size] * tm.maxScrollAtPercentage
                        };
                    return t[i.end] < t[i.start] ? tD({
                        distanceToEdge: t[i.end],
                        thresholds: o,
                        dragStartTime: n,
                        shouldUseTimeDampening: a
                    }) : -1 * tD({
                        distanceToEdge: t[i.start],
                        thresholds: o,
                        dragStartTime: n,
                        shouldUseTimeDampening: a
                    })
                },
                tE = function(e) {
                    var r = e.container,
                        t = e.subject,
                        n = e.proposedScroll,
                        i = t.height > r.height,
                        a = t.width > r.width;
                    return a || i ? a && i ? null : {
                        x: a ? 0 : n.x,
                        y: i ? 0 : n.y
                    } : n
                },
                tC = Z(function(e) {
                    return 0 === e ? 0 : e
                }),
                tw = function(e) {
                    var r = e.dragStartTime,
                        t = e.container,
                        n = e.subject,
                        i = e.center,
                        a = e.shouldUseTimeDampening,
                        o = {
                            top: i.y - t.top,
                            right: t.right - i.x,
                            bottom: t.bottom - i.y,
                            left: i.x - t.left
                        },
                        l = tx({
                            container: t,
                            distanceToEdges: o,
                            dragStartTime: r,
                            axis: em,
                            shouldUseTimeDampening: a
                        }),
                        c = tC({
                            x: tx({
                                container: t,
                                distanceToEdges: o,
                                dragStartTime: r,
                                axis: ev,
                                shouldUseTimeDampening: a
                            }),
                            y: l
                        });
                    if (_(c, L)) return null;
                    var u = tE({
                        container: t,
                        subject: n,
                        proposedScroll: c
                    });
                    return u ? _(u, L) ? null : u : null
                },
                tA = Z(function(e) {
                    return 0 === e ? 0 : e > 0 ? 1 : -1
                }),
                tR = (n = function(e, r) {
                    return e < 0 ? e : e > r ? e - r : 0
                }, function(e) {
                    var r = e.current,
                        t = e.max,
                        i = G(r, e.change),
                        a = {
                            x: n(i.x, t.x),
                            y: n(i.y, t.y)
                        };
                    return _(a, L) ? null : a
                }),
                tS = function(e) {
                    var r = e.max,
                        t = e.current,
                        n = e.change,
                        i = {
                            x: Math.max(t.x, r.x),
                            y: Math.max(t.y, r.y)
                        },
                        a = tA(n),
                        o = tR({
                            max: i,
                            current: t,
                            change: a
                        });
                    return !o || 0 !== a.x && 0 === o.x || 0 !== a.y && 0 === o.y
                },
                tB = function(e, r) {
                    return tS({
                        current: e.scroll.current,
                        max: e.scroll.max,
                        change: r
                    })
                },
                tN = function(e, r) {
                    if (!tB(e, r)) return null;
                    var t = e.scroll.max;
                    return tR({
                        current: e.scroll.current,
                        max: t,
                        change: r
                    })
                },
                tP = function(e, r) {
                    var t = e.frame;
                    return !!t && tS({
                        current: t.scroll.current,
                        max: t.scroll.max,
                        change: r
                    })
                },
                tO = function(e, r) {
                    var t = e.frame;
                    return t && tP(e, r) ? tR({
                        current: t.scroll.current,
                        max: t.scroll.max,
                        change: r
                    }) : null
                },
                tT = function(e) {
                    var r = e.viewport,
                        t = e.subject,
                        n = e.center,
                        i = e.dragStartTime,
                        a = e.shouldUseTimeDampening,
                        o = tw({
                            dragStartTime: i,
                            container: r.frame,
                            subject: t,
                            center: n,
                            shouldUseTimeDampening: a
                        });
                    return o && tB(r, o) ? o : null
                },
                tL = function(e) {
                    var r = e.droppable,
                        t = e.subject,
                        n = e.center,
                        i = e.dragStartTime,
                        a = e.shouldUseTimeDampening,
                        o = r.frame;
                    if (!o) return null;
                    var l = tw({
                        dragStartTime: i,
                        container: o.pageMarginBox,
                        subject: t,
                        center: n,
                        shouldUseTimeDampening: a
                    });
                    return l && tP(r, l) ? l : null
                },
                tG = function(e) {
                    var r = e.state,
                        t = e.dragStartTime,
                        n = e.shouldUseTimeDampening,
                        i = e.scrollWindow,
                        a = e.scrollDroppable,
                        o = r.current.page.borderBoxCenter,
                        l = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
                    if (r.isWindowScrollAllowed) {
                        var c = tT({
                            dragStartTime: t,
                            viewport: r.viewport,
                            subject: l,
                            center: o,
                            shouldUseTimeDampening: n
                        });
                        if (c) {
                            i(c);
                            return
                        }
                    }
                    var u = tg({
                        center: o,
                        destination: e2(r.impact),
                        droppables: r.dimensions.droppables
                    });
                    if (u) {
                        var d = tL({
                            dragStartTime: t,
                            droppable: u,
                            subject: l,
                            center: o,
                            shouldUseTimeDampening: n
                        });
                        d && a(u.descriptor.id, d)
                    }
                },
                tM = function(e) {
                    var r = e.scrollWindow,
                        t = e.scrollDroppable,
                        n = (0, I.Z)(r),
                        i = (0, I.Z)(t),
                        a = null,
                        o = function(e) {
                            a || R(!1);
                            var r = a,
                                t = r.shouldUseTimeDampening;
                            tG({
                                state: e,
                                scrollWindow: n,
                                scrollDroppable: i,
                                dragStartTime: r.dragStartTime,
                                shouldUseTimeDampening: t
                            })
                        };
                    return {
                        start: function(e) {
                            rp(), a && R(!1);
                            var r = Date.now(),
                                t = !1,
                                n = function() {
                                    t = !0
                                };
                            tG({
                                state: e,
                                dragStartTime: 0,
                                shouldUseTimeDampening: !1,
                                scrollWindow: n,
                                scrollDroppable: n
                            }), a = {
                                dragStartTime: r,
                                shouldUseTimeDampening: t
                            }, rf(), t && o(e)
                        },
                        stop: function() {
                            a && (n.cancel(), i.cancel(), a = null)
                        },
                        scroll: o
                    }
                },
                t_ = function(e) {
                    var r = e.move,
                        t = e.scrollDroppable,
                        n = e.scrollWindow,
                        i = function(e, t) {
                            r({
                                client: G(e.current.client.selection, t)
                            })
                        },
                        a = function(e, r) {
                            if (!tP(e, r)) return r;
                            var n = tO(e, r);
                            if (!n) return t(e.descriptor.id, r), null;
                            var i = M(r, n);
                            return t(e.descriptor.id, i), M(r, i)
                        },
                        o = function(e, r, t) {
                            if (!e || !tB(r, t)) return t;
                            var i = tN(r, t);
                            if (!i) return n(t), null;
                            var a = M(t, i);
                            return n(a), M(t, a)
                        };
                    return function(e) {
                        var r = e.scrollJumpRequest;
                        if (r) {
                            var t = e2(e.impact);
                            t || R(!1);
                            var n = a(e.dimensions.droppables[t], r);
                            if (n) {
                                var l = e.viewport,
                                    c = o(e.isWindowScrollAllowed, l, n);
                                c && i(e, c)
                            }
                        }
                    }
                },
                tF = function(e) {
                    var r = e.scrollDroppable,
                        t = e.scrollWindow,
                        n = e.move,
                        i = tM({
                            scrollWindow: t,
                            scrollDroppable: r
                        }),
                        a = t_({
                            move: n,
                            scrollWindow: t,
                            scrollDroppable: r
                        });
                    return {
                        scroll: function(e) {
                            if ("DRAGGING" === e.phase) {
                                if ("FLUID" === e.movementMode) {
                                    i.scroll(e);
                                    return
                                }
                                e.scrollJumpRequest && a(e)
                            }
                        },
                        start: i.start,
                        stop: i.stop
                    }
                },
                tk = "data-rbd",
                tW = {
                    base: i = tk + "-drag-handle",
                    draggableId: i + "-draggable-id",
                    contextId: i + "-context-id"
                },
                tU = {
                    base: a = tk + "-draggable",
                    contextId: a + "-context-id",
                    id: a + "-id"
                },
                tZ = {
                    base: o = tk + "-droppable",
                    contextId: o + "-context-id",
                    id: o + "-id"
                },
                tH = {
                    contextId: tk + "-scroll-container-context-id"
                },
                tj = function(e, r) {
                    return e.map(function(e) {
                        var t = e.styles[r];
                        return t ? e.selector + " { " + t + " }" : ""
                    }).join(" ")
                },
                tY = function(e) {
                    var r, t, n = function(r) {
                            return "[" + r + '="' + e + '"]'
                        },
                        i = (r = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ", {
                            selector: n(tW.contextId),
                            styles: {
                                always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                                resting: r,
                                dragging: "pointer-events: none;",
                                dropAnimating: r
                            }
                        }),
                        a = [(t = "\n      transition: " + rU.outOfTheWay + ";\n    ", {
                            selector: n(tU.contextId),
                            styles: {
                                dragging: t,
                                dropAnimating: t,
                                userCancel: t
                            }
                        }), i, {
                            selector: n(tZ.contextId),
                            styles: {
                                always: "overflow-anchor: none;"
                            }
                        }, {
                            selector: "body",
                            styles: {
                                dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
                            }
                        }];
                    return {
                        always: tj(a, "always"),
                        resting: tj(a, "resting"),
                        dragging: tj(a, "dragging"),
                        dropAnimating: tj(a, "dropAnimating"),
                        userCancel: tj(a, "userCancel")
                    }
                },
                tV = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? s.useLayoutEffect : s.useEffect,
                tq = function() {
                    var e = document.querySelector("head");
                    return e || R(!1), e
                },
                tz = function(e) {
                    var r = document.createElement("style");
                    return e && r.setAttribute("nonce", e), r.type = "text/css", r
                },
                tJ = function(e) {
                    return e && e.ownerDocument ? e.ownerDocument.defaultView : window
                };

            function tX(e) {
                return e instanceof tJ(e).HTMLElement
            }

            function tK(e, r) {
                var t = "[" + tW.contextId + '="' + e + '"]',
                    n = $(document.querySelectorAll(t));
                if (!n.length) return null;
                var i = K(n, function(e) {
                    return e.getAttribute(tW.draggableId) === r
                });
                return i && tX(i) ? i : null
            }

            function t$() {
                var e = {
                        draggables: {},
                        droppables: {}
                    },
                    r = [];

                function t(e) {
                    r.length && r.forEach(function(r) {
                        return r(e)
                    })
                }

                function n(r) {
                    return e.draggables[r] || null
                }

                function i(r) {
                    return e.droppables[r] || null
                }
                return {
                    draggable: {
                        register: function(r) {
                            e.draggables[r.descriptor.id] = r, t({
                                type: "ADDITION",
                                value: r
                            })
                        },
                        update: function(r, t) {
                            var n = e.draggables[t.descriptor.id];
                            n && n.uniqueId === r.uniqueId && (delete e.draggables[t.descriptor.id], e.draggables[r.descriptor.id] = r)
                        },
                        unregister: function(r) {
                            var i = r.descriptor.id,
                                a = n(i);
                            a && r.uniqueId === a.uniqueId && (delete e.draggables[i], t({
                                type: "REMOVAL",
                                value: r
                            }))
                        },
                        getById: function(e) {
                            var r = n(e);
                            return r || R(!1), r
                        },
                        findById: n,
                        exists: function(e) {
                            return Boolean(n(e))
                        },
                        getAllByType: function(r) {
                            return J(e.draggables).filter(function(e) {
                                return e.descriptor.type === r
                            })
                        }
                    },
                    droppable: {
                        register: function(r) {
                            e.droppables[r.descriptor.id] = r
                        },
                        unregister: function(r) {
                            var t = i(r.descriptor.id);
                            t && r.uniqueId === t.uniqueId && delete e.droppables[r.descriptor.id]
                        },
                        getById: function(e) {
                            var r = i(e);
                            return r || R(!1), r
                        },
                        findById: i,
                        exists: function(e) {
                            return Boolean(i(e))
                        },
                        getAllByType: function(r) {
                            return J(e.droppables).filter(function(e) {
                                return e.descriptor.type === r
                            })
                        }
                    },
                    subscribe: function(e) {
                        return r.push(e),
                            function() {
                                var t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
                            }
                    },
                    clean: function() {
                        e.draggables = {}, e.droppables = {}, r.length = 0
                    }
                }
            }
            var tQ = s.createContext(null),
                t0 = function() {
                    var e = document.body;
                    return e || R(!1), e
                },
                t1 = {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    margin: "-1px",
                    border: "0",
                    padding: "0",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    "clip-path": "inset(100%)"
                },
                t4 = 0,
                t2 = {
                    separator: "::"
                };

            function t3(e, r) {
                return void 0 === r && (r = t2), (0, v.Ye)(function() {
                    return "" + e + r.separator + t4++
                }, [r.separator, e])
            }
            var t5 = s.createContext(null),
                t7 = {
                    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
                    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
                },
                t8 = /(\d+)\.(\d+)\.(\d+)/,
                t6 = function(e) {
                    var r = t8.exec(e);
                    return null != r || R(!1), {
                        major: Number(r[1]),
                        minor: Number(r[2]),
                        patch: Number(r[3]),
                        raw: e
                    }
                },
                t9 = function(e, r) {
                    var t = t6(e),
                        n = t6(r);
                    if (n.major > t.major || !(n.major < t.major) && (n.minor > t.minor || !(n.minor < t.minor) && n.patch >= t.patch)) return
                },
                ne = function(e) {
                    var r = e.doctype;
                    r && (r.name.toLowerCase(), r.publicId)
                };

            function nr(e, r) {}

            function nt(e) {
                var r = (0, s.useRef)(e);
                return (0, s.useEffect)(function() {
                    r.current = e
                }), r
            }
            var nn = ((u = {})[13] = !0, u[9] = !0, u),
                ni = function(e) {
                    nn[e.keyCode] && e.preventDefault()
                },
                na = (l = "visibilitychange", "undefined" == typeof document ? l : K([l, "ms" + l, "webkit" + l, "moz" + l, "o" + l], function(e) {
                    return "on" + e in document
                }) || l),
                no = {
                    type: "IDLE"
                };

            function nl(e) {
                var r = (0, s.useRef)(no),
                    t = (0, s.useRef)(C),
                    n = (0, v.Ye)(function() {
                        return {
                            eventName: "mousedown",
                            fn: function(r) {
                                if (!r.defaultPrevented && 0 === r.button && !r.ctrlKey && !r.metaKey && !r.shiftKey && !r.altKey) {
                                    var n = e.findClosestDraggableId(r);
                                    if (n) {
                                        var i = e.tryGetLock(n, o, {
                                            sourceEvent: r
                                        });
                                        if (i) {
                                            r.preventDefault();
                                            var a = {
                                                x: r.clientX,
                                                y: r.clientY
                                            };
                                            t.current(), u(i, a)
                                        }
                                    }
                                }
                            }
                        }
                    }, [e]),
                    i = (0, v.Ye)(function() {
                        return {
                            eventName: "webkitmouseforcewillbegin",
                            fn: function(r) {
                                if (!r.defaultPrevented) {
                                    var t = e.findClosestDraggableId(r);
                                    if (t) {
                                        var n = e.findOptionsForDraggable(t);
                                        n && !n.shouldRespectForcePress && e.canGetLock(t) && r.preventDefault()
                                    }
                                }
                            }
                        }
                    }, [e]),
                    a = (0, v.I4)(function() {
                        t.current = w(window, [i, n], {
                            passive: !1,
                            capture: !0
                        })
                    }, [i, n]),
                    o = (0, v.I4)(function() {
                        "IDLE" !== r.current.type && (r.current = no, t.current(), a())
                    }, [a]),
                    l = (0, v.I4)(function() {
                        var e = r.current;
                        o(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }, [o]),
                    c = (0, v.I4)(function() {
                        var e, n, i, a, c, u = (n = (e = {
                            cancel: l,
                            completed: o,
                            getPhase: function() {
                                return r.current
                            },
                            setPhase: function(e) {
                                r.current = e
                            }
                        }).cancel, i = e.completed, a = e.getPhase, c = e.setPhase, [{
                            eventName: "mousemove",
                            fn: function(e) {
                                var r, t = e.button,
                                    n = e.clientX,
                                    i = e.clientY;
                                if (0 === t) {
                                    var o = {
                                            x: n,
                                            y: i
                                        },
                                        l = a();
                                    if ("DRAGGING" === l.type) {
                                        e.preventDefault(), l.actions.move(o);
                                        return
                                    }
                                    "PENDING" !== l.type && R(!1), r = l.point, (Math.abs(o.x - r.x) >= 5 || Math.abs(o.y - r.y) >= 5) && (e.preventDefault(), c({
                                        type: "DRAGGING",
                                        actions: l.actions.fluidLift(o)
                                    }))
                                }
                            }
                        }, {
                            eventName: "mouseup",
                            fn: function(e) {
                                var r = a();
                                if ("DRAGGING" !== r.type) {
                                    n();
                                    return
                                }
                                e.preventDefault(), r.actions.drop({
                                    shouldBlockNextClick: !0
                                }), i()
                            }
                        }, {
                            eventName: "mousedown",
                            fn: function(e) {
                                "DRAGGING" === a().type && e.preventDefault(), n()
                            }
                        }, {
                            eventName: "keydown",
                            fn: function(e) {
                                if ("PENDING" === a().type) {
                                    n();
                                    return
                                }
                                if (27 === e.keyCode) {
                                    e.preventDefault(), n();
                                    return
                                }
                                ni(e)
                            }
                        }, {
                            eventName: "resize",
                            fn: n
                        }, {
                            eventName: "scroll",
                            options: {
                                passive: !0,
                                capture: !1
                            },
                            fn: function() {
                                "PENDING" === a().type && n()
                            }
                        }, {
                            eventName: "webkitmouseforcedown",
                            fn: function(e) {
                                var r = a();
                                if ("IDLE" !== r.type || R(!1), r.actions.shouldRespectForcePress()) {
                                    n();
                                    return
                                }
                                e.preventDefault()
                            }
                        }, {
                            eventName: na,
                            fn: n
                        }]);
                        t.current = w(window, u, {
                            capture: !0,
                            passive: !1
                        })
                    }, [l, o]),
                    u = (0, v.I4)(function(e, t) {
                        "IDLE" !== r.current.type && R(!1), r.current = {
                            type: "PENDING",
                            point: t,
                            actions: e
                        }, c()
                    }, [c]);
                tV(function() {
                    return a(),
                        function() {
                            t.current()
                        }
                }, [a])
            }

            function nc() {}
            var nu = ((d = {})[34] = !0, d[33] = !0, d[36] = !0, d[35] = !0, d);

            function nd(e) {
                var r = (0, s.useRef)(nc),
                    t = (0, v.Ye)(function() {
                        return {
                            eventName: "keydown",
                            fn: function(t) {
                                if (!t.defaultPrevented && 32 === t.keyCode) {
                                    var i = e.findClosestDraggableId(t);
                                    if (i) {
                                        var a = e.tryGetLock(i, c, {
                                            sourceEvent: t
                                        });
                                        if (a) {
                                            t.preventDefault();
                                            var o = !0,
                                                l = a.snapLift();
                                            r.current(), r.current = w(window, function(e, r) {
                                                function t() {
                                                    r(), e.cancel()
                                                }
                                                return [{
                                                    eventName: "keydown",
                                                    fn: function(n) {
                                                        if (27 === n.keyCode) {
                                                            n.preventDefault(), t();
                                                            return
                                                        }
                                                        if (32 === n.keyCode) {
                                                            n.preventDefault(), r(), e.drop();
                                                            return
                                                        }
                                                        if (40 === n.keyCode) {
                                                            n.preventDefault(), e.moveDown();
                                                            return
                                                        }
                                                        if (38 === n.keyCode) {
                                                            n.preventDefault(), e.moveUp();
                                                            return
                                                        }
                                                        if (39 === n.keyCode) {
                                                            n.preventDefault(), e.moveRight();
                                                            return
                                                        }
                                                        if (37 === n.keyCode) {
                                                            n.preventDefault(), e.moveLeft();
                                                            return
                                                        }
                                                        if (nu[n.keyCode]) {
                                                            n.preventDefault();
                                                            return
                                                        }
                                                        ni(n)
                                                    }
                                                }, {
                                                    eventName: "mousedown",
                                                    fn: t
                                                }, {
                                                    eventName: "mouseup",
                                                    fn: t
                                                }, {
                                                    eventName: "click",
                                                    fn: t
                                                }, {
                                                    eventName: "touchstart",
                                                    fn: t
                                                }, {
                                                    eventName: "resize",
                                                    fn: t
                                                }, {
                                                    eventName: "wheel",
                                                    fn: t,
                                                    options: {
                                                        passive: !0
                                                    }
                                                }, {
                                                    eventName: na,
                                                    fn: t
                                                }]
                                            }(l, c), {
                                                capture: !0,
                                                passive: !1
                                            })
                                        }
                                    }
                                }

                                function c() {
                                    o || R(!1), o = !1, r.current(), n()
                                }
                            }
                        }
                    }, [e]),
                    n = (0, v.I4)(function() {
                        r.current = w(window, [t], {
                            passive: !1,
                            capture: !0
                        })
                    }, [t]);
                tV(function() {
                    return n(),
                        function() {
                            r.current()
                        }
                }, [n])
            }
            var ns = {
                type: "IDLE"
            };

            function np(e) {
                var r = (0, s.useRef)(ns),
                    t = (0, s.useRef)(C),
                    n = (0, v.I4)(function() {
                        return r.current
                    }, []),
                    i = (0, v.I4)(function(e) {
                        r.current = e
                    }, []),
                    a = (0, v.Ye)(function() {
                        return {
                            eventName: "touchstart",
                            fn: function(r) {
                                if (!r.defaultPrevented) {
                                    var n = e.findClosestDraggableId(r);
                                    if (n) {
                                        var i = e.tryGetLock(n, l, {
                                            sourceEvent: r
                                        });
                                        if (i) {
                                            var a = r.touches[0],
                                                o = a.clientX,
                                                c = a.clientY;
                                            t.current(), p(i, {
                                                x: o,
                                                y: c
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }, [e]),
                    o = (0, v.I4)(function() {
                        t.current = w(window, [a], {
                            capture: !0,
                            passive: !1
                        })
                    }, [a]),
                    l = (0, v.I4)(function() {
                        var e = r.current;
                        "IDLE" !== e.type && ("PENDING" === e.type && clearTimeout(e.longPressTimerId), i(ns), t.current(), o())
                    }, [o, i]),
                    c = (0, v.I4)(function() {
                        var e = r.current;
                        l(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }, [l]),
                    u = (0, v.I4)(function() {
                        var e, r, i, a, o, u = {
                                capture: !0,
                                passive: !1
                            },
                            d = {
                                cancel: c,
                                completed: l,
                                getPhase: n
                            },
                            s = w(window, (e = d.cancel, r = d.completed, i = d.getPhase, [{
                                eventName: "touchmove",
                                options: {
                                    capture: !1
                                },
                                fn: function(r) {
                                    var t = i();
                                    if ("DRAGGING" !== t.type) {
                                        e();
                                        return
                                    }
                                    t.hasMoved = !0;
                                    var n = r.touches[0],
                                        a = n.clientX,
                                        o = n.clientY;
                                    r.preventDefault(), t.actions.move({
                                        x: a,
                                        y: o
                                    })
                                }
                            }, {
                                eventName: "touchend",
                                fn: function(t) {
                                    var n = i();
                                    if ("DRAGGING" !== n.type) {
                                        e();
                                        return
                                    }
                                    t.preventDefault(), n.actions.drop({
                                        shouldBlockNextClick: !0
                                    }), r()
                                }
                            }, {
                                eventName: "touchcancel",
                                fn: function(r) {
                                    if ("DRAGGING" !== i().type) {
                                        e();
                                        return
                                    }
                                    r.preventDefault(), e()
                                }
                            }, {
                                eventName: "touchforcechange",
                                fn: function(r) {
                                    var t = i();
                                    "IDLE" !== t.type || R(!1);
                                    var n = r.touches[0];
                                    if (n && n.force >= .15) {
                                        var a = t.actions.shouldRespectForcePress();
                                        if ("PENDING" === t.type) {
                                            a && e();
                                            return
                                        }
                                        if (a) {
                                            if (t.hasMoved) {
                                                r.preventDefault();
                                                return
                                            }
                                            e();
                                            return
                                        }
                                        r.preventDefault()
                                    }
                                }
                            }, {
                                eventName: na,
                                fn: e
                            }]), u),
                            p = w(window, (a = d.cancel, o = d.getPhase, [{
                                eventName: "orientationchange",
                                fn: a
                            }, {
                                eventName: "resize",
                                fn: a
                            }, {
                                eventName: "contextmenu",
                                fn: function(e) {
                                    e.preventDefault()
                                }
                            }, {
                                eventName: "keydown",
                                fn: function(e) {
                                    if ("DRAGGING" !== o().type) {
                                        a();
                                        return
                                    }
                                    27 === e.keyCode && e.preventDefault(), a()
                                }
                            }, {
                                eventName: na,
                                fn: a
                            }]), u);
                        t.current = function() {
                            s(), p()
                        }
                    }, [c, n, l]),
                    d = (0, v.I4)(function() {
                        var e = n();
                        "PENDING" !== e.type && R(!1), i({
                            type: "DRAGGING",
                            actions: e.actions.fluidLift(e.point),
                            hasMoved: !1
                        })
                    }, [n, i]),
                    p = (0, v.I4)(function(e, r) {
                        "IDLE" !== n().type && R(!1);
                        var t = setTimeout(d, 120);
                        i({
                            type: "PENDING",
                            point: r,
                            actions: e,
                            longPressTimerId: t
                        }), u()
                    }, [u, n, i, d]);
                tV(function() {
                    return o(),
                        function() {
                            t.current();
                            var e = n();
                            "PENDING" === e.type && (clearTimeout(e.longPressTimerId), i(ns))
                        }
                }, [n, o, i]), tV(function() {
                    return w(window, [{
                        eventName: "touchmove",
                        fn: function() {},
                        options: {
                            capture: !1,
                            passive: !1
                        }
                    }])
                }, [])
            }
            var nf = {
                    input: !0,
                    button: !0,
                    textarea: !0,
                    select: !0,
                    option: !0,
                    optgroup: !0,
                    video: !0,
                    audio: !0
                },
                ng = (c = "matches", "undefined" == typeof document ? c : K([c, "msMatchesSelector", "webkitMatchesSelector"], function(e) {
                    return e in Element.prototype
                }) || c);

            function nm(e) {
                e.preventDefault()
            }

            function nv(e) {
                var r = e.expected,
                    t = e.phase,
                    n = e.isLockActive;
                return e.shouldWarn, !!n() && r === t
            }

            function nb(e) {
                var r = e.lockAPI,
                    t = e.store,
                    n = e.registry,
                    i = e.draggableId;
                if (r.isClaimed()) return !1;
                var a = n.draggable.findById(i);
                return !!(a && a.options.isEnabled && ts(t.getState(), i))
            }
            var nh = [nl, nd, np];

            function nI(e) {
                return e.current || R(!1), e.current
            }

            function ny(e) {
                var r, t, n, i, a, o, l, c, u, d, p, y, D, x, E, A, S, B, N, P, O, T, L, G, M, _ = e.contextId,
                    F = e.setCallbacks,
                    k = e.sensors,
                    W = e.nonce,
                    U = e.dragHandleUsageInstructions,
                    Z = (0, s.useRef)(null),
                    H = nt(e),
                    j = (0, v.I4)(function() {
                        var e;
                        return {
                            onBeforeCapture: (e = H.current).onBeforeCapture,
                            onBeforeDragStart: e.onBeforeDragStart,
                            onDragStart: e.onDragStart,
                            onDragEnd: e.onDragEnd,
                            onDragUpdate: e.onDragUpdate
                        }
                    }, [H]),
                    Y = (r = (0, v.Ye)(function() {
                        return "rbd-announcement-" + _
                    }, [_]), t = (0, s.useRef)(null), (0, s.useEffect)(function() {
                        var e = document.createElement("div");
                        return t.current = e, e.id = r, e.setAttribute("aria-live", "assertive"), e.setAttribute("aria-atomic", "true"), (0, f.Z)(e.style, t1), t0().appendChild(e),
                            function() {
                                setTimeout(function() {
                                    var r = t0();
                                    r.contains(e) && r.removeChild(e), e === t.current && (t.current = null)
                                })
                            }
                    }, [r]), (0, v.I4)(function(e) {
                        var r = t.current;
                        if (r) {
                            r.textContent = e;
                            return
                        }
                    }, [])),
                    V = (i = (n = {
                        contextId: _,
                        text: U
                    }).contextId, a = n.text, o = t3("hidden-text", {
                        separator: "-"
                    }), l = (0, v.Ye)(function() {
                        var e;
                        return "rbd-hidden-text-" + (e = {
                            contextId: i,
                            uniqueId: o
                        }).contextId + "-" + e.uniqueId
                    }, [o, i]), (0, s.useEffect)(function() {
                        var e = document.createElement("div");
                        return e.id = l, e.textContent = a, e.style.display = "none", t0().appendChild(e),
                            function() {
                                var r = t0();
                                r.contains(e) && r.removeChild(e)
                            }
                    }, [l, a]), l),
                    q = (c = (0, v.Ye)(function() {
                        return tY(_)
                    }, [_]), u = (0, s.useRef)(null), d = (0, s.useRef)(null), p = (0, v.I4)((0, h.Z)(function(e) {
                        var r = d.current;
                        r || R(!1), r.textContent = e
                    }), []), tV(function() {
                        (u.current || d.current) && R(!1);
                        var e = tz(W),
                            r = tz(W);
                        return u.current = e, d.current = r, e.setAttribute(tk + "-always", _), r.setAttribute(tk + "-dynamic", _), tq().appendChild(e), tq().appendChild(r), y(c.always), p(c.resting),
                            function() {
                                var e = function(e) {
                                    var r = e.current;
                                    r || R(!1), tq().removeChild(r), e.current = null
                                };
                                e(u), e(d)
                            }
                    }, [W, y = (0, v.I4)(function(e) {
                        var r = u.current;
                        r || R(!1), r.textContent = e
                    }, []), p, c.always, c.resting, _]), D = (0, v.I4)(function() {
                        return p(c.dragging)
                    }, [p, c.dragging]), x = (0, v.I4)(function(e) {
                        if ("DROP" === e) {
                            p(c.dropAnimating);
                            return
                        }
                        p(c.userCancel)
                    }, [p, c.dropAnimating, c.userCancel]), E = (0, v.I4)(function() {
                        d.current && p(c.resting)
                    }, [p, c.resting]), (0, v.Ye)(function() {
                        return {
                            dragging: D,
                            dropping: x,
                            resting: E
                        }
                    }, [D, x, E])),
                    z = (0, v.I4)(function(e) {
                        nI(Z).dispatch(e)
                    }, []),
                    J = (0, v.Ye)(function() {
                        return (0, g.DE)({
                            publishWhileDragging: rE,
                            updateDroppableScroll: rw,
                            updateDroppableIsEnabled: rA,
                            updateDroppableIsCombineEnabled: rR,
                            collectionStarting: rC
                        }, z)
                    }, [z]),
                    X = (A = (0, v.Ye)(t$, []), (0, s.useEffect)(function() {
                        return function() {
                            requestAnimationFrame(A.clean)
                        }
                    }, [A]), A),
                    Q = (0, v.Ye)(function() {
                        return td(X, J)
                    }, [X, J]),
                    ee = (0, v.Ye)(function() {
                        return tF((0, f.Z)({
                            scrollWindow: tp,
                            scrollDroppable: Q.scrollDroppable
                        }, (0, g.DE)({
                            move: rS
                        }, z)))
                    }, [Q.scrollDroppable, z]),
                    er = (S = (0, s.useRef)({}), B = (0, s.useRef)(null), N = (0, s.useRef)(null), P = (0, s.useRef)(!1), O = (0, v.I4)(function(e, r) {
                        var t = {
                            id: e,
                            focus: r
                        };
                        return S.current[e] = t,
                            function() {
                                var r = S.current;
                                r[e] !== t && delete r[e]
                            }
                    }, []), T = (0, v.I4)(function(e) {
                        var r = tK(_, e);
                        r && r !== document.activeElement && r.focus()
                    }, [_]), L = (0, v.I4)(function(e, r) {
                        B.current === e && (B.current = r)
                    }, []), G = (0, v.I4)(function() {
                        !N.current && P.current && (N.current = requestAnimationFrame(function() {
                            N.current = null;
                            var e = B.current;
                            e && T(e)
                        }))
                    }, [T]), M = (0, v.I4)(function(e) {
                        B.current = null;
                        var r = document.activeElement;
                        r && r.getAttribute(tW.draggableId) === e && (B.current = e)
                    }, []), tV(function() {
                        return P.current = !0,
                            function() {
                                P.current = !1;
                                var e = N.current;
                                e && cancelAnimationFrame(e)
                            }
                    }, []), (0, v.Ye)(function() {
                        return {
                            register: O,
                            tryRecordFocus: M,
                            tryRestoreFocusRecorded: G,
                            tryShiftRecord: L
                        }
                    }, [O, M, G, L])),
                    et = (0, v.Ye)(function() {
                        return tt({
                            announce: Y,
                            autoScroller: ee,
                            dimensionMarshal: Q,
                            focusMarshal: er,
                            getResponders: j,
                            styleMarshal: q
                        })
                    }, [Y, ee, Q, er, j, q]);
                Z.current = et;
                var en = (0, v.I4)(function() {
                        var e = nI(Z);
                        "IDLE" !== e.getState().phase && e.dispatch(rT())
                    }, []),
                    ei = (0, v.I4)(function() {
                        var e = nI(Z).getState();
                        return e.isDragging || "DROP_ANIMATING" === e.phase
                    }, []);
                F((0, v.Ye)(function() {
                    return {
                        isDragging: ei,
                        tryAbort: en
                    }
                }, [ei, en]));
                var ea = (0, v.I4)(function(e) {
                        return ts(nI(Z).getState(), e)
                    }, []),
                    eo = (0, v.I4)(function() {
                        return e7(nI(Z).getState())
                    }, []),
                    el = (0, v.Ye)(function() {
                        return {
                            marshal: Q,
                            focus: er,
                            contextId: _,
                            canLift: ea,
                            isMovementAllowed: eo,
                            dragHandleUsageInstructionsId: V,
                            registry: X
                        }
                    }, [_, Q, V, er, ea, eo, X]);
                return ! function(e) {
                    var r = e.contextId,
                        t = e.store,
                        n = e.registry,
                        i = e.customSensors,
                        a = [].concat(e.enableDefaultSensors ? nh : [], i || []),
                        o = (0, s.useState)(function() {
                            return function() {
                                var e = null;

                                function r() {
                                    e || R(!1), e = null
                                }
                                return {
                                    isClaimed: function() {
                                        return Boolean(e)
                                    },
                                    isActive: function(r) {
                                        return r === e
                                    },
                                    claim: function(r) {
                                        e && R(!1);
                                        var t = {
                                            abandon: r
                                        };
                                        return e = t, t
                                    },
                                    release: r,
                                    tryAbandon: function() {
                                        e && (e.abandon(), r())
                                    }
                                }
                            }()
                        })[0],
                        l = (0, v.I4)(function(e, r) {
                            e.isDragging && !r.isDragging && o.tryAbandon()
                        }, [o]);
                    tV(function() {
                        var e = t.getState();
                        return t.subscribe(function() {
                            var r = t.getState();
                            l(e, r), e = r
                        })
                    }, [o, t, l]), tV(function() {
                        return o.tryAbandon
                    }, [o.tryAbandon]);
                    for (var c = (0, v.I4)(function(e) {
                            return nb({
                                lockAPI: o,
                                registry: n,
                                store: t,
                                draggableId: e
                            })
                        }, [o, n, t]), u = (0, v.I4)(function(e, i, a) {
                            return function(e) {
                                var r, t, n, i, a = e.lockAPI,
                                    o = e.contextId,
                                    l = e.store,
                                    c = e.registry,
                                    u = e.draggableId,
                                    d = e.forceSensorStop,
                                    s = e.sourceEvent;
                                if (!nb({
                                        lockAPI: a,
                                        store: l,
                                        registry: c,
                                        draggableId: u
                                    })) return null;
                                var p = c.draggable.getById(u),
                                    g = (r = p.descriptor.id, t = "[" + tU.contextId + '="' + o + '"]', (n = K($(document.querySelectorAll(t)), function(e) {
                                        return e.getAttribute(tU.id) === r
                                    })) && tX(n) ? n : null);
                                if (!g || s && !p.options.canDragInteractiveElements && tX(i = s.target) && function e(r, t) {
                                        if (null == t) return !1;
                                        if (Boolean(nf[t.tagName.toLowerCase()])) return !0;
                                        var n = t.getAttribute("contenteditable");
                                        return "true" === n || "" === n || t !== r && e(r, t.parentElement)
                                    }(g, i)) return null;
                                var m = a.claim(d || C),
                                    v = "PRE_DRAG";

                                function h() {
                                    return p.options.shouldRespectForcePress
                                }

                                function y() {
                                    return a.isActive(m)
                                }
                                var D = (function(e, r) {
                                    nv({
                                        expected: e,
                                        phase: v,
                                        isLockActive: y,
                                        shouldWarn: !0
                                    }) && l.dispatch(r())
                                }).bind(null, "DRAGGING");

                                function x(e) {
                                    function r() {
                                        a.release(), v = "COMPLETED"
                                    }

                                    function t(t, n) {
                                        void 0 === n && (n = {
                                            shouldBlockNextClick: !1
                                        }), e.cleanup(), n.shouldBlockNextClick && setTimeout(w(window, [{
                                            eventName: "click",
                                            fn: nm,
                                            options: {
                                                once: !0,
                                                passive: !1,
                                                capture: !0
                                            }
                                        }])), r(), l.dispatch(rG({
                                            reason: t
                                        }))
                                    }
                                    return "PRE_DRAG" !== v && (r(), "PRE_DRAG" !== v && R(!1)), l.dispatch({
                                        type: "LIFT",
                                        payload: e.liftActionArgs
                                    }), v = "DRAGGING", (0, f.Z)({
                                        isActive: function() {
                                            return nv({
                                                expected: "DRAGGING",
                                                phase: v,
                                                isLockActive: y,
                                                shouldWarn: !1
                                            })
                                        },
                                        shouldRespectForcePress: h,
                                        drop: function(e) {
                                            return t("DROP", e)
                                        },
                                        cancel: function(e) {
                                            return t("CANCEL", e)
                                        }
                                    }, e.actions)
                                }
                                return {
                                    isActive: function() {
                                        return nv({
                                            expected: "PRE_DRAG",
                                            phase: v,
                                            isLockActive: y,
                                            shouldWarn: !1
                                        })
                                    },
                                    shouldRespectForcePress: h,
                                    fluidLift: function(e) {
                                        var r = (0, I.Z)(function(e) {
                                                D(function() {
                                                    return rS({
                                                        client: e
                                                    })
                                                })
                                            }),
                                            t = x({
                                                liftActionArgs: {
                                                    id: u,
                                                    clientSelection: e,
                                                    movementMode: "FLUID"
                                                },
                                                cleanup: function() {
                                                    return r.cancel()
                                                },
                                                actions: {
                                                    move: r
                                                }
                                            });
                                        return (0, f.Z)({}, t, {
                                            move: r
                                        })
                                    },
                                    snapLift: function() {
                                        return x({
                                            liftActionArgs: {
                                                id: u,
                                                clientSelection: (0, b.getRect)(g.getBoundingClientRect()).center,
                                                movementMode: "SNAP"
                                            },
                                            cleanup: C,
                                            actions: {
                                                moveUp: function() {
                                                    return D(rB)
                                                },
                                                moveRight: function() {
                                                    return D(rP)
                                                },
                                                moveDown: function() {
                                                    return D(rN)
                                                },
                                                moveLeft: function() {
                                                    return D(rO)
                                                }
                                            }
                                        })
                                    },
                                    abort: function() {
                                        nv({
                                            expected: "PRE_DRAG",
                                            phase: v,
                                            isLockActive: y,
                                            shouldWarn: !0
                                        }) && a.release()
                                    }
                                }
                            }({
                                lockAPI: o,
                                registry: n,
                                contextId: r,
                                store: t,
                                draggableId: e,
                                forceSensorStop: i,
                                sourceEvent: a && a.sourceEvent ? a.sourceEvent : null
                            })
                        }, [r, o, n, t]), d = (0, v.I4)(function(e) {
                            var t;
                            return (t = function(e, r) {
                                var t = r.target;
                                if (!(t instanceof tJ(t).Element)) return null;
                                var n = "[" + tW.contextId + '="' + e + '"]',
                                    i = t.closest ? t.closest(n) : function e(r, t) {
                                        return null == r ? null : r[ng](t) ? r : e(r.parentElement, t)
                                    }(t, n);
                                return i && tX(i) ? i : null
                            }(r, e)) ? t.getAttribute(tW.draggableId) : null
                        }, [r]), p = (0, v.I4)(function(e) {
                            var r = n.draggable.findById(e);
                            return r ? r.options : null
                        }, [n.draggable]), g = (0, v.I4)(function() {
                            o.isClaimed() && (o.tryAbandon(), "IDLE" !== t.getState().phase && t.dispatch(rT()))
                        }, [o, t]), m = (0, v.I4)(o.isClaimed, [o]), h = (0, v.Ye)(function() {
                            return {
                                canGetLock: c,
                                tryGetLock: u,
                                findClosestDraggableId: d,
                                findOptionsForDraggable: p,
                                tryReleaseLock: g,
                                isLockClaimed: m
                            }
                        }, [c, u, d, p, g, m]), y = 0; y < a.length; y++) a[y](h)
                }({
                    contextId: _,
                    store: et,
                    registry: X,
                    customSensors: k,
                    enableDefaultSensors: !1 !== e.enableDefaultSensors
                }), (0, s.useEffect)(function() {
                    return en
                }, [en]), s.createElement(t5.Provider, {
                    value: el
                }, s.createElement(m.zt, {
                    context: tQ,
                    store: et
                }, e.children))
            }
            var nD = 0;

            function nx() {
                nD = 0, t4 = 0
            }

            function nE(e) {
                var r = (0, v.Ye)(function() {
                        return "" + nD++
                    }, []),
                    t = e.dragHandleUsageInstructions || T.dragHandleUsageInstructions;
                return s.createElement(S, null, function(n) {
                    return s.createElement(ny, {
                        nonce: e.nonce,
                        contextId: r,
                        setCallbacks: n,
                        dragHandleUsageInstructions: t,
                        enableDefaultSensors: e.enableDefaultSensors,
                        sensors: e.sensors,
                        onBeforeCapture: e.onBeforeCapture,
                        onBeforeDragStart: e.onBeforeDragStart,
                        onDragStart: e.onDragStart,
                        onDragUpdate: e.onDragUpdate,
                        onDragEnd: e.onDragEnd
                    }, e.children)
                })
            }
            var nC = function(e) {
                    return function(r) {
                        return e === r
                    }
                },
                nw = nC("scroll"),
                nA = nC("auto");
            nC("visible");
            var nR = function(e, r) {
                    return r(e.overflowX) || r(e.overflowY)
                },
                nS = function(e) {
                    var r = window.getComputedStyle(e),
                        t = {
                            overflowX: r.overflowX,
                            overflowY: r.overflowY
                        };
                    return nR(t, nw) || nR(t, nA)
                },
                nB = function(e) {
                    return {
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }
                },
                nN = function(e) {
                    var r = e.descriptor,
                        t = e.isEnabled,
                        n = e.isCombineEnabled,
                        i = e.isFixedOnPage,
                        a = e.direction,
                        o = e.client,
                        l = e.page,
                        c = e.closest,
                        u = function() {
                            if (!c) return null;
                            var e = c.scrollSize,
                                r = c.client,
                                t = ti({
                                    scrollHeight: e.scrollHeight,
                                    scrollWidth: e.scrollWidth,
                                    height: r.paddingBox.height,
                                    width: r.paddingBox.width
                                });
                            return {
                                pageMarginBox: c.page.marginBox,
                                frameClient: r,
                                scrollSize: e,
                                shouldClipSubject: c.shouldClipSubject,
                                scroll: {
                                    initial: c.scroll,
                                    current: c.scroll,
                                    max: t,
                                    diff: {
                                        value: L,
                                        displacement: L
                                    }
                                }
                            }
                        }(),
                        d = "vertical" === a ? em : ev,
                        s = q({
                            page: l,
                            withPlaceholder: null,
                            axis: d,
                            frame: u
                        });
                    return {
                        descriptor: r,
                        isCombineEnabled: n,
                        isFixedOnPage: i,
                        axis: d,
                        isEnabled: t,
                        client: o,
                        page: l,
                        frame: u,
                        subject: s
                    }
                },
                nP = function(e, r) {
                    var t = (0, b.getBox)(e);
                    if (!r || e !== r) return t;
                    var n = t.paddingBox.top - r.scrollTop,
                        i = t.paddingBox.left - r.scrollLeft,
                        a = n + r.scrollHeight,
                        o = i + r.scrollWidth,
                        l = (0, b.expand)({
                            top: n,
                            right: o,
                            bottom: a,
                            left: i
                        }, t.border);
                    return (0, b.createBox)({
                        borderBox: l,
                        margin: t.margin,
                        border: t.border,
                        padding: t.padding
                    })
                },
                nO = function(e) {
                    var r = e.ref,
                        t = e.descriptor,
                        n = e.env,
                        i = e.windowScroll,
                        a = e.direction,
                        o = e.isDropDisabled,
                        l = e.isCombineEnabled,
                        c = e.shouldClipSubject,
                        u = n.closestScrollable,
                        d = nP(r, u),
                        s = (0, b.withScroll)(d, i),
                        p = function() {
                            if (!u) return null;
                            var e = (0, b.getBox)(u),
                                r = {
                                    scrollHeight: u.scrollHeight,
                                    scrollWidth: u.scrollWidth
                                };
                            return {
                                client: e,
                                page: (0, b.withScroll)(e, i),
                                scroll: nB(u),
                                scrollSize: r,
                                shouldClipSubject: c
                            }
                        }();
                    return nN({
                        descriptor: t,
                        isEnabled: !o,
                        isCombineEnabled: l,
                        isFixedOnPage: n.isFixedOnPage,
                        direction: a,
                        client: d,
                        page: s,
                        closest: p
                    })
                },
                nT = {
                    passive: !1
                },
                nL = {
                    passive: !0
                },
                nG = function(e) {
                    return e.shouldPublishImmediately ? nT : nL
                };

            function nM(e) {
                var r = (0, s.useContext)(e);
                return r || R(!1), r
            }
            var n_ = function(e) {
                return e && e.env.closestScrollable || null
            };

            function nF() {}
            var nk = {
                    width: 0,
                    height: 0,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                nW = function(e) {
                    var r = e.isAnimatingOpenOnMount,
                        t = e.placeholder,
                        n = e.animate;
                    return r || "close" === n ? nk : {
                        height: t.client.borderBox.height,
                        width: t.client.borderBox.width,
                        margin: t.client.margin
                    }
                },
                nU = function(e) {
                    var r = e.isAnimatingOpenOnMount,
                        t = e.placeholder,
                        n = e.animate,
                        i = nW({
                            isAnimatingOpenOnMount: r,
                            placeholder: t,
                            animate: n
                        });
                    return {
                        display: t.display,
                        boxSizing: "border-box",
                        width: i.width,
                        height: i.height,
                        marginTop: i.margin.top,
                        marginRight: i.margin.right,
                        marginBottom: i.margin.bottom,
                        marginLeft: i.margin.left,
                        flexShrink: "0",
                        flexGrow: "0",
                        pointerEvents: "none",
                        transition: "none" !== n ? rU.placeholder : null
                    }
                },
                nZ = s.memo(function(e) {
                    var r = (0, s.useRef)(null),
                        t = (0, v.I4)(function() {
                            r.current && (clearTimeout(r.current), r.current = null)
                        }, []),
                        n = e.animate,
                        i = e.onTransitionEnd,
                        a = e.onClose,
                        o = e.contextId,
                        l = (0, s.useState)("open" === e.animate),
                        c = l[0],
                        u = l[1];
                    (0, s.useEffect)(function() {
                        return c ? "open" !== n ? (t(), u(!1), nF) : r.current ? nF : (r.current = setTimeout(function() {
                            r.current = null, u(!1)
                        }), t) : nF
                    }, [n, c, t]);
                    var d = (0, v.I4)(function(e) {
                            "height" === e.propertyName && (i(), "close" === n && a())
                        }, [n, a, i]),
                        p = nU({
                            isAnimatingOpenOnMount: c,
                            animate: e.animate,
                            placeholder: e.placeholder
                        });
                    return s.createElement(e.placeholder.tagName, {
                        style: p,
                        "data-rbd-placeholder-context-id": o,
                        onTransitionEnd: d,
                        ref: e.innerRef
                    })
                }),
                nH = s.createContext(null);

            function nj(e) {
                e && tX(e) || R(!1)
            }

            function nY(e) {
                return "boolean" == typeof e
            }

            function nV(e, r) {
                r.forEach(function(r) {
                    return r(e)
                })
            }
            var nq = [function(e) {
                    var r = e.props;
                    r.droppableId || R(!1), "string" != typeof r.droppableId && R(!1)
                }, function(e) {
                    var r = e.props;
                    nY(r.isDropDisabled) || R(!1), nY(r.isCombineEnabled) || R(!1), nY(r.ignoreContainerClipping) || R(!1)
                }, function(e) {
                    nj((0, e.getDroppableRef)())
                }],
                nz = [function(e) {
                    var r = e.props,
                        t = e.getPlaceholderRef;
                    if (!r.placeholder || t()) return
                }],
                nJ = [function(e) {
                    e.props.renderClone || R(!1)
                }, function(e) {
                    (0, e.getPlaceholderRef)() && R(!1)
                }],
                nX = function(e) {
                    function r() {
                        for (var r, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return (r = e.call.apply(e, [this].concat(n)) || this).state = {
                            isVisible: Boolean(r.props.on),
                            data: r.props.on,
                            animate: r.props.shouldAnimate && r.props.on ? "open" : "none"
                        }, r.onClose = function() {
                            "close" === r.state.animate && r.setState({
                                isVisible: !1
                            })
                        }, r
                    }
                    return (0, p.Z)(r, e), r.getDerivedStateFromProps = function(e, r) {
                        return e.shouldAnimate ? e.on ? {
                            isVisible: !0,
                            data: e.on,
                            animate: "open"
                        } : r.isVisible ? {
                            isVisible: !0,
                            data: r.data,
                            animate: "close"
                        } : {
                            isVisible: !1,
                            animate: "close",
                            data: null
                        } : {
                            isVisible: Boolean(e.on),
                            data: e.on,
                            animate: "none"
                        }
                    }, r.prototype.render = function() {
                        if (!this.state.isVisible) return null;
                        var e = {
                            onClose: this.onClose,
                            data: this.state.data,
                            animate: this.state.animate
                        };
                        return this.props.children(e)
                    }, r
                }(s.PureComponent),
                nK = {
                    dragging: 5e3,
                    dropAnimating: 4500
                };

            function n$(e) {
                e.preventDefault()
            }
            var nQ = function(e, r) {
                    return e === r
                },
                n0 = function(e) {
                    var r = e.combine,
                        t = e.destination;
                    return t ? t.droppableId : r ? r.droppableId : null
                };

            function n1(e) {
                return {
                    isDragging: !1,
                    isDropAnimating: !1,
                    isClone: !1,
                    dropAnimation: null,
                    mode: null,
                    draggingOver: null,
                    combineTargetFor: e,
                    combineWith: null
                }
            }
            var n4 = {
                    mapped: {
                        type: "SECONDARY",
                        offset: L,
                        combineTargetFor: null,
                        shouldAnimateDisplacement: !0,
                        snapshot: n1(null)
                    }
                },
                n2 = (0, m.$j)(function() {
                    var e, r, t, n, i, a, o, l, c = (e = (0, h.Z)(function(e, r) {
                            return {
                                x: e,
                                y: r
                            }
                        }), r = (0, h.Z)(function(e, r, t, n, i) {
                            return {
                                isDragging: !0,
                                isClone: r,
                                isDropAnimating: Boolean(i),
                                dropAnimation: i,
                                mode: e,
                                draggingOver: t,
                                combineWith: n,
                                combineTargetFor: null
                            }
                        }), t = (0, h.Z)(function(e, t, n, i, a, o, l) {
                            return {
                                mapped: {
                                    type: "DRAGGING",
                                    dropping: null,
                                    draggingOver: a,
                                    combineWith: o,
                                    mode: t,
                                    offset: e,
                                    dimension: n,
                                    forceShouldAnimate: l,
                                    snapshot: r(t, i, a, o, null)
                                }
                            }
                        }), function(n, i) {
                            if (n.isDragging) {
                                if (n.critical.draggable.id !== i.draggableId) return null;
                                var a, o = n.current.client.offset,
                                    l = n.dimensions.draggables[i.draggableId],
                                    c = e2(n.impact),
                                    u = (a = n.impact).at && "COMBINE" === a.at.type ? a.at.combine.draggableId : null,
                                    d = n.forceShouldAnimate;
                                return t(e(o.x, o.y), n.movementMode, l, i.isClone, c, u, d)
                            }
                            if ("DROP_ANIMATING" === n.phase) {
                                var s = n.completed;
                                if (s.result.draggableId !== i.draggableId) return null;
                                var p = i.isClone,
                                    f = n.dimensions.draggables[i.draggableId],
                                    g = s.result,
                                    m = g.mode,
                                    v = n0(g),
                                    b = g.combine ? g.combine.draggableId : null,
                                    h = {
                                        duration: n.dropDuration,
                                        curve: r_.drop,
                                        moveTo: n.newHomeClientOffset,
                                        opacity: b ? rF.opacity.drop : null,
                                        scale: b ? rF.scale.drop : null
                                    };
                                return {
                                    mapped: {
                                        type: "DRAGGING",
                                        offset: n.newHomeClientOffset,
                                        dimension: f,
                                        dropping: h,
                                        draggingOver: v,
                                        combineWith: b,
                                        mode: m,
                                        forceShouldAnimate: null,
                                        snapshot: r(m, p, v, b, h)
                                    }
                                }
                            }
                            return null
                        }),
                        u = (n = (0, h.Z)(function(e, r) {
                            return {
                                x: e,
                                y: r
                            }
                        }), i = (0, h.Z)(n1), a = (0, h.Z)(function(e, r, t) {
                            return void 0 === r && (r = null), {
                                mapped: {
                                    type: "SECONDARY",
                                    offset: e,
                                    combineTargetFor: r,
                                    shouldAnimateDisplacement: t,
                                    snapshot: i(r)
                                }
                            }
                        }), o = function(e) {
                            return e ? a(L, e, !0) : null
                        }, l = function(e, r, t, i) {
                            var l = t.displaced.visible[e],
                                c = Boolean(i.inVirtualList && i.effected[e]),
                                u = ea(t),
                                d = u && u.draggableId === e ? r : null;
                            if (!l) {
                                if (!c) return o(d);
                                if (t.displaced.invisible[e]) return null;
                                var s = F(i.displacedBy.point);
                                return a(n(s.x, s.y), d, !0)
                            }
                            if (c) return o(d);
                            var p = t.displacedBy.point;
                            return a(n(p.x, p.y), d, l.shouldAnimate)
                        }, function(e, r) {
                            if (e.isDragging) return e.critical.draggable.id === r.draggableId ? null : l(r.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
                            if ("DROP_ANIMATING" === e.phase) {
                                var t = e.completed;
                                return t.result.draggableId === r.draggableId ? null : l(r.draggableId, t.result.draggableId, t.impact, t.afterCritical)
                            }
                            return null
                        });
                    return function(e, r) {
                        return c(e, r) || u(e, r) || n4
                    }
                }, {
                    dropAnimationFinished: rM
                }, null, {
                    context: tQ,
                    pure: !0,
                    areStatePropsEqual: nQ
                })(function(e) {
                    var r, t, n, i, a, o, l, c, u, d, p, f, g, m = (0, s.useRef)(null),
                        h = (0, v.I4)(function(e) {
                            m.current = e
                        }, []),
                        I = (0, v.I4)(function() {
                            return m.current
                        }, []),
                        y = nM(t5),
                        D = y.contextId,
                        x = y.dragHandleUsageInstructionsId,
                        E = y.registry,
                        C = nM(nH),
                        w = C.type,
                        A = C.droppableId,
                        S = (0, v.Ye)(function() {
                            return {
                                id: e.draggableId,
                                index: e.index,
                                type: w,
                                droppableId: A
                            }
                        }, [e.draggableId, e.index, w, A]),
                        B = e.children,
                        N = e.draggableId,
                        P = e.isEnabled,
                        O = e.shouldRespectForcePress,
                        T = e.canDragInteractiveElements,
                        G = e.isClone,
                        M = e.mapped,
                        _ = e.dropAnimationFinished;
                    G || (r = (0, v.Ye)(function() {
                        return {
                            descriptor: S,
                            registry: E,
                            getDraggableRef: I,
                            canDragInteractiveElements: T,
                            shouldRespectForcePress: O,
                            isEnabled: P
                        }
                    }, [S, E, I, T, O, P]), t = t3("draggable"), n = r.descriptor, i = r.registry, a = r.getDraggableRef, o = r.canDragInteractiveElements, l = r.shouldRespectForcePress, c = r.isEnabled, u = (0, v.Ye)(function() {
                        return {
                            canDragInteractiveElements: o,
                            shouldRespectForcePress: l,
                            isEnabled: c
                        }
                    }, [o, c, l]), d = (0, v.I4)(function(e) {
                        var r, t, i, o, l, c = a();
                        return c || R(!1), void 0 === (r = e) && (r = L), t = window.getComputedStyle(c), i = c.getBoundingClientRect(), o = (0, b.calculateBox)(i, t), l = (0, b.withScroll)(o, r), {
                            descriptor: n,
                            placeholder: {
                                client: o,
                                tagName: c.tagName.toLowerCase(),
                                display: t.display
                            },
                            displaceBy: {
                                x: o.marginBox.width,
                                y: o.marginBox.height
                            },
                            client: o,
                            page: l
                        }
                    }, [n, a]), p = (0, v.Ye)(function() {
                        return {
                            uniqueId: t,
                            descriptor: n,
                            options: u,
                            getDimension: d
                        }
                    }, [n, d, u, t]), f = (0, s.useRef)(p), g = (0, s.useRef)(!0), tV(function() {
                        return i.draggable.register(f.current),
                            function() {
                                return i.draggable.unregister(f.current)
                            }
                    }, [i.draggable]), tV(function() {
                        if (g.current) {
                            g.current = !1;
                            return
                        }
                        var e = f.current;
                        f.current = p, i.draggable.update(p, e)
                    }, [p, i.draggable]));
                    var F = (0, v.Ye)(function() {
                            return P ? {
                                tabIndex: 0,
                                role: "button",
                                "aria-describedby": x,
                                "data-rbd-drag-handle-draggable-id": N,
                                "data-rbd-drag-handle-context-id": D,
                                draggable: !1,
                                onDragStart: n$
                            } : null
                        }, [D, x, N, P]),
                        k = (0, v.I4)(function(e) {
                            "DRAGGING" === M.type && M.dropping && "transform" === e.propertyName && _()
                        }, [_, M]),
                        W = (0, v.Ye)(function() {
                            var e, r, t, n, i, a, o, l;
                            return {
                                innerRef: h,
                                draggableProps: {
                                    "data-rbd-draggable-context-id": D,
                                    "data-rbd-draggable-id": N,
                                    style: "DRAGGING" === M.type ? (e = M.dimension.client, r = M.offset, t = M.combineWith, n = M.dropping, i = Boolean(t), a = null != M.forceShouldAnimate ? M.forceShouldAnimate : "SNAP" === M.mode, l = (o = Boolean(n)) ? rH.drop(r, i) : rH.moveTo(r), {
                                        position: "fixed",
                                        top: e.marginBox.top,
                                        left: e.marginBox.left,
                                        boxSizing: "border-box",
                                        width: e.borderBox.width,
                                        height: e.borderBox.height,
                                        transition: n ? rU.drop(n.duration) : a ? rU.snap : rU.fluid,
                                        transform: l,
                                        opacity: i ? o ? rF.opacity.drop : rF.opacity.combining : null,
                                        zIndex: o ? nK.dropAnimating : nK.dragging,
                                        pointerEvents: "none"
                                    }) : {
                                        transform: rH.moveTo(M.offset),
                                        transition: M.shouldAnimateDisplacement ? null : "none"
                                    },
                                    onTransitionEnd: "DRAGGING" === M.type && M.dropping ? k : null
                                },
                                dragHandleProps: F
                            }
                        }, [D, F, N, M, k, h]),
                        U = (0, v.Ye)(function() {
                            return {
                                draggableId: S.id,
                                type: S.type,
                                source: {
                                    index: S.index,
                                    droppableId: S.droppableId
                                }
                            }
                        }, [S.droppableId, S.id, S.index, S.type]);
                    return B(W, M.snapshot, U)
                });

            function n3(e) {
                return nM(nH).isUsingCloneFor !== e.draggableId || e.isClone ? s.createElement(n2, e) : null
            }

            function n5(e) {
                var r = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
                    t = Boolean(e.disableInteractiveElementBlocking),
                    n = Boolean(e.shouldRespectForcePress);
                return s.createElement(n3, (0, f.Z)({}, e, {
                    isClone: !1,
                    isEnabled: r,
                    canDragInteractiveElements: t,
                    shouldRespectForcePress: n
                }))
            }
            var n7 = function(e, r) {
                    return e === r.droppable.type
                },
                n8 = function(e, r) {
                    return r.draggables[e.draggable.id]
                },
                n6 = (0, m.$j)(function() {
                    var e = {
                            placeholder: null,
                            shouldAnimatePlaceholder: !0,
                            snapshot: {
                                isDraggingOver: !1,
                                draggingOverWith: null,
                                draggingFromThisWith: null,
                                isUsingPlaceholder: !1
                            },
                            useClone: null
                        },
                        r = (0, f.Z)({}, e, {
                            shouldAnimatePlaceholder: !1
                        }),
                        t = (0, h.Z)(function(e) {
                            return {
                                draggableId: e.id,
                                type: e.type,
                                source: {
                                    index: e.index,
                                    droppableId: e.droppableId
                                }
                            }
                        }),
                        n = (0, h.Z)(function(n, i, a, o, l, c) {
                            var u = l.descriptor.id;
                            if (l.descriptor.droppableId === n) {
                                var d = c ? {
                                    render: c,
                                    dragging: t(l.descriptor)
                                } : null;
                                return {
                                    placeholder: l.placeholder,
                                    shouldAnimatePlaceholder: !1,
                                    snapshot: {
                                        isDraggingOver: a,
                                        draggingOverWith: a ? u : null,
                                        draggingFromThisWith: u,
                                        isUsingPlaceholder: !0
                                    },
                                    useClone: d
                                }
                            }
                            return i ? o ? {
                                placeholder: l.placeholder,
                                shouldAnimatePlaceholder: !0,
                                snapshot: {
                                    isDraggingOver: a,
                                    draggingOverWith: u,
                                    draggingFromThisWith: null,
                                    isUsingPlaceholder: !0
                                },
                                useClone: null
                            } : e : r
                        });
                    return function(t, i) {
                        var a = i.droppableId,
                            o = i.type,
                            l = !i.isDropDisabled,
                            c = i.renderClone;
                        if (t.isDragging) {
                            var u = t.critical;
                            if (!n7(o, u)) return r;
                            var d = n8(u, t.dimensions),
                                s = e2(t.impact) === a;
                            return n(a, l, s, s, d, c)
                        }
                        if ("DROP_ANIMATING" === t.phase) {
                            var p = t.completed;
                            if (!n7(o, p.critical)) return r;
                            var f = n8(p.critical, t.dimensions);
                            return n(a, l, n0(p.result) === a, e2(p.impact) === a, f, c)
                        }
                        if ("IDLE" === t.phase && t.completed && !t.shouldFlush) {
                            var g = t.completed;
                            if (!n7(o, g.critical)) return r;
                            var m = e2(g.impact) === a,
                                v = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                                b = g.critical.droppable.id === a;
                            if (m) return v ? e : r;
                            if (b) return e
                        }
                        return r
                    }
                }, {
                    updateViewportMaxScroll: function(e) {
                        return {
                            type: "UPDATE_VIEWPORT_MAX_SCROLL",
                            payload: e
                        }
                    }
                }, null, {
                    context: tQ,
                    pure: !0,
                    areStatePropsEqual: nQ
                })(function(e) {
                    var r, t, n, i, a, o, l, c, u, d, p, f, g, m, b, D, x, E, C, w, A, S = (0, s.useContext)(t5);
                    S || R(!1);
                    var B = S.contextId,
                        N = S.isMovementAllowed,
                        P = (0, s.useRef)(null),
                        O = (0, s.useRef)(null),
                        T = e.children,
                        G = e.droppableId,
                        M = e.type,
                        _ = e.mode,
                        F = e.direction,
                        k = e.ignoreContainerClipping,
                        W = e.isDropDisabled,
                        U = e.isCombineEnabled,
                        Z = e.snapshot,
                        H = e.useClone,
                        j = e.updateViewportMaxScroll,
                        Y = e.getContainerForClone,
                        V = (0, v.I4)(function() {
                            return P.current
                        }, []),
                        q = (0, v.I4)(function(e) {
                            P.current = e
                        }, []),
                        z = (0, v.I4)(function() {
                            return O.current
                        }, []),
                        J = (0, v.I4)(function(e) {
                            O.current = e
                        }, []);
                    r = {
                        props: e,
                        getDroppableRef: V,
                        getPlaceholderRef: z
                    };
                    var X = (0, v.I4)(function() {
                        N() && j({
                            maxScroll: to()
                        })
                    }, [N, j]);
                    t = {
                        droppableId: G,
                        type: M,
                        mode: _,
                        direction: F,
                        isDropDisabled: W,
                        isCombineEnabled: U,
                        ignoreContainerClipping: k,
                        getDroppableRef: V
                    }, n = (0, s.useRef)(null), i = nM(t5), a = t3("droppable"), o = i.registry, l = i.marshal, c = nt(t), u = (0, v.Ye)(function() {
                        return {
                            id: t.droppableId,
                            type: t.type,
                            mode: t.mode
                        }
                    }, [t.droppableId, t.mode, t.type]), d = (0, s.useRef)(u), p = (0, v.Ye)(function() {
                        return (0, h.Z)(function(e, r) {
                            n.current || R(!1), l.updateDroppableScroll(u.id, {
                                x: e,
                                y: r
                            })
                        })
                    }, [u.id, l]), f = (0, v.I4)(function() {
                        var e = n.current;
                        return e && e.env.closestScrollable ? nB(e.env.closestScrollable) : L
                    }, []), g = (0, v.I4)(function() {
                        var e = f();
                        p(e.x, e.y)
                    }, [f, p]), m = (0, v.Ye)(function() {
                        return (0, I.Z)(g)
                    }, [g]), b = (0, v.I4)(function() {
                        var e = n.current,
                            r = n_(e);
                        if (e && r || R(!1), e.scrollOptions.shouldPublishImmediately) {
                            g();
                            return
                        }
                        m()
                    }, [m, g]), D = (0, v.I4)(function(e, r) {
                        n.current && R(!1);
                        var t = c.current,
                            a = t.getDroppableRef();
                        a || R(!1);
                        var o = {
                                closestScrollable: function e(r) {
                                    return null == r ? null : r === document.body ? null : r === document.documentElement ? null : nS(r) ? r : e(r.parentElement)
                                }(a),
                                isFixedOnPage: function e(r) {
                                    return !!r && ("fixed" === window.getComputedStyle(r).position || e(r.parentElement))
                                }(a)
                            },
                            l = {
                                ref: a,
                                descriptor: u,
                                env: o,
                                scrollOptions: r
                            };
                        n.current = l;
                        var d = nO({
                                ref: a,
                                descriptor: u,
                                env: o,
                                windowScroll: e,
                                direction: t.direction,
                                isDropDisabled: t.isDropDisabled,
                                isCombineEnabled: t.isCombineEnabled,
                                shouldClipSubject: !t.ignoreContainerClipping
                            }),
                            s = o.closestScrollable;
                        return s && (s.setAttribute(tH.contextId, i.contextId), s.addEventListener("scroll", b, nG(l.scrollOptions))), d
                    }, [i.contextId, u, b, c]), x = (0, v.I4)(function() {
                        var e = n.current,
                            r = n_(e);
                        return e && r || R(!1), nB(r)
                    }, []), E = (0, v.I4)(function() {
                        var e = n.current;
                        e || R(!1);
                        var r = n_(e);
                        n.current = null, r && (m.cancel(), r.removeAttribute(tH.contextId), r.removeEventListener("scroll", b, nG(e.scrollOptions)))
                    }, [b, m]), C = (0, v.I4)(function(e) {
                        var r = n.current;
                        r || R(!1);
                        var t = n_(r);
                        t || R(!1), t.scrollTop += e.y, t.scrollLeft += e.x
                    }, []), w = (0, v.Ye)(function() {
                        return {
                            getDimensionAndWatchScroll: D,
                            getScrollWhileDragging: x,
                            dragStopped: E,
                            scroll: C
                        }
                    }, [E, D, x, C]), A = (0, v.Ye)(function() {
                        return {
                            uniqueId: a,
                            descriptor: u,
                            callbacks: w
                        }
                    }, [w, u, a]), tV(function() {
                        return d.current = A.descriptor, o.droppable.register(A),
                            function() {
                                n.current && E(), o.droppable.unregister(A)
                            }
                    }, [w, u, E, A, l, o.droppable]), tV(function() {
                        n.current && l.updateDroppableIsEnabled(d.current.id, !t.isDropDisabled)
                    }, [t.isDropDisabled, l]), tV(function() {
                        n.current && l.updateDroppableIsCombineEnabled(d.current.id, t.isCombineEnabled)
                    }, [t.isCombineEnabled, l]);
                    var K = s.createElement(nX, {
                            on: e.placeholder,
                            shouldAnimate: e.shouldAnimatePlaceholder
                        }, function(e) {
                            var r = e.onClose,
                                t = e.data,
                                n = e.animate;
                            return s.createElement(nZ, {
                                placeholder: t,
                                onClose: r,
                                innerRef: J,
                                animate: n,
                                contextId: B,
                                onTransitionEnd: X
                            })
                        }),
                        $ = (0, v.Ye)(function() {
                            return {
                                innerRef: q,
                                placeholder: K,
                                droppableProps: {
                                    "data-rbd-droppable-id": G,
                                    "data-rbd-droppable-context-id": B
                                }
                            }
                        }, [B, G, K, q]),
                        Q = H ? H.dragging.draggableId : null,
                        ee = (0, v.Ye)(function() {
                            return {
                                droppableId: G,
                                type: M,
                                isUsingCloneFor: Q
                            }
                        }, [G, Q, M]);
                    return s.createElement(nH.Provider, {
                        value: ee
                    }, T($, Z), function() {
                        if (!H) return null;
                        var e = H.dragging,
                            r = H.render,
                            t = s.createElement(n3, {
                                draggableId: e.draggableId,
                                index: e.source.index,
                                isClone: !0,
                                isEnabled: !0,
                                shouldRespectForcePress: !1,
                                canDragInteractiveElements: !0
                            }, function(t, n) {
                                return r(t, n, e)
                            });
                        return y.createPortal(t, Y())
                    }())
                });
            n6.defaultProps = {
                mode: "standard",
                type: "DEFAULT",
                direction: "vertical",
                isDropDisabled: !1,
                isCombineEnabled: !1,
                ignoreContainerClipping: !1,
                renderClone: null,
                getContainerForClone: function() {
                    return document.body || R(!1), document.body
                }
            }
        }
    }
]);