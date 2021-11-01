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
          n = _ref.burgerMenuSelector,
          s = _ref.activeClass;

      _classCallCheck(this, e);

      this.burgerMenu = document.querySelector(n), this.openMenuBtn = document.querySelector(_e), this.closeMenuBtn = document.querySelector(t), this.body = document.querySelector("body"), this.activeClass = s;
    }

    _createClass(e, [{
      key: "triggerBtn",
      value: function triggerBtn() {
        var _this = this;

        var _e2 = this.activeClass.slice(1, this.activeClass.lenght);

        this.openMenuBtn.addEventListener("click", function () {
          _this.burgerMenu.classList.add(_e2), _this.body.style.position = "fixed", _this.openMenuBtn.style.opacity = "0";
        }), this.closeMenuBtn.addEventListener("click", function () {
          _this.burgerMenu.classList.remove(_e2), _this.body.style.position = "", _this.openMenuBtn.style.opacity = "";
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

  window.addEventListener("DOMContentLoaded", function () {
    Swiper.use([Navigation, Pagination]), new e({
      openMenuBtn: ".burger",
      closeMenuBtn: ".btn__menu-close",
      burgerMenuSelector: ".menu",
      activeClass: ".menu--active"
    }).init();
  });
})();