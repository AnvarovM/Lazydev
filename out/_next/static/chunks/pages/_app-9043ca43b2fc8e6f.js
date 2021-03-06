(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    640: function (e, t, r) {
      'use strict';
      var n = r(1742),
        o = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' };
      e.exports = function (e, t) {
        var r,
          i,
          a,
          s,
          c,
          l,
          u = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((a = n()),
            (s = document.createRange()),
            (c = document.getSelection()),
            ((l = document.createElement('span')).textContent = e),
            (l.style.all = 'unset'),
            (l.style.position = 'fixed'),
            (l.style.top = 0),
            (l.style.clip = 'rect(0, 0, 0, 0)'),
            (l.style.whiteSpace = 'pre'),
            (l.style.webkitUserSelect = 'text'),
            (l.style.MozUserSelect = 'text'),
            (l.style.msUserSelect = 'text'),
            (l.style.userSelect = 'text'),
            l.addEventListener('copy', function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), 'undefined' === typeof n.clipboardData)
                ) {
                  r && console.warn('unable to use e.clipboardData'),
                    r && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var i = o[t.format] || o.default;
                  window.clipboardData.setData(i, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(l),
            s.selectNodeContents(l),
            c.addRange(s),
            !document.execCommand('copy'))
          )
            throw new Error('copy command was unsuccessful');
          u = !0;
        } catch (f) {
          r && console.error('unable to copy using execCommand: ', f),
            r && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(t.format || 'text', e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (f) {
            r && console.error('unable to copy using clipboardData: ', f),
              r && console.error('falling back to prompt'),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') +
                  '+C';
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                'message' in t ? t.message : 'Copy to clipboard: #{key}, Enter'
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ('function' == typeof c.removeRange
              ? c.removeRange(s)
              : c.removeAllRanges()),
            l && document.body.removeChild(l),
            a();
        }
        return u;
      };
    },
    8679: function (e, t, r) {
      'use strict';
      var n = r(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ('string' !== typeof r) {
          if (h) {
            var o = p(r);
            o && o !== h && e(t, o, n);
          }
          var a = u(r);
          f && (a = a.concat(f(r)));
          for (var s = c(t), g = c(r), m = 0; m < a.length; ++m) {
            var y = a[m];
            if (!i[y] && (!n || !n[y]) && (!g || !g[y]) && (!s || !s[y])) {
              var v = d(r, y);
              try {
                l(t, y, v);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    3625: function (e, t, r) {
      'use strict';
      function n(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e, t) {
        if (e) {
          if ('string' === typeof e) return o(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(e, t)
              : void 0
          );
        }
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function s(e, t) {
        return (
          n(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          i(e, t) ||
          a()
        );
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, {
        Jc: function () {
          return tt;
        },
        $G: function () {
          return P;
        },
      });
      var l = r(7294);
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t, r) {
        return (
          t && f(e.prototype, t),
          r && f(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var p,
        h = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
        },
        g = l.createContext();
      function m() {
        return h;
      }
      var y = (function () {
        function e() {
          u(this, e), (this.usedNamespaces = {});
        }
        return (
          d(e, [
            {
              key: 'addUsedNamespaces',
              value: function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                });
              },
            },
            {
              key: 'getUsedNamespaces',
              value: function () {
                return Object.keys(this.usedNamespaces);
              },
            },
          ]),
          e
        );
      })();
      function v() {
        return p;
      }
      function b() {
        if (console && console.warn) {
          for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          'string' === typeof r[0] && (r[0] = 'react-i18next:: '.concat(r[0])),
            (e = console).warn.apply(e, r);
        }
      }
      var x = {};
      function w() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        ('string' === typeof t[0] && x[t[0]]) ||
          ('string' === typeof t[0] && (x[t[0]] = new Date()),
          b.apply(void 0, t));
      }
      function j(e, t, r) {
        e.loadNamespaces(t, function () {
          if (e.isInitialized) r();
          else {
            e.on('initialized', function t() {
              setTimeout(function () {
                e.off('initialized', t);
              }, 0),
                r();
            });
          }
        });
      }
      function k(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = t.languages[0],
          o = !!t.options && t.options.fallbackLng,
          i = t.languages[t.languages.length - 1];
        if ('cimode' === n.toLowerCase()) return !0;
        var a = function (e, r) {
          var n =
            t.services.backendConnector.state[''.concat(e, '|').concat(r)];
          return -1 === n || 2 === n;
        };
        return (
          !(
            r.bindI18n &&
            r.bindI18n.indexOf('languageChanging') > -1 &&
            t.services.backendConnector.backend &&
            t.isLanguageChangingTo &&
            !a(t.isLanguageChangingTo, e)
          ) &&
          (!!t.hasResourceBundle(n, e) ||
            !(
              t.services.backendConnector.backend &&
              (!t.options.resources || t.options.partialBundledLanguages)
            ) ||
            !(!a(n, e) || (o && !a(i, e))))
        );
      }
      function O(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!t.languages || !t.languages.length)
          return w('i18n.languages were undefined or empty', t.languages), !0;
        var n = void 0 !== t.options.ignoreJSONStructure;
        return n
          ? t.hasLoadedNamespace(e, {
              precheck: function (t, n) {
                if (
                  r.bindI18n &&
                  r.bindI18n.indexOf('languageChanging') > -1 &&
                  t.services.backendConnector.backend &&
                  t.isLanguageChangingTo &&
                  !n(t.isLanguageChangingTo, e)
                )
                  return !1;
              },
            })
          : k(e, t, r);
      }
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function P(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.i18n,
          n = (0, l.useContext)(g) || {},
          o = n.i18n,
          i = n.defaultNS,
          a = r || o || v();
        if ((a && !a.reportNamespaces && (a.reportNamespaces = new y()), !a)) {
          w(
            'You will need to pass in an i18next instance by using initReactI18next'
          );
          var c = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            u = [c, {}, !1];
          return (u.t = c), (u.i18n = {}), (u.ready = !1), u;
        }
        a.options.react &&
          void 0 !== a.options.react.wait &&
          w(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
          );
        var f = S(S(S({}, m()), a.options.react), t),
          d = f.useSuspense,
          p = f.keyPrefix,
          h = e || i || (a.options && a.options.defaultNS);
        (h = 'string' === typeof h ? [h] : h || ['translation']),
          a.reportNamespaces.addUsedNamespaces &&
            a.reportNamespaces.addUsedNamespaces(h);
        var b =
          (a.isInitialized || a.initializedStoreOnce) &&
          h.every(function (e) {
            return O(e, a, f);
          });
        function x() {
          return a.getFixedT(null, 'fallback' === f.nsMode ? h : h[0], p);
        }
        var k = (0, l.useState)(x),
          N = s(k, 2),
          P = N[0],
          L = N[1],
          C = (0, l.useRef)(!0);
        (0, l.useEffect)(
          function () {
            var e = f.bindI18n,
              t = f.bindI18nStore;
            function r() {
              C.current && L(x);
            }
            return (
              (C.current = !0),
              b ||
                d ||
                j(a, h, function () {
                  C.current && L(x);
                }),
              e && a && a.on(e, r),
              t && a && a.store.on(t, r),
              function () {
                (C.current = !1),
                  e &&
                    a &&
                    e.split(' ').forEach(function (e) {
                      return a.off(e, r);
                    }),
                  t &&
                    a &&
                    t.split(' ').forEach(function (e) {
                      return a.store.off(e, r);
                    });
              }
            );
          },
          [a, h.join()]
        );
        var E = (0, l.useRef)(!0);
        (0, l.useEffect)(
          function () {
            C.current && !E.current && L(x), (E.current = !1);
          },
          [a]
        );
        var R = [P, a, b];
        if (((R.t = P), (R.i18n = a), (R.ready = b), b)) return R;
        if (!b && !d) return R;
        throw new Promise(function (e) {
          j(a, h, function () {
            e();
          });
        });
      }
      function L() {
        return (
          (L =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          L.apply(this, arguments)
        );
      }
      var C = r(8679),
        E = r.n(C);
      function R(e) {
        var t = e.i18n,
          r = e.defaultNS,
          n = e.children,
          o = (0, l.useMemo)(
            function () {
              return { i18n: t, defaultNS: r };
            },
            [t, r]
          );
        return (0, l.createElement)(g.Provider, { value: o }, n);
      }
      function z(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var _ = {
          defaultNS: 'common',
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: 'en', locales: ['en'] },
          get initImmediate() {
            return 'undefined' !== typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: 'currentOnly',
          localeExtension: 'json',
          localePath: './public/locales',
          localeStructure: '{{lng}}/{{ns}}',
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          strictMode: !0,
          use: [],
        },
        I = ['i18n'],
        T = ['i18n'];
      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var D = ['backend', 'detection'],
        B = function (e) {
          var t;
          if ('string' !== typeof (null === e || void 0 === e ? void 0 : e.lng))
            throw new Error('config.lng was not passed into createConfig');
          var r = e.i18n,
            n = z(e, I),
            o = _.i18n,
            i = A(A(A(A({}, z(_, T)), n), o), r),
            a = i.defaultNS,
            s = i.lng,
            c = (i.locales, i.localeExtension),
            l = i.localePath,
            u = i.localeStructure;
          return (
            'cimode' === s ||
              ('undefined' === typeof i.fallbackLng &&
                (i.fallbackLng = i.defaultLocale),
              (null === e ||
              void 0 === e ||
              null === (t = e.use) ||
              void 0 === t
                ? void 0
                : t.some(function (e) {
                    return 'backend' === e.type;
                  })) ||
                ('string' === typeof l
                  ? (i.backend = {
                      addPath: ''
                        .concat(l, '/')
                        .concat(u, '.missing.')
                        .concat(c),
                      loadPath: ''.concat(l, '/').concat(u, '.').concat(c),
                    })
                  : 'function' === typeof l &&
                    (i.backend = {
                      addPath: function (e, t) {
                        return l(e, t, !0);
                      },
                      loadPath: function (e, t) {
                        return l(e, t, !1);
                      },
                    })),
              'string' === typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
              D.forEach(function (t) {
                e[t] && (i[t] = A(A({}, i[t]), e[t]));
              })),
            i
          );
        };
      function F(e) {
        return (
          (F =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          F(e)
        );
      }
      function V(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function $(e, t) {
        return (
          ($ =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          $(e, t)
        );
      }
      function H(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && $(e, t);
      }
      function U(e, t) {
        if (t && ('object' === F(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return V(e);
      }
      function q(e) {
        return (
          (q = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          q(e)
        );
      }
      function W(e) {
        return (
          n(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          a()
        );
      }
      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var G = {
          type: 'logger',
          log: function (e) {
            this.output('log', e);
          },
          warn: function (e) {
            this.output('warn', e);
          },
          error: function (e) {
            this.output('error', e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        Y = (function () {
          function e(t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            u(this, e), this.init(t, r);
          }
          return (
            d(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || G),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, r, n) {
                  return n && !this.debug
                    ? null
                    : ('string' === typeof e[0] &&
                        (e[0] = ''
                          .concat(r)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    K(
                      K(
                        {},
                        { prefix: ''.concat(this.prefix, ':').concat(t, ':') }
                      ),
                      this.options
                    )
                  );
                },
              },
            ]),
            e
          );
        })(),
        Z = new Y(),
        Q = (function () {
          function e() {
            u(this, e), (this.observers = {});
          }
          return (
            d(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var r = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (r.observers[e] = r.observers[e] || []),
                        r.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e
                        ) {
                          return e !== t;
                        }))
                      : delete this.observers[e]);
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      r = new Array(t > 1 ? t - 1 : 0),
                      n = 1;
                    n < t;
                    n++
                  )
                    r[n - 1] = arguments[n];
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e]);
                    o.forEach(function (e) {
                      e.apply(void 0, r);
                    });
                  }
                  if (this.observers['*']) {
                    var i = [].concat(this.observers['*']);
                    i.forEach(function (t) {
                      t.apply(t, [e].concat(r));
                    });
                  }
                },
              },
            ]),
            e
          );
        })();
      function X() {
        var e,
          t,
          r = new Promise(function (r, n) {
            (e = r), (t = n);
          });
        return (r.resolve = e), (r.reject = t), r;
      }
      function ee(e) {
        return null == e ? '' : '' + e;
      }
      function te(e, t, r) {
        e.forEach(function (e) {
          t[e] && (r[e] = t[e]);
        });
      }
      function re(e, t, r) {
        function n(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function o() {
          return !e || 'string' === typeof e;
        }
        for (
          var i = 'string' !== typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (o()) return {};
          var a = n(i.shift());
          !e[a] && r && (e[a] = new r()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: n(i.shift()) };
      }
      function ne(e, t, r) {
        var n = re(e, t, Object);
        n.obj[n.k] = r;
      }
      function oe(e, t) {
        var r = re(e, t),
          n = r.obj,
          o = r.k;
        if (n) return n[o];
      }
      function ie(e, t, r) {
        var n = oe(e, r);
        return void 0 !== n ? n : oe(t, r);
      }
      function ae(e, t, r) {
        for (var n in t)
          '__proto__' !== n &&
            'constructor' !== n &&
            (n in e
              ? 'string' === typeof e[n] ||
                e[n] instanceof String ||
                'string' === typeof t[n] ||
                t[n] instanceof String
                ? r && (e[n] = t[n])
                : ae(e[n], t[n], r)
              : (e[n] = t[n]));
        return e;
      }
      function se(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var ce = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function le(e) {
        return 'string' === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return ce[e];
            })
          : e;
      }
      var ue =
          'undefined' !== typeof window &&
          window.navigator &&
          'undefined' === typeof window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        fe = [' ', ',', '?', '!', ';'];
      function de(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? de(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : de(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function he(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = q(e);
          if (t) {
            var o = q(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return U(this, r);
        };
      }
      function ge(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.';
        if (e) {
          if (e[t]) return e[t];
          for (var n = t.split(r), o = e, i = 0; i < n.length; ++i) {
            if (!o) return;
            if ('string' === typeof o[n[i]] && i + 1 < n.length) return;
            if (void 0 === o[n[i]]) {
              for (
                var a = 2, s = n.slice(i, i + a).join(r), c = o[s];
                void 0 === c && n.length > i + a;

              )
                a++, (c = o[(s = n.slice(i, i + a).join(r))]);
              if (void 0 === c) return;
              if (t.endsWith(s)) {
                if ('string' === typeof c) return c;
                if (s && 'string' === typeof c[s]) return c[s];
              }
              var l = n.slice(i + a).join(r);
              return l ? ge(c, l, r) : void 0;
            }
            o = o[n[i]];
          }
          return o;
        }
      }
      var me = (function (e) {
          H(r, e);
          var t = he(r);
          function r(e) {
            var n,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              u(this, r),
              (n = t.call(this)),
              ue && Q.call(V(n)),
              (n.data = e || {}),
              (n.options = o),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              void 0 === n.options.ignoreJSONStructure &&
                (n.options.ignoreJSONStructure = !0),
              n
            );
          }
          return (
            d(r, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, r) {
                  var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== n.keySeparator
                        ? n.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== n.ignoreJSONStructure
                        ? n.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t];
                  r && 'string' !== typeof r && (a = a.concat(r)),
                    r &&
                      'string' === typeof r &&
                      (a = a.concat(o ? r.split(o) : r)),
                    e.indexOf('.') > -1 && (a = e.split('.'));
                  var s = oe(this.data, a);
                  return s || !i || 'string' !== typeof r
                    ? s
                    : ge(this.data && this.data[e] && this.data[e][t], r, o);
                },
              },
              {
                key: 'addResource',
                value: function (e, t, r, n) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = '.');
                  var a = [e, t];
                  r && (a = a.concat(i ? r.split(i) : r)),
                    e.indexOf('.') > -1 &&
                      ((n = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t),
                    ne(this.data, a, n),
                    o.silent || this.emit('added', e, t, r, n);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, r) {
                  var n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in r)
                    ('string' !== typeof r[o] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(r[o])) ||
                      this.addResource(e, t, o, r[o], { silent: !0 });
                  n.silent || this.emit('added', e, t, r);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, r, n, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t];
                  e.indexOf('.') > -1 &&
                    ((n = r), (r = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t);
                  var s = oe(this.data, a) || {};
                  n ? ae(s, r, o) : (s = pe(pe({}, s), r)),
                    ne(this.data, a, s),
                    i.silent || this.emit('added', e, t, r);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? pe(pe({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'hasLanguageSomeTranslations',
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            r
          );
        })(Q),
        ye = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, r, n, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, r, n, o));
              }),
              t
            );
          },
        };
      function ve(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function xe(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = q(e);
          if (t) {
            var o = q(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return U(this, r);
        };
      }
      var we = {},
        je = (function (e) {
          H(r, e);
          var t = xe(r);
          function r(e) {
            var n,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              u(this, r),
              (n = t.call(this)),
              ue && Q.call(V(n)),
              te(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                V(n)
              ),
              (n.options = o),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              (n.logger = Z.create('translator')),
              n
            );
          }
          return (
            d(
              r,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (void 0 === e || null === e) return !1;
                    var r = this.resolve(e, t);
                    return r && void 0 !== r.res;
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var r =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === r && (r = ':');
                    var n =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = r && e.indexOf(r) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, r) {
                          (t = t || ''), (r = r || '');
                          var n = fe.filter(function (e) {
                            return t.indexOf(e) < 0 && r.indexOf(e) < 0;
                          });
                          if (0 === n.length) return !0;
                          var o = new RegExp(
                              '('.concat(
                                n
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e;
                                  })
                                  .join('|'),
                                ')'
                              )
                            ),
                            i = !o.test(e);
                          if (!i) {
                            var a = e.indexOf(r);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                          }
                          return i;
                        })(e, r, n);
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp);
                      if (s && s.length > 0) return { key: e, namespaces: o };
                      var c = e.split(r);
                      (r !== n ||
                        (r === n && this.options.ns.indexOf(c[0]) > -1)) &&
                        (o = c.shift()),
                        (e = c.join(n));
                    }
                    return (
                      'string' === typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    );
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, n) {
                    var o = this;
                    if (
                      ('object' !== F(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments
                          )),
                      t || (t = {}),
                      void 0 === e || null === e)
                    )
                      return '';
                    Array.isArray(e) || (e = [String(e)]);
                    var i =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      a =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      s = this.extractFromKey(e[e.length - 1], t),
                      c = s.key,
                      l = s.namespaces,
                      u = l[l.length - 1],
                      f = t.lng || this.language,
                      d =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (f && 'cimode' === f.toLowerCase()) {
                      if (d) {
                        var p = t.nsSeparator || this.options.nsSeparator;
                        return i
                          ? ((h.res = ''.concat(u).concat(p).concat(c)), h)
                          : ''.concat(u).concat(p).concat(c);
                      }
                      return i ? ((h.res = c), h) : c;
                    }
                    var h = this.resolve(e, t),
                      g = h && h.res,
                      m = (h && h.usedKey) || c,
                      y = (h && h.exactUsedKey) || c,
                      v = Object.prototype.toString.apply(g),
                      b = [
                        '[object Number]',
                        '[object Function]',
                        '[object RegExp]',
                      ],
                      x =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      j =
                        'string' !== typeof g &&
                        'boolean' !== typeof g &&
                        'number' !== typeof g;
                    if (
                      w &&
                      g &&
                      j &&
                      b.indexOf(v) < 0 &&
                      ('string' !== typeof x || '[object Array]' !== v)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!'
                          );
                        var k = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              m,
                              g,
                              be(be({}, t), {}, { ns: l })
                            )
                          : "key '"
                              .concat(c, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              );
                        return i ? ((h.res = k), h) : k;
                      }
                      if (a) {
                        var O = '[object Array]' === v,
                          N = O ? [] : {},
                          S = O ? y : m;
                        for (var P in g)
                          if (Object.prototype.hasOwnProperty.call(g, P)) {
                            var L = ''.concat(S).concat(a).concat(P);
                            (N[P] = this.translate(
                              L,
                              be(be({}, t), { joinArrays: !1, ns: l })
                            )),
                              N[P] === L && (N[P] = g[P]);
                          }
                        g = N;
                      }
                    } else if (
                      w &&
                      'string' === typeof x &&
                      '[object Array]' === v
                    )
                      (g = g.join(x)) &&
                        (g = this.extendTranslation(g, e, t, n));
                    else {
                      var C = !1,
                        E = !1,
                        R = void 0 !== t.count && 'string' !== typeof t.count,
                        z = r.hasDefaultValue(t),
                        _ = R
                          ? this.pluralResolver.getSuffix(f, t.count, t)
                          : '',
                        I = t['defaultValue'.concat(_)] || t.defaultValue;
                      !this.isValidLookup(g) && z && ((C = !0), (g = I)),
                        this.isValidLookup(g) || ((E = !0), (g = c));
                      var T =
                          t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        M = T && E ? void 0 : g,
                        A = z && I !== g && this.options.updateMissing;
                      if (E || C || A) {
                        if (
                          (this.logger.log(
                            A ? 'updateKey' : 'missingKey',
                            f,
                            u,
                            c,
                            A ? I : g
                          ),
                          a)
                        ) {
                          var D = this.resolve(
                            c,
                            be(be({}, t), {}, { keySeparator: !1 })
                          );
                          D &&
                            D.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                            );
                        }
                        var B = [],
                          V = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          );
                        if (
                          'fallback' === this.options.saveMissingTo &&
                          V &&
                          V[0]
                        )
                          for (var $ = 0; $ < V.length; $++) B.push(V[$]);
                        else
                          'all' === this.options.saveMissingTo
                            ? (B = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language
                              ))
                            : B.push(t.lng || this.language);
                        var H = function (e, r, n) {
                          var i = z && n !== g ? n : M;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, u, r, i, A, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, u, r, i, A, t),
                            o.emit('missingKey', e, u, r, g);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && R
                            ? B.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (r) {
                                    H(
                                      [e],
                                      c + r,
                                      t['defaultValue'.concat(r)] || I
                                    );
                                  });
                              })
                            : H(B, c, I));
                      }
                      (g = this.extendTranslation(g, e, t, h, n)),
                        E &&
                          g === c &&
                          this.options.appendNamespaceToMissingKey &&
                          (g = ''.concat(u, ':').concat(c)),
                        (E || C) &&
                          this.options.parseMissingKeyHandler &&
                          (g =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  c,
                                  C ? g : void 0
                                )
                              : this.options.parseMissingKeyHandler(g));
                    }
                    return i ? ((h.res = g), h) : g;
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, r, n, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        be(
                          be({}, this.options.interpolation.defaultVariables),
                          r
                        ),
                        n.usedLng,
                        n.usedNS,
                        n.usedKey,
                        { resolved: n }
                      );
                    else if (!r.skipInterpolation) {
                      r.interpolation &&
                        this.interpolator.init(
                          be(be({}, r), {
                            interpolation: be(
                              be({}, this.options.interpolation),
                              r.interpolation
                            ),
                          })
                        );
                      var a,
                        s =
                          'string' === typeof e &&
                          (r &&
                          r.interpolation &&
                          void 0 !== r.interpolation.skipOnVariables
                            ? r.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (s) {
                        var c = e.match(this.interpolator.nestingRegexp);
                        a = c && c.length;
                      }
                      var l =
                        r.replace && 'string' !== typeof r.replace
                          ? r.replace
                          : r;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (l = be(
                            be({}, this.options.interpolation.defaultVariables),
                            l
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          l,
                          r.lng || this.language,
                          r
                        )),
                        s)
                      ) {
                        var u = e.match(this.interpolator.nestingRegexp);
                        a < (u && u.length) && (r.nest = !1);
                      }
                      !1 !== r.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, n = new Array(e), a = 0;
                              a < e;
                              a++
                            )
                              n[a] = arguments[a];
                            return o && o[0] === n[0] && !r.context
                              ? (i.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(n[0], ' in key: ')
                                    .concat(t[0])
                                ),
                                null)
                              : i.translate.apply(i, n.concat([t]));
                          },
                          r
                        )),
                        r.interpolation && this.interpolator.reset();
                    }
                    var f = r.postProcess || this.options.postProcess,
                      d = 'string' === typeof f ? [f] : f;
                    return (
                      void 0 !== e &&
                        null !== e &&
                        d &&
                        d.length &&
                        !1 !== r.applyPostProcessor &&
                        (e = ye.handle(
                          d,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? be({ i18nResolved: n }, r)
                            : r,
                          this
                        )),
                      e
                    );
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      r,
                      n,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      'string' === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var c = a.extractFromKey(e, s),
                            l = c.key;
                          r = l;
                          var u = c.namespaces;
                          a.options.fallbackNS &&
                            (u = u.concat(a.options.fallbackNS));
                          var f =
                              void 0 !== s.count && 'string' !== typeof s.count,
                            d =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            p =
                              void 0 !== s.context &&
                              ('string' === typeof s.context ||
                                'number' === typeof s.context) &&
                              '' !== s.context,
                            h = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng
                                );
                          u.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !we[''.concat(h[0], '-').concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((we[''.concat(h[0], '-').concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(r, '" for languages "')
                                    .concat(
                                      h.join(', '),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                                )),
                              h.forEach(function (r) {
                                if (!a.isValidLookup(t)) {
                                  o = r;
                                  var i,
                                    c = [l];
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(c, l, r, e, s);
                                  else {
                                    var u;
                                    f &&
                                      (u = a.pluralResolver.getSuffix(
                                        r,
                                        s.count,
                                        s
                                      ));
                                    var h = '_zero';
                                    if (
                                      (f && (c.push(l + u), d && c.push(l + h)),
                                      p)
                                    ) {
                                      var g = ''
                                        .concat(l)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context);
                                      c.push(g),
                                        f &&
                                          (c.push(g + u), d && c.push(g + h));
                                    }
                                  }
                                  for (; (i = c.pop()); )
                                    a.isValidLookup(t) ||
                                      ((n = i),
                                      (t = a.getResource(r, e, i, s)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: r,
                        exactUsedKey: n,
                        usedLng: o,
                        usedNS: i,
                      }
                    );
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    );
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, r) {
                    var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, r, n)
                      : this.resourceStore.getResource(e, t, r, n);
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue';
                    for (var r in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, r) &&
                        t === r.substring(0, t.length) &&
                        void 0 !== e[r]
                      )
                        return !0;
                    return !1;
                  },
                },
              ]
            ),
            r
          );
        })(Q);
      function ke(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var Oe = (function () {
          function e(t) {
            u(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = Z.create('languageUtils'));
          }
          return (
            d(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' === typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      r = e.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (r = r.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === r.length
                        ? ((r[0] = r[0].toLowerCase()),
                          (r[1] = r[1].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = ke(r[1].toLowerCase())))
                        : 3 === r.length &&
                          ((r[0] = r[0].toLowerCase()),
                          2 === r[1].length && (r[1] = r[1].toUpperCase()),
                          'sgn' !== r[0] &&
                            2 === r[2].length &&
                            (r[2] = r[2].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = ke(r[1].toLowerCase())),
                          t.indexOf(r[2].toLowerCase()) > -1 &&
                            (r[2] = ke(r[2].toLowerCase()))),
                      r.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    r = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var n = r.formatLanguageCode(e);
                          (r.options.supportedLngs && !r.isSupportedCode(n)) ||
                            (t = n);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var n = r.getLanguagePartFromCode(e);
                            if (r.isSupportedCode(n)) return (t = n);
                            t = r.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(n)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ('function' === typeof e && (e = e(t)),
                    'string' === typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var r = e[t];
                  return (
                    r || (r = e[this.getScriptPartFromCode(t)]),
                    r || (r = e[this.formatLanguageCode(t)]),
                    r || (r = e[this.getLanguagePartFromCode(t)]),
                    r || (r = e.default),
                    r || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var r = this,
                    n = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (r.isSupportedCode(e)
                          ? o.push(e)
                          : r.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e
                              )
                            ));
                    };
                  return (
                    'string' === typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' === typeof e && i(this.formatLanguageCode(e)),
                    n.forEach(function (e) {
                      o.indexOf(e) < 0 && i(r.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        Ne = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Se = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        Pe = ['v1', 'v2', 'v3'],
        Le = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      function Ce() {
        var e = {};
        return (
          Ne.forEach(function (t) {
            t.lngs.forEach(function (r) {
              e[r] = { numbers: t.nr, plurals: Se[t.fc] };
            });
          }),
          e
        );
      }
      var Ee = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          u(this, e),
            (this.languageUtils = t),
            (this.options = r),
            (this.logger = Z.create('pluralResolver')),
            (this.options.compatibilityJSON &&
              'v4' !== this.options.compatibilityJSON) ||
              ('undefined' !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = 'v3'),
              this.logger.error(
                'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
              )),
            (this.rules = Ce());
        }
        return (
          d(e, [
            {
              key: 'addRule',
              value: function (e, t) {
                this.rules[e] = t;
              },
            },
            {
              key: 'getRule',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(e, {
                      type: t.ordinal ? 'ordinal' : 'cardinal',
                    });
                  } catch (r) {
                    return;
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                );
              },
            },
            {
              key: 'needsPlural',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, t);
                return this.shouldUseIntlApi()
                  ? r && r.resolvedOptions().pluralCategories.length > 1
                  : r && r.numbers.length > 1;
              },
            },
            {
              key: 'getPluralFormsOfKey',
              value: function (e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return this.getSuffixes(e, r).map(function (e) {
                  return ''.concat(t).concat(e);
                });
              },
            },
            {
              key: 'getSuffixes',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, r);
                return n
                  ? this.shouldUseIntlApi()
                    ? n
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return Le[e] - Le[t];
                        })
                        .map(function (e) {
                          return ''.concat(t.options.prepend).concat(e);
                        })
                    : n.numbers.map(function (n) {
                        return t.getSuffix(e, n, r);
                      })
                  : [];
              },
            },
            {
              key: 'getSuffix',
              value: function (e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  n = this.getRule(e, r);
                return n
                  ? this.shouldUseIntlApi()
                    ? ''.concat(this.options.prepend).concat(n.select(t))
                    : this.getSuffixRetroCompatible(n, t)
                  : (this.logger.warn('no plural rule found for: '.concat(e)),
                    '');
              },
            },
            {
              key: 'getSuffixRetroCompatible',
              value: function (e, t) {
                var r = this,
                  n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  o = e.numbers[n];
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === o ? (o = 'plural') : 1 === o && (o = ''));
                var i = function () {
                  return r.options.prepend && o.toString()
                    ? r.options.prepend + o.toString()
                    : o.toString();
                };
                return 'v1' === this.options.compatibilityJSON
                  ? 1 === o
                    ? ''
                    : 'number' === typeof o
                    ? '_plural_'.concat(o.toString())
                    : i()
                  : 'v2' === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === e.numbers.length &&
                      1 === e.numbers[0])
                  ? i()
                  : this.options.prepend && n.toString()
                  ? this.options.prepend + n.toString()
                  : n.toString();
              },
            },
            {
              key: 'shouldUseIntlApi',
              value: function () {
                return !Pe.includes(this.options.compatibilityJSON);
              },
            },
          ]),
          e
        );
      })();
      function Re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Re(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var _e = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u(this, e),
            (this.logger = Z.create('interpolator')),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          d(e, [
            {
              key: 'init',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : le),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? se(t.prefix)
                    : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix
                    ? se(t.suffix)
                    : t.suffixEscaped || '}}'),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ','),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ''
                    : t.unescapePrefix || '-'),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ''
                    : t.unescapeSuffix || ''),
                  (this.nestingPrefix = t.nestingPrefix
                    ? se(t.nestingPrefix)
                    : t.nestingPrefixEscaped || se('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? se(t.nestingSuffix)
                    : t.nestingSuffixEscaped || se(')')),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ','),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: 'reset',
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: 'resetRegExp',
              value: function () {
                var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                this.regexp = new RegExp(e, 'g');
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = new RegExp(t, 'g');
                var r = ''
                  .concat(this.nestingPrefix, '(.+?)')
                  .concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(r, 'g');
              },
            },
            {
              key: 'interpolate',
              value: function (e, t, r, n) {
                var o,
                  i,
                  a,
                  s = this,
                  c =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function l(e) {
                  return e.replace(/\$/g, '$$$$');
                }
                var u = function (e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                    var o = ie(t, c, e);
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          r,
                          ze(ze(ze({}, n), t), {}, { interpolationkey: e })
                        )
                      : o;
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    l = i.join(s.formatSeparator).trim();
                  return s.format(
                    ie(t, c, a),
                    l,
                    r,
                    ze(ze(ze({}, n), t), {}, { interpolationkey: a })
                  );
                };
                this.resetRegExp();
                var f =
                    (n && n.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  d =
                    n &&
                    n.interpolation &&
                    void 0 !== n.interpolation.skipOnVariables
                      ? n.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return l(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? l(s.escape(e)) : l(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var r = o[1].trim();
                      if (void 0 === (i = u(r)))
                        if ('function' === typeof f) {
                          var c = f(e, o, n);
                          i = 'string' === typeof c ? c : '';
                        } else if (n && n.hasOwnProperty(r)) i = '';
                        else {
                          if (d) {
                            i = o[0];
                            continue;
                          }
                          s.logger.warn(
                            'missed to pass in variable '
                              .concat(r, ' for interpolating ')
                              .concat(e)
                          ),
                            (i = '');
                        }
                      else
                        'string' === typeof i ||
                          s.useRawValueToEscape ||
                          (i = ee(i));
                      var l = t.safeValue(i);
                      if (
                        ((e = e.replace(o[0], l)),
                        d
                          ? ((t.regex.lastIndex += l.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: 'nest',
              value: function (e, t) {
                var r,
                  n,
                  o = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = ze({}, i);
                function s(e, t) {
                  var r = this.nestingOptionsSeparator;
                  if (e.indexOf(r) < 0) return e;
                  var n = e.split(new RegExp(''.concat(r, '[ ]*{'))),
                    o = '{'.concat(n[1]);
                  (e = n[0]),
                    (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                  try {
                    (a = JSON.parse(o)), t && (a = ze(ze({}, t), a));
                  } catch (i) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(
                          e
                        ),
                        i
                      ),
                      ''.concat(e).concat(r).concat(o)
                    );
                  }
                  return delete a.defaultValue, e;
                }
                for (
                  a.applyPostProcessor = !1, delete a.defaultValue;
                  (r = this.nestingRegexp.exec(e));

                ) {
                  var c = [],
                    l = !1;
                  if (
                    -1 !== r[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(r[1])
                  ) {
                    var u = r[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (r[1] = u.shift()), (c = u), (l = !0);
                  }
                  if (
                    (n = t(s.call(this, r[1].trim(), a), a)) &&
                    r[0] === e &&
                    'string' !== typeof n
                  )
                    return n;
                  'string' !== typeof n && (n = ee(n)),
                    n ||
                      (this.logger.warn(
                        'missed to resolve '
                          .concat(r[1], ' for nesting ')
                          .concat(e)
                      ),
                      (n = '')),
                    l &&
                      (n = c.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          ze(ze({}, i), {}, { interpolationkey: r[1].trim() })
                        );
                      }, n.trim())),
                    (e = e.replace(r[0], n)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function Ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Me = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u(this, e),
            (this.logger = Z.create('formatter')),
            (this.options = t),
            (this.formats = {
              number: function (e, t, r) {
                return new Intl.NumberFormat(t, r).format(e);
              },
              currency: function (e, t, r) {
                return new Intl.NumberFormat(
                  t,
                  Te(Te({}, r), {}, { style: 'currency' })
                ).format(e);
              },
              datetime: function (e, t, r) {
                return new Intl.DateTimeFormat(t, Te({}, r)).format(e);
              },
              relativetime: function (e, t, r) {
                return new Intl.RelativeTimeFormat(t, Te({}, r)).format(
                  e,
                  r.range || 'day'
                );
              },
              list: function (e, t, r) {
                return new Intl.ListFormat(t, Te({}, r)).format(e);
              },
            }),
            this.init(t);
        }
        return (
          d(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  r = t.interpolation;
                this.formatSeparator = r.formatSeparator
                  ? r.formatSeparator
                  : r.formatSeparator || ',';
              },
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: 'format',
              value: function (e, t, r, n) {
                var o = this;
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var i = (function (e) {
                      var t = e.toLowerCase().trim(),
                        r = {};
                      if (e.indexOf('(') > -1) {
                        var n = e.split('(');
                        t = n[0].toLowerCase().trim();
                        var o = n[1].substring(0, n[1].length - 1);
                        'currency' === t && o.indexOf(':') < 0
                          ? r.currency || (r.currency = o.trim())
                          : 'relativetime' === t && o.indexOf(':') < 0
                          ? r.range || (r.range = o.trim())
                          : o.split(';').forEach(function (e) {
                              if (e) {
                                var t = W(e.split(':')),
                                  n = t[0],
                                  o = t.slice(1).join(':');
                                r[n.trim()] || (r[n.trim()] = o.trim()),
                                  'false' === o.trim() && (r[n.trim()] = !1),
                                  'true' === o.trim() && (r[n.trim()] = !0),
                                  isNaN(o.trim()) ||
                                    (r[n.trim()] = parseInt(o.trim(), 10));
                              }
                            });
                      }
                      return { formatName: t, formatOptions: r };
                    })(t),
                    a = i.formatName,
                    s = i.formatOptions;
                  if (o.formats[a]) {
                    var c = e;
                    try {
                      var l =
                          (n &&
                            n.formatParams &&
                            n.formatParams[n.interpolationkey]) ||
                          {},
                        u = l.locale || l.lng || n.locale || n.lng || r;
                      c = o.formats[a](e, u, Te(Te(Te({}, s), n), l));
                    } catch (f) {
                      o.logger.warn(f);
                    }
                    return c;
                  }
                  return (
                    o.logger.warn(
                      'there was no format function for '.concat(a)
                    ),
                    e
                  );
                }, e);
              },
            },
          ]),
          e
        );
      })();
      function Ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ae(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Be(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = q(e);
          if (t) {
            var o = q(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return U(this, r);
        };
      }
      var Fe = (function (e) {
        H(r, e);
        var t = Be(r);
        function r(e, n, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            u(this, r),
            (i = t.call(this)),
            ue && Q.call(V(i)),
            (i.backend = e),
            (i.store = n),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = Z.create('backendConnector')),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          );
        }
        return (
          d(r, [
            {
              key: 'queueLoad',
              value: function (e, t, r, n) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  c = {};
                return (
                  e.forEach(function (e) {
                    var n = !0;
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t);
                      !r.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (n = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === c[t] && (c[t] = !0)));
                    }),
                      n || (s[e] = !0);
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: n,
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(c),
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, r) {
                var n = e.split('|'),
                  o = n[0],
                  i = n[1];
                t && this.emit('failedLoading', o, i, t),
                  r && this.store.addResourceBundle(o, i, r),
                  (this.state[e] = t ? -1 : 2);
                var a = {};
                this.queue.forEach(function (r) {
                  !(function (e, t, r, n) {
                    var o = re(e, t, Object),
                      i = o.obj,
                      a = o.k;
                    (i[a] = i[a] || []),
                      n && (i[a] = i[a].concat(r)),
                      n || i[a].push(r);
                  })(r.loaded, [o], i),
                    (function (e, t) {
                      delete e.pending[t], e.pendingCount--;
                    })(r, e),
                    t && r.errors.push(t),
                    0 !== r.pendingCount ||
                      r.done ||
                      (Object.keys(r.loaded).forEach(function (e) {
                        a[e] || (a[e] = {});
                        var t = Object.keys(a[e]);
                        t.length &&
                          t.forEach(function (r) {
                            void 0 !== t[r] && (a[e][r] = !0);
                          });
                      }),
                      (r.done = !0),
                      r.errors.length ? r.callback(r.errors) : r.callback());
                }),
                  this.emit('loaded', a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, r) {
                var n = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                return e.length
                  ? this.readingCalls >= this.maxParallelReads
                    ? void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: r,
                        tried: o,
                        wait: i,
                        callback: a,
                      })
                    : (this.readingCalls++,
                      this.backend[r](e, t, function (s, c) {
                        if (s && c && o < 5)
                          setTimeout(function () {
                            n.read.call(n, e, t, r, o + 1, 2 * i, a);
                          }, i);
                        else {
                          if ((n.readingCalls--, n.waitingReads.length > 0)) {
                            var l = n.waitingReads.shift();
                            n.read(
                              l.lng,
                              l.ns,
                              l.fcName,
                              l.tried,
                              l.wait,
                              l.callback
                            );
                          }
                          a(s, c);
                        }
                      }))
                  : a(null, {});
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var r = this,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.'
                    ),
                    o && o()
                  );
                'string' === typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' === typeof t && (t = [t]);
                var i = this.queueLoad(e, t, n, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  r.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, r) {
                this.prepareLoading(e, t, {}, r);
              },
            },
            {
              key: 'reload',
              value: function (e, t, r) {
                this.prepareLoading(e, t, { reload: !0 }, r);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  n = e.split('|'),
                  o = n[0],
                  i = n[1];
                this.read(o, i, 'read', void 0, void 0, function (n, a) {
                  n &&
                    t.logger.warn(
                      ''
                        .concat(r, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      n
                    ),
                    !n &&
                      a &&
                      t.logger.log(
                        ''
                          .concat(r, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(o),
                        a
                      ),
                    t.loaded(e, n, a);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, r, n, o) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(r, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                    )
                  : void 0 !== r &&
                    null !== r &&
                    '' !== r &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        r,
                        n,
                        null,
                        De(De({}, i), {}, { isUpdate: o })
                      ),
                    e && e[0] && this.store.addResource(e[0], t, r, n));
              },
            },
          ]),
          r
        );
      })(Q);
      function Ve() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ('object' === F(e[1]) && (t = e[1]),
              'string' === typeof e[1] && (t.defaultValue = e[1]),
              'string' === typeof e[2] && (t.tDescription = e[2]),
              'object' === F(e[2]) || 'object' === F(e[3]))
            ) {
              var r = e[3] || e[2];
              Object.keys(r).forEach(function (e) {
                t[e] = r[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, r, n) {
              return e;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function $e(e) {
        return (
          'string' === typeof e.ns && (e.ns = [e.ns]),
          'string' === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          'string' === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function He(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : He(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function qe(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = q(e);
          if (t) {
            var o = q(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return U(this, r);
        };
      }
      function We() {}
      function Je(e) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (
          t
        ) {
          'function' === typeof e[t] && (e[t] = e[t].bind(e));
        });
      }
      var Ke = (function (e) {
        H(r, e);
        var t = qe(r);
        function r() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (u(this, r),
            (e = t.call(this)),
            ue && Q.call(V(e)),
            (e.options = $e(n)),
            (e.services = {}),
            (e.logger = Z),
            (e.modules = { external: [] }),
            Je(V(e)),
            o && !e.isInitialized && !n.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(n, o), U(e, V(e));
            setTimeout(function () {
              e.init(n, o);
            }, 0);
          }
          return e;
        }
        return (
          d(r, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r = arguments.length > 1 ? arguments[1] : void 0;
                'function' === typeof t && ((r = t), (t = {})),
                  !t.defaultNS &&
                    t.ns &&
                    ('string' === typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf('translation') < 0 &&
                        (t.defaultNS = t.ns[0]));
                var n = Ve();
                function o(e) {
                  return e ? ('function' === typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = Ue(Ue(Ue({}, n), this.options), $e(t))),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = Ue(
                      Ue({}, n.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  var i;
                  this.modules.logger
                    ? Z.init(o(this.modules.logger), this.options)
                    : Z.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : 'undefined' !== typeof Intl && (i = Me);
                  var a = new Oe(this.options);
                  this.store = new me(this.options.resources, this.options);
                  var s = this.services;
                  (s.logger = Z),
                    (s.resourceStore = this.store),
                    (s.languageUtils = a),
                    (s.pluralResolver = new Ee(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !i ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          n.interpolation.format) ||
                      ((s.formatter = o(i)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new _e(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new Fe(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          n = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        n[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(n));
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init(
                        s,
                        this.options.detection,
                        this.options
                      )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new je(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          n = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        n[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(n));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  r || (r = We),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var c = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  );
                  c.length > 0 && 'dev' !== c[0] && (this.options.lng = c[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined'
                  );
                var l = [
                  'getResource',
                  'hasResourceBundle',
                  'getResourceBundle',
                  'getDataByLanguage',
                ];
                l.forEach(function (t) {
                  e[t] = function () {
                    var r;
                    return (r = e.store)[t].apply(r, arguments);
                  };
                });
                var u = [
                  'addResource',
                  'addResources',
                  'addResourceBundle',
                  'removeResourceBundle',
                ];
                u.forEach(function (t) {
                  e[t] = function () {
                    var r;
                    return (r = e.store)[t].apply(r, arguments), e;
                  };
                });
                var f = X(),
                  d = function () {
                    var t = function (t, n) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!'
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        f.resolve(n),
                        r(t, n);
                    };
                    if (
                      e.languages &&
                      'v1' !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, t);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? d()
                    : setTimeout(d, 0),
                  f
                );
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : We,
                  n = r,
                  o = 'string' === typeof e ? e : this.language;
                if (
                  ('function' === typeof e && (n = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return n();
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            i.indexOf(e) < 0 && i.push(e);
                          });
                    };
                  if (o) a(o);
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    );
                    s.forEach(function (e) {
                      return a(e);
                    });
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return a(e);
                    }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          n(e);
                      }
                    );
                } else n(null);
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, r) {
                var n = X();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  r || (r = We),
                  this.services.backendConnector.reload(e, t, function (e) {
                    n.resolve(), r(e);
                  }),
                  n
                );
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw new Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()'
                  );
                if (!e.type)
                  throw new Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()'
                  );
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && ye.addPostProcessor(e),
                  'formatter' === e.type && (this.modules.formatter = e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: 'setResolvedLanguage',
              value: function (e) {
                if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var r = this.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(r) > -1) &&
                      this.store.hasLanguageSomeTranslations(r)
                    ) {
                      this.resolvedLanguage = r;
                      break;
                    }
                  }
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var r = this;
                this.isLanguageChangingTo = e;
                var n = X();
                this.emit('languageChanging', e);
                var o = function (e) {
                    (r.language = e),
                      (r.languages =
                        r.services.languageUtils.toResolveHierarchy(e)),
                      (r.resolvedLanguage = void 0),
                      r.setResolvedLanguage(e);
                  },
                  i = function (i) {
                    e || i || !r.services.languageDetector || (i = []);
                    var a =
                      'string' === typeof i
                        ? i
                        : r.services.languageUtils.getBestMatchFromCodes(i);
                    a &&
                      (r.language || o(a),
                      r.translator.language || r.translator.changeLanguage(a),
                      r.services.languageDetector &&
                        r.services.languageDetector.cacheUserLanguage(a)),
                      r.loadResources(a, function (e) {
                        !(function (e, i) {
                          i
                            ? (o(i),
                              r.translator.changeLanguage(i),
                              (r.isLanguageChangingTo = void 0),
                              r.emit('languageChanged', i),
                              r.logger.log('languageChanged', i))
                            : (r.isLanguageChangingTo = void 0),
                            n.resolve(function () {
                              return r.t.apply(r, arguments);
                            }),
                            t &&
                              t(e, function () {
                                return r.t.apply(r, arguments);
                              });
                        })(e, a);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(i)
                      : i(e)
                    : i(this.services.languageDetector.detect()),
                  n
                );
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t, r) {
                var n = this,
                  o = function e(t, o) {
                    var i;
                    if ('object' !== F(o)) {
                      for (
                        var a = arguments.length,
                          s = new Array(a > 2 ? a - 2 : 0),
                          c = 2;
                        c < a;
                        c++
                      )
                        s[c - 2] = arguments[c];
                      i = n.options.overloadTranslationOptionHandler(
                        [t, o].concat(s)
                      );
                    } else i = Ue({}, o);
                    (i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns);
                    var l = n.options.keySeparator || '.',
                      u = r ? ''.concat(r).concat(l).concat(t) : t;
                    return n.t(u, i);
                  };
                return (
                  'string' === typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = r),
                  o
                );
              },
            },
            {
              key: 't',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: 'exists',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages
                    ),
                    !1
                  );
                var n = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ('cimode' === n.toLowerCase()) return !0;
                var a = function (e, r) {
                  var n =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(r)
                    ];
                  return -1 === n || 2 === n;
                };
                if (r.precheck) {
                  var s = r.precheck(this, a);
                  if (void 0 !== s) return s;
                }
                return (
                  !!this.hasResourceBundle(n, e) ||
                  !(
                    this.services.backendConnector.backend &&
                    (!this.options.resources ||
                      this.options.partialBundledLanguages)
                  ) ||
                  !(!a(n, e) || (o && !a(i, e)))
                );
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var r = this,
                  n = X();
                return this.options.ns
                  ? ('string' === typeof e && (e = [e]),
                    e.forEach(function (e) {
                      r.options.ns.indexOf(e) < 0 && r.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var r = X();
                'string' === typeof e && (e = [e]);
                var n = this.options.preload || [],
                  o = e.filter(function (e) {
                    return n.indexOf(e) < 0;
                  });
                return o.length
                  ? ((this.options.preload = n.concat(o)),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'dir',
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !e)
                )
                  return 'rtl';
                return [
                  'ar',
                  'shu',
                  'sqr',
                  'ssh',
                  'xaa',
                  'yhd',
                  'yud',
                  'aao',
                  'abh',
                  'abv',
                  'acm',
                  'acq',
                  'acw',
                  'acx',
                  'acy',
                  'adf',
                  'ads',
                  'aeb',
                  'aec',
                  'afb',
                  'ajp',
                  'apc',
                  'apd',
                  'arb',
                  'arq',
                  'ars',
                  'ary',
                  'arz',
                  'auz',
                  'avl',
                  'ayh',
                  'ayl',
                  'ayn',
                  'ayp',
                  'bbz',
                  'pga',
                  'he',
                  'iw',
                  'ps',
                  'pbt',
                  'pbu',
                  'pst',
                  'prp',
                  'prd',
                  'ug',
                  'ur',
                  'ydd',
                  'yds',
                  'yih',
                  'ji',
                  'yi',
                  'hbo',
                  'men',
                  'xmn',
                  'fa',
                  'jpr',
                  'peo',
                  'pes',
                  'prs',
                  'dv',
                  'sam',
                  'ckb',
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e)
                ) > -1 || e.toLowerCase().indexOf('-arab') > 1
                  ? 'rtl'
                  : 'ltr';
              },
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : We,
                  o = Ue(Ue(Ue({}, this.options), t), { isClone: !0 }),
                  i = new r(o),
                  a = ['store', 'services', 'language'];
                return (
                  a.forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = Ue({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new je(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        n = 1;
                      n < t;
                      n++
                    )
                      r[n - 1] = arguments[n];
                    i.emit.apply(i, [e].concat(r));
                  }),
                  i.init(o, n),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                };
              },
            },
          ]),
          r
        );
      })(Q);
      c(Ke, 'createInstance', function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new Ke(e, t);
      });
      var Ge = Ke.createInstance();
      Ge.createInstance = Ke.createInstance;
      Ge.createInstance,
        Ge.init,
        Ge.loadResources,
        Ge.reloadResources,
        Ge.use,
        Ge.changeLanguage,
        Ge.getFixedT,
        Ge.t,
        Ge.exists,
        Ge.setDefaultNamespace,
        Ge.hasLoadedNamespace,
        Ge.loadNamespaces,
        Ge.loadLanguages;
      var Ye = Ge,
        Ze = function (e) {
          var t,
            r,
            n = Ye.createInstance(e);
          n.isInitialized
            ? (t = Promise.resolve(Ye.t))
            : (null === e ||
                void 0 === e ||
                null === (r = e.use) ||
                void 0 === r ||
                r.forEach(function (e) {
                  return n.use(e);
                }),
              (t = n.init(e)));
          return { i18n: n, initPromise: t };
        },
        Qe = l.createElement;
      function Xe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xe(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var tt = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          r = function (r) {
            var n,
              o,
              i = r.pageProps._nextI18Next,
              a =
                null !==
                  (n = null === i || void 0 === i ? void 0 : i.initialLocale) &&
                void 0 !== n
                  ? n
                  : null === r ||
                    void 0 === r ||
                    null === (o = r.router) ||
                    void 0 === o
                  ? void 0
                  : o.locale,
              s = (0, l.useMemo)(
                function () {
                  var e, r, n;
                  if (!i && !t) return null;
                  var o =
                    null !== t && void 0 !== t
                      ? t
                      : null === i || void 0 === i
                      ? void 0
                      : i.userConfig;
                  if (!o && null === t)
                    throw new Error(
                      'appWithTranslation was called without a next-i18next config'
                    );
                  if (
                    (null !== t && (o = t),
                    null === (e = o) || void 0 === e || !e.i18n)
                  )
                    throw new Error(
                      'appWithTranslation was called without config.i18n'
                    );
                  if (
                    null === (r = o) ||
                    void 0 === r ||
                    null === (n = r.i18n) ||
                    void 0 === n ||
                    !n.defaultLocale
                  )
                    throw new Error(
                      'config.i18n does not include a defaultLocale property'
                    );
                  var s = (i || {}).initialI18nStore,
                    c =
                      null !== t && void 0 !== t && t.resources
                        ? t.resources
                        : s;
                  a || (a = o.i18n.defaultLocale);
                  var l = Ze(
                    et(
                      et({}, B(et(et({}, o), {}, { lng: a }))),
                      {},
                      { lng: a, resources: c }
                    )
                  ).i18n;
                  return l, l;
                },
                [i, a, t]
              );
            return null !== s
              ? Qe(R, { i18n: s }, Qe(e, L({ key: a }, r)))
              : Qe(e, L({ key: a }, r));
          };
        return E()(r, e);
      };
    },
    2010: function (e, t, r) {
      'use strict';
      r.d(t, {
        f: function () {
          return u;
        },
        F: function () {
          return l;
        },
      });
      var n = r(7294);
      const o = ['light', 'dark'],
        i = '(prefers-color-scheme: dark)',
        a = 'undefined' == typeof window,
        s = (0, n.createContext)(void 0),
        c = { setTheme: (e) => {}, themes: [] },
        l = () => {
          var e;
          return null !== (e = (0, n.useContext)(s)) && void 0 !== e ? e : c;
        },
        u = (e) =>
          (0, n.useContext)(s)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(f, e),
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: a = !0,
          storageKey: c = 'theme',
          themes: l = ['light', 'dark'],
          defaultTheme: u = r ? 'system' : 'light',
          attribute: f = 'data-theme',
          value: m,
          children: y,
          nonce: v,
        }) => {
          const [b, x] = (0, n.useState)(() => p(c, u)),
            [w, j] = (0, n.useState)(() => p(c)),
            k = m ? Object.values(m) : l,
            O = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              'system' === e && r && (n = g());
              const i = m ? m[n] : n,
                s = t ? h() : null,
                c = document.documentElement;
              if (
                ('class' === f
                  ? (c.classList.remove(...k), i && c.classList.add(i))
                  : i
                  ? c.setAttribute(f, i)
                  : c.removeAttribute(f),
                a)
              ) {
                const e = o.includes(u) ? u : null,
                  t = o.includes(n) ? n : e;
                c.style.colorScheme = t;
              }
              null == s || s();
            }, []),
            N = (0, n.useCallback)(
              (e) => {
                x(e);
                try {
                  localStorage.setItem(c, e);
                } catch (e) {}
              },
              [e]
            ),
            S = (0, n.useCallback)(
              (t) => {
                const n = g(t);
                j(n), 'system' === b && r && !e && O('system');
              },
              [b, e]
            );
          return (
            (0, n.useEffect)(() => {
              const e = window.matchMedia(i);
              return e.addListener(S), S(e), () => e.removeListener(S);
            }, [S]),
            (0, n.useEffect)(() => {
              const e = (e) => {
                e.key === c && N(e.newValue || u);
              };
              return (
                window.addEventListener('storage', e),
                () => window.removeEventListener('storage', e)
              );
            }, [N]),
            (0, n.useEffect)(() => {
              O(null != e ? e : b);
            }, [e, b]),
            n.createElement(
              s.Provider,
              {
                value: {
                  theme: b,
                  setTheme: N,
                  forcedTheme: e,
                  resolvedTheme: 'system' === b ? w : b,
                  themes: r ? [...l, 'system'] : l,
                  systemTheme: r ? w : void 0,
                },
              },
              n.createElement(d, {
                forcedTheme: e,
                disableTransitionOnChange: t,
                enableSystem: r,
                enableColorScheme: a,
                storageKey: c,
                themes: l,
                defaultTheme: u,
                attribute: f,
                value: m,
                children: y,
                attrs: k,
                nonce: v,
              }),
              y
            )
          );
        },
        d = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: a,
            enableColorScheme: s,
            defaultTheme: c,
            value: l,
            attrs: u,
            nonce: f,
          }) => {
            const d = 'system' === c,
              p =
                'class' === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${u
                      .map((e) => `'${e}'`)
                      .join(',')});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              h = s
                ? o.includes(c) && c
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : '',
              g = (e, t = !1, n = !0) => {
                const i = l ? l[e] : e,
                  a = t ? e + "|| ''" : `'${i}'`;
                let c = '';
                return (
                  s &&
                    n &&
                    !t &&
                    o.includes(e) &&
                    (c += `d.style.colorScheme = '${e}';`),
                  'class' === r
                    ? (c += t || i ? `c.add(${a})` : 'null')
                    : i && (c += `d[s](n,${a})`),
                  c
                );
              },
              m = e
                ? `!function(){${p}${g(e)}}()`
                : a
                ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g(
                    'dark'
                  )}}else{${g('light')}}}else if(e){${
                    l ? `var x=${JSON.stringify(l)};` : ''
                  }${g(l ? 'x[e]' : 'e', !0)}}${
                    d ? '' : 'else{' + g(c, !1, !1) + '}'
                  }${h}}catch(e){}}()`
                : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${
                    l ? `var x=${JSON.stringify(l)};` : ''
                  }${g(l ? 'x[e]' : 'e', !0)}}else{${g(
                    c,
                    !1,
                    !1
                  )};}${h}}catch(t){}}();`;
            return n.createElement('script', {
              nonce: f,
              dangerouslySetInnerHTML: { __html: m },
            });
          },
          () => !0
        ),
        p = (e, t) => {
          if (a) return;
          let r;
          try {
            r = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return r || t;
        },
        h = () => {
          const e = document.createElement('style');
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? 'dark' : 'light'
        );
    },
    1780: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(3406);
        },
      ]);
    },
    691: function (e, t, r) {
      'use strict';
      r.d(t, {
        qE: function () {
          return $;
        },
        st: function () {
          return q;
        },
        he: function () {
          return W;
        },
        GL: function () {
          return J;
        },
        eD: function () {
          return K;
        },
        M5: function () {
          return R;
        },
        G9: function () {
          return G;
        },
        nt: function () {
          return D;
        },
        sg: function () {
          return B;
        },
        Lt: function () {
          return H;
        },
        $_: function () {
          return P;
        },
        h4: function () {
          return g;
        },
        JO: function () {
          return V;
        },
        II: function () {
          return F;
        },
        dv: function () {
          return C;
        },
        wp: function () {
          return u;
        },
        ql: function () {
          return A;
        },
        O6: function () {
          return _;
        },
        pE: function () {
          return S;
        },
        YE: function () {
          return b;
        },
        FN: function () {
          return U;
        },
        w1: function () {
          return T;
        },
        FZ: function () {
          return I;
        },
      });
      var n = r(5893),
        o = r(7294),
        i = r(5675),
        a = r(1163),
        s = r(3625);
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return c(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return c(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var u = function (e) {
          var t = e.sidebar,
            r = e.setSidebar,
            i = l(o.useState(''), 2),
            c = (i[0], i[1], l(o.useState(!1), 2));
          c[0], c[1], (0, a.useRouter)(), (0, s.$G)().t;
          return (0, n.jsx)('div', {
            className: 'relative',
            children: (0, n.jsxs)('div', {
              className:
                'fixed z-40 top-0 left-0 right-0 py-3 darkOrLight shadow-md px-4 flex items-center justify-between',
              children: [
                (0, n.jsx)(C, { sidebar: t, setSidebar: r }),
                (0, n.jsx)(R, {}),
                (0, n.jsx)(_, {}),
              ],
            }),
          });
        },
        f = r(3750),
        d = r(9352),
        p = r(8357);
      function h(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24', fill: 'none' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z',
                fill: 'currentColor',
              },
            },
          ],
        })(e);
      }
      var g = function () {
          var e = (0, o.useState)(!0),
            t = (e[0], e[1], (0, a.useRouter)()),
            r = (0, s.$G)().t;
          return (0, n.jsx)('div', {
            className: 'w-full h-screen',
            children: (0, n.jsxs)('div', {
              className:
                'container mx-auto grid grid-cols-1 md:grid-cols-2 transform translate-y-3/4 md:translate-y-1/2 py-10',
              children: [
                (0, n.jsxs)('div', {
                  className: 'space-y-3 py-5 md:py-16',
                  children: [
                    (0, n.jsx)('h3', {
                      className:
                        'relative text-3xl text-center md:text-left md:text-[1.7rem] lg:text-[2rem] font-semibold text-primary dark:text-white',
                      children: r('home:heading'),
                    }),
                    (0, n.jsx)('p', {
                      className:
                        'text-sm text-center md:text-left lg:text-base font-medium text-primary dark:text-white',
                      children: r('home:paragraph'),
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'flex items-center w-fit space-x-2 mx-auto md:mx-0',
                      children: [
                        (0, n.jsx)('button', {
                          onClick: function () {
                            return t.push('docs/guide/introduction');
                          },
                          className: 'btn btn__primary',
                          children: r('home:boshlash'),
                        }),
                        (0, n.jsxs)('a', {
                          target: '_blank',
                          href: 'https://t.me/akzmsh',
                          className:
                            'btn px-3 py-[0.60rem] bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white',
                          rel: 'noreferrer',
                          children: [
                            (0, n.jsx)(f.iEj, { className: 'text-xl' }),
                            (0, n.jsx)('p', { children: 'Telegram' }),
                          ],
                        }),
                        (0, n.jsxs)('a', {
                          target: '_blank',
                          href: 'https://github.com/AnvarovM/Lazydev',
                          className:
                            'btn px-3 py-[0.60rem] relative bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white',
                          rel: 'noreferrer',
                          children: [
                            (0, n.jsx)(f.rFR, { className: 'text-xl' }),
                            (0, n.jsx)('span', {
                              className:
                                'absolute -top-3 -right-5 px-2 py-1 text-xs text-white bg-primary dark:bg-darkSecondary rounded-t-lg rounded-br-lg',
                              children: '57',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'grid md:grid-cols-1 lg:grid-cols-2',
                  children: [
                    (0, n.jsx)('div', {
                      className: '-mt-16 hidden md:inline-flex',
                      children: (0, n.jsxs)('div', {
                        children: [
                          (0, n.jsx)('div', {
                            className: 'p-5',
                            children: (0, n.jsx)(q, {}),
                          }),
                          (0, n.jsxs)('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0, n.jsx)('div', {
                                children: (0, n.jsx)(W, {}),
                              }),
                              (0, n.jsxs)('div', {
                                className: 'animation1 flex flex-col space-y-4',
                                children: [
                                  (0, n.jsx)(V, {
                                    bg: 'bg-[#ff4757]',
                                    iconColor: 'text-white',
                                    Icon: f.mz0,
                                  }),
                                  (0, n.jsx)(V, {
                                    bg: 'bg-green-500',
                                    iconColor: 'text-white',
                                    Icon: f.Reu,
                                  }),
                                  (0, n.jsx)(V, {
                                    bg: 'bg-yellow-500',
                                    iconColor: 'text-white',
                                    Icon: d.j6O,
                                  }),
                                ],
                              }),
                              (0, n.jsxs)('div', {
                                className: 'animation1 flex flex-col space-y-4',
                                children: [
                                  (0, n.jsx)(V, {
                                    bg: 'bg-purple-500',
                                    iconColor: 'text-white',
                                    Icon: f.YaR,
                                  }),
                                  (0, n.jsx)(V, {
                                    bg: 'bg-white',
                                    iconColor: 'text-[#ff4757]',
                                    Icon: f.ytW,
                                  }),
                                  (0, n.jsx)(V, {
                                    bg: 'bg-[#0081c2]',
                                    iconColor: 'text-white',
                                    Icon: f.iEj,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(F, {
                            Icon: h,
                            animation: 'animation1',
                            p: 'px-2 p-2',
                            focusAnimation: 'px-4',
                            width: 'w-[13rem]',
                            placeholder: 'Search',
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className: 'hidden lg:block',
                      children: [
                        (0, n.jsx)('div', { children: (0, n.jsx)(U, {}) }),
                        (0, n.jsxs)('div', {
                          className: 'flex items-center space-x-4',
                          children: [
                            (0, n.jsxs)('div', {
                              children: [
                                (0, n.jsx)('div', {
                                  children: (0, n.jsx)(J, {}),
                                }),
                                (0, n.jsx)('div', {
                                  children: (0, n.jsx)(H, {}),
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'space-y-5',
                              children: [
                                (0, n.jsx)('div', {
                                  children: (0, n.jsx)(K, {}),
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'flex space-x-1',
                                  children: [
                                    (0, n.jsx)($, {
                                      src: '/images/avatar/person01.png',
                                      rounded: 'rounded-full',
                                    }),
                                    (0, n.jsx)($, {
                                      src: '/images/avatar/person03.png',
                                      rounded: 'rounded-full',
                                    }),
                                    (0, n.jsx)($, {
                                      src: '/images/avatar/person02.png',
                                      rounded: 'rounded-full',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        m = r(4603),
        y = r(1649),
        v = r(1664),
        b = function (e) {
          var t = e.sidebar,
            r = e.setSidebar,
            o = (0, a.useRouter)(),
            s = function () {
              r(!t);
            };
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)('aside', {
                className: t ? 'sidebar__active' : 'sidebar',
                children: (0, n.jsxs)('div', {
                  className: '',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, n.jsxs)('div', {
                          onClick: function () {
                            return o.push('/');
                          },
                          className:
                            'relative flex items-center group py-4 -ml-2',
                          children: [
                            (0, n.jsx)(i.default, {
                              className: 'group-hover:opacity-80',
                              width: 35,
                              height: 35,
                              src: '/images/logo.png',
                              alt: 'logo',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'relative',
                              children: [
                                (0, n.jsx)('h3', {
                                  className:
                                    'font-sora tracking-wide -ml-1 font-semibold text-lg cursor-pointer text-primary dark:text-white group-hover:opacity-80',
                                  children: 'Lazydev',
                                }),
                                (0, n.jsx)('p', {
                                  className:
                                    'absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]',
                                  children: '.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(y.u1R, { onClick: s }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'py-1',
                      children: [
                        (0, n.jsxs)('div', {
                          className:
                            'flex items-center space-x-1 cursor-pointer',
                          children: [
                            (0, n.jsx)('h4', {
                              className:
                                'font-semibold font-[1rem] text-primary dark:text-white',
                              children: 'Guide',
                            }),
                            (0, n.jsx)(y.hjJ, { className: 'text-sm' }),
                          ],
                        }),
                        (0, n.jsxs)('ul', {
                          className: 'p-2',
                          children: [
                            (0, n.jsx)(v.default, {
                              href: '/docs/guide/introduction',
                              children: (0, n.jsx)('li', {
                                className: 'sidebar__link',
                                children: 'Introduction',
                              }),
                            }),
                            (0, n.jsx)(v.default, {
                              href: '/docs/guide/',
                              children: (0, n.jsx)('li', {
                                className: 'sidebar__link',
                                children: 'Getting started',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'py-1',
                      children: [
                        (0, n.jsxs)('div', {
                          className:
                            'flex items-center space-x-1 cursor-pointer',
                          children: [
                            (0, n.jsx)('h4', {
                              className:
                                'font-semibold font-[1rem] text-primary dark:text-white',
                              children: 'Theme',
                            }),
                            (0, n.jsx)(y.hjJ, { className: 'text-sm' }),
                          ],
                        }),
                        (0, n.jsx)('ul', {
                          className: 'p-2',
                          children: (0, n.jsx)(v.default, {
                            href: '/docs/theme/',
                            children: (0, n.jsx)('li', {
                              className: 'sidebar__link',
                              children: 'Colors',
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'py-1',
                      children: [
                        (0, n.jsxs)('div', {
                          className:
                            'flex items-center space-x-1 cursor-pointer',
                          children: [
                            (0, n.jsx)('h4', {
                              className:
                                'font-semibold font-[1rem] text-primary dark:text-white',
                              children: 'Components',
                            }),
                            (0, n.jsx)(y.hjJ, { className: 'text-sm' }),
                          ],
                        }),
                        (0, n.jsx)('ul', {
                          className: 'p-2',
                          children: m.O.map(function (e) {
                            return (0, n.jsx)(
                              'li',
                              {
                                onClick: function () {
                                  return o.push(''.concat(e.path));
                                },
                                className: 'sidebar__link',
                                children: e.title,
                              },
                              e.id
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)('div', {
                onClick: s,
                className: t
                  ? 'fixed z-20 h-screen w-screen bg-black opacity-40'
                  : 'hidden',
              }),
            ],
          });
        },
        x = r(2010);
      function w(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: {
            t: '1551322312294',
            style: '',
            viewBox: '0 0 1024 1024',
            version: '1.1',
          },
          child: [
            { tag: 'defs', attr: {}, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z',
              },
            },
            {
              tag: 'path',
              attr: {
                d: 'M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z',
              },
            },
          ],
        })(e);
      }
      function j(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: {
            t: '1569683742680',
            viewBox: '0 0 1024 1024',
            version: '1.1',
          },
          child: [
            { tag: 'defs', attr: {}, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z',
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 1024 1024' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z',
              },
            },
          ],
        })(e);
      }
      function O(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480zm-26.69 186L363 279.85 389.69 362zM272 320c-.25-.19-20.59-15.77-45.42-42.67 39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22 6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57.92 1.21 1.85 2.39 2.78 3.57-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36 19.3-11.47c2.2-1.67 41.33-24 92-80.78 24.52 26.28 43.22 40.83 44.3 41.67L255 362z',
              },
            },
          ],
        })(e);
      }
      function N(e) {
        return (0, p.w_)({
          tag: 'svg',
          attr: { version: '1.2', baseProfile: 'tiny', viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'g',
              attr: {},
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M13 4l-1 2.934-1-2.934c-.188-.553.106-1.152.659-1.341.552-.188 1.153.107 1.341.659.078.23.072.469 0 .682zM4 11l2.934 1-2.934 1c-.553.188-1.152-.106-1.341-.659-.188-.552.107-1.153.659-1.341.23-.078.469-.072.682 0zM11 20l1-2.934 1 2.934c.188.553-.106 1.152-.659 1.341-.552.188-1.152-.106-1.341-.659-.078-.23-.072-.469 0-.682zM20 12.998l-2.934-1 2.934-1c.553-.188 1.152.106 1.341.659.188.552-.106 1.152-.659 1.341-.23.078-.469.072-.682 0zM7.05 5.636l1.367 2.781-2.781-1.367c-.524-.257-.74-.891-.483-1.414.258-.523.891-.739 1.414-.482.218.107.383.28.483.482zM5.636 16.949l2.781-1.367-1.367 2.781c-.257.523-.891.739-1.414.482-.523-.258-.739-.891-.482-1.414.107-.218.28-.382.482-.482zM16.949 18.363l-1.367-2.781 2.781 1.367c.523.257.739.891.482 1.414-.258.523-.891.739-1.414.482-.218-.107-.382-.28-.482-.482zM18.362 7.048l-2.782 1.368 1.368-2.782c.257-.523.891-.739 1.414-.482.523.258.739.891.481 1.415-.106.217-.279.381-.481.481zM12 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z',
                  },
                },
              ],
            },
          ],
        })(e);
      }
      var S = function (e) {
          var t = e.position,
            r = e.reverse,
            i = (0, x.F)(),
            s = (i.system, i.theme),
            c = i.setTheme,
            l = (0, o.useState)(!0),
            u = l[0],
            f = l[1],
            d = (0, o.useState)(!1),
            p = d[0],
            h = d[1],
            g = (0, a.useRouter)();
          (0, o.useEffect)(function () {
            h(!0);
          }, []);
          var m = (0, o.useState)(!0);
          m[0], m[1];
          return (0, n.jsxs)('div', {
            className: ''
              .concat(t, ' flex ')
              .concat(r, ' items-center space-x-3'),
            children: [
              (0, n.jsx)('div', {
                className: 'ml-0 md:ml-3',
                children: (0, n.jsx)(k, {
                  className:
                    'text-xl text-primary ml-3 md:ml-0 dark:text-white cursor-pointer hover:rotate-90 duration-200',
                }),
              }),
              (0, n.jsxs)('div', {
                onClick: function () {
                  return f(!u);
                },
                className: 'relative group',
                children: [
                  (0, n.jsxs)('ul', {
                    className: u
                      ? 'hidden'
                      : 'absolute bottom-10 -left-2 p-2 bg-white shadow-xl dark:bg-darkPrimary rounded-md z-50',
                    children: [
                      (0, n.jsx)('li', {
                        onClick: function () {
                          return g.push('/uz', '/uz', { locale: 'uz' });
                        },
                        className: 'link cursor-pointer',
                        children: 'Uz',
                      }),
                      (0, n.jsx)('li', {
                        onClick: function () {
                          return g.push('/ru', '/ru', { locale: 'ru' });
                        },
                        className: 'link cursor-pointer',
                        children: 'Ru',
                      }),
                      (0, n.jsx)('li', {
                        onClick: function () {
                          return g.push('/en', '/en', { locale: 'en' });
                        },
                        className: 'link cursor-pointer',
                        children: 'En',
                      }),
                    ],
                  }),
                  (0, n.jsx)(O, {
                    className:
                      'text-xl text-primary dark:text-white cursor-pointer',
                  }),
                ],
              }),
              (0, n.jsx)('div', {
                children: p
                  ? 'dark' === ('system' === s ? systemTheme : s)
                    ? (0, n.jsx)(N, {
                        title: 'Theme light',
                        className:
                          'w-6 h-6 text-white cursor-pointer hover:text-yellow-600',
                        onClick: function () {
                          return c('light');
                        },
                      })
                    : (0, n.jsx)(y.rUV, {
                        title: 'Theme dark',
                        className: 'w-6 h-6 text-gray-600 cursor-pointer',
                        onClick: function () {
                          return c('dark');
                        },
                      })
                  : null,
              }),
            ],
          });
        },
        P = function (e) {
          var t = e.bg;
          (0, a.useRouter)();
          return (0, n.jsxs)('div', {
            className: ''.concat(t, ' px-4 lg:px-0'),
            children: [
              (0, n.jsxs)('div', {
                className:
                  'flex flex-col items-center justify-center py-10 md:py-16',
                children: [
                  (0, n.jsxs)('h3', {
                    className:
                      'text-center font-medium text-primary dark:text-white',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text-[#1a5cff]',
                        children: 'Subscribe',
                      }),
                      ' to our Weekly Newsletter',
                    ],
                  }),
                  (0, n.jsx)(F, {
                    Icon: j,
                    animation: '',
                    p: 'py-3 px-4',
                    focusAnimation: 'px-6',
                    width: 'w-[15rem] md:w-[17rem]',
                    placeholder: 'Search',
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className:
                  'max-w-4xl py-10 md:py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'py-2 space-y-3 md:space-y-4',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'text-xl font-medium text-primary dark:text-white py-4',
                        children: 'Lazy dev',
                      }),
                      (0, n.jsx)(v.default, {
                        href: '/docs/guide/introduction/#about-lazydev',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Lazy.dev haqida',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        href: '/docs/guide/introduction/#why-lazydev',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Nima uchun Lazy.dev?',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        href: '/docs/guide/introduction/#faq',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'FAQ',
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'py-2 space-y-4',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'text-xl font-medium text-primary dark:text-white py-4',
                        children: 'Resurslar',
                      }),
                      (0, n.jsx)(v.default, {
                        href: 'docs/components',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Dakumintatsiya',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        href: 'https://github/AnvarovM/lazydev',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'GitHUb',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        href: '',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Privacy Policy',
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'py-2 space-y-4',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'text-xl font-medium text-primary dark:text-white py-4',
                        children: 'Yordam',
                      }),
                      (0, n.jsx)(v.default, {
                        href: 'https://github/AnvarovM/lazydev',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Issues',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        href: '/docs/guide/introduction/#faq',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'FAQ',
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'py-2 space-y-4',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'text-xl font-medium text-primary dark:text-white py-4',
                        children: 'Jamoa',
                      }),
                      (0, n.jsx)(v.default, {
                        className: 'list-none',
                        href: '/docs/components/avatar',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Website',
                        }),
                      }),
                      (0, n.jsx)(v.default, {
                        target: '_blank',
                        href: '',
                        children: (0, n.jsx)('p', {
                          className: 'link text-sm',
                          children: 'Telegram',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className:
                  'max-w-5xl mx-auto flex flex-col md:flex-row space-y-1 md:space-y-0 items-start md:items-center md:justify-between py-5 md:py-10',
                children: [
                  (0, n.jsx)('p', {
                    className: 'text-secondary text-sm',
                    children: 'Copyright \xa9 2022 Lazydev',
                  }),
                  (0, n.jsxs)('p', {
                    className: 'text-secondary text-sm',
                    children: [
                      'Created By',
                      ' ',
                      (0, n.jsx)('a', {
                        target: '_blank',
                        className: 'font-medium hover:text-white',
                        href: 'https://anvarovm.vercel.app',
                        rel: 'noreferrer',
                        children: 'Akzmsh',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        L = r(6893),
        C = function (e) {
          var t = e.sidebar,
            r = e.setSidebar,
            o = (0, a.useRouter)();
          return (0, n.jsx)('div', {
            children: (0, n.jsxs)('div', {
              className: 'flex items-center',
              children: [
                (0, n.jsx)(L.cur, {
                  onClick: function () {
                    r(!t);
                  },
                  className: 'block lg:hidden h-5 w-5 mr-4',
                }),
                (0, n.jsxs)('div', {
                  onClick: function () {
                    return o.push('/');
                  },
                  className: 'relative flex items-center group',
                  children: [
                    (0, n.jsx)('img', {
                      className: 'w-10 group-hover:opacity-80',
                      src: '/images/logo.png',
                      alt: 'logo',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, n.jsx)('h3', {
                          className:
                            'font-sora tracking-wide -ml-1 font-semibold text-lg cursor-pointer text-primary dark:text-white group-hover:opacity-80',
                          children: 'Lazydev',
                        }),
                        (0, n.jsx)('p', {
                          className:
                            'absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]',
                          children: '.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        E = r(5434),
        R = function () {
          var e = (0, o.useState)(!0),
            t = e[0],
            r = e[1],
            i = (0, o.useState)(!0),
            c = i[0],
            l = i[1],
            u = (0, o.useState)(!0),
            d = u[0],
            p = u[1],
            h = ((0, a.useRouter)(), (0, s.$G)().t),
            g = [
              {
                title: ''.concat(h('home:kirish')),
                link: '/docs/guide/introduction',
              },
              { title: ''.concat(h('home:boshlash')), link: '/docs/guide' },
            ];
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'hidden lg:inline-flex items-center space-x-3 md:space-x-8',
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative flex items-center space-x-1',
                  children: [
                    (0, n.jsx)('p', {
                      onClick: function () {
                        return r(!t);
                      },
                      className: 'link list-none',
                      children: h('home:xarita'),
                    }),
                    (0, n.jsx)(E.x3N, {
                      className: t
                        ? 'link rotate-0 transition duration-150'
                        : 'link -rotate-180 transition duration-150',
                    }),
                    (0, n.jsx)('ul', {
                      className: t
                        ? 'ul__hover_dropdown invisible'
                        : 'ul__hover_dropdown top-8 opacity-100',
                      children: g.map(function (e, t) {
                        return (0,
                        n.jsx)(v.default, { href: ''.concat(e.link), children: (0, n.jsx)('li', { className: 'link py-1', children: e.title }, t) });
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'relative w-full flex items-center space-x-1',
                  children: [
                    (0, n.jsx)('p', {
                      onClick: function () {
                        return l(!c);
                      },
                      className: 'link',
                      children: h('home:komponentlar'),
                    }),
                    (0, n.jsx)(E.x3N, {
                      className: c
                        ? 'link rotate-0 transition duration-150'
                        : 'link -rotate-180 transition duration-150',
                    }),
                    (0, n.jsx)('ul', {
                      className: c
                        ? 'ul__hover_dropdown invisible'
                        : 'ul__hover_dropdown top-8 opacity-100',
                      children: m.O.map(function (e, t) {
                        return (0,
                        n.jsx)(v.default, { href: ''.concat(e.path), children: (0, n.jsx)('li', { className: 'link py-1', children: e.title }, t) });
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'relative flex items-center space-x-1',
                  children: [
                    (0, n.jsx)('p', {
                      onClick: function () {
                        return p(!d);
                      },
                      className: 'link cursor-text',
                      children: h('home:ecosystem'),
                    }),
                    (0, n.jsx)(E.x3N, {
                      className: d
                        ? 'link rotate-0 transition duration-150'
                        : 'link -rotate-180 transition duration-150',
                    }),
                    (0, n.jsx)('ul', {
                      className: d
                        ? 'ul__hover_dropdown invisible'
                        : 'ul__hover_dropdown top-8 opacity-100',
                      children: [
                        {
                          title: 'Github',
                          link: 'https://github.com/AnvarovM/Lazydev',
                        },
                        { title: 'Telegram', link: 'https://t.me/akzmsh' },
                      ].map(function (e, t) {
                        return (0,
                        n.jsx)(v.default, { href: e.link, target: '_blank', rel: 'noreferrer', children: (0, n.jsx)('li', { className: 'link py-1', rel: 'noreferrer', children: e.title }) }, t);
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(f.evw, { className: 'link' }),
              ],
            }),
          });
        },
        z = r(7516),
        _ = function () {
          var e = (0, o.useState)(''),
            t = (e[0], e[1]),
            r = (0, o.useState)(!1),
            i = r[0],
            a = r[1];
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'flex items-center space-x-3',
              children: [
                (0, n.jsxs)('div', {
                  className: i
                    ? 'flex items-center space-x-3'
                    : 'hidden items-center space-x-3 lg:inline-flex',
                  children: [
                    (0, n.jsx)('a', { className: 'link', children: 'v1.x' }),
                    (0, n.jsx)(f.rFR, {
                      title: 'GitHub | Give a star',
                      className:
                        'link text-primary dark:text-gray-400 cursor-pointer',
                    }),
                    (0, n.jsx)(f.iEj, {
                      title: 'Telegram',
                      className:
                        'link text-primary dark:text-gray-400 cursor-pointer',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className:
                    'relative flex items-center bg-gray-200 dark:bg-[#16181A] rounded-lg px-3 py-2',
                  children: [
                    (0, n.jsx)('input', {
                      className: i
                        ? 'hidden lg:block bg-transparent outline-none text-primary flex-grow font-normal text-sm'
                        : 'block bg-transparent outline-none text-primary flex-grow font-normal text-sm',
                      type: 'text',
                      placeholder: 'Lazy Search',
                    }),
                    (0, n.jsx)(z.Goc, {
                      onClick: function () {
                        return a(!i);
                      },
                      onChange: function (e) {
                        return t(e.target.value);
                      },
                      className: 'link text-lg dark:text-white cursor-auto',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        I = function () {
          var e = (0, a.useRouter)();
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'px-4 md:px-0',
              children: [
                (0, n.jsx)('h4', {
                  className:
                    'text-xl font-medium text-primary dark:text-white text-center',
                  children: 'Foydalanishingiz mumkin',
                }),
                (0, n.jsxs)('div', {
                  className: 'flex justify-center my-8',
                  children: [
                    (0, n.jsx)(G, { src: '/images/react.png' }),
                    (0, n.jsx)('span', {
                      className: 'text-3xl mx-5 my-auto',
                      children: (0, n.jsx)(w, {}),
                    }),
                    (0, n.jsx)(G, { src: '/images/tailwind.svg' }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex flex-col justify-center',
                  children: [
                    (0, n.jsx)('p', {
                      className:
                        'text-center py-4 text-primary dark:text-secondary text-sm',
                      children:
                        'Bu men oldinga siljishim va rivojlanishim uchun maxsus ishlab chiqish vaqtini tolashga yordam beradi .',
                    }),
                    (0, n.jsx)('button', {
                      onClick: function () {
                        return e.push('/docs/guide');
                      },
                      className: 'btn dark__btn',
                      children: 'Hoziroq boshlang',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        T = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'my-10',
              children: [
                (0, n.jsx)('h3', {
                  className:
                    'text-xl font-medium text-primary dark:text-white text-center',
                  children: 'Foydalanilgan elementlar',
                }),
                (0, n.jsx)('div', {
                  className: 'flex overflow-x-scroll my-10 scrollbar-hide',
                  children: (0, n.jsxs)('div', {
                    className:
                      'flex flex-nowrap justify-center mx-auto my-8 space-x-4 md:space-x-8 cursor-auto',
                    children: [
                      (0, n.jsx)(G, {
                        src: '/images/tools/javascript.png',
                        title: 'Javascript',
                        alt: 'Javascript logo',
                      }),
                      (0, n.jsx)(G, {
                        src: '/images/react.png',
                        title: 'React js',
                        alt: 'React logo',
                      }),
                      (0, n.jsx)(G, {
                        src: '/images/tools/next.svg',
                        isHidden: 'block dark:hidden',
                        title: 'Next js',
                        alt: 'Next light logo',
                      }),
                      (0, n.jsx)(G, {
                        src: '/images/tools/next-dark.svg',
                        isHidden: 'hidden dark:block',
                        title: 'Next js',
                        alt: 'Next dark logo',
                      }),
                      (0, n.jsx)(G, {
                        src: '/images/tailwind.svg',
                        title: 'Tailwind css',
                        alt: 'Tailwind logo',
                      }),
                      (0, n.jsx)(G, {
                        src: '/images/tools/react-icons.svg',
                        title: 'React Icons',
                        alt: 'React icons logo',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        M = r(2679),
        A = function () {
          var e = (0, a.useRouter)();
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 my-10 md:py-16 px-4 lg:px-0',
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative mx-auto md:mx-0',
                  children: [
                    (0, n.jsxs)('div', {
                      className:
                        'absolute z-10 -top-16 md:-top-28 -left-0 md:-left-20',
                      children: [
                        (0, n.jsx)(M.LazyLoadImage, {
                          className: 'block dark:hidden w-[250px] md:w-[350px]',
                          effect: 'blur',
                          src: '/images/premium/premium-before-light.svg',
                          alt: 'premium them before image',
                        }),
                        (0, n.jsx)(M.LazyLoadImage, {
                          className: 'hidden dark:block w-[250px] md:w-[350px]',
                          effect: 'blur',
                          src: '/images/premium/premium-before-dark.svg',
                          alt: 'premium them before image',
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'relative z-20 hover:-translate-y-3 duration-200',
                      children: [
                        (0, n.jsx)(M.LazyLoadImage, {
                          className:
                            'block dark:hidden w-[250px] md:w-[350px] rounded-xl',
                          effect: 'blur',
                          src: '/images/premium/light-premium.webp',
                          alt: 'premium them image',
                        }),
                        (0, n.jsx)(M.LazyLoadImage, {
                          className:
                            'hidden dark:block w-[250px] md:w-[350px] rounded-xl',
                          effect: 'blur',
                          src: '/images/premium/dark-premium.jpg',
                          alt: 'premium them image',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'space-y-3 md:space-y-4',
                  children: [
                    (0, n.jsx)('h3', {
                      className: 'heading font-medium',
                      children: 'Vuesax Premium Themes',
                    }),
                    (0, n.jsx)('p', {
                      className: 'paragraph text-sm',
                      children:
                        'Create great projects with a higher level saving time and work with the themes created with vuesax',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'space-x-2',
                      children: [
                        (0, n.jsx)('button', {
                          onClick: function () {
                            return e.push('/premium/premium-themes');
                          },
                          className: 'btn btn__primary',
                          children: 'See more',
                        }),
                        (0, n.jsx)('button', {
                          onClick: function () {
                            return e.push('/premium/premium-themes');
                          },
                          className:
                            'btn bg-white dark:bg-darkSecondary hover:shadow-2xl',
                          children: 'Live demo',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        D = function () {
          (0, a.useRouter)();
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-20',
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex justify-center py-10 md:py-0',
                  children: [
                    (0, n.jsx)(M.LazyLoadImage, {
                      className:
                        'block dark:hidden w-[15rem] md:w-[30rem] h-auto',
                      effect: 'blur',
                      src: '/images/illustration-white-4.svg',
                      alt: 'illustration light',
                    }),
                    (0, n.jsx)(M.LazyLoadImage, {
                      className:
                        'hidden dark:block w-[15rem] md:w-[30rem] h-auto',
                      effect: 'blur',
                      height: 500,
                      src: '/images/illustration-dark-4.svg',
                      alt: 'illustration light',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'space-y-5',
                  children: [
                    (0, n.jsx)('h3', {
                      className: 'heading',
                      children:
                        'Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish oson',
                    }),
                    (0, n.jsx)('p', {
                      className: 'paragraph',
                      children:
                        'Vuesax yordamida siz bir necha qator kodli va ajoyib moslashtirilgan har qanday komponentdan foydalanishingiz mumkin, va eng muhimi, foydalanish va tushunish juda oson',
                    }),
                    (0, n.jsx)('button', {
                      className: 'btn btn__primary',
                      children: 'Komponentlar',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        B = function () {
          (0, a.useRouter)();
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'container mx-auto grid grid-cols-1 md:grid-cols-2 items-center',
              children: [
                (0, n.jsxs)('div', {
                  className: 'space-y-5',
                  children: [
                    (0, n.jsx)('h3', {
                      className: 'heading',
                      children:
                        'Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish oson',
                    }),
                    (0, n.jsx)('p', {
                      className: 'paragraph',
                      children:
                        'Vuesax yordamida siz bir necha qator kodli va ajoyib moslashtirilgan har qanday komponentdan foydalanishingiz mumkin, va eng muhimi, foydalanish va tushunish juda oson',
                    }),
                    (0, n.jsx)('button', {
                      className: 'btn btn__primary',
                      children: 'Komponentlar',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex justify-center py-10 md:py-0',
                  children: [
                    (0, n.jsx)(M.LazyLoadImage, {
                      className:
                        'block dark:hidden w-[15rem] md:w-[30rem] h-auto',
                      effect: 'blur',
                      src: '/images/illustration-white-3.svg',
                      alt: 'illustration light',
                    }),
                    (0, n.jsx)(M.LazyLoadImage, {
                      className:
                        'hidden dark:block w-[23rem] md:w-[30rem] h-auto',
                      effect: 'blur',
                      height: 500,
                      src: '/images/illustration-dark-3.svg',
                      alt: 'illustration light',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        F =
          (r(7207),
          r(2481),
          r(1996),
          r(6016),
          r(7912),
          function (e) {
            var t = e.Icon,
              r = e.p,
              o = e.focusAnimation,
              i = e.width,
              a = e.placeholder,
              s = e.animation;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)('div', {
                className: ''.concat(
                  s,
                  ' m-5 w-fit flex items-center bg-gray-200 dark:bg-darkSecondary justify-between shadow-xl rounded-lg'
                ),
                children: [
                  (0, n.jsx)('input', {
                    className: ''
                      .concat(r, ' ')
                      .concat(
                        i,
                        ' text-xs bg-transparent flex-grow outline-none focus:'
                      )
                      .concat(o, ' duration-300'),
                    type: 'text',
                    placeholder: a,
                  }),
                  (0, n.jsx)(t, {
                    className:
                      'text-3xl text-white p-2 rounded-xl bg-[#1a5cff] hover:bg-[#0081c2] cursor-pointer duration-200',
                  }),
                ],
              }),
            });
          }),
        V = function (e) {
          var t = e.Icon,
            r = e.bg,
            o = e.iconColor;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)('button', {
              className: 'btn p-2 '
                .concat(o, ' ')
                .concat(r, ' hover:drop-shadow-2xl hover:-translate-y-1'),
              children: (0, n.jsx)(t, { className: 'text-xl' }),
            }),
          });
        },
        $ = function (e) {
          var t = e.src,
            r = e.rounded;
          return (0, n.jsx)('div', {
            className: 'animation1',
            children: (0, n.jsx)('span', {
              children: (0, n.jsx)(M.LazyLoadImage, {
                className:
                  'bg-gray-200 cursor-pointer dark:bg-pink-200 '.concat(r),
                effect: 'blur',
                objectFit: 'contain',
                width: 50,
                height: 50,
                src: t,
                alt: 'avatar 1',
              }),
            }),
          });
        },
        H = function () {
          var e = (0, o.useState)(!0),
            t = e[0],
            r = e[1];
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              onClick: function () {
                return r(!t);
              },
              className: 'animation2 select-none',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'p-2 bg-white dark:bg-darkSecondary shadow-2xl rounded-xl flex items-center justify-between w-44 cursor-pointer',
                  children: [
                    (0, n.jsx)('small', { children: 'DropDown' }),
                    (0, n.jsx)(E.x3N, {
                      className: t
                        ? 'rotate-180 duration-200'
                        : 'rotate-0 duration-200',
                    }),
                  ],
                }),
                (0, n.jsxs)('ul', {
                  className: t ? 'dropdown__ul opacity-0' : 'dropdown__ul',
                  children: [
                    (0, n.jsx)('li', { children: '\ud83d\ude0d' }),
                    (0, n.jsx)('li', { children: '\ud83d\ude0b' }),
                    (0, n.jsx)('li', { children: '\ud83d\ude21' }),
                    (0, n.jsx)('li', { children: '\ud83d\ude0e' }),
                    (0, n.jsx)('li', { children: '\ud83d\ude2d' }),
                    (0, n.jsx)('li', { children: '\ud83d\ude29' }),
                  ],
                }),
              ],
            }),
          });
        },
        U = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'animation1 h-max p-2 border-2 border-green-400 bg-green-100 rounded-xl flex items-center justify-between hover:drop-shadow-xl',
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, n.jsx)('div', {
                      className:
                        'flex items-center justify-center w-11 h-11 bg-green-500 rounded-2xl',
                      children: (0, n.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-white rounded-xl w-6 h-6',
                        children: (0, n.jsx)('span', {
                          children: (0, n.jsx)(E.vB0, {
                            className: 'text-green-500',
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsx)('div', {
                      children: (0, n.jsx)('p', {
                        className: 'text-primary pl-4',
                        children: 'A success toast',
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(E.FU5, {
                    className: 'text-lg text-primary mr-4 cursor-pointer',
                  }),
                }),
              ],
            }),
          });
        },
        q = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'animation1 flex items-center space-x-4',
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative w-fit hover:scale-105 duration-200',
                  children: [
                    (0, n.jsx)(M.LazyLoadImage, {
                      className:
                        'hidden dark:block w-20 h-20 rounded-3xl hover:scale-110 duration-300',
                      effect: 'blur',
                      src: '/images/foto12.png',
                      alt: 'avatar',
                    }),
                    (0, n.jsx)(M.LazyLoadImage, {
                      className: 'block dark:hidden w-20 h-20 rounded-3xl',
                      effect: 'blur',
                      src: '/images/foto1.png',
                      alt: 'avatar',
                    }),
                    (0, n.jsx)('p', {
                      className:
                        'absolute bottom-2 text-white -right-1 w-5 h-5 flex items-center justify-center p-2 text-xs rounded-2xl bg-[#ff4757]',
                      children: '8',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex flex-col space-y-1',
                  children: [
                    (0, n.jsx)('h5', {
                      className:
                        'text-primary dark:text-white font-medium text-sm',
                      children: 'Segoe cute',
                    }),
                    (0, n.jsx)('small', {
                      className:
                        'text-xs font-lighttext-primary dark:text-gray-400',
                      children: 'Do you want to participate in our initiative?',
                    }),
                    (0, n.jsxs)('span', {
                      className: 'space-x-2',
                      children: [
                        (0, n.jsx)('button', {
                          className:
                            'py-1 px-3 rounded-lg text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5',
                          children: 'Open',
                        }),
                        (0, n.jsx)('button', {
                          className:
                            'py-1 px-3 rounded-lg bg-white shadow-xl dark:bg-primary text-[0.6rem] duration-300 hover:-translate-y-1',
                          children: 'Cancel',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        W = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'animation2 p-5',
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative hover:scale-105 duration-200',
                  children: [
                    (0, n.jsx)(M.LazyLoadImage, {
                      effect: 'blur',
                      className: 'hidden dark:block rounded-r-3xl w-44 h-44',
                      src: '/images/foto13.png',
                      alt: '',
                    }),
                    (0, n.jsx)(M.LazyLoadImage, {
                      effect: 'blur',
                      className: 'block dark:hidden rounded-r-3xl w-44 h-44',
                      src: '/images/foto2.jpg',
                      alt: '',
                    }),
                    (0, n.jsx)(f.ytW, {
                      className:
                        'absolute -top-2 -left-2 h-8 w-8 p-2 rounded-lg flex items-center justify-center bg-white shadow-lg dark:bg-primary text-[#ff4757] text-xl',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex items-center justify-between w-fit',
                  children: [
                    (0, n.jsxs)('div', {
                      children: [
                        (0, n.jsx)('h5', {
                          className:
                            'text-primary dark:text-white font-semibold text-sm',
                          children: 'Lazydev 1.0',
                        }),
                        (0, n.jsx)('p', {
                          className:
                            'text-xs text-primary font-medium dark:text-gray-400',
                          children: 'Copy and paste',
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className:
                        'flex items-center justify-center ml-7 hover:scale-105 duration-200',
                      children: (0, n.jsx)(M.LazyLoadImage, {
                        className: 'z-[3] rounded-full',
                        effect: 'blur',
                        objectFit: 'contain',
                        width: 30,
                        height: 30,
                        src: '/images/foto12.png',
                        alt: 'avatars',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        J = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className:
                'animation2 my-5 p-4 bg-white dark:bg-darkSecondary shadow-xl hover:shadow duration-200 rounded-xl w-fit',
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative hover:scale-105 duration-200',
                  children: [
                    (0, n.jsx)(M.LazyLoadImage, {
                      effect: 'blur',
                      className: 'rounded-xl',
                      width: 160,
                      height: 160,
                      src: '/images/foto3.png',
                      alt: 'card image',
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'absolute -bottom-3 left-4 flex items-center space-x-2',
                      children: [
                        (0, n.jsx)('span', {
                          className:
                            'p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit group duration-200',
                          children: (0, n.jsx)(f.ytW, {
                            className:
                              'text-sm text-red-500 group-hover:text-white',
                          }),
                        }),
                        (0, n.jsxs)('span', {
                          className:
                            'p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit group duration-200 space-x-1',
                          children: [
                            (0, n.jsx)(d.U5Y, {
                              className:
                                'text-sm text-blue-500 group-hover:text-white',
                            }),
                            (0, n.jsx)('small', {
                              className: 'text-blue-500 group-hover:text-white',
                              children: '12',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'pt-3',
                  children: [
                    (0, n.jsx)('h5', {
                      className:
                        'text-primary dark:text-white font-medium text-sm',
                      children: 'Segoe cute',
                    }),
                    (0, n.jsx)('small', {
                      className:
                        'text-xs font-light text-primary dark:text-gray-400',
                      children: 'Do you want to participate?',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        K = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'animation1 group',
              children: [
                (0, n.jsx)('div', {
                  className:
                    'flex items-center justify-center p-4 rounded-xl group-hover:scale-110 duration-200 bg-gray-100 dark:bg-teal-100 mx-auto',
                  children: (0, n.jsx)(M.LazyLoadImage, {
                    src: '/images/react.png',
                    effect: 'blur',
                    width: 70,
                    height: 70,
                    alt: 'Tailwind css',
                  }),
                }),
                (0, n.jsxs)('div', {
                  className: 'py-1',
                  children: [
                    (0, n.jsx)('h5', {
                      className:
                        'text-primary text-center dark:text-white font-medium text-sm',
                      children: 'Segoe cute',
                    }),
                    (0, n.jsx)('small', {
                      className:
                        'text-xs text-center font-light text-primary dark:text-gray-400',
                      children: 'Do you want to participate?',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        G = function (e) {
          var t = e.src,
            r = e.alt,
            o = e.isHidden;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)('div', {
              className: 'square__card  '.concat(o),
              children: (0, n.jsx)(M.LazyLoadImage, {
                src: t,
                effect: 'blur',
                width: 60,
                height: 60,
                property: !0,
                alt: r,
              }),
            }),
          });
        };
    },
    1996: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return a;
        },
      });
      var n = r(5893),
        o = r(7294),
        i = r(6893),
        a =
          (r(4855),
          function (e) {
            var t = e.children,
              r = (0, o.useState)(!0),
              a = r[0],
              s = r[1],
              c = (0, o.useState)(!1);
            c[0], c[1];
            return (0, n.jsxs)('div', {
              className:
                'rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary z-0 text-sm overflow-auto my-5',
              children: [
                (0, n.jsx)('div', {
                  onClick: function () {
                    return s(!a);
                  },
                  className:
                    'flex items-center justify-center py-4 cursor-pointer',
                  children: a
                    ? (0, n.jsxs)('span', {
                        className: 'flex items-center space-x-2',
                        children: [
                          (0, n.jsx)(i.rDJ, {}),
                          ' ',
                          (0, n.jsx)('small', { children: 'Show code' }),
                        ],
                      })
                    : (0, n.jsxs)('span', {
                        className: 'flex items-center space-x-2',
                        children: [
                          (0, n.jsx)(i.rzC, {}),
                          ' ',
                          (0, n.jsx)('small', { children: 'HIde code' }),
                        ],
                      }),
                }),
                (0, n.jsx)('div', {
                  className: a ? 'hidden' : 'p-4 text-primary dark:text-white',
                  children: t,
                }),
              ],
            });
          });
    },
    6016: function (e, t, r) {
      'use strict';
      var n = r(5893),
        o = (r(7294), r(3750));
      t.Z = function (e) {
        var t = e.children,
          r = e.name,
          i = e.paragraph,
          a = e.space;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('div', {
              className: 'flex items-center mt-5 md:mt-10 group',
              children: [
                (0, n.jsx)(o.nvr, {
                  className:
                    'opacity-0 group-hover:opacity-100 group-hover:mx-2 duration-200',
                }),
                (0, n.jsx)('h3', {
                  className: 'py-3 md:py-4 text-lg md:text-2xl font-semibold',
                  children: r,
                }),
              ],
            }),
            (0, n.jsx)('p', {
              className: 'text-xs md:text-sm pl-4 pb-2 md:pb-4',
              children: i,
            }),
            (0, n.jsx)('div', {
              className:
                'rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary py-10 flex justify-center z-0',
              children: (0, n.jsx)('div', {
                className: ''.concat(a),
                children: t,
              }),
            }),
          ],
        });
      };
    },
    7207: function (e, t, r) {
      'use strict';
      var n = r(5893),
        o = r(7294),
        i = r(1649),
        a = r(691);
      t.Z = function (e) {
        var t = e.children,
          r = (0, o.useState)(!0),
          s = r[0],
          c = r[1],
          l = (0, o.useState)(!1),
          u = l[0],
          f = l[1],
          d = function () {
            window.scrollY > 200 ? c(!1) : c(!0);
          };
        return (
          (0, o.useEffect)(function () {
            return (
              window.addEventListener('scroll', d),
              function () {
                window.removeEventListener('scroll', d);
              }
            );
          }, []),
          (0, n.jsxs)('div', {
            className: 'dark:bg-darkPrimary',
            children: [
              (0, n.jsx)('header', {
                className: '',
                children: (0, n.jsx)(a.wp, { sidebar: u, setSidebar: f }),
              }),
              (0, n.jsx)('aside', {
                children: (0, n.jsx)(a.YE, { sidebar: u, setSidebar: f }),
              }),
              (0, n.jsx)('div', { children: t }),
              (0, n.jsx)('div', {
                className: s
                  ? ' fixed bottom-12 right-10 md:right-10 z-30 sm:right-12 text-white hidden'
                  : ' fixed bottom-12 right-10 md:right-10 z-30 sm:right-12 text-white',
                children: (0, n.jsx)('a', {
                  href: '#',
                  children: (0, n.jsx)(i.Vmf, {
                    className:
                      'bg-gray-200 dark:bg-darkSecondary z-40 text-primary dark:text-white hover:text-[#1a5cff] hover:shadow-xl w-10 h-10 p-2 md:p-3 rounded-xl',
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    2481: function (e, t, r) {
      'use strict';
      r.d(t, {
        j: function () {
          return p;
        },
      });
      var n = r(5893),
        o = r(7294),
        i = r(1163),
        a = r(1664),
        s = r(9008),
        c = r(1649),
        l = r(6893),
        u = r(7516),
        f = r(691),
        d = r(4603),
        p = function (e) {
          var t = e.children,
            r = e.name,
            p = e.title,
            h = (e.sidebarLink, (0, o.useState)(!0)),
            g = h[0],
            m = h[1],
            y = (0, i.useRouter)(),
            v = function () {
              window.scrollY > 200 ? m(!1) : m(!0);
            };
          return (
            (0, o.useEffect)(function () {
              return (
                window.addEventListener('scroll', v),
                function () {
                  window.removeEventListener('scroll', v);
                }
              );
            }, []),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(s.default, {
                  children: (0, n.jsx)('title', { children: p }),
                }),
                (0, n.jsxs)('div', {
                  className:
                    'test flex bg-white dark:bg-darkSecondary shadow-lg',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'hidden lg:block',
                      children: (0, n.jsx)('aside', {
                        className:
                          'bg-white dark:bg-darkPrimary fixed z-30 h-screen w-[240px] px-5 pt-[5rem] overflow-y-auto scrollbar-hide',
                        children: (0, n.jsxs)('div', {
                          className: '',
                          children: [
                            (0, n.jsxs)('div', {
                              className: 'py-1',
                              children: [
                                (0, n.jsxs)('div', {
                                  className:
                                    'flex items-center space-x-1 cursor-pointer',
                                  children: [
                                    (0, n.jsx)('h4', {
                                      className:
                                        'font-semibold font-[1rem] text-primary dark:text-white',
                                      children: 'Guide',
                                    }),
                                    (0, n.jsx)(c.hjJ, { className: 'text-sm' }),
                                  ],
                                }),
                                (0, n.jsxs)('ul', {
                                  className: 'p-2',
                                  children: [
                                    (0, n.jsx)(a.default, {
                                      href: '/docs/guide/introduction',
                                      children: (0, n.jsx)('li', {
                                        className: 'sidebar__link',
                                        children: 'Introduction',
                                      }),
                                    }),
                                    (0, n.jsx)(a.default, {
                                      href: '/docs/guide/',
                                      children: (0, n.jsx)('li', {
                                        className: 'sidebar__link',
                                        children: 'Getting started',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'py-1',
                              children: [
                                (0, n.jsxs)('div', {
                                  className:
                                    'flex items-center space-x-1 cursor-pointer',
                                  children: [
                                    (0, n.jsx)('h4', {
                                      className:
                                        'font-semibold font-[1rem] text-primary dark:text-white',
                                      children: 'Theme',
                                    }),
                                    (0, n.jsx)(c.hjJ, { className: 'text-sm' }),
                                  ],
                                }),
                                (0, n.jsx)('ul', {
                                  className: 'p-2',
                                  children: (0, n.jsx)(a.default, {
                                    href: '/docs/theme/',
                                    children: (0, n.jsx)('li', {
                                      className: 'sidebar__link',
                                      children: 'Colors',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'py-1',
                              children: [
                                (0, n.jsxs)('div', {
                                  className:
                                    'flex items-center space-x-1 cursor-pointer',
                                  children: [
                                    (0, n.jsx)('h4', {
                                      className:
                                        'font-semibold font-[1rem] text-primary dark:text-white',
                                      children: 'Components',
                                    }),
                                    (0, n.jsx)(c.hjJ, { className: 'text-sm' }),
                                  ],
                                }),
                                (0, n.jsx)('ul', {
                                  className: 'p-2',
                                  children: d.O.map(function (e) {
                                    return (0,
                                    n.jsx)(a.default, { href: ''.concat(e.path), children: (0, n.jsx)('li', { className: 'sidebar__link', children: e.title }, e.id) });
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(f.pE, {
                      reverse: 'flex-row-reverse',
                      position: 'fixed z-40 bottom-5 right-4',
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'bg-gray-100 dark:bg-darkSecondary absolute w-full pl-0 lg:pl-[240px] duration-300',
                      children: [
                        (0, n.jsx)('div', {
                          className: g
                            ? 'breadcrumbs__div py-5 bg-gray-200 duration-300'
                            : 'breadcrumbs__div py-3 bg-gray-100 dark:bg-darkSecondary shadow-md duration-300',
                          children: (0, n.jsxs)('div', {
                            className: 'relative',
                            children: [
                              (0, n.jsxs)('div', {
                                className:
                                  'max-w-4xl mx-auto px-4 lg:px-0 flex items-center justify-between z-30',
                                children: [
                                  (0, n.jsx)('h3', {
                                    className: g
                                      ? 'heading'
                                      : 'heading text-base font-medium',
                                    children: r,
                                  }),
                                  (0, n.jsxs)('div', {
                                    className:
                                      'flex items-center space-x-2 md:space-x-3',
                                    children: [
                                      (0, n.jsx)(l.vPQ, {
                                        title: 'Edit Page',
                                        className:
                                          'text-lg hover:opacity-75 rounded-lg cursor-pointer',
                                      }),
                                      (0, n.jsx)(l.xqv, {
                                        title: 'View Github Code',
                                        className:
                                          'text-lg hover:opacity-75 rounded-lg cursor-pointer',
                                      }),
                                      (0, n.jsx)(u.xmy, {
                                        title: 'Report a Bug',
                                        className:
                                          'text-lg hover:opacity-75 rounded-lg cursor-pointer',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsx)('div', {
                                className: 'hidden lg:block',
                                children: (0, n.jsx)(u.YiX, {
                                  onClick: function () {
                                    return y.push('/');
                                  },
                                  title: 'Go to Back',
                                  className:
                                    'absolute left-3 top-1/3 text-lg hover:opacity-75 rounded-lg cursor-pointer',
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)('div', {
                          className: 'max-w-4xl mx-auto px-4 lg:px-0 z-10',
                          children: (0, n.jsx)('div', { children: t }),
                        }),
                        (0, n.jsx)(f.$_, {
                          bg: 'bg-gray-100 dark:bg-darkSecondary',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    7912: function (e, t, r) {
      'use strict';
      r.d(t, {
        $: function () {
          return a;
        },
      });
      var n = r(5893),
        o = (r(7294), r(1664)),
        i = r(1649),
        a = function (e) {
          var t = e.leftPath,
            r = e.rightPath;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'relative top-1/2 flex items-center justify-between',
              children: [
                (0, n.jsx)(o.default, {
                  href: t,
                  children: (0, n.jsx)(i.u1R, {
                    className:
                      'fixed top-1/2 left-0 lg:left-[235px] cursor-pointer text-[2.5rem] p-3 bg-gray-200 dark:bg-darkPrimary rounded-r-lg',
                  }),
                }),
                (0, n.jsx)(o.default, {
                  href: r,
                  children: (0, n.jsx)(i.hjJ, {
                    className:
                      'fixed top-1/2 right-0 text-[2.5rem] cursor-pointer p-3 bg-gray-200 dark:bg-darkPrimary rounded-l-lg',
                  }),
                }),
              ],
            }),
          });
        };
    },
    4603: function (e, t, r) {
      'use strict';
      r.d(t, {
        O: function () {
          return n;
        },
      });
      var n = [
        { id: 1, title: 'Button', path: '/docs/components/button' },
        { id: 2, title: 'Alert', path: '/docs/components/alert' },
        { id: 3, title: 'Loading', path: '/docs/components/loading' },
        { id: 4, title: 'Input', path: '/docs/components/input' },
        { id: 5, title: 'Select', path: '/docs/components/select' },
        { id: 6, title: 'Avatar', path: '/docs/components/avatar' },
        { id: 7, title: 'Tooltip', path: '/docs/components/tooltip' },
        { id: 8, title: 'Dialog', path: '/docs/components/dialog' },
        { id: 9, title: 'Pagination', path: '/docs/components/pagination' },
        { id: 10, title: 'Navbar', path: '/docs/components/navbar' },
        { id: 11, title: 'Sidebar', path: '/docs/components/sidebar' },
        { id: 12, title: 'Toast', path: '/docs/components/toast' },
        { id: 13, title: 'Card', path: '/docs/components/card' },
        { id: 13, title: 'Tag Input', path: '/docs/components/tag-input' },
      ];
    },
    9749: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          s(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(r)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }
      t.default = function (e) {
        var t = e.src,
          r = e.sizes,
          n = e.unoptimized,
          s = void 0 !== n && n,
          c = e.priority,
          l = void 0 !== c && c,
          g = e.loading,
          m = e.lazyRoot,
          j = void 0 === m ? null : m,
          L = e.lazyBoundary,
          C = void 0 === L ? '200px' : L,
          E = e.className,
          R = e.quality,
          z = e.width,
          _ = e.height,
          I = e.style,
          T = e.objectFit,
          M = e.objectPosition,
          A = e.onLoadingComplete,
          D = e.loader,
          B = void 0 === D ? S : D,
          F = e.placeholder,
          V = void 0 === F ? 'empty' : F,
          $ = e.blurDataURL,
          H = v(e, [
            'src',
            'sizes',
            'unoptimized',
            'priority',
            'loading',
            'lazyRoot',
            'lazyBoundary',
            'className',
            'quality',
            'width',
            'height',
            'style',
            'objectFit',
            'objectPosition',
            'onLoadingComplete',
            'loader',
            'placeholder',
            'blurDataURL',
          ]),
          U = u.useContext(h.ImageConfigContext),
          q = u.useMemo(
            function () {
              var e = b || U || d.imageConfigDefault,
                t = a(e.deviceSizes)
                  .concat(a(e.imageSizes))
                  .sort(function (e, t) {
                    return e - t;
                  }),
                r = e.deviceSizes.sort(function (e, t) {
                  return e - t;
                });
              return y({}, e, { allSizes: t, deviceSizes: r });
            },
            [U]
          ),
          W = H,
          J = r ? 'responsive' : 'intrinsic';
        'layout' in W && (W.layout && (J = W.layout), delete W.layout);
        var K = '';
        if (
          (function (e) {
            return (
              'object' === typeof e &&
              (k(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(t)
        ) {
          var G = k(t) ? t.default : t;
          if (!G.src)
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                JSON.stringify(G)
              )
            );
          if (
            (($ = $ || G.blurDataURL),
            (K = G.src),
            (!J || 'fill' !== J) &&
              ((_ = _ || G.height), (z = z || G.width), !G.height || !G.width))
          )
            throw new Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                JSON.stringify(G)
              )
            );
        }
        t = 'string' === typeof t ? t : K;
        var Y = N(z),
          Z = N(_),
          Q = N(R),
          X = !l && ('lazy' === g || 'undefined' === typeof g);
        (t.startsWith('data:') || t.startsWith('blob:')) &&
          ((s = !0), (X = !1));
        x.has(t) && (X = !1);
        var ee,
          te = i(
            p.useIntersection({ rootRef: j, rootMargin: C, disabled: !X }),
            2
          ),
          re = te[0],
          ne = te[1],
          oe = !X || ne,
          ie = {
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          ae = {
            boxSizing: 'border-box',
            display: 'block',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          se = !1,
          ce = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit: T,
            objectPosition: M,
          };
        0;
        0;
        var le = Object.assign(
            {},
            I,
            'raw' === J ? { aspectRatio: ''.concat(Y, ' / ').concat(Z) } : ce
          ),
          ue =
            'blur' === V
              ? {
                  filter: 'blur(20px)',
                  backgroundSize: T || 'cover',
                  backgroundImage: 'url("'.concat($, '")'),
                  backgroundPosition: M || '0% 0%',
                }
              : {};
        if ('fill' === J)
          (ie.display = 'block'),
            (ie.position = 'absolute'),
            (ie.top = 0),
            (ie.left = 0),
            (ie.bottom = 0),
            (ie.right = 0);
        else if ('undefined' !== typeof Y && 'undefined' !== typeof Z) {
          var fe = Z / Y,
            de = isNaN(fe) ? '100%' : ''.concat(100 * fe, '%');
          'responsive' === J
            ? ((ie.display = 'block'),
              (ie.position = 'relative'),
              (se = !0),
              (ae.paddingTop = de))
            : 'intrinsic' === J
            ? ((ie.display = 'inline-block'),
              (ie.position = 'relative'),
              (ie.maxWidth = '100%'),
              (se = !0),
              (ae.maxWidth = '100%'),
              (ee =
                'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27'
                  .concat(Y, '%27%20height=%27')
                  .concat(Z, '%27/%3e')))
            : 'fixed' === J &&
              ((ie.display = 'inline-block'),
              (ie.position = 'relative'),
              (ie.width = Y),
              (ie.height = Z));
        } else 0;
        var pe = { src: w, srcSet: void 0, sizes: void 0 };
        oe &&
          (pe = O({
            config: q,
            src: t,
            unoptimized: s,
            layout: J,
            width: Y,
            quality: Q,
            sizes: r,
            loader: B,
          }));
        var he = t;
        0;
        var ge,
          me = 'imagesrcset',
          ye = 'imagesizes';
        (me = 'imageSrcSet'), (ye = 'imageSizes');
        var ve = (o((ge = {}), me, pe.srcSet), o(ge, ye, pe.sizes), ge),
          be = u.default.useLayoutEffect,
          xe = u.useRef(A),
          we = u.useRef(null);
        u.useEffect(
          function () {
            xe.current = A;
          },
          [A]
        ),
          be(
            function () {
              re(we.current);
            },
            [re]
          ),
          u.useEffect(
            function () {
              !(function (e, t, r, n, o) {
                var i = function () {
                  var r = e.current;
                  r &&
                    r.src !== w &&
                    ('decode' in r ? r.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          e.current &&
                          (x.add(t),
                          'blur' === n &&
                            ((r.style.filter = ''),
                            (r.style.backgroundSize = ''),
                            (r.style.backgroundImage = ''),
                            (r.style.backgroundPosition = '')),
                          o.current)
                        ) {
                          var i = r.naturalWidth,
                            a = r.naturalHeight;
                          o.current({ naturalWidth: i, naturalHeight: a });
                        }
                      });
                };
                e.current &&
                  (e.current.complete ? i() : (e.current.onload = i));
              })(we, he, 0, V, xe);
            },
            [he, J, V, oe]
          );
        var je = y(
          {
            isLazy: X,
            imgAttributes: pe,
            heightInt: Z,
            widthInt: Y,
            qualityInt: Q,
            layout: J,
            className: E,
            imgStyle: le,
            blurStyle: ue,
            imgRef: we,
            loading: g,
            config: q,
            unoptimized: s,
            placeholder: V,
            loader: B,
            srcString: he,
          },
          W
        );
        return u.default.createElement(
          u.default.Fragment,
          null,
          'raw' === J
            ? u.default.createElement(P, Object.assign({}, je))
            : u.default.createElement(
                'span',
                { style: ie },
                se
                  ? u.default.createElement(
                      'span',
                      { style: ae },
                      ee
                        ? u.default.createElement('img', {
                            style: {
                              display: 'block',
                              maxWidth: '100%',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            },
                            alt: '',
                            'aria-hidden': !0,
                            src: ee,
                          })
                        : null
                    )
                  : null,
                u.default.createElement(P, Object.assign({}, je))
              ),
          l
            ? u.default.createElement(
                f.default,
                null,
                u.default.createElement(
                  'link',
                  Object.assign(
                    {
                      key: '__nimg-' + pe.src + pe.srcSet + pe.sizes,
                      rel: 'preload',
                      as: 'image',
                      href: pe.srcSet ? void 0 : pe.src,
                    },
                    ve
                  )
                )
              )
            : null
        );
      };
      var c,
        l,
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(7294)),
        f = (c = r(3121)) && c.__esModule ? c : { default: c },
        d = r(139),
        p = r(9246),
        h = r(8730),
        g = (r(670), r(2700));
      function m(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function y(e) {
        for (
          var t = arguments,
            r = function (r) {
              var n = null != t[r] ? t[r] : {},
                o = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                o.forEach(function (t) {
                  m(e, t, n[t]);
                });
            },
            n = 1;
          n < arguments.length;
          n++
        )
          r(n);
        return e;
      }
      function v(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        experimentalLayoutRaw: !1,
      };
      var b = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          experimentalLayoutRaw: !1,
        },
        x = new Set(),
        w =
          (new Map(),
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
      var j = new Map([
        [
          'default',
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality;
            0;
            if (r.endsWith('.svg') && !t.dangerouslyAllowSVG) return r;
            return ''
              .concat(g.normalizePathTrailingSlash(t.path), '?url=')
              .concat(encodeURIComponent(r), '&w=')
              .concat(n, '&q=')
              .concat(o || 75);
          },
        ],
        [
          'imgix',
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i = new URL(''.concat(t.path).concat(L(r))),
              a = i.searchParams;
            a.set('auto', a.get('auto') || 'format'),
              a.set('fit', a.get('fit') || 'max'),
              a.set('w', a.get('w') || n.toString()),
              o && a.set('q', o.toString());
            return i.href;
          },
        ],
        [
          'cloudinary',
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i =
                ['f_auto', 'c_limit', 'w_' + n, 'q_' + (o || 'auto')].join(
                  ','
                ) + '/';
            return ''.concat(t.path).concat(i).concat(L(r));
          },
        ],
        [
          'akamai',
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width;
            return ''.concat(t.path).concat(L(r), '?imwidth=').concat(n);
          },
        ],
        [
          'custom',
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
          },
        ],
      ]);
      function k(e) {
        return void 0 !== e.default;
      }
      function O(e) {
        var t = e.config,
          r = e.src,
          n = e.unoptimized,
          o = e.layout,
          i = e.width,
          s = e.quality,
          c = e.sizes,
          l = e.loader;
        if (n) return { src: r, srcSet: void 0, sizes: void 0 };
        var u = (function (e, t, r, n) {
            var o = e.deviceSizes,
              i = e.allSizes;
            if (n && ('fill' === r || 'responsive' === r || 'raw' === r)) {
              for (var s, c = /(^|\s)(1?\d?\d)vw/g, l = []; (s = c.exec(n)); s)
                l.push(parseInt(s[2]));
              if (l.length) {
                var u,
                  f = 0.01 * (u = Math).min.apply(u, a(l));
                return {
                  widths: i.filter(function (e) {
                    return e >= o[0] * f;
                  }),
                  kind: 'w',
                };
              }
              return { widths: i, kind: 'w' };
            }
            return 'number' !== typeof t || 'fill' === r || 'responsive' === r
              ? { widths: o, kind: 'w' }
              : {
                  widths: a(
                    new Set(
                      [t, 2 * t].map(function (e) {
                        return (
                          i.find(function (t) {
                            return t >= e;
                          }) || i[i.length - 1]
                        );
                      })
                    )
                  ),
                  kind: 'x',
                };
          })(t, i, o, c),
          f = u.widths,
          d = u.kind,
          p = f.length - 1;
        return {
          sizes: c || 'w' !== d ? c : '100vw',
          srcSet: f
            .map(function (e, n) {
              return ''
                .concat(l({ config: t, src: r, quality: s, width: e }), ' ')
                .concat('w' === d ? e : n + 1)
                .concat(d);
            })
            .join(', '),
          src: l({ config: t, src: r, quality: s, width: f[p] }),
        };
      }
      function N(e) {
        return 'number' === typeof e
          ? e
          : 'string' === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function S(e) {
        var t,
          r =
            (null === (t = e.config) || void 0 === t ? void 0 : t.loader) ||
            'default',
          n = j.get(r);
        if (n) return n(e);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(', '), '. Received: ')
            .concat(r)
        );
      }
      var P = function (e) {
        var t = e.imgAttributes,
          r = e.heightInt,
          n = e.widthInt,
          o = e.qualityInt,
          i = e.layout,
          a = e.className,
          s = e.imgStyle,
          c = e.blurStyle,
          l = e.isLazy,
          f = e.imgRef,
          d = e.placeholder,
          p = e.loading,
          h = e.sizes,
          g = e.srcString,
          m = e.config,
          b = e.unoptimized,
          x = e.loader,
          w = v(e, [
            'imgAttributes',
            'heightInt',
            'widthInt',
            'qualityInt',
            'layout',
            'className',
            'imgStyle',
            'blurStyle',
            'isLazy',
            'imgRef',
            'placeholder',
            'loading',
            'sizes',
            'srcString',
            'config',
            'unoptimized',
            'loader',
          ]);
        return u.default.createElement(
          u.default.Fragment,
          null,
          u.default.createElement(
            'img',
            Object.assign(
              {},
              w,
              t,
              'raw' !== i || h ? {} : { height: r, width: n },
              {
                decoding: 'async',
                'data-nimg': i,
                className: a,
                ref: f,
                style: y({}, s, c),
              }
            )
          ),
          (l || 'blur' === d) &&
            u.default.createElement(
              'noscript',
              null,
              u.default.createElement(
                'img',
                Object.assign(
                  {},
                  w,
                  O({
                    config: m,
                    src: g,
                    unoptimized: b,
                    layout: i,
                    width: n,
                    quality: o,
                    sizes: h,
                    loader: x,
                  }),
                  'raw' !== i || h ? {} : { height: r, width: n },
                  {
                    decoding: 'async',
                    'data-nimg': i,
                    style: s,
                    className: a,
                    loading: p || 'lazy',
                  }
                )
              )
            )
        );
      };
      function L(e) {
        return '/' === e[0] ? e.slice(1) : e;
      }
    },
    1551: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      t.default = void 0;
      var i,
        a = (i = r(7294)) && i.__esModule ? i : { default: i },
        s = r(1003),
        c = r(880),
        l = r(9246);
      var u = {};
      function f(e, t, r, n) {
        if (e && s.isLocalURL(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale;
          u[t + '%' + r + (o ? '%' + o : '')] = !0;
        }
      }
      var d = function (e) {
        var t,
          r = !1 !== e.prefetch,
          n = c.useRouter(),
          i = a.default.useMemo(
            function () {
              var t = o(s.resolveHref(n, e.href, !0), 2),
                r = t[0],
                i = t[1];
              return { href: r, as: e.as ? s.resolveHref(n, e.as) : i || r };
            },
            [n, e.href, e.as]
          ),
          d = i.href,
          p = i.as,
          h = e.children,
          g = e.replace,
          m = e.shallow,
          y = e.scroll,
          v = e.locale;
        'string' === typeof h && (h = a.default.createElement('a', null, h));
        var b =
            (t = a.default.Children.only(h)) && 'object' === typeof t && t.ref,
          x = o(l.useIntersection({ rootMargin: '200px' }), 2),
          w = x[0],
          j = x[1],
          k = a.default.useCallback(
            function (e) {
              w(e),
                b &&
                  ('function' === typeof b
                    ? b(e)
                    : 'object' === typeof b && (b.current = e));
            },
            [b, w]
          );
        a.default.useEffect(
          function () {
            var e = j && r && s.isLocalURL(d),
              t = 'undefined' !== typeof v ? v : n && n.locale,
              o = u[d + '%' + p + (t ? '%' + t : '')];
            e && !o && f(n, d, p, { locale: t });
          },
          [p, d, j, v, r, n]
        );
        var O = {
          ref: k,
          onClick: function (e) {
            t.props &&
              'function' === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, i, a, c) {
                  ('A' !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(r))) &&
                    (e.preventDefault(),
                    t[o ? 'replace' : 'push'](r, n, {
                      shallow: i,
                      locale: c,
                      scroll: a,
                    }));
                })(e, n, d, p, g, m, y, v);
          },
          onMouseEnter: function (e) {
            t.props &&
              'function' === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              s.isLocalURL(d) && f(n, d, p, { priority: !0 });
          },
        };
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var N = 'undefined' !== typeof v ? v : n && n.locale,
            S =
              n &&
              n.isLocaleDomain &&
              s.getDomainLocale(p, N, n && n.locales, n && n.domainLocales);
          O.href = S || s.addBasePath(s.addLocale(p, N, n && n.defaultLocale));
        }
        return a.default.cloneElement(t, O);
      };
      t.default = d;
    },
    9246: function (e, t, r) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            n = e.disabled || !s,
            u = i.useRef(),
            f = o(i.useState(!1), 2),
            d = f[0],
            p = f[1],
            h = o(i.useState(t ? t.current : null), 2),
            g = h[0],
            m = h[1],
            y = i.useCallback(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t,
                              r = {
                                root: e.root || null,
                                margin: e.rootMargin || '',
                              },
                              n = l.find(function (e) {
                                return (
                                  e.root === r.root && e.margin === r.margin
                                );
                              });
                            n ? (t = c.get(n)) : ((t = c.get(r)), l.push(r));
                            if (t) return t;
                            var o = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              c.set(
                                r,
                                (t = { id: r, observer: i, elements: o })
                              ),
                              t
                            );
                          })(r),
                          o = n.id,
                          i = n.observer,
                          a = n.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                              i.disconnect(), c.delete(o);
                              var t = l.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && l.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && p(e);
                        },
                        { root: g, rootMargin: r }
                      )));
              },
              [n, g, r, d]
            );
          return (
            i.useEffect(
              function () {
                if (!s && !d) {
                  var e = a.requestIdleCallback(function () {
                    return p(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [d]
            ),
            i.useEffect(
              function () {
                t && m(t.current);
              },
              [t]
            ),
            [y, d]
          );
        });
      var i = r(7294),
        a = r(4686),
        s = 'undefined' !== typeof IntersectionObserver;
      var c = new Map(),
        l = [];
    },
    3406: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(5893),
        o = (r(7294), r(3625)),
        i = r(2010),
        a = r(7207),
        s = r(9008),
        c = function () {
          return (0, n.jsxs)(s.default, {
            children: [
              (0, n.jsx)('meta', {
                content: 'width=device-width, initial-scale=1, minimum-scale=1',
                name: 'viewport',
              }),
              (0, n.jsx)('meta', {
                content: 'Chrome, Firefox, Opera, Safari, IE 11',
                name: 'description',
              }),
              (0, n.jsx)('title', {
                children: 'Lazydev - Framework Components - React.js',
              }),
              (0, n.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
              (0, n.jsx)('link', {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
              }),
              (0, n.jsx)('link', {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
              }),
              (0, n.jsx)('link', {
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
                rel: 'stylesheet',
              }),
              (0, n.jsx)('link', {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
              }),
              (0, n.jsx)('link', {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
              }),
              (0, n.jsx)('link', {
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500&display=swap',
                rel: 'stylesheet',
              }),
            ],
          });
        };
      r(6946), r(6774);
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              l(e, t, r[t]);
            });
        }
        return e;
      }
      var f = (0, o.Jc)(function (e) {
        var t = e.Component,
          r = e.pageProps;
        return (0,
        n.jsx)(i.f, { enableSystem: !0, attribute: 'class', children: (0, n.jsxs)(a.Z, { children: [(0, n.jsx)(c, {}), (0, n.jsx)(t, u({}, r))] }) });
      });
    },
    6946: function () {},
    6774: function () {},
    9008: function (e, t, r) {
      e.exports = r(3121);
    },
    5675: function (e, t, r) {
      e.exports = r(9749);
    },
    1664: function (e, t, r) {
      e.exports = r(1551);
    },
    1163: function (e, t, r) {
      e.exports = r(880);
    },
    4300: function (e, t, r) {
      'use strict';
      function n(e) {
        return (
          (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          n(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = s(r(7294)),
        i = s(r(640)),
        a = ['text', 'onCopy', 'options', 'children'];
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                v(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function h(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = y(e);
          if (t) {
            var o = y(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return g(this, r);
        };
      }
      function g(e, t) {
        if (t && ('object' === n(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return m(e);
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function v(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var b = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && p(e, t);
        })(c, e);
        var t,
          r,
          n,
          s = h(c);
        function c() {
          var e;
          f(this, c);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            v(
              m((e = s.call.apply(s, [this].concat(r)))),
              'onClick',
              function (t) {
                var r = e.props,
                  n = r.text,
                  a = r.onCopy,
                  s = r.children,
                  c = r.options,
                  l = o.default.Children.only(s),
                  u = (0, i.default)(n, c);
                a && a(n, u),
                  l &&
                    l.props &&
                    'function' === typeof l.props.onClick &&
                    l.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (t = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = u(e, a),
                  n = o.default.Children.only(t);
                return o.default.cloneElement(
                  n,
                  l(l({}, r), {}, { onClick: this.onClick })
                );
              },
            },
          ]) && d(t.prototype, r),
          n && d(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          c
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = b),
        v(b, 'defaultProps', { onCopy: void 0, options: void 0 });
    },
    4855: function (e, t, r) {
      'use strict';
      var n = r(4300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    7516: function (e, t, r) {
      'use strict';
      r.d(t, {
        YiX: function () {
          return o;
        },
        xmy: function () {
          return i;
        },
        kVi: function () {
          return a;
        },
        Goc: function () {
          return s;
        },
        EDj: function () {
          return c;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z',
              },
            },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'm16.895 6.519 2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812A8.473 8.473 0 0 0 5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58a6.515 6.515 0 0 0 3.237.001 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9h-3.756a8.494 8.494 0 0 0-1.349-2.481zM8.681 7.748c.445-.558.96-.993 1.528-1.294a3.773 3.773 0 0 1 3.581 0 4.894 4.894 0 0 1 1.53 1.295c.299.373.54.8.753 1.251H7.927c.214-.451.454-.879.754-1.252zM17.8 12.5c0 .522-.042 1.044-.126 1.553-.079.49-.199.973-.355 1.436a8.28 8.28 0 0 1-.559 1.288 7.59 7.59 0 0 1-.733 1.11c-.267.333-.56.636-.869.898-.31.261-.639.484-.979.664s-.695.317-1.057.41c-.04.01-.082.014-.122.023V14h-2v5.881c-.04-.009-.082-.013-.122-.023-.361-.093-.717-.23-1.057-.41s-.669-.403-.978-.664a6.462 6.462 0 0 1-.871-.899 7.402 7.402 0 0 1-.731-1.108 8.337 8.337 0 0 1-.56-1.289 9.075 9.075 0 0 1-.356-1.438A9.61 9.61 0 0 1 6.319 11H17.68c.079.491.12.995.12 1.5z',
              },
            },
          ],
        })(e);
      }
      function a(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z',
              },
            },
          ],
        })(e);
      }
      function s(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z',
              },
            },
          ],
        })(e);
      }
      function c(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z',
              },
            },
          ],
        })(e);
      }
    },
    3750: function (e, t, r) {
      'use strict';
      r.d(t, {
        YaR: function () {
          return o;
        },
        Reu: function () {
          return i;
        },
        mz0: function () {
          return a;
        },
        rFR: function () {
          return s;
        },
        nvr: function () {
          return c;
        },
        ytW: function () {
          return l;
        },
        iEj: function () {
          return u;
        },
        evw: function () {
          return f;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z',
              },
            },
            {
              tag: 'path',
              attr: {
                d: 'M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z',
              },
            },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z',
              },
            },
          ],
        })(e);
      }
      function a(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'm11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z',
              },
            },
          ],
        })(e);
      }
      function s(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
              },
            },
          ],
        })(e);
      }
      function c(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z',
              },
            },
          ],
        })(e);
      }
      function l(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z',
              },
            },
          ],
        })(e);
      }
      function u(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z',
              },
            },
          ],
        })(e);
      }
      function f(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
              },
            },
          ],
        })(e);
      }
    },
    6893: function (e, t, r) {
      'use strict';
      r.d(t, {
        xqv: function () {
          return o;
        },
        vPQ: function () {
          return i;
        },
        rzC: function () {
          return a;
        },
        rDJ: function () {
          return s;
        },
        cur: function () {
          return c;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'polyline', attr: { points: '16 18 22 12 16 6' } },
            { tag: 'polyline', attr: { points: '8 6 2 12 8 18' } },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
              },
            },
            {
              tag: 'path',
              attr: {
                d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
              },
            },
          ],
        })(e);
      }
      function a(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24',
              },
            },
            { tag: 'line', attr: { x1: '1', y1: '1', x2: '23', y2: '23' } },
          ],
        })(e);
      }
      function s(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' },
            },
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '3' } },
          ],
        })(e);
      }
      function c(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '3', y1: '12', x2: '21', y2: '12' } },
            { tag: 'line', attr: { x1: '3', y1: '6', x2: '21', y2: '6' } },
            { tag: 'line', attr: { x1: '3', y1: '18', x2: '21', y2: '18' } },
          ],
        })(e);
      }
    },
    1649: function (e, t, r) {
      'use strict';
      r.d(t, {
        u1R: function () {
          return o;
        },
        hjJ: function () {
          return i;
        },
        Vmf: function () {
          return a;
        },
        rUV: function () {
          return s;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z',
              },
            },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z',
              },
            },
          ],
        })(e);
      }
      function a(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z',
              },
            },
          ],
        })(e);
      }
      function s(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z',
              },
            },
          ],
        })(e);
      }
    },
    8357: function (e, t, r) {
      'use strict';
      r.d(t, {
        w_: function () {
          return l;
        },
      });
      var n = r(7294),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(o),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        s = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        };
      function c(e) {
        return (
          e &&
          e.map(function (e, t) {
            return n.createElement(e.tag, a({ key: t }, e.attr), c(e.child));
          })
        );
      }
      function l(e) {
        return function (t) {
          return n.createElement(u, a({ attr: a({}, e.attr) }, t), c(e.child));
        };
      }
      function u(e) {
        var t = function (t) {
          var r,
            o = e.attr,
            i = e.size,
            c = e.title,
            l = s(e, ['attr', 'size', 'title']),
            u = i || t.size || '1em';
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            n.createElement(
              'svg',
              a(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                o,
                l,
                {
                  className: r,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              c && n.createElement('title', null, c),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
    5434: function (e, t, r) {
      'use strict';
      r.d(t, {
        vB0: function () {
          return o;
        },
        vr: function () {
          return i;
        },
        wr$: function () {
          return a;
        },
        zmo: function () {
          return s;
        },
        FU5: function () {
          return c;
        },
        ddU: function () {
          return l;
        },
        UPv: function () {
          return u;
        },
        x3N: function () {
          return f;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
            {
              tag: 'path',
              attr: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' },
            },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
            {
              tag: 'path',
              attr: {
                d: 'M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z',
              },
            },
          ],
        })(e);
      }
      function a(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
            {
              tag: 'path',
              attr: {
                d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
              },
            },
          ],
        })(e);
      }
      function s(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
            {
              tag: 'path',
              attr: {
                d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
              },
            },
          ],
        })(e);
      }
      function c(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
            {
              tag: 'path',
              attr: {
                d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
              },
            },
          ],
        })(e);
      }
      function l(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
            {
              tag: 'path',
              attr: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' },
            },
          ],
        })(e);
      }
      function u(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
              },
            },
          ],
        })(e);
      }
      function f(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
            {
              tag: 'path',
              attr: {
                d: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
              },
            },
          ],
        })(e);
      }
    },
    9352: function (e, t, r) {
      'use strict';
      r.d(t, {
        U5Y: function () {
          return o;
        },
        j6O: function () {
          return i;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'g',
              attr: {},
              child: [
                { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
                {
                  tag: 'path',
                  attr: {
                    d: 'M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM14 11v2h2v-2h-2zm-6 0v2h2v-2H8z',
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function i(e) {
        return (0, n.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'g',
              attr: {},
              child: [
                { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
                {
                  tag: 'path',
                  attr: {
                    d: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z',
                  },
                },
              ],
            },
          ],
        })(e);
      }
    },
    9921: function (e, t) {
      'use strict';
      var r = 'function' === typeof Symbol && Symbol.for,
        n = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        u = r ? Symbol.for('react.async_mode') : 60111,
        f = r ? Symbol.for('react.concurrent_mode') : 60111,
        d = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        h = r ? Symbol.for('react.suspense_list') : 60120,
        g = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        y = r ? Symbol.for('react.block') : 60121,
        v = r ? Symbol.for('react.fundamental') : 60117,
        b = r ? Symbol.for('react.responder') : 60118,
        x = r ? Symbol.for('react.scope') : 60119;
      function w(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case f:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case d:
                    case m:
                    case g:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function j(e) {
        return w(e) === f;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = g),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return j(e) || w(e) === u;
        }),
        (t.isConcurrentMode = j),
        (t.isContextConsumer = function (e) {
          return w(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === d;
        }),
        (t.isFragment = function (e) {
          return w(e) === i;
        }),
        (t.isLazy = function (e) {
          return w(e) === m;
        }),
        (t.isMemo = function (e) {
          return w(e) === g;
        }),
        (t.isPortal = function (e) {
          return w(e) === o;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === p ||
            e === h ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === g ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === d ||
                e.$$typeof === v ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = w);
    },
    9864: function (e, t, r) {
      'use strict';
      e.exports = r(9921);
    },
    2679: function (e, t, r) {
      (() => {
        var t = {
            296: (e, t, r) => {
              var n = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                s = parseInt,
                c =
                  'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
                l =
                  'object' == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                u = c || l || Function('return this')(),
                f = Object.prototype.toString,
                d = Math.max,
                p = Math.min,
                h = function () {
                  return u.Date.now();
                };
              function g(e) {
                var t = typeof e;
                return !!e && ('object' == t || 'function' == t);
              }
              function m(e) {
                if ('number' == typeof e) return e;
                if (
                  (function (e) {
                    return (
                      'symbol' == typeof e ||
                      ((function (e) {
                        return !!e && 'object' == typeof e;
                      })(e) &&
                        '[object Symbol]' == f.call(e))
                    );
                  })(e)
                )
                  return NaN;
                if (g(e)) {
                  var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                  e = g(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(n, '');
                var r = i.test(e);
                return r || a.test(e)
                  ? s(e.slice(2), r ? 2 : 8)
                  : o.test(e)
                  ? NaN
                  : +e;
              }
              e.exports = function (e, t, r) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  c,
                  l = 0,
                  u = !1,
                  f = !1,
                  y = !0;
                if ('function' != typeof e)
                  throw new TypeError('Expected a function');
                function v(t) {
                  var r = n,
                    i = o;
                  return (n = o = void 0), (l = t), (a = e.apply(i, r));
                }
                function b(e) {
                  return (l = e), (s = setTimeout(w, t)), u ? v(e) : a;
                }
                function x(e) {
                  var r = e - c;
                  return void 0 === c || r >= t || r < 0 || (f && e - l >= i);
                }
                function w() {
                  var e = h();
                  if (x(e)) return j(e);
                  s = setTimeout(
                    w,
                    (function (e) {
                      var r = t - (e - c);
                      return f ? p(r, i - (e - l)) : r;
                    })(e)
                  );
                }
                function j(e) {
                  return (s = void 0), y && n ? v(e) : ((n = o = void 0), a);
                }
                function k() {
                  var e = h(),
                    r = x(e);
                  if (((n = arguments), (o = this), (c = e), r)) {
                    if (void 0 === s) return b(c);
                    if (f) return (s = setTimeout(w, t)), v(c);
                  }
                  return void 0 === s && (s = setTimeout(w, t)), a;
                }
                return (
                  (t = m(t) || 0),
                  g(r) &&
                    ((u = !!r.leading),
                    (i = (f = 'maxWait' in r) ? d(m(r.maxWait) || 0, t) : i),
                    (y = 'trailing' in r ? !!r.trailing : y)),
                  (k.cancel = function () {
                    void 0 !== s && clearTimeout(s),
                      (l = 0),
                      (n = c = o = s = void 0);
                  }),
                  (k.flush = function () {
                    return void 0 === s ? a : j(h());
                  }),
                  k
                );
              };
            },
            96: (e, t, r) => {
              var n = 'Expected a function',
                o = /^\s+|\s+$/g,
                i = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                c = parseInt,
                l =
                  'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
                u =
                  'object' == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                f = l || u || Function('return this')(),
                d = Object.prototype.toString,
                p = Math.max,
                h = Math.min,
                g = function () {
                  return f.Date.now();
                };
              function m(e) {
                var t = typeof e;
                return !!e && ('object' == t || 'function' == t);
              }
              function y(e) {
                if ('number' == typeof e) return e;
                if (
                  (function (e) {
                    return (
                      'symbol' == typeof e ||
                      ((function (e) {
                        return !!e && 'object' == typeof e;
                      })(e) &&
                        '[object Symbol]' == d.call(e))
                    );
                  })(e)
                )
                  return NaN;
                if (m(e)) {
                  var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                  e = m(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(o, '');
                var r = a.test(e);
                return r || s.test(e)
                  ? c(e.slice(2), r ? 2 : 8)
                  : i.test(e)
                  ? NaN
                  : +e;
              }
              e.exports = function (e, t, r) {
                var o = !0,
                  i = !0;
                if ('function' != typeof e) throw new TypeError(n);
                return (
                  m(r) &&
                    ((o = 'leading' in r ? !!r.leading : o),
                    (i = 'trailing' in r ? !!r.trailing : i)),
                  (function (e, t, r) {
                    var o,
                      i,
                      a,
                      s,
                      c,
                      l,
                      u = 0,
                      f = !1,
                      d = !1,
                      v = !0;
                    if ('function' != typeof e) throw new TypeError(n);
                    function b(t) {
                      var r = o,
                        n = i;
                      return (o = i = void 0), (u = t), (s = e.apply(n, r));
                    }
                    function x(e) {
                      return (u = e), (c = setTimeout(j, t)), f ? b(e) : s;
                    }
                    function w(e) {
                      var r = e - l;
                      return (
                        void 0 === l || r >= t || r < 0 || (d && e - u >= a)
                      );
                    }
                    function j() {
                      var e = g();
                      if (w(e)) return k(e);
                      c = setTimeout(
                        j,
                        (function (e) {
                          var r = t - (e - l);
                          return d ? h(r, a - (e - u)) : r;
                        })(e)
                      );
                    }
                    function k(e) {
                      return (
                        (c = void 0), v && o ? b(e) : ((o = i = void 0), s)
                      );
                    }
                    function O() {
                      var e = g(),
                        r = w(e);
                      if (((o = arguments), (i = this), (l = e), r)) {
                        if (void 0 === c) return x(l);
                        if (d) return (c = setTimeout(j, t)), b(l);
                      }
                      return void 0 === c && (c = setTimeout(j, t)), s;
                    }
                    return (
                      (t = y(t) || 0),
                      m(r) &&
                        ((f = !!r.leading),
                        (a = (d = 'maxWait' in r)
                          ? p(y(r.maxWait) || 0, t)
                          : a),
                        (v = 'trailing' in r ? !!r.trailing : v)),
                      (O.cancel = function () {
                        void 0 !== c && clearTimeout(c),
                          (u = 0),
                          (o = l = i = c = void 0);
                      }),
                      (O.flush = function () {
                        return void 0 === c ? s : k(g());
                      }),
                      O
                    );
                  })(e, t, { leading: o, maxWait: t, trailing: i })
                );
              };
            },
            703: (e, t, r) => {
              'use strict';
              var n = r(414);
              function o() {}
              function i() {}
              (i.resetWarningCache = o),
                (e.exports = function () {
                  function e(e, t, r, o, i, a) {
                    if (a !== n) {
                      var s = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                      );
                      throw ((s.name = 'Invariant Violation'), s);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o,
                  };
                  return (r.PropTypes = r), r;
                });
            },
            697: (e, t, r) => {
              e.exports = r(703)();
            },
            414: (e) => {
              'use strict';
              e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            },
          },
          n = {};
        function o(e) {
          var r = n[e];
          if (void 0 !== r) return r.exports;
          var i = (n[e] = { exports: {} });
          return t[e](i, i.exports, o), i.exports;
        }
        (o.n = (e) => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return o.d(t, { a: t }), t;
        }),
          (o.d = (e, t) => {
            for (var r in t)
              o.o(t, r) &&
                !o.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          }),
          (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
              return this || new Function('return this')();
            } catch (t) {
              if ('object' == typeof window) return window;
            }
          })()),
          (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (o.r = (e) => {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          });
        var i = {};
        (() => {
          'use strict';
          o.r(i),
            o.d(i, {
              LazyLoadComponent: () => J,
              LazyLoadImage: () => te,
              trackWindowScroll: () => I,
            });
          const e = r(7294);
          var t = o.n(e),
            n = o(697);
          const a = r(3935);
          var s = o.n(a);
          function c() {
            return (
              'undefined' != typeof window &&
              'IntersectionObserver' in window &&
              'isIntersecting' in window.IntersectionObserverEntry.prototype
            );
          }
          function l(e) {
            return (l =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          function u(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function f(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function d(e, t) {
            return (d =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function p(e, t) {
            if (t && ('object' === l(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          }
          function h(e) {
            return (h = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var g = function (e) {
              e.forEach(function (e) {
                e.isIntersecting && e.target.onVisible();
              });
            },
            m = {},
            y = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && d(e, t);
              })(a, e);
              var r,
                n,
                o,
                i =
                  ((n = a),
                  (o = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = h(n);
                    if (o) {
                      var r = h(this).constructor;
                      e = Reflect.construct(t, arguments, r);
                    } else e = t.apply(this, arguments);
                    return p(this, e);
                  });
              function a(e) {
                var t;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, a),
                  ((t = i.call(this, e)).supportsObserver =
                    !e.scrollPosition && e.useIntersectionObserver && c()),
                  t.supportsObserver)
                ) {
                  var r = e.threshold;
                  t.observer = (function (e) {
                    return (
                      (m[e] =
                        m[e] ||
                        new IntersectionObserver(g, { rootMargin: e + 'px' })),
                      m[e]
                    );
                  })(r);
                }
                return t;
              }
              return (
                (r = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      this.placeholder &&
                        this.observer &&
                        ((this.placeholder.onVisible = this.props.onVisible),
                        this.observer.observe(this.placeholder)),
                        this.supportsObserver || this.updateVisibility();
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.observer &&
                        this.observer.unobserve(this.placeholder);
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function () {
                      this.supportsObserver || this.updateVisibility();
                    },
                  },
                  {
                    key: 'getPlaceholderBoundingBox',
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : this.props.scrollPosition,
                        t = this.placeholder.getBoundingClientRect(),
                        r = s().findDOMNode(this.placeholder).style,
                        n = {
                          left:
                            parseInt(r.getPropertyValue('margin-left'), 10) ||
                            0,
                          top:
                            parseInt(r.getPropertyValue('margin-top'), 10) || 0,
                        };
                      return {
                        bottom: e.y + t.bottom + n.top,
                        left: e.x + t.left + n.left,
                        right: e.x + t.right + n.left,
                        top: e.y + t.top + n.top,
                      };
                    },
                  },
                  {
                    key: 'isPlaceholderInViewport',
                    value: function () {
                      if ('undefined' == typeof window || !this.placeholder)
                        return !1;
                      var e = this.props,
                        t = e.scrollPosition,
                        r = e.threshold,
                        n = this.getPlaceholderBoundingBox(t),
                        o = t.y + window.innerHeight,
                        i = t.x,
                        a = t.x + window.innerWidth,
                        s = t.y;
                      return Boolean(
                        s - r <= n.bottom &&
                          o + r >= n.top &&
                          i - r <= n.right &&
                          a + r >= n.left
                      );
                    },
                  },
                  {
                    key: 'updateVisibility',
                    value: function () {
                      this.isPlaceholderInViewport() && this.props.onVisible();
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        r = this.props,
                        n = r.className,
                        o = r.height,
                        i = r.placeholder,
                        a = r.style,
                        s = r.width;
                      if (i && 'function' != typeof i.type)
                        return t().cloneElement(i, {
                          ref: function (t) {
                            return (e.placeholder = t);
                          },
                        });
                      var c = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? u(Object(r), !0).forEach(function (t) {
                                f(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : u(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })({ display: 'inline-block' }, a);
                      return (
                        void 0 !== s && (c.width = s),
                        void 0 !== o && (c.height = o),
                        t().createElement(
                          'span',
                          {
                            className: n,
                            ref: function (t) {
                              return (e.placeholder = t);
                            },
                            style: c,
                          },
                          i
                        )
                      );
                    },
                  },
                ]) &&
                  (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                    }
                  })(a.prototype, r),
                a
              );
            })(t().Component);
          (y.propTypes = {
            onVisible: n.PropTypes.func.isRequired,
            className: n.PropTypes.string,
            height: n.PropTypes.oneOfType([
              n.PropTypes.number,
              n.PropTypes.string,
            ]),
            placeholder: n.PropTypes.element,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            scrollPosition: n.PropTypes.shape({
              x: n.PropTypes.number.isRequired,
              y: n.PropTypes.number.isRequired,
            }),
            width: n.PropTypes.oneOfType([
              n.PropTypes.number,
              n.PropTypes.string,
            ]),
          }),
            (y.defaultProps = {
              className: '',
              placeholder: null,
              threshold: 100,
              useIntersectionObserver: !0,
            });
          const v = y;
          var b = o(296),
            x = o.n(b),
            w = o(96),
            j = o.n(w),
            k = function (e) {
              var t = getComputedStyle(e, null);
              return (
                t.getPropertyValue('overflow') +
                t.getPropertyValue('overflow-y') +
                t.getPropertyValue('overflow-x')
              );
            };
          const O = function (e) {
            if (!(e instanceof HTMLElement)) return window;
            for (var t = e; t && t instanceof HTMLElement; ) {
              if (/(scroll|auto)/.test(k(t))) return t;
              t = t.parentNode;
            }
            return window;
          };
          function N(e) {
            return (N =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          var S = ['delayMethod', 'delayTime'];
          function P() {
            return (P =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function L(e, t) {
            return (L =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function C(e, t) {
            if (t && ('object' === N(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return E(e);
          }
          function E(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function R(e) {
            return (R = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var z = function () {
              return 'undefined' == typeof window
                ? 0
                : window.scrollX || window.pageXOffset;
            },
            _ = function () {
              return 'undefined' == typeof window
                ? 0
                : window.scrollY || window.pageYOffset;
            };
          const I = function (e) {
            var r = (function (r) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && L(e, t);
              })(l, r);
              var n,
                o,
                i,
                a =
                  ((o = l),
                  (i = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = R(o);
                    if (i) {
                      var r = R(this).constructor;
                      e = Reflect.construct(t, arguments, r);
                    } else e = t.apply(this, arguments);
                    return C(this, e);
                  });
              function l(e) {
                var r;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, l),
                  ((r = a.call(this, e)).useIntersectionObserver =
                    e.useIntersectionObserver && c()),
                  r.useIntersectionObserver)
                )
                  return C(r);
                var n = r.onChangeScroll.bind(E(r));
                return (
                  'debounce' === e.delayMethod
                    ? (r.delayedScroll = x()(n, e.delayTime))
                    : 'throttle' === e.delayMethod &&
                      (r.delayedScroll = j()(n, e.delayTime)),
                  (r.state = { scrollPosition: { x: z(), y: _() } }),
                  (r.baseComponentRef = t().createRef()),
                  r
                );
              }
              return (
                (n = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      this.addListeners();
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.removeListeners();
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function () {
                      'undefined' == typeof window ||
                        this.useIntersectionObserver ||
                        (O(s().findDOMNode(this.baseComponentRef.current)) !==
                          this.scrollElement &&
                          (this.removeListeners(), this.addListeners()));
                    },
                  },
                  {
                    key: 'addListeners',
                    value: function () {
                      'undefined' == typeof window ||
                        this.useIntersectionObserver ||
                        ((this.scrollElement = O(
                          s().findDOMNode(this.baseComponentRef.current)
                        )),
                        this.scrollElement.addEventListener(
                          'scroll',
                          this.delayedScroll,
                          { passive: !0 }
                        ),
                        window.addEventListener('resize', this.delayedScroll, {
                          passive: !0,
                        }),
                        this.scrollElement !== window &&
                          window.addEventListener(
                            'scroll',
                            this.delayedScroll,
                            { passive: !0 }
                          ));
                    },
                  },
                  {
                    key: 'removeListeners',
                    value: function () {
                      'undefined' == typeof window ||
                        this.useIntersectionObserver ||
                        (this.scrollElement.removeEventListener(
                          'scroll',
                          this.delayedScroll
                        ),
                        window.removeEventListener(
                          'resize',
                          this.delayedScroll
                        ),
                        this.scrollElement !== window &&
                          window.removeEventListener(
                            'scroll',
                            this.delayedScroll
                          ));
                    },
                  },
                  {
                    key: 'onChangeScroll',
                    value: function () {
                      this.useIntersectionObserver ||
                        this.setState({ scrollPosition: { x: z(), y: _() } });
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var r = this.props,
                        n =
                          (r.delayMethod,
                          r.delayTime,
                          (function (e, t) {
                            if (null == e) return {};
                            var r,
                              n,
                              o = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                  n,
                                  o = {},
                                  i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                  (r = i[n]),
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o;
                              })(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (n = 0; n < i.length; n++)
                                (r = i[n]),
                                  t.indexOf(r) >= 0 ||
                                    (Object.prototype.propertyIsEnumerable.call(
                                      e,
                                      r
                                    ) &&
                                      (o[r] = e[r]));
                            }
                            return o;
                          })(r, S)),
                        o = this.useIntersectionObserver
                          ? null
                          : this.state.scrollPosition;
                      return t().createElement(
                        e,
                        P(
                          {
                            forwardRef: this.baseComponentRef,
                            scrollPosition: o,
                          },
                          n
                        )
                      );
                    },
                  },
                ]) &&
                  (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                    }
                  })(l.prototype, n),
                l
              );
            })(t().Component);
            return (
              (r.propTypes = {
                delayMethod: n.PropTypes.oneOf(['debounce', 'throttle']),
                delayTime: n.PropTypes.number,
                useIntersectionObserver: n.PropTypes.bool,
              }),
              (r.defaultProps = {
                delayMethod: 'throttle',
                delayTime: 300,
                useIntersectionObserver: !0,
              }),
              r
            );
          };
          function T(e) {
            return (T =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          function M(e, t) {
            return (M =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function A(e, t) {
            if (t && ('object' === T(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          }
          function D(e) {
            return (D = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var B = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && M(e, t);
            })(a, e);
            var r,
              n,
              o,
              i =
                ((n = a),
                (o = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = D(n);
                  if (o) {
                    var r = D(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return A(this, e);
                });
            function a(e) {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, a),
                i.call(this, e)
              );
            }
            return (
              (r = [
                {
                  key: 'render',
                  value: function () {
                    return t().createElement(v, this.props);
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                })(a.prototype, r),
              a
            );
          })(t().Component);
          const F = I(B);
          function V(e) {
            return (V =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          function $(e, t) {
            return ($ =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function H(e, t) {
            if (t && ('object' === V(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return U(e);
          }
          function U(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function q(e) {
            return (q = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var W = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && $(e, t);
            })(a, e);
            var r,
              n,
              o,
              i =
                ((n = a),
                (o = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = q(n);
                  if (o) {
                    var r = q(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return H(this, e);
                });
            function a(e) {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, a),
                (t = i.call(this, e));
              var r = e.afterLoad,
                n = e.beforeLoad,
                o = e.scrollPosition,
                s = e.visibleByDefault;
              return (
                (t.state = { visible: s }),
                s && (n(), r()),
                (t.onVisible = t.onVisible.bind(U(t))),
                (t.isScrollTracked = Boolean(
                  o &&
                    Number.isFinite(o.x) &&
                    o.x >= 0 &&
                    Number.isFinite(o.y) &&
                    o.y >= 0
                )),
                t
              );
            }
            return (
              (r = [
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    t.visible !== this.state.visible && this.props.afterLoad();
                  },
                },
                {
                  key: 'onVisible',
                  value: function () {
                    this.props.beforeLoad(), this.setState({ visible: !0 });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    if (this.state.visible) return this.props.children;
                    var e = this.props,
                      r = e.className,
                      n = e.delayMethod,
                      o = e.delayTime,
                      i = e.height,
                      a = e.placeholder,
                      s = e.scrollPosition,
                      l = e.style,
                      u = e.threshold,
                      f = e.useIntersectionObserver,
                      d = e.width;
                    return this.isScrollTracked || (f && c())
                      ? t().createElement(v, {
                          className: r,
                          height: i,
                          onVisible: this.onVisible,
                          placeholder: a,
                          scrollPosition: s,
                          style: l,
                          threshold: u,
                          useIntersectionObserver: f,
                          width: d,
                        })
                      : t().createElement(F, {
                          className: r,
                          delayMethod: n,
                          delayTime: o,
                          height: i,
                          onVisible: this.onVisible,
                          placeholder: a,
                          style: l,
                          threshold: u,
                          width: d,
                        });
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                })(a.prototype, r),
              a
            );
          })(t().Component);
          (W.propTypes = {
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool,
          }),
            (W.defaultProps = {
              afterLoad: function () {
                return {};
              },
              beforeLoad: function () {
                return {};
              },
              useIntersectionObserver: !0,
              visibleByDefault: !1,
            });
          const J = W;
          function K(e) {
            return (K =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          var G = [
            'afterLoad',
            'beforeLoad',
            'delayMethod',
            'delayTime',
            'effect',
            'placeholder',
            'placeholderSrc',
            'scrollPosition',
            'threshold',
            'useIntersectionObserver',
            'visibleByDefault',
            'wrapperClassName',
            'wrapperProps',
          ];
          function Y() {
            return (Y =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function Z(e, t) {
            return (Z =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Q(e, t) {
            if (t && ('object' === K(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          }
          function X(e) {
            return (X = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var ee = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Z(e, t);
            })(a, e);
            var r,
              n,
              o,
              i =
                ((n = a),
                (o = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = X(n);
                  if (o) {
                    var r = X(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return Q(this, e);
                });
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, a),
                ((t = i.call(this, e)).state = { loaded: !1 }),
                t
              );
            }
            return (
              (r = [
                {
                  key: 'onImageLoad',
                  value: function () {
                    var e = this;
                    return this.state.loaded
                      ? null
                      : function () {
                          e.props.afterLoad(), e.setState({ loaded: !0 });
                        };
                  },
                },
                {
                  key: 'getImg',
                  value: function () {
                    var e = this.props,
                      r =
                        (e.afterLoad,
                        e.beforeLoad,
                        e.delayMethod,
                        e.delayTime,
                        e.effect,
                        e.placeholder,
                        e.placeholderSrc,
                        e.scrollPosition,
                        e.threshold,
                        e.useIntersectionObserver,
                        e.visibleByDefault,
                        e.wrapperClassName,
                        e.wrapperProps,
                        (function (e, t) {
                          if (null == e) return {};
                          var r,
                            n,
                            o = (function (e, t) {
                              if (null == e) return {};
                              var r,
                                n,
                                o = {},
                                i = Object.keys(e);
                              for (n = 0; n < i.length; n++)
                                (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                              return o;
                            })(e, t);
                          if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++)
                              (r = i[n]),
                                t.indexOf(r) >= 0 ||
                                  (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                  ) &&
                                    (o[r] = e[r]));
                          }
                          return o;
                        })(e, G));
                    return t().createElement(
                      'img',
                      Y({ onLoad: this.onImageLoad() }, r)
                    );
                  },
                },
                {
                  key: 'getLazyLoadImage',
                  value: function () {
                    var e = this.props,
                      r = e.beforeLoad,
                      n = e.className,
                      o = e.delayMethod,
                      i = e.delayTime,
                      a = e.height,
                      s = e.placeholder,
                      c = e.scrollPosition,
                      l = e.style,
                      u = e.threshold,
                      f = e.useIntersectionObserver,
                      d = e.visibleByDefault,
                      p = e.width;
                    return t().createElement(
                      J,
                      {
                        beforeLoad: r,
                        className: n,
                        delayMethod: o,
                        delayTime: i,
                        height: a,
                        placeholder: s,
                        scrollPosition: c,
                        style: l,
                        threshold: u,
                        useIntersectionObserver: f,
                        visibleByDefault: d,
                        width: p,
                      },
                      this.getImg()
                    );
                  },
                },
                {
                  key: 'getWrappedLazyLoadImage',
                  value: function (e) {
                    var r = this.props,
                      n = r.effect,
                      o = r.height,
                      i = r.placeholderSrc,
                      a = r.width,
                      s = r.wrapperClassName,
                      c = r.wrapperProps,
                      l = this.state.loaded,
                      u = l ? ' lazy-load-image-loaded' : '';
                    return t().createElement(
                      'span',
                      Y(
                        {
                          className: s + ' lazy-load-image-background ' + n + u,
                          style: {
                            backgroundImage:
                              l || !i ? '' : 'url('.concat(i, ')'),
                            backgroundSize: l || !i ? '' : '100% 100%',
                            color: 'transparent',
                            display: 'inline-block',
                            height: o,
                            width: a,
                          },
                        },
                        c
                      ),
                      e
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.effect,
                      r = e.placeholderSrc,
                      n = e.visibleByDefault,
                      o = e.wrapperClassName,
                      i = e.wrapperProps,
                      a = this.getLazyLoadImage();
                    return ((t || r) && !n) || o || i
                      ? this.getWrappedLazyLoadImage(a)
                      : a;
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                })(a.prototype, r),
              a
            );
          })(t().Component);
          (ee.propTypes = {
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            delayMethod: n.PropTypes.string,
            delayTime: n.PropTypes.number,
            effect: n.PropTypes.string,
            placeholderSrc: n.PropTypes.string,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool,
            wrapperClassName: n.PropTypes.string,
            wrapperProps: n.PropTypes.object,
          }),
            (ee.defaultProps = {
              afterLoad: function () {
                return {};
              },
              beforeLoad: function () {
                return {};
              },
              delayMethod: 'throttle',
              delayTime: 300,
              effect: '',
              placeholderSrc: null,
              threshold: 100,
              useIntersectionObserver: !0,
              visibleByDefault: !1,
              wrapperClassName: '',
            });
          const te = ee;
        })(),
          (e.exports = i);
      })();
    },
    1742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1780), t(880);
    });
    var r = e.O();
    _N_E = r;
  },
]);
