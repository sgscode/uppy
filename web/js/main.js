"use strict";
function onReplyClick(event) {
    var target = event.target;
    var id = target.getAttribute('data-reply');
    var messageText = 'в ответ на пост №' + id;
    if (!id) {
        return;
    } else {
        buttonsubmit.focus();
        usercomment.focus();
        parentComment.setAttribute('value', id);
        var replyhide = document.getElementById("reply-hide");
        if (replyhide.style.display !== "block") {
            replyhide.style.display = "block";
            infomessage.innerHTML = messageText;
        } else {
            infomessage.innerHTML = messageText;
        }
    }
}
document.addEventListener("click", onReplyClick);

//function onFileInputChange(event){
//    var file = event.target.files;
//    if(file[0].size>15000000){
//        alert('Слишком большой файл');
//       // sendfile.onsubmit="return false";
//    }
//    }
//filee.addEventListener("change", onFileInputChange);

function onFormSubmit(event){
    var asd = document.getElementById("filee");
    var file = asd.files;
    if(file[0].size>15000000){
        event.preventDefault();
        alert('Слишком большой файл');
       
       
    }
}
sendfile.addEventListener("submit", onFormSubmit);

function onInfoClosedClick() {
    var replyhide = document.getElementById("reply-hide");
    var value = "";
    replyhide.style.display = "none";
    parentComment.setAttribute('value', value);
}
xclosed.addEventListener("click", onInfoClosedClick);




