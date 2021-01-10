window['denylistedDomainsHashedValueListForGpayButtonWithCardInfo'] = [-718583466, -651407173, 1501053020, 1270931793];
window['whitelistedDomainsHashedValueListForGpayButtonWithCardInfo'] = [1432838318];
window['denylistedMerchentIdsHashedValueListForGpayButtonWithCardInfo'] = [];
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "ReadyToPayAdditionalBrowsers"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "PaymentHandlerLaunchPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "PaymentHandlerDynamicUpdatesLaunchPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "DisableNativeReadyToPayCheckForPaymentHandler"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "DisablePaymentRequest"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnablePaymentRequest"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnableLoadPaymentDataTimeout"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnableOfferCallback"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnablePaymentMethodCallback"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "UseCanMakePaymentResultFromPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = function(a) {
            if (!(a instanceof Array)) {
                a = ba(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ea = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        n = ea(this),
        p = function(a, b) {
            if (b) a: {
                var c = n;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && da(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    var fa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    p("Object.assign", function(a) {
        return a || fa
    });
    p("Promise", function(a) {
        function b() {
            this.W = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Eb = function(g) {
            if (null == this.W) {
                this.W = [];
                var h = this;
                this.Fb(function() {
                    h.kc()
                })
            }
            this.W.push(g)
        };
        var d = n.setTimeout;
        b.prototype.Fb = function(g) {
            d(g, 0)
        };
        b.prototype.kc = function() {
            for (; this.W && this.W.length;) {
                var g = this.W;
                this.W = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.ec(m)
                    }
                }
            }
            this.W = null
        };
        b.prototype.ec = function(g) {
            this.Fb(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.ua = 0;
            this.aa = void 0;
            this.sa = [];
            this.Mb = !1;
            var h = this.hb();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.hb = function() {
            function g(m) {
                return function(q) {
                    l || (l = !0, m.call(h, q))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.xc),
                reject: g(this.ub)
            }
        };
        e.prototype.xc = function(g) {
            if (g === this) this.ub(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.Ac(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.wc(g) : this.Kb(g)
            }
        };
        e.prototype.wc = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.ub(l);
                return
            }
            "function" == typeof h ? this.Bc(h, g) : this.Kb(g)
        };
        e.prototype.ub = function(g) {
            this.Xb(2, g)
        };
        e.prototype.Kb = function(g) {
            this.Xb(1, g)
        };
        e.prototype.Xb = function(g, h) {
            if (0 != this.ua) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.ua);
            this.ua = g;
            this.aa = h;
            2 === this.ua && this.yc();
            this.lc()
        };
        e.prototype.yc = function() {
            var g = this;
            d(function() {
                if (g.pc()) {
                    var h = n.console;
                    "undefined" !== typeof h && h.error(g.aa)
                }
            }, 1)
        };
        e.prototype.pc = function() {
            if (this.Mb) return !1;
            var g = n.CustomEvent,
                h = n.Event,
                l = n.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = n.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.aa;
            return l(g)
        };
        e.prototype.lc = function() {
            if (null != this.sa) {
                for (var g = 0; g <
                    this.sa.length; ++g) f.Eb(this.sa[g]);
                this.sa = null
            }
        };
        var f = new b;
        e.prototype.Ac = function(g) {
            var h = this.hb();
            g.Qa(h.resolve, h.reject)
        };
        e.prototype.Bc = function(g, h) {
            var l = this.hb();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, h) {
            function l(x, D) {
                return "function" == typeof x ? function(ha) {
                    try {
                        m(x(ha))
                    } catch (L) {
                        q(L)
                    }
                } : D
            }
            var m, q, F = new e(function(x, D) {
                m = x;
                q = D
            });
            this.Qa(l(g, m), l(h, q));
            return F
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Qa = function(g,
            h) {
            function l() {
                switch (m.ua) {
                    case 1:
                        g(m.aa);
                        break;
                    case 2:
                        h(m.aa);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.ua);
                }
            }
            var m = this;
            null == this.sa ? f.Eb(l) : this.sa.push(l);
            this.Mb = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var m = ba(g), q = m.next(); !q.done; q = m.next()) c(q.value).Qa(h, l)
            })
        };
        e.all = function(g) {
            var h = ba(g),
                l = h.next();
            return l.done ? c([]) : new e(function(m, q) {
                function F(ha) {
                    return function(L) {
                        x[ha] = L;
                        D--;
                        0 == D && m(x)
                    }
                }
                var x = [],
                    D = 0;
                do x.push(void 0), D++, c(l.value).Qa(F(x.length - 1), q), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    var r = this || self,
        ia = function(a, b) {
            a = a.split(".");
            var c = window || r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        ja = function() {},
        t = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        ka = function(a) {
            var b = t(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" ==
                b
        },
        la = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ma = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        na = function(a, b, c) {
            na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return na.apply(null, arguments)
        },
        oa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ab = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.hd = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        pa = function(a) {
            return a
        };

    function qa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, qa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    oa(qa, Error);
    qa.prototype.name = "CustomError";
    var ra = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        qa.call(this, c + a[d])
    };
    oa(ra, qa);
    ra.prototype.name = "AssertionError";
    var sa = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new ra("" + e, f || []);
        },
        v = function(a, b, c) {
            a || sa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        ta = function(a, b) {
            throw new ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        ua = function(a, b, c) {
            "number" !== typeof a && sa("Expected number but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        va = function(a, b, c) {
            "string" !== typeof a && sa("Expected string but got %s: %s.",
                [t(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        wa = function(a, b, c) {
            u(a) || sa("Expected object but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var w = function(a, b) {
        this.zb = a === xa && b || "";
        this.ac = ya
    };
    w.prototype.Da = !0;
    w.prototype.Ba = function() {
        return this.zb
    };
    w.prototype.toString = function() {
        return "Const{" + this.zb + "}"
    };
    var y = function(a) {
            if (a instanceof w && a.constructor === w && a.ac === ya) return a.zb;
            ta("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        z = function(a) {
            return new w(xa, a)
        },
        ya = {},
        xa = {};
    var za = {
            Yb: "PAYMENT_AUTHORIZATION",
            Zb: "SHIPPING_ADDRESS",
            $b: "SHIPPING_OPTION",
            cd: "UNKNOWN_INTENT"
        },
        Aa = {
            Hc: "CANARY",
            Qc: "LOCAL",
            Wc: "PREPROD",
            Xc: "PRODUCTION",
            Yc: "SANDBOX",
            $c: "TEST",
            ad: "TIN"
        },
        Ba = {
            Ic: "CARD",
            bd: "TOKENIZED_CARD",
            ed: "UPI"
        },
        Ca = {
            Jc: "CRYPTOGRAM_3DS",
            Uc: "PAN_ONLY"
        },
        Da = {
            Mc: "ESTIMATED",
            Oc: "FINAL",
            Sc: "NOT_CURRENTLY_KNOWN"
        },
        Ea = {
            SHORT: "short",
            Rc: "long",
            Vc: "plain",
            Gc: "buy",
            Lc: "donate"
        },
        Fa = {
            Kc: "default",
            Fc: "black",
            fd: "white"
        },
        Ga = {
            Zc: "static",
            Nc: "fill"
        },
        Ha = {
            en: 152,
            ar: 189,
            bg: 163,
            ca: 182,
            cs: 192,
            da: 154,
            de: 183,
            el: 178,
            es: 183,
            et: 147,
            fi: 148,
            fr: 183,
            hr: 157,
            id: 186,
            it: 182,
            ja: 148,
            ko: 137,
            ms: 186,
            nl: 167,
            no: 158,
            pl: 182,
            pt: 193,
            ru: 206,
            sk: 157,
            sl: 211,
            sr: 146,
            sv: 154,
            th: 146,
            tr: 161,
            uk: 207,
            zh: 156
        },
        Ia = {
            en: 177,
            ar: 166,
            bg: 199,
            ca: 164,
            cs: 203,
            da: 171,
            de: 179,
            el: 161,
            es: 165,
            et: 150,
            fi: 167,
            fr: 213,
            hr: 180,
            id: 224,
            it: 159,
            ja: 167,
            ko: 137,
            ms: 194,
            nl: 183,
            no: 171,
            pl: 236,
            pt: 173,
            ru: 311,
            sk: 176,
            sl: 228,
            sr: 172,
            sv: 178,
            th: 161,
            tr: 179,
            uk: 239,
            zh: 156
        },
        Ja = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #d9d9d9; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_grey600_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #5F6368">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        Ka = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #5F6368; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #FFFFFF">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        La = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" viewBox="0 0 130 36"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="8" y1="7" x2="8" y2="26" style="stroke: #d9d9d9; stroke-width:2"></line><image x="16" y="2.5" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_grey600_36dp.png"></image><text x="57" y="22" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #5f6368">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        Ma = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" viewBox="0 0 130 36"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="8" y1="7" x2="8" y2="26" style="stroke: #5f6368; stroke-width:2"></line><image x="16" y="2.5" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"></image><text x="57" y="22" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #fff">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>');

    function A(a, b) {
        b = void 0 === b ? document : b;
        var c = document.createElement("style");
        c.type = "text/css";
        c.textContent = a;
        if (b instanceof HTMLDocument) document.head.appendChild(c);
        else if (b instanceof ShadowRoot) b.appendChild(c);
        else throw Error("Parameter 'buttonRootNode' should be either document or a shadowroot.");
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Na = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function Oa(a) {
        for (var b = Array(36), c = 0, d, e = 0; 36 > e; e++) 8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = Na[19 == e ? d & 3 | 8 : d]);
        return b.join("") + "." + a
    }

    function Pa(a) {
        for (var b = 1; b < arguments.length; b++) a = Qa(a, arguments[b]);
        return a
    }

    function Qa(a, b) {
        if ("object" !== typeof b || null === b) return a;
        for (var c in b) b.hasOwnProperty(c) && void 0 !== b[c] && (null == b[c] ? a[c] = null : null == a[c] || "object" !== typeof a[c] || "object" !== typeof b[c] || Array.isArray(b[c]) || Array.isArray(a[c]) ? a[c] = b[c] : Qa(a[c], b[c]));
        return a
    }

    function Ra() {
        var a = Sa,
            b = 0,
            c;
        if (0 == a.length) return b;
        for (c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            b = (b << 5) - b + d;
            b &= b
        }
        return b
    }

    function B(a) {
        console.error("DEVELOPER_ERROR in " + a.ga + ": " + a.errorMessage)
    };
    var Ta = Array.prototype.indexOf ? function(a, b) {
            v(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ua = Array.prototype.forEach ? function(a, b, c) {
            v(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Va = Array.prototype.map ?
        function(a, b) {
            v(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        };

    function Wa(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    var Xa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ya = /&/g,
        Za = /</g,
        $a = />/g,
        ab = /"/g,
        bb = /'/g,
        cb = /\x00/g,
        db = /[\x00&<>"']/,
        C = function(a, b) {
            return -1 != a.indexOf(b)
        },
        eb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var E;
    a: {
        var fb = r.navigator;
        if (fb) {
            var gb = fb.userAgent;
            if (gb) {
                E = gb;
                break a
            }
        }
        E = ""
    };
    var hb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < ib.length; f++) c = ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: pa,
                    createScript: pa,
                    createScriptURL: pa
                })
            } catch (c) {
                r.console && r.console.error(c.message)
            }
            kb = a
        }
        return kb
    };
    var nb = function(a, b) {
        this.sb = b === mb ? a : ""
    };
    k = nb.prototype;
    k.Da = !0;
    k.Ba = function() {
        return this.sb.toString()
    };
    k.kb = !0;
    k.Aa = function() {
        return 1
    };
    k.toString = function() {
        return "TrustedResourceUrl{" + this.sb + "}"
    };
    var ob = function(a) {
            if (a instanceof nb && a.constructor === nb) return a.sb;
            ta("expected object of type TrustedResourceUrl, got '" + a + "' of type " + t(a));
            return "type_error:TrustedResourceUrl"
        },
        sb = function(a, b) {
            var c = y(a);
            if (!pb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(qb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof
                w ? y(d) : encodeURIComponent(String(d))
            });
            return rb(a)
        },
        qb = /%{(\w+)}/g,
        pb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        mb = {},
        rb = function(a) {
            var b = lb();
            a = b ? b.createScriptURL(a) : a;
            return new nb(a, mb)
        };
    var G = function(a, b) {
        this.rb = b === tb ? a : ""
    };
    k = G.prototype;
    k.Da = !0;
    k.Ba = function() {
        return this.rb.toString()
    };
    k.kb = !0;
    k.Aa = function() {
        return 1
    };
    k.toString = function() {
        return "SafeUrl{" + this.rb + "}"
    };
    var ub = function(a) {
            if (a instanceof G && a.constructor === G) return a.rb;
            ta("expected object of type SafeUrl, got '" + a + "' of type " + t(a));
            return "type_error:SafeUrl"
        },
        vb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        tb = {};
    var xb = function(a, b, c) {
        this.qb = c === wb ? a : "";
        this.jc = b
    };
    k = xb.prototype;
    k.kb = !0;
    k.Aa = function() {
        return this.jc
    };
    k.Da = !0;
    k.Ba = function() {
        return this.qb.toString()
    };
    k.toString = function() {
        return "SafeHtml{" + this.qb + "}"
    };
    var yb = function(a) {
            if (a instanceof xb && a.constructor === xb) return a.qb;
            ta("expected object of type SafeHtml, got '" + a + "' of type " + t(a));
            return "type_error:SafeHtml"
        },
        Ab = function(a) {
            if (a instanceof xb) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.kb && (c = a.Aa());
            a = b && a.Da ? a.Ba() : String(a);
            db.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")), -1 != a.indexOf(">") && (a = a.replace($a, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ab, "&quot;")), -1 != a.indexOf("'") &&
                (a = a.replace(bb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(cb, "&#0;")));
            return zb(a, c)
        },
        Cb = function(a) {
            var b = Ab(Bb),
                c = b.Aa(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? Ua(f, e) : (f = Ab(f), d.push(yb(f).toString()), f = f.Aa(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            Ua(a, e);
            return zb(d.join(yb(b).toString()), c)
        },
        Db = function(a) {
            return Cb(Array.prototype.slice.call(arguments))
        },
        wb = {},
        zb = function(a, b) {
            var c = lb();
            a = c ? c.createHTML(a) : a;
            return new xb(a, b, wb)
        },
        Bb = new xb(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, wb),
        Eb =
        zb("<br>", 0);
    var Fb = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Gb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = yb(Bb);
            return !b.parentElement
        }),
        Hb = function(a, b) {
            if (a.tagName && Fb[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
                a.tagName + ".");
            if (Gb())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = yb(b)
        },
        Ib = function(a, b) {
            a: {
                try {
                    var c = a && a.ownerDocument,
                        d = c && (c.defaultView || c.parentWindow);
                    d = d || r;
                    if (d.Element && d.Location) {
                        var e = d;
                        break a
                    }
                } catch (g) {}
                e = null
            }
            if (e && "undefined" != typeof e.HTMLIFrameElement && (!a || !(a instanceof e.HTMLIFrameElement) && (a instanceof e.Location || a instanceof e.Element))) {
                if (u(a)) try {
                    var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                } catch (g) {
                    f = "<object could not be stringified>"
                } else f =
                    void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                ta("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", f)
            }
            a.src = ob(b).toString()
        },
        Jb = function(a, b, c, d) {
            a instanceof G || a instanceof G || (a = "object" == typeof a && a.Da ? a.Ba() : String(a), v(vb.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez"), a = new G(a, tb));
            b = b || r;
            c = c instanceof w ? y(c) : c || "";
            return void 0 !== d ? b.open(ub(a), c, d, void 0) : b.open(ub(a), c)
        };
    var Kb = function() {
            return "transition".replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        },
        Lb = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Mb = function(a) {
        Mb[" "](a);
        return a
    };
    Mb[" "] = ja;
    var Nb = C(E, "Opera"),
        H = C(E, "Trident") || C(E, "MSIE"),
        Ob = C(E, "Edge"),
        Pb = C(E, "Gecko") && !(C(E.toLowerCase(), "webkit") && !C(E, "Edge")) && !(C(E, "Trident") || C(E, "MSIE")) && !C(E, "Edge"),
        Qb = C(E.toLowerCase(), "webkit") && !C(E, "Edge"),
        Rb = function() {
            var a = r.document;
            return a ? a.documentMode : void 0
        },
        Sb;
    a: {
        var Tb = "",
            Ub = function() {
                var a = E;
                if (Pb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ob) return /Edge\/([\d\.]+)/.exec(a);
                if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Qb) return /WebKit\/(\S+)/.exec(a);
                if (Nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ub && (Tb = Ub ? Ub[1] : "");
        if (H) {
            var Vb = Rb();
            if (null != Vb && Vb > parseFloat(Tb)) {
                Sb = String(Vb);
                break a
            }
        }
        Sb = Tb
    }
    var Wb = Sb,
        Xb = {},
        Yb;
    if (r.document && H) {
        var Zb = Rb();
        Yb = Zb ? Zb : parseInt(Wb, 10) || void 0
    } else Yb = void 0;
    var $b = Yb;
    var ac = function(a) {
        var b = Va(arguments, y).join(""),
            c = z("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced.");
        va(y(c), "must provide justification");
        v(!/^[\s\xa0]*$/.test(y(c)), "must provide non-empty justification");
        b = zb(b, null);
        c = document;
        var d = "DIV";
        "application/xhtml+xml" === c.contentType && (d = d.toLowerCase());
        d = c.createElement(d);
        H ? (Hb(d, Db(Eb, b)), d.removeChild(v(d.firstChild))) : Hb(d, b);
        if (1 == d.childNodes.length) b = d.removeChild(v(d.firstChild));
        else
            for (b =
                c.createDocumentFragment(); d.firstChild;) b.appendChild(d.firstChild);
        return b
    };
    var bc = "StopIteration" in r ? r.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        cc = function() {};
    cc.prototype.next = function() {
        throw bc;
    };
    cc.prototype.bc = function() {
        return this
    };
    var dc = function(a, b) {
        this.L = {};
        this.o = [];
        this.La = this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    k = dc.prototype;
    k.O = function() {
        ec(this);
        for (var a = [], b = 0; b < this.o.length; b++) a.push(this.L[this.o[b]]);
        return a
    };
    k.Z = function() {
        ec(this);
        return this.o.concat()
    };
    k.xa = function(a) {
        return fc(this.L, a)
    };
    k.clear = function() {
        this.L = {};
        this.La = this.l = this.o.length = 0
    };
    k.remove = function(a) {
        return fc(this.L, a) ? (delete this.L[a], this.l--, this.La++, this.o.length > 2 * this.l && ec(this), !0) : !1
    };
    var ec = function(a) {
        if (a.l != a.o.length) {
            for (var b = 0, c = 0; b < a.o.length;) {
                var d = a.o[b];
                fc(a.L, d) && (a.o[c++] = d);
                b++
            }
            a.o.length = c
        }
        if (a.l != a.o.length) {
            var e = {};
            for (c = b = 0; b < a.o.length;) d = a.o[b], fc(e, d) || (a.o[c++] = d, e[d] = 1), b++;
            a.o.length = c
        }
    };
    k = dc.prototype;
    k.get = function(a, b) {
        return fc(this.L, a) ? this.L[a] : b
    };
    k.set = function(a, b) {
        fc(this.L, a) || (this.l++, this.o.push(a), this.La++);
        this.L[a] = b
    };
    k.addAll = function(a) {
        if (a instanceof dc)
            for (var b = a.Z(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    k.forEach = function(a, b) {
        for (var c = this.Z(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new dc(this)
    };
    k.bc = function(a) {
        ec(this);
        var b = 0,
            c = this.La,
            d = this,
            e = new cc;
        e.next = function() {
            if (c != d.La) throw Error("The map has changed since the iterator was created");
            if (b >= d.o.length) throw bc;
            var f = d.o[b++];
            return a ? f : d.L[f]
        };
        return e
    };
    var fc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var gc = function(a) {
            if (a.O && "function" == typeof a.O) return a.O();
            if ("string" === typeof a) return a.split("");
            if (ka(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        hc = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (ka(a) || "string" === typeof a) Ua(a, b, c);
            else {
                if (a.Z && "function" == typeof a.Z) var d = a.Z();
                else if (a.O && "function" == typeof a.O) d = void 0;
                else if (ka(a) || "string" === typeof a) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = gc(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        jc = function(a) {
            var b = a.match(ic);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        kc = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var I = function(a) {
        this.S = this.na = this.ba = "";
        this.h = null;
        this.N = this.P = "";
        this.G = this.nc = !1;
        if (a instanceof I) {
            this.G = a.G;
            lc(this, a.ba);
            var b = a.na;
            J(this);
            this.na = b;
            b = a.S;
            J(this);
            this.S = b;
            mc(this, a.h);
            b = a.P;
            J(this);
            this.P = b;
            nc(this, a.I.clone());
            a = a.N;
            J(this);
            this.N = a
        } else a && (b = String(a).match(ic)) ? (this.G = !1, lc(this, b[1] || "", !0), a = b[2] || "", J(this), this.na = oc(a), a = b[3] || "", J(this), this.S = oc(a, !0), mc(this, b[4]), a = b[5] || "", J(this), this.P = oc(a, !0), nc(this, b[6] || "", !0), a = b[7] || "", J(this), this.N = oc(a)) :
            (this.G = !1, this.I = new K(null, this.G))
    };
    I.prototype.toString = function() {
        var a = [],
            b = this.ba;
        b && a.push(pc(b, qc, !0), ":");
        var c = this.S;
        if (c || "file" == b) a.push("//"), (b = this.na) && a.push(pc(b, qc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
        if (c = this.P) this.S && "/" != c.charAt(0) && a.push("/"), a.push(pc(c, "/" == c.charAt(0) ? rc : sc, !0));
        (c = this.I.toString()) && a.push("?", c);
        (c = this.N) && a.push("#", pc(c, tc));
        return a.join("")
    };
    I.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.ba;
        c ? lc(b, a.ba) : c = !!a.na;
        if (c) {
            var d = a.na;
            J(b);
            b.na = d
        } else c = !!a.S;
        c ? (d = a.S, J(b), b.S = d) : c = null != a.h;
        d = a.P;
        if (c) mc(b, a.h);
        else if (c = !!a.P) {
            if ("/" != d.charAt(0))
                if (this.S && !this.P) d = "/" + d;
                else {
                    var e = b.P.lastIndexOf("/"); - 1 != e && (d = b.P.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (C(e, "./") || C(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length ||
                        1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (J(b), b.P = d) : c = "" !== a.I.toString();
        c ? nc(b, a.I.clone()) : c = !!a.N;
        c && (a = a.N, J(b), b.N = a);
        return b
    };
    I.prototype.clone = function() {
        return new I(this)
    };
    var lc = function(a, b, c) {
            J(a);
            a.ba = c ? oc(b, !0) : b;
            a.ba && (a.ba = a.ba.replace(/:$/, ""))
        },
        mc = function(a, b) {
            J(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.h = b
            } else a.h = null
        },
        nc = function(a, b, c) {
            J(a);
            b instanceof K ? (a.I = b, a.I.xb(a.G)) : (c || (b = pc(b, uc)), a.I = new K(b, a.G))
        };
    I.prototype.getQuery = function() {
        return this.I.toString()
    };
    var vc = function(a, b, c) {
        J(a);
        a.I.set(b, c)
    };
    I.prototype.removeParameter = function(a) {
        J(this);
        this.I.remove(a);
        return this
    };
    var J = function(a) {
        if (a.nc) throw Error("Tried to modify a read-only Uri");
    };
    I.prototype.xb = function(a) {
        this.G = a;
        this.I && this.I.xb(a)
    };
    var oc = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        pc = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        wc = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        qc = /[#\/\?@]/g,
        sc = /[#\?:]/g,
        rc = /[#\?]/g,
        uc = /[#\?@]/g,
        tc = /#/g,
        K = function(a, b) {
            this.l = this.j = null;
            this.D = a || null;
            this.G = !!b
        },
        M = function(a) {
            a.j || (a.j = new dc, a.l = 0, a.D && kc(a.D, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g,
                    " ")), c)
            }))
        };
    k = K.prototype;
    k.add = function(a, b) {
        M(this);
        this.D = null;
        a = xc(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.l = ua(this.l) + 1;
        return this
    };
    k.remove = function(a) {
        M(this);
        a = xc(this, a);
        return this.j.xa(a) ? (this.D = null, this.l = ua(this.l) - this.j.get(a).length, this.j.remove(a)) : !1
    };
    k.clear = function() {
        this.j = this.D = null;
        this.l = 0
    };
    k.xa = function(a) {
        M(this);
        a = xc(this, a);
        return this.j.xa(a)
    };
    k.forEach = function(a, b) {
        M(this);
        this.j.forEach(function(c, d) {
            Ua(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.Z = function() {
        M(this);
        for (var a = this.j.O(), b = this.j.Z(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.O = function(a) {
        M(this);
        var b = [];
        if ("string" === typeof a) this.xa(a) && (b = Wa(b, this.j.get(xc(this, a))));
        else {
            a = this.j.O();
            for (var c = 0; c < a.length; c++) b = Wa(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        M(this);
        this.D = null;
        a = xc(this, a);
        this.xa(a) && (this.l = ua(this.l) - this.j.get(a).length);
        this.j.set(a, [b]);
        this.l = ua(this.l) + 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.O(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.D) return this.D;
        if (!this.j) return "";
        for (var a = [], b = this.j.Z(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.O(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.D = a.join("&")
    };
    k.clone = function() {
        var a = new K;
        a.D = this.D;
        this.j && (a.j = this.j.clone(), a.l = this.l);
        return a
    };
    var xc = function(a, b) {
        b = String(b);
        a.G && (b = b.toLowerCase());
        return b
    };
    K.prototype.xb = function(a) {
        a && !this.G && (M(this), this.D = null, this.j.forEach(function(b, c) {
            var d = c.toLowerCase();
            if (c != d && (this.remove(c), this.remove(d), 0 < b.length)) {
                this.D = null;
                c = this.j;
                var e = c.set;
                d = xc(this, d);
                var f = b.length;
                if (0 < f) {
                    for (var g = Array(f), h = 0; h < f; h++) g[h] = b[h];
                    f = g
                } else f = [];
                e.call(c, d, f);
                this.l = ua(this.l) + b.length
            }
        }, this));
        this.G = a
    };
    K.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) hc(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var yc = [],
        zc = [],
        Sa = window.location.hostname,
        Ac = window.whitelistedDomainsHashedValueListForGpayButtonWithCardInfo || [],
        Bc = window.denylistedDomainsHashedValueListForGpayButtonWithCardInfo || [];

    function Cc(a) {
        zc.includes(a.buttonRootNode || document) || (A("\n  .gpay-card-info-container {\n    padding: 0;\n    position: relative;\n    min-width: 240px;\n    height: 40px;\n    min-height: 40px;\n    border-radius: 4px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    cursor: pointer;\n    border: 0px;\n  }\n\n  .gpay-card-info-container.black,\n  .gpay-card-info-animation-container.black {\n    background-color: #000;\n    box-shadow: none;\n  }\n\n  .gpay-card-info-container.white,\n  .gpay-card-info-animation-container.white {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.black.active {\n    background-color: #5f6368;\n  }\n\n  .gpay-card-info-container.black.hover,\n  .gpay-card-info-animation-container.black.hover {\n    background-color: #3c4043;\n  }\n\n  .gpay-card-info-container.white.active {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.white.focus {\n    box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n  }\n\n  .gpay-card-info-container.white.hover,\n  .gpay-card-info-animation-container.white.hover {\n    background-color: #f8f8f8;\n  }\n\n  .gpay-card-info-iframe {\n    border: 0;\n    display: block;\n    height: 40px;\n    margin: auto;\n    max-width: 100%;\n    width: 240px;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-iframe{\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n  }\n\n  .gpay-card-info-container-fill,\n    .gpay-card-info-container-fill > .gpay-card-info-container{\n    width: 100%;\n    height: inherit;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-container{\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding-top: 3px;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container{\n    position: relative;\n    width: 60%;\n    height: inherit;\n    max-height: 80%;\n    margin-right: -20%;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container > svg {\n    position: absolute;\n    left: 0;\n    height: 100%;\n    max-width: 100%;\n  }\n", a.buttonRootNode),
            A('\n  .gpay-card-info-animation-container {\n    display: flex;\n    width:100%;\n    position: absolute;\n    z-index: 100;\n    height: 40px;\n    border-radius: 4px;\n  }\n\n  .gpay-card-info-placeholder-container {\n    display: flex;\n    width: 240px;\n    height: 100%;\n    margin: auto;\n  }\n\n  .gpay-card-info-animated-progress-bar-container {\n    display: flex;\n    box-sizing: border-box;\n    position: absolute;\n    width: 100%;\n  }\n\n  .gpay-card-info-animated-progress-bar {\n    border-radius: 4px 4px 0px 0px;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-name: gpayProgressFill;\n    animation-timing-function: cubic-bezier(0.97, 0.33, 1, 1);\n    background: #caccce;\n    width: 100%;\n    height: 3px;\n    max-height: 3px;\n  }\n\n  .gpay-card-info-animated-progress-bar-indicator {\n    border-radius: 4px 4px 0px 0px;\n    max-width: 20px;\n    min-width: 20px;\n    height: 3px;\n    max-height: 3px;\n    background: linear-gradient(to right, #caccce 30%, #acaeaf 60%);\n    animation-delay: 0.5s;\n    animation-duration: 1.7s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: gpayPlaceHolderShimmer;\n  }\n\n  .gpay-card-info-iframe-fade-in {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayIframeFadeIn;\n  }\n\n  .gpay-card-info-animation-container-fade-out {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayPlaceHolderFadeOut;\n  }\n\n  .gpay-card-info-animation-gpay-logo {\n    margin: 13px 7px 0px  39px;\n    background-origin: content-box;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 17px;\n    max-height: 17px;\n    max-width: 41px;\n    min-width: 41px;\n  }\n\n  .gpay-card-info-animation-gpay-logo.black {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/dark_gpay.svg");\n  }\n\n  .gpay-card-info-animation-gpay-logo.white {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/light_gpay.svg");\n  }\n\n  @keyframes gpayPlaceHolderShimmer{\n    0% {\n      margin-left: 0px;\n    }\n    100% {\n      margin-left: calc(100% - 20px);\n    }\n  }\n\n  @keyframes gpayIframeFadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n  }\n\n  @keyframes gpayPlaceHolderFadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n  }\n\n  @keyframes gpayProgressFill {\n    from {\n      width: 0;\n    }\n    to {\n      width: 100%;\n    }\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-animation-container{\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-animation-gpay-logo{\n    background-position: right;\n    margin: 0 0 0 0;\n    max-width: none;\n    width: 25%;\n    height:inherit;\n    max-height: 50%;\n  }\n',
                a.buttonRootNode), zc.push(a.buttonRootNode || document));
        var b = Dc(a),
            c = "white" == a.buttonColor ? "white" : "black",
            d = document.createElement("button");
        Ec(d);
        d.setAttribute("class", (-1658203989 === Ra() ? "gpay-button" : "") + " gpay-card-info-container " + b);
        var e = document.createElement("div");
        e.setAttribute("class", "gpay-card-info-animation-container " + c);
        b = document.createElement("div");
        b.setAttribute("class", "gpay-card-info-placeholder-container");
        var f = document.createElement("div");
        f.setAttribute("class", "gpay-card-info-animation-gpay-logo " +
            c);
        var g = ac("white" == a.buttonColor ? Ja : Ka);
        c = document.createElement("div");
        c.setAttribute("class", "gpay-card-info-animated-progress-bar-container");
        var h = document.createElement("div");
        h.setAttribute("class", "gpay-card-info-animated-progress-bar");
        var l = document.createElement("div");
        l.setAttribute("class", "gpay-card-info-animated-progress-bar-indicator");
        h.appendChild(l);
        b.appendChild(f);
        "fill" !== a.buttonSizeMode ? b.appendChild(g) : (f = ac("white" == a.buttonColor ? La : Ma), g = document.createElement("div"), g.appendChild(f),
            g.setAttribute("class", "gpay-card-info-placeholder-svg-container"), b.appendChild(g));
        c.appendChild(h);
        e.appendChild(b);
        e.appendChild(c);
        Fc(e);
        d.appendChild(e);
        var m = document.createElement("iframe");
        m.setAttribute("class", "gpay-card-info-iframe");
        m.setAttribute("scrolling", "no");
        b = new I("https://pay.google.com/gp/p/generate_gpay_btn_img");
        vc(b, "buttonColor", a.buttonColor);
        vc(b, "browserLocale", Gc(a.buttonLocale));
        vc(b, "buttonSizeMode", a.buttonSizeMode);
        m.setAttribute("src", b.toString());
        m.onload = function() {
            m.classList.add("gpay-card-info-iframe-fade-in");
            e.classList.add("gpay-card-info-animation-container-fade-out")
        };
        a.onClick && d.addEventListener("click", a.onClick);
        Fc(d);
        d.appendChild(m);
        b = document.createElement("div");
        "fill" === a.buttonSizeMode && b.setAttribute("class", "gpay-card-info-container-fill");
        b.appendChild(d);
        return b
    }

    function Fc(a) {
        ["mouseover", "mouseout"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("hover", "mouseover" == c.type);
                var d = document.querySelector(".gpay-card-info-animation-container");
                null !== d && d.classList.toggle("hover", "mouseover" == c.type)
            })
        });
        ["mousedown", "mouseup", "mouseout"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("active", "mousedown" == c.type)
            })
        });
        ["focus", "blur"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("focus", "focus" ==
                    c.type)
            })
        })
    }

    function Ec(a) {
        a.setAttribute("type", "button");
        a.setAttribute("aria-label", "Google Pay")
    }

    function Dc(a) {
        var b = "white";
        "white" !== a.buttonColor && (b = "black");
        var c = a.buttonType || "buy";
        "buy" === a.buttonType ? c = "buy long" : "plain" === a.buttonType && (c = "plain short");
        return b + " " + c
    }

    function Gc(a) {
        var b = (navigator.language || navigator.nd || "en").substring(0, 2),
            c = (a || b).substring(0, 2);
        if (c in Ha) return c;
        c !== b && B({
            ga: "createButton",
            errorMessage: 'Button locale "' + a + '" is not supported, falling back to browser locale.'
        });
        return b in Ha ? b : "en"
    };
    var Hc = function() {
        this.Ec = N.contentWindow
    };
    Hc.prototype.postMessage = function(a, b) {
        this.Ec.postMessage(a, b)
    };
    var Ic = {
            dd: 0,
            Pc: 1,
            Yb: 2,
            Zb: 3,
            $b: 4,
            Tc: 5
        },
        N = null,
        Jc = null,
        O = null,
        Kc = null,
        Lc = Date.now(),
        Mc = null,
        Nc = !1,
        Oc = !1,
        Pc = [],
        Rc = function() {
            Qc({}, 11, ["canMakePaymentForPaymentHandlerResponse"], function(a) {
                Nc = a.data.canMakePaymentForPaymentHandlerResponse
            })
        },
        Qc = function(a, b, c, d) {
            function e(f) {
                var g;
                a: {
                    for (g = 0; g < c.length; g++)
                        if (f.data[c[g]]) {
                            g = !0;
                            break a
                        } g = !1
                }
                g && (d(f), window.removeEventListener("message", e))
            }
            window.addEventListener("message", e);
            a = Object.assign({
                eventType: b
            }, a);
            P(a)
        },
        P = function(a) {
            if (Oc && Jc) {
                a = Object.assign({
                    buyFlowActivityMode: Mc,
                    googleTransactionId: Kc,
                    originTimeMs: Lc
                }, a);
                if ("CANARY" == O) var b = "https://ibfe-canary.corp.google.com";
                else b = "https://pay", "SANDBOX" == O ? b += ".sandbox" : "PREPROD" == O && (b += "-preprod.sandbox"), b += ".google.com";
                Jc.postMessage(a, b)
            } else Pc.push(a)
        },
        Sc = function() {
            Oc = !0;
            Pc.forEach(function(a) {
                P(a)
            });
            Pc.length = 0
        };
    (function() {
        if (!N) {
            var a = window.gpayInitParams || {};
            O = a.environment || "PRODUCTION";
            N = document.createElement("iframe");
            Ib(N, sb(z(("CANARY" == O ? "https://ibfe-canary.corp" : "https://pay") + ("PREPROD" == O ? "-preprod.sandbox" : "SANDBOX" == O ? ".sandbox" : "") + ".google.com/gp/p/ui/payframe?origin=%{windowOrigin}&mid=%{merchantId}"), {
                windowOrigin: window.location.origin,
                merchantId: a.merchantInfo && a.merchantInfo.merchantId || ""
            }));
            P({
                eventType: 15,
                clientLatencyStartMs: Date.now()
            });
            Rc();
            N.height = "0";
            N.width = "0";
            N.style.display =
                "none";
            N.style.visibility = "hidden";
            N.setAttribute("allowpaymentrequest", !0);
            N.onload = function() {
                Jc = new Hc;
                P({
                    eventType: 17,
                    clientLatencyStartMs: Date.now()
                });
                P({
                    eventType: 16,
                    clientLatencyStartMs: Date.now()
                });
                Sc()
            };
            document.body ? document.body.appendChild(N) : document.addEventListener("DOMContentLoaded", function() {
                document.body.appendChild(N)
            })
        }
    })();
    var Tc = function() {},
        Uc = function(a, b) {
            return new Promise(function(c, d) {
                setTimeout(function() {
                    d({
                        reason: "OTHER_ERROR",
                        intent: a,
                        message: "REQUEST_TIMEOUT"
                    })
                }, b)
            })
        },
        Vc = function(a, b) {
            return {
                error: {
                    reason: a.reason || "OTHER_ERROR",
                    intent: a.intent || b,
                    message: a.message
                }
            }
        },
        Wc = function(a, b, c) {
            B({
                ga: "loadPaymentData",
                errorMessage: "An error occurred in call back, please try to avoid this by setting structured error in callback response"
            });
            a && P({
                eventType: b,
                merchantCallbackInfo: {
                    callbackTrigger: c || 0
                }
            })
        };
    Tc.prototype.Pb = function(a, b) {
        return {
            modifiers: [{
                supportedMethods: ["https://google.com/pay"],
                data: b
            }]
        }
    };
    Tc.prototype.Ua = function(a, b) {
        return {
            type: a,
            data: b
        }
    };
    var Xc = function(a, b, c, d) {
            return Promise.resolve(Promise.race([Uc("PAYMENT_AUTHORIZATION", c), b.onPaymentAuthorized(a)])).then(function(e) {
                return d("paymentAuthorizationResponse", e)
            }, function(e) {
                Wc("REQUEST_TIMEOUT" === e.message, 27, 2);
                return d("paymentAuthorizationResponse", Vc(e, "PAYMENT_AUTHORIZATION"))
            })
        },
        Yc = function(a, b, c, d) {
            return Promise.resolve(Promise.race([Uc(a.callbackTrigger in za ? za[a.callbackTrigger] : "UNKNOWN_INTENT", c), b.onPaymentDataChanged(a)])).then(function(e) {
                return d("paymentDataCallbackResponse",
                    e)
            }, function(e) {
                Wc("REQUEST_TIMEOUT" === e.message, 26, Ic[a.callbackTrigger]);
                return d("paymentDataCallbackResponse", Vc(e, a.callbackTrigger || "UNKNOWN_INTENT"))
            })
        };
    var $c = function() {
        var a = window.document,
            b = this;
        this.Jb = a;
        this.T = a.createElement("gpay-graypane");
        Zc(this.T, {
            "z-index": 2147483647,
            display: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            "background-color": "rgba(32, 33, 36, .6)"
        });
        this.Xa = null;
        this.T.addEventListener("click", function() {
            if (b.Xa) try {
                b.Xa.focus()
            } catch (c) {}
        })
    };
    $c.prototype.show = function(a) {
        this.Xa = a || null;
        this.Jb.body.appendChild(this.T);
        Zc(this.T, {
            display: "block",
            opacity: 0
        });
        return ad(this.T, {
            opacity: 1
        })
    };
    var bd = function(a) {
        a.Xa = null;
        a.T.parentElement && ad(a.T, {
            opacity: 0
        }).then(function() {
            Zc(a.T, {
                display: "none"
            });
            a.Jb.body.removeChild(a.T)
        })
    };

    function Zc(a, b) {
        for (var c in b) a.style.setProperty(c, b[c].toString(), "important")
    }

    function ad(a, b) {
        var c = a.ownerDocument.defaultView,
            d = a.style.transition || "";
        return (new Promise(function(e) {
            c.setTimeout(function() {
                c.setTimeout(e, 300);
                Zc(a, Object.assign({
                    transition: "transform 300ms ease-out, opacity 300ms ease-out"
                }, b))
            })
        })).then(function() {
            Zc(a, Object.assign({
                transition: d
            }, b))
        })
    };
    var cd = function(a) {
        this.u = a;
        this.ob = this.pb = this.B = this.ha = null;
        this.la = 3E4
    };
    k = cd.prototype;
    k.tb = function(a) {
        this.B = a
    };
    k.Fa = function(a) {
        this.ha = a
    };
    k.F = function(a) {
        var b = dd(a);
        return new Promise(function(c) {
            (void 0 != b.hasEnrolledInstrument ? b.hasEnrolledInstrument() : b.canMakePayment()).then(function(d) {
                window.sessionStorage.setItem("google.payments.api.storage.isreadytopay.result", d.toString());
                var e = {
                    result: d
                };
                2 <= a.apiVersion && a.existingPaymentMethodRequired && (e.paymentMethodPresent = d);
                c(e)
            }).catch(function() {
                window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result") ? c({
                        result: "true" == window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result")
                    }) :
                    c({
                        result: !1
                    })
            })
        })
    };
    k.R = function(a) {
        dd(a, this.u, a.transactionInfo.currencyCode, a.transactionInfo.totalPrice)
    };
    k.V = function(a) {
        ed(this, a)
    };
    var dd = function(a, b, c, d) {
            var e = {};
            a && (e = JSON.parse(JSON.stringify(a)));
            e.apiVersion || (e.apiVersion = 1);
            e.swg && (e.allowedPaymentMethods = ["CARD"]);
            b && "TEST" == b && (e.environment = b);
            return new PaymentRequest([{
                supportedMethods: ["https://google.com/pay"],
                data: e
            }], {
                total: {
                    label: "Estimated Total Price",
                    amount: {
                        currency: c || "USD",
                        value: d || "0"
                    }
                }
            })
        },
        ed = function(a, b) {
            b = dd(b, a.u, b.transactionInfo && b.transactionInfo.currencyCode || void 0, b.transactionInfo && b.transactionInfo.totalPrice || void 0);
            b.onpaymentmethodchange =
                function(c) {
                    var d = new Tc;
                    d = c.methodDetails.callbackTrigger ? Yc(c.methodDetails, a.B, a.la, d.Pb) : Xc(c.methodDetails, a.B, a.la, d.Pb);
                    c.updateWith(d)
                };
            a.ha(b.show().then(function(c) {
                google.payments.api.LogInternally && console.log("payment response", c);
                c.complete("success");
                return c.details.statusCode ? (google.payments.api.LogInternally && console.log("status code", c.details.ld), {
                    error: c.details
                }) : c.details
            }).catch(function(c) {
                google.payments.api.LogInternally && console.log("payment response with err", c);
                c.statusCode =
                    "CANCELED";
                throw c;
            }))
        };
    var fd = ["SHIPPING_ADDRESS", "SHIPPING_OPTION"];

    function gd(a) {
        if (2 <= a.apiVersion) {
            var b = hd(a);
            if (b && 1 == b.length && "CRYPTOGRAM_3DS" == b[0]) return !0
        }
        return 1 == a.allowedPaymentMethods.length && "TOKENIZED_CARD" == a.allowedPaymentMethods[0]
    }

    function id(a, b) {
        return 2 <= a.apiVersion && (a = hd(a)) && a.includes(b) ? !0 : !1
    }

    function jd() {
        var a = window.location.hostname,
            b = a.length - 11;
        return 0 <= b && a.indexOf(".google.com", b) == b || void 0 === window.isSecureContext ? null : window.isSecureContext ? null : "Google Pay APIs should be called in secure context!"
    }

    function kd(a) {
        if (a.environment && !Object.values(Aa).includes(a.environment)) throw Error("Parameter environment in PaymentsClientOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST.");
    }

    function ld(a) {
        if (!a) return "isReadyToPayRequest must be set!";
        if (md(a)) return "UPI not supported";
        if (2 <= a.apiVersion) {
            if (!("apiVersionMinor" in a)) return "apiVersionMinor must be set!";
            if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length) return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
            for (var b = 0; b < a.allowedPaymentMethods.length; b++) {
                var c = a.allowedPaymentMethods[b];
                if ("CARD" == c.type) {
                    if (!c.parameters) return "Field parameters must be setup in each allowedPaymentMethod";
                    var d = c.parameters.allowedCardNetworks;
                    if (!d || !Array.isArray(d) || 0 == d.length) return "allowedCardNetworks must be setup in parameters for type CARD";
                    c = c.parameters.allowedAuthMethods;
                    if (!c || !Array.isArray(c) || 0 == c.length || !c.every(nd)) return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'"
                }
            }
        } else if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length || !a.allowedPaymentMethods.every(od)) return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
        return null
    }

    function od(a) {
        return Object.values(Ba).includes(a)
    }

    function nd(a) {
        return Object.values(Ca).includes(a)
    }

    function pd(a) {
        if (!a) return "paymentDataRequest must be set!";
        if (md(a)) return "UPI not supported";
        if (a.swg) return (a = a.swg) ? a.skuId && a.publicationId ? null : "Both skuId and publicationId must be provided" : "Swg parameters must be provided";
        if (a.transactionInfo)
            if (a.transactionInfo.currencyCode) {
                if (!a.transactionInfo.totalPriceStatus || !Object.values(Da).includes(a.transactionInfo.totalPriceStatus)) return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
                if ("NOT_CURRENTLY_KNOWN" !==
                    a.transactionInfo.totalPriceStatus && !a.transactionInfo.totalPrice) return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!"
            } else return "currencyCode in transactionInfo must be set!";
        else return "transactionInfo must be set!";
        var b = md(a);
        if (b) {
            if (!b.parameters) return "parameters must be set in allowedPaymentMethod!";
            b = b.parameters;
            if (b.payeeVpa)
                if (b.payeeName)
                    if (b.referenceUrl) {
                        if (!b.mcc) return "mcc in allowedPaymentMethod parameters must be set!";
                        if (!b.transactionReferenceId) return "transactionReferenceId in allowedPaymentMethod parameters must be set!"
                    } else return "referenceUrl in allowedPaymentMethod parameters must be set!";
            else return "payeeName in allowedPaymentMethod parameters must be set!";
            else return "payeeVpa in allowedPaymentMethod parameters must be set!";
            if ("INR" !== a.transactionInfo.currencyCode) return "currencyCode in transactionInfo must be set to INR!";
            if ("FINAL" !== a.transactionInfo.totalPriceStatus) return "totalPriceStatus in transactionInfo must be set to FINAL!";
            if (!a.transactionInfo.transactionNote) return "transactionNote in transactionInfo must be set!"
        }
        return null
    }

    function md(a) {
        return 2 > a.apiVersion || !a.allowedPaymentMethods ? null : qd(a, "UPI")
    }

    function rd(a, b) {
        if (a.callbackIntents && !b) return "paymentDataCallbacks must be set";
        if (a.callbackIntents.includes("PAYMENT_AUTHORIZATION") !== !!b.onPaymentAuthorized) return "Both PAYMENT_AUTHORIZATION intent and onPaymentAuthorized must be set";
        var c = fd.slice();
        google.payments.api.EnableOfferCallback && c.push("OFFER");
        google.payments.api.EnablePaymentMethodCallback && c.push("PAYMENT_METHOD");
        return !!c.filter(function(d) {
                return a.callbackIntents.includes(d)
            }).length !== !!b.onPaymentDataChanged ? "onPaymentDataChanged callback must be set if any of " +
            (c + " callback intent is set.") : null
    }

    function hd(a) {
        return a.allowedPaymentMethods && (a = qd(a, "CARD")) && a.parameters ? a.parameters.allowedAuthMethods : null
    }

    function qd(a, b) {
        for (var c = 0; c < a.allowedPaymentMethods.length; c++) {
            var d = a.allowedPaymentMethods[c];
            if (d.type == b) return d
        }
        return null
    };
    var td = function(a, b) {
            var c = sd.transition;
            if (!c) {
                var d = Kb();
                c = d;
                void 0 === a.style[d] && (d = (Qb ? "Webkit" : Pb ? "Moz" : H ? "ms" : Nb ? "O" : null) + Lb(d), void 0 !== a.style[d] && (c = d));
                sd.transition = c
            }
            c && (a.style[c] = b)
        },
        sd = {};
    var ud = function(a, b) {
        Array.isArray(b) || (b = [b]);
        v(0 < b.length, "At least one Css3Property should be specified.");
        b = Va(b, function(c) {
            if ("string" === typeof c) return c;
            wa(c, "Expected css3 property to be an object.");
            var d = c.tc + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
            v(c.tc && "number" === typeof c.duration && c.timing && "number" === typeof c.delay, "Unexpected css3 property value: %s", d);
            return d
        });
        td(a, b.join(","))
    };
    var vd = function() {
        this.Ra = this.Ra;
        this.Wa = this.Wa
    };
    vd.prototype.Ra = !1;
    vd.prototype.dispose = function() {
        this.Ra || (this.Ra = !0, this.ya())
    };
    vd.prototype.ya = function() {
        if (this.Wa)
            for (; this.Wa.length;) this.Wa.shift()()
    };
    var Q = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.ka = !1
    };
    Q.prototype.stopPropagation = function() {
        this.ka = !0
    };
    Q.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var wd = Object.freeze || function(a) {
        return a
    };
    var xd;
    (xd = !H) || (xd = 9 <= Number($b));
    var yd = xd,
        zd;
    if (zd = H) {
        var Ad;
        if (Object.prototype.hasOwnProperty.call(Xb, "9")) Ad = Xb["9"];
        else {
            for (var Bd = 0, Cd = Xa(String(Wb)).split("."), Dd = Xa("9").split("."), Ed = Math.max(Cd.length, Dd.length), Fd = 0; 0 == Bd && Fd < Ed; Fd++) {
                var Gd = Cd[Fd] || "",
                    Hd = Dd[Fd] || "";
                do {
                    var Id = /(\d*)(\D*)(.*)/.exec(Gd) || ["", "", "", ""],
                        Jd = /(\d*)(\D*)(.*)/.exec(Hd) || ["", "", "", ""];
                    if (0 == Id[0].length && 0 == Jd[0].length) break;
                    Bd = eb(0 == Id[1].length ? 0 : parseInt(Id[1], 10), 0 == Jd[1].length ? 0 : parseInt(Jd[1], 10)) || eb(0 == Id[2].length, 0 == Jd[2].length) || eb(Id[2], Jd[2]);
                    Gd = Id[3];
                    Hd = Jd[3]
                } while (0 == Bd)
            }
            Ad = Xb["9"] = 0 <= Bd
        }
        zd = !Ad
    }
    var Kd = zd,
        Ld = function() {
            if (!r.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                r.addEventListener("test", ja, b), r.removeEventListener("test", ja, b)
            } catch (c) {}
            return a
        }();
    var R = function(a, b) {
        Q.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.za = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget =
                b;
            if (b = a.relatedTarget) {
                if (Pb) {
                    a: {
                        try {
                            Mb(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = Qb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Qb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
                this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Md[a.pointerType] || "";
            this.state = a.state;
            this.za = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    oa(R, Q);
    var Md = wd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    R.prototype.stopPropagation = function() {
        R.ab.stopPropagation.call(this);
        this.za.stopPropagation ? this.za.stopPropagation() : this.za.cancelBubble = !0
    };
    R.prototype.preventDefault = function() {
        R.ab.preventDefault.call(this);
        var a = this.za;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Kd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Nd = "closure_listenable_" + (1E6 * Math.random() | 0),
        Od = 0;
    var Pd = function(a, b, c, d, e) {
            this.listener = a;
            this.Ya = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Sa = e;
            this.key = ++Od;
            this.ta = this.Pa = !1
        },
        Qd = function(a) {
            a.ta = !0;
            a.listener = null;
            a.Ya = null;
            a.src = null;
            a.Sa = null
        };
    var S = function(a) {
        this.src = a;
        this.A = {};
        this.Ka = 0
    };
    S.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.A[f];
        a || (a = this.A[f] = [], this.Ka++);
        var g = Rd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Pa = !1)) : (b = new Pd(b, this.src, f, !!d, e), b.Pa = c, a.push(b));
        return b
    };
    S.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.A)) return !1;
        var e = this.A[a];
        b = Rd(e, b, c, d);
        return -1 < b ? (Qd(e[b]), v(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.A[a], this.Ka--), !0) : !1
    };
    var Sd = function(a, b) {
        var c = b.type;
        if (c in a.A) {
            var d = a.A[c],
                e = Ta(d, b),
                f;
            if (f = 0 <= e) v(null != d.length), Array.prototype.splice.call(d, e, 1);
            f && (Qd(b), 0 == a.A[c].length && (delete a.A[c], a.Ka--))
        }
    };
    S.prototype.ib = function(a, b, c, d) {
        a = this.A[a.toString()];
        var e = -1;
        a && (e = Rd(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    S.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return hb(this.A, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var Rd = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ta && f.listener == b && f.capture == !!c && f.Sa == d) return e
        }
        return -1
    };
    var Td = "closure_lm_" + (1E6 * Math.random() | 0),
        Ud = {},
        Vd = 0,
        Xd = function(a, b, c, d, e) {
            if (d && d.once) Wd(a, b, c, d, e);
            else if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Xd(a, b[f], c, d, e);
            else c = Yd(c), a && a[Nd] ? (d = u(d) ? !!d.capture : !!d, Zd(a), a.K.add(String(b), c, !1, d, e)) : $d(a, b, c, !1, d, e)
        },
        $d = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = u(e) ? !!e.capture : !!e,
                h = ae(a);
            h || (a[Td] = h = new S(a));
            c = h.add(b, c, d, g, f);
            if (!c.Ya) {
                d = be();
                c.Ya = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) Ld || (e = g), void 0 === e &&
                    (e = !1), a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent) a.attachEvent(ce(b.toString()), d);
                else if (a.addListener && a.removeListener) v("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Vd++
            }
        },
        be = function() {
            var a = de,
                b = yd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Wd = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Wd(a,
                    b[f], c, d, e);
            else c = Yd(c), a && a[Nd] ? a.K.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : $d(a, b, c, !0, d, e)
        },
        ee = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) ee(a, b[f], c, d, e);
            else d = u(d) ? !!d.capture : !!d, c = Yd(c), a && a[Nd] ? a.K.remove(String(b), c, d, e) : a && (a = ae(a)) && (b = a.ib(b, c, d, e)) && fe(b)
        },
        fe = function(a) {
            if ("number" !== typeof a && a && !a.ta) {
                var b = a.src;
                if (b && b[Nd]) Sd(b.K, a);
                else {
                    var c = a.type,
                        d = a.Ya;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ce(c), d) :
                        b.addListener && b.removeListener && b.removeListener(d);
                    Vd--;
                    (c = ae(b)) ? (Sd(c, a), 0 == c.Ka && (c.src = null, b[Td] = null)) : Qd(a)
                }
            }
        },
        ce = function(a) {
            return a in Ud ? Ud[a] : Ud[a] = "on" + a
        },
        he = function(a, b, c, d) {
            var e = !0;
            if (a = ae(a))
                if (b = a.A[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.ta && (f = ge(f, d), e = e && !1 !== f)
                    }
            return e
        },
        ge = function(a, b) {
            var c = a.listener,
                d = a.Sa || a.src;
            a.Pa && fe(a);
            return c.call(d, b)
        },
        de = function(a, b) {
            if (a.ta) return !0;
            if (!yd) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c =
                            r, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        } b = c
                }
                d = b;
                b = new R(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.ka && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = he(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.ka && e < d.length; e++) b.currentTarget = d[e],
                    f = he(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return ge(a, new R(b, this))
        },
        ae = function(a) {
            a = a[Td];
            return a instanceof S ? a : null
        },
        ie = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Yd = function(a) {
            v(a, "Listener can not be null.");
            if ("function" === typeof a) return a;
            v(a.handleEvent, "An object listener must have handleEvent method.");
            a[ie] || (a[ie] = function(b) {
                return a.handleEvent(b)
            });
            return a[ie]
        };
    var T = function() {
        vd.call(this);
        this.K = new S(this);
        this.cc = this;
        this.nb = null
    };
    oa(T, vd);
    T.prototype[Nd] = !0;
    T.prototype.addEventListener = function(a, b, c, d) {
        Xd(this, a, b, c, d)
    };
    T.prototype.removeEventListener = function(a, b, c, d) {
        ee(this, a, b, c, d)
    };
    T.prototype.dispatchEvent = function(a) {
        Zd(this);
        var b = this.nb;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.nb) c.push(b), v(1E3 > ++d, "infinite loop")
        }
        b = this.cc;
        d = a.type || a;
        if ("string" === typeof a) a = new Q(a, b);
        else if (a instanceof Q) a.target = a.target || b;
        else {
            var e = a;
            a = new Q(d, b);
            jb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.ka && 0 <= f; f--) {
                var g = a.currentTarget = c[f];
                e = je(g, d, !0, a) && e
            }
        a.ka || (g = a.currentTarget = b, e = je(g, d, !0, a) && e, a.ka || (e = je(g, d, !1, a) && e));
        if (c)
            for (f = 0; !a.ka && f < c.length; f++) g = a.currentTarget = c[f], e = je(g, d,
                !1, a) && e;
        return e
    };
    T.prototype.ya = function() {
        T.ab.ya.call(this);
        if (this.K) {
            var a = this.K,
                b = 0,
                c;
            for (c in a.A) {
                for (var d = a.A[c], e = 0; e < d.length; e++) ++b, Qd(d[e]);
                delete a.A[c];
                a.Ka--
            }
        }
        this.nb = null
    };
    var je = function(a, b, c, d) {
        b = a.K.A[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ta && g.capture == c) {
                var h = g.listener,
                    l = g.Sa || g.src;
                g.Pa && Sd(a.K, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    T.prototype.ib = function(a, b, c, d) {
        return this.K.ib(String(a), b, c, d)
    };
    T.prototype.hasListener = function(a, b) {
        return this.K.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var Zd = function(a) {
        v(a.K, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ke = function(a, b) {
        T.call(this);
        this.Ta = a || 1;
        this.Ja = b || r;
        this.Hb = na(this.Dc, this);
        this.Nb = Date.now()
    };
    oa(ke, T);
    k = ke.prototype;
    k.enabled = !1;
    k.M = null;
    k.setInterval = function(a) {
        this.Ta = a;
        this.M && this.enabled ? (this.stop(), this.start()) : this.M && this.stop()
    };
    k.Dc = function() {
        if (this.enabled) {
            var a = Date.now() - this.Nb;
            0 < a && a < .8 * this.Ta ? this.M = this.Ja.setTimeout(this.Hb, this.Ta - a) : (this.M && (this.Ja.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.enabled = !0;
        this.M || (this.M = this.Ja.setTimeout(this.Hb, this.Ta), this.Nb = Date.now())
    };
    k.stop = function() {
        this.enabled = !1;
        this.M && (this.Ja.clearTimeout(this.M), this.M = null)
    };
    k.ya = function() {
        ke.ab.ya.call(this);
        this.stop();
        delete this.Ja
    };
    /*

     Copyright 2017 The Web Activities Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var le = function(a, b, c, d, e, f) {
        this.code = a;
        this.data = "ok" == a ? b : null;
        this.mode = c;
        this.origin = d;
        this.mb = e;
        this.zc = f;
        this.ok = "ok" == a;
        this.error = "failed" == a ? Error(String(b) || "") : null
    };

    function me(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substring(0, b)
    }

    function ne(a) {
        return a ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(b, c) {
            var d = c.split("=");
            c = decodeURIComponent(d[0] || "");
            d = decodeURIComponent(d[1] || "");
            c && (b[c] = d);
            return b
        }, {}) : {}
    }

    function oe(a) {
        var b = {
            requestId: a.requestId,
            returnUrl: a.Wb,
            args: a.dc
        };
        void 0 !== a.origin && (b.origin = a.origin);
        void 0 !== a.mb && (b.originVerified = a.mb);
        return JSON.stringify(b)
    }

    function pe(a, b, c) {
        if (b.ok) c(b);
        else {
            var d;
            if (!(d = b.error)) {
                d = null;
                if ("function" == typeof a.DOMException) {
                    a = a.DOMException;
                    try {
                        d = new a("AbortError", "AbortError")
                    } catch (e) {}
                }
                d || (d = Error("AbortError"), d.name = "AbortError", d.code = 20)
            }
            a = d;
            a.gd = b;
            c(Promise.reject(a))
        }
    }

    function qe(a) {
        a = a.navigator;
        return /Trident|MSIE|IEMobile/i.test(a && a.userAgent)
    }

    function re(a) {
        setTimeout(function() {
            throw a;
        })
    }
    var U = function(a, b, c) {
        this.g = a;
        this.Ab = b;
        this.C = c;
        this.vc = !0;
        this.Bb = null;
        this.Cb = !1;
        this.Y = this.Va = this.$ = this.h = null;
        this.Gb = this.mc.bind(this)
    };
    U.prototype.connect = function(a) {
        if (this.$) throw Error("already connected");
        this.$ = a;
        this.g.addEventListener("message", this.Gb)
    };
    U.prototype.disconnect = function() {
        if (this.$ && (this.$ = null, this.h && (se(this.h), this.h = null), this.g.removeEventListener("message", this.Gb), this.Y)) {
            for (var a in this.Y) {
                var b = this.Y[a];
                b.port1 && se(b.port1);
                b.port2 && se(b.port2)
            }
            this.Y = null
        }
    };
    U.prototype.isConnected = function() {
        return null != this.C
    };
    var te = function(a) {
            a.$ && !a.Bb && (a.Bb = "function" == typeof a.Ab ? a.Ab() : a.Ab);
            return a.Bb
        },
        ue = function(a) {
            if (null == a.C) throw Error("not connected");
            return a.C
        },
        we = function(a, b) {
            var c = null;
            a.Cb && "function" == typeof a.g.MessageChannel && (c = new a.g.MessageChannel);
            c ? (V(a, "start", b, [c.port2]), ve(a, c.port1)) : V(a, "start", b)
        },
        V = function(a, b, c, d) {
            c = {
                sentinel: "__ACTIVITIES__",
                cmd: b,
                payload: c || null
            };
            if (a.h) a.h.postMessage(c, d || void 0);
            else {
                var e = te(a);
                if (!e) throw Error("not connected");
                a = "connect" == b ? null != a.C ? a.C :
                    "*" : ue(a);
                e.postMessage(c, a, d || void 0)
            }
        },
        xe = function(a, b) {
            a.Y || (a.Y = {});
            var c = a.Y[b];
            if (!c) {
                var d;
                c = new Promise(function(e) {
                    d = e
                });
                c = {
                    port1: null,
                    port2: null,
                    Vb: d,
                    promise: c
                };
                a.Y[b] = c
            }
            return c
        },
        ve = function(a, b) {
            a.h && se(a.h);
            a.h = b;
            a.h.onmessage = function(c) {
                var d = c.data,
                    e = d && d.cmd;
                d = d && d.payload || null;
                e && a.ra(e, d, c)
            }
        };
    U.prototype.mc = function(a) {
        if (!this.vc || te(this) == a.source) {
            var b = a.data;
            if (b && "__ACTIVITIES__" == b.sentinel) {
                var c = b.cmd;
                if (!this.h || "connect" == c || "start" == c) {
                    var d = a.origin;
                    b = b.payload || null;
                    null == this.C && "start" == c && (this.C = d);
                    null == this.C && a.source && te(this) == a.source && (this.C = d);
                    d == this.C && this.ra(c, b, a)
                }
            }
        }
    };
    U.prototype.ra = function(a, b, c) {
        "connect" == a ? (this.h && (se(this.h), this.h = null), this.Cb = b && b.acceptsChannel || !1, this.$(a, b)) : "start" == a ? ((c = c.ports && c.ports[0]) && ve(this, c), this.$(a, b)) : "msg" == a ? null != this.Va && null != b && this.Va(b) : "cnget" == a ? (b = b.name || "", a = xe(this, b), a.port1 || (c = new this.g.MessageChannel, a.port1 = c.port1, a.port2 = c.port2, a.Vb(a.port1)), a.port2 && (V(this, "cnset", {
            name: b
        }, [a.port2]), a.port2 = null)) : "cnset" == a ? (a = c.ports[0], b = xe(this, b.name), b.port1 = a, b.Vb(a)) : this.$(a, b)
    };

    function se(a) {
        try {
            a.close()
        } catch (b) {}
    }
    var ye = function(a, b, c) {
        var d = this;
        this.Ca = a;
        this.cb = b;
        this.Na = c || null;
        this.g = this.Ca.ownerDocument.defaultView;
        this.C = jc(ob(b).toString());
        this.wa = null;
        this.gb = new Promise(function(e) {
            d.wa = e
        });
        this.Za = null;
        new Promise(function(e) {
            d.Za = e
        });
        this.J = null;
        this.$a = new Promise(function(e) {
            d.J = e
        });
        this.Ub = this.Qb = null;
        this.m = new U(this.g, function() {
            return d.Ca.contentWindow
        }, this.C)
    };
    k = ye.prototype;
    k.connect = function() {
        var a = this.Ca;
        if ("isConnected" in a) a = a.isConnected;
        else {
            var b = a.ownerDocument && a.ownerDocument.documentElement;
            a = b && b.contains(a) || !1
        }
        if (!a) throw Error("iframe must be in DOM");
        this.m.connect(this.ra.bind(this));
        Ib(this.Ca, this.cb);
        return this.gb
    };
    k.disconnect = function() {
        this.m.disconnect()
    };
    k.Ma = function() {
        return this.$a
    };
    k.jb = function() {
        return this.Ca.contentWindow || null
    };
    k.message = function(a) {
        V(this.m, "msg", a)
    };
    k.onMessage = function(a) {
        this.m.Va = a
    };
    k.ra = function(a, b) {
        "connect" == a ? (we(this.m, this.Na), this.wa()) : "result" == a ? this.J && (a = b.code, b = new le(a, "failed" == a ? Error(b.data || "") : b.data, "iframe", ue(this.m), !0, !0), pe(this.g, b, this.J), this.J = null, V(this.m, "close"), this.disconnect()) : "ready" == a ? this.Za && (this.Za(), this.Za = null) : "resize" == a && (this.Ub = b.height, this.Qb && this.Qb(this.Ub))
    };
    var ze = function(a, b, c, d, e, f) {
        var g = this,
            h = d && y(d);
        if (!h || "_blank" != h && "_top" != h && "_" == h[0]) throw Error('The only allowed targets are "_blank", "_top" and name targets');
        this.g = a;
        this.uc = b;
        this.cb = c;
        this.rc = d;
        this.Na = e || null;
        this.ia = f || {};
        this.wa = null;
        this.gb = new Promise(function(l) {
            g.wa = l
        });
        this.J = null;
        this.$a = new Promise(function(l) {
            g.J = l
        });
        this.m = this.U = this.ea = null
    };
    k = ze.prototype;
    k.open = function() {
        return Ae(this)
    };
    k.disconnect = function() {
        this.U && (this.U.stop(), this.U = null);
        this.m && (this.m.disconnect(), this.m = null);
        if (this.ea) {
            try {
                this.ea.close()
            } catch (a) {}
            this.ea = null
        }
        this.J = null
    };
    k.jb = function() {
        return this.ea
    };
    k.Ma = function() {
        return this.$a
    };
    k.message = function(a) {
        V(this.m, "msg", a)
    };
    k.onMessage = function(a) {
        this.m.Va = a
    };
    var Ae = function(a) {
            var b = Be(a),
                c = a.cb;
            if (!a.ia.kd) {
                var d = oe({
                    requestId: a.uc,
                    Wb: a.ia.Wb || me(a.g.location.href),
                    dc: a.Na
                });
                c = c + (-1 == c.indexOf("#") ? "#" : "&") + encodeURIComponent("__WA__") + "=" + encodeURIComponent(d)
            }
            d = a.rc;
            "_top" != y(d) && qe(a.g) && (d = z("_top"));
            try {
                var e = Jb(c, a.g, d, b)
            } catch (f) {}
            if (!e && "_top" != y(d) && !a.ia.jd) {
                d = z("_top");
                try {
                    e = Jb(c, a.g, d)
                } catch (f) {}
            }
            e ? (a.ea = e, "_top" != y(d) && Ce(a)) : De(a, Error("failed to open window"));
            return a.$a.catch(function() {})
        },
        Be = function(a) {
            var b = a.g.screen,
                c = b.availWidth ||
                b.width,
                d = b.availHeight || b.height,
                e = a.g == a.g.top;
            var f = a.g.navigator;
            f = /Edge/i.test(f && f.userAgent);
            c = Math.max(c - (e && a.g.outerWidth > a.g.innerWidth ? Math.min(100, a.g.outerWidth - a.g.innerWidth) : f ? 100 : 0), .5 * c);
            var g = Math.max(d - (e && a.g.outerHeight > a.g.innerHeight ? Math.min(100, a.g.outerHeight - a.g.innerHeight) : f ? 100 : 0), .5 * d);
            d = Math.floor(Math.min(600, .9 * c));
            e = Math.floor(Math.min(600, .9 * g));
            a.ia.width && (d = Math.min(a.ia.width, c));
            a.ia.height && (e = Math.min(a.ia.height, g));
            a = Math.floor((b.width - d) / 2);
            b = Math.floor((b.height -
                e) / 2);
            c = {
                height: e,
                width: d,
                resizable: "yes",
                scrollbars: "yes"
            };
            f || (c.left = a, c.top = b);
            f = "";
            for (var h in c) f && (f += ","), f += h + "=" + c[h];
            return f
        },
        Ce = function(a) {
            a.U = new ke(500);
            a.U.addEventListener("tick", function() {
                Ee(a, !0)
            });
            a.U.start();
            a.m = new U(a.g, a.ea, null);
            a.m.connect(a.ra.bind(a))
        },
        Ee = function(a, b) {
            if (!a.ea || a.ea.closed) a.U && (a.U.stop(), a.U = null), a.g.setTimeout(function() {
                try {
                    a.aa("canceled", null)
                } catch (c) {
                    De(a, c)
                }
            }, b ? 3E3 : 0)
        },
        De = function(a, b) {
            a.J && a.J(Promise.reject(b));
            a.disconnect()
        };
    ze.prototype.aa = function(a, b) {
        if (this.J) {
            var c = this.m.isConnected();
            a = new le(a, b, "popup", c ? ue(this.m) : jc(this.cb), c, c);
            pe(this.g, a, this.J);
            this.J = null
        }
        this.m && V(this.m, "close");
        this.disconnect()
    };
    ze.prototype.ra = function(a, b) {
        var c = this;
        "connect" == a ? (we(this.m, this.Na), this.wa()) : "result" == a ? (a = b.code, this.aa(a, "failed" == a ? Error(b.data || "") : b.data)) : "check" == a && this.g.setTimeout(function() {
            return Ee(c)
        }, 200)
    };
    var Fe = function(a, b, c, d, e) {
        this.g = a;
        this.hc = b;
        this.ic = c;
        this.C = d;
        this.Cc = e
    };
    Fe.prototype.Ma = function() {
        var a = this,
            b = new le(this.hc, this.ic, "redirect", this.C, this.Cc, !1);
        return new Promise(function(c) {
            pe(a.g, b, c)
        })
    };
    var Ge = function() {
            var a = window,
                b = this;
            this.version = "1.23";
            this.g = a;
            this.N = a.location.hash;
            this.vb = {};
            this.wb = {};
            this.Sb = null;
            new Promise(function(c) {
                b.Sb = c
            })
        },
        He = function(a, b, c) {
            var d = new ye(a, b, c);
            return d.connect().then(function() {
                return d
            })
        };
    Ge.prototype.open = function(a, b, c, d, e) {
        return {
            md: Ie(this, a, b, c, d, e).jb()
        }
    };
    var Je = function(a, b, c, d, e) {
        var f = Ie(a, "GPAY", b, c, d, e);
        return f.gb.then(function() {
            return f
        })
    };
    Ge.prototype.Fa = function(a, b) {
        var c = this.vb[a];
        c || (c = [], this.vb[a] = c);
        c.push(b);
        c = this.wb[a];
        if (!c && this.N) {
            try {
                var d = this.g,
                    e = ne(this.N).__WA_RES__;
                if (e) {
                    var f = JSON.parse(e);
                    if (f && f.requestId == a) {
                        var g = d.location.hash;
                        if (g) {
                            var h = encodeURIComponent("__WA_RES__") + "=";
                            e = -1;
                            do
                                if (e = g.indexOf(h, e), -1 != e) {
                                    var l = 0 < e ? g.substring(e - 1, e) : "";
                                    if ("" == l || "?" == l || "#" == l || "&" == l) {
                                        var m = g.indexOf("&", e + 1); - 1 == m && (m = g.length);
                                        g = g.substring(0, e) + g.substring(m + 1)
                                    } else e++
                                } while (-1 != e && e < g.length)
                        }
                        var q = g;
                        q = q || "";
                        if (q !=
                            d.location.hash && d.history && d.history.replaceState) try {
                            d.history.replaceState(d.history.state, "", q)
                        } catch (L) {}
                        var F = f.code,
                            x = f.data,
                            D = f.origin,
                            ha = d.document.referrer && jc(d.document.referrer);
                        c = new Fe(d, F, x, D, D == ha)
                    } else c = null
                } else c = null
            } catch (L) {
                re(L), this.Sb(L)
            }
            c && (this.wb[a] = c)
        }(a = c) && Ke(a, b)
    };
    var Ie = function(a, b, c, d, e, f) {
            var g = new ze(a.g, b, c, d, e, f);
            g.open().then(function() {
                Le(a, b, g)
            });
            return g
        },
        Ke = function(a, b) {
            Promise.resolve().then(function() {
                b(a)
            })
        },
        Le = function(a, b, c) {
            var d = a.vb[b];
            d && d.forEach(function(e) {
                Ke(c, e)
            });
            a.wb[b] = c
        };
    var W = function(a, b, c, d) {
        this.u = a;
        this.eb = b || !1;
        this.Db = c || new Ge;
        this.Lb = new $c;
        this.Ha = this.ha = null;
        this.yb = !1;
        this.Ib = this.h = null;
        this.Tb = d || null;
        this.ob = this.pb = this.B = this.Ia = null;
        this.la = 3E4;
        this.eb && (A("\n.google-payments-dialog {\n    animation: none 0s ease 0s 1 normal none running;\n    background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n    background-blend-mode: normal;\n    border: 0 none #333;\n    border-radius: 8px 8px 0 0;\n    border-collapse: separate;\n    bottom: 0;\n    box-shadow: #808080 0 3px 0 0, #808080 0 0 22px;\n    box-sizing: border-box;\n    letter-spacing: normal;\n    max-height: 100%;\n    overflow: visible;\n    position: fixed;\n    width: 100%;\n    z-index: 2147483647;\n    -webkit-appearance: none;\n    left: 0;\n}\n@media (min-width: 480px) {\n  .google-payments-dialog {\n    width: 480px !important;\n    left: -240px !important;\n    margin-left: calc(100vw - 100vw / 2) !important;\n  }\n}\n.google-payments-dialogContainer {\n  background-color: rgba(0,0,0,0.26);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n}\n.iframeContainer {\n  -webkit-overflow-scrolling: touch;\n}\n"),
            A("\n.google-payments-dialogCenter {\n  animation: none 0s ease 0s 1 normal none running;\n  background-blend-mode: normal;\n  background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n  border-collapse: separate;\n  border-radius: 8px;\n  border: 0px none #333;\n  bottom: auto;\n  box-shadow: #808080 0 0 22px;\n  box-sizing: border-box;\n  left: -240px;\n  letter-spacing: normal;\n  margin-left: calc(100vw - 100vw / 2) !important;\n  max-height: 90%;\n  overflow: visible;\n  position: absolute;\n  top: 100%;\n  transform: scale(0.8);\n  width: 480px;\n  z-index: 2147483647;\n  -webkit-appearance: none;\n}\n@media (min-height: 667px) {\n  .google-payments-dialogCenter {\n    max-height: 600px;\n  }\n}\n.google-payments-activeContainer {\n  top: 50%;\n  transform: scale(1.0) translateY(-50%);\n}\n"))
    };
    W.prototype.Fa = function(a) {
        this.ha || (this.ha = a, this.Db.Fa("GPAY", this.qc.bind(this)))
    };
    W.prototype.qc = function(a) {
        var b = this;
        bd(this.Lb);
        this.ha(a.Ma().then(function(c) {
            if ("TIN" != b.u && c.origin != Me(b)) throw Error("channel mismatch");
            var d = c.data;
            if (d.redirectEncryptedCallbackData) return Mc = 3, Ne(b, d.redirectEncryptedCallbackData).then(function(e) {
                var f = Object.assign({}, d);
                delete f.redirectEncryptedCallbackData;
                return Object.assign(f, e)
            });
            if (!c.mb || !c.zc) throw Error("channel mismatch");
            return d
        }, function(c) {
            var d = c.message;
            c = c.message;
            try {
                c = JSON.parse(d.substring(7))
            } catch (e) {}
            c.statusCode &&
                -1 == ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(c.statusCode) && (c = {
                    statusCode: "CANCELED"
                });
            "AbortError" == c && (c = {
                statusCode: "CANCELED"
            });
            return Promise.reject(c)
        }))
    };
    var Ne = function(a, b) {
        return new Promise(function(c, d) {
            var e = Oe(a),
                f = new XMLHttpRequest;
            f.open("POST", e, !0);
            "withCredentials" in f && (f.withCredentials = !0);
            f.onreadystatechange = function() {
                if (!(2 > f.readyState))
                    if (100 > f.status || 599 < f.status) f.onreadystatechange = null, d(Error("Unknown HTTP status " + f.status));
                    else if (4 == f.readyState) try {
                    c(JSON.parse(f.responseText))
                } catch (g) {
                    d(g)
                }
            };
            f.onerror = function() {
                d(Error("Network failure"))
            };
            f.onabort = function() {
                d(Error("Request aborted"))
            };
            f.send(b)
        })
    };
    W.prototype.F = function(a) {
        var b = this;
        return new Promise(function(c, d) {
            if (gd(a)) c({
                result: !1
            });
            else {
                var e = window.navigator.userAgent,
                    f = 0 < e.indexOf("OPA/") && 0 < e.indexOf("AppleWebKit"),
                    g = 0 < e.indexOf("FxiOS"),
                    h = 0 < e.indexOf("Instagram"),
                    l = 0 < e.indexOf("FB_IAB"),
                    m = 0 < e.indexOf("AndroidMapsWebView");
                if ((0 < e.indexOf("GSA/") && 0 < e.indexOf("Safari") || f || g || h || l || m) && !b.eb) c({
                    result: !1
                });
                else {
                    g = !1;
                    if (google.payments.api.ReadyToPayAdditionalBrowsers) {
                        if (0 < e.indexOf("UCMini")) {
                            c({
                                result: !1
                            });
                            return
                        }
                        g = 0 < e.indexOf("OPT") ||
                            0 < e.indexOf("UCBrowser")
                    }
                    var q = 0 < e.indexOf("Chrome") || 0 < e.indexOf("Firefox") || 0 < e.indexOf("Safari") || g || f;
                    q && 2 <= a.apiVersion && a.existingPaymentMethodRequired ? (a.environment = b.u, Qc(a, 6, ["isReadyToPayResponse", "isReadyToPayError"], function(F) {
                        var x = {
                            result: q
                        };
                        a.existingPaymentMethodRequired && (F.data.isReadyToPayError ? d({
                            statusCode: "DEVELOPER_ERROR",
                            statusMessage: "Ready to pay error. Cause : " + F.data.isReadyToPayError
                        }) : x.paymentMethodPresent = "READY_TO_PAY" == F.data.isReadyToPayResponse);
                        c(x)
                    })) : c({
                        result: q
                    })
                }
            }
        })
    };
    W.prototype.R = function(a) {
        if (this.eb) {
            this.va(a);
            var b = Pe(this, a),
                c = Qe(this, b.container, b.iframe, a);
            this.Ha = {
                container: b.container,
                iframe: b.iframe,
                request: a,
                dataPromise: c
            }
        }
    };
    W.prototype.V = function(a) {
        var b = this;
        a.swg || a.apiVersion || (a.apiVersion = 1);
        if (a.forceRedirect && this.B) throw Error("Callback is not supported in redirect mode");
        a.environment = this.u;
        this.va(a);
        if (this.eb) {
            Mc = 1;
            if (this.Ha) {
                var c = this.Ha;
                var d = this.Ha.dataPromise;
                this.Ha = null
            } else c = Pe(this, a), d = Qe(this, c.container, c.iframe, a);
            Re(this, c.container, c.iframe, a);
            history.pushState({}, "", window.location.href);
            var e = function(f) {
                f.preventDefault();
                f = c;
                f.container.parentNode && (b.Ib(Promise.reject({
                        errorCode: "CANCELED"
                    })),
                    Se(f.container, f.iframe), b.h && b.h.disconnect());
                window.removeEventListener("popstate", e)
            };
            window.addEventListener("popstate", e);
            a = new Promise(function(f) {
                b.Ib = f
            });
            this.ha(Promise.race([d, a]))
        } else return Mc = a.forceRedirect ? 3 : 2, Je(this.Db, "TIN" == this.u ? "/ui/pay" : Me(this) + "/gp/p/ui/pay", a.forceRedirect ? z("_top") : z("gp-js-popup"), a, Te(a)).then(function(f) {
            var g = new Tc;
            b.Lb.show(f && f.jb());
            f.onMessage(function(h) {
                "partialPaymentDataCallback" == h.type ? b.pb = Yc(h.data, b.B, b.la, g.Ua).then(function(l) {
                        return f.message(l)
                    }) :
                    "fullPaymentDataCallback" == h.type && (b.ob = Xc(h.data, b.B, b.la, g.Ua).then(function(l) {
                        f.message(l)
                    }))
            })
        })
    };
    var Te = function(a) {
        var b = {
            width: 600,
            height: 600
        };
        a.forceRedirect || a.swg || (b.disableRedirectFallback = !0);
        return b
    };
    W.prototype.tb = function(a) {
        this.B = a
    };
    var Me = function(a) {
            return "LOCAL" == a.u ? "" : "https://" + ("PREPROD" == a.u ? "pay-preprod.sandbox" : "SANDBOX" == a.u ? "pay.sandbox" : "CANARY" == a.u ? "ibfe-canary.corp" : "pay") + ".google.com"
        },
        Oe = function(a) {
            var b = Me(a) + "/gp/p/apis/buyflow/process";
            a.Tb && (b += "?rk=" + encodeURIComponent(a.Tb));
            return b
        },
        Ue = function(a, b) {
            var c = window.location.origin,
                d = z("https://pay.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            if ("CANARY" == a) d = z("https://ibfe-canary.corp.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            else if ("SANDBOX" == a || "PREPROD" == a) d = z("https://pay" + ("PREPROD" == a ? "-preprod" : "") + ".sandbox.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            return sb(d, {
                coordinationToken: void 0 === b ? "" : b,
                origin: c
            })
        },
        Se = function(a, b) {
            Ve(b, "all 250ms ease 0s");
            b.height = "0px";
            setTimeout(function() {
                a.parentNode && a.parentNode.removeChild(a)
            }, 250)
        },
        Pe = function(a, b) {
            b = b.i && b.i.renderContainerCenter ? "google-payments-dialogCenter" : "google-payments-dialog";
            var c = document.createElement("div");
            c.classList.add("google-payments-dialogContainer");
            var d = document.createElement("div");
            d.classList.add("iframeContainer");
            var e = document.createElement("iframe");
            e.classList.add(b);
            e.setAttribute("frameborder", "0");
            e.setAttribute("scrolling", "no");
            d.appendChild(e);
            c.appendChild(d);
            document.body.appendChild(c);
            b = {
                container: c,
                iframe: e
            };
            c = b.iframe;
            d = b.container;
            d.addEventListener("click", na(a.fc, a, b));
            d.style.display = "none";
            c.style.display = "none";
            c.height = "0px";
            Ve(c, "all 250ms ease 0s");
            a.yb = !1;
            return b
        };
    W.prototype.fc = function(a) {
        a.container.parentNode && history.back()
    };
    var Re = function(a, b, c, d) {
            b.style.display = "block";
            c.style.display = "block";
            setTimeout(function() {
                c.height = "280px";
                d.i && d.i.renderContainerCenter && c.classList.add("google-payments-activeContainer");
                setTimeout(function() {
                    a.yb = !0;
                    a.Ia && (Ve(c, a.Ia.transition), c.height = a.Ia.height, a.Ia = null)
                }, 250)
            }, 1)
        },
        Ve = function(a, b) {
            ud(a, b);
            a.style.setProperty("-webkit-transition", b)
        },
        Qe = function(a, b, c, d) {
            d.swg || d.apiVersion || (d.apiVersion = 1);
            var e = "";
            d.i && d.i.coordinationToken && (e = d.i.coordinationToken);
            d.environment =
                a.u;
            var f;
            e = Ue(a.u, e);
            return He(c, e, d).then(function(g) {
                a.h = g;
                var h = new Tc;
                g.onMessage(function(l) {
                    "partialPaymentDataCallback" == l.type ? a.pb = Yc(l.data, a.B, a.la, h.Ua).then(function(m) {
                        return g.message(m)
                    }) : "fullPaymentDataCallback" == l.type ? a.ob = Xc(l.data, a.B, a.la, h.Ua).then(function(m) {
                        return g.message(m)
                    }) : "resize" == l.type && (a.yb ? (f || (f = Date.now()), Date.now() < f + 250 ? Ve(c, l.transition + ", height 250ms") : Ve(c, l.transition), c.height = l.height) : a.Ia = {
                        height: l.height,
                        transition: l.transition
                    })
                });
                return g.Ma()
            }).then(function(g) {
                Se(b,
                    c);
                history.back();
                return g.data
            }, function(g) {
                Se(b, c);
                history.back();
                return Promise.reject(g)
            })
        };
    W.prototype.va = function(a) {
        var b = {
            startTimeMs: Date.now()
        };
        a.i = a.i ? Object.assign(b, a.i) : b
    };
    var We = "actions.google.com amp-actions.sandbox.google.com amp-actions-staging.sandbox.google.com amp-actions-autopush.sandbox.google.com payments.developers.google.com payments.google.com".split(" "),
        Y = function(a, b, c, d) {
            this.lb = b;
            kd(a);
            this.Ob = null;
            this.u = a.environment || "TEST";
            Xe || (Xe = -1 != We.indexOf(window.location.hostname) && a.i && a.i.googleTransactionId ? a.i.googleTransactionId : Oa(this.u));
            this.H = a;
            a.paymentDataCallback && (a.paymentDataCallbacks = {
                onPaymentDataChanged: a.paymentDataCallback
            });
            this.B =
                null;
            this.v = new Ye(a, c);
            this.fa = new W(this.u, c, d, a.i && a.i.redirectKey);
            this.oa = 5;
            this.X = null;
            b = this.v.mode;
            this.qa = 5 === b || 4 === b ? new cd(this.u) : this.fa;
            a.paymentDataCallbacks && (this.B = a.paymentDataCallbacks, this.qa.tb(a.paymentDataCallbacks), this.fa.tb(a.paymentDataCallbacks));
            this.fa.Fa(this.Rb.bind(this));
            this.qa.Fa(this.Rb.bind(this));
            Mc = b;
            Kc = Xe;
            P({
                eventType: 9,
                clientLatencyStartMs: Date.now(),
                buyFlowActivityReason: this.v.s,
                softwareInfo: X(this)
            });
            window.addEventListener("message", function(e) {
                -1 !=
                    We.indexOf(window.location.hostname) && "logPaymentData" === e.data.name && P(e.data.data)
            })
        },
        Xe, X = function(a) {
            return a.H.merchantInfo && a.H.merchantInfo.softwareInfo ? a.H.merchantInfo.softwareInfo : null
        };
    Y.prototype.F = function(a) {
        var b = this;
        if (a) {
            var c = {};
            this.H.environment && (c.environment = this.H.environment);
            this.H.merchantInfo && (c.merchantInfo = this.H.merchantInfo);
            this.H.i && (c.i = this.H.i);
            a = Object.assign({}, c, a)
        }
        var d = Date.now(),
            e = [].concat(ca(this.v.s));
        P({
            eventType: 12,
            clientLatencyStartMs: d,
            buyFlowActivityReason: e,
            softwareInfo: X(this)
        });
        var f = jd() || ld(a);
        if (f) return new Promise(function(h, l) {
            B({
                ga: "isReadyToPay",
                errorMessage: f
            });
            P({
                eventType: 0,
                buyFlowActivityReason: e,
                error: 2,
                softwareInfo: X(b)
            });
            l({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: f
            })
        });
        var g = [].concat(ca(this.v.s));
        return Ze(this, a, g).then(function(h) {
            P({
                eventType: 0,
                clientLatencyStartMs: d,
                isReadyToPayApiResponse: h,
                buyFlowActivityReason: g,
                softwareInfo: X(b)
            });
            return h
        }).catch(function(h) {
            if (h.statusCode) {
                var l = h.statusCode;
                l = "INTERNAL_ERROR" == l ? 1 : "DEVELOPER_ERROR" == l ? 2 : "MERCHANT_ACCOUNT_ERROR" == l ? 4 : "UNSUPPORTED_API_VERSION" == l ? 5 : "BUYER_CANCEL" == l ? 6 : 0
            } else l = 1;
            P({
                eventType: 0,
                buyFlowActivityReason: g,
                error: l,
                softwareInfo: X(b)
            });
            throw h;
        })
    };
    var Ze = function(a, b, c) {
            if (google.payments.api.DisableNativeReadyToPayCheckForPaymentHandler ? 4 === a.v.mode && !$e(b) : a.v.bb && !$e(b)) {
                if (2 <= b.apiVersion) return af(a, b, c);
                var d = a.fa.F(b),
                    e = a.qa.F(b);
                if (gd(b) && !a.v.ma) return c.push(6), e;
                c.push(7);
                return e.then(function() {
                    return d
                })
            }
            return a.fa.F(b)
        },
        af = function(a, b, c) {
            var d = Promise.resolve({
                result: !1
            });
            b.existingPaymentMethodRequired && (d = Promise.resolve({
                result: !1,
                paymentMethodPresent: !1
            }));
            var e = d;
            if (id(b, "CRYPTOGRAM_3DS")) {
                e = JSON.parse(JSON.stringify(b));
                for (var f =
                        0; f < e.allowedPaymentMethods.length; f++) "CARD" == e.allowedPaymentMethods[f].type && (e.allowedPaymentMethods[f].parameters.allowedAuthMethods = ["CRYPTOGRAM_3DS"]);
                c.push(8);
                e = a.qa.F(e)
            }
            var g = d;
            id(b, "PAN_ONLY") && (c.push(9), g = a.fa.F(b));
            return a.v.ma ? (c.push(99), e.then(function() {
                return g
            })) : e.then(function(h) {
                return 1 == (h && h.result) ? h : g
            })
        };
    k = Y.prototype;
    k.R = function(a) {
        var b = jd() || pd(a);
        b ? B({
            ga: "prefetchPaymentData",
            errorMessage: b
        }) : (this.va(a), this.v.bb && !$e(a) ? this.qa.R(a) : this.fa.R(a))
    };
    k.Ea = function() {};
    k.V = function(a) {
        var b = this,
            c = [].concat(ca(this.v.s)),
            d = function() {
                return P({
                    eventType: 5,
                    buyFlowActivityReason: c.length ? c : [99],
                    softwareInfo: X(b),
                    buttonInfo: b.X
                })
            },
            e = jd() || pd(a);
        this.oa = a && a.swg ? 6 : 5;
        if (e) this.lb(new Promise(function(l, m) {
            P({
                eventType: 1,
                error: 2,
                buyFlowMode: b.oa,
                softwareInfo: X(b),
                buttonInfo: b.X
            });
            B({
                ga: "loadPaymentData",
                errorMessage: e
            });
            m({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: e
            })
        })), d();
        else {
            if (this.B || a.callbackIntents) {
                var f = rd(a, this.B);
                if (f) {
                    this.lb(new Promise(function(l, m) {
                        P({
                            eventType: 1,
                            error: 2,
                            buyFlowMode: b.oa,
                            softwareInfo: X(b),
                            buttonInfo: b.X
                        });
                        B({
                            ga: "loadPaymentData",
                            errorMessage: f
                        });
                        m({
                            statusCode: "DEVELOPER_ERROR",
                            statusMessage: f
                        })
                    }));
                    d();
                    return
                }
            }
            this.Ob = Date.now();
            var g = bf(this.v, a, c),
                h = 5 === g || 4 === g ? this.qa : this.fa;
            g !== this.v.mode && (Mc = g);
            this.va(a);
            d();
            h.V(a)
        }
    };
    k.pa = function(a) {
        a = void 0 === a ? {} : a;
        var b = 0,
            c = 0;
        switch (a.buttonType) {
            case "short":
                b = 1;
                break;
            case "long":
                b = 2;
                break;
            case "plain":
                b = 3;
                break;
            case "buy":
                b = 4;
                break;
            case "donate":
                b = 5
        }
        switch (a.buttonSizeMode) {
            case "static":
                c = 1;
                break;
            case "fill":
                c = 2
        }
        var d = void 0 === a.buttonRootNode ? 0 : 3;
        a.buttonRootNode instanceof ShadowRoot ? d = 1 : a.buttonRootNode instanceof HTMLDocument && (d = 2);
        this.X = {
            buttonType: b,
            buttonSizeMode: c,
            buttonRootNode: d
        };
        a = void 0 === a ? {} : a;
        Object.values(Ea).includes(a.buttonType) || (a.buttonType = "long");
        Object.values(Ga).includes(a.buttonSizeMode) || (a.buttonSizeMode = "static");
        b = a;
        c = Ac.includes(Ra());
        d = Bc.includes(Ra());
        if (!(google.payments.api.EnableDynamicGpayButtonForTesting || google.payments.api.EnableDynamicGpayButton || c) || d || "long" !== b.buttonType && "buy" !== b.buttonType) {
            yc.includes(a.buttonRootNode || document) || (A("\n.gpay-button {\n  background-origin: content-box;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 0px;\n  border-radius: 4px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n  height: 40px;\n  min-height: 40px;\n  padding: 11px 24px;\n}\n\n.gpay-button.black {\n  background-color: #000;\n  box-shadow: none;\n  padding: 12px 24px 10px;\n}\n\n.gpay-button.white {\n  background-color: #fff;\n}\n\n.gpay-button.short, .gpay-button.plain {\n  min-width: 90px;\n  width: 160px;\n}\n\n.gpay-button.black.short, .gpay-button.black.plain {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);\n}\n\n.gpay-button.white.short, .gpay-button.white.plain {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/light_gpay.svg);\n}\n\n.gpay-button.black.active {\n  background-color: #5f6368;\n}\n\n.gpay-button.black.hover {\n  background-color: #3c4043;\n}\n\n.gpay-button.white.active {\n  background-color: #fff;\n}\n\n.gpay-button.white.focus {\n  box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n}\n\n.gpay-button.white.hover {\n  background-color: #f8f8f8;\n}\n\n.gpay-button-fill, .gpay-button-fill > .gpay-button.white, .gpay-button-fill > .gpay-button.black {\n  width: 100%;\n  height: inherit;\n}\n\n.gpay-button-fill > .gpay-button.white,\n  .gpay-button-fill > .gpay-button.black {\n    padding: 11px 15%;\n}\n\n",
                a.buttonRootNode), b = Gc(a.buttonLocale), c = window.navigator.userAgent, c = google.payments.api.EnablePngExtensionForButton && 0 < c.indexOf("Safari") && (0 < c.indexOf("iPhone") || 0 < c.indexOf("iPad")) ? "png" : "svg", A("\n    .gpay-button.long, .gpay-button.buy {\n      min-width: " + Ha[b] + "px;\n      width: 240px;\n    }\n\n    .gpay-button.donate {\n      min-width: " + Ia[b] + "px;\n      width: 240px;\n    }\n\n    .gpay-button.white.long, .gpay-button.white.buy {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/light/" +
                b + "." + c + ");\n    }\n\n    .gpay-button.black.long, .gpay-button.black.buy {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/dark/" + b + "." + c + ");\n    }\n\n    .gpay-button.white.donate {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/light/donate/" + b + "." + c + ");\n    }\n\n    .gpay-button.black.donate {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/dark/donate/" + b + "." + c + ");\n    }", a.buttonRootNode), yc.push(a.buttonRootNode || document));
            b =
                document.createElement("button");
            Ec(b);
            Object.values(Fa).includes(a.buttonColor) || (a.buttonColor = "default");
            "default" == a.buttonColor && (a.buttonColor = "black");
            b.setAttribute("class", "gpay-button " + Dc(a));
            Fc(b);
            if (a.onClick) b.addEventListener("click", a.onClick);
            else throw Error("Parameter 'onClick' must be set.");
            c = document.createElement("div");
            "fill" === a.buttonSizeMode && c.setAttribute("class", "gpay-button-fill");
            c.appendChild(b);
            a = c
        } else a = Cc(a);
        P({
            eventType: 2,
            clientLatencyStartMs: Date.now(),
            buyFlowActivityReason: this.v.s,
            softwareInfo: X(this),
            buttonInfo: this.X
        });
        return a
    };
    k.Rb = function(a) {
        var b = this;
        a = a.then(function(c) {
            google.payments.api.LogInternally && console.log("payment data", c);
            if (c.error) {
                var d = Error();
                d.statusCode = c.error.statusCode;
                d.statusMessage = c.error.statusMessage;
                B({
                    ga: "loadPaymentData",
                    errorMessage: d.statusMessage
                });
                throw d;
            }
            return c
        });
        a.then(function(c) {
            google.payments.api.LogInternally && console.log("payment data resolve to ", c);
            P({
                eventType: 1,
                clientLatencyStartMs: b.Ob,
                buyFlowMode: b.oa,
                buyFlowActivityReason: b.v.s,
                softwareInfo: X(b),
                buttonInfo: b.X
            })
        }).catch(function(c) {
            google.payments.api.LogInternally &&
                console.log("payment data has error", c);
            c.errorCode ? P({
                eventType: 1,
                error: c.errorCode,
                buyFlowMode: b.oa,
                buyFlowActivityReason: b.v.s,
                softwareInfo: X(b),
                buttonInfo: b.X
            }) : P({
                eventType: 1,
                error: 6,
                buyFlowMode: b.oa,
                buyFlowActivityReason: b.v.s,
                softwareInfo: X(b),
                buttonInfo: b.X
            })
        });
        this.lb(a)
    };
    k.va = function(a) {
        var b = {
            googleTransactionId: Xe,
            usingPayJs: !0
        };
        a.i = a.i ? Object.assign(b, a.i) : b;
        a.i.firstPartyMerchantIdentifier && delete a.i.firstPartyMerchantIdentifier;
        this.H.i && this.H.i.firstPartyMerchantIdentifier && (a.i.firstPartyMerchantIdentifier = this.H.i.firstPartyMerchantIdentifier)
    };
    Y.prototype.createButton = Y.prototype.pa;
    Y.prototype.loadPaymentData = Y.prototype.V;
    Y.prototype.notifyAvailableOffers = Y.prototype.Ea;
    Y.prototype.prefetchPaymentData = Y.prototype.R;
    Y.prototype.isReadyToPay = Y.prototype.F;
    var cf = null,
        Ye = function(a, b) {
            b = void 0 === b ? !1 : b;
            this.fb = a;
            this.s = [];
            null != window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i) ? (this.s.push(37), a = !1) : (a = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i), "PaymentRequest" in window && null != a && 70 <= Number(a[1]) && "Google Inc." == window.navigator.vendor ? (this.s.push(98), this.fb.paymentDataCallbacks && this.s.push(97), a = !0) : (this.s.push(36), a = !1));
            this.ma = a;
            this.bb = df(this);
            this.mode = 2;
            b ? (this.s = [38], this.mode = 1) : this.bb && this.ma ?
                this.mode = 5 : this.bb && (this.mode = 4);
            this.fb.paymentDataCallbacks && this.s.push(1)
        },
        $e = function(a) {
            return !0 === (a.i && a.i.disableNative)
        },
        bf = function(a, b, c) {
            if (2 === a.mode || 1 === a.mode) return a.mode;
            if ($e(b)) return c.push(3), 2;
            if (google.payments.api.UseCanMakePaymentResultFromPayjs) {
                if (a.ma && !cf) return c.push(40), 2
            } else if (a.ma && !Nc) return c.push(4), 2;
            return a.ma && b.swg ? (c.push(5), 2) : a.mode
        },
        df = function(a) {
            if (!window.PaymentRequest) return a.s.push(41), !1;
            var b = -1 !== window.navigator.userAgent.indexOf("OPT/"),
                c = -1 !== window.navigator.userAgent.indexOf("SamsungBrowser/");
            if (-1 !== window.navigator.userAgent.indexOf("OPR/") || b || c) return a.s.push(35), !1;
            if (a.ma) return !0;
            if (google.payments.api.DisablePaymentRequest && !google.payments.api.EnablePaymentRequest) return a.s.push(3), !1;
            b = window.navigator.userAgent.match(/Android/i);
            c = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
            (b = null != b && "PaymentRequest" in window && "Google Inc." == window.navigator.vendor && null != c && 59 <= Number(c[1]) && !a.fb.paymentDataCallbacks) ||
            a.s.push(34);
            return b
        };
    ia("google.payments.api.PaymentsAsyncClient", Y);
    Y.prototype.isReadyToPay = Y.prototype.F;
    Y.prototype.prefetchPaymentData = Y.prototype.R;
    Y.prototype.loadPaymentData = Y.prototype.V;
    Y.prototype.createButton = Y.prototype.pa;
    Y.prototype.notifyAvailableOffers = Y.prototype.Ea;
    var Z = function(a, b) {
        a = void 0 === a ? {} : a;
        this.oc = Pa({}, window.gpayMerchantIdFromUrl ? {
            merchantInfo: {
                merchantId: window.gpayMerchantIdFromUrl
            }
        } : {}, window.gpayInitParams, a);
        this.Oa = new Y(this.oc, this.sc.bind(this), b);
        this.Ga = null
    };
    k = Z.prototype;
    k.sc = function(a) {
        this.Ga(a)
    };
    k.F = function(a) {
        return this.Oa.F(a)
    };
    k.R = function(a) {
        this.Oa.R(a)
    };
    k.Ea = function() {};
    k.V = function(a) {
        var b = this;
        google.payments.api.EnablePwgTestExperiment && console.log("ZOMBIEMONKEYATEMYBRAIN");
        return (new Promise(function(c) {
            if (b.Ga) throw Error("This method can only be called one at a time.");
            b.Ga = c;
            b.Oa.V(a)
        })).then(function(c) {
            b.Ga = null;
            return c
        }, function(c) {
            b.Ga = null;
            throw c;
        })
    };
    k.pa = function(a) {
        a = void 0 === a ? {} : a;
        return this.Oa.pa(a)
    };
    Z.prototype.createButton = Z.prototype.pa;
    Z.prototype.loadPaymentData = Z.prototype.V;
    Z.prototype.notifyAvailableOffers = Z.prototype.Ea;
    Z.prototype.prefetchPaymentData = Z.prototype.R;
    Z.prototype.isReadyToPay = Z.prototype.F;
    ia("google.payments.api.PaymentsClient", Z);
    Z.prototype.isReadyToPay = Z.prototype.F;
    Z.prototype.prefetchPaymentData = Z.prototype.R;
    Z.prototype.loadPaymentData = Z.prototype.V;
    Z.prototype.createButton = Z.prototype.pa;
    Z.prototype.notifyAvailableOffers = Z.prototype.Ea;
    google.payments.api.UseCanMakePaymentResultFromPayjs && (new PaymentRequest([{
        supportedMethods: ["https://google.com/pay"]
    }], {
        total: {
            label: "Estimated Total Price",
            amount: {
                currency: "USD",
                value: "10"
            }
        }
    })).canMakePayment().then(function(a) {
        return cf = a
    }).catch(function() {
        return cf = !1
    });
}).call(this);