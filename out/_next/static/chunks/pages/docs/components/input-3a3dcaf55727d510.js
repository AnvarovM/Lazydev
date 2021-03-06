(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21],
  {
    9959: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/components/input',
        function () {
          return t(1008);
        },
      ]);
    },
    2580: function (e, n, t) {
      'use strict';
      t.d(n, {
        G: function () {
          return a;
        },
      });
      var r = t(5893),
        i = t(7294),
        a = function (e) {
          var n = e.children,
            t = (0, i.useState)(!0),
            a = t[0],
            s = t[1],
            o = function () {
              window.scrollY > 200 ? s(!1) : s(!0);
            };
          return (
            (0, i.useEffect)(function () {
              return (
                window.addEventListener('scroll', o),
                function () {
                  window.removeEventListener('scroll', o);
                }
              );
            }, []),
            (0, r.jsx)('div', {
              children: (0, r.jsx)('div', {
                className: a
                  ? 'fixed z-50 top-[10rem] right-4 duration-300'
                  : 'fixed z-50 top-[7rem] right-4 duration-300',
                children: (0, r.jsx)('div', {
                  className:
                    'flex flex-col text-right text-xs md:text-sm text-primary dark:text-gray-400 dark:hover:text-white space-x-1',
                  children: n,
                }),
              }),
            })
          );
        };
    },
    1008: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return g;
          },
          default: function () {
            return f;
          },
          meta: function () {
            return h;
          },
        });
      var r = t(5893),
        i = t(6016),
        a = t(1996),
        s = t(2580),
        o = t(2481),
        l = t(7912),
        u =
          (t(7294),
          function () {
            return (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('input', {
                className:
                  'rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 dark:bg-[#141417] outline-none py-3 px-4 text-xs focus:px-6 duration-200',
                type: 'text',
                placeholder: 'Default',
              }),
            });
          }),
        c = function () {
          return (0, r.jsxs)('div', {
            className: 'relative group',
            children: [
              (0, r.jsx)('label', {
                className:
                  'absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-300 text-xs group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0',
                htmlFor: 'label',
                children: 'Label',
              }),
              (0, r.jsx)('input', {
                id: 'label',
                className:
                  'rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 dark:bg-[#141417] outline-none py-3 px-4 text-xs group-focus-within:bg-opacity-60',
                type: 'text',
              }),
            ],
          });
        },
        d = t(7516),
        p = function () {
          return (0, r.jsxs)('div', {
            className: 'grid grid-cols-2 items-center space-x-2',
            children: [
              (0, r.jsx)('div', {
                className: 'relative group',
                children: (0, r.jsxs)('div', {
                  className:
                    'flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]',
                  children: [
                    (0, r.jsx)('input', {
                      id: 'username',
                      className:
                        'outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300',
                      type: 'text',
                      placeholder: 'username',
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]',
                      children: (0, r.jsx)(d.EDj, {
                        className:
                          'text-primary dark:text-white group-focus-within:text-white',
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)('div', {
                className: 'relative group',
                children: (0, r.jsxs)('div', {
                  className:
                    'flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]',
                  children: [
                    (0, r.jsx)('input', {
                      id: 'password',
                      className:
                        'outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300',
                      type: 'password',
                      placeholder: 'password',
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]',
                      children: (0, r.jsx)(d.kVi, {
                        className:
                          'text-primary dark:text-white group-focus-within:text-white',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        x = function () {
          return (0, r.jsxs)('div', {
            className: 'grid grid-cols-3 grid-rows-2 gap-x-2',
            children: [
              (0, r.jsx)('div', {
                className: 'group',
                children: (0, r.jsx)('input', {
                  className:
                    'rounded-xl bg-blue-200 dark:bg-[#1e2639] outline-none py-3 px-4 text-xs duration-200 group-focus-within:bg-opacity-60',
                  type: 'text',
                  placeholder: 'Default',
                }),
              }),
              (0, r.jsxs)('div', {
                className: 'relative group',
                children: [
                  (0, r.jsx)('label', {
                    className:
                      'absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-300 text-xs group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0',
                    htmlFor: 'color',
                    children: 'Label',
                  }),
                  (0, r.jsx)('input', {
                    id: 'color',
                    className:
                      'rounded-xl bg-red-200 dark:bg-[#352428] outline-none py-3 px-4 text-xs group-focus-within:bg-opacity-60',
                    type: 'text',
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'relative group',
                children: (0, r.jsxs)('div', {
                  className:
                    'flex items-center rounded-xl text-[#46c93a] bg-green-200 dark:bg-[#223125]',
                  children: [
                    (0, r.jsx)('input', {
                      id: 'username',
                      className:
                        'outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300',
                      type: 'text',
                      placeholder: 'username',
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#264027] group-focus-within:bg-opacity-60',
                      children: (0, r.jsx)(d.EDj, {
                        className: 'text-primary text-[#46c93a]',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        g = !0,
        h = { name: 'Input', title: 'Input | Lazydev ui components' },
        m = function (e) {
          var n = e.children;
          return (0, r.jsx)(o.j, { name: h.name, title: h.title, children: n });
        };
      var f = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = function () {
            var n = Object.assign(
              { p: 'p', pre: 'pre', code: 'code' },
              e.components
            );
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(s.G, {
                  children: [
                    (0, r.jsx)('a', {
                      href: '#default',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'Default' }),
                    }),
                    (0, r.jsx)('a', {
                      href: '#default2',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'Default B' }),
                    }),
                    (0, r.jsx)('a', {
                      href: '#glassmorphism',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'Glassmorphism' }),
                    }),
                    (0, r.jsx)('a', {
                      href: '#withButton',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'With button' }),
                    }),
                  ],
                }),
                '\n',
                (0, r.jsx)(l.$, {
                  leftPath: '/docs/components/loading',
                  rightPath: '/docs/components/select',
                }),
                '\n',
                (0, r.jsx)('div', { id: 'default' }),
                '\n',
                (0, r.jsx)(i.Z, {
                  name: 'Default',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(u, {}),
                }),
                '\n',
                (0, r.jsx)(a.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\n\nexport const Default = () => {\n  return (\n    <>\n      <input\n        className="rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-3 px-4 text-xs focus:px-6 duration-200"\n        type="text"\n        placeholder="Default input"\n      />\n    </>\n  );\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)(i.Z, {
                  name: 'Label Placeholder',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(c, {}),
                }),
                '\n',
                (0, r.jsx)(a.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\n\nexport const Label = () => {\n  return (\n    <div className="relative group">\n      <label\n        className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-200 text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"\n        htmlFor="label">\n        Label\n      </label>\n      <input\n        id="label"\n        className="rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-3 px-4 text-xs"\n        type="text"\n      />\n    </div>\n  );\n};\n\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)(i.Z, {
                  name: 'Icon',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(p, {}),
                }),
                '\n',
                (0, r.jsx)(a.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { BiUser, BiLockOpenAlt } from \'react-icons/bi\';\nexport const Icon = () => {\n  return (\n    <div className=\'grid grid-cols-2 items-center space-x-2\'>\n      <div className="relative group">\n        <div className="flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]">\n          <input\n            id="username"\n            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"\n            type="text"\n            placeholder="username"\n          />\n          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">\n            <BiUser className="text-primary dark:text-white group-focus-within:text-white" />\n          </div>\n        </div>\n      </div>\n      <div className="relative group">\n        <div className="flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]">\n          <input\n            id="password"\n            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"\n            type="password"\n            placeholder="password"\n          />\n          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">\n            <BiLockOpenAlt className="text-primary dark:text-white group-focus-within:text-white" />\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)(i.Z, {
                  name: 'Color',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(x, {}),
                }),
                '\n',
                (0, r.jsx)(a.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { BiUser } from \'react-icons/bi\';\n\nexport const Color = () => {\n  return (\n    <div className="grid grid-cols-3 grid-rows-2 gap-x-2">\n      <div className="group">\n        <input\n          className="rounded-xl bg-blue-200 dark:bg-[#1e2639] outline-none py-3 px-4 text-xs duration-200 group-focus-within:bg-opacity-60"\n          type="text"\n          placeholder="Default"\n        />\n      </div>\n      <div className="relative group">\n        <label\n          className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-300 text-xs group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"\n          htmlFor="color">\n          Label\n        </label>\n        <input\n          id="color"\n          className="rounded-xl bg-red-200 dark:bg-[#352428] outline-none py-3 px-4 text-xs group-focus-within:bg-opacity-60"\n          type="text"\n        />\n      </div>\n      <div className="relative group">\n        <div className="flex items-center rounded-xl text-[#46c93a] bg-green-200 dark:bg-[#223125]">\n          <input\n            id="username"\n            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"\n            type="text"\n            placeholder="username"\n          />\n          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#264027] group-focus-within:bg-opacity-60">\n            <BiUser className="text-primary text-[#46c93a]" />\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n',
                    }),
                  }),
                }),
                '\n',
                '\n',
                (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, {}) }),
              ],
            });
          };
        return m
          ? (0, r.jsx)(m, Object.assign({}, e, { children: (0, r.jsx)(n, {}) }))
          : n();
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 9959), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