//
//
//!function (e) {
//    "use strict";
//    var t = function (e, t) {
//        this.init("popover", e, t)
//    };
//    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {constructor: t, setContent: function () {
//            var e = this.tip(), t = this.getTitle(), n = this.getContent();
//            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
//        }, hasContent: function () {
//            return this.getTitle() || this.getContent()
//        }, getContent: function () {
//            var e, t = this.$element, n = this.options;
//            return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content")
//        }, tip: function () {
//            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
//        }, destroy: function () {
//            this.hide().$element.off("." + this.type).removeData(this.type)
//        }});
//    var n = e.fn.popover;
//    e.fn.popover = function (n) {
//        return this.each(function () {
//            var r = e(this), i = r.data("popover"), o = "object" == typeof n && n;
//            i || r.data("popover", i = new t(this, o)), "string" == typeof n && i[n]()
//        })
//    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), e.fn.popover.noConflict = function () {
//        return e.fn.popover = n, this
//    }
//}(window.jQuery), function () {
//    var e = [].slice;
//    window.HAML = function () {
//        function t() {
//        }
//        return t.escape = function (e) {
//            return("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;")
//        }, t.cleanValue = function (e) {
//            switch (e) {
//                case null:
//                case void 0:
//                    return"";
//                case!0:
//                case!1:
//                    return"В“" + e;
//                default:
//                    return e
//                }
//        }, t.extend = function () {
//            var t, n, r, i, o, a, s;
//            for (n = arguments[0], i = 2 <= arguments.length ? e.call(arguments, 1) : [], a = 0, s = i.length; s > a; a++) {
//                r = i[a];
//                for (t in r)
//                    o = r[t], n[t] = o
//            }
//            return n
//        }, t.globals = function () {
//            return{}
//        }, t.context = function (e) {
//            return this.extend({}, t.globals(), e)
//        }, t.preserve = function (e) {
//            return e.replace(/\n/g, "&#x000A;")
//        }, t.findAndPreserve = function (e) {
//            var t;
//            return t = "textarea,pre".split(",").join("|"), e = e.replace(/\r/g, "").replace(RegExp("<(" + t + ")>([^]*?)<\\/\\1>", "g"), function (e, t, n) {
//                return"<" + t + ">" + window.HAML.preserve(n) + "</" + t + ">"
//            })
//        }, t.surround = function (e, t, n) {
//            var r;
//            return e + (null != (r = n.call(this)) ? r.replace(/^\s+|\s+$/g, "") : void 0) + t
//        }, t.succeed = function (e, t) {
//            var n;
//            return(null != (n = t.call(this)) ? n.replace(/\s+$/g, "") : void 0) + e
//        }, t.precede = function (e, t) {
//            var n;
//            return e + (null != (n = t.call(this)) ? n.replace(/^\s+/g, "") : void 0)
//        }, t.reference = function (e, t) {
//            var n, r, i, o;
//            return r = t ? t + "_" : "", r += "function" == typeof e.hamlObjectRef ? e.hamlObjectRef() : ((null != (o = e.constructor) ? o.name : void 0) || "object").replace(/\W+/g, "_").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase(), n = "function" == typeof e.to_key ? e.to_key() : "function" == typeof e.id ? e.id() : e.id ? e.id : e, i = "class='" + r + "'", n ? i += " id='" + r + "_" + n + "'" : void 0
//        }, t
//    }()
//}.call(this), function () {
//    function e(t, n, r) {
//        if (t === n)
//            return 0 !== t || 1 / t == 1 / n;
//        if (null == t || null == n)
//            return t === n;
//        if (t._chain && (t = t._wrapped), n._chain && (n = n._wrapped), t.isEqual && T.isFunction(t.isEqual))
//            return t.isEqual(n);
//        if (n.isEqual && T.isFunction(n.isEqual))
//            return n.isEqual(t);
//        var i = u.call(t);
//        if (i != u.call(n))
//            return!1;
//        switch (i) {
//            case"[object String]":
//                return t == String(n);
//            case"[object Number]":
//                return t != +t ? n != +n : 0 == t ? 1 / t == 1 / n : t == +n;
//            case"[object Date]":
//            case"[object Boolean]":
//                return+t == +n;
//            case"[object RegExp]":
//                return t.source == n.source && t.global == n.global && t.multiline == n.multiline && t.ignoreCase == n.ignoreCase
//        }
//        if ("object" != typeof t || "object" != typeof n)
//            return!1;
//        for (var o = r.length; o--; )
//            if (r[o] == t)
//                return!0;
//        r.push(t);
//        var a = 0, s = !0;
//        if ("[object Array]" == i) {
//            if (a = t.length, s = a == n.length)
//                for (; a-- && (s = a in t == a in n && e(t[a], n[a], r)); )
//                    ;
//        } else {
//            if ("constructor"in t != "constructor"in n || t.constructor != n.constructor)
//                return!1;
//            for (var l in t)
//                if (T.has(t, l) && (a++, !(s = T.has(n, l) && e(t[l], n[l], r))))
//                    break;
//            if (s) {
//                for (l in n)
//                    if (T.has(n, l) && !a--)
//                        break;
//                s = !a
//            }
//        }
//        return r.pop(), s
//    }
//    var t = this, n = t._, r = {}, i = Array.prototype, o = Object.prototype, a = Function.prototype, s = i.slice, l = i.unshift, u = o.toString, c = o.hasOwnProperty, d = i.forEach, p = i.map, f = i.reduce, h = i.reduceRight, m = i.filter, g = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, w = Array.isArray, k = Object.keys, x = a.bind, T = function (e) {
//        return new N(e)
//    };
//    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.3.1";
//    var S = T.each = T.forEach = function (e, t, n) {
//        if (null != e)
//            if (d && e.forEach === d)
//                e.forEach(t, n);
//            else if (e.length === +e.length) {
//                for (var i = 0, o = e.length; o > i; i++)
//                    if (i in e && t.call(n, e[i], i, e) === r)
//                        return
//            } else
//                for (var a in e)
//                    if (T.has(e, a) && t.call(n, e[a], a, e) === r)
//                        return
//    };
//    T.map = T.collect = function (e, t, n) {
//        var r = [];
//        return null == e ? r : p && e.map === p ? e.map(t, n) : (S(e, function (e, i, o) {
//            r[r.length] = t.call(n, e, i, o)
//        }), e.length === +e.length && (r.length = e.length), r)
//    }, T.reduce = T.foldl = T.inject = function (e, t, n, r) {
//        var i = arguments.length > 2;
//        if (null == e && (e = []), f && e.reduce === f)
//            return r && (t = T.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
//        if (S(e, function (e, o, a) {
//            i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
//        }), !i)
//            throw new TypeError("Reduce of empty array with no initial value");
//        return n
//    }, T.reduceRight = T.foldr = function (e, t, n, r) {
//        var i = arguments.length > 2;
//        if (null == e && (e = []), h && e.reduceRight === h)
//            return r && (t = T.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
//        var o = T.toArray(e).reverse();
//        return r && !i && (t = T.bind(t, r)), i ? T.reduce(o, t, n, r) : T.reduce(o, t)
//    }, T.find = T.detect = function (e, t, n) {
//        var r;
//        return C(e, function (e, i, o) {
//            return t.call(n, e, i, o) ? (r = e, !0) : void 0
//        }), r
//    }, T.filter = T.select = function (e, t, n) {
//        var r = [];
//        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (S(e, function (e, i, o) {
//            t.call(n, e, i, o) && (r[r.length] = e)
//        }), r)
//    }, T.reject = function (e, t, n) {
//        var r = [];
//        return null == e ? r : (S(e, function (e, i, o) {
//            t.call(n, e, i, o) || (r[r.length] = e)
//        }), r)
//    }, T.every = T.all = function (e, t, n) {
//        var i = !0;
//        return null == e ? i : g && e.every === g ? e.every(t, n) : (S(e, function (e, o, a) {
//            return(i = i && t.call(n, e, o, a)) ? void 0 : r
//        }), i)
//    };
//    var C = T.some = T.any = function (e, t, n) {
//        t || (t = T.identity);
//        var i = !1;
//        return null == e ? i : v && e.some === v ? e.some(t, n) : (S(e, function (e, o, a) {
//            return i || (i = t.call(n, e, o, a)) ? r : void 0
//        }), !!i)
//    };
//    T.include = T.contains = function (e, t) {
//        var n = !1;
//        return null == e ? n : y && e.indexOf === y ? -1 != e.indexOf(t) : n = C(e, function (e) {
//            return e === t
//        })
//    }, T.invoke = function (e, t) {
//        var n = s.call(arguments, 2);
//        return T.map(e, function (e) {
//            return(T.isFunction(t) ? t || e : e[t]).apply(e, n)
//        })
//    }, T.pluck = function (e, t) {
//        return T.map(e, function (e) {
//            return e[t]
//        })
//    }, T.max = function (e, t, n) {
//        if (!t && T.isArray(e))
//            return Math.max.apply(Math, e);
//        if (!t && T.isEmpty(e))
//            return-1 / 0;
//        var r = {computed: -1 / 0};
//        return S(e, function (e, i, o) {
//            var a = t ? t.call(n, e, i, o) : e;
//            a >= r.computed && (r = {value: e, computed: a})
//        }), r.value
//    }, T.min = function (e, t, n) {
//        if (!t && T.isArray(e))
//            return Math.min.apply(Math, e);
//        if (!t && T.isEmpty(e))
//            return 1 / 0;
//        var r = {computed: 1 / 0};
//        return S(e, function (e, i, o) {
//            var a = t ? t.call(n, e, i, o) : e;
//            a < r.computed && (r = {value: e, computed: a})
//        }), r.value
//    }, T.shuffle = function (e) {
//        var t, n = [];
//        return S(e, function (e, r) {
//            0 == r ? n[0] = e : (t = Math.floor(Math.random() * (r + 1)), n[r] = n[t], n[t] = e)
//        }), n
//    }, T.sortBy = function (e, t, n) {
//        return T.pluck(T.map(e, function (e, r, i) {
//            return{value: e, criteria: t.call(n, e, r, i)}
//        }).sort(function (e, t) {
//            var n = e.criteria, r = t.criteria;
//            return r > n ? -1 : n > r ? 1 : 0
//        }), "value")
//    }, T.groupBy = function (e, t) {
//        var n = {}, r = T.isFunction(t) ? t : function (e) {
//            return e[t]
//        };
//        return S(e, function (e, t) {
//            var i = r(e, t);
//            (n[i] || (n[i] = [])).push(e)
//        }), n
//    }, T.sortedIndex = function (e, t, n) {
//        n || (n = T.identity);
//        for (var r = 0, i = e.length; i > r; ) {
//            var o = r + i >> 1;
//            n(e[o]) < n(t) ? r = o + 1 : i = o
//        }
//        return r
//    }, T.toArray = function (e) {
//        return e ? e.toArray ? e.toArray() : T.isArray(e) ? s.call(e) : T.isArguments(e) ? s.call(e) : T.values(e) : []
//    }, T.size = function (e) {
//        return T.toArray(e).length
//    }, T.first = T.head = function (e, t, n) {
//        return null == t || n ? e[0] : s.call(e, 0, t)
//    }, T.initial = function (e, t, n) {
//        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
//    }, T.last = function (e, t, n) {
//        return null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
//    }, T.rest = T.tail = function (e, t, n) {
//        return s.call(e, null == t || n ? 1 : t)
//    }, T.compact = function (e) {
//        return T.filter(e, function (e) {
//            return!!e
//        })
//    }, T.flatten = function (e, t) {
//        return T.reduce(e, function (e, n) {
//            return T.isArray(n) ? e.concat(t ? n : T.flatten(n)) : (e[e.length] = n, e)
//        }, [])
//    }, T.without = function (e) {
//        return T.difference(e, s.call(arguments, 1))
//    }, T.uniq = T.unique = function (e, t, n) {
//        var r = n ? T.map(e, n) : e, i = [];
//        return T.reduce(r, function (n, r, o) {
//            return 0 != o && (t === !0 ? T.last(n) == r : T.include(n, r)) || (n[n.length] = r, i[i.length] = e[o]), n
//        }, []), i
//    }, T.union = function () {
//        return T.uniq(T.flatten(arguments, !0))
//    }, T.intersection = T.intersect = function (e) {
//        var t = s.call(arguments, 1);
//        return T.filter(T.uniq(e), function (e) {
//            return T.every(t, function (t) {
//                return T.indexOf(t, e) >= 0
//            })
//        })
//    }, T.difference = function (e) {
//        var t = T.flatten(s.call(arguments, 1));
//        return T.filter(e, function (e) {
//            return!T.include(t, e)
//        })
//    }, T.zip = function () {
//        for (var e = s.call(arguments), t = T.max(T.pluck(e, "length")), n = new Array(t), r = 0; t > r; r++)
//            n[r] = T.pluck(e, "" + r);
//        return n
//    }, T.indexOf = function (e, t, n) {
//        if (null == e)
//            return-1;
//        var r, i;
//        if (n)
//            return r = T.sortedIndex(e, t), e[r] === t ? r : -1;
//        if (y && e.indexOf === y)
//            return e.indexOf(t);
//        for (r = 0, i = e.length; i > r; r++)
//            if (r in e && e[r] === t)
//                return r;
//        return-1
//    }, T.lastIndexOf = function (e, t) {
//        if (null == e)
//            return-1;
//        if (b && e.lastIndexOf === b)
//            return e.lastIndexOf(t);
//        for (var n = e.length; n--; )
//            if (n in e && e[n] === t)
//                return n;
//        return-1
//    }, T.range = function (e, t, n) {
//        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
//        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i; )
//            o[i++] = e, e += n;
//        return o
//    };
//    var E = function () {
//    };
//    T.bind = function (e, t) {
//        var n, r;
//        if (e.bind === x && x)
//            return x.apply(e, s.call(arguments, 1));
//        if (!T.isFunction(e))
//            throw new TypeError;
//        return r = s.call(arguments, 2), n = function () {
//            if (!(this instanceof n))
//                return e.apply(t, r.concat(s.call(arguments)));
//            E.prototype = e.prototype;
//            var i = new E, o = e.apply(i, r.concat(s.call(arguments)));
//            return Object(o) === o ? o : i
//        }
//    }, T.bindAll = function (e) {
//        var t = s.call(arguments, 1);
//        return 0 == t.length && (t = T.functions(e)), S(t, function (t) {
//            e[t] = T.bind(e[t], e)
//        }), e
//    }, T.memoize = function (e, t) {
//        var n = {};
//        return t || (t = T.identity), function () {
//            var r = t.apply(this, arguments);
//            return T.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
//        }
//    }, T.delay = function (e, t) {
//        var n = s.call(arguments, 2);
//        return setTimeout(function () {
//            return e.apply(e, n)
//        }, t)
//    }, T.defer = function (e) {
//        return T.delay.apply(T, [e, 1].concat(s.call(arguments, 1)))
//    }, T.throttle = function (e, t) {
//        var n, r, i, o, a, s = T.debounce(function () {
//            a = o = !1
//        }, t);
//        return function () {
//            n = this, r = arguments;
//            var l = function () {
//                i = null, a && e.apply(n, r), s()
//            };
//            i || (i = setTimeout(l, t)), o ? a = !0 : e.apply(n, r), s(), o = !0
//        }
//    }, T.debounce = function (e, t) {
//        var n;
//        return function () {
//            var r = this, i = arguments, o = function () {
//                n = null, e.apply(r, i)
//            };
//            clearTimeout(n), n = setTimeout(o, t)
//        }
//    }, T.once = function (e) {
//        var t, n = !1;
//        return function () {
//            return n ? t : (n = !0, t = e.apply(this, arguments))
//        }
//    }, T.wrap = function (e, t) {
//        return function () {
//            var n = [e].concat(s.call(arguments, 0));
//            return t.apply(this, n)
//        }
//    }, T.compose = function () {
//        var e = arguments;
//        return function () {
//            for (var t = arguments, n = e.length - 1; n >= 0; n--)
//                t = [e[n].apply(this, t)];
//            return t[0]
//        }
//    }, T.after = function (e, t) {
//        return 0 >= e ? t() : function () {
//            return--e < 1 ? t.apply(this, arguments) : void 0
//        }
//    }, T.keys = k || function (e) {
//        if (e !== Object(e))
//            throw new TypeError("Invalid object");
//        var t = [];
//        for (var n in e)
//            T.has(e, n) && (t[t.length] = n);
//        return t
//    }, T.values = function (e) {
//        return T.map(e, T.identity)
//    }, T.functions = T.methods = function (e) {
//        var t = [];
//        for (var n in e)
//            T.isFunction(e[n]) && t.push(n);
//        return t.sort()
//    }, T.extend = function (e) {
//        return S(s.call(arguments, 1), function (t) {
//            for (var n in t)
//                e[n] = t[n]
//        }), e
//    }, T.defaults = function (e) {
//        return S(s.call(arguments, 1), function (t) {
//            for (var n in t)
//                null == e[n] && (e[n] = t[n])
//        }), e
//    }, T.clone = function (e) {
//        return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
//    }, T.tap = function (e, t) {
//        return t(e), e
//    }, T.isEqual = function (t, n) {
//        return e(t, n, [])
//    }, T.isEmpty = function (e) {
//        if (T.isArray(e) || T.isString(e))
//            return 0 === e.length;
//        for (var t in e)
//            if (T.has(e, t))
//                return!1;
//        return!0
//    }, T.isElement = function (e) {
//        return!(!e || 1 != e.nodeType)
//    }, T.isArray = w || function (e) {
//        return"[object Array]" == u.call(e)
//    }, T.isObject = function (e) {
//        return e === Object(e)
//    }, T.isArguments = function (e) {
//        return"[object Arguments]" == u.call(e)
//    }, T.isArguments(arguments) || (T.isArguments = function (e) {
//        return!(!e || !T.has(e, "callee"))
//    }), T.isFunction = function (e) {
//        return"[object Function]" == u.call(e)
//    }, T.isString = function (e) {
//        return"[object String]" == u.call(e)
//    }, T.isNumber = function (e) {
//        return"[object Number]" == u.call(e)
//    }, T.isNaN = function (e) {
//        return e !== e
//    }, T.isBoolean = function (e) {
//        return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
//    }, T.isDate = function (e) {
//        return"[object Date]" == u.call(e)
//    }, T.isRegExp = function (e) {
//        return"[object RegExp]" == u.call(e)
//    }, T.isNull = function (e) {
//        return null === e
//    }, T.isUndefined = function (e) {
//        return void 0 === e
//    }, T.has = function (e, t) {
//        return c.call(e, t)
//    }, T.noConflict = function () {
//        return t._ = n, this
//    }, T.identity = function (e) {
//        return e
//    }, T.times = function (e, t, n) {
//        for (var r = 0; e > r; r++)
//            t.call(n, r)
//    }, T.escape = function (e) {
//        return("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
//    }, T.mixin = function (e) {
//        S(T.functions(e), function (t) {
//            L(t, T[t] = e[t])
//        })
//    };
//    var _ = 0;
//    T.uniqueId = function (e) {
//        var t = _++;
//        return e ? e + t : t
//    }, T.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
//    var j = /.^/, A = function (e) {
//        return e.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
//    };
//    T.template = function (e, t) {
//        var n = T.templateSettings, r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape || j, function (e, t) {
//            return"',_.escape(" + A(t) + "),'"
//        }).replace(n.interpolate || j, function (e, t) {
//            return"'," + A(t) + ",'"
//        }).replace(n.evaluate || j, function (e, t) {
//            return"');" + A(t).replace(/[\r\n\t]/g, " ") + ";__p.push('"
//        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", i = new Function("obj", "_", r);
//        return t ? i(t, T) : function (e) {
//            return i.call(this, e, T)
//        }
//    }, T.chain = function (e) {
//        return T(e).chain()
//    };
//    var N = function (e) {
//        this._wrapped = e
//    };
//    T.prototype = N.prototype;
//    var D = function (e, t) {
//        return t ? T(e).chain() : e
//    }, L = function (e, t) {
//        N.prototype[e] = function () {
//            var e = s.call(arguments);
//            return l.call(e, this._wrapped), D(t.apply(T, e), this._chain)
//        }
//    };
//    T.mixin(T), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
//        var t = i[e];
//        N.prototype[e] = function () {
//            var n = this._wrapped;
//            t.apply(n, arguments);
//            var r = n.length;
//            return"shift" != e && "splice" != e || 0 !== r || delete n[0], D(n, this._chain)
//        }
//    }), S(["concat", "join", "slice"], function (e) {
//        var t = i[e];
//        N.prototype[e] = function () {
//            return D(t.apply(this._wrapped, arguments), this._chain)
//        }
//    }), N.prototype.chain = function () {
//        return this._chain = !0, this
//    }, N.prototype.value = function () {
//        return this._wrapped
//    }
//}.call(this);
//var RGHost = {};
//window.RGHost = RGHost, jQuery(function (e) {
//    e(".dropdown-toggle").dropdown(), function () {
//        var t = "File size limit is exceeded";
//        e(document).ready(function () {
//            e("[data-upload-progress-for]").each(function () {
//                var n = e(this);
//                e("#" + n.attr("data-upload-progress-for")).submit(function (r) {
//                    var i = e(this).get(0), o = new RGHost.ProgressDisplay(n, i), a = RGHost.uploader(), s = new a(i, o), l = 0 + n.attr("data-max-file-size"), u = !0;
//                    e("input[type=file]", i).each(function (e, n) {
//                        n.files && 1 == n.files.length && (n.files[0].size || n.files[0].fileSize) > l && (o.error(t), u = !1, r.preventDefault())
//                    }), u && (s.start(i.action, n.data("status-url")), a.stopFormFromSubmitting() && r.preventDefault()), e(".upload-cancel-button", n).click(function () {
//                        s.cancel()
//                    })
//                }).each(function () {
//                    n.attr("data-upload-url", e(this).get(0).action)
//                })
//            })
//        })
//    }(), e(document).ready(function () {
//        e("input[data-check-all-input]").click(function () {
//            var t = e(this).get(0).checked;
//            e('input[name="' + e(this).attr("data-check-all-input") + '"]', e(this).parents("form")).each(function () {
//                e(this).get(0).checked = t
//            })
//        })
//    }), e("body").click(function (t) {
//        return sender = t.target, e(sender).data("urlout") && (e(sender).data("ga") && (c = e(sender).data("gacategory"), l = e(sender).data("galabel"), ga("send", "event", c, l)), window.open(e(sender).data("urlout"), "_blank")), !0
//    }), e(document).ready(function () {
//        setTimeout(function () {
//            e("#flash_container .flash").slideUp()
//        }, 1e4)
//    }), e(document).ready(function () {
//        e(".js-download-link-update").each(function () {
//            var t = e(this), n = t.data("update-url");
//            e.ajax({type: "POST", url: n, dataType: "json", success: function (e) {
//                    t.attr("href", e.url)
//                }})
//        })
//    }), e(".reformal_feedback").click(function (t) {
//        var n, r, i;
//        n = "http://reformal.ru/widget/52270?_=" + Math.round(1e4 * Math.random()), r = e("<div>").attr({id: "reformal_widget"}).html('<a href="#" id="reformal_widget-close"></a><iframe scrolling=\'no\' src="' + n + '" frameborder="0" width="100%" height="100%"></iframe>'), i = function (t) {
//            t.preventDefault(), r.remove(), e("#screen").hide().unbind("click", i)
//        }, e("body").append(r), e("#screen").show().click(i), r.find("#reformal_widget-close").click(i), t.preventDefault()
//    })
//}), function () {
//    var e, t = this;
//    e = function (e, t) {
//        var n, r, i, o, a;
//        return i = function (e) {
//            return(e + "").replace(/[&<>'"]/g, function (e) {
//                return"&#" + e.charCodeAt() + ";"
//            })
//        }, o = function (e, o, s) {
//            return o = o.replace(a, "[PROJECT ROOT]"), '<?xml vesrsion="1.0" encoding="UTF-8"?>\n<notice version="2.0">\n  <api-key>' + n + "</api-key>\n  <notifier>\n    <name>hoptoad_notifier_js</name>\n    <version>0.1.0</version>\n    <url>http://airbrakeapp.com</url>\n  </notifier>\n  <error>\n    <class>Error</class>\n    <message>" + i(e) + '</message>\n    <backtrace>\n      <line method="" file="' + i(o) + '" number="' + i(s) + '" />\n    </backtrace>\n  </error\n  <request>\n    <component>frontend</component>\n    <action>javascript</action>\n    <url>' + t.href + '</url>\n    <cgi-data>\n      <var key="HTTP_USER_AGENT">' + navigator.userAgent + '</var>\n      <var key="HTTP_REFERER">' + document.referrer + "</var>\n    </cgi-data>\n  </request>\n  <server-environment>\n    <project-root>" + a + "</project-root>\n    <environment-name>" + r + "</environemt-name>\n  </server-environemt>\n</notice>"
//        }, a = t.protocol + "//" + t.host, n = $('meta[name="airbrake"]').attr("key"), r = $('meta[name="airbrake"]').attr("env"), (e.Airbrake = {}).notify = function (e, t, r) {
//            return n ? (new Image).src = "http://airbrakeapp.com/notifier_api/v2/notices?data=" + encodeURIComponent(o(e, t, r)) : void 0
//        }, e.onerror = function (e) {
//            return function (t, n, r) {
//                return Airbrake.notify(t, n, r), e ? e(t, n, r) : void 0
//            }
//        }(e.onerror)
//    }, $(function () {
//        return e(t, location)
//    })
//}.call(this), function () {
//    null == window.JST && (window.JST = {}), window.JST["include/files/qr"] = function (e) {
//        return function () {
//            var e, t, n;
//            return t = window.HAML.escape, e = window.HAML.cleanValue, n = [], n.push("<div class='modal qr'>\n  <div class='modal-header'>\n    <a class='close' href='#'>Г—</a>\n    <h2>QR</h2>\n  </div>\n  <div class='modal-body'>\n    <img src='https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + t(e(encodeURIComponent(location.href))) + "'>\n  </div>\n</div>"), n.join("\n").replace(/\s(\w+)='В“true'/gm, " $1").replace(/\s(\w+)='В“false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
//        }.call(window.HAML.context(e))
//    }
//}.call(this), function () {
//}.call(this), jQuery(function (e) {
//    e(document).ready(function () {
//        document.referrer.match(/rghost|google|yandex|bing|mail\.ru|youtube|gmail|adf\.ly|facebook|ok\.ru|/) || e("#flimb_scan_d").val(document.referrer)
//    })
//}), function () {
//    var e;
//    e = function () {
//        return ga("send", "event", "errors", "jserror")
//    }, window.onerror = function (t) {
//        return function (n, r, i) {
//            return e(n, r, i), t ? t(n, r, i) : void 0
//        }
//    }(window.onerror)
//}.call(this), function () {
//    RGHost.ModalDialog = function () {
//        function e() {
//        }
//        return e.prototype.show = function (e) {
//            var t = this;
//            return this.html = e, this.screen = $("<div>").attr({id: "screen"}).appendTo(document.body).css({height: $(document).height()}), this.screen.click(function () {
//                return t.hide()
//            }), this.html = $(e), this.html.show().on("click", ".close, .cancel", function (e) {
//                return e.preventDefault(), t.hide()
//            })
//        }, e.prototype.hide = function () {
//            return this.screen.hide(), this.html.hide()
//        }, e
//    }(), $(function () {
//        return $("[data-modal-link]").click(function (e) {
//            var t;
//            return t = new RGHost.ModalDialog, $(document).on("keyup", function (e) {
//                return 27 === e.keyCode ? t.hide() : void 0
//            }), t.show($($(this).data("modal-link"))), e.preventDefault()
//        })
//    })
//}.call(this), function () {
//    null == window.JST && (window.JST = {}), window.JST["include/multiupload/upload_form"] = function (e) {
//        return function () {
//            var e, n, r;
//            return n = window.HAML.escape, e = window.HAML.cleanValue, r = [], r.push("<form enctype='multipart/form-data' method='post' action='/files'>\n  <input type='hidden' name='multiple' value='true'>\n  <a class='disclosure-triangle' href='#'>" + n(e(t("multiupload.actions.disclosure_triangle"))) + "</a>\n  <input class='file-uploads' type='file' name='file'>\n  <a class='delete' href='#'>" + n(e(t("multiupload.actions.remove_link"))) + "</a>\n  <div class='description-form' style='display: none'>\n    <div class='clearfix'>\n      <label>" + n(e(t("files.fields.description"))) + "</label>\n      <div class='input'>\n        <textarea name='description'></textarea>\n      </div>\n    </div>\n    <div class='clearfix'>\n      <label>" + n(e(t("files.fields.edit.tags"))) + "</label>\n      <div class='input'>\n        <input name='tags'>\n      </div>\n    </div>\n  </div>\n</form>"), r.join("\n").replace(/\s(\w+)='В“true'/gm, " $1").replace(/\s(\w+)='В“false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
//        }.call(window.HAML.context(e))
//    }
//}.call(this), function () {
//    $(function () {
//        var e, n, r, i, o, a;
//        if (0 !== $("#multiple___index").length)
//            return $("#js_warning").hide(), e = $("#files"), o = function () {
//                var t;
//                return t = e.find(".delete"), 1 === t.length ? t.hide() : t.show()
//            }, a = function (e) {
//                var t, n, r, i;
//                for (t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(""), e || (e = Math.floor(Math.random() * t.length)), r = "", n = 0, n = i = 1; e >= 1?e >= i:i >= e; n = e >= 1?++i:--i)
//                    r += t[Math.floor(Math.random() * t.length)];
//                return r
//            }, i = function (e) {
//                var t;
//                return t = $(e), t.find("label").each(function () {
//                    var e, t;
//                    return t = $(this).closest(".clearfix").find("input, textarea"), e = a(10), t.attr("id", e), $(this).attr("for", e)
//                }), t
//            }, r = function () {
//                return _(e.find(".file-uploads")).all(function (e) {
//                    return e.value.length > 0
//                }) && i(JST["include/multiupload/upload_form"]()).hide().appendTo(e).slideDown("slow"), o()
//            }, e.on("change", ".file-uploads", function () {
//                return r()
//            }), e.on("click", ".delete", function (e) {
//                return $(this).closest("form").slideUp(function () {
//                    return $(this).remove(), r()
//                }), e.preventDefault()
//            }), e.on("click", ".disclosure-triangle", function (e) {
//                var n;
//                return e.preventDefault(), n = $(this).closest("form").find(".description-form"), "none" === n.css("display") ? ($(this).text(t("multiupload.actions.disclosed_triangle")), n.slideDown()) : ($(this).text(t("multiupload.actions.disclosure_triangle")), n.slideUp())
//            }), n = function () {
//                function e(e) {
//                    this.container = e, this.file = 0, this.ids = []
//                }
//                return e.prototype.start = function () {
//                    return this.container.find("form").each(function () {
//                        var e;
//                        return e = new RGHost.ProgressDisplay($("<div>").appendTo($(this)).addClass("upload-progress-container")), e.hide(), $(this).data("progress_display", e)
//                    }), this.getInitialHost()
//                }, e.prototype.addAuthenticityToken = function (e) {
//                    return this.container.find("form").each(function () {
//                        return $(this).append($("<input>").attr({type: "hidden", name: "authenticity_token", value: e}))
//                    })
//                }, e.prototype.getInitialHost = function () {
//                    var e = this;
//                    return $.ajax({url: "/multiple/upload_host.json", method: "get", success: function (t) {
//                            return e.addAuthenticityToken(t.authenticity_token), e.premium = t.premium, e.uploadNextFile(t.upload_host)
//                        }, error: function () {
//                        }})
//                }, e.prototype.currentForm = function () {
//                    return this.container.find("form:nth-child(" + this.file + ")")
//                }, e.prototype.uploadNextFile = function (e) {
//                    var t, n, r, i, o;
//                    return null != (i = this.currentForm().data("progress_display")) && i.hide(), this.file++, t = this.currentForm(), 0 === t.length ? this.done() : (null != (o = t.find("input[type=file]").val()) ? o.length : void 0) > 0 ? (this.setupHooks(), r = RGHost.uploader(), n = new r(t, t.data("progress_display").show()), n.start("http://" + e + "/" + (this.premium ? "premium/" : "") + "files?multiple=true", "http://" + e + "/progress"), r.stopFormFromSubmitting() ? void 0 : ($('input[type="file"]').prop({disabled: !1}), t.submit(), $('input[type="file"]').prop({disabled: !0}))) : this.uploadNextFile(e)
//                }, e.prototype.setupHooks = function () {
//                    var e = this;
//                    return window.muFinish = function (t, n) {
//                        return e.ids.push(n), e.uploadNextFile(t)
//                    }, window.muFail = function (t) {
//                        return e.currentForm().data("progress_display").error(t)
//                    }
//                }, e.prototype.done = function () {
//                    return location.href = "/users/me/files?" + $.param({highlight: this.ids})
//                }, e
//            }(), $("a.upload").click(function (t) {
//                return $(this).prop("disabled", !0), e.find("input, textarea").prop("disabled", !0), new n(e).start(), $(this).hide(), t.preventDefault()
//            }), r()
//    })
//}.call(this), function () {
//    $(function () {
//        return $("section#details li.qr a").on("click", function (e) {
//            var t;
//            return t = $(JST["include/files/qr"]()).appendTo(document.body), (new RGHost.ModalDialog).show(t), e.preventDefault(), ga("send", "event", "actions", "qr")
//        })
//    })
//}.call(this), jQuery(function (e) {
//    e("[data-remote][data-replace]").data("type", "html").bind("ajax:success", function (t, n) {
//        var r = e(this);
//        e(r.data("replace")).html(n), r.trigger("ajax:replaced")
//    })
//}), $(function () {
//    $("#share42").each(function () {
//        var e, n, r, i, o;
//        n = $(this).attr("data-share42-url") || location.href, i = $(this).attr("data-share42-text") || document.title, r = $(this).attr("data-share42-locale") || "ru", n = encodeURIComponent(n), i = encodeURIComponent(i), o = {}, o.facebook = "http://www.facebook.com/sharer.php?u=" + n + "&t=" + i, o.mailru = "http://connect.mail.ru/share?url=" + n + "&title=" + i, o.twitter = "http://twitter.com/share?url=" + n + "&text=" + i, o.vkontakte = "http://vkontakte.ru/share.php?url=" + n, o.blogger = "http://www.blogger.com/blog_this.pyra?t&u=" + n + "&n=" + i, o.livejournal = "http://www.livejournal.com/update.bml?event=" + n + "&subject=" + i, e = "ru" == r ? ["facebook", "mailru", "twitter", "vkontakte"] : ["facebook", "blogger", "livejournal", "twitter"];
//        for (var a = 0; a < e.length; a++)
//            $(this).append($('<a rel="nofollow" class="' + e[a] + '" href="' + o[e[a]] + '" title="' + t("share42." + e[a]) + '" target="_blank"></a>'));
//        $(this).find("a").click(function () {
//            ga("send", "social", "socialNetwork", $(this).closest("a").attr("class"), "Share")
//        })
//    })
//}), function () {
//    var e;
//    e = {ar: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Ш§Щ„Щ€Ш«ЩЃ", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "ШіШ±ЩЉШ№", "progressbar.eta": "ETA", "progressbar.uploaded": "ШЄЩ… Ш±ЩЃШ№"}, ca: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, cs: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, da: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, de: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, el: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, en: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, "en-GB": {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, es: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, et: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, fa: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "ШЄЩ€Ш¶ЫЊШ­", "files.fields.edit.tags": "ШЁШ±Ъ†ШіШЁ Щ‡Ш§", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "ШіШ±Ш­ШЄ", "progressbar.eta": "ШІЩ…Ш§Щ† ЩѕШ§ЫЊШ§Щ†", "progressbar.uploaded": "ШўЩѕЩ„Щ€ШЇ ШґШЇЩ‡"}, fi: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, fr: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, he: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, hr: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, hu: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, id: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Deskripsi", "files.fields.edit.tags": "Tag", "common.buttons.cancel": "Batalkan", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Kecepatan", "progressbar.eta": "Estimasi", "progressbar.uploaded": "Terunggah"}, is: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, it: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, ja: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, ko: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, lt: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, lv: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, my: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, nb: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, nl: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, no: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, pl: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Opis", "files.fields.edit.tags": "Tagi", "common.buttons.cancel": "Anuluj", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "PrД™dkoЕ›Д‡", "progressbar.eta": "ETA", "progressbar.uploaded": "PrzesЕ‚ane"}, pt: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, "pt-BR": {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, ro: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, ru: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "РћРїРёСЃР°РЅРёРµ", "files.fields.edit.tags": "РўРµРіРё", "common.buttons.cancel": "РћС‚РјРµРЅР°", "share42.facebook": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Р”РѕР±Р°РІРёС‚СЊ РІ Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "РЎРєРѕСЂРѕСЃС‚СЊ", "progressbar.eta": "РћСЃС‚Р°Р»РѕСЃСЊ", "progressbar.uploaded": "Р—Р°РіСЂСѓР¶РµРЅРѕ"}, sk: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, sl: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, sv: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, th: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, tr: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "TanД±mlama", "files.fields.edit.tags": "Etiketler", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "HД±z", "progressbar.eta": "ETA", "progressbar.uploaded": "YГјklendi"}, uk: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, vi: {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, "zh-CN": {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, "zh-HK": {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}, "zh-TW": {"multiupload.actions.remove_link": "вњ", "multiupload.actions.disclosure_triangle": "в–є", "multiupload.actions.disclosed_triangle": "в–ј", "files.fields.description": "Description", "files.fields.edit.tags": "Tags", "common.buttons.cancel": "Cancel", "share42.facebook": "Share to Facebook", "share42.blogger": "BlogThis!", "share42.twitter": "Share to Twitter", "share42.livejournal": "Post to LiveJournal", "share42.vkontakte": "РџРѕРґРµР»РёС‚СЊСЃСЏ Р’ РљРѕРЅС‚Р°РєС‚Рµ", "share42.mailru": "РџРѕРґРµР»РёС‚СЊСЃСЏ РІ РњРѕРµРј РњРёСЂРµ@Mail.Ru", "progressbar.speed": "Speed", "progressbar.eta": "ETA", "progressbar.uploaded": "Uploaded"}}, window.t = function (t) {
//        var n;
//        return n = $("html").attr("lang"), e[n][t] || e.en[t] || e.ru[t] || "Could not find translation " + t + " in " + n
//    }
//}.call(this), function () {
//}.call(this), function () {
//    RGHost.HTML5Uploader = function () {
//        function HTML5Uploader(e, t) {
//            this.form = e, this.progressDisplay = t
//        }
//        return HTML5Uploader.canDo = function () {
//            return"undefined" != typeof FormData && (new XMLHttpRequest).upload
//        }, HTML5Uploader.stopFormFromSubmitting = function () {
//            return!0
//        }, HTML5Uploader.prototype.start = function (url, statusUrl, fileToUpload) {
//            var deferred, fd, fileName, req, _this = this;
//            return null == statusUrl && (statusUrl = null), null == fileToUpload && (fileToUpload = null), deferred = jQuery.Deferred(), req = new XMLHttpRequest, fd = new FormData, fileName = null, $(this.form).find("input, textarea").each(function () {
//                return fileToUpload && "file" === $(this).attr("type") ? (fileName = $(this).attr("name"), void 0) : fd.append($(this).attr("name"), "file" === $(this).attr("type") ? this.files[0] : $(this).val())
//            }), fileToUpload && fd.append(fileName, fileToUpload), req.open("POST", url, !0), req.upload.onprogress = function (e) {
//                return _this.progressDisplay.uploading(e.total, e.loaded)
//            }, req.upload.onload = function () {
//                return _this.progressDisplay.done()
//            }, req.upload.onerror = function () {
//                return _this.canceled ? void 0 : (_this.progressDisplay.error(), deferred.reject())
//            }, req.onreadystatechange = function (e) {
//                return 4 === req.readyState ? 200 === req.status && "text/javascript" === req.getResponseHeader("Content-Type").substring(0, 15) ? (eval(req.responseText), deferred.resolve(req.responseText)) : _this.canceled ? void 0 : (_this.progressDisplay.error(), deferred.reject()) : void 0
//            }, req.setRequestHeader("If-Modified-Since", "Mon, 26 Jul 1997 05:00:00 GMT"), req.setRequestHeader("X-Requested-With", "XMLHttpRequest"), req.setRequestHeader("X-Awesome-Uploader", "is awesome"), req.withCredentials = !0, req.send(fd), this.progressDisplay.starting(), this.req = req, deferred
//        }, HTML5Uploader.prototype.cancel = function () {
//            return this.canceled = !0, this.req.abort(), this.progressDisplay.cancel(), deferred.reject()
//        }, HTML5Uploader
//    }()
//}.call(this), function () {
//    $(function () {
//        return $("[data-upload-progress-for]").each(function () {
//            var e, t, n, r, i, o, a, s, l, u, c, d;
//            return l = $(this), o = 0, u = function (e) {
//                return e.stopPropagation(), e.preventDefault()
//            }, t = function (e) {
//                return u(e), 0 === o && $("#dropbox").show(), o++
//            }, n = function (e) {
//                return u(e), o--, 0 === o ? $("#dropbox").hide() : void 0
//            }, r = u, c = null, a = null, s = function (e) {
//                var t, n;
//                return a = document.getElementById(l.data("upload-progress-for")), n = new RGHost.uploader(l.data("upload-url")), t = new RGHost.ProgressDisplay(l, a), n = RGHost.uploader(), c = new n(a, t), _.any(function () {
//                    return e.length > maxUploadFileSize
//                }) ? (t.error("File size limit is exceeded"), !1) : !0
//            }, d = function (e, t) {
//                return e.length !== t ? c.start(a.action, l.data("status-url"), e[t]).then(function () {
//                    return d(e, t + 1)
//                }) : void 0
//            }, i = function (e) {
//                var t;
//                return u(e), o = 0, $("#dropbox").hide(), t = e.dataTransfer.files, t.length > 0 && s(t) ? d(t, 0) : void 0
//            }, e = document.body, e.addEventListener("dragover", u, !1), e.addEventListener("dragleave", n, !1), e.addEventListener("dragenter", t, !1), e.addEventListener("drop", i, !1)
//        })
//    })
//}.call(this), function () {
//    RGHost.IFrameUploading = function () {
//        function e(e, t) {
//            this.form = e, this.progressDisplay = t
//        }
//        return e.canDo = function () {
//            return!0
//        }, e.stopFormFromSubmitting = function () {
//            return!1
//        }, e.prototype.start = function (e, t) {
//            var n, r, i, o = this;
//            return i = Math.floor(2147483648 * Math.random()), e += (-1 !== e.indexOf("?") ? "&" : "?") + "X-Progress-Id=" + i, $(this.form).attr("action", e), r = "upload_frame_" + i, $("body").append($("<iframe src='about:blank' name='" + r + "'>").attr({id: r}).hide()), $(this.form).attr("target", r), n = function () {
//                var e;
//                if (!o.canceled)
//                    return e = document.createElement("script"), e.src = t + "?rand=" + Math.random() + "&X-Progress-Id=" + i, e.async = !0, document.body.appendChild(e)
//            }, setTimeout(n, 1e3), this.progressDisplay.starting(), window.eyp = function (e) {
//                switch (e.state) {
//                    case"error":
//                        o.progressDisplay.error();
//                        break;
//                    case"uploading":
//                        o.progressDisplay.uploading(e.size, e.received);
//                        break;
//                    case"done":
//                        o.progressDisplay.done();
//                        break;
//                    case"starting":
//                        o.progressDisplay.starting()
//                }
//                return setTimeout(n, 1e3)
//            }
//        }, e.prototype.cancel = function () {
//            var e;
//            try {
//                window.stop()
//            } catch (t) {
//                e = t;
//                try {
//                    document.execCommand("Stop")
//                } catch (t) {
//                    e = t, location.href = self.location
//                }
//            }
//            return this.canceled = !0, this.progressDisplay.cancel()
//        }, e
//    }()
//}.call(this), function () {
//    RGHost.ProgressDisplay = function () {
//        function e(e, t) {
//            this.container = $(e), this.container.html(JST["include/upload/progress_display"]()), this.form = $(t)
//        }
//        var t, n, r, i, o, a;
//        return o = ["b", "KB", "MB", "GB", "TB"], i = "kBps", a = function (e) {
//            return Math.round(100 * e) / 100
//        }, r = function (e, t) {
//            var n;
//            for (n = 0; n < o.length && !(2048 > t); )
//                e /= 1024, t /= 1024, n++;
//            return"" + a(e) + "/" + a(t) + " " + o[n]
//        }, t = function (e) {
//            return"" + a(e) + " " + i
//        }, n = function (e) {
//            var t, n, r, i;
//            return t = Math.round(e / 3600), i = Math.round(e % 3600), n = Math.round(i / 60), r = Math.round(i % 60), 10 > r && (r = "0" + r), 10 > n && (n = "0" + n), (t > 0 ? "" + t + ":" : "") + n + ":" + r
//        }, e.prototype.advance = function (e) {
//            return this.container.find(".progress-inner").animate({width: Math.round(this.container.find(".status").width() * e) + "px"}, {duration: "slow", queue: !1})
//        }, e.prototype.error = function (e) {
//            return this.container.find(".upload-error").text(e || "Error has occurred while uploading").show(), ga("send", "event", "errors", "upload"), this.cancel()
//        }, e.prototype.uploading = function (e, i) {
//            var o;
//            return this.container.find(".progress-status").text(Math.floor(1e4 * i / e) / 100 + "%"), this.container.find(".progress-uploaded").text(r(i, e)), this.start_date ? (o = i / ((new Date - this.start_date) / 1e3), this.container.find(".progress-speed").text(t(o / 1024)), this.container.find(".progress-eta").text(n((e - i) / o))) : this.start_date = new Date, this.advance(1 * i / e)
//        }, e.prototype.done = function () {
//            return this.advance(1)
//        }, e.prototype.hide = function () {
//            return this.container.hide(), this
//        }, e.prototype.show = function () {
//            return this.container.show(), this
//        }, e.prototype.starting = function () {
//            return ga("send", "event", "errors", "upload"), this.container.show(), this.container.find(".upload-error").hide(), this.form.hide()
//        }, e.prototype.cancel = function () {
//            return this.container.hide(), this.form.show()
//        }, e
//    }()
//}.call(this), function () {
//    null == window.JST && (window.JST = {}), window.JST["include/upload/progress_display"] = function (e) {
//        return function () {
//            var e, n, r;
//            return n = window.HAML.escape, e = window.HAML.cleanValue, r = [], r.push("<input class='btn upload upload-cancel-button' type='button' value='" + n(e(t("common.buttons.cancel"))) + "'>\n<div class='status'>\n  <div class='progress-inner'></div>\n  <div class='progress-status'></div>\n</div>\n<div class='status_text'>"), r.push("  " + n(e(" " + t("progressbar.uploaded") + ":"))), r.push("  &nbsp;\n  В‘<span class='progress-uploaded'>0</span>В’\n  ;"), r.push("  " + n(e(" " + t("progressbar.speed") + ":"))), r.push("  &nbsp;\n  В‘<span class='progress-speed'>0</span>В’\n  ;"), r.push("  " + n(e(" " + t("progressbar.eta") + ":"))), r.push("  &nbsp;\n  <span class='progress-eta'>0</span>\n</div>"), r.join("\n").replace(/\s(\w+)='В“true'/gm, " $1").replace(/\s(\w+)='В“false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "").replace(/[\s\n]*\u0091/gm, "").replace(/\u0092[\s\n]*/gm, "")
//        }.call(window.HAML.context(e))
//    }
//}.call(this), function () {
//    var e;
//    e = [RGHost.HTML5Uploader, RGHost.IFrameUploading], RGHost.uploader = function () {
//        return _(e).find(function (e) {
//            return e.canDo()
//        })
//    }
//}.call(this);