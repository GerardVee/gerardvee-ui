module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/linkit/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/gerardvee/gerardvee-ui/components/linkit/Nav.js';

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var picture = _ref.picture,
        children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'nav', __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'titles', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 3
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                { className: 'title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 4
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'colored', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 4
                        }
                    },
                    'L'
                ),
                'ink',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'colored', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 4
                        }
                    },
                    'I'
                ),
                't'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: 'subtitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                'Relevant linking made easy. No sub categories, no comments, no displayed stats, just links. No account required to post.'
            )
        ),
        picture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'linkit-fb-picture', src: picture, height: '50', width: '50', __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'options', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            children
        )
    );
});

/***/ }),

/***/ "./components/linkit/Post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_post__ = __webpack_require__("./lib/post.js");

var _jsxFileName = '/home/gerardvee/gerardvee-ui/components/linkit/Post.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var api = 'https://api.gerardvee.com/';

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { upvote: false, downvote: false }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'onUpvote',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var _props, id, token, res, upvoted;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, id = _props.id, token = _props.token;
                                _context.next = 3;
                                return fetch(api + ('linkit/upvote/' + id), Object(__WEBPACK_IMPORTED_MODULE_4__lib_post__["a" /* default */])({ token: token }));

                            case 3:
                                res = _context.sent;
                                _context.next = 6;
                                return res.json();

                            case 6:
                                upvoted = _context.sent;

                                if (!upvoted.error) {
                                    _context.next = 10;
                                    break;
                                }

                                alert(upvoted.error);
                                return _context.abrupt('return');

                            case 10:
                                this.setState(upvoted);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onUpvote() {
                return _ref2.apply(this, arguments);
            }

            return onUpvote;
        }()
    }, {
        key: 'onDownvote',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var _props2, id, token, res, downvoted;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _props2 = this.props, id = _props2.id, token = _props2.token;
                                _context2.next = 3;
                                return fetch(api + ('linkit/downvote/' + id), Object(__WEBPACK_IMPORTED_MODULE_4__lib_post__["a" /* default */])({ token: token }));

                            case 3:
                                res = _context2.sent;
                                _context2.next = 6;
                                return res.json();

                            case 6:
                                downvoted = _context2.sent;

                                if (!downvoted.error) {
                                    _context2.next = 10;
                                    break;
                                }

                                alert(downvoted.error);
                                return _context2.abrupt('return');

                            case 10:
                                this.setState(downvoted);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onDownvote() {
                return _ref3.apply(this, arguments);
            }

            return onDownvote;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                var _props3, token, id, res, me;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _props3 = this.props, token = _props3.token, id = _props3.id;
                                _context3.next = 3;
                                return fetch(api + 'linkit/me', Object(__WEBPACK_IMPORTED_MODULE_4__lib_post__["a" /* default */])({ token: token }));

                            case 3:
                                res = _context3.sent;
                                _context3.next = 6;
                                return res.json();

                            case 6:
                                me = _context3.sent;

                                if (!!me) {
                                    this.setState({ upvote: me.upvotes.includes(id), downvote: me.downvotes.includes(id) });
                                }

                            case 8:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                upvote = _state.upvote,
                downvote = _state.downvote;
            var _props4 = this.props,
                title = _props4.title,
                link = _props4.link,
                stats = _props4.stats,
                date = _props4.date,
                className = _props4.className;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: className ? className : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'voting-options', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        { className: 'upvote ' + (upvote ? 'upvoted' : ''), onClick: function onClick() {
                                return _this2.onUpvote();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        '\u2B9D'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        { className: 'downvote ' + (downvote ? 'downvoted' : ''), onClick: function onClick() {
                                return _this2.onDownvote();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            }
                        },
                        '\u2B9F'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: !/^((http|https|ftp):\/\/)/.test(link) ? 'http://' + link : link, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        { className: 'linkit-link', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        },
                        title
                    )
                )
            );
        }
    }]);

    return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (_class);

/***/ }),

/***/ "./lib/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (data) {
    return {
        body: JSON.stringify(data),
        mode: 'cors',
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };
});

/***/ }),

/***/ "./pages/projects/linkit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_facebook_auth__ = __webpack_require__("react-facebook-auth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_facebook_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_facebook_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_linkit_Nav__ = __webpack_require__("./components/linkit/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_linkit_Post__ = __webpack_require__("./components/linkit/Post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_post__ = __webpack_require__("./lib/post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_linkit_scss__ = __webpack_require__("./styles/linkit.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_linkit_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_linkit_scss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/home/gerardvee/gerardvee-ui/pages/projects/linkit/index.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * /linkit vs /linkit/ is very different, the latter messes up and causes SSR to mess up
 */











var api = 'https://api.gerardvee.com/';

var FacebookLogin = function FacebookLogin(_ref) {
    var onClick = _ref.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        { className: 'normal-link', onClick: onClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        },
        'Login with Facebook'
    );
};

var FacebookAuthenticate = function FacebookAuthenticate(_ref2) {
    var callback = _ref2.callback;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_facebook_auth___default.a, { autoLoad: true, appId: '176820699610596', callback: callback, component: FacebookLogin, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    });
};

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        var _ref3;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { user: null, me: null }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'auth',
        value: function auth(user) {
            console.log(user);
            this.setState({ user: user });
            fetch(api + 'linkit/me', Object(__WEBPACK_IMPORTED_MODULE_8__lib_post__["a" /* default */])({ token: user.accessToken })).then(function (res) {
                return res.json();
            }).catch(function (error) {
                return console.log('error is occurring ', JSON.stringify(error));
            }).then(function (me) {
                console.log('me is ', JSON.stringify(me));
            }, function (error) {
                return console.log('error is occurring ', JSON.stringify(error));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var posts = this.props.posts;
            var user = this.state.user;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        'LinkIt'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'linkit-home', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__components_linkit_Nav__["a" /* default */],
                        { picture: user ? user.picture.data.url : '', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        !user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FacebookAuthenticate, { callback: function callback(res) {
                                return _this2.auth(res);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                            { href: './linkit/new', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'a',
                                { className: 'normal-link', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 62
                                    }
                                },
                                'Make a new post'
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref4) {
                var req = _ref4.req;
                var res, posts;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch(api + 'linkit/posts');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                posts = _context.sent;
                                return _context.abrupt('return', { posts: posts });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref5.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ "./styles/linkit.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/projects/linkit/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-auth":
/***/ (function(module, exports) {

module.exports = require("react-facebook-auth");

/***/ })

/******/ });
//# sourceMappingURL=linkit.js.map