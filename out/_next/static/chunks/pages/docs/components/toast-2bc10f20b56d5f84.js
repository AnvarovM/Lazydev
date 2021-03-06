(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [696],
  {
    1234: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/components/toast',
        function () {
          return s(1688);
        },
      ]);
    },
    2580: function (e, n, s) {
      'use strict';
      s.d(n, {
        G: function () {
          return i;
        },
      });
      var r = s(5893),
        t = s(7294),
        i = function (e) {
          var n = e.children,
            s = (0, t.useState)(!0),
            i = s[0],
            a = s[1],
            l = function () {
              window.scrollY > 200 ? a(!1) : a(!0);
            };
          return (
            (0, t.useEffect)(function () {
              return (
                window.addEventListener('scroll', l),
                function () {
                  window.removeEventListener('scroll', l);
                }
              );
            }, []),
            (0, r.jsx)('div', {
              children: (0, r.jsx)('div', {
                className: i
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
    1688: function (e, n, s) {
      'use strict';
      s.r(n),
        s.d(n, {
          __N_SSG: function () {
            return g;
          },
          default: function () {
            return v;
          },
          meta: function () {
            return f;
          },
        });
      var r = s(5893),
        t = s(6016),
        i = s(1996),
        a = s(2580),
        l = s(2481),
        d = s(7912),
        c = (s(7294), s(5434)),
        m = function () {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
              className:
                'h-max w-[15rem] md:w-[25rem] p-2 border-2 border-green-400 bg-green-100 rounded-xl flex items-center justify-between',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, r.jsx)('div', {
                      className:
                        'flex items-center justify-center w-11 h-11 bg-green-500 rounded-2xl',
                      children: (0, r.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-white rounded-xl w-6 h-6',
                        children: (0, r.jsx)('span', {
                          children: (0, r.jsx)(c.vB0, {
                            className: 'text-green-500',
                          }),
                        }),
                      }),
                    }),
                    (0, r.jsx)('div', {
                      children: (0, r.jsx)('p', {
                        className: 'text-primary pl-4',
                        children: 'A success toast',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  children: (0, r.jsx)(c.FU5, {
                    className: 'text-lg text-primary mr-4 cursor-pointer',
                  }),
                }),
              ],
            }),
          });
        },
        o = function () {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
              className:
                'h-max w-[15rem] md:w-[25rem] mt-2 p-2 border-2 border-red-400 bg-red-100 rounded-xl flex items-center justify-between',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, r.jsx)('div', {
                      className:
                        'flex items-center justify-center w-11 h-11 bg-red-500 rounded-2xl',
                      children: (0, r.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-white rounded-xl w-6 h-6',
                        children: (0, r.jsx)('span', {
                          children: (0, r.jsx)(c.wr$, {
                            className: 'text-red-500',
                          }),
                        }),
                      }),
                    }),
                    (0, r.jsx)('div', {
                      children: (0, r.jsx)('p', {
                        className: 'text-primary pl-4',
                        children: 'A error toast',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  children: (0, r.jsx)(c.FU5, {
                    className: 'text-lg text-primary mr-4 cursor-pointer',
                  }),
                }),
              ],
            }),
          });
        },
        x = function () {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
              className:
                'h-max w-[15rem] md:w-[25rem] p-2 border-2 border-yellow-400 bg-yellow-100 rounded-full flex items-center justify-between',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, r.jsx)('div', {
                      className:
                        'flex items-center justify-center w-11 h-11 bg-yellow-500 rounded-full',
                      children: (0, r.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-white rounded-full w-6 h-6',
                        children: (0, r.jsx)('span', {
                          children: (0, r.jsx)(c.UPv, {
                            className: 'text-yellow-500',
                          }),
                        }),
                      }),
                    }),
                    (0, r.jsx)('div', {
                      children: (0, r.jsx)('p', {
                        className: 'text-primary pl-4',
                        children: 'A warning toast',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  children: (0, r.jsx)(c.FU5, {
                    className: 'text-lg text-primary mr-4 cursor-pointer',
                  }),
                }),
              ],
            }),
          });
        },
        h = function () {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
              className:
                'h-max w-[15rem] md:w-[25rem] p-2 mt-2 border-2 border-blue-400 bg-blue-100 rounded-full flex items-center justify-between',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, r.jsx)('div', {
                      className:
                        'flex items-center justify-center w-11 h-11 bg-blue-500 rounded-full',
                      children: (0, r.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-white rounded-full w-6 h-6',
                        children: (0, r.jsx)('span', {
                          children: (0, r.jsx)('strong', {
                            className: 'text-blue-500',
                            children: 'i',
                          }),
                        }),
                      }),
                    }),
                    (0, r.jsx)('div', {
                      children: (0, r.jsx)('p', {
                        className: 'text-primary pl-4',
                        children: 'A complete information toast',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  children: (0, r.jsx)(c.FU5, {
                    className: 'text-lg text-primary mr-4 cursor-pointer',
                  }),
                }),
              ],
            }),
          });
        },
        u = function () {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
              className:
                'relative z-20 flex items-center w-[15rem] md:w-[25rem] bg-white shadow-lg dark:bg-darkSecondary p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-sm',
              children: [
                (0, r.jsx)('div', {
                  className:
                    'flex items-center justify-center bg-green-200 rounded-xl w-6 h-6 mr-3 md:mr-5',
                  children: (0, r.jsx)('span', {
                    children: (0, r.jsx)(c.vB0, {
                      className: 'text-green-500',
                    }),
                  }),
                }),
                (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsx)('h4', {
                      className: 'font-semibold text-green-500',
                      children: 'Lazydev ui component',
                    }),
                    (0, r.jsx)('p', {
                      className: 'text-xs md:text-sm',
                      children: 'A glassmorphism toast',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = function () {
          return (0, r.jsxs)('div', {
            className:
              'w-[15rem] md:w-[25rem] p-2 border-l-4 border-green-400 bg-white dark:bg-[#102a43] rounded-xl flex flex-col shadow-lg',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      (0, r.jsx)('span', {
                        className:
                          'flex items-center justify-center bg-green-300 rounded-xl w-6 h-6',
                        children: (0, r.jsx)('span', {
                          children: (0, r.jsx)(c.vB0, {
                            className: 'text-white',
                          }),
                        }),
                      }),
                      (0, r.jsxs)('div', {
                        className: 'pl-4 ',
                        children: [
                          (0, r.jsx)('h3', {
                            className:
                              'text-primary dark:text-white font-medium',
                            children: 'A success toast',
                          }),
                          (0, r.jsx)('p', {
                            className: 'text-xs',
                            children: 'Toast with button',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    children: (0, r.jsx)(c.FU5, {
                      className:
                        'text-lg text-primary dark:text-white mr-4 cursor-pointer',
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'flex items-center space-x-2 w-fit ml-10 my-4',
                children: [
                  (0, r.jsx)('button', {
                    className:
                      'w-fit mx-auto py-2 px-4 shadow-lg text-sm duration-300 ease-in-out bg-gray-200 dark:bg-white text-primary rounded-md',
                    children: 'Button',
                  }),
                  (0, r.jsx)('a', {
                    className: 'text-sm text-gray-400 dark:text-white',
                    href: '#!',
                    children: 'Learn more',
                  }),
                ],
              }),
            ],
          });
        },
        g = !0,
        f = { name: 'Toast', title: 'Toast | Lazydev ui components' },
        j = function (e) {
          var n = e.children;
          return (0, r.jsx)(l.j, { name: f.name, title: f.title, children: n });
        };
      var v = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = function () {
            var n = Object.assign(
              { p: 'p', pre: 'pre', code: 'code' },
              e.components
            );
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(a.G, {
                  children: [
                    (0, r.jsx)('a', {
                      href: '#default1',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'Default A' }),
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
                    (0, r.jsx)('a', {
                      href: '#iconWithButton',
                      className: 'text-right',
                      children: (0, r.jsx)(n.p, { children: 'With button' }),
                    }),
                  ],
                }),
                '\n',
                (0, r.jsx)(d.$, {
                  leftPath: '/docs/components/sidebar',
                  rightPath: '/docs/components/card',
                }),
                '\n',
                (0, r.jsx)('div', { id: 'default1' }),
                '\n',
                (0, r.jsxs)(t.Z, {
                  name: 'Default A',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: [(0, r.jsx)(m, {}), (0, r.jsx)(o, {})],
                }),
                '\n',
                (0, r.jsx)(i.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdDone, MdClose } from \'react-icons/md\';\n\nexport const DefaultB = () => {\n  return (\n    <>\n      <div className="h-max w-[15rem] md:w-[25rem] p-2 border-2 border-green-400 bg-green-100 rounded-xl flex items-center justify-between">\n        <div className="flex items-center">\n          <div className="flex items-center justify-center w-11 h-11 bg-green-500 rounded-2xl">\n            <span className="flex items-center justify-center bg-white rounded-xl w-6 h-6">\n              <span>\n                <MdDone className="text-green-500" />\n              </span>\n            </span>\n          </div>\n          <div>\n            <p className="text-primary pl-4">A success toast</p>\n          </div>\n        </div>\n        <div>\n          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />\n        </div>\n      </div>\n    </>\n  );\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)('div', { id: 'default2' }),
                '\n',
                (0, r.jsxs)(t.Z, {
                  name: 'Default B',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: [(0, r.jsx)(x, {}), (0, r.jsx)(h, {})],
                }),
                '\n',
                (0, r.jsx)(i.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdOutlineWarningAmber, MdClose } from \'react-icons/md\';\n\nexport const DefaultB = () => {\n  return (\n    <>\n      <div className="h-max w-[15rem] md:w-[25rem] p-2 border-2 border-green-400 bg-green-100 rounded-full flex items-center justify-between">\n        <div className="flex items-center">\n          <div className="flex items-center justify-center w-11 h-11 bg-green-500 rounded-full">\n            <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">\n              <span>\n                <MdOutlineWarningAmber className="text-green-500" />\n              </span>\n            </span>\n          </div>\n          <div>\n            <p className="text-primary pl-4">A success toast</p>\n          </div>\n        </div>\n        <div>\n          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />\n        </div>\n      </div>\n    </>\n  );\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)('div', { id: 'glassmorphism' }),
                '\n',
                (0, r.jsx)(t.Z, {
                  name: 'Glassmorphism',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(u, {}),
                }),
                '\n',
                (0, r.jsx)(i.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdDone, MdClose } from \'react-icons/md\';\n\nexport const Glassmorphism = () => {\n  return (\n    <>\n      <div className="relative z-20 flex items-center w-[15rem] md:w-[25erm] bg-white shadow-lg\n       p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-sm">\n        <div className="flex items-center justify-center bg-green-200 rounded-xl w-6 h-6 mr-3 md:mr-5">\n          <span>\n            <MdDone className="text-green-500" />\n          </span>\n        </div>\n        <div>\n          <h4 className="font-semibold text-green-500">\n            Lazydev ui component\n          </h4>\n          <p className=\'text-xs md:text-sm\'>A glassmorphism toast</p>\n        </div>\n      </div>\n    </>\n  );\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, r.jsx)('div', { id: 'withButton' }),
                '\n',
                (0, r.jsx)(t.Z, {
                  name: 'Toast with Button',
                  paragraph:
                    "Ranglar va ikonkalar ixtiyoriy! O'zingizga ma'qul rangni qo'llashingiz mumkin. Kodni olmoqchi bo'sangiz Show code tugmasini bosing",
                  children: (0, r.jsx)(p, {}),
                }),
                '\n',
                (0, r.jsx)(i.E, {
                  children: (0, r.jsx)(n.pre, {
                    children: (0, r.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdDone, MdClose } from \'react-icons/md\';\n\nexport const WithButton = () => {\n  return (\n    <div className=\'w-[15rem] md:w-[25rem] p-2 border-l-4 border-green-400 bg-white rounded-xl flex flex-col shadow-lg\'>\n      <div className="flex items-center justify-between">\n        <div className="flex items-center">\n          <span className="flex items-center justify-center bg-green-300 rounded-xl w-6 h-6">\n            <span>\n              <MdDone className="text-white" />\n            </span>\n          </span>\n          <div className="pl-4 ">\n            <h3 className="text-primary font-medium">\n              A success toast\n            </h3>\n            <p className="text-xs">Toast with button</p>\n          </div>\n        </div>\n        <div>\n          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />\n        </div>\n      </div>\n      <div className=\'flex items-center space-x-2 w-fit ml-10 my-4\'>\n          <button className=\'w-fit mx-auto py-2 px-4 shadow-lg text-sm duration-300 ease-in-out bg-gray-200 text-primary rounded-md\'>Button</button>\n          <a className=\'text-sm text-gray-400 href="#!">Learn more</a>\n      </div>\n    </div>\n  );\n};\n\n',
                    }),
                  }),
                }),
              ],
            });
          };
        return j
          ? (0, r.jsx)(j, Object.assign({}, e, { children: (0, r.jsx)(n, {}) }))
          : n();
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 1234), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
