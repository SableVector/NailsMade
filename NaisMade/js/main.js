"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(i).forEach(function (n) {
      void 0 === s[n] ? s[n] = i[n] : e(i[n]) && e(s[n]) && Object.keys(i[n]).length > 0 && t(s[n], i[n]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function i() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var n = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, n), e;
  }

  var a = /*#__PURE__*/function (_Array) {
    _inherits(a, _Array);

    var _super = _createSuper(a);

    function a(e) {
      var _this;

      _classCallCheck(this, a);

      _this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this));
      return _this;
    }

    return a;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function l() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    var s = r(),
        n = i();
    var l = [];
    if (!t && e instanceof a) return e;
    if (!e) return new a(l);

    if ("string" == typeof e) {
      var _s = e.trim();

      if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
        var _e = "div";
        0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

        var _t = n.createElement(_e);

        _t.innerHTML = _s;

        for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
          l.push(_t.childNodes[_e2]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            i = t.querySelectorAll(e);

        for (var _e3 = 0; _e3 < i.length; _e3 += 1) {
          s.push(i[_e3]);
        }

        return s;
      }(e.trim(), t || n);
    } else if (e.nodeType || e === s || e === n) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof a) return e;
      l = e;
    }

    return new a(function (e) {
      var t = [];

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
      }

      return t;
    }(l));
  }

  d.fn = a.prototype;
  var c = "resize scroll".split(" ");

  function p(e) {
    return function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }

      if (void 0 === t[0]) {
        for (var _t2 = 0; _t2 < this.length; _t2 += 1) {
          c.indexOf(e) < 0 && (e in this[_t2] ? this[_t2][e]() : d(this[_t2]).trigger(e));
        }

        return this;
      }

      return this.on.apply(this, [e].concat(t));
    };
  }

  p("click"), p("blur"), p("focus"), p("focusin"), p("focusout"), p("keyup"), p("keydown"), p("keypress"), p("submit"), p("change"), p("mousedown"), p("mousemove"), p("mouseup"), p("mouseenter"), p("mouseleave"), p("mouseout"), p("mouseover"), p("touchstart"), p("touchend"), p("touchmove"), p("resize"), p("scroll");
  var u = {
    addClass: function addClass() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t));
      }), this;
    },
    removeClass: function removeClass() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(t));
      }), this;
    },
    hasClass: function hasClass() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return t.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        t.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
        if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t3 in e) {
          this[_s3][_t3] = e[_t3], this[_s3].setAttribute(_t3, e[_t3]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        this[_t4].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t6 = 0; _t6 < this.length; _t6 += 1) {
        this[_t6].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      var _e5, _e6;

      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      var t = e[0],
          s = e[1],
          i = e[2],
          n = e[3];

      function r(e) {
        var t = e.target;
        if (!t) return;
        var n = e.target.dom7EventData || [];
        if (n.indexOf(e) < 0 && n.unshift(e), d(t).is(s)) i.apply(t, n);else {
          var _e4 = d(t).parents();

          for (var _t7 = 0; _t7 < _e4.length; _t7 += 1) {
            d(_e4[_t7]).is(s) && i.apply(_e4[_t7], n);
          }
        }
      }

      function a(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }

      "function" == typeof e[1] && ((_e5 = e, _e6 = _slicedToArray(_e5, 3), t = _e6[0], i = _e6[1], n = _e6[2], _e5), s = void 0), n || (n = !1);
      var l = t.split(" ");
      var o;

      for (var _e7 = 0; _e7 < this.length; _e7 += 1) {
        var _t8 = this[_e7];
        if (s) for (o = 0; o < l.length; o += 1) {
          var _e8 = l[o];
          _t8.dom7LiveListeners || (_t8.dom7LiveListeners = {}), _t8.dom7LiveListeners[_e8] || (_t8.dom7LiveListeners[_e8] = []), _t8.dom7LiveListeners[_e8].push({
            listener: i,
            proxyListener: r
          }), _t8.addEventListener(_e8, r, n);
        } else for (o = 0; o < l.length; o += 1) {
          var _e9 = l[o];
          _t8.dom7Listeners || (_t8.dom7Listeners = {}), _t8.dom7Listeners[_e9] || (_t8.dom7Listeners[_e9] = []), _t8.dom7Listeners[_e9].push({
            listener: i,
            proxyListener: a
          }), _t8.addEventListener(_e9, a, n);
        }
      }

      return this;
    },
    off: function off() {
      var _e10, _e11;

      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }

      var t = e[0],
          s = e[1],
          i = e[2],
          n = e[3];
      "function" == typeof e[1] && ((_e10 = e, _e11 = _slicedToArray(_e10, 3), t = _e11[0], i = _e11[1], n = _e11[2], _e10), s = void 0), n || (n = !1);
      var r = t.split(" ");

      for (var _e12 = 0; _e12 < r.length; _e12 += 1) {
        var _t9 = r[_e12];

        for (var _e13 = 0; _e13 < this.length; _e13 += 1) {
          var _r = this[_e13];

          var _a = void 0;

          if (!s && _r.dom7Listeners ? _a = _r.dom7Listeners[_t9] : s && _r.dom7LiveListeners && (_a = _r.dom7LiveListeners[_t9]), _a && _a.length) for (var _e14 = _a.length - 1; _e14 >= 0; _e14 -= 1) {
            var _s4 = _a[_e14];
            i && _s4.listener === i || i && _s4.listener && _s4.listener.dom7proxy && _s4.listener.dom7proxy === i ? (_r.removeEventListener(_t9, _s4.proxyListener, n), _a.splice(_e14, 1)) : i || (_r.removeEventListener(_t9, _s4.proxyListener, n), _a.splice(_e14, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        e[_key8] = arguments[_key8];
      }

      var t = r(),
          s = e[0].split(" "),
          i = e[1];

      for (var _n2 = 0; _n2 < s.length; _n2 += 1) {
        var _r2 = s[_n2];

        for (var _s5 = 0; _s5 < this.length; _s5 += 1) {
          var _n3 = this[_s5];

          if (t.CustomEvent) {
            var _s6 = new t.CustomEvent(_r2, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            });

            _n3.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _n3.dispatchEvent(_s6), _n3.dom7EventData = [], delete _n3.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e15 = this.styles();

          return this[0].offsetWidth + parseFloat(_e15.getPropertyValue("margin-right")) + parseFloat(_e15.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e16 = this.styles();

          return this[0].offsetHeight + parseFloat(_e16.getPropertyValue("margin-top")) + parseFloat(_e16.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e17 = r(),
            _t10 = i(),
            _s7 = this[0],
            _n4 = _s7.getBoundingClientRect(),
            _a2 = _t10.body,
            _l = _s7.clientTop || _a2.clientTop || 0,
            _o = _s7.clientLeft || _a2.clientLeft || 0,
            _d2 = _s7 === _e17 ? _e17.scrollY : _s7.scrollTop,
            _c = _s7 === _e17 ? _e17.scrollX : _s7.scrollLeft;

        return {
          top: _n4.top + _d2 - _l,
          left: _n4.left + _c - _o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var i;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var _t11 in e) {
              this[i].style[_t11] = e[_t11];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
        this[_t12].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t13 = 0; _t13 < this.length; _t13 += 1) {
        this[_t13].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = r(),
          s = i(),
          n = this[0];
      var l, o;
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === n) return !0;
        }

        return !1;
      }

      if (e === s) return n === s;
      if (e === t) return n === t;

      if (e.nodeType || e instanceof a) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s8 = t + e;

        return d(_s8 < 0 ? [] : [this[_s8]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var t;
      var s = i();

      for (var _i2 = 0; _i2 < arguments.length; _i2 += 1) {
        t = _i2 < 0 || arguments.length <= _i2 ? undefined : arguments[_i2];

        for (var _e18 = 0; _e18 < this.length; _e18 += 1) {
          if ("string" == typeof t) {
            var _i3 = s.createElement("div");

            for (_i3.innerHTML = t; _i3.firstChild;) {
              this[_e18].appendChild(_i3.firstChild);
            }
          } else if (t instanceof a) for (var _s9 = 0; _s9 < t.length; _s9 += 1) {
            this[_e18].appendChild(t[_s9]);
          } else this[_e18].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = i();
      var s, n;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _i4 = t.createElement("div");

          for (_i4.innerHTML = e, n = _i4.childNodes.length - 1; n >= 0; n -= 1) {
            this[s].insertBefore(_i4.childNodes[n], this[s].childNodes[0]);
          }
        } else if (e instanceof a) for (n = 0; n < e.length; n += 1) {
          this[s].insertBefore(e[n], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        var _i5 = s.nextElementSibling;
        e ? d(_i5).is(e) && t.push(_i5) : t.push(_i5), s = _i5;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t14 = this[0];
        return e ? _t14.previousElementSibling && d(_t14.previousElementSibling).is(e) ? d([_t14.previousElementSibling]) : d([]) : _t14.previousElementSibling ? d([_t14.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _i6 = s.previousElementSibling;
        e ? d(_i6).is(e) && t.push(_i6) : t.push(_i6), s = _i6;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
        null !== this[_s10].parentNode && (e ? d(this[_s10].parentNode).is(e) && t.push(this[_s10].parentNode) : t.push(this[_s10].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
        var _i7 = this[_s11].parentNode;

        for (; _i7;) {
          e ? d(_i7).is(e) && t.push(_i7) : t.push(_i7), _i7 = _i7.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
        var _i8 = this[_s12].querySelectorAll(e);

        for (var _e19 = 0; _e19 < _i8.length; _e19 += 1) {
          t.push(_i8[_e19]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s13 = 0; _s13 < this.length; _s13 += 1) {
        var _i9 = this[_s13].children;

        for (var _s14 = 0; _s14 < _i9.length; _s14 += 1) {
          e && !d(_i9[_s14]).is(e) || t.push(_i9[_s14]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e20 = 0; _e20 < this.length; _e20 += 1) {
        this[_e20].parentNode && this[_e20].parentNode.removeChild(this[_e20]);
      }

      return this;
    }
  };
  Object.keys(u).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: u[e],
      writable: !0
    });
  });
  var h = d;

  function f(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(e, t);
  }

  function m() {
    return Date.now();
  }

  function g(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function v() {
    var t = Object(arguments.length <= 0 ? undefined : arguments[0]),
        s = ["__proto__", "constructor", "prototype"];

    for (var _n5 = 1; _n5 < arguments.length; _n5 += 1) {
      var _r3 = _n5 < 0 || arguments.length <= _n5 ? undefined : arguments[_n5];

      if (null != _r3 && (i = _r3, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
        var _e21 = Object.keys(Object(_r3)).filter(function (e) {
          return s.indexOf(e) < 0;
        });

        for (var _s15 = 0, _i10 = _e21.length; _s15 < _i10; _s15 += 1) {
          var _i11 = _e21[_s15],
              _n6 = Object.getOwnPropertyDescriptor(_r3, _i11);

          void 0 !== _n6 && _n6.enumerable && (g(t[_i11]) && g(_r3[_i11]) ? _r3[_i11].__swiper__ ? t[_i11] = _r3[_i11] : v(t[_i11], _r3[_i11]) : !g(t[_i11]) && g(_r3[_i11]) ? (t[_i11] = {}, _r3[_i11].__swiper__ ? t[_i11] = _r3[_i11] : v(t[_i11], _r3[_i11])) : t[_i11] = _r3[_i11]);
        }
      }
    }

    var i;
    return t;
  }

  function b(e, t, s) {
    e.style.setProperty(t, s);
  }

  function w(_ref) {
    var e = _ref.swiper,
        t = _ref.targetPosition,
        s = _ref.side;
    var i = r(),
        n = -e.translate;
    var a,
        l = null;
    var o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);

    var d = t > n ? "next" : "prev",
        c = function c(e, t) {
      return "next" === d && e >= t || "prev" === d && e <= t;
    },
        p = function p() {
      a = new Date().getTime(), null === l && (l = a);
      var r = Math.max(Math.min((a - l) / o, 1), 0),
          d = .5 - Math.cos(r * Math.PI) / 2;
      var u = n + d * (t - n);
      if (c(u, t) && (u = t), e.wrapperEl.scrollTo(_defineProperty({}, s, u)), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo(_defineProperty({}, s, u));
      }), void i.cancelAnimationFrame(e.cssModeFrameID);
      e.cssModeFrameID = i.requestAnimationFrame(p);
    };

    p();
  }

  var C, T, S;

  function x() {
    return C || (C = function () {
      var e = r(),
          t = i();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;

          try {
            var _s16 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s16);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), C;
  }

  var E = {
    on: function on(e, t, s) {
      var i = this;
      if ("function" != typeof t) return i;
      var n = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t);
      }), i;
    },
    once: function once(e, t, s) {
      var i = this;
      if ("function" != typeof t) return i;

      function n() {
        for (var _len9 = arguments.length, s = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          s[_key9] = arguments[_key9];
        }

        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }

      return n.__emitterProxy = t, i.on(e, n, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if ("function" != typeof e) return s;
      var i = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (i, n) {
          (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var t = this;
      if (!t.eventsListeners) return t;
      var s, i, n;

      for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        e[_key10] = arguments[_key10];
      }

      return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), n = t) : (s = e[0].events, i = e[0].data, n = e[0].context || t), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(function (t) {
          t.apply(n, [e].concat(_toConsumableArray(i)));
        }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(function (e) {
          e.apply(n, i);
        });
      }), t;
    }
  },
      y = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var i = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      var i = e.params,
          n = e.$wrapperEl,
          r = e.size,
          a = e.rtlTranslate,
          l = e.wrongRTL,
          o = e.virtual && i.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = n.children(".".concat(e.params.slideClass)),
          p = o ? e.virtual.slides.length : c.length;
      var u = [];
      var h = [],
          f = [];
      var m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      var g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      var v = e.snapGrid.length,
          w = e.slidesGrid.length;
      var C = i.spaceBetween,
          T = -m,
          S = 0,
          x = 0;
      if (void 0 === r) return;
      "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * r), e.virtualSize = -C, a ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      }), i.centeredSlides && i.cssMode && (b(e.wrapperEl, "--swiper-centered-offset-before", ""), b(e.wrapperEl, "--swiper-centered-offset-after", ""));
      var E = i.grid && i.grid.rows > 1 && e.grid;
      var y;
      E && e.grid.initSlides(p);
      var M = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(function (e) {
        return void 0 !== i.breakpoints[e].slidesPerView;
      }).length > 0;

      for (var _n7 = 0; _n7 < p; _n7 += 1) {
        y = 0;

        var _a3 = c.eq(_n7);

        if (E && e.grid.updateSlide(_n7, _a3, p, t), "none" !== _a3.css("display")) {
          if ("auto" === i.slidesPerView) {
            M && (c[_n7].style[t("width")] = "");

            var _r4 = getComputedStyle(_a3[0]),
                _l2 = _a3[0].style.transform,
                _o2 = _a3[0].style.webkitTransform;

            if (_l2 && (_a3[0].style.transform = "none"), _o2 && (_a3[0].style.webkitTransform = "none"), i.roundLengths) y = e.isHorizontal() ? _a3.outerWidth(!0) : _a3.outerHeight(!0);else {
              var _e22 = s(_r4, "width"),
                  _t15 = s(_r4, "padding-left"),
                  _i12 = s(_r4, "padding-right"),
                  _n8 = s(_r4, "margin-left"),
                  _l3 = s(_r4, "margin-right"),
                  _o3 = _r4.getPropertyValue("box-sizing");

              if (_o3 && "border-box" === _o3) y = _e22 + _n8 + _l3;else {
                var _a3$ = _a3[0],
                    _s17 = _a3$.clientWidth,
                    _r5 = _a3$.offsetWidth;
                y = _e22 + _t15 + _i12 + _n8 + _l3 + (_r5 - _s17);
              }
            }
            _l2 && (_a3[0].style.transform = _l2), _o2 && (_a3[0].style.webkitTransform = _o2), i.roundLengths && (y = Math.floor(y));
          } else y = (r - (i.slidesPerView - 1) * C) / i.slidesPerView, i.roundLengths && (y = Math.floor(y)), c[_n7] && (c[_n7].style[t("width")] = "".concat(y, "px"));

          c[_n7] && (c[_n7].swiperSlideSize = y), f.push(y), i.centeredSlides ? (T = T + y / 2 + S / 2 + C, 0 === S && 0 !== _n7 && (T = T - r / 2 - C), 0 === _n7 && (T = T - r / 2 - C), Math.abs(T) < .001 && (T = 0), i.roundLengths && (T = Math.floor(T)), x % i.slidesPerGroup == 0 && u.push(T), h.push(T)) : (i.roundLengths && (T = Math.floor(T)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(T), h.push(T), T = T + y + C), e.virtualSize += y + C, S = y, x += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && l && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
        width: "".concat(e.virtualSize + i.spaceBetween, "px")
      }), i.setWrapperSize && n.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + i.spaceBetween, "px"))), E && e.grid.updateWrapperSize(y, u, t), !i.centeredSlides) {
        var _t16 = [];

        for (var _s18 = 0; _s18 < u.length; _s18 += 1) {
          var _n9 = u[_s18];
          i.roundLengths && (_n9 = Math.floor(_n9)), u[_s18] <= e.virtualSize - r && _t16.push(_n9);
        }

        u = _t16, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }

      if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
        var _s19 = e.isHorizontal() && a ? "marginLeft" : t("marginRight");

        c.filter(function (e, t) {
          return !i.cssMode || t !== c.length - 1;
        }).css(_defineProperty({}, _s19, "".concat(C, "px")));
      }

      if (i.centeredSlides && i.centeredSlidesBounds) {
        var _e23 = 0;
        f.forEach(function (t) {
          _e23 += t + (i.spaceBetween ? i.spaceBetween : 0);
        }), _e23 -= i.spaceBetween;

        var _t17 = _e23 - r;

        u = u.map(function (e) {
          return e < 0 ? -m : e > _t17 ? _t17 + g : e;
        });
      }

      if (i.centerInsufficientSlides) {
        var _e24 = 0;

        if (f.forEach(function (t) {
          _e24 += t + (i.spaceBetween ? i.spaceBetween : 0);
        }), _e24 -= i.spaceBetween, _e24 < r) {
          var _t18 = (r - _e24) / 2;

          u.forEach(function (e, s) {
            u[s] = e - _t18;
          }), h.forEach(function (e, s) {
            h[s] = e + _t18;
          });
        }
      }

      if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: f
      }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        b(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), b(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");

        var _t19 = -e.snapGrid[0],
            _s20 = -e.slidesGrid[0];

        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t19;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s20;
        });
      }

      p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
      var n,
          r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      var a = function a(e) {
        return i ? t.slides.filter(function (t) {
          return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
        })[0] : t.slides.eq(e)[0];
      };

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) t.visibleSlides.each(function (e) {
          s.push(e);
        });else for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
          var _e25 = t.activeIndex + n;

          if (_e25 > t.slides.length && !i) break;
          s.push(a(_e25));
        }
      } else s.push(a(t.activeIndex));

      for (n = 0; n < s.length; n += 1) {
        if (void 0 !== s[n]) {
          var _e26 = s[n].offsetHeight;
          r = _e26 > r ? _e26 : r;
        }
      }

      r && t.$wrapperEl.css("height", "".concat(r, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _s21 = 0; _s21 < t.length; _s21 += 1) {
        t[_s21].swiperSlideOffset = e.isHorizontal() ? t[_s21].offsetLeft : t[_s21].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          s = t.params,
          i = t.slides,
          n = t.rtlTranslate;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      var r = -e;
      n && (r = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e27 = 0; _e27 < i.length; _e27 += 1) {
        var _a4 = i[_e27];
        var _l4 = _a4.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_l4 -= i[0].swiperSlideOffset);

        var _o4 = (r + (s.centeredSlides ? t.minTranslate() : 0) - _l4) / (_a4.swiperSlideSize + s.spaceBetween),
            _d3 = -(r - _l4),
            _c2 = _d3 + t.slidesSizesGrid[_e27];

        (_d3 >= 0 && _d3 < t.size - 1 || _c2 > 1 && _c2 <= t.size || _d3 <= 0 && _c2 >= t.size) && (t.visibleSlides.push(_a4), t.visibleSlidesIndexes.push(_e27), i.eq(_e27).addClass(s.slideVisibleClass)), _a4.progress = n ? -_o4 : _o4;
      }

      t.visibleSlides = h(t.visibleSlides);
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (void 0 === e) {
        var _s22 = t.rtlTranslate ? -1 : 1;

        e = t && t.translate && t.translate * _s22 || 0;
      }

      var s = t.params,
          i = t.maxTranslate() - t.minTranslate();
      var n = t.progress,
          r = t.isBeginning,
          a = t.isEnd;
      var l = r,
          o = a;
      0 === i ? (n = 0, r = !0, a = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, a = n >= 1), Object.assign(t, {
        progress: n,
        isBeginning: r,
        isEnd: a
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), a && !o && t.emit("reachEnd toEdge"), (l && !r || o && !a) && t.emit("fromEdge"), t.emit("progress", n);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          i = e.$wrapperEl,
          n = e.activeIndex,
          r = e.realIndex,
          a = e.virtual && s.virtual.enabled;
      var l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = a ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]")) : t.eq(n), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
      var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          i = t.slidesGrid,
          n = t.snapGrid,
          r = t.params,
          a = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
      var d,
          c = e;

      if (void 0 === c) {
        for (var _e28 = 0; _e28 < i.length; _e28 += 1) {
          void 0 !== i[_e28 + 1] ? s >= i[_e28] && s < i[_e28 + 1] - (i[_e28 + 1] - i[_e28]) / 2 ? c = _e28 : s >= i[_e28] && s < i[_e28 + 1] && (c = _e28 + 1) : s >= i[_e28] && (c = _e28);
        }

        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if (n.indexOf(s) >= 0) d = n.indexOf(s);else {
        var _e29 = Math.min(r.slidesPerGroupSkip, c);

        d = _e29 + Math.floor((c - _e29) / r.slidesPerGroup);
      }
      if (d >= n.length && (d = n.length - 1), c === a) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: a,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          i = h(e.target).closest(".".concat(s.slideClass))[0];
      var n,
          r = !1;
      if (i) for (var _e30 = 0; _e30 < t.slides.length; _e30 += 1) {
        if (t.slides[_e30] === i) {
          r = !0, n = _e30;
          break;
        }
      }
      if (!i || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(h(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };

  function M(_ref2) {
    var e = _ref2.swiper,
        t = _ref2.runCallbacks,
        s = _ref2.direction,
        i = _ref2.step;
    var n = e.activeIndex,
        r = e.previousIndex;
    var a = s;

    if (a || (a = n > r ? "next" : n < r ? "prev" : "reset"), e.emit("transition".concat(i)), t && n !== r) {
      if ("reset" === a) return void e.emit("slideResetTransition".concat(i));
      e.emit("slideChangeTransition".concat(i)), "next" === a ? e.emit("slideNextTransition".concat(i)) : e.emit("slidePrevTransition".concat(i));
    }
  }

  var k = {
    slideTo: function slideTo() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var i = arguments.length > 3 ? arguments[3] : undefined;
      var n = arguments.length > 4 ? arguments[4] : undefined;
      if ("number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

      if ("string" == typeof e) {
        var _t20 = parseInt(e, 10);

        if (!isFinite(_t20)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t20;
      }

      var r = this;
      var a = e;
      a < 0 && (a = 0);
      var l = r.params,
          o = r.snapGrid,
          d = r.slidesGrid,
          c = r.previousIndex,
          p = r.activeIndex,
          u = r.rtlTranslate,
          h = r.wrapperEl,
          f = r.enabled;
      if (r.animating && l.preventInteractionOnTransition || !f && !i && !n) return !1;
      var m = Math.min(r.params.slidesPerGroupSkip, a);
      var g = m + Math.floor((a - m) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
      var v = -o[g];
      if (r.updateProgress(v), l.normalizeSlideIndex) for (var _e31 = 0; _e31 < d.length; _e31 += 1) {
        var _t21 = -Math.floor(100 * v),
            _s23 = Math.floor(100 * d[_e31]),
            _i13 = Math.floor(100 * d[_e31 + 1]);

        void 0 !== d[_e31 + 1] ? _t21 >= _s23 && _t21 < _i13 - (_i13 - _s23) / 2 ? a = _e31 : _t21 >= _s23 && _t21 < _i13 && (a = _e31 + 1) : _t21 >= _s23 && (a = _e31);
      }

      if (r.initialized && a !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== a) return !1;
      }

      var b;
      if (b = a > p ? "next" : a < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

      if (l.cssMode) {
        var _e32 = r.isHorizontal(),
            _s24 = u ? v : -v;

        if (0 === t) {
          var _t22 = r.virtual && r.params.virtual.enabled;

          _t22 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e32 ? "scrollLeft" : "scrollTop"] = _s24, _t22 && requestAnimationFrame(function () {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: _s24,
            side: _e32 ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e32 ? "left" : "top", _s24), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }

        return !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
    },
    slideToLoop: function slideToLoop() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var i = arguments.length > 3 ? arguments[3] : undefined;
      var n = this;
      var r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
    },
    slideNext: function slideNext() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = this,
          n = i.animating,
          r = i.enabled,
          a = i.params;
      if (!r) return i;
      var l = a.slidesPerGroup;
      "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      var o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l;

      if (a.loop) {
        if (n && a.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }

      return i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function slidePrev() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = this,
          n = i.params,
          r = i.animating,
          a = i.snapGrid,
          l = i.slidesGrid,
          o = i.rtlTranslate,
          d = i.enabled;
      if (!d) return i;

      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p = c(o ? i.translate : -i.translate),
          u = a.map(function (e) {
        return c(e);
      });
      var h = a[u.indexOf(p) - 1];

      if (void 0 === h && n.cssMode) {
        var _e33;

        a.forEach(function (t, s) {
          p >= t && (_e33 = s);
        }), void 0 !== _e33 && (h = a[_e33 > 0 ? _e33 - 1 : _e33]);
      }

      var f = 0;
      return void 0 !== h && (f = l.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.slideTo(f, e, t, s);
    },
    slideReset: function slideReset() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;
      var n = this;
      var r = n.activeIndex;
      var a = Math.min(n.params.slidesPerGroupSkip, r),
          l = a + Math.floor((r - a) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;

      if (o >= n.snapGrid[l]) {
        var _e34 = n.snapGrid[l];
        o - _e34 > (n.snapGrid[l + 1] - _e34) * i && (r += n.params.slidesPerGroup);
      } else {
        var _e35 = n.snapGrid[l - 1];
        o - _e35 <= (n.snapGrid[l] - _e35) * i && (r -= n.params.slidesPerGroup);
      }

      return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var n,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        n = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), f(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), f(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  },
      $ = {
    loopCreate: function loopCreate() {
      var e = this,
          t = i(),
          s = e.params,
          n = e.$wrapperEl;
      n.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
      var r = n.children(".".concat(s.slideClass));

      if (s.loopFillGroupWithBlank) {
        var _e36 = s.slidesPerGroup - r.length % s.slidesPerGroup;

        if (_e36 !== s.slidesPerGroup) {
          for (var _i14 = 0; _i14 < _e36; _i14 += 1) {
            var _e37 = h(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

            n.append(_e37);
          }

          r = n.children(".".concat(s.slideClass));
        }
      }

      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
      var a = [],
          l = [];
      r.each(function (t, s) {
        var i = h(t);
        s < e.loopedSlides && l.push(t), s < r.length && s >= r.length - e.loopedSlides && a.push(t), i.attr("data-swiper-slide-index", s);
      });

      for (var _e38 = 0; _e38 < l.length; _e38 += 1) {
        n.append(h(l[_e38].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }

      for (var _e39 = a.length - 1; _e39 >= 0; _e39 -= 1) {
        n.prepend(h(a[_e39].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this;
      e.emit("beforeLoopFix");
      var t = e.activeIndex,
          s = e.slides,
          i = e.loopedSlides,
          n = e.allowSlidePrev,
          r = e.allowSlideNext,
          a = e.snapGrid,
          l = e.rtlTranslate;
      var o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var d = -a[t] - e.getTranslate();
      t < i ? (o = s.length - 3 * i + t, o += i, e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)) : t >= s.length - i && (o = -s.length + t + i, o += i, e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          s = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };

  function P(e) {
    var t = this,
        s = i(),
        n = r(),
        a = t.touchEventsData,
        l = t.params,
        o = t.touches,
        d = t.enabled;
    if (!d) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var c = e;
    c.originalEvent && (c = c.originalEvent);
    var p = h(c.target);
    if ("wrapper" === l.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
    if (a.isTouchEvent = "touchstart" === c.type, !a.isTouchEvent && "which" in c && 3 === c.which) return;
    if (!a.isTouchEvent && "button" in c && c.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    l.noSwipingClass && "" !== l.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = h(e.path[0]));
    var u = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        f = !(!c.target || !c.target.shadowRoot);
    if (l.noSwiping && (f ? function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      return function t(s) {
        return s && s !== i() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
      }(t);
    }(u, c.target) : p.closest(u)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
    var g = o.currentX,
        v = o.currentY,
        b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (b && (g <= w || g >= n.innerWidth - w)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }

    if (Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, a.touchStartTime = m(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== c.type) {
      var _e40 = !0;

      p.is(a.focusableElements) && (_e40 = !1), s.activeElement && h(s.activeElement).is(a.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();

      var _i15 = _e40 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_i15 || p[0].isContentEditable || c.preventDefault();
    }

    t.emit("touchStart", c);
  }

  function L(e) {
    var t = i(),
        s = this,
        n = s.touchEventsData,
        r = s.params,
        a = s.touches,
        l = s.rtlTranslate,
        o = s.enabled;
    if (!o) return;
    var d = e;
    if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void (n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
    if (n.isTouchEvent && "touchmove" !== d.type) return;
    var c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
        p = "touchmove" === d.type ? c.pageX : d.pageX,
        u = "touchmove" === d.type ? c.pageY : d.pageY;
    if (d.preventedByNestedSwiper) return a.startX = p, void (a.startY = u);
    if (!s.allowTouchMove) return s.allowClick = !1, void (n.isTouched && (Object.assign(a, {
      startX: p,
      startY: u,
      currentX: p,
      currentY: u
    }), n.touchStartTime = m()));
    if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (u < a.startY && s.translate <= s.maxTranslate() || u > a.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void (n.isMoved = !1);
    } else if (p < a.startX && s.translate <= s.maxTranslate() || p > a.startX && s.translate >= s.minTranslate()) return;
    if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && h(d.target).is(n.focusableElements)) return n.isMoved = !0, void (s.allowClick = !1);
    if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
    a.currentX = p, a.currentY = u;
    var f = a.currentX - a.startX,
        g = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === n.isScrolling) {
      var _e41;

      s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : f * f + g * g >= 25 && (_e41 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? _e41 > r.touchAngle : 90 - _e41 > r.touchAngle);
    }

    if (n.isScrolling && s.emit("touchMoveOpposite", d), void 0 === n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)), n.isScrolling) return void (n.isTouched = !1);
    if (!n.startMoving) return;
    s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), n.isMoved || (r.loop && !r.cssMode && s.loopFix(), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), n.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    a.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", n.currentTranslate = v + n.startTranslate;
    var b = !0,
        w = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (w = 0), v > 0 && n.currentTranslate > s.minTranslate() ? (b = !1, r.resistance && (n.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + n.startTranslate + v, w))) : v < 0 && n.currentTranslate < s.maxTranslate() && (b = !1, r.resistance && (n.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - n.startTranslate - v, w))), b && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || n.allowThresholdMove)) return void (n.currentTranslate = n.startTranslate);
      if (!n.allowThresholdMove) return n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate));
  }

  function O(e) {
    var t = this,
        s = t.touchEventsData,
        i = t.params,
        n = t.touches,
        r = t.rtlTranslate,
        a = t.slidesGrid,
        l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = m(),
        c = d - s.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = m(), f(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var p;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
    if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: p
    });
    var u = 0,
        h = t.slidesSizesGrid[0];

    for (var _e42 = 0; _e42 < a.length; _e42 += _e42 < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
      var _t23 = _e42 < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

      void 0 !== a[_e42 + _t23] ? p >= a[_e42] && p < a[_e42 + _t23] && (u = _e42, h = a[_e42 + _t23] - a[_e42]) : p >= a[_e42] && (u = _e42, h = a[a.length - 1] - a[a.length - 2]);
    }

    var g = (p - a[u]) / h,
        v = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(u + v) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(u + v) : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation || o.target !== t.navigation.nextEl && o.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(u + v), "prev" === t.swipeDirection && t.slideTo(u)) : o.target === t.navigation.nextEl ? t.slideTo(u + v) : t.slideTo(u);
    }
  }

  function A() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var i = e.allowSlideNext,
        n = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function z(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function I() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        i = e.enabled;
    if (!i) return;
    var n;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var G = !1;

  function D() {}

  var B = function B(e, t) {
    var s = i(),
        n = e.params,
        r = e.touchEvents,
        a = e.el,
        l = e.wrapperEl,
        o = e.device,
        d = e.support,
        c = !!n.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t24 = !("touchstart" !== r.start || !d.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      a[p](r.start, e.onTouchStart, _t24), a[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), a[p](r.end, e.onTouchEnd, _t24), r.cancel && a[p](r.cancel, e.onTouchEnd, _t24);
    } else a[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (n.preventClicks || n.preventClicksPropagation) && a[p]("click", e.onClick, !0), n.cssMode && l[p]("scroll", e.onScroll), n.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
  },
      _ = {
    attachEvents: function attachEvents() {
      var e = this,
          t = i(),
          s = e.params,
          n = e.support;
      e.onTouchStart = P.bind(e), e.onTouchMove = L.bind(e), e.onTouchEnd = O.bind(e), s.cssMode && (e.onScroll = I.bind(e)), e.onClick = z.bind(e), n.touch && !G && (t.addEventListener("touchstart", D), G = !0), B(e, "on");
    },
    detachEvents: function detachEvents() {
      B(this, "off");
    }
  },
      N = function N(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  },
      H = {
    addClasses: function addClasses() {
      var e = this,
          t = e.classNames,
          s = e.params,
          i = e.rtl,
          n = e.$el,
          r = e.device,
          a = e.support,
          l = function (e, t) {
        var s = [];
        return e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
            e[i] && s.push(t + i);
          }) : "string" == typeof e && s.push(t + e);
        }), s;
      }(["initialized", s.direction, {
        "pointer-events": !a.touch
      }, {
        "free-mode": e.params.freeMode && s.freeMode.enabled
      }, {
        autoheight: s.autoHeight
      }, {
        rtl: i
      }, {
        grid: s.grid && s.grid.rows > 1
      }, {
        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
      }, {
        android: r.android
      }, {
        ios: r.ios
      }, {
        "css-mode": s.cssMode
      }, {
        centered: s.cssMode && s.centeredSlides
      }], s.containerModifierClass);

      t.push.apply(t, _toConsumableArray(l)), n.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
    },
    removeClasses: function removeClasses() {
      var e = this.$el,
          t = this.classNames;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    }
  },
      j = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function F(e, t) {
    return function () {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var i = Object.keys(s)[0],
          n = s[i];
      "object" == _typeof(n) && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
        auto: !0
      }), i in e && "enabled" in n ? (!0 === e[i] && (e[i] = {
        enabled: !0
      }), "object" != _typeof(e[i]) || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
        enabled: !1
      }), v(t, s)) : v(t, s)) : v(t, s);
    };
  }

  var V = {
    eventsEmitter: E,
    update: y,
    translate: {
      getTranslate: function getTranslate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
        var t = this.params,
            s = this.rtlTranslate,
            i = this.translate,
            n = this.$wrapperEl;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;

        var a = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
          var s = r();
          var i, n, a;

          var l = function (e) {
            var t = r();
            var s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
          }(e);

          return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0;
        }(n[0], e);

        return s && (a = -a), a || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var s = this,
            i = s.rtlTranslate,
            n = s.params,
            r = s.$wrapperEl,
            a = s.wrapperEl,
            l = s.progress;
        var o,
            d = 0,
            c = 0;
        s.isHorizontal() ? d = i ? -e : e : c = e, n.roundLengths && (d = Math.floor(d), c = Math.floor(c)), n.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : n.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
        var p = s.maxTranslate() - s.minTranslate();
        o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = arguments.length > 4 ? arguments[4] : undefined;
        var r = this,
            a = r.params,
            l = r.wrapperEl;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        var o = r.minTranslate(),
            d = r.maxTranslate();
        var c;

        if (c = i && e > o ? o : i && e < d ? d : e, r.updateProgress(c), a.cssMode) {
          var _e43 = r.isHorizontal();

          if (0 === t) l[_e43 ? "scrollLeft" : "scrollTop"] = -c;else {
            var _l$scrollTo;

            if (!r.support.smoothScroll) return w({
              swiper: r,
              targetPosition: -c,
              side: _e43 ? "left" : "top"
            }), !0;
            l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e43 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
          }
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            i = s.params;
        i.cssMode || (i.autoHeight && s.updateAutoHeight(), M({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            i = s.params;
        s.animating = !1, i.cssMode || (s.setTransition(0), M({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: $,
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: _,
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            i = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            n = e.params,
            r = e.$el,
            a = n.breakpoints;
        if (!a || a && 0 === Object.keys(a).length) return;
        var l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        var o = (l in a ? a[l] : void 0) || e.originalParams,
            d = N(e, n),
            c = N(e, o),
            p = n.enabled;
        d && !c ? (r.removeClass("".concat(n.containerModifierClass, "grid ").concat(n.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(n.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === n.grid.fill) && r.addClass("".concat(n.containerModifierClass, "grid-column")), e.emitContainerClasses());
        var u = o.direction && o.direction !== n.direction,
            h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
        u && s && e.changeDirection(), v(e.params, o);
        var f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "window";
        var s = arguments.length > 2 ? arguments[2] : undefined;
        if (!e || "container" === t && !s) return;
        var i = !1;
        var n = r(),
            a = "window" === t ? n.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t25 = parseFloat(e.substr(1));

            return {
              value: a * _t25,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e44 = 0; _e44 < l.length; _e44 += 1) {
          var _l$_e = l[_e44],
              _r6 = _l$_e.point,
              _a5 = _l$_e.value;
          "window" === t ? n.matchMedia("(min-width: ".concat(_a5, "px)")).matches && (i = _r6) : _a5 <= s.clientWidth && (i = _r6);
        }

        return i || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            i = s.slidesOffsetBefore;

        if (i) {
          var _t26 = e.slides.length - 1,
              _s25 = e.slidesGrid[_t26] + e.slidesSizesGrid[_t26] + 2 * i;

          e.isLocked = e.size > _s25;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: H,
    images: {
      loadImage: function loadImage(e, t, s, i, n, a) {
        var l = r();
        var o;

        function d() {
          a && a();
        }

        h(e).parent("picture")[0] || e.complete && n ? d() : t ? (o = new l.Image(), o.onload = d, o.onerror = d, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s26 = 0; _s26 < e.imagesToLoad.length; _s26 += 1) {
          var _i16 = e.imagesToLoad[_s26];
          e.loadImage(_i16, _i16.currentSrc || _i16.getAttribute("src"), _i16.srcset || _i16.getAttribute("srcset"), _i16.sizes || _i16.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      W = {};

  var q = /*#__PURE__*/function () {
    function q() {
      var _e45, _e46, _i$modules;

      _classCallCheck(this, q);

      var t, s;

      for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        e[_key11] = arguments[_key11];
      }

      if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : (_e45 = e, _e46 = _slicedToArray(_e45, 2), t = _e46[0], s = _e46[1], _e45), s || (s = {}), s = v({}, s), t && !s.el && (s.el = t), s.el && h(s.el).length > 1) {
        var _e47 = [];
        return h(s.el).each(function (t) {
          var i = v({}, s, {
            el: t
          });

          _e47.push(new q(i));
        }), _e47;
      }

      var i = this;
      i.__swiper__ = !0, i.support = x(), i.device = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return T || (T = function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref3.userAgent;

          var t = x(),
              s = r(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              a = {
            ios: !1,
            android: !1
          },
              l = s.screen.width,
              o = s.screen.height,
              d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          var c = n.match(/(iPad).*OS\s([\d_]+)/);
          var p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
          var f = "MacIntel" === i;
          return !c && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), f = !1), d && !h && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a;
        }(e)), T;
      }({
        userAgent: s.userAgent
      }), i.browser = (S || (S = function () {
        var e = r();
        return {
          isSafari: function () {
            var t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
          }(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
        };
      }()), S), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = _toConsumableArray(i.__modules__), s.modules && Array.isArray(s.modules) && (_i$modules = i.modules).push.apply(_i$modules, _toConsumableArray(s.modules));
      var n = {};
      i.modules.forEach(function (e) {
        e({
          swiper: i,
          extendParams: F(s, n),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i)
        });
      });
      var a = v({}, j, n);
      return i.params = v({}, a, W, s), i.originalParams = v({}, i.params), i.passedParams = v({}, s), i.params && i.params.on && Object.keys(i.params.on).forEach(function (e) {
        i.on(e, i.params.on[e]);
      }), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = h, Object.assign(i, {
        enabled: i.params.enabled,
        el: t,
        classNames: [],
        slides: h(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === i.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === i.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
          return i.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, i.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: m(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), i.emit("_swiper"), i.params.init && i.init(), i;
    }

    _createClass(q, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = s.minTranslate(),
            n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var i = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: i
          }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "current";
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var s = this.params,
            i = this.slides,
            n = this.slidesGrid,
            r = this.slidesSizesGrid,
            a = this.size,
            l = this.activeIndex;
        var o = 1;

        if (s.centeredSlides) {
          var _e48,
              _t27 = i[l].swiperSlideSize;

          for (var _s27 = l + 1; _s27 < i.length; _s27 += 1) {
            i[_s27] && !_e48 && (_t27 += i[_s27].swiperSlideSize, o += 1, _t27 > a && (_e48 = !0));
          }

          for (var _s28 = l - 1; _s28 >= 0; _s28 -= 1) {
            i[_s28] && !_e48 && (_t27 += i[_s28].swiperSlideSize, o += 1, _t27 > a && (_e48 = !0));
          }
        } else if ("current" === e) for (var _e49 = l + 1; _e49 < i.length; _e49 += 1) {
          (t ? n[_e49] + r[_e49] - n[l] < a : n[_e49] - n[l] < a) && (o += 1);
        } else for (var _e50 = l - 1; _e50 >= 0; _e50 -= 1) {
          n[l] - n[_e50] < a && (o += 1);
        }

        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var n;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(i)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = h(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        var n = function n() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t28 = h(e.shadowRoot.querySelector(n()));

            return _t28.children = function (e) {
              return s.children(e);
            }, _t28;
          }

          return s.children(n());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e51 = i().createElement("div");

          r = h(_e51), _e51.className = t.params.wrapperClass, s.append(_e51), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            i = s.params,
            n = s.$el,
            r = s.$wrapperEl,
            a = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        v(W, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return W;
      }
    }, {
      key: "defaults",
      get: function get() {
        return j;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        q.prototype.__modules__ || (q.prototype.__modules__ = []);
        var t = q.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return q.installModule(e);
        }), q) : (q.installModule(e), q);
      }
    }]);

    return q;
  }();

  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      q.prototype[t] = V[e][t];
    });
  }), q.use([function (_ref4) {
    var e = _ref4.swiper,
        t = _ref4.on,
        s = _ref4.emit;
    var i = r();
    var n = null;

    var a = function a() {
      e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"));
    },
        l = function l() {
      e && !e.destroyed && e.initialized && s("orientationchange");
    };

    t("init", function () {
      e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (n = new ResizeObserver(function (t) {
        var s = e.width,
            i = e.height;
        var n = s,
            r = i;
        t.forEach(function (_ref5) {
          var t = _ref5.contentBoxSize,
              s = _ref5.contentRect,
              i = _ref5.target;
          i && i !== e.el || (n = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
        }), n === s && r === i || a();
      }), n.observe(e.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", l));
    }), t("destroy", function () {
      n && n.unobserve && e.el && (n.unobserve(e.el), n = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", l);
    });
  }, function (_ref6) {
    var e = _ref6.swiper,
        t = _ref6.extendParams,
        s = _ref6.on,
        i = _ref6.emit;

    var n = [],
        a = r(),
        l = function l(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void i("observerUpdate", e[0]);

        var t = function t() {
          i("observerUpdate", e[0]);
        };

        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.push(s);
    };

    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", function () {
      if (e.params.observer) {
        if (e.params.observeParents) {
          var _t29 = e.$el.parents();

          for (var _e52 = 0; _e52 < _t29.length; _e52 += 1) {
            l(_t29[_e52]);
          }
        }

        l(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), l(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), s("destroy", function () {
      n.forEach(function (e) {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  var R = q;

  function X(e, t, s, n) {
    var r = i();
    return e.params.createElements && Object.keys(n).forEach(function (i) {
      if (!s[i] && !0 === s.auto) {
        var _a6 = e.$el.children(".".concat(n[i]))[0];
        _a6 || (_a6 = r.createElement("div"), _a6.className = n[i], e.$el.append(_a6)), s[i] = _a6, t[i] = _a6;
      }
    }), s;
  }

  function Y(_ref7) {
    var e = _ref7.swiper,
        t = _ref7.extendParams,
        s = _ref7.on,
        i = _ref7.emit;

    function n(t) {
      var s;
      return t && (s = h(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
    }

    function r(t, s) {
      var i = e.params.navigation;
      t && t.length > 0 && (t[s ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }

    function a() {
      if (e.params.loop) return;
      var _e$navigation = e.navigation,
          t = _e$navigation.$nextEl,
          s = _e$navigation.$prevEl;
      r(s, e.isBeginning), r(t, e.isEnd);
    }

    function l(t) {
      t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev();
    }

    function o(t) {
      t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext();
    }

    function d() {
      var t = e.params.navigation;
      if (e.params.navigation = X(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !t.nextEl && !t.prevEl) return;
      var s = n(t.nextEl),
          i = n(t.prevEl);
      s && s.length > 0 && s.on("click", o), i && i.length > 0 && i.on("click", l), Object.assign(e.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: i,
        prevEl: i && i[0]
      }), e.enabled || (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
    }

    function c() {
      var _e$navigation2 = e.navigation,
          t = _e$navigation2.$nextEl,
          s = _e$navigation2.$prevEl;
      t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
    }

    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    }), e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, s("init", function () {
      d(), a();
    }), s("toEdge fromEdge lock unlock", function () {
      a();
    }), s("destroy", function () {
      c();
    }), s("enable disable", function () {
      var _e$navigation3 = e.navigation,
          t = _e$navigation3.$nextEl,
          s = _e$navigation3.$prevEl;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
    }), s("click", function (t, s) {
      var _e$navigation4 = e.navigation,
          n = _e$navigation4.$nextEl,
          r = _e$navigation4.$prevEl,
          a = s.target;

      if (e.params.navigation.hideOnClick && !h(a).is(r) && !h(a).is(n)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;

        var _t30;

        n ? _t30 = n.hasClass(e.params.navigation.hiddenClass) : r && (_t30 = r.hasClass(e.params.navigation.hiddenClass)), i(!0 === _t30 ? "navigationShow" : "navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
      }
    }), Object.assign(e.navigation, {
      update: a,
      init: d,
      destroy: c
    });
  }

  function U() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function K(_ref8) {
    var e = _ref8.swiper,
        t = _ref8.extendParams,
        s = _ref8.on,
        i = _ref8.emit;
    var n = "swiper-pagination";
    var r;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(n, "-bullet"),
        bulletActiveClass: "".concat(n, "-bullet-active"),
        modifierClass: "".concat(n, "-"),
        currentClass: "".concat(n, "-current"),
        totalClass: "".concat(n, "-total"),
        hiddenClass: "".concat(n, "-hidden"),
        progressbarFillClass: "".concat(n, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(n, "-progressbar-opposite"),
        clickableClass: "".concat(n, "-clickable"),
        lockClass: "".concat(n, "-lock"),
        horizontalClass: "".concat(n, "-horizontal"),
        verticalClass: "".concat(n, "-vertical")
      }
    }), e.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var a = 0;

    function l() {
      return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
    }

    function o(t, s) {
      var i = e.params.pagination.bulletActiveClass;
      t[s]().addClass("".concat(i, "-").concat(s))[s]().addClass("".concat(i, "-").concat(s, "-").concat(s));
    }

    function d() {
      var t = e.rtl,
          s = e.params.pagination;
      if (l()) return;
      var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          d = e.pagination.$el;
      var c;
      var p = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > n - 1 - 2 * e.loopedSlides && (c -= n - 2 * e.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== e.params.paginationType && (c = p + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _i17 = e.pagination.bullets;

        var _n10, _l5, _p;

        if (s.dynamicBullets && (r = _i17.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (a += c - e.previousIndex, a > s.dynamicMainBullets - 1 ? a = s.dynamicMainBullets - 1 : a < 0 && (a = 0)), _n10 = c - a, _l5 = _n10 + (Math.min(_i17.length, s.dynamicMainBullets) - 1), _p = (_l5 + _n10) / 2), _i17.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), d.length > 1) _i17.each(function (e) {
          var t = h(e),
              i = t.index();
          i === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (i >= _n10 && i <= _l5 && t.addClass("".concat(s.bulletActiveClass, "-main")), i === _n10 && o(t, "prev"), i === _l5 && o(t, "next"));
        });else {
          var _t31 = _i17.eq(c),
              _r7 = _t31.index();

          if (_t31.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _t32 = _i17.eq(_n10),
                _a7 = _i17.eq(_l5);

            for (var _e53 = _n10; _e53 <= _l5; _e53 += 1) {
              _i17.eq(_e53).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (e.params.loop) {
              if (_r7 >= _i17.length - s.dynamicMainBullets) {
                for (var _e54 = s.dynamicMainBullets; _e54 >= 0; _e54 -= 1) {
                  _i17.eq(_i17.length - _e54).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _i17.eq(_i17.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else o(_t32, "prev"), o(_a7, "next");
            } else o(_t32, "prev"), o(_a7, "next");
          }
        }

        if (s.dynamicBullets) {
          var _n11 = Math.min(_i17.length, s.dynamicMainBullets + 4),
              _a8 = (r * _n11 - r) / 2 - _p * r,
              _l6 = t ? "right" : "left";

          _i17.css(e.isHorizontal() ? _l6 : "top", "".concat(_a8, "px"));
        }
      }

      if ("fraction" === s.type && (d.find(U(s.currentClass)).text(s.formatFractionCurrent(c + 1)), d.find(U(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
        var _t33;

        _t33 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _i18 = (c + 1) / p;

        var _n12 = 1,
            _r8 = 1;
        "horizontal" === _t33 ? _n12 = _i18 : _r8 = _i18, d.find(U(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_n12, ") scaleY(").concat(_r8, ")")).transition(e.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (d.html(s.renderCustom(e, c + 1, p)), i("paginationRender", d[0])) : i("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function c() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          n = e.pagination.$el;
      var r = "";

      if ("bullets" === t.type) {
        var _i19 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && _i19 > s && (_i19 = s);

        for (var _s29 = 0; _s29 < _i19; _s29 += 1) {
          t.renderBullet ? r += t.renderBullet.call(e, _s29, t.bulletClass) : r += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        }

        n.html(r), e.pagination.bullets = n.find(U(t.bulletClass));
      }

      "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span> / <span class=\"").concat(t.totalClass, "\"></span>"), n.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), n.html(r)), "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
    }

    function p() {
      e.params.pagination = X(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      var t = e.params.pagination;
      if (!t.el) return;
      var s = h(t.el);
      0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter(function (t) {
        return h(t).parents(".swiper")[0] === e.el;
      }))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", U(t.bulletClass), function (t) {
        t.preventDefault();
        var s = h(this).index() * e.params.slidesPerGroup;
        e.params.loop && (s += e.loopedSlides), e.slideTo(s);
      }), Object.assign(e.pagination, {
        $el: s,
        el: s[0]
      }), e.enabled || s.addClass(t.lockClass));
    }

    function u() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.pagination.$el;
      s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", U(t.bulletClass));
    }

    s("init", function () {
      p(), c(), d();
    }), s("activeIndexChange", function () {
      (e.params.loop || void 0 === e.snapIndex) && d();
    }), s("snapIndexChange", function () {
      e.params.loop || d();
    }), s("slidesLengthChange", function () {
      e.params.loop && (c(), d());
    }), s("snapGridLengthChange", function () {
      e.params.loop || (c(), d());
    }), s("destroy", function () {
      u();
    }), s("enable disable", function () {
      var t = e.pagination.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
    }), s("lock unlock", function () {
      d();
    }), s("click", function (t, s) {
      var n = s.target,
          r = e.pagination.$el;

      if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !h(n).hasClass(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;

        var _t34 = r.hasClass(e.params.pagination.hiddenClass);

        i(!0 === _t34 ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
      }
    }), Object.assign(e.pagination, {
      render: c,
      update: d,
      init: p,
      destroy: u
    });
  }

  var J = /*#__PURE__*/function () {
    function J(e, t) {
      _classCallCheck(this, J);

      this.burgerMenu = document.querySelector(t), this.burgerBtn = document.querySelector(e);
    }

    _createClass(J, [{
      key: "triggerBtn",
      value: function triggerBtn() {
        var _this2 = this;

        this.burgerBtn.addEventListener("click", function () {
          _this2.burgerMenu.classList.toggle("menu__list--active");
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.triggerBtn();
      }
    }]);

    return J;
  }();

  window.addEventListener("DOMContentLoaded", function () {
    var _R;

    R.use([Y, K]), new R(".swiper", (_R = {
      direction: "horizontal",
      loop: !0,
      autoplay: !0
    }, _defineProperty(_R, "autoplay", {
      delay: 2e3,
      pauseOnMouseEnter: !0
    }), _defineProperty(_R, "pagination", {
      el: ".safeness__slider-pagination",
      bulletClass: "safeness__slider-bullet",
      bulletActiveClass: "safeness__slider-bullet--active",
      clickable: !0
    }), _R)), new J(".burger", ".menu__list").init();
  });
})();