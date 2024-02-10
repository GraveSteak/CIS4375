import {
    s as m,
    p as h,
    q as g,
    r as A
} from "./index.4b3b75c1.js";
import {
    _ as w,
    d as p,
    c as v,
    y as R,
    o as S,
    aP as _,
    aQ as u,
    aR as b
} from "./index.3b31c8a6.js";
const y = /\s|&nbsp;/g,
    $ = e => {
        try {
            return e.replaceAll(y, "").toLowerCase()
        } catch {
            return e
        }
    },
    l = (e, t) => {
        e.dataset.qa = $(t.value)
    },
    E = "qa",
    B = {
        beforeMount: (e, t) => l(e, t),
        updated: (e, t) => l(e, t)
    },
    k = p({
        props: {
            to: {
                type: Object,
                default: () => ({})
            }
        }
    }),
    L = ["href"];

function M(e, t, r, s, a, o) {
    return S(), v("a", {
        href: e.to.path
    }, [R(e.$slots, "default")], 8, L)
}
const O = w(k, [
        ["render", M]
    ]),
    Q = () => {
        const e = navigator.userAgent;
        let t, r = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(r[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
            name: "IE",
            version: t[1] || ""
        }) : r[1] === "Chrome" && (t = e.match(/\bOPR|Edge\/(\d+)/), t != null) ? {
            name: "Opera",
            version: t[1]
        } : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = e.match(/version\/(\d+)/i)) != null && r.splice(1, 1, t[1]), {
            name: r[0],
            version: r[1]
        })
    };

function q(e) {
    const r = Q().name === _;
    if (typeof e == "object") {
        const {
            query: s,
            path: a,
            hash: o
        } = e, c = s ? `?${new URLSearchParams(s)}` : "";
        a ? window.location.assign(`${a}${c}`) : window.history.pushState(null, null, c), o && m(o, r)
    } else window.location.assign(e)
}
const f = e => {
        e.component("RouterLink", O), e.config.globalProperties.$router = {
            push: t => q(t)
        }, e.directive(E, B), e.use(h)
    },
    x = p({
        props: {
            value: String,
            name: String,
            hydrate: {
                type: Boolean,
                default: !0
            }
        },
        setup({
            name: e,
            value: t,
            hydrate: r
        }) {
            if (!t) return () => null;
            let s = r ? "astro-slot" : "astro-static-slot";
            return () => u(s, {
                name: e,
                innerHTML: t
            })
        }
    }),
    j = e => async (t, r, s, {
        client: a
    }) => {
        if (delete r.class, !e.hasAttribute("ssr")) return;
        const o = t.name ? `${t.name} Host` : void 0,
            c = {};
        for (const [n, d] of Object.entries(s)) c[n] = () => u(x, {
            value: d,
            name: n === "default" ? void 0 : n
        });
        let i = u(t, r, c);
        if (I(t.setup) && (i = u(b, null, i)), a === "only") {
            const n = g({
                name: o,
                render: () => i
            });
            await f(n), n.mount(e, !1)
        } else {
            const n = A({
                name: o,
                render: () => i
            });
            await f(n), n.mount(e, !0)
        }
    };

function I(e) {
    const t = e ? .constructor;
    return t && t.name === "AsyncFunction"
}
export {
    j as
    default
};