! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 10)
}([function(e, t, n) {
    var r;
    r = function() {
        var e = !0;

        function t(t) {
            function n(e) {
                var n = t.match(e);
                return n && n.length > 1 && n[1] || ""
            }
            var r, o, a, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                s = !/like android/i.test(t) && /android/i.test(t),
                p = /nexus\s*[0-6]\s*/i.test(t),
                u = !p && /nexus\s*[0-9]+/i.test(t),
                l = /CrOS/.test(t),
                c = /silk/i.test(t),
                d = /sailfish/i.test(t),
                y = /tizen/i.test(t),
                h = /(web|hpw)os/i.test(t),
                m = /windows phone/i.test(t),
                f = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
                v = !i && !c && /macintosh/i.test(t),
                g = !s && !d && !y && !h && /linux/i.test(t),
                b = n(/edge\/(\d+(\.\d+)?)/i),
                w = n(/version\/(\d+(\.\d+)?)/i),
                P = /tablet/i.test(t) && !/tablet pc/i.test(t),
                _ = !P && /[^-]mobi/i.test(t),
                T = /xbox/i.test(t);
            /opera/i.test(t) ? r = {
                name: "Opera",
                opera: e,
                version: w || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? r = {
                name: "Opera",
                opera: e,
                version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
            } : /SamsungBrowser/i.test(t) ? r = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: w || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? r = {
                name: "Opera Coast",
                coast: e,
                version: w || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? r = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: w || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? r = {
                name: "UC Browser",
                ucbrowser: e,
                version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? r = {
                name: "Maxthon",
                maxthon: e,
                version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? r = {
                name: "Epiphany",
                epiphany: e,
                version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? r = {
                name: "Puffin",
                puffin: e,
                version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? r = {
                name: "Sleipnir",
                sleipnir: e,
                version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? r = {
                name: "K-Meleon",
                kMeleon: e,
                version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : m ? (r = {
                name: "Windows Phone",
                osname: "Windows Phone",
                windowsphone: e
            }, b ? (r.msedge = e, r.version = b) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
                name: "Internet Explorer",
                msie: e,
                version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : l ? r = {
                name: "Chrome",
                osname: "Chrome OS",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? r = {
                name: "Microsoft Edge",
                msedge: e,
                version: b
            } : /vivaldi/i.test(t) ? r = {
                name: "Vivaldi",
                vivaldi: e,
                version: n(/vivaldi\/(\d+(\.\d+)?)/i) || w
            } : d ? r = {
                name: "Sailfish",
                osname: "Sailfish OS",
                sailfish: e,
                version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? r = {
                name: "SeaMonkey",
                seamonkey: e,
                version: n(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (r = {
                name: "Firefox",
                firefox: e,
                version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : c ? r = {
                name: "Amazon Silk",
                silk: e,
                version: n(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? r = {
                name: "PhantomJS",
                phantom: e,
                version: n(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? r = {
                name: "SlimerJS",
                slimer: e,
                version: n(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
                name: "BlackBerry",
                osname: "BlackBerry OS",
                blackberry: e,
                version: w || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : h ? (r = {
                name: "WebOS",
                osname: "WebOS",
                webos: e,
                version: w || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
                name: "Bada",
                osname: "Bada",
                bada: e,
                version: n(/dolfin\/(\d+(\.\d+)?)/i)
            } : y ? r = {
                name: "Tizen",
                osname: "Tizen",
                tizen: e,
                version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
            } : /qupzilla/i.test(t) ? r = {
                name: "QupZilla",
                qupzilla: e,
                version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
            } : /chromium/i.test(t) ? r = {
                name: "Chromium",
                chromium: e,
                version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
            } : /chrome|crios|crmo/i.test(t) ? r = {
                name: "Chrome",
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : s ? r = {
                name: "Android",
                version: w
            } : /safari|applewebkit/i.test(t) ? (r = {
                name: "Safari",
                safari: e
            }, w && (r.version = w)) : i ? (r = {
                name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
            }, w && (r.version = w)) : r = /googlebot/i.test(t) ? {
                name: "Googlebot",
                googlebot: e,
                version: n(/googlebot\/(\d+(\.\d+))/i) || w
            } : {
                name: n(/^(.*)\/(.*) /),
                version: (o = /^(.*)\/(.*) /, a = t.match(o), a && a.length > 1 && a[2] || "")
            }, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && w && (r.version = w)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || r.msedge || !s && !r.silk ? r.windowsphone || r.msedge || !i ? v ? (r.mac = e, r.osname = "macOS") : T ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r[i] = e, r.ios = e, r.osname = "iOS") : (r.android = e, r.osname = "Android");
            var k = "";
            r.windows ? k = function(e) {
                switch (e) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (r.osversion = k);
            var A = !r.windows && k.split(".")[0];
            return P || u || "ipad" == i || s && (3 == A || A >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == i || "ipod" == i || s || p || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
        }
        var n = t("undefined" != typeof navigator && navigator.userAgent || "");

        function r(e) {
            return e.split(".").length
        }

        function o(e, t) {
            var n, r = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (n = 0; n < e.length; n++) r.push(t(e[n]));
            return r
        }

        function a(e) {
            for (var t = Math.max(r(e[0]), r(e[1])), n = o(e, (function(e) {
                    var n = t - r(e);
                    return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
                        return new Array(20 - e.length).join("0") + e
                    })).reverse()
                })); --t >= 0;) {
                if (n[0][t] > n[1][t]) return 1;
                if (n[0][t] !== n[1][t]) return -1;
                if (0 === t) return 0
            }
        }

        function i(e, r, o) {
            var i = n;
            "string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (i = t(o));
            var s = "" + i.version;
            for (var p in e)
                if (e.hasOwnProperty(p) && i[p]) {
                    if ("string" != typeof e[p]) throw new Error("Browser version in the minVersion map should be a string: " + p + ": " + String(e));
                    return a([s, e[p]]) < 0
                } return r
        }
        return n.test = function(e) {
            for (var t = 0; t < e.length; ++t) {
                var r = e[t];
                if ("string" == typeof r && r in n) return !0
            }
            return !1
        }, n.isUnsupportedBrowser = i, n.compareVersions = a, n.check = function(e, t, n) {
            return !i(e, t, n)
        }, n._detect = t, n
    }, e.exports ? e.exports = r() : n(5)("bowser", r)
}, function(e, t, n) {
    (function(t, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.4+314e4831
         */
        var r;
        r = function() {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }
            var r = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                o = 0,
                a = void 0,
                i = void 0,
                s = function(e, t) {
                    h[o] = e, h[o + 1] = t, 2 === (o += 2) && (i ? i(m) : w())
                },
                p = "undefined" != typeof window ? window : void 0,
                u = p || {},
                l = u.MutationObserver || u.WebKitMutationObserver,
                c = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function y() {
                var e = setTimeout;
                return function() {
                    return e(m, 1)
                }
            }
            var h = new Array(1e3);

            function m() {
                for (var e = 0; e < o; e += 2)(0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
                o = 0
            }
            var f, v, g, b, w = void 0;

            function P(e, t) {
                var n = this,
                    r = new this.constructor(k);
                void 0 === r[T] && j(r);
                var o = n._state;
                if (o) {
                    var a = arguments[o - 1];
                    s((function() {
                        return E(o, r, a, n._result)
                    }))
                } else x(n, r, e, t);
                return r
            }

            function _(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(k);
                return M(t, e), t
            }
            c ? w = function() {
                return t.nextTick(m)
            } : l ? (v = 0, g = new l(m), b = document.createTextNode(""), g.observe(b, {
                characterData: !0
            }), w = function() {
                b.data = v = ++v % 2
            }) : d ? ((f = new MessageChannel).port1.onmessage = m, w = function() {
                return f.port2.postMessage(0)
            }) : w = void 0 === p ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (a = e.runOnLoop || e.runOnContext) ? function() {
                        a(m)
                    } : y()
                } catch (e) {
                    return y()
                }
            }() : y();
            var T = Math.random().toString(36).substring(2);

            function k() {}
            var A = {
                error: null
            };

            function S(e) {
                try {
                    return e.then
                } catch (e) {
                    return A.error = e, A
                }
            }

            function C(t, n, r) {
                n.constructor === t.constructor && r === P && n.constructor.resolve === _ ? function(e, t) {
                    1 === t._state ? q(e, t._result) : 2 === t._state ? O(e, t._result) : x(t, void 0, (function(t) {
                        return M(e, t)
                    }), (function(t) {
                        return O(e, t)
                    }))
                }(t, n) : r === A ? (O(t, A.error), A.error = null) : void 0 === r ? q(t, n) : e(r) ? function(e, t, n) {
                    s((function(e) {
                        var r = !1,
                            o = function(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, (function(n) {
                                r || (r = !0, t !== n ? M(e, n) : q(e, n))
                            }), (function(t) {
                                r || (r = !0, O(e, t))
                            }), e._label);
                        !r && o && (r = !0, O(e, o))
                    }), e)
                }(t, n, r) : q(t, n)
            }

            function M(e, t) {
                var n, r;
                e === t ? O(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? q(e, t) : C(e, t, S(t)))
            }

            function R(e) {
                e._onerror && e._onerror(e._result), D(e)
            }

            function q(e, t) {
                void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && s(D, e))
            }

            function O(e, t) {
                void 0 === e._state && (e._state = 2, e._result = t, s(R, e))
            }

            function x(e, t, n, r) {
                var o = e._subscribers,
                    a = o.length;
                e._onerror = null, o[a] = t, o[a + 1] = n, o[a + 2] = r, 0 === a && e._state && s(D, e)
            }

            function D(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, a = e._result, i = 0; i < t.length; i += 3) r = t[i], o = t[i + n], r ? E(n, r, o, a) : o(a);
                    e._subscribers.length = 0
                }
            }

            function E(t, n, r, o) {
                var a = e(r),
                    i = void 0,
                    s = void 0,
                    p = void 0,
                    u = void 0;
                if (a) {
                    if ((i = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return A.error = e, A
                            }
                        }(r, o)) === A ? (u = !0, s = i.error, i.error = null) : p = !0, n === i) return void O(n, new TypeError("A promises callback cannot return that same promise."))
                } else i = o, p = !0;
                void 0 !== n._state || (a && p ? M(n, i) : u ? O(n, s) : 1 === t ? q(n, i) : 2 === t && O(n, i))
            }
            var I = 0;

            function j(e) {
                e[T] = I++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var N = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(k), this.promise[T] || j(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? q(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && q(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === _) {
                            var o = S(e);
                            if (o === P && void 0 !== e._state) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                            else if (n === F) {
                                var a = new n(k);
                                C(a, e, o), this._willSettleAt(a, t)
                            } else this._willSettleAt(new n((function(t) {
                                return t(e)
                            })), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        void 0 === r._state && (this._remaining--, 2 === e ? O(r, n) : this._result[t] = n), 0 === this._remaining && q(r, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        x(e, void 0, (function(e) {
                            return n._settledAt(1, t, e)
                        }), (function(e) {
                            return n._settledAt(2, t, e)
                        }))
                    }, e
                }(),
                F = function() {
                    function e(t) {
                        this[T] = I++, this._result = this._state = void 0, this._subscribers = [], k !== t && ("function" != typeof t && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof e ? function(e, t) {
                            try {
                                t((function(t) {
                                    M(e, t)
                                }), (function(t) {
                                    O(e, t)
                                }))
                            } catch (t) {
                                O(e, t)
                            }
                        }(this, t) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function(e) {
                        var t = this.constructor;
                        return this.then((function(n) {
                            return t.resolve(e()).then((function() {
                                return n
                            }))
                        }), (function(n) {
                            return t.resolve(e()).then((function() {
                                throw n
                            }))
                        }))
                    }, e
                }();
            return F.prototype.then = P, F.all = function(e) {
                return new N(this, e).promise
            }, F.race = function(e) {
                var t = this;
                return r(e) ? new t((function(n, r) {
                    for (var o = e.length, a = 0; a < o; a++) t.resolve(e[a]).then(n, r)
                })) : new t((function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }))
            }, F.resolve = _, F.reject = function(e) {
                var t = new this(k);
                return O(t, e), t
            }, F._setScheduler = function(e) {
                i = e
            }, F._setAsap = function(e) {
                s = e
            }, F._asap = s, F.polyfill = function() {
                var e = void 0;
                if (void 0 !== n) e = n;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = F
            }, F.Promise = F, F
        }, e.exports = r()
    }).call(this, n(3), n(6))
}, function(e, t, n) {
    (function(e) {
        var r = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
                return n
            },
            o = /%[sdj%]/g;
        t.format = function(e) {
            if (!v(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
                return t.join(" ")
            }
            n = 1;
            for (var r = arguments, a = r.length, i = String(e).replace(o, (function(e) {
                    if ("%%" === e) return "%";
                    if (n >= a) return e;
                    switch (e) {
                        case "%s":
                            return String(r[n++]);
                        case "%d":
                            return Number(r[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(r[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                            default:
                                return e
                    }
                })), p = r[n]; n < a; p = r[++n]) m(p) || !w(p) ? i += " " + p : i += " " + s(p);
            return i
        }, t.deprecate = function(n, r) {
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, r).apply(this, arguments)
            };
            var o = !1;
            return function() {
                if (!o) {
                    if (e.throwDeprecation) throw new Error(r);
                    e.traceDeprecation ? console.trace(r) : console.error(r), o = !0
                }
                return n.apply(this, arguments)
            }
        };
        var a, i = {};

        function s(e, n) {
            var r = {
                seen: [],
                stylize: u
            };
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), h(n) ? r.showHidden = n : n && t._extend(r, n), g(r.showHidden) && (r.showHidden = !1), g(r.depth) && (r.depth = 2), g(r.colors) && (r.colors = !1), g(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = p), l(r, e, r.depth)
        }

        function p(e, t) {
            var n = s.styles[t];
            return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e
        }

        function u(e, t) {
            return e
        }

        function l(e, n, r) {
            if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var o = n.inspect(r, e);
                return v(o) || (o = l(e, o, r)), o
            }
            var a = function(e, t) {
                if (g(t)) return e.stylize("undefined", "undefined");
                if (v(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                if (f(t)) return e.stylize("" + t, "number");
                if (h(t)) return e.stylize("" + t, "boolean");
                if (m(t)) return e.stylize("null", "null")
            }(e, n);
            if (a) return a;
            var i = Object.keys(n),
                s = function(e) {
                    var t = {};
                    return e.forEach((function(e, n) {
                        t[e] = !0
                    })), t
                }(i);
            if (e.showHidden && (i = Object.getOwnPropertyNames(n)), _(n) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return c(n);
            if (0 === i.length) {
                if (T(n)) {
                    var p = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + p + "]", "special")
                }
                if (b(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (P(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (_(n)) return c(n)
            }
            var u, w = "",
                k = !1,
                A = ["{", "}"];
            (y(n) && (k = !0, A = ["[", "]"]), T(n)) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
            return b(n) && (w = " " + RegExp.prototype.toString.call(n)), P(n) && (w = " " + Date.prototype.toUTCString.call(n)), _(n) && (w = " " + c(n)), 0 !== i.length || k && 0 != n.length ? r < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = k ? function(e, t, n, r, o) {
                for (var a = [], i = 0, s = t.length; i < s; ++i) M(t, String(i)) ? a.push(d(e, t, n, r, String(i), !0)) : a.push("");
                return o.forEach((function(o) {
                    o.match(/^\d+$/) || a.push(d(e, t, n, r, o, !0))
                })), a
            }(e, n, r, s, i) : i.map((function(t) {
                return d(e, n, r, s, t, k)
            })), e.seen.pop(), function(e, t, n) {
                if (e.reduce((function(e, t) {
                        return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }), 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                return n[0] + t + " " + e.join(", ") + " " + n[1]
            }(u, w, A)) : A[0] + w + A[1]
        }

        function c(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function d(e, t, n, r, o, a) {
            var i, s, p;
            if ((p = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                }).get ? s = p.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : p.set && (s = e.stylize("[Setter]", "special")), M(r, o) || (i = "[" + o + "]"), s || (e.seen.indexOf(p.value) < 0 ? (s = m(n) ? l(e, p.value, null) : l(e, p.value, n - 1)).indexOf("\n") > -1 && (s = a ? s.split("\n").map((function(e) {
                    return "  " + e
                })).join("\n").substr(2) : "\n" + s.split("\n").map((function(e) {
                    return "   " + e
                })).join("\n")) : s = e.stylize("[Circular]", "special")), g(i)) {
                if (a && o.match(/^\d+$/)) return s;
                (i = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = e.stylize(i, "string"))
            }
            return i + ": " + s
        }

        function y(e) {
            return Array.isArray(e)
        }

        function h(e) {
            return "boolean" == typeof e
        }

        function m(e) {
            return null === e
        }

        function f(e) {
            return "number" == typeof e
        }

        function v(e) {
            return "string" == typeof e
        }

        function g(e) {
            return void 0 === e
        }

        function b(e) {
            return w(e) && "[object RegExp]" === k(e)
        }

        function w(e) {
            return "object" == typeof e && null !== e
        }

        function P(e) {
            return w(e) && "[object Date]" === k(e)
        }

        function _(e) {
            return w(e) && ("[object Error]" === k(e) || e instanceof Error)
        }

        function T(e) {
            return "function" == typeof e
        }

        function k(e) {
            return Object.prototype.toString.call(e)
        }

        function A(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(n) {
            if (g(a) && (a = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !i[n])
                if (new RegExp("\\b" + n + "\\b", "i").test(a)) {
                    var r = e.pid;
                    i[n] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", n, r, e)
                    }
                } else i[n] = function() {};
            return i[n]
        }, t.inspect = s, s.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, s.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = y, t.isBoolean = h, t.isNull = m, t.isNullOrUndefined = function(e) {
            return null == e
        }, t.isNumber = f, t.isString = v, t.isSymbol = function(e) {
            return "symbol" == typeof e
        }, t.isUndefined = g, t.isRegExp = b, t.isObject = w, t.isDate = P, t.isError = _, t.isFunction = T, t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = n(8);
        var S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function C() {
            var e = new Date,
                t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":");
            return [e.getDate(), S[e.getMonth()], t].join(" ")
        }

        function M(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            console.log("%s - %s", C(), t.format.apply(t, arguments))
        }, t.inherits = n(9), t._extend = function(e, t) {
            if (!t || !w(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var R = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

        function q(e, t) {
            if (!e) {
                var n = new Error("Promise was rejected with a falsy value");
                n.reason = e, e = n
            }
            return t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (R && e[R]) {
                var t;
                if ("function" != typeof(t = e[R])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, R, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }

            function t() {
                for (var t, n, r = new Promise((function(e, r) {
                        t = e, n = r
                    })), o = [], a = 0; a < arguments.length; a++) o.push(arguments[a]);
                o.push((function(e, r) {
                    e ? n(e) : t(r)
                }));
                try {
                    e.apply(this, o)
                } catch (e) {
                    n(e)
                }
                return r
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), R && Object.defineProperty(t, R, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, r(e))
        }, t.promisify.custom = R, t.callbackify = function(t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

            function n() {
                for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
                var o = n.pop();
                if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
                var a = this,
                    i = function() {
                        return o.apply(a, arguments)
                    };
                t.apply(this, n).then((function(t) {
                    e.nextTick(i, null, t)
                }), (function(t) {
                    e.nextTick(q, t, i)
                }))
            }
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, r(t)), n
        }
    }).call(this, n(3))
}, function(e, t) {
    var n, r, o = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            n = a
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            r = i
        }
    }();
    var p, u = [],
        l = !1,
        c = -1;

    function d() {
        l && p && (l = !1, p.length ? u = p.concat(u) : c = -1, u.length && y())
    }

    function y() {
        if (!l) {
            var e = s(d);
            l = !0;
            for (var t = u.length; t;) {
                for (p = u, u = []; ++c < t;) p && p[c].run();
                c = -1, t = u.length
            }
            p = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || s(y)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    (function(e) {
        var n, r, o, a;

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        a = function() {
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.i = function(e) {
                    return e
                }, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), window.ApplePaySession && (t.PaymentRequest = function() {
                    function e(e, t, n) {
                        this.paymentRequestID = "", this.shippingAddress = null, this.shippingOption = "", this.shippingType = "shipping", this.paymentResolver = null, this.paymentRejector = null, this.onshippingaddresschange = null, this.onshippingoptionchange = null, this.onpaymentmethodselected = null, this.validationEndpoint = "", this.merchantIdentifier = "";
                        var r = !1;
                        this.paymentRequest = {
                            countryCode: "",
                            currencyCode: "",
                            lineItems: [],
                            merchantCapabilities: ["supports3DS"],
                            supportedNetworks: [],
                            total: null,
                            billingContact: null,
                            requiredBillingContactFields: [],
                            requiredShippingContactFields: [],
                            shippingContact: null,
                            shippingMethods: [],
                            shippingType: "shipping"
                        };
                        for (var o, a = 0, i = e; a < i.length; a++)
                            if (-1 < (o = i[a]).supportedMethods.indexOf("https://apple.com/apple-pay")) {
                                this.paymentRequest.supportedNetworks = o.data.supportedNetworks, this.paymentRequest.countryCode = o.data.countryCode, o.data.billingContact ? this.paymentRequest.billingContact = o.data.billingContact : delete this.paymentRequest.billingContact, o.data.shippingContact ? this.paymentRequest.shippingContact = o.data.shippingContact : delete this.paymentRequest.shippingContact, o.data.merchantCapabilities && (this.paymentRequest.merchantCapabilities = o.data.merchantCapabilities), this.validationEndpoint = o.data.validationEndpoint, this.merchantIdentifier = o.data.merchantIdentifier, r = !0;
                                break
                            } if (!r) throw "Payment method not specified for Apple Pay.";
                        t && (n && !0 !== n.requestShipping && delete t.shippingOptions, this.updatePaymentDetails(t), this.paymentRequest.shippingMethods && this.paymentRequest.shippingMethods.length && (this.shippingOption = this.convertShippingMethod(this.paymentRequest.shippingMethods[0]))), n && (n.requestShipping && (this.paymentRequest.requiredBillingContactFields.push("postalAddress"), this.paymentRequest.requiredShippingContactFields.push("postalAddress")), n.requestPayerName && this.paymentRequest.requiredShippingContactFields.push("name"), n.requestPayerEmail && this.paymentRequest.requiredShippingContactFields.push("email"), n.requestPayerPhone && this.paymentRequest.requiredShippingContactFields.push("phone"), this.paymentRequest.shippingType = "pickup" === n.shippingType ? "servicePickup" : n.shippingType || "shipping"), this.session = new ApplePaySession(2, this.paymentRequest), this.session.addEventListener("validatemerchant", this.onValidateMerchant.bind(this)), this.session.addEventListener("paymentauthorized", this.onPaymentAuthorized.bind(this)), this.session.addEventListener("paymentmethodselected", this.onPaymentMethodSelected.bind(this)), this.session.addEventListener("shippingcontactselected", this.onShippingAddressChange.bind(this)), this.session.addEventListener("shippingmethodselected", this.onShippingOptionChange.bind(this)), this.session.addEventListener("cancel", this.onPaymentCanceled.bind(this))
                    }
                    return e.prototype.updatePaymentDetails = function(e) {
                        if (e.displayItems) {
                            this.paymentRequest.lineItems = [];
                            for (var t = 0, n = e.displayItems; t < n.length; t++) {
                                var r = n[t],
                                    o = {
                                        type: !0 === r.isAmountPending ? "pending" : "final",
                                        label: r.label,
                                        amount: r.amount.value
                                    };
                                this.paymentRequest.lineItems.push(o)
                            }
                        }
                        if (e.shippingOptions) {
                            this.paymentRequest.shippingMethods = [];
                            for (var a = 0, i = e.shippingOptions; a < i.length; a++) {
                                var s = i[a],
                                    p = {
                                        label: s.label,
                                        detail: s.detail || "",
                                        amount: s.amount.value,
                                        identifier: s.id
                                    };
                                this.paymentRequest.shippingMethods.push(p)
                            }
                        }
                        if (!e.total) throw "`total` is required parameter for `PaymentDetails`.";
                        this.paymentRequest.currencyCode = e.total.amount.currency, this.paymentRequest.total = {
                            type: !0 === e.total.isAmountPending ? "pending" : "final",
                            label: e.total.label,
                            amount: e.total.amount.value
                        }
                    }, e.prototype.updatePaymentMethod = function() {}, e.prototype.convertPaymentAddress = function(e) {
                        return {
                            country: e.countryCode || "",
                            addressLine: e.addressLines || [],
                            region: e.administrativeArea || "",
                            city: e.locality || "",
                            dependentLocality: "",
                            postalCode: e.postalCode || "",
                            sortingCode: e.country || "",
                            languageCode: "",
                            organization: "",
                            recipient: e.givenName + " " + e.familyName,
                            phone: e.phoneNumber || ""
                        }
                    }, e.prototype.convertShippingMethod = function(e) {
                        for (var t, n = 0, r = this.paymentRequest.shippingMethods; n < r.length; n++)
                            if (t = r[n], e.identifier === t.identifier) return t.identifier;
                        return ""
                    }, e.prototype.convertPaymentResponse = function(e) {
                        var t = e.shippingContact ? this.convertPaymentAddress(e.shippingContact) : void 0,
                            n = e.billingContact ? this.convertPaymentAddress(e.billingContact) : void 0,
                            r = e.shippingContact || {},
                            o = e.billingContact ? e.billingContact.givenName + " " + e.billingContact.familyName : void 0;
                        return {
                            details: {
                                billingAddress: n
                            },
                            methodName: "https://apple.com/apple-pay",
                            payerEmail: r.emailAddress,
                            payerName: o,
                            payerPhone: r.phoneNumber,
                            shippingAddress: t,
                            shippingOption: this.shippingOption,
                            applePayRaw: e,
                            complete: this.onPaymentComplete.bind(this)
                        }
                    }, e.prototype.show = function() {
                        var e = this;
                        return this.session.begin(), new Promise((function(t, n) {
                            e.paymentResolver = function(e) {
                                t(e)
                            }, e.paymentRejector = function(e) {
                                n(e)
                            }
                        }))
                    }, e.prototype.abort = function() {
                        this.session.abort()
                    }, e.prototype.canMakePayment = function() {
                        if (this.merchantIdentifier) return ApplePaySession.canMakePaymentsWithActiveCard(this.merchantIdentifier);
                        throw "`merchantIdentifier` is not specified."
                    }, e.prototype.completeMerchantValidation = function(e) {
                        this.session.completeMerchantValidation(e)
                    }, e.prototype.completePaymentMethodSelection = function(e, t) {
                        this.session.completePaymentMethodSelection(e, t)
                    }, e.prototype.addEventListener = function(e, t) {
                        if ("shippingaddresschange" !== e && "shippingoptionchange" !== e && "paymentmethodselected" !== e && "validatemerchant" !== e) throw 'Unknown event type "' + e + '" for `addEventListener`.';
                        this["on" + e] = t
                    }, e.prototype.onValidateMerchant = function(e) {
                        var t = this;
                        if (e.stopPropagation(), this.onvalidatemerchant) this.onvalidatemerchant(e);
                        else {
                            var n = new Headers({
                                "Content-Type": "application/json"
                            });
                            fetch(this.validationEndpoint, {
                                method: "POST",
                                headers: n,
                                body: JSON.stringify({
                                    validationURL: e.validationURL
                                })
                            }).then((function(e) {
                                if (200 === e.status) return e.json();
                                throw "Merchant validation error."
                            })).then((function(e) {
                                t.completeMerchantValidation(e)
                            })).catch((function(e) {
                                throw e
                            }))
                        }
                    }, e.prototype.onPaymentMethodSelected = function(e) {
                        if (e.stopPropagation(), this.onpaymentmethodselected) this.onpaymentmethodselected(e);
                        else {
                            var t = this.paymentRequest.total,
                                n = this.paymentRequest.lineItems;
                            this.session.completePaymentMethodSelection(t, n)
                        }
                    }, e.prototype.onShippingAddressChange = function(e) {
                        var t = this;
                        if (this.onshippingaddresschange) {
                            e.stopPropagation();
                            var n = e.shippingContact;
                            this.shippingAddress = this.convertPaymentAddress(n), this.onshippingaddresschange({
                                updateWith: function(e) {
                                    Promise.resolve(e).then((function(e) {
                                        t.updatePaymentDetails(e), t.session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, t.paymentRequest.shippingMethods, t.paymentRequest.total, t.paymentRequest.lineItems)
                                    }), (function(e) {
                                        t.updatePaymentDetails(e), t.session.completeShippingContactSelection(ApplePaySession.STATUS_FAILURE, t.paymentRequest.shippingMethods, t.paymentRequest.total, t.paymentRequest.lineItems)
                                    }))
                                }
                            })
                        }
                    }, e.prototype.onShippingOptionChange = function(e) {
                        var t = this;
                        if (this.onshippingoptionchange) {
                            e.stopPropagation();
                            var n = e.shippingMethod;
                            this.shippingOption = this.convertShippingMethod(n), this.onshippingoptionchange({
                                updateWith: function(e) {
                                    Promise.resolve(e).then((function(e) {
                                        t.updatePaymentDetails(e), t.session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, t.paymentRequest.total, t.paymentRequest.lineItems)
                                    }), (function(e) {
                                        t.updatePaymentDetails(e), t.session.completeShippingMethodSelection(ApplePaySession.STATUS_FAILURE, null, null)
                                    }))
                                }
                            })
                        }
                    }, e.prototype.onPaymentAuthorized = function(e) {
                        if (this.paymentResolver) {
                            var t = this.convertPaymentResponse(e.payment);
                            this.paymentResolver(t), this.paymentResolver = null, this.paymentRejector = null
                        }
                    }, e.prototype.onPaymentCanceled = function(e) {
                        this.paymentRejector && (this.paymentRejector(e), this.paymentResolver = null, this.paymentRejector = null)
                    }, e.prototype.onPaymentComplete = function(e) {
                        if ("success" !== e && "fail" !== e && "unknown" !== e && "" !== e) throw "Unkown status code for complete().";
                        var t = "success" === e ? ApplePaySession.STATUS_SUCCESS : "fail" === e || "unknown" === e ? ApplePaySession.STATUS_FAILURE : ApplePaySession.STATUS_SUCCESS;
                        this.session.completePayment(t)
                    }, e
                }())
            }])
        }, "object" == i(t) && "object" == i(e) ? e.exports = a() : (r = [], void 0 === (o = "function" == typeof(n = a) ? n.apply(t, r) : n) || (e.exports = o))
    }).call(this, n(7)(e))
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, a, i = n(0),
        s = n.n(i),
        p = n(1);
    (o = r || (r = {})).production = "production", o.sandbox = "sandboox";
    var u = function(e) {
            a = e
        },
        l = function(e) {
            return a[e]
        },
        c = "https://js.tappaysdk.com",
        d = {
            en: "Pay Now",
            zh: "隞䀹狡"
        },
        y = {
            VISA: 1,
            MASTERCARD: 2,
            JCB: 3,
            UNIONPAY: 4,
            AMEX: 5
        },
        h = {
            VI: 1,
            MC: 2
        },
        m = {
            CREDIT: 0,
            DEBIT: 1,
            PREPAID: 2
        },
        f = 0,
        v = 1,
        g = 2,
        b = "card-number",
        w = "expiration-date",
        P = "ccv",
        _ = "function",
        T = "api",
        k = n(4),
        A = {
            amex: /^3[47]\d{0,13}/,
            mastercard: /(^(5[1-5]|2[3-6])\d{0,14})|^(((222[1-9])|(2720))\d{0,12})|^(((22[3-9])|(27[0-1]))\d{0,13})/,
            jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,
            visa: /^4\d{0,15}/,
            unionpay: /^(62[0-9]{14,17})$/
        },
        S = {
            amex: "AMEX",
            mastercard: "MASTERCARD",
            jcb: "JCB",
            visa: "VISA",
            unionpay: "UNIONPAY"
        },
        C = function(e) {
            for (var t = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9], n = e.length, r = 0, o = 0; 0 < n--;) r += (o ^= 1) ? e.charCodeAt(n) - 48 : t[e.charCodeAt(n) - 48];
            return 0 == r % 10
        },
        M = function(e, t) {
            return e = (e + "").replace(/\s+|-/g, ""), void 0 === t ? /^\d{15,19}$/.test(e) && C(e) : t === S.amex ? /^\d{15}$/.test(e) && C(e) : /^\d{16,19}$/.test(e) && C(e)
        },
        R = function(e, t) {
            var n, r, o = e;
            return t += "", !!/^\d+$/.test(o += "") && !!/^\d+$/.test(t) && 1 <= o && 12 >= o && (2 === t.length && (t = 70 > t ? "20" + t : "19" + t), 4 === t.length && (r = new Date(t, o), n = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > n))
        },
        q = function(e) {
            for (var t in A)
                if (!0 === A[t].test(e)) return S[t];
            return "Unknown"
        },
        O = function(e, t) {
            return void 0 === t ? /^\d{3,4}$/.test(e) : t === S.amex ? /^\d{4}$/.test(e) : /^\d{3}$/.test(e)
        },
        x = null,
        D = null,
        E = "",
        I = function() {
            return E
        },
        j = function() {
            return x
        },
        N = function(e) {
            x.contentWindow.postMessage(JSON.stringify(e), c)
        },
        F = [c, "https://fraud.tappaysdk.com"],
        W = new Map;
    W.set("fraud_id", []), W.set("get_prime_done", []), W.set("iframe_get_prime_ready", []), W.set("setup_payment_request_done", []), W.set("payment_request_not_support_in_iframe", []), W.set("payment_request_get_prime_done", []), W.set("payment_request_apple_pay_get_prime_done", []), W.set("apple_pay_get_session_done", []), W.set("samsung_pay_iframe_result", []), W.set("line_pay_get_prime_done", []), W.set("jko_pay_get_prime_done", []), W.set("google_pay_get_prime_done", []), W.set("apple_pay_get_prime_done", []), W.set("update", []), W.set("cardtype-change", []), W.set("field-focus-change", []), W.set("field-status-change", []), W.set("get_prime_for_tappay_fields_done", []), W.set("get_prime_for_card_view_done", []);
    var U = function(e, t) {
            if (W.has(e)) {
                var n = W.get(e);
                n.push(t), W.set(e, n)
            }
        },
        L = function(e, t) {
            return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        },
        z = function(e) {
            return "function" != typeof e
        },
        B = function(e) {
            return e instanceof Element
        },
        G = function(e) {
            return !(e instanceof Element)
        },
        V = function(e) {
            return void 0 !== e
        },
        K = function(e) {
            return void 0 === e
        },
        Y = function(e) {
            return "string" == typeof e
        },
        J = function(e) {
            return "string" != typeof e
        },
        H = function(e, t) {
            e.classList ? e.classList.add(t) : !L(e, t) && (e.className += " " + t)
        },
        $ = function(e, t) {
            if (e.classList) e.classList.remove(t);
            else if (L(e, t)) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ")
            }
        },
        X = function(e) {
            var t, n = window.location.origin;
            if (null !== URL && V(URL)) try {
                t = new URL(e)
            } catch (e) {
                return !1
            } else(t = document.createElement("a")).href = n;
            return ("https://sandbox-redirect.tappaysdk.com" === t.origin || "https://prod-redirect.tappaysdk.com" === t.origin) && "https:" === t.protocol
        },
        Z = function(e) {
            try {
                var t = e.token.paymentData;
                if (!t) return !1;
                if (!t.data || J(t.data)) return !1;
                if (!t.version || J(t.version)) return !1;
                if (!t.signature || J(t.signature)) return !1;
                if (!t.header) return !1;
                if (!t.header.publicKeyHash || J(t.header.publicKeyHash)) return !1;
                if (!t.header.ephemeralPublicKey || J(t.header.ephemeralPublicKey)) return !1;
                if (!t.header.transactionId || J(t.header.transactionId)) return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        Q = function() {
            return window.ApplePaySession ? ApplePaySession.canMakePayments() ? !("https:" !== location.protocol && (console.warn("[TapPay] Trying to call an ApplePaySession API from an insecure document."), 1)) : (console.warn("[TapPay] User Can Not Use Apple Pay"), !1) : (console.warn("[TapPay] Your Browser Did Not Support Apple Pay"), !1)
        },
        ee = function() {
            var e;
            try {
                e = (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.userLanguage ? navigator.userLanguage : navigator.language).split("-")[0].toLowerCase()
            } catch (e) {
                return d.en
            }
            var t = d[e];
            return t || d.en
        },
        te = function(e) {
            if (!e) return null;
            var t = e.toUpperCase();
            return V(h[t]) ? h[t] : null
        },
        ne = function(e) {
            var t = e.toUpperCase();
            return V(y[t]) ? y[t] : null
        },
        re = function(e) {
            var t = e.toUpperCase();
            return V(m[t]) ? m[t] : null
        };

    function oe(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function ae(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }

    function ie(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }
    var se = function() {
            function e(t) {
                var n = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), pe.set(this, {
                    writable: !0,
                    value: void 0
                }), ue.set(this, {
                    writable: !0,
                    value: void 0
                }), le.set(this, {
                    writable: !0,
                    value: void 0
                }), ce.set(this, {
                    writable: !0,
                    value: void 0
                }), de.set(this, {
                    writable: !0,
                    value: function() {
                        U("apple_pay_get_prime_done", (function(e) {
                            ae(n, ce) && ae(n, ce).call(n, e.err, e.result)
                        })), U("apple_pay_get_session_done", (function(e) {
                            ae(n, le) && ae(n, le).call(n, e.err, e.result)
                        }))
                    }
                }), ie(this, pe, t), ae(this, de).call(this)
            }
            return function(e, t, n) {
                t && oe(e.prototype, t), n && oe(e, n)
            }(e, [{
                key: "checkAvailability",
                value: function() {
                    return Q()
                }
            }, {
                key: "canMakePaymentsWithActiveCard",
                value: function(e, t) {
                    return Q() ? void ApplePaySession.canMakePaymentsWithActiveCard(e).then((function(e) {
                        t({
                            browserSupportPaymentRequest: !0,
                            canMakePaymentWithActiveCard: e,
                            canMakePaymentError: null
                        })
                    })).catch((function(e) {
                        t({
                            browserSupportPaymentRequest: !0,
                            canMakePaymentWithActiveCard: !1,
                            canMakePaymentError: e
                        })
                    })) : t({
                        browserSupportPaymentRequest: !1,
                        canMakePaymentWithActiveCard: !1,
                        canMakePaymentError: null
                    })
                }
            }, {
                key: "buildSession",
                value: function(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                        r = 2 < arguments.length ? arguments[2] : void 0,
                        o = 3 < arguments.length ? arguments[3] : void 0;
                    return "https:" === window.location.protocol ? (ie(this, ue, new ApplePaySession(1, e)), ae(this, ue).onvalidatemerchant = function(e) {
                        var r = {
                            appId: l("appID"),
                            appKey: l("appKey"),
                            appName: window.location.hostname,
                            appleMerchantId: n,
                            merchant_domain: window.location.hostname,
                            validationURL: e.validationURL,
                            tappay_endpoint: l("endPoint")
                        };
                        ie(t, le, (function(e, n) {
                            return e ? void o({
                                status: 403,
                                msg: "[Apple Pay] Get Session error: ".concat(e.status, " ").concat(e.msg)
                            }) : void ae(t, ue).completeMerchantValidation(n)
                        })), N({
                            event: "apple_pay_get_session",
                            payload: r
                        })
                    }, ae(this, ue).onpaymentauthorized = function(e) {
                        var a = e.payment;
                        if (!Z(a)) return o({
                            status: 402,
                            msg: "Parsing Apple Pay result happen error"
                        }), ae(t, ue).completePayment(ApplePaySession.STATUS_FAILURE);
                        var i = function(e) {
                            ae(t, ue).completePayment(e)
                        };
                        ie(t, ce, (function(t, n) {
                            return t ? o(t) : 0 === n.status ? void r(n.prime, e, i) : o(n)
                        }));
                        var s = {
                            app_id: l("appID"),
                            app_key: l("appKey"),
                            app_name: window.location.hostname,
                            pay_token_data: a.token.paymentData,
                            apple_merchant_id: n,
                            platform_type: "2",
                            fraud_id: I()
                        };
                        N({
                            event: "apple_pay_get_prime",
                            parameter: s
                        })
                    }, ae(this, ue)) : console.warn("[TapPay] Trying to call an ApplePaySession API from an insecure document.")
                }
            }]), e
        }(),
        pe = new WeakMap,
        ue = new WeakMap,
        le = new WeakMap,
        ce = new WeakMap,
        de = new WeakMap;

    function ye(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function he(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }

    function me(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }
    var fe = function() {
            function e(t, n) {
                var r = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), ve.set(this, {
                    writable: !0,
                    value: void 0
                }), ge.set(this, {
                    writable: !0,
                    value: void 0
                }), be.set(this, {
                    writable: !0,
                    value: void 0
                }), we.set(this, {
                    writable: !0,
                    value: void 0
                }), Pe.set(this, {
                    writable: !0,
                    value: void 0
                }), _e.set(this, {
                    writable: !0,
                    value: void 0
                }), Te.set(this, {
                    writable: !0,
                    value: void 0
                }), ke.set(this, {
                    writable: !0,
                    value: void 0
                }), Ae.set(this, {
                    writable: !0,
                    value: void 0
                }), Se.set(this, {
                    writable: !0,
                    value: function() {
                        U("get_prime_done", (function(e) {
                            he(r, we).call(r, e.result)
                        })), U("update", (function(e) {
                            me(r, Ae, e.result), he(r, Te).call(r, e.result)
                        })), U("cardtype-change", (function(e) {
                            he(r, ke).cardType = e.result;
                            var t = r.formatTappayFieldUpdate();
                            he(r, Te).call(r, t)
                        })), U("field-focus-change", (function(e) {
                            var t = e.result,
                                n = he(r, ke)[t.type].el;
                            "focus" === t.state ? H(n, "tappay-field-focus") : $(n, "tappay-field-focus")
                        })), U("field-status-change", (function(e) {
                            var t = e.result,
                                n = he(r, ke).status;
                            t.type === b ? n.number = t.status : t.type === w ? n.expiry = t.status : t.type === P && (n.ccv = t.status);
                            var o = r.formatTappayFieldUpdate();
                            he(r, Te).call(r, o)
                        })), U("get_prime_for_tappay_fields_done", (function(e) {
                            he(r, Pe).call(r, e.result)
                        })), U("get_prime_for_card_view_done", (function(e) {
                            he(r, _e).call(r, e.result)
                        }))
                    }
                }), me(this, ve, t), me(this, ge, n), me(this, Te, (function(e) {
                    return e
                })), he(this, Se).call(this)
            }
            return function(e, t, n) {
                t && ye(e.prototype, t), n && ye(e, n)
            }(e, [{
                key: "createToken",
                value: function(e, t, n, r, o) {
                    return M(e) ? R(t, n) ? O(r) ? he(this, ve).validate.sdkError() ? (me(this, we, o), void N({
                        event: "get_prime",
                        card: {
                            number: e,
                            exp_month: t,
                            exp_year: n,
                            ccv: r
                        }
                    })) : o({
                        card: {},
                        clientip: "",
                        msg: "SDK Loading Error",
                        status: -1
                    }) : o({
                        msg: "[Direct Pay] CCV is wrong format",
                        status: 2012
                    }) : o({
                        msg: "[Direct Pay] Expired Card",
                        status: 2013
                    }) : o({
                        msg: "[Direct Pay] Wrong Card Format",
                        status: 41
                    })
                }
            }, {
                key: "setup",
                value: function(e, t, n) {
                    if (Y(e) && (e = document.querySelector(e)), !e) return console.error("[TapPay] TPDirect.card.setup(element): Missing element param");
                    if (G(e)) {
                        var r = e;
                        this.setupTappayFields(r)
                    } else {
                        var o = {
                            appKey: l("appKey"),
                            appID: l("appID"),
                            serverType: l("type"),
                            hostname: window.location.hostname,
                            origin: window.location.origin,
                            style: t,
                            config: n || {
                                isUsedCcv: !0
                            }
                        };
                        me(this, be, document.createElement("iframe")), he(this, be).setAttribute("frameborder", "0"), he(this, be).setAttribute("allowtransparency", "true"), he(this, be).setAttribute("scrolling", "no"), he(this, be).setAttribute("style", "border: none; margin: 0px; padding: 0px; width: 1px; min-width: 100%; overflow: hidden; display: block; height: 24px;"), t && t.lineHeight && (he(this, be).style.height = t.lineHeight), he(this, be).src = "https://js.tappaysdk.com/tpdirect/v5.4.0/card-view/html?" + encodeURIComponent(JSON.stringify(o)), e.appendChild(he(this, be))
                    }
                }
            }, {
                key: "setupTappayFields",
                value: function(e) {
                    var t = this.setupTappayField(e.fields.number.element, {
                            origin: window.location.origin,
                            type: b,
                            placeholder: e.fields.number.placeholder,
                            styles: e.styles
                        }),
                        n = this.setupTappayField(e.fields.expirationDate.element, {
                            origin: window.location.origin,
                            type: w,
                            placeholder: e.fields.expirationDate.placeholder,
                            styles: e.styles
                        }),
                        r = null;
                    void 0 !== e.fields.ccv && (r = this.setupTappayField(e.fields.ccv.element, {
                        origin: window.location.origin,
                        type: P,
                        placeholder: e.fields.ccv.placeholder,
                        styles: e.styles
                    }));
                    var o = !t || !n;
                    return (o = null == r ? o : o || !r) ? void console.error("[TapPay] TPDirect.card.setup: failed to setup TapPay fields") : void me(this, ke, {
                        "card-number": t,
                        "expiration-date": n,
                        ccv: r,
                        cardType: "unknown",
                        status: {
                            number: v,
                            expiry: v,
                            ccv: v
                        }
                    })
                }
            }, {
                key: "setupTappayField",
                value: function(e, t) {
                    if (Y(e) && (e = document.querySelector(e)), !G(e)) {
                        var n = document.createElement("iframe");
                        return n.setAttribute("frameborder", "0"), n.setAttribute("allowtransparency", "true"), n.setAttribute("scrolling", "no"), n.setAttribute("style", "border: none; width: 100%; height: 100%; float: left;"), n.src = "https://js.tappaysdk.com/tpdirect/v5.4.0/tappay-field/html?" + encodeURIComponent(JSON.stringify(t)), e.appendChild(n), {
                            el: e,
                            iframe: n
                        }
                    }
                    console.warn("[TapPay] TPDirect.card.setup(): Cannot find element for " + t.type)
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    return z(e) ? console.error("[TapPay] TPDirect.card.onUpdate(callback): callback in not a function") : void me(this, Te, e)
                }
            }, {
                key: "getPrime",
                value: function(e) {
                    return z(e) ? console.error("[TapPay] TPDirect.card.getPrime(callback): callback is not a function") : he(this, ke) ? this.getPrimeForTappayFields(e) : he(this, be) ? void this.getPrimeForCardView(e) : (he(this, ge).call(this, {
                        msg: "[TapPay] You need to call TPDirect.card.setup(element) first"
                    }, "getPrime", _, !0), console.error("[TapPay] You need to call TPDirect.card.setup(element) first"))
                }
            }, {
                key: "getTappayFieldsStatus",
                value: function() {
                    return this.formatTappayFieldUpdate()
                }
            }, {
                key: "getPrimeForTappayFields",
                value: function(e) {
                    return this.formatTappayFieldUpdate().canGetPrime ? (me(this, Pe, e), void N({
                        event: "get_prime_for_tappay_fields"
                    })) : e({
                        status: -5,
                        msg: "[Direct Pay - Fields] canGetPrime is false, not ready to get prime, please use TPDirect.card.getTappayFieldsStatus() to retrive canGetPrime parameter, or detect the canGetPrime parameter with TPDirect.card.onUpdate function"
                    })
                }
            }, {
                key: "getPrimeForCardView",
                value: function(e) {
                    return he(this, Ae) && he(this, Ae).canGetPrime ? (me(this, _e, e), void N({
                        event: "get_prime_for_card_view"
                    })) : e({
                        status: -5,
                        msg: "[Direct Pay - Card View] canGetPrime is false, not ready to get prime, please listen to update with TPDirect.card.onUpdate"
                    })
                }
            }, {
                key: "validate",
                value: function(e, t, n, r) {
                    var o = q(e);
                    return {
                        cardType: o,
                        isCardNumberValid: M(e, o),
                        isExpiryDateValid: R(t, n),
                        isCCVValid: O(r, o)
                    }
                }
            }, {
                key: "formatTappayFieldUpdate",
                value: function() {
                    var e = he(this, ke).status,
                        t = he(this, ke).cardType,
                        n = null != he(this, ke).ccv,
                        r = e.number === f && e.expiry === f,
                        o = e.number === g || e.expiry === g;
                    return n ? (r = r && e.ccv === f, o = o || e.ccv === g) : e.ccv = f, {
                        canGetPrime: r,
                        hasError: o,
                        cardType: t,
                        status: e
                    }
                }
            }]), e
        }(),
        ve = new WeakMap,
        ge = new WeakMap,
        be = new WeakMap,
        we = new WeakMap,
        Pe = new WeakMap,
        _e = new WeakMap,
        Te = new WeakMap,
        ke = new WeakMap,
        Ae = new WeakMap,
        Se = new WeakMap;

    function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Me(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? Ce(Object(t), !0).forEach((function(n) {
            Re(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ce(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function Re(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function qe(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function Oe(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }

    function xe(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }
    var De = function() {
            function e() {
                var t = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), Ee.set(this, {
                    writable: !0,
                    value: void 0
                }), Ie.set(this, {
                    writable: !0,
                    value: void 0
                }), je.set(this, {
                    writable: !0,
                    value: void 0
                }), Ne.set(this, {
                    writable: !0,
                    value: void 0
                }), Fe.set(this, {
                    writable: !0,
                    value: void 0
                }), We.set(this, {
                    writable: !0,
                    value: void 0
                }), Ue.set(this, {
                    writable: !0,
                    value: function() {
                        U("google_pay_get_prime_done", (function(e) {
                            xe(t, We).call(t, e.error, e.result)
                        }))
                    }
                }), xe(this, Ue).call(this)
            }
            return function(e, t, n) {
                t && qe(e.prototype, t), n && qe(e, n)
            }(e, [{
                key: "setupTransactionPrice",
                value: function(e) {
                    xe(this, Ie).transactionInfo = {
                        currencyCode: e.currency,
                        totalPrice: e.price,
                        totalPriceStatus: "FINAL"
                    }
                }
            }, {
                key: "setupGooglePay",
                value: function(e) {
                    Oe(this, je, e)
                }
            }, {
                key: "setupGooglePayButton",
                value: function(e) {
                    var t = this,
                        n = xe(this, Ne).createButton({
                            buttonColor: e.color,
                            buttonType: e.type,
                            onClick: function() {
                                t.loadPaymentDataAndGetPrime(e.getPrimeCallback)
                            }
                        });
                    document.querySelector(e.el).appendChild(n)
                }
            }, {
                key: "setupPaymentRequest",
                value: function(e, t) {
                    var n = this,
                        r = "production" === l("type") ? "PRODUCTION" : "TEST";
                    return google ? void(!this.parsePaymentRequestData(e) || (Oe(this, Ne, new google.payments.api.PaymentsClient({
                        environment: r
                    })), xe(this, Ne).isReadyToPay(xe(this, Fe)).then((function(e) {
                        e.result && Oe(n, Ee, !0), t(null, {
                            canUseGooglePay: xe(n, Ee)
                        })
                    })).catch((function(e) {
                        t(e, {
                            canUseGooglePay: !1
                        })
                    })))) : console.error("[TapPay] Please includ the google pay sdk https://pay.google.com/gp/p/js/pay.js in front of tappay sdk")
                }
            }, {
                key: "getPrime",
                value: function(e) {
                    this.loadPaymentDataAndGetPrime((function(t, n) {
                        e(t, n)
                    }))
                }
            }, {
                key: "validateItemInSupportedArray",
                value: function(e, t) {
                    return !!(e instanceof Array) && e.map((function(e) {
                        return -1 !== t.indexOf(e)
                    })).every((function(e) {
                        return !0 === e
                    }))
                }
            }, {
                key: "parsePaymentRequestData",
                value: function(e) {
                    var t = xe(this, je),
                        n = {
                            apiVersion: 2,
                            apiVersionMinor: 0
                        },
                        r = e.allowedNetworks,
                        o = t.allowedCardAuthMethods;
                    if (!this.validateItemInSupportedArray(r, ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"])) return !1;
                    if (!this.validateItemInSupportedArray(o, ["PAN_ONLY", "CRYPTOGRAM_3DS"])) return !1;
                    var a = {
                            type: "CARD",
                            parameters: {
                                allowPrepaidCards: t.allowPrepaidCards,
                                allowedAuthMethods: o,
                                allowedCardNetworks: r,
                                billingAddressParameters: {
                                    format: t.billingAddressFormat,
                                    phoneNumberRequired: t.phoneNumberRequired
                                },
                                billingAddressRequired: t.billingAddressRequired
                            }
                        },
                        i = Me({}, n);
                    i.allowedPaymentMethods = [a];
                    var s = Me({}, a, {
                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "tappay",
                                    gatewayMerchantId: "tappay"
                                }
                            }
                        }),
                        p = Me({}, n);
                    return p.allowedPaymentMethods = [s], p.transactionInfo = {
                        totalPriceStatus: "FINAL",
                        totalPrice: e.price,
                        currencyCode: e.currency
                    }, p.merchantInfo = {
                        merchantName: t.merchantName,
                        merchantId: t.googleMerchantId
                    }, p.emailRequired = t.emailRequired, p.shippingAddressRequired = t.shippingAddressRequired, p.shippingAddressParameters = {
                        allowedCountryCodes: t.allowedCountryCodes,
                        phoneNumberRequired: t.phoneNumberRequired
                    }, Oe(this, Fe, i), Oe(this, Ie, p), !0
                }
            }, {
                key: "loadPaymentDataAndGetPrime",
                value: function(e) {
                    var t = this;
                    return xe(this, Ee) ? void xe(this, Ne).loadPaymentData(xe(this, Ie)).then((function(n) {
                        N({
                            event: "google_pay_get_prime",
                            payment_data: n
                        }), Oe(t, We, (function(t, n) {
                            return t ? void e(t, null) : 0 === n.status ? void e(null, n.prime) : void e(n, null)
                        }))
                    })).catch((function(t) {
                        e({
                            status: 2200,
                            msg: "[Google Pay] Unexcept Error",
                            originalError: t
                        }, null)
                    })) : console.error("[TapPay] Your device doesn't support Google Pay")
                }
            }]), e
        }(),
        Ee = new WeakMap,
        Ie = new WeakMap,
        je = new WeakMap,
        Ne = new WeakMap,
        Fe = new WeakMap,
        We = new WeakMap,
        Ue = new WeakMap;

    function Le(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function ze(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }

    function Be(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }
    var Ge = function() {
            function e(t) {
                var n = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), Ve.set(this, {
                    writable: !0,
                    value: void 0
                }), Ke.set(this, {
                    writable: !0,
                    value: void 0
                }), Ye.set(this, {
                    writable: !0,
                    value: function() {
                        U("jko_pay_get_prime_done", (function(e) {
                            ze(n, Ke).call(n, e.err, e.result)
                        }))
                    }
                }), Be(this, Ve, t), ze(this, Ye).call(this)
            }
            return function(e, t, n) {
                t && Le(e.prototype, t), n && Le(e, n)
            }(e, [{
                key: "getPrime",
                value: function(e) {
                    var t = this;
                    return z(e) ? console.error("[TapPay] TPDirect.jkoPay.getPrime(callback): callback is not a function") : j() ? (Be(this, Ke, (function(n, r, o) {
                        return n ? void e(n) : (0 !== r.status && ze(t, Ve).call(t, r, o, T), void e(r))
                    })), void N({
                        event: "jko_pay_get_prime",
                        fraud_id: I()
                    })) : (ze(this, Ve).call(this, {
                        msg: "[TapPay] Doesnt load pfirame yet"
                    }, "getPrime", _, !0), console.error("[TapPay] Doesnt load pfirame yet"))
                }
            }, {
                key: "pay",
                value: function(e) {
                    return X(e) ? void(window.location.href = e) : console.error("[TapPay] Your payment url is not valid.")
                }
            }]), e
        }(),
        Ve = new WeakMap,
        Ke = new WeakMap,
        Ye = new WeakMap;

    function Je(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function He(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }

    function $e(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }
    var Xe = function() {
            function e(t) {
                var n = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), Ze.set(this, {
                    writable: !0,
                    value: void 0
                }), Qe.set(this, {
                    writable: !0,
                    value: void 0
                }), et.set(this, {
                    writable: !0,
                    value: function() {
                        U("line_pay_get_prime_done", (function(e) {
                            He(n, Qe).call(n, e.err, e.result, e.url)
                        }))
                    }
                }), $e(this, Ze, t), He(this, et).call(this)
            }
            return function(e, t, n) {
                t && Je(e.prototype, t), n && Je(e, n)
            }(e, [{
                key: "getPrime",
                value: function(e) {
                    var t = this;
                    return z(e) ? console.error("[TapPay] TPDirect.linePay.getPrime(callback): callback is not a function") : j() ? ($e(this, Qe, (function(n, r, o) {
                        return n ? void e(n) : (0 !== r.status && He(t, Ze).call(t, r, o, T), void e(r))
                    })), void N({
                        event: "line_pay_get_prime",
                        fraud_id: I()
                    })) : (He(this, Ze).call(this, {
                        msg: "[TapPay] Doesnt load pfirame yet"
                    }, "getPrime", _, !0), console.error("[TapPay] Doesnt load pfirame yet"))
                }
            }, {
                key: "pay",
                value: function(e) {
                    return X(e) ? void(window.location.href = e) : console.error("[TapPay] Your payment url is not valid.")
                }
            }]), e
        }(),
        Ze = new WeakMap,
        Qe = new WeakMap,
        et = new WeakMap,
        tt = n(2);

    function nt(e, t) {
        for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function rt(e, t) {
        var n = t.get(e);
        if (!n) throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }

    function ot(e, t, n) {
        var r = t.get(e);
        if (!r) throw new TypeError("attempted to set private field on non-instance");
        if (r.set) r.set.call(e, n);
        else {
            if (!r.writable) throw new TypeError("attempted to set read only private field");
            r.value = n
        }
        return n
    }
    var at = function() {
            function e() {
                var t = this;
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), it.set(this, {
                    writable: !0,
                    value: void 0
                }), st.set(this, {
                    writable: !0,
                    value: void 0
                }), pt.set(this, {
                    writable: !0,
                    value: void 0
                }), ut.set(this, {
                    writable: !0,
                    value: void 0
                }), lt.set(this, {
                    writable: !0,
                    value: void 0
                }), ct.set(this, {
                    writable: !0,
                    value: function() {
                        var e = {
                            MODE: "",
                            appKey: l("appKey"),
                            appID: l("appID"),
                            serverType: l("type"),
                            hostname: window.location.hostname,
                            origin: window.location.origin,
                            referrer: document.referrer,
                            href: window.location.href,
                            port: window.location.port,
                            protocol: window.location.protocol,
                            sdk_version: l("sdk_version"),
                            payment_request: rt(t, st)
                        };
                        ot(t, lt, document.createElement("iframe")), rt(t, lt).setAttribute("frameborder", "0"), rt(t, lt).setAttribute("allowtransparency", "true"), rt(t, lt).setAttribute("style", "z-index: 2147483647; display: block; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow-x: hidden; overflow-y: auto; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;"), rt(t, lt).src = "https://js.tappaysdk.com/tpdirect/v5.4.0/samsung-pay/html?" + encodeURIComponent(JSON.stringify(e)), "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? (document.body.appendChild(rt(t, lt)), rt(t, ht).call(t)) : document.addEventListener("DOMContentLoaded", (function() {
                            document.body.appendChild(rt(this, lt)), rt(this, ht).call(this)
                        }))
                    }
                }), dt.set(this, {
                    writable: !0,
                    value: function() {
                        document.body.removeChild(rt(t, lt)), rt(t, mt).call(t)
                    }
                }), yt.set(this, {
                    writable: !0,
                    value: function() {
                        ! function(e) {
                            var t = document.head || document.getElementsByTagName("head")[0],
                                n = document.createElement("style");
                            n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n)
                        }("body.tappay-samsung-pay-shown{ height: auto; overflow-y: hidden; }html.tappay-samsung-pay-shown{ height: auto; overflow-y: hidden; }")
                    }
                }), ht.set(this, {
                    writable: !0,
                    value: function() {
                        H(document.documentElement, "tappay-samsung-pay-shown"), H(document.body, "tappay-samsung-pay-shown")
                    }
                }), mt.set(this, {
                    writable: !0,
                    value: function() {
                        $(document.documentElement, "tappay-samsung-pay-shown"), $(document.body, "tappay-samsung-pay-shown")
                    }
                }), ft.set(this, {
                    writable: !0,
                    value: function(e) {
                        return 0 === e.status ? {
                            status: e.status,
                            msg: e.msg,
                            prime: e.prime,
                            client_ip: e.client_ip,
                            card: {
                                lastfour: e.card_last_four,
                                type: te(e.card_type)
                            },
                            total_amount: e.total_amount
                        } : e
                    }
                }), vt.set(this, {
                    writable: !0,
                    value: function(e) {
                        if (K(e)) return !0;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return !1;
                        if (0 === e.length) return !1;
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (!(Object(tt.isString)(n) || n instanceof String) || "" === n) return !1
                        }
                        return !0
                    }
                }), gt.set(this, {
                    writable: !0,
                    value: function() {
                        U("samsung_pay_iframe_result", (function(e) {
                            rt(t, ut).call(t, e.result)
                        }))
                    }
                }), ot(this, it, !1), ot(this, st, {
                    country_code: "tw"
                }), ot(this, ut, (function(e) {
                    rt(t, dt).call(t);
                    var n = rt(t, ft).call(t, e);
                    rt(t, pt).call(t, n)
                })), rt(this, gt).call(this)
            }
            return function(e, t, n) {
                t && nt(e.prototype, t), n && nt(e, n)
            }(e, [{
                key: "setup",
                value: function(e) {
                    rt(this, st).country_code = e.country_code
                }
            }, {
                key: "setupPaymentRequest",
                value: function(e) {
                    var t = e.total;
                    return t && t.label && t.amount && t.amount.currency && parseFloat(t.amount.value) ? rt(this, vt).call(this, e.supportedNetworks) ? (!1 === rt(this, it) && rt(this, yt).call(this), rt(this, st).allowed_brands = e.supportedNetworks, rt(this, st).merchant_name = t.label, rt(this, st).currency = t.amount.currency, rt(this, st).amount = parseFloat(t.amount.value), void ot(this, it, !0)) : console.error("[TPDirect.samsungPay.setupPaymentRequest] Please check payment request format (supportedNetworks)") : console.error("[TPDirect.samsungPay.setupPaymentRequest] Please check payment request format")
                }
            }, {
                key: "getPrime",
                value: function(e) {
                    return z(e) ? console.error("[TapPay] TPDirect.samsungPay.getPrime(callback): callback is not a function") : rt(this, it) ? (ot(this, pt, e), void rt(this, ct).call(this)) : e({
                        status: -5,
                        msg: "[TPDirect.samsungPay.getPrime] Setup Samsung Pay with TPDirect.samsungPay.setupPaymentRequest first"
                    })
                }
            }, {
                key: "setupSamsungPayButton",
                value: function(e, t) {
                    if (Object(tt.isString)(e) && (e = document.querySelector(e)), !B(e)) return console.warn("[TapPay] TPDirect.samsungPay.setupSamsungPayButton: No element to setup.");
                    var n = {
                        color: "black",
                        type: "pay",
                        shape: "rectangular"
                    };
                    t || (t = n), t.color || (t.color = n.color), t.type || (t.type = n.type), t.shape || (t.shape = n.shape), -1 === ["black", "white"].indexOf(t.color) && (console.warn("[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown color option " + t.color), t.color = n.color), -1 === ["pay", "buy"].indexOf(t.type) && (console.warn("[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown type option " + t.type), t.type = n.type), -1 === ["rectangular", "pill"].indexOf(t.shape) && (console.warn("[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown shape option " + t.shape), t.shape = n.shape);
                    var r = "https://js.tappaysdk.com/tpdirect/image/samsung-pay/" + t.type + "_" + t.color + "_" + t.shape + ".svg",
                        o = document.createElement("div"),
                        a = "background-origin: content-box;background-position: center;background-repeat: no-repeat;background-size: contain;border: 0;outline: 0;height: 100%;min-height: 40px;width: 100%;cursor: pointer;";
                    a += "background-image: url(" + r + ");", o.setAttribute("style", a), e.appendChild(o)
                }
            }]), e
        }(),
        it = new WeakMap,
        st = new WeakMap,
        pt = new WeakMap,
        ut = new WeakMap,
        lt = new WeakMap,
        ct = new WeakMap,
        dt = new WeakMap,
        yt = new WeakMap,
        ht = new WeakMap,
        mt = new WeakMap,
        ft = new WeakMap,
        vt = new WeakMap,
        gt = new WeakMap;

    function bt(e) {
        return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }! function(e) {
        window.addEventListener("message", (function(e) {
            if (-1 !== F.indexOf(e.origin)) {
                var t = JSON.parse(e.data);
                if (W.has(t.event)) {
                    var n = W.get(t.event);
                    if (0 === n.length) return;
                    for (var r = 0; r < n.length; r++) n[r](t)
                }
            }
        }), !1), e.location.origin || (e.location.origin = e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : ""));
        var t, n, r, o, a, i, c, d, y, h, m, f, v, g = {},
            b = !1,
            w = [];
        if ("https://js.tappaysdk.com", t = document.querySelectorAll('script[src^="https://js.tappaysdk.com"]'), v = 0 >= t.length ? "v5.4.0" : "v" + t[0].src.split("/v")[1], "withCredentials" in new XMLHttpRequest) n = !0;
        else {
            if (!e.XDomainRequest) return n = !1, (void 0)({
                msg: "[TapPay] It looks like browser not support cors."
            }, "CORS", _), console.warn("[TapPay] It looks like browser not support cors.");
            n = !0
        }
        if (e.TPDirect) return e.TPDirect.isDoubleLoaded = !0, console.warn("[TapPay] It looks like TPDirect.js was loaded more than one time.");
        e.TPDirect = function(t) {
            return r = e.location.hostname, (t = {}).isDoubleLoaded = !1, t.setPublishableKey = function(e, t, n) {
                u({
                    appID: e,
                    appKey: t,
                    type: n,
                    endPoint: "production" === n ? "https://prod.tappaysdk.com" : "https://sandbox.tappaysdk.com"
                })
            }, t.setupSDK = function(t, n, r) {
                if (!t || !n || !r) return console.error("[TapPay] TPDirect.setupSDK error, appID = " + t + ", appKey = " + n + ", serverType = " + r);
                if (J(r)) return console.error('[TapPay] TPDirect.setupSDK error, serverType is not "sandbox" nor "production", serverType = ' + r);
                if ("production" !== (r = r.toLowerCase()) && "sandbox" !== r) return console.error('[TapPay] TPDirect.setupSDK error, serverType is not "sandbox" nor "production", serverType = ' + r);
                u({
                    appID: t,
                    appKey: n,
                    type: r,
                    endPoint: "production" === r ? "https://prod.tappaysdk.com" : "https://sandbox.tappaysdk.com",
                    sdk_version: v
                });
                var o = {
                    appKey: l("appKey"),
                    appID: l("appID"),
                    serverType: l("type"),
                    hostname: e.location.hostname,
                    origin: e.location.origin,
                    referrer: document.referrer,
                    href: e.location.href,
                    port: e.location.port,
                    protocol: e.location.protocol,
                    sdk_version: l("sdk_version")
                };
                (m = document.createElement("iframe")).setAttribute("style", "display: none;"), m.src = "https://fraud.tappaysdk.com/iframe?" + encodeURIComponent(JSON.stringify(o)), (f = document.createElement("iframe")).setAttribute("allowpaymentrequest", !0), f.setAttribute("frameborder", "0"), f.setAttribute("allowtransparency", "true"), f.setAttribute("scrolling", "no"), f.setAttribute("style", "display: none;"), f.src = "https://js.tappaysdk.com/tpdirect/v5.4.0/api/html?" + encodeURIComponent(JSON.stringify(o)), "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? (document.body.appendChild(m), document.body.appendChild(f)) : document.addEventListener("DOMContentLoaded", (function() {
                        document.body.appendChild(m), document.body.appendChild(f)
                    })),
                    function(e) {
                        x = e
                    }(f),
                    function(e) {
                        D = e
                    }(m)
            }, t.getFraudId = function() {
                return D ? I() : (P({
                    msg: "[TapPay] TPDirect.getFraudId(): You need to call TPDirect.setupSDK first"
                }, "getFraudId", _), console.error("[TapPay] TPDirect.getFraudId(): You need to call TPDirect.setupSDK first"))
            }, t.redirect = function(t) {
                return X(t) ? void(e.location = t) : console.error("[TapPay] Your payment url is not valid.")
            }, g = t, t
        }(g);
        var P = function(e) {
            return function(t, n, r, o) {
                var a = new XMLHttpRequest,
                    i = {
                        c1: e.getFraudId(),
                        name: n,
                        type: r,
                        app_id: l("appID") || "",
                        app_key: l("appKey") || "",
                        server_type: l("type") || "",
                        sdk_version: l("sdk_version") || "test",
                        get_prime_type: !0 === o ? "with form" : !1 === o ? "without form" : "",
                        platform_type: "web",
                        response: t,
                        user_info: {
                            hostname: window.location.hostname,
                            origin: window.location.origin,
                            referrer: document.referrer,
                            href: window.location.href,
                            android_merchant_id: void 0 === e.paymentRequestApi ? "" : e.paymentRequestApi.androidPayTapPayMerchantID,
                            android_pub_key: void 0 === e.paymentRequestApi ? "" : e.paymentRequestApi.androidPayPublickKey,
                            apple_merchant_id: void 0 === e.applePay ? "" : e.applePay.applePayMerchantID
                        }
                    };
                i = JSON.stringify(i), a.open("POST", "https://js.tappaysdk.com/log", !0), a.setRequestHeader("Content-type", "application/json"), a.send(i)
            }
        }(g);
        e.TPDirect.logger = P, e.TPDirect.card = new fe(g, P), e.TPDirect.googlePay = new De, e.TPDirect.linePay = new Xe(P), e.TPDirect.samsungPay = new at, e.TPDirect.jkoPay = new Ge(P), e.TPDirect.applePay = new se(P), e.TPDirect.paymentRequestApi = function(t, n) {
            var u = null;
            return (n = {}).isAmountPending = !1, n.paymentRequest = null, n.pay_with_google_options = null, n.apple_pay_options = null, n.checkAvailability = function() {
                var t = !1;
                return e.ApplePaySession ? t = Q() : e.PaymentRequest && (t = !0), !1 === t ? (console.warn("[TapPay] Your Browser Did Not Support Payment Request and Apple Pay"), !1) : "https:" !== location.protocol && "localhost" !== e.location.hostname ? (console.warn("[TapPay] Trying to call an PaymentRequest API from an insecure document or http://localhost."), !1) : !s.a.msedge || (console.warn("[TapPay] Does not support PaymentRequest on Edge."), !1)
            }, n.availableMethods = function() {
                return s.a.msedge ? [] : Q() ? ["apple_pay"] : s.a.android && s.a.check({
                    chrome: "61"
                }) ? ["card", "pay_with_google"] : s.a.android && V(e.PaymentRequest) || V(e.PaymentRequest) ? ["card"] : []
            }, n.setupTappayPaymentButton = function(t, r) {
                if (Y(t) && (t = document.querySelector(t)), !B(t)) return console.error("[TapPay] TPDirect.paymentRequestApi.setupTappayPaymentButton: Missing element param");
                if (z(r)) return console.error("[TapPay] TPDirect.paymentRequestApi.setupTappayPaymentButton: Missing callback function");
                t.style.cursor = "pointer";
                var o, a = !1,
                    i = !1,
                    p = e.TPDirect.paymentRequestApi.paymentRequest.supportedInstruments,
                    u = p.find((function(e) {
                        return -1 !== e.supportedMethods.indexOf("https://android.com/pay")
                    })),
                    l = p.find((function(e) {
                        return -1 !== e.supportedMethods.indexOf("https://google.com/pay")
                    }));
                if (s.a.android && s.a.check({
                        chrome: "61"
                    }) && l ? a = !0 : s.a.android && "undefined" !== e.PaymentRequest && u && (i = !0), e.ApplePaySession)(o = document.createElement("div")).style.height = "40px", o.style["-webkit-appearance"] = "-apple-pay-button", o.style["-apple-pay-button-type"] = h.canMakePaymentWithActiveCard ? "buy" : "set-up", t.appendChild(o);
                else if (a) {
                    o = document.createElement("div"), H(o, "googlepay"), o.setAttribute("style", "background-color: white;background-image: url('data:image/svg+xml,%3Csvg%20width%3D%22102%22%20height%3D%2217%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M80.526%202.635v4.083h2.518c.6%200%201.096-.202%201.488-.605.403-.402.605-.882.605-1.437%200-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0%205.52v4.736h-1.504V1.198h3.99c1.013%200%201.873.337%202.582%201.012.72.675%201.08%201.497%201.08%202.466%200%20.991-.36%201.819-1.08%202.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668%202.287c0%20.392.166.718.499.98.332.26.722.391%201.168.391.633%200%201.196-.234%201.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61%200-1.12.148-1.528.442-.409.294-.613.657-.613%201.093m1.946-5.815c1.112%200%201.989.297%202.633.89.642.594.964%201.408.964%202.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45%201.372-2.486%201.372-.882%200-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96%200-.828.313-1.486.94-1.976s1.463-.735%202.51-.735c.892%200%201.629.163%202.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132%202.132%200%200%200-1.455-.547c-.84%200-1.504.353-1.995%201.062l-1.324-.834c.73-1.045%201.81-1.568%203.238-1.568m11.853.262l-5.02%2011.53H95.42l1.864-4.034-3.302-7.496h1.635l2.387%205.749h.032l2.322-5.75z%22%20fill%3D%22%235F6368%22%2F%3E%3Cpath%20d%3D%22M74.448%207.134c0-.473-.04-.93-.116-1.366h-6.344v2.588h3.634a3.11%203.11%200%200%201-1.344%202.042v1.68h2.169c1.27-1.17%202.001-2.9%202.001-4.944%22%20fill%3D%22%234285F4%22%2F%3E%3Cpath%20d%3D%22M67.988%2013.7c1.816%200%203.344-.595%204.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754%200-3.244-1.182-3.776-2.774h-2.234v1.731a6.728%206.728%200%200%200%206.01%203.703%22%20fill%3D%22%2334A853%22%2F%3E%3Cpath%20d%3D%22M64.212%208.267a4.034%204.034%200%200%201%200-2.572V3.964h-2.234a6.678%206.678%200%200%200-.717%203.017c0%201.085.26%202.11.717%203.017l2.234-1.731z%22%20fill%3D%22%23FABB05%22%2F%3E%3Cpath%20d%3D%22M67.988%202.921c.992%200%201.88.34%202.58%201.008v.001l1.92-1.918c-1.165-1.084-2.685-1.75-4.5-1.75a6.728%206.728%200%200%200-6.01%203.702l2.234%201.731c.532-1.592%202.022-2.774%203.776-2.774%22%20fill%3D%22%23E94235%22%2F%3E%3Cpath%20d%3D%22M.148%202.976h3.766c.532%200%201.024.117%201.477.35.453.233.814.555%201.085.966.27.41.406.863.406%201.358%200%20.495-.124.924-.371%201.288s-.572.64-.973.826v.084c.504.177.912.471%201.225.882.313.41.469.891.469%201.442a2.6%202.6%200%200%201-.427%201.47c-.285.43-.667.763-1.148%201.001A3.5%203.5%200%200%201%204.082%2013H.148V2.976zm3.696%204.2c.448%200%20.81-.14%201.085-.42.275-.28.413-.602.413-.966s-.133-.684-.399-.959c-.266-.275-.614-.413-1.043-.413H1.716v2.758h2.128zm.238%204.368c.476%200%20.856-.15%201.141-.448.285-.299.427-.644.427-1.036%200-.401-.147-.749-.441-1.043-.294-.294-.688-.441-1.183-.441h-2.31v2.968h2.366zm5.379.903c-.453-.518-.679-1.239-.679-2.163V5.86h1.54v4.214c0%20.579.138%201.013.413%201.302.275.29.637.434%201.085.434.364%200%20.686-.096.966-.287.28-.191.495-.446.644-.763a2.37%202.37%200%200%200%20.224-1.022V5.86h1.54V13h-1.456v-.924h-.084c-.196.336-.5.611-.91.826-.41.215-.845.322-1.302.322-.868%200-1.528-.259-1.981-.777zm9.859.161L16.352%205.86h1.722l2.016%204.858h.056l1.96-4.858H23.8l-4.41%2010.164h-1.624l1.554-3.416zm8.266-6.748h1.666l1.442%205.11h.056l1.61-5.11h1.582l1.596%205.11h.056l1.442-5.11h1.638L36.392%2013h-1.624L33.13%207.876h-.042L31.464%2013h-1.596l-2.282-7.14zm12.379-1.337a1%201%200%200%201-.301-.735%201%201%200%200%201%20.301-.735%201%201%200%200%201%20.735-.301%201%201%200%200%201%20.735.301%201%201%200%200%201%20.301.735%201%201%200%200%201-.301.735%201%201%200%200%201-.735.301%201%201%200%200%201-.735-.301zM39.93%205.86h1.54V13h-1.54V5.86zm5.568%207.098a1.967%201.967%200%200%201-.686-.406c-.401-.401-.602-.947-.602-1.638V7.218h-1.246V5.86h1.246V3.844h1.54V5.86h1.736v1.358H45.75v3.36c0%20.383.075.653.224.812.14.187.383.28.728.28.159%200%20.299-.021.42-.063.121-.042.252-.11.392-.203v1.498c-.308.14-.681.21-1.12.21-.317%200-.616-.051-.896-.154zm3.678-9.982h1.54v2.73l-.07%201.092h.07c.205-.336.511-.614.917-.833.406-.22.842-.329%201.309-.329.868%200%201.53.254%201.988.763.457.509.686%201.202.686%202.079V13h-1.54V8.688c0-.541-.142-.947-.427-1.218-.285-.27-.656-.406-1.113-.406-.345%200-.656.098-.931.294a2.042%202.042%200%200%200-.651.777%202.297%202.297%200%200%200-.238%201.029V13h-1.54V2.976z%22%20fill%3D%22%233C4043%22%2F%3E%3Cpath%20d%3D%22M61%200h41.285v18H61z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');background-origin: content-box;background-position: center;background-repeat: no-repeat;background-size: contain;border: 0;border-radius: 4px;box-shadow: 0px 1px 3px 0px #6d6d6d;outline: 0;padding: 10px 8px;height: 40px;min-height: 40px;");
                    var c = document.createElement("style"),
                        d = ".googlepay:focus {box-shadow: 0px 1px 3px 0px #6d6d6d, inset 0px 0px 0px 1px #a8abb3;} #pr-button:hover:enabled .googlepay {background-color: #f7f7f7;} .googlepay:active:enabled {background-color: #e7e8e8;} #pr-button:hover .googlepay {background-color: #f7f7f7 !important}";
                    c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(document.createTextNode(d)), o.appendChild(c), t.appendChild(o)
                } else if (i)(o = document.createElement("div")).setAttribute("style", "border-radius:5px; box-shadow:0px 1px 3px rgb(116,116,116);height: 100%;background-size:auto calc(60% + 2px);background-repeat:no-repeat;background-position:center;background-color:#fff;background-image:url(https://link-pay.tappaysdk.com/images/android_pay_logo.png)"), t.appendChild(o);
                else {
                    (o = document.createElement("div")).setAttribute("style", "display:flex;justify-content:center;color:rgb(61,64,67);background: #fff;border-radius:5px;box-shadow:0px 1px 3px rgb(116,116,116);height:100%;align-items:center;-webkit-tap-highlight-color: transparent;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;font: 500 16px/21px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight: 500;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;");
                    var y = document.createElement("img");
                    y.setAttribute("src", "https://s3-ap-northeast-1.amazonaws.com/tappay-image-resource/favicon-32x32.png"), y.setAttribute("style", "width: 20px; height: 20px; margin-right: 5px;");
                    var m = document.createElement("span");
                    m.textContent = ee(), o.appendChild(y), o.appendChild(m), t.appendChild(o)
                }
                t.addEventListener("click", (function() {
                    n.getPrime((function(e) {
                        r(e)
                    }))
                }), !1)
            }, n.setupPaymentRequest = function(t, r) {
                z(r) && (r = function(e) {
                    return e.browserSupportPaymentRequest ? void(!e.canMakePaymentWithActiveCard && console.error("[TapPay] User does not have support payment method.")) : void console.error("[TapPay] Browser does not support PaymentRequest or Apple Pay")
                }), a = function(e) {
                    h = e, r(e)
                };
                var o = n.checkAvailability();
                if (!o) return a({
                    browserSupportPaymentRequest: !1,
                    canMakePaymentWithActiveCard: !1,
                    canMakePaymentError: null
                });
                var i = s.a.android && s.a.check({
                        chrome: "61"
                    }),
                    p = -1 === t.supportedMethods.indexOf("card") && -1 === t.supportedMethods.indexOf("basic-card"),
                    u = K(e.ApplePaySession);
                p && u && !i && (o = !1), 1 === t.supportedMethods.length && ("pay_with_google" === t.supportedMethods[0] || "https://google.com/pay" === t.supportedMethods[0]) && !i && (o = !1), 1 === t.supportedMethods.length && ("apple_pay" === t.supportedMethods[0] || "https://apple.com/apple-pay" === t.supportedMethods[0]) && K(e.ApplePaySession) && (o = !1);
                var l = -1 === t.supportedMethods.indexOf("apple_pay") && -1 === t.supportedMethods.indexOf("https://apple.com/apple-pay");
                if (e.ApplePaySession && l && (o = !1), o)
                    if (n.preparePaymentRequest(t))
                        if (e.ApplePaySession) {
                            if (!n.apple_pay_options) return void console.error("[TapPay]: You need to call `TPDirect.paymentRequestApi.setupApplePay` before `TPDirect.paymentRequestApi.setupPaymentRequest`");
                            var c = n.apple_pay_options.merchantIdentifier;
                            g.applePay.canMakePaymentsWithActiveCard(c, a)
                        } else {
                            if (s.a.ios && s.a.chrome) return n.iosChromeSetupPaymentRequest(), void n.iosChromeCheckCanMakePaymentWithActiveCard();
                            var d = function() {
                                N({
                                    event: "setup_payment_request",
                                    paymentRequest: n.paymentRequest,
                                    pay_with_google_options: n.pay_with_google_options
                                })
                            };
                            b ? d() : w.push(d)
                        }
                else console.error("[TapPay] Please check your paymentRequest");
                else a({
                    browserSupportPaymentRequest: !1,
                    canMakePaymentWithActiveCard: !1,
                    canMakePaymentError: null
                })
            }, n.setupApplePay = function(e) {
                e.merchantIdentifier && !J(e.merchantIdentifier) || (P({
                    msg: "[TapPay] TPDirect.paymentRequestApi.setupApplePay: merchantIdentifier is required"
                }, "TPDirect.paymentRequestApi.setupApplePay", _), console.error("[TapPay] TPDirect.paymentRequestApi.setupApplePay: merchantIdentifier is required")), e.countryCode && (J(e.countryCode) || 2 !== e.countryCode.length) && (P({
                    msg: "[TapPay] TPDirect.paymentRequestApi.setupApplePay: countryCode need to be two-letter ISO 3166 country code format."
                }, "TPDirect.paymentRequestApi.setupApplePay", _), console.error("[TapPay] TPDirect.paymentRequestApi.setupApplePay: countryCode need to be two-letter ISO 3166 country code format.")), n.apple_pay_options = e
            }, n.setupPayWithGoogle = function(e) {
                e.allowedPaymentMethods && e.allowedPaymentMethods.forEach((function(e) {
                    if (-1 === ["CARD", "TOKENIZED_CARD"].indexOf(e)) {
                        var t = "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowedPaymentMethods error: " + e;
                        P({
                            msg: t
                        }, "TPDirect.paymentRequestApi.setupPayWithGoogle", _), console.error(t)
                    }
                }));
                var t = bt(e.allowPrepaidCards);
                if (-1 === ["boolean", "undefined"].indexOf(t)) {
                    var r = "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowPrepaidCards type error: " + t;
                    P({
                        msg: r
                    }, "TPDirect.paymentRequestApi.setupPayWithGoogle", _), console.error(r)
                }
                var o = bt(e.billingAddressRequired);
                if (-1 === ["boolean", "undefined"].indexOf(o)) {
                    var a = "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: billingAddressRequired type error: " + o;
                    P({
                        msg: a
                    }, "TPDirect.paymentRequestApi.setupPayWithGoogle", _), console.error(a)
                }
                if (e.billingAddressFormat && -1 === ["FULL", "MIN"].indexOf(e.billingAddressFormat)) {
                    var i = "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: billingAddressFormat error: " + e.billingAddressFormat;
                    P({
                        msg: i
                    }, "TPDirect.paymentRequestApi.setupPayWithGoogle", _), console.error(i)
                }
                if (e.allowedCountryCodes && "[object Array]" !== Object.prototype.toString.call(e.allowedCountryCodes)) {
                    var s = "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowedCountryCodes error: " + e.allowedCountryCodes;
                    P({
                        msg: s
                    }, "TPDirect.paymentRequestApi.setupPayWithGoogle", _), console.error(s)
                }
                n.pay_with_google_options = e
            }, n.preparePaymentItems = function(e) {
                if (!e.hasOwnProperty("total")) return console.error("[TapPay] You need to setup total in the paymentRequest"), !1;
                var t = !1,
                    r = !1,
                    o = !V(e.total.isShowTotalAmount) || e.total.isShowTotalAmount,
                    a = !!V(e.total.isAmountPending) && e.total.isAmountPending,
                    i = {
                        amount: {
                            currency: null,
                            value: "0.00"
                        }
                    },
                    s = function(e, t, n) {
                        return {
                            label: e,
                            amount: {
                                currency: t,
                                value: n
                            }
                        }
                    },
                    p = function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        return {
                            label: e,
                            amount: {
                                currency: t,
                                value: n
                            },
                            isAmountPending: !0
                        }
                    },
                    u = function(e, t) {
                        return parseFloat(e) !== parseFloat(t)
                    },
                    l = 0,
                    c = JSON.parse(JSON.stringify(e)),
                    d = !!(c.displayItems && 0 < c.displayItems.length);
                if (d || (c.displayItems = null), d) {
                    for (var y, h = [], m = 0; m < c.displayItems.length; m++) {
                        if (y = c.displayItems[m], i.amount.currency || (i.amount.currency = y.amount.currency), i.amount.currency !== y.amount.currency) return console.error("[TapPay] payment request data have inconsistent currency, please use consistent currency."), !1;
                        if (!y.isAmountPending && !1 === Object.hasOwnProperty.call(y.amount, "value")) return console.error("Your displayItems object should have `amount.value` or `isAmountPending:true`"), !1;
                        if (y.isAmountPending && Object.hasOwnProperty.call(y.amount, "value")) return console.error("Your displayItems object should only have `amount.value` or `isAmountPending:true`"), !1;
                        y.isAmountPending ? (t = !0, h.push(1), Object.assign(y, i)) : h.push(-1), l += parseFloat(y.amount.value)
                    }
                    h.reduce((function(e, t) {
                        return e + t
                    }), 0) === c.displayItems.length && (r = !0)
                }
                if (i.amount.currency || (i.amount.currency = c.total.amount.currency), i.amount.currency !== c.total.amount.currency) return console.error("[TapPay] payment request data have inconsistent currency, please use consistent currency."), !1;
                if (!o && !a) return console.error("[TapPay] `isShowTotalAmount` and `total.isAmountPending` couldn't be false at the same time."), !1;
                if (d) {
                    var f = !(0 !== l || !r);
                    if (!(0 === l || !t) || null) {
                        if (!a) return console.error("[TapPay] `total.isAmountPending` must be true if there is any payment item's amount is `pending`"), !1;
                        if (n.isAmountPending = !0, o) {
                            if (u(c.total.amount.value, l)) return console.error("[TapPay] Your total amount value is not equal to sum of displayItems value."), !1;
                            c.total = s(c.total.label, i.amount.currency, l)
                        } else c.total = p(c.total.label, i.amount.currency, l)
                    } else if (f) {
                        if (!a) return console.error("[TapPay] `total.isAmountPending` must be true if there is any payment item's amount is `pending`"), !1;
                        if (o) return console.error("[TapPay] Total amount couldn�脌 be displayed if all paymentItems' amount are pending."), !1;
                        n.isAmountPending = !0, c.total = p(c.total.label, i.amount.currency, 1)
                    } else if (n.isAmountPending = a, o) {
                        var v = c.total.amount.value;
                        if (u(v, l)) return console.error("[TapPay] Your total amount value is not equal to sum of displayItems value."), !1;
                        if (0 >= parseFloat(v)) return console.error("[TapPay] `total.amount.value` must greater than zero when `total.isShowTotalAmount:true`"), !1;
                        c.total = s(c.total.label, i.amount.currency, l)
                    } else c.total = p(c.total.label, i.amount.currency, l)
                } else if (n.isAmountPending = a, o) {
                    if (!1 === Object.hasOwnProperty.call(c.total.amount, "value")) return console.error("[TapPay] `total.amount.value` should have value when `total.isShowTotalAmount:true`"), !1;
                    var g = c.total.amount.value;
                    if (0 >= parseFloat(g)) return console.error("[TapPay] `total.amount.value` must greater than zero when `total.isShowTotalAmount:true`"), !1;
                    c.total = s(c.total.label, i.amount.currency, g)
                } else c.total = p(c.total.label, i.amount.currency, 1);
                return {
                    displayItems: c.displayItems,
                    total: c.total,
                    shippingOptions: c.shippingOptions || []
                }
            }, n.preparePaymentOptions = function(e) {
                var t = {};
                return e.hasOwnProperty("options") && (t = e.options), t
            }, n.parseSupportMethod = function(e, t) {
                var r = t.supportedNetworks,
                    o = t.options || {},
                    a = {};
                if (-1 === ["card", "pay_with_google", "apple_pay", "basic-card", "https://google.com/pay", "https://apple.com/apple-pay"].indexOf(e)) return console.error("[TapPay] " + e + " is not supported, supportedMethods: card, pay_with_google, apple_pay");
                if ("card" === e || "basic-card" === e) a = {
                    supportedMethods: ["basic-card"],
                    data: {
                        supportedNetworks: r.map((function(e) {
                            return e.toLowerCase()
                        }))
                    }
                };
                else if ("pay_with_google" === e || "https://google.com/pay" === e) {
                    var i = n.pay_with_google_options || {};
                    a = {
                        supportedMethods: ["https://google.com/pay"],
                        data: {
                            merchantId: "04234483533225200652",
                            environment: "TEST",
                            apiVersion: 1,
                            allowedPaymentMethods: i.allowedPaymentMethods || ["CARD", "TOKENIZED_CARD"],
                            paymentMethodTokenizationParameters: {
                                tokenizationType: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "tappay",
                                    gatewayMerchantId: "tappay"
                                }
                            },
                            cardRequirements: {
                                allowedCardNetworks: r,
                                allowPrepaidCards: i.allowPrepaidCards || !0,
                                billingAddressRequired: i.billingAddressRequired || !1,
                                billingAddressFormat: i.billingAddressFormat || "MIN"
                            },
                            phoneNumberRequired: o.requestPayerPhone || !1,
                            emailRequired: o.requestPayerEmail || !1,
                            shippingAddressRequired: o.requestShipping || !1,
                            shippingAddressRequirements: {
                                allowedCountryCodes: i.allowedCountryCodes || void 0
                            }
                        }
                    }, "production" === l("type") && delete a.data.environment
                } else if ("apple_pay" === e || "https://apple.com/apple-pay" === e) {
                    var s = n.apple_pay_options || {};
                    a = {
                        supportedMethods: ["https://apple.com/apple-pay"],
                        data: {
                            supportedNetworks: n.convertToApplePayNetworks(r),
                            countryCode: s.countryCode || "TW",
                            merchantIdentifier: s.merchantIdentifier
                        }
                    }
                }
                return a
            }, n.convertToApplePayNetworks = function(e) {
                return e.map((function(e) {
                    var t = e.toLowerCase();
                    return "amex" === t ? "amex" : "jcb" === t ? "jcb" : "mastercard" === t ? "masterCard" : "visa" === t ? "visa" : null
                })).filter((function(e) {
                    return null !== e
                }))
            }, n.preparePaymentMethods = function(e) {
                return e.hasOwnProperty("supportedMethods") ? e.supportedMethods.map((function(t) {
                    return n.parseSupportMethod(t, e)
                })) : (console.error('[TapPay] "supportedMthods" is not found in the paymentRequest, you need to setup the right name.'), !1)
            }, n.preparePaymentRequest = function(e) {
                var t = n.preparePaymentMethods(e),
                    r = n.preparePaymentItems(e),
                    o = n.preparePaymentOptions(e);
                return t && r && o ? (n.paymentRequest = {
                    supportedInstruments: t,
                    details: r,
                    options: o
                }, !0) : (n.paymentRequest = null, !1)
            }, n.getPrime = function(t) {
                return z(t) ? console.error("[TapPay] TPDirect.paymentRequestApi.getPrime(callback): callback is not a function") : f ? n.paymentRequest ? e.ApplePaySession ? void n.applePayGetPrime(t) : y ? void n.iosChromeGetPrime(t) : (i = t, void N({
                    event: "payment_request_get_prime"
                })) : console.error("[TapPay] You need to setup the complete payment request.") : (P({
                    msg: "[TapPay] Doesnt doesnt load pfirame yet"
                }, "getPrime", _, !0), console.error("[TapPay] Doesnt load pfirame yet"))
            }, n.iosChromeSetupPaymentRequest = function() {
                var t = n.paymentRequest,
                    r = t.supportedInstruments,
                    o = t.details,
                    i = t.options;
                "servicePickup" === i.shippingType && (i.shippingType = "pickup");
                try {
                    y = new e.PaymentRequest(r, o, i)
                } catch (e) {
                    return void a({
                        browserSupportPaymentRequest: !1,
                        canMakePaymentWithActiveCard: !1
                    })
                }
                y.addEventListener("shippingoptionchange", (function(e) {
                    var n = JSON.parse(JSON.stringify(t.details));
                    n.shippingOptions = n.shippingOptions.map((function(e) {
                        return y.shippingOption === e.id ? (e.selected = !0, n.total.amount.value = (parseFloat(n.total.amount.value) + parseFloat(e.amount.value)).toString()) : e.selected = !1, e
                    })), e.updateWith(p.Promise.resolve(o))
                })), y.addEventListener("shippingaddresschange", (function(e) {
                    e.updateWith(p.Promise.resolve(t.details))
                }))
            }, n.iosChromeCheckCanMakePaymentWithActiveCard = function() {
                var e = p.Promise.resolve(!0);
                y.canMakePayment && (e = y.canMakePayment()), e.then((function(e) {
                    a({
                        browserSupportPaymentRequest: !0,
                        canMakePaymentWithActiveCard: e
                    })
                })).catch((function(e) {
                    console.error("[TapPay] PaymentRequest.canMakePayment error (see https://developers.google.com/web/fundamentals/payments/deep-dive-into-payment-request#check_payment_method_availability): ", e), a({
                        browserSupportPaymentRequest: !0,
                        canMakePaymentWithActiveCard: !0,
                        canMakePaymentError: e
                    })
                }))
            }, n.iosChromeGetPrime = function(t) {
                y.show().then((function(n) {
                    var r, a = e.TPDirect.paymentRequestApi.paymentRequest,
                        i = a.details.shippingOptions,
                        s = a.details.total.amount.value;
                    if (!0 === a.options.requestShipping && i && i.length) {
                        var p = i.find((function(e) {
                            return e.id === n.shippingOption
                        })).amount.value;
                        r = (parseFloat(s) + parseFloat(p)).toString()
                    } else r = s;
                    if ("basic-card" === n.methodName || "basic_card" === n.methodName) {
                        var u = n.details.cardNumber,
                            l = n.details.expiryMonth,
                            c = n.details.expiryYear.slice(2),
                            d = n.details.cardSecurityCode;
                        o = function(e) {
                            0 === e.status ? (e.payer = {
                                email: n.payerEmail,
                                name: n.payerName,
                                phone: n.payerPhone
                            }, e.billingAddress = n.details.billingAddress, e.shippingAddress = n.shippingAddress, e.shippingOption = n.shippingOption, e.methodName = "card", e.requestId = n.requestId, e.prime = e.card.prime, e.total_amount = r, n.complete("success")) : n.complete("fail"), t(e)
                        }, N({
                            event: "get_prime",
                            card: {
                                number: u,
                                exp_month: l,
                                exp_year: c,
                                ccv: d
                            }
                        })
                    }
                })).catch((function(e) {
                    var r = {
                        status: 401,
                        msg: e.message
                    };
                    t(r), n.iosChromeSetupPaymentRequest()
                }))
            }, n.applePayGetPrime = function(t) {
                i = t;
                var o = n.paymentRequest;
                "pickup" === o.options.shippingType && (o.options.shippingType = "storePickup");
                var a = new k.PaymentRequest(o.supportedInstruments, o.details, o.options);
                a.onvalidatemerchant = function(e) {
                    var t = e.validationURL,
                        o = n.apple_pay_options.merchantIdentifier,
                        i = {
                            appId: l("appID"),
                            appKey: l("appKey"),
                            appName: r,
                            appleMerchantId: o,
                            merchant_domain: r,
                            validationURL: t,
                            tappay_endpoint: l("endPoint")
                        };
                    d = function(e, t) {
                        if (e) u = new Error("[Apple Pay] Get Session error: ".concat(e.msg));
                        else if (0 === t.status)
                            if (0 === t.status && t.statusMessage) {
                                var n = t.statusMessage;
                                u = new Error("[Apple Pay] Get Session error: ".concat(n))
                            } else a.completeMerchantValidation(t);
                        else {
                            var r = t.errorMessage || t.msg;
                            u = new Error("[Apple Pay] Get Session error: ".concat(r))
                        }
                    }, N({
                        event: "apple_pay_get_session",
                        payload: i
                    })
                }, a.onshippingoptionchange = function(t) {
                    var n = JSON.parse(JSON.stringify(e.TPDirect.paymentRequestApi.paymentRequest)).details;
                    n.shippingOptions = n.shippingOptions.map((function(e) {
                        return a.shippingOption === e.id ? (e.selected = !0, n.total.amount.value = (parseFloat(n.total.amount.value) + parseFloat(e.amount.value)).toString()) : e.selected = !1, e
                    })), t.updateWith(n)
                }, a.onshippingaddresschange = function(e) {
                    var t = JSON.parse(JSON.stringify(n.paymentRequest.details));
                    t.shippingOptions && t.shippingOptions.length && (t.total.amount.value = (parseFloat(t.total.amount.value) + parseFloat(t.shippingOptions[0].amount.value)).toString()), e.updateWith(t)
                }, a.show().then((function(e) {
                    if (!Z(e.applePayRaw)) return t({
                        status: 402,
                        msg: "[Apple Pay] Parsing Apple Pay result happen error"
                    }), e.complete("fail");
                    var a = {
                            app_id: l("appID"),
                            app_key: l("appKey"),
                            app_name: r,
                            pay_token_data: e.applePayRaw.token.paymentData,
                            apple_merchant_id: n.apple_pay_options.merchantIdentifier,
                            platform_type: "2",
                            fraud_id: I(),
                            is_amount_pending: n.isAmountPending
                        },
                        i = function(r) {
                            if (0 === r.status) {
                                r.payer = {
                                    email: e.payerEmail,
                                    name: e.payerName,
                                    phone: e.payerPhone
                                }, r.billingAddress = e.details.billingAddress, r.shippingAddress = e.shippingAddress, r.shippingOption = e.shippingOption, r.methodName = "apple_pay";
                                var a = e.applePayRaw.token.paymentMethod;
                                r.card = {
                                    lastfour: a.displayName.split(" ")[1],
                                    type: ne(a.network),
                                    funding: re(a.type)
                                };
                                var i = n.paymentRequest,
                                    s = o.details.shippingOptions,
                                    p = parseFloat(i.details.total.amount.value);
                                if (!0 === i.options.requestShipping && s && s.length) {
                                    var u = s.find((function(t) {
                                        return t.id === e.shippingOption
                                    })).amount.value;
                                    r.total_amount = (p + parseFloat(u)).toString()
                                } else r.total_amount = p.toString();
                                e.complete("success")
                            } else e.complete("fail");
                            t(r)
                        },
                        s = function(n) {
                            t(n), e.complete("fail")
                        };
                    c = function(e, t) {
                        return e ? void s(e) : void i(t)
                    }, N({
                        event: "payment_request_apple_pay_get_prime",
                        parameter: a
                    })
                })).catch((function(e) {
                    var n = null;
                    return u ? (n = u.message, t({
                        status: 403,
                        msg: n
                    }), void(u = null)) : void(e && t({
                        status: 401,
                        msg: "[Apple Pay] Unexcept Error",
                        originalError: e
                    }))
                }))
            }, n
        }(0, void 0), e.TPDirect.validate = {
            cardNumber: M,
            ccv: O,
            expiry: R,
            cardType: q,
            sdkError: function() {
                return !e.TPDirect.isDoubleLoaded && n
            }
        }, U("fraud_id", (function(e) {
            ! function(e) {
                E = e
            }(e.result)
        })), U("get_prime_done", (function(e) {
            V(o) && o(e.result)
        })), U("iframe_get_prime_ready", (function() {
            b = !0, w.forEach((function(e) {
                e()
            }))
        })), U("setup_payment_request_done", (function(e) {
            a({
                browserSupportPaymentRequest: !0,
                canMakePaymentWithActiveCard: e.result.canMakePaymentWithActiveCard,
                canMakePaymentError: e.result.error
            })
        })), U("payment_request_not_support_in_iframe", (function() {
            e.TPDirect.paymentRequestApi.iosChromeSetupPaymentRequest(), e.TPDirect.paymentRequestApi.iosChromeCheckCanMakePaymentWithActiveCard()
        })), U("payment_request_get_prime_done", (function(e) {
            i(e.result)
        })), U("payment_request_apple_pay_get_prime_done", (function(e) {
            c(e.err, e.result)
        })), U("apple_pay_get_session_done", (function(e) {
            d && d(e.err, e.result)
        }))
    }(window)
}]);