(self.webpackChunk = self.webpackChunk || []).push([
    [353],
    {
        2070: function (e, t, n) {
            "use strict";
            n.r(t);
            var i = n(5090),
                h = n.n(i);
            window.$;
            window.Vue.component("code-diff-result", {
                props: [
                    "contentOne",
                    "contentTwo",
                    "type",
                    "additionClass",
                    "deletionClass",
                    "commonPartClass",
                ],
                template: "<div></div>",
                computed: {
                    codes: function () {
                        return [this.contentOne, this.contentTwo, this.type];
                    },
                },
                methods: {
                    update: function () {
                        this.$el.innerHTML = "";
                        for (
                            var e = h().stringAsLines(this.contentOne),
                                t = h().stringAsLines(this.contentTwo),
                                n = new (h().SequenceMatcher)(
                                    e,
                                    t
                                ).get_opcodes(),
                                i = this.$el;
                            i.firstChild;

                        )
                            i.removeChild(i.firstChild);
                        var r = h().buildView({
                            baseTextLines: e,
                            newTextLines: t,
                            opcodes: n,
                            baseTextName: "",
                            newTextName: "",
                            contextSize: null,
                            viewType: 0,
                        });
                        r.querySelector(".author").remove(),
                            r.querySelector(".texttitle").remove(),
                            r.querySelector(".texttitle").remove(),
                            i.appendChild(r);
                    },
                },
                mounted: function () {
                    this.update();
                },
                watch: {
                    codes: function () {
                        this.update();
                    },
                },
            }),
                new window.Vue({
                    el: "#code-diff",
                    data: {
                        type: 0,
                        contentOne:
                            "<!DOCTYPE html>\n<html>\n<body>\n   <h1>Hi Dev!!</h1>\n   <p>'hello world'</p>\n</body>\n</html>\n",
                        contentTwo:
                            "<!DOCTYPE html>\n<html>\n<body>\n   <h1>Hello Dev!!</h1>\n   <p>Welcome to OpenSource_demo</p>\n   <p>'hello dev'</p>\n</body>\n</html>\n",
                    },
                });
        },
        7447: function (e, t, n) {
            n(2070);
        },
        5090: function (e) {
            __whitespace = { " ": !0, "\t": !0, "\n": !0, "\f": !0, "\r": !0 };
            var t = (e.exports = {
                defaultJunkFunction: function (e) {
                    return __whitespace.hasOwnProperty(e);
                },
                stripLinebreaks: function (e) {
                    return e.replace(/^[\n\r]*|[\n\r]*$/g, "");
                },
                stringAsLines: function (e) {
                    for (
                        var n = e.indexOf("\n"),
                            i = e.indexOf("\r"),
                            h = (n > -1 && i > -1) || i < 0 ? "\n" : "\r",
                            r = e.split(h),
                            s = 0;
                        s < r.length;
                        s++
                    )
                        r[s] = t.stripLinebreaks(r[s]);
                    return r;
                },
                __reduce: function (e, t, n) {
                    if (null != n)
                        var i = n,
                            h = 0;
                    else {
                        if (!t) return null;
                        (i = t[0]), (h = 1);
                    }
                    for (; h < t.length; h++) i = e(i, t[h]);
                    return i;
                },
                __ntuplecomp: function (e, t) {
                    for (
                        var n = Math.max(e.length, t.length), i = 0;
                        i < n;
                        i++
                    ) {
                        if (e[i] < t[i]) return -1;
                        if (e[i] > t[i]) return 1;
                    }
                    return e.length == t.length
                        ? 0
                        : e.length < t.length
                        ? -1
                        : 1;
                },
                __calculate_ratio: function (e, t) {
                    return t ? (2 * e) / t : 1;
                },
                __isindict: function (e) {
                    return function (t) {
                        return e.hasOwnProperty(t);
                    };
                },
                __dictget: function (e, t, n) {
                    return e.hasOwnProperty(t) ? e[t] : n;
                },
                SequenceMatcher: function (e, n, i) {
                    (this.set_seqs = function (e, t) {
                        this.set_seq1(e), this.set_seq2(t);
                    }),
                        (this.set_seq1 = function (e) {
                            e != this.a &&
                                ((this.a = e),
                                (this.matching_blocks = this.opcodes = null));
                        }),
                        (this.set_seq2 = function (e) {
                            e != this.b &&
                                ((this.b = e),
                                (this.matching_blocks = this.opcodes = this.fullbcount = null),
                                this.__chain_b());
                        }),
                        (this.__chain_b = function () {
                            for (
                                var e = this.b,
                                    n = e.length,
                                    i = (this.b2j = {}),
                                    h = {},
                                    r = 0;
                                r < e.length;
                                r++
                            ) {
                                var s = e[r];
                                if (i.hasOwnProperty(s)) {
                                    var o = i[s];
                                    n >= 200 && 100 * o.length > n
                                        ? ((h[s] = 1), delete i[s])
                                        : o.push(r);
                                } else i[s] = [r];
                            }
                            for (var s in h) h.hasOwnProperty(s) && delete i[s];
                            var a = this.isjunk,
                                l = {};
                            if (a) {
                                for (var s in h)
                                    h.hasOwnProperty(s) &&
                                        a(s) &&
                                        ((l[s] = 1), delete h[s]);
                                for (var s in i)
                                    i.hasOwnProperty(s) &&
                                        a(s) &&
                                        ((l[s] = 1), delete i[s]);
                            }
                            (this.isbjunk = t.__isindict(l)),
                                (this.isbpopular = t.__isindict(h));
                        }),
                        (this.find_longest_match = function (e, n, i, h) {
                            for (
                                var r = this.a,
                                    s = this.b,
                                    o = this.b2j,
                                    a = this.isbjunk,
                                    l = e,
                                    c = i,
                                    u = 0,
                                    d = null,
                                    p = {},
                                    f = [],
                                    m = e;
                                m < n;
                                m++
                            ) {
                                var g = {},
                                    _ = t.__dictget(o, r[m], f);
                                for (var b in _)
                                    if (_.hasOwnProperty(b)) {
                                        if ((d = _[b]) < i) continue;
                                        if (d >= h) break;
                                        (g[d] = k =
                                            t.__dictget(p, d - 1, 0) + 1),
                                            k > u &&
                                                ((l = m - k + 1),
                                                (c = d - k + 1),
                                                (u = k));
                                    }
                                p = g;
                            }
                            for (
                                ;
                                l > e &&
                                c > i &&
                                !a(s[c - 1]) &&
                                r[l - 1] == s[c - 1];

                            )
                                l--, c--, u++;
                            for (
                                ;
                                l + u < n &&
                                c + u < h &&
                                !a(s[c + u]) &&
                                r[l + u] == s[c + u];

                            )
                                u++;
                            for (
                                ;
                                l > e &&
                                c > i &&
                                a(s[c - 1]) &&
                                r[l - 1] == s[c - 1];

                            )
                                l--, c--, u++;
                            for (
                                ;
                                l + u < n &&
                                c + u < h &&
                                a(s[c + u]) &&
                                r[l + u] == s[c + u];

                            )
                                u++;
                            return [l, c, u];
                        }),
                        (this.get_matching_blocks = function () {
                            if (null != this.matching_blocks)
                                return this.matching_blocks;
                            for (
                                var e,
                                    n,
                                    i,
                                    h,
                                    r,
                                    s,
                                    o,
                                    a,
                                    l,
                                    c = this.a.length,
                                    u = this.b.length,
                                    d = [[0, c, 0, u]],
                                    p = [];
                                d.length;

                            )
                                (e = (r = d.pop())[0]),
                                    (n = r[1]),
                                    (i = r[2]),
                                    (h = r[3]),
                                    (s = (l = this.find_longest_match(
                                        e,
                                        n,
                                        i,
                                        h
                                    ))[0]),
                                    (o = l[1]),
                                    (a = l[2]) &&
                                        (p.push(l),
                                        e < s && i < o && d.push([e, s, i, o]),
                                        s + a < n &&
                                            o + a < h &&
                                            d.push([s + a, n, o + a, h]));
                            p.sort(t.__ntuplecomp);
                            var f = (j1 = k1 = block = 0),
                                m = [];
                            for (var g in p)
                                p.hasOwnProperty(g) &&
                                    ((block = p[g]),
                                    (i2 = block[0]),
                                    (j2 = block[1]),
                                    (k2 = block[2]),
                                    f + k1 == i2 && j1 + k1 == j2
                                        ? (k1 += k2)
                                        : (k1 && m.push([f, j1, k1]),
                                          (f = i2),
                                          (j1 = j2),
                                          (k1 = k2)));
                            return (
                                k1 && m.push([f, j1, k1]),
                                m.push([c, u, 0]),
                                (this.matching_blocks = m),
                                this.matching_blocks
                            );
                        }),
                        (this.get_opcodes = function () {
                            if (null != this.opcodes) return this.opcodes;
                            var e,
                                t,
                                n,
                                i,
                                h,
                                r = 0,
                                s = 0,
                                o = [];
                            this.opcodes = o;
                            var a = this.get_matching_blocks();
                            for (var l in a)
                                a.hasOwnProperty(l) &&
                                    ((t = (e = a[l])[0]),
                                    (n = e[1]),
                                    (i = e[2]),
                                    (h = ""),
                                    r < t && s < n
                                        ? (h = "replace")
                                        : r < t
                                        ? (h = "delete")
                                        : s < n && (h = "insert"),
                                    h && o.push([h, r, t, s, n]),
                                    (r = t + i),
                                    (s = n + i),
                                    i && o.push(["equal", t, r, n, s]));
                            return o;
                        }),
                        (this.get_grouped_opcodes = function (e) {
                            e || (e = 3);
                            var t,
                                n,
                                i,
                                h,
                                r,
                                s,
                                o = this.get_opcodes();
                            o || (o = [["equal", 0, 1, 0, 1]]),
                                "equal" == o[0][0] &&
                                    ((n = (t = o[0])[0]),
                                    (i = t[1]),
                                    (h = t[2]),
                                    (r = t[3]),
                                    (s = t[4]),
                                    (o[0] = [
                                        n,
                                        Math.max(i, h - e),
                                        h,
                                        Math.max(r, s - e),
                                        s,
                                    ])),
                                "equal" == o[o.length - 1][0] &&
                                    ((n = (t = o[o.length - 1])[0]),
                                    (i = t[1]),
                                    (h = t[2]),
                                    (r = t[3]),
                                    (s = t[4]),
                                    (o[o.length - 1] = [
                                        n,
                                        i,
                                        Math.min(h, i + e),
                                        r,
                                        Math.min(s, r + e),
                                    ]));
                            var a = e + e,
                                l = [];
                            for (var c in o)
                                o.hasOwnProperty(c) &&
                                    ((n = (t = o[c])[0]),
                                    (i = t[1]),
                                    (h = t[2]),
                                    (r = t[3]),
                                    (s = t[4]),
                                    "equal" == n &&
                                        h - i > a &&
                                        (l.push([
                                            n,
                                            i,
                                            Math.min(h, i + e),
                                            r,
                                            Math.min(s, r + e),
                                        ]),
                                        (i = Math.max(i, h - e)),
                                        (r = Math.max(r, s - e))),
                                    l.push([n, i, h, r, s]));
                            return (
                                l && "equal" == l[l.length - 1][0] && l.pop(), l
                            );
                        }),
                        (this.ratio = function () {
                            return (
                                (matches = t.__reduce(
                                    function (e, t) {
                                        return e + t[t.length - 1];
                                    },
                                    this.get_matching_blocks(),
                                    0
                                )),
                                t.__calculate_ratio(
                                    matches,
                                    this.a.length + this.b.length
                                )
                            );
                        }),
                        (this.quick_ratio = function () {
                            var e, n;
                            if (null == this.fullbcount) {
                                this.fullbcount = e = {};
                                for (var i = 0; i < this.b.length; i++)
                                    e[(n = this.b[i])] =
                                        t.__dictget(e, n, 0) + 1;
                            }
                            e = this.fullbcount;
                            var h = {},
                                r = t.__isindict(h),
                                s = (numb = 0);
                            for (i = 0; i < this.a.length; i++)
                                r((n = this.a[i]))
                                    ? (numb = h[n])
                                    : (numb = t.__dictget(e, n, 0)),
                                    (h[n] = numb - 1),
                                    numb > 0 && s++;
                            return t.__calculate_ratio(
                                s,
                                this.a.length + this.b.length
                            );
                        }),
                        (this.real_quick_ratio = function () {
                            var e = this.a.length,
                                t = this.b.length;
                            return _calculate_ratio(Math.min(e, t), e + t);
                        }),
                        (this.isjunk = i || t.defaultJunkFunction),
                        (this.a = this.b = null),
                        this.set_seqs(e, n);
                },
                buildView: function (e) {
                    var n =
                            void 0 === e.baseTextLines
                                ? t.stringAsLines(e.baseText)
                                : e.baseTextLines,
                        i =
                            void 0 === e.newTextLines
                                ? t.stringAsLines(e.newText)
                                : e.newTextLines,
                        h =
                            void 0 === e.opcodes
                                ? new t.SequenceMatcher(n, i).get_opcodes()
                                : e.opcodes,
                        r = e.baseTextName ? e.baseTextName : "Base Text",
                        s = e.newTextName ? e.newTextName : "New Text",
                        o = e.contextSize,
                        a = e.inline || !1;
                    if (null == n)
                        throw "Cannot build diff view; baseTextLines is not defined.";
                    if (null == i)
                        throw "Cannot build diff view; newTextLines is not defined.";
                    if (!h)
                        throw "Canno build diff view; opcodes is not defined.";
                    function l(e, t) {
                        var n = document.createElement(e);
                        return (n.className = t), n;
                    }
                    function c(e, t) {
                        var n = document.createElement(e);
                        return n.appendChild(document.createTextNode(t)), n;
                    }
                    function u(e, t, n) {
                        var i = document.createElement(e);
                        return (
                            (i.className = t),
                            i.appendChild(document.createTextNode(n)),
                            i
                        );
                    }
                    var d = document.createElement("thead"),
                        p = document.createElement("tr");
                    d.appendChild(p),
                        a
                            ? (p.appendChild(document.createElement("th")),
                              p.appendChild(document.createElement("th")),
                              p.appendChild(
                                  u("th", "texttitle", r + " vs. " + s)
                              ))
                            : (p.appendChild(document.createElement("th")),
                              p.appendChild(u("th", "texttitle", r)),
                              p.appendChild(document.createElement("th")),
                              p.appendChild(u("th", "texttitle", s))),
                        (d = [d]);
                    var f,
                        m = [];
                    function g(e, t, n, i, h) {
                        return t < n
                            ? (e.appendChild(c("th", (t + 1).toString())),
                              e.appendChild(
                                  u("td", h, i[t].replace(/\t/g, "    "))
                              ),
                              t + 1)
                            : (e.appendChild(document.createElement("th")),
                              e.appendChild(l("td", "empty")),
                              t);
                    }
                    function _(e, t, n, i, h) {
                        (e.className = h),
                            e.appendChild(
                                c("th", null == t ? "" : (t + 1).toString())
                            ),
                            e.appendChild(
                                c("th", null == n ? "" : (n + 1).toString())
                            ),
                            e.appendChild(
                                c(
                                    "td",
                                    i[null != t ? t : n].replace(/\t/g, "    ")
                                )
                            );
                    }
                    for (var b = 0; b < h.length; b++) {
                        (code = h[b]), (change = code[0]);
                        for (
                            var v = code[1],
                                k = code[2],
                                w = code[3],
                                C = code[4],
                                x = Math.max(k - v, C - w),
                                T = [],
                                y = [],
                                q = 0;
                            q < x;
                            q++
                        ) {
                            if (
                                o &&
                                h.length > 1 &&
                                ((b > 0 && q == o) || (0 == b && 0 == q)) &&
                                "equal" == change
                            ) {
                                var O = x - (0 == b ? 1 : 2) * o;
                                if (O > 1) {
                                    if (
                                        (T.push(
                                            (p = document.createElement("tr"))
                                        ),
                                        (v += O),
                                        (w += O),
                                        (q += O - 1),
                                        p.appendChild(c("th", "...")),
                                        a || p.appendChild(u("td", "skip", "")),
                                        p.appendChild(c("th", "...")),
                                        p.appendChild(u("td", "skip", "")),
                                        b + 1 == h.length)
                                    )
                                        break;
                                    continue;
                                }
                            }
                            T.push((p = document.createElement("tr"))),
                                a
                                    ? "insert" == change
                                        ? _(p, null, w++, i, change)
                                        : "replace" == change
                                        ? (y.push(
                                              (f = document.createElement("tr"))
                                          ),
                                          v < k && _(p, v++, null, n, "delete"),
                                          w < C && _(f, null, w++, i, "insert"))
                                        : "delete" == change
                                        ? _(p, v++, null, n, change)
                                        : _(p, v++, w++, n, change)
                                    : ((v = g(p, v, k, n, change)),
                                      (w = g(p, w, C, i, change)));
                        }
                        for (q = 0; q < T.length; q++) m.push(T[q]);
                        for (q = 0; q < y.length; q++) m.push(y[q]);
                    }
                    for (var b in (m.push(
                        (p = u("th", "author", "diff view generated by "))
                    ),
                    p.setAttribute("colspan", a ? 3 : 4),
                    p.appendChild((f = c("a", "jsdifflib"))),
                    f.setAttribute(
                        "href",
                        "http://github.com/cemerick/jsdifflib"
                    ),
                    d.push((p = document.createElement("tbody"))),
                    m))
                        p.appendChild(m[b]);
                    for (var b in ((p = l(
                        "table",
                        "diff" + (a ? " inlinediff" : "")
                    )),
                    d))
                        p.appendChild(d[b]);
                    return p;
                },
            });
        },
    },
    function (e) {
        var t;
        (t = 7447), e((e.s = t));
    },
]);
