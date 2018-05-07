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
var _jsxFileName = '/mnt/c/Users/Tony/Desktop/gerardo projects/gerardvee-ui/components/linkit/Nav.js';

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
            { className: 'heading', __source: {
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
                'div',
                { className: 'stacked-options', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                picture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'linkit-fb-picture', src: picture, height: '50', width: '50', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'options', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    children
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'more', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: 'subtitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                'Relevant linking made easy.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'undertitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                'No sub categories, comments, stats, account to post, just links.'
            )
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

var _jsxFileName = '/mnt/c/Users/Tony/Desktop/gerardo projects/gerardvee-ui/components/linkit/Post.js';

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
        key: 'componentDidUpdate',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_props, _state, snapshot) {
                var _props2, me, id;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props2 = this.props, me = _props2.me, id = _props2.id;

                                if (!(_props.me === me)) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 5:
                                if (!!me) {
                                    this.setState({ upvote: me.upvotes.includes(id), downvote: me.downvotes.includes(id) });
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidUpdate(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'onUpvote',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var _props3, id, token, alert, res, upvoted;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _props3 = this.props, id = _props3.id, token = _props3.token, alert = _props3.alert;
                                _context2.next = 3;
                                return fetch(api + ('linkit/upvote/' + id), Object(__WEBPACK_IMPORTED_MODULE_4__lib_post__["a" /* default */])({ token: token }));

                            case 3:
                                res = _context2.sent;
                                _context2.next = 6;
                                return res.json();

                            case 6:
                                upvoted = _context2.sent;

                                if (!upvoted.error) {
                                    _context2.next = 10;
                                    break;
                                }

                                alert(upvoted.error);
                                return _context2.abrupt('return');

                            case 10:
                                this.setState(upvoted);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onUpvote() {
                return _ref3.apply(this, arguments);
            }

            return onUpvote;
        }()
    }, {
        key: 'onDownvote',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                var _props4, id, token, alert, res, downvoted;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _props4 = this.props, id = _props4.id, token = _props4.token, alert = _props4.alert;
                                _context3.next = 3;
                                return fetch(api + ('linkit/downvote/' + id), Object(__WEBPACK_IMPORTED_MODULE_4__lib_post__["a" /* default */])({ token: token }));

                            case 3:
                                res = _context3.sent;
                                _context3.next = 6;
                                return res.json();

                            case 6:
                                downvoted = _context3.sent;

                                if (!downvoted.error) {
                                    _context3.next = 10;
                                    break;
                                }

                                alert(downvoted.error);
                                return _context3.abrupt('return');

                            case 10:
                                this.setState(downvoted);

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onDownvote() {
                return _ref4.apply(this, arguments);
            }

            return onDownvote;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                upvote = _state2.upvote,
                downvote = _state2.downvote;
            var _props5 = this.props,
                title = _props5.title,
                link = _props5.link,
                stats = _props5.stats,
                date = _props5.date,
                className = _props5.className;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: className ? className : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'voting-options', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'i',
                        { className: 'material-icons ' + (upvote ? 'upvoted' : ''), onClick: function onClick() {
                                return _this2.onUpvote();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        'keyboard_arrow_up'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'i',
                        { className: 'material-icons ' + (downvote ? 'downvoted' : ''), onClick: function onClick() {
                                return _this2.onDownvote();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        'keyboard_arrow_down'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: !/^((http|https|ftp):\/\/)/.test(link) ? 'http://' + link : link, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        { className: 'linkit-link', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
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

/* harmony default export */ __webpack_exports__["a"] = (_class);

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
            'Content-Type': 'application/json'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_responsive_modal__ = __webpack_require__("react-responsive-modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_responsive_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_responsive_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_linkit_Nav__ = __webpack_require__("./components/linkit/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_linkit_Post__ = __webpack_require__("./components/linkit/Post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_post__ = __webpack_require__("./lib/post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_linkit_scss__ = __webpack_require__("./styles/linkit.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_linkit_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_linkit_scss__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/mnt/c/Users/Tony/Desktop/gerardo projects/gerardvee-ui/pages/projects/linkit/index.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    need:
    * fix up the entire new user dilema (i'd love to use async on the auth method) // fixed it seems
    * better document and enforce linting
 */












var api = 'https://api.gerardvee.com/';

var FacebookLogin = function FacebookLogin(_ref) {
    var onClick = _ref.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        { className: 'normal-link head-link', onClick: onClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        },
        'Login with Facebook'
    );
};

var FacebookAuthenticate = function FacebookAuthenticate(_ref2) {
    var callback = _ref2.callback,
        auto = _ref2.auto;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_facebook_auth___default.a, { autoLoad: auto, appId: '176820699610596', callback: callback, component: FacebookLogin, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { user: null, me: null, error: '' }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'auth',
        value: function auth(user) {
            var _this2 = this;

            this.setState({ user: user });
            if (!user.id) {
                return;
            }
            fetch(api + 'linkit/user/new', Object(__WEBPACK_IMPORTED_MODULE_9__lib_post__["a" /* default */])({ id: user.id })).then(function (res) {
                return res.json();
            }).then(function (_) {
                fetch(api + 'linkit/me', Object(__WEBPACK_IMPORTED_MODULE_9__lib_post__["a" /* default */])({ token: user.accessToken })).then(function (res) {
                    return res.json();
                }).then(function (me) {
                    _this2.setState({ me: me });
                });
            });
        }
    }, {
        key: 'setError',
        value: function setError(error) {
            this.setState({ error: error });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                posts = _props.posts,
                loggedIn = _props.loggedIn;
            var _state = this.state,
                user = _state.user,
                me = _state.me,
                error = _state.error;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        'LinkIt'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'linkit-home', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_linkit_Nav__["a" /* default */],
                        { picture: user ? user.picture.data.url : '', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        !user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FacebookAuthenticate, { auto: !!loggedIn, callback: function callback(res) {
                                return _this3.auth(res);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
                            { href: './linkit/new?loggedIn=' + !!user, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'a',
                                { className: 'normal-link head-link', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    }
                                },
                                'Make a new post'
                            )
                        )
                    ),
                    (posts || []).map(function (post) {
                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_linkit_Post__["a" /* default */], _extends({ alert: function alert(err) {
                                return _this3.setError(err);
                            }, className: 'linkit-post', key: post.id,
                            me: me, token: !!user ? user.accessToken : '' }, post, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }));
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_responsive_modal___default.a,
                        { open: !!error, onClose: function onClose() {
                                return _this3.setState({ error: '' });
                            }, center: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h1',
                            { className: 'linkit-error-title', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                }
                            },
                            'Error'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h3',
                            { className: 'linkit-error-message', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 84
                                }
                            },
                            error
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref4) {
                var req = _ref4.req,
                    query = _ref4.query;
                var loggedIn, res, posts;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                loggedIn = query.loggedIn;
                                _context.next = 3;
                                return fetch(api + 'linkit/posts');

                            case 3:
                                res = _context.sent;
                                _context.next = 6;
                                return res.json();

                            case 6:
                                posts = _context.sent;
                                return _context.abrupt('return', { posts: posts, loggedIn: loggedIn });

                            case 8:
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

/***/ }),

/***/ "react-responsive-modal":
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ })

/******/ });
//# sourceMappingURL=linkit.js.map