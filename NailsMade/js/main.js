"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  "use strict";

  var e = /*#__PURE__*/function () {
    function e(_ref) {
      var _e = _ref.openMenuBtn,
          t = _ref.closeMenuBtn,
          s = _ref.burgerMenuSelector,
          r = _ref.activeClass;

      _classCallCheck(this, e);

      this.burgerMenu = document.querySelector(s), this.openMenuBtn = document.querySelector(_e), this.closeMenuBtn = document.querySelector(t), this.body = document.querySelector("body"), this.activeClass = r;
    }

    _createClass(e, [{
      key: "calcScroll",
      value: function calcScroll() {
        var _e2 = document.createElement("div");

        _e2.style.width = "50px", _e2.style.height = "50px", _e2.style.overflowY = "scroll", _e2.style.visibility = "hidden", document.body.appendChild(_e2);
        var t = _e2.offsetWidth - _e2.clientWidth;
        return _e2.remove(), t;
      }
    }, {
      key: "triggerBtn",
      value: function triggerBtn() {
        var _this = this;

        var _e3 = this.activeClass.slice(1, this.activeClass.lenght),
            t = this.calcScroll();

        this.openMenuBtn.addEventListener("click", function () {
          _this.burgerMenu.classList.add(_e3), _this.body.style.position = "fixed", _this.openMenuBtn.style.opacity = "0", _this.body.style.paddingRight = "".concat(t, "px");
        }), this.closeMenuBtn.addEventListener("click", function () {
          _this.burgerMenu.classList.remove(_e3), _this.body.style.position = "", _this.openMenuBtn.style.opacity = "", _this.body.style.paddingRight = "";
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.triggerBtn();
      }
    }]);

    return e;
  }();

  var t = /*#__PURE__*/function () {
    function t(_ref2) {
      var e = _ref2.deadLine,
          _t = _ref2.timerWrapper,
          s = _ref2.daysSelector,
          r = _ref2.hoursSelector,
          i = _ref2.minutesSelector,
          o = _ref2.secondsSelector;

      _classCallCheck(this, t);

      this.deadLine = e, this.timerWrapper = document.querySelector(_t), this.daysSelector = this.timerWrapper.querySelector(s), this.hoursSelector = this.timerWrapper.querySelector(r), this.minutesSelector = this.timerWrapper.querySelector(i), this.secondsSelector = this.timerWrapper.querySelector(o);
    }

    _createClass(t, [{
      key: "getZero",
      value: function getZero(e) {
        return e < 10 && e >= 0 ? "0".concat(e) : e;
      }
    }, {
      key: "calcDate",
      value: function calcDate(e) {
        var _t2 = Date.parse(e) - Date.parse(new Date());

        return {
          date: _t2,
          days: Math.floor(_t2 / 864e5),
          hours: Math.floor(_t2 / 36e5 % 24),
          minutes: Math.floor(_t2 / 6e4 % 60),
          seconds: Math.floor(_t2 / 1e3 % 60)
        };
      }
    }, {
      key: "postDate",
      value: function postDate(e) {
        var _t3 = this.calcDate(e);

        _t3.date <= 0 ? (console.log("minus"), this.daysSelector.innerText = this.getZero(0), this.hoursSelector.innerText = this.getZero(0), this.minutesSelector.innerText = this.getZero(0), this.secondsSelector.innerText = this.getZero(0)) : (console.log("plus"), this.daysSelector.innerText = this.getZero(_t3.days), this.hoursSelector.innerText = this.getZero(_t3.hours), this.minutesSelector.innerText = this.getZero(_t3.minutes), this.secondsSelector.innerText = this.getZero(_t3.seconds));
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        this.postDate(this.deadLine), setInterval(function () {
          return _this2.postDate(_this2.deadLine);
        }, 1e3);
      }
    }]);

    return t;
  }();

  window.addEventListener("DOMContentLoaded", function () {
    new e({
      openMenuBtn: ".burger",
      closeMenuBtn: ".btn__menu-close",
      burgerMenuSelector: ".menu",
      activeClass: ".menu--active"
    }).init(), new t({
      deadLine: "2021-12-31",
      timerWrapper: ".special-offer__counter",
      daysSelector: "#days",
      hoursSelector: "#hours",
      minutesSelector: "#minutes",
      secondsSelector: "#seconds"
    }).init();
  });
})();