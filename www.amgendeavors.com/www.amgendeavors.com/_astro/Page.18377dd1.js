import {
    u as Xe,
    v as Ot,
    a as Nt,
    C as Pl,
    g as rm,
    P as si,
    b as wt,
    m as ua,
    c as An,
    w as Me,
    d as qt,
    I as Ue,
    T as gt,
    e as Se,
    B as li,
    S as ui,
    f as ho,
    s as ci,
    h as om,
    i as kd,
    D as kr,
    M as Cn,
    j as am,
    k as im,
    l as sm,
    n as lm,
    o as um
} from "./index.4b3b75c1.js"; /* empty css                           */
import {
    _ as J,
    d as Z,
    o as u,
    c as p,
    a as b,
    b as c,
    r as oe,
    e as N,
    f as _,
    n as F,
    g as M,
    h as Ce,
    i as yt,
    M as di,
    S as Sd,
    j as It,
    t as x,
    k as Oe,
    F as se,
    l as pe,
    m as De,
    w as ee,
    p as Pe,
    D as cm,
    q as Kt,
    s as cr,
    u as be,
    v as Ae,
    x as Fe,
    y as ae,
    E as Ht,
    z as On,
    A as Pd,
    B as Td,
    Z as dm,
    C as le,
    G as dn,
    H as Ns,
    I as Hs,
    J as Pt,
    K as Tt,
    L as Re,
    N as Us,
    O as fm,
    P as mm,
    Q as Cd,
    R as pm,
    T as Od,
    U as ca,
    V as hm,
    W as gm,
    X as Tl,
    Y as jt,
    $ as xt,
    a0 as Bt,
    a1 as Id,
    a2 as $d,
    a3 as D,
    a4 as ym,
    a5 as vm,
    a6 as bm,
    a7 as Cl,
    a8 as or,
    a9 as ar,
    aa as _a,
    ab as _m,
    ac as wm,
    ad as km,
    ae as Sm,
    af as Pm,
    ag as Ol,
    ah as Tm,
    ai as Il,
    aj as Cm,
    ak as Om,
    al as Im,
    am as fi,
    an as mi,
    ao as $l,
    ap as Ed,
    aq as El,
    ar as Dl,
    as as $m,
    at as Em,
    au as Dm,
    av as Lm,
    aw as Mm,
    ax as Bm,
    ay as Am,
    az as Vs,
    aA as pi,
    aB as pt,
    aC as un,
    aD as Rm,
    aE as Nm,
    aF as Hm,
    aG as Um,
    aH as ft,
    aI as Ll,
    aJ as Ml,
    aK as wa,
    aL as Bl
} from "./index.3b31c8a6.js";
import {
    g as Vm,
    a as qm,
    s as Al,
    b as jm,
    i as Dd,
    c as mn
} from "./addDocumentElements.16a6b1f3.js";
const xm = Z({
        props: {
            pageId: {
                type: [Number, String],
                required: !0
            }
        }
    }),
    Wm = b("div", {
        id: "fb-root"
    }, null, -1),
    Gm = ["page_id"];

function Ym(e, t, n, r, o, a) {
    return u(), p("div", null, [Wm, b("div", {
        class: "fb-customerchat",
        attribution: "install_email",
        page_id: e.pageId
    }, null, 8, Gm)])
}
const Fm = J(xm, [
        ["render", Ym]
    ]),
    zm = Z({
        components: {
            FacebookMessenger: Fm
        },
        props: {
            siteMeta: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const t = c(() => e.siteMeta.facebookMessenger);
            return {
                whatsAppUrl: c(() => {
                    if (!e.siteMeta.whatsAppNumber) return null;
                    const r = e.siteMeta.whatsAppMessage ? `?text=${e.siteMeta.whatsAppMessage}` : "";
                    return `https://wa.me/${e.siteMeta.whatsAppNumber}${r}`
                }),
                facebookMessengerId: t
            }
        }
    }),
    Km = ["href"],
    Qm = b("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("circle", {
        cx: "32",
        cy: "32",
        r: "32",
        fill: "var(--color-success-dark)"
    }), b("path", {
        d: `M11.375 52.625L14.2745 42.0323C12.4853 38.9317 11.5452 35.4169 11.5469
31.8127C11.552 20.5445 20.7216 11.375 31.988 11.375C37.4553 11.3767 42.5875 13.5062 46.4478 17.37C50.3064
21.2337 52.4308 26.3694 52.4291 31.8316C52.4239 43.1014 43.2544 52.2709 31.988 52.2709C28.5677 52.2692 25.1972
51.4116 22.2117 49.7822L11.375 52.625ZM22.7136 46.0817C25.5942 47.7919 28.3442 48.8162 31.9811 48.818C41.3448 48.818
48.9727 41.197 48.9778 31.8281C48.9813 22.4403 41.3895 14.8297 31.9948 14.8262C22.6242 14.8262 15.0016 22.4472 14.9981
31.8144C14.9964 35.6386 16.117 38.502 17.9991 41.4978L16.282 47.7678L22.7136 46.0817ZM42.285 36.6905C42.1578 36.4773
 41.8175 36.3502 41.3053 36.0941C40.7948 35.838 38.2837 34.6022 37.8145 34.432C37.347 34.2619 37.0067 34.1759 36.6647
 34.6881C36.3244 35.1986 35.3447 36.3502 35.0473 36.6905C34.75 37.0308 34.4509 37.0738 33.9405 36.8177C33.43 36.5616 31.7834
 36.0236 29.8327 34.2825C28.315 32.9281 27.2889 31.2558 26.9916 30.7436C26.6942 30.2331 26.9606 29.9564 27.215
 29.702C27.4453 29.4734 27.7255 29.1056 27.9816 28.8066C28.2411 28.5109 28.3253 28.2978 28.4972 27.9558C28.6673
 27.6155 28.5831 27.3164 28.4542 27.0603C28.3253 26.8059 27.3044 24.2914 26.8798 23.2688C26.4639 22.2736 26.0428
 22.4077 25.73 22.3922L24.7503 22.375C24.41 22.375 23.8566 22.5022 23.3891 23.0144C22.9216 23.5266 21.6016 24.7606
 21.6016 27.2752C21.6016 29.7897 23.432 32.2183 23.6864 32.5586C23.9425 32.8989 27.2872 38.0586 32.4108 40.2706C33.6294
 40.7966 34.5816 41.1111 35.3223 41.3466C36.5461 41.735 37.6598 41.68 38.5398 41.5494C39.5212 41.4033 41.5614 40.3136
 41.9877 39.1208C42.4139 37.9262 42.4139 36.9036 42.285 36.6905Z`,
        fill: "white"
    })], -1),
    Xm = [Qm];

function Jm(e, t, n, r, o, a) {
    const i = oe("FacebookMessenger");
    return u(), p("div", null, [e.facebookMessengerId ? (u(), N(i, {
        key: 0,
        "page-id": e.facebookMessengerId
    }, null, 8, ["page-id"])) : _("", !0), e.whatsAppUrl ? (u(), p("a", {
        key: 1,
        class: F(["whats-app-bubble", {
            "whats-app-bubble--next-to-messenger": e.facebookMessengerId
        }]),
        href: e.whatsAppUrl,
        rel: "noopener",
        title: "Open WhatsApp",
        target: "_blank"
    }, Xm, 10, Km)) : _("", !0)])
}
const Zm = J(zm, [
        ["render", Jm]
    ]),
    Rl = M(!0),
    Ld = () => {
        const e = t => {
            Rl.value = t
        };
        return {
            hasUserScrolled: c(() => !Rl.value),
            setIntersectingState: e
        }
    },
    ep = {
        threshold: 1
    },
    tp = Z({
        name: "StickyTrigger",
        setup() {
            const e = M(null),
                {
                    setIntersectingState: t
                } = Ld(),
                n = new IntersectionObserver(([{
                    isIntersecting: r
                }]) => {
                    t(r)
                }, ep);
            return Ce(() => {
                n.observe(e.value)
            }), yt(() => {
                n.disconnect()
            }), {
                stickyTriggerRef: e
            }
        }
    }),
    np = {
        ref: "stickyTriggerRef",
        class: "sticky-trigger"
    };

function rp(e, t, n, r, o, a) {
    return u(), p("div", np, null, 512)
}
const op = J(tp, [
        ["render", rp]
    ]),
    Nl = 1600,
    Hl = 1224,
    Ul = 12,
    ap = 1224,
    Qt = 1920,
    ip = (e, t) => {
        const [n, r, o, a] = t.split("/").map(parseFloat), {
            styles: i
        } = e.settings ? ? {}, s = Number.parseFloat(i ? .["row-size"]) ? ? 48, l = Number.parseFloat(i ? .["column-gap"]) ? ? 24, d = Number.parseFloat(i ? .["row-gap"]) ? ? 16, y = (Hl - (Ul - 1) * l) / Ul, m = (Qt - Nl) / 2 + l, f = (Nl - Hl) / 2 - l;
        let h = Qt;
        const v = o - n,
            k = v * s + (v - 1) * d;
        return r !== 1 && (h -= m), a !== 17 && (h -= m), r > 2 && (h -= f), a < 16 && (h -= f), r > 3 && (h -= (r - 3) * (y + l)), a < 15 && (h -= (15 - a) * (y + l)), a - r === 1 && (h = y), {
            width: h,
            height: k
        }
    },
    Vl = e => Object.prototype.toString.call(e) === "[object Object]",
    ir = e => {
        const t = e.split(" "),
            n = t.length;
        if (n < 1 || n > 4) throw new Error(`Cannot parse ${n} sides`);
        return ((o, a = o, i = o, s = a) => ({
            top: o,
            right: a,
            bottom: i,
            left: s
        }))(...t)
    },
    sp = ["padding", "m-padding", "block-padding"],
    kt = (e, t = "") => Vl(e) ? Object.entries(e).reduce((n, [r, o]) => {
        const a = t ? `${t}-${r}` : `--${r}`;
        if (Vl(o)) return { ...n,
            ...kt(o, a)
        };
        const i = sp.includes(r) ? Object.entries(ir(o)).reduce((s, [l, d]) => ({ ...s,
            [`${a}-${l}`]: d,
            [a]: o
        }), {}) : {
            [a]: o
        };
        return { ...n,
            ...i
        }
    }, {}) : {},
    ka = M([]),
    Md = () => {
        const e = c(() => ka.value.reduce((o, a) => o + a.quantity, 0)),
            t = () => {
                const o = window.Ecwid.Controller.getEntryPage();
                window.Ecwid.openPage(o.type.toLowerCase(), {
                    id: o.categoryId
                })
            },
            n = () => {
                window.Ecwid && window.Ecwid.openPage("cart")
            },
            r = o => {
                ka.value = o
            };
        return {
            ecwidCartItems: c(() => ka.value),
            ecwidCartItemCount: e,
            openCart: n,
            setEcwidCartItems: r,
            openEcwidHomepage: t
        }
    };

function lp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
const qs = (e, t, n) => !e || !t ? null : e === "assets" ? `https://assets.zyrosite.com/${n}/${t}` : e === "unsplash" ? `https://images.unsplash.com/${t}` : t,
    up = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
    cp = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
    dp = /^\d+$/,
    fp = e => typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
    Qn = e => {
        const t = e.split(/[/\\]/).pop(),
            n = t.lastIndexOf(".");
        return t === "" || n < 1 ? "" : t.slice(n + 1).toLowerCase()
    },
    mp = [Sd, "https://assets.zyrosite.space", "https://assets.zyrosite.com", "https://cdn.zyrosite.com"],
    pp = "https://images.unsplash.com",
    hp = "cdn-cgi/image",
    js = [{
        width: 360,
        height: 640
    }],
    xs = [1, 2, 2.625, 3],
    gp = [{
        width: 1440
    }, {
        width: 1920
    }],
    Ws = [1, 2],
    Gs = 16,
    Ys = (e, t = Gs) => [`(min-width: ${di}px) ${e}px`, `calc(100vw - ${t*2}px)`].join(", "),
    yp = (e, t, n = {}) => {
        const r = n.fit || (n.shouldContain ? "scale-down" : "crop"),
            o = ["format=auto", n.width && `w=${n.width}`, n.height && `h=${n.height}`, `fit=${r}`, n.isLossless && "q=100", n.format && `f=${n.format}`, n.trim && `trim=${n.trim}`, n.quality && !n.isLossless && `q=${n.quality}`].filter(i => !!i).join(",");
        let [, a] = t.split(e);
        for (; a.startsWith("/");) a = a.replace("/", "");
        return `${e}/${hp}/${o}/${a}`
    },
    vp = (e, t = {}) => {
        const n = new URL(e);
        return n.searchParams.set("auto", t.format || "format"), n.searchParams.set("fit", t.shouldContain ? "clip" : "crop"), t.width && n.searchParams.set("w", t.width), t.height && n.searchParams.set("h", t.height), t.isLossless && n.searchParams.set("q", 100), n.href
    },
    Qe = (e, t, n, r = {}) => {
        const o = qs(e, t, n);
        if (!o) return null;
        if (Qn(o) === "svg" || Qn(o) === "ico" || Qn(o) === "gif") return o;
        const a = mp.find(i => o.includes(i));
        return a ? yp(a, o, r) : o.includes(pp) ? vp(o, r) : o
    },
    pn = (e, t, n, r = {}) => {
        const o = gp.map(s => Ws.map(l => {
            const d = Math.round(s.width * l);
            return `${Qe(e,t,n,{...r,width:d})} ${d}w`
        })).join(",");
        return `${js.map(s=>xs.map(l=>{const d=Math.round(s.width*l),y={...r,width:d};return r.isMobileFullScreen&&(y.height=Math.round(s.height*l)),`
        $ {
            Qe(e, t, n, y)
        }
        $ {
            d
        }
        w `})).join(",")},${o}`
    },
    $n = (e, t, n, r = {}) => {
        if (!r.width) return pn(e, t, n, r);
        const o = Ws.map(l => {
                const d = Math.round(r.width * l),
                    y = Math.round(r.height * l);
                return `${Qe(e,t,n,{...r,width:d,height:y})} ${d}w`
            }).join(","),
            a = (r.mobilePadding ? ? Gs) * 2;
        return `${js.map(l=>{const d=l.width-a;return xs.map(y=>{const m=r.width/r.height,f=Math.round(d*y),h=Math.round(f/m);return`${Qe(e,t,n,{...r,width:f,height:h})} ${f}w`}).join(",")}).join(",")},${o}`
    },
    bp = (e, t, n, r = {}) => {
        if (!r.width) return pn(e, t, n, r);
        const o = Ws.map(s => {
                const l = Math.round(r.width * s),
                    d = Math.round(r.height * s);
                return `${Qe(e,t,n,{...r,width:l,height:d})} ${l}w`
            }).join(","),
            a = (r.mobilePadding ? ? Gs) * 2;
        return `${js.map(s=>{const l=Math.round((s.width-a+r.columnGap)/r.columnCount-r.columnGap);return xs.map(d=>{const y=Math.round(l*d),m=Math.round(l*d);return`${Qe(e,t,n,{...r,width:m,height:!r.isMasonryLayout&&m})} ${y}w`}).join(",")}).join(",")},${o}`
    },
    _p = ({
        path: e,
        languageKeys: t = [],
        defaultLocale: n = "system"
    }) => {
        const [r, o] = e.split("/").filter(a => a !== "");
        return !t || !t.length > 1 ? {
            locale: n,
            slug: r
        } : t.includes(r) ? {
            locale: r,
            slug: o
        } : {
            locale: n ? ? It,
            slug: r
        }
    },
    wp = () => {
        const {
            getters: e
        } = Xe(), t = M("z-cookies-consent"), n = M("1"), r = c(() => !!n.value), o = c(() => n.value === "1"), a = c(() => n.value !== "0");
        return Ce(() => {
            const l = Vm(window.location.hostname);
            t.value = `z-cookies-consent-${l}`, n.value = qm(t.value)
        }), {
            acceptCookies: () => {
                Al(t.value, 1, 365), n.value = "1", jm({
                    siteMeta: e.meta,
                    areCookiesAllowed: a.value
                })
            },
            declineCookies: () => {
                Al(t.value, 0, 1), n.value = "0"
            },
            hasUserConsentedCookieBanner: r,
            hasUserAcceptedCookies: o,
            areCookiesAllowed: a
        }
    },
    kp = Z({
        __name: "CookieBanner",
        props: {
            disclaimer: {
                type: String,
                required: !0
            },
            acceptText: {
                type: String,
                default: "Accept"
            },
            declineText: {
                type: String,
                default: "Decline"
            },
            siteMeta: {
                type: Object,
                required: !0
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const {
                acceptCookies: n,
                declineCookies: r,
                hasUserConsentedCookieBanner: o
            } = wp(), a = {
                acceptCookies: n,
                declineCookies: r,
                hasUserConsentedCookieBanner: o,
                get isAppPrerendering() {
                    return Dd
                }
            };
            return Object.defineProperty(a, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), a
        }
    }),
    Sp = {
        key: 0,
        class: "cookie-banner"
    },
    Pp = {
        class: "cookie-banner__frame"
    },
    Tp = {
        class: "cookie-banner__text"
    },
    Cp = {
        class: "cookie-banner__controls"
    };

function Op(e, t, n, r, o, a) {
    return !r.isAppPrerendering && !r.hasUserConsentedCookieBanner ? (u(), p("div", Sp, [b("div", Pp, [b("p", Tp, x(n.disclaimer), 1), b("div", Cp, [b("button", {
        class: "control-button primary",
        onClick: t[0] || (t[0] = (...i) => r.acceptCookies && r.acceptCookies(...i))
    }, x(n.acceptText), 1), b("button", {
        class: "control-button",
        onClick: t[1] || (t[1] = (...i) => r.declineCookies && r.declineCookies(...i))
    }, x(n.declineText), 1)])])])) : _("", !0)
}
const Ip = J(kp, [
        ["render", Op]
    ]),
    $p = Z({
        name: "BlockBackground",
        props: {
            alt: {
                type: String,
                default: ""
            },
            overlayOpacity: {
                type: String,
                default: null
            },
            type: {
                type: String,
                default: "color"
            },
            src: {
                type: String,
                default: null
            },
            srcset: {
                type: String,
                default: null
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            color: {
                type: String,
                default: null
            },
            isFixed: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            backgroundColor() {
                return this.type === "color" ? this.color : "transparent"
            },
            isBackgroundOverlayShown() {
                return this.type === "image" && this.overlayOpacity
            },
            computedStyles() {
                return {
                    "--background-color": this.backgroundColor,
                    "--background-overlay-opacity": this.isBackgroundOverlayShown ? this.overlayOpacity : 0
                }
            }
        }
    }),
    Ep = ["alt", "src", "srcset", "loading"];

function Dp(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["block-background", {
            "block-background--fixed": e.isFixed
        }]),
        style: Oe(e.computedStyles)
    }, [e.type === "image" && e.src ? (u(), p("img", {
        key: e.src,
        alt: e.alt,
        src: e.src,
        srcset: e.srcset,
        width: "100vw",
        sizes: "(max-width: 500px) 800px, 100vw",
        loading: e.isEager ? "eager" : "lazy",
        class: F(["block-background__image", {
            "block-background__image--fixed": e.isFixed
        }])
    }, null, 10, Ep)) : _("", !0), e.isBackgroundOverlayShown ? (u(), p("div", {
        key: 1,
        class: F(["block-background__overlay", {
            "block-background__overlay--fixed": e.isFixed
        }])
    }, null, 2)) : _("", !0)], 6)
}
const Bd = J($p, [
        ["render", Dp]
    ]),
    Lp = Z({
        props: {
            categories: {
                type: Array,
                default: () => []
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            getCategoryNameById(e) {
                return this.blogCategories[e] ? .name ? .toUpperCase()
            }
        }
    }),
    Mp = {
        class: "categories"
    },
    Bp = ["onClick"];

function Ap(e, t, n, r, o, a) {
    return u(), p("p", Mp, [(u(!0), p(se, null, pe(e.categories, (i, s) => (u(), p("span", {
        key: i,
        class: "categories__item",
        onClick: l => e.$emit("filter-category", e.categories[s])
    }, x(e.getCategoryNameById(i)), 9, Bp))), 128))])
}
const Ad = J(Lp, [
        ["render", Ap],
        ["__scopeId", "data-v-17a7aef3"]
    ]),
    Rp = Z({
        __name: "BlockBlogListItemMeta",
        props: {
            authorName: {
                type: String,
                default: ""
            },
            minutesAmount: {
                type: String,
                default: "0"
            },
            blogReadingTimeText: {
                type: String,
                default: ""
            },
            date: {
                type: String,
                default: ""
            },
            showAvatar: {
                type: Boolean,
                default: !0
            },
            showName: {
                type: Boolean,
                default: !0
            },
            showDate: {
                type: Boolean,
                default: !0
            },
            showMinutes: {
                type: Boolean,
                default: !0
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = {
                get DEFAULT_MIN_READ_TEXT() {
                    return cm
                }
            };
            return Object.defineProperty(n, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), n
        }
    }),
    Np = {
        class: "blog-list-item-meta"
    },
    Hp = {
        class: "font-secondary"
    },
    Up = {
        class: "blog-list-item-meta__author-name"
    },
    Vp = {
        class: "blog-list-item-meta__subtitle"
    },
    qp = {
        key: 0
    },
    jp = {
        key: 1
    };

function xp(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", Np, [b("div", Hp, [ee((u(), p("p", Up, [Pe(x(n.authorName), 1)])), [
        [Ot, n.showName],
        [i, "blog-author"]
    ]), ee(b("p", Vp, [n.showDate && n.date ? (u(), p("span", qp, x(n.date), 1)) : _("", !0), n.showMinutes ? (u(), p("span", jp, x(`${n.minutesAmount} ${n.blogReadingTimeText||r.DEFAULT_MIN_READ_TEXT}`), 1)) : _("", !0)], 512), [
        [Ot, n.showDate || n.showMinutes]
    ])])])
}
const Rd = J(Rp, [
        ["render", xp],
        ["__scopeId", "data-v-88ffe988"]
    ]),
    Nd = e => new Date(e).toLocaleDateString("en-US"),
    Wp = Z({
        name: "BlockBlogHeader",
        components: {
            BlockBlogListItemMeta: Rd,
            BlockBlogListItemCategories: Ad
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            currentBlogPage: {
                type: Object,
                required: !0
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            }
        },
        setup() {
            return {
                getFormattedNumericDate: Nd,
                DATA_ATTRIBUTE_ANIMATION_ROLE: Kt,
                DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: cr
            }
        },
        computed: {
            categories() {
                return this.currentBlogPage ? .categories ? ? []
            },
            meta() {
                return this.currentBlogPage ? .meta ? ? {}
            },
            authorName() {
                return this.meta ? .authorName
            },
            shownItems() {
                return this.data ? .settings ? .shownItems ? ? {}
            },
            areCategoriesShown() {
                return this.shownItems.categories && this.categories.length
            }
        }
    }),
    Gp = {
        class: "block-blog-header__content"
    },
    Yp = {
        class: "font-primary block-blog-header__title"
    },
    Fp = {
        key: 0,
        class: "font-secondary block-blog-header__description"
    };

function zp(e, t, n, r, o, a) {
    const i = oe("BlockBlogListItemCategories"),
        s = oe("BlockBlogListItemMeta"),
        l = De("qa");
    return ee((u(), p("div", Fe({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [b("div", Gp, [ee((u(), p("h1", Yp, [Pe(x(e.meta.title), 1)])), [
        [l, "blog-label-posttitle"]
    ]), e.shownItems.description ? ee((u(), p("p", Fp, [Pe(x(e.meta.description), 1)])), [
        [l, "blog-label-postdescription"]
    ]) : _("", !0), e.areCategoriesShown ? ee((u(), N(i, {
        key: 1,
        class: "font-secondary",
        categories: e.categories,
        "blog-categories": e.blogCategories
    }, null, 8, ["categories", "blog-categories"])), [
        [l, "blog-label-category"]
    ]) : _("", !0), be(s, Ae({
        authorName: e.authorName,
        minutesAmount: e.currentBlogPage.minutesToRead,
        date: e.getFormattedNumericDate(e.currentBlogPage.date),
        showAvatar: e.shownItems.avatar,
        showName: e.shownItems.authorFullName,
        showDate: e.shownItems.date,
        showMinutes: e.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": e.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])])], 16)), [
        [l, "blog-postinformation"]
    ])
}
const Kp = J(Wp, [
        ["render", zp],
        ["__scopeId", "data-v-2eac0619"]
    ]),
    hi = M(!1),
    ql = M(null),
    gi = ({
        blockId: e
    }) => ({
        isSearchOpenedInCurrentBlock: c(() => ql.value === e && hi.value),
        toggleSearchDropdown: r => {
            ql.value = e, hi.value = r
        }
    }),
    Sr = 16,
    Wt = 1224,
    Gt = 414,
    Hd = Gt - Sr * 2,
    jl = 16,
    Qp = Z({
        __name: "BlockLayoutWrapper",
        props: {
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            isBlockResponsive: {
                type: Boolean,
                default: !1
            },
            isForcedOnTop: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e;
            Nt(l => ({
                "666d73bf": a.value,
                "3d2a3e41": o.value,
                "0cffcf43": r.value,
                "80a3d7f2": i.value
            }));
            const r = c(() => n.isBlockResponsive ? `0 ${Sr*100/Gt}vw` : `0 ${Sr}px`),
                o = c(() => `${Gt}px`),
                a = c(() => `${Wt}px`),
                i = c(() => `0 ${Sr}px`),
                s = {
                    props: n,
                    mobileBlockPaddingCSSVar: r,
                    mobileMaxWidthCSSVar: o,
                    maxWidthCSSVar: a,
                    tabletBlockPaddingCSSVar: i
                };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    });

function Xp(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["block-layout", {
            "block-layout--legacy": n.isMobileLegacy,
            "block-layout--layout": !n.isMobileLegacy,
            "block-layout--forcedOnTop": n.isForcedOnTop
        }])
    }, [ae(e.$slots, "default")], 2)
}
const Jp = J(Qp, [
        ["render", Xp]
    ]),
    xl = ({
        blockElements: e,
        elementPositionKey: t
    }) => e ? .length ? Math.max(...e.map(n => n[t].top + n[t].height)) : 0,
    Zp = [Pd, Td],
    eh = ({
        lowestElementBottom: e,
        sectionMinHeight: t
    }) => {
        const r = e >= t ? 0 : t - e;
        return e ? `${r}px` : "1fr"
    },
    go = ({
        blockElementsWithPosition: e
    }) => {
        try {
            const t = e.flatMap(({
                position: r
            }) => [r.top, r.height + r.top]);
            return [...new Set([0, ...t])].sort((r, o) => r - o)
        } catch (t) {
            console.error(t)
        }
    },
    yi = ({
        rowTopsUniqueSorted: e,
        columnsLeftUniqueSorted: t,
        elementPosition: n
    }) => {
        const {
            top: r,
            left: o,
            width: a,
            height: i
        } = n, s = e.indexOf(r) + 1, l = e.indexOf(r + i) + 1, d = t.indexOf(o) + 1, y = t.indexOf(o + a) + 1;
        return {
            rowStart: s,
            rowEnd: l,
            columnStart: d,
            columnEnd: y
        }
    },
    yo = ({
        blockElementsWithPosition: e,
        blockWidth: t
    }) => {
        const n = e.flatMap(({
            position: o
        }) => [o.left, o.width + o.left]);
        return [...new Set([0, ...n, t])].sort((o, a) => o - a)
    },
    sr = ({
        blockElements: e,
        elementPositionKey: t
    }) => e.map(n => ({ ...n,
        position: n[t]
    })),
    Wl = ({
        blockElements: e,
        elementPositionKey: t,
        buildResponsiveGrid: n
    }) => {
        const r = t === Ht ? Hd : Wt,
            o = sr({
                blockElements: e,
                elementPositionKey: t
            });
        return yo({
            blockElementsWithPosition: o,
            blockWidth: r
        }).map((l, d, y) => d === 0 ? l : l - y[d - 1]).filter(l => l !== 0).map(l => n ? `${l/r*100}%` : `${l}px`).join(" ")
    },
    th = ({
        gridRows: e
    }) => e.filter(t => t !== 0),
    nh = ({
        gridRows: e
    }) => e.map(t => `${t}px`),
    rh = ({
        gridRows: e
    }) => e.map(t => `minmax(${t}px, auto)`),
    oh = ({
        gridRows: e,
        responsiveRows: t,
        isMobile: n
    }) => e.map((r, o) => t.includes(o + 1) ? "auto" : `${r*100/(n?Gt:Wt)}vw`),
    Sa = ({
        gridRows: e,
        lastRowHeight: t
    }) => `${e.join(" ")} ${t}`,
    gr = ({
        blockElements: e,
        elementPositionKey: t,
        buildResponsiveGrid: n,
        responsiveRows: r,
        lowestElementBottom: o,
        sectionMinHeight: a
    }) => {
        const i = t === Ht,
            s = sr({
                blockElements: e,
                elementPositionKey: t
            }),
            d = go({
                blockElementsWithPosition: s
            }).map((h, v, k) => v === 0 ? h : h - k[v - 1]),
            y = eh({
                lowestElementBottom: o,
                sectionMinHeight: a
            }),
            m = th({
                gridRows: d
            });
        if (!n) {
            const h = nh({
                gridRows: m
            });
            return Sa({
                gridRows: h,
                lastRowHeight: y
            })
        }
        if (!r) {
            const h = rh({
                gridRows: m
            });
            return Sa({
                gridRows: h,
                lastRowHeight: y
            })
        }
        const f = oh({
            gridRows: m,
            responsiveRows: r,
            isMobile: i
        });
        return Sa({
            gridRows: f,
            lastRowHeight: y
        })
    },
    Gl = ({
        blockElements: e,
        elementPositionKey: t
    }) => {
        const n = sr({
                blockElements: e,
                elementPositionKey: t
            }),
            r = go({
                blockElementsWithPosition: n
            }),
            o = yo({
                blockElementsWithPosition: n,
                blockWidth: t === Ht ? Hd : Wt
            });
        return e.filter(a => !Zp.includes(a.type)).reduce((a, i) => {
            const {
                rowEnd: s,
                rowStart: l
            } = yi({
                rowTopsUniqueSorted: r,
                columnsLeftUniqueSorted: o,
                elementPosition: i[t]
            }), d = s > l ? s - l : 1, y = [...new Array(d).keys()].map((m, f) => l + f);
            return a.some(m => y.includes(m)) ? a : [...a, s - 1]
        }, [])
    },
    ah = (e, t) => {
        const n = sr({
                blockElements: e,
                elementPositionKey: On
            }),
            r = go({
                blockElementsWithPosition: n
            }),
            o = yo({
                blockElementsWithPosition: n,
                blockWidth: Wt
            }),
            a = sr({
                blockElements: e,
                elementPositionKey: Ht
            }),
            i = go({
                blockElementsWithPosition: a
            }),
            s = yo({
                blockElementsWithPosition: a,
                blockWidth: Wt
            });
        return e.map(l => {
            const {
                rowStart: d,
                rowEnd: y,
                columnStart: m,
                columnEnd: f
            } = yi({
                rowTopsUniqueSorted: r,
                columnsLeftUniqueSorted: o,
                elementPosition: l.desktop
            }), {
                rowStart: h,
                rowEnd: v,
                columnStart: k,
                columnEnd: w
            } = yi({
                rowTopsUniqueSorted: i,
                columnsLeftUniqueSorted: s,
                elementPosition: l.mobile
            });
            return { ...l,
                settings: { ...l.settings,
                    styles: { ...l.settings ? .styles || {},
                        "z-index" : t.indexOf(l.elementId) + 1,
                        "grid-row": `${d}/${y}`,
                        "grid-column": `${m}/${f}`,
                        "m-grid-row": `${h}/${v}`,
                        "m-grid-column": `${k}/${w}`
                    }
                }
            }
        })
    },
    Yl = ({
        blockData: e,
        siteElements: t,
        shouldBuildResponsive: n = !0
    } = {}) => {
        const r = M(n),
            o = c(() => e.value.components.map(R => ({ ...t.value[R],
                elementId: R
            }))),
            a = c(() => o ? .value ? .length ? xl({
                blockElements: o.value,
                elementPositionKey: Ht
            }) : null),
            i = c(() => o ? .value ? .length ? xl({
                blockElements: o.value,
                elementPositionKey: On
            }) : null),
            s = c(() => e.value.mobile ? .minHeight && a.value ? "auto" : `${e.value.mobile?.minHeight||jl}px`),
            l = c(() => e.value.desktop ? .minHeight && i.value ? "auto" : `${e.value.desktop?.minHeight}px`),
            d = c(() => e.value.components.some(R => !t.value[R].mobile)),
            y = c(() => gr({
                blockElements: o.value,
                elementPositionKey: On,
                buildResponsiveGrid: r.value
            })),
            m = c(() => Wl({
                blockElements: o.value,
                elementPositionKey: On,
                buildResponsiveGrid: r.value
            })),
            f = c(() => Wl({
                blockElements: o.value,
                elementPositionKey: Ht,
                buildResponsiveGrid: r.value
            })),
            h = c(() => Gl({
                blockElements: o.value,
                elementPositionKey: Ht
            })),
            v = c(() => gr({
                blockElements: o.value,
                elementPositionKey: Ht,
                buildResponsiveGrid: r.value,
                responsiveRows: h.value,
                lowestElementBottom: a.value,
                sectionMinHeight: e.value.mobile ? .minHeight
            })),
            k = c(() => gr({
                blockElements: o.value,
                elementPositionKey: Ht,
                buildResponsiveGrid: r.value
            })),
            w = c(() => Gl({
                blockElements: o.value,
                elementPositionKey: On
            })),
            C = c(() => gr({
                blockElements: o.value,
                elementPositionKey: On,
                buildResponsiveGrid: r.value,
                responsiveRows: w.value,
                lowestElementBottom: i.value,
                sectionMinHeight: e.value.desktop ? .minHeight
            })),
            L = c(() => ah(o.value, e.value.zindexes)),
            I = c(() => ({
                "--m-grid-template-rows": v.value,
                "--t-grid-template-rows": k.value,
                "--small-desktop-grid-template-rows": C.value,
                "--grid-template-rows": y.value,
                "--m-grid-template-columns": f.value,
                "--grid-template-columns": m.value,
                "--m-block-min-height": s.value,
                "--t-block-min-height": `${e.value.mobile?.minHeight||jl}px`,
                "--small-desktop-block-min-height": l.value,
                "--block-min-height": `${e.value.desktop.minHeight}px`
            }));
        return {
            blockElements: o,
            layoutElements: L,
            buildResponsiveGrid: r,
            layoutCSSVars: I,
            isMobileLegacy: d
        }
    },
    ih = Z({
        name: "LayoutElementWrapper",
        props: {
            elementData: {
                type: Object,
                required: !0
            },
            isForcedOnTop: {
                type: Boolean,
                default: !1
            },
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            isMobileView: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            settings() {
                return this.elementData.settings
            },
            styles() {
                return this.settings.styles
            },
            innerBackgroundValue() {
                const {
                    innerBackground: e
                } = this.elementData;
                if (!e) return {};
                const t = e[e.current];
                return e.current !== "image" ? {
                    "--gridItemInnerBackground": t
                } : {
                    "--gridItemInnerBackground": `url(${t})`,
                    "--gridItemInnerBackgroundOverlayOpacity": "overlay-opacity" in e ? e["overlay-opacity"] : null
                }
            },
            isHiddenDesktop() {
                return this.elementData.desktop.isHidden
            },
            isHiddenMobile() {
                return this.elementData.mobile.isHidden
            },
            computedStyles() {
                return { ...kt(this.styles),
                    ...this.innerBackgroundValue,
                    ...this.isHiddenDesktop && !this.isMobileView && {
                        "--hidden-element-z-index": 0
                    },
                    ...this.isHiddenMobile && this.isMobileView && {
                        "--m-hidden-element-z-index": 0
                    },
                    ...this.isForcedOnTop && {
                        "--z-index": dm
                    }
                }
            }
        }
    });

function sh(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["layout-element", {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy
        }]),
        style: Oe(e.computedStyles)
    }, [ae(e.$slots, "default")], 6)
}
const lh = J(ih, [
        ["render", sh]
    ]),
    uh = Z({
        name: "GridButton",
        props: {
            tagName: {
                type: String,
                default: "a"
            },
            href: {
                type: String,
                default: null
            },
            target: {
                type: String,
                default: null
            },
            rel: {
                type: String,
                default: null
            },
            type: {
                type: String,
                default: "primary"
            },
            buttonType: {
                type: String,
                default: null
            },
            content: {
                type: String,
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            fontSizeMobile: {
                type: Number,
                default: null
            },
            fontSizeDesktop: {
                type: Number,
                default: null
            },
            fontFamily: {
                type: String,
                default: null
            },
            fontWeight: {
                type: Number,
                default: null
            },
            borderWidth: {
                type: Number,
                default: null
            },
            borderRadius: {
                type: Number,
                default: null
            },
            backgroundColor: {
                type: String,
                default: null
            },
            fontColor: {
                type: String,
                default: null
            },
            borderColor: {
                type: String,
                default: null
            },
            backgroundColorHover: {
                type: String,
                default: null
            },
            fontColorHover: {
                type: String,
                default: null
            },
            borderColorHover: {
                type: String,
                default: null
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            },
            isInBuilder: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["click", "drag", "dragstart"],
        setup(e) {
            const t = c(() => `${e.mobileElementWidth*100/Gt}vw`),
                n = c(() => `${e.mobileElementHeight*100/Gt}vw`),
                r = c(() => ({
                    "--font-size-mobile": e.fontSizeMobile ? `${e.fontSizeMobile}px` : null,
                    "--font-size-desktop": e.fontSizeDesktop ? `${e.fontSizeDesktop}px` : null,
                    "--font-family": e.fontFamily,
                    "--font-weight": e.fontWeight,
                    "--border-radius": e.borderRadius === 0 || e.borderRadius ? `${e.borderRadius}px` : null,
                    "--border-width": e.borderWidth === 0 || e.borderWidth ? `${e.borderWidth}px` : "0px",
                    "--background-color": e.backgroundColor,
                    "--font-color": e.fontColor,
                    "--border-color": e.borderColor || "rgb(26, 26, 26)",
                    "--background-color-hover": e.backgroundColorHover,
                    "--font-color-hover": e.fontColorHover,
                    "--border-color-hover": e.borderColorHover,
                    "--m-height": e.isInBuilder ? "100%" : n.value,
                    "--m-width": e.isInBuilder ? "100%" : t.value
                })),
                o = c(() => ({
                    "grid-button--empty": !e.content,
                    [`grid-button--${e.type}`]: e.type,
                    loading: e.isLoading
                }));
            return {
                buttonCSSVars: r,
                computedClass: o
            }
        }
    });

function ch(e, t, n, r, o, a) {
    return u(), N(dn(e.tagName), {
        type: e.buttonType,
        name: e.buttonType,
        href: e.href,
        disabled: e.isDisabled,
        target: e.target,
        rel: e.rel,
        class: F(["grid-button", e.computedClass]),
        "aria-hidden": e.isLoading,
        style: Oe(e.buttonCSSVars),
        onClick: t[0] || (t[0] = i => e.$emit("click", i)),
        onDrag: t[1] || (t[1] = i => e.$emit("drag", i)),
        onDragstart: t[2] || (t[2] = i => e.$emit("dragstart", i))
    }, {
        default: le(() => [Pe(x(e.content), 1)]),
        _: 1
    }, 40, ["type", "name", "href", "disabled", "target", "rel", "class", "aria-hidden", "style"])
}
const Rn = J(uh, [
        ["render", ch],
        ["__scopeId", "data-v-5b27dff6"]
    ]),
    Fs = (e, {
        href: t
    } = {}) => ({
        href: t,
        type: c(() => e.data.settings ? .type),
        fontSizeMobile: c(() => e.data.mobile ? .fontSize),
        fontSizeDesktop: c(() => e.data.desktop ? .fontSize),
        fontFamily: c(() => e.data.fontFamily),
        fontWeight: c(() => e.data.fontWeight),
        borderWidth: c(() => e.data.borderWidth),
        borderRadius: c(() => e.data.borderRadius),
        backgroundColor: c(() => e.data.backgroundColor),
        fontColor: c(() => e.data.fontColor),
        borderColor: c(() => e.data.borderColor),
        backgroundColorHover: c(() => e.data.backgroundColorHover),
        fontColorHover: c(() => e.data.fontColorHover),
        borderColorHover: c(() => e.data.borderColorHover),
        buttonType: c(() => e.data.settings.isFormButton ? "submit" : null),
        tagName: c(() => e.data.settings.isFormButton ? "button" : "a"),
        target: c(() => e.data.target),
        rel: c(() => e.data.rel),
        content: c(() => e.data.content)
    }),
    dh = Z({
        name: "GridButtonProviderUser",
        components: {
            GridButton: Rn
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                required: !0
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            }
        },
        setup(e) {
            const {
                getters: t
            } = Xe(), {
                tagName: n,
                href: r,
                target: o,
                rel: a,
                type: i,
                buttonType: s,
                content: l,
                fontSizeMobile: d,
                fontSizeDesktop: y,
                fontFamily: m,
                fontWeight: f,
                borderWidth: h,
                borderRadius: v,
                backgroundColor: k,
                fontColor: w,
                borderColor: C,
                backgroundColorHover: L,
                fontColorHover: I,
                borderColorHover: R
            } = Fs(e, {
                href: c(() => t.getButtonHref({
                    isFormButton: e.data.settings.isFormButton,
                    linkedPageId: e.data.linkedPageId,
                    linkType: e.data.linkType,
                    href: e.data.href
                }))
            });
            return {
                tagName: n,
                href: r,
                target: o,
                rel: a,
                type: i,
                buttonType: s,
                content: l,
                fontSizeMobile: d,
                fontSizeDesktop: y,
                fontFamily: m,
                fontWeight: f,
                borderWidth: h,
                borderRadius: v,
                backgroundColor: k,
                fontColor: w,
                borderColor: C,
                backgroundColorHover: L,
                fontColorHover: I,
                borderColorHover: R
            }
        }
    });

function fh(e, t, n, r, o, a) {
    const i = oe("GridButton");
    return u(), N(i, {
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        "button-type": e.buttonType,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight
    }, null, 8, ["tag-name", "href", "target", "rel", "type", "button-type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const mh = J(dh, [
        ["render", fh]
    ]),
    ph = (e, t) => {
        const n = c(() => t.ecommerce ? .products),
            r = c(() => e.data.settings ? .productId),
            o = c(() => e.data.settings ? .productVariantId);
        return {
            storeProducts: n,
            productId: r,
            productVariantId: o
        }
    },
    Pa = M(""),
    Fl = M({}),
    St = () => ({
        openEcommerceModal: r => {
            Pa.value = r
        },
        closeEcommerceModal: () => {
            Pa.value = null
        },
        openEcommerceModalName: Pa,
        productPreviewData: Fl,
        setProductPreviewData: r => {
            Fl.value = r
        }
    }),
    Ln = e => {
        const {
            getters: t
        } = Xe(), {
            openEcommerceModal: n
        } = St(), r = t.meta ? .ecommerceStoreId, o = M("");
        Ce(() => {
            o.value = `${window.location.origin}${window.location.pathname}`
        });

        function a(l) {
            const d = l.some(f => f.type.value === si),
                y = l.some(f => f.type.value === wt);
            let m = "";
            return y ? m = `&product=${wt}` : d && (m = `&product=${si}`), `${o.value}?open-modal=EcommerceCheckoutSuccess${m}`
        }
        async function i(l) {
            const d = l.reduce((f, h) => f.find(k => k.variant_id === h.variants[0].id) ? f.map(k => k.variant_id === h.variants[0].id ? {
                    variant_id: k.variant_id,
                    quantity: k.quantity + 1
                } : k) : [...f, {
                    variant_id: h.variants[0].id,
                    quantity: 1,
                    time_slot: h.variants[0].booking_event ? .time_slot,
                    time_zone: h.variants[0].booking_event ? .time_zone
                }], []),
                y = t ? .ecommerceShoppingCart ? .lang || "en";
            let m = await rm({
                items: d,
                cancelUrl: o.value,
                successUrl: a(l),
                locale: y,
                storeId: r
            });
            return m = new URL(m), m.searchParams.set("lang", y), m.toString()
        }
        async function s(l) {
            if (!r) {
                n("EcommerceCheckoutFailed");
                return
            }
            try {
                const d = await i(l);
                window.location.assign(d)
            } catch (d) {
                d.code === Pl.INSUFFICIENT_INVENTORY ? n("EcommerceOutOfStock") : d.code === Pl.BOOKING_UNAVAILABLE ? n("EcommerceBookingUnavailable") : n("EcommerceCheckoutFailed")
            }
        }
        return {
            initiateCheckout: s,
            storeId: r
        }
    },
    hh = Z({
        name: "GridEcommerceButtonProviderUser",
        components: {
            GridButton: Rn
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            }
        },
        setup(e) {
            const {
                state: t,
                getters: n
            } = Xe(), {
                initiateCheckout: r
            } = Ln(), {
                openEcommerceModal: o
            } = St(), {
                content: a,
                type: i,
                fontSizeMobile: s,
                fontSizeDesktop: l,
                fontFamily: d,
                fontWeight: y,
                borderRadius: m,
                backgroundColor: f,
                fontColor: h,
                borderColor: v,
                borderWidth: k,
                backgroundColorHover: w,
                fontColorHover: C,
                borderColorHover: L
            } = Fs(e, {
                href: c(() => n.getButtonHref({
                    isFormButton: e.data.settings.isFormButton,
                    linkedPageId: e.data.linkedPageId,
                    linkType: e.data.linkType,
                    href: e.data.href
                }))
            }), I = c(() => t.ecommerce ? .shoppingCartItems), R = c(() => n["ecommerce/canAddToCart"]), {
                productId: W,
                productVariantId: $,
                storeProducts: E
            } = ph(e, t), H = c(() => E.value.find(ne => ne.id === W.value)), X = c(() => H.value ? .type.value === wt), re = c(() => X.value && !!I.value ? .some(ne => ne.id === W.value)), Y = c(() => re.value || !R.value(W.value, $.value));
            return {
                openEcommerceModal: o,
                productId: W,
                productVariantId: $,
                content: a,
                type: i,
                fontSizeMobile: s,
                fontSizeDesktop: l,
                fontFamily: d,
                fontWeight: y,
                borderRadius: m,
                borderWidth: k,
                backgroundColor: f,
                fontColor: h,
                borderColor: v,
                backgroundColorHover: w,
                fontColorHover: C,
                borderColorHover: L,
                initiateCheckout: r,
                shoppingCartItems: I,
                storeProducts: E,
                isAddToCartDisabled: Y,
                product: H,
                canAddToCart: R
            }
        },
        data() {
            return {
                isLoading: !1
            }
        },
        computed: { ...ua("ecommerce", ["isShoppingCartOpen"])
        },
        methods: { ...An("ecommerce", ["setShoppingCartOpen", "setShoppingCartItems", "setSelectedBookingId"]),
            async handleClick() {
                if (this.product ? .type.value === wt) {
                    this.setSelectedBookingId(this.productId), this.openEcommerceModal("EcommerceBookingEventSelect");
                    return
                }
                if (mn()) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                const e = this.product ? .variants.find(n => n.id === this.productVariantId),
                    t = { ...this.product,
                        variants: [e]
                    };
                this.isCartVisible ? (this.setShoppingCartItems([...this.shoppingCartItems, t]), this.manageCartOpenState()) : (this.isLoading = !0, await this.initiateCheckout([t]).then(() => {
                    this.isLoading = !1
                }))
            },
            manageCartOpenState() {
                this.isShoppingCartOpen || this.setShoppingCartOpen(!0)
            }
        }
    });

function gh(e, t, n, r, o, a) {
    const i = oe("GridButton"),
        s = De("qa");
    return ee((u(), N(i, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "is-loading", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-radius", "border-width", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height", "onClick"])), [
        [s, "button-ecommerce-checkout"]
    ])
}
const yh = J(hh, [
        ["render", gh]
    ]),
    vh = Z({
        name: "GridEmbed",
        props: {
            srcdoc: {
                type: String,
                default: ""
            },
            shouldRender: {
                type: Boolean,
                default: !1
            },
            height: {
                type: Number,
                default: null
            },
            id: {
                type: String,
                required: !0
            }
        },
        emits: ["iframe-height-updated"],
        data() {
            return {
                observedHeight: null
            }
        },
        computed: {
            embedHeight() {
                return this.height && this.observedHeight > this.height ? this.observedHeight : this.height || this.observedHeight
            },
            computedStyles() {
                return {
                    "--height": `${this.embedHeight}px`
                }
            }
        },
        methods: {
            observeGridEmbed() {
                const e = this.$refs.gridEmbedIframeRef.contentWindow.document.querySelector("html");
                new ResizeObserver(([{
                    contentRect: n
                }]) => {
                    requestAnimationFrame(() => {
                        const {
                            height: r
                        } = n;
                        r !== this.observedHeight && (this.observedHeight = r, this.$emit("iframe-height-updated", this.observedHeight))
                    })
                }).observe(e)
            }
        }
    }),
    bh = ["id"],
    _h = ["srcdoc"];

function wh(e, t, n, r, o, a) {
    const i = De("qa");
    return ee((u(), p("div", {
        id: e.id,
        class: "grid-embed",
        style: Oe(e.computedStyles)
    }, [e.shouldRender ? (u(), p("iframe", {
        key: 0,
        ref: "gridEmbedIframeRef",
        class: "grid-embed__iframe",
        srcdoc: e.srcdoc,
        title: "custom code element",
        onLoad: t[0] || (t[0] = (...s) => e.observeGridEmbed && e.observeGridEmbed(...s))
    }, null, 40, _h)) : _("", !0)], 12, bh)), [
        [i, "builder-gridelement-gridembed"]
    ])
}
const kh = J(vh, [
        ["render", wh]
    ]),
    Sh = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
    Ph = e => {
        const t = document.createElement("div");
        t.innerHTML = e;
        const n = [...t.children].reduce((r, o) => o.tagName === "STYLE" ? { ...r,
            styles: `${r.styles} ${o.outerHTML}`
        } : o.tagName === "SCRIPT" ? { ...r,
            scripts: `${r.scripts} ${o.outerHTML}`
        } : { ...r,
            html: `${r.html} ${o.outerHTML}`
        }, {
            styles: Sh,
            scripts: "",
            html: ""
        });
        return `<!DOCTYPE html>
	<head>${n.styles}</head>
	<body>${n.html}${n.scripts}</body>
</html>`
    },
    Th = "500px",
    Ud = (e, t = Th) => {
        const n = M(!1);
        try {
            const r = new IntersectionObserver(([{
                    isIntersecting: a
                }]) => {
                    a && (n.value = !0, r.disconnect())
                }, {
                    threshold: 0,
                    rootMargin: t
                }),
                o = Ns(() => {
                    if (e.value) {
                        const a = e.value.$el ? ? e.value;
                        r.observe(a), o()
                    }
                });
            yt(() => r.disconnect())
        } catch (r) {
            console.error(r)
        }
        return {
            isObserved: n
        }
    },
    Ch = Z({
        components: {
            GridEmbed: kh
        },
        props: {
            data: {
                type: Object,
                default: () => ({})
            },
            id: {
                type: String,
                default: null
            }
        },
        setup(e) {
            const t = M(null),
                {
                    isObserved: n
                } = Ud(t),
                r = M(null);
            return Ce(() => {
                r.value = Ph(e.data.content)
            }), {
                gridEmbedRef: t,
                isObserved: n,
                srcdoc: r
            }
        }
    });

function Oh(e, t, n, r, o, a) {
    const i = oe("GridEmbed");
    return u(), N(i, {
        id: e.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height
    }, null, 8, ["id", "should-render", "srcdoc", "height"])
}
const Ih = J(Ch, [
        ["render", Oh]
    ]),
    Ta = ({
        value: e = "",
        validation: t,
        validationMessages: n
    }) => {
        const r = [];
        return t.includes("required") && !e.replace(/ /g, "") && r.push(n.required), e.replace(/ /g, "") && (t.includes("email") && !up.test(e) && r.push(n.email), t.includes("phone") && !cp.test(e) && r.push(n.phone)), r
    },
    $h = Z({
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            isRequired: {
                type: Boolean,
                default: !1
            },
            isRequiredAsteriskVisible: {
                type: Boolean,
                default: !0
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            areErrorsShown: {
                type: Boolean,
                default: !1
            },
            validationErrors: {
                type: Array,
                required: !1,
                default: () => []
            },
            theme: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                default: "input",
                validator: e => ["textarea", "input"].includes(e)
            }
        },
        emits: ["update:model-value"],
        data() {
            return {
                gridInputValue: ""
            }
        },
        computed: {
            computedClasses() {
                return [{
                    "input__component--textarea": this.tag === "textarea"
                }, {
                    "input__component--read-only": !this.isInteractive
                }, `input__component--${this.theme}`]
            }
        }
    }),
    Eh = ["placeholder", "value", "readonly", "tabindex"],
    Dh = ["placeholder", "value", "readonly", "tabindex"],
    Lh = {
        key: 2
    };

function Mh(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["input", `input--${e.theme}`])
    }, [b("label", {
        class: F(["input__label", `input__label--${e.theme}`])
    }, x(e.label) + x(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""), 3), e.tag === "input" ? (u(), p("input", {
        key: 0,
        placeholder: e.placeholder,
        type: "text",
        class: F(["input__component", e.computedClasses]),
        value: e.modelValue,
        readonly: !e.isInteractive,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: t[0] || (t[0] = i => e.$emit("update:model-value", i.target.value)),
        onClick: t[1] || (t[1] = Me(() => {}, ["prevent"])),
        onDragstart: t[2] || (t[2] = Me(() => {}, ["prevent"])),
        onDrag: t[3] || (t[3] = Me(() => {}, ["prevent"]))
    }, null, 42, Eh)) : _("", !0), e.tag === "textarea" ? (u(), p("textarea", {
        key: 1,
        placeholder: e.placeholder,
        type: "text",
        class: F(["input__component", e.computedClasses]),
        value: e.modelValue,
        readonly: !e.isInteractive,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: t[4] || (t[4] = i => e.$emit("update:model-value", i.target.value)),
        onClick: t[5] || (t[5] = Me(() => {}, ["prevent"])),
        onDragstart: t[6] || (t[6] = Me(() => {}, ["prevent"])),
        onDrag: t[7] || (t[7] = Me(() => {}, ["prevent"]))
    }, null, 42, Dh)) : _("", !0), e.validationErrors.length && e.areErrorsShown ? (u(), p("div", Lh, [(u(!0), p(se, null, pe(e.validationErrors, i => (u(), p("p", {
        key: i,
        class: "input__error-message z-body-small"
    }, x(i), 1))), 128))])) : _("", !0)], 2)
}
const Bh = J($h, [
        ["render", Mh],
        ["__scopeId", "data-v-b6576945"]
    ]),
    Ah = Z({
        name: "GridSelectInput",
        props: {
            name: {
                type: String,
                required: !0
            },
            id: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                required: !0
            },
            selectedOptions: {
                type: Array,
                required: !0
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            theme: {
                type: String,
                required: !0
            },
            isSelected: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["select-option", "remove-selection", "add-selection"],
        computed: {
            labelClasses() {
                return [{
                    "input__label--read-only": !this.isInteractive
                }, `select-input--${this.theme}`]
            },
            inputClasses() {
                return [{
                    "input__component--read-only": !this.isInteractive
                }]
            }
        },
        methods: {
            selectOption() {
                if (!this.isInteractive) return;
                const e = {
                    id: this.id,
                    value: this.name
                };
                this.tag !== "checkbox" ? this.$emit("select-option", e) : this.isSelected ? this.$emit("remove-selection", e) : this.$emit("add-selection", e)
            }
        }
    }),
    Rh = ["for"],
    Nh = ["id", "type", "checked", "tabindex"];

function Hh(e, t, n, r, o, a) {
    return u(), p("label", {
        class: F(["select-input", e.labelClasses]),
        for: e.id
    }, [(u(), p("input", {
        id: e.id,
        key: e.isSelected,
        type: e.tag,
        class: F(["select-input__input", e.inputClasses]),
        checked: e.isSelected,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: t[0] || (t[0] = Me((...i) => e.selectOption && e.selectOption(...i), ["stop"])),
        onDragstart: t[1] || (t[1] = Me(() => {}, ["prevent"])),
        onDrag: t[2] || (t[2] = Me(() => {}, ["prevent"]))
    }, null, 42, Nh)), Pe(" " + x(e.name), 1)], 10, Rh)
}
const Uh = J(Ah, [
        ["render", Hh],
        ["__scopeId", "data-v-3b89e969"]
    ]),
    Vh = Z({
        name: "GridSelectInputsWrapper",
        components: {
            GridSelectInput: Uh
        },
        props: {
            label: {
                type: String,
                default: null
            },
            isRequired: {
                type: Boolean,
                default: !1
            },
            isTextArea: {
                type: Boolean,
                default: !1
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            areErrorsShown: {
                type: Boolean,
                default: !1
            },
            validationErrors: {
                type: Array,
                required: !1,
                default: () => []
            },
            theme: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                required: !0,
                validator: e => ["radio", "checkbox"].includes(e)
            },
            options: {
                type: Array,
                required: !0
            }
        },
        emits: ["input"],
        data() {
            return {
                selectedOptions: []
            }
        },
        watch: {
            selectedOptions() {
                const e = this.selectedOptions.map(({
                    value: t
                }) => t).toString();
                this.$emit("input", e)
            }
        },
        methods: {
            isSelected(e) {
                return this.selectedOptions.some(({
                    id: t
                }) => t === e)
            },
            removeSelection(e) {
                const t = this.selectedOptions.filter(n => n.id !== e.id);
                this.selectedOptions = t
            },
            addSelection(e) {
                this.selectedOptions = [...this.selectedOptions, e]
            },
            selectOption(e) {
                this.selectedOptions = [e]
            }
        }
    }),
    qh = {
        key: 0
    };

function jh(e, t, n, r, o, a) {
    const i = oe("GridSelectInput");
    return u(), p("div", {
        class: F(["input", `input--${e.theme}`])
    }, [b("label", {
        class: F(["input__label input__label--read-only", [`input__label--${e.theme}`]])
    }, x(e.label) + x(e.isRequired ? "*" : ""), 3), (u(!0), p(se, null, pe(e.options, s => (u(), p("div", {
        key: s.id,
        class: "input__options"
    }, [be(i, {
        id: s.id,
        name: s.value,
        tag: e.tag,
        "is-selected": e.isSelected(s.id),
        theme: e.theme,
        "is-interactive": e.isInteractive,
        "selected-options": e.selectedOptions,
        onRemoveSelection: e.removeSelection,
        onAddSelection: e.addSelection,
        onSelectOption: e.selectOption
    }, null, 8, ["id", "name", "tag", "is-selected", "theme", "is-interactive", "selected-options", "onRemoveSelection", "onAddSelection", "onSelectOption"])]))), 128)), e.validationErrors.length && e.areErrorsShown ? (u(), p("div", qh, [(u(!0), p(se, null, pe(e.validationErrors, s => (u(), p("p", {
        key: s,
        class: "input__error-message z-body-small"
    }, x(s), 1))), 128))])) : _("", !0)], 2)
}
const xh = J(Vh, [
        ["render", jh],
        ["__scopeId", "data-v-3ef56ad9"]
    ]),
    Wh = {
        __name: "GridForm",
        props: {
            id: {
                type: String,
                required: !0
            },
            settings: {
                type: Object,
                required: !0
            },
            submitButtonData: {
                type: Object,
                required: !0
            },
            formId: {
                type: String,
                default: null
            },
            isError: {
                type: Boolean,
                default: !1
            },
            showSuccessMessage: {
                type: Boolean,
                default: !1
            },
            isUserSite: {
                type: Boolean,
                default: !1
            },
            theme: {
                type: String,
                validator: e => ["dark", "light"].includes(e),
                default: "light"
            },
            formJustify: {
                type: String,
                default: null
            },
            formButtonJustifySelf: {
                type: String,
                default: null
            },
            mobileFormButtonJustifySelf: {
                type: String,
                default: null
            },
            formBackgroundColor: {
                type: String,
                default: null
            },
            formBorderWidth: {
                type: String,
                default: null
            },
            formBorderColor: {
                type: String,
                default: null
            },
            formBorderRadius: {
                type: String,
                default: null
            },
            formPadding: {
                type: String,
                default: null
            },
            submitButtonBackgroundColor: {
                type: String,
                default: null
            },
            submitButtonBackgroundColorHover: {
                type: String,
                default: null
            },
            submitButtonFontColor: {
                type: String,
                default: null
            },
            submitButtonFontColorHover: {
                type: String,
                default: null
            },
            submitButtonBorderColor: {
                type: String,
                default: null
            },
            submitButtonBorderColorHover: {
                type: String,
                default: null
            },
            submitButtonFontFamily: {
                type: String,
                default: null
            },
            submitButtonFontWeight: {
                type: Number,
                default: null
            },
            submitButtonFontSizeMobile: {
                type: Number,
                default: null
            },
            submitButtonFontSizeDesktop: {
                type: Number,
                default: null
            },
            submitButtonBorderWidth: {
                type: Number,
                default: null
            },
            submitButtonBorderRadius: {
                type: Number,
                default: null
            },
            inputFillColor: {
                type: String,
                default: null
            },
            inputFillColorHover: {
                type: String,
                default: null
            },
            formFontFamily: {
                type: String,
                default: null
            },
            formFontWeight: {
                type: Number,
                default: null
            },
            labelTextColor: {
                type: String,
                default: null
            },
            labelTextSize: {
                type: Number,
                default: null
            },
            mobileLabelTextSize: {
                type: Number,
                default: null
            },
            inputTextColor: {
                type: String,
                default: null
            },
            inputTextColorHover: {
                type: String,
                default: null
            },
            inputTextSize: {
                type: Number,
                default: null
            },
            mobileInputTextSize: {
                type: Number,
                default: null
            },
            inputBorderColor: {
                type: String,
                default: null
            },
            inputBorderColorHover: {
                type: String,
                default: null
            },
            inputBorderWidth: {
                type: Number,
                default: null
            },
            inputBorderRadius: {
                type: Number,
                default: null
            },
            elementsVerticalSpacing: {
                type: Number,
                default: null
            },
            mobileElementsVerticalSpacing: {
                type: Number,
                default: null
            }
        },
        emits: ["on-submit"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            t();
            const r = e,
                o = M({}),
                a = M({}),
                i = M(!1),
                s = c(() => r.settings.schema.reduce((v, k) => ({ ...v,
                    [k.name]: {
                        validation: k.validation.flat(),
                        validationMessages: k["validation-messages"]
                    }
                }), {})),
                l = c(() => {
                    const v = Number.isInteger(r.elementsVerticalSpacing) ? `${r.elementsVerticalSpacing}px` : null,
                        k = Number.isInteger(r.mobileElementsVerticalSpacing) ? `${r.mobileElementsVerticalSpacing}px` : null;
                    return {
                        "--form-flex": r.formJustify ? null : "0 1 100%",
                        "--form-button-justify-self": r.formButtonJustifySelf,
                        "--m-form-button-justify-self": r.mobileFormButtonJustifySelf,
                        "--form-background-color": r.formBackgroundColor,
                        "--form-border-width": `${r.formBorderWidth}px`,
                        "--form-border-color": r.formBorderColor,
                        "--form-border-radius": `${r.formBorderRadius}px`,
                        "--form-padding": r.formPadding ? `${r.formPadding}px` : null,
                        "--form-font-family": r.formFontFamily,
                        "--form-font-weight": r.formFontWeight,
                        "--input-fill-color": r.inputFillColor,
                        "--input-fill-color--hover": r.inputFillColorHover || r.inputFillColor,
                        "--label-text-color": r.labelTextColor,
                        "--label-text-size": r.labelTextSize ? `${r.labelTextSize}px` : null,
                        "--m-label-text-size": r.mobileLabelTextSize ? `${r.mobileLabelTextSize}px` : null,
                        "--input-text-color": r.inputTextColor,
                        "--input-text-color--hover": r.inputTextColorHover || r.inputTextColor,
                        "--input-text-size": r.inputTextSize ? `${r.inputTextSize}px` : null,
                        "--m-input-text-size": r.mobileInputTextSize ? `${r.mobileInputTextSize}px` : null,
                        "--input-height": r.inputTextSize ? "auto" : "48px",
                        "--input-border-color": r.inputBorderColor,
                        "--input-border-color--hover": r.inputBorderColorHover || r.inputBorderColor,
                        "--input-border-width": r.inputBorderWidth ? `${r.inputBorderWidth}px` : null,
                        "--input-border-radius": r.inputBorderRadius ? `${r.inputBorderRadius}px` : null,
                        "--form-elements-vertical-spacing": v,
                        "--m-form-elements-vertical-spacing": k,
                        "--form-spacing": "var(--formSpacing)",
                        "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
                        "--grid-item-inner-background": "var(--gridItemInnerBackground)"
                    }
                }),
                d = () => r.settings.schema.flatMap(({
                    name: v
                }) => {
                    const k = Ta({
                        value: a.value[v] ? .value,
                        ...s.value[v]
                    });
                    return o.value = { ...o.value,
                        [v]: k
                    }, k
                }),
                y = (v, k) => {
                    o.value = { ...o.value,
                        [v]: Ta({
                            value: k,
                            ...s.value[v]
                        })
                    }, a.value = { ...a.value,
                        [v]: {
                            value: k,
                            type: r.settings.schema.find(({
                                name: w
                            }) => w === v).validationType || "text"
                        }
                    }
                },
                m = () => {
                    a.value = Object.fromEntries(Object.entries(a.value).map(([v, {
                        value: k,
                        type: w
                    }]) => [v, {
                        value: k.trim(),
                        type: w
                    }]))
                },
                h = {
                    props: r,
                    emit: n,
                    validationErrors: o,
                    formValues: a,
                    areErrorsVisible: i,
                    validationRules: s,
                    formCSSVars: l,
                    validateForm: d,
                    updateField: y,
                    trimFormValues: m,
                    handleSubmit: () => {
                        m();
                        const v = d();
                        i.value = v.length > 0, i.value || n("on-submit", a.value)
                    },
                    computed: c,
                    ref: M,
                    get validateInput() {
                        return Ta
                    },
                    GridButton: Rn,
                    GridInput: Bh,
                    GridSelectInputsWrapper: xh
                };
            return Object.defineProperty(h, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), h
        }
    },
    Gh = ["id"],
    Yh = ["name", "onSubmit"];

function Fh(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", {
        id: n.id,
        class: F(["form", {
            "form--single-field": n.settings.type === "singleField"
        }]),
        style: Oe(r.formCSSVars)
    }, [b("form", {
        class: F(["form__control", {
            "form__control--invisible": n.showSuccessMessage || n.isError
        }]),
        name: n.formId,
        onSubmit: Me(r.handleSubmit, ["prevent"])
    }, [(u(!0), p(se, null, pe(n.settings.schema, s => (u(), p(se, {
        key: s.id
    }, [s.type === "GridInput" ? ee((u(), N(r.GridInput, {
        key: 0,
        theme: n.theme,
        tag: s.tag,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": r.validationRules[s.name].validation.includes("required"),
        "is-required-asterisk-visible": n.settings.schema.length > 1,
        "validation-errors": r.validationErrors[s.name],
        "are-errors-shown": r.areErrorsVisible,
        "is-interactive": n.isUserSite,
        "model-value": r.formValues[s.name] ? .value,
        "onUpdate:modelValue": l => r.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "placeholder", "label", "is-required", "is-required-asterisk-visible", "validation-errors", "are-errors-shown", "is-interactive", "model-value", "onUpdate:modelValue"])), [
        [i, `form-field-${s.inputLabel}`]
    ]) : _("", !0), s.type === "GridSelectInput" ? ee((u(), N(r.GridSelectInputsWrapper, {
        key: 1,
        theme: n.theme,
        tag: s.tag,
        options: s.options,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": r.validationRules[s.name].validation.includes("required"),
        "validation-errors": r.validationErrors[s.name],
        "are-errors-shown": r.areErrorsVisible,
        "is-interactive": n.isUserSite,
        onInput: l => r.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "options", "placeholder", "label", "is-required", "validation-errors", "are-errors-shown", "is-interactive", "onInput"])), [
        [i, `form-field-${s.inputLabel}`]
    ]) : _("", !0)], 64))), 128)), be(r.GridButton, {
        content: n.submitButtonData.content,
        type: n.submitButtonData.settings.type,
        "background-color": n.submitButtonBackgroundColor,
        "background-color-hover": n.submitButtonBackgroundColorHover,
        "font-color": n.submitButtonFontColor,
        "font-color-hover": n.submitButtonFontColorHover,
        "border-color": n.submitButtonBorderColor,
        "border-color-hover": n.submitButtonBorderColorHover,
        "font-family": n.submitButtonFontFamily,
        "font-weight": n.submitButtonFontWeight,
        "font-size-mobile": n.submitButtonFontSizeMobile,
        "font-size-desktop": n.submitButtonFontSizeDesktop,
        "border-width": n.submitButtonBorderWidth,
        "border-radius": n.submitButtonBorderRadius,
        class: "form__button",
        "button-type": "submit",
        "tag-name": "button"
    }, null, 8, ["content", "type", "background-color", "background-color-hover", "font-color", "font-color-hover", "border-color", "border-color-hover", "font-family", "font-weight", "font-size-mobile", "font-size-desktop", "border-width", "border-radius"])], 42, Yh), ae(e.$slots, "default", {}, void 0, !0)], 14, Gh)
}
const zh = J(Wh, [
        ["render", Fh],
        ["__scopeId", "data-v-77575ff3"]
    ]),
    Kh = Z({
        __name: "ZyroLoader",
        props: {
            color: {
                type: String,
                default: "var(--color-dark)"
            },
            size: {
                type: String,
                default: "40px"
            },
            weight: {
                type: String,
                default: "4px"
            }
        },
        setup(e, {
            expose: t
        }) {
            t(), Nt(r => ({
                "5440b9f6": e.size,
                "39d35708": e.weight,
                35946642: e.color
            }));
            const n = {};
            return Object.defineProperty(n, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), n
        }
    }),
    Qh = {
        class: "loader"
    },
    Xh = Hs('<div class="loader__element" data-v-de55149c></div><div class="loader__element" data-v-de55149c></div><div class="loader__element" data-v-de55149c></div><div class="loader__element" data-v-de55149c></div><div class="loader__element" data-v-de55149c></div>', 5),
    Jh = [Xh];

function Zh(e, t, n, r, o, a) {
    return u(), p("div", Qh, Jh)
}
const zs = J(Kh, [
        ["render", Zh],
        ["__scopeId", "data-v-de55149c"]
    ]),
    Vd = "light",
    eg = "dark",
    tg = [Vd, eg],
    ng = 200,
    rg = {
        SHOW_MESSAGE: "showMessage",
        LINK_TO_PAGE: "linkToPage"
    },
    og = Z({
        components: {
            ZyroLoader: zs
        },
        props: {
            successMessage: {
                type: String,
                default: ""
            },
            isError: {
                type: Boolean,
                default: !1
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            showSuccessMessage: {
                type: Boolean,
                default: !1
            },
            theme: {
                type: String,
                validator: e => tg.includes(e),
                default: Vd
            },
            hasBorderWidth: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            submitElementCSSVars() {
                return {
                    "--submit-element-border": this.hasBorderWidth ? "" : "var(--color-gray)"
                }
            }
        }
    }),
    qd = e => (Pt("data-v-93441204"), e = e(), Tt(), e),
    ag = {
        key: 1,
        class: "success-message__heading"
    },
    ig = {
        key: 2
    },
    sg = qd(() => b("div", {
        class: "submit-message__heading"
    }, " Something went wrong ", -1)),
    lg = qd(() => b("div", null, " Please try again later ", -1)),
    ug = [sg, lg];

function cg(e, t, n, r, o, a) {
    const i = oe("ZyroLoader");
    return e.isLoading || e.showSuccessMessage || e.isError ? (u(), p("div", {
        key: 0,
        class: F(["submit-message", `submit-message--${e.theme}`]),
        style: Oe(e.submitElementCSSVars)
    }, [e.isLoading ? (u(), N(i, {
        key: 0,
        color: "var(--grid-button-primary-background-color)"
    })) : e.showSuccessMessage && !e.isError ? (u(), p("div", ag, x(e.successMessage), 1)) : _("", !0), e.isError && !e.isLoading ? (u(), p("div", ig, ug)) : _("", !0)], 6)) : _("", !0)
}
const dg = J(og, [
        ["render", cg],
        ["__scopeId", "data-v-93441204"]
    ]),
    fg = Z({
        components: {
            GridForm: zh,
            PostSubmitElement: dg
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                required: !0
            }
        },
        data() {
            return {
                isLoading: !1,
                showSuccessMessage: !1,
                isError: !1
            }
        },
        computed: { ...qt(["meta", "forms", "getPagePathFromId"])
        },
        methods: {
            async saveData({
                token: e,
                model: t
            }) {
                await fetch(`https://backend.zyro.com/u1/data/v2/post/${e}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    credentials: "omit",
                    mode: "cors",
                    body: JSON.stringify(t)
                }).then(n => {
                    if (!n.ok) throw new Error(n.statusText);
                    return n
                })
            },
            async onSubmit(e) {
                if (this.meta.isDemoTemplate) {
                    this.showSuccessMessage = !0;
                    return
                }
                this.isLoading = !0;
                let t = !1;
                setTimeout(() => {
                    t = !0, this.isLoading = !(this.showSuccessMessage || this.isError)
                }, ng);
                try {
                    await this.saveData({
                        token: this.forms[this.data.formId].token,
                        model: Object.fromEntries(Object.entries(e).map(([a, i]) => [a.replace(/["']+/g, ""), i]))
                    }), this.showSuccessMessage = !0;
                    const {
                        submitAction: n
                    } = this.data.settings;
                    if (!n || n.id === rg.SHOW_MESSAGE) return;
                    const {
                        pageId: r
                    } = this.data.settings.submitRedirectPage, o = this.getPagePathFromId({
                        pageId: r
                    });
                    this.$router.push({
                        path: o
                    })
                } catch (n) {
                    console.error(n), this.isError = !0
                } finally {
                    t && (this.isLoading = !1)
                }
            }
        }
    });

function mg(e, t, n, r, o, a) {
    const i = oe("PostSubmitElement"),
        s = oe("GridForm");
    return u(), N(s, {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover": e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile ? .submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop ? .submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self": e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self": e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop ? .labelTextSize,
        "mobile-label-text-size": e.data.mobile ? .labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop ? .inputTextSize,
        "mobile-input-text-size": e.data.mobile ? .inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing": e.data.desktop ? .formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing": e.data.mobile ? .formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit
    }, {
        default: le(() => [be(i, {
            "show-success-message": e.showSuccessMessage,
            "success-message": e.data.settings.successMessage,
            "is-loading": e.isLoading,
            "is-error": e.isError,
            theme: e.data.settings.theme,
            "has-border-width": e.data.formBorderWidth !== 0
        }, null, 8, ["show-success-message", "success-message", "is-loading", "is-error", "theme", "has-border-width"])]),
        _: 1
    }, 8, ["id", "form-id", "settings", "submit-button-data", "submit-button-background-color", "submit-button-background-color-hover", "submit-button-font-color", "submit-button-font-color-hover", "submit-button-border-color", "submit-button-border-color-hover", "submit-button-font-family", "submit-button-font-weight", "submit-button-font-size-mobile", "submit-button-font-size-desktop", "submit-button-border-width", "submit-button-border-radius", "show-success-message", "is-error", "theme", "form-justify", "form-button-justify-self", "mobile-form-button-justify-self", "form-background-color", "form-border-width", "form-border-color", "form-border-radius", "form-padding", "input-fill-color", "input-fill-color-hover", "form-font-family", "form-font-weight", "label-text-color", "label-text-size", "mobile-label-text-size", "input-text-color", "input-text-color-hover", "input-text-size", "mobile-input-text-size", "input-border-color", "input-border-color-hover", "input-border-width", "input-border-radius", "elements-vertical-spacing", "mobile-elements-vertical-spacing", "onOnSubmit"])
}
const pg = J(fg, [
        ["render", mg]
    ]),
    hg = [pm, Cd],
    Ks = Z({
        props: {
            alt: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: null
            },
            preventDrag: {
                type: Boolean,
                default: !1
            },
            sizes: {
                type: String,
                default: null
            },
            src: {
                type: String,
                required: !0
            },
            srcset: {
                type: String,
                default: null
            },
            tagName: {
                type: String,
                validator: e => hg.includes(e),
                default: "div"
            },
            target: {
                type: String,
                default: null
            },
            rel: {
                type: String,
                default: null
            },
            isLightboxEnabled: {
                type: Boolean,
                default: !1
            },
            isUnstyled: {
                type: Boolean,
                default: !1
            },
            resetMobilePosition: {
                type: Boolean,
                default: !0
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            },
            mobileBorderRadius: {
                type: [String, Number],
                default: 0
            },
            desktopBorderRadius: {
                type: [String, Number],
                default: 0
            },
            cropCssVars: {
                type: Object,
                default: null
            },
            isOverflowVisible: {
                type: Boolean,
                default: !1
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            isMobileImage: {
                type: Boolean,
                default: !1
            },
            isInBuilder: {
                type: Boolean,
                default: !1
            },
            isSvg: {
                type: Boolean,
                default: !1
            },
            shapeMaskSource: {
                type: String,
                default: null
            }
        },
        emits: ["image-load", "image-click"],
        setup(e, t) {
            const n = M(null),
                r = M(!1),
                o = c(() => e.elementHeight > 0 && e.isMobileImage),
                a = c(() => o.value ? `${e.elementWidth*100/Gt}vw` : "100%"),
                i = c(() => o.value ? `${e.elementHeight*100/Gt}vw` : "auto"),
                s = c(() => `${e.elementWidth*100/Wt}vw`),
                l = c(() => `${e.elementHeight*100/Wt}vw`),
                d = c(() => !e.shapeMaskSource && e.desktopBorderRadius),
                y = c(() => !e.shapeMaskSource && e.mobileBorderRadius),
                m = c(() => e.shapeMaskSource && `url('${e.shapeMaskSource}')`);
            return Re(() => n.value ? .complete, () => {
                t.emit("image-load"), r.value = !0
            }), {
                imageRef: n,
                DATA_ATTRIBUTE_ANIMATION_ROLE: Kt,
                DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Us,
                DATA_ATTRIBUTE_SELECTOR: fm,
                DATA_ATTRIBUTE_SELECTOR_IMAGE: mm,
                ANCHOR_TAG: Cd,
                isLoaded: r,
                imageCSSVars: c(() => ({
                    "--overflow": e.isOverflowVisible ? "visible" : null,
                    ...e.cropCssVars
                })),
                mobileWidthCSSVar: c(() => e.isInBuilder ? "100%" : a.value),
                mobileHeightCSSVar: c(() => e.isInBuilder ? "auto" : i.value),
                smallDesktopWidthCSSVar: c(() => e.isInBuilder ? "100%" : s.value),
                smallDesktopHeightCSSVar: c(() => e.isInBuilder ? "100%" : l.value),
                desktopBorderRadiusCSSVar: d,
                mobileBorderRadiusCSSVar: y,
                shapeMaskSourceCssVar: m
            }
        }
    }),
    zl = () => {
        Nt(e => ({
            "18db2524": e.desktopBorderRadiusCSSVar,
            "07c9cc32": e.shapeMaskSourceCssVar,
            "2b48de0a": e.smallDesktopWidthCSSVar,
            "465a2a4c": e.smallDesktopHeightCSSVar,
            "4fe7cede": e.mobileBorderRadiusCSSVar,
            "51c8afce": e.mobileWidthCSSVar,
            "6309a667": e.mobileHeightCSSVar
        }))
    },
    Kl = Ks.setup;
Ks.setup = Kl ? (e, t) => (zl(), Kl(e, t)) : zl;
const gg = Ks,
    yg = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];

function vg(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), N(dn(e.tagName), Fe({
        href: e.href,
        target: e.target,
        rel: e.rel,
        title: e.alt,
        style: e.imageCSSVars,
        class: ["image", {
            "image--grid": !e.isUnstyled,
            "image--unstyled": e.isUnstyled,
            "image--link": e.tagName === e.ANCHOR_TAG,
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_SELECTOR || ""]: e.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: t[0] || (t[0] = s => e.$emit("image-click", s))
    }), {
        default: le(() => [ee(b("img", Ae({
            ref: "imageRef",
            alt: e.alt,
            src: e.src,
            srcset: e.srcset,
            sizes: e.sizes,
            height: e.elementHeight,
            width: e.elementWidth,
            loading: e.isEager ? "eager" : "lazy",
            class: {
                "image__image--zoom": e.isLightboxEnabled, "image__image--unstyled": e.isUnstyled, "image__image--cropped": !!e.cropCssVars, image__image: !e.isUnstyled, "image__image--reset-m-position": e.resetMobilePosition, "image__image--svg": e.isSvg
            }
        }, Od({
            drag: e.preventDrag ? s => s.preventDefault() : () => null,
            dragstart: e.preventDrag ? s => s.preventDefault() : () => null
        }, !0)), null, 16, yg), [
            [i, "builder-gridelement-gridimage"]
        ]), ae(e.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 16, ["href", "target", "rel", "title", "style", "class"])
}
const jd = J(gg, [
        ["render", vg],
        ["__scopeId", "data-v-0dbfdad3"]
    ]),
    Ql = (e, t) => {
        const n = Array(e).fill([]);
        return t.reduce((r, o, a) => {
            const i = a % e;
            return r[i] = [...r[i], { ...o,
                originalIndex: a
            }], r
        }, n)
    },
    bg = Z({
        name: "GridGallery",
        components: {
            GridImage: jd
        },
        props: {
            columnCount: {
                type: Number,
                required: !0
            },
            columnGap: {
                type: Number,
                required: !0
            },
            mobileColumnCount: {
                type: Number,
                required: !0
            },
            mobileColumnGap: {
                type: Number,
                required: !0
            },
            gridImages: {
                type: Array,
                required: !0
            },
            isLightboxEnabled: {
                type: Boolean,
                required: !1
            },
            isMasonryLayout: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["image-load"],
        setup(e) {
            const t = c(() => Ql(e.columnCount, e.gridImages)),
                n = c(() => Ql(e.mobileColumnCount, e.gridImages));
            return {
                masonryColumns: t,
                mobileMasonryColumns: n
            }
        },
        computed: {
            gridGalleryCSSVars() {
                return {
                    "--column-gap": `${this.columnGap}px`,
                    "--column-count": this.columnCount,
                    "--m-column-gap": `${this.mobileColumnGap}px`,
                    "--m-column-count": this.mobileColumnCount
                }
            }
        }
    }),
    _g = {
        class: "gallery"
    };

function wg(e, t, n, r, o, a) {
    const i = oe("GridImage");
    return u(), p("div", _g, [e.isMasonryLayout ? (u(), p("div", {
        key: 0,
        class: "gallery__masonry",
        style: Oe(e.gridGalleryCSSVars)
    }, [(u(!0), p(se, null, pe(e.mobileMasonryColumns, (s, l) => (u(), p("div", {
        key: l,
        class: "gallery__masonry-mobile-columns"
    }, [(u(!0), p(se, null, pe(s, (d, y) => (u(), N(i, {
        key: `${y}${d.src}`,
        class: "gallery__masonry-image",
        alt: d.alt,
        src: d.src,
        srcset: d.srcset,
        sizes: d.sizes,
        "element-width": d.width,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": "",
        "reset-mobile-position": !1,
        "is-lightbox-enabled": e.isLightboxEnabled,
        onImageClick: m => e.$emit("image-click", d.originalIndex),
        onImageLoad: t[0] || (t[0] = m => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "is-lightbox-enabled", "onImageClick"]))), 128))]))), 128)), (u(!0), p(se, null, pe(e.masonryColumns, (s, l) => (u(), p("div", {
        key: l,
        class: "gallery__masonry-desktop-columns"
    }, [(u(!0), p(se, null, pe(s, (d, y) => (u(), N(i, {
        key: `${y}${d.src}`,
        class: "gallery__masonry-image",
        alt: d.alt,
        src: d.src,
        srcset: d.srcset,
        sizes: d.sizes,
        "element-width": d.width,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": "",
        "reset-mobile-position": !1,
        "is-lightbox-enabled": e.isLightboxEnabled,
        onImageClick: m => e.$emit("image-click", d.originalIndex),
        onImageLoad: t[1] || (t[1] = m => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "is-lightbox-enabled", "onImageClick"]))), 128))]))), 128))], 4)) : (u(), p("div", {
        key: 1,
        class: "gallery__grid",
        style: Oe(e.gridGalleryCSSVars)
    }, [(u(!0), p(se, null, pe(e.gridImages, (s, l) => (u(), p("div", {
        key: `${l}${s.src}`,
        class: "gallery__block"
    }, [(u(), N(i, {
        key: `${l}${s.src}`,
        alt: s.alt,
        src: s.src,
        srcset: s.srcset,
        sizes: s.sizes,
        "element-width": s.width,
        "element-height": s.height,
        "prevent-drag": "",
        "is-lightbox-enabled": e.isLightboxEnabled,
        "reset-mobile-position": !1,
        "is-eager": "",
        class: "gallery__image",
        onImageClick: d => e.$emit("image-click", l),
        onImageLoad: t[2] || (t[2] = d => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "element-height", "is-lightbox-enabled", "onImageClick"]))]))), 128))], 4)), ae(e.$slots, "default", {}, void 0, !0)])
}
const kg = J(bg, [
        ["render", wg],
        ["__scopeId", "data-v-9973362e"]
    ]),
    Sg = e => {
        const t = c(() => e.data.images.length > 0),
            n = c(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
            r = c(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
            o = c(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
            a = c(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
            i = c(() => e.data.settings.layout === "masonry");
        return {
            hasGridImages: t,
            columnCount: n,
            columnGap: r,
            isMasonryLayout: i,
            mobileColumnCount: o,
            mobileColumnGap: a
        }
    },
    Ge = {
        Backspace: "Backspace",
        ShiftLeft: "ShiftLeft",
        Escape: "Escape",
        Space: "Space",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        ArrowDown: "ArrowDown",
        Delete: "Delete",
        KeyX: "KeyX",
        KeyC: "KeyC",
        KeyD: "KeyD",
        KeyY: "KeyY",
        KeyZ: "KeyZ",
        OSLeft: "OSLeft",
        NumLockSlash: "NumLockSlash",
        KeySlash: "Slash",
        Enter: "Enter",
        BracketLeft: "BracketLeft",
        BracketRight: "BracketRight"
    },
    Pg = {
        8: Ge.Backspace,
        16: Ge.ShiftLeft,
        27: Ge.Escape,
        32: Ge.Space,
        37: Ge.ArrowLeft,
        38: Ge.ArrowUp,
        39: Ge.ArrowRight,
        40: Ge.ArrowDown,
        46: Ge.Delete,
        67: Ge.KeyC,
        68: Ge.KeyD,
        88: Ge.KeyX,
        89: Ge.KeyY,
        90: Ge.KeyZ,
        91: Ge.OSLeft,
        111: Ge.NumLockSlash,
        191: Ge.KeySlash,
        219: Ge.BracketLeft,
        221: Ge.BracketRight
    },
    Ca = e => {
        let t;
        return e ? e.code !== void 0 ? t = e.code === "MetaLeft" ? "OSLeft" : e.code : e.keyCode !== void 0 && (t = Pg[e.keyCode]) : t = void 0, t
    },
    on = M([]),
    an = M(null),
    dr = () => {
        const e = c(() => on.value.length > 0),
            t = c(() => on.value.length > 1),
            n = c(() => on.value.length - 1),
            r = c(() => an.value === on.value.length - 1),
            o = c(() => an.value === 0),
            a = c(() => on.value[an.value]),
            i = v => {
                an.value = v
            },
            s = v => {
                on.value = Array.isArray(v) ? v : [v]
            },
            l = () => o.value ? i(n.value) : i(an.value - 1),
            d = () => r.value ? i(0) : i(an.value + 1),
            y = () => {
                s([]), i(null)
            },
            m = () => {
                t.value || y()
            },
            f = (v, k = 0) => {
                s(v), i(k)
            },
            h = v => {
                Ca(v) === Ge.ArrowRight && d(), Ca(v) === Ge.ArrowLeft && l(), Ca(v) === Ge.Escape && y()
            };
        return {
            lightboxImages: c(() => on.value),
            currentLightboxImageIndex: c(() => an.value),
            currentLightboxImage: a,
            lastImageIndex: n,
            isFirstImage: o,
            isLastImage: r,
            isLightboxOpen: e,
            isImageGalleryMode: t,
            setLightboxImages: s,
            setCurrentLightboxImageIndex: i,
            goToNextImage: d,
            goToPreviousImage: l,
            handleLightboxNav: h,
            closeLightbox: y,
            addImagesToLightbox: f,
            onLightboxClickOutside: m
        }
    },
    Tg = "lightbox",
    Cg = Z({
        name: "GridGalleryProviderUser",
        components: {
            GridGallery: kg
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            mobileBlockPadding: {
                type: String,
                default: "0px"
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            }
        },
        emits: ["image-load"],
        setup(e) {
            const {
                columnCount: t,
                columnGap: n,
                isMasonryLayout: r,
                mobileColumnCount: o,
                mobileColumnGap: a
            } = Sg(e), {
                getters: i
            } = Xe(), {
                addImagesToLightbox: s
            } = dr(), l = c(() => {
                const {
                    right: L
                } = ir(e.mobileBlockPadding ? ? "");
                return Number.parseInt(L, 10) || 0
            }), d = M(!1), y = () => {
                d.value = window.matchMedia(`(max-width: ${di}px)`).matches
            };
            Ce(() => {
                y(), window.addEventListener("resize", y)
            }), ca(() => {
                window.removeEventListener("resize", y)
            });
            const m = c(() => d.value ? o.value : t.value),
                f = c(() => Math.ceil((n.value + e.elementWidth) / m.value) - n.value),
                h = c(() => !r.value && f.value),
                v = c(() => [`(min-width: ${di}px) ${f.value}px`, `${100/m.value}vw`].join(", ")),
                k = c(() => e.data.images.map(L => {
                    const I = c(() => Qe(L.origin, L.path, i.siteId, {
                            width: f.value,
                            height: h.value
                        })),
                        R = c(() => bp(L.origin, L.path, i.siteId, {
                            width: f.value,
                            height: h.value,
                            columnCount: m.value,
                            columnGap: n.value,
                            mobilePadding: l.value,
                            isMasonryLayout: r.value
                        }));
                    return { ...L,
                        src: I.value,
                        srcset: R.value,
                        sizes: v.value,
                        width: f.value,
                        height: h.value
                    }
                })),
                w = c(() => e.data.settings.imageClickAction === Tg);
            return {
                gridImages: k,
                isLightboxEnabled: w,
                handleGalleryImageClick: L => {
                    if (w.value) {
                        const I = e.data.images.map(R => ({
                            alt: R.alt,
                            src: qs(R.origin, R.path, i.siteId)
                        }));
                        s(I, L)
                    }
                },
                columnCount: t,
                columnGap: n,
                isMasonryLayout: r,
                mobileColumnCount: o,
                mobileColumnGap: a
            }
        }
    });

function Og(e, t, n, r, o, a) {
    const i = oe("GridGallery");
    return u(), N(i, {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: t[0] || (t[0] = s => e.$emit("image-load"))
    }, null, 8, ["grid-images", "is-lightbox-enabled", "column-count", "column-gap", "mobile-column-count", "mobile-column-gap", "is-masonry-layout", "onImageClick"])
}
const Ig = J(Cg, [
        ["render", Og]
    ]),
    $g = (e, t, n) => Math.min(Math.max(e, t), n),
    Xl = 1920,
    Jl = ({
        isAspectRatioBiggerThanContainer: e,
        scale: t,
        containerHeight: n,
        containerWidth: r,
        naturalImageHeight: o,
        naturalImageWidth: a
    }) => {
        if (e) {
            const i = n / o;
            return Math.round(a * i * t)
        }
        return Math.round(r * t)
    },
    Zl = ({
        isAspectRatioBiggerThanContainer: e,
        scale: t,
        containerHeight: n,
        containerWidth: r,
        naturalImageHeight: o,
        naturalImageWidth: a
    }) => {
        if (!e) {
            const i = r / a;
            return Math.round(o * i * t)
        }
        return Math.round(n * t)
    },
    yr = ({
        offsetInPx: e,
        imageSize: t,
        containerSize: n,
        offsetInPercent: r
    }) => {
        if (!e) return r;
        const o = (t - n) / 100;
        return $g(r + e / o, 0, 100)
    },
    vr = ({
        imageSize: e,
        containerSize: t,
        offset: n
    }) => (t - e) * (n / 100),
    eu = ({
        prefix: e,
        left: t,
        top: n,
        scale: r,
        isAspectRatioLargerThanContainer: o
    }) => ({
        [`--${e}-left`]: `${t}px`,
        [`--${e}-top`]: `${n}px`,
        [`--${e}-scale`]: r,
        [`--${e}-width`]: o ? "auto" : "100%",
        [`--${e}-height`]: o ? "100%" : "auto"
    }),
    tu = ({
        left: e,
        top: t,
        imageWidth: n,
        imageHeight: r,
        containerWidth: o,
        containerHeight: a
    }) => ({
        left: Math.round(Math.abs(e)),
        top: Math.round(Math.abs(t)),
        right: Math.round(n - o - Math.abs(e)),
        bottom: Math.round(r - a - Math.abs(t)),
        imageWidth: n,
        imageHeight: r
    }),
    Eg = (e, t) => {
        if (e > Xl) {
            const n = Xl / e;
            return {
                width: Math.round(e * n),
                height: Math.round(t * n)
            }
        }
        return {
            width: e,
            height: t
        }
    },
    Dg = (e, t, {
        dragDeltaYPosition: n,
        dragDeltaXPosition: r,
        href: o
    } = {}) => {
        const a = c(() => Eg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)),
            i = c(() => a.value.width),
            s = c(() => a.value.height),
            l = () => i.value / s.value,
            d = c(() => e.data.desktop ? .crop),
            y = c(() => e.renderedPosition || e.data.desktop),
            m = c(() => y.value.width),
            f = c(() => y.value.height),
            h = c(() => m.value / f.value),
            v = c(() => l() > h.value),
            k = c(() => Jl({
                isAspectRatioBiggerThanContainer: v.value,
                scale: d.value.scale,
                containerHeight: f.value,
                containerWidth: m.value,
                naturalImageHeight: s.value,
                naturalImageWidth: i.value
            })),
            w = c(() => Zl({
                isAspectRatioBiggerThanContainer: v.value,
                scale: d.value.scale,
                containerHeight: f.value,
                containerWidth: m.value,
                naturalImageHeight: s.value,
                naturalImageWidth: i.value
            })),
            C = c(() => yr({
                offsetInPx: -n ? .value,
                imageSize: w.value,
                containerSize: f.value,
                offsetInPercent: d.value.top
            })),
            L = c(() => vr({
                imageSize: w.value,
                containerSize: f.value,
                offset: C.value
            })),
            I = c(() => yr({
                offsetInPx: -r ? .value,
                imageSize: k.value,
                containerSize: m.value,
                offsetInPercent: d.value.left
            })),
            R = c(() => vr({
                imageSize: k.value,
                containerSize: m.value,
                offset: I.value
            })),
            W = c(() => tu({
                left: R.value,
                top: L.value,
                imageWidth: k.value,
                imageHeight: w.value,
                containerWidth: m.value,
                containerHeight: f.value
            })),
            $ = c(() => e.data.mobile.crop || d.value),
            E = c(() => e.renderedPosition || e.data.mobile),
            H = c(() => E.value.width),
            X = c(() => E.value.height),
            re = c(() => H.value / X.value),
            Y = c(() => l() > re.value),
            ne = c(() => Jl({
                isAspectRatioBiggerThanContainer: Y.value,
                scale: $.value.scale,
                containerHeight: X.value,
                containerWidth: H.value,
                naturalImageHeight: s.value,
                naturalImageWidth: i.value
            })),
            A = c(() => Zl({
                isAspectRatioBiggerThanContainer: Y.value,
                scale: $.value.scale,
                containerHeight: X.value,
                containerWidth: H.value,
                naturalImageHeight: s.value,
                naturalImageWidth: i.value
            })),
            S = c(() => yr({
                offsetInPx: -n ? .value,
                imageSize: A.value,
                containerSize: X.value,
                offsetInPercent: $.value.top
            })),
            U = c(() => vr({
                imageSize: A.value,
                containerSize: X.value,
                offset: S.value
            })),
            V = c(() => yr({
                offsetInPx: -r ? .value,
                imageSize: ne.value,
                containerSize: H.value,
                offsetInPercent: $.value.left
            })),
            g = c(() => vr({
                imageSize: ne.value,
                containerSize: H.value,
                offset: V.value
            })),
            B = c(() => tu({
                left: g.value,
                top: U.value,
                imageWidth: ne.value,
                imageHeight: A.value,
                containerWidth: H.value,
                containerHeight: X.value
            })),
            q = c(() => {
                const G = !["svg", "ico", "gif"].includes(Qn(e.data.settings.path));
                if (!d.value || !i.value || !s.value || !G) return null;
                const te = eu({
                        prefix: "desktop",
                        left: R.value,
                        top: L.value,
                        scale: d.value.scale,
                        isAspectRatioLargerThanContainer: v.value
                    }),
                    T = eu({
                        prefix: "mobile",
                        left: g.value,
                        top: U.value,
                        scale: $.value.scale,
                        isAspectRatioLargerThanContainer: Y.value
                    });
                return { ...te,
                    ...T
                }
            });
        return {
            href: o,
            cropCSSVars: q,
            desktopCropParams: W,
            mobileCropParams: B,
            desktopTop: L,
            desktopLeft: R,
            mobileLeft: g,
            mobileTop: U,
            desktopTopPercentWithOffset: C,
            desktopLeftPercentWithOffset: I
        }
    },
    Qs = Z({
        name: "GridImageProviderUser",
        components: {
            GridImage: jd
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            mobileBlockPadding: {
                type: String,
                default: "0px"
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            },
            resetMobilePosition: {
                type: Boolean,
                default: !0
            },
            currentLocale: {
                type: String,
                required: !0
            },
            mobileBorderRadius: {
                type: Number,
                default: 0
            },
            desktopBorderRadius: {
                type: Number,
                default: 0
            },
            shapeMaskSource: {
                type: String,
                default: null
            }
        },
        setup(e, t) {
            const {
                addImagesToLightbox: n
            } = dr(), {
                getters: r
            } = Xe(), {
                cropCSSVars: o,
                desktopCropParams: a,
                mobileCropParams: i,
                href: s
            } = Dg(e, t, {
                href: c(() => e.data.linkType === hm ? r.getPagePathFromId({
                    pageId: e.data.linkedPageId
                }) : e.data.href)
            }), l = W => {
                const {
                    fullResolutionWidth: $,
                    fullResolutionHeight: E
                } = e.data, {
                    left: H,
                    top: X,
                    right: re,
                    bottom: Y,
                    imageWidth: ne,
                    imageHeight: A
                } = W, S = H / ne, U = X / A, V = re / ne, g = Y / A;
                return {
                    left: $ * S,
                    top: E * U,
                    right: $ * V,
                    bottom: E * g
                }
            }, d = W => {
                const {
                    top: $,
                    right: E,
                    bottom: H,
                    left: X
                } = l(W);
                return `${$};${E};${H};${X}`
            }, y = c(() => [e.data.settings.origin, e.data.settings.path, r.siteId]), m = c(() => o.value ? Qe(...y.value, {
                width: e.elementWidth,
                height: e.elementHeight,
                shouldContain: !1,
                trim: d(a.value)
            }) : Qe(...y.value, {
                width: e.elementWidth,
                height: e.elementHeight,
                shouldContain: e.data.settings.styles["object-fit"] === "contain"
            })), f = c(() => Qn(e.data.settings.path) === "svg"), h = c(() => e.mobileElementWidth && e.mobileElementHeight), v = c(() => !e.mobileElementHeight || e.mobileElementHeight < 0 ? m.value : o.value ? Qe(...y.value, {
                width: e.mobileElementWidth,
                height: e.mobileElementHeight,
                shouldContain: !1,
                trim: d(i.value)
            }) : Qe(...y.value, {
                width: e.mobileElementWidth,
                height: e.mobileElementHeight,
                shouldContain: !1
            })), k = c(() => o.value ? $n(...y.value, {
                width: e.elementWidth,
                height: e.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(a.value)
            }) : $n(...y.value, {
                width: e.elementWidth,
                height: e.elementHeight,
                shouldContain: e.data.settings.styles["object-fit"] === "contain"
            })), w = c(() => !e.mobileElementHeight || e.mobileElementHeight < 0 ? k.value : o.value ? $n(...y.value, {
                width: e.mobileElementWidth,
                height: e.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(i.value)
            }) : $n(...y.value, {
                width: e.mobileElementWidth,
                height: e.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1
            })), C = c(() => {
                const {
                    right: W
                } = ir(e.mobileBlockPadding ? ? ""), $ = W ? Number.parseInt(W, 10) : null;
                return Ys(e.elementWidth, $)
            }), L = () => {
                e.data.settings.clickAction === Tl && n({
                    src: Qe(e.data.settings.origin, e.data.settings.path, r.siteId),
                    srcset: pn(e.data.settings.origin, e.data.settings.path, r.siteId),
                    alt: e.data.settings.alt
                })
            }, I = c(() => `${e.elementHeight}px`), R = c(() => `${e.mobileElementHeight}px`);
            return {
                alt: c(() => e.data.settings.alt),
                handleImageClick: L,
                href: s,
                src: m,
                mobileSrc: v,
                srcset: k,
                mobileSrcset: w,
                sizes: C,
                tagName: c(() => e.data.settings.clickAction === gm ? "a" : "div"),
                target: c(() => e.data.target),
                rel: c(() => e.data.rel),
                isLightboxEnabled: c(() => e.data.settings.clickAction === Tl),
                cropCSSVars: o,
                isMobileLayout: h,
                isSvg: f,
                elementHeightCssVar: I,
                mobileElementHeightCssVar: R
            }
        }
    }),
    nu = () => {
        Nt(e => ({
            f9d068a6: e.elementHeightCssVar,
            "4039472b": e.mobileElementHeightCssVar
        }))
    },
    ru = Qs.setup;
Qs.setup = ru ? (e, t) => (nu(), ru(e, t)) : nu;
const Lg = Qs,
    Mg = ["id"];

function Bg(e, t, n, r, o, a) {
    const i = oe("GridImage");
    return u(), p("div", {
        id: e.id,
        class: F(["image-wrapper", {
            "image-wrapper--layout": e.isMobileLayout
        }])
    }, [be(i, {
        class: "image-wrapper--desktop",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.src,
        srcset: e.srcset,
        "tag-name": e.tagName,
        target: e.target,
        rel: e.rel,
        "is-eager": e.lcp.type === "grid-image" && e.lcp.id === e.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": e.elementHeight,
        "element-width": e.elementWidth,
        "shape-mask-source": e.shapeMaskSource,
        "reset-mobile-position": e.resetMobilePosition,
        "mobile-border-radius": e.mobileBorderRadius,
        "desktop-border-radius": e.desktopBorderRadius,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "onImageClick"]), e.isMobileLayout ? (u(), N(i, {
        key: 0,
        "is-mobile-image": !0,
        class: "image-wrapper--mobile",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.mobileSrc,
        srcset: e.mobileSrcset,
        "tag-name": e.tagName,
        "is-svg": e.isSvg,
        target: e.target,
        rel: e.rel,
        "is-eager": e.lcp.type === "grid-image" && e.lcp.id === e.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": e.mobileElementHeight,
        "element-width": e.mobileElementWidth,
        "shape-mask-source": e.shapeMaskSource,
        "reset-mobile-position": e.resetMobilePosition,
        "mobile-border-radius": e.mobileBorderRadius,
        "desktop-border-radius": e.desktopBorderRadius,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "is-svg", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "onImageClick"])) : _("", !0)], 10, Mg)
}
const Ag = J(Lg, [
    ["render", Bg],
    ["__scopeId", "data-v-5b6a92b5"]
]);
var Xs = {
        exports: {}
    },
    xd = function(t, n) {
        return function() {
            for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
            return t.apply(n, o)
        }
    },
    Rg = xd,
    gn = Object.prototype.toString;

function Js(e) {
    return gn.call(e) === "[object Array]"
}

function vi(e) {
    return typeof e > "u"
}

function Ng(e) {
    return e !== null && !vi(e) && e.constructor !== null && !vi(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function Hg(e) {
    return gn.call(e) === "[object ArrayBuffer]"
}

function Ug(e) {
    return typeof FormData < "u" && e instanceof FormData
}

function Vg(e) {
    var t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t
}

function qg(e) {
    return typeof e == "string"
}

function jg(e) {
    return typeof e == "number"
}

function Wd(e) {
    return e !== null && typeof e == "object"
}

function Pr(e) {
    if (gn.call(e) !== "[object Object]") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function xg(e) {
    return gn.call(e) === "[object Date]"
}

function Wg(e) {
    return gn.call(e) === "[object File]"
}

function Gg(e) {
    return gn.call(e) === "[object Blob]"
}

function Gd(e) {
    return gn.call(e) === "[object Function]"
}

function Yg(e) {
    return Wd(e) && Gd(e.pipe)
}

function Fg(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}

function zg(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function Kg() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function Zs(e, t) {
    if (!(e === null || typeof e > "u"))
        if (typeof e != "object" && (e = [e]), Js(e))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}

function bi() {
    var e = {};

    function t(o, a) {
        Pr(e[a]) && Pr(o) ? e[a] = bi(e[a], o) : Pr(o) ? e[a] = bi({}, o) : Js(o) ? e[a] = o.slice() : e[a] = o
    }
    for (var n = 0, r = arguments.length; n < r; n++) Zs(arguments[n], t);
    return e
}

function Qg(e, t, n) {
    return Zs(t, function(o, a) {
        n && typeof o == "function" ? e[a] = Rg(o, n) : e[a] = o
    }), e
}

function Xg(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var vt = {
        isArray: Js,
        isArrayBuffer: Hg,
        isBuffer: Ng,
        isFormData: Ug,
        isArrayBufferView: Vg,
        isString: qg,
        isNumber: jg,
        isObject: Wd,
        isPlainObject: Pr,
        isUndefined: vi,
        isDate: xg,
        isFile: Wg,
        isBlob: Gg,
        isFunction: Gd,
        isStream: Yg,
        isURLSearchParams: Fg,
        isStandardBrowserEnv: Kg,
        forEach: Zs,
        merge: bi,
        extend: Qg,
        trim: zg,
        stripBOM: Xg
    },
    wn = vt;

function ou(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var Yd = function(t, n, r) {
        if (!n) return t;
        var o;
        if (r) o = r(n);
        else if (wn.isURLSearchParams(n)) o = n.toString();
        else {
            var a = [];
            wn.forEach(n, function(l, d) {
                l === null || typeof l > "u" || (wn.isArray(l) ? d = d + "[]" : l = [l], wn.forEach(l, function(m) {
                    wn.isDate(m) ? m = m.toISOString() : wn.isObject(m) && (m = JSON.stringify(m)), a.push(ou(d) + "=" + ou(m))
                }))
            }), o = a.join("&")
        }
        if (o) {
            var i = t.indexOf("#");
            i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o
        }
        return t
    },
    Jg = vt;

function da() {
    this.handlers = []
}
da.prototype.use = function(t, n, r) {
    return this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1
};
da.prototype.eject = function(t) {
    this.handlers[t] && (this.handlers[t] = null)
};
da.prototype.forEach = function(t) {
    Jg.forEach(this.handlers, function(r) {
        r !== null && t(r)
    })
};
var Zg = da,
    ey = vt,
    ty = function(t, n) {
        ey.forEach(t, function(o, a) {
            a !== n && a.toUpperCase() === n.toUpperCase() && (t[n] = o, delete t[a])
        })
    },
    Fd = function(t, n, r, o, a) {
        return t.config = n, r && (t.code = r), t.request = o, t.response = a, t.isAxiosError = !0, t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, t
    },
    Oa, au;

function zd() {
    if (au) return Oa;
    au = 1;
    var e = Fd;
    return Oa = function(n, r, o, a, i) {
        var s = new Error(n);
        return e(s, r, o, a, i)
    }, Oa
}
var Ia, iu;

function ny() {
    if (iu) return Ia;
    iu = 1;
    var e = zd();
    return Ia = function(n, r, o) {
        var a = o.config.validateStatus;
        !o.status || !a || a(o.status) ? n(o) : r(e("Request failed with status code " + o.status, o.config, null, o.request, o))
    }, Ia
}
var $a, su;

function ry() {
    if (su) return $a;
    su = 1;
    var e = vt;
    return $a = e.isStandardBrowserEnv() ? function() {
        return {
            write: function(r, o, a, i, s, l) {
                var d = [];
                d.push(r + "=" + encodeURIComponent(o)), e.isNumber(a) && d.push("expires=" + new Date(a).toGMTString()), e.isString(i) && d.push("path=" + i), e.isString(s) && d.push("domain=" + s), l === !0 && d.push("secure"), document.cookie = d.join("; ")
            },
            read: function(r) {
                var o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return o ? decodeURIComponent(o[3]) : null
            },
            remove: function(r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }(), $a
}
var Ea, lu;

function oy() {
    return lu || (lu = 1, Ea = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }), Ea
}
var Da, uu;

function ay() {
    return uu || (uu = 1, Da = function(t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }), Da
}
var La, cu;

function iy() {
    if (cu) return La;
    cu = 1;
    var e = oy(),
        t = ay();
    return La = function(r, o) {
        return r && !e(o) ? t(r, o) : o
    }, La
}
var Ma, du;

function sy() {
    if (du) return Ma;
    du = 1;
    var e = vt,
        t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return Ma = function(r) {
        var o = {},
            a, i, s;
        return r && e.forEach(r.split(`
`), function(d) {
            if (s = d.indexOf(":"), a = e.trim(d.substr(0, s)).toLowerCase(), i = e.trim(d.substr(s + 1)), a) {
                if (o[a] && t.indexOf(a) >= 0) return;
                a === "set-cookie" ? o[a] = (o[a] ? o[a] : []).concat([i]) : o[a] = o[a] ? o[a] + ", " + i : i
            }
        }), o
    }, Ma
}
var Ba, fu;

function ly() {
    if (fu) return Ba;
    fu = 1;
    var e = vt;
    return Ba = e.isStandardBrowserEnv() ? function() {
        var n = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            o;

        function a(i) {
            var s = i;
            return n && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }
        return o = a(window.location.href),
            function(s) {
                var l = e.isString(s) ? a(s) : s;
                return l.protocol === o.protocol && l.host === o.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(), Ba
}
var Aa, mu;

function pu() {
    if (mu) return Aa;
    mu = 1;
    var e = vt,
        t = ny(),
        n = ry(),
        r = Yd,
        o = iy(),
        a = sy(),
        i = ly(),
        s = zd();
    return Aa = function(d) {
        return new Promise(function(m, f) {
            var h = d.data,
                v = d.headers,
                k = d.responseType;
            e.isFormData(h) && delete v["Content-Type"];
            var w = new XMLHttpRequest;
            if (d.auth) {
                var C = d.auth.username || "",
                    L = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
                v.Authorization = "Basic " + btoa(C + ":" + L)
            }
            var I = o(d.baseURL, d.url);
            w.open(d.method.toUpperCase(), r(I, d.params, d.paramsSerializer), !0), w.timeout = d.timeout;

            function R() {
                if (w) {
                    var $ = "getAllResponseHeaders" in w ? a(w.getAllResponseHeaders()) : null,
                        E = !k || k === "text" || k === "json" ? w.responseText : w.response,
                        H = {
                            data: E,
                            status: w.status,
                            statusText: w.statusText,
                            headers: $,
                            config: d,
                            request: w
                        };
                    t(m, f, H), w = null
                }
            }
            if ("onloadend" in w ? w.onloadend = R : w.onreadystatechange = function() {
                    !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(R)
                }, w.onabort = function() {
                    w && (f(s("Request aborted", d, "ECONNABORTED", w)), w = null)
                }, w.onerror = function() {
                    f(s("Network Error", d, null, w)), w = null
                }, w.ontimeout = function() {
                    var E = "timeout of " + d.timeout + "ms exceeded";
                    d.timeoutErrorMessage && (E = d.timeoutErrorMessage), f(s(E, d, d.transitional && d.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", w)), w = null
                }, e.isStandardBrowserEnv()) {
                var W = (d.withCredentials || i(I)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
                W && (v[d.xsrfHeaderName] = W)
            }
            "setRequestHeader" in w && e.forEach(v, function(E, H) {
                typeof h > "u" && H.toLowerCase() === "content-type" ? delete v[H] : w.setRequestHeader(H, E)
            }), e.isUndefined(d.withCredentials) || (w.withCredentials = !!d.withCredentials), k && k !== "json" && (w.responseType = d.responseType), typeof d.onDownloadProgress == "function" && w.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && w.upload && w.upload.addEventListener("progress", d.onUploadProgress), d.cancelToken && d.cancelToken.promise.then(function(E) {
                w && (w.abort(), f(E), w = null)
            }), h || (h = null), w.send(h)
        })
    }, Aa
}
var Ze = vt,
    hu = ty,
    uy = Fd,
    cy = {
        "Content-Type": "application/x-www-form-urlencoded"
    };

function gu(e, t) {
    !Ze.isUndefined(e) && Ze.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}

function dy() {
    var e;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = pu()), e
}

function fy(e, t, n) {
    if (Ze.isString(e)) try {
        return (t || JSON.parse)(e), Ze.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
var fa = {
    transitional: {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    adapter: dy(),
    transformRequest: [function(t, n) {
        return hu(n, "Accept"), hu(n, "Content-Type"), Ze.isFormData(t) || Ze.isArrayBuffer(t) || Ze.isBuffer(t) || Ze.isStream(t) || Ze.isFile(t) || Ze.isBlob(t) ? t : Ze.isArrayBufferView(t) ? t.buffer : Ze.isURLSearchParams(t) ? (gu(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : Ze.isObject(t) || n && n["Content-Type"] === "application/json" ? (gu(n, "application/json"), fy(t)) : t
    }],
    transformResponse: [function(t) {
        var n = this.transitional,
            r = n && n.silentJSONParsing,
            o = n && n.forcedJSONParsing,
            a = !r && this.responseType === "json";
        if (a || o && Ze.isString(t) && t.length) try {
            return JSON.parse(t)
        } catch (i) {
            if (a) throw i.name === "SyntaxError" ? uy(i, this, "E_JSON_PARSE") : i
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function(t) {
        return t >= 200 && t < 300
    }
};
fa.headers = {
    common: {
        Accept: "application/json, text/plain, */*"
    }
};
Ze.forEach(["delete", "get", "head"], function(t) {
    fa.headers[t] = {}
});
Ze.forEach(["post", "put", "patch"], function(t) {
    fa.headers[t] = Ze.merge(cy)
});
var el = fa,
    my = vt,
    py = el,
    hy = function(t, n, r) {
        var o = this || py;
        return my.forEach(r, function(i) {
            t = i.call(o, t, n)
        }), t
    },
    Ra, yu;

function Kd() {
    return yu || (yu = 1, Ra = function(t) {
        return !!(t && t.__CANCEL__)
    }), Ra
}
var vu = vt,
    Na = hy,
    gy = Kd(),
    yy = el;

function Ha(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
}
var vy = function(t) {
        Ha(t), t.headers = t.headers || {}, t.data = Na.call(t, t.data, t.headers, t.transformRequest), t.headers = vu.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), vu.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(o) {
            delete t.headers[o]
        });
        var n = t.adapter || yy.adapter;
        return n(t).then(function(o) {
            return Ha(t), o.data = Na.call(t, o.data, o.headers, t.transformResponse), o
        }, function(o) {
            return gy(o) || (Ha(t), o && o.response && (o.response.data = Na.call(t, o.response.data, o.response.headers, t.transformResponse))), Promise.reject(o)
        })
    },
    tt = vt,
    Qd = function(t, n) {
        n = n || {};
        var r = {},
            o = ["url", "method", "data"],
            a = ["headers", "auth", "proxy", "params"],
            i = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            s = ["validateStatus"];

        function l(f, h) {
            return tt.isPlainObject(f) && tt.isPlainObject(h) ? tt.merge(f, h) : tt.isPlainObject(h) ? tt.merge({}, h) : tt.isArray(h) ? h.slice() : h
        }

        function d(f) {
            tt.isUndefined(n[f]) ? tt.isUndefined(t[f]) || (r[f] = l(void 0, t[f])) : r[f] = l(t[f], n[f])
        }
        tt.forEach(o, function(h) {
            tt.isUndefined(n[h]) || (r[h] = l(void 0, n[h]))
        }), tt.forEach(a, d), tt.forEach(i, function(h) {
            tt.isUndefined(n[h]) ? tt.isUndefined(t[h]) || (r[h] = l(void 0, t[h])) : r[h] = l(void 0, n[h])
        }), tt.forEach(s, function(h) {
            h in n ? r[h] = l(t[h], n[h]) : h in t && (r[h] = l(void 0, t[h]))
        });
        var y = o.concat(a).concat(i).concat(s),
            m = Object.keys(t).concat(Object.keys(n)).filter(function(h) {
                return y.indexOf(h) === -1
            });
        return tt.forEach(m, d), r
    };
const by = "axios",
    _y = "0.21.4",
    wy = "Promise based HTTP client for the browser and node.js",
    ky = "index.js",
    Sy = {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
    },
    Py = {
        type: "git",
        url: "https://github.com/axios/axios.git"
    },
    Ty = ["xhr", "http", "ajax", "promise", "node"],
    Cy = "Matt Zabriskie",
    Oy = "MIT",
    Iy = {
        url: "https://github.com/axios/axios/issues"
    },
    $y = "https://axios-http.com",
    Ey = {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
    },
    Dy = {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
    },
    Ly = "dist/axios.min.js",
    My = "dist/axios.min.js",
    By = "./index.d.ts",
    Ay = {
        "follow-redirects": "^1.14.0"
    },
    Ry = [{
        path: "./dist/axios.min.js",
        threshold: "5kB"
    }],
    Ny = {
        name: by,
        version: _y,
        description: wy,
        main: ky,
        scripts: Sy,
        repository: Py,
        keywords: Ty,
        author: Cy,
        license: Oy,
        bugs: Iy,
        homepage: $y,
        devDependencies: Ey,
        browser: Dy,
        jsdelivr: Ly,
        unpkg: My,
        typings: By,
        dependencies: Ay,
        bundlesize: Ry
    };
var Xd = Ny,
    tl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
    tl[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
var bu = {},
    Hy = Xd.version.split(".");

function Jd(e, t) {
    for (var n = t ? t.split(".") : Hy, r = e.split("."), o = 0; o < 3; o++) {
        if (n[o] > r[o]) return !0;
        if (n[o] < r[o]) return !1
    }
    return !1
}
tl.transitional = function(t, n, r) {
    var o = n && Jd(n);

    function a(i, s) {
        return "[Axios v" + Xd.version + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "")
    }
    return function(i, s, l) {
        if (t === !1) throw new Error(a(s, " has been removed in " + n));
        return o && !bu[s] && (bu[s] = !0, console.warn(a(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, s, l) : !0
    }
};

function Uy(e, t, n) {
    if (typeof e != "object") throw new TypeError("options must be an object");
    for (var r = Object.keys(e), o = r.length; o-- > 0;) {
        var a = r[o],
            i = t[a];
        if (i) {
            var s = e[a],
                l = s === void 0 || i(s, a, e);
            if (l !== !0) throw new TypeError("option " + a + " must be " + l);
            continue
        }
        if (n !== !0) throw Error("Unknown option " + a)
    }
}
var Vy = {
        isOlderVersion: Jd,
        assertOptions: Uy,
        validators: tl
    },
    Zd = vt,
    qy = Yd,
    _u = Zg,
    wu = vy,
    ma = Qd,
    ef = Vy,
    kn = ef.validators;

function fr(e) {
    this.defaults = e, this.interceptors = {
        request: new _u,
        response: new _u
    }
}
fr.prototype.request = function(t) {
    typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = ma(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var n = t.transitional;
    n !== void 0 && ef.assertOptions(n, {
        silentJSONParsing: kn.transitional(kn.boolean, "1.0.0"),
        forcedJSONParsing: kn.transitional(kn.boolean, "1.0.0"),
        clarifyTimeoutError: kn.transitional(kn.boolean, "1.0.0")
    }, !1);
    var r = [],
        o = !0;
    this.interceptors.request.forEach(function(f) {
        typeof f.runWhen == "function" && f.runWhen(t) === !1 || (o = o && f.synchronous, r.unshift(f.fulfilled, f.rejected))
    });
    var a = [];
    this.interceptors.response.forEach(function(f) {
        a.push(f.fulfilled, f.rejected)
    });
    var i;
    if (!o) {
        var s = [wu, void 0];
        for (Array.prototype.unshift.apply(s, r), s = s.concat(a), i = Promise.resolve(t); s.length;) i = i.then(s.shift(), s.shift());
        return i
    }
    for (var l = t; r.length;) {
        var d = r.shift(),
            y = r.shift();
        try {
            l = d(l)
        } catch (m) {
            y(m);
            break
        }
    }
    try {
        i = wu(l)
    } catch (m) {
        return Promise.reject(m)
    }
    for (; a.length;) i = i.then(a.shift(), a.shift());
    return i
};
fr.prototype.getUri = function(t) {
    return t = ma(this.defaults, t), qy(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
};
Zd.forEach(["delete", "get", "head", "options"], function(t) {
    fr.prototype[t] = function(n, r) {
        return this.request(ma(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
Zd.forEach(["post", "put", "patch"], function(t) {
    fr.prototype[t] = function(n, r, o) {
        return this.request(ma(o || {}, {
            method: t,
            url: n,
            data: r
        }))
    }
});
var jy = fr,
    Ua, ku;

function tf() {
    if (ku) return Ua;
    ku = 1;

    function e(t) {
        this.message = t
    }
    return e.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, e.prototype.__CANCEL__ = !0, Ua = e, Ua
}
var Va, Su;

function xy() {
    if (Su) return Va;
    Su = 1;
    var e = tf();

    function t(n) {
        if (typeof n != "function") throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function(i) {
            r = i
        });
        var o = this;
        n(function(i) {
            o.reason || (o.reason = new e(i), r(o.reason))
        })
    }
    return t.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, t.source = function() {
        var r, o = new t(function(i) {
            r = i
        });
        return {
            token: o,
            cancel: r
        }
    }, Va = t, Va
}
var qa, Pu;

function Wy() {
    return Pu || (Pu = 1, qa = function(t) {
        return function(r) {
            return t.apply(null, r)
        }
    }), qa
}
var ja, Tu;

function Gy() {
    return Tu || (Tu = 1, ja = function(t) {
        return typeof t == "object" && t.isAxiosError === !0
    }), ja
}
var Cu = vt,
    Yy = xd,
    Tr = jy,
    Fy = Qd,
    zy = el;

function nf(e) {
    var t = new Tr(e),
        n = Yy(Tr.prototype.request, t);
    return Cu.extend(n, Tr.prototype, t), Cu.extend(n, t), n
}
var $t = nf(zy);
$t.Axios = Tr;
$t.create = function(t) {
    return nf(Fy($t.defaults, t))
};
$t.Cancel = tf();
$t.CancelToken = xy();
$t.isCancel = Kd();
$t.all = function(t) {
    return Promise.all(t)
};
$t.spread = Wy();
$t.isAxiosError = Gy();
Xs.exports = $t;
Xs.exports.default = $t;
var Ky = Xs.exports,
    Qy = Ky;
const Xy = lp(Qy),
    Jy = Z({
        props: {
            src: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            poster: {
                type: String,
                default: null
            }
        },
        emits: ["media-load"]
    }),
    Zy = ["src", "poster"],
    ev = ["src", "alt"];

function tv(e, t, n, r, o, a) {
    return u(), p("figure", null, [e.src.includes("video") || e.src.includes(".mp4") ? (u(), p("video", {
        key: 0,
        src: e.src,
        poster: e.poster,
        class: "media-item",
        controls: "",
        onProgressOnce: t[0] || (t[0] = i => e.$emit("media-load"))
    }, null, 40, Zy)) : (u(), p("img", {
        key: 1,
        src: e.src,
        alt: e.alt,
        class: "media-item",
        onLoad: t[1] || (t[1] = i => e.$emit("media-load"))
    }, null, 40, ev))])
}
const nv = J(Jy, [
        ["render", tv],
        ["__scopeId", "data-v-c35ee7e4"]
    ]),
    rv = Z({
        components: {
            GridInstagramFeedMediaItemFigure: nv
        },
        props: {
            src: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: null
            },
            poster: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                DATA_ATTRIBUTE_ANIMATION_ROLE: Kt,
                DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Us,
                isLoaded: !1
            }
        }
    }),
    ov = ["href"],
    av = {
        key: 1
    },
    iv = {
        key: 2,
        class: "placeholder"
    };

function sv(e, t, n, r, o, a) {
    const i = oe("GridInstagramFeedMediaItemFigure");
    return u(), p("div", Fe({
        class: ["media-wrapper", {
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE
    }), [e.src && e.href ? (u(), p("a", {
        key: 0,
        title: "Open instagram page of this image",
        href: e.href,
        rel: "noopener",
        target: "_blank"
    }, [be(i, {
        src: e.src,
        alt: e.alt,
        poster: e.poster,
        onMediaLoad: t[0] || (t[0] = s => e.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])], 8, ov)) : e.src && !e.href ? (u(), p("div", av, [be(i, {
        src: e.src,
        alt: e.alt,
        poster: e.poster,
        onMediaLoad: t[1] || (t[1] = s => e.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])])) : (u(), p("div", iv))], 16)
}
const lv = J(rv, [
        ["render", sv],
        ["__scopeId", "data-v-8ece2404"]
    ]),
    uv = Z({
        components: {
            GridInstagramFeedMediaItem: lv
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            media: {
                type: Array,
                default: () => []
            }
        }
    }),
    cv = ["id"];

function dv(e, t, n, r, o, a) {
    const i = oe("GridInstagramFeedMediaItem");
    return u(), p("div", {
        id: e.id,
        class: "instagram-feed"
    }, [(u(!0), p(se, null, pe(e.media, s => (u(), N(i, {
        key: s.src,
        src: s.src,
        href: s.href,
        alt: s.alt,
        poster: s.poster
    }, null, 8, ["src", "href", "alt", "poster"]))), 128))], 8, cv)
}
const fv = J(uv, [
        ["render", dv]
    ]),
    Ou = [{
        alt: "Workstation",
        id: "qc2YaEHSYsc",
        src: `${Ue}/workstation.jpg`
    }, {
        alt: "Waterfall between rocks",
        id: "ifnzcFXUmH0",
        src: `${Ue}/waterfall-between-rocks.jpg`
    }, {
        alt: "Trees with snow",
        id: "J2vryWaTqlB",
        src: `${Ue}/trees-with-snow.png`
    }, {
        alt: "Tree buds",
        id: "ZzmFPZuw7S1",
        src: `${Ue}/tree-buds.jpg`
    }, {
        alt: "Tiger drinking water",
        id: "k37Jfax7a6k",
        src: `${Ue}/tiger-drinking-water.jpg`
    }, {
        alt: "Tall well preserved buildings",
        id: "gTNSQDsXWp7",
        src: `${Ue}/tall-well-preserved-buildings.jpg`
    }, {
        alt: "Sunny beautiful wall",
        id: "QEdmdqjqcMf",
        src: `${Ue}/sunny-beautiful-wall.jpg`
    }, {
        alt: "Stereo gear",
        id: "iUXujDl2onh",
        src: `${Ue}/stereo-gear.jpg`
    }, {
        alt: "Rooftop oasis",
        id: "LWHjQE4HOv7",
        src: `${Ue}/rooftop-oasis.jpg`
    }, {
        alt: "Rocky beach",
        id: "o4qz1QOQcpJ",
        src: `${Ue}/rocky-beach.jpg`
    }, {
        alt: "Photographer holding camera",
        id: "VAHQ4wGABhK",
        src: `${Ue}/photographer-holding-camera.jpg`
    }, {
        alt: "Koi fishes",
        id: "zg35JVHQ4wG",
        src: `${Ue}/koi-fishes.jpg`
    }, {
        alt: "Human head artificially created",
        id: "zg35JVl8GY2",
        src: `${Ue}/human-head-artificially-created.jpg`
    }, {
        alt: "Horse eating grass",
        id: "dBwJoATZJBH",
        src: `${Ue}/horse-eating-grass.jpg`
    }, {
        alt: "Fluffy decoration in water",
        id: "HR21NDsphkV",
        src: `${Ue}/fluffy-docoration-in-water.jpg`
    }, {
        alt: "Elk looking at camera",
        id: "oLq0J4X2h2P",
        src: `${Ue}/elk-looking-at-camera.jpg`
    }, {
        alt: "Dog running in snow",
        id: "dbULY2RIxXc",
        src: `${Ue}/dog-running-in-snow.jpg`
    }, {
        alt: "Clean workspace",
        id: "WRmXHA1JA8H",
        src: `${Ue}/clean-workspace.jpg`
    }, {
        alt: "Cinematic food shot",
        id: "YgbHW4EtzbY",
        src: `${Ue}/cinematic-food-shot.jpg`
    }, {
        alt: "Christmas houses",
        id: "Eyoj1y8hvYz",
        src: `${Ue}/christmas-houses.jpg`
    }, {
        alt: "Bird sitting on branch",
        id: "yQKxjLtI8eg",
        src: `${Ue}/bird-sitting-on-branch.jpg`
    }, {
        alt: "Beautiful entry to private property",
        id: "1StnvFtqFjR",
        src: `${Ue}/beautiful-entry-to-private-property.jpg`
    }, {
        alt: "African animals",
        id: "nPjqWNmfFf0",
        src: `${Ue}/african-animals.jpg`
    }, {
        alt: "Workspace",
        id: "7gsm5H6lHSH",
        src: `${Ue}/workspace.jpg`
    }],
    mv = "https://graph.instagram.com/me/media",
    pv = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
    hv = ({
        elementId: e,
        elementData: t,
        siteId: n,
        getInstagramTokenHandler: r,
        cleanupCallback: o
    }) => {
        const a = c(() => t.value.settings["item-count"]),
            i = M(null),
            s = M([]),
            l = c(() => s.value.length > 0 ? s.value.filter(({
                src: m
            }) => typeof m < "u").slice(0, a.value) : new Array(a.value).fill({})),
            d = async () => {
                const m = new URL(mv);
                m.searchParams.set("fields", pv.join(",")), m.searchParams.set("access_token", i.value);
                const f = await fetch(m.toString());
                return f.ok ? (await f.json()).data : Promise.reject(f)
            };
        return {
            media: l,
            init: async () => {
                try {
                    i.value = await r({
                        siteId: n,
                        elementId: e.value
                    })
                } catch {
                    s.value = Ou;
                    return
                }
                try {
                    const m = await d();
                    s.value = m.map(f => ({
                        id: f.id,
                        src: f.media_url,
                        alt: f.caption,
                        href: f.permalink,
                        poster: f.thumbnail_url
                    }))
                } catch (m) {
                    throw s.value = Ou, o && o(i.value), m
                }
            },
            itemGap: c(() => t.value.settings.styles["item-gap"])
        }
    },
    gv = Z({
        components: {
            GridInstagramFeed: fv
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            }
        },
        emits: ["media-loaded"],
        setup(e, t) {
            const {
                getters: n
            } = Xe(), r = c(() => e.id), o = c(() => e.data), a = async ({
                siteId: l,
                elementId: d
            }) => {
                const {
                    data: y
                } = await Xy.get(`https://backend.zyro.com/u1/instagram/token/${l}/${d}`, {
                    withCredentials: !1
                });
                return y.accessToken
            }, {
                media: i,
                init: s
            } = hv({
                elementId: r,
                elementData: o,
                siteId: n.siteId,
                getInstagramTokenHandler: a
            });
            return s(), Re(i, async l => {
                l ? .length && (await jt(), t.emit("media-loaded"))
            }, {
                immediate: !1
            }), {
                media: i
            }
        }
    });

function yv(e, t, n, r, o, a) {
    const i = oe("GridInstagramFeed");
    return u(), N(i, {
        id: e.id,
        media: e.media
    }, null, 8, ["id", "media"])
}
const vv = J(gv, [
        ["render", yv]
    ]),
    bv = Z({
        name: "GridMap",
        props: {
            isIframeLoaded: {
                type: Boolean,
                default: !1
            },
            shouldRender: {
                type: Boolean,
                default: !0
            },
            src: {
                type: String,
                required: !0
            }
        },
        computed: {
            renderSrc() {
                return this.shouldRender ? this.src : null
            }
        }
    }),
    _v = ["src"],
    wv = {
        class: "grid-map__pin"
    };

function kv(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["grid-map", {
            "grid-map--loading": !e.isIframeLoaded
        }])
    }, [b("iframe", {
        ref: "iframeRef",
        class: "grid-map__frame",
        width: "100%",
        height: "100%",
        src: e.renderSrc
    }, null, 8, _v), ee(b("div", wv, null, 512), [
        [Ot, !e.isIframeLoaded]
    ])], 2)
}
const Sv = J(bv, [
        ["render", kv],
        ["__scopeId", "data-v-3b334315"]
    ]),
    Pv = (e, t) => {
        try {
            const {
                isObserved: n
            } = Ud(t), r = M(!1), o = xt({
                src: c(() => e.data.settings ? .src),
                shouldRender: c(() => n.value),
                isIframeLoaded: c(() => r.value)
            }), a = Ns(() => {
                const i = t.value ? .$refs;
                i && (i.iframeRef.addEventListener("load", () => {
                    r.value = !0
                }), a())
            });
            return {
                composedProps: o
            }
        } catch (n) {
            console.error(n)
        }
    },
    Tv = Z({
        name: "GridMapProviderUser",
        components: {
            GridMap: Sv
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const t = M(null),
                {
                    composedProps: n
                } = Pv(e, t);
            return {
                mapRef: t,
                composedProps: n
            }
        }
    });

function Cv(e, t, n, r, o, a) {
    const i = oe("GridMap");
    return u(), N(i, Ae({
        ref: "mapRef"
    }, e.composedProps), null, 16)
}
const Ov = J(Tv, [
        ["render", Cv]
    ]),
    Iv = Z({
        __name: "GridSocialIcons",
        props: {
            links: {
                default: () => []
            },
            preventLinks: {
                type: Boolean,
                default: !1
            },
            direction: {
                default: "row"
            },
            directionMobile: {
                default: null
            },
            preventSpacing: {
                type: Boolean,
                default: !1
            },
            fullHeight: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                r = c(() => ["social-icons", `social-icons--${n.direction}`]),
                o = c(() => ({
                    "--m-icon-direction": n.directionMobile || n.direction,
                    "--icon-padding-vertical": n.direction === "column" ? "var(--space-between-icons)" : "0",
                    "--icon-padding-horizontal": n.direction === "row" ? "var(--space-between-icons)" : "0",
                    ...n.fullHeight && {
                        height: "100%"
                    },
                    ...n.preventSpacing && {
                        "--space-between-icons": "0px"
                    },
                    ...n.directionMobile && {
                        "--m-icon-padding-vertical": n.directionMobile === "column" ? "var(--space-between-icons)" : "0",
                        "--m-icon-padding-horizontal": n.directionMobile === "row" ? "var(--space-between-icons)" : "0"
                    }
                })),
                a = {
                    props: n,
                    computedClass: r,
                    computedStyles: o
                };
            return Object.defineProperty(a, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), a
        }
    }),
    $v = ["href", "title", "innerHTML"];

function Ev(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(r.computedClass),
        style: Oe(r.computedStyles)
    }, [(u(!0), p(se, null, pe(n.links, ({
        link: i,
        svg: s,
        title: l
    }) => (u(), p("a", Ae({
        key: i,
        href: i,
        target: "_blank",
        rel: "noopener",
        title: l,
        class: "social-icons__link"
    }, Od({
        dragstart: n.preventLinks ? d => d.preventDefault() : () => null,
        click: n.preventLinks ? d => d.preventDefault() : () => null
    }, !0), {
        innerHTML: s
    }), null, 16, $v))), 128))], 6)
}
const rf = J(Iv, [
        ["render", Ev],
        ["__scopeId", "data-v-723bd2cd"]
    ]),
    Dv = e => {
        const t = c(() => e.data.settings.styles);
        return xt({
            links: c(() => e.data.links.map(r => ({ ...r,
                title: `Go to ${fp(r.icon)} page`
            }))),
            direction: c(() => t.value["icon-direction"]),
            directionMobile: c(() => t.value["m-icon-direction"]),
            fullHeight: c(() => !t.value.justify),
            preventSpacing: c(() => t.value["icon-spacing"] !== "center" || t.value["icon-direction"] === "column" ? !t.value.justify : !t.value.align)
        })
    },
    Lv = Z({
        components: {
            GridSocialIcons: rf
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e, t) {
            return {
                composedProps: Dv(e)
            }
        }
    });

function Mv(e, t, n, r, o, a) {
    const i = oe("GridSocialIcons");
    return u(), N(i, Fe(Bt(e.composedProps)), null, 16)
}
const Bv = J(Lv, [
        ["render", Mv]
    ]),
    Av = M(null),
    Rv = e => {
        const t = c(() => e.data.settings ? .priceId || ""),
            n = c(() => e.data.settings ? .paymentType || "payment");
        return {
            stripeInstance: Av,
            priceId: t,
            paymentType: n
        }
    },
    Nv = "https://js.stripe.com/v3",
    Hv = Z({
        name: "GridStripeButtonProviderUser",
        components: {
            GridButton: Rn
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            successPageSlug: {
                type: String,
                required: !0
            },
            cancellationPageSlug: {
                type: String,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const {
                getters: t
            } = Xe(), {
                content: n,
                type: r
            } = Fs(e, {
                href: c(() => t.getButtonHref({
                    isFormButton: e.data.settings.isFormButton,
                    linkedPageId: e.data.linkedPageId,
                    linkType: e.data.linkType,
                    href: e.data.href
                }))
            }), {
                stripeInstance: o,
                priceId: a,
                paymentType: i
            } = Rv(e), s = M(!1), l = () => new Promise((y, m) => {
                if (!!(o.value && window.Stripe)) {
                    y();
                    return
                }
                const h = document.createElement("script");
                h.addEventListener("load", () => {
                    window.Stripe && (o.value = window.Stripe(e.stripePublicApiKey), y())
                }), h.addEventListener("error", () => {
                    m()
                }), h.src = Nv, document.head.appendChild(h)
            });
            return {
                content: n,
                type: r,
                isLoadingStripeScript: s,
                handleClick: async () => {
                    a.value && (s.value = !0, await l(), s.value = !1, o.value.redirectToCheckout({
                        lineItems: [{
                            price: a.value,
                            quantity: 1
                        }],
                        mode: i.value,
                        successUrl: `${window.location.origin}/${e.successPageSlug}`,
                        cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`
                    }).then(y => {
                        y.error && console.error(y.error.message)
                    }))
                }
            }
        }
    });

function Uv(e, t, n, r, o, a) {
    const i = oe("GridButton"),
        s = De("qa");
    return ee((u(), N(i, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "onClick"])), [
        [s, "button-stripe-checkout"]
    ])
}
const Vv = J(Hv, [
        ["render", Uv]
    ]),
    qv = {
        __name: "GridTextBox",
        props: {
            textAlign: {
                type: String,
                default: null
            },
            textAlignMobile: {
                type: String,
                default: null
            },
            backgroundColor: {
                type: String,
                default: null
            },
            content: {
                type: String,
                default: null
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e;
            Nt(s => ({
                "36f106d3": o.value,
                "4485301f": r.value,
                "0706d955": a.value
            }));
            const r = c(() => n.backgroundColor),
                o = c(() => n.textAlign === "justify" ? "normal" : "break-spaces"),
                a = c(() => n.textAlignMobile && n.textAlignMobile === "justify" ? "normal" : o.value),
                i = {
                    props: n,
                    backgroundColor: r,
                    whiteSpace: o,
                    whiteSpaceMobile: a,
                    computed: c
                };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    },
    jv = ["innerHTML"],
    xv = {
        key: 1,
        class: "text-box"
    };

function Wv(e, t, n, r, o, a) {
    return n.content ? (u(), p("div", {
        key: 0,
        class: "text-box",
        innerHTML: n.content
    }, null, 8, jv)) : (u(), p("div", xv, [ae(e.$slots, "default")]))
}
const Gv = J(qv, [
        ["render", Wv]
    ]),
    Yv = {
        __name: "GridTextBoxProviderUser",
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = {
                GridTextBox: Gv
            };
            return Object.defineProperty(n, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), n
        }
    };

function Fv(e, t, n, r, o, a) {
    return u(), N(r.GridTextBox, {
        "text-align": n.data.settings.styles.text,
        "text-align-mobile": n.data.settings.styles["m-text"],
        "background-color": n.data.backgroundColor,
        content: n.data.content
    }, null, 8, ["text-align", "text-align-mobile", "background-color", "content"])
}
const zv = J(Yv, [
        ["render", Fv]
    ]),
    ht = {
        YOUTUBE: "youtube",
        VIMEO: "vimeo"
    },
    mr = "0",
    vo = "1",
    Kv = mr,
    Qv = mr,
    Xv = vo,
    Jv = mr,
    Zv = mr,
    eb = vo;
ht.YOUTUBE;
const tb = /t=\d+/g,
    mt = {
        AUTOPLAY: "autoplay",
        LOOP: "loop",
        CONTROLS: "controls",
        AUTOPAUSE: "autopause",
        PLAYLIST: "playlist",
        PLAYSINLINE: "playsinline",
        ALBUM: "h",
        MUTE: {
            [ht.YOUTUBE]: "mute",
            [ht.VIMEO]: "muted"
        },
        TIME: "t",
        START: "start"
    },
    nb = {
        [ht.YOUTUBE]: "https://www.youtube.com/embed/",
        [ht.VIMEO]: "https://player.vimeo.com/video/"
    },
    rb = {
        [ht.YOUTUBE]: /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
        [ht.VIMEO]: /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/
    },
    ob = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
    ab = {
        __name: "GridVideo",
        props: {
            renderIframe: {
                type: Boolean,
                default: !1
            },
            renderPicture: {
                type: Boolean,
                default: !0
            },
            src: {
                type: String,
                required: !0
            },
            provider: {
                type: String,
                default: ht.YOUTUBE
            },
            jpg: {
                type: String,
                default: ""
            },
            webp: {
                type: String,
                default: ""
            }
        },
        setup(e, {
            expose: t
        }) {
            t(), Nt(a => ({
                "60d8e812": r.value
            }));
            const n = M(!1),
                r = c(() => n.value ? "transparent" : "var(--color-dark)"),
                o = {
                    isIframeLoaded: n,
                    backgroundColor: r,
                    get PROVIDERS() {
                        return ht
                    },
                    computed: c,
                    ref: M
                };
            return Object.defineProperty(o, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), o
        }
    },
    ib = {
        class: "video"
    },
    sb = ["src"],
    lb = ["srcset"],
    ub = ["src"];

function cb(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", ib, [n.renderIframe ? (u(), p("iframe", {
        key: 0,
        src: n.src,
        class: "video__frame",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "",
        width: "100%",
        height: "100%",
        onLoad: t[0] || (t[0] = s => r.isIframeLoaded = !0)
    }, null, 40, sb)) : n.renderPicture && (n.jpg || n.webp) ? (u(), p(se, {
        key: 1
    }, [b("picture", null, [b("source", {
        type: "image/webp",
        srcset: n.webp
    }, null, 8, lb), ee(b("img", {
        referrerpolicy: "origin",
        class: "video__placeholder",
        height: "100%",
        width: "100%",
        src: n.jpg
    }, null, 8, ub), [
        [i, "builder-gridelement-gridvideo"]
    ])]), b("button", {
        type: "button",
        class: F(`video__play video__play--${n.provider}`)
    }, null, 2)], 64)) : _("", !0)])
}
const db = J(ab, [
        ["render", cb],
        ["__scopeId", "data-v-ad3c9850"]
    ]),
    fb = async e => {
        const r = (await (await fetch(`${ob}/${e}`)).json()).thumbnail_url.replace("_295x166", "_720");
        return {
            jpg: r.replace(".webp", ".jpg"),
            webp: r.replace(".jpg", ".webp")
        }
    },
    mb = async (e, t) => {
        switch (e) {
            case ht.YOUTUBE:
                return {
                    jpg: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`,
                    webp: `https://i.ytimg.com/vi_webp/${t}/hqdefault.webp`
                };
            case ht.VIMEO:
                return fb(t);
            default:
                return {
                    jpg: null,
                    webp: null
                }
        }
    },
    pb = (e, t, n, r) => {
        const o = t === ht.VIMEO ? e.split("/")[1] : null,
            a = t === ht.VIMEO ? e.split("/")[0] : e,
            i = r.match(tb),
            s = t === ht.YOUTUBE && i ? {
                [mt.START]: i[0].slice(2) ? ? 0
            } : {},
            l = mt.MUTE[t],
            d = new URLSearchParams({
                [mt.ALBUM]: o,
                [mt.PLAYLIST]: a,
                [mt.AUTOPLAY]: n ? .[mt.AUTOPLAY] ? ? Kv,
                [mt.CONTROLS]: n ? .[mt.CONTROLS] ? ? Xv,
                [mt.LOOP]: n ? .[mt.LOOP] ? ? Qv,
                [mt.AUTOPAUSE]: Jv,
                [mt.PLAYSINLINE]: eb,
                [l]: Zv,
                ...s
            }).toString();
        return `${nb[t]}${a}?${d}`
    },
    hb = async (e, t) => {
        const n = Object.entries(rb).find(([, y]) => e ? .match(y)),
            r = n && n.length === 2;
        if (!r) return {
            url: e,
            isUrlValid: !1
        };
        const [o, a] = n, i = e.match(a), s = [i[1], i[2]].join(""), {
            jpg: l,
            webp: d
        } = await mb(o, s);
        return {
            src: pb(s, o, t, e),
            isUrlValid: r,
            jpg: l,
            webp: d,
            provider: o,
            id: s
        }
    },
    gb = e => {
        const t = xt({
                src: null,
                provider: null,
                width: null,
                height: null,
                webp: null,
                jpg: null
            }),
            n = xt({
                src: c(() => t.src ? ? e.data.settings.src),
                provider: c(() => t.provider ? ? e.data.settings.provider),
                width: c(() => t.width ? ? e.data.settings.width),
                height: c(() => t.height ? ? e.data.settings.height),
                webp: c(() => t.webp ? ? e.data.settings.webp),
                jpg: c(() => t.jpg ? ? e.data.settings.jpg)
            });
        return Ns(() => {
            (e.data.settings.src !== n.src || !e.data.settings.jpg) && hb(e.data.settings.src).then(r => {
                Object.entries(r).forEach(([o, a]) => {
                    t[o] = a
                })
            })
        }), {
            composedProps: n
        }
    },
    yb = Z({
        name: "GridVideoProviderUser",
        components: {
            GridVideo: db
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const {
                composedProps: t
            } = gb(e), n = M(null), r = c(() => e.data.settings.src ? .includes(`${[mt.AUTOPLAY]}=${vo}`) ? ? !1), o = c(() => {
                const l = mt.MUTE[t.provider];
                return r.value ? t.src.replace(`${[l]}=${mr}`, `${[l]}=${vo}`) : t.src
            }), a = M(!1), i = M(!1), s = () => {
                const l = new IntersectionObserver(([{
                    isIntersecting: d
                }]) => {
                    d && (r.value ? a.value = !0 : i.value = !0, l.disconnect())
                }, {
                    threshold: 0
                });
                l.observe(n.value.$el), a.value = !0
            };
            return Ce(() => {
                s()
            }), {
                videoRef: n,
                composedProps: t,
                composedSrc: o,
                renderIframe: a,
                renderPicture: i
            }
        }
    });

function vb(e, t, n, r, o, a) {
    const i = oe("GridVideo");
    return u(), N(i, Ae({
        ref: "videoRef"
    }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: t[0] || (t[0] = s => e.renderIframe = !0)
    }), null, 16, ["src", "render-iframe", "render-picture"])
}
const bb = J(yb, [
        ["render", vb]
    ]),
    _b = Z({
        name: "GridShape",
        props: {
            svg: {
                type: String,
                required: !0
            }
        }
    }),
    wb = ["innerHTML"];

function kb(e, t, n, r, o, a) {
    return u(), p("div", {
        class: "grid-shape",
        innerHTML: e.svg
    }, null, 8, wb)
}
const Sb = J(_b, [
        ["render", kb]
    ]),
    Pb = Z({
        name: "GridShapeProviderUser",
        components: {
            GridShape: Sb
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        computed: {
            cssVars() {
                const e = this.data.mobile.height * 100 / Gt,
                    t = this.data.desktop.height * 100 / Wt;
                return {
                    "--shape-height": `${this.data.desktop.height}px`,
                    "--m-shape-height": `${e}vw`,
                    "--t-shape-height": `${this.data.mobile.height}px`,
                    "--small-desktop-shape-height": `${t}vw`,
                    "--shape-color": `${this.data.color}`
                }
            }
        }
    });

function Tb(e, t, n, r, o, a) {
    const i = oe("GridShape");
    return u(), N(i, {
        svg: e.data.svg,
        style: Oe(e.cssVars)
    }, null, 8, ["svg", "style"])
}
const Cb = J(Pb, [
        ["render", Tb]
    ]),
    Ob = Z({
        props: {
            alt: {
                type: String,
                default: null
            },
            src: {
                type: String,
                required: !0
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            objectFit: {
                type: String,
                default: "cover"
            },
            width: {
                type: Number,
                default: null
            },
            height: {
                type: Number,
                default: null
            },
            enableSrcset: {
                type: Boolean,
                default: !1
            },
            imageOrigin: {
                type: String,
                default: "other"
            },
            isLossless: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                imageUrl: this.src,
                srcset: null,
                isLoaded: !1
            }
        },
        computed: {
            sizes() {
                return this.enableSrcset ? Ys(this.width, null) : null
            }
        },
        watch: {
            objectFit(e, t) {
                e !== t && t === "cover" && this.imageUrl.includes("fit=crop") && (this.imageUrl = this.getImageUrl(), this.srcset = this.getSrcSet())
            }
        },
        created() {
            this.imageUrl = this.getImageUrl(), this.srcset = this.getSrcSet()
        },
        methods: {
            getImageUrl() {
                return Qe(this.imageOrigin, this.src, this.siteId, {
                    width: this.width,
                    height: this.height,
                    shouldContain: this.objectFit === "contain",
                    isLossless: this.isLossless
                })
            },
            getSrcSet() {
                return this.enableSrcset ? $n(this.imageOrigin, this.src, this.siteId, {
                    width: this.width,
                    height: this.height,
                    shouldContain: this.objectFit === "contain",
                    isLossless: this.isLossless
                }) : null
            }
        }
    }),
    Ib = ["loading", "src", "alt", "srcset", "sizes"];

function $b(e, t, n, r, o, a) {
    return u(), N(gt, {
        name: "fade",
        mode: "out-in"
    }, {
        default: le(() => [b("img", Ae(e.$attrs, {
            loading: e.isEager ? "eager" : "lazy",
            src: e.imageUrl,
            alt: e.alt,
            srcset: e.srcset,
            sizes: e.sizes,
            class: ["ecommerce-product-image", {
                "ecommerce-product-image--loading": !e.isLoaded
            }],
            onLoad: t[0] || (t[0] = i => e.isLoaded = !0),
            onError: t[1] || (t[1] = i => e.isLoaded = !0)
        }), null, 16, Ib)]),
        _: 1
    })
}
const pa = J(Ob, [
    ["render", $b]
]);

function Eb(e) {
    return Id() ? ($d(e), !0) : !1
}

function of (e) {
    return typeof e == "function" ? e() : D(e)
}
const nl = typeof window < "u",
    af = () => {},
    Db = Lb();

function Lb() {
    var e;
    return nl && ((e = window ? .navigator) == null ? void 0 : e.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
}

function Kn(e) {
    var t;
    const n = of (e);
    return (t = n ? .$el) != null ? t : n
}
const sf = nl ? window : void 0,
    Mb = nl ? window.document : void 0;

function Cr(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = sf) : [t, n, r, o] = e, !t) return af;
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
    const a = [],
        i = () => {
            a.forEach(y => y()), a.length = 0
        },
        s = (y, m, f, h) => (y.addEventListener(m, f, h), () => y.removeEventListener(m, f, h)),
        l = Re(() => [Kn(t), of (o)], ([y, m]) => {
            i(), y && a.push(...n.flatMap(f => r.map(h => s(y, f, h, m))))
        }, {
            immediate: !0,
            flush: "post"
        }),
        d = () => {
            l(), i()
        };
    return Eb(d), d
}
let Iu = !1;

function ha(e, t, n = {}) {
    const {
        window: r = sf,
        ignore: o = [],
        capture: a = !0,
        detectIframe: i = !1
    } = n;
    if (!r) return;
    Db && !Iu && (Iu = !0, Array.from(r.document.body.children).forEach(f => f.addEventListener("click", af)));
    let s = !0;
    const l = f => o.some(h => {
            if (typeof h == "string") return Array.from(r.document.querySelectorAll(h)).some(v => v === f.target || f.composedPath().includes(v)); {
                const v = Kn(h);
                return v && (f.target === v || f.composedPath().includes(v))
            }
        }),
        y = [Cr(r, "click", f => {
            const h = Kn(e);
            if (!(!h || h === f.target || f.composedPath().includes(h))) {
                if (f.detail === 0 && (s = !l(f)), !s) {
                    s = !0;
                    return
                }
                t(f)
            }
        }, {
            passive: !0,
            capture: a
        }), Cr(r, "pointerdown", f => {
            const h = Kn(e);
            h && (s = !f.composedPath().includes(h) && !l(f))
        }, {
            passive: !0
        }), i && Cr(r, "blur", f => {
            setTimeout(() => {
                var h;
                const v = Kn(e);
                ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !v ? .contains(r.document.activeElement) && t(f)
            }, 0)
        })].filter(Boolean);
    return () => y.forEach(f => f())
}

function Bb({
    document: e = Mb
} = {}) {
    if (!e) return M("visible");
    const t = M(e.visibilityState);
    return Cr(e, "visibilitychange", () => {
        t.value = e.visibilityState
    }), t
}
const $u = 45,
    Ab = Z({
        __name: "SiteElementSearchBar",
        props: {
            placeholderText: {},
            noResultsText: {},
            fillColor: {},
            fillColorHover: {},
            textAndIconColor: {},
            textAndIconColorHover: {},
            resultItemHoverColor: {},
            fontFamily: {},
            borderColor: {},
            borderColorHover: {},
            borderRadius: {},
            translations: {},
            siteId: {},
            searchTerm: {
                default: ""
            },
            results: {
                default: null
            },
            isLoading: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:search-term", "is-dropdown-open"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            t();
            const r = e;
            Nt(C => ({
                "5e05a788": C.fontFamily,
                "49002b55": C.textAndIconColor,
                "4c997ae7": C.textAndIconColorHover,
                "16bcf240": m.value,
                "64b1da42": C.borderColor,
                "7d58f3ea": C.fillColor,
                "5731181a": C.borderColorHover,
                "4a3f3c1e": C.fillColorHover,
                cf021da8: C.resultItemHoverColor,
                "086085af": o
            }));
            const o = `${$u}px`,
                a = M(null),
                i = M(!1),
                s = M([]),
                l = M(-1),
                d = c(() => r.isLoading),
                y = c(() => r.results),
                m = c(() => `${r.borderRadius}px`),
                f = () => {
                    r.results && l.value < r.results.length - 1 && (l.value += 1)
                },
                h = () => {
                    l.value > 0 && (l.value -= 1)
                },
                v = () => {
                    const C = s.value[l.value];
                    if (!C) return;
                    const L = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                    });
                    C.dispatchEvent(L)
                },
                k = () => {
                    i.value = !1, n("update:search-term", ""), l.value = -1
                };
            Re([y, d], () => {
                i.value = !!y.value || d.value, n("is-dropdown-open", i.value)
            }), Ce(() => {
                ha(a, () => {
                    k()
                })
            });
            const w = {
                IMAGE_DIMENSIONS_PX: $u,
                IMAGE_DIMENSIONS_PX_STRING: o,
                emit: n,
                props: r,
                searchBarRef: a,
                isSearchResultDropdownVisible: i,
                itemLinksRefs: s,
                highlightedItemIndex: l,
                isLoading: d,
                results: y,
                borderRadiusInPx: m,
                highlightNextItem: f,
                highlightPreviousItem: h,
                redirectToHighlightedItem: v,
                dropdownCloseHandler: k,
                ZyroLoader: zs,
                ProductImage: pa
            };
            return Object.defineProperty(w, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), w
        }
    }),
    Rb = {
        ref: "searchBarRef",
        class: "site-element-search-bar",
        "aria-owns": "search-results",
        tabindex: "0",
        "aria-haspopup": "listbox"
    },
    Nb = {
        class: "site-element-search-bar__input-wrapper"
    },
    Hb = ["placeholder", "value", "onKeydown"],
    Ub = {
        key: 0,
        id: "search-results",
        role: "listbox",
        class: "site-element-search-bar__dropdown"
    },
    Vb = {
        key: 1,
        class: "site-element-search-bar__dropdown-no-results"
    },
    qb = ["area-selected"],
    jb = ["href", "onMouseover", "onFocus", "onKeydown"],
    xb = {
        class: "search-result-item__content"
    },
    Wb = {
        class: "search-result-item__title"
    },
    Gb = {
        class: "search-result-item__price"
    },
    Yb = {
        key: 0
    },
    Fb = {
        key: 0,
        class: "search-result-item__sale-price"
    },
    zb = {
        key: 1
    };

function Kb(e, t, n, r, o, a) {
    return u(), p("div", Rb, [b("div", Nb, [b("input", {
        class: "site-element-search-bar__input",
        placeholder: r.props.placeholderText,
        value: r.props.searchTerm,
        onInput: t[0] || (t[0] = i => r.emit("update:search-term", i.target.value)),
        onKeydown: [Se(Me(r.highlightNextItem, ["prevent"]), ["down"]), Se(Me(r.highlightPreviousItem, ["prevent"]), ["up"]), Se(r.redirectToHighlightedItem, ["enter"])]
    }, null, 40, Hb), r.isSearchResultDropdownVisible ? (u(), p("div", {
        key: 0,
        class: "site-element-search-bar__dropdown-close",
        onClick: r.dropdownCloseHandler
    })) : _("", !0)]), r.isSearchResultDropdownVisible ? (u(), p("ul", Ub, [r.props.isLoading ? (u(), N(r.ZyroLoader, {
        key: 0,
        size: "30px",
        color: r.props.textAndIconColorHover,
        class: "site-element-search-bar__loader"
    }, null, 8, ["color"])) : !r.props.results || r.props.results.length === 0 ? (u(), p("p", Vb, x(n.noResultsText), 1)) : (u(!0), p(se, {
        key: 2
    }, pe(r.props.results, (i, s) => (u(), p("li", {
        key: i.id,
        role: "option",
        "area-selected": s === r.highlightedItemIndex
    }, [b("a", {
        ref_for: !0,
        ref: "itemLinksRefs",
        href: i.href,
        class: F(["search-result-item", {
            "search-result-item--highlighted": s === r.highlightedItemIndex
        }]),
        onMouseover: l => r.highlightedItemIndex = s,
        onFocus: l => r.highlightedItemIndex = s,
        onKeydown: Se(Me(r.redirectToHighlightedItem, ["prevent"]), ["enter"])
    }, [i.thumbnail ? (u(), N(r.ProductImage, {
        key: 0,
        src: i.thumbnail,
        alt: i.title,
        class: "search-result-item__image",
        width: r.IMAGE_DIMENSIONS_PX,
        height: r.IMAGE_DIMENSIONS_PX,
        "site-id": r.props.siteId,
        "enable-srcset": ""
    }, null, 8, ["src", "alt", "site-id"])) : _("", !0), b("div", xb, [b("h3", Wb, x(i.title), 1), b("p", Gb, [i.isInStock ? (u(), p("span", Yb, [i.oldPrice ? (u(), p("span", Fb, x(i.oldPrice), 1)) : _("", !0), Pe(" " + x(i.price), 1)])) : (u(), p("span", zb, x(n.translations.soldOut), 1))])])], 42, jb)], 8, qb))), 128))])) : _("", !0)], 512)
}
const Qb = J(Ab, [
        ["render", Kb]
    ]),
    lf = (e, t) => {
        let n;
        return function() {
            const o = () => Reflect.apply(e, this, arguments);
            clearTimeout(n), n = setTimeout(o, t)
        }
    },
    Xb = 6,
    Jb = 5,
    Zb = 4,
    e_ = 3,
    uf = 2,
    t_ = {
        [Xb]: 18,
        [Jb]: 15,
        [Zb]: 12,
        [e_]: 9,
        [uf]: 6
    },
    n_ = e => e ? .variants[0].booking_event ? .length_unit === li;

function _i(e) {
    return e ? .variants[0].booking_event ? .length || null
}
const bo = (e, t) => {
        const n = r => Math.round(r * 100) / 100;
        return n_(e) ? `${n(_i(e)/1e3/60/60)} ${t.hourShort}` : `${n(_i(e)/1e3/60)} ${t.minuteShort}`
    },
    Xn = e => e[ui] !== ho ? !1 : !e.variants.every((t, n, r) => {
        const o = r[0] ? .prices ? .[0] ? ? r[0],
            a = t ? .prices ? .[0] ? ? t,
            i = o.sale_amount ? ? o.amount,
            s = a.sale_amount ? ? a.amount;
        return i === s
    }),
    In = ({
        variantsQuantity: e,
        variantId: t
    }) => e.find(n => n.id === t) ? .inventory_quantity || 0,
    cf = ({
        product: e,
        variantsQuantity: t
    }) => e.variants.reduce((n, r) => n + In({
        variantsQuantity: t,
        variantId: r.id
    }), 0),
    r_ = ({
        product: e,
        variantsQuantity: t
    }) => e.variants[0].manage_inventory ? cf({
        product: e,
        variantsQuantity: t
    }) > 0 : !0,
    o_ = ({
        variants: e
    }) => e.reduce((t, n) => (t.sale_amount || t.amount) <= (n.sale_amount || n.amount) ? t : n);

function lr(e, t) {
    if (!t) return "€0.00";
    const n = Number(e) || 0,
        r = Number(n / 10 ** t.decimal_digits);
    return t.template.replace("$1", r.toFixed(t.decimal_digits))
}
const a_ = "https://backend.zyro.com/public",
    i_ = async ({
        query: e,
        indices: t,
        pageSize: n = 5,
        storeId: r
    }) => {
        if (!e) return [];
        const o = await fetch(`${a_}/search`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: e,
                    indices: t,
                    storeId: r,
                    pageSize: n
                })
            }),
            {
                results: a
            } = await o.json();
        return a.products.hits
    },
    Eu = 400,
    s_ = Z({
        __name: "SiteElementSearchBarProviderSiteEngine",
        props: {
            data: {
                type: Object,
                required: !0
            },
            blockId: {
                type: String,
                required: !0
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                {
                    getters: r
                } = Xe(),
                {
                    toggleSearchDropdown: o
                } = gi({
                    blockId: n.blockId
                }),
                a = M(""),
                i = M(!1),
                s = M(null),
                l = c(() => r.meta.ecommerceStoreId),
                d = c(() => r.siteId),
                y = c(() => r.ecommerceShoppingCart ? .translations ? ? {}),
                m = c(() => s.value ? s.value.map(k => {
                    const w = k.site_product_selection === ho ? o_({
                            variants: k.variants
                        }) : k.variants[0],
                        {
                            amount: C,
                            sale_amount: L,
                            currency_decimal_digits: I,
                            currency_template: R
                        } = w,
                        W = {
                            decimal_digits: I,
                            template: R
                        },
                        $ = `/product-redirect/${k.id}`,
                        E = `${Xn(k)?`${y.value.from} `:""}${lr(L||C,W)}`,
                        H = L ? lr(C, W) : null,
                        X = r_({
                            product: k,
                            variantsQuantity: k.variants
                        });
                    return {
                        id: k.id,
                        thumbnail: k.thumbnail,
                        title: k.title,
                        href: $,
                        price: E,
                        oldPrice: H,
                        isInStock: X
                    }
                }) : null),
                f = lf(async () => {
                    i.value = !0, a.value && l.value ? s.value = await i_({
                        query: a.value,
                        indices: [ym],
                        storeId: l.value
                    }) : s.value = null, i.value = !1
                }, Eu),
                v = {
                    TIMEOUT_MS_SEARCH_DEBOUNCE: Eu,
                    props: n,
                    getters: r,
                    toggleSearchDropdown: o,
                    searchTerm: a,
                    isLoading: i,
                    results: s,
                    storeId: l,
                    siteId: d,
                    ecommerceTranslations: y,
                    computedResults: m,
                    searchHandler: f,
                    updateSearchTerm: ({
                        newValue: k
                    }) => {
                        a.value = k, f()
                    },
                    SiteElementSearchBar: Qb
                };
            return Object.defineProperty(v, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), v
        }
    });

function l_(e, t, n, r, o, a) {
    return u(), N(r.SiteElementSearchBar, {
        "placeholder-text": r.props.data.placeholderText,
        "no-results-text": r.props.data.noResultsText,
        "fill-color": r.props.data.fillColor,
        "fill-color-hover": r.props.data.fillColorHover,
        "text-and-icon-color": r.props.data.textAndIconColor,
        "text-and-icon-color-hover": r.props.data.textAndIconColorHover,
        "font-family": r.props.data.fontFamily,
        "border-color": r.props.data.borderColor,
        "border-color-hover": r.props.data.borderColorHover,
        "border-radius": r.props.data.borderRadius,
        "is-loading": r.isLoading,
        "result-item-hover-color": r.props.data.resultItemHoverColor,
        results: r.computedResults,
        "search-term": r.searchTerm,
        "site-id": r.siteId,
        translations: r.ecommerceTranslations,
        "onUpdate:searchTerm": t[0] || (t[0] = i => r.updateSearchTerm({
            newValue: i
        })),
        onIsDropdownOpen: r.toggleSearchDropdown
    }, null, 8, ["placeholder-text", "no-results-text", "fill-color", "fill-color-hover", "text-and-icon-color", "text-and-icon-color-hover", "font-family", "border-color", "border-color-hover", "border-radius", "is-loading", "result-item-hover-color", "results", "search-term", "site-id", "translations", "onIsDropdownOpen"])
}
const u_ = J(s_, [
        ["render", l_]
    ]),
    qn = M(!1),
    jn = M(!1),
    xa = M(!1),
    Wa = M(""),
    Sn = M(null),
    Ga = M(!1),
    ur = ({
        elementData: e,
        data: t,
        elementId: n,
        isParentBlockFooter: r
    } = {}) => {
        const o = M(null),
            a = M(null),
            i = M(null),
            s = e || t || {},
            l = C => `transition transition--${C}`,
            d = c(() => {
                const C = n && vm.includes(s.type),
                    L = !n && !bm.includes(s.type);
                if (C || L) return "";
                const I = l(s.animation ? .name);
                return Cl.includes(s.type) ? `${I} transition--root-hidden` : I
            }),
            y = c(() => {
                const C = Sn.value && n === Sn.value;
                return !qn.value || Sn.value && !C ? "" : xa.value
            }),
            m = c(() => jn.value ? or : null),
            f = async C => {
                C.forEach(({
                    target: L,
                    isIntersecting: I
                }) => {
                    if (!I) {
                        L.removeAttribute(ar);
                        return
                    }
                    r || i.value ? .unobserve(L), L.setAttribute(ar, or)
                })
            },
            h = ({
                root: C = null
            } = {}) => {
                s.animation ? .name && (i.value = new IntersectionObserver(f, {
                    threshold: 0,
                    root: C
                }))
            },
            v = async C => {
                if (s.animation ? .name)
                    if (await jt(), Cl.includes(s.type)) {
                        const L = C ? .querySelectorAll(`[${Kt}="${Us}"]`),
                            I = C ? .querySelectorAll(`[${Kt}="${cr}"]`);
                        [...L, ...I].forEach(W => i.value ? .observe(W))
                    } else i.value ? .observe(C)
            },
            k = () => {
                window.clearTimeout(o.value), window.clearTimeout(a.value), qn.value = !1, jn.value = !1
            },
            w = ({
                animation: C,
                id: L
            }) => {
                k(), !C !== "none" && (Sn.value = L, Wa.value = C, qn.value = !0, xa.value = l(Wa.value), o.value = setTimeout(() => {
                    jn.value = !0
                }, 500), a.value = setTimeout(() => {
                    qn.value = !1, jn.value = !1, Sn.value = null
                }, 2e3))
            };
        return Re(Ga, async C => {
            C && (await jt(), Ga.value = !1)
        }), {
            intersectionObserver: i,
            animationClass: d,
            animationInEditorClass: xa,
            animationInEditorComponentId: Sn,
            isAnimationDisplayedInEditor: qn,
            isAnimationDisplayedInEditorActive: jn,
            animationInEditorName: Wa,
            addIntersectionObserver: h,
            observe: v,
            displayAnimationInEditor: w,
            shouldMountAnimationsInPreview: Ga,
            customAnimationClass: y,
            animationAttributeStateValue: m
        }
    },
    c_ = {
        __name: "LayoutElementProviderUser",
        props: {
            elementId: {
                type: String,
                required: !0
            },
            blockId: {
                type: String,
                required: !0
            },
            elementData: {
                type: Object,
                required: !0
            },
            overrideWidth: {
                type: Number,
                default: null
            },
            overrideHeight: {
                type: Number,
                default: null
            },
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            siteLanguagePages: {
                type: Object,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isParentBlockFooter: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                r = M(null),
                {
                    intersectionObserver: o,
                    animationClass: a,
                    addIntersectionObserver: i,
                    observe: s,
                    shouldMountAnimationsInPreview: l
                } = ur({
                    elementData: n.elementData,
                    isParentBlockFooter: n.isParentBlockFooter,
                    elementId: n.elementId
                }),
                d = c(() => Object.values(n.siteLanguagePages)[0]),
                y = c(() => n.elementData.mobile ? .isHidden || !1),
                m = c(() => n.elementData.desktop ? .isHidden || !1),
                f = c(() => n.elementData.type !== _a ? "" : (n.siteLanguagePages[n.elementData.settings ? .successPageId] || d.value).slug),
                h = c(() => n.elementData.type !== _a ? "" : (n.siteLanguagePages[n.elementData.settings ? .cancellationPageId] || d.value).slug),
                v = async () => {
                    await s(r.value ? .$el)
                },
                k = async () => {
                    const L = [Ol, Il].includes(n.elementData.type),
                        R = r.value ? .$el.getBoundingClientRect().height > window.innerHeight,
                        W = !L && R && r.value ? r.value.$el.parentElement : null;
                    i({
                        root: W
                    }), L || await v()
                };
            Ce(async () => {
                await k()
            }), yt(() => o.value ? .disconnect()), Re(l, async C => {
                C && await k()
            });
            const w = {
                props: n,
                elementRef: r,
                intersectionObserver: o,
                animationClass: a,
                addIntersectionObserver: i,
                observe: s,
                shouldMountAnimationsInPreview: l,
                firstLanguagePage: d,
                isMobileElementHidden: y,
                isDesktopElementHidden: m,
                stripeSuccessPageSlug: f,
                stripeCancellationPageSlug: h,
                observeElement: v,
                initiateAnimations: k,
                get ELEMENT_TYPE_BUTTON() {
                    return _m
                },
                get ELEMENT_TYPE_STRIPE_BUTTON() {
                    return _a
                },
                get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
                    return wm
                },
                get ELEMENT_TYPE_MAP() {
                    return Pd
                },
                get ELEMENT_TYPE_VIDEO() {
                    return Td
                },
                get ELEMENT_TYPE_IMAGE() {
                    return km
                },
                get ELEMENT_TYPE_TEXT_BOX() {
                    return Sm
                },
                get ELEMENT_TYPE_FORM() {
                    return Pm
                },
                get ELEMENT_TYPE_INSTAGRAM_FEED() {
                    return Ol
                },
                get ELEMENT_TYPE_SOCIAL_ICONS() {
                    return Tm
                },
                get ELEMENT_TYPE_GALLERY() {
                    return Il
                },
                get ELEMENT_TYPE_EMBED() {
                    return Cm
                },
                get ELEMENT_TYPE_SHAPE() {
                    return Om
                },
                get ELEMENT_TYPE_SEARCH_BAR() {
                    return Im
                },
                LayoutElementWrapper: lh,
                GridButtonProviderUser: mh,
                GridEcommerceButtonProviderUser: yh,
                GridEmbedProviderUser: Ih,
                GridFormProviderUser: pg,
                GridGalleryProviderUser: Ig,
                GridImageProviderUser: Ag,
                GridInstagramFeedProviderUser: vv,
                GridMapProviderUser: Ov,
                GridSocialIconsProviderUser: Bv,
                GridStripeButtonProviderUser: Vv,
                GridTextBoxProviderUser: zv,
                GridVideoProviderUser: bb,
                GridShapeProviderUser: Cb,
                SiteElementSearchBarProviderSiteEngine: u_,
                get useSiteEngineAnimations() {
                    return ur
                },
                computed: c,
                onMounted: Ce,
                onBeforeUnmount: yt,
                ref: M,
                watch: Re,
                get isSearchDropdownOpen() {
                    return hi
                }
            };
            return Object.defineProperty(w, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), w
        }
    };

function d_(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), N(r.LayoutElementWrapper, {
        ref: "elementRef",
        class: F(["layout-element", [{
            "layout-element--desktop-element-hidden": r.isDesktopElementHidden,
            "layout-element--mobile-element-hidden": r.isMobileElementHidden
        }, r.animationClass]]),
        "element-data": n.elementData,
        "is-forced-on-top": r.isSearchDropdownOpen && n.elementData.type === r.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": n.isMobileLegacy
    }, {
        default: le(() => [n.elementData.type === r.ELEMENT_TYPE_BUTTON ? ee((u(), N(r.GridButtonProviderUser, {
            key: 0,
            id: n.elementId,
            data: n.elementData,
            "current-locale": n.currentLocale,
            "mobile-element-width": n.elementData.mobile.width,
            "mobile-element-height": n.elementData.mobile.height,
            class: "layout-element__component layout-element__component--GridButton"
        }, null, 8, ["id", "data", "current-locale", "mobile-element-width", "mobile-element-height"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_STRIPE_BUTTON ? ee((u(), N(r.GridStripeButtonProviderUser, {
            key: 1,
            id: n.elementId,
            data: n.elementData,
            "success-page-slug": r.stripeSuccessPageSlug,
            "cancellation-page-slug": r.stripeCancellationPageSlug,
            "stripe-public-api-key": n.stripePublicApiKey,
            class: "layout-element__component layout-element__component--GridStripeButton"
        }, null, 8, ["id", "data", "success-page-slug", "cancellation-page-slug", "stripe-public-api-key"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_ECOMMERCE_BUTTON ? ee((u(), N(r.GridEcommerceButtonProviderUser, {
            key: 2,
            id: n.elementId,
            data: n.elementData,
            "is-cart-visible": n.isCartVisible,
            "mobile-element-width": n.elementData.mobile.width,
            "mobile-element-height": n.elementData.mobile.height,
            class: "layout-element__component layout-element__component--GridEcommerceButton"
        }, null, 8, ["id", "data", "is-cart-visible", "mobile-element-width", "mobile-element-height"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_FORM ? ee((u(), N(r.GridFormProviderUser, {
            key: 3,
            id: n.elementId,
            data: n.elementData,
            "current-locale": n.currentLocale,
            class: "layout-element__component layout-element__component--GridForm"
        }, null, 8, ["id", "data", "current-locale"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_VIDEO ? ee((u(), N(r.GridVideoProviderUser, {
            key: 4,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridVideo"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_TEXT_BOX ? ee((u(), N(r.GridTextBoxProviderUser, {
            key: 5,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridTextBox"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_MAP ? ee((u(), N(r.GridMapProviderUser, {
            key: 6,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridMap"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_SOCIAL_ICONS ? ee((u(), N(r.GridSocialIconsProviderUser, {
            key: 7,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridSocialIcons"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_GALLERY ? ee((u(), N(r.GridGalleryProviderUser, {
            key: 8,
            id: n.elementId,
            data: n.elementData,
            "element-width": n.elementData.desktop.width,
            "element-height": n.elementData.desktop.height,
            class: "layout-element__component layout-element__component--GridGallery",
            onImageLoad: r.observeElement
        }, null, 8, ["id", "data", "element-width", "element-height"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_IMAGE ? ee((u(), N(r.GridImageProviderUser, {
            key: 9,
            id: n.elementId,
            lcp: n.lcp,
            data: n.elementData,
            "mobile-element-width": n.elementData.mobile.width,
            "mobile-element-height": n.elementData.mobile.height,
            "element-width": n.elementData.desktop.width,
            "element-height": n.elementData.desktop.height,
            "reset-mobile-position": n.isMobileLegacy,
            "current-locale": n.currentLocale,
            "mobile-border-radius": n.elementData.mobile.borderRadius,
            "desktop-border-radius": n.elementData.desktop.borderRadius,
            "shape-mask-source": n.elementData.shapeMaskSource,
            class: "layout-element__component layout-element__component--GridImage"
        }, null, 8, ["id", "lcp", "data", "mobile-element-width", "mobile-element-height", "element-width", "element-height", "reset-mobile-position", "current-locale", "mobile-border-radius", "desktop-border-radius", "shape-mask-source"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_INSTAGRAM_FEED ? ee((u(), N(r.GridInstagramFeedProviderUser, {
            key: 10,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridInstagramFeed",
            onMediaLoaded: r.observeElement
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_EMBED ? ee((u(), N(r.GridEmbedProviderUser, {
            key: 11,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridEmbed"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_SHAPE ? ee((u(), N(r.GridShapeProviderUser, {
            key: 12,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component layout-element__component--GridShape"
        }, null, 8, ["id", "data"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), n.elementData.type === r.ELEMENT_TYPE_SEARCH_BAR ? ee((u(), N(r.SiteElementSearchBarProviderSiteEngine, {
            key: 13,
            id: n.elementId,
            data: n.elementData,
            class: "layout-element__component",
            "block-id": n.blockId
        }, null, 8, ["id", "data", "block-id"])), [
            [i, `${n.elementData.type}:${n.elementId}`]
        ]) : _("", !0), ae(e.$slots, "default")]),
        _: 3
    }, 8, ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"])
}
const f_ = J(c_, [
        ["render", d_]
    ]),
    m_ = {
        __name: "BlockLayoutProviderUser",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            components: {
                type: Object,
                default: () => ({})
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            siteLanguagePages: {
                type: Object,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                {
                    isSearchOpenedInCurrentBlock: r
                } = gi({
                    blockId: n.blockId
                }),
                {
                    components: o
                } = fi(n),
                a = c(() => n.data),
                {
                    layoutElements: i,
                    layoutCSSVars: s,
                    isMobileLegacy: l
                } = Yl({
                    blockData: a,
                    siteElements: o
                }),
                d = c(() => a.value.slot === "footer"),
                y = {
                    props: n,
                    isSearchOpenedInCurrentBlock: r,
                    siteElements: o,
                    blockData: a,
                    layoutElements: i,
                    layoutCSSVars: s,
                    isMobileLegacy: l,
                    isBlockFooter: d,
                    toRefs: fi,
                    computed: c,
                    get useSearchElementDropdown() {
                        return gi
                    },
                    BlockLayoutWrapper: Jp,
                    get useBlockLayout() {
                        return Yl
                    },
                    LayoutElementProviderUser: f_
                };
            return Object.defineProperty(y, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), y
        }
    };

function p_(e, t, n, r, o, a) {
    return u(), N(r.BlockLayoutWrapper, {
        ref: "blockLayout",
        style: Oe(r.layoutCSSVars),
        "is-mobile-legacy": r.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": r.isSearchOpenedInCurrentBlock
    }, {
        default: le(() => [(u(!0), p(se, null, pe(r.layoutElements, i => (u(), N(r.LayoutElementProviderUser, {
            key: i.elementId,
            "is-mobile-legacy": r.isMobileLegacy,
            "element-id": i.elementId,
            "element-data": i,
            lcp: n.lcp,
            "is-cart-visible": n.isCartVisible,
            "current-locale": n.currentLocale,
            "site-language-pages": n.siteLanguagePages,
            "stripe-public-api-key": n.stripePublicApiKey,
            "is-parent-block-footer": r.isBlockFooter,
            "block-id": n.blockId
        }, null, 8, ["is-mobile-legacy", "element-id", "element-data", "lcp", "is-cart-visible", "current-locale", "site-language-pages", "stripe-public-api-key", "is-parent-block-footer", "block-id"]))), 128))]),
        _: 1
    }, 8, ["style", "is-mobile-legacy", "is-forced-on-top"])
}
const h_ = J(m_, [
        ["render", p_]
    ]),
    g_ = {
        __name: "ZyroPagination",
        props: {
            currentPage: {
                type: Number,
                required: !0
            },
            pageCount: {
                type: Number,
                required: !0
            },
            color: {
                type: String,
                default: null
            }
        },
        emits: ["change-page"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            t();
            const r = e,
                o = c(() => ({
                    "--button-color": r.color
                })),
                a = c(() => {
                    if (5 > r.pageCount) return [...new Array(r.pageCount + 1).keys()].slice(1);
                    const l = (5 - 1) / 2,
                        d = Array.from({
                            length: 5 - 1
                        }).fill(0);
                    if (r.currentPage <= l + 1) {
                        d[0] = 1;
                        const m = d.map((f, h) => d[0] + h);
                        return m.push(r.pageCount), m
                    }
                    if (r.currentPage >= r.pageCount - l + 1) {
                        const m = d.map((f, h) => r.pageCount - h);
                        return m.reverse().unshift(1), m
                    }
                    d[0] = r.currentPage - l + 1;
                    const y = d.map((m, f) => d[0] + f);
                    return y.unshift(1), y[y.length - 1] = r.pageCount, y
                }),
                i = {
                    props: r,
                    emit: n,
                    computedStyle: o,
                    paginationTriggersList: a,
                    computed: c
                };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    },
    df = e => (Pt("data-v-40b07b96"), e = e(), Tt(), e),
    y_ = ["disabled"],
    v_ = df(() => b("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M7 1L1 7L7 13",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    b_ = [v_],
    __ = ["data-testId", "disabled", "onClick"],
    w_ = ["disabled"],
    k_ = df(() => b("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M1 13L7 7L1 1",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    S_ = [k_];

function P_(e, t, n, r, o, a) {
    return n.pageCount > 1 ? (u(), p("div", {
        key: 0,
        class: "pagination",
        style: Oe(r.computedStyle)
    }, [b("button", {
        disabled: n.currentPage === 1,
        class: "pagination__button",
        "data-testId": "button-previous",
        onClick: t[0] || (t[0] = i => r.emit("change-page", Math.max(1, n.currentPage - 1)))
    }, b_, 8, y_), (u(!0), p(se, null, pe(r.paginationTriggersList, i => (u(), p("button", {
        key: `${i}-trigger`,
        class: F(["pagination__button pagination__trigger", {
            "pagination__trigger--current": i === n.currentPage
        }]),
        "data-testId": `button-${i}`,
        disabled: n.currentPage === i,
        onClick: s => r.emit("change-page", i)
    }, x(i), 11, __))), 128)), b("button", {
        disabled: n.currentPage === n.pageCount,
        class: "pagination__button",
        "data-testId": "button-next",
        onClick: t[1] || (t[1] = i => r.emit("change-page", Math.min(n.pageCount, n.currentPage + 1)))
    }, S_, 8, w_)], 4)) : _("", !0)
}
const ff = J(g_, [
        ["render", P_],
        ["__scopeId", "data-v-40b07b96"]
    ]),
    mf = 1800,
    T_ = 1080,
    C_ = Z({
        components: {
            BlockBlogListItemMeta: Rd,
            BlockBlogListItemCategories: Ad
        },
        props: {
            post: {
                type: Object,
                default: () => ({})
            },
            authorName: {
                type: String,
                default: null
            },
            shownItems: {
                type: Object,
                default: () => ({
                    authorFullName: !0,
                    coverImage: !0,
                    title: !0,
                    description: !0,
                    date: !0,
                    categories: !0,
                    avatar: !0,
                    minutesToRead: !0
                })
            },
            coverObjectFit: {
                type: String,
                default: "cover"
            },
            cursor: {
                type: String,
                default: "pointer"
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            isAnimationActive: {
                type: Boolean,
                default: !1
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            }
        },
        setup() {
            const e = M(),
                t = 100,
                n = c(() => {
                    const r = e.value ? .getBoundingClientRect();
                    if (!r || !window || !document) return !0;
                    const {
                        top: o
                    } = r, {
                        innerHeight: a
                    } = window, {
                        clientHeight: i
                    } = document.documentElement;
                    return o <= (a || i) + t
                });
            return {
                coverImageContainerRef: e,
                isElementInViewport: n
            }
        },
        data() {
            return {
                DATA_ATTRIBUTE_ANIMATION_ROLE: Kt,
                DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: cr,
                DATA_ATTRIBUTE_ANIMATION_STATE: ar,
                DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE: or
            }
        },
        computed: {
            coverImageAlt() {
                return this.post ? .coverImageAlt ? ? ""
            },
            sizes() {
                return Ys(mf, null)
            },
            categories() {
                return this.post ? .categories ? ? []
            },
            isCoverImageShown() {
                return !!this.shownItems.coverImage && (this.post ? .coverImageSrc || this.post ? .coverImageSrcset)
            }
        },
        getFormattedNumericDate: Nd
    }),
    O_ = ["href"],
    I_ = {
        class: "block-blog-list-item__cover-image-wrapper"
    },
    $_ = ["alt", "src", "srcset", "sizes", "loading"],
    E_ = ["href"];

function D_(e, t, n, r, o, a) {
    const i = oe("BlockBlogListItemCategories"),
        s = oe("BlockBlogListItemMeta"),
        l = De("qa");
    return u(), p("div", Fe({
        class: "block-blog-list-item",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.isAnimationActive ? e.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE : null
    }), [ae(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0), e.isCoverImageShown ? ee((u(), p("a", {
        key: 0,
        ref: "coverImageContainerRef",
        href: e.post.slug,
        class: "block-blog-list-item__cover-image-container",
        onClick: t[0] || (t[0] = Me(d => e.$emit("post-click"), ["prevent"]))
    }, [b("div", I_, [b("img", {
        class: "block-blog-list-item__cover-image",
        alt: e.coverImageAlt,
        src: e.post.coverImageSrc,
        srcset: e.post.coverImageSrcset,
        sizes: e.sizes,
        loading: e.isElementInViewport ? void 0 : "lazy"
    }, null, 8, $_)])], 8, O_)), [
        [l, "blog-list-item-image"]
    ]) : _("", !0), ee(be(i, {
        class: "font-secondary",
        categories: e.categories,
        "blog-categories": e.blogCategories,
        onFilterCategory: t[1] || (t[1] = d => e.$emit("filter-category", d))
    }, null, 8, ["categories", "blog-categories"]), [
        [Ot, e.shownItems.categories && e.categories.length]
    ]), b("a", {
        class: "block-blog-list-item__content",
        href: e.post.slug,
        onClick: t[2] || (t[2] = Me(d => e.$emit("post-click"), ["prevent"]))
    }, [ee(b("h3", {
        class: "font-primary block-blog-list-item__title"
    }, x(e.post.meta.title), 513), [
        [Ot, e.shownItems.title]
    ]), ee(b("p", {
        class: "block-blog-list-item__description font-secondary"
    }, x(e.post.meta.description), 513), [
        [Ot, e.shownItems.description]
    ]), be(s, Ae({
        authorName: e.authorName,
        minutesAmount: e.post.minutesToRead,
        date: e.$options.getFormattedNumericDate(e.post.date),
        showAvatar: e.shownItems.avatar,
        showName: e.shownItems.authorFullName,
        showDate: e.shownItems.date,
        showMinutes: e.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": e.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])], 8, E_)], 16)
}
const L_ = J(C_, [
        ["render", D_],
        ["__scopeId", "data-v-d841c1c4"]
    ]),
    M_ = "Show all posts",
    Du = 46,
    B_ = {
        __name: "BlockBlogList",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            posts: {
                type: Object,
                default: () => ({})
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            }
        },
        emits: ["post-click"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            t();
            const r = e;
            Nt(w => ({
                "050f3714": l.value,
                "77e09b6e": s.value
            }));
            const o = M(0),
                a = M(null),
                i = M(!1),
                s = c(() => Number.parseInt(r.data.settings.styles["post-column-count"], 10)),
                l = c(() => `${Du}px`),
                d = c(() => {
                    const {
                        categories: w,
                        showAllPosts: C,
                        showWithoutCategories: L
                    } = r.data.settings, I = C ? r.posts : Object.fromEntries(Object.entries(r.posts).filter(([, R]) => {
                        const W = w.some(E => R.categories.includes(E));
                        return L && R.categories.length === 0 || W
                    }));
                    return a.value ? Object.fromEntries(Object.entries(I).filter(([, R]) => R.categories.includes(a.value))) : I
                }),
                y = c(() => Object.values(d.value).sort((w, C) => Date.parse(C.date) - Date.parse(w.date))),
                m = c(() => y.value.slice((o.value > 0 ? o.value - 1 : 0) * r.data.settings.postsPerPage, o.value * r.data.settings.postsPerPage)),
                f = c(() => Math.ceil(Object.keys(d.value).length / r.data.settings.postsPerPage)),
                h = () => {
                    const w = new URLSearchParams(window.location.search),
                        C = Number.parseInt(w.get("page"), 10) || 1;
                    C !== o.value && (o.value = C)
                },
                v = w => {
                    o.value = w, i.value = !0;
                    const C = new URL(window.location);
                    C.searchParams.set("page", o.value), window.history.pushState(null, "", C.toString()), ci(`#${r.blockId}`)
                };
            Re(m, w => {
                w.length === 0 && o.value > 1 && (o.value -= 1)
            }), Ce(() => {
                const w = new URLSearchParams(window.location.search),
                    C = Number.parseInt(w.get("page"), 10) || 1;
                o.value !== C && (o.value = C), window.addEventListener("popstate", () => {
                    h()
                })
            }), yt(() => {
                window.removeEventListener("popstate", h)
            });
            const k = {
                SHOW_ALL_POSTS_LABEL: M_,
                BLOG_LIST_PADDING_X: Du,
                props: r,
                emit: n,
                currentPage: o,
                filteredCategoryId: a,
                isAnimationActive: i,
                postColumnCount: s,
                blogListPaddingXCssVar: l,
                postsToRender: d,
                sortedPosts: y,
                currentPageItems: m,
                pageCount: f,
                handleBrowserNavigationPageChange: h,
                setCurrentPage: v,
                get scrollToSection() {
                    return ci
                },
                ZyroPagination: ff,
                BlockBlogListItem: L_,
                ref: M,
                onMounted: Ce,
                onBeforeUnmount: yt,
                computed: c,
                watch: Re
            };
            return Object.defineProperty(k, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), k
        }
    },
    A_ = ["id"],
    R_ = {
        key: 0,
        class: "block-blog-list__filter"
    },
    N_ = {
        key: 2,
        class: "block-blog-list__empty-block"
    };

function H_(e, t, n, r, o, a) {
    const i = De("qa");
    return ee((u(), p("div", {
        id: n.blockId,
        ref: "blogList",
        class: "block-blog-list"
    }, [r.filteredCategoryId ? (u(), p("div", R_, [Pe(x(n.blogCategories[r.filteredCategoryId].name) + " ", 1), b("button", {
        class: "block-blog-list__filter-button",
        onClick: t[0] || (t[0] = s => r.filteredCategoryId = null)
    }, x(r.SHOW_ALL_POSTS_LABEL))])) : _("", !0), r.currentPageItems.length ? (u(), p("div", {
        key: 1,
        class: F(["block-blog-list__list", {
            "block-blog-list__list--one-col": r.postColumnCount === 1
        }])
    }, [(u(!0), p(se, null, pe(r.currentPageItems, (s, l) => ee((u(), N(r.BlockBlogListItem, {
        key: `post-${l}`,
        post: s,
        "author-name": s.meta.authorName,
        "cover-object-fit": n.data.settings.styles["cover-object-fit"],
        "shown-items": n.data.settings.shownItems,
        "blog-categories": n.blogCategories,
        "is-animation-active": r.isAnimationActive,
        "blog-reading-time-text": n.blogReadingTimeText,
        onFilterCategory: t[1] || (t[1] = d => r.filteredCategoryId = d),
        onPostClick: d => r.emit("post-click", s)
    }, {
        "block-blog-list-item-overlay": le(() => [ae(e.$slots, "block-blog-list-overlay", {
            post: s
        }, void 0, !0)]),
        _: 2
    }, 1032, ["post", "author-name", "cover-object-fit", "shown-items", "blog-categories", "is-animation-active", "blog-reading-time-text", "onPostClick"])), [
        [i, "blog-list-item"]
    ])), 128))], 2)) : (u(), p("div", N_, [ae(e.$slots, "block-blog-list-empty-block", {}, void 0, !0)])), be(r.ZyroPagination, {
        class: "block-blog-list__pagination",
        "current-page": r.currentPage,
        "page-count": r.pageCount,
        onChangePage: r.setCurrentPage
    }, null, 8, ["current-page", "page-count"])], 8, A_)), [
        [i, "builder-section-blog"]
    ])
}
const U_ = J(B_, [
        ["render", H_],
        ["__scopeId", "data-v-76da09e5"]
    ]),
    V_ = Z({
        name: "BlockBlogListProviderUser",
        components: {
            BlockBlogList: U_
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                default: It
            }
        },
        setup() {
            const {
                getters: e
            } = Xe();
            return {
                blogReadingTimeText: c(() => e.blogReadingTimeText)
            }
        },
        computed: { ...qt(["siteId", "pages", "blogCategories", "meta"]),
            publishedBlogPages() {
                return Object.fromEntries(Object.entries(this.pages).filter(([, e]) => e.type === mi && !e.isDraft))
            },
            blogPosts() {
                const e = this.currentLocale === this.meta.defaultLocale;
                return Object.fromEntries(Object.entries(this.publishedBlogPages).map(([t, n]) => {
                    const r = $n(n.coverImageOrigin, n.coverImagePath, this.siteId, {
                        width: mf,
                        height: T_
                    });
                    return [t, {
                        id: t,
                        ...n,
                        coverImageSrcset: r,
                        slug: `/${e?"":`${this.currentLocale}/`}${n.slug}`
                    }]
                }))
            }
        },
        methods: {
            handlePostClick(e) {
                const t = this.getPagePathFromId({
                    pageId: e.id
                });
                this.$router.push({
                    path: t
                })
            }
        }
    });

function q_(e, t, n, r, o, a) {
    const i = oe("BlockBlogList");
    return u(), N(i, {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText,
        onPostClick: e.handlePostClick
    }, null, 8, ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text", "onPostClick"])
}
const j_ = J(V_, [
        ["render", q_]
    ]),
    x_ = Z({
        props: {
            columnCount: {
                type: Number,
                default: 3
            }
        }
    }),
    rl = e => (Pt("data-v-c0f30deb"), e = e(), Tt(), e),
    W_ = {
        class: "skeleton-loader"
    },
    G_ = rl(() => b("div", {
        class: "skeleton-loader__image-placeholder"
    }, null, -1)),
    Y_ = rl(() => b("div", {
        class: "skeleton-loader__text"
    }, null, -1)),
    F_ = rl(() => b("div", {
        class: "skeleton-loader__text"
    }, null, -1)),
    z_ = [G_, Y_, F_];

function K_(e, t, n, r, o, a) {
    return u(), p("div", W_, [(u(!0), p(se, null, pe(e.columnCount, i => (u(), p("div", {
        key: i,
        class: "skeleton-loader__item"
    }, z_))), 128))])
}
const Q_ = J(x_, [
        ["render", K_],
        ["__scopeId", "data-v-c0f30deb"]
    ]),
    X_ = Z({
        props: {
            textColorVars: {
                type: Object,
                default: () => ({})
            },
            emptyPageMessage: {
                type: String,
                required: !0
            }
        },
        computed: {
            computedStyles() {
                return { ...kt(this.textColorVars)
                }
            }
        }
    }),
    J_ = b("svg", {
        class: "product-list-empty-state__icon",
        width: "41",
        height: "40",
        viewBox: "0 0 41 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), b("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), b("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1);

function Z_(e, t, n, r, o, a) {
    return u(), p("div", {
        class: "product-list-empty-state",
        style: Oe(e.computedStyles)
    }, [J_, b("h6", null, x(e.emptyPageMessage), 1)], 4)
}
const e0 = J(X_, [
        ["render", Z_]
    ]),
    t0 = {},
    n0 = {
        width: "392",
        height: "392",
        viewBox: "0 0 392 392",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    r0 = Hs('<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>', 2),
    o0 = [r0];

function a0(e, t) {
    return u(), p("svg", n0, o0)
}
const pf = J(t0, [
        ["render", a0]
    ]),
    i0 = {
        props: {
            text: {
                type: String,
                default: ""
            },
            ribbonStyle: {
                type: Object,
                default: () => ({})
            }
        },
        computed: {
            computedStyles() {
                return { ...kt(this.ribbonStyle)
                }
            }
        }
    },
    s0 = {
        class: "ecommerce-product-ribbon__text"
    };

function l0(e, t, n, r, o, a) {
    return u(), p("div", {
        class: "ecommerce-product-ribbon",
        style: Oe(a.computedStyles)
    }, [b("p", s0, x(n.text), 1)], 4)
}
const u0 = J(i0, [
        ["render", l0]
    ]),
    c0 = Z({
        components: {
            ProductImage: pa,
            ProductImagePlaceholder: pf,
            GridButton: Rn,
            ProductRibbon: u0
        },
        props: {
            image: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                required: !0
            },
            price: {
                type: Object,
                required: !0
            },
            isCentered: {
                type: Boolean,
                default: !1
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            imageMaxWidth: {
                type: Number,
                required: !0
            },
            duration: {
                type: String,
                required: !0
            },
            productType: {
                type: String,
                default: ""
            },
            translations: {
                type: Object,
                default: () => ({})
            },
            isStoreQuantityTracked: {
                type: Boolean,
                default: !1
            },
            quantity: {
                type: Number,
                default: 0
            },
            isButtonEnabled: {
                type: Boolean,
                default: !1
            },
            buttonDisplay: {
                type: String,
                default: ""
            },
            buttonText: {
                type: String,
                default: null
            },
            buttonStyle: {
                type: Object,
                default: () => ({})
            },
            buttonType: {
                type: String,
                default: "primary"
            },
            buttonBorderWidth: {
                type: Number,
                default: 0
            },
            isPriceRangeShown: {
                type: Boolean,
                default: !1
            },
            ribbon: {
                type: String,
                default: ""
            },
            ribbonStyle: {
                type: Object,
                default: () => ({})
            },
            siteId: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                PRODUCT_TYPE_BOOKING: wt,
                DATA_ATTRIBUTE_ANIMATION_ROLE: Kt,
                DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: cr
            }
        },
        computed: {
            isInStock() {
                return !this.isStoreQuantityTracked || this.quantity > 0
            },
            blockButtonText() {
                return this.buttonText || this.translations ? .addToBag || "Add to bag"
            },
            buttonBorderColor() {
                return {
                    normal: this.buttonStyle[`grid-button-${this.buttonType}-border-color`],
                    hover: this.buttonStyle[`grid-button-${this.buttonType}-border-color-hover`]
                }
            },
            buttonBackgroundColor() {
                return {
                    normal: this.buttonStyle[`grid-button-${this.buttonType}-background-color`],
                    hover: this.buttonStyle[`grid-button-${this.buttonType}-background-color-hover`]
                }
            },
            computedStyles() {
                return { ...kt(this.buttonStyle)
                }
            }
        },
        methods: {
            formatPrice: lr
        }
    }),
    d0 = {
        class: "product-list-item__content"
    },
    f0 = {
        class: "product-list-item__image-wrapper"
    },
    m0 = {
        class: "product-list-item__title"
    },
    p0 = {
        class: "product-list-item__price-wrapper"
    },
    h0 = {
        key: 0,
        class: "product-list-item__price-range"
    },
    g0 = {
        key: 0,
        class: "product-list-item__price-content"
    },
    y0 = {
        key: 1,
        class: "product-list-item__duration"
    },
    v0 = {
        key: 1,
        class: "product-list-item__text"
    };

function b0(e, t, n, r, o, a) {
    const i = oe("ProductImage"),
        s = oe("ProductImagePlaceholder"),
        l = oe("ProductRibbon"),
        d = oe("GridButton"),
        y = De("qa");
    return u(), p("div", Fe({
        class: ["product-list-item", {
            "product-list-item--centered": e.isCentered
        }],
        style: e.computedStyles,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [b("div", d0, [ee((u(), p("div", f0, [e.image ? (u(), N(i, {
        key: 0,
        src: e.image,
        alt: e.title,
        class: "product-list-item__image",
        "is-eager": e.isEager,
        width: e.imageMaxWidth,
        height: e.imageMaxWidth,
        "site-id": e.siteId,
        "enable-srcset": "",
        "is-lossless": !0
    }, null, 8, ["src", "alt", "is-eager", "width", "height", "site-id"])) : (u(), N(s, {
        key: 1,
        class: "product-list-item__image"
    })), e.ribbon ? (u(), N(l, {
        key: 2,
        text: e.ribbon,
        "ribbon-style": e.ribbonStyle
    }, null, 8, ["text", "ribbon-style"])) : _("", !0)])), [
        [y, "product-list-section-item-image"]
    ]), ee((u(), p("h6", m0, [Pe(x(e.title), 1)])), [
        [y, "product-list-section-item-title"]
    ]), ee((u(), p("div", p0, [e.isInStock ? (u(), p(se, {
        key: 0
    }, [b("p", null, [e.isPriceRangeShown && !e.price.sale_amount ? (u(), p("span", h0, x(e.translations.from), 1)) : _("", !0), b("span", {
        class: F({
            "product-list-item__price": e.price.sale_amount
        })
    }, x(e.formatPrice(e.price.amount, e.price.currency)), 3)]), e.price.sale_amount ? (u(), p("p", g0, [e.isPriceRangeShown ? (u(), p(se, {
        key: 0
    }, [Pe(x(e.translations.from), 1)], 64)) : _("", !0), Pe(" " + x(e.formatPrice(e.price.sale_amount, e.price.currency)), 1)])) : _("", !0), e.productType === e.PRODUCT_TYPE_BOOKING ? (u(), p("p", y0, x(e.duration), 1)) : _("", !0)], 64)) : (u(), p("p", v0, x(e.translations.soldOut), 1))])), [
        [y, "product-list-section-item-price"]
    ])]), e.isButtonEnabled ? (u(), p("div", {
        key: 0,
        class: F(["product-list-item__button-wrapper", {
            "product-list-item__button-wrapper--hidden": !e.isInStock,
            "product-list-item__button-wrapper--with-hover": e.buttonDisplay === "hover"
        }]),
        onClick: t[1] || (t[1] = Me(() => {}, ["prevent", "stop"]))
    }, [ee(be(d, {
        type: e.buttonType,
        content: e.blockButtonText,
        class: F(["product-list-item__button", `product-list-item__button--${e.buttonType}`]),
        "tag-name": "button",
        "border-width": e.buttonBorderWidth,
        "border-color": e.buttonBorderColor.normal,
        "border-color-hover": e.buttonBorderColor.hover,
        "background-color": e.buttonBackgroundColor.normal,
        "background-color-hover": e.buttonBackgroundColor.hover,
        onClick: t[0] || (t[0] = m => e.$emit("button-click"))
    }, null, 8, ["type", "content", "class", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [
        [y, "productlistsection-btn-addtobag"]
    ])], 2)) : _("", !0)], 16)
}
const _0 = J(c0, [
        ["render", b0],
        ["__scopeId", "data-v-0cc876de"]
    ]),
    Lu = 24,
    w0 = Z({
        components: {
            ProductListItem: _0,
            ProductListEmptyState: e0,
            ZyroPagination: ff,
            ListSkeletonLoader: Q_
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            products: {
                type: Array,
                default: () => []
            },
            productPages: {
                type: Object,
                default: () => ({})
            },
            blockStyle: {
                type: Object,
                default: () => ({})
            },
            textColorVars: {
                type: Object,
                default: () => ({})
            },
            isProductListShown: {
                type: Boolean,
                default: !0
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            columnCount: {
                type: Number,
                default: 3
            },
            productsPerPage: {
                type: Number,
                default: 9
            },
            translations: {
                type: Object,
                default: () => ({})
            },
            productIds: {
                type: Array,
                default: () => []
            },
            productCategoryId: {
                type: String,
                default: ""
            },
            isButtonEnabled: {
                type: Boolean,
                default: !1
            },
            buttonDisplay: {
                type: String,
                default: ""
            },
            buttonText: {
                type: String,
                default: null
            },
            buttonStyle: {
                type: Object,
                default: () => ({})
            },
            buttonType: {
                type: String,
                default: "primary"
            },
            buttonBorderWidth: {
                type: Number,
                default: 0
            },
            ribbonStyle: {
                type: Object,
                default: () => ({})
            },
            isProductListItemLinkDisabled: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            },
            variantsQuantity: {
                type: Array,
                default: () => []
            }
        },
        emits: ["product-click", "button-click", "page-changed"],
        setup(e, t) {
            const n = M(1),
                r = c(() => `store-page-${e.blockId}`),
                o = c(() => Math.ceil(e.productIds.length / e.productsPerPage)),
                a = c(() => n.value > o.value ? o.value : n.value < 1 ? 1 : n.value),
                i = c(() => (a.value - 1) * e.productsPerPage),
                s = c(() => i.value + e.productsPerPage),
                l = c(() => e.productIds.slice(i.value, s.value)),
                d = c(() => {
                    const f = Object.values(e.products),
                        h = f.filter(v => l.value.includes(v.id));
                    return h.length ? h : f.slice(i.value, s.value)
                }),
                y = c(() => e.translations.onlineStoreNoProducts || "No publicly visible products"),
                m = () => {
                    const f = new URLSearchParams(window.location.search),
                        h = Number.parseInt(f.get(r.value), 10) || 1;
                    h !== n.value && (n.value = h)
                };
            return Ce(() => {
                const f = new URLSearchParams(window.location.search),
                    h = Number.parseInt(f.get(r.value), 10) || 1;
                h !== n.value && (n.value = h, t.emit("page-changed", l.value)), window.addEventListener("popstate", () => {
                    m()
                })
            }), yt(() => {
                window.removeEventListener("popstate", m)
            }), {
                targetIds: l,
                pageCount: o,
                currentPage: n,
                blockStorePageQuery: r,
                currentPageProducts: d,
                getFullProductQuantity: cf,
                emptyPageMessage: y
            }
        },
        data() {
            return {
                DATA_ATTRIBUTE_ANIMATION_STATE: ar,
                DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE: or,
                isAnimationActive: !1
            }
        },
        computed: {
            isCentered() {
                return this.blockStyle ? .textAlign === "center"
            },
            imageWidth() {
                const e = (this.columnCount - 1) * Lu,
                    t = ap - e;
                return Math.floor(t / this.columnCount)
            },
            computedStyles() {
                return {
                    "--image-max-width": `${this.imageWidth}px`,
                    "--gap-size": `${Lu}px`,
                    ...kt(this.textColorVars)
                }
            }
        },
        methods: {
            isProductPriceRangeShown: Xn,
            getFormattedBookingDuration: bo,
            handlePageChange(e) {
                this.currentPage = e, this.$emit("page-changed", this.targetIds), this.isAnimationActive = !0, document.getElementById(this.blockId) ? .scrollIntoView({
                    behavior: "smooth"
                })
            },
            getItemProductPage(e) {
                return Object.values(this.productPages).find(t => t.productId === e)
            },
            getItemProductPageTo(e) {
                if (this.isProductListItemLinkDisabled) return this.$route;
                const t = this.getItemProductPage(e);
                return t ? {
                    path: `/${t.slug}`
                } : {
                    path: "/"
                }
            },
            getSmallestPriceVariant(e) {
                return e.variants.reduce((t, n) => {
                    const r = t.prices[0].sale_amount || t.prices[0].amount,
                        o = n.prices[0].sale_amount || n.prices[0].amount;
                    return r < o ? t : n
                })
            },
            getSmallestProductPrice(e) {
                return Xn(e) ? this.getSmallestPriceVariant(e).prices[0] : e.variants[0].prices[0]
            },
            getProductImage(e) {
                return Xn(e) && this.getSmallestPriceVariant(e).image_url || e.thumbnail
            }
        }
    }),
    k0 = ["id"],
    S0 = {
        key: 1,
        ref: "productList",
        class: "block-product-list"
    },
    P0 = {
        class: "block-product-list__content"
    };

function T0(e, t, n, r, o, a) {
    const i = oe("ListSkeletonLoader"),
        s = oe("ProductListItem"),
        l = oe("RouterLink"),
        d = oe("ZyroPagination"),
        y = oe("ProductListEmptyState");
    return u(), p("div", {
        id: e.blockId,
        class: "block-product-list-wrapper",
        style: Oe(e.computedStyles)
    }, [e.isLoading ? (u(), N(i, {
        key: 0,
        "column-count": e.columnCount
    }, null, 8, ["column-count"])) : e.isProductListShown ? (u(), p("div", S0, [b("div", P0, [(u(!0), p(se, null, pe(e.currentPageProducts, (m, f) => (u(), N(l, {
        key: `product-${f}-${m.id}`,
        to: e.getItemProductPageTo(m.id),
        class: "block-product-list__link"
    }, {
        default: le(() => [be(s, Fe({
            image: e.getProductImage(m),
            title: m.title,
            ribbon: m.ribbon_text,
            price: e.getSmallestProductPrice(m),
            "is-centered": e.isCentered,
            "is-eager": e.isEager && f === 0,
            duration: e.getFormattedBookingDuration(m, e.translations),
            "image-max-width": e.imageWidth,
            "is-store-quantity-tracked": m.variants[0].manage_inventory,
            "is-price-range-shown": e.isProductPriceRangeShown(m),
            quantity: e.getFullProductQuantity({
                product: m,
                variantsQuantity: e.variantsQuantity
            }),
            "product-type": m.type.value,
            translations: e.translations,
            "is-button-enabled": e.isButtonEnabled,
            "button-display": e.buttonDisplay,
            "button-text": e.buttonText,
            "button-style": e.buttonStyle,
            "button-type": e.buttonType,
            "button-border-width": e.buttonBorderWidth,
            "ribbon-style": e.ribbonStyle,
            [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.isAnimationActive ? e.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE : null,
            "site-id": e.siteId,
            onClick: h => e.$emit("product-click", m),
            onButtonClick: h => e.$emit("button-click", m)
        }), null, 16, ["image", "title", "ribbon", "price", "is-centered", "is-eager", "duration", "image-max-width", "is-store-quantity-tracked", "is-price-range-shown", "quantity", "product-type", "translations", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "ribbon-style", "site-id", "onClick", "onButtonClick"])]),
        _: 2
    }, 1032, ["to"]))), 128))]), be(d, {
        "current-page": e.currentPage,
        "page-count": e.pageCount,
        class: "block-product-list__pagination",
        color: "var(--body-color)",
        onChangePage: t[0] || (t[0] = m => e.handlePageChange(m))
    }, null, 8, ["current-page", "page-count"])], 512)) : (u(), N(y, {
        key: 2,
        "text-color-vars": e.textColorVars,
        "empty-page-message": e.emptyPageMessage
    }, null, 8, ["text-color-vars", "empty-page-message"]))], 12, k0)
}
const C0 = J(w0, [
        ["render", T0],
        ["__scopeId", "data-v-847dbb10"]
    ]),
    Mu = (e, {
        productPages: t,
        isStoreTypeZyro: n,
        products: r
    }) => {
        const o = c(() => {
                let L;
                return n.value ? L = r.value ? .filter(I => Object.values(t.value).find(R => R.productId === I.id)) : L = r.value, e.data.productCategoryId ? (L = L.filter(I => I.product_collections.some(R => R.collection_id === e.data.productCategoryId)), L ? .sort((I, R) => {
                    const W = I.product_collections.find(E => E.collection_id === e.data.productCategoryId),
                        $ = R.product_collections.find(E => E.collection_id === e.data.productCategoryId);
                    return W.order - $.order
                })) : L ? .sort((I, R) => I.title.localeCompare(R.title))
            }),
            a = c(() => e.data.settings ? .styles),
            i = c(() => e.data.textColorVars),
            s = c(() => e.data.columnCount),
            l = c(() => e.data.productsPerPage || t_[s.value || uf]),
            d = c(() => e.data.productCategoryId),
            y = c(() => e.data.productIds),
            m = c(() => e.data.isButtonEnabled ? ? !1),
            f = c(() => e.data.buttonDisplay),
            h = c(() => e.data.buttonText),
            v = c(() => e.data.buttonStyle),
            k = c(() => e.data.buttonType),
            w = c(() => e.data.buttonBorderWidth),
            C = c(() => e.data.ribbonStyle);
        return {
            productList: o,
            productPages: t,
            textColorVars: i,
            blockStyle: a,
            columnCount: s,
            productsPerPage: l,
            productIds: y,
            productCategoryId: d,
            isButtonEnabled: m,
            buttonDisplay: f,
            buttonText: h,
            buttonStyle: v,
            buttonType: k,
            buttonBorderWidth: w,
            ribbonStyle: C
        }
    },
    O0 = {
        __name: "BlockEcommerceProductListProviderUser",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: It
            },
            blocks: {
                type: Object,
                default: () => ({})
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                {
                    state: r,
                    dispatch: o,
                    getters: a
                } = Xe(),
                i = M(!1),
                s = c(() => r.ecommerce ? .isLoading || !i.value),
                {
                    openEcommerceModal: l,
                    closeEcommerceModal: d,
                    setProductPreviewData: y
                } = St(),
                m = c(() => a["ecommerce/productPages"]),
                f = c(() => a["ecommerce/isStoreTypeZyro"]),
                h = c(() => a.siteId),
                v = c(() => r.ecommerce ? .products),
                k = c(() => r.ecommerce.variantsQuantity),
                {
                    initiateCheckout: w
                } = Ln();
            Ce(() => {
                i.value = !0
            });
            const {
                productList: C,
                productPages: L,
                blockStyle: I,
                textColorVars: R,
                columnCount: W,
                productsPerPage: $,
                productIds: E,
                productCategoryId: H,
                isButtonEnabled: X,
                buttonDisplay: re,
                buttonText: Y,
                buttonStyle: ne,
                buttonType: A,
                buttonBorderWidth: S,
                ribbonStyle: U
            } = Mu(n, {
                productPages: m,
                isStoreTypeZyro: f,
                products: v
            }), V = c(() => a.meta.defaultLocale && n.currentLocale !== a.meta.defaultLocale ? !1 : !!C.value ? .length), q = {
                props: n,
                state: r,
                dispatch: o,
                getters: a,
                isClientLoaded: i,
                isLoading: s,
                openEcommerceModal: l,
                closeEcommerceModal: d,
                setProductPreviewData: y,
                stateProductPages: m,
                isStoreTypeZyro: f,
                siteId: h,
                products: v,
                variantsQuantity: k,
                initiateCheckout: w,
                productList: C,
                productPages: L,
                blockStyle: I,
                textColorVars: R,
                columnCount: W,
                productsPerPage: $,
                productIds: E,
                productCategoryId: H,
                isButtonEnabled: X,
                buttonDisplay: re,
                buttonText: Y,
                buttonStyle: ne,
                buttonType: A,
                buttonBorderWidth: S,
                ribbonStyle: U,
                isProductListShown: V,
                handlePageChange: G => {
                    o("ecommerce/getProducts", G)
                },
                handleButtonClick: async G => {
                    if (G.options.length) {
                        const T = Object.values(L.value).find(O => O.productId === G.id),
                            ue = Object.keys(n.blocks).filter(O => n.blocks[O].type === "BlockEcommerceProduct").find(O => T.blocks.includes(O));
                        y(n.blocks[ue]), l("EcommerceProductPreview");
                        return
                    }
                    const te = [{ ...G,
                        variants: [G.variants[0]]
                    }];
                    if (await d(), G.type.value === wt) {
                        o("ecommerce/setSelectedBookingId", G.id), l("EcommerceBookingEventSelect");
                        return
                    }
                    if (n.isCartVisible) {
                        if (o("ecommerce/setShoppingCartItems", [...r.ecommerce.shoppingCartItems, ...te]), r.ecommerce.isShoppingCartOpen) return;
                        o("ecommerce/setShoppingCartOpen", !0)
                    } else o("ecommerce/setIsCheckoutLoading", !0), await w(te).then(() => {
                        o("ecommerce/setIsCheckoutLoading", !1)
                    })
                },
                get useStore() {
                    return Xe
                },
                computed: c,
                ref: M,
                onMounted: Ce,
                get isAppPrerendering() {
                    return Dd
                },
                BlockEcommerceProductList: C0,
                get useBlockEcommerceProductList() {
                    return Mu
                },
                get SYSTEM_LOCALE() {
                    return It
                },
                get useEcommerceModal() {
                    return St
                },
                get useEcommerce() {
                    return Ln
                },
                get PRODUCT_TYPE_BOOKING() {
                    return wt
                }
            };
            return Object.defineProperty(q, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), q
        }
    };

function I0(e, t, n, r, o, a) {
    return u(), N(r.BlockEcommerceProductList, Ae({
        blockId: n.blockId,
        blockStyle: r.blockStyle,
        textColorVars: r.textColorVars,
        isProductListShown: r.isProductListShown,
        productsPerPage: r.productsPerPage,
        columnCount: r.columnCount,
        productPages: r.productPages,
        productIds: r.productIds,
        productCategoryId: r.productCategoryId,
        isButtonEnabled: r.isButtonEnabled,
        buttonDisplay: r.buttonDisplay,
        buttonText: r.buttonText,
        buttonStyle: r.buttonStyle,
        buttonType: r.buttonType,
        buttonBorderWidth: r.buttonBorderWidth,
        isLoading: r.isLoading,
        ribbonStyle: r.ribbonStyle
    }, {
        products: r.productList,
        translations: n.ecommerceTranslations,
        "is-eager": n.lcp.type === "block-ecommerce-product-list" && n.lcp.id === n.blockId,
        "site-id": r.siteId,
        "variants-quantity": r.variantsQuantity,
        onPageChanged: r.handlePageChange,
        onButtonClick: r.handleButtonClick
    }), null, 16, ["products", "translations", "is-eager", "site-id", "variants-quantity"])
}
const $0 = J(O0, [
        ["render", I0]
    ]),
    hf = ({
        move: e = {
            swipe: !1,
            drag: !1
        },
        onMoveLeft: t = () => {},
        onMoveRight: n = () => {},
        onMoveUp: r = () => {},
        onMoveDown: o = () => {}
    }) => {
        let a = null,
            i = null;
        const s = e.swipe && e.drag,
            l = e.swipe || e.drag;

        function d(w) {
            return w.touches
        }

        function y(w) {
            const C = d(w)[0];
            a = C.clientX, i = C.clientY
        }

        function m(w) {
            const C = new Image;
            C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", w.dataTransfer.setDragImage(C, 0, 0), a = w.clientX, i = w.clientY
        }
        const f = (w, C) => {
                Math.abs(w) > Math.abs(C) ? w > 0 ? t() : n() : C > 0 ? r() : o(), a = null, i = null
            },
            h = w => {
                if (!a || !i) return;
                const C = w.touches[0].clientX,
                    L = w.touches[0].clientY,
                    I = a - C,
                    R = i - L;
                f(I, R)
            },
            v = w => {
                if (!a || !i) return;
                const C = a - w.clientX,
                    L = i - w.clientY;
                f(C, L)
            };
        return {
            enableMoveEvents: (w = !0, C = null) => {
                const L = C === null ? document : C,
                    I = w ? "addEventListener" : "removeEventListener";
                if (s) L[I]("touchstart", y, !1), L[I]("touchmove", h, !1), L[I]("dragstart", m, !1), L[I]("drag", v, !1);
                else if (l) {
                    const R = e.swipe ? y : m,
                        W = e.swipe ? h : v;
                    L[I](e.swipe ? "touchstart" : "dragstart", R, !1), L[I](e.swipe ? "touchmove" : "drag", W, !1)
                }
            }
        }
    },
    E0 = 600,
    D0 = 528,
    L0 = 400,
    Bu = 64,
    M0 = Z({
        components: {
            ProductImage: pa,
            ProductImagePlaceholder: pf
        },
        props: {
            images: {
                type: Array,
                required: !0
            },
            productTitle: {
                type: String,
                required: !0
            },
            arrowsColor: {
                type: String,
                default: "unset"
            },
            navigationThumbnailArrowsColor: {
                type: String,
                default: "unset"
            },
            galleryPlacement: {
                type: String,
                default: "left"
            },
            imageRatio: {
                type: String,
                default: "unset"
            },
            imageBorderRadius: {
                type: String,
                default: "unset"
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            variantImage: {
                type: String,
                default: null
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            isVariantImagePreselected: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                IMAGE_MAX_WIDTH_SMALL_PX: Bu,
                windowWidth: null,
                slideDirection: "",
                currentIndex: 0,
                imageListStartIndex: 0
            }
        },
        computed: {
            imagePreviewAmount() {
                let e = 0;
                switch (!0) {
                    case this.windowWidth < (this.isGalleryLeft ? 920 : 900):
                        e = 4;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1060 : 1020):
                        e = 5;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1250 : 1160):
                        e = 6;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1400 : 1320):
                        e = 7;
                        break;
                    default:
                        e = this.isGalleryLeft ? 7 : 8
                }
                return this.imageListStartIndex !== 0 && this.imageListStartIndex + e < this.images.length ? e - 1 : e
            },
            isGalleryLeft() {
                return this.galleryPlacement === "left"
            },
            thumbnails() {
                return this.images.slice(this.imageListStartIndex, this.imageListStartIndex + this.imagePreviewAmount)
            },
            isThumbnailVisible() {
                return this.thumbnails.some(e => e.url === this.images[this.currentIndex].url)
            },
            isArrowsShown() {
                return this.isMoreThanOneImage && !this.isQuickPreview
            },
            isRightImageArrowShown() {
                return this.images.length < this.imagePreviewAmount ? !1 : this.imageListStartIndex + this.imagePreviewAmount < this.images.length
            },
            isMoreThanOneImage() {
                return this.images.length > 1
            },
            imageMaxWidth() {
                return this.isQuickPreview ? L0 : E0
            },
            carouselStyle() {
                return {
                    "--image-max-width": `${this.imageMaxWidth}px`,
                    "--image-max-width-left": `${D0}px`,
                    "--image-max-width-small": `${Bu}px`,
                    "--image-object-fit": this.imageRatio,
                    "--image-border-radius": this.imageRatio === "cover" ? this.imageBorderRadius : 0,
                    "--image-position": this.imageRatio === "cover" ? "absolute" : "relative",
                    "--arrow-color": this.arrowsColor,
                    "--thumbnail-arrow-color": this.navigationThumbnailArrowsColor
                }
            }
        },
        watch: {
            variantImage() {
                this.setVariantImage(), this.isThumbnailVisible || this.presetThumbnailPosition()
            }
        },
        mounted() {
            this.windowWidth = window.innerWidth, window.addEventListener("resize", this.resizeEventHandler), this.isVariantImagePreselected && this.setVariantImage(), this.enableCarouselMoveEvents(!0)
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.resizeEventHandler), this.enableCarouselMoveEvents(!1)
        },
        methods: {
            resizeEventHandler() {
                this.windowWidth = window.innerWidth, this.imagePreviewAmount < this.images.length && this.presetThumbnailPosition()
            },
            presetThumbnailPosition() {
                this.images.length - this.currentIndex < this.imagePreviewAmount ? this.imageListStartIndex = this.images.length - this.imagePreviewAmount : this.imageListStartIndex = this.currentIndex
            },
            isImageMatch(e) {
                return this.thumbnails[e].url === this.images[this.currentIndex].url
            },
            handleThumbnailClick(e) {
                this.currentIndex = this.images.findIndex(t => t.url === this.thumbnails[e].url)
            },
            goToNextSlide() {
                this.slideDirection = "right", this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1, this.isThumbnailVisible || (this.imageListStartIndex + this.imagePreviewAmount === this.images.length ? this.imageListStartIndex = 0 : (this.presetThumbnailPosition(), this.imagePreviewAmount !== this.thumbnails.length && this.presetThumbnailPosition()))
            },
            goToPreviousSlide() {
                this.slideDirection = "left", this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1, this.isThumbnailVisible || (this.imageListStartIndex === 0 ? this.imageListStartIndex = this.images.length - this.imagePreviewAmount : this.presetThumbnailPosition())
            },
            moveImageListRight() {
                const e = this.imagePreviewAmount;
                this.imageListStartIndex += 1;
                const t = this.imagePreviewAmount;
                e !== t && this.isRightImageArrowShown && this.moveImageListRight()
            },
            moveImageListLeft() {
                this.imageListStartIndex -= 1
            },
            enableCarouselMoveEvents(e) {
                if (!this.isMoreThanOneImage) return;
                const {
                    enableMoveEvents: t
                } = hf({
                    move: {
                        drag: !1,
                        swipe: !0
                    },
                    onMoveLeft: () => this.goToNextSlide(),
                    onMoveRight: () => this.goToPreviousSlide()
                });
                t(e, this.$refs.carouselRef)
            },
            setVariantImage() {
                const e = this.images.findIndex(t => t.url === this.variantImage);
                e > -1 && (this.currentIndex = e)
            }
        }
    }),
    B0 = b("span", {
        class: "product-carousel__arrow product-carousel__arrow--left"
    }, null, -1),
    A0 = [B0],
    R0 = b("span", {
        class: "product-carousel__arrow product-carousel__arrow--right"
    }, null, -1),
    N0 = [R0],
    H0 = ["onClick"],
    U0 = {
        class: "product-carousel__dots-wrapper"
    },
    V0 = ["onClick"];

function q0(e, t, n, r, o, a) {
    const i = oe("ProductImage"),
        s = oe("ProductImagePlaceholder"),
        l = De("qa");
    return u(), p("div", {
        class: F(["product-carousel", {
            "product-carousel--left": e.isGalleryLeft
        }]),
        style: Oe(e.carouselStyle)
    }, [b("div", {
        ref: "carouselRef",
        class: F(["product-carousel__image-wrapper", {
            "product-carousel__image-wrapper--contain": e.imageRatio === "contain"
        }])
    }, [e.isArrowsShown ? (u(), p(se, {
        key: 0
    }, [ee((u(), p("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--left",
        onClick: t[0] || (t[0] = (...d) => e.goToPreviousSlide && e.goToPreviousSlide(...d))
    }, A0)), [
        [l, "product-carousel-button-prev"]
    ]), ee((u(), p("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--right",
        onClick: t[1] || (t[1] = (...d) => e.goToNextSlide && e.goToNextSlide(...d))
    }, N0)), [
        [l, "product-carousel-button-next"]
    ])], 64)) : _("", !0), e.images.length ? (u(), N(gt, {
        key: 1,
        name: `slide-${e.slideDirection}`,
        mode: "out-in",
        class: "product-carousel__image-content"
    }, {
        default: le(() => [(u(), N(i, {
            key: e.images[e.currentIndex].url,
            src: e.images[e.currentIndex].url,
            alt: e.productTitle,
            class: "product-carousel__image product-carousel__main-image",
            "is-eager": e.isEager,
            "object-fit": e.imageRatio,
            width: e.imageMaxWidth,
            height: e.imageMaxWidth,
            "enable-srcset": "",
            onClick: t[2] || (t[2] = d => e.$emit("image-click", e.currentIndex))
        }, null, 8, ["src", "alt", "is-eager", "object-fit", "width", "height"]))]),
        _: 1
    }, 8, ["name"])) : (u(), N(s, {
        key: 2,
        class: "product-carousel__image product-carousel__main-image"
    }))], 2), e.isMoreThanOneImage ? (u(), p(se, {
        key: 0
    }, [e.isQuickPreview ? _("", !0) : (u(), p("div", {
        key: 0,
        class: F(["product-carousel__image-list", {
            "product-carousel__image-list-left": e.isGalleryLeft
        }])
    }, [e.imageListStartIndex !== 0 ? ee((u(), p("button", {
        key: 0,
        class: F(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--left": !e.isGalleryLeft,
            "product-carousel__image-arrow--top": e.isGalleryLeft
        }]),
        onClick: t[3] || (t[3] = (...d) => e.moveImageListLeft && e.moveImageListLeft(...d))
    }, null, 2)), [
        [l, "product-carousel-image-button-left"]
    ]) : _("", !0), b("div", {
        class: F({
            "product-carousel__image-list-element-wrapper-left": e.isGalleryLeft
        })
    }, [(u(!0), p(se, null, pe(e.thumbnails, (d, y) => (u(), p("button", {
        key: `image-${y}-${d.url}`,
        class: F(["product-carousel__image-list-element", {
            "product-carousel__image-list-element--active": e.isImageMatch(y)
        }]),
        onClick: m => e.handleThumbnailClick(y)
    }, [be(i, {
        src: d.url,
        alt: e.productTitle,
        class: "product-carousel__image",
        "is-eager": e.isEager,
        "object-fit": e.imageRatio,
        "site-id": e.siteId,
        width: e.IMAGE_MAX_WIDTH_SMALL_PX,
        height: e.IMAGE_MAX_WIDTH_SMALL_PX
    }, null, 8, ["src", "alt", "is-eager", "object-fit", "site-id", "width", "height"])], 10, H0))), 128))], 2), e.isRightImageArrowShown ? ee((u(), p("button", {
        key: 1,
        class: F(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--right": !e.isGalleryLeft,
            "product-carousel__image-arrow--bottom": e.isGalleryLeft
        }]),
        onClick: t[4] || (t[4] = (...d) => e.moveImageListRight && e.moveImageListRight(...d))
    }, null, 2)), [
        [l, "product-carousel-image-button-right"]
    ]) : _("", !0)], 2)), b("div", U0, [(u(!0), p(se, null, pe(e.images, (d, y) => (u(), p("button", {
        key: `image-dot-${y}`,
        class: "product-carousel__dot-button",
        onClick: m => e.currentIndex = y
    }, [b("span", {
        class: F(["product-carousel__dot", {
            "product-carousel__dot--active": y === e.currentIndex
        }])
    }, null, 2)], 8, V0))), 128))])], 64)) : _("", !0)], 6)
}
const j0 = J(M0, [
        ["render", q0]
    ]),
    x0 = Z({
        name: "OptionSelect",
        props: {
            title: {
                type: String,
                required: !0
            },
            labelKey: {
                type: String,
                default: "label"
            },
            options: {
                type: Object,
                default: () => {}
            },
            value: {
                type: String,
                default: ""
            }
        },
        emits: ["set-value"],
        computed: {
            selectedValue: {
                get() {
                    return this.value
                },
                set(e) {
                    this.$emit("set-value", e)
                }
            }
        }
    }),
    W0 = {
        class: "option-select"
    },
    G0 = {
        class: "option-select__label"
    },
    Y0 = {
        class: "option-select__select-wrapper"
    },
    F0 = ["value"];

function z0(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", W0, [b("p", G0, x(e.title), 1), b("div", Y0, [ee((u(), p("select", {
        "onUpdate:modelValue": t[0] || (t[0] = s => e.selectedValue = s),
        class: "option-select__select"
    }, [(u(!0), p(se, null, pe(e.options, (s, l) => (u(), p("option", {
        key: `option-${l}`,
        value: s.id
    }, x(s[e.labelKey]), 9, F0))), 128))])), [
        [om, e.selectedValue],
        [i, "product-section-select-button"]
    ])])])
}
const K0 = J(x0, [
        ["render", z0],
        ["__scopeId", "data-v-d66f712b"]
    ]),
    Q0 = {
        props: {
            imageBorderRadius: {
                type: String,
                default: "0"
            },
            textAlign: {
                type: String,
                default: ""
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--image-border-radius": this.imageBorderRadius
                }
            }
        }
    },
    gf = e => (Pt("data-v-56d737b7"), e = e(), Tt(), e),
    X0 = gf(() => b("div", {
        class: "skeleton-loader__image"
    }, null, -1)),
    J0 = gf(() => b("div", {
        class: "skeleton-loader__title skeleton-loader__text"
    }, null, -1));

function Z0(e, t, n, r, o, a) {
    return u(), p("div", {
        class: "skeleton-loader",
        style: Oe(a.computedStyles)
    }, [X0, b("div", {
        class: F(["skeleton-loader__wrapper", {
            "skeleton-loader__wrapper--center": n.textAlign === "center"
        }])
    }, [J0, (u(), p(se, null, pe(10, i => b("div", {
        key: i,
        class: "skeleton-loader__text"
    })), 64))], 2)], 4)
}
const ew = J(Q0, [
        ["render", Z0],
        ["__scopeId", "data-v-56d737b7"]
    ]),
    tw = Z({
        name: "QuantityPicker",
        props: {
            qaSelector: {
                type: String,
                default: ""
            },
            isStockAvailable: {
                type: Boolean,
                default: !0
            },
            quantity: {
                type: Number,
                required: !0
            },
            size: {
                type: Number,
                default: 48
            },
            fontSize: {
                type: Number,
                default: 16
            },
            isCartStyle: {
                type: Boolean,
                default: !1
            },
            isInputDisabled: {
                type: Boolean,
                default: !1
            },
            isLimitReached: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {
                inputValue: this.quantity
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--size": `${this.size}px`,
                    "--font-size": `${this.fontSize}px`
                }
            },
            isIncreaseDisabled() {
                return !this.isStockAvailable || this.isLimitReached
            }
        },
        watch: {
            quantity(e) {
                this.inputValue = e
            }
        },
        methods: {
            handleQuantityInput(e) {
                const t = e.target ? .value;
                if (t.match(dp)) this.$emit("quantity-change", Number(e.target.value));
                else if (t === "") return;
                this.inputValue = this.quantity
            },
            handleEmptyInput(e) {
                e.target ? .value === "" && (this.$emit("quantity-change", 1), this.inputValue = 1)
            }
        }
    }),
    nw = ["disabled"],
    rw = ["disabled"];

function ow(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("span", {
        class: F(["quantity-picker", {
            "quantity-picker--cart-style": e.isCartStyle
        }]),
        style: Oe(e.computedStyles)
    }, [ee((u(), p("button", {
        class: F(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": e.isCartStyle
        }]),
        onClick: t[0] || (t[0] = s => e.$emit("quantity-change", e.quantity - 1))
    }, [Pe(" - ")], 2)), [
        [i, `${e.qaSelector}-btn-decrease`]
    ]), ee(b("input", {
        "onUpdate:modelValue": t[1] || (t[1] = s => e.inputValue = s),
        disabled: e.isInputDisabled,
        class: F(["quantity-picker__amount", {
            "quantity-picker__amount--borderless": e.isCartStyle
        }]),
        onInput: t[2] || (t[2] = (...s) => e.handleQuantityInput && e.handleQuantityInput(...s)),
        onBlur: t[3] || (t[3] = (...s) => e.handleEmptyInput && e.handleEmptyInput(...s))
    }, null, 42, nw), [
        [kd, e.inputValue],
        [i, `${e.qaSelector}-text-qty`]
    ]), ee((u(), p("button", {
        class: F(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": e.isCartStyle
        }]),
        disabled: e.isIncreaseDisabled,
        onClick: t[4] || (t[4] = s => e.$emit("quantity-change", e.quantity + 1))
    }, [Pe(" + ")], 10, rw)), [
        [i, `${e.qaSelector}-btn-increaseq`]
    ])], 6)
}
const yf = J(tw, [
        ["render", ow],
        ["__scopeId", "data-v-af78731e"]
    ]),
    Ya = 5,
    xn = 1,
    aw = {
        __name: "BlockEcommerceProduct",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            productData: {
                type: Object,
                default: null
            },
            blockStyle: {
                type: Object,
                default: () => ({})
            },
            textColorVars: {
                type: Object,
                default: () => ({})
            },
            blockButtonText: {
                type: String,
                default: null
            },
            blockButtonStyle: {
                type: Object,
                default: () => ({})
            },
            blockButtonType: {
                type: String,
                default: "primary"
            },
            blockButtonBorderWidth: {
                type: Number,
                default: 0
            },
            navigationArrowsColor: {
                type: String,
                default: null
            },
            navigationThumbnailArrowsColor: {
                type: String,
                default: null
            },
            galleryPlacement: {
                type: String,
                default: null
            },
            imageRatio: {
                type: String,
                default: "cover"
            },
            imageBorderRadius: {
                type: String,
                default: "0%"
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            isCheckoutLoading: {
                type: Boolean,
                default: !1
            },
            canAddToCart: {
                type: Function,
                default: () => !0
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            translations: {
                type: Object,
                default: null
            },
            quantifiedCartItemsList: {
                type: Array,
                default: () => []
            },
            isQuantityPickerEnabled: {
                type: Boolean,
                default: !1
            },
            productPages: {
                type: Object,
                default: () => ({})
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            },
            shoppingCartItems: {
                type: Array,
                default: () => []
            },
            variantsQuantity: {
                type: Array,
                default: () => []
            },
            currentPageType: {
                type: String,
                default: "default"
            }
        },
        emits: ["buy-button-click", "click-more", "image-click"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            t();
            const r = e,
                o = M(1),
                a = M(null),
                i = M(!1),
                s = M(kr),
                l = c(() => r.currentPageType === $l),
                d = c(() => ({
                    normal: r.blockButtonStyle[`grid-button-${r.blockButtonType}-background-color`],
                    hover: r.blockButtonStyle[`grid-button-${r.blockButtonType}-background-color-hover`]
                })),
                y = c(() => ({
                    hover: r.blockButtonStyle[`grid-button-${r.blockButtonType}-border-color-hover`],
                    normal: r.blockButtonStyle[`grid-button-${r.blockButtonType}-border-color`]
                })),
                m = c(() => r.blockStyle ? .textAlign),
                f = c(() => r.productData),
                h = c(() => f.value.options.length ? f.value.options.map(T => ({ ...T.values.filter((ie, ue, O) => O.findIndex(z => z.value === ie.value) === ue)
                })) : []),
                v = c(() => s.value ? .variants[0]),
                k = T => {
                    const ie = v.value ? .options.find(ue => ue.option_id === h.value[T][0].option_id);
                    return Object.values(h.value[T]).find(ue => ie ? .value === ue.value) ? .id
                },
                w = c(() => s.value.id ? v.value ? .prices[0] : f.value ? .variants[0].prices[0]),
                C = c(() => r.quantifiedCartItemsList.find(T => T.product.variants[0].id === v.value ? .id) ? .quantity || 0),
                L = c(() => r.isCartVisible ? o.value + C.value : o.value),
                I = c(() => v.value ? .manage_inventory ? L.value < In({
                    variantsQuantity: r.variantsQuantity,
                    variantId: v.value ? .id
                }) : !0),
                R = c(() => ({ ...kt({ ...r.textColorVars,
                        ...r.blockButtonStyle
                    })
                })),
                W = c(() => !f.value ? .options.length || f.value ? .options.length && s.value),
                $ = c(() => f.value ? .type.value === wt),
                E = c(() => $.value && r.shoppingCartItems ? .some(T => T.id === f.value ? .id)),
                H = c(() => E.value || !r.canAddToCart(f.value ? .id, s.value ? .variants[0].id)),
                X = c(() => E.value ? `✓ ${r.translations.booked}` : r.blockButtonText || r.translations ? .addToBag || "Add to bag"),
                re = c(() => f.value ? .variants[0].booking_event ? .location),
                Y = c(() => bo(f.value, r.translations)),
                ne = c(() => v.value ? .manage_inventory && In({
                    variantsQuantity: r.variantsQuantity,
                    variantId: v.value ? .id
                }) === 0),
                A = c(() => !!v.value ? .manage_inventory),
                S = c(() => {
                    if (!r.productPages) return "/";
                    const T = Object.values(r.productPages).find(ie => ie.productId === f.value.id);
                    return T ? `/${T.slug}` : "/"
                }),
                U = c(() => {
                    const T = In({
                        variantsQuantity: r.variantsQuantity,
                        variantId: v.value ? .id
                    });
                    return ne.value || C.value === T ? r.translations.outOfStock : `${T<=Ya?T:`${Ya}+`} ${r.translations.inStock} `
                }),
                V = T => ({ ...f.value,
                    variants: [T]
                }),
                g = () => {
                    if (!f.value) return kr;
                    if (f.value[ui] === ho) {
                        const ie = f.value.variants.reduce((z, Te) => {
                                const _e = z.prices[0].sale_amount || z.prices[0].amount,
                                    me = Te.prices[0].sale_amount || Te.prices[0].amount;
                                return _e <= me ? z : Te
                            }),
                            ue = h.value.map(z => Object.values(z).find(Te => ie ? .options.some(_e => _e.value === Te.value))),
                            O = { ...ie,
                                options: [...ue]
                            };
                        return V(O)
                    }
                    const T = f.value.variants.find(ie => ie.options.every(ue => h.value.some(O => O[0].value === ue.value)));
                    return V(T || f.value.variants[0])
                },
                B = () => {
                    const T = new Array(o.value).fill(s.value);
                    o.value = xn, n("buy-button-click", T)
                },
                q = T => {
                    o.value = xn;
                    const ie = f.value.options.map(Te => Te.values.find(_e => _e.id === T)).find(Te => Te),
                        O = [...v.value ? .options.filter(Te => Te.option_id !== ie.option_id), ie],
                        z = f.value.variants.find(Te => Te.options.every(_e => O.some(me => me.value === _e.value && me.option_id === _e.option_id)));
                    z && (s.value = V(z))
                },
                G = T => {
                    const ie = v.value ? .manage_inventory;
                    if (i.value = r.shoppingCartItems.length + T >= Cn, ie) {
                        const ue = In({
                            variantsQuantity: r.variantsQuantity,
                            variantId: v.value ? .id
                        });
                        if (C.value + T > (ue || i.value)) {
                            const O = Math.min(ue - C.value, Cn - r.shoppingCartItems.length);
                            o.value = O;
                            return
                        }
                    } else if (i.value) {
                        o.value = Cn - r.shoppingCartItems.length;
                        return
                    }
                    if (T <= 0) {
                        o.value = xn;
                        return
                    }
                    o.value = T
                };
            Ce(() => {
                f.value && (s.value = g())
            }), Re(f, (T, ie) => {
                JSON.stringify(T) !== JSON.stringify(ie) && (s.value = g())
            }), Re(s, (T, ie) => {
                JSON.stringify(T) !== JSON.stringify(ie) && T ? .variants[0].image_url && (a.value = T.variants[0].image_url)
            }, {
                immediate: !0
            }), Re(() => r.shoppingCartItems, T => {
                const ie = T ? .length || 0;
                o.value = xn, i.value = ie + o.value >= Cn
            }, {
                immediate: !0
            });
            const te = {
                MAX_STOCK_AMOUNT_TO_SHOW: Ya,
                DEFAULT_PICKER_VALUE: xn,
                props: r,
                emit: n,
                selectedQuantity: o,
                variantImage: a,
                isLimitReached: i,
                selectedVariant: s,
                isBlockInProductPage: l,
                buttonBackgroundColor: d,
                buttonBorderColor: y,
                textAlign: m,
                productData: f,
                uniqueOptionSelections: h,
                selectedValueVariant: v,
                selectedOption: k,
                priceData: w,
                quantityInCart: C,
                totalQuantitySelected: L,
                isStockAvailable: I,
                computedStyles: R,
                isPriceShown: W,
                isProductTypeBooking: $,
                isBookingProductInCart: E,
                isAddToCartDisabled: H,
                buttonText: X,
                location: re,
                formattedBookingDuration: Y,
                isOutOfStock: ne,
                isStockInfoShown: A,
                productPagePath: S,
                stockInfoText: U,
                getProductWithSelectedVariant: V,
                getInitiallySelectedVariant: g,
                handleButtonClick: B,
                handleVariantOptionChange: q,
                handleQuantityChange: G,
                Carousel: j0,
                OptionSelect: K0,
                GridButton: Rn,
                get formatPrice() {
                    return lr
                },
                get objectToCssVariables() {
                    return kt
                },
                get PRODUCT_TYPE_BOOKING() {
                    return wt
                },
                get SITE_PRODUCT_SELECTION() {
                    return ui
                },
                get SITE_PRODUCT_SELECTION_TYPE_LOWEST() {
                    return ho
                },
                get MAX_PRODUCTS_IN_CART() {
                    return Cn
                },
                get DEFAULT_EMPTY_PRODUCT_VALUE() {
                    return kr
                },
                get getFormattedBookingDuration() {
                    return bo
                },
                get isProductPriceRangeShown() {
                    return Xn
                },
                get getVariantQuantity() {
                    return In
                },
                ProductSkeletonLoader: ew,
                QuantityPicker: yf,
                computed: c,
                watch: Re,
                ref: M,
                onMounted: Ce,
                get PAGE_TYPE_ECOMMERCE_PRODUCT() {
                    return $l
                },
                get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                    return Kt
                },
                get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
                    return cr
                }
            };
            return Object.defineProperty(te, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), te
        }
    },
    iw = ["id"],
    sw = {
        class: "block-product__content-wrapper"
    },
    lw = {
        class: "block-product__price-data-wrapper"
    },
    uw = {
        key: 0,
        class: "block-product__title"
    },
    cw = {
        key: 1,
        class: "block-product__title"
    },
    dw = {
        class: "block-product__subtitle"
    },
    fw = {
        class: "block-product__additional-info"
    },
    mw = {
        key: 0,
        class: "block-product__price body-large"
    },
    pw = {
        key: 1,
        class: "block-product__duration body-large"
    },
    hw = {
        key: 2,
        class: "block-product__location"
    },
    gw = {
        key: 3,
        class: "block-product__option-select-wrapper"
    },
    yw = {
        key: 0,
        class: "block-product__stock-text"
    },
    vw = {
        class: "block-product__button-wrapper"
    },
    bw = {
        key: 0,
        class: "block-product__notice"
    },
    _w = ["innerHTML"];

function ww(e, t, n, r, o, a) {
    const i = oe("RouterLink"),
        s = De("qa");
    return u(), p("div", Fe({
        id: n.blockId,
        class: "block-product-wrapper",
        [r.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: r.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [n.isLoading || !r.productData ? (u(), N(r.ProductSkeletonLoader, {
        key: 0,
        "image-border-radius": n.imageBorderRadius,
        "text-align": r.textAlign
    }, null, 8, ["image-border-radius", "text-align"])) : (u(), p("div", {
        key: 1,
        class: F(["block-product", {
            "block-product--centered": r.textAlign === "center",
            "block-product--in-preview": n.isQuickPreview
        }]),
        style: Oe(r.computedStyles)
    }, [be(r.Carousel, {
        images: r.productData.images,
        "product-title": r.productData.title,
        "arrows-color": n.navigationArrowsColor,
        "navigation-thumbnail-arrows-color": n.navigationThumbnailArrowsColor,
        "gallery-placement": n.galleryPlacement,
        "image-ratio": n.imageRatio,
        "image-border-radius": n.imageBorderRadius,
        "is-eager": n.isEager,
        "site-id": n.siteId,
        "variant-image": r.variantImage,
        "is-quick-preview": n.isQuickPreview,
        "is-variant-image-preselected": r.isProductPriceRangeShown(r.productData),
        onImageClick: t[0] || (t[0] = l => e.$emit("image-click", l))
    }, null, 8, ["images", "product-title", "arrows-color", "navigation-thumbnail-arrows-color", "gallery-placement", "image-ratio", "image-border-radius", "is-eager", "site-id", "variant-image", "is-quick-preview", "is-variant-image-preselected"]), b("div", sw, [b("div", lw, [r.isBlockInProductPage ? ee((u(), p("h1", uw, [Pe(x(r.productData.title), 1)])), [
        [s, "builder-product-section-title"]
    ]) : ee((u(), p("h3", cw, [Pe(x(r.productData.title), 1)])), [
        [s, "builder-product-section-title"]
    ]), b("h5", dw, x(r.productData.subtitle), 1), b("div", {
        class: F(["block-product__price-wrapper", {
            "block-product__price-wrapper--with-duration": r.isProductTypeBooking
        }])
    }, [r.isPriceShown ? (u(), p("p", {
        key: 0,
        class: F(["block-product__price body-large", {
            "block-product__price--sale": r.priceData.sale_amount
        }])
    }, x(r.formatPrice(r.priceData.amount, r.priceData.currency)), 3)) : _("", !0), b("div", fw, [r.priceData.sale_amount && r.isPriceShown ? (u(), p("p", mw, x(r.formatPrice(r.priceData.sale_amount, r.priceData.currency)), 1)) : _("", !0), r.isProductTypeBooking ? (u(), p("p", pw, x(r.formattedBookingDuration), 1)) : _("", !0)])], 2), r.isProductTypeBooking ? (u(), p("p", hw, x(r.location), 1)) : _("", !0), r.productData.options.length ? (u(), p("div", gw, [(u(!0), p(se, null, pe(r.productData.options, (l, d) => (u(), N(r.OptionSelect, {
        key: `option-${d}`,
        value: r.selectedOption(d),
        options: r.uniqueOptionSelections[d],
        title: l.title,
        class: F(["block-product__option-select", {
            "block-product__option-select--centered": r.textAlign === "center"
        }]),
        "label-key": "value",
        onSetValue: t[1] || (t[1] = y => r.handleVariantOptionChange(y))
    }, null, 8, ["value", "options", "title", "class"]))), 128))])) : _("", !0), !r.isProductTypeBooking && n.isQuantityPickerEnabled ? (u(), p("div", {
        key: 4,
        class: F(["block-product__quantity-wrapper", {
            "block-product__quantity-wrapper--disabled": r.isOutOfStock || r.isAddToCartDisabled
        }])
    }, [be(r.QuantityPicker, {
        "qa-selector": "productpage",
        quantity: r.selectedQuantity,
        "is-limit-reached": r.isLimitReached,
        "is-stock-available": r.isStockAvailable,
        onQuantityChange: r.handleQuantityChange
    }, null, 8, ["quantity", "is-limit-reached", "is-stock-available"]), r.isStockInfoShown ? (u(), p("p", yw, x(r.stockInfoText), 1)) : _("", !0)], 2)) : _("", !0)]), b("div", vw, [ee(be(r.GridButton, {
        type: n.blockButtonType,
        content: r.buttonText,
        class: F(["block-product__button", `block-product__button--${n.blockButtonType}`]),
        "is-loading": n.isCheckoutLoading,
        "tag-name": "button",
        disabled: r.isAddToCartDisabled,
        "border-width": n.blockButtonBorderWidth,
        "border-color": r.buttonBorderColor.normal,
        "border-color-hover": r.buttonBorderColor.hover,
        "background-color": r.buttonBackgroundColor.normal,
        "background-color-hover": r.buttonBackgroundColor.hover,
        onClick: r.handleButtonClick
    }, null, 8, ["type", "content", "class", "is-loading", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [
        [s, "productsection-btn-addtobag"]
    ])]), be(gt, null, {
        default: le(() => [r.isBookingProductInCart ? (u(), p("p", bw, x(n.translations.purchaseToBookAgain), 1)) : _("", !0)]),
        _: 1
    }), r.productData.description && !n.isQuickPreview ? (u(), p("p", {
        key: 0,
        class: "block-product__description",
        innerHTML: r.productData.description
    }, null, 8, _w)) : n.isQuickPreview ? (u(), N(i, {
        key: 1,
        to: {
            path: r.productPagePath
        },
        class: "block-product__link body-large",
        onClick: t[2] || (t[2] = l => e.$emit("click-more"))
    }, {
        default: le(() => [Pe(x(n.translations.moreDetails), 1)]),
        _: 1
    }, 8, ["to"])) : _("", !0)])], 6))], 16, iw)
}
const kw = J(aw, [
        ["render", ww]
    ]),
    Sw = e => {
        const t = c(() => e.data.product.id),
            n = c(() => e.data.settings ? .styles),
            r = c(() => e.data.textColorVars),
            o = c(() => e.data.buttonText),
            a = c(() => e.data.buttonStyle),
            i = c(() => e.data.buttonType),
            s = c(() => e.data.buttonBorderWidth),
            l = c(() => e.data.navigationArrowsColor),
            d = c(() => e.data.navigationThumbnailArrowsColor),
            y = c(() => e.data.galleryPlacement),
            m = c(() => e.data.imageRatio),
            f = c(() => e.data.imageBorderRadius),
            h = c(() => e.data.isQuantityPickerEnabled ? ? !0);
        return {
            productId: t,
            blockStyle: n,
            blockButtonText: o,
            blockButtonStyle: a,
            blockButtonType: i,
            blockButtonBorderWidth: s,
            textColorVars: r,
            imageBorderRadius: f,
            navigationArrowsColor: l,
            navigationThumbnailArrowsColor: d,
            galleryPlacement: y,
            imageRatio: m,
            isQuantityPickerEnabled: h
        }
    },
    Pw = Z({
        components: {
            BlockEcommerceProduct: kw
        },
        props: {
            blockId: {
                type: String,
                default: ""
            },
            data: {
                type: Object,
                default: () => ({})
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            productPages: {
                type: Array,
                default: () => []
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            currentPageType: {
                type: String,
                default: "default"
            }
        },
        setup(e) {
            const {
                openEcommerceModal: t,
                closeEcommerceModal: n
            } = St(), {
                initiateCheckout: r
            } = Ln(), {
                addImagesToLightbox: o
            } = dr(), {
                productId: a,
                blockStyle: i,
                blockButtonText: s,
                blockButtonStyle: l,
                blockButtonType: d,
                blockButtonBorderWidth: y,
                textColorVars: m,
                imageBorderRadius: f,
                navigationArrowsColor: h,
                navigationThumbnailArrowsColor: v,
                galleryPlacement: k,
                imageRatio: w,
                isQuantityPickerEnabled: C
            } = Sw(e);
            return {
                productId: a,
                blockStyle: i,
                blockButtonText: s,
                blockButtonStyle: l,
                blockButtonType: d,
                blockButtonBorderWidth: y,
                textColorVars: m,
                openEcommerceModal: t,
                closeEcommerceModal: n,
                imageBorderRadius: f,
                navigationArrowsColor: h,
                navigationThumbnailArrowsColor: v,
                galleryPlacement: k,
                imageRatio: w,
                isQuantityPickerEnabled: C,
                initiateCheckout: r,
                addImagesToLightbox: o
            }
        },
        data() {
            return {
                DATA_ATTRIBUTE_ANIMATION_STATE: ar,
                animationState: null
            }
        },
        computed: { ...ua("ecommerce", ["isShoppingCartOpen", "products", "shoppingCartItems", "variantsQuantity", "isCheckoutLoading", "isLoading", "isLoaded"]),
            ...qt(["siteId"]),
            ...qt("ecommerce", ["canAddToCart", "quantifiedCartItemsList"]),
            product() {
                return this.products.find(e => e.id === this.productId) || kr
            }
        },
        mounted() {
            this.setAnimationState()
        },
        beforeUnmount() {
            this.closeEcommerceModal()
        },
        methods: { ...An("ecommerce", ["setShoppingCartOpen", "setShoppingCartItems", "setSelectedBookingId", "setIsCheckoutLoading"]),
            setAnimationState() {
                setTimeout(() => {
                    this.animationState = or
                }, 100)
            },
            async handleBuyButtonClick(e) {
                if (await this.closeEcommerceModal(), this.product.type.value === wt) {
                    this.setSelectedBookingId(this.productId), this.openEcommerceModal("EcommerceBookingEventSelect");
                    return
                }
                if (mn()) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                this.isCartVisible ? (this.setShoppingCartItems([...this.shoppingCartItems, ...e]), this.manageCartOpenState()) : (this.setIsCheckoutLoading(!0), await this.initiateCheckout(e).then(() => {
                    this.setIsCheckoutLoading(!1)
                }))
            },
            manageCartOpenState() {
                this.isShoppingCartOpen || this.setShoppingCartOpen(!0)
            },
            handleImageClick(e) {
                const t = this.product.images.map(n => ({
                    alt: this.product.title,
                    src: n.url
                }));
                this.addImagesToLightbox(t, e)
            }
        }
    });

function Tw(e, t, n, r, o, a) {
    const i = oe("BlockEcommerceProduct");
    return u(), N(i, Ae({
        blockId: e.blockId,
        blockStyle: e.blockStyle,
        blockButtonText: e.blockButtonText,
        blockButtonStyle: e.blockButtonStyle,
        blockButtonType: e.blockButtonType,
        blockButtonBorderWidth: e.blockButtonBorderWidth,
        textColorVars: e.textColorVars,
        imageBorderRadius: e.imageBorderRadius,
        navigationArrowsColor: e.navigationArrowsColor,
        navigationThumbnailArrowsColor: e.navigationThumbnailArrowsColor,
        galleryPlacement: e.galleryPlacement,
        imageRatio: e.imageRatio,
        isQuantityPickerEnabled: e.isQuantityPickerEnabled,
        quantifiedCartItemsList: e.quantifiedCartItemsList,
        isCheckoutLoading: e.isCheckoutLoading,
        productPages: e.productPages,
        isQuickPreview: e.isQuickPreview,
        currentPageType: e.currentPageType
    }, {
        "product-data": e.product,
        "can-add-to-cart": e.canAddToCart,
        "is-loading": (e.isLoading || !e.isLoaded) && e.productId !== -1,
        translations: e.ecommerceTranslations,
        "is-cart-visible": e.isCartVisible,
        "is-eager": e.lcp.type === "block-ecommerce-product" && e.lcp.id === e.blockId,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.animationState,
        "site-id": e.siteId,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onBuyButtonClick: e.handleBuyButtonClick,
        onClickMore: e.closeEcommerceModal,
        onImageClick: e.handleImageClick
    }), null, 16, ["product-data", "can-add-to-cart", "is-loading", "translations", "is-cart-visible", "is-eager", "site-id", "shopping-cart-items", "variants-quantity", "onBuyButtonClick", "onClickMore", "onImageClick"])
}
const vf = J(Pw, [
        ["render", Tw]
    ]),
    Cw = Z({
        components: {
            ZyroLoader: zs
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            storeId: {
                type: String,
                required: !0
            },
            isStoreLoading: {
                type: Boolean,
                required: !0
            },
            showStore: {
                type: Boolean,
                required: !0
            },
            loadingText: {
                type: String,
                default: "Store is loading"
            }
        }
    }),
    Ow = ["id"],
    Iw = {
        key: 0,
        class: "block-ecwid-store__loader-block"
    },
    $w = ["id"];

function Ew(e, t, n, r, o, a) {
    const i = oe("ZyroLoader"),
        s = De("qa");
    return ee((u(), p("div", {
        id: e.blockId,
        class: "block-ecwid-store"
    }, [e.isStoreLoading ? (u(), p("div", Iw, [be(i, {
        size: "44px",
        class: "block-ecwid-store__loader",
        color: "var(--color-dark)"
    }), Pe(" " + x(e.loadingText), 1)])) : _("", !0), b("div", {
        class: F({
            "height-0": e.isStoreLoading
        })
    }, [e.showStore ? ee((u(), p("div", {
        key: 0,
        id: `my-store-${e.storeId}`
    }, null, 8, $w)), [
        [s, "onlinestore-section-ecwid"]
    ]) : _("", !0)], 2)], 8, Ow)), [
        [s, "builder-section-onlinestore"]
    ])
}
const Dw = J(Cw, [
        ["render", Ew],
        ["__scopeId", "data-v-912878a7"]
    ]),
    Wn = `${Sd}/ecwid-app-images`,
    Au = [{
        name: "omniva",
        logoSource: `${Wn}/omniva.svg`,
        headerText: "Omniva"
    }, {
        name: "dpd",
        logoSource: `${Wn}/dpd.svg`,
        headerText: "DPD"
    }, {
        name: "lpexpress",
        logoSource: `${Wn}/lpexpress.svg`,
        headerText: "LPExpress"
    }, {
        name: "inpost",
        logoSource: `${Wn}/inpost.svg`,
        headerText: "InPost"
    }, {
        name: "other",
        logoSource: `${Wn}/other.svg`,
        headerText: "other"
    }],
    Lw = ({
        headerText: e,
        name: t,
        logoSource: n
    }) => {
        const r = t === "other",
            o = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"];
        return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${r?o:e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${t}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${t}" data-filter="${t}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${n}" alt="${t}" title="${t}" />
							${r?o:""}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`
    },
    Mw = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"]}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
    Bw = {
        attributes: !0,
        childList: !0,
        subtree: !0
    },
    Aw = () => {
        let e, t = "",
            n, r, o, a;
        const i = m => m.some(f => !!f ? .includes(t)),
            s = () => {
                r ? .forEach(m => {
                    const {
                        type: f,
                        element: h,
                        title: v,
                        description: k
                    } = m;
                    (f !== e || !i([v, k])) && h.classList.add("zyro-ecwid__option--hidden")
                })
            },
            l = () => {
                n = (r ? .filter(f => {
                    const {
                        title: h,
                        description: v,
                        element: k,
                        type: w
                    } = f, C = i([h, v]), L = w === e && (C || !t.length);
                    return k.classList.toggle("zyro-ecwid__option--hidden", !L), !L
                })).length
            },
            d = m => {
                let f = !1;
                r = [...m.querySelectorAll(".ec-radiogroup__item")].map(L => {
                    const I = L.querySelector(".ec-radiogroup__title").innerText,
                        R = I.split(":")[0].toLowerCase(),
                        W = Au.some(E => E.name === R) ? R : "other",
                        $ = L.querySelector('input[type="radio"]');
                    return $.addEventListener("change", E => {
                        E.target.checked && l()
                    }), {
                        title: I.toLowerCase(),
                        description: L.querySelector(".ec-radiogroup__text").innerText.toLowerCase(),
                        element: L,
                        cost: L.querySelector(".ec-radiogroup__data").innerText,
                        selected: L.querySelector("input").checked,
                        type: W,
                        radio: $
                    }
                });
                const v = m.closest(".ec-cart-step__section"),
                    k = v.querySelector(".ec-radiogroup__wrap");
                o || v.insertAdjacentHTML("beforeend", Mw()), v.classList.add("zyro-ecwid__radio-section"), v.querySelector(".zyro-ecwid__search input").addEventListener("input", lf(L => {
                    t = L.target.value.toLowerCase(), l()
                }), 30);
                const w = r.find(L => L.selected),
                    C = [...new Set(r.map(L => L.type))];
                o ? (a ? .classList.remove("ec-radiogroup--hidden"), o ? .classList.remove("zyro-ecwid__search--hidden"), v.querySelector(".ec-cart-step--delivery .ec-radiogroup:last-child") ? .classList.add("ec-radiogroup--hidden")) : C.forEach(L => {
                    if (L === "other" && f) return;
                    const I = Au.find(W => W.name === L),
                        R = Lw(I);
                    L === "other" && (f = !0), v.querySelector(".zyro-ecwid__search").insertAdjacentHTML("afterbegin", R), v.querySelector("[data-filter]").addEventListener("change", W => {
                        W.target.checked && (e = W.target.dataset.filter, l())
                    })
                }), a = v.querySelector(".ec-cart-step--delivery .ec-radiogroup"), o = v.querySelector(".zyro-ecwid__search"), v.querySelector("[data-filter]").checked = !0, e = C[C.length - 1], l(), k.scroll(w.element.offsetTop, 0)
            };
        return new MutationObserver(() => {
            if (!document.querySelector(".ec-cart__body")) return;
            const m = document.querySelector(".ec-cart-step--delivery .ec-radiogroup__items"),
                f = !!document.querySelector(".ec-cart-step--delivery .ec-cart-step__icon--done"),
                h = document.querySelectorAll(".zyro-ecwid__option--hidden");
            !!!document.querySelector(".ec-cart-step--address .ec-cart-step__icon--done") && !m && o && (o = null), !f && !r && m && d(m), n !== h.length && s(), (f || !m) && (a ? .classList.contains("ec-radiogroup--hidden") || a ? .classList.add("ec-radiogroup--hidden"), o ? .classList.contains("zyro-ecwid__search--hidden") || o ? .classList.add("zyro-ecwid__search--hidden"), r = null, t && (t = "", document.getElementById("zyro-ecwid-search").value = ""))
        }, Bw)
    },
    wi = "ecwid-loaded",
    Rw = () => {
        const e = document.querySelector(".ec-notices");
        if (!e) return;
        const t = document.querySelector(".builder-header") ? .clientHeight ? ? 0,
            n = document.querySelector(`.${Ed}`) ? .clientHeight ? ? 0,
            r = e.getBoundingClientRect().top + t + n;
        e.style.top = `${r}px`
    },
    bf = () => window.dispatchEvent(new Event(wi)),
    Nw = e => {
        const {
            setEcwidCartItems: t
        } = Md();
        t(e.items)
    },
    Hw = () => {
        window.ecwid_initial_data.data.storeClosed && bf()
    },
    Uw = () => {
        window.Ecwid.OnAPILoaded.add(Hw), window.Ecwid.OnPageLoaded.add(bf), window.Ecwid.OnPageLoaded.add(Rw), window.Ecwid.OnCartChanged.add(Nw)
    },
    Vw = {
        load(e, t) {
            if (window.ec = window.ec || {}, window.ec.config = window.ec.config || {}, window.ec.config.enable_canonical_urls = !0, window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {}, window.ec.config.storefrontUrls.cleanUrls = !0, window.ec.config.storefrontUrls.queryBasedCleanUrls = !0, window.ecwid_script_defer = !0, window.ecwid_dynamic_widgets = !0, typeof Ecwid < "u") try {
                window.Ecwid.destroy()
            } catch {}
            if (window._xnext_initialization_scripts = [{
                    widgetType: "ProductBrowser",
                    id: `my-store-${e}`,
                    arg: ["id=productBrowser", "categoriesPerRow=4", "views=grid(4,3) list(10) table(20)", "categoryView=grid", "searchView=list"]
                }], document.querySelector("#ecwid-script")) window.ecwid_onBodyDone(), setTimeout(() => {
                !!document.getElementById(`my-store-${e}`) ? .innerHTML || this.load(e, t)
            }, 1e3);
            else {
                const n = document.createElement("script");
                n.defer = !0, n.type = "text/javascript", n.async = !0, n.src = `https://app.ecwid.com/script.js?${e}`, t && t !== It && (n.src += `&lang=${t}`), n.id = "ecwid-script", n.addEventListener("load", Uw), document.body.append(n)
            }
        }
    },
    qw = "26103239",
    jw = {
        attributes: !0,
        childList: !0,
        subtree: !0
    },
    xw = (e, {
        ecwidStoreId: t,
        demoEcwidStoreId: n
    }) => {
        const r = M(!0),
            o = M(!1),
            a = M(!0),
            i = c(() => e.data.settings.loadingText || "Store is loading"),
            s = c(() => t.value || n.value || qw),
            l = () => {
                Vw.load(s.value, e.currentLocale)
            },
            d = () => {
                o.value = !0, window.addEventListener(wi, () => {
                    o.value = !1
                }), l()
            };
        return Ce(() => {
            d(), a.value = Aw(), a.value.observe(document.querySelector(`#my-store-${s.value}`), jw)
        }), yt(() => {
            a.value.disconnect()
        }), Re(s, async y => {
            n.value !== y && (document.querySelector(`#my-store-${s.value}`).innerHTML = "", await jt(), d())
        }), {
            storeId: s,
            showStore: r,
            isStoreLoading: o,
            loadStore: l,
            loadingText: i,
            ECWID_LOADED_EVENT: wi
        }
    },
    Ww = Z({
        components: {
            BlockEcwidStore: Dw
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: It
            }
        },
        setup(e) {
            const {
                getters: t
            } = Xe(), n = c(() => t.meta.ecwidStoreId), r = c(() => t.meta.demoEcwidStoreId), {
                storeId: o,
                showStore: a,
                isStoreLoading: i,
                loadingText: s
            } = xw(e, {
                ecwidStoreId: n,
                demoEcwidStoreId: r
            });
            return Ce(() => {
                window ? .Ecwid ? .getStorefrontLang() && window.Ecwid.getStorefrontLang() !== e.currentLocale && !mn() && window.location.reload()
            }), {
                storeId: o,
                showStore: a,
                isStoreLoading: i,
                loadingText: s
            }
        }
    });

function Gw(e, t, n, r, o, a) {
    const i = oe("BlockEcwidStore");
    return u(), N(i, {
        "store-id": e.storeId,
        "block-id": e.blockId,
        "show-store": e.showStore,
        "is-store-loading": e.isStoreLoading,
        "loading-text": e.loadingText
    }, null, 8, ["store-id", "block-id", "show-store", "is-store-loading", "loading-text"])
}
const Yw = J(Ww, [
        ["render", Gw]
    ]),
    Fw = M({}),
    ki = "forward",
    Ru = "backward",
    zw = ({
        isAutoplayEnabled: e,
        isLoopEnabled: t,
        autoplayInterval: n,
        isTransitioning: r,
        slides: o
    } = {}) => {
        const a = M(0),
            i = M(""),
            s = M(null),
            l = c(() => o.value.length),
            d = c(() => a.value === o.value.length - 1),
            y = c(() => a.value === 0),
            m = c(() => (!d.value || t.value) && l.value > 1 && !r.value),
            f = c(() => (!y.value || t.value) && l.value > 1 && !r.value),
            h = () => {
                if (m.value) {
                    if (i.value = ki, t.value && d.value) {
                        a.value = 0;
                        return
                    }
                    a.value += 1
                }
            },
            v = () => {
                if (f.value) {
                    if (i.value = Ru, t.value && y.value) {
                        a.value = o.value.length - 1;
                        return
                    }
                    a.value -= 1
                }
            },
            k = I => {
                i.value = I > a.value ? ki : Ru, a.value = I
            },
            w = () => {
                s.value = setInterval(() => {
                    !t.value && d.value || h()
                }, n.value * 1e3)
            },
            C = () => {
                s.value && (clearInterval(s.value), s.value = null)
            },
            L = () => {
                C(), e.value && w()
            };
        return e && (e.value && w(), Re(e, () => {
            e.value ? w() : C()
        }), Re(Bb(), I => {
            I === "visible" ? w() : C()
        })), n && Re(n, () => {
            L()
        }), {
            slideshowRefs: Fw,
            slideToNext: h,
            slideToPrevious: v,
            slideTo: k,
            slideDirection: i,
            slideCount: l,
            currentSlideIndex: a,
            slides: o,
            isLoopEnabled: t,
            isAutoplayEnabled: e,
            autoplayInterval: n,
            resetAutoplayInterval: L,
            setAutoplayInterval: w,
            clearAutoplayInterval: C,
            canSlideToNext: m,
            canSlideToPrevious: f
        }
    },
    ol = Z({
        props: {
            slides: {
                type: Array,
                required: !0
            },
            isLoopEnabled: {
                type: Boolean,
                default: !1
            },
            currentSlideIndex: {
                type: Number,
                default: 0
            },
            slideDirection: {
                type: String,
                default: ki
            },
            arrowColor: {
                type: String,
                default: "rgb(255, 255, 255)"
            },
            dotColor: {
                type: String,
                default: "rgb(255, 255, 255)"
            },
            isNextButtonDisabled: {
                type: Boolean,
                default: !1
            },
            isPreviousButtonDisabled: {
                type: Boolean,
                default: !1
            },
            isNavigationArrowsVisible: {
                type: Boolean,
                default: !0
            },
            isNavigationDotsVisible: {
                type: Boolean,
                default: !0
            },
            isTransitioning: {
                type: Boolean,
                default: !1
            },
            desktopMinHeight: {
                type: Number,
                required: !0
            },
            mobileMinHeight: {
                type: Number,
                required: !0
            },
            websiteId: {
                type: String,
                required: !0
            }
        },
        emits: ["transition-start", "transition-end", "next-slide", "previous-slide", "dot-click"],
        setup() {
            return {
                FULL_WIDTH: Qt,
                getOptimizedSrc: Qe
            }
        },
        computed: {
            isNextSlideButtonVisible() {
                if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
                const e = this.currentSlideIndex === this.slides.length - 1;
                return this.isNavigationArrowsVisible && !e
            },
            isPreviousSlideButtonVisible() {
                if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
                const e = this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
                return this.isNavigationArrowsVisible && !e
            }
        }
    }),
    Nu = () => {
        Nt(e => ({
            fe14bc34: e.desktopMinHeight,
            35035823: e.arrowColor,
            "008765ba": e.dotColor,
            "01c479ee": e.mobileMinHeight
        }))
    },
    Hu = ol.setup;
ol.setup = Hu ? (e, t) => (Nu(), Hu(e, t)) : Nu;
const Kw = ol,
    _f = e => (Pt("data-v-bddda893"), e = e(), Tt(), e),
    Qw = {
        class: "slideshow"
    },
    Xw = ["alt", "src"],
    Jw = ["disabled"],
    Zw = _f(() => b("svg", {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M1 25L13 13L1 1",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    e1 = [Zw],
    t1 = ["disabled"],
    n1 = _f(() => b("svg", {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M1 25L13 13L1 1",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    r1 = [n1],
    o1 = {
        key: 2,
        class: "slideshow__dots"
    },
    a1 = ["onClick"];

function i1(e, t, n, r, o, a) {
    return u(), p("div", Qw, [be(am, {
        name: `slide-${e.slideDirection}`,
        onLeave: t[0] || (t[0] = i => e.$emit("transition-start")),
        onAfterLeave: t[1] || (t[1] = i => e.$emit("transition-end"))
    }, {
        default: le(() => [(u(!0), p(se, null, pe(e.slides, (i, s) => ee((u(), p("img", {
            key: `${i.path}-${s}`,
            alt: i.alt || "",
            class: "slide",
            src: e.getOptimizedSrc(i.origin, i.path, e.websiteId, {
                width: e.FULL_WIDTH
            })
        }, null, 8, Xw)), [
            [Ot, e.currentSlideIndex === s]
        ])), 128))]),
        _: 1
    }, 8, ["name"]), e.isNextSlideButtonVisible ? (u(), p("button", {
        key: 0,
        class: F(["slideshow-nav-button slideshow-nav-button--right", {
            "is-transitioning": e.isTransitioning
        }]),
        disabled: e.isNextButtonDisabled,
        onClick: t[2] || (t[2] = i => e.$emit("next-slide"))
    }, e1, 10, Jw)) : _("", !0), e.isPreviousSlideButtonVisible ? (u(), p("button", {
        key: 1,
        class: F(["slideshow-nav-button slideshow-nav-button--left", {
            "is-transitioning": e.isTransitioning
        }]),
        disabled: e.isPreviousButtonDisabled,
        onClick: t[3] || (t[3] = i => e.$emit("previous-slide"))
    }, r1, 10, t1)) : _("", !0), e.isNavigationDotsVisible ? (u(), p("div", o1, [(u(!0), p(se, null, pe(e.slides, (i, s) => (u(), p("button", {
        key: `${i.path}-${s}`,
        class: F(["dot", {
            "dot--current": e.currentSlideIndex === s
        }]),
        onClick: l => e.$emit("dot-click", s)
    }, null, 10, a1))), 128))])) : _("", !0)])
}
const s1 = J(Kw, [
        ["render", i1],
        ["__scopeId", "data-v-bddda893"]
    ]),
    l1 = Z({
        components: {
            BlockImageSlideshow: s1
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            websiteId: {
                type: String,
                required: !0
            }
        },
        setup(e) {
            const {
                data: t
            } = fi(e), n = M(!1), r = c(() => `${t.value.desktop.minHeight}px`), o = c(() => `${t.value.mobile.minHeight}px`), a = c(() => t.value.settings.styles.navigationDotsColor), i = c(() => t.value.settings.styles.navigationArrowsColor), s = c(() => t.value.slides), l = c(() => t.value.isLoopEnabled), d = c(() => t.value.isAutoplayEnabled), y = c(() => t.value.autoplayInterval), m = c(() => t.value.isNavigationDotsVisible), f = c(() => t.value.isNavigationArrowsVisible), h = c(() => t.value.desktop.minHeight), v = c(() => t.value.mobile.minHeight), {
                slideDirection: k,
                currentSlideIndex: w,
                canSlideToNext: C,
                canSlideToPrevious: L,
                slideToNext: I,
                slideToPrevious: R,
                slideTo: W,
                resetAutoplayInterval: $,
                clearAutoplayInterval: E
            } = zw({
                isAutoplayEnabled: d,
                isLoopEnabled: l,
                autoplayInterval: y,
                isTransitioning: n,
                slides: s
            });
            return {
                canSlideToNext: C,
                canSlideToPrevious: L,
                desktopHeight: r,
                mobileHeight: o,
                slides: s,
                currentSlideIndex: w,
                slideDirection: k,
                isLoopEnabled: l,
                isTransitioning: n,
                resetAutoplayInterval: $,
                dotColor: a,
                arrowColor: i,
                isNavigationDotsVisible: m,
                isNavigationArrowsVisible: f,
                clearAutoplayInterval: E,
                slideToNext: I,
                slideToPrevious: R,
                slideTo: W,
                desktopMinHeight: h,
                mobileMinHeight: v
            }
        }
    });

function u1(e, t, n, r, o, a) {
    const i = oe("BlockImageSlideshow");
    return u(), N(i, {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: t[0] || (t[0] = s => e.isTransitioning = !0),
        onTransitionEnd: t[1] || (t[1] = s => e.isTransitioning = !1),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo
    }, null, 8, ["slides", "is-loop-enabled", "current-slide-index", "slide-direction", "dot-color", "is-navigation-arrows-visible", "is-navigation-dots-visible", "arrow-color", "is-next-button-disabled", "is-previous-button-disabled", "desktop-min-height", "mobile-min-height", "website-id", "onMouseenter", "onMouseleave", "onNextSlide", "onPreviousSlide", "onDotClick"])
}
const c1 = J(l1, [
        ["render", u1]
    ]),
    Uu = 360,
    d1 = {
        __name: "BlockUser",
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: It
            },
            style: {
                type: Object,
                default: () => ({})
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            pageId: {
                type: String,
                required: !0
            },
            currentPageType: {
                type: String,
                default: "default"
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                r = M(null),
                {
                    getters: o,
                    state: a
                } = Xe(),
                i = c(() => o.blogCategories),
                {
                    addIntersectionObserver: s,
                    observe: l,
                    intersectionObserver: d,
                    animationClass: y,
                    shouldMountAnimationsInPreview: m
                } = ur({
                    data: n.data
                }),
                f = c(() => o.siteId),
                h = c(() => a.ecommerce.isLoaded),
                v = c(() => o.blogReadingTimeText),
                k = c(() => n.currentLocale),
                w = c(() => n.data.desktop ? .isHidden || !1),
                C = c(() => n.data.mobile ? .isHidden || !1),
                L = c(() => ({ ...n.style,
                    ...kt(n.data ? .settings ? .styles)
                })),
                I = c(() => {
                    if (!n.data ? .settings ? .styles["m-block-padding"]) return !1;
                    const {
                        top: V,
                        bottom: g
                    } = ir(n.data.settings.styles["m-block-padding"]);
                    return Number.parseInt(V, 10) + Number.parseInt(g, 10) > Uu
                }),
                R = c(() => Qe(n.data.background.origin, n.data.background.path, o.siteId, {
                    width: Qt
                })),
                W = c(() => pn(n.data.background.origin, n.data.background.path, o.siteId, {
                    isMobileFullScreen: I.value
                })),
                $ = c(() => n.data.slot === "footer"),
                E = c(() => o.blocks),
                H = c(() => o.elements),
                X = c(() => o.pages),
                re = c(() => {
                    if (n.data.type !== El) return null;
                    const [, V] = Object.entries(X.value).find(([g, B]) => B.type === mi && g === n.pageId);
                    return V
                }),
                Y = c(() => o.meta.stripePublicApiKey),
                ne = c(() => o["ecommerce/productPages"]),
                A = c(() => n.data.type === Dl),
                S = async () => {
                    s(), (!A.value || h.value) && await l(r.value)
                };
            Ce(async () => {
                await S()
            }), yt(() => d.value ? .disconnect()), Re([k, h], async ([V, g], [B]) => {
                (g || V !== B) && A.value && await l(r.value)
            }), Re(m, async V => {
                V && await S()
            });
            const U = {
                MOBILE_FULL_HEIGT_THRESHOLD: Uu,
                props: n,
                blockRef: r,
                getters: o,
                state: a,
                blogCategories: i,
                addIntersectionObserver: s,
                observe: l,
                intersectionObserver: d,
                animationClass: y,
                shouldMountAnimationsInPreview: m,
                websiteId: f,
                isEcommerceProductsLoaded: h,
                blogReadingTimeText: v,
                currentSiteLocale: k,
                isDesktopBlockHidden: w,
                isMobileBlockHidden: C,
                computedStyles: L,
                isMobileFullScreen: I,
                backgroundSrc: R,
                backgroundSrcSet: W,
                isBlockFooter: $,
                siteBlocks: E,
                siteElements: H,
                siteLanguagePages: X,
                currentBlogPage: re,
                stripePublicApiKey: Y,
                productPages: ne,
                isEcommerceBlock: A,
                initiateAnimations: S,
                computed: c,
                onMounted: Ce,
                onBeforeUnmount: yt,
                ref: M,
                watch: Re,
                get useStore() {
                    return Xe
                },
                BlockBackground: Bd,
                BlockBlogHeader: Kp,
                get PAGE_TYPE_BLOG() {
                    return mi
                },
                get SYSTEM_LOCALE() {
                    return It
                },
                get BLOCK_TYPE_LAYOUT() {
                    return $m
                },
                get BLOCK_TYPE_BLOG_HEADER() {
                    return El
                },
                get BLOCK_TYPE_BLOG_LIST() {
                    return Em
                },
                get BLOCK_TYPE_IMAGE_SLIDESHOW() {
                    return Dm
                },
                get BLOCK_TYPE_ECWID() {
                    return Lm
                },
                get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
                    return Mm
                },
                get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
                    return Dl
                },
                get FULL_WIDTH() {
                    return Qt
                },
                get getFullWidthSrcset() {
                    return pn
                },
                get getOptimizedSrc() {
                    return Qe
                },
                get objectToCssVariables() {
                    return kt
                },
                get parseCSSSides() {
                    return ir
                },
                BlockLayoutProviderUser: h_,
                BlockBlogListProviderUser: j_,
                BlockEcommerceProductListProviderUser: $0,
                BlockEcommerceProductProviderUser: vf,
                BlockEcwidStoreProviderUser: Yw,
                BlockImageSlideshowProviderUser: c1,
                get useSiteEngineAnimations() {
                    return ur
                }
            };
            return Object.defineProperty(U, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), U
        }
    },
    f1 = ["id"];

function m1(e, t, n, r, o, a) {
    return u(), p("section", {
        id: n.id,
        ref: "blockRef",
        class: F(["block", [r.animationClass, {
            "block--footer": r.isBlockFooter,
            "block--desktop-hidden": r.isDesktopBlockHidden,
            "block--mobile-hidden": r.isMobileBlockHidden
        }]]),
        style: Oe(r.computedStyles)
    }, [n.data.background ? (u(), N(r.BlockBackground, {
        key: 0,
        "overlay-opacity": n.data.background["overlay-opacity"],
        type: n.data.background.current,
        color: n.data.background.color,
        src: r.backgroundSrc,
        srcset: r.backgroundSrcSet,
        "is-eager": n.lcp.type === "block-background" && n.lcp.id === n.id,
        "is-fixed": n.data.attachment === "fixed",
        alt: n.data.background && n.data.background.alt
    }, null, 8, ["overlay-opacity", "type", "color", "src", "srcset", "is-eager", "is-fixed", "alt"])) : _("", !0), n.data.type === r.BLOCK_TYPE_LAYOUT ? (u(), N(r.BlockLayoutProviderUser, {
        key: 1,
        lcp: n.lcp,
        data: n.data,
        "block-id": n.id,
        components: r.siteElements,
        "current-locale": n.currentLocale,
        "is-cart-visible": n.isCartVisible,
        "site-language-pages": r.siteLanguagePages,
        "stripe-public-api-key": r.stripePublicApiKey
    }, null, 8, ["lcp", "data", "block-id", "components", "current-locale", "is-cart-visible", "site-language-pages", "stripe-public-api-key"])) : _("", !0), n.data.type === r.BLOCK_TYPE_BLOG_HEADER ? (u(), N(r.BlockBlogHeader, {
        key: 2,
        data: n.data,
        "current-blog-page": r.currentBlogPage,
        "blog-categories": r.blogCategories,
        "blog-reading-time-text": r.blogReadingTimeText
    }, null, 8, ["data", "current-blog-page", "blog-categories", "blog-reading-time-text"])) : _("", !0), n.data.type === r.BLOCK_TYPE_BLOG_LIST ? (u(), N(r.BlockBlogListProviderUser, {
        key: 3,
        data: n.data,
        "block-id": n.id,
        "current-locale": n.currentLocale
    }, null, 8, ["data", "block-id", "current-locale"])) : _("", !0), n.data.type === r.BLOCK_TYPE_IMAGE_SLIDESHOW ? (u(), N(r.BlockImageSlideshowProviderUser, {
        key: 4,
        data: n.data,
        "block-id": n.id,
        "website-id": r.websiteId
    }, null, 8, ["data", "block-id", "website-id"])) : _("", !0), n.data.type === r.BLOCK_TYPE_ECWID ? (u(), N(r.BlockEcwidStoreProviderUser, {
        key: 5,
        data: n.data,
        "block-id": n.id,
        "current-locale": n.currentLocale
    }, null, 8, ["data", "block-id", "current-locale"])) : _("", !0), n.data.type === r.BLOCK_TYPE_ECOMMERCE_PRODUCT ? (u(), N(r.BlockEcommerceProductProviderUser, {
        key: 6,
        lcp: n.lcp,
        data: n.data,
        "block-id": n.id,
        "product-pages": r.productPages,
        "is-cart-visible": n.isCartVisible,
        "ecommerce-translations": n.ecommerceTranslations,
        "current-page-type": n.currentPageType
    }, null, 8, ["lcp", "data", "block-id", "product-pages", "is-cart-visible", "ecommerce-translations", "current-page-type"])) : _("", !0), n.data.type === r.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST ? (u(), N(r.BlockEcommerceProductListProviderUser, {
        key: 7,
        lcp: n.lcp,
        data: n.data,
        "block-id": n.id,
        blocks: r.siteBlocks,
        "current-locale": n.currentLocale,
        "is-cart-visible": n.isCartVisible,
        "ecommerce-translations": n.ecommerceTranslations
    }, null, 8, ["lcp", "data", "block-id", "blocks", "current-locale", "is-cart-visible", "ecommerce-translations"])) : _("", !0)], 14, f1)
}
const p1 = J(d1, [
        ["render", m1],
        ["__scopeId", "data-v-a3075b03"]
    ]),
    br = M({}),
    wf = ({
        pagePassword: e,
        locale: t,
        pageId: n
    }) => {
        const r = c(() => `${n}-${t}`),
            o = c(() => !e || e && !!br.value[r.value]);
        return {
            isPageUnlocked: br,
            openUnlockedPage: () => {
                br.value = { ...br.value,
                    [r.value]: !0
                }
            },
            isPageOpen: o
        }
    },
    h1 = async e => {
        const t = new TextEncoder().encode(e),
            n = await crypto.subtle.digest("SHA-256", t);
        return [...new Uint8Array(n)].map(a => a.toString(16).padStart(2, "0")).join("")
    },
    g1 = "/_astro/guest-area-background-popular.1ef94623.png",
    y1 = "/_astro/lock.4cc2c7e9.svg",
    v1 = Z({
        props: {
            pageId: {
                type: String,
                required: !0
            },
            locale: {
                type: String,
                required: !0
            },
            currentPageData: {
                type: Object,
                required: !0
            },
            isCurrentPageHomepage: {
                type: Boolean,
                default: !1
            },
            inPreviewMode: {
                type: Boolean,
                default: !1
            },
            defaultLocale: {
                type: String,
                required: !0
            },
            homepageName: {
                type: String,
                required: !0
            }
        },
        setup(e) {
            const t = M(""),
                n = M(""),
                r = c(() => e.currentPageData ? .meta ? .passwordDesign ? ? ""),
                o = c(() => e.currentPageData ? .meta ? .password ? ? ""),
                a = c(() => e.currentPageData ? .meta ? .passwordHeadingText ? ? "Guest Area"),
                i = c(() => e.currentPageData ? .meta ? .passwordSubheadingText ? ? "Please enter the password to access the page"),
                s = c(() => e.currentPageData ? .meta ? .passwordButtonText ? ? "Enter"),
                l = c(() => e.currentPageData ? .meta ? .passwordPlaceholderText ? ? "Type password"),
                d = c(() => e.currentPageData ? .meta ? .passwordBackText ? ? "Back to"),
                y = c(() => r.value === Bm),
                m = c(() => r.value === Am),
                {
                    openUnlockedPage: f
                } = wf({
                    pagePassword: o.value,
                    locale: e.locale,
                    pageId: e.pageId
                }),
                h = async () => {
                    const w = await h1(t.value);
                    if (!t.value || w !== o.value) {
                        n.value = "Please enter the correct password";
                        return
                    }
                    f()
                },
                v = c(() => e.locale && e.locale !== e.defaultLocale ? `/${e.locale}` : "/"),
                k = c(() => !e.inPreviewMode && !e.isCurrentPageHomepage);
            return Ce(() => {
                document.body.style.overflow = "hidden"
            }), yt(() => {
                document.body.style.overflow = ""
            }), {
                passwordPageHeading: a,
                passwordPageSubheading: i,
                passwordPlaceholder: l,
                passwordPageButtonText: s,
                isHomepageLinkShown: k,
                passwordBackText: d,
                homepageLink: v,
                isCalmTheme: y,
                isPopularTheme: m,
                errorMessage: n,
                password: t,
                unlock: h
            }
        }
    }),
    b1 = e => (Pt("data-v-88122c9c"), e = e(), Tt(), e),
    _1 = {
        key: 0,
        class: "password-page__background-wave-wrapper"
    },
    w1 = b1(() => b("div", {
        class: "password-page__background-wave"
    }, null, -1)),
    k1 = [w1],
    S1 = {
        key: 1,
        class: "password-page__background-image",
        src: g1
    },
    P1 = {
        key: 0,
        class: "password-page__icon-lock",
        src: y1
    },
    T1 = {
        class: "password-page__heading"
    },
    C1 = {
        for: "password",
        class: "password-page__label"
    },
    O1 = ["placeholder"],
    I1 = {
        key: 1,
        class: "password-page__error-message"
    },
    $1 = {
        class: "password-page__button",
        type: "submit"
    },
    E1 = {
        key: 2,
        class: "password-page__homepage-link"
    },
    D1 = ["href"];

function L1(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("main", {
        class: F(["password-page", {
            "password-page--calm": e.isCalmTheme,
            "password-page--popular": e.isPopularTheme
        }])
    }, [e.isCalmTheme ? ee((u(), p("div", _1, k1)), [
        [i, "password-page-background-calm"]
    ]) : _("", !0), e.isPopularTheme ? ee((u(), p("img", S1, null, 512)), [
        [i, "password-page-background-popular"]
    ]) : _("", !0), b("form", {
        class: "password-page__form",
        onSubmit: t[2] || (t[2] = Me((...s) => e.unlock && e.unlock(...s), ["prevent"]))
    }, [e.isCalmTheme ? (u(), p("img", P1)) : _("", !0), ee((u(), p("h1", T1, [Pe(x(e.passwordPageHeading), 1)])), [
        [i, "password-page-heading"]
    ]), ee((u(), p("label", C1, [Pe(x(e.passwordPageSubheading), 1)])), [
        [i, "password-page-subheading"]
    ]), ee(b("input", {
        id: "password",
        "onUpdate:modelValue": t[0] || (t[0] = s => e.password = s),
        type: "password",
        autocomplete: "off",
        autocapitalize: "off",
        autocorrect: "off",
        name: "password",
        placeholder: e.passwordPlaceholder,
        required: "",
        class: F(["password-page__input", {
            "password-page__input--error": e.errorMessage
        }]),
        onBlur: t[1] || (t[1] = s => e.errorMessage = "")
    }, null, 42, O1), [
        [kd, e.password],
        [i, "password-page-placeholder"]
    ]), e.errorMessage ? (u(), p("p", I1, x(e.errorMessage), 1)) : _("", !0), ee((u(), p("button", $1, [Pe(x(e.passwordPageButtonText), 1)])), [
        [i, "password-page-button"]
    ]), e.isHomepageLinkShown ? ee((u(), p("p", E1, [Pe(x(e.passwordBackText) + " ", 1), b("a", {
        href: e.homepageLink,
        class: "password-page__homepage-link-text"
    }, x(e.homepageName), 9, D1)])), [
        [i, "password-page-footer"]
    ]) : _("", !0)], 32)], 2)
}
const M1 = J(v1, [
        ["render", L1],
        ["__scopeId", "data-v-88122c9c"]
    ]),
    B1 = {},
    A1 = Hs('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>', 1),
    R1 = [A1];

function N1(e, t) {
    return u(), p("button", {
        class: "delete-button",
        onClick: t[0] || (t[0] = n => e.$emit("handle-button-click"))
    }, R1)
}
const H1 = J(B1, [
        ["render", N1],
        ["__scopeId", "data-v-334df6f8"]
    ]),
    U1 = {},
    V1 = e => (Pt("data-v-2f9813ef"), e = e(), Tt(), e),
    q1 = {
        class: "close-button"
    },
    j1 = V1(() => b("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M12 4L4 12",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), b("path", {
        d: "M4 4L12 12",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    x1 = [j1];

function W1(e, t) {
    return u(), p("button", q1, x1)
}
const al = J(U1, [
        ["render", W1],
        ["__scopeId", "data-v-2f9813ef"]
    ]),
    G1 = Z({
        name: "Drawer",
        components: {
            CloseButton: al
        },
        props: {
            placement: {
                type: String,
                default: "right",
                validator: e => ["right", "left"].includes(e)
            },
            width: {
                type: String,
                default: "350px"
            },
            alwaysShowCloseButton: {
                type: Boolean,
                default: !0
            },
            isOpen: {
                type: Boolean,
                default: !1
            },
            topPositionMobile: {
                type: String,
                default: "0px"
            }
        },
        emits: ["close-drawer"],
        setup(e, t) {
            const n = M(null);
            return Ce(() => {
                ha(n, () => {
                    t.emit("close-drawer")
                })
            }), {
                siteDrawerRef: n
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--sidebar-width": this.width,
                    "--sidebar-top-mobile": this.topPositionMobile
                }
            }
        },
        methods: {
            closeDrawer() {
                this.$emit("close-drawer")
            }
        }
    }),
    Y1 = {
        class: "site-drawer__content"
    };

function F1(e, t, n, r, o, a) {
    const i = oe("CloseButton"),
        s = De("qa");
    return u(), p("div", null, [b("div", {
        class: F(["site-drawer-overlay", {
            "site-drawer-overlay--open": e.isOpen
        }]),
        onTouchend: t[0] || (t[0] = Me(() => {}, ["stop", "prevent"]))
    }, null, 34), be(gt, {
        name: e.placement === "right" ? "drawer-slide-right" : "drawer-slide-left"
    }, {
        default: le(() => [e.isOpen ? (u(), p("aside", {
            key: 0,
            ref: "siteDrawerRef",
            class: F([{
                "site-drawer--left": e.placement === "left",
                "site-drawer--right": e.placement === "right"
            }, "site-drawer"]),
            style: Oe(e.computedStyles)
        }, [b("div", Y1, [ee((u(), p("span", {
            class: F(["site-drawer__close-button", {
                "site-drawer__close-button--hide-mobile": !e.alwaysShowCloseButton
            }]),
            onClick: t[1] || (t[1] = (...l) => e.closeDrawer && e.closeDrawer(...l))
        }, [be(i)], 2)), [
            [s, "builder-sitedrawer-btn-close"]
        ]), ae(e.$slots, "default", {}, void 0, !0)])], 6)) : _("", !0)]),
        _: 3
    }, 8, ["name"])])
}
const z1 = J(G1, [
        ["render", F1],
        ["__scopeId", "data-v-99d75f1e"]
    ]),
    Vu = 90,
    K1 = Z({
        components: {
            Drawer: z1,
            DeleteButton: H1,
            ProductImage: pa,
            QuantityPicker: yf
        },
        props: {
            isLoading: {
                type: Boolean,
                default: !1
            },
            isShoppingCartOpen: {
                type: Boolean,
                default: !1
            },
            translations: {
                type: Object,
                default: null
            },
            language: {
                type: String,
                default: "en"
            },
            isHeaderSticky: {
                type: Boolean,
                default: !1
            },
            isNavHidden: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            },
            quantifiedCartItemsList: {
                type: Array,
                default: () => []
            },
            products: {
                type: Array,
                default: () => []
            },
            shoppingCartItems: {
                type: Array,
                default: () => []
            },
            variantsQuantity: {
                type: Array,
                default: () => []
            }
        },
        emits: ["close-shopping-cart", "checkout-button-click", "set-shopping-cart-items"],
        data() {
            return {
                IMAGE_WIDTH_PX: Vu,
                isHeaderVisible: !1,
                topPositionMobile: "0px",
                resizeObserver: null
            }
        },
        computed: {
            totalPrice() {
                return this.quantifiedCartItemsList.reduce((e, t) => e + (t.product ? .variants[0] ? .prices[0] ? .sale_amount || t.product ? .variants[0] ? .prices[0] ? .amount || 0) * t.quantity, 0)
            },
            currencyCode() {
                return this.products[0] ? .variants[0] ? .prices[0] ? .currency
            },
            computedStyle() {
                return {
                    "--image-width": `${Vu}px`
                }
            },
            isLimitReached() {
                return this.shoppingCartItems.length >= Cn
            }
        },
        watch: {
            isShoppingCartOpen(e) {
                document.documentElement.style.overflow = e ? "hidden" : "auto"
            },
            headerHeight() {
                this.setHeaderVisibilityValues()
            }
        },
        mounted() {
            const e = document.querySelector(".block-header");
            e && (this.resizeObserver = new ResizeObserver(() => {
                this.setHeaderHeight()
            }), this.resizeObserver.observe(e)), window.addEventListener("scroll", this.setHeaderVisibilityValues)
        },
        beforeUnmount() {
            this.resizeObserver ? .disconnect(), window.removeEventListener("scroll", this.setHeaderVisibilityValues)
        },
        methods: {
            getFormattedBookingDuration: bo,
            formatPrice: lr,
            isStockAvailable(e) {
                if (e.product.variants[0].manage_inventory) {
                    const n = this.variantsQuantity.find(r => r.id === e.product.variants[0].id) ? .inventory_quantity || 0;
                    return e.quantity < n
                }
                return !0
            },
            handleQuantityChange(e, t) {
                if (e > t.quantity) {
                    this.increaseQuantity(t);
                    return
                }
                this.decreaseQuantity(t)
            },
            decreaseQuantity(e) {
                const t = [...this.shoppingCartItems],
                    n = this.shoppingCartItems.filter(o => o.variants[0].id === e.product.variants[0].id),
                    r = this.shoppingCartItems.lastIndexOf(n[n.length - 1]);
                t.splice(r, 1), this.$emit("set-shopping-cart-items", t)
            },
            increaseQuantity(e) {
                this.$emit("set-shopping-cart-items", [...this.shoppingCartItems, e.product])
            },
            removeProduct(e) {
                const t = this.shoppingCartItems.filter(n => n.variants[0].id !== e.variants[0].id);
                this.$emit("set-shopping-cart-items", t)
            },
            closeShoppingCart() {
                this.$emit("close-shopping-cart")
            },
            setHeaderVisibility() {
                this.isHeaderVisible = this.isHeaderSticky || (this.isNavHidden ? !1 : window.scrollY <= Number(this.headerHeight) * .4)
            },
            setTopPositionMobile() {
                const e = this.isHeaderSticky ? this.headerHeight : this.headerHeight - window.scrollY;
                this.topPositionMobile = `${this.isHeaderVisible?Math.floor(e)-1:0}px`
            },
            setHeaderVisibilityValues() {
                this.setHeaderVisibility(), this.setTopPositionMobile()
            },
            setHeaderHeight() {
                this.headerHeight = document.querySelector(".block-header") ? .clientHeight
            },
            getFormattedSelectedDate(e) {
                return new Date(e.product ? .variants[0] ? .booking_event ? .date).toLocaleDateString(this.language) || null
            },
            getFormattedTime(e) {
                const t = new Date(e.product ? .variants[0] ? .booking_event ? .time_slot),
                    n = t.getTime(),
                    r = new Date(n + _i(e.product)),
                    o = t.toLocaleTimeString(this.language, {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    a = r.toLocaleTimeString(this.language, {
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                return `${o} - ${a}`
            },
            isProductBookingType(e) {
                return e.product ? .type.value === wt
            },
            getProductImage(e) {
                return e.product.variants[0].image_url || e.product.thumbnail
            }
        }
    }),
    kf = e => (Pt("data-v-cd314e62"), e = e(), Tt(), e),
    Q1 = {
        class: "cart"
    },
    X1 = {
        class: "cart__content"
    },
    J1 = {
        key: 0,
        class: "cart__content-title cart__content-title--with-margin"
    },
    Z1 = {
        key: 1,
        class: "cart__content-title"
    },
    ek = {
        class: "cart__list"
    },
    tk = {
        class: "cart__title"
    },
    nk = {
        key: 0,
        class: "cart__text"
    },
    rk = {
        key: 1,
        class: "cart__text cart__sale-price"
    },
    ok = {
        class: "cart__text cart__duration"
    },
    ak = {
        class: "cart__time-wrapper"
    },
    ik = kf(() => b("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon"
    }, [b("path", {
        d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
        fill: "currentColor"
    })], -1)),
    sk = {
        class: "cart__text cart__text--lighter"
    },
    lk = {
        class: "cart__time-wrapper"
    },
    uk = kf(() => b("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon"
    }, [b("path", {
        d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
        fill: "currentColor"
    })], -1)),
    ck = {
        class: "cart__text cart__text--lighter"
    },
    dk = {
        key: 3,
        class: "cart__quantity"
    },
    fk = {
        class: "cart__quantity-title"
    },
    mk = {
        key: 0,
        class: "cart__footer"
    },
    pk = {
        class: "cart__title cart__title--with-slot"
    };

function hk(e, t, n, r, o, a) {
    const i = oe("ProductImage"),
        s = oe("QuantityPicker"),
        l = oe("DeleteButton"),
        d = oe("Drawer"),
        y = De("qa");
    return u(), N(d, {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: Oe(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart
    }, {
        default: le(() => [b("div", Q1, [b("div", X1, [e.quantifiedCartItemsList.length ? (u(), p("p", Z1, x(e.translations.shoppingBag), 1)) : ee((u(), p("p", J1, [Pe(x(e.translations.shoppingBagEmpty), 1)])), [
            [y, "shoppingcart-text-emptystate"]
        ]), b("ul", ek, [(u(!0), p(se, null, pe(e.quantifiedCartItemsList, m => (u(), p("li", {
            key: m.product.variants[0].id,
            class: "cart__list-item"
        }, [m.product.thumbnail ? (u(), N(i, {
            key: 0,
            src: e.getProductImage(m),
            alt: m.product.title,
            class: "cart__list-item-image",
            width: e.IMAGE_WIDTH_PX,
            height: e.IMAGE_WIDTH_PX,
            "site-id": e.siteId,
            "enable-srcset": ""
        }, null, 8, ["src", "alt", "width", "height", "site-id"])) : _("", !0), b("div", null, [ee((u(), p("p", tk, [Pe(x(m.product.title), 1)])), [
            [y, "shoppingcart-text-product"]
        ]), m.product.options.length ? ee((u(), p("p", nk, [Pe(x(m.product.variants[0].title), 1)])), [
            [y, "shoppingcart-text-variant"]
        ]) : _("", !0), ee((u(), p("p", {
            class: F(["cart__text cart__price", {
                "cart__price--strikethrough": m.product.variants[0].prices[0].sale_amount
            }])
        }, [Pe(x(e.formatPrice(m.product.variants[0].prices[0].amount, m.product.variants[0].prices[0].currency)), 1)], 2)), [
            [y, "shoppingcart-text-price"]
        ]), m.product.variants[0].prices[0].sale_amount ? ee((u(), p("p", rk, [Pe(x(e.formatPrice(m.product.variants[0].prices[0].sale_amount, m.product.variants[0].prices[0].currency)), 1)])), [
            [y, "shoppingcart-text-saleprice"]
        ]) : _("", !0), e.isProductBookingType(m) ? (u(), p(se, {
            key: 2
        }, [ee((u(), p("p", ok, [Pe(x(e.getFormattedBookingDuration(m.product, e.translations)), 1)])), [
            [y, "shoppingcart-text-duration"]
        ]), b("div", ak, [ik, b("p", sk, x(e.getFormattedSelectedDate(m)), 1)]), b("div", lk, [uk, b("p", ck, x(e.getFormattedTime(m)), 1)])], 64)) : (u(), p("p", dk, [b("span", fk, x(e.translations.quantityShort) + ": ", 1), be(s, {
            "qa-selector": "shoppingcart",
            "is-cart-style": "",
            size: 26,
            "font-size": 14,
            quantity: m.quantity,
            "is-input-disabled": "",
            "is-limit-reached": e.isLimitReached,
            "is-stock-available": e.isStockAvailable(m),
            onQuantityChange: f => e.handleQuantityChange(f, m)
        }, null, 8, ["quantity", "is-limit-reached", "is-stock-available", "onQuantityChange"])]))]), ee(be(l, {
            class: "cart__remove-button",
            onHandleButtonClick: f => e.removeProduct(m.product)
        }, null, 8, ["onHandleButtonClick"]), [
            [y, "shoppingcart-btn-delete"]
        ])]))), 128))])]), e.quantifiedCartItemsList.length ? (u(), p("div", mk, [ee((u(), p("p", pk, [Pe(x(e.translations.subtotal) + ": ", 1), b("span", null, x(e.formatPrice(e.totalPrice, e.currencyCode)), 1)])), [
            [y, "shoppingcart-text-subtotal"]
        ]), ee((u(), p("button", {
            class: F(["cart__text cart__checkout-button", {
                loading: e.isLoading
            }]),
            onClick: t[0] || (t[0] = m => e.$emit("checkout-button-click"))
        }, [Pe(x(e.translations.checkout), 1)], 2)), [
            [y, "shoppingcart-btn-checkout"]
        ])])) : _("", !0)])]),
        _: 1
    }, 8, ["is-open", "top-position-mobile", "style", "onCloseDrawer"])
}
const gk = J(K1, [
        ["render", hk],
        ["__scopeId", "data-v-cd314e62"]
    ]),
    yk = Z({
        components: {
            EcommerceShoppingCart: gk
        },
        props: {
            headerHeight: {
                type: Number,
                default: 0
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            language: {
                type: String,
                default: "en"
            },
            currentPageEcommerceBlocks: {
                type: Array,
                default: () => []
            },
            currentPageEcommerceComponents: {
                type: Array,
                default: () => []
            },
            isHeaderSticky: {
                type: Boolean,
                default: !1
            },
            isNavHidden: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                openEcommerceModal: t
            } = St(), {
                initiateCheckout: n
            } = Ln();
            return {
                openEcommerceModal: t,
                initiateCheckout: n
            }
        },
        computed: { ...ua("ecommerce", ["products", "isShoppingCartOpen", "isCheckoutLoading", "shoppingCartItems", "variantsQuantity"]),
            ...qt(["siteId"]),
            ...qt("ecommerce", ["quantifiedCartItemsList"]),
            currentPageEcommerceElements() {
                return [...this.currentPageEcommerceBlocks, ...this.currentPageEcommerceComponents]
            },
            productIds() {
                const t = this.currentPageEcommerceElements.reduce((n, r) => {
                    let o = [];
                    const a = new URLSearchParams(window.location.search),
                        i = Number.parseInt(a.get("store-page"), 10) || 1;
                    switch (r.type) {
                        case "BlockEcommerceProductList":
                            o = [...o, ...r.productIds.slice(0, r.productsPerPage * i)];
                            break;
                        case "BlockEcommerceProduct":
                            o = [...o, r.product ? .id];
                            break;
                        case "GridEcommerceButton":
                            o = [...o, r.settings ? .productId];
                            break
                    }
                    return [...n, ...o]
                }, []).filter(n => n !== -1);
                return [...new Set(t)]
            }
        },
        watch: {
            currentPageEcommerceElements: {
                async handler(e, t) {
                    JSON.stringify(e) !== JSON.stringify(t) && await this.loadProducts()
                }
            }
        },
        mounted() {
            this.loadProducts()
        },
        methods: { ...An("ecommerce", ["getProducts", "setShoppingCartOpen", "setShoppingCartItems", "setIsCheckoutLoading"]),
            async loadProducts() {
                await this.getProducts(this.productIds)
            },
            async initCheckout() {
                if (mn()) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                this.isCheckoutLoading || (this.setIsCheckoutLoading(!0), await this.initiateCheckout(this.shoppingCartItems).then(() => {
                    this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1)
                }))
            }
        }
    });

function vk(e, t, n, r, o, a) {
    const i = oe("EcommerceShoppingCart"),
        s = De("qa");
    return ee((u(), N(i, {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: t[0] || (t[0] = l => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems
    }, null, 8, ["is-shopping-cart-open", "is-loading", "header-height", "is-header-sticky", "is-nav-hidden", "translations", "language", "site-id", "quantified-cart-items-list", "products", "shopping-cart-items", "variants-quantity", "onCheckoutButtonClick", "onSetShoppingCartItems"])), [
        [s, "user-section-zyroecommerceshoppingcart"]
    ])
}
const bk = J(yk, [
        ["render", vk]
    ]),
    _k = Z({
        components: {
            CloseButton: al
        },
        props: {
            backgroundColor: {
                type: String,
                default: "var(--color-light)"
            },
            padding: {
                type: String,
                default: "16px"
            },
            width: {
                type: String,
                default: "auto"
            },
            maxWidth: {
                type: String,
                default: "unset"
            },
            overflow: {
                type: String,
                default: "unset"
            },
            height: {
                type: String,
                default: "auto"
            }
        },
        setup() {
            const {
                closeEcommerceModal: e
            } = St();
            return {
                closeEcommerceModal: e
            }
        },
        computed: {
            modalStyle() {
                return {
                    "--modal-background-color": this.backgroundColor,
                    "--padding": this.padding,
                    "--width": this.width,
                    "--max-width": this.maxWidth,
                    "--overflow": this.overflow,
                    "--height": this.height
                }
            }
        },
        mounted() {
            this.$refs.modal ? .focus()
        },
        methods: {
            handleCloseModalAction() {
                this.closeEcommerceModal();
                const e = new URLSearchParams(window.location.search);
                if (!e.get("open-modal")) return;
                e.delete("open-modal"), e.delete("product");
                const t = e.toString();
                t && window.history.pushState(null, null, `?${t}`)
            }
        }
    }),
    wk = {
        class: "modal-wrapper"
    };

function kk(e, t, n, r, o, a) {
    const i = oe("CloseButton");
    return u(), N(gt, {
        name: "fade"
    }, {
        default: le(() => [b("div", wk, [b("div", {
            tabindex: "-1",
            class: "modal-backdrop",
            onClick: t[0] || (t[0] = (...s) => e.handleCloseModalAction && e.handleCloseModalAction(...s))
        }), b("div", {
            ref: "modal",
            style: Oe(e.modalStyle),
            class: "modal",
            tabindex: "0",
            "aria-modal": "true",
            onKeydown: t[1] || (t[1] = Se((...s) => e.handleCloseModalAction && e.handleCloseModalAction(...s), ["esc"]))
        }, [be(i, {
            class: "modal__close-button",
            onClick: e.handleCloseModalAction
        }, null, 8, ["onClick"]), ae(e.$slots, "default", {}, void 0, !0)], 36)])]),
        _: 3
    })
}
const Nn = J(_k, [
        ["render", kk],
        ["__scopeId", "data-v-88c5dcbc"]
    ]),
    Sk = {
        __name: "EcommerceProductPreview",
        props: {
            translations: {
                type: Object,
                default: () => {}
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: t
        }) {
            t();
            const n = e,
                {
                    getters: r
                } = Xe(),
                {
                    productPreviewData: o
                } = St(),
                a = c(() => Qe(o.value.background.origin, o.value.background.path, r.siteId, {
                    width: Qt
                })),
                i = c(() => pn(o.value.background.origin, o.value.background.path, r.siteId, {
                    isMobileFullScreen: !1
                })),
                s = c(() => r["ecommerce/productPages"]),
                l = {
                    props: n,
                    getters: r,
                    productPreviewData: o,
                    backgroundSrc: a,
                    backgroundSrcSet: i,
                    productPages: s,
                    BlockBackground: Bd,
                    ModalLayout: Nn,
                    BlockEcommerceProductProviderUser: vf,
                    computed: c,
                    get useEcommerceModal() {
                        return St
                    },
                    get getFullWidthSrcset() {
                        return pn
                    },
                    get getOptimizedSrc() {
                        return Qe
                    },
                    get FULL_WIDTH() {
                        return Qt
                    },
                    get useStore() {
                        return Xe
                    }
                };
            return Object.defineProperty(l, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), l
        }
    },
    Pk = {
        class: "ecommerce-product-preview__content-wrapper"
    };

function Tk(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), N(r.ModalLayout, {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview"
    }, {
        default: le(() => [ee((u(), p("div", Pk, [r.productPreviewData.background ? (u(), N(r.BlockBackground, {
            key: 0,
            "overlay-opacity": r.productPreviewData.background["overlay-opacity"],
            type: r.productPreviewData.background.current,
            color: r.productPreviewData.background.color,
            src: r.backgroundSrc,
            srcset: r.backgroundSrcSet,
            "is-fixed": r.productPreviewData.attachment === "fixed",
            alt: r.productPreviewData.background && r.productPreviewData.background.alt,
            class: "ecommerce-product-preview__background"
        }, null, 8, ["overlay-opacity", "type", "color", "src", "srcset", "is-fixed", "alt"])) : _("", !0), be(r.BlockEcommerceProductProviderUser, {
            class: "ecommerce-product-preview__content",
            "is-quick-preview": n.isQuickPreview,
            data: r.productPreviewData,
            "product-pages": r.productPages,
            "is-cart-visible": n.isCartVisible,
            "ecommerce-translations": n.translations
        }, null, 8, ["is-quick-preview", "data", "product-pages", "is-cart-visible", "ecommerce-translations"])])), [
            [i, "productpreview-modal"]
        ])]),
        _: 1
    }, 512)
}
const Ck = J(Sk, [
    ["render", Tk],
    ["__scopeId", "data-v-edec12d9"]
]);

function ge(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}

function de(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}

function Or(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Or = function(n) {
        return typeof n
    } : Or = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Or(e)
}

function ye(e) {
    de(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || Or(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN))
}

function zt(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n)
}

function At(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    if (isNaN(r)) return new Date(NaN);
    if (!r) return n;
    var o = n.getDate(),
        a = new Date(n.getTime());
    a.setMonth(n.getMonth() + r + 1, 0);
    var i = a.getDate();
    return o >= i ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n)
}

function Ir(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ir = function(n) {
        return typeof n
    } : Ir = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ir(e)
}

function Sf(e, t) {
    if (de(2, arguments), !t || Ir(t) !== "object") return new Date(NaN);
    var n = t.years ? ge(t.years) : 0,
        r = t.months ? ge(t.months) : 0,
        o = t.weeks ? ge(t.weeks) : 0,
        a = t.days ? ge(t.days) : 0,
        i = t.hours ? ge(t.hours) : 0,
        s = t.minutes ? ge(t.minutes) : 0,
        l = t.seconds ? ge(t.seconds) : 0,
        d = ye(e),
        y = r || n ? At(d, r + n * 12) : d,
        m = a || o ? zt(y, a + o * 7) : y,
        f = s + i * 60,
        h = l + f * 60,
        v = h * 1e3,
        k = new Date(m.getTime() + v);
    return k
}

function Ok(e, t) {
    de(2, arguments);
    var n = ye(e).getTime(),
        r = ge(t);
    return new Date(n + r)
}
var Ik = {};

function Xt() {
    return Ik
}

function Si(e, t) {
    var n, r, o, a, i, s, l, d;
    de(1, arguments);
    var y = Xt(),
        m = ge((n = (r = (o = (a = t ? .weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = ye(e),
        h = f.getDay(),
        v = (h < m ? 7 : 0) + h - m;
    return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f
}

function _o(e) {
    return de(1, arguments), Si(e, {
        weekStartsOn: 1
    })
}

function $k(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getFullYear(),
        r = new Date(0);
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
    var o = _o(r),
        a = new Date(0);
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
    var i = _o(a);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}

function Ek(e) {
    de(1, arguments);
    var t = $k(e),
        n = new Date(0);
    n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
    var r = _o(n);
    return r
}

function wo(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
}

function qu(e) {
    de(1, arguments);
    var t = ye(e);
    return t.setHours(0, 0, 0, 0), t
}
var Dk = 864e5;

function Lk(e, t) {
    de(2, arguments);
    var n = qu(e),
        r = qu(t),
        o = n.getTime() - wo(n),
        a = r.getTime() - wo(r);
    return Math.round((o - a) / Dk)
}

function Pf(e, t) {
    de(2, arguments);
    var n = ge(t);
    return At(e, n * 12)
}
var il = 6e4,
    sl = 36e5,
    Mk = 1e3;

function $r(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $r = function(n) {
        return typeof n
    } : $r = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, $r(e)
}

function Tf(e) {
    return de(1, arguments), e instanceof Date || $r(e) === "object" && Object.prototype.toString.call(e) === "[object Date]"
}

function Jn(e) {
    if (de(1, arguments), !Tf(e) && typeof e != "number") return !1;
    var t = ye(e);
    return !isNaN(Number(t))
}

function ju(e, t) {
    var n;
    de(1, arguments);
    var r = e || {},
        o = ye(r.start),
        a = ye(r.end),
        i = a.getTime();
    if (!(o.getTime() <= i)) throw new RangeError("Invalid interval");
    var s = [],
        l = o;
    l.setHours(0, 0, 0, 0);
    var d = Number((n = t ? .step) !== null && n !== void 0 ? n : 1);
    if (d < 1 || isNaN(d)) throw new RangeError("`options.step` must be a number greater than 1");
    for (; l.getTime() <= i;) s.push(ye(l)), l.setDate(l.getDate() + d), l.setHours(0, 0, 0, 0);
    return s
}

function Bk(e, t) {
    var n, r, o, a, i, s, l, d;
    de(1, arguments);
    var y = Xt(),
        m = ge((n = (r = (o = (a = t ? .weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = ye(e),
        h = f.getDay(),
        v = (h < m ? -7 : 0) + 6 - (h - m);
    return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f
}

function Cf(e, t) {
    de(2, arguments);
    var n = ge(t);
    return Ok(e, -n)
}
var Ak = 864e5;

function Rk(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getTime();
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    var r = t.getTime(),
        o = n - r;
    return Math.floor(o / Ak) + 1
}

function Mn(e) {
    de(1, arguments);
    var t = 1,
        n = ye(e),
        r = n.getUTCDay(),
        o = (r < t ? 7 : 0) + r - t;
    return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
}

function Of(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getUTCFullYear(),
        r = new Date(0);
    r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var o = Mn(r),
        a = new Date(0);
    a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var i = Mn(a);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}

function Nk(e) {
    de(1, arguments);
    var t = Of(e),
        n = new Date(0);
    n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
    var r = Mn(n);
    return r
}
var Hk = 6048e5;

function If(e) {
    de(1, arguments);
    var t = ye(e),
        n = Mn(t).getTime() - Nk(t).getTime();
    return Math.round(n / Hk) + 1
}

function hn(e, t) {
    var n, r, o, a, i, s, l, d;
    de(1, arguments);
    var y = Xt(),
        m = ge((n = (r = (o = (a = t ? .weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = ye(e),
        h = f.getUTCDay(),
        v = (h < m ? 7 : 0) + h - m;
    return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f
}

function ll(e, t) {
    var n, r, o, a, i, s, l, d;
    de(1, arguments);
    var y = ye(e),
        m = y.getUTCFullYear(),
        f = Xt(),
        h = ge((n = (r = (o = (a = t ? .firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
    if (!(h >= 1 && h <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var v = new Date(0);
    v.setUTCFullYear(m + 1, 0, h), v.setUTCHours(0, 0, 0, 0);
    var k = hn(v, t),
        w = new Date(0);
    w.setUTCFullYear(m, 0, h), w.setUTCHours(0, 0, 0, 0);
    var C = hn(w, t);
    return y.getTime() >= k.getTime() ? m + 1 : y.getTime() >= C.getTime() ? m : m - 1
}

function Uk(e, t) {
    var n, r, o, a, i, s, l, d;
    de(1, arguments);
    var y = Xt(),
        m = ge((n = (r = (o = (a = t ? .firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = y.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1),
        f = ll(e, t),
        h = new Date(0);
    h.setUTCFullYear(f, 0, m), h.setUTCHours(0, 0, 0, 0);
    var v = hn(h, t);
    return v
}
var Vk = 6048e5;

function $f(e, t) {
    de(1, arguments);
    var n = ye(e),
        r = hn(n, t).getTime() - Uk(n, t).getTime();
    return Math.round(r / Vk) + 1
}

function Le(e, t) {
    for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t;) r = "0" + r;
    return n + r
}
var qk = {
    y: function(t, n) {
        var r = t.getUTCFullYear(),
            o = r > 0 ? r : 1 - r;
        return Le(n === "yy" ? o % 100 : o, n.length)
    },
    M: function(t, n) {
        var r = t.getUTCMonth();
        return n === "M" ? String(r + 1) : Le(r + 1, 2)
    },
    d: function(t, n) {
        return Le(t.getUTCDate(), n.length)
    },
    a: function(t, n) {
        var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (n) {
            case "a":
            case "aa":
                return r.toUpperCase();
            case "aaa":
                return r;
            case "aaaaa":
                return r[0];
            case "aaaa":
            default:
                return r === "am" ? "a.m." : "p.m."
        }
    },
    h: function(t, n) {
        return Le(t.getUTCHours() % 12 || 12, n.length)
    },
    H: function(t, n) {
        return Le(t.getUTCHours(), n.length)
    },
    m: function(t, n) {
        return Le(t.getUTCMinutes(), n.length)
    },
    s: function(t, n) {
        return Le(t.getUTCSeconds(), n.length)
    },
    S: function(t, n) {
        var r = n.length,
            o = t.getUTCMilliseconds(),
            a = Math.floor(o * Math.pow(10, r - 3));
        return Le(a, n.length)
    }
};
const Ft = qk;
var Pn = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    jk = {
        G: function(t, n, r) {
            var o = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (n) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(o, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(o, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return r.era(o, {
                        width: "wide"
                    })
            }
        },
        y: function(t, n, r) {
            if (n === "yo") {
                var o = t.getUTCFullYear(),
                    a = o > 0 ? o : 1 - o;
                return r.ordinalNumber(a, {
                    unit: "year"
                })
            }
            return Ft.y(t, n)
        },
        Y: function(t, n, r, o) {
            var a = ll(t, o),
                i = a > 0 ? a : 1 - a;
            if (n === "YY") {
                var s = i % 100;
                return Le(s, 2)
            }
            return n === "Yo" ? r.ordinalNumber(i, {
                unit: "year"
            }) : Le(i, n.length)
        },
        R: function(t, n) {
            var r = Of(t);
            return Le(r, n.length)
        },
        u: function(t, n) {
            var r = t.getUTCFullYear();
            return Le(r, n.length)
        },
        Q: function(t, n, r) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (n) {
                case "Q":
                    return String(o);
                case "QQ":
                    return Le(o, 2);
                case "Qo":
                    return r.ordinalNumber(o, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(o, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return r.quarter(o, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(t, n, r) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (n) {
                case "q":
                    return String(o);
                case "qq":
                    return Le(o, 2);
                case "qo":
                    return r.ordinalNumber(o, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(o, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return r.quarter(o, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(t, n, r) {
            var o = t.getUTCMonth();
            switch (n) {
                case "M":
                case "MM":
                    return Ft.M(t, n);
                case "Mo":
                    return r.ordinalNumber(o + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(o, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return r.month(o, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(t, n, r) {
            var o = t.getUTCMonth();
            switch (n) {
                case "L":
                    return String(o + 1);
                case "LL":
                    return Le(o + 1, 2);
                case "Lo":
                    return r.ordinalNumber(o + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(o, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return r.month(o, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(t, n, r, o) {
            var a = $f(t, o);
            return n === "wo" ? r.ordinalNumber(a, {
                unit: "week"
            }) : Le(a, n.length)
        },
        I: function(t, n, r) {
            var o = If(t);
            return n === "Io" ? r.ordinalNumber(o, {
                unit: "week"
            }) : Le(o, n.length)
        },
        d: function(t, n, r) {
            return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
                unit: "date"
            }) : Ft.d(t, n)
        },
        D: function(t, n, r) {
            var o = Rk(t);
            return n === "Do" ? r.ordinalNumber(o, {
                unit: "dayOfYear"
            }) : Le(o, n.length)
        },
        E: function(t, n, r) {
            var o = t.getUTCDay();
            switch (n) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(o, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return r.day(o, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(t, n, r, o) {
            var a = t.getUTCDay(),
                i = (a - o.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "e":
                    return String(i);
                case "ee":
                    return Le(i, 2);
                case "eo":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(t, n, r, o) {
            var a = t.getUTCDay(),
                i = (a - o.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "c":
                    return String(i);
                case "cc":
                    return Le(i, n.length);
                case "co":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(a, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return r.day(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(t, n, r) {
            var o = t.getUTCDay(),
                a = o === 0 ? 7 : o;
            switch (n) {
                case "i":
                    return String(a);
                case "ii":
                    return Le(a, n.length);
                case "io":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(o, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return r.day(o, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(t, n, r) {
            var o = t.getUTCHours(),
                a = o / 12 >= 1 ? "pm" : "am";
            switch (n) {
                case "a":
                case "aa":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(t, n, r) {
            var o = t.getUTCHours(),
                a;
            switch (o === 12 ? a = Pn.noon : o === 0 ? a = Pn.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
                case "b":
                case "bb":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(t, n, r) {
            var o = t.getUTCHours(),
                a;
            switch (o >= 17 ? a = Pn.evening : o >= 12 ? a = Pn.afternoon : o >= 4 ? a = Pn.morning : a = Pn.night, n) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return r.dayPeriod(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(t, n, r) {
            if (n === "ho") {
                var o = t.getUTCHours() % 12;
                return o === 0 && (o = 12), r.ordinalNumber(o, {
                    unit: "hour"
                })
            }
            return Ft.h(t, n)
        },
        H: function(t, n, r) {
            return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
                unit: "hour"
            }) : Ft.H(t, n)
        },
        K: function(t, n, r) {
            var o = t.getUTCHours() % 12;
            return n === "Ko" ? r.ordinalNumber(o, {
                unit: "hour"
            }) : Le(o, n.length)
        },
        k: function(t, n, r) {
            var o = t.getUTCHours();
            return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
                unit: "hour"
            }) : Le(o, n.length)
        },
        m: function(t, n, r) {
            return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
                unit: "minute"
            }) : Ft.m(t, n)
        },
        s: function(t, n, r) {
            return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
                unit: "second"
            }) : Ft.s(t, n)
        },
        S: function(t, n) {
            return Ft.S(t, n)
        },
        X: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = a.getTimezoneOffset();
            if (i === 0) return "Z";
            switch (n) {
                case "X":
                    return Wu(i);
                case "XXXX":
                case "XX":
                    return ln(i);
                case "XXXXX":
                case "XXX":
                default:
                    return ln(i, ":")
            }
        },
        x: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = a.getTimezoneOffset();
            switch (n) {
                case "x":
                    return Wu(i);
                case "xxxx":
                case "xx":
                    return ln(i);
                case "xxxxx":
                case "xxx":
                default:
                    return ln(i, ":")
            }
        },
        O: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = a.getTimezoneOffset();
            switch (n) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + xu(i, ":");
                case "OOOO":
                default:
                    return "GMT" + ln(i, ":")
            }
        },
        z: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = a.getTimezoneOffset();
            switch (n) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + xu(i, ":");
                case "zzzz":
                default:
                    return "GMT" + ln(i, ":")
            }
        },
        t: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = Math.floor(a.getTime() / 1e3);
            return Le(i, n.length)
        },
        T: function(t, n, r, o) {
            var a = o._originalDate || t,
                i = a.getTime();
            return Le(i, n.length)
        }
    };

function xu(e, t) {
    var n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        o = Math.floor(r / 60),
        a = r % 60;
    if (a === 0) return n + String(o);
    var i = t || "";
    return n + String(o) + i + Le(a, 2)
}

function Wu(e, t) {
    if (e % 60 === 0) {
        var n = e > 0 ? "-" : "+";
        return n + Le(Math.abs(e) / 60, 2)
    }
    return ln(e, t)
}

function ln(e, t) {
    var n = t || "",
        r = e > 0 ? "-" : "+",
        o = Math.abs(e),
        a = Le(Math.floor(o / 60), 2),
        i = Le(o % 60, 2);
    return r + a + n + i
}
const xk = jk;
var Gu = function(t, n) {
        switch (t) {
            case "P":
                return n.date({
                    width: "short"
                });
            case "PP":
                return n.date({
                    width: "medium"
                });
            case "PPP":
                return n.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return n.date({
                    width: "full"
                })
        }
    },
    Ef = function(t, n) {
        switch (t) {
            case "p":
                return n.time({
                    width: "short"
                });
            case "pp":
                return n.time({
                    width: "medium"
                });
            case "ppp":
                return n.time({
                    width: "long"
                });
            case "pppp":
            default:
                return n.time({
                    width: "full"
                })
        }
    },
    Wk = function(t, n) {
        var r = t.match(/(P+)(p+)?/) || [],
            o = r[1],
            a = r[2];
        if (!a) return Gu(t, n);
        var i;
        switch (o) {
            case "P":
                i = n.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                i = n.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                i = n.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                i = n.dateTime({
                    width: "full"
                });
                break
        }
        return i.replace("{{date}}", Gu(o, n)).replace("{{time}}", Ef(a, n))
    },
    Gk = {
        p: Ef,
        P: Wk
    };
const Pi = Gk;
var Yk = ["D", "DD"],
    Fk = ["YY", "YYYY"];

function Df(e) {
    return Yk.indexOf(e) !== -1
}

function Lf(e) {
    return Fk.indexOf(e) !== -1
}

function ko(e, t, n) {
    if (e === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var zk = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    Kk = function(t, n, r) {
        var o, a = zk[t];
        return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o
    };
const Qk = Kk;

function Fa(e) {
    return function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = t.width ? String(t.width) : e.defaultWidth,
            r = e.formats[n] || e.formats[e.defaultWidth];
        return r
    }
}
var Xk = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    Jk = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    Zk = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    eS = {
        date: Fa({
            formats: Xk,
            defaultWidth: "full"
        }),
        time: Fa({
            formats: Jk,
            defaultWidth: "full"
        }),
        dateTime: Fa({
            formats: Zk,
            defaultWidth: "full"
        })
    };
const tS = eS;
var nS = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    rS = function(t, n, r, o) {
        return nS[t]
    };
const oS = rS;

function Gn(e) {
    return function(t, n) {
        var r = n != null && n.context ? String(n.context) : "standalone",
            o;
        if (r === "formatting" && e.formattingValues) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
                i = n != null && n.width ? String(n.width) : a;
            o = e.formattingValues[i] || e.formattingValues[a]
        } else {
            var s = e.defaultWidth,
                l = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[l] || e.values[s]
        }
        var d = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[d]
    }
}
var aS = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    iS = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    sS = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    lS = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    uS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    cS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    dS = function(t, n) {
        var r = Number(t),
            o = r % 100;
        if (o > 20 || o < 10) switch (o % 10) {
            case 1:
                return r + "st";
            case 2:
                return r + "nd";
            case 3:
                return r + "rd"
        }
        return r + "th"
    },
    fS = {
        ordinalNumber: dS,
        era: Gn({
            values: aS,
            defaultWidth: "wide"
        }),
        quarter: Gn({
            values: iS,
            defaultWidth: "wide",
            argumentCallback: function(t) {
                return t - 1
            }
        }),
        month: Gn({
            values: sS,
            defaultWidth: "wide"
        }),
        day: Gn({
            values: lS,
            defaultWidth: "wide"
        }),
        dayPeriod: Gn({
            values: uS,
            defaultWidth: "wide",
            formattingValues: cS,
            defaultFormattingWidth: "wide"
        })
    };
const mS = fS;

function Yn(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = n.width,
            o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o);
        if (!a) return null;
        var i = a[0],
            s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(s) ? hS(s, function(m) {
                return m.test(i)
            }) : pS(s, function(m) {
                return m.test(i)
            }),
            d;
        d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? n.valueCallback(d) : d;
        var y = t.slice(i.length);
        return {
            value: d,
            rest: y
        }
    }
}

function pS(e, t) {
    for (var n in e)
        if (e.hasOwnProperty(n) && t(e[n])) return n
}

function hS(e, t) {
    for (var n = 0; n < e.length; n++)
        if (t(e[n])) return n
}

function gS(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = t.match(e.matchPattern);
        if (!r) return null;
        var o = r[0],
            a = t.match(e.parsePattern);
        if (!a) return null;
        var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        i = n.valueCallback ? n.valueCallback(i) : i;
        var s = t.slice(o.length);
        return {
            value: i,
            rest: s
        }
    }
}
var yS = /^(\d+)(th|st|nd|rd)?/i,
    vS = /\d+/i,
    bS = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    _S = {
        any: [/^b/i, /^(a|c)/i]
    },
    wS = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    kS = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    SS = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    PS = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    TS = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    CS = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    OS = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    IS = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    $S = {
        ordinalNumber: gS({
            matchPattern: yS,
            parsePattern: vS,
            valueCallback: function(t) {
                return parseInt(t, 10)
            }
        }),
        era: Yn({
            matchPatterns: bS,
            defaultMatchWidth: "wide",
            parsePatterns: _S,
            defaultParseWidth: "any"
        }),
        quarter: Yn({
            matchPatterns: wS,
            defaultMatchWidth: "wide",
            parsePatterns: kS,
            defaultParseWidth: "any",
            valueCallback: function(t) {
                return t + 1
            }
        }),
        month: Yn({
            matchPatterns: SS,
            defaultMatchWidth: "wide",
            parsePatterns: PS,
            defaultParseWidth: "any"
        }),
        day: Yn({
            matchPatterns: TS,
            defaultMatchWidth: "wide",
            parsePatterns: CS,
            defaultParseWidth: "any"
        }),
        dayPeriod: Yn({
            matchPatterns: OS,
            defaultMatchWidth: "any",
            parsePatterns: IS,
            defaultParseWidth: "any"
        })
    };
const ES = $S;
var DS = {
    code: "en-US",
    formatDistance: Qk,
    formatLong: tS,
    formatRelative: oS,
    localize: mS,
    match: ES,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
const Mf = DS;
var LS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    MS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    BS = /^'([^]*?)'?$/,
    AS = /''/g,
    RS = /[a-zA-Z]/;

function Zn(e, t, n) {
    var r, o, a, i, s, l, d, y, m, f, h, v, k, w, C, L, I, R;
    de(2, arguments);
    var W = String(t),
        $ = Xt(),
        E = (r = (o = n ? .locale) !== null && o !== void 0 ? o : $.locale) !== null && r !== void 0 ? r : Mf,
        H = ge((a = (i = (s = (l = n ? .firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (d = n.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && s !== void 0 ? s : $.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = $.locale) === null || m === void 0 || (f = m.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
    if (!(H >= 1 && H <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var X = ge((h = (v = (k = (w = n ? .weekStartsOn) !== null && w !== void 0 ? w : n == null || (C = n.locale) === null || C === void 0 || (L = C.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && k !== void 0 ? k : $.weekStartsOn) !== null && v !== void 0 ? v : (I = $.locale) === null || I === void 0 || (R = I.options) === null || R === void 0 ? void 0 : R.weekStartsOn) !== null && h !== void 0 ? h : 0);
    if (!(X >= 0 && X <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!E.localize) throw new RangeError("locale must contain localize property");
    if (!E.formatLong) throw new RangeError("locale must contain formatLong property");
    var re = ye(e);
    if (!Jn(re)) throw new RangeError("Invalid time value");
    var Y = wo(re),
        ne = Cf(re, Y),
        A = {
            firstWeekContainsDate: H,
            weekStartsOn: X,
            locale: E,
            _originalDate: re
        },
        S = W.match(MS).map(function(U) {
            var V = U[0];
            if (V === "p" || V === "P") {
                var g = Pi[V];
                return g(U, E.formatLong)
            }
            return U
        }).join("").match(LS).map(function(U) {
            if (U === "''") return "'";
            var V = U[0];
            if (V === "'") return NS(U);
            var g = xk[V];
            if (g) return !(n != null && n.useAdditionalWeekYearTokens) && Lf(U) && ko(U, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Df(U) && ko(U, t, String(e)), g(ne, U, E.localize, A);
            if (V.match(RS)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + V + "`");
            return U
        }).join("");
    return S
}

function NS(e) {
    var t = e.match(BS);
    return t ? t[1].replace(AS, "'") : e
}

function HS(e, t) {
    if (e == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e
}

function US(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getDay();
    return n
}

function VS(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0);
    return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
}

function Ut(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getHours();
    return n
}
var qS = 6048e5;

function jS(e) {
    de(1, arguments);
    var t = ye(e),
        n = _o(t).getTime() - Ek(t).getTime();
    return Math.round(n / qS) + 1
}

function Vt(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getMinutes();
    return n
}

function Ve(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getMonth();
    return n
}

function Bn(e) {
    de(1, arguments);
    var t = ye(e),
        n = t.getSeconds();
    return n
}

function qe(e) {
    return de(1, arguments), ye(e).getFullYear()
}

function ul(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ye(t);
    return n.getTime() > r.getTime()
}

function cl(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ye(t);
    return n.getTime() < r.getTime()
}

function Bf(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ye(t);
    return n.getTime() === r.getTime()
}

function Er(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Er = function(n) {
        return typeof n
    } : Er = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Er(e)
}

function Af(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ti(e, t)
}

function Ti(e, t) {
    return Ti = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ti(e, t)
}

function Rf(e) {
    var t = WS();
    return function() {
        var r = So(e),
            o;
        if (t) {
            var a = So(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return xS(this, o)
    }
}

function xS(e, t) {
    return t && (Er(t) === "object" || typeof t == "function") ? t : Ci(e)
}

function Ci(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function WS() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function So(e) {
    return So = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, So(e)
}

function dl(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Yu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function fl(e, t, n) {
    return t && Yu(e.prototype, t), n && Yu(e, n), e
}

function Oi(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var GS = 10,
    Nf = function() {
        function e() {
            dl(this, e), Oi(this, "subPriority", 0)
        }
        return fl(e, [{
            key: "validate",
            value: function(n, r) {
                return !0
            }
        }]), e
    }(),
    YS = function(e) {
        Af(n, e);
        var t = Rf(n);

        function n(r, o, a, i, s) {
            var l;
            return dl(this, n), l = t.call(this), l.value = r, l.validateValue = o, l.setValue = a, l.priority = i, s && (l.subPriority = s), l
        }
        return fl(n, [{
            key: "validate",
            value: function(o, a) {
                return this.validateValue(o, this.value, a)
            }
        }, {
            key: "set",
            value: function(o, a, i) {
                return this.setValue(o, a, this.value, i)
            }
        }]), n
    }(Nf),
    FS = function(e) {
        Af(n, e);
        var t = Rf(n);

        function n() {
            var r;
            dl(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = t.call.apply(t, [this].concat(a)), Oi(Ci(r), "priority", GS), Oi(Ci(r), "subPriority", -1), r
        }
        return fl(n, [{
            key: "set",
            value: function(o, a) {
                if (a.timestampIsSet) return o;
                var i = new Date(0);
                return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i
            }
        }]), n
    }(Nf);

function zS(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Fu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function KS(e, t, n) {
    return t && Fu(e.prototype, t), n && Fu(e, n), e
}
var Ee = function() {
    function e() {
        zS(this, e)
    }
    return KS(e, [{
        key: "run",
        value: function(n, r, o, a) {
            var i = this.parse(n, r, o, a);
            return i ? {
                setter: new YS(i.value, this.validate, this.set, this.priority, this.subPriority),
                rest: i.rest
            } : null
        }
    }, {
        key: "validate",
        value: function(n, r, o) {
            return !0
        }
    }]), e
}();

function Dr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dr = function(n) {
        return typeof n
    } : Dr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Dr(e)
}

function QS(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function zu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function XS(e, t, n) {
    return t && zu(e.prototype, t), n && zu(e, n), e
}

function JS(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ii(e, t)
}

function Ii(e, t) {
    return Ii = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ii(e, t)
}

function ZS(e) {
    var t = tP();
    return function() {
        var r = Po(e),
            o;
        if (t) {
            var a = Po(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return eP(this, o)
    }
}

function eP(e, t) {
    return t && (Dr(t) === "object" || typeof t == "function") ? t : $i(e)
}

function $i(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function tP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Po(e) {
    return Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Po(e)
}

function Ku(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var nP = function(e) {
        JS(n, e);
        var t = ZS(n);

        function n() {
            var r;
            QS(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = t.call.apply(t, [this].concat(a)), Ku($i(r), "priority", 140), Ku($i(r), "incompatibleTokens", ["R", "u", "t", "T"]), r
        }
        return XS(n, [{
            key: "parse",
            value: function(o, a, i) {
                switch (a) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return i.era(o, {
                            width: "abbreviated"
                        }) || i.era(o, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return i.era(o, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return i.era(o, {
                            width: "wide"
                        }) || i.era(o, {
                            width: "abbreviated"
                        }) || i.era(o, {
                            width: "narrow"
                        })
                }
            }
        }, {
            key: "set",
            value: function(o, a, i) {
                return a.era = i, o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o
            }
        }]), n
    }(Ee),
    ze = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
    },
    Lt = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

function Ke(e, t) {
    return e && {
        value: t(e.value),
        rest: e.rest
    }
}

function We(e, t) {
    var n = t.match(e);
    return n ? {
        value: parseInt(n[0], 10),
        rest: t.slice(n[0].length)
    } : null
}

function Mt(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if (n[0] === "Z") return {
        value: 0,
        rest: t.slice(1)
    };
    var r = n[1] === "+" ? 1 : -1,
        o = n[2] ? parseInt(n[2], 10) : 0,
        a = n[3] ? parseInt(n[3], 10) : 0,
        i = n[5] ? parseInt(n[5], 10) : 0;
    return {
        value: r * (o * sl + a * il + i * Mk),
        rest: t.slice(n[0].length)
    }
}

function Hf(e) {
    return We(ze.anyDigitsSigned, e)
}

function Ye(e, t) {
    switch (e) {
        case 1:
            return We(ze.singleDigit, t);
        case 2:
            return We(ze.twoDigits, t);
        case 3:
            return We(ze.threeDigits, t);
        case 4:
            return We(ze.fourDigits, t);
        default:
            return We(new RegExp("^\\d{1," + e + "}"), t)
    }
}

function To(e, t) {
    switch (e) {
        case 1:
            return We(ze.singleDigitSigned, t);
        case 2:
            return We(ze.twoDigitsSigned, t);
        case 3:
            return We(ze.threeDigitsSigned, t);
        case 4:
            return We(ze.fourDigitsSigned, t);
        default:
            return We(new RegExp("^-?\\d{1," + e + "}"), t)
    }
}

function ml(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0
    }
}

function Uf(e, t) {
    var n = t > 0,
        r = n ? t : 1 - t,
        o;
    if (r <= 50) o = e || 100;
    else {
        var a = r + 50,
            i = Math.floor(a / 100) * 100,
            s = e >= a % 100;
        o = e + i - (s ? 100 : 0)
    }
    return n ? o : 1 - o
}

function Vf(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function Lr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lr = function(n) {
        return typeof n
    } : Lr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Lr(e)
}

function rP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Qu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function oP(e, t, n) {
    return t && Qu(e.prototype, t), n && Qu(e, n), e
}

function aP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ei(e, t)
}

function Ei(e, t) {
    return Ei = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ei(e, t)
}

function iP(e) {
    var t = lP();
    return function() {
        var r = Co(e),
            o;
        if (t) {
            var a = Co(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return sP(this, o)
    }
}

function sP(e, t) {
    return t && (Lr(t) === "object" || typeof t == "function") ? t : Di(e)
}

function Di(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function lP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Co(e) {
    return Co = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Co(e)
}

function Xu(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var uP = function(e) {
    aP(n, e);
    var t = iP(n);

    function n() {
        var r;
        rP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Xu(Di(r), "priority", 130), Xu(Di(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r
    }
    return oP(n, [{
        key: "parse",
        value: function(o, a, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: a === "yy"
                }
            };
            switch (a) {
                case "y":
                    return Ke(Ye(4, o), s);
                case "yo":
                    return Ke(i.ordinalNumber(o, {
                        unit: "year"
                    }), s);
                default:
                    return Ke(Ye(a.length, o), s)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a.isTwoDigitYear || a.year > 0
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            var s = o.getUTCFullYear();
            if (i.isTwoDigitYear) {
                var l = Uf(i.year, s);
                return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o
            }
            var d = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
            return o.setUTCFullYear(d, 0, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Mr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mr = function(n) {
        return typeof n
    } : Mr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Mr(e)
}

function cP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ju(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function dP(e, t, n) {
    return t && Ju(e.prototype, t), n && Ju(e, n), e
}

function fP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Li(e, t)
}

function Li(e, t) {
    return Li = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Li(e, t)
}

function mP(e) {
    var t = hP();
    return function() {
        var r = Oo(e),
            o;
        if (t) {
            var a = Oo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return pP(this, o)
    }
}

function pP(e, t) {
    return t && (Mr(t) === "object" || typeof t == "function") ? t : Mi(e)
}

function Mi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function hP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Oo(e) {
    return Oo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Oo(e)
}

function Zu(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var gP = function(e) {
    fP(n, e);
    var t = mP(n);

    function n() {
        var r;
        cP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Zu(Mi(r), "priority", 130), Zu(Mi(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r
    }
    return dP(n, [{
        key: "parse",
        value: function(o, a, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: a === "YY"
                }
            };
            switch (a) {
                case "Y":
                    return Ke(Ye(4, o), s);
                case "Yo":
                    return Ke(i.ordinalNumber(o, {
                        unit: "year"
                    }), s);
                default:
                    return Ke(Ye(a.length, o), s)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a.isTwoDigitYear || a.year > 0
        }
    }, {
        key: "set",
        value: function(o, a, i, s) {
            var l = ll(o, s);
            if (i.isTwoDigitYear) {
                var d = Uf(i.year, l);
                return o.setUTCFullYear(d, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), hn(o, s)
            }
            var y = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
            return o.setUTCFullYear(y, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), hn(o, s)
        }
    }]), n
}(Ee);

function Br(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Br = function(n) {
        return typeof n
    } : Br = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Br(e)
}

function yP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ec(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function vP(e, t, n) {
    return t && ec(e.prototype, t), n && ec(e, n), e
}

function bP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Bi(e, t)
}

function Bi(e, t) {
    return Bi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Bi(e, t)
}

function _P(e) {
    var t = kP();
    return function() {
        var r = Io(e),
            o;
        if (t) {
            var a = Io(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return wP(this, o)
    }
}

function wP(e, t) {
    return t && (Br(t) === "object" || typeof t == "function") ? t : Ai(e)
}

function Ai(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function kP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Io(e) {
    return Io = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Io(e)
}

function tc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var SP = function(e) {
    bP(n, e);
    var t = _P(n);

    function n() {
        var r;
        yP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), tc(Ai(r), "priority", 130), tc(Ai(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r
    }
    return vP(n, [{
        key: "parse",
        value: function(o, a) {
            return To(a === "R" ? 4 : a.length, o)
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            var s = new Date(0);
            return s.setUTCFullYear(i, 0, 4), s.setUTCHours(0, 0, 0, 0), Mn(s)
        }
    }]), n
}(Ee);

function Ar(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ar = function(n) {
        return typeof n
    } : Ar = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ar(e)
}

function PP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function nc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function TP(e, t, n) {
    return t && nc(e.prototype, t), n && nc(e, n), e
}

function CP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ri(e, t)
}

function Ri(e, t) {
    return Ri = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ri(e, t)
}

function OP(e) {
    var t = $P();
    return function() {
        var r = $o(e),
            o;
        if (t) {
            var a = $o(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return IP(this, o)
    }
}

function IP(e, t) {
    return t && (Ar(t) === "object" || typeof t == "function") ? t : Ni(e)
}

function Ni(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function $P() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function $o(e) {
    return $o = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, $o(e)
}

function rc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var EP = function(e) {
    CP(n, e);
    var t = OP(n);

    function n() {
        var r;
        PP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), rc(Ni(r), "priority", 130), rc(Ni(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r
    }
    return TP(n, [{
        key: "parse",
        value: function(o, a) {
            return To(a === "u" ? 4 : a.length, o)
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Rr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rr = function(n) {
        return typeof n
    } : Rr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Rr(e)
}

function DP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function oc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function LP(e, t, n) {
    return t && oc(e.prototype, t), n && oc(e, n), e
}

function MP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Hi(e, t)
}

function Hi(e, t) {
    return Hi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Hi(e, t)
}

function BP(e) {
    var t = RP();
    return function() {
        var r = Eo(e),
            o;
        if (t) {
            var a = Eo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return AP(this, o)
    }
}

function AP(e, t) {
    return t && (Rr(t) === "object" || typeof t == "function") ? t : Ui(e)
}

function Ui(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function RP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Eo(e) {
    return Eo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Eo(e)
}

function ac(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var NP = function(e) {
    MP(n, e);
    var t = BP(n);

    function n() {
        var r;
        DP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), ac(Ui(r), "priority", 120), ac(Ui(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r
    }
    return LP(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "Q":
                case "QQ":
                    return Ye(a.length, o);
                case "Qo":
                    return i.ordinalNumber(o, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return i.quarter(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.quarter(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return i.quarter(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return i.quarter(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.quarter(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.quarter(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 4
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Nr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nr = function(n) {
        return typeof n
    } : Nr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Nr(e)
}

function HP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ic(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function UP(e, t, n) {
    return t && ic(e.prototype, t), n && ic(e, n), e
}

function VP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Vi(e, t)
}

function Vi(e, t) {
    return Vi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Vi(e, t)
}

function qP(e) {
    var t = xP();
    return function() {
        var r = Do(e),
            o;
        if (t) {
            var a = Do(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return jP(this, o)
    }
}

function jP(e, t) {
    return t && (Nr(t) === "object" || typeof t == "function") ? t : qi(e)
}

function qi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function xP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Do(e) {
    return Do = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Do(e)
}

function sc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var WP = function(e) {
    VP(n, e);
    var t = qP(n);

    function n() {
        var r;
        HP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), sc(qi(r), "priority", 120), sc(qi(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r
    }
    return UP(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "q":
                case "qq":
                    return Ye(a.length, o);
                case "qo":
                    return i.ordinalNumber(o, {
                        unit: "quarter"
                    });
                case "qqq":
                    return i.quarter(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.quarter(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqqq":
                    return i.quarter(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return i.quarter(o, {
                        width: "wide",
                        context: "standalone"
                    }) || i.quarter(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.quarter(o, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 4
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Hr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hr = function(n) {
        return typeof n
    } : Hr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Hr(e)
}

function GP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function lc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function YP(e, t, n) {
    return t && lc(e.prototype, t), n && lc(e, n), e
}

function FP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ji(e, t)
}

function ji(e, t) {
    return ji = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, ji(e, t)
}

function zP(e) {
    var t = QP();
    return function() {
        var r = Lo(e),
            o;
        if (t) {
            var a = Lo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return KP(this, o)
    }
}

function KP(e, t) {
    return t && (Hr(t) === "object" || typeof t == "function") ? t : xi(e)
}

function xi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function QP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Lo(e) {
    return Lo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Lo(e)
}

function uc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var XP = function(e) {
    FP(n, e);
    var t = zP(n);

    function n() {
        var r;
        GP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), uc(xi(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), uc(xi(r), "priority", 110), r
    }
    return YP(n, [{
        key: "parse",
        value: function(o, a, i) {
            var s = function(d) {
                return d - 1
            };
            switch (a) {
                case "M":
                    return Ke(We(ze.month, o), s);
                case "MM":
                    return Ke(Ye(2, o), s);
                case "Mo":
                    return Ke(i.ordinalNumber(o, {
                        unit: "month"
                    }), s);
                case "MMM":
                    return i.month(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.month(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMMM":
                    return i.month(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return i.month(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.month(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.month(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 11
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Ur(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ur = function(n) {
        return typeof n
    } : Ur = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ur(e)
}

function JP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function cc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function ZP(e, t, n) {
    return t && cc(e.prototype, t), n && cc(e, n), e
}

function eT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Wi(e, t)
}

function Wi(e, t) {
    return Wi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Wi(e, t)
}

function tT(e) {
    var t = rT();
    return function() {
        var r = Mo(e),
            o;
        if (t) {
            var a = Mo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return nT(this, o)
    }
}

function nT(e, t) {
    return t && (Ur(t) === "object" || typeof t == "function") ? t : Gi(e)
}

function Gi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function rT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Mo(e) {
    return Mo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Mo(e)
}

function dc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var oT = function(e) {
    eT(n, e);
    var t = tT(n);

    function n() {
        var r;
        JP(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), dc(Gi(r), "priority", 110), dc(Gi(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r
    }
    return ZP(n, [{
        key: "parse",
        value: function(o, a, i) {
            var s = function(d) {
                return d - 1
            };
            switch (a) {
                case "L":
                    return Ke(We(ze.month, o), s);
                case "LL":
                    return Ke(Ye(2, o), s);
                case "Lo":
                    return Ke(i.ordinalNumber(o, {
                        unit: "month"
                    }), s);
                case "LLL":
                    return i.month(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.month(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLLL":
                    return i.month(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return i.month(o, {
                        width: "wide",
                        context: "standalone"
                    }) || i.month(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.month(o, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 11
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function aT(e, t, n) {
    de(2, arguments);
    var r = ye(e),
        o = ge(t),
        a = $f(r, n) - o;
    return r.setUTCDate(r.getUTCDate() - a * 7), r
}

function Vr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vr = function(n) {
        return typeof n
    } : Vr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Vr(e)
}

function iT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function fc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function sT(e, t, n) {
    return t && fc(e.prototype, t), n && fc(e, n), e
}

function lT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Yi(e, t)
}

function Yi(e, t) {
    return Yi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Yi(e, t)
}

function uT(e) {
    var t = dT();
    return function() {
        var r = Bo(e),
            o;
        if (t) {
            var a = Bo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return cT(this, o)
    }
}

function cT(e, t) {
    return t && (Vr(t) === "object" || typeof t == "function") ? t : Fi(e)
}

function Fi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function dT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Bo(e) {
    return Bo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Bo(e)
}

function mc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var fT = function(e) {
    lT(n, e);
    var t = uT(n);

    function n() {
        var r;
        iT(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), mc(Fi(r), "priority", 100), mc(Fi(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r
    }
    return sT(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "w":
                    return We(ze.week, o);
                case "wo":
                    return i.ordinalNumber(o, {
                        unit: "week"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 53
        }
    }, {
        key: "set",
        value: function(o, a, i, s) {
            return hn(aT(o, i, s), s)
        }
    }]), n
}(Ee);

function mT(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t),
        o = If(n) - r;
    return n.setUTCDate(n.getUTCDate() - o * 7), n
}

function qr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qr = function(n) {
        return typeof n
    } : qr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, qr(e)
}

function pT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function pc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function hT(e, t, n) {
    return t && pc(e.prototype, t), n && pc(e, n), e
}

function gT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && zi(e, t)
}

function zi(e, t) {
    return zi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, zi(e, t)
}

function yT(e) {
    var t = bT();
    return function() {
        var r = Ao(e),
            o;
        if (t) {
            var a = Ao(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return vT(this, o)
    }
}

function vT(e, t) {
    return t && (qr(t) === "object" || typeof t == "function") ? t : Ki(e)
}

function Ki(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function bT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ao(e) {
    return Ao = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Ao(e)
}

function hc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var _T = function(e) {
    gT(n, e);
    var t = yT(n);

    function n() {
        var r;
        pT(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), hc(Ki(r), "priority", 100), hc(Ki(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r
    }
    return hT(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "I":
                    return We(ze.week, o);
                case "Io":
                    return i.ordinalNumber(o, {
                        unit: "week"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 53
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return Mn(mT(o, i))
        }
    }]), n
}(Ee);

function jr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jr = function(n) {
        return typeof n
    } : jr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, jr(e)
}

function wT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function gc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function kT(e, t, n) {
    return t && gc(e.prototype, t), n && gc(e, n), e
}

function ST(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Qi(e, t)
}

function Qi(e, t) {
    return Qi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Qi(e, t)
}

function PT(e) {
    var t = CT();
    return function() {
        var r = Ro(e),
            o;
        if (t) {
            var a = Ro(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return TT(this, o)
    }
}

function TT(e, t) {
    return t && (jr(t) === "object" || typeof t == "function") ? t : xr(e)
}

function xr(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function CT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ro(e) {
    return Ro = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Ro(e)
}

function za(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var OT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    IT = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    $T = function(e) {
        ST(n, e);
        var t = PT(n);

        function n() {
            var r;
            wT(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = t.call.apply(t, [this].concat(a)), za(xr(r), "priority", 90), za(xr(r), "subPriority", 1), za(xr(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r
        }
        return kT(n, [{
            key: "parse",
            value: function(o, a, i) {
                switch (a) {
                    case "d":
                        return We(ze.date, o);
                    case "do":
                        return i.ordinalNumber(o, {
                            unit: "date"
                        });
                    default:
                        return Ye(a.length, o)
                }
            }
        }, {
            key: "validate",
            value: function(o, a) {
                var i = o.getUTCFullYear(),
                    s = Vf(i),
                    l = o.getUTCMonth();
                return s ? a >= 1 && a <= IT[l] : a >= 1 && a <= OT[l]
            }
        }, {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCDate(i), o.setUTCHours(0, 0, 0, 0), o
            }
        }]), n
    }(Ee);

function Wr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wr = function(n) {
        return typeof n
    } : Wr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Wr(e)
}

function ET(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function yc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function DT(e, t, n) {
    return t && yc(e.prototype, t), n && yc(e, n), e
}

function LT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Xi(e, t)
}

function Xi(e, t) {
    return Xi = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Xi(e, t)
}

function MT(e) {
    var t = AT();
    return function() {
        var r = No(e),
            o;
        if (t) {
            var a = No(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return BT(this, o)
    }
}

function BT(e, t) {
    return t && (Wr(t) === "object" || typeof t == "function") ? t : Gr(e)
}

function Gr(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function AT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function No(e) {
    return No = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, No(e)
}

function Ka(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var RT = function(e) {
    LT(n, e);
    var t = MT(n);

    function n() {
        var r;
        ET(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Ka(Gr(r), "priority", 90), Ka(Gr(r), "subpriority", 1), Ka(Gr(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r
    }
    return DT(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "D":
                case "DD":
                    return We(ze.dayOfYear, o);
                case "Do":
                    return i.ordinalNumber(o, {
                        unit: "date"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            var i = o.getUTCFullYear(),
                s = Vf(i);
            return s ? a >= 1 && a <= 366 : a >= 1 && a <= 365
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMonth(0, i), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function pl(e, t, n) {
    var r, o, a, i, s, l, d, y;
    de(2, arguments);
    var m = Xt(),
        f = ge((r = (o = (a = (i = n ? .weekStartsOn) !== null && i !== void 0 ? i : n == null || (s = n.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && o !== void 0 ? o : (d = m.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(f >= 0 && f <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = ye(e),
        v = ge(t),
        k = h.getUTCDay(),
        w = v % 7,
        C = (w + 7) % 7,
        L = (C < f ? 7 : 0) + v - k;
    return h.setUTCDate(h.getUTCDate() + L), h
}

function Yr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yr = function(n) {
        return typeof n
    } : Yr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Yr(e)
}

function NT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function vc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function HT(e, t, n) {
    return t && vc(e.prototype, t), n && vc(e, n), e
}

function UT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ji(e, t)
}

function Ji(e, t) {
    return Ji = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ji(e, t)
}

function VT(e) {
    var t = jT();
    return function() {
        var r = Ho(e),
            o;
        if (t) {
            var a = Ho(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return qT(this, o)
    }
}

function qT(e, t) {
    return t && (Yr(t) === "object" || typeof t == "function") ? t : Zi(e)
}

function Zi(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function jT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ho(e) {
    return Ho = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Ho(e)
}

function bc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var xT = function(e) {
    UT(n, e);
    var t = VT(n);

    function n() {
        var r;
        NT(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), bc(Zi(r), "priority", 90), bc(Zi(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r
    }
    return HT(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "E":
                case "EE":
                case "EEE":
                    return i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEE":
                    return i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return i.day(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 6
        }
    }, {
        key: "set",
        value: function(o, a, i, s) {
            return o = pl(o, i, s), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Fr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fr = function(n) {
        return typeof n
    } : Fr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Fr(e)
}

function WT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _c(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function GT(e, t, n) {
    return t && _c(e.prototype, t), n && _c(e, n), e
}

function YT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && es(e, t)
}

function es(e, t) {
    return es = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, es(e, t)
}

function FT(e) {
    var t = KT();
    return function() {
        var r = Uo(e),
            o;
        if (t) {
            var a = Uo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return zT(this, o)
    }
}

function zT(e, t) {
    return t && (Fr(t) === "object" || typeof t == "function") ? t : ts(e)
}

function ts(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function KT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Uo(e) {
    return Uo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Uo(e)
}

function wc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var QT = function(e) {
    YT(n, e);
    var t = FT(n);

    function n() {
        var r;
        WT(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), wc(ts(r), "priority", 90), wc(ts(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r
    }
    return GT(n, [{
        key: "parse",
        value: function(o, a, i, s) {
            var l = function(y) {
                var m = Math.floor((y - 1) / 7) * 7;
                return (y + s.weekStartsOn + 6) % 7 + m
            };
            switch (a) {
                case "e":
                case "ee":
                    return Ke(Ye(a.length, o), l);
                case "eo":
                    return Ke(i.ordinalNumber(o, {
                        unit: "day"
                    }), l);
                case "eee":
                    return i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeee":
                    return i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return i.day(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 6
        }
    }, {
        key: "set",
        value: function(o, a, i, s) {
            return o = pl(o, i, s), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function zr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zr = function(n) {
        return typeof n
    } : zr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, zr(e)
}

function XT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function kc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function JT(e, t, n) {
    return t && kc(e.prototype, t), n && kc(e, n), e
}

function ZT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ns(e, t)
}

function ns(e, t) {
    return ns = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, ns(e, t)
}

function eC(e) {
    var t = nC();
    return function() {
        var r = Vo(e),
            o;
        if (t) {
            var a = Vo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return tC(this, o)
    }
}

function tC(e, t) {
    return t && (zr(t) === "object" || typeof t == "function") ? t : rs(e)
}

function rs(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function nC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Vo(e) {
    return Vo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Vo(e)
}

function Sc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var rC = function(e) {
    ZT(n, e);
    var t = eC(n);

    function n() {
        var r;
        XT(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Sc(rs(r), "priority", 90), Sc(rs(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r
    }
    return JT(n, [{
        key: "parse",
        value: function(o, a, i, s) {
            var l = function(y) {
                var m = Math.floor((y - 1) / 7) * 7;
                return (y + s.weekStartsOn + 6) % 7 + m
            };
            switch (a) {
                case "c":
                case "cc":
                    return Ke(Ye(a.length, o), l);
                case "co":
                    return Ke(i.ordinalNumber(o, {
                        unit: "day"
                    }), l);
                case "ccc":
                    return i.day(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "short",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "ccccc":
                    return i.day(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return i.day(o, {
                        width: "short",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return i.day(o, {
                        width: "wide",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "short",
                        context: "standalone"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "standalone"
                    })
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 6
        }
    }, {
        key: "set",
        value: function(o, a, i, s) {
            return o = pl(o, i, s), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function oC(e, t) {
    de(2, arguments);
    var n = ge(t);
    n % 7 === 0 && (n = n - 7);
    var r = 1,
        o = ye(e),
        a = o.getUTCDay(),
        i = n % 7,
        s = (i + 7) % 7,
        l = (s < r ? 7 : 0) + n - a;
    return o.setUTCDate(o.getUTCDate() + l), o
}

function Kr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kr = function(n) {
        return typeof n
    } : Kr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Kr(e)
}

function aC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Pc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function iC(e, t, n) {
    return t && Pc(e.prototype, t), n && Pc(e, n), e
}

function sC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && os(e, t)
}

function os(e, t) {
    return os = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, os(e, t)
}

function lC(e) {
    var t = cC();
    return function() {
        var r = qo(e),
            o;
        if (t) {
            var a = qo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return uC(this, o)
    }
}

function uC(e, t) {
    return t && (Kr(t) === "object" || typeof t == "function") ? t : as(e)
}

function as(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function cC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function qo(e) {
    return qo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, qo(e)
}

function Tc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var dC = function(e) {
    sC(n, e);
    var t = lC(n);

    function n() {
        var r;
        aC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Tc(as(r), "priority", 90), Tc(as(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r
    }
    return iC(n, [{
        key: "parse",
        value: function(o, a, i) {
            var s = function(d) {
                return d === 0 ? 7 : d
            };
            switch (a) {
                case "i":
                case "ii":
                    return Ye(a.length, o);
                case "io":
                    return i.ordinalNumber(o, {
                        unit: "day"
                    });
                case "iii":
                    return Ke(i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    }), s);
                case "iiiii":
                    return Ke(i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    }), s);
                case "iiiiii":
                    return Ke(i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    }), s);
                case "iiii":
                default:
                    return Ke(i.day(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "short",
                        context: "formatting"
                    }) || i.day(o, {
                        width: "narrow",
                        context: "formatting"
                    }), s)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 7
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o = oC(o, i), o.setUTCHours(0, 0, 0, 0), o
        }
    }]), n
}(Ee);

function Qr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qr = function(n) {
        return typeof n
    } : Qr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Qr(e)
}

function fC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Cc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function mC(e, t, n) {
    return t && Cc(e.prototype, t), n && Cc(e, n), e
}

function pC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && is(e, t)
}

function is(e, t) {
    return is = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, is(e, t)
}

function hC(e) {
    var t = yC();
    return function() {
        var r = jo(e),
            o;
        if (t) {
            var a = jo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return gC(this, o)
    }
}

function gC(e, t) {
    return t && (Qr(t) === "object" || typeof t == "function") ? t : ss(e)
}

function ss(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function yC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function jo(e) {
    return jo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, jo(e)
}

function Oc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var vC = function(e) {
    pC(n, e);
    var t = hC(n);

    function n() {
        var r;
        fC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Oc(ss(r), "priority", 80), Oc(ss(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r
    }
    return mC(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "a":
                case "aa":
                case "aaa":
                    return i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaaa":
                    return i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return i.dayPeriod(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCHours(ml(i), 0, 0, 0), o
        }
    }]), n
}(Ee);

function Xr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xr = function(n) {
        return typeof n
    } : Xr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Xr(e)
}

function bC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ic(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _C(e, t, n) {
    return t && Ic(e.prototype, t), n && Ic(e, n), e
}

function wC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ls(e, t)
}

function ls(e, t) {
    return ls = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, ls(e, t)
}

function kC(e) {
    var t = PC();
    return function() {
        var r = xo(e),
            o;
        if (t) {
            var a = xo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return SC(this, o)
    }
}

function SC(e, t) {
    return t && (Xr(t) === "object" || typeof t == "function") ? t : us(e)
}

function us(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function PC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function xo(e) {
    return xo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, xo(e)
}

function $c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var TC = function(e) {
    wC(n, e);
    var t = kC(n);

    function n() {
        var r;
        bC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), $c(us(r), "priority", 80), $c(us(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r
    }
    return _C(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "b":
                case "bb":
                case "bbb":
                    return i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbbb":
                    return i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return i.dayPeriod(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCHours(ml(i), 0, 0, 0), o
        }
    }]), n
}(Ee);

function Jr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jr = function(n) {
        return typeof n
    } : Jr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Jr(e)
}

function CC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ec(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function OC(e, t, n) {
    return t && Ec(e.prototype, t), n && Ec(e, n), e
}

function IC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && cs(e, t)
}

function cs(e, t) {
    return cs = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, cs(e, t)
}

function $C(e) {
    var t = DC();
    return function() {
        var r = Wo(e),
            o;
        if (t) {
            var a = Wo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return EC(this, o)
    }
}

function EC(e, t) {
    return t && (Jr(t) === "object" || typeof t == "function") ? t : ds(e)
}

function ds(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function DC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Wo(e) {
    return Wo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Wo(e)
}

function Dc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var LC = function(e) {
    IC(n, e);
    var t = $C(n);

    function n() {
        var r;
        CC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Dc(ds(r), "priority", 80), Dc(ds(r), "incompatibleTokens", ["a", "b", "t", "T"]), r
    }
    return OC(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "B":
                case "BB":
                case "BBB":
                    return i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBBB":
                    return i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return i.dayPeriod(o, {
                        width: "wide",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || i.dayPeriod(o, {
                        width: "narrow",
                        context: "formatting"
                    })
            }
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCHours(ml(i), 0, 0, 0), o
        }
    }]), n
}(Ee);

function Zr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zr = function(n) {
        return typeof n
    } : Zr = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Zr(e)
}

function MC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Lc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function BC(e, t, n) {
    return t && Lc(e.prototype, t), n && Lc(e, n), e
}

function AC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && fs(e, t)
}

function fs(e, t) {
    return fs = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, fs(e, t)
}

function RC(e) {
    var t = HC();
    return function() {
        var r = Go(e),
            o;
        if (t) {
            var a = Go(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return NC(this, o)
    }
}

function NC(e, t) {
    return t && (Zr(t) === "object" || typeof t == "function") ? t : ms(e)
}

function ms(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function HC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Go(e) {
    return Go = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Go(e)
}

function Mc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var UC = function(e) {
    AC(n, e);
    var t = RC(n);

    function n() {
        var r;
        MC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Mc(ms(r), "priority", 70), Mc(ms(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r
    }
    return BC(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "h":
                    return We(ze.hour12h, o);
                case "ho":
                    return i.ordinalNumber(o, {
                        unit: "hour"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 12
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            var s = o.getUTCHours() >= 12;
            return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : !s && i === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o
        }
    }]), n
}(Ee);

function eo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? eo = function(n) {
        return typeof n
    } : eo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, eo(e)
}

function VC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Bc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function qC(e, t, n) {
    return t && Bc(e.prototype, t), n && Bc(e, n), e
}

function jC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ps(e, t)
}

function ps(e, t) {
    return ps = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, ps(e, t)
}

function xC(e) {
    var t = GC();
    return function() {
        var r = Yo(e),
            o;
        if (t) {
            var a = Yo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return WC(this, o)
    }
}

function WC(e, t) {
    return t && (eo(t) === "object" || typeof t == "function") ? t : hs(e)
}

function hs(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function GC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Yo(e) {
    return Yo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Yo(e)
}

function Ac(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var YC = function(e) {
    jC(n, e);
    var t = xC(n);

    function n() {
        var r;
        VC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Ac(hs(r), "priority", 70), Ac(hs(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r
    }
    return qC(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "H":
                    return We(ze.hour23h, o);
                case "Ho":
                    return i.ordinalNumber(o, {
                        unit: "hour"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 23
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCHours(i, 0, 0, 0), o
        }
    }]), n
}(Ee);

function to(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? to = function(n) {
        return typeof n
    } : to = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, to(e)
}

function FC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Rc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function zC(e, t, n) {
    return t && Rc(e.prototype, t), n && Rc(e, n), e
}

function KC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && gs(e, t)
}

function gs(e, t) {
    return gs = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, gs(e, t)
}

function QC(e) {
    var t = JC();
    return function() {
        var r = Fo(e),
            o;
        if (t) {
            var a = Fo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return XC(this, o)
    }
}

function XC(e, t) {
    return t && (to(t) === "object" || typeof t == "function") ? t : ys(e)
}

function ys(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function JC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Fo(e) {
    return Fo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Fo(e)
}

function Nc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var ZC = function(e) {
    KC(n, e);
    var t = QC(n);

    function n() {
        var r;
        FC(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Nc(ys(r), "priority", 70), Nc(ys(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r
    }
    return zC(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "K":
                    return We(ze.hour11h, o);
                case "Ko":
                    return i.ordinalNumber(o, {
                        unit: "hour"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 11
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            var s = o.getUTCHours() >= 12;
            return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o
        }
    }]), n
}(Ee);

function no(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? no = function(n) {
        return typeof n
    } : no = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, no(e)
}

function eO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Hc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function tO(e, t, n) {
    return t && Hc(e.prototype, t), n && Hc(e, n), e
}

function nO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && vs(e, t)
}

function vs(e, t) {
    return vs = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, vs(e, t)
}

function rO(e) {
    var t = aO();
    return function() {
        var r = zo(e),
            o;
        if (t) {
            var a = zo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return oO(this, o)
    }
}

function oO(e, t) {
    return t && (no(t) === "object" || typeof t == "function") ? t : bs(e)
}

function bs(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function aO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function zo(e) {
    return zo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, zo(e)
}

function Uc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var iO = function(e) {
    nO(n, e);
    var t = rO(n);

    function n() {
        var r;
        eO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Uc(bs(r), "priority", 70), Uc(bs(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r
    }
    return tO(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "k":
                    return We(ze.hour24h, o);
                case "ko":
                    return i.ordinalNumber(o, {
                        unit: "hour"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 1 && a <= 24
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            var s = i <= 24 ? i % 24 : i;
            return o.setUTCHours(s, 0, 0, 0), o
        }
    }]), n
}(Ee);

function ro(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ro = function(n) {
        return typeof n
    } : ro = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, ro(e)
}

function sO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Vc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function lO(e, t, n) {
    return t && Vc(e.prototype, t), n && Vc(e, n), e
}

function uO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _s(e, t)
}

function _s(e, t) {
    return _s = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, _s(e, t)
}

function cO(e) {
    var t = fO();
    return function() {
        var r = Ko(e),
            o;
        if (t) {
            var a = Ko(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return dO(this, o)
    }
}

function dO(e, t) {
    return t && (ro(t) === "object" || typeof t == "function") ? t : ws(e)
}

function ws(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function fO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ko(e) {
    return Ko = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Ko(e)
}

function qc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var mO = function(e) {
    uO(n, e);
    var t = cO(n);

    function n() {
        var r;
        sO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), qc(ws(r), "priority", 60), qc(ws(r), "incompatibleTokens", ["t", "T"]), r
    }
    return lO(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "m":
                    return We(ze.minute, o);
                case "mo":
                    return i.ordinalNumber(o, {
                        unit: "minute"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 59
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMinutes(i, 0, 0), o
        }
    }]), n
}(Ee);

function oo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? oo = function(n) {
        return typeof n
    } : oo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, oo(e)
}

function pO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function jc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function hO(e, t, n) {
    return t && jc(e.prototype, t), n && jc(e, n), e
}

function gO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ks(e, t)
}

function ks(e, t) {
    return ks = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, ks(e, t)
}

function yO(e) {
    var t = bO();
    return function() {
        var r = Qo(e),
            o;
        if (t) {
            var a = Qo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return vO(this, o)
    }
}

function vO(e, t) {
    return t && (oo(t) === "object" || typeof t == "function") ? t : Ss(e)
}

function Ss(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function bO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Qo(e) {
    return Qo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Qo(e)
}

function xc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var _O = function(e) {
    gO(n, e);
    var t = yO(n);

    function n() {
        var r;
        pO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), xc(Ss(r), "priority", 50), xc(Ss(r), "incompatibleTokens", ["t", "T"]), r
    }
    return hO(n, [{
        key: "parse",
        value: function(o, a, i) {
            switch (a) {
                case "s":
                    return We(ze.second, o);
                case "so":
                    return i.ordinalNumber(o, {
                        unit: "second"
                    });
                default:
                    return Ye(a.length, o)
            }
        }
    }, {
        key: "validate",
        value: function(o, a) {
            return a >= 0 && a <= 59
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCSeconds(i, 0), o
        }
    }]), n
}(Ee);

function ao(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ao = function(n) {
        return typeof n
    } : ao = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, ao(e)
}

function wO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Wc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function kO(e, t, n) {
    return t && Wc(e.prototype, t), n && Wc(e, n), e
}

function SO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ps(e, t)
}

function Ps(e, t) {
    return Ps = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ps(e, t)
}

function PO(e) {
    var t = CO();
    return function() {
        var r = Xo(e),
            o;
        if (t) {
            var a = Xo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return TO(this, o)
    }
}

function TO(e, t) {
    return t && (ao(t) === "object" || typeof t == "function") ? t : Ts(e)
}

function Ts(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function CO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Xo(e) {
    return Xo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Xo(e)
}

function Gc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var OO = function(e) {
    SO(n, e);
    var t = PO(n);

    function n() {
        var r;
        wO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Gc(Ts(r), "priority", 30), Gc(Ts(r), "incompatibleTokens", ["t", "T"]), r
    }
    return kO(n, [{
        key: "parse",
        value: function(o, a) {
            var i = function(l) {
                return Math.floor(l * Math.pow(10, -a.length + 3))
            };
            return Ke(Ye(a.length, o), i)
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return o.setUTCMilliseconds(i), o
        }
    }]), n
}(Ee);

function io(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? io = function(n) {
        return typeof n
    } : io = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, io(e)
}

function IO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Yc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function $O(e, t, n) {
    return t && Yc(e.prototype, t), n && Yc(e, n), e
}

function EO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Cs(e, t)
}

function Cs(e, t) {
    return Cs = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Cs(e, t)
}

function DO(e) {
    var t = MO();
    return function() {
        var r = Jo(e),
            o;
        if (t) {
            var a = Jo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return LO(this, o)
    }
}

function LO(e, t) {
    return t && (io(t) === "object" || typeof t == "function") ? t : Os(e)
}

function Os(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function MO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Jo(e) {
    return Jo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Jo(e)
}

function Fc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var BO = function(e) {
    EO(n, e);
    var t = DO(n);

    function n() {
        var r;
        IO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Fc(Os(r), "priority", 10), Fc(Os(r), "incompatibleTokens", ["t", "T", "x"]), r
    }
    return $O(n, [{
        key: "parse",
        value: function(o, a) {
            switch (a) {
                case "X":
                    return Mt(Lt.basicOptionalMinutes, o);
                case "XX":
                    return Mt(Lt.basic, o);
                case "XXXX":
                    return Mt(Lt.basicOptionalSeconds, o);
                case "XXXXX":
                    return Mt(Lt.extendedOptionalSeconds, o);
                case "XXX":
                default:
                    return Mt(Lt.extended, o)
            }
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return a.timestampIsSet ? o : new Date(o.getTime() - i)
        }
    }]), n
}(Ee);

function so(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? so = function(n) {
        return typeof n
    } : so = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, so(e)
}

function AO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function zc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function RO(e, t, n) {
    return t && zc(e.prototype, t), n && zc(e, n), e
}

function NO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Is(e, t)
}

function Is(e, t) {
    return Is = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Is(e, t)
}

function HO(e) {
    var t = VO();
    return function() {
        var r = Zo(e),
            o;
        if (t) {
            var a = Zo(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return UO(this, o)
    }
}

function UO(e, t) {
    return t && (so(t) === "object" || typeof t == "function") ? t : $s(e)
}

function $s(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function VO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Zo(e) {
    return Zo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Zo(e)
}

function Kc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var qO = function(e) {
    NO(n, e);
    var t = HO(n);

    function n() {
        var r;
        AO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Kc($s(r), "priority", 10), Kc($s(r), "incompatibleTokens", ["t", "T", "X"]), r
    }
    return RO(n, [{
        key: "parse",
        value: function(o, a) {
            switch (a) {
                case "x":
                    return Mt(Lt.basicOptionalMinutes, o);
                case "xx":
                    return Mt(Lt.basic, o);
                case "xxxx":
                    return Mt(Lt.basicOptionalSeconds, o);
                case "xxxxx":
                    return Mt(Lt.extendedOptionalSeconds, o);
                case "xxx":
                default:
                    return Mt(Lt.extended, o)
            }
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return a.timestampIsSet ? o : new Date(o.getTime() - i)
        }
    }]), n
}(Ee);

function lo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lo = function(n) {
        return typeof n
    } : lo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, lo(e)
}

function jO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Qc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function xO(e, t, n) {
    return t && Qc(e.prototype, t), n && Qc(e, n), e
}

function WO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Es(e, t)
}

function Es(e, t) {
    return Es = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Es(e, t)
}

function GO(e) {
    var t = FO();
    return function() {
        var r = ea(e),
            o;
        if (t) {
            var a = ea(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return YO(this, o)
    }
}

function YO(e, t) {
    return t && (lo(t) === "object" || typeof t == "function") ? t : Ds(e)
}

function Ds(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function FO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ea(e) {
    return ea = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ea(e)
}

function Xc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var zO = function(e) {
    WO(n, e);
    var t = GO(n);

    function n() {
        var r;
        jO(this, n);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return r = t.call.apply(t, [this].concat(a)), Xc(Ds(r), "priority", 40), Xc(Ds(r), "incompatibleTokens", "*"), r
    }
    return xO(n, [{
        key: "parse",
        value: function(o) {
            return Hf(o)
        }
    }, {
        key: "set",
        value: function(o, a, i) {
            return [new Date(i * 1e3), {
                timestampIsSet: !0
            }]
        }
    }]), n
}(Ee);

function uo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uo = function(n) {
        return typeof n
    } : uo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, uo(e)
}

function KO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Jc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function QO(e, t, n) {
    return t && Jc(e.prototype, t), n && Jc(e, n), e
}

function XO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ls(e, t)
}

function Ls(e, t) {
    return Ls = Object.setPrototypeOf || function(r, o) {
        return r.__proto__ = o, r
    }, Ls(e, t)
}

function JO(e) {
    var t = eI();
    return function() {
        var r = ta(e),
            o;
        if (t) {
            var a = ta(this).constructor;
            o = Reflect.construct(r, arguments, a)
        } else o = r.apply(this, arguments);
        return ZO(this, o)
    }
}

function ZO(e, t) {
    return t && (uo(t) === "object" || typeof t == "function") ? t : Ms(e)
}

function Ms(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function eI() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ta(e) {
    return ta = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ta(e)
}

function Zc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var tI = function(e) {
        XO(n, e);
        var t = JO(n);

        function n() {
            var r;
            KO(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = t.call.apply(t, [this].concat(a)), Zc(Ms(r), "priority", 20), Zc(Ms(r), "incompatibleTokens", "*"), r
        }
        return QO(n, [{
            key: "parse",
            value: function(o) {
                return Hf(o)
            }
        }, {
            key: "set",
            value: function(o, a, i) {
                return [new Date(i), {
                    timestampIsSet: !0
                }]
            }
        }]), n
    }(Ee),
    nI = {
        G: new nP,
        y: new uP,
        Y: new gP,
        R: new SP,
        u: new EP,
        Q: new NP,
        q: new WP,
        M: new XP,
        L: new oT,
        w: new fT,
        I: new _T,
        d: new $T,
        D: new RT,
        E: new xT,
        e: new QT,
        c: new rC,
        i: new dC,
        a: new vC,
        b: new TC,
        B: new LC,
        h: new UC,
        H: new YC,
        K: new ZC,
        k: new iO,
        m: new mO,
        s: new _O,
        S: new OO,
        X: new BO,
        x: new qO,
        t: new zO,
        T: new tI
    };

function co(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? co = function(n) {
        return typeof n
    } : co = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, co(e)
}

function ed(e, t) {
    var n;
    if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (n = rI(e)) || t && e && typeof e.length == "number") {
            n && (e = n);
            var r = 0,
                o = function() {};
            return {
                s: o,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(d) {
                    throw d
                },
                f: o
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var a = !0,
        i = !1,
        s;
    return {
        s: function() {
            n = e[Symbol.iterator]()
        },
        n: function() {
            var d = n.next();
            return a = d.done, d
        },
        e: function(d) {
            i = !0, s = d
        },
        f: function() {
            try {
                !a && n.return != null && n.return()
            } finally {
                if (i) throw s
            }
        }
    }
}

function rI(e, t) {
    if (e) {
        if (typeof e == "string") return td(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return td(e, t)
    }
}

function td(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}
var oI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    aI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    iI = /^'([^]*?)'?$/,
    sI = /''/g,
    lI = /\S/,
    uI = /[a-zA-Z]/;

function Bs(e, t, n, r) {
    var o, a, i, s, l, d, y, m, f, h, v, k, w, C, L, I, R, W;
    de(3, arguments);
    var $ = String(e),
        E = String(t),
        H = Xt(),
        X = (o = (a = r ? .locale) !== null && a !== void 0 ? a : H.locale) !== null && o !== void 0 ? o : Mf;
    if (!X.match) throw new RangeError("locale must contain match property");
    var re = ge((i = (s = (l = (d = r ? .firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (y = r.locale) === null || y === void 0 || (m = y.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && l !== void 0 ? l : H.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = H.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(re >= 1 && re <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var Y = ge((v = (k = (w = (C = r ? .weekStartsOn) !== null && C !== void 0 ? C : r == null || (L = r.locale) === null || L === void 0 || (I = L.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && w !== void 0 ? w : H.weekStartsOn) !== null && k !== void 0 ? k : (R = H.locale) === null || R === void 0 || (W = R.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && v !== void 0 ? v : 0);
    if (!(Y >= 0 && Y <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (E === "") return $ === "" ? ye(n) : new Date(NaN);
    var ne = {
            firstWeekContainsDate: re,
            weekStartsOn: Y,
            locale: X
        },
        A = [new FS],
        S = E.match(aI).map(function(_e) {
            var me = _e[0];
            if (me in Pi) {
                var Ne = Pi[me];
                return Ne(_e, X.formatLong)
            }
            return _e
        }).join("").match(oI),
        U = [],
        V = ed(S),
        g;
    try {
        var B = function() {
            var me = g.value;
            !(r != null && r.useAdditionalWeekYearTokens) && Lf(me) && ko(me, E, e), !(r != null && r.useAdditionalDayOfYearTokens) && Df(me) && ko(me, E, e);
            var Ne = me[0],
                ot = nI[Ne];
            if (ot) {
                var ve = ot.incompatibleTokens;
                if (Array.isArray(ve)) {
                    var ke = U.find(function(Ie) {
                        return ve.includes(Ie.token) || Ie.token === Ne
                    });
                    if (ke) throw new RangeError("The format string mustn't contain `".concat(ke.fullToken, "` and `").concat(me, "` at the same time"))
                } else if (ot.incompatibleTokens === "*" && U.length > 0) throw new RangeError("The format string mustn't contain `".concat(me, "` and any other token at the same time"));
                U.push({
                    token: Ne,
                    fullToken: me
                });
                var Be = ot.run($, me, X.match, ne);
                if (!Be) return {
                    v: new Date(NaN)
                };
                A.push(Be.setter), $ = Be.rest
            } else {
                if (Ne.match(uI)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
                if (me === "''" ? me = "'" : Ne === "'" && (me = cI(me)), $.indexOf(me) === 0) $ = $.slice(me.length);
                else return {
                    v: new Date(NaN)
                }
            }
        };
        for (V.s(); !(g = V.n()).done;) {
            var q = B();
            if (co(q) === "object") return q.v
        }
    } catch (_e) {
        V.e(_e)
    } finally {
        V.f()
    }
    if ($.length > 0 && lI.test($)) return new Date(NaN);
    var G = A.map(function(_e) {
            return _e.priority
        }).sort(function(_e, me) {
            return me - _e
        }).filter(function(_e, me, Ne) {
            return Ne.indexOf(_e) === me
        }).map(function(_e) {
            return A.filter(function(me) {
                return me.priority === _e
            }).sort(function(me, Ne) {
                return Ne.subPriority - me.subPriority
            })
        }).map(function(_e) {
            return _e[0]
        }),
        te = ye(n);
    if (isNaN(te.getTime())) return new Date(NaN);
    var T = Cf(te, wo(te)),
        ie = {},
        ue = ed(G),
        O;
    try {
        for (ue.s(); !(O = ue.n()).done;) {
            var z = O.value;
            if (!z.validate(T, ne)) return new Date(NaN);
            var Te = z.set(T, ie, ne);
            Array.isArray(Te) ? (T = Te[0], HS(ie, Te[1])) : T = Te
        }
    } catch (_e) {
        ue.e(_e)
    } finally {
        ue.f()
    }
    return T
}

function cI(e) {
    return e.match(iI)[1].replace(sI, "'")
}

function dI(e, t) {
    de(2, arguments);
    var n = ge(t);
    return zt(e, -n)
}

function fI(e, t) {
    var n;
    de(1, arguments);
    var r = ge((n = t ? .additionalDigits) !== null && n !== void 0 ? n : 2);
    if (r !== 2 && r !== 1 && r !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]")) return new Date(NaN);
    var o = gI(e),
        a;
    if (o.date) {
        var i = yI(o.date, r);
        a = vI(i.restDateString, i.year)
    }
    if (!a || isNaN(a.getTime())) return new Date(NaN);
    var s = a.getTime(),
        l = 0,
        d;
    if (o.time && (l = bI(o.time), isNaN(l))) return new Date(NaN);
    if (o.timezone) {
        if (d = _I(o.timezone), isNaN(d)) return new Date(NaN)
    } else {
        var y = new Date(s + l),
            m = new Date(0);
        return m.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()), m.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()), m
    }
    return new Date(s + l + d)
}
var _r = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    mI = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    pI = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    hI = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function gI(e) {
    var t = {},
        n = e.split(_r.dateTimeDelimiter),
        r;
    if (n.length > 2) return t;
    if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], _r.timeZoneDelimiter.test(t.date) && (t.date = e.split(_r.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
        var o = _r.timezone.exec(r);
        o ? (t.time = r.replace(o[1], ""), t.timezone = o[1]) : t.time = r
    }
    return t
}

function yI(e, t) {
    var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
        r = e.match(n);
    if (!r) return {
        year: NaN,
        restDateString: ""
    };
    var o = r[1] ? parseInt(r[1]) : null,
        a = r[2] ? parseInt(r[2]) : null;
    return {
        year: a === null ? o : a * 100,
        restDateString: e.slice((r[1] || r[2]).length)
    }
}

function vI(e, t) {
    if (t === null) return new Date(NaN);
    var n = e.match(mI);
    if (!n) return new Date(NaN);
    var r = !!n[4],
        o = Fn(n[1]),
        a = Fn(n[2]) - 1,
        i = Fn(n[3]),
        s = Fn(n[4]),
        l = Fn(n[5]) - 1;
    if (r) return TI(t, s, l) ? wI(t, s, l) : new Date(NaN);
    var d = new Date(0);
    return !SI(t, a, i) || !PI(t, o) ? new Date(NaN) : (d.setUTCFullYear(t, a, Math.max(o, i)), d)
}

function Fn(e) {
    return e ? parseInt(e) : 1
}

function bI(e) {
    var t = e.match(pI);
    if (!t) return NaN;
    var n = Qa(t[1]),
        r = Qa(t[2]),
        o = Qa(t[3]);
    return CI(n, r, o) ? n * sl + r * il + o * 1e3 : NaN
}

function Qa(e) {
    return e && parseFloat(e.replace(",", ".")) || 0
}

function _I(e) {
    if (e === "Z") return 0;
    var t = e.match(hI);
    if (!t) return 0;
    var n = t[1] === "+" ? -1 : 1,
        r = parseInt(t[2]),
        o = t[3] && parseInt(t[3]) || 0;
    return OI(r, o) ? n * (r * sl + o * il) : NaN
}

function wI(e, t, n) {
    var r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    var o = r.getUTCDay() || 7,
        a = (t - 1) * 7 + n + 1 - o;
    return r.setUTCDate(r.getUTCDate() + a), r
}
var kI = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function qf(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function SI(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (kI[t] || (qf(e) ? 29 : 28))
}

function PI(e, t) {
    return t >= 1 && t <= (qf(e) ? 366 : 365)
}

function TI(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6
}

function CI(e, t, n) {
    return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25
}

function OI(e, t) {
    return t >= 0 && t <= 59
}

function er(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t),
        o = n.getFullYear(),
        a = n.getDate(),
        i = new Date(0);
    i.setFullYear(o, r, 15), i.setHours(0, 0, 0, 0);
    var s = VS(i);
    return n.setMonth(r, Math.min(a, s)), n
}

function fo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fo = function(n) {
        return typeof n
    } : fo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, fo(e)
}

function lt(e, t) {
    if (de(2, arguments), fo(t) !== "object" || t === null) throw new RangeError("values parameter must be an object");
    var n = ye(e);
    return isNaN(n.getTime()) ? new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = er(n, t.month)), t.date != null && n.setDate(ge(t.date)), t.hours != null && n.setHours(ge(t.hours)), t.minutes != null && n.setMinutes(ge(t.minutes)), t.seconds != null && n.setSeconds(ge(t.seconds)), t.milliseconds != null && n.setMilliseconds(ge(t.milliseconds)), n)
}

function jf(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return n.setHours(r), n
}

function hl(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return n.setMilliseconds(r), n
}

function xf(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return n.setMinutes(r), n
}

function Wf(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return n.setSeconds(r), n
}

function fn(e, t) {
    de(2, arguments);
    var n = ye(e),
        r = ge(t);
    return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n)
}

function En(e, t) {
    de(2, arguments);
    var n = ge(t);
    return At(e, -n)
}

function mo(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mo = function(n) {
        return typeof n
    } : mo = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, mo(e)
}

function II(e, t) {
    if (de(2, arguments), !t || mo(t) !== "object") return new Date(NaN);
    var n = t.years ? ge(t.years) : 0,
        r = t.months ? ge(t.months) : 0,
        o = t.weeks ? ge(t.weeks) : 0,
        a = t.days ? ge(t.days) : 0,
        i = t.hours ? ge(t.hours) : 0,
        s = t.minutes ? ge(t.minutes) : 0,
        l = t.seconds ? ge(t.seconds) : 0,
        d = En(e, r + n * 12),
        y = dI(d, a + o * 7),
        m = s + i * 60,
        f = l + m * 60,
        h = f * 1e3,
        v = new Date(y.getTime() - h);
    return v
}

function $I(e, t) {
    de(2, arguments);
    var n = ge(t);
    return Pf(e, -n)
}
const yn = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n
    },
    EI = {},
    DI = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    LI = b("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }, null, -1),
    MI = b("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }, null, -1),
    BI = b("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }, null, -1),
    AI = b("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    }, null, -1),
    RI = [LI, MI, BI, AI];

function NI(e, t) {
    return u(), p("svg", DI, RI)
}
const ga = yn(EI, [
        ["render", NI]
    ]),
    HI = {},
    UI = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    VI = b("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }, null, -1),
    qI = b("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    }, null, -1),
    jI = [VI, qI];

function xI(e, t) {
    return u(), p("svg", UI, jI)
}
const WI = yn(HI, [
        ["render", xI]
    ]),
    GI = {},
    YI = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    FI = b("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    }, null, -1),
    zI = [FI];

function KI(e, t) {
    return u(), p("svg", YI, zI)
}
const nd = yn(GI, [
        ["render", KI]
    ]),
    QI = {},
    XI = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    JI = b("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    }, null, -1),
    ZI = [JI];

function e2(e, t) {
    return u(), p("svg", XI, ZI)
}
const rd = yn(QI, [
        ["render", e2]
    ]),
    t2 = {},
    n2 = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    r2 = b("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }, null, -1),
    o2 = b("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }, null, -1),
    a2 = [r2, o2];

function i2(e, t) {
    return u(), p("svg", n2, a2)
}
const Gf = yn(t2, [
        ["render", i2]
    ]),
    s2 = {},
    l2 = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    u2 = b("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    }, null, -1),
    c2 = [u2];

function d2(e, t) {
    return u(), p("svg", l2, c2)
}
const Yf = yn(s2, [
        ["render", d2]
    ]),
    f2 = {},
    m2 = {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        class: "dp__icon"
    },
    p2 = b("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    }, null, -1),
    h2 = [p2];

function g2(e, t) {
    return u(), p("svg", m2, h2)
}
const Ff = yn(f2, [
        ["render", g2]
    ]),
    od = (e, t) => {
        const n = Bs(e, t.slice(0, e.length), new Date);
        return Jn(n) && Tf(n) ? n : null
    },
    y2 = (e, t) => {
        if (typeof t == "string") return od(e, t);
        if (Array.isArray(t)) {
            let n = null;
            for (const r of t)
                if (n = od(e, r), n) break;
            return n
        }
        return typeof t == "function" ? t(e) : null
    },
    K = e => e ? new Date(e) : new Date,
    v2 = (e, t) => {
        if (t) {
            const r = (e.getMonth() + 1).toString().padStart(2, "0"),
                o = e.getDate().toString().padStart(2, "0"),
                a = e.getHours().toString().padStart(2, "0"),
                i = e.getMinutes().toString().padStart(2, "0");
            return `${e.getFullYear()}-${r}-${o}T${a}:${i}:00.000Z`
        }
        const n = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
        return new Date(n).toISOString()
    },
    Rt = e => {
        let t = K(JSON.parse(JSON.stringify(e)));
        return t = jf(t, 0), t = xf(t, 0), t = Wf(t, 0), t = hl(t, 0), t
    },
    _t = (e, t, n, r) => {
        let o = e ? K(e) : K();
        return (t || t === 0) && (o = jf(o, +t)), (n || n === 0) && (o = xf(o, +n)), (r || r === 0) && (o = Wf(o, +r)), hl(o, 0)
    },
    rt = (e, t) => !e || !t ? !1 : cl(Rt(e), Rt(t)),
    je = (e, t) => !e || !t ? !1 : Bf(Rt(e), Rt(t)),
    ct = (e, t) => !e || !t ? !1 : ul(Rt(e), Rt(t)),
    zf = (e, t, n) => e && e[0] && e[1] ? ct(n, e[0]) && rt(n, e[1]) : e && e[0] && t ? ct(n, e[0]) && rt(n, t) || rt(n, e[0]) && ct(n, t) : !1,
    zn = xt({
        menuFocused: !1,
        shiftKeyInMenu: !1
    }),
    Kf = () => {
        const e = n => {
                zn.menuFocused = n
            },
            t = n => {
                zn.shiftKeyInMenu !== n && (zn.shiftKeyInMenu = n)
            };
        return {
            control: c(() => ({
                shiftKeyInMenu: zn.shiftKeyInMenu,
                menuFocused: zn.menuFocused
            })),
            setMenuFocused: e,
            setShiftKey: t
        }
    };

function gl(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var na = {},
    b2 = {
        get exports() {
            return na
        },
        set exports(e) {
            na = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n;

    function n(r) {
        if (r === null || r === !0 || r === !1) return NaN;
        var o = Number(r);
        return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o)
    }
    e.exports = t.default
})(b2, na);
const _2 = gl(na);
var ra = {},
    w2 = {
        get exports() {
            return ra
        },
        set exports(e) {
            ra = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n;

    function n(r) {
        var o = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
        return o.setUTCFullYear(r.getFullYear()), r.getTime() - o.getTime()
    }
    e.exports = t.default
})(w2, ra);
const ad = gl(ra);

function k2(e, t) {
    var n = C2(t);
    return n.formatToParts ? P2(n, e) : T2(n, e)
}
var S2 = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};

function P2(e, t) {
    try {
        for (var n = e.formatToParts(t), r = [], o = 0; o < n.length; o++) {
            var a = S2[n[o].type];
            a >= 0 && (r[a] = parseInt(n[o].value, 10))
        }
        return r
    } catch (i) {
        if (i instanceof RangeError) return [NaN];
        throw i
    }
}

function T2(e, t) {
    var n = e.format(t).replace(/\u200E/g, ""),
        r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
    return [r[3], r[1], r[2], r[4], r[5], r[6]]
}
var Xa = {};

function C2(e) {
    if (!Xa[e]) {
        var t = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: "America/New_York",
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }).format(new Date("2014-06-25T04:00:00.123Z")),
            n = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        Xa[e] = n ? new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
    return Xa[e]
}

function yl(e, t, n, r, o, a, i) {
    var s = new Date(0);
    return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, a, i), s
}
var id = 36e5,
    O2 = 6e4,
    Ja = {
        timezone: /([Z+-].*)$/,
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-]\d{2})$/,
        timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
    };

function vl(e, t, n) {
    var r, o;
    if (e === "" || (r = Ja.timezoneZ.exec(e), r)) return 0;
    var a;
    if (r = Ja.timezoneHH.exec(e), r) return a = parseInt(r[1], 10), sd(a) ? -(a * id) : NaN;
    if (r = Ja.timezoneHHMM.exec(e), r) {
        a = parseInt(r[1], 10);
        var i = parseInt(r[2], 10);
        return sd(a, i) ? (o = Math.abs(a) * id + i * O2, a > 0 ? -o : o) : NaN
    }
    if (E2(e)) {
        t = new Date(t || Date.now());
        var s = n ? t : I2(t),
            l = As(s, e),
            d = n ? l : $2(t, l, e);
        return -d
    }
    return NaN
}

function I2(e) {
    return yl(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
}

function As(e, t) {
    var n = k2(e, t),
        r = yl(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime(),
        o = e.getTime(),
        a = o % 1e3;
    return o -= a >= 0 ? a : 1e3 + a, r - o
}

function $2(e, t, n) {
    var r = e.getTime(),
        o = r - t,
        a = As(new Date(o), n);
    if (t === a) return t;
    o -= a - t;
    var i = As(new Date(o), n);
    return a === i ? a : Math.max(a, i)
}

function sd(e, t) {
    return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59)
}
var ld = {};

function E2(e) {
    if (ld[e]) return !0;
    try {
        return new Intl.DateTimeFormat(void 0, {
            timeZone: e
        }), ld[e] = !0, !0
    } catch {
        return !1
    }
}
var Qf = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
    Za = 36e5,
    ud = 6e4,
    D2 = 2,
    ut = {
        dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
        datePattern: /^([0-9W+-]+)(.*)/,
        plainTime: /:/,
        YY: /^(\d{2})$/,
        YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        YYYY: /^(\d{4})/,
        YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,
        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        timeZone: Qf
    };

function Rs(e, t) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (e === null) return new Date(NaN);
    var n = t || {},
        r = n.additionalDigits == null ? D2 : _2(n.additionalDigits);
    if (r !== 2 && r !== 1 && r !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]") return new Date(e.getTime());
    if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") return new Date(e);
    if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]")) return new Date(NaN);
    var o = L2(e),
        a = M2(o.date, r),
        i = a.year,
        s = a.restDateString,
        l = B2(s, i);
    if (isNaN(l)) return new Date(NaN);
    if (l) {
        var d = l.getTime(),
            y = 0,
            m;
        if (o.time && (y = A2(o.time), isNaN(y))) return new Date(NaN);
        if (o.timeZone || n.timeZone) {
            if (m = vl(o.timeZone || n.timeZone, new Date(d + y)), isNaN(m)) return new Date(NaN)
        } else m = ad(new Date(d + y)), m = ad(new Date(d + y + m));
        return new Date(d + y + m)
    } else return new Date(NaN)
}

function L2(e) {
    var t = {},
        n = ut.dateTimePattern.exec(e),
        r;
    if (n ? (t.date = n[1], r = n[3]) : (n = ut.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
        var o = ut.timeZone.exec(r);
        o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r
    }
    return t
}

function M2(e, t) {
    var n = ut.YYY[t],
        r = ut.YYYYY[t],
        o;
    if (o = ut.YYYY.exec(e) || r.exec(e), o) {
        var a = o[1];
        return {
            year: parseInt(a, 10),
            restDateString: e.slice(a.length)
        }
    }
    if (o = ut.YY.exec(e) || n.exec(e), o) {
        var i = o[1];
        return {
            year: parseInt(i, 10) * 100,
            restDateString: e.slice(i.length)
        }
    }
    return {
        year: null
    }
}

function B2(e, t) {
    if (t === null) return null;
    var n, r, o, a;
    if (e.length === 0) return r = new Date(0), r.setUTCFullYear(t), r;
    if (n = ut.MM.exec(e), n) return r = new Date(0), o = parseInt(n[1], 10) - 1, dd(t, o) ? (r.setUTCFullYear(t, o), r) : new Date(NaN);
    if (n = ut.DDD.exec(e), n) {
        r = new Date(0);
        var i = parseInt(n[1], 10);
        return H2(t, i) ? (r.setUTCFullYear(t, 0, i), r) : new Date(NaN)
    }
    if (n = ut.MMDD.exec(e), n) {
        r = new Date(0), o = parseInt(n[1], 10) - 1;
        var s = parseInt(n[2], 10);
        return dd(t, o, s) ? (r.setUTCFullYear(t, o, s), r) : new Date(NaN)
    }
    if (n = ut.Www.exec(e), n) return a = parseInt(n[1], 10) - 1, fd(t, a) ? cd(t, a) : new Date(NaN);
    if (n = ut.WwwD.exec(e), n) {
        a = parseInt(n[1], 10) - 1;
        var l = parseInt(n[2], 10) - 1;
        return fd(t, a, l) ? cd(t, a, l) : new Date(NaN)
    }
    return null
}

function A2(e) {
    var t, n, r;
    if (t = ut.HH.exec(e), t) return n = parseFloat(t[1].replace(",", ".")), ei(n) ? n % 24 * Za : NaN;
    if (t = ut.HHMM.exec(e), t) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ei(n, r) ? n % 24 * Za + r * ud : NaN;
    if (t = ut.HHMMSS.exec(e), t) {
        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
        var o = parseFloat(t[3].replace(",", "."));
        return ei(n, r, o) ? n % 24 * Za + r * ud + o * 1e3 : NaN
    }
    return null
}

function cd(e, t, n) {
    t = t || 0, n = n || 0;
    var r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    var o = r.getUTCDay() || 7,
        a = t * 7 + n + 1 - o;
    return r.setUTCDate(r.getUTCDate() + a), r
}
var R2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    N2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Xf(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function dd(e, t, n) {
    if (t < 0 || t > 11) return !1;
    if (n != null) {
        if (n < 1) return !1;
        var r = Xf(e);
        if (r && n > N2[t] || !r && n > R2[t]) return !1
    }
    return !0
}

function H2(e, t) {
    if (t < 1) return !1;
    var n = Xf(e);
    return !(n && t > 366 || !n && t > 365)
}

function fd(e, t, n) {
    return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6))
}

function ei(e, t, n) {
    return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60))
}
var oa = {},
    U2 = {
        get exports() {
            return oa
        },
        set exports(e) {
            oa = e
        }
    },
    aa = {},
    V2 = {
        get exports() {
            return aa
        },
        set exports(e) {
            aa = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n;

    function n(r, o) {
        if (r == null) throw new TypeError("assign requires that input parameter not be null or undefined");
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        return r
    }
    e.exports = t.default
})(V2, aa);
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o;
    var n = r(aa);

    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }

    function o(a) {
        return (0, n.default)({}, a)
    }
    e.exports = t.default
})(U2, oa);
const q2 = gl(oa);

function j2(e, t, n) {
    var r = Rs(e, n),
        o = vl(t, r, !0),
        a = new Date(r.getTime() - o),
        i = new Date(0);
    return i.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), i.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), i
}

function x2(e, t, n) {
    if (typeof e == "string" && !e.match(Qf)) {
        var r = q2(n);
        return r.timeZone = t, Rs(e, r)
    }
    var o = Rs(e, n),
        a = yl(o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), o.getMilliseconds()).getTime(),
        i = vl(t, new Date(a));
    return new Date(a + i)
}
const W2 = (e, t = 3) => {
        const n = [];
        for (let r = 0; r < e.length; r += t) n.push([e[r], e[r + 1], e[r + 2]]);
        return n
    },
    G2 = (e, t) => {
        const n = [1, 2, 3, 4, 5, 6, 7].map(a => new Intl.DateTimeFormat(e, {
                weekday: "short",
                timeZone: "UTC"
            }).format(new Date(`2017-01-0${a}T00:00:00+00:00`)).slice(0, 2)),
            r = n.slice(0, t),
            o = n.slice(t + 1, n.length);
        return [n[t]].concat(...o).concat(...r)
    },
    Y2 = e => {
        const t = [];
        for (let n = +e[0]; n <= +e[1]; n++) t.push({
            value: +n,
            text: `${n}`
        });
        return t
    },
    F2 = (e, t) => {
        const n = new Intl.DateTimeFormat(e, {
            month: t,
            timeZone: "UTC"
        });
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(r => {
            const o = r < 10 ? `0${r}` : r;
            return new Date(`2017-${o}-01T00:00:00+00:00`)
        }).map((r, o) => ({
            text: n.format(r),
            value: o
        }))
    },
    z2 = e => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e],
    et = e => {
        const t = D(e);
        return t ? .$el ? ? t
    },
    K2 = e => Object.assign({
        type: "dot"
    }, e),
    Jf = e => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
    ia = {
        prop: e => `"${e}" prop must be enabled!`,
        dateArr: e => `You need to use array as "model-value" binding in order to support "${e}"`
    },
    nt = e => e,
    md = e => e === 0 ? e : !e || isNaN(+e) ? null : +e,
    pd = e => Object.assign({
        menuAppear: "dp-menu-appear",
        open: "dp-slide-down",
        close: "dp-slide-up",
        next: "calendar-next",
        previous: "calendar-prev",
        vNext: "dp-slide-up",
        vPrevious: "dp-slide-down"
    }, e),
    Q2 = e => Object.assign({
        toggleOverlay: "Toggle overlay",
        menu: "Datepicker menu",
        input: "Datepicker input",
        calendarWrap: "Calendar wrapper",
        calendarDays: "Calendar days",
        openTimePicker: "Open time picker",
        closeTimePicker: "Close time Picker",
        incrementValue: t => `Increment ${t}`,
        decrementValue: t => `Decrement ${t}`,
        openTpOverlay: t => `Open ${t} overlay`,
        amPmButton: "Switch AM/PM mode",
        openYearsOverlay: "Open years overlay",
        openMonthsOverlay: "Open months overlay",
        nextMonth: "Next month",
        prevMonth: "Previous month",
        day: () => ""
    }, e),
    X2 = e => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2,
    J2 = (e, t, n) => e || (typeof n == "string" ? n : t),
    Z2 = e => typeof e == "boolean" ? e ? pd({}) : !1 : pd(e),
    e$ = () => ({
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: !0,
        rangeSeparator: " - "
    }),
    t$ = e => Object.assign({
        months: [],
        years: [],
        times: {
            hours: [],
            minutes: [],
            seconds: []
        }
    }, e),
    bt = e => {
        const t = () => {
                if (e.partialRange) return null;
                throw new Error(ia.prop("partial-range"))
            },
            n = c(() => ({
                ariaLabels: Q2(e.ariaLabels),
                textInputOptions: Object.assign(e$(), e.textInputOptions),
                multiCalendars: X2(e.multiCalendars),
                previewFormat: J2(e.previewFormat, e.format, a()),
                filters: t$(e.filters),
                transitions: Z2(e.transitions),
                startTime: f()
            })),
            r = g => {
                if (e.range) return g();
                throw new Error(ia.prop("range"))
            },
            o = () => {
                const g = e.enableSeconds ? ":ss" : "";
                return e.is24 ? `HH:mm${g}` : `hh:mm${g} aa`
            },
            a = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy",
            i = (g, B) => {
                if (typeof e.format == "function") return e.format(g);
                const q = B || a(),
                    G = e.formatLocale ? {
                        locale: e.formatLocale
                    } : void 0;
                return Array.isArray(g) ? `${Zn(g[0],q,G)} ${e.modelAuto&&!g[1]?"":n.value.textInputOptions.rangeSeparator||"-"} ${g[1]?Zn(g[1],q,G):""}` : Zn(g, q, G)
            },
            s = g => e.timezone ? j2(g, e.timezone) : g,
            l = g => e.timezone ? x2(g, e.timezone) : g,
            d = c(() => g => {
                var B;
                return (B = e.hideNavigation) == null ? void 0 : B.includes(g)
            }),
            y = g => {
                const B = e.maxDate ? ct(s(g), s(K(e.maxDate))) : !1,
                    q = e.minDate ? rt(s(g), s(K(e.minDate))) : !1,
                    G = C(g, e.disabledDates),
                    te = n.value.filters.months.map(z => +z).includes(Ve(g)),
                    T = e.disabledWeekDays.length ? e.disabledWeekDays.some(z => +z === US(g)) : !1,
                    ie = e.allowedDates.length ? !e.allowedDates.some(z => je(s(K(z)), s(g))) : !1,
                    ue = qe(g),
                    O = ue < +e.yearRange[0] || ue > +e.yearRange[1];
                return !(B || q || G || te || O || T || ie)
            },
            m = g => {
                const B = {
                    hours: Ut(K()),
                    minutes: Vt(K()),
                    seconds: Bn(K())
                };
                return Object.assign(B, g)
            },
            f = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [m(e.startTime[0]), m(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? m(e.startTime) : null,
            h = g => !y(g),
            v = g => Array.isArray(g) ? Jn(g[0]) && (g[1] ? Jn(g[1]) : !0) : g ? Jn(g) : !1,
            k = g => g instanceof Date ? g : fI(g),
            w = g => {
                const B = Si(s(g), {
                        weekStartsOn: +e.weekStart
                    }),
                    q = Bk(s(g), {
                        weekStartsOn: +e.weekStart
                    });
                return [B, q]
            },
            C = (g, B) => Array.isArray(B) ? B.some(q => je(s(K(q)), s(g))) : B(g),
            L = (g, B, q) => {
                let G = g ? K(g) : K();
                return (B || B === 0) && (G = er(G, B)), q && (G = fn(G, q)), G
            },
            I = g => lt(K(), {
                hours: Ut(g),
                minutes: Vt(g),
                seconds: Bn(g)
            }),
            R = g => lt(K(), {
                hours: +g.hours || 0,
                minutes: +g.minutes || 0,
                seconds: +g.seconds || 0
            }),
            W = (g, B, q, G) => {
                if (!g) return !0;
                if (G) {
                    const te = q === "max" ? cl(g, B) : ul(g, B),
                        T = {
                            seconds: 0,
                            milliseconds: 0
                        };
                    return te || Bf(lt(g, T), lt(B, T))
                }
                return q === "max" ? g.getTime() <= B.getTime() : g.getTime() >= B.getTime()
            },
            $ = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation,
            E = g => Array.isArray(g) ? [g[0] ? I(g[0]) : null, g[1] ? I(g[1]) : null] : I(g),
            H = g => {
                const B = e.maxTime ? R(e.maxTime) : K(e.maxDate);
                return Array.isArray(g) ? W(g[0], B, "max", !!e.maxDate) && W(g[1], B, "max", !!e.maxDate) : W(g, B, "max", !!e.maxDate)
            },
            X = (g, B) => {
                const q = e.minTime ? R(e.minTime) : K(e.minDate);
                return Array.isArray(g) ? W(g[0], q, "min", !!e.minDate) && W(g[1], q, "min", !!e.minDate) && B : W(g, q, "min", !!e.minDate) && B
            },
            re = g => {
                let B = !0;
                if (!g || $()) return !0;
                const q = !e.minDate && !e.maxDate ? E(g) : g;
                return (e.maxTime || e.maxDate) && (B = H(nt(q))), (e.minTime || e.minDate) && (B = X(nt(q), B)), B
            },
            Y = (g, B) => {
                const q = K(JSON.parse(JSON.stringify(g))),
                    G = [];
                for (let te = 0; te < 7; te++) {
                    const T = zt(q, te),
                        ie = Ve(T) !== B;
                    G.push({
                        text: e.hideOffsetDates && ie ? "" : T.getDate(),
                        value: T,
                        current: !ie,
                        classData: {}
                    })
                }
                return G
            },
            ne = (g, B) => {
                const q = [],
                    G = K(s(new Date(B, g))),
                    te = K(s(new Date(B, g + 1, 0))),
                    T = Si(G, {
                        weekStartsOn: e.weekStart
                    }),
                    ie = ue => {
                        const O = Y(ue, g);
                        if (q.push({
                                days: O
                            }), !q[q.length - 1].days.some(z => je(Rt(z.value), Rt(te)))) {
                            const z = zt(ue, 7);
                            ie(z)
                        }
                    };
                if (ie(T), e.sixWeeks && q.length < 6) {
                    const ue = 6 - q.length;
                    for (let O = 1; O <= ue; O++) {
                        const z = q[q.length - 1],
                            Te = z.days[z.days.length - 1],
                            _e = Y(zt(Te.value, 1), Ve(G));
                        q.push({
                            days: _e
                        })
                    }
                }
                return q
            },
            A = (g, B, q) => [lt(K(g), {
                date: 1
            }), lt(K(), {
                month: B,
                year: q,
                date: 1
            })],
            S = (g, B) => rt(...A(e.minDate, g, B)) || je(...A(e.minDate, g, B)),
            U = (g, B) => ct(...A(e.maxDate, g, B)) || je(...A(e.maxDate, g, B)),
            V = (g, B, q) => {
                let G = !1;
                return e.maxDate && q && U(g, B) && (G = !0), e.minDate && !q && S(g, B) && (G = !0), G
            };
        return {
            checkPartialRangeValue: t,
            checkRangeEnabled: r,
            getZonedDate: s,
            getZonedToUtc: l,
            formatDate: i,
            getDefaultPattern: a,
            validateDate: y,
            getDefaultStartTime: f,
            isDisabled: h,
            isValidDate: v,
            sanitizeDate: k,
            getWeekFromDate: w,
            matchDate: C,
            setDateMonthOrYear: L,
            isValidTime: re,
            getCalendarDays: ne,
            validateMonthYearInRange: (g, B, q, G) => {
                let te = !1;
                return G ? e.minDate && e.maxDate ? te = V(g, B, q) : (e.minDate && S(g, B) || e.maxDate && U(g, B)) && (te = !0) : te = !0, te
            },
            validateMaxDate: U,
            validateMinDate: S,
            defaults: n,
            hideNavigationButtons: d
        }
    },
    He = xt({
        monthYear: [],
        calendar: [],
        time: [],
        actionRow: [],
        selectionGrid: [],
        timePicker: {
            0: [],
            1: []
        },
        monthPicker: []
    }),
    ti = M(null),
    wr = M(!1),
    ni = M(!1),
    ri = M(!1),
    oi = M(!1),
    st = M(0),
    Je = M(0),
    Jt = () => {
        const e = c(() => wr.value ? [...He.selectionGrid, He.actionRow].filter(m => m.length) : ni.value ? [...He.timePicker[0], ...He.timePicker[1], oi.value ? [] : [ti.value], He.actionRow].filter(m => m.length) : ri.value ? [...He.monthPicker, He.actionRow] : [He.monthYear, ...He.calendar, He.time, He.actionRow].filter(m => m.length)),
            t = m => {
                st.value = m ? st.value + 1 : st.value - 1;
                let f = null;
                e.value[Je.value] && (f = e.value[Je.value][st.value]), f || (st.value = m ? st.value - 1 : st.value + 1)
            },
            n = m => {
                Je.value === 0 && !m || Je.value === e.value.length && m || (Je.value = m ? Je.value + 1 : Je.value - 1, e.value[Je.value] ? e.value[Je.value] && !e.value[Je.value][st.value] && st.value !== 0 && (st.value = e.value[Je.value].length - 1) : Je.value = m ? Je.value - 1 : Je.value + 1)
            },
            r = m => {
                let f = null;
                e.value[Je.value] && (f = e.value[Je.value][st.value]), f ? f.focus({
                    preventScroll: !wr.value
                }) : st.value = m ? st.value - 1 : st.value + 1
            },
            o = () => {
                t(!0), r(!0)
            },
            a = () => {
                t(!1), r(!1)
            },
            i = () => {
                n(!1), r(!0)
            },
            s = () => {
                n(!0), r(!0)
            },
            l = (m, f) => {
                He[f] = m
            },
            d = (m, f) => {
                He[f] = m
            },
            y = () => {
                st.value = 0, Je.value = 0
            };
        return {
            buildMatrix: l,
            buildMultiLevelMatrix: d,
            setTimePickerBackRef: m => {
                ti.value = m
            },
            setSelectionGrid: m => {
                wr.value = m, y(), m || (He.selectionGrid = [])
            },
            setTimePicker: (m, f = !1) => {
                ni.value = m, oi.value = f, y(), m || (He.timePicker[0] = [], He.timePicker[1] = [])
            },
            setTimePickerElements: (m, f = 0) => {
                He.timePicker[f] = m
            },
            arrowRight: o,
            arrowLeft: a,
            arrowUp: i,
            arrowDown: s,
            clearArrowNav: () => {
                He.monthYear = [], He.calendar = [], He.time = [], He.actionRow = [], He.selectionGrid = [], He.timePicker[0] = [], He.timePicker[1] = [], wr.value = !1, ni.value = !1, oi.value = !1, ri.value = !1, y(), ti.value = null
            },
            setMonthPicker: m => {
                ri.value = m, y()
            },
            refSets: He
        }
    },
    hd = e => Array.isArray(e),
    sn = e => Array.isArray(e),
    gd = e => Array.isArray(e) && e.length === 2,
    n$ = (e, t, n, r, o) => {
        const {
            getDefaultStartTime: a,
            isDisabled: i,
            sanitizeDate: s,
            getWeekFromDate: l,
            setDateMonthOrYear: d,
            validateMonthYearInRange: y,
            defaults: m
        } = bt(e), f = c({
            get: () => e.internalModelValue,
            set: P => {
                !e.readonly && !e.disabled && t("update:internal-model-value", P)
            }
        }), h = M([]), v = M([{
            month: Ve(K()),
            year: qe(K())
        }]), k = xt({
            hours: e.range ? [Ut(K()), Ut(K())] : Ut(K()),
            minutes: e.range ? [Vt(K()), Vt(K())] : Vt(K()),
            seconds: e.range ? [0, 0] : 0
        }), w = c(() => P => v.value[P] ? v.value[P].month : 0), C = c(() => P => v.value[P] ? v.value[P].year : 0), L = c(() => e.flow ? o.value === e.flow.length : !0), I = (P, Q, fe) => {
            v.value[P].month = Q === null ? v.value[P].month : Q, v.value[P].year = fe === null ? v.value[P].year : fe
        }, R = (P, Q) => {
            k[P] = Q
        };
        Ce(() => {
            f.value || (e.startDate && (I(0, Ve(K(e.startDate)), qe(K(e.startDate))), m.value.multiCalendars && at(0)), m.value.startTime && U()), W(!0)
        });
        const W = (P = !1) => {
                if (f.value) return Array.isArray(f.value) ? re(P) : E(f.value);
                if (e.timePicker) return Y();
                if (e.monthPicker && !e.range) return ne();
                if (e.yearPicker && !e.range) return A();
                if (m.value.multiCalendars) return $(K(), P)
            },
            $ = (P, Q = !1) => {
                if ((!m.value.multiCalendars || !e.multiStatic || Q) && I(0, Ve(P), qe(P)), m.value.multiCalendars)
                    for (let fe = 1; fe < m.value.multiCalendars; fe++) {
                        const we = lt(K(), {
                                month: w.value(fe - 1),
                                year: C.value(fe - 1)
                            }),
                            xe = Sf(we, {
                                months: 1
                            });
                        v.value[fe] = {
                            month: Ve(xe),
                            year: qe(xe)
                        }
                    }
            },
            E = P => {
                $(P), R("hours", Ut(P)), R("minutes", Vt(P)), R("seconds", Bn(P))
            },
            H = (P, Q) => {
                $(P[0], Q);
                const fe = (we, xe) => [we(P[0]), P[1] ? we(P[1]) : k[xe][1]];
                R("hours", fe(Ut, "hours")), R("minutes", fe(Vt, "minutes")), R("seconds", fe(Bn, "seconds"))
            },
            X = (P, Q) => {
                if (e.range && !e.multiDates) return H(P, Q);
                if (e.multiDates) {
                    const fe = P[P.length - 1];
                    return E(fe)
                }
            },
            re = P => {
                const Q = f.value;
                X(Q, P), m.value.multiCalendars && e.multiCalendarsSolo && g()
            },
            Y = () => {
                if (U(), !e.range) f.value = _t(K(), k.hours, k.minutes, S());
                else {
                    const P = k.hours,
                        Q = k.minutes;
                    f.value = [_t(K(), P[0], Q[0], S()), _t(K(), P[1], Q[1], S(!1))]
                }
            },
            ne = () => {
                f.value = d(K(), w.value(0), C.value(0))
            },
            A = () => {
                f.value = K()
            },
            S = (P = !0) => e.enableSeconds ? Array.isArray(k.seconds) ? P ? k.seconds[0] : k.seconds[1] : k.seconds : 0,
            U = () => {
                const P = a();
                if (P) {
                    const Q = Array.isArray(P),
                        fe = Q ? [+P[0].hours, +P[1].hours] : +P.hours,
                        we = Q ? [+P[0].minutes, +P[1].minutes] : +P.minutes,
                        xe = Q ? [+P[0].seconds, +P[1].seconds] : +P.seconds;
                    R("hours", fe), R("minutes", we), e.enableSeconds && R("seconds", xe)
                }
            },
            V = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null,
            g = () => {
                if (Array.isArray(f.value) && f.value.length === 2) {
                    const P = K(K(f.value[1] ? f.value[1] : At(f.value[0], 1))),
                        [Q, fe] = [Ve(f.value[0]), qe(f.value[0])],
                        [we, xe] = [Ve(f.value[1]), qe(f.value[1])];
                    (Q !== we || Q === we && fe !== xe) && e.multiCalendarsSolo && I(1, Ve(P), qe(P))
                }
            },
            B = P => {
                const Q = At(P, 1);
                return {
                    month: Ve(Q),
                    year: qe(Q)
                }
            },
            q = P => {
                const Q = Ve(K(P)),
                    fe = qe(K(P));
                if (I(0, Q, fe), m.value.multiCalendars > 0)
                    for (let we = 1; we < m.value.multiCalendars; we++) {
                        const xe = B(lt(K(P), {
                            year: w.value(we - 1),
                            month: C.value(we - 1)
                        }));
                        I(we, xe.month, xe.year)
                    }
            },
            G = P => {
                if (f.value && Array.isArray(f.value))
                    if (f.value.some(Q => je(P, Q))) {
                        const Q = f.value.filter(fe => !je(fe, P));
                        f.value = Q.length ? Q : null
                    } else(e.multiDatesLimit && +e.multiDatesLimit > f.value.length || !e.multiDatesLimit) && f.value.push(P);
                else f.value = [P]
            },
            te = (P, Q) => {
                const fe = ct(P, Q) ? Q : P,
                    we = ct(Q, P) ? Q : P;
                return ju({
                    start: fe,
                    end: we
                })
            },
            T = P => {
                if (Array.isArray(f.value) && f.value[0]) {
                    const Q = Lk(P, f.value[0]),
                        fe = te(f.value[0], P),
                        we = fe.length === 1 ? 0 : fe.filter(Dt => i(Dt)).length,
                        xe = Math.abs(Q) - we;
                    if (e.minRange && e.maxRange) return xe >= +e.minRange && xe <= +e.maxRange;
                    if (e.minRange) return xe >= +e.minRange;
                    if (e.maxRange) return xe <= +e.maxRange
                }
                return !0
            },
            ie = P => Array.isArray(f.value) && f.value.length === 2 ? e.fixedStart && (ct(P, f.value[0]) || je(P, f.value[0])) ? [f.value[0], P] : e.fixedEnd && (rt(P, f.value[1]) || je(P, f.value[1])) ? [P, f.value[1]] : f.value : [],
            ue = () => {
                e.autoApply && L.value && t("auto-apply")
            },
            O = () => {
                e.autoApply && t("select-date")
            },
            z = P => !ju({
                start: P[0],
                end: P[1]
            }).some(Q => i(Q)),
            Te = P => (f.value = l(K(P.value)), ue()),
            _e = P => {
                const Q = _t(K(P.value), k.hours, k.minutes, S());
                e.multiDates ? G(Q) : f.value = Q, n(), ue()
            },
            me = () => {
                h.value = f.value ? f.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = [])
            },
            Ne = (P, Q) => {
                const fe = [K(P.value), zt(K(P.value), +e.autoRange)];
                z(fe) && (Q && q(P.value), h.value = fe)
            },
            ot = P => {
                h.value = ie(K(P.value))
            },
            ve = P => e.noDisabledRange ? te(h.value[0], P).some(Q => i(Q)) : !1,
            ke = (P, Q) => {
                if (me(), e.autoRange) return Ne(P, Q);
                if (e.fixedStart || e.fixedEnd) return ot(P);
                h.value[0] ? T(K(P.value)) && !ve(P.value) && (rt(K(P.value), K(h.value[0])) ? h.value.unshift(K(P.value)) : h.value[1] = K(P.value)) : h.value[0] = K(P.value)
            },
            Be = P => {
                h.value[P] = _t(h.value[P], k.hours[P], k.minutes[P], S(P !== 1))
            },
            Ie = () => {
                h.value.length && (h.value[0] && !h.value[1] ? Be(0) : (Be(0), Be(1), n()), f.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"))
            },
            en = (P, Q = !1) => {
                if (!(i(P.value) || !P.current && e.hideOffsetDates)) {
                    if (e.weekPicker) return Te(P);
                    if (!e.range) return _e(P);
                    sn(k.hours) && sn(k.minutes) && !e.multiDates && (ke(P, Q), Ie())
                }
            },
            Ct = P => {
                const Q = P.find(fe => fe.current);
                return Q ? jS(Q.value) : ""
            },
            at = P => {
                for (let Q = P - 1; Q >= 0; Q--) {
                    const fe = En(lt(K(), {
                        month: w.value(Q + 1),
                        year: C.value(Q + 1)
                    }), 1);
                    I(Q, Ve(fe), qe(fe))
                }
                for (let Q = P + 1; Q <= m.value.multiCalendars - 1; Q++) {
                    const fe = At(lt(K(), {
                        month: w.value(Q - 1),
                        year: C.value(Q - 1)
                    }), 1);
                    I(Q, Ve(fe), qe(fe))
                }
            },
            Et = P => d(K(), w.value(P), C.value(P)),
            Yt = P => _t(P, k.hours, k.minutes, S()),
            tn = (P, Q) => {
                const fe = e.monthPicker ? w.value(P) !== Q.month || !Q.fromNav : C.value(P) !== Q.year;
                if (I(P, Q.month, Q.year), m.value.multiCalendars && !e.multiCalendarsSolo && at(P), e.monthPicker || e.yearPicker)
                    if (e.range) {
                        if (fe) {
                            let we = f.value ? f.value.slice() : [];
                            we.length === 2 && we[1] !== null && (we = []), we.length ? rt(Et(P), we[0]) ? we.unshift(Et(P)) : we[1] = Et(P) : we = [Et(P)], f.value = we
                        }
                    } else f.value = Et(P);
                t("update-month-year", {
                    instance: P,
                    month: Q.month,
                    year: Q.year
                }), r(e.multiCalendarsSolo ? P : void 0)
            },
            Hn = async (P = !1) => {
                if (e.autoApply && (e.monthPicker || e.yearPicker)) {
                    await jt();
                    const Q = e.monthPicker ? P : !1;
                    e.range ? t("auto-apply", Q || !f.value || f.value.length === 1) : t("auto-apply", Q)
                }
                n()
            },
            vn = (P, Q) => {
                const fe = lt(K(), {
                        month: w.value(Q),
                        year: C.value(Q)
                    }),
                    we = P < 0 ? At(fe, 1) : En(fe, 1);
                y(Ve(we), qe(we), P < 0, e.preventMinMaxNavigation) && (I(Q, Ve(we), qe(we)), m.value.multiCalendars && !e.multiCalendarsSolo && at(Q), r())
            },
            nn = P => {
                hd(P) && hd(f.value) && sn(k.hours) && sn(k.minutes) ? (P[0] && f.value[0] && (f.value[0] = _t(P[0], k.hours[0], k.minutes[0], S())), P[1] && f.value[1] && (f.value[1] = _t(P[1], k.hours[1], k.minutes[1], S(!1)))) : e.multiDates && Array.isArray(f.value) ? f.value[f.value.length - 1] = Yt(P) : !e.range && !gd(P) && (f.value = Yt(P)), t("time-update")
            },
            Un = (P, Q = !0, fe = !1) => {
                const we = Q ? P : k.hours,
                    xe = !Q && !fe ? P : k.minutes,
                    Dt = fe ? P : k.seconds;
                if (e.range && gd(f.value) && sn(we) && sn(xe) && sn(Dt) && !e.disableTimeRangeValidation) {
                    const rn = ce => _t(f.value[ce], we[ce], xe[ce], Dt[ce]),
                        j = ce => hl(f.value[ce], 0);
                    if (je(f.value[0], f.value[1]) && (ul(rn(0), j(1)) || cl(rn(1), j(0)))) return
                }
                if (R("hours", we), R("minutes", xe), R("seconds", Dt), f.value)
                    if (e.multiDates) {
                        const rn = V();
                        rn && nn(rn)
                    } else nn(f.value);
                else e.timePicker && nn(e.range ? [K(), K()] : K());
                n()
            },
            Vn = (P, Q) => {
                e.monthChangeOnScroll && vn(e.monthChangeOnScroll !== "inverse" ? -P.deltaY : P.deltaY, Q)
            },
            bn = (P, Q, fe = !1) => {
                e.monthChangeOnArrows && e.vertical === fe && pr(P, Q)
            },
            pr = (P, Q) => {
                vn(P === "right" ? -1 : 1, Q)
            };
        return {
            time: k,
            month: w,
            year: C,
            modelValue: f,
            calendars: v,
            monthYearSelect: Hn,
            isDisabled: i,
            updateTime: Un,
            getWeekNum: Ct,
            selectDate: en,
            updateMonthYear: tn,
            handleScroll: Vn,
            getMarker: P => e.markers.find(Q => je(s(P.value), s(Q.date))),
            handleArrow: bn,
            handleSwipe: pr,
            selectCurrentDate: () => {
                e.range ? f.value && Array.isArray(f.value) && f.value[0] ? f.value = rt(K(), f.value[0]) ? [K(), f.value[0]] : [f.value[0], K()] : f.value = [K()] : f.value = K(), O()
            },
            presetDateRange: (P, Q) => {
                Q || P.length && P.length <= 2 && e.range && (f.value = P.map(fe => K(fe)), O())
            }
        }
    },
    r$ = (e, t, n) => {
        const r = M(),
            {
                getZonedToUtc: o,
                getZonedDate: a,
                formatDate: i,
                getDefaultPattern: s,
                checkRangeEnabled: l,
                checkPartialRangeValue: d,
                isValidDate: y,
                setDateMonthOrYear: m,
                defaults: f
            } = bt(t),
            h = M("");
        Re(r, () => {
            e("internal-model-change", r.value)
        });
        const v = T => {
                const ie = T || K();
                return {
                    hours: Ut(ie),
                    minutes: Vt(ie),
                    seconds: t.enableSeconds ? Bn(ie) : 0
                }
            },
            k = T => ({
                month: Ve(T),
                year: qe(T)
            }),
            w = T => Array.isArray(T) ? l(() => [fn(K(), T[0]), T[1] ? fn(K(), T[1]) : d()]) : fn(K(), +T),
            C = T => Array.isArray(T) ? [_t(null, +T[0].hours, +T[0].minutes, T[0].seconds), _t(null, +T[1].hours, +T[1].minutes, T[1].seconds)] : _t(null, T.hours, T.minutes, T ? .seconds),
            L = T => Array.isArray(T) ? l(() => [m(null, +T[0].month, +T[0].year), T[1] ? m(null, +T[1].month, +T[1].year) : d()]) : m(null, +T.month, +T.year),
            I = T => {
                if (Array.isArray(T)) return T.map(ie => g(ie));
                throw new Error(ia.dateArr("multi-dates"))
            },
            R = T => {
                if (Array.isArray(T)) return [K(T[0]), K(T[1])];
                throw new Error(ia.dateArr("week-picker"))
            },
            W = T => t.modelAuto ? Array.isArray(T) ? [g(T[0]), g(T[1])] : t.autoApply ? [g(T)] : [g(T), null] : Array.isArray(T) ? l(() => [g(T[0]), T[1] ? g(T[1]) : d()]) : g(T),
            $ = () => {
                Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(d())
            },
            E = () => {
                const T = r.value;
                return [B(T[0]), T[1] ? B(T[1]) : d()]
            },
            H = () => r.value[1] ? E() : B(nt(r.value[0])),
            X = () => (r.value || []).map(T => B(T)),
            re = () => ($(), t.modelAuto ? H() : t.multiDates ? X() : Array.isArray(r.value) ? l(() => E()) : B(nt(r.value))),
            Y = T => T ? t.timePicker ? C(nt(T)) : t.monthPicker ? L(nt(T)) : t.yearPicker ? w(nt(T)) : t.multiDates ? I(nt(T)) : t.weekPicker ? R(nt(T)) : W(nt(T)) : null,
            ne = T => {
                const ie = Y(T);
                y(nt(ie)) ? (r.value = nt(ie), V()) : (r.value = null, h.value = "")
            },
            A = () => {
                var T;
                const ie = ue => {
                    var O;
                    return Zn(ue, (O = f.value.textInputOptions) == null ? void 0 : O.format)
                };
                return `${ie(r.value[0])} ${(T=f.value.textInputOptions)==null?void 0:T.rangeSeparator} ${r.value[1]?ie(r.value[1]):""}`
            },
            S = () => {
                var T;
                return n.value && r.value ? Array.isArray(r.value) ? A() : Zn(r.value, (T = f.value.textInputOptions) == null ? void 0 : T.format) : i(r.value)
            },
            U = () => {
                var T;
                return r.value ? t.multiDates ? r.value.map(ie => i(ie)).join("; ") : t.textInput && typeof((T = f.value.textInputOptions) == null ? void 0 : T.format) == "string" ? S() : i(r.value) : ""
            },
            V = () => {
                !t.format || typeof t.format == "string" ? h.value = U() : h.value = t.format(r.value)
            },
            g = T => {
                if (t.utc) {
                    const ie = new Date(T);
                    return t.utc === "preserve" ? new Date(ie.getTime() + ie.getTimezoneOffset() * 6e4) : ie
                }
                return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? a(new Date(T)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Bs(T, s(), new Date) : a(Bs(T, t.modelType, new Date)) : a(new Date(T))
            },
            B = T => t.utc ? v2(T, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +o(T) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(o(T)) : i(o(T), t.modelType) : o(T),
            q = T => {
                e("update:model-value", T)
            },
            G = T => Array.isArray(r.value) ? [T(r.value[0]), r.value[1] ? T(r.value[1]) : d()] : T(nt(r.value)),
            te = T => q(nt(G(T)));
        return {
            inputValue: h,
            internalModelValue: r,
            checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
            parseExternalModelValue: ne,
            formatInputValue: V,
            emitModelValue: () => (V(), t.monthPicker ? te(k) : t.timePicker ? te(v) : t.yearPicker ? te(qe) : t.weekPicker ? q(r.value) : q(re()))
        }
    },
    o$ = (e, t) => {
        const {
            validateMonthYearInRange: n,
            validateMaxDate: r,
            validateMinDate: o,
            defaults: a
        } = bt(e), i = (m, f) => {
            let h = m;
            return a.value.filters.months.includes(Ve(h)) ? (h = f ? At(m, 1) : En(m, 1), i(h, f)) : h
        }, s = (m, f) => {
            let h = m;
            return a.value.filters.years.includes(qe(h)) ? (h = f ? Pf(m, 1) : $I(m, 1), s(h, f)) : h
        }, l = m => {
            const f = lt(new Date, {
                month: e.month,
                year: e.year
            });
            let h = m ? At(f, 1) : En(f, 1),
                v = Ve(h),
                k = qe(h);
            a.value.filters.months.includes(v) && (h = i(h, m), v = Ve(h), k = qe(h)), a.value.filters.years.includes(k) && (h = s(h, m), k = qe(h)), n(v, k, m, e.preventMinMaxNavigation) && d(v, k)
        }, d = (m, f) => {
            t("update-month-year", {
                month: m,
                year: f
            })
        }, y = c(() => m => {
            if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate) return !1;
            const f = lt(new Date, {
                    month: e.month,
                    year: e.year
                }),
                h = m ? At(f, 1) : En(f, 1),
                v = [Ve(h), qe(h)];
            return m ? !r(...v) : !o(...v)
        });
        return {
            handleMonthYearChange: l,
            isDisabled: y,
            updateMonthYear: d
        }
    };
var po = (e => (e.center = "center", e.left = "left", e.right = "right", e))(po || {});
const a$ = (e, t, n, r) => {
        const o = M({
                top: "0",
                left: "0",
                transform: "none"
            }),
            a = M(!1),
            i = pi(r, "teleportCenter");
        Re(i, () => {
            w()
        });
        const s = E => {
                const H = E.getBoundingClientRect();
                return {
                    left: H.left + window.scrollX,
                    top: H.top + window.scrollY
                }
            },
            l = E => {
                const H = E.getBoundingClientRect();
                let X = 0,
                    re = 0;
                for (; E && !isNaN(E.offsetLeft) && !isNaN(E.offsetTop);) X += E.offsetLeft - E.scrollLeft, re = H.top + E.scrollTop, E = E.offsetParent;
                return {
                    top: re,
                    left: X
                }
            },
            d = (E, H) => {
                o.value.left = `${E+H}px`, o.value.transform = "translateX(-100%)"
            },
            y = E => {
                o.value.left = `${E}px`, o.value.transform = "translateX(0)"
            },
            m = (E, H, X = !1) => {
                r.position === po.left && y(E), r.position === po.right && d(E, H), r.position === po.center && (o.value.left = `${E+H/2}px`, o.value.transform = X ? "translate(-50%, -50%)" : "translateX(-50%)")
            },
            f = E => {
                const {
                    width: H,
                    height: X
                } = E.getBoundingClientRect(), {
                    top: re,
                    left: Y
                } = r.altPosition ? l(E) : s(E);
                return {
                    top: re,
                    left: Y,
                    width: H,
                    height: X
                }
            },
            h = () => {
                const E = et(t);
                if (E) {
                    const {
                        top: H,
                        left: X,
                        width: re,
                        height: Y
                    } = f(E);
                    o.value.top = `${H+Y/2}px`, o.value.transform = "translateY(-50%)", m(X, re, !0)
                }
            },
            v = () => {
                o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed"
            },
            k = () => {
                const E = et(t);
                o.value = r.altPosition(E)
            },
            w = (E = !0) => {
                if (!r.inline) return i.value ? v() : r.altPosition && typeof r.altPosition != "boolean" ? k() : (E && n("recalculate-position"), $())
            },
            C = ({
                inputEl: E,
                menuEl: H,
                left: X,
                width: re
            }) => {
                window.screen.width > 768 && m(X, re), R(E, H)
            },
            L = (E, H) => {
                const {
                    top: X,
                    left: re,
                    height: Y,
                    width: ne
                } = f(E);
                o.value.top = `${Y+X+ +r.offset}px`, C({
                    inputEl: E,
                    menuEl: H,
                    left: re,
                    width: ne
                }), a.value = !1
            },
            I = (E, H) => {
                const {
                    top: X,
                    left: re,
                    width: Y
                } = f(E), {
                    height: ne
                } = H.getBoundingClientRect();
                o.value.top = `${X-ne-+r.offset}px`, C({
                    inputEl: E,
                    menuEl: H,
                    left: re,
                    width: Y
                }), a.value = !0
            },
            R = (E, H) => {
                if (r.autoPosition) {
                    const {
                        left: X,
                        width: re
                    } = f(E), {
                        left: Y,
                        right: ne
                    } = H.getBoundingClientRect();
                    if (Y < 0) return y(X);
                    if (ne > document.documentElement.clientWidth) return d(X, re)
                }
            },
            W = (E, H) => {
                const {
                    height: X
                } = H.getBoundingClientRect(), {
                    top: re,
                    height: Y
                } = E.getBoundingClientRect(), ne = window.innerHeight - re - Y, A = re;
                return X <= ne ? L(E, H) : X > ne && X <= A ? I(E, H) : ne >= A ? L(E, H) : I(E, H)
            },
            $ = () => {
                const E = et(t),
                    H = et(e);
                if (E && H) return r.autoPosition ? W(E, H) : L(E, H)
            };
        return {
            openOnTop: a,
            menuPosition: o,
            setMenuPosition: w,
            setInitialPosition: h
        }
    },
    Tn = [{
        name: "clock-icon",
        use: ["time", "calendar"]
    }, {
        name: "arrow-left",
        use: ["month-year", "calendar"]
    }, {
        name: "arrow-right",
        use: ["month-year", "calendar"]
    }, {
        name: "arrow-up",
        use: ["time", "calendar"]
    }, {
        name: "arrow-down",
        use: ["time", "calendar"]
    }, {
        name: "calendar-icon",
        use: ["month-year", "time", "calendar"]
    }, {
        name: "day",
        use: ["calendar"]
    }, {
        name: "month-overlay-value",
        use: ["calendar", "month-year"]
    }, {
        name: "year-overlay-value",
        use: ["calendar", "month-year"]
    }, {
        name: "year-overlay",
        use: ["month-year"]
    }, {
        name: "month-overlay",
        use: ["month-year"]
    }, {
        name: "month-overlay-header",
        use: ["month-year"]
    }, {
        name: "year-overlay-header",
        use: ["month-year"]
    }, {
        name: "hours-overlay-value",
        use: ["calendar", "time"]
    }, {
        name: "minutes-overlay-value",
        use: ["calendar", "time"]
    }, {
        name: "seconds-overlay-value",
        use: ["calendar", "time"]
    }, {
        name: "hours",
        use: ["calendar", "time"]
    }, {
        name: "minutes",
        use: ["calendar", "time"]
    }, {
        name: "month",
        use: ["calendar", "month-year"]
    }, {
        name: "year",
        use: ["calendar", "month-year"]
    }, {
        name: "action-select",
        use: ["action"]
    }, {
        name: "action-preview",
        use: ["action"]
    }, {
        name: "calendar-header",
        use: ["calendar"]
    }, {
        name: "marker-tooltip",
        use: ["calendar"]
    }, {
        name: "now-button",
        use: []
    }, {
        name: "time-picker-overlay",
        use: ["calendar", "time"]
    }, {
        name: "am-pm-button",
        use: ["calendar", "time"]
    }, {
        name: "left-sidebar",
        use: ["menu"]
    }, {
        name: "right-sidebar",
        use: ["menu"]
    }, {
        name: "month-year",
        use: ["month-year"]
    }, {
        name: "time-picker",
        use: ["menu"]
    }, {
        name: "action-row",
        use: ["action"]
    }],
    i$ = [{
        name: "trigger"
    }, {
        name: "input-icon"
    }, {
        name: "clear-icon"
    }, {
        name: "dp-input"
    }],
    s$ = {
        all: () => Tn,
        monthYear: () => Tn.filter(e => e.use.includes("month-year")),
        input: () => i$,
        timePicker: () => Tn.filter(e => e.use.includes("time")),
        action: () => Tn.filter(e => e.use.includes("action")),
        calendar: () => Tn.filter(e => e.use.includes("calendar")),
        menu: () => Tn.filter(e => e.use.includes("menu"))
    },
    cn = (e, t, n) => {
        const r = [];
        return s$[t]().forEach(o => {
            e[o.name] && r.push(o.name)
        }), n && n.length && n.forEach(o => {
            o.slot && r.push(o.slot)
        }), r
    },
    ya = e => ({
        transitionName: c(() => t => e && typeof e != "boolean" ? t ? e.open : e.close : ""),
        showTransition: !!e
    }),
    Zt = {
        multiCalendars: {
            type: [Boolean, Number, String],
            default: null
        },
        modelValue: {
            type: [String, Date, Array, Object, Number],
            default: null
        },
        modelType: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: "center"
        },
        dark: {
            type: Boolean,
            default: !1
        },
        format: {
            type: [String, Function],
            default: () => null
        },
        closeOnScroll: {
            type: Boolean,
            default: !1
        },
        autoPosition: {
            type: Boolean,
            default: !0
        },
        closeOnAutoApply: {
            type: Boolean,
            default: !0
        },
        teleport: {
            type: [String, Object],
            default: "body"
        },
        altPosition: {
            type: [Boolean, Function],
            default: !1
        },
        transitions: {
            type: [Boolean, Object],
            default: !0
        },
        formatLocale: {
            type: Object,
            default: null
        },
        utc: {
            type: [Boolean, String],
            default: !1
        },
        ariaLabels: {
            type: Object,
            default: () => ({})
        },
        offset: {
            type: [Number, String],
            default: 10
        },
        hideNavigation: {
            type: Array,
            default: () => []
        },
        timezone: {
            type: String,
            default: null
        },
        vertical: {
            type: Boolean,
            default: !1
        },
        disableMonthYearSelect: {
            type: Boolean,
            default: !1
        },
        menuClassName: {
            type: String,
            default: null
        },
        dayClass: {
            type: Function,
            default: null
        },
        yearRange: {
            type: Array,
            default: () => [1900, 2100]
        },
        multiCalendarsSolo: {
            type: Boolean,
            default: !1
        },
        calendarCellClassName: {
            type: String,
            default: null
        },
        enableTimePicker: {
            type: Boolean,
            default: !0
        },
        autoApply: {
            type: Boolean,
            default: !1
        },
        disabledDates: {
            type: [Array, Function],
            default: () => []
        },
        monthNameFormat: {
            type: String,
            default: "short"
        },
        startDate: {
            type: [Date, String],
            default: null
        },
        startTime: {
            type: [Object, Array],
            default: null
        },
        monthYearComponent: {
            type: Object,
            default: null
        },
        timePickerComponent: {
            type: Object,
            default: null
        },
        actionRowComponent: {
            type: Object,
            default: null
        },
        hideOffsetDates: {
            type: Boolean,
            default: !1
        },
        autoRange: {
            type: [Number, String],
            default: null
        },
        noToday: {
            type: Boolean,
            default: !1
        },
        disabledWeekDays: {
            type: Array,
            default: () => []
        },
        allowedDates: {
            type: Array,
            default: () => []
        },
        showNowButton: {
            type: Boolean,
            default: !1
        },
        nowButtonLabel: {
            type: String,
            default: "Now"
        },
        markers: {
            type: Array,
            default: () => []
        },
        modeHeight: {
            type: [Number, String],
            default: 255
        },
        escClose: {
            type: Boolean,
            default: !0
        },
        spaceConfirm: {
            type: Boolean,
            default: !0
        },
        monthChangeOnArrows: {
            type: Boolean,
            default: !0
        },
        presetRanges: {
            type: Array,
            default: () => []
        },
        flow: {
            type: Array,
            default: () => []
        },
        preventMinMaxNavigation: {
            type: Boolean,
            default: !1
        },
        minRange: {
            type: [Number, String],
            default: null
        },
        maxRange: {
            type: [Number, String],
            default: null
        },
        multiDatesLimit: {
            type: [Number, String],
            default: null
        },
        reverseYears: {
            type: Boolean,
            default: !1
        },
        keepActionRow: {
            type: Boolean,
            default: !1
        },
        weekPicker: {
            type: Boolean,
            default: !1
        },
        filters: {
            type: Object,
            default: () => ({})
        },
        arrowNavigation: {
            type: Boolean,
            default: !1
        },
        multiStatic: {
            type: Boolean,
            default: !0
        },
        disableTimeRangeValidation: {
            type: Boolean,
            default: !1
        },
        highlight: {
            type: [Array, Function],
            default: null
        },
        highlightWeekDays: {
            type: Array,
            default: null
        },
        highlightDisabledDays: {
            type: Boolean,
            default: !1
        },
        teleportCenter: {
            type: Boolean,
            default: !1
        },
        locale: {
            type: String,
            default: "en-Us"
        },
        weekNumName: {
            type: String,
            default: "W"
        },
        weekStart: {
            type: [Number, String],
            default: 1
        },
        weekNumbers: {
            type: Boolean,
            default: !1
        },
        calendarClassName: {
            type: String,
            default: null
        },
        noSwipe: {
            type: Boolean,
            default: !1
        },
        monthChangeOnScroll: {
            type: [Boolean, String],
            default: !0
        },
        dayNames: {
            type: [Function, Array],
            default: null
        },
        monthPicker: {
            type: Boolean,
            default: !1
        },
        customProps: {
            type: Object,
            default: null
        },
        yearPicker: {
            type: Boolean,
            default: !1
        },
        modelAuto: {
            type: Boolean,
            default: !1
        },
        selectText: {
            type: String,
            default: "Select"
        },
        cancelText: {
            type: String,
            default: "Cancel"
        },
        previewFormat: {
            type: [String, Function],
            default: () => ""
        },
        multiDates: {
            type: Boolean,
            default: !1
        },
        partialRange: {
            type: Boolean,
            default: !0
        },
        ignoreTimeValidation: {
            type: Boolean,
            default: !1
        },
        minDate: {
            type: [Date, String],
            default: null
        },
        maxDate: {
            type: [Date, String],
            default: null
        },
        minTime: {
            type: Object,
            default: null
        },
        maxTime: {
            type: Object,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: ""
        },
        hideInputIcon: {
            type: Boolean,
            default: !1
        },
        clearable: {
            type: Boolean,
            default: !0
        },
        state: {
            type: Boolean,
            default: null
        },
        required: {
            type: Boolean,
            default: !1
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        inputClassName: {
            type: String,
            default: null
        },
        inlineWithInput: {
            type: Boolean,
            default: !1
        },
        textInputOptions: {
            type: Object,
            default: () => null
        },
        fixedStart: {
            type: Boolean,
            default: !1
        },
        fixedEnd: {
            type: Boolean,
            default: !1
        },
        timePicker: {
            type: Boolean,
            default: !1
        },
        enableSeconds: {
            type: Boolean,
            default: !1
        },
        is24: {
            type: Boolean,
            default: !0
        },
        noHoursOverlay: {
            type: Boolean,
            default: !1
        },
        noMinutesOverlay: {
            type: Boolean,
            default: !1
        },
        noSecondsOverlay: {
            type: Boolean,
            default: !1
        },
        hoursGridIncrement: {
            type: [String, Number],
            default: 1
        },
        minutesGridIncrement: {
            type: [String, Number],
            default: 5
        },
        secondsGridIncrement: {
            type: [String, Number],
            default: 5
        },
        hoursIncrement: {
            type: [Number, String],
            default: 1
        },
        minutesIncrement: {
            type: [Number, String],
            default: 1
        },
        secondsIncrement: {
            type: [Number, String],
            default: 1
        },
        range: {
            type: Boolean,
            default: !1
        },
        uid: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        inline: {
            type: Boolean,
            default: !1
        },
        textInput: {
            type: Boolean,
            default: !1
        },
        onClickOutside: {
            type: Function,
            default: null
        },
        noDisabledRange: {
            type: Boolean,
            default: !1
        },
        sixWeeks: {
            type: Boolean,
            default: !1
        }
    },
    l$ = ["aria-label", "aria-disabled", "aria-readonly"],
    u$ = {
        key: 1,
        class: "dp__input_wrap"
    },
    c$ = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"],
    d$ = {
        key: 2,
        class: "dp__input_icon"
    },
    f$ = {
        key: 4,
        class: "dp__clear_icon"
    },
    m$ = Z({
        __name: "DatepickerInput",
        props: {
            isMenuOpen: {
                type: Boolean,
                default: !1
            },
            inputValue: {
                type: String,
                default: ""
            },
            ...Zt
        },
        emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    getDefaultPattern: o,
                    isValidDate: a,
                    defaults: i
                } = bt(r),
                s = M(),
                l = M(null),
                d = M(!1),
                y = c(() => ({
                    dp__pointer: !r.disabled && !r.readonly && !r.textInput,
                    dp__disabled: r.disabled,
                    dp__input_readonly: !r.textInput,
                    dp__input: !0,
                    dp__input_icon_pad: !r.hideInputIcon,
                    dp__input_valid: r.state,
                    dp__input_invalid: r.state === !1,
                    dp__input_focus: d.value || r.isMenuOpen,
                    dp__input_reg: !r.textInput,
                    [r.inputClassName]: !!r.inputClassName
                })),
                m = () => {
                    n("set-input-date", null), r.autoApply && (n("set-empty-date"), s.value = null)
                },
                f = $ => {
                    var E;
                    return y2($, ((E = i.value.textInputOptions) == null ? void 0 : E.format) || o())
                },
                h = $ => {
                    const {
                        rangeSeparator: E
                    } = i.value.textInputOptions;
                    if (r.range) {
                        const [H, X] = $.split(`${E}`);
                        if (H && X) {
                            const re = f(H.trim()),
                                Y = f(X.trim());
                            s.value = re && Y ? [re, Y] : null
                        }
                    } else if (r.multiDates) {
                        const H = $.split(";");
                        s.value = H.map(X => f(X.trim())).filter(X => X)
                    } else s.value = f($)
                },
                v = $ => {
                    var E;
                    const {
                        value: H
                    } = $.target;
                    H !== "" ? ((E = i.value.textInputOptions) != null && E.openMenu && !r.isMenuOpen && n("open"), h(H), n("set-input-date", s.value)) : m(), n("update:input-value", H)
                },
                k = () => {
                    var $, E;
                    ($ = i.value.textInputOptions) != null && $.enterSubmit && a(s.value) && r.inputValue !== "" ? (n("set-input-date", s.value, !0), s.value = null) : (E = i.value.textInputOptions) != null && E.enterSubmit && r.inputValue === "" && (s.value = null, n("clear"))
                },
                w = () => {
                    var $, E;
                    ($ = i.value.textInputOptions) != null && $.tabSubmit && a(s.value) && r.inputValue !== "" ? (n("set-input-date", s.value, !0), s.value = null) : (E = i.value.textInputOptions) != null && E.tabSubmit && r.inputValue === "" && (s.value = null, n("clear"))
                },
                C = () => {
                    d.value = !0, n("focus")
                },
                L = $ => {
                    var E;
                    $.preventDefault(), $.stopImmediatePropagation(), $.stopPropagation(), r.textInput && ((E = i.value.textInputOptions) != null && E.openMenu) && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle")
                },
                I = () => {
                    d.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && s.value && (n("set-input-date", s.value), n("select-date"), s.value = null)
                },
                R = () => {
                    n("clear")
                },
                W = $ => {
                    r.textInput || $.preventDefault()
                };
            return t({
                focusInput: () => {
                    l.value && l.value.focus({
                        preventScroll: !0
                    })
                }
            }), ($, E) => {
                var H;
                return u(), p("div", {
                    onClick: L,
                    "aria-label": (H = D(i).ariaLabels) == null ? void 0 : H.input,
                    role: "textbox",
                    "aria-multiline": "false",
                    "aria-disabled": $.disabled,
                    "aria-readonly": $.readonly
                }, [$.$slots.trigger && !$.$slots["dp-input"] && !$.inline ? ae($.$slots, "trigger", {
                    key: 0
                }) : _("", !0), !$.$slots.trigger && (!$.inline || $.inlineWithInput) ? (u(), p("div", u$, [$.$slots["dp-input"] && !$.$slots.trigger && !$.inline ? ae($.$slots, "dp-input", {
                    key: 0,
                    value: e.inputValue,
                    onInput: v,
                    onEnter: k,
                    onTab: w,
                    onClear: R
                }) : _("", !0), $.$slots["dp-input"] ? _("", !0) : (u(), p("input", {
                    key: 1,
                    ref_key: "inputRef",
                    ref: l,
                    id: $.uid ? `dp-input-${$.uid}` : void 0,
                    name: $.name,
                    class: F(D(y)),
                    inputmode: $.textInput ? "text" : "none",
                    placeholder: $.placeholder,
                    disabled: $.disabled,
                    readonly: $.readonly,
                    required: $.required,
                    value: e.inputValue,
                    autocomplete: $.autocomplete,
                    onInput: v,
                    onKeydown: [Se(L, ["enter"]), Se(w, ["tab"])],
                    onBlur: I,
                    onFocus: C,
                    onKeypress: W
                }, null, 42, c$)), $.$slots["input-icon"] && !$.hideInputIcon ? (u(), p("span", d$, [ae($.$slots, "input-icon")])) : _("", !0), !$.$slots["input-icon"] && !$.hideInputIcon && !$.$slots["dp-input"] ? (u(), N(D(ga), {
                    key: 3,
                    class: "dp__input_icon dp__input_icons"
                })) : _("", !0), $.$slots["clear-icon"] && e.inputValue && $.clearable && !$.disabled && !$.readonly ? (u(), p("span", f$, [ae($.$slots, "clear-icon", {
                    clear: R
                })])) : _("", !0), $.clearable && !$.$slots["clear-icon"] && e.inputValue && !$.disabled && !$.readonly ? (u(), N(D(WI), {
                    key: 5,
                    class: "dp__clear_icon dp__input_icons",
                    "data-test": "clear-icon",
                    onClick: Me(R, ["stop", "prevent"])
                }, null, 8, ["onClick"])) : _("", !0)])) : _("", !0)], 8, l$)
            }
        }
    }),
    p$ = {
        class: "dp__selection_preview"
    },
    h$ = {
        class: "dp__action_buttons"
    },
    g$ = ["onKeydown"],
    y$ = Z({
        __name: "ActionRow",
        props: {
            calendarWidth: {
                type: Number,
                default: 0
            },
            menuMount: {
                type: Boolean,
                default: !1
            },
            internalModelValue: {
                type: [Date, Array],
                default: null
            },
            ...Zt
        },
        emits: ["close-picker", "select-date", "invalid-select"],
        setup(e, {
            emit: t
        }) {
            const n = e,
                {
                    formatDate: r,
                    isValidTime: o,
                    defaults: a
                } = bt(n),
                {
                    buildMatrix: i
                } = Jt(),
                s = M(null),
                l = M(null);
            Ce(() => {
                n.arrowNavigation && i([et(s), et(l)], "actionRow")
            });
            const d = c(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0),
                y = c(() => !f.value || !h.value || !d.value),
                m = c(() => ({
                    dp__action: !0,
                    dp__select: !0,
                    dp__action_disabled: y.value
                })),
                f = c(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : o(n.internalModelValue)),
                h = c(() => n.monthPicker ? C(n.internalModelValue) : !0),
                v = () => {
                    const I = a.value.previewFormat;
                    return n.timePicker || n.monthPicker, I(nt(n.internalModelValue))
                },
                k = () => {
                    const I = n.internalModelValue;
                    return a.value.multiCalendars > 0 ? `${r(I[0])} - ${r(I[1])}` : [r(I[0]), r(I[1])]
                },
                w = c(() => !n.internalModelValue || !n.menuMount ? "" : typeof a.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? k() : n.multiDates ? n.internalModelValue.map(I => `${r(I)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : v()),
                C = I => {
                    if (!n.monthPicker) return !0;
                    let R = !0;
                    return n.minDate && n.maxDate ? ct(K(I), K(n.minDate)) && rt(K(I), K(n.maxDate)) : (n.minDate && (R = ct(K(I), K(n.minDate))), n.maxDate && (R = rt(K(I), K(n.maxDate))), R)
                },
                L = () => {
                    f.value && h.value && d.value ? t("select-date") : t("invalid-select")
                };
            return (I, R) => (u(), p("div", {
                class: "dp__action_row",
                style: Oe(e.calendarWidth ? {
                    width: `${e.calendarWidth}px`
                } : {})
            }, [I.$slots["action-row"] ? ae(I.$slots, "action-row", Fe(Ae({
                key: 0
            }, {
                internalModelValue: e.internalModelValue,
                disabled: D(y),
                selectDate: () => I.$emit("select-date"),
                closePicker: () => I.$emit("close-picker")
            }))) : (u(), p(se, {
                key: 1
            }, [b("div", p$, [I.$slots["action-preview"] ? ae(I.$slots, "action-preview", {
                key: 0,
                value: e.internalModelValue
            }) : _("", !0), I.$slots["action-preview"] ? _("", !0) : (u(), p(se, {
                key: 1
            }, [Array.isArray(D(w)) ? _("", !0) : (u(), p(se, {
                key: 0
            }, [Pe(x(D(w)), 1)], 64)), Array.isArray(D(w)) ? (u(!0), p(se, {
                key: 1
            }, pe(D(w), (W, $) => (u(), p("div", {
                key: $
            }, x(W), 1))), 128)) : _("", !0)], 64))]), b("div", h$, [I.$slots["action-select"] ? ae(I.$slots, "action-select", {
                key: 0,
                value: e.internalModelValue
            }) : _("", !0), I.$slots["action-select"] ? _("", !0) : (u(), p(se, {
                key: 1
            }, [I.inline ? _("", !0) : (u(), p("span", {
                key: 0,
                class: "dp__action dp__cancel",
                ref_key: "cancelButtonRef",
                ref: s,
                tabindex: "0",
                onClick: R[0] || (R[0] = W => I.$emit("close-picker")),
                onKeydown: [R[1] || (R[1] = Se(W => I.$emit("close-picker"), ["enter"])), R[2] || (R[2] = Se(W => I.$emit("close-picker"), ["space"]))]
            }, x(I.cancelText), 545)), b("span", {
                class: F(D(m)),
                tabindex: "0",
                onKeydown: [Se(L, ["enter"]), Se(L, ["space"])],
                onClick: L,
                "data-test": "select-button",
                ref_key: "selectButtonRef",
                ref: l
            }, x(I.selectText), 43, g$)], 64))])], 64))], 4))
        }
    }),
    v$ = ["aria-label"],
    b$ = {
        class: "dp__calendar_header",
        role: "row"
    },
    _$ = {
        key: 0,
        class: "dp__calendar_header_item",
        role: "gridcell"
    },
    w$ = b("div", {
        class: "dp__calendar_header_separator"
    }, null, -1),
    k$ = ["aria-label"],
    S$ = {
        key: 0,
        role: "gridcell",
        class: "dp__calendar_item dp__week_num"
    },
    P$ = {
        class: "dp__cell_inner"
    },
    T$ = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"],
    C$ = b("div", {
        class: "dp__arrow_bottom_tp"
    }, null, -1),
    O$ = Z({
        __name: "Calendar",
        props: {
            mappedDates: {
                type: Array,
                default: () => []
            },
            getWeekNum: {
                type: Function,
                default: () => ""
            },
            specificMode: {
                type: Boolean,
                default: !1
            },
            instance: {
                type: Number,
                default: 0
            },
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            ...Zt
        },
        emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    buildMultiLevelMatrix: o
                } = Jt(),
                {
                    setDateMonthOrYear: a,
                    defaults: i
                } = bt(r),
                s = M(null),
                l = M({
                    bottom: "",
                    left: "",
                    transform: ""
                }),
                d = M([]),
                y = M(null),
                m = M(!0),
                f = M(""),
                h = M({
                    startX: 0,
                    endX: 0,
                    startY: 0,
                    endY: 0
                }),
                v = c(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : G2(r.locale, +r.weekStart));
            Ce(() => {
                n("mount", {
                    cmp: "calendar",
                    refs: d
                }), r.noSwipe || y.value && (y.value.addEventListener("touchstart", H, {
                    passive: !1
                }), y.value.addEventListener("touchend", X, {
                    passive: !1
                }), y.value.addEventListener("touchmove", re, {
                    passive: !1
                })), r.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", A, {
                    passive: !1
                })
            });
            const k = S => S ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous",
                w = (S, U) => {
                    if (r.transitions) {
                        const V = Rt(a(K(), r.month, r.year));
                        f.value = ct(Rt(a(K(), S, U)), V) ? i.value.transitions[k(!0)] : i.value.transitions[k(!1)], m.value = !1, jt(() => {
                            m.value = !0
                        })
                    }
                },
                C = c(() => ({
                    dp__calendar_wrap: !0,
                    [r.calendarClassName]: !!r.calendarClassName
                })),
                L = c(() => S => {
                    const U = K2(S);
                    return {
                        dp__marker_dot: U.type === "dot",
                        dp__marker_line: U.type === "line"
                    }
                }),
                I = c(() => S => je(S, s.value)),
                R = c(() => ({
                    dp__calendar: !0,
                    dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
                })),
                W = c(() => r.specificMode ? {
                    height: `${r.modeHeight}px`
                } : void 0),
                $ = (S, U, V) => {
                    var g, B;
                    if (n("set-hover-date", S), (B = (g = S.marker) == null ? void 0 : g.tooltip) != null && B.length) {
                        const q = et(d.value[U][V]);
                        if (q) {
                            const {
                                width: G,
                                height: te
                            } = q.getBoundingClientRect();
                            l.value = {
                                bottom: `${te}px`,
                                left: `${G/2}px`,
                                transform: "translateX(-50%)"
                            }, s.value = S.value
                        }
                    }
                },
                E = () => {
                    s.value = null
                },
                H = S => {
                    h.value.startX = S.changedTouches[0].screenX, h.value.startY = S.changedTouches[0].screenY
                },
                X = S => {
                    h.value.endX = S.changedTouches[0].screenX, h.value.endY = S.changedTouches[0].screenY, Y()
                },
                re = S => {
                    r.vertical && !r.inline && S.preventDefault()
                },
                Y = () => {
                    const S = r.vertical ? "Y" : "X";
                    Math.abs(h.value[`start${S}`] - h.value[`end${S}`]) > 10 && n("handle-swipe", h.value[`start${S}`] > h.value[`end${S}`] ? "right" : "left")
                },
                ne = (S, U, V) => {
                    S && (Array.isArray(d.value[U]) ? d.value[U][V] = S : d.value[U] = [S]), r.arrowNavigation && o(d.value, "calendar")
                },
                A = S => {
                    r.monthChangeOnScroll && (S.preventDefault(), n("handle-scroll", S))
                };
            return t({
                triggerTransition: w
            }), (S, U) => {
                var V;
                return u(), p("div", {
                    class: F(D(R))
                }, [b("div", {
                    style: Oe(D(W))
                }, [e.specificMode ? _("", !0) : (u(), p("div", {
                    key: 0,
                    ref_key: "calendarWrapRef",
                    ref: y,
                    class: F(D(C)),
                    role: "grid",
                    "aria-label": (V = D(i).ariaLabels) == null ? void 0 : V.calendarWrap
                }, [b("div", b$, [S.weekNumbers ? (u(), p("div", _$, x(S.weekNumName), 1)) : _("", !0), (u(!0), p(se, null, pe(D(v), (g, B) => (u(), p("div", {
                    class: "dp__calendar_header_item",
                    role: "gridcell",
                    key: B,
                    "data-test": "calendar-header"
                }, [S.$slots["calendar-header"] ? ae(S.$slots, "calendar-header", {
                    key: 0,
                    day: g,
                    index: B
                }) : _("", !0), S.$slots["calendar-header"] ? _("", !0) : (u(), p(se, {
                    key: 1
                }, [Pe(x(g), 1)], 64))]))), 128))]), w$, be(gt, {
                    name: f.value,
                    css: !!S.transitions
                }, {
                    default: le(() => {
                        var g;
                        return [m.value ? (u(), p("div", {
                            key: 0,
                            class: "dp__calendar",
                            role: "grid",
                            "aria-label": (g = D(i).ariaLabels) == null ? void 0 : g.calendarDays
                        }, [(u(!0), p(se, null, pe(e.mappedDates, (B, q) => (u(), p("div", {
                            class: "dp__calendar_row",
                            role: "row",
                            key: q
                        }, [S.weekNumbers ? (u(), p("div", S$, [b("div", P$, x(e.getWeekNum(B.days)), 1)])) : _("", !0), (u(!0), p(se, null, pe(B.days, (G, te) => {
                            var T, ie, ue;
                            return u(), p("div", {
                                role: "gridcell",
                                class: "dp__calendar_item",
                                ref_for: !0,
                                ref: O => ne(O, q, te),
                                key: te + q,
                                "aria-selected": G.classData.dp__active_date || G.classData.dp__range_start || G.classData.dp__range_start,
                                "aria-disabled": G.classData.dp__cell_disabled,
                                "aria-label": (ie = (T = D(i).ariaLabels) == null ? void 0 : T.day) == null ? void 0 : ie.call(T, G),
                                tabindex: "0",
                                "data-test": G.value,
                                onClick: Me(O => S.$emit("select-date", G), ["stop", "prevent"]),
                                onKeydown: [Se(O => S.$emit("select-date", G), ["enter"]), Se(O => S.$emit("handle-space", G), ["space"])],
                                onMouseover: O => $(G, q, te),
                                onMouseleave: E
                            }, [b("div", {
                                class: F(["dp__cell_inner", G.classData])
                            }, [S.$slots.day ? ae(S.$slots, "day", {
                                key: 0,
                                day: +G.text,
                                date: G.value
                            }) : _("", !0), S.$slots.day ? _("", !0) : (u(), p(se, {
                                key: 1
                            }, [Pe(x(G.text), 1)], 64)), G.marker && (!S.hideOffsetDates || G.current) ? (u(), p("div", {
                                key: 2,
                                class: F(D(L)(G.marker)),
                                style: Oe(G.marker.color ? {
                                    backgroundColor: G.marker.color
                                } : {})
                            }, null, 6)) : _("", !0), D(I)(G.value) ? (u(), p("div", {
                                key: 3,
                                class: "dp__marker_tooltip",
                                style: Oe(l.value)
                            }, [(ue = G.marker) != null && ue.tooltip ? (u(), p("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: U[0] || (U[0] = Me(() => {}, ["stop"]))
                            }, [(u(!0), p(se, null, pe(G.marker.tooltip, (O, z) => (u(), p("div", {
                                key: z,
                                class: "dp__tooltip_text"
                            }, [S.$slots["marker-tooltip"] ? ae(S.$slots, "marker-tooltip", {
                                key: 0,
                                tooltop: O,
                                day: G.value
                            }) : _("", !0), S.$slots["marker-tooltip"] ? _("", !0) : (u(), p(se, {
                                key: 1
                            }, [b("div", {
                                class: "dp__tooltip_mark",
                                style: Oe(O.color ? {
                                    backgroundColor: O.color
                                } : {})
                            }, null, 4), b("div", null, x(O.text), 1)], 64))]))), 128)), C$])) : _("", !0)], 4)) : _("", !0)], 2)], 40, T$)
                        }), 128))]))), 128))], 8, k$)) : _("", !0)]
                    }),
                    _: 3
                }, 8, ["name", "css"])], 10, v$))], 4)], 2)
            }
        }
    }),
    I$ = ["aria-label", "aria-disabled"],
    ai = Z({
        __name: "ActionIcon",
        props: {
            ariaLabel: {
                type: String,
                default: ""
            },
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["activate", "set-ref"],
        setup(e, {
            emit: t
        }) {
            const n = M(null);
            return Ce(() => t("set-ref", n)), (r, o) => (u(), p("div", {
                class: "dp__month_year_col_nav",
                onClick: o[0] || (o[0] = a => r.$emit("activate")),
                onKeydown: [o[1] || (o[1] = Se(a => r.$emit("activate"), ["enter"])), o[2] || (o[2] = Se(a => r.$emit("activate"), ["space"]))],
                tabindex: "0",
                role: "button",
                "aria-label": e.ariaLabel,
                "aria-disabled": e.disabled,
                ref_key: "elRef",
                ref: n
            }, [b("div", {
                class: F(["dp__inner_nav", {
                    dp__inner_nav_disabled: e.disabled
                }])
            }, [ae(r.$slots, "default")], 2)], 40, I$))
        }
    }),
    $$ = ["onKeydown"],
    E$ = {
        class: "dp__selection_grid_header"
    },
    D$ = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"],
    L$ = ["aria-label", "onKeydown"],
    tr = Z({
        __name: "SelectionGrid",
        props: {
            items: {
                type: Array,
                default: () => []
            },
            modelValue: {
                type: [String, Number],
                default: null
            },
            multiModelValue: {
                type: Array,
                default: () => []
            },
            disabledValues: {
                type: Array,
                default: () => []
            },
            minValue: {
                type: [Number, String],
                default: null
            },
            maxValue: {
                type: [Number, String],
                default: null
            },
            year: {
                type: Number,
                default: 0
            },
            skipActive: {
                type: Boolean,
                default: !1
            },
            headerRefs: {
                type: Array,
                default: () => []
            },
            skipButtonRef: {
                type: Boolean,
                default: !1
            },
            monthPicker: {
                type: Boolean,
                default: !1
            },
            yearPicker: {
                type: Boolean,
                default: !1
            },
            escClose: {
                type: Boolean,
                default: !0
            },
            type: {
                type: String,
                default: null
            },
            arrowNavigation: {
                type: Boolean,
                default: !1
            },
            autoApply: {
                type: Boolean,
                default: !1
            },
            textInput: {
                type: Boolean,
                default: !1
            },
            ariaLabels: {
                type: Object,
                default: () => ({})
            },
            hideNavigation: {
                type: Array,
                default: () => []
            }
        },
        emits: ["update:model-value", "selected", "toggle", "reset-flow"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    setSelectionGrid: o,
                    buildMultiLevelMatrix: a,
                    setMonthPicker: i
                } = Jt(),
                {
                    hideNavigationButtons: s
                } = bt(r),
                l = M(!1),
                d = M(null),
                y = M(null),
                m = M([]),
                f = M(),
                h = M(null);
            Nm(() => {
                d.value = null
            }), Ce(() => {
                jt().then(() => E()), k(), v(!0)
            }), ca(() => v(!1));
            const v = S => {
                    var U;
                    r.arrowNavigation && ((U = r.headerRefs) != null && U.length ? i(S) : o(S))
                },
                k = () => {
                    const S = et(y);
                    S && (r.textInput || S.focus({
                        preventScroll: !0
                    }), l.value = S.clientHeight < S.scrollHeight)
                },
                w = c(() => ({
                    dp__overlay: !0
                })),
                C = c(() => ({
                    dp__overlay_col: !0
                })),
                L = S => r.skipActive ? !1 : S.value === r.modelValue,
                I = c(() => r.items.map(S => S.filter(U => U).map(U => {
                    var V, g, B;
                    const q = r.disabledValues.some(te => te === U.value) || $(U.value),
                        G = (V = r.multiModelValue) != null && V.length ? (g = r.multiModelValue) == null ? void 0 : g.some(te => je(te, fn(r.monthPicker ? er(new Date, U.value) : new Date, r.monthPicker ? r.year : U.value))) : L(U);
                    return { ...U,
                        className: {
                            dp__overlay_cell_active: G,
                            dp__overlay_cell: !G,
                            dp__overlay_cell_disabled: q,
                            dp__overlay_cell_active_disabled: q && G,
                            dp__overlay_cell_pad: !0,
                            dp__cell_in_between: (B = r.multiModelValue) != null && B.length ? X(U.value) : !1
                        }
                    }
                }))),
                R = c(() => ({
                    dp__button: !0,
                    dp__overlay_action: !0,
                    dp__over_action_scroll: l.value,
                    dp__button_bottom: r.autoApply
                })),
                W = c(() => {
                    var S, U;
                    return {
                        dp__overlay_container: !0,
                        dp__container_flex: ((S = r.items) == null ? void 0 : S.length) <= 6,
                        dp__container_block: ((U = r.items) == null ? void 0 : U.length) > 6
                    }
                }),
                $ = S => {
                    const U = r.maxValue || r.maxValue === 0,
                        V = r.minValue || r.minValue === 0;
                    return !U && !V ? !1 : U && V ? +S > +r.maxValue || +S < +r.minValue : U ? +S > +r.maxValue : V ? +S < +r.minValue : !1
                },
                E = () => {
                    const S = et(d);
                    if (S) {
                        const U = et(y);
                        U && (U.scrollTop = S.offsetTop - U.offsetTop - (U.getBoundingClientRect().height / 2 - S.getBoundingClientRect().height))
                    }
                },
                H = S => {
                    !r.disabledValues.some(U => U === S) && !$(S) && (n("update:model-value", S), n("selected"))
                },
                X = S => {
                    const U = r.monthPicker ? r.year : S;
                    return zf(r.multiModelValue, fn(r.monthPicker ? er(new Date, f.value || 0) : new Date, r.monthPicker ? U : f.value || U), fn(r.monthPicker ? er(new Date, S) : new Date, U))
                },
                re = () => {
                    n("toggle"), n("reset-flow")
                },
                Y = () => {
                    r.escClose && re()
                },
                ne = (S, U, V, g) => {
                    S && (U.value === +r.modelValue && !r.disabledValues.includes(U.value) && (d.value = S), r.arrowNavigation && (Array.isArray(m.value[V]) ? m.value[V][g] = S : m.value[V] = [S], A()))
                },
                A = () => {
                    var S, U;
                    const V = (S = r.headerRefs) != null && S.length ? [r.headerRefs].concat(m.value) : m.value.concat([r.skipButtonRef ? [] : [h.value]]);
                    a(nt(V), (U = r.headerRefs) != null && U.length ? "monthPicker" : "selectionGrid")
                };
            return t({
                focusGrid: k
            }), (S, U) => {
                var V;
                return u(), p("div", {
                    ref_key: "gridWrapRef",
                    ref: y,
                    class: F(D(w)),
                    role: "dialog",
                    tabindex: "0",
                    onKeydown: Se(Y, ["esc"])
                }, [b("div", {
                    class: F(D(W)),
                    role: "grid"
                }, [b("div", E$, [ae(S.$slots, "header")]), S.$slots.overlay ? ae(S.$slots, "overlay", {
                    key: 0
                }) : (u(), p(se, {
                    key: 1
                }, [(u(!0), p(se, null, pe(D(I), (g, B) => (u(), p("div", {
                    class: "dp__overlay_row",
                    key: B,
                    role: "row"
                }, [(u(!0), p(se, null, pe(g, (q, G) => (u(), p("div", {
                    role: "gridcell",
                    class: F(D(C)),
                    key: q.value,
                    "aria-selected": q.value === e.modelValue && !e.disabledValues.includes(q.value),
                    "aria-disabled": q.className.dp__overlay_cell_disabled,
                    ref_for: !0,
                    ref: te => ne(te, q, B, G),
                    tabindex: "0",
                    "data-test": q.text,
                    onClick: te => H(q.value),
                    onKeydown: [Se(te => H(q.value), ["enter"]), Se(te => H(q.value), ["space"])],
                    onMouseover: te => f.value = q.value
                }, [b("div", {
                    class: F(q.className)
                }, [S.$slots.item ? ae(S.$slots, "item", {
                    key: 0,
                    item: q
                }) : _("", !0), S.$slots.item ? _("", !0) : (u(), p(se, {
                    key: 1
                }, [Pe(x(q.text), 1)], 64))], 2)], 42, D$))), 128))]))), 128)), S.$slots["button-icon"] ? ee((u(), p("div", {
                    key: 0,
                    role: "button",
                    "aria-label": (V = e.ariaLabels) == null ? void 0 : V.toggleOverlay,
                    class: F(D(R)),
                    tabindex: "0",
                    ref_key: "toggleButton",
                    ref: h,
                    onClick: re,
                    onKeydown: Se(re, ["enter"])
                }, [ae(S.$slots, "button-icon")], 42, L$)), [
                    [Ot, !D(s)(e.type)]
                ]) : _("", !0)], 64))], 2)], 42, $$)
            }
        }
    }),
    M$ = ["aria-label"],
    yd = Z({
        __name: "RegularPicker",
        props: {
            ariaLabel: {
                type: String,
                default: ""
            },
            showSelectionGrid: {
                type: Boolean,
                default: !1
            },
            modelValue: {
                type: Number,
                default: null
            },
            items: {
                type: Array,
                default: () => []
            },
            disabledValues: {
                type: Array,
                default: () => []
            },
            minValue: {
                type: Number,
                default: null
            },
            maxValue: {
                type: Number,
                default: null
            },
            slotName: {
                type: String,
                default: ""
            },
            overlaySlot: {
                type: String,
                default: ""
            },
            headerRefs: {
                type: Array,
                default: () => []
            },
            escClose: {
                type: Boolean,
                default: !0
            },
            type: {
                type: String,
                default: null
            },
            transitions: {
                type: [Object, Boolean],
                default: !1
            },
            arrowNavigation: {
                type: Boolean,
                default: !1
            },
            autoApply: {
                type: Boolean,
                default: !1
            },
            textInput: {
                type: Boolean,
                default: !1
            },
            ariaLabels: {
                type: Object,
                default: () => ({})
            },
            hideNavigation: {
                type: Array,
                default: () => []
            }
        },
        emits: ["update:model-value", "toggle", "set-ref"],
        setup(e, {
            emit: t
        }) {
            const n = e,
                {
                    transitionName: r,
                    showTransition: o
                } = ya(n.transitions),
                a = M(null);
            return Ce(() => t("set-ref", a)), (i, s) => (u(), p(se, null, [b("div", {
                class: "dp__month_year_select",
                onClick: s[0] || (s[0] = l => i.$emit("toggle")),
                onKeydown: [s[1] || (s[1] = Se(l => i.$emit("toggle"), ["enter"])), s[2] || (s[2] = Se(l => i.$emit("toggle"), ["space"]))],
                role: "button",
                "aria-label": e.ariaLabel,
                tabindex: "0",
                ref_key: "elRef",
                ref: a
            }, [ae(i.$slots, "default")], 40, M$), be(gt, {
                name: D(r)(e.showSelectionGrid),
                css: D(o)
            }, {
                default: le(() => [e.showSelectionGrid ? (u(), N(tr, Ae({
                    key: 0
                }, {
                    modelValue: e.modelValue,
                    items: e.items,
                    disabledValues: e.disabledValues,
                    minValue: e.minValue,
                    maxValue: e.maxValue,
                    escClose: e.escClose,
                    type: e.type,
                    arrowNavigation: e.arrowNavigation,
                    textInput: e.textInput,
                    autoApply: e.autoApply,
                    ariaLabels: e.ariaLabels,
                    hideNavigation: e.hideNavigation
                }, {
                    "header-refs": [],
                    "onUpdate:modelValue": s[3] || (s[3] = l => i.$emit("update:model-value", l)),
                    onToggle: s[4] || (s[4] = l => i.$emit("toggle"))
                }), pt({
                    "button-icon": le(() => [i.$slots["calendar-icon"] ? ae(i.$slots, "calendar-icon", {
                        key: 0
                    }) : _("", !0), i.$slots["calendar-icon"] ? _("", !0) : (u(), N(D(ga), {
                        key: 1
                    }))]),
                    _: 2
                }, [i.$slots[e.slotName] ? {
                    name: "item",
                    fn: le(({
                        item: l
                    }) => [ae(i.$slots, e.slotName, {
                        item: l
                    })]),
                    key: "0"
                } : void 0, i.$slots[e.overlaySlot] ? {
                    name: "overlay",
                    fn: le(() => [ae(i.$slots, e.overlaySlot)]),
                    key: "1"
                } : void 0, i.$slots[`${e.overlaySlot}-header`] ? {
                    name: "header",
                    fn: le(() => [ae(i.$slots, `${e.overlaySlot}-header`)]),
                    key: "2"
                } : void 0]), 1040)) : _("", !0)]),
                _: 3
            }, 8, ["name", "css"])], 64))
        }
    }),
    B$ = {
        class: "dp__month_year_row"
    },
    A$ = {
        class: "dp__month_year_wrap"
    },
    R$ = {
        class: "dp__month_picker_header"
    },
    N$ = ["aria-label"],
    H$ = ["aria-label"],
    U$ = ["aria-label"],
    V$ = Z({
        __name: "MonthYearPicker",
        props: {
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            instance: {
                type: Number,
                default: 0
            },
            years: {
                type: Array,
                default: () => []
            },
            months: {
                type: Array,
                default: () => []
            },
            internalModelValue: {
                type: [Date, Array],
                default: null
            },
            ...Zt
        },
        emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    defaults: o
                } = bt(r),
                {
                    transitionName: a,
                    showTransition: i
                } = ya(o.value.transitions),
                {
                    buildMatrix: s
                } = Jt(),
                {
                    handleMonthYearChange: l,
                    isDisabled: d,
                    updateMonthYear: y
                } = o$(r, n),
                m = M(!1),
                f = M(!1),
                h = M([null, null, null, null]),
                v = M(null),
                k = M(null),
                w = M(null);
            Ce(() => {
                n("mount")
            });
            const C = O => ({
                    get: () => r[O],
                    set: z => {
                        const Te = O === "month" ? "year" : "month";
                        n("update-month-year", {
                            [O]: z,
                            [Te]: r[Te]
                        }), n("month-year-select", O === "year"), O === "month" ? G(!0) : te(!0)
                    }
                }),
                L = c(C("month")),
                I = c(C("year")),
                R = O => {
                    const z = qe(K(O));
                    return r.year === z
                },
                W = c(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map(O => K(O)).filter(O => R(O)).map(O => Ve(O)) : [] : []),
                $ = c(() => O => {
                    const z = O === "month";
                    return {
                        showSelectionGrid: (z ? m : f).value,
                        items: (z ? V : g).value,
                        disabledValues: o.value.filters[z ? "months" : "years"].concat(W.value),
                        minValue: (z ? re : H).value,
                        maxValue: (z ? Y : X).value,
                        headerRefs: z && r.monthPicker ? [v.value, k.value, w.value] : [],
                        escClose: r.escClose,
                        transitions: o.value.transitions,
                        ariaLabels: o.value.ariaLabels,
                        textInput: r.textInput,
                        autoApply: r.autoApply,
                        arrowNavigation: r.arrowNavigation,
                        hideNavigation: r.hideNavigation
                    }
                }),
                E = c(() => O => ({
                    month: r.month,
                    year: r.year,
                    items: O === "month" ? r.months : r.years,
                    instance: r.instance,
                    updateMonthYear: y,
                    toggle: O === "month" ? G : te
                })),
                H = c(() => r.minDate ? qe(K(r.minDate)) : null),
                X = c(() => r.maxDate ? qe(K(r.maxDate)) : null),
                re = c(() => {
                    if (r.minDate && H.value) {
                        if (H.value > r.year) return 12;
                        if (H.value === r.year) return Ve(K(r.minDate))
                    }
                    return null
                }),
                Y = c(() => r.maxDate && X.value ? X.value < r.year ? -1 : X.value === r.year ? Ve(K(r.maxDate)) : null : null),
                ne = c(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []),
                A = O => O.reverse(),
                S = (O, z = !1) => {
                    const Te = [],
                        _e = me => z ? A(me) : me;
                    for (let me = 0; me < O.length; me += 3) {
                        const Ne = [O[me], O[me + 1], O[me + 2]];
                        Te.push(_e(Ne))
                    }
                    return z ? Te.reverse() : Te
                },
                U = c(() => r.months.find(z => z.value === r.month) || {
                    text: "",
                    value: 0
                }),
                V = c(() => S(r.months)),
                g = c(() => S(r.years, r.reverseYears)),
                B = c(() => o.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0),
                q = c(() => o.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === o.value.multiCalendars - 1 : !0),
                G = (O = !1) => {
                    T(O), m.value = !m.value, m.value || n("overlay-closed")
                },
                te = (O = !1) => {
                    T(O), f.value = !f.value, f.value || n("overlay-closed")
                },
                T = O => {
                    O || n("reset-flow")
                },
                ie = (O = !1) => {
                    d.value(O) || n("update-month-year", {
                        year: O ? r.year + 1 : r.year - 1,
                        month: r.month,
                        fromNav: !0
                    })
                },
                ue = (O, z) => {
                    r.arrowNavigation && (h.value[z] = et(O), s(h.value, "monthYear"))
                };
            return t({
                toggleMonthPicker: G,
                toggleYearPicker: te
            }), (O, z) => {
                var Te, _e, me, Ne, ot;
                return u(), p("div", B$, [O.$slots["month-year"] ? ae(O.$slots, "month-year", Fe(Ae({
                    key: 0
                }, {
                    month: e.month,
                    year: e.year,
                    months: e.months,
                    years: e.years,
                    updateMonthYear: D(y),
                    handleMonthYearChange: D(l),
                    instance: e.instance
                }))) : (u(), p(se, {
                    key: 1
                }, [!O.monthPicker && !O.yearPicker ? (u(), p(se, {
                    key: 0
                }, [D(B) && !O.vertical ? (u(), N(ai, {
                    key: 0,
                    "aria-label": (Te = D(o).ariaLabels) == null ? void 0 : Te.prevMonth,
                    disabled: D(d)(!1),
                    onActivate: z[0] || (z[0] = ve => D(l)(!1)),
                    onSetRef: z[1] || (z[1] = ve => ue(ve, 0))
                }, {
                    default: le(() => [O.$slots["arrow-left"] ? ae(O.$slots, "arrow-left", {
                        key: 0
                    }) : _("", !0), O.$slots["arrow-left"] ? _("", !0) : (u(), N(D(nd), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : _("", !0), b("div", A$, [be(yd, Ae({
                    type: "month",
                    "slot-name": "month-overlay-val",
                    "overlay-slot": "overlay-month",
                    "aria-label": (_e = D(o).ariaLabels) == null ? void 0 : _e.openMonthsOverlay,
                    modelValue: D(L),
                    "onUpdate:modelValue": z[2] || (z[2] = ve => un(L) ? L.value = ve : null)
                }, D($)("month"), {
                    onToggle: G,
                    onSetRef: z[3] || (z[3] = ve => ue(ve, 1))
                }), pt({
                    default: le(() => [O.$slots.month ? ae(O.$slots, "month", Fe(Ae({
                        key: 0
                    }, D(U)))) : _("", !0), O.$slots.month ? _("", !0) : (u(), p(se, {
                        key: 1
                    }, [Pe(x(D(U).text), 1)], 64))]),
                    _: 2
                }, [O.$slots["calendar-icon"] ? {
                    name: "calendar-icon",
                    fn: le(() => [ae(O.$slots, "calendar-icon")]),
                    key: "0"
                } : void 0, O.$slots["month-overlay-value"] ? {
                    name: "month-overlay-val",
                    fn: le(({
                        item: ve
                    }) => [ae(O.$slots, "month-overlay-value", {
                        text: ve.text,
                        value: ve.value
                    })]),
                    key: "1"
                } : void 0, O.$slots["month-overlay"] ? {
                    name: "overlay-month",
                    fn: le(() => [ae(O.$slots, "month-overlay", Fe(Bt(D(E)("month"))))]),
                    key: "2"
                } : void 0, O.$slots["month-overlay-header"] ? {
                    name: "overlay-month-header",
                    fn: le(() => [ae(O.$slots, "month-overlay-header", {
                        toggle: G
                    })]),
                    key: "3"
                } : void 0]), 1040, ["aria-label", "modelValue"]), be(yd, Ae({
                    type: "year",
                    "slot-name": "year-overlay-val",
                    "overlay-slot": "overlay-year",
                    "aria-label": (me = D(o).ariaLabels) == null ? void 0 : me.openYearsOverlay,
                    modelValue: D(I),
                    "onUpdate:modelValue": z[4] || (z[4] = ve => un(I) ? I.value = ve : null)
                }, D($)("year"), {
                    onToggle: te,
                    onSetRef: z[5] || (z[5] = ve => ue(ve, 2))
                }), pt({
                    default: le(() => [O.$slots.year ? ae(O.$slots, "year", {
                        key: 0,
                        year: e.year
                    }) : _("", !0), O.$slots.year ? _("", !0) : (u(), p(se, {
                        key: 1
                    }, [Pe(x(e.year), 1)], 64))]),
                    _: 2
                }, [O.$slots["calendar-icon"] ? {
                    name: "calendar-icon",
                    fn: le(() => [ae(O.$slots, "calendar-icon")]),
                    key: "0"
                } : void 0, O.$slots["year-overlay-value"] ? {
                    name: "year-overlay-val",
                    fn: le(({
                        item: ve
                    }) => [ae(O.$slots, "year-overlay-value", {
                        text: ve.text,
                        value: ve.value
                    })]),
                    key: "1"
                } : void 0, O.$slots["year-overlay"] ? {
                    name: "overlay-year",
                    fn: le(() => [ae(O.$slots, "year-overlay", Fe(Bt(D(E)("year"))))]),
                    key: "2"
                } : void 0, O.$slots["year-overlay-header"] ? {
                    name: "overlay-year-header",
                    fn: le(() => [ae(O.$slots, "year-overlay-header", {
                        toggle: te
                    })]),
                    key: "3"
                } : void 0]), 1040, ["aria-label", "modelValue"])]), D(B) && O.vertical ? (u(), N(ai, {
                    key: 1,
                    "aria-label": (Ne = D(o).ariaLabels) == null ? void 0 : Ne.prevMonth,
                    disabled: D(d)(!1),
                    onActivate: z[6] || (z[6] = ve => D(l)(!1))
                }, {
                    default: le(() => [O.$slots["arrow-up"] ? ae(O.$slots, "arrow-up", {
                        key: 0
                    }) : _("", !0), O.$slots["arrow-up"] ? _("", !0) : (u(), N(D(Yf), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : _("", !0), D(q) ? (u(), N(ai, {
                    key: 2,
                    ref: "rightIcon",
                    disabled: D(d)(!0),
                    "aria-label": (ot = D(o).ariaLabels) == null ? void 0 : ot.nextMonth,
                    onActivate: z[7] || (z[7] = ve => D(l)(!0)),
                    onSetRef: z[8] || (z[8] = ve => ue(ve, 3))
                }, {
                    default: le(() => [O.$slots[O.vertical ? "arrow-down" : "arrow-right"] ? ae(O.$slots, O.vertical ? "arrow-down" : "arrow-right", {
                        key: 0
                    }) : _("", !0), O.$slots[O.vertical ? "arrow-down" : "arrow-right"] ? _("", !0) : (u(), N(dn(O.vertical ? D(Ff) : D(rd)), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["disabled", "aria-label"])) : _("", !0)], 64)) : _("", !0), O.monthPicker ? (u(), N(tr, Ae({
                    key: 1
                }, D($)("month"), {
                    "skip-active": O.range,
                    year: e.year,
                    "multi-model-value": D(ne),
                    "month-picker": "",
                    modelValue: D(L),
                    "onUpdate:modelValue": z[17] || (z[17] = ve => un(L) ? L.value = ve : null),
                    onToggle: G,
                    onSelected: z[18] || (z[18] = ve => O.$emit("overlay-closed"))
                }), pt({
                    header: le(() => {
                        var ve, ke, Be;
                        return [b("div", R$, [b("div", {
                            class: "dp__month_year_col_nav",
                            tabindex: "0",
                            ref_key: "mpPrevIconRef",
                            ref: v,
                            onClick: z[9] || (z[9] = Ie => ie(!1)),
                            onKeydown: z[10] || (z[10] = Se(Ie => ie(!1), ["enter"]))
                        }, [b("div", {
                            class: F(["dp__inner_nav", {
                                dp__inner_nav_disabled: D(d)(!1)
                            }]),
                            role: "button",
                            "aria-label": (ve = D(o).ariaLabels) == null ? void 0 : ve.prevMonth
                        }, [O.$slots["arrow-left"] ? ae(O.$slots, "arrow-left", {
                            key: 0
                        }) : _("", !0), O.$slots["arrow-left"] ? _("", !0) : (u(), N(D(nd), {
                            key: 1
                        }))], 10, N$)], 544), b("div", {
                            class: "dp__pointer",
                            role: "button",
                            ref_key: "mpYearButtonRef",
                            ref: k,
                            "aria-label": (ke = D(o).ariaLabels) == null ? void 0 : ke.openYearsOverlay,
                            tabindex: "0",
                            onClick: z[11] || (z[11] = () => te(!1)),
                            onKeydown: z[12] || (z[12] = Se(() => te(!1), ["enter"]))
                        }, [O.$slots.year ? ae(O.$slots, "year", {
                            key: 0,
                            year: e.year
                        }) : _("", !0), O.$slots.year ? _("", !0) : (u(), p(se, {
                            key: 1
                        }, [Pe(x(e.year), 1)], 64))], 40, H$), b("div", {
                            class: "dp__month_year_col_nav",
                            tabindex: "0",
                            ref_key: "mpNextIconRef",
                            ref: w,
                            onClick: z[13] || (z[13] = Ie => ie(!0)),
                            onKeydown: z[14] || (z[14] = Se(Ie => ie(!0), ["enter"]))
                        }, [b("div", {
                            class: F(["dp__inner_nav", {
                                dp__inner_nav_disabled: D(d)(!0)
                            }]),
                            role: "button",
                            "aria-label": (Be = D(o).ariaLabels) == null ? void 0 : Be.nextMonth
                        }, [O.$slots["arrow-right"] ? ae(O.$slots, "arrow-right", {
                            key: 0
                        }) : _("", !0), O.$slots["arrow-right"] ? _("", !0) : (u(), N(D(rd), {
                            key: 1
                        }))], 10, U$)], 544)]), be(gt, {
                            name: D(a)(f.value),
                            css: D(i)
                        }, {
                            default: le(() => [f.value ? (u(), N(tr, Ae({
                                key: 0
                            }, D($)("year"), {
                                modelValue: D(I),
                                "onUpdate:modelValue": z[15] || (z[15] = Ie => un(I) ? I.value = Ie : null),
                                onToggle: te,
                                onSelected: z[16] || (z[16] = Ie => O.$emit("overlay-closed"))
                            }), pt({
                                "button-icon": le(() => [O.$slots["calendar-icon"] ? ae(O.$slots, "calendar-icon", {
                                    key: 0
                                }) : _("", !0), O.$slots["calendar-icon"] ? _("", !0) : (u(), N(D(ga), {
                                    key: 1
                                }))]),
                                _: 2
                            }, [O.$slots["year-overlay-value"] ? {
                                name: "item",
                                fn: le(({
                                    item: Ie
                                }) => [ae(O.$slots, "year-overlay-value", {
                                    text: Ie.text,
                                    value: Ie.value
                                })]),
                                key: "0"
                            } : void 0]), 1040, ["modelValue"])) : _("", !0)]),
                            _: 3
                        }, 8, ["name", "css"])]
                    }),
                    _: 2
                }, [O.$slots["month-overlay-value"] ? {
                    name: "item",
                    fn: le(({
                        item: ve
                    }) => [ae(O.$slots, "month-overlay-value", {
                        text: ve.text,
                        value: ve.value
                    })]),
                    key: "0"
                } : void 0]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : _("", !0), O.yearPicker ? (u(), N(tr, Ae({
                    key: 2
                }, D($)("year"), {
                    modelValue: D(I),
                    "onUpdate:modelValue": z[19] || (z[19] = ve => un(I) ? I.value = ve : null),
                    "multi-model-value": D(ne),
                    "skip-active": O.range,
                    "skip-button-ref": "",
                    "year-picker": "",
                    onToggle: te,
                    onSelected: z[20] || (z[20] = ve => O.$emit("overlay-closed"))
                }), pt({
                    _: 2
                }, [O.$slots["year-overlay-value"] ? {
                    name: "item",
                    fn: le(({
                        item: ve
                    }) => [ae(O.$slots, "year-overlay-value", {
                        text: ve.text,
                        value: ve.value
                    })]),
                    key: "0"
                } : void 0]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : _("", !0)], 64))])
            }
        }
    }),
    q$ = {
        key: 0,
        class: "dp__time_input"
    },
    j$ = ["aria-label", "onKeydown", "onClick"],
    x$ = ["aria-label", "onKeydown", "onClick"],
    W$ = ["aria-label", "onKeydown", "onClick"],
    G$ = {
        key: 0
    },
    Y$ = ["aria-label", "onKeydown"],
    F$ = Z({
        __name: "TimeInput",
        props: {
            hours: {
                type: Number,
                default: 0
            },
            minutes: {
                type: Number,
                default: 0
            },
            seconds: {
                type: Number,
                default: 0
            },
            closeTimePickerBtn: {
                type: Object,
                default: null
            },
            order: {
                type: Number,
                default: 0
            },
            ...Zt
        },
        emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    setTimePickerElements: o,
                    setTimePickerBackRef: a
                } = Jt(),
                {
                    defaults: i
                } = bt(r),
                {
                    transitionName: s,
                    showTransition: l
                } = ya(i.value.transitions),
                d = xt({
                    hours: !1,
                    minutes: !1,
                    seconds: !1
                }),
                y = M("AM"),
                m = M(null),
                f = M([]);
            Ce(() => {
                n("mounted")
            });
            const h = (A, S) => Sf(lt(K(), A), S),
                v = (A, S) => II(lt(K(), A), S),
                k = c(() => ({
                    dp__time_col: !0,
                    dp__time_col_reg: !r.enableSeconds && r.is24,
                    dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
                    dp__time_col_sec: r.enableSeconds && r.is24,
                    dp__time_col_sec_with_button: r.enableSeconds && !r.is24
                })),
                w = c(() => {
                    const A = [{
                        type: "hours"
                    }, {
                        type: "",
                        separator: !0
                    }, {
                        type: "minutes"
                    }];
                    return r.enableSeconds ? A.concat([{
                        type: "",
                        separator: !0
                    }, {
                        type: "seconds"
                    }]) : A
                }),
                C = c(() => w.value.filter(A => !A.separator)),
                L = c(() => A => {
                    if (A === "hours") {
                        const S = H(r.hours);
                        return {
                            text: S < 10 ? `0${S}` : `${S}`,
                            value: S
                        }
                    }
                    return {
                        text: r[A] < 10 ? `0${r[A]}` : `${r[A]}`,
                        value: r[A]
                    }
                }),
                I = A => {
                    const S = r.is24 ? 24 : 12,
                        U = A === "hours" ? S : 60,
                        V = +r[`${A}GridIncrement`],
                        g = A === "hours" && !r.is24 ? V : 0,
                        B = [];
                    for (let q = g; q < U; q += V) B.push({
                        value: q,
                        text: q < 10 ? `0${q}` : `${q}`
                    });
                    return A === "hours" && !r.is24 && B.push({
                        value: 0,
                        text: "12"
                    }), W2(B)
                },
                R = A => r[`no${A[0].toUpperCase()+A.slice(1)}Overlay`],
                W = A => {
                    R(A) || (d[A] = !d[A], d[A] || n("overlay-closed"))
                },
                $ = A => A === "hours" ? Ut : A === "minutes" ? Vt : Bn,
                E = (A, S = !0) => {
                    const U = S ? h : v;
                    n(`update:${A}`, $(A)(U({
                        [A]: +r[A]
                    }, {
                        [A]: +r[`${A}Increment`]
                    })))
                },
                H = A => r.is24 ? A : (A >= 12 ? y.value = "PM" : y.value = "AM", z2(A)),
                X = () => {
                    y.value === "PM" ? (y.value = "AM", n("update:hours", r.hours - 12)) : (y.value = "PM", n("update:hours", r.hours + 12))
                },
                re = A => {
                    d[A] = !0
                },
                Y = (A, S, U) => {
                    if (A && r.arrowNavigation) {
                        Array.isArray(f.value[S]) ? f.value[S][U] = A : f.value[S] = [A];
                        const V = f.value.reduce((g, B) => B.map((q, G) => [...g[G] || [], B[G]]), []);
                        a(r.closeTimePickerBtn), m.value && (V[1] = V[1].concat(m.value)), o(V, r.order)
                    }
                },
                ne = (A, S) => A === "hours" && !r.is24 ? n(`update:${A}`, y.value === "PM" ? S + 12 : S) : n(`update:${A}`, S);
            return t({
                openChildCmp: re
            }), (A, S) => {
                var U;
                return A.disabled ? _("", !0) : (u(), p("div", q$, [(u(!0), p(se, null, pe(D(w), (V, g) => {
                    var B, q, G;
                    return u(), p("div", {
                        key: g,
                        class: F(D(k))
                    }, [V.separator ? (u(), p(se, {
                        key: 0
                    }, [Pe(" : ")], 64)) : (u(), p(se, {
                        key: 1
                    }, [b("div", {
                        class: "dp__inc_dec_button",
                        role: "button",
                        "aria-label": (B = D(i).ariaLabels) == null ? void 0 : B.incrementValue(V.type),
                        tabindex: "0",
                        onKeydown: [Se(te => E(V.type), ["enter"]), Se(te => E(V.type), ["space"])],
                        onClick: te => E(V.type),
                        ref_for: !0,
                        ref: te => Y(te, g, 0)
                    }, [A.$slots["arrow-up"] ? ae(A.$slots, "arrow-up", {
                        key: 0
                    }) : _("", !0), A.$slots["arrow-up"] ? _("", !0) : (u(), N(D(Yf), {
                        key: 1
                    }))], 40, j$), b("div", {
                        role: "button",
                        "aria-label": (q = D(i).ariaLabels) == null ? void 0 : q.openTpOverlay(V.type),
                        class: F(R(V.type) ? "" : "dp__time_display"),
                        tabindex: "0",
                        onKeydown: [Se(te => W(V.type), ["enter"]), Se(te => W(V.type), ["space"])],
                        onClick: te => W(V.type),
                        ref_for: !0,
                        ref: te => Y(te, g, 1)
                    }, [A.$slots[V.type] ? ae(A.$slots, V.type, {
                        key: 0,
                        text: D(L)(V.type).text,
                        value: D(L)(V.type).value
                    }) : _("", !0), A.$slots[V.type] ? _("", !0) : (u(), p(se, {
                        key: 1
                    }, [Pe(x(D(L)(V.type).text), 1)], 64))], 42, x$), b("div", {
                        class: "dp__inc_dec_button",
                        role: "button",
                        "aria-label": (G = D(i).ariaLabels) == null ? void 0 : G.decrementValue(V.type),
                        tabindex: "0",
                        onKeydown: [Se(te => E(V.type, !1), ["enter"]), Se(te => E(V.type, !1), ["space"])],
                        onClick: te => E(V.type, !1),
                        ref_for: !0,
                        ref: te => Y(te, g, 2)
                    }, [A.$slots["arrow-down"] ? ae(A.$slots, "arrow-down", {
                        key: 0
                    }) : _("", !0), A.$slots["arrow-down"] ? _("", !0) : (u(), N(D(Ff), {
                        key: 1
                    }))], 40, W$)], 64))], 2)
                }), 128)), A.is24 ? _("", !0) : (u(), p("div", G$, [A.$slots["am-pm-button"] ? ae(A.$slots, "am-pm-button", {
                    key: 0,
                    toggle: X,
                    value: y.value
                }) : _("", !0), A.$slots["am-pm-button"] ? _("", !0) : (u(), p("button", {
                    key: 1,
                    ref_key: "amPmButton",
                    ref: m,
                    type: "button",
                    class: "dp__pm_am_button",
                    role: "button",
                    "aria-label": (U = D(i).ariaLabels) == null ? void 0 : U.amPmButton,
                    tabindex: "0",
                    onClick: X,
                    onKeydown: [Se(Me(X, ["prevent"]), ["enter"]), Se(Me(X, ["prevent"]), ["space"])]
                }, x(y.value), 41, Y$))])), (u(!0), p(se, null, pe(D(C), (V, g) => (u(), N(gt, {
                    key: g,
                    name: D(s)(d[V.type]),
                    css: D(l)
                }, {
                    default: le(() => [d[V.type] ? (u(), N(tr, {
                        key: 0,
                        items: I(V.type),
                        "disabled-values": D(i).filters.times[V.type],
                        "esc-close": A.escClose,
                        "aria-labels": D(i).ariaLabels,
                        "hide-navigation": A.hideNavigation,
                        "onUpdate:modelValue": B => ne(V.type, B),
                        onSelected: B => W(V.type),
                        onToggle: B => W(V.type),
                        onResetFlow: S[0] || (S[0] = B => A.$emit("reset-flow")),
                        type: V.type
                    }, pt({
                        "button-icon": le(() => [A.$slots["clock-icon"] ? ae(A.$slots, "clock-icon", {
                            key: 0
                        }) : _("", !0), A.$slots["clock-icon"] ? _("", !0) : (u(), N(D(Gf), {
                            key: 1
                        }))]),
                        _: 2
                    }, [A.$slots[`${V.type}-overlay-value`] ? {
                        name: "item",
                        fn: le(({
                            item: B
                        }) => [ae(A.$slots, `${V.type}-overlay-value`, {
                            text: B.text,
                            value: B.value
                        })]),
                        key: "0"
                    } : void 0]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : _("", !0)]),
                    _: 2
                }, 1032, ["name", "css"]))), 128))]))
            }
        }
    }),
    z$ = ["aria-label"],
    K$ = {
        class: "dp__overlay_container dp__container_flex"
    },
    Q$ = {
        key: 1,
        class: "dp__overlay_row"
    },
    X$ = ["aria-label"],
    J$ = Z({
        __name: "TimePicker",
        props: {
            hours: {
                type: [Number, Array],
                default: 0
            },
            minutes: {
                type: [Number, Array],
                default: 0
            },
            seconds: {
                type: [Number, Array],
                default: 0
            },
            internalModelValue: {
                type: [Date, Array],
                default: null
            },
            ...Zt
        },
        emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-closed"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    buildMatrix: o,
                    setTimePicker: a
                } = Jt(),
                i = Vs(),
                {
                    hideNavigationButtons: s,
                    defaults: l
                } = bt(r),
                {
                    transitionName: d,
                    showTransition: y
                } = ya(l.value.transitions),
                m = M(null),
                f = M(null),
                h = M([]),
                v = M(null);
            Ce(() => {
                n("mount"), !r.timePicker && r.arrowNavigation ? o([et(m.value)], "time") : a(!0, r.timePicker)
            });
            const k = c(() => r.range && r.modelAuto ? Jf(r.internalModelValue) : !0),
                w = M(!1),
                C = Y => ({
                    hours: Array.isArray(r.hours) ? r.hours[Y] : r.hours,
                    minutes: Array.isArray(r.minutes) ? r.minutes[Y] : r.minutes,
                    seconds: Array.isArray(r.seconds) ? r.seconds[Y] : r.seconds
                }),
                L = c(() => {
                    const Y = [];
                    if (r.range)
                        for (let ne = 0; ne < 2; ne++) Y.push(C(ne));
                    else Y.push(C(0));
                    return Y
                }),
                I = (Y, ne = !1, A = "") => {
                    ne || n("reset-flow"), w.value = Y, r.arrowNavigation && (a(Y), Y || n("overlay-closed")), jt(() => {
                        A !== "" && h.value[0] && h.value[0].openChildCmp(A)
                    })
                },
                R = c(() => ({
                    dp__button: !0,
                    dp__button_bottom: r.autoApply
                })),
                W = cn(i, "timePicker"),
                $ = (Y, ne, A) => r.range ? ne === 0 ? [Y, L.value[1][A]] : [L.value[0][A], Y] : Y,
                E = Y => {
                    n("update:hours", Y)
                },
                H = Y => {
                    n("update:minutes", Y)
                },
                X = Y => {
                    n("update:seconds", Y)
                },
                re = () => {
                    v.value && r.arrowNavigation && v.value.focus({
                        preventScroll: !0
                    })
                };
            return t({
                toggleTimePicker: I
            }), (Y, ne) => {
                var A;
                return u(), p("div", null, [Y.timePicker ? _("", !0) : ee((u(), p("div", {
                    key: 0,
                    class: F(D(R)),
                    role: "button",
                    "aria-label": (A = D(l).ariaLabels) == null ? void 0 : A.openTimePicker,
                    tabindex: "0",
                    ref_key: "openTimePickerBtn",
                    ref: m,
                    onKeydown: [ne[0] || (ne[0] = Se(S => I(!0), ["enter"])), ne[1] || (ne[1] = Se(S => I(!0), ["space"]))],
                    onClick: ne[2] || (ne[2] = S => I(!0))
                }, [Y.$slots["clock-icon"] ? ae(Y.$slots, "clock-icon", {
                    key: 0
                }) : _("", !0), Y.$slots["clock-icon"] ? _("", !0) : (u(), N(D(Gf), {
                    key: 1
                }))], 42, z$)), [
                    [Ot, !D(s)("time")]
                ]), be(gt, {
                    name: D(d)(w.value),
                    css: D(y)
                }, {
                    default: le(() => {
                        var S;
                        return [w.value || Y.timePicker ? (u(), p("div", {
                            key: 0,
                            class: "dp__overlay",
                            ref_key: "overlayRef",
                            ref: v,
                            tabindex: "0"
                        }, [b("div", K$, [Y.$slots["time-picker-overlay"] ? ae(Y.$slots, "time-picker-overlay", {
                            key: 0,
                            hours: e.hours,
                            minutes: e.minutes,
                            seconds: e.seconds,
                            setHours: E,
                            setMinutes: H,
                            setSeconds: X
                        }) : _("", !0), Y.$slots["time-picker-overlay"] ? _("", !0) : (u(), p("div", Q$, [(u(!0), p(se, null, pe(D(L), (U, V) => ee((u(), N(F$, Ae({
                            key: V
                        }, { ...Y.$props,
                            order: V,
                            hours: U.hours,
                            minutes: U.minutes,
                            seconds: U.seconds,
                            closeTimePickerBtn: f.value,
                            disabled: V === 0 ? Y.fixedStart : Y.fixedEnd
                        }, {
                            ref_for: !0,
                            ref_key: "timeInputRefs",
                            ref: h,
                            "onUpdate:hours": g => E($(g, V, "hours")),
                            "onUpdate:minutes": g => H($(g, V, "minutes")),
                            "onUpdate:seconds": g => X($(g, V, "seconds")),
                            onMounted: re,
                            onOverlayClosed: re
                        }), pt({
                            _: 2
                        }, [pe(D(W), (g, B) => ({
                            name: g,
                            fn: le(q => [ae(Y.$slots, g, Fe(Bt(q)))])
                        }))]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                            [Ot, V === 0 ? !0 : D(k)]
                        ])), 128))])), Y.timePicker ? _("", !0) : ee((u(), p("div", {
                            key: 2,
                            ref_key: "closeTimePickerBtn",
                            ref: f,
                            class: F(D(R)),
                            role: "button",
                            "aria-label": (S = D(l).ariaLabels) == null ? void 0 : S.closeTimePicker,
                            tabindex: "0",
                            onKeydown: [ne[3] || (ne[3] = Se(U => I(!1), ["enter"])), ne[4] || (ne[4] = Se(U => I(!1), ["space"]))],
                            onClick: ne[5] || (ne[5] = U => I(!1))
                        }, [Y.$slots["calendar-icon"] ? ae(Y.$slots, "calendar-icon", {
                            key: 0
                        }) : _("", !0), Y.$slots["calendar-icon"] ? _("", !0) : (u(), N(D(ga), {
                            key: 1
                        }))], 42, X$)), [
                            [Ot, !D(s)("time")]
                        ])])], 512)) : _("", !0)]
                    }),
                    _: 3
                }, 8, ["name", "css"])])
            }
        }
    }),
    Z$ = (e, t) => {
        const {
            isDisabled: n,
            matchDate: r,
            getWeekFromDate: o
        } = bt(t), a = M(null), i = M(K()), s = g => {
            !g.current && t.hideOffsetDates || (a.value = g.value)
        }, l = () => {
            a.value = null
        }, d = g => Array.isArray(e.value) && t.range && e.value[0] && a.value ? g ? ct(a.value, e.value[0]) : rt(a.value, e.value[0]) : !0, y = (g, B) => {
            const q = () => e.value ? B ? e.value[0] || null : e.value[1] : null,
                G = e.value && Array.isArray(e.value) ? q() : null;
            return je(K(g.value), G)
        }, m = g => {
            const B = Array.isArray(e.value) ? e.value[0] : null;
            return g ? !rt(a.value || null, B) : !0
        }, f = (g, B = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !g.current ? !1 : je(K(g.value), e.value[B ? 0 : 1]) : t.range ? y(g, B) && m(B) || je(g.value, Array.isArray(e.value) ? e.value[0] : null) && d(B) : !1, h = (g, B, q) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? g ? !1 : q ? ct(e.value[0], B.value) : rt(e.value[0], B.value) : !1, v = g => !e.value || t.hideOffsetDates && !g.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? je(g.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some(B => je(B, g.value)) : je(g.value, e.value ? e.value : i.value), k = g => {
            if (t.autoRange || t.weekPicker) {
                if (a.value) {
                    if (t.hideOffsetDates && !g.current) return !1;
                    const B = zt(a.value, +t.autoRange),
                        q = o(K(a.value));
                    return t.weekPicker ? je(q[1], K(g.value)) : je(B, K(g.value))
                }
                return !1
            }
            return !1
        }, w = g => {
            if (t.autoRange || t.weekPicker) {
                if (a.value) {
                    const B = zt(a.value, +t.autoRange);
                    if (t.hideOffsetDates && !g.current) return !1;
                    const q = o(K(a.value));
                    return t.weekPicker ? ct(g.value, q[0]) && rt(g.value, q[1]) : ct(g.value, a.value) && rt(g.value, B)
                }
                return !1
            }
            return !1
        }, C = g => {
            if (t.autoRange || t.weekPicker) {
                if (a.value) {
                    if (t.hideOffsetDates && !g.current) return !1;
                    const B = o(K(a.value));
                    return t.weekPicker ? je(B[0], g.value) : je(a.value, g.value)
                }
                return !1
            }
            return !1
        }, L = g => zf(e.value, a.value, g.value), I = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, R = () => t.modelAuto ? Jf(t.internalModelValue) : !0, W = g => {
            if (Array.isArray(e.value) && e.value.length || t.weekPicker) return !1;
            const B = t.range ? !f(g) && !f(g, !1) : !0;
            return !n(g.value) && !v(g) && !(!g.current && t.hideOffsetDates) && B
        }, $ = g => t.range ? t.modelAuto ? I() && v(g) : !1 : v(g), E = g => t.highlight ? r(g.value, t.highlight) : !1, H = g => n(g.value) && t.highlightDisabledDays === !1, X = g => t.highlightWeekDays && t.highlightWeekDays.includes(g.value.getDay()), re = g => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || g.current) && R() && !(!g.current && t.hideOffsetDates) && !v(g) ? L(g) : !1, Y = g => ({
            dp__cell_offset: !g.current,
            dp__pointer: !t.disabled && !(!g.current && t.hideOffsetDates) && !n(g.value),
            dp__cell_disabled: n(g.value),
            dp__cell_highlight: !H(g) && (E(g) || X(g)) && !$(g),
            dp__cell_highlight_active: !H(g) && (E(g) || X(g)) && $(g),
            dp__today: !t.noToday && je(g.value, i.value) && g.current
        }), ne = g => ({
            dp__active_date: $(g),
            dp__date_hover: W(g)
        }), A = g => ({ ...S(g),
            ...U(g),
            dp__range_between_week: re(g) && t.weekPicker
        }), S = g => ({
            dp__range_start: t.multiCalendars > 0 ? g.current && f(g) && R() : f(g) && R(),
            dp__range_end: t.multiCalendars > 0 ? g.current && f(g, !1) && R() : f(g, !1) && R(),
            dp__range_between: re(g) && !t.weekPicker,
            dp__date_hover_start: h(W(g), g, !0),
            dp__date_hover_end: h(W(g), g, !1)
        }), U = g => ({ ...S(g),
            dp__cell_auto_range: w(g),
            dp__cell_auto_range_start: C(g),
            dp__cell_auto_range_end: k(g)
        }), V = g => t.range ? t.autoRange ? U(g) : t.modelAuto ? { ...ne(g),
            ...S(g)
        } : S(g) : t.weekPicker ? A(g) : ne(g);
        return {
            setHoverDate: s,
            clearHoverDate: l,
            getDayClassData: g => ({ ...Y(g),
                ...V(g),
                [t.dayClass ? t.dayClass(g.value) : ""]: !0,
                [t.calendarCellClassName]: !!t.calendarCellClassName
            })
        }
    },
    eE = ["id", "onKeydown"],
    tE = {
        key: 0,
        class: "dp__sidebar_left"
    },
    nE = {
        key: 1,
        class: "dp__preset_ranges"
    },
    rE = ["onClick"],
    oE = {
        key: 2,
        class: "dp__sidebar_right"
    },
    aE = {
        key: 3,
        class: "dp__now_wrap"
    },
    iE = Z({
        __name: "DatepickerMenu",
        props: {
            openOnTop: {
                type: Boolean,
                default: !1
            },
            internalModelValue: {
                type: [Date, Array],
                default: null
            },
            ...Zt
        },
        emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                {
                    setMenuFocused: o,
                    setShiftKey: a,
                    control: i
                } = Kf(),
                {
                    getCalendarDays: s,
                    defaults: l
                } = bt(r),
                d = Vs(),
                y = M(null),
                m = xt({
                    timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
                    monthYearInput: !!r.timePicker,
                    calendar: !1
                }),
                f = M([]),
                h = M([]),
                v = M(null),
                k = M(null),
                w = M(0),
                C = M(!1),
                L = M(0);
            Ce(() => {
                var j;
                C.value = !0, !((j = r.presetRanges) != null && j.length) && !d["left-sidebar"] && !d["right-sidebar"] && Ct();
                const ce = et(k);
                if (ce && !r.textInput && !r.inline && (o(!0), H()), ce) {
                    const it = dt => {
                        !r.monthYearComponent && !r.timePickerComponent && !Object.keys(d).length && dt.preventDefault(), dt.stopImmediatePropagation(), dt.stopPropagation()
                    };
                    ce.addEventListener("pointerdown", it), ce.addEventListener("mousedown", it)
                }
                document.addEventListener("resize", Ct)
            }), ca(() => {
                document.removeEventListener("resize", Ct)
            });
            const {
                arrowRight: I,
                arrowLeft: R,
                arrowDown: W,
                arrowUp: $
            } = Jt(), E = j => {
                j || j === 0 ? h.value[j].triggerTransition(A.value(j), S.value(j)) : h.value.forEach((ce, it) => ce.triggerTransition(A.value(it), S.value(it)))
            }, H = () => {
                const j = et(k);
                j && j.focus({
                    preventScroll: !0
                })
            }, X = () => {
                var j;
                (j = r.flow) != null && j.length && L.value !== -1 && (L.value += 1, n("flow-step", L.value), xe())
            }, re = () => {
                L.value = -1
            }, {
                calendars: Y,
                modelValue: ne,
                month: A,
                year: S,
                time: U,
                updateTime: V,
                updateMonthYear: g,
                selectDate: B,
                getWeekNum: q,
                monthYearSelect: G,
                handleScroll: te,
                handleArrow: T,
                handleSwipe: ie,
                getMarker: ue,
                selectCurrentDate: O,
                presetDateRange: z
            } = n$(r, n, X, E, L), {
                setHoverDate: Te,
                clearHoverDate: _e,
                getDayClassData: me
            } = Z$(ne, r);
            Re(Y, () => {
                r.openOnTop && setTimeout(() => {
                    n("recalculate-position")
                }, 0)
            }, {
                deep: !0
            });
            const Ne = cn(d, "calendar"),
                ot = cn(d, "action"),
                ve = cn(d, "timePicker"),
                ke = cn(d, "monthYear"),
                Be = c(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"),
                Ie = c(() => Y2(r.yearRange)),
                en = c(() => F2(r.locale, r.monthNameFormat)),
                Ct = () => {
                    const j = et(y);
                    j && (w.value = j.getBoundingClientRect().width)
                },
                at = c(() => j => s(A.value(j), S.value(j))),
                Et = c(() => l.value.multiCalendars > 0 && r.range ? [...Array(l.value.multiCalendars).keys()] : [0]),
                Yt = c(() => j => j === 1),
                tn = c(() => r.monthPicker || r.timePicker || r.yearPicker),
                Hn = c(() => ({
                    dp__flex_display: l.value.multiCalendars > 0
                })),
                vn = c(() => ({
                    dp__instance_calendar: l.value.multiCalendars > 0
                })),
                nn = c(() => ({
                    dp__menu_disabled: r.disabled,
                    dp__menu_readonly: r.readonly
                })),
                Un = c(() => j => bn(at, j)),
                Vn = c(() => ({
                    dp__menu: !0,
                    dp__menu_index: !r.inline,
                    dp__relative: r.inline,
                    [r.menuClassName]: !!r.menuClassName
                })),
                bn = (j, ce) => j.value(ce).map(it => ({ ...it,
                    days: it.days.map(dt => (dt.marker = ue(dt), dt.classData = me(dt), dt))
                })),
                pr = j => {
                    j.stopPropagation(), j.stopImmediatePropagation()
                },
                P = () => {
                    r.escClose && n("close-picker")
                },
                Q = (j, ce = !1) => {
                    B(j, ce), r.spaceConfirm && n("select-date")
                },
                fe = j => {
                    var ce;
                    (ce = r.flow) != null && ce.length && (m[j] = !0, Object.keys(m).filter(it => !m[it]).length || xe())
                },
                we = (j, ce, it, dt, ...hr) => {
                    if (r.flow[L.value] === j) {
                        const he = dt ? ce.value[0] : ce.value;
                        he && he[it](...hr)
                    }
                },
                xe = () => {
                    we("month", f, "toggleMonthPicker", !0, !0), we("year", f, "toggleYearPicker", !0, !0), we("calendar", v, "toggleTimePicker", !1, !1, !0), we("time", v, "toggleTimePicker", !1, !0, !0);
                    const j = r.flow[L.value];
                    (j === "hours" || j === "minutes" || j === "seconds") && we(j, v, "toggleTimePicker", !1, !0, !0, j)
                },
                Dt = j => {
                    if (r.arrowNavigation) {
                        if (j === "up") return $();
                        if (j === "down") return W();
                        if (j === "left") return R();
                        if (j === "right") return I()
                    } else j === "left" || j === "up" ? T("left", 0, j === "up") : T("right", 0, j === "down")
                },
                rn = j => {
                    a(j.shiftKey), !r.disableMonthYearSelect && j.code === "Tab" && j.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (j.preventDefault(), j.stopImmediatePropagation(), n("close-picker"))
                };
            return t({
                updateMonthYear: g
            }), (j, ce) => {
                var it;
                return u(), N(gt, {
                    appear: "",
                    name: (it = D(l).transitions) == null ? void 0 : it.menuAppear,
                    mode: "out-in",
                    css: !!j.transitions
                }, {
                    default: le(() => {
                        var dt, hr;
                        return [b("div", {
                            id: j.uid ? `dp-menu-${j.uid}` : void 0,
                            tabindex: "0",
                            ref_key: "dpMenuRef",
                            ref: k,
                            role: "dialog",
                            class: F(D(Vn)),
                            onMouseleave: ce[12] || (ce[12] = (...he) => D(_e) && D(_e)(...he)),
                            onClick: pr,
                            onKeydown: [Se(P, ["esc"]), ce[13] || (ce[13] = Se(Me(he => Dt("left"), ["prevent"]), ["left"])), ce[14] || (ce[14] = Se(Me(he => Dt("up"), ["prevent"]), ["up"])), ce[15] || (ce[15] = Se(Me(he => Dt("down"), ["prevent"]), ["down"])), ce[16] || (ce[16] = Se(Me(he => Dt("right"), ["prevent"]), ["right"])), rn]
                        }, [(j.disabled || j.readonly) && j.inline ? (u(), p("div", {
                            key: 0,
                            class: F(D(nn))
                        }, null, 2)) : _("", !0), !j.inline && !j.teleportCenter ? (u(), p("div", {
                            key: 1,
                            class: F(D(Be))
                        }, null, 2)) : _("", !0), b("div", {
                            class: F({
                                dp__menu_content_wrapper: ((dt = j.presetRanges) == null ? void 0 : dt.length) || !!j.$slots["left-sidebar"] || !!j.$slots["right-sidebar"]
                            })
                        }, [j.$slots["left-sidebar"] ? (u(), p("div", tE, [ae(j.$slots, "left-sidebar")])) : _("", !0), (hr = j.presetRanges) != null && hr.length ? (u(), p("div", nE, [(u(!0), p(se, null, pe(j.presetRanges, (he, _n) => (u(), p("div", {
                            key: _n,
                            style: Oe(he.style || {}),
                            class: "dp__preset_range",
                            onClick: $e => D(z)(he.range, !!he.slot)
                        }, [he.slot ? ae(j.$slots, he.slot, {
                            key: 0,
                            presetDateRange: D(z),
                            label: he.label,
                            range: he.range
                        }) : (u(), p(se, {
                            key: 1
                        }, [Pe(x(he.label), 1)], 64))], 12, rE))), 128))])) : _("", !0), b("div", {
                            class: "dp__instance_calendar",
                            ref_key: "calendarWrapperRef",
                            ref: y,
                            role: "document"
                        }, [b("div", {
                            class: F(D(Hn))
                        }, [(u(!0), p(se, null, pe(D(Et), (he, _n) => (u(), p("div", {
                            key: he,
                            class: F(D(vn))
                        }, [!j.disableMonthYearSelect && !j.timePicker ? (u(), N(dn(j.monthYearComponent ? j.monthYearComponent : V$), Ae({
                            key: 0,
                            ref_for: !0,
                            ref: $e => {
                                $e && (f.value[_n] = $e)
                            },
                            months: D(en),
                            years: D(Ie),
                            month: D(A)(he),
                            year: D(S)(he),
                            instance: he,
                            "internal-model-value": e.internalModelValue
                        }, j.$props, {
                            onMount: ce[0] || (ce[0] = $e => fe("monthYearInput")),
                            onResetFlow: re,
                            onUpdateMonthYear: $e => D(g)(he, $e),
                            onMonthYearSelect: D(G),
                            onOverlayClosed: H
                        }), pt({
                            _: 2
                        }, [pe(D(ke), ($e, nm) => ({
                            name: $e,
                            fn: le(ba => [ae(j.$slots, $e, Fe(Bt(ba)))])
                        }))]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : _("", !0), be(O$, Ae({
                            ref_for: !0,
                            ref: $e => {
                                $e && (h.value[_n] = $e)
                            },
                            "specific-mode": D(tn),
                            "get-week-num": D(q),
                            instance: he,
                            "mapped-dates": D(Un)(he),
                            month: D(A)(he),
                            year: D(S)(he)
                        }, j.$props, {
                            "flow-step": L.value,
                            "onUpdate:flow-step": ce[1] || (ce[1] = $e => L.value = $e),
                            onSelectDate: $e => D(B)($e, !D(Yt)(he)),
                            onHandleSpace: $e => Q($e, !D(Yt)(he)),
                            onSetHoverDate: ce[2] || (ce[2] = $e => D(Te)($e)),
                            onHandleScroll: $e => D(te)($e, he),
                            onHandleSwipe: $e => D(ie)($e, he),
                            onMount: ce[3] || (ce[3] = $e => fe("calendar")),
                            onResetFlow: re
                        }), pt({
                            _: 2
                        }, [pe(D(Ne), ($e, nm) => ({
                            name: $e,
                            fn: le(ba => [ae(j.$slots, $e, Fe(Bt({ ...ba
                            })))])
                        }))]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])], 2))), 128))], 2), b("div", null, [j.$slots["time-picker"] ? ae(j.$slots, "time-picker", Fe(Ae({
                            key: 0
                        }, {
                            time: D(U),
                            updateTime: D(V)
                        }))) : (u(), p(se, {
                            key: 1
                        }, [j.enableTimePicker && !j.monthPicker && !j.weekPicker ? (u(), N(dn(j.timePickerComponent ? j.timePickerComponent : J$), Ae({
                            key: 0,
                            ref_key: "timePickerRef",
                            ref: v,
                            hours: D(U).hours,
                            minutes: D(U).minutes,
                            seconds: D(U).seconds,
                            "internal-model-value": e.internalModelValue
                        }, j.$props, {
                            onMount: ce[4] || (ce[4] = he => fe("timePicker")),
                            "onUpdate:hours": ce[5] || (ce[5] = he => D(V)(he)),
                            "onUpdate:minutes": ce[6] || (ce[6] = he => D(V)(he, !1)),
                            "onUpdate:seconds": ce[7] || (ce[7] = he => D(V)(he, !1, !0)),
                            onResetFlow: re,
                            onOverlayClosed: H
                        }), pt({
                            _: 2
                        }, [pe(D(ve), (he, _n) => ({
                            name: he,
                            fn: le($e => [ae(j.$slots, he, Fe(Bt($e)))])
                        }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : _("", !0)], 64))])], 512), j.$slots["right-sidebar"] ? (u(), p("div", oE, [ae(j.$slots, "right-sidebar")])) : _("", !0), j.showNowButton ? (u(), p("div", aE, [j.$slots["now-button"] ? ae(j.$slots, "now-button", {
                            key: 0,
                            selectCurrentDate: D(O)
                        }) : _("", !0), j.$slots["now-button"] ? _("", !0) : (u(), p("button", {
                            key: 1,
                            type: "button",
                            role: "button",
                            class: "dp__now_button",
                            onClick: ce[8] || (ce[8] = (...he) => D(O) && D(O)(...he))
                        }, x(j.nowButtonLabel), 1))])) : _("", !0)], 2), !j.autoApply || j.keepActionRow ? (u(), N(dn(j.actionRowComponent ? j.actionRowComponent : y$), Ae({
                            key: 2,
                            "menu-mount": C.value,
                            "calendar-width": w.value,
                            "internal-model-value": e.internalModelValue
                        }, j.$props, {
                            onClosePicker: ce[9] || (ce[9] = he => j.$emit("close-picker")),
                            onSelectDate: ce[10] || (ce[10] = he => j.$emit("select-date")),
                            onInvalidSelect: ce[11] || (ce[11] = he => j.$emit("invalid-select"))
                        }), pt({
                            _: 2
                        }, [pe(D(ot), (he, _n) => ({
                            name: he,
                            fn: le($e => [ae(j.$slots, he, Fe(Bt({ ...$e
                            })))])
                        }))]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : _("", !0)], 42, eE)]
                    }),
                    _: 3
                }, 8, ["name", "css"])
            }
        }
    }),
    sE = typeof window < "u" ? window : void 0,
    ii = () => {},
    lE = e => Id() ? ($d(e), !0) : !1,
    uE = (e, t, n, r) => {
        if (!e) return ii;
        let o = ii;
        const a = Re(() => D(e), s => {
                o(), s && (s.addEventListener(t, n, r), o = () => {
                    s.removeEventListener(t, n, r), o = ii
                })
            }, {
                immediate: !0,
                flush: "post"
            }),
            i = () => {
                a(), o()
            };
        return lE(i), i
    },
    cE = (e, t, n, r = {}) => {
        const {
            window: o = sE,
            event: a = "pointerdown"
        } = r;
        return o ? uE(o, a, i => {
            const s = et(e),
                l = et(t);
            !s || !l || s === i.target || i.composedPath().includes(s) || i.composedPath().includes(l) || n(i)
        }, {
            passive: !0
        }) : void 0
    },
    dE = Z({
        __name: "VueDatePicker",
        props: { ...Zt
        },
        emits: ["update:model-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                o = Vs(),
                a = M(!1),
                i = pi(r, "modelValue"),
                s = pi(r, "timezone"),
                l = M(null),
                d = M(null),
                y = M(!1),
                {
                    setMenuFocused: m,
                    setShiftKey: f
                } = Kf(),
                {
                    clearArrowNav: h
                } = Jt(),
                {
                    validateDate: v,
                    isValidTime: k,
                    defaults: w
                } = bt(r);
            Ce(() => {
                X(r.modelValue), r.inline || (window.addEventListener("scroll", U), window.addEventListener("resize", V)), r.inline && (a.value = !0)
            }), ca(() => {
                r.inline || (window.removeEventListener("scroll", U), window.removeEventListener("resize", V))
            });
            const C = cn(o, "all", r.presetRanges),
                L = cn(o, "input");
            Re([i, s], () => {
                X(i.value)
            }, {
                deep: !0
            });
            const {
                openOnTop: I,
                menuPosition: R,
                setMenuPosition: W,
                setInitialPosition: $
            } = a$(l, d, n, r), {
                inputValue: E,
                internalModelValue: H,
                parseExternalModelValue: X,
                emitModelValue: re,
                formatInputValue: Y,
                checkBeforeEmit: ne
            } = r$(n, r, y), A = c(() => ({
                dp__main: !0,
                dp__theme_dark: r.dark,
                dp__theme_light: !r.dark,
                dp__flex_display: r.inline,
                dp__flex_display_with_input: r.inlineWithInput
            })), S = c(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), U = () => {
                a.value && (r.closeOnScroll ? ue() : r.autoPosition ? W() : window.removeEventListener("scroll", U))
            }, V = () => {
                a.value && W()
            }, g = () => {
                !r.disabled && !r.readonly && ($(), a.value = !0, jt().then(() => {
                    W(), a.value && n("open")
                }), a.value || ie(), X(r.modelValue))
            }, B = () => {
                E.value = "", ie(), n("update:model-value", null), n("cleared"), ue()
            }, q = () => {
                const ke = H.value;
                return !ke || !Array.isArray(ke) && v(ke) ? !0 : Array.isArray(ke) ? ke.length === 2 && v(ke[0]) && v(ke[1]) ? !0 : v(ke[0]) : !1
            }, G = () => {
                ne() && q() ? (re(), ue()) : n("invalid-select", H.value)
            }, te = ke => {
                re(), r.closeOnAutoApply && !ke && ue()
            }, T = (ke = !1) => {
                r.autoApply && k(H.value) && q() && (r.range && Array.isArray(H.value) ? (r.partialRange || H.value.length === 2) && te(ke) : te(ke))
            }, ie = () => {
                r.textInput || (H.value = null)
            }, ue = () => {
                r.inline || (a.value && (a.value = !1, m(!1), f(!1), h(), n("closed"), $(), E.value && X(i.value)), ie(), d.value && d.value.focusInput())
            }, O = (ke, Be) => {
                if (!ke) {
                    H.value = null;
                    return
                }
                H.value = ke, Be && (G(), n("text-submit"))
            }, z = () => {
                r.autoApply && k(H.value) && re()
            }, Te = () => a.value ? ue() : g(), _e = ke => {
                H.value = ke
            }, me = c(() => r.textInput && w.value.textInputOptions.format), Ne = () => {
                me.value && (y.value = !0, Y()), n("focus")
            }, ot = () => {
                me.value && (y.value = !1, Y()), n("blur")
            }, ve = ke => {
                l.value && l.value.updateMonthYear(0, {
                    month: md(ke.month),
                    year: md(ke.year)
                })
            };
            return cE(l, d, r.onClickOutside ? () => r.onClickOutside(q) : ue), t({
                closeMenu: ue,
                selectDate: G,
                clearValue: B,
                openMenu: g,
                onScroll: U,
                formatInputValue: Y,
                updateInternalModelValue: _e,
                setMonthYear: ve
            }), (ke, Be) => (u(), p("div", {
                class: F(D(A))
            }, [be(m$, Ae({
                ref_key: "inputRef",
                ref: d,
                "is-menu-open": a.value,
                "input-value": D(E),
                "onUpdate:input-value": Be[0] || (Be[0] = Ie => un(E) ? E.value = Ie : null)
            }, ke.$props, {
                onClear: B,
                onOpen: g,
                onSetInputDate: O,
                onSetEmptyDate: D(re),
                onSelectDate: G,
                onToggle: Te,
                onClose: ue,
                onFocus: Ne,
                onBlur: ot
            }), pt({
                _: 2
            }, [pe(D(L), (Ie, en) => ({
                name: Ie,
                fn: le(Ct => [ae(ke.$slots, Ie, Fe(Bt(Ct)))])
            }))]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]), a.value ? (u(), N(Rm, {
                key: 0,
                to: ke.teleport,
                disabled: ke.inline
            }, [a.value ? (u(), N(iE, Ae({
                key: 0,
                ref_key: "dpMenuRef",
                ref: l,
                class: D(S),
                style: D(R),
                "open-on-top": D(I)
            }, ke.$props, {
                "internal-model-value": D(H),
                "onUpdate:internal-model-value": Be[1] || (Be[1] = Ie => un(H) ? H.value = Ie : null),
                onClosePicker: ue,
                onSelectDate: G,
                onAutoApply: T,
                onTimeUpdate: z,
                onFlowStep: Be[2] || (Be[2] = Ie => ke.$emit("flow-step", Ie)),
                onUpdateMonthYear: Be[3] || (Be[3] = Ie => ke.$emit("update-month-year", Ie)),
                onInvalidSelect: Be[4] || (Be[4] = Ie => ke.$emit("invalid-select", D(H))),
                onRecalculatePosition: D(W)
            }), pt({
                _: 2
            }, [pe(D(C), (Ie, en) => ({
                name: Ie,
                fn: le(Ct => [ae(ke.$slots, Ie, Fe(Bt({ ...Ct
                })))])
            }))]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : _("", !0)], 8, ["to", "disabled"])) : _("", !0)], 2))
        }
    }),
    bl = (() => {
        const e = dE;
        return e.install = t => {
            t.component("Vue3DatePicker", e)
        }, e
    })(),
    fE = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: bl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
Object.entries(fE).forEach(([e, t]) => {
    e !== "default" && (bl[e] = t)
});
const mE = "/_astro/calendar.85f8e697.svg",
    pE = "/_astro/clock.779fd46a.svg",
    hE = "/_astro/location.e89359bd.svg",
    gE = "/_astro/arrow-left.cbd56d25.svg",
    yE = {
        props: {
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            customProps: {
                type: Object,
                default: null
            }
        },
        emits: ["update-month-year"],
        data() {
            return {
                arrowLeft: gE
            }
        },
        computed: {
            getLanguage() {
                return this.customProps.language === "br" ? "pt-BR" : this.customProps.language
            },
            calendarTitle() {
                return new Date(this.year, this.month).toLocaleDateString(this.getLanguage, {
                    year: "numeric",
                    month: "long"
                })
            }
        },
        methods: {
            onNextClick() {
                let e = this.month,
                    t = this.year;
                this.month === 11 ? (e = 0, t = this.year + 1) : e += 1, this.updateDate(e, t)
            },
            onPreviousClick() {
                let e = this.month,
                    t = this.year;
                this.month === 0 ? (e = 11, t = this.year - 1) : e -= 1, this.updateDate(e, t)
            },
            updateDate(e, t) {
                this.$emit("update-month-year", {
                    instance: 0,
                    month: e,
                    year: t
                })
            }
        }
    },
    vE = {
        class: "date-picker-header"
    },
    bE = ["src"],
    _E = ["src"];

function wE(e, t, n, r, o, a) {
    return u(), p("div", vE, [b("button", {
        class: "date-picker-header__button",
        onClick: t[0] || (t[0] = (...i) => a.onPreviousClick && a.onPreviousClick(...i))
    }, [b("img", {
        class: "date-picker-header__arrow",
        src: o.arrowLeft
    }, null, 8, bE)]), Pe(" " + x(a.calendarTitle) + " ", 1), b("button", {
        class: "date-picker-header__button",
        onClick: t[1] || (t[1] = (...i) => a.onNextClick && a.onNextClick(...i))
    }, [b("img", {
        class: "date-picker-header__arrow date-picker-header__arrow--next",
        src: o.arrowLeft
    }, null, 8, _E)])])
}
const kE = J(yE, [
        ["render", wE],
        ["__scopeId", "data-v-7c0cb8f5"]
    ]),
    SE = Z({
        components: {
            ModalLayout: Nn,
            DatePicker: bl
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            },
            language: {
                type: String,
                default: "en"
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                openEcommerceModal: t
            } = St(), {
                initiateCheckout: n
            } = Ln(), r = c(() => kE);
            return {
                initiateCheckout: n,
                openEcommerceModal: t,
                datePickerHeader: r
            }
        },
        data() {
            return {
                calendarIcon: mE,
                clockIcon: pE,
                locationIcon: hE,
                isTimeSelected: !1,
                selectedTimeSlot: null,
                selectedDate: new Date,
                timeSlots: [],
                isSlotsLoading: !1,
                isCalendarLoading: !1,
                isCheckoutLoading: !1,
                disabledDates: []
            }
        },
        computed: { ...ua("ecommerce", ["products", "selectedBookingProductId", "shoppingCartBookingEvents", "shoppingCartItems"]),
            ...qt("ecommerce", ["isStoreTypeZyro"]),
            isModalEnabled() {
                return this.isStoreTypeZyro && !!this.selectedBookingProductId
            },
            selectedBookingProduct() {
                return this.products ? .find(e => e.id === this.selectedBookingProductId)
            },
            bookingEvent() {
                return this.selectedBookingProduct ? .variants[0].booking_event
            },
            title() {
                return this.selectedBookingProduct ? .title
            },
            location() {
                return this.bookingEvent ? .location
            },
            duration() {
                return this.bookingEvent ? .length || null
            },
            durationUnit() {
                return this.bookingEvent ? .length_unit
            },
            aggregatedDuration() {
                const e = this.durationUnit === li ? this.duration / 1e3 / 60 / 60 : this.duration / 1e3 / 60,
                    t = this.durationUnit === li ? this.translations.hourShort : this.translations.minuteShort;
                return `${e} ${t}`
            },
            eventStartDate() {
                return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null
            },
            eventEndDate() {
                if (!this.selectedTimeSlot) return null;
                const t = this.eventStartDate.getTime() + this.duration;
                return new Date(t)
            },
            calculatedTime() {
                if (!this.selectedTimeSlot) return "--:--";
                const e = this.getVisibleDate(this.eventStartDate),
                    t = this.getVisibleDate(this.eventEndDate);
                return `${e} - ${t}`
            },
            dayNames() {
                const e = [],
                    t = new Date;
                t.setDate(t.getDate() - t.getDay());
                for (let n = 0; n < 7; n += 1) t.setDate(t.getDate() + 1), e.push(new Date(t).toLocaleDateString(this.getLanguage, {
                    weekday: "short"
                }));
                return e
            },
            formattedSelectedDate() {
                const e = this.selectedDate ? .toLocaleDateString(this.language);
                if (this.eventStartDate ? .toDateString() !== this.eventEndDate ? .toDateString()) {
                    const t = this.eventEndDate.toLocaleDateString(this.language);
                    return `${e} - ${t}`
                }
                return e
            },
            selectedMonthAndWeekday() {
                if (!this.selectedDate) return null;
                const e = this.selectedDate ? .toLocaleDateString(this.getLanguage, {
                    month: "long",
                    day: "numeric"
                });
                return `${this.selectedDate?.toLocaleDateString(this.getLanguage,{weekday:"long"})}, ${e}`
            },
            getLanguage() {
                return this.language === "br" ? "pt-BR" : this.language
            }
        },
        watch: {
            async selectedDate() {
                this.selectedTimeSlot = null, this.isTimeSelected = !1, await this.loadTimeSlots()
            }
        },
        async created() {
            this.isModalEnabled && this.setDefaultData()
        },
        methods: { ...An("ecommerce", ["setShoppingCartOpen", "setSelectedBookingId", "setShoppingCartItems"]),
            closeEcommerceModal() {
                this.setSelectedBookingId(null), this.$refs.modal.handleCloseModalAction()
            },
            async setDefaultData() {
                if (await this.loadAvailability(), this.disabledDates.some(e => e.toDateString() === this.selectedDate.toDateString())) {
                    const t = this.getAllDaysInCurrentMonth().filter(n => !this.disabledDates.some(r => r.toDateString() === n.toDateString())).sort((n, r) => new Date(n.date) - new Date(r.date));
                    this.selectedDate = t.shift()
                }
                await this.loadTimeSlots()
            },
            async handleSubmit() {
                if (mn()) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                const e = { ...this.selectedBookingProduct
                    },
                    {
                        timeZone: t
                    } = Intl.DateTimeFormat().resolvedOptions();
                e.variants[0].booking_event = { ...e.variants[0].booking_event,
                    time_slot: this.selectedTimeSlot,
                    time_zone: t,
                    length: e.variants[0].booking_event.length,
                    length_unit: e.variants[0].booking_event.length_unit,
                    date: this.selectedDate
                }, this.isCartVisible ? (this.isCheckoutLoading = !0, this.setShoppingCartItems([...this.shoppingCartItems, e]), this.setShoppingCartOpen(!0), this.closeEcommerceModal()) : await this.initiateCheckout([e]).then(() => {
                    this.isCheckoutLoading = !1, this.closeEcommerceModal()
                })
            },
            selectTimeSlot(e) {
                this.isTimeSelected = !0, this.selectedTimeSlot = e
            },
            async loadTimeSlots() {
                this.isSlotsLoading = !0;
                const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
                this.timeSlots = await im(this.bookingEvent.id, e).then(t => (this.isSlotsLoading = !1, t))
            },
            async loadAvailability({
                data: e = {}
            } = {}) {
                this.isCalendarLoading = !0;
                const t = Object.keys(e).length ? new Date(e.year, e.month) : this.selectedDate,
                    n = new Date(t.getFullYear(), t.getMonth() + 1, 0);
                this.disabledDates = await sm({
                    bookingId: this.bookingEvent.id,
                    fromDate: new Intl.DateTimeFormat("lt").format(t),
                    toDate: new Intl.DateTimeFormat("lt").format(n)
                }).then(r => (this.isCalendarLoading = !1, r.map(o => {
                    const a = o.split("-");
                    return new Date(a[0], a[1] - 1, a[2])
                })))
            },
            getAllDaysInCurrentMonth() {
                const e = new Date().getMonth(),
                    t = new Date(new Date().getFullYear(), e, new Date().getDate()),
                    n = [];
                for (; t.getMonth() === e;) n.push(new Date(t)), t.setDate(t.getDate() + 1);
                return n
            },
            getVisibleDate(e) {
                return e.toLocaleTimeString(this.language, {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }
        }
    }),
    PE = {
        class: "ecommerce-booking-modal"
    },
    TE = {
        class: "ecommerce-booking-modal__content"
    },
    CE = {
        class: "ecommerce-booking-modal__info"
    },
    OE = {
        class: "ecommerce-booking-modal__title"
    },
    IE = {
        class: "ecommerce-booking-modal__icons"
    },
    $E = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    EE = ["src"],
    DE = {
        class: "ecommerce-booking-modal__text"
    },
    LE = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    ME = ["src"],
    BE = {
        class: "ecommerce-booking-modal__text"
    },
    AE = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    RE = ["src"],
    NE = {
        class: "ecommerce-booking-modal__text"
    },
    HE = {
        class: "ecommerce-booking-modal__availability"
    },
    UE = {
        class: "ecommerce-booking-modal__time-title"
    },
    VE = {
        class: "ecommerce-booking-modal__calendar-wrapper"
    },
    qE = {
        class: "ecommerce-booking-modal__time-wrapper"
    },
    jE = {
        class: "ecommerce-booking-modal__selected-day"
    },
    xE = {
        class: "ecommerce-booking-modal__time-slot-wrapper"
    },
    WE = {
        key: 0,
        class: "ecommerce-booking-modal__time-slot-loader"
    },
    GE = ["onClick"],
    YE = {
        class: "ecommerce-booking-modal__buttons"
    },
    FE = ["disabled"];

function zE(e, t, n, r, o, a) {
    const i = oe("DatePicker"),
        s = oe("ModalLayout");
    return e.isModalEnabled ? (u(), N(s, {
        key: 0,
        ref: "modal",
        padding: "0",
        "max-width": "1048px",
        height: "100%",
        width: "100vw",
        "background-color": "transparent"
    }, {
        default: le(() => [b("div", PE, [b("div", TE, [b("div", CE, [b("p", OE, x(e.title), 1), b("div", IE, [b("div", $E, [b("img", {
            class: "ecommerce-booking-modal__icon",
            src: e.calendarIcon
        }, null, 8, EE), b("p", DE, x(e.formattedSelectedDate), 1)]), b("div", LE, [b("img", {
            class: "ecommerce-booking-modal__icon",
            src: e.clockIcon
        }, null, 8, ME), b("p", BE, x(e.calculatedTime) + " (" + x(e.aggregatedDuration) + ") ", 1)])]), b("div", AE, [b("img", {
            class: "ecommerce-booking-modal__icon",
            src: e.locationIcon
        }, null, 8, RE), b("p", NE, x(e.location), 1)])]), b("div", HE, [b("p", UE, x(e.translations.selectDateAndTime), 1), b("div", VE, [be(i, {
            modelValue: e.selectedDate,
            "onUpdate:modelValue": t[0] || (t[0] = l => e.selectedDate = l),
            inline: "",
            "hide-offset-dates": "",
            "auto-apply": "",
            class: F(["ecommerce-booking-modal-calendar", {
                "ecommerce-booking-modal-calendar--loading": e.isCalendarLoading
            }]),
            "disabled-dates": e.disabledDates,
            "min-date": new Date,
            locale: e.getLanguage,
            "no-swipe": "",
            "month-change-on-scroll": !1,
            "enable-time-picker": !1,
            "custom-props": {
                language: e.getLanguage
            },
            "month-year-component": e.datePickerHeader,
            onUpdateMonthYear: t[1] || (t[1] = l => e.loadAvailability({
                data: l
            }))
        }, {
            "calendar-header": le(({
                index: l
            }) => [b("div", null, x(e.dayNames[l]), 1)]),
            _: 1
        }, 8, ["modelValue", "class", "disabled-dates", "min-date", "locale", "custom-props", "month-year-component"]), b("div", qE, [b("div", null, [b("p", jE, x(e.selectedMonthAndWeekday), 1)]), b("div", xE, [e.isSlotsLoading ? (u(), p("div", WE)) : (u(!0), p(se, {
            key: 1
        }, pe(e.timeSlots, (l, d) => (u(), p("button", {
            key: `time-${d}`,
            class: F(["ecommerce-booking-modal__time-slot", {
                "ecommerce-booking-modal__time-slot--active": e.selectedTimeSlot === l
            }]),
            onClick: y => e.selectTimeSlot(l)
        }, x(e.getVisibleDate(new Date(l))), 11, GE))), 128))])])])])]), b("div", YE, [b("button", {
            class: "ecommerce-booking-modal__button",
            onClick: t[2] || (t[2] = (...l) => e.closeEcommerceModal && e.closeEcommerceModal(...l))
        }, x(e.translations.cancel), 1), b("button", {
            class: F(["ecommerce-booking-modal__button ecommerce-booking-modal__button--save", {
                loading: e.isCheckoutLoading
            }]),
            disabled: !e.isTimeSelected,
            onClick: t[3] || (t[3] = (...l) => e.handleSubmit && e.handleSubmit(...l))
        }, x(e.translations.book), 11, FE)])])]),
        _: 1
    }, 512)) : _("", !0)
}
const KE = J(SE, [
        ["render", zE]
    ]),
    QE = Z({
        name: "EcommerceModalContent",
        props: {
            title: {
                type: String,
                required: !0
            },
            text: {
                type: String,
                required: !0
            },
            buttonText: {
                type: String,
                required: !0
            },
            qaSelector: {
                type: String,
                default: "success"
            }
        },
        emits: ["handle-close"]
    }),
    XE = {
        class: "payment-info"
    },
    JE = {
        class: "payment-info__content"
    },
    ZE = {
        class: "payment-info__title"
    },
    e3 = {
        class: "payment-info__text body-large"
    };

function t3(e, t, n, r, o, a) {
    const i = De("qa");
    return ee((u(), p("div", XE, [b("div", JE, [b("h5", ZE, x(e.title), 1), b("p", e3, x(e.text), 1), b("button", {
        class: "payment-info__button",
        type: "primary",
        onClick: t[0] || (t[0] = s => e.$emit("handle-close"))
    }, x(e.buttonText), 1)])])), [
        [i, `ecommerce-modal-checkout-${e.qaSelector}`]
    ])
}
const va = J(QE, [
        ["render", t3],
        ["__scopeId", "data-v-cb06ab16"]
    ]),
    n3 = Z({
        components: {
            ModalLayout: Nn,
            ModalContent: va
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function r3(e, t, n, r, o, a) {
    const i = oe("ModalContent"),
        s = oe("ModalLayout");
    return u(), N(s, {
        ref: "modal"
    }, {
        default: le(() => [be(i, {
            "qa-selector": "booking-unavailable",
            title: e.translations.checkoutModalBookingUnavailable,
            text: e.translations.checkoutModalChooseDifferentTime,
            "button-text": e.translations.gotIt,
            onHandleClose: t[0] || (t[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const o3 = J(n3, [
        ["render", r3]
    ]),
    a3 = Z({
        components: {
            ModalLayout: Nn,
            ModalContent: va
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function i3(e, t, n, r, o, a) {
    const i = oe("ModalContent"),
        s = oe("ModalLayout");
    return u(), N(s, {
        ref: "modal"
    }, {
        default: le(() => [be(i, {
            "qa-selector": "failed",
            title: e.translations.checkoutModalCantAcceptOrders,
            text: e.translations.checkoutModalPleaseContact,
            "button-text": e.translations.close,
            onHandleClose: t[0] || (t[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const s3 = J(a3, [
        ["render", i3]
    ]),
    l3 = Z({
        components: {
            ModalLayout: Nn,
            ModalContent: va
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        },
        setup(e) {
            const t = M({
                title: e.translations.checkoutModalThanksForOrder,
                text: e.translations.checkoutModalOrderReceived,
                buttonText: e.translations.gotIt,
                modalType: "success-order"
            });
            return Ce(() => {
                const r = new URLSearchParams(window.location.search).get("product");
                r === wt ? t.value = {
                    title: e.translations.checkoutModalThanksForOrder,
                    text: e.translations.checkoutModalSuccessfullyBooked,
                    buttonText: e.translations.gotIt,
                    modalType: "success-orderbooking"
                } : r === si && (t.value = {
                    title: e.translations.checkoutModalThanksForDonation,
                    text: e.translations.checkoutModalDonationReceived,
                    buttonText: e.translations.gotIt,
                    modalType: "success-orderdonation"
                })
            }), {
                modalContent: t
            }
        },
        computed: { ...qt("ecommerce", ["isEcommerceStoreCreated"])
        },
        created() {
            this.setShoppingCartItems([])
        },
        methods: { ...An("ecommerce", ["setShoppingCartItems"])
        }
    });

function u3(e, t, n, r, o, a) {
    const i = oe("ModalContent"),
        s = oe("ModalLayout");
    return e.isEcommerceStoreCreated ? (u(), N(s, {
        key: 0,
        ref: "modal"
    }, {
        default: le(() => [be(i, {
            title: e.modalContent.title,
            text: e.modalContent.text,
            "button-text": e.modalContent.buttonText,
            "qa-selector": e.modalContent.modalType,
            onHandleClose: t[0] || (t[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text", "qa-selector"])]),
        _: 1
    }, 512)) : _("", !0)
}
const c3 = J(l3, [
        ["render", u3]
    ]),
    d3 = Z({
        components: {
            CloseButton: al
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        },
        setup() {
            const {
                closeEcommerceModal: e
            } = St(), t = setTimeout(() => {
                e()
            }, 6e3);
            return yt(() => {
                clearTimeout(t)
            }), {
                closeEcommerceModal: e
            }
        }
    }),
    f3 = e => (Pt("data-v-321be6a9"), e = e(), Tt(), e),
    m3 = {
        class: "notification"
    },
    p3 = f3(() => b("svg", {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), b("path", {
        d: "M12.01 16L12.01 12",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), b("path", {
        d: "M12.01 8L12 8",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    h3 = {
        class: "notification__content"
    };

function g3(e, t, n, r, o, a) {
    const i = oe("CloseButton"),
        s = De("qa");
    return u(), N(gt, {
        name: "fade"
    }, {
        default: le(() => [ee((u(), p("div", m3, [p3, b("p", h3, x(e.translations.checkoutModalDisabledPreview), 1), be(i, {
            class: "notification__close",
            title: "Close",
            onClick: t[0] || (t[0] = l => e.closeEcommerceModal())
        })])), [
            [s, "builder-message-ecommercedisabled"]
        ])]),
        _: 1
    })
}
const y3 = J(d3, [
        ["render", g3],
        ["__scopeId", "data-v-321be6a9"]
    ]),
    v3 = Z({
        components: {
            ModalLayout: Nn,
            ModalContent: va
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function b3(e, t, n, r, o, a) {
    const i = oe("ModalContent"),
        s = oe("ModalLayout");
    return u(), N(s, {
        ref: "modal"
    }, {
        default: le(() => [be(i, {
            "qa-selector": "outofstock",
            title: e.translations.checkoutModalOutOfStock,
            text: e.translations.checkoutModalTryOrChoose,
            "button-text": e.translations.gotIt,
            onHandleClose: t[0] || (t[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const _3 = J(v3, [
        ["render", b3]
    ]),
    w3 = "open-modal",
    k3 = Z({
        components: {
            EcommerceProductPreview: Ck,
            EcommerceBookingEventSelect: KE,
            EcommerceBookingUnavailable: o3,
            EcommerceCheckoutFailed: s3,
            EcommerceCheckoutSuccess: c3,
            EcommerceMessageButtonDisabled: y3,
            EcommerceOutOfStock: _3
        },
        props: {
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            language: {
                type: String,
                default: "en"
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            const {
                openEcommerceModal: e,
                closeEcommerceModal: t,
                openEcommerceModalName: n
            } = St();
            return Ce(() => {
                const o = new URLSearchParams(window.location.search).get(w3);
                o && e(o)
            }), {
                openEcommerceModal: e,
                closeEcommerceModal: t,
                openEcommerceModalName: n
            }
        }
    });

function S3(e, t, n, r, o, a) {
    return e.openEcommerceModalName ? (u(), N(dn(e.openEcommerceModalName), {
        key: 0,
        translations: e.ecommerceTranslations,
        language: e.language,
        "current-locale": e.currentLocale,
        "is-cart-visible": e.isCartVisible,
        "is-quick-preview": ""
    }, null, 8, ["translations", "language", "current-locale", "is-cart-visible"])) : _("", !0)
}
const P3 = J(k3, [
        ["render", S3]
    ]),
    T3 = Z({
        name: "Flag",
        props: {
            alt: {
                type: String,
                required: !0
            },
            src: {
                type: String,
                default: null
            }
        }
    }),
    C3 = {
        class: "flag"
    },
    O3 = ["src", "alt"],
    I3 = b("div", {
        class: "flag__shadow"
    }, null, -1);

function $3(e, t, n, r, o, a) {
    return u(), p("div", C3, [b("img", {
        class: "flag__img",
        src: e.src,
        alt: e.alt
    }, null, 8, O3), I3])
}
const E3 = J(T3, [
        ["render", $3]
    ]),
    D3 = Z({
        name: "LanguageSwitcher",
        components: {
            Flag: E3
        },
        props: {
            languages: {
                type: Array,
                required: !0
            },
            currentLocale: {
                type: String,
                default: null
            }
        },
        computed: {
            languageSwitcherLanguages() {
                return this.languages.filter(({
                    isHidden: e
                }) => !e).map(e => ({ ...e,
                    src: `${Hm}/${e.flagPath}`,
                    alt: `${e.locale} flag`
                }))
            },
            selectedLanguage() {
                return this.languageSwitcherLanguages.find(({
                    locale: e
                }) => e === this.currentLocale) ? ? {}
            }
        }
    }),
    L3 = {
        ref: "languageSwitcher",
        class: "language-switcher",
        tabindex: "0"
    },
    M3 = {
        class: "language-switcher__button"
    },
    B3 = {
        key: 1,
        class: "language-switcher__locale"
    },
    A3 = b("svg", {
        class: "language-switcher__icon",
        width: "10",
        height: "7",
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor"
    })], -1),
    R3 = {
        class: "language-switcher__dropdown-area"
    },
    N3 = {
        class: "language-switcher__dropdown"
    },
    H3 = ["href"];

function U3(e, t, n, r, o, a) {
    const i = oe("Flag"),
        s = De("qa");
    return u(), p("div", L3, [ee((u(), p("div", M3, [e.selectedLanguage.country ? ee((u(), N(i, {
        key: 0,
        class: "language-switcher__flag",
        src: e.selectedLanguage.src,
        alt: e.selectedLanguage.alt
    }, null, 8, ["src", "alt"])), [
        [s, `navigation-selected-language-${e.selectedLanguage.name}`]
    ]) : (u(), p("div", B3, x(e.selectedLanguage.locale), 1)), A3])), [
        [s, "navigation-language-switcher"]
    ]), b("div", R3, [b("ul", N3, [(u(!0), p(se, null, pe(e.languageSwitcherLanguages, l => ee((u(), p("li", {
        key: l.locale,
        class: "language-switcher__dropdown-item"
    }, [b("a", {
        href: l.href,
        class: F(["language-switcher__dropdown-link", {
            "--current": l.locale === e.currentLocale
        }])
    }, [l.country ? (u(), N(i, {
        key: 0,
        class: "language-switcher__dropdown-flag",
        src: l.src,
        alt: l.alt
    }, null, 8, ["src", "alt"])) : _("", !0), Pe(" " + x(l.name), 1)], 10, H3)])), [
        [s, `navigation-language-switcher-${l.locale}`]
    ])), 128))])])], 512)
}
const V3 = J(D3, [
        ["render", U3]
    ]),
    q3 = Z({
        props: {
            title: {
                type: String,
                default: "Menu"
            },
            isOpen: {
                type: Boolean,
                required: !0
            },
            color: {
                type: String,
                default: "var(--nav-link-text-color)"
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--burger-color": this.color
                }
            }
        }
    }),
    _l = e => (Pt("data-v-1f7d7080"), e = e(), Tt(), e),
    j3 = ["title"],
    x3 = _l(() => b("span", {
        class: "burger__bun"
    }, null, -1)),
    W3 = _l(() => b("span", {
        class: "burger__meat"
    }, null, -1)),
    G3 = _l(() => b("span", {
        class: "burger__bun"
    }, null, -1)),
    Y3 = [x3, W3, G3];

function F3(e, t, n, r, o, a) {
    return u(), p("button", {
        type: "button",
        class: F(["burger", {
            "burger--open": e.isOpen
        }]),
        title: e.title,
        style: Oe(e.computedStyles)
    }, Y3, 14, j3)
}
const z3 = J(q3, [
        ["render", F3],
        ["__scopeId", "data-v-1f7d7080"]
    ]),
    K3 = Z({
        name: "BlockHeaderBackground",
        props: {
            type: {
                type: String,
                default: "color"
            },
            imageUrl: {
                type: String,
                default: null
            },
            color: {
                type: String,
                default: ""
            },
            isTransparent: {
                type: Boolean,
                default: !1
            },
            overlayOpacity: {
                type: Number,
                default: 0
            }
        },
        computed: {
            backgroundImage() {
                return this.type === "image" && this.imageUrl
            },
            backgroundColor() {
                return this.type === "color" ? this.color : "transparent"
            },
            backgroundCSSVars() {
                return {
                    "--background-color": this.isTransparent ? "transparent" : this.backgroundColor,
                    ...!!this.backgroundImage && {
                        "--background-image": `url(${this.backgroundImage})`
                    },
                    ...!!this.overlayOpacity && {
                        "--overlay-opacity": this.overlayOpacity
                    }
                }
            }
        }
    });

function Q3(e, t, n, r, o, a) {
    return u(), p("div", {
        class: F(["background", {
            "background--with-image": e.backgroundImage
        }]),
        style: Oe(e.backgroundCSSVars)
    }, null, 6)
}
const X3 = J(K3, [
        ["render", Q3]
    ]),
    J3 = Z({
        name: "BlockHeaderCart",
        props: {
            cartIconSize: {
                type: String,
                required: !0
            },
            cartText: {
                type: String,
                required: !0
            },
            itemsInCart: {
                type: Number,
                required: !0
            },
            cartUrl: {
                type: String,
                default: null
            }
        }
    }),
    Z3 = e => (Pt("data-v-da7f12ed"), e = e(), Tt(), e),
    eD = ["href"],
    tD = {
        class: "block-header-cart__icon-container"
    },
    nD = Z3(() => b("svg", {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon"
    }, [b("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
        fill: "currentColor"
    })], -1));

function rD(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", {
        class: "block-header-cart-wrapper",
        style: Oe({
            "--cart-icon-size": e.cartIconSize
        })
    }, [b("a", {
        href: e.cartUrl,
        class: "block-header-cart"
    }, [ee((u(), p("button", {
        class: "block-header-cart__button",
        title: "Go to cart",
        onClick: t[0] || (t[0] = s => e.$emit("cart-click"))
    }, [b("div", tD, [nD, b("span", null, x(e.cartText) + " (" + x(e.itemsInCart) + ")", 1)])])), [
        [i, "header-btn-shoppingbag"]
    ])], 8, eD)], 4)
}
const oD = J(J3, [
        ["render", rD],
        ["__scopeId", "data-v-da7f12ed"]
    ]),
    aD = Z({
        name: "BlockHeaderItemContent",
        props: {
            item: {
                type: Object,
                required: !0
            }
        },
        computed: {
            linkDataQa() {
                return this.item.isCurrent ? `navigationblock-page-active-${this.item.name}` : `navigationblock-page-${this.item.name}`
            }
        }
    }),
    iD = e => (Pt("data-v-cf3ff533"), e = e(), Tt(), e),
    sD = ["target", "rel", "href", "textContent"],
    lD = ["textContent"],
    uD = {
        key: 2,
        class: "item-content__icon-container-wrapper"
    },
    cD = iD(() => b("span", {
        class: "item-content__icon-container"
    }, [b("svg", {
        class: "item-content__icon",
        width: "10",
        height: "7",
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [b("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor"
    })])], -1)),
    dD = [cD];

function fD(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("div", {
        class: F(["item-content-wrapper", {
            "item-content-wrapper--active": e.item.isCurrent
        }])
    }, [e.item.href ? ee((u(), p("a", {
        key: 0,
        class: "item-content",
        target: e.item.target,
        rel: e.item.rel,
        href: e.item.href,
        textContent: x(e.item.name)
    }, null, 8, sD)), [
        [i, e.linkDataQa]
    ]) : ee((u(), p("span", {
        key: 1,
        class: "item-content",
        textContent: x(e.item.name)
    }, null, 8, lD)), [
        [i, e.linkDataQa]
    ]), e.item.hasDropdown ? (u(), p("div", uD, dD)) : _("", !0)], 2)
}
const mD = J(aD, [
        ["render", fD],
        ["__scopeId", "data-v-cf3ff533"]
    ]),
    pD = Z({
        name: "BlockHeaderItem",
        components: {
            BlockHeaderItemContent: mD
        },
        props: {
            item: {
                type: Object,
                required: !0
            },
            areDropdownsHidden: {
                type: Boolean,
                default: !1
            }
        }
    }),
    hD = {
        class: "block-header-item"
    },
    gD = {
        class: "block-header-item__label"
    },
    yD = {
        key: 0,
        type: "checkbox",
        class: "block-header-item__mobile-dropdown-trigger"
    },
    vD = {
        key: 1,
        class: "block-header-item__dropdown-area"
    },
    bD = {
        class: "block-header-item__dropdown"
    };

function _D(e, t, n, r, o, a) {
    const i = oe("BlockHeaderItemContent"),
        s = oe("BlockHeaderItem", !0),
        l = De("qa");
    return u(), p("li", hD, [b("label", gD, [!e.areDropdownsHidden && e.item.hasDropdown ? (u(), p("input", yD)) : _("", !0), ee(be(i, {
        item: e.item,
        class: "block-header-item__item",
        "aria-haspopup": e.item.hasDropdown
    }, null, 8, ["item", "aria-haspopup"]), [
        [l, `navigation-item-${e.item.name}`]
    ]), !e.areDropdownsHidden && e.item.hasDropdown ? (u(), p("div", vD, [b("ul", bD, [(u(!0), p(se, null, pe(e.item.subItems, d => (u(), N(s, {
        key: d.id,
        item: d
    }, null, 8, ["item"]))), 128))])])) : _("", !0)])])
}
const wD = J(pD, [
        ["render", _D],
        ["__scopeId", "data-v-ee55214b"]
    ]),
    kD = Z({
        name: "BlockHeaderLogo",
        props: {
            logoSrc: {
                type: String,
                default: null
            },
            logoSvg: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: "/"
            },
            height: {
                type: Number,
                default: null
            },
            heightMobile: {
                type: Number,
                default: null
            },
            maxWidth: {
                type: String,
                default: null
            },
            maxWidthMobile: {
                type: String,
                default: null
            },
            objectPosition: {
                type: String,
                default: null
            },
            objectPositionMobile: {
                type: String,
                default: null
            },
            isOptimized: {
                type: Boolean,
                default: !1
            },
            siteName: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                optimizedHeight: null,
                optimizedHeightMobile: null
            }
        },
        computed: {
            logoAltTag() {
                return this.siteName ? `${this.siteName} logo` : null
            },
            computedCSSVars() {
                return {
                    "--height": this.isOptimized && this.height ? `${this.height}px` : null,
                    "--m-height": this.isOptimized && this.heightMobile ? `${this.heightMobile}px` : null,
                    "--width": this.maxWidth,
                    "--m-width": this.maxWidthMobile,
                    "--object-position": this.objectPosition,
                    "--m-object-position": this.objectPositionMobile
                }
            }
        }
    }),
    SD = ["href"],
    PD = ["innerHTML"],
    TD = ["src", "alt"];

function CD(e, t, n, r, o, a) {
    const i = De("qa");
    return u(), p("a", {
        class: "block-header-logo",
        href: e.href,
        style: Oe(e.computedCSSVars)
    }, [e.logoSvg ? (u(), p("div", {
        key: 0,
        class: "block-header-logo__image",
        innerHTML: e.logoSvg
    }, null, 8, PD)) : ee((u(), p("img", {
        key: 1,
        class: "block-header-logo__image",
        src: e.logoSrc,
        alt: e.logoAltTag
    }, null, 8, TD)), [
        [i, "builder-siteheader-img-logo"]
    ])], 12, SD)
}
const OD = J(kD, [
        ["render", CD],
        ["__scopeId", "data-v-237d5d94"]
    ]),
    wl = Z({
        name: "BlockHeader",
        components: {
            ZyroHamburger: z3,
            BlockHeaderCart: oD,
            BlockHeaderLogo: OD,
            BlockHeaderItem: wD,
            BlockHeaderBackground: X3,
            LanguageSwitcher: V3,
            GridSocialIcons: rf
        },
        props: {
            siteName: {
                type: String,
                default: null
            },
            languageSwitcherLanguages: {
                type: Array,
                default: () => []
            },
            items: {
                type: Array,
                default: () => []
            },
            logoHref: {
                type: String,
                default: "/"
            },
            logoSrc: {
                type: String,
                default: null
            },
            logoSvg: {
                type: String,
                default: null
            },
            backgroundImageUrl: {
                type: String,
                default: null
            },
            isOpen: {
                type: Boolean,
                default: !1
            },
            isSticky: {
                type: Boolean,
                default: !1
            },
            isTransparent: {
                type: Boolean,
                default: !1
            },
            isLogoVisible: {
                type: Boolean,
                default: !1
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isLanguageSwitcherVisible: {
                type: Boolean,
                default: !1
            },
            currentLocale: {
                type: String,
                default: null
            },
            backgroundColor: {
                type: String,
                default: ""
            },
            backgroundColorContrast: {
                type: String,
                default: ""
            },
            navLinkTextColor: {
                type: String,
                default: ""
            },
            navLinkTextColorHover: {
                type: String,
                default: ""
            },
            cartText: {
                type: String,
                default: null
            },
            cartUrl: {
                type: String,
                default: null
            },
            itemsInCart: {
                type: Number,
                default: 0
            },
            logoPlacement: {
                type: String,
                default: null
            },
            logoPlacementMobile: {
                type: String,
                default: null
            },
            navigationPlacement: {
                type: String,
                default: null
            },
            navigationPlacementMobile: {
                type: String,
                default: null
            },
            areDropdownsHidden: {
                type: Boolean,
                default: !1
            },
            isLogoOptimized: {
                type: Boolean,
                default: !1
            },
            background: {
                type: Object,
                default: null
            },
            cartIconSize: {
                type: String,
                default: null
            },
            logoMaxWidth: {
                type: String,
                default: null
            },
            logoHeight: {
                type: Number,
                default: null
            },
            logoHeightMobile: {
                type: Number,
                default: null
            },
            logoMaxWidthMobile: {
                type: String,
                default: null
            },
            logoObjectPosition: {
                type: String,
                default: null
            },
            logoObjectPositionMobile: {
                type: String,
                default: null
            },
            fontFamily: {
                type: String,
                default: null
            },
            fontWeight: {
                type: Number,
                default: null
            },
            socialIconsLinks: {
                type: Array,
                default: () => []
            },
            socialIconsStyles: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["toggle-visibility", "cart-click"],
        setup(e, t) {
            const n = M(null),
                r = c(() => e.socialIconsLinks.length > 0);
            Ce(() => {
                ha(n, () => {
                    e.isOpen && t.emit("toggle-visibility")
                })
            });
            const {
                hasUserScrolled: o
            } = Ld(), a = c(() => !e.items.length && !e.isLanguageSwitcherVisible ? "inline-flex" : "none"), i = c(() => e.socialIconsStyles.justify || "flex-end");
            return {
                hasUserScrolled: o,
                BLOCK_HEADER_CLASS: Ed,
                BLOCK_HEADER_STICKY_CLASS: Um,
                headerRef: n,
                isSocialIconsLinksVisible: r,
                mobileHeaderSocialIconsCssDisplay: a,
                headerSocialIconsCssJustify: i
            }
        },
        computed: {
            isWithShadow() {
                return this.hasUserScrolled && this.isSticky
            },
            shouldForceTransparency() {
                return this.isSticky && !this.hasUserScrolled || !this.isSticky
            },
            isCurrentlyTransparent() {
                return this.isTransparent && this.shouldForceTransparency && !this.isOpen
            },
            isLogoAndNavigationCentered() {
                return this.logoPlacement === "center" && this.navigationPlacement === "center"
            },
            isLogoAndNavigationCenteredMobile() {
                return this.logoPlacementMobile === "center" && this.navigationPlacementMobile === "center"
            },
            navigationGridRowCount() {
                return this.isLogoVisible && this.isCartVisible ? 3 : 2
            },
            computedStyles() {
                const e = `${this.logoPlacement}-${this.navigationPlacement}`,
                    t = `${this.logoPlacementMobile}-${this.navigationPlacementMobile}`,
                    {
                        templateColumns: n
                    } = ft[e],
                    r = this.isCartVisible ? "auto minmax(0, calc(var(--m-logo-width) + var(--space-between-menu) * 2)) 1fr" : ft[t].mTemplateColumns;
                return {
                    "--navigation-grid-template-columns": this.isLogoVisible ? n : "1fr",
                    "--m-navigation-grid-template-columns": this.isLogoVisible ? r : "1fr",
                    "--logo-grid-row": `${ft[e].logoRow}/${this.navigationGridRowCount}`,
                    "--m-logo-grid-row": `${ft[t].logoRow}/${this.navigationGridRowCount}`,
                    "--logo-grid-column": ft[e].logoColumn,
                    "--m-logo-grid-column": ft[t].logoColumn,
                    "--logo-justify-self": this.getJustifyContent(this.logoPlacement),
                    "--m-logo-justify-self": this.getJustifyContent(this.logoPlacementMobile),
                    "--logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacement),
                    "--m-logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacementMobile),
                    "--links-grid-row": `${ft[e].menuRow}/${this.navigationGridRowCount}`,
                    "--m-links-grid-row": `${ft[t].menuRow}/${this.navigationGridRowCount}`,
                    "--links-grid-column": this.isLogoVisible ? ft[e].menuColumn : "1/2",
                    "--m-links-grid-column": this.isLogoVisible ? ft[t].menuColumn : "1/2",
                    "--cart-grid-row": `${ft[e].cartRow}/${this.navigationGridRowCount}`,
                    "--cart-grid-column": this.isLogoVisible ? ft[e].cartColumn : "2/2",
                    "--logo-spacing": this.getLogoMarginPlacement(),
                    "--m-logo-spacing": this.getLogoMarginPlacement(!0),
                    "--navigation-text-align": this.navigationPlacement,
                    "--m-navigation-text-align": this.navigationPlacementMobile,
                    "--navigation-justify-self": this.getJustifyContent(this.navigationPlacement),
                    "--m-navigation-justify-self": this.getJustifyContent(this.navigationPlacementMobile),
                    "--mobile-background": "var(--background-color,  var(--background-image))",
                    "--dropdown-background-color": this.backgroundColor,
                    "--m-dropdown-background-color": this.background.current === "image" ? "transparent" : this.backgroundColor,
                    "--dropdown-background-contrast-color": this.backgroundColorContrast,
                    "--text-font-family": this.fontFamily,
                    "--text-font-weight": this.fontWeight,
                    "--nav-link-text-color": this.navLinkTextColor || "var(--nav-link-color)",
                    "--nav-link-text-color-hover": this.navLinkTextColorHover || "var(--nav-link-color-hover)",
                    ...this.isSocialIconsLinksVisible && {
                        "--social-icons-grid-row": `${ft[e].socialIconsRow}/${this.navigationGridRowCount}`,
                        "--social-icons-grid-column": this.isLogoVisible ? ft[e].socialIconsColumn : "3/3",
                        "--space-between-icons": this.socialIconsStyles["space-between-icons"],
                        "--icon-color": this.socialIconsStyles["icon-color"],
                        "--icon-size": this.socialIconsStyles["icon-size"],
                        "--icon-color-hover": this.socialIconsStyles["icon-color-hover"]
                    }
                }
            }
        },
        methods: {
            getJustifyContent(e) {
                return Ll[e] || Ll.default
            },
            getLogoImageObjectPosition(e) {
                return Ml[e] || Ml.default
            },
            getLogoMarginPlacement(e = !1) {
                const t = e ? this.isLogoAndNavigationCenteredMobile : this.isLogoAndNavigationCentered,
                    n = e ? this.logoPlacementMobile : this.logoPlacement;
                return e && this.isCartVisible ? wa.center : t ? wa["center-center"] : wa[n]
            }
        }
    }),
    vd = () => {
        Nt(e => ({
            "44d44540": e.headerSocialIconsCssJustify,
            cd7af960: e.mobileHeaderSocialIconsCssDisplay,
            "0d335b46": e.navigationPlacementMobile
        }))
    },
    bd = wl.setup;
wl.setup = bd ? (e, t) => (vd(), bd(e, t)) : vd;
const ID = wl,
    $D = {
        class: "block-header__nav"
    },
    ED = {
        key: 1,
        class: "block-header-item"
    };

function DD(e, t, n, r, o, a) {
    const i = oe("BlockHeaderBackground"),
        s = oe("BlockHeaderLogo"),
        l = oe("ZyroHamburger"),
        d = oe("BlockHeaderItem"),
        y = oe("LanguageSwitcher"),
        m = oe("GridSocialIcons"),
        f = oe("BlockHeaderCart"),
        h = De("qa");
    return u(), p("header", {
        ref: "headerRef",
        class: F({
            [e.BLOCK_HEADER_CLASS]: !0,
            [e.BLOCK_HEADER_STICKY_CLASS]: e.isSticky,
            "block-header--with-shadow": e.isWithShadow
        })
    }, [e.background ? (u(), N(i, {
        key: 0,
        type: e.background.current,
        "image-url": e.backgroundImageUrl,
        color: e.background.color,
        "overlay-opacity": Number(e.background["overlay-opacity"]),
        "is-transparent": e.isCurrentlyTransparent
    }, null, 8, ["type", "image-url", "color", "overlay-opacity", "is-transparent"])) : _("", !0), b("div", {
        class: F(["block-header__content", {
            "block-header__content--open": e.isOpen
        }]),
        style: Oe(e.computedStyles)
    }, [e.isLogoVisible ? (u(), N(s, {
        key: 0,
        class: F(["block-header__logo", {
            "block-header__logo--m-with-cart": e.isCartVisible
        }]),
        "logo-src": e.logoSrc,
        "logo-svg": e.logoSvg,
        href: e.logoHref,
        "site-name": e.siteName,
        "max-width": e.logoMaxWidth,
        "max-width-mobile": e.logoMaxWidthMobile,
        height: e.logoHeight,
        "height-mobile": e.logoHeightMobile,
        "is-optimized": e.isLogoOptimized,
        "object-position": e.logoObjectPosition,
        "object-position-mobile": e.logoObjectPositionMobile
    }, null, 8, ["class", "logo-src", "logo-svg", "href", "site-name", "max-width", "max-width-mobile", "height", "height-mobile", "is-optimized", "object-position", "object-position-mobile"])) : _("", !0), e.items.length || e.isLanguageSwitcherVisible ? ee((u(), N(l, {
        key: 1,
        class: F(["block-header__burger", {
            "block-header__burger--m-with-cart": e.isCartVisible
        }]),
        "is-open": e.isOpen,
        onClick: t[0] || (t[0] = Me(v => e.$emit("toggle-visibility"), ["stop"]))
    }, null, 8, ["class", "is-open"])), [
        [h, "builder-siteheader-btn-hamburger"]
    ]) : _("", !0), b("nav", $D, [ee((u(), p("ul", {
        class: F(["block-header__links", [{
            "block-header__links--open": e.isOpen
        }, `block-header__links--align-${e.navigationPlacementMobile||e.navigationPlacement}`]])
    }, [(u(!0), p(se, null, pe(e.items, v => (u(), N(d, {
        key: v.id,
        item: v,
        "are-dropdowns-hidden": e.areDropdownsHidden
    }, null, 8, ["item", "are-dropdowns-hidden"]))), 128)), e.isLanguageSwitcherVisible ? (u(), N(y, {
        key: 0,
        class: F({
            "mouse-disabled": e.areDropdownsHidden
        }),
        languages: e.languageSwitcherLanguages,
        "current-locale": e.currentLocale
    }, null, 8, ["class", "languages", "current-locale"])) : _("", !0), e.socialIconsLinks.length ? (u(), p("li", ED, [be(m, {
        class: "block-header__social-icons block-header__social-icons--mobile",
        links: e.socialIconsLinks
    }, null, 8, ["links"])])) : _("", !0)], 2)), [
        [h, "builder-siteheader-emptyspace"]
    ])]), e.isCartVisible ? (u(), N(f, {
        key: 2,
        class: "block-header__cart",
        "cart-text": e.cartText,
        "cart-icon-size": e.cartIconSize,
        "cart-url": e.cartUrl,
        "items-in-cart": e.itemsInCart,
        onCartClick: t[1] || (t[1] = v => e.$emit("cart-click"))
    }, null, 8, ["cart-text", "cart-icon-size", "cart-url", "items-in-cart"])) : _("", !0), e.socialIconsLinks.length ? (u(), N(m, {
        key: 3,
        class: "block-header__social-icons",
        links: e.socialIconsLinks
    }, null, 8, ["links"])) : _("", !0)], 6)], 2)
}
const LD = J(ID, [
        ["render", DD],
        ["__scopeId", "data-v-711a92b6"]
    ]),
    MD = e => {
        const n = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
        return {
            [`--background-${e.current}`]: n
        }
    },
    BD = e => e && Object.values(e).some(t => lm.includes(t.type)),
    AD = e => e && Object.values(e).some(t => t ? .type === "GridEcommerceButton"),
    Zf = ({
        blocks: e,
        elements: t
    }) => AD(t) || BD(e),
    RD = ({
        siteId: e,
        meta: t,
        blocks: n,
        nav: r,
        pages: o,
        elements: a,
        languageMetaTitle: i,
        languageSwitcherLanguages: s,
        currentLocale: l,
        currentPageId: d,
        isLogoOptimized: y,
        shoppingCartItems: m,
        ecwidCartItemCount: f,
        isOpen: h,
        getPagePathFromId: v,
        ecwidPages: k,
        isEcommerceWebsite: w
    }) => {
        const {
            headerHeight: C,
            headerHeightMobile: L,
            defaultLocale: I
        } = t, {
            background: R,
            settings: W,
            fontWeight: $,
            fontFamily: E,
            navLinkTextColor: H,
            navLinkTextColorHover: X
        } = n.header, {
            imageOrigin: re,
            imagePath: Y
        } = R, {
            cartText: ne,
            isCartVisible: A,
            isLanguageSwitcherHidden: S,
            isSticky: U,
            logoPlacement: V,
            navigationPlacement: g,
            showLogo: B,
            styles: q,
            logoImageOrigin: G,
            logoImagePath: te,
            logoSvg: T
        } = W, ie = Object.keys(k).length > 0, ue = Zf({
            blocks: n,
            elements: a
        }), O = { ...kt(q),
            ...MD(R)
        }, z = () => {
            if (!y) return qs(G, te, e);
            const at = Number.parseInt(q["logo-width"], 10);
            return Qe(G, te, e, {
                width: at * 2,
                quality: 95
            })
        }, Te = () => Qe(re, Y, e, {
            width: Qt
        }), _e = at => {
            const {
                navItemId: Et,
                linkType: Yt,
                linkedPageId: tn,
                isHidden: Hn,
                rel: vn,
                href: nn,
                target: Un,
                name: Vn,
                subItems: bn = []
            } = at;
            return {
                navItemId: Et,
                hasDropdown: !!bn.length,
                isCurrent: d === tn,
                subItems: bn.map(_e),
                target: Un,
                name: Yt === Bl ? o[tn] ? .name : Vn,
                isHidden: Hn,
                rel: vn,
                href: Yt === Bl ? v({
                    pageId: tn
                }) : nn,
                locale: l
            }
        }, me = r.filter(({
            isHidden: at
        }) => !at).map(_e), Ne = A && (ie || ue), ot = !!s.length && !S && l !== It, ve = () => w || ue ? m.length : A ? f : 0, ke = () => {
            if (!k || !Object.keys(k).length) return null;
            const [at] = Object.keys(k);
            return `${v({pageId:at})}?store-page=cart`
        }, Be = i || t.metaTitle, Ie = n.header.components.find(at => a[at].type === "GridSocialIcons"), en = a[Ie] ? .links || [], Ct = a[Ie] ? .settings ? .styles || {};
        return {
            background: R,
            backgroundColor: R.color,
            backgroundImageUrl: Te(),
            backgroundColorContrast: q.contrastBackgroundColor,
            cartText: ne,
            cartIconSize: q.cartIconSize,
            cartUrl: ke(),
            currentLocale: l,
            height: C,
            heightMobile: L,
            fontFamily: E,
            navLinkTextColor: H,
            navLinkTextColorHover: X,
            fontWeight: $,
            isTransparent: R.isTransparent,
            items: me,
            isCartVisible: Ne,
            itemsInCart: ve(),
            isSticky: U,
            isLanguageSwitcherVisible: ot,
            isLogoVisible: B,
            isLogoOptimized: y,
            isOpen: h,
            languageSwitcherLanguages: s,
            logoHeight: n.header ? .desktop ? .logoHeight,
            logoHref: l !== I && l !== It ? `/${l}` : "/",
            logoHeightMobile: n.header ? .mobile ? .logoHeight,
            logoMaxWidth: q["logo-width"],
            logoMaxWidthMobile: q["m-logo-width"],
            logoObjectPosition: q["logo-image-object-position"],
            logoObjectPositionMobile: q["m-logo-image-object-position"],
            logoPlacement: V,
            logoPlacementMobile: W["m-logoPlacement"] || V,
            logoSrc: z(),
            logoSvg: T,
            style: O,
            siteName: Be,
            socialIconsLinks: en,
            socialIconsStyles: Ct,
            navigationPlacement: g,
            navigationPlacementMobile: W["m-navigationPlacement"] || g
        }
    },
    _d = () => window.location.hostname ? .includes("site-engine") || window.location.hostname ? .includes("latest-user-app");

function ND(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    } else return Array.from(e)
}
var kl = !1;
if (typeof window < "u") {
    var wd = {
        get passive() {
            kl = !0
        }
    };
    window.addEventListener("testPassive", null, wd), window.removeEventListener("testPassive", null, wd)
}
var em = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1),
    Dn = [],
    sa = !1,
    Sl = -1,
    nr = void 0,
    rr = void 0,
    tm = function(t) {
        return Dn.some(function(n) {
            return !!(n.options.allowTouchMove && n.options.allowTouchMove(t))
        })
    },
    la = function(t) {
        var n = t || window.event;
        return tm(n.target) || n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(), !1)
    },
    HD = function(t) {
        if (rr === void 0) {
            var n = !!t && t.reserveScrollBarGap === !0,
                r = window.innerWidth - document.documentElement.clientWidth;
            n && r > 0 && (rr = document.body.style.paddingRight, document.body.style.paddingRight = r + "px")
        }
        nr === void 0 && (nr = document.body.style.overflow, document.body.style.overflow = "hidden")
    },
    UD = function() {
        rr !== void 0 && (document.body.style.paddingRight = rr, rr = void 0), nr !== void 0 && (document.body.style.overflow = nr, nr = void 0)
    },
    VD = function(t) {
        return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1
    },
    qD = function(t, n) {
        var r = t.targetTouches[0].clientY - Sl;
        return tm(t.target) ? !1 : n && n.scrollTop === 0 && r > 0 || VD(n) && r < 0 ? la(t) : (t.stopPropagation(), !0)
    },
    jD = function(t, n) {
        if (!t) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }
        if (!Dn.some(function(o) {
                return o.targetElement === t
            })) {
            var r = {
                targetElement: t,
                options: n || {}
            };
            Dn = [].concat(ND(Dn), [r]), em ? (t.ontouchstart = function(o) {
                o.targetTouches.length === 1 && (Sl = o.targetTouches[0].clientY)
            }, t.ontouchmove = function(o) {
                o.targetTouches.length === 1 && qD(o, t)
            }, sa || (document.addEventListener("touchmove", la, kl ? {
                passive: !1
            } : void 0), sa = !0)) : HD(n)
        }
    },
    xD = function() {
        em ? (Dn.forEach(function(t) {
            t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null
        }), sa && (document.removeEventListener("touchmove", la, kl ? {
            passive: !1
        } : void 0), sa = !1), Sl = -1) : UD(), Dn = []
    };
const WD = Z({
        name: "Lightbox",
        setup() {
            const {
                lightboxImages: e,
                currentLightboxImageIndex: t,
                currentLightboxImage: n,
                closeLightbox: r,
                isLightboxOpen: o,
                isFirstImage: a,
                isLastImage: i,
                isImageGalleryMode: s,
                onLightboxClickOutside: l,
                handleLightboxNav: d,
                goToNextImage: y,
                goToPreviousImage: m
            } = dr(), f = M(null), {
                enableMoveEvents: h
            } = hf({
                move: {
                    drag: !0,
                    swipe: !0
                },
                onMoveLeft: y,
                onMoveRight: m
            });
            return Ce(() => {
                ha(f, v => {
                    v.target.matches("[data-lightbox-button],[data-lightbox-nav]") || r()
                }), h(), window.document.addEventListener("keydown", d)
            }), yt(() => {
                r(), h(!1), document.removeEventListener("keydown", d)
            }), {
                lightboxImages: e,
                currentLightboxImageIndex: t,
                currentLightboxImage: n,
                closeLightbox: r,
                isImageGalleryMode: s,
                isFirstImage: a,
                isLastImage: i,
                isLightboxOpen: o,
                onLightboxClickOutside: l,
                goToNextImage: y,
                goToPreviousImage: m,
                lightboxRef: f
            }
        },
        async mounted() {
            await this.$nextTick(), jD(this.$refs.lightboxRef)
        },
        beforeUnmount() {
            xD()
        }
    }),
    GD = {
        key: 0,
        class: "lightbox",
        role: "dialog",
        "aria-modal": "true"
    },
    YD = {
        class: "lightbox__container"
    },
    FD = b("button", {
        class: "lightbox__button lightbox__button--nav lightbox__button--prev",
        "data-lightbox-button": ""
    }, null, -1),
    zD = [FD],
    KD = ["src", "alt"],
    QD = b("button", {
        "data-lightbox-button": "",
        class: "lightbox__button lightbox__button--nav lightbox__button--next"
    }, null, -1),
    XD = [QD];

function JD(e, t, n, r, o, a) {
    return u(), N(gt, {
        name: "fade",
        appear: ""
    }, {
        default: le(() => [e.isLightboxOpen ? (u(), p("div", GD, [b("button", {
            class: "lightbox__button lightbox__button--close",
            title: "close-ligthbox-button",
            "data-lightbox-button": "",
            onClick: t[0] || (t[0] = (...i) => e.closeLightbox && e.closeLightbox(...i))
        }), b("div", YD, [b("div", {
            class: F(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: t[1] || (t[1] = (...i) => e.goToPreviousImage && e.goToPreviousImage(...i))
        }, zD, 2), be(gt, {
            name: "fade",
            mode: "out-in"
        }, {
            default: le(() => [(u(), p("img", {
                key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                ref: "lightboxRef",
                class: F(["lightbox__image", {
                    "lightbox__image--multiple": e.isImageGalleryMode,
                    "lightbox__image--single": !e.isImageGalleryMode
                }]),
                src: e.currentLightboxImage.src,
                alt: e.currentLightboxImage.alt
            }, null, 10, KD))]),
            _: 1
        }), b("div", {
            class: F(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: t[2] || (t[2] = (...i) => e.goToNextImage && e.goToNextImage(...i))
        }, XD, 2)])])) : _("", !0)]),
        _: 1
    })
}
const ZD = J(WD, [
        ["render", JD]
    ]),
    eL = 2,
    tL = Z({
        name: "Page",
        components: {
            BlockHeader: LD,
            BlockUser: p1,
            CookieBanner: Ip,
            PasswordPage: M1,
            EcommerceShoppingCartProviderUser: bk,
            EcommerceModalRoot: P3,
            StickyTrigger: op,
            Lightbox: ZD,
            Integrations: Zm
        },
        props: {
            pageData: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const {
                state: t,
                getters: n,
                commit: r
            } = Xe(), {
                openEcwidHomepage: o,
                openCart: a,
                ecwidCartItemCount: i
            } = Md(), {
                isLightboxOpen: s
            } = dr(), {
                shouldMountAnimationsInPreview: l
            } = ur(), d = M(!1), y = M(!1), m = c(() => n.pages), f = c(() => n.blocks), h = c(() => n.elements), v = c(() => n.nav), k = c(() => n.meta), w = c(() => n.metaTitle), C = c(() => n.ecommerceShoppingCart), L = c(() => n.cookieBannerDisclaimer), I = c(() => n.cookieBannerAcceptText), R = c(() => n.cookieBannerDeclineText), W = c(() => n.currentLocale), $ = c(() => n.currentPageData), E = c(() => $.value.type), H = c(() => n.languageKeys), X = c(() => n.ecwidPages), re = c(() => n.languageSwitcherLanguages), Y = c(() => n.siteId), ne = c(() => n.homePageId), A = c(() => kt(n.styles)), S = c(() => !n.isNavHidden), U = c(() => n.currentPageId), V = c(() => U.value === ne.value), g = c(() => m.value ? .[ne.value] ? .name ? ? ""), B = c(() => t.ecommerce.shoppingCartItems), q = c(() => {
                if (!$.value ? .meta ? .password || d.value) return !0;
                const {
                    isPageOpen: O
                } = wf({
                    pagePassword: $.value ? .meta ? .password ? ? "",
                    locale: W.value,
                    pageId: U.value
                });
                return O.value
            }), G = c(() => {
                if (!$.value || $.value.footerSlotIsHidden) return [];
                const O = Object.keys(f.value).find(z => f.value[z].slot === "footer");
                return O ? [O] : []
            }), te = c(() => $.value ? [...$.value.blocks, ...G.value] : []), T = c(() => RD({
                siteId: Y.value,
                meta: k.value,
                blocks: f.value,
                nav: v.value,
                pages: m.value,
                elements: h.value,
                languageMetaTitle: w.value,
                currentLocale: W.value,
                currentPageId: U.value,
                languageSwitcherLanguages: re.value,
                isLogoOptimized: !0,
                shoppingCartItems: B.value,
                ecwidCartItemCount: i.value,
                getPagePathFromId: ({
                    pageId: O
                }) => n.getPagePathFromId({
                    pageId: O
                }),
                isOpen: y.value,
                ecwidPages: X.value
            })), ie = c(() => T.value.height), ue = c(() => T.value.heightMobile);
            return Re(() => e.pageData, O => {
                r(um, {
                    pageData: O
                })
            }, {
                immediate: !0
            }), Re(() => e.pageData, async () => {
                d.value && (l.value = !0)
            }), Ce(() => {
                d.value = _d()
            }), {
                pages: m,
                blocks: f,
                elements: h,
                nav: v,
                meta: k,
                metaTitle: w,
                homepageName: g,
                ecommerceShoppingCart: C,
                cookieBannerDisclaimer: L,
                cookieBannerAcceptText: I,
                cookieBannerDeclineText: R,
                currentLocale: W,
                currentPageId: U,
                currentPage: $,
                currentPageType: E,
                languageKeys: H,
                languageSwitcherLanguages: re,
                siteId: Y,
                pageCSSVars: A,
                isHeaderVisible: S,
                ecwidPages: X,
                openEcwidHomepage: o,
                openCart: a,
                isCurrentPageHomepage: V,
                shouldRenderPage: q,
                ecwidCartItemCount: i,
                currentPageBlocks: te,
                pageBlocksSlotFooter: G,
                isLightboxOpen: s,
                getIsInPreviewMode: _d,
                isInPreviewMode: d,
                headerHeight: ie,
                shoppingCartItems: B,
                isNavOpen: y,
                headerProps: T,
                headerHeightMobile: ue
            }
        },
        computed: { ...qt("ecommerce", ["isStoreTypeZyro"]),
            isLocaleWithEcommerceItems() {
                return Zf({
                    blocks: this.blocks,
                    elements: this.elements
                })
            },
            defaultLocale() {
                return this.meta.defaultLocale ? ? It
            },
            ecommerceTranslations() {
                return this.isStoreTypeZyro ? this.ecommerceShoppingCart ? .translations ? ? {} : {}
            },
            language() {
                return this.isStoreTypeZyro ? this.ecommerceShoppingCart ? .lang ? ? "en" : null
            },
            currentPageBlockData() {
                return this.currentPageBlocks.map(e => this.blocks[e])
            },
            currentPageEcommerceBlocks() {
                return this.isLocaleWithEcommerceItems ? this.currentPageBlockData.filter(e => ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(e.type)) : []
            },
            currentPageEcommerceComponents() {
                return this.isLocaleWithEcommerceItems ? (Object.keys(this.elements) ? .filter(t => this.elements[t].type === "GridEcommerceButton")).filter(t => this.currentPageBlockData.some(n => n.components ? .includes(t))).map(t => this.elements[t]) : []
            },
            computedHeaderHeightStyles() {
                const {
                    isTransparent: e
                } = this.blocks.header.background ? ? {};
                return {
                    "--header-height": e && this.isHeaderVisible ? `${this.headerHeight}px` : null,
                    "--header-height-mobile": e && this.isHeaderVisible ? `${this.headerHeightMobile}px` : null
                }
            },
            lcp() {
                const [e] = this.currentPage ? .blocks ? ? [];
                if (this.blocks ? .[e] ? .background ? .current === "image") return {
                    type: "block-background",
                    id: e
                };
                if (this.blocks ? .[e] ? .type === "BlockBlogList") return {
                    type: "block-blog-list",
                    id: e
                };
                if (this.blocks ? .[e] ? .type === "BlockEcommerceProduct") return {
                    type: "block-ecommerce-product",
                    id: e
                };
                if (this.blocks ? .[e] ? .type === "BlockEcommerceProductList") return {
                    type: "block-ecommerce-product-list",
                    id: e
                };
                const n = this.currentPageBlocks.filter(o => this.blocks[o] ? .components ? .length > 0).flatMap(o => this.blocks[o].components.map(a => ({
                    blockId: o,
                    elementId: a
                }))).filter(({
                    elementId: o
                }) => this.elements[o] ? .type === "GridImage").slice(0, eL).map(({
                    blockId: o,
                    elementId: a
                }) => {
                    const i = this.elements[a],
                        s = i.mobile ? ? i.desktop,
                        {
                            width: l,
                            height: d
                        } = s ? ? ip(this.blocks[o], i.settings.styles.position);
                    return {
                        elementId: a,
                        imageRatio: d / l
                    }
                });
                return n.length === 0 ? {} : {
                    type: "grid-image",
                    id: n.reduce((o, a) => a.imageRatio > o.imageRatio ? a : o) ? .elementId
                }
            }
        },
        watch: {
            $route: {
                handler() {
                    this.isNavOpen = !1
                },
                immediate: !0
            }
        },
        mounted() {
            this.scrollToHash(window.location.hash)
        },
        methods: { ...An("ecommerce", ["setShoppingCartOpen"]),
            handleCartClick() {
                this.isLocaleWithEcommerceItems && this.setShoppingCartOpen(!0)
            },
            redirectToThirdPartyLink(e) {
                const {
                    target: t,
                    href: n
                } = e, o = t === "_blank" || mn() ? "_blank" : "_self";
                window.open(n, o)
            },
            scrollToHash(e) {
                if (!e) {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                    return
                }
                ci(e)
            },
            async handleGlobalClick(e) {
                const t = e.target.closest("a");
                if (!t) return;
                const {
                    href: n,
                    pathname: r,
                    origin: o,
                    hash: a,
                    target: i,
                    search: s
                } = t;
                if (!n) return;
                if (e.preventDefault(), window.location.origin !== o) {
                    this.redirectToThirdPartyLink(t);
                    return
                }
                const {
                    slug: d
                } = _p({
                    path: r,
                    languageKeys: this.languageKeys,
                    defaultLocale: this.meta.defaultLocale
                }), y = d ? Object.keys(this.pages).find(I => this.pages[I].slug === d) : this.homePageId, m = window.location.pathname === r, h = new URLSearchParams(s).get("store-page"), v = Object.keys(this.ecwidPages).includes(y), k = !!h || v, w = i === "_blank", C = n.replace(o, ""), L = `${window.location.pathname}${window.location.search}${window.location.hash}`;
                if (m && !w && this.scrollToHash(a), w && !mn() ? window.open(n, i) : L !== C && (await this.$router.push(C), a && this.scrollToHash(a)), !!k) {
                    if (!h) {
                        if (!window.Ecwid) return;
                        this.openEcwidHomepage();
                        return
                    }
                    if (h === "cart") {
                        this.openCart();
                        return
                    }
                    window.location.reload()
                }
            }
        }
    }),
    nL = {
        class: "blocks"
    };

function rL(e, t, n, r, o, a) {
    const i = oe("StickyTrigger"),
        s = oe("BlockHeader"),
        l = oe("BlockUser"),
        d = oe("CookieBanner"),
        y = oe("EcommerceShoppingCartProviderUser"),
        m = oe("EcommerceModalRoot"),
        f = oe("PasswordPage"),
        h = oe("Lightbox"),
        v = oe("Integrations");
    return u(), p(se, null, [e.shouldRenderPage ? (u(), p("main", {
        key: 0,
        style: Oe(e.pageCSSVars),
        class: "page",
        onClick: t[1] || (t[1] = (...k) => e.handleGlobalClick && e.handleGlobalClick(...k))
    }, [e.blocks.header.settings.isSticky ? (u(), N(i, {
        key: 0
    })) : _("", !0), e.isHeaderVisible ? (u(), N(s, Ae({
        key: 1
    }, e.headerProps, {
        onToggleVisibility: t[0] || (t[0] = k => e.isNavOpen = !e.isNavOpen),
        onCartClick: e.handleCartClick
    }), null, 16, ["onCartClick"])) : _("", !0), b("div", nL, [(u(!0), p(se, null, pe(e.currentPageBlocks, (k, w) => (u(), N(l, {
        id: e.blocks[k].htmlId || k,
        key: k,
        data: e.blocks[k],
        blocks: e.blocks,
        lcp: e.lcp,
        "page-id": e.currentPageId,
        "ecommerce-translations": e.ecommerceTranslations,
        "current-page-type": e.currentPageType,
        components: e.elements,
        style: Oe(w === 0 && e.computedHeaderHeightStyles),
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible
    }, null, 8, ["id", "data", "blocks", "lcp", "page-id", "ecommerce-translations", "current-page-type", "components", "style", "current-locale", "is-cart-visible"]))), 128))]), e.meta.isCookieBarEnabled ? (u(), N(d, {
        key: 2,
        disclaimer: e.cookieBannerDisclaimer || "",
        "accept-text": e.cookieBannerAcceptText,
        "decline-text": e.cookieBannerDeclineText,
        "site-meta": e.meta
    }, null, 8, ["disclaimer", "accept-text", "decline-text", "site-meta"])) : _("", !0), e.isLocaleWithEcommerceItems ? (u(), N(y, {
        key: 3,
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "is-header-sticky": e.headerProps.isSticky,
        "is-nav-hidden": !e.isHeaderVisible,
        "current-page-ecommerce-blocks": e.currentPageEcommerceBlocks,
        "current-page-ecommerce-components": e.currentPageEcommerceComponents
    }, null, 8, ["ecommerce-translations", "language", "is-header-sticky", "is-nav-hidden", "current-page-ecommerce-blocks", "current-page-ecommerce-components"])) : _("", !0), be(m, {
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible
    }, null, 8, ["ecommerce-translations", "language", "current-locale", "is-cart-visible"])], 4)) : (u(), N(f, {
        key: 1,
        "page-id": e.currentPageId,
        locale: e.currentLocale,
        "default-locale": e.defaultLocale,
        "in-preview-mode": e.isInPreviewMode,
        "current-page-data": e.currentPage,
        "homepage-name": e.homepageName,
        "is-current-page-homepage": e.isCurrentPageHomepage
    }, null, 8, ["page-id", "locale", "default-locale", "in-preview-mode", "current-page-data", "homepage-name", "is-current-page-homepage"])), e.isLightboxOpen ? (u(), N(h, {
        key: 2
    })) : _("", !0), be(v, {
        "site-meta": e.meta
    }, null, 8, ["site-meta"])], 64)
}
const lL = J(tL, [
    ["render", rL]
]);
export {
    lL as
    default
};