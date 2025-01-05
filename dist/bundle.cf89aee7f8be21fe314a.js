/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/custom-components/back-button/dt-back-button.js":
/*!************************************************************************!*\
  !*** ./src/javascript/custom-components/back-button/dt-back-button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtBackButton: () => (/* binding */ DtBackButton)
/* harmony export */ });
/* harmony import */ var _dt_back_button_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-back-button.html */ "./src/javascript/custom-components/back-button/dt-back-button.html");
/* harmony import */ var _dt_back_button_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-back-button.component.sass */ "./src/javascript/custom-components/back-button/dt-back-button.component.sass");
/* harmony import */ var _modules_languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/languages.js */ "./src/javascript/modules/languages.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_back_button_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_back_button_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtBackButton = /*#__PURE__*/function (_HTMLElement) {
  function DtBackButton() {
    var _this;
    _classCallCheck(this, DtBackButton);
    _this = _callSuper(this, DtBackButton);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.backButton = _this.shadowRoot.querySelector('.back-button');
    var activeLanguage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)();
    _this.backButton.textContent = activeLanguage.step_back;
    _this.backButton.addEventListener('click', function () {
      return _this.handleBackButtonClick();
    });
    document.addEventListener('language-changed', function (e) {
      return _this.handleLanguageChange(e);
    });
    return _this;
  }
  _inherits(DtBackButton, _HTMLElement);
  return _createClass(DtBackButton, [{
    key: "enableButton",
    value: function enableButton() {
      this.backButton.classList.remove('disabled');
    }
  }, {
    key: "disableButton",
    value: function disableButton() {
      this.backButton.classList.add('disabled');
    }
  }, {
    key: "handleLanguageChange",
    value: function handleLanguageChange(e) {
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.step_back, this.backButton);
    }
  }, {
    key: "handleBackButtonClick",
    value: function handleBackButtonClick() {
      var customEvent = new CustomEvent('back-button-clicked', {
        detail: {
          message: 'Step back required'
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(customEvent);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-back-button', DtBackButton);


/***/ }),

/***/ "./src/javascript/custom-components/language-selector/dt-language-selector.js":
/*!************************************************************************************!*\
  !*** ./src/javascript/custom-components/language-selector/dt-language-selector.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtLanguageSelector: () => (/* binding */ DtLanguageSelector)
/* harmony export */ });
/* harmony import */ var _dt_language_selector_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-language-selector.html */ "./src/javascript/custom-components/language-selector/dt-language-selector.html");
/* harmony import */ var _dt_language_selector_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-language-selector.component.sass */ "./src/javascript/custom-components/language-selector/dt-language-selector.component.sass");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/utils.js */ "./src/javascript/modules/utils.js");
/* harmony import */ var _modules_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/languages.js */ "./src/javascript/modules/languages.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }




var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_language_selector_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_language_selector_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtLanguageSelector = /*#__PURE__*/function (_HTMLElement) {
  function DtLanguageSelector() {
    var _this;
    _classCallCheck(this, DtLanguageSelector);
    _this = _callSuper(this, DtLanguageSelector);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.dropdownContainer = _this.shadowRoot.querySelector('.dropdown-container');
    _this.dropdownMenu = _this.shadowRoot.querySelector('.dropdown-menu');
    _this.openButton = _this.shadowRoot.querySelector('.open-button');
    _this.closeButton = _this.shadowRoot.querySelector('.close-button');
    _this.renderDefaultLanguageButton();
    _this.renderLanguageButtons();
    _this.openButton.addEventListener('click', function (e) {
      return _this.openDropdown();
    });
    _this.dropdownMenu.addEventListener('click', function (e) {
      return _this.setNewLanguage(e);
    });
    _this.closeButton.addEventListener('click', function () {
      _this.closeDropdown();
    });
    return _this;
  }
  _inherits(DtLanguageSelector, _HTMLElement);
  return _createClass(DtLanguageSelector, [{
    key: "openDropdown",
    value: function openDropdown() {
      this.dropdownMenu.classList.add('show');
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      this.dropdownMenu.classList.remove('show');
    }
  }, {
    key: "renderLanguageButtons",
    value: function renderLanguageButtons() {
      var _this2 = this;
      Object.keys(_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.languages).forEach(function (key) {
        var language = _modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.languages[key];
        var li = document.createElement('li');
        var button = document.createElement('button');
        var span = document.createElement('span');
        li.classList.add('language-option');
        button.classList.add('language-button', "".concat(language.name));
        (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchImage)(language.flag, button, 'language-flag');
        span.classList.add('language-name');
        span.innerText = language.name;
        button.appendChild(span);
        li.appendChild(button);
        _this2.dropdownMenu.appendChild(li);
      });
    }
  }, {
    key: "renderDefaultLanguageButton",
    value: function renderDefaultLanguageButton() {
      var activeLanguage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.getActiveLanguage)();
      (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchImage)(activeLanguage.flag, this.openButton, 'language-flag');
    }
  }, {
    key: "setNewLanguage",
    value: function setNewLanguage(e) {
      var clickedButton = e.target.closest('.language-button');
      if (clickedButton === null) {
        return;
      }
      var newLanguage = Object.values(_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.languages).find(function (language) {
        return language.name.toLowerCase() === clickedButton.classList[1].toLowerCase();
      });
      if (newLanguage === (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.getActiveLanguage)()) {
        this.closeDropdown();
        return;
      }
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.setActiveLanguage)(newLanguage);
      var activeLanguage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.getActiveLanguage)();
      var event = new CustomEvent('language-changed', {
        detail: activeLanguage,
        bubbles: true,
        composed: true
      });
      document.dispatchEvent(event);
      this.openButton.innerHTML = '';
      (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchImage)(activeLanguage.flag, this.openButton, 'language-flag');
      this.closeDropdown();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-language-selector', DtLanguageSelector);


/***/ }),

/***/ "./src/javascript/custom-components/loader/dt-loader.js":
/*!**************************************************************!*\
  !*** ./src/javascript/custom-components/loader/dt-loader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtLoader: () => (/* binding */ DtLoader)
/* harmony export */ });
/* harmony import */ var _dt_loader_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-loader.html */ "./src/javascript/custom-components/loader/dt-loader.html");
/* harmony import */ var _dt_loader_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-loader.component.sass */ "./src/javascript/custom-components/loader/dt-loader.component.sass");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }


var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_loader_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_loader_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtLoader = /*#__PURE__*/function (_HTMLElement) {
  function DtLoader() {
    var _this;
    _classCallCheck(this, DtLoader);
    _this = _callSuper(this, DtLoader);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }
  _inherits(DtLoader, _HTMLElement);
  return _createClass(DtLoader);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-loader', DtLoader);


/***/ }),

/***/ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.js":
/*!****************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-count-picker/dt-player-count-picker.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtPlayerCountPicker: () => (/* binding */ DtPlayerCountPicker)
/* harmony export */ });
/* harmony import */ var _dt_player_count_picker_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-player-count-picker.html */ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.html");
/* harmony import */ var _dt_player_count_picker_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-player-count-picker.component.sass */ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.component.sass");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/utils.js */ "./src/javascript/modules/utils.js");
/* harmony import */ var _modules_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/languages.js */ "./src/javascript/modules/languages.js");
/* harmony import */ var _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/game-stats.js */ "./src/javascript/modules/game-stats.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }





var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_player_count_picker_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_player_count_picker_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtPlayerCountPicker = /*#__PURE__*/function (_HTMLElement) {
  function DtPlayerCountPicker() {
    var _this;
    _classCallCheck(this, DtPlayerCountPicker);
    _this = _callSuper(this, DtPlayerCountPicker);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.cardsUrls = ['assets/card_pink_2.png', 'assets/card_blue_3.png', 'assets/card_yellow_4.jpg', 'assets/card_pink_5.png', 'assets/card_green_6.png'];
    _this.cards = _this.shadowRoot.querySelector('.cards');
    _this.nextButton = _this.shadowRoot.querySelector('.next-button');
    _this.previousButton = _this.shadowRoot.querySelector('.previous-button');
    _this.indicatorContainer = _this.shadowRoot.querySelector('.indicator-container');
    _this.cardTitle = _this.shadowRoot.querySelector('.card-title');
    _this.renderCards();
    var firstCard = _this.cards.querySelector('.card-button:first-child');
    var lastCard = _this.cards.querySelector('.card-button:last-child');
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.translate)((0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.getActiveLanguage)().player_count, _this.cardTitle);
    _this.toggleNavButtons(lastCard, _this.nextButton);
    _this.toggleNavButtons(firstCard, _this.previousButton);
    _this.updateActiveIndicator();
    document.addEventListener('language-changed', function (e) {
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_3__.translate)(e.detail.player_count, _this.cardTitle);
    });
    _this.nextButton.addEventListener('click', function (e) {
      return _this.scrollCards(e);
    });
    _this.previousButton.addEventListener('click', function (e) {
      return _this.scrollCards(e);
    });
    _this.cards.addEventListener('click', function (e) {
      _this.handlePlayerCountSelection(e);
    });
    return _this;
  }
  _inherits(DtPlayerCountPicker, _HTMLElement);
  return _createClass(DtPlayerCountPicker, [{
    key: "handlePlayerCountSelection",
    value: function handlePlayerCountSelection(e) {
      var _this2 = this;
      (0,_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_4__.resetPlayerCount)();
      var clickedButton = e.target.closest('.card-button');
      if (clickedButton === null) {
        return;
      }
      var buttonIdString = clickedButton.id;
      var chosenPlayerCount = Number(buttonIdString[buttonIdString.length - 1]);
      (0,_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_4__.setPlayerCount)(chosenPlayerCount);
      this.shadowRoot.querySelector('.card-slider').classList.add('slide-out');
      setTimeout(function () {
        var playerNameInput = document.createElement('dt-player-name-input');
        if (document.querySelector('main').querySelector('dt-player-name-input') === null) {
          document.querySelector('main').appendChild(playerNameInput);
        }
        ;
        _this2.remove();
      }, 500);
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this3 = this;
      this.cardsUrls.forEach(function (url, index) {
        var button = document.createElement('button');
        button.classList.add('card-button');
        button.id = "card-".concat(index + 2);
        (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchImage)(url, button, 'card');
        _this3.cards.appendChild(button);
      });
    }
  }, {
    key: "scrollCards",
    value: function scrollCards(e) {
      var clickedButton = e.target.closest('button');
      var scrollWidth = this.cards.scrollWidth;
      var cardCount = this.cards.children.length;
      var scrollAmount = scrollWidth / cardCount;
      var currentScrollPosition = this.cards.scrollLeft;
      var targetScroll;
      if (clickedButton === this.nextButton) {
        targetScroll = currentScrollPosition + scrollAmount;
      }
      if (clickedButton === this.previousButton) {
        targetScroll = currentScrollPosition - scrollAmount;
      }
      this.cards.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, {
    key: "toggleNavButtons",
    value: function toggleNavButtons(card, button) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.target === card && entry.isIntersecting) {
            button.classList.add('hidden');
          } else {
            button.classList.remove('hidden');
          }
        });
      }, {
        root: this.cards,
        rootMargin: '0px',
        threshold: 0.9
      });
      observer.observe(card);
    }
  }, {
    key: "updateActiveIndicator",
    value: function updateActiveIndicator() {
      var _this4 = this;
      var cards = this.cards.querySelectorAll('.card-button');
      var visibleCards = new Set();
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleCards.add(entry.target);
          } else {
            visibleCards["delete"](entry.target);
          }
        });
        var indicators = _this4.indicatorContainer.querySelectorAll('.indicator');
        var cardsArr = Array.from(cards);
        _this4.setActiveIndicator(cardsArr, indicators, visibleCards.size, visibleCards);
      }, {
        root: this.cards,
        rootMargin: '0px',
        threshold: 0.9
      });
      cards.forEach(function (card) {
        observer.observe(card);
      });
    }
  }, {
    key: "setActiveIndicator",
    value: function setActiveIndicator(cardsArr, indicators, visibleCardSize, visibleCards) {
      var combinations = [];
      indicators.forEach(function (indicator) {
        indicator.classList.remove('active');
      });
      switch (visibleCardSize) {
        case 2:
          cardsArr.forEach(function (card, index) {
            var combo = [cardsArr[index], cardsArr[index + 1]];
            if (combo.includes(undefined)) {
              return;
            }
            combinations.push(combo);
          });
          break;
        case 3:
          cardsArr.forEach(function (card, index) {
            var combo = [cardsArr[index], cardsArr[index + 1], cardsArr[index + 2]];
            if (combo.includes(undefined)) {
              return;
            }
            combinations.push(combo);
          });
          break;
        case 4:
          cardsArr.forEach(function (card, index) {
            var combo = [cardsArr[index], cardsArr[index + 1], cardsArr[index + 2], cardsArr[index + 3]];
            if (combo.includes(undefined)) {
              return;
            }
            combinations.push(combo);
          });
          break;
      }
      if (combinations.length === 0) {
        return;
      }
      var visibleCardsSet = new Set(visibleCards);
      var matchingIndex = combinations.findIndex(function (combo) {
        var comboSet = new Set(combo);
        return _toConsumableArray(visibleCardsSet).every(function (card) {
          return comboSet.has(card);
        }) && _toConsumableArray(comboSet).every(function (card) {
          return visibleCardsSet.has(card);
        });
      });
      indicators[matchingIndex].classList.add('active');
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-player-count-picker', DtPlayerCountPicker);


/***/ }),

/***/ "./src/javascript/custom-components/player-name-input/dt-player-name-input.js":
/*!************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-name-input/dt-player-name-input.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtPlayerNameInput: () => (/* binding */ DtPlayerNameInput)
/* harmony export */ });
/* harmony import */ var _dt_player_name_input_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-player-name-input.html */ "./src/javascript/custom-components/player-name-input/dt-player-name-input.html");
/* harmony import */ var _dt_player_name_input_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-player-name-input.component.sass */ "./src/javascript/custom-components/player-name-input/dt-player-name-input.component.sass");
/* harmony import */ var _modules_languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/languages.js */ "./src/javascript/modules/languages.js");
/* harmony import */ var _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././../modules/game-stats.js */ "./src/javascript/modules/game-stats.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }




var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_player_name_input_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_player_name_input_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtPlayerNameInput = /*#__PURE__*/function (_HTMLElement) {
  function DtPlayerNameInput() {
    var _this;
    _classCallCheck(this, DtPlayerNameInput);
    _this = _callSuper(this, DtPlayerNameInput);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.inputContainer = _this.shadowRoot.querySelector('.name-input-container');
    _this.input = _this.shadowRoot.querySelector('.name-input');
    _this.inputTitle = _this.shadowRoot.querySelector('.name-input-title');
    _this.submitButton = _this.shadowRoot.querySelector('.name-input-confirm');
    _this.warningIcon = _this.shadowRoot.querySelector('.warning-icon');
    var activeLanguage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)();
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(activeLanguage.score_submit, _this.submitButton);
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(activeLanguage.name_input, _this.inputTitle);
    _this.input.placeholder = activeLanguage.placeholder;
    _this.playerCount = 0;
    _this.startNameInput();
    setTimeout(function () {
      _this.input.focus();
    }, 200);
    _this.input.addEventListener('input', function () {
      return _this.resetWarning();
    });
    _this.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        _this.submitButton.click();
      }
      _this.input.focus();
    });
    _this.submitButton.addEventListener('click', function () {
      return _this.handleNameInput();
    });
    _this.addEventListener('back-button-clicked', function (e) {
      return _this.handleBackButtonClick(e);
    });
    document.addEventListener('language-changed', function (e) {
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.score_submit, _this.submitButton);
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.name_input, _this.inputTitle);
      _this.input.placeholder = e.detail.placeholder;
      _this.setPlaceholder();
    });
    return _this;
  }
  _inherits(DtPlayerNameInput, _HTMLElement);
  return _createClass(DtPlayerNameInput, [{
    key: "handleBackButtonClick",
    value: function handleBackButtonClick(e) {
      var existingPicker = document.querySelector('dt-player-count-picker');
      if (existingPicker === null) {
        var newPicker = document.createElement('dt-player-count-picker');
        document.querySelector('main').appendChild(newPicker);
      }
      this.remove();
    }
  }, {
    key: "resetWarning",
    value: function resetWarning() {
      this.input.classList.remove('warning');
      this.warningIcon.classList.add('hidden');
    }
  }, {
    key: "startNameInput",
    value: function startNameInput() {
      this.playerCount = 1;
      this.setPlaceholder();
    }
  }, {
    key: "handleNameInput",
    value: function handleNameInput() {
      var _this2 = this;
      var nameInput = this.input.value.trim();
      if (nameInput === '') {
        this.input.classList.add('warning');
        this.warningIcon.classList.remove('hidden');
        return;
      }
      if (nameInput.length > 22) {
        this.input.classList.add('warning');
        this.warningIcon.classList.remove('hidden');
        this.input.value = '';
        return;
      }
      nameInput = this.input.value.split(' ').map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }).join(' ');
      _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerCount)].name = nameInput;
      this.playerCount++;
      if (this.playerCount <= Object.keys(_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players).length) {
        this.input.value = "";
        this.input.placeholder = this.input.placeholder.slice(0, -2);
        this.setPlaceholder();
      } else {
        this.inputContainer.classList.add('slide-out');
        setTimeout(function () {
          var scoreDisplay = document.createElement('dt-score-display');
          if (document.querySelector('main').querySelector('dt-score-display') === null) {
            document.querySelector('main').appendChild(scoreDisplay);
          }
          ;
          _this2.remove();
        }, 500);
      }
      this.input.focus();
    }
  }, {
    key: "setPlaceholder",
    value: function setPlaceholder() {
      this.input.placeholder = "".concat(this.input.placeholder, " ").concat(this.playerCount);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-player-name-input', DtPlayerNameInput);


/***/ }),

/***/ "./src/javascript/custom-components/score-display/dt-score-display.js":
/*!****************************************************************************!*\
  !*** ./src/javascript/custom-components/score-display/dt-score-display.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtScoreDisplay: () => (/* binding */ DtScoreDisplay)
/* harmony export */ });
/* harmony import */ var _dt_score_display_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dt-score-display.html */ "./src/javascript/custom-components/score-display/dt-score-display.html");
/* harmony import */ var _dt_score_display_component_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dt-score-display.component.sass */ "./src/javascript/custom-components/score-display/dt-score-display.component.sass");
/* harmony import */ var _modules_languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/languages.js */ "./src/javascript/modules/languages.js");
/* harmony import */ var _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/game-stats.js */ "./src/javascript/modules/game-stats.js");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }





var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        ".concat(_dt_score_display_component_sass__WEBPACK_IMPORTED_MODULE_1__["default"], "\n    </style>\n    ").concat(_dt_score_display_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var DtScoreDisplay = /*#__PURE__*/function (_HTMLElement) {
  function DtScoreDisplay() {
    var _this;
    _classCallCheck(this, DtScoreDisplay);
    _this = _callSuper(this, DtScoreDisplay);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.mainWrapper = _this.shadowRoot.querySelector('.score-display-wrapper');
    _this.scoreInput = _this.shadowRoot.querySelector('.score-input');
    _this.playersWrapper = _this.shadowRoot.querySelector('.players-wrapper');
    _this.inputTitle = _this.shadowRoot.querySelector('.score-input-title');
    _this.scoreSubmitButton = _this.shadowRoot.querySelector('.add-button');
    _this.backButton = _this.shadowRoot.querySelector('dt-back-button');
    _this.newGameButton = _this.shadowRoot.querySelector('.new-game-button');
    _this.messageDialog = _this.shadowRoot.querySelector('.message-dialog');
    _this.newGameDialog = _this.shadowRoot.querySelector('.new-game-dialog');
    _this.warningIcon = _this.shadowRoot.querySelector('.warning-icon');
    var currentLanguage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)();
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(currentLanguage.score_input, _this.inputTitle);
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(currentLanguage.score_submit, _this.scoreSubmitButton);
    (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(currentLanguage.new_game_button, _this.newGameButton);
    _this.appendPlayerData();
    _this.totalPlayers = _this.shadowRoot.querySelectorAll('.name').length;
    _this.names = _this.shadowRoot.querySelectorAll('.name');
    _this.scores = _this.shadowRoot.querySelectorAll('.score');
    _this.currentRound = 1;
    _this.playerNumber = 1;
    _this.eliminatedPlayerNumbers = [];
    _this.gameOver = false;
    _this.activePlayerData = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(_this.playerNumber)];
    _this.setPlaceholder();
    setTimeout(function () {
      _this.backButton.disableButton();
      _this.scoreInput.focus();
    }, 200);
    _this.scoreInput.addEventListener('input', function () {
      _this.removeWarning();
    });
    _this.scoreInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !_this.gameOver) {
        e.preventDefault();
        _this.scoreSubmitButton.click();
        _this.scoreInput.focus();
      }
      ;
    });
    _this.backButton.addEventListener('click', function (e) {
      return _this.undoScore();
    });
    _this.scoreSubmitButton.addEventListener('click', function () {
      return _this.submitScore();
    });
    _this.newGameButton.addEventListener('click', function () {
      return _this.handleNewGameClick();
    });
    document.addEventListener('language-changed', function (e) {
      return _this.handleLanguageChange(e);
    });
    return _this;
  }
  _inherits(DtScoreDisplay, _HTMLElement);
  return _createClass(DtScoreDisplay, [{
    key: "handleNewGameClick",
    value: function handleNewGameClick() {
      var _this2 = this;
      var closeButton = this.newGameDialog.querySelector('.new-game-dialog-close-button');
      closeButton.addEventListener('click', function () {
        _this2.newGameDialog.close();
        _this2.newGameDialog.classList.remove('new-game-dialog-open');
      });
      var messageDiv = this.newGameDialog.querySelector('.new-game-dialog-text');
      var noButton = this.newGameDialog.querySelector('.new-game-dialog-no-button');
      var yesButton = this.newGameDialog.querySelector('.new-game-dialog-yes-button');
      var message = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().new_game_text;
      var yes = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().new_game_confirm;
      var no = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().new_game_cancel;
      noButton.innerText = no;
      yesButton.innerText = yes;
      messageDiv.innerText = message;
      this.newGameDialog.showModal();
      this.newGameDialog.classList.add('new-game-dialog-open');
      noButton.addEventListener('click', function () {
        _this2.newGame();
      });
      yesButton.addEventListener('click', function () {
        _this2.newGameSamePlayers();
      });
    }
  }, {
    key: "newGameSamePlayers",
    value: function newGameSamePlayers() {
      var scoreDisplay = this.shadowRoot.querySelector('.score-display-wrapper');
      scoreDisplay.classList.add('slide-out');
      this.newGameDialog.close();
      this.newGameDialog.classList.remove('new-game-dialog-open');
      setTimeout(function () {
        scoreDisplay.classList.remove('slide-out');
      }, 500);
      scoreDisplay.classList.add('slide-in');
      this.resetGameState();
      this.scores.forEach(function (score) {
        score.innerText = 0;
        score.classList.remove('eliminated');
      });
      this.names.forEach(function (name) {
        name.classList.remove('eliminated');
      });
      this.backButton.disableButton();
      this.scoreSubmitButton.classList.remove('disabled');
      this.setPlaceholder();
    }
  }, {
    key: "newGame",
    value: function newGame() {
      var _this3 = this;
      this.newGameDialog.close();
      this.shadowRoot.querySelector('.score-display-wrapper').classList.add('slide-out');
      setTimeout(function () {
        _this3.remove();
        var playerCountElement = document.createElement('dt-player-count-picker');
        if (document.querySelector('main').querySelector('dt-player-count-picker') === null) {
          document.querySelector('main').appendChild(playerCountElement);
        }
      }, 500);
    }
  }, {
    key: "resetGameState",
    value: function resetGameState() {
      this.currentRound = 1;
      this.playerNumber = 1;
      this.eliminatedPlayerNumbers = [];
      this.gameOver = false;
      this.activePlayerData = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)];
      for (var playerKey in _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players) {
        var player = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players[playerKey];
        player.score_per_round = [];
        player.isEliminated = false;
        player.eliminatedRound = null;
      }
    }
  }, {
    key: "undoScore",
    value: function undoScore() {
      if (this.gameOver) {
        this.gameOver = false;
        this.scoreSubmitButton.classList.remove('disabled');
      }
      if (this.playerNumber === 1 && this.currentRound === 1) {
        this.backButton.disableButton();
        return;
      }
      do {
        this.playerNumber--;
        if (this.playerNumber < 1) {
          this.playerNumber = this.totalPlayers;
          this.currentRound--;
        }
        var player = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)];
        if (player.isEliminated && player.eliminatedRound === this.currentRound) {
          this.undoElimination(player);
          break;
        }
      } while (_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)].isEliminated);
      this.activePlayerData = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)];
      this.activePlayerData.score_per_round.pop();
      this.displayScore();
      this.setPlaceholder();
      if (this.playerNumber === 1 && this.currentRound === 1) {
        this.backButton.disableButton();
        return;
      }
      this.scoreSubmitButton.classList.remove('disabled');
    }
  }, {
    key: "undoElimination",
    value: function undoElimination(player) {
      var score = this.scores[player.player_index];
      var name = this.names[player.player_index];
      score.classList.remove('eliminated');
      name.classList.remove('eliminated');
      player.isEliminated = false;
      player.eliminatedRound = null;
    }
  }, {
    key: "eliminatePlayer",
    value: function eliminatePlayer() {
      var scoreDiv = this.scores[this.activePlayerData.player_index];
      var nameDiv = this.names[this.activePlayerData.player_index];
      scoreDiv.classList.add('eliminated');
      nameDiv.classList.add('eliminated');
      this.activePlayerData.isEliminated = true;
      this.activePlayerData.eliminatedRound = this.currentRound;
      this.alertEliminationOrWin();
      if (this.gameOver) {
        this.scoreSubmitButton.classList.add('disabled');
      }
    }
  }, {
    key: "alertEliminationOrWin",
    value: function alertEliminationOrWin() {
      var _this4 = this;
      var activePlayers = Object.values(_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players).filter(function (player) {
        return !player.isEliminated;
      });
      var name = this.activePlayerData.name;
      var dialogText = this.messageDialog.querySelector('.message-dialog-text');
      if (activePlayers.length > 1) {
        var eliminationMessage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().elimination_message;
        var insertionPoint = eliminationMessage.indexOf(',') + 1;
        var personalizedMessage = "".concat(eliminationMessage.slice(0, insertionPoint), "\n ").concat(name, " ").concat(eliminationMessage.slice(insertionPoint));
        dialogText.innerText = personalizedMessage;
      } else {
        var winnerName = activePlayers[0].name;
        var winnerMessage = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().winner_message;
        var _insertionPoint = winnerMessage.indexOf('!') + 1;
        var _personalizedMessage = "".concat(winnerMessage.slice(0, _insertionPoint), "\n ").concat(winnerName, " ").concat(winnerMessage.slice(_insertionPoint));
        dialogText.innerText = _personalizedMessage;
        this.gameOver = true;
      }
      var closeButton = this.messageDialog.querySelector('.message-dialog-button');
      closeButton.addEventListener('click', function () {
        var canvas = _this4.shadowRoot.querySelector('canvas');
        if (canvas) {
          canvas.remove();
        }
        _this4.messageDialog.classList.remove('message-dialog-open');
        _this4.messageDialog.close();
      });
      this.messageDialog.showModal();
      this.messageDialog.classList.add('message-dialog-open');
      if (this.gameOver) {
        this.runConfettiAnimation();
      }
    }
  }, {
    key: "runConfettiAnimation",
    value: function runConfettiAnimation() {
      var canvas = document.createElement('canvas');
      this.messageDialog.appendChild(canvas);
      var confettiAnimation = canvas_confetti__WEBPACK_IMPORTED_MODULE_4__["default"].create(canvas, {
        resize: true,
        useWorker: true
      });
      confettiAnimation({
        particleCount: 500,
        spread: 60,
        origin: {
          x: 0.5,
          y: 0.5
        },
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#FF69B4']
      });
    }
  }, {
    key: "alertScoreHalving",
    value: function alertScoreHalving() {
      var _this5 = this;
      var dialogText = this.messageDialog.querySelector('.message-dialog-text');
      var points = this.activePlayerData.total_score;
      var name = this.activePlayerData.name;
      var message = (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.getActiveLanguage)().score_halving_message;
      var nameInsertionPoint = message.indexOf('!') + 1;
      var pointsInsertionPoint = message.lastIndexOf(' ');
      var personalizedMessage = "".concat(message.slice(0, nameInsertionPoint), "\n ").concat(name, " ").concat(message.slice(nameInsertionPoint, pointsInsertionPoint), " ").concat(points, " ").concat(message.slice(pointsInsertionPoint));
      dialogText.innerText = personalizedMessage;
      var closeButton = this.messageDialog.querySelector('.message-dialog-button');
      closeButton.addEventListener('click', function () {
        _this5.messageDialog.classList.remove('message-dialog-open');
        _this5.messageDialog.close();
      });
      this.messageDialog.showModal();
      this.messageDialog.classList.add('message-dialog-open');
    }
  }, {
    key: "submitScore",
    value: function submitScore() {
      if (!this.scoreInput.validity.valid) {
        this.addWarning();
        return;
      }
      this.backButton.enableButton();
      var submittedScore = Number(this.scoreInput.value);
      this.activePlayerData.score_per_round.push(submittedScore);
      if (this.activePlayerData.total_score > 150) {
        this.eliminatePlayer();
      }
      if ([100, 150].includes(this.activePlayerData.total_score)) {
        var totalScore = this.activePlayerData.total_score;
        var halvedScore = totalScore / 2;
        var oldRoundScore = this.activePlayerData.score_per_round.pop();
        var newRoundScore = halvedScore - (totalScore - oldRoundScore);
        this.activePlayerData.score_per_round.push(newRoundScore);
        this.alertScoreHalving();
      }
      this.displayScore();
      do {
        this.playerNumber++;
        if (this.playerNumber > this.totalPlayers) {
          this.playerNumber = 1;
          this.currentRound++;
        }
      } while (_modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)].isEliminated);
      this.activePlayerData = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players["player_".concat(this.playerNumber)];
      this.setPlaceholder();
    }
  }, {
    key: "displayScore",
    value: function displayScore() {
      this.scores[this.activePlayerData.player_index].innerText = this.activePlayerData.total_score;
    }
  }, {
    key: "setPlaceholder",
    value: function setPlaceholder() {
      this.scoreInput.placeholder = this.activePlayerData.name;
      this.scoreInput.value = '';
    }
  }, {
    key: "addWarning",
    value: function addWarning() {
      this.scoreInput.classList.add('warning');
      this.warningIcon.classList.remove('hidden');
      this.scoreInput.focus();
    }
  }, {
    key: "removeWarning",
    value: function removeWarning() {
      this.scoreInput.classList.remove('warning');
      this.warningIcon.classList.add('hidden');
    }
  }, {
    key: "handleLanguageChange",
    value: function handleLanguageChange(e) {
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.score_input, this.inputTitle);
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.score_submit, this.scoreSubmitButton);
      (0,_modules_languages_js__WEBPACK_IMPORTED_MODULE_2__.translate)(e.detail.new_game_button, this.newGameButton);
    }
  }, {
    key: "appendPlayerData",
    value: function appendPlayerData() {
      for (var player in _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players) {
        var name = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players[player].name;
        var score = _modules_game_stats_js__WEBPACK_IMPORTED_MODULE_3__.players[player].total_score;
        var container = document.createElement('div');
        var nameDiv = document.createElement('div');
        var scoreDiv = document.createElement('div');
        container.classList.add('player-container');
        nameDiv.classList.add('name');
        scoreDiv.classList.add('score');
        nameDiv.textContent = name;
        scoreDiv.textContent = score;
        container.appendChild(nameDiv), container.appendChild(scoreDiv);
        this.playersWrapper.appendChild(container);
      }
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('dt-score-display', DtScoreDisplay);


/***/ }),

/***/ "./src/javascript/modules/game-stats.js":
/*!**********************************************!*\
  !*** ./src/javascript/modules/game-stats.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   resetPlayerCount: () => (/* binding */ resetPlayerCount),
/* harmony export */   setPlayerCount: () => (/* binding */ setPlayerCount)
/* harmony export */ });
var players = {
  player_1: {
    player_index: 0,
    name: 'Nick',
    score_per_round: [],
    get total_score() {
      return this.score_per_round.reduce(function (total, score) {
        return total + score;
      }, 0);
    },
    isEliminated: false,
    eliminatedRound: null
  },
  player_2: {
    player_index: 1,
    name: 'Rafa',
    score_per_round: [],
    get total_score() {
      return this.score_per_round.reduce(function (total, score) {
        return total + score;
      }, 0);
    },
    isEliminated: false,
    eliminatedRound: null
  }
  // player_3: {
  //     player_index: 2,
  //     name: 'Ana',
  //     score_per_round: [],
  //     get total_score() {
  //         return this.score_per_round.reduce((total, score) => total + score, 0)
  //     },
  //     isEliminated: false,
  //     eliminatedRound: null
  // },
  // player_4: {
  //     player_index: 3,
  //     name: 'Isabella',
  //     score_per_round: [],
  //     get total_score() {
  //         return this.score_per_round.reduce((total, score) => total + score, 0)
  //     },
  //     isEliminated: false,
  //     eliminatedRound: null
  // },
  // player_5: {
  //     player_index: 4,
  //     name: 'Cara',
  //     score_per_round: [],
  //     get total_score() {
  //         return this.score_per_round.reduce((total, score) => total + score, 0)
  //     },
  //     isEliminated: false,
  //     eliminatedRound: null
  // },
  // player_6: {
  //     player_index: 5,
  //     name: 'Robi',
  //     score_per_round: [],
  //     get total_score() {
  //         return this.score_per_round.reduce((total, score) => total + score, 0)
  //     },
  //     isEliminated: false,
  //     eliminatedRound: null
  // },
};
function setPlayerCount(count) {
  for (var i = 1; i <= count; i++) {
    var playerKey = "player_".concat(i);
    players[playerKey] = {
      player_index: i - 1,
      name: null,
      score_per_round: [],
      get total_score() {
        return this.score_per_round.reduce(function (total, score) {
          return total + score;
        }, 0);
      },
      isEliminated: false,
      eliminatedRound: null
    };
  }
}
function resetPlayerCount() {
  for (var key in players) {
    if (players.hasOwnProperty(key)) {
      delete players[key];
    }
  }
}


/***/ }),

/***/ "./src/javascript/modules/languages.js":
/*!*********************************************!*\
  !*** ./src/javascript/modules/languages.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveLanguage: () => (/* binding */ getActiveLanguage),
/* harmony export */   languages: () => (/* binding */ languages),
/* harmony export */   setActiveLanguage: () => (/* binding */ setActiveLanguage),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
var languages = {
  dutch: {
    name: "Nederlands",
    flag: 'https://flagcdn.com/h40/nl.png',
    title: 'SCOREBORD',
    player_count: 'SELECTEER HET AANTAL SPELERS:',
    name_input: 'Voer de naam in van:',
    placeholder: 'Speler',
    score_input: 'Voer score in voor:',
    score_submit: 'voeg toe',
    step_back: 'terug',
    elimination_message: 'Helaas, is af en ligt uit het spel!',
    winner_message: 'Gefeliciteerd! heeft het spel gewonnen!',
    score_halving_message: 'Goed gedaan! gaat terug naar punten',
    new_game_button: 'nieuw spel',
    new_game_text: 'Wil je een nieuw spel starten met dezelfde spelers?',
    new_game_confirm: 'Ja',
    new_game_cancel: 'Nee'
  },
  german: {
    name: "Deutsch",
    flag: 'https://flagcdn.com/h40/de.png',
    title: 'ANZEIGETAFEL',
    player_count: 'WÄHLEN SIE DIE ANZAHL DER SPIELER:',
    name_input: 'Geben Sie den Namen ein von:',
    placeholder: 'Spieler',
    score_input: 'Geben Sie die Punktzahl ein für:',
    score_submit: 'hinzufügen',
    step_back: 'zurück',
    elimination_message: 'Leider, ist ausgeschieden und aus dem Spiel!',
    winner_message: 'Herzlichen Glückwunsch! hat das Spiel gewonnen!',
    score_halving_message: 'Gut gemacht! Geht zurück zu den Punkten',
    new_game_button: 'neues spiel',
    new_game_text: 'Möchtest du ein neues Spiel mit den gleichen Spielern starten?',
    new_game_confirm: 'Ja',
    new_game_cancel: 'Nein'
  },
  spanish: {
    name: "Español",
    flag: 'https://flagcdn.com/h40/es.png',
    title: 'TABLERO DE PUNTUACIÓN',
    player_count: 'SELECCIONE LA CANTIDAD DE JUGADORES:',
    name_input: 'Ingrese el nombre de:',
    placeholder: 'Jugador',
    score_input: 'Ingrese la puntuación para:',
    score_submit: 'agregar',
    step_back: 'atrás',
    elimination_message: 'Desafortunadamente, está fuera y eliminado del juego!',
    winner_message: '¡Felicidades! ha ganado el juego!',
    score_halving_message: '¡Bien hecho! Vuelve a los puntos',
    new_game_button: 'nuevo juego',
    new_game_text: '¿Quieres empezar un nuevo juego con los mismos jugadores?',
    new_game_confirm: 'Sí',
    new_game_cancel: 'No'
  },
  english: {
    name: "English",
    flag: 'https://flagcdn.com/h40/us.png',
    title: 'SCOREBOARD',
    player_count: 'SELECT THE NUMBER OF PLAYERS:',
    name_input: 'Enter the name of:',
    placeholder: 'Player',
    score_input: 'Enter score for:',
    score_submit: 'add',
    step_back: 'back',
    elimination_message: 'Unfortunately, is out and eliminated from the game!',
    winner_message: 'Congratulations! has won the game!',
    score_halving_message: 'Well done! Goes back to points',
    new_game_button: 'new game',
    new_game_text: 'Do you want to start a new game with the same players?',
    new_game_confirm: 'Yes',
    new_game_cancel: 'No'
  },
  french: {
    name: "Français",
    flag: 'https://flagcdn.com/h40/fr.png',
    title: 'TABLEAU DE SCORE',
    player_count: 'SÉLECTIONNEZ LE NOMBRE DE JOUEURS:',
    name_input: 'Entrez le nom de:',
    placeholder: 'Joueur',
    score_input: 'Entrez le score pour :',
    score_submit: 'ajouter',
    step_back: 'retour',
    elimination_message: 'Désolé, est éliminé et hors du jeu!',
    winner_message: 'Félicitations ! a gagné le jeu !',
    score_halving_message: 'Bien joué ! Retourne aux points',
    new_game_button: 'nouveau jeu',
    new_game_text: 'Voulez-vous commencer une nouvelle partie avec les mêmes joueurs ?',
    new_game_confirm: 'Oui',
    new_game_cancel: 'Non'
  }
};
var activeLanguage = languages.dutch;
function getActiveLanguage() {
  return activeLanguage;
}
function setActiveLanguage(newLanguage) {
  activeLanguage = newLanguage;
}
function translate(newText, element) {
  element.innerText = newText;
}


/***/ }),

/***/ "./src/javascript/modules/utils.js":
/*!*****************************************!*\
  !*** ./src/javascript/modules/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchImage: () => (/* binding */ fetchImage)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var fetchImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, targetElement, className) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch(endpoint).then(function (response) {
            // Check if the response is OK (status 200-299)
            if (!response.ok) {
              console.log('error getting imgae');
              throw new Error("HTTP error! Status: ".concat(response.status));
            }

            // Treat the response as a blob for image data
            return response.blob();
          }).then(function (imageBlob) {
            // Create an object URL for the image blob
            var imageObjectUrl = URL.createObjectURL(imageBlob);

            // Set the image src to the object URL
            // Set the class name
            var imgElement = document.createElement("img");
            imgElement.src = imageObjectUrl;
            imgElement.alt = "";
            imgElement.classList.add(className);

            // Append the image to the DOM (you can append it anywhere)
            targetElement.appendChild(imgElement);
          })["catch"](function (error) {
            console.error("Error fetching the image:", error);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchImage(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  font-family: "Effra Trial", sans-serif;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 2px;
  background-color: rgb(236, 236, 236);
}
@media (min-width: 768px) {
  body {
    padding: 15px 50px 15px 50px;
  }
}

header {
  text-align: center;
}
@media (min-width: 768px) {
  header {
    text-align: start;
  }
}

.header-title {
  font-weight: 700;
  font-size: 32px;
  color: rgb(44, 46, 53);
  letter-spacing: 5px;
  animation: slide-in-from-right 1.5s ease-out;
  opacity: 1;
  display: inline-block;
}
@keyframes slide-in-from-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@media (min-width: 420px) {
  .header-title {
    font-size: 48px;
  }
}
@media (min-width: 768px) {
  .header-title {
    font-size: 64px;
  }
}
@media (min-width: 1024px) {
  .header-title {
    font-size: 80px;
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
}

.logo-container {
  height: 100%;
}
.logo-footer {
  width: 100px;
}

dt-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}

dt-language-selector {
  align-self: flex-end;
  padding-bottom: 20px;
}

dt-player-count-picker {
  height: 100%;
}

dt-player-name-input {
  display: flex;
  justify-content: center;
}

dt-score-display {
  height: 100%;
  padding: 0 10px;
}
@media (min-width: 420px) {
  dt-score-display {
    padding: 0 50px;
  }
}
@media (min-width: 420px) and (min-width: 768px) {
  dt-score-display {
    padding: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;;EAEI,sCCqCW;EDpCX,YAAA;AADJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBCgCc;ED/Bd,oCCXc;ADWlB;AAEI;EAPJ;IAQQ,4BAAA;EACN;AACF;;AAAA;EACI,kBAAA;AAGJ;AADI;EAHJ;IAIQ,iBAAA;EAIN;AACF;;AAHA;EACI,gBCDgB;EDEhB,eCVW;EDWX,sBCpBI;EDqBJ,mBAAA;EAEA,4CAAA;EACA,UAAA;EACA,qBAAA;AAKJ;AAHI;EACI;IACI,2BAAA;IACA,UAAA;EAKV;EAHM;IACI,wBAAA;IACA,UAAA;EAKV;AACF;AAJI;EAnBJ;IAoBQ,eC3BO;EDkCb;AACF;AANI;EAtBJ;IAuBQ,eC7BO;EDsCb;AACF;AARI;EAzBJ;IA0BQ,eC/BO;ED0Cb;AACF;;AAVA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;AAaJ;;AAXA;EACI,WAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,eAAA;AAcJ;;AAXI;EACI,YAAA;AAcR;AAZI;EACI,YAAA;AAcR;;AAZA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,UAAA;AAeJ;;AAbA;EACI,oBAAA;EACA,oBCxDS;ADwEb;;AAdA;EACI,YAAA;AAiBJ;;AAfA;EACI,aAAA;EACA,uBAAA;AAkBJ;;AAhBA;EACI,YAAA;EACA,eAAA;AAmBJ;AAjBI;EAJJ;IAKQ,eAAA;EAoBN;AACF;AAnBQ;EAPR;IAQY,UAAA;EAsBV;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/javascript/custom-components/back-button/dt-back-button.component.sass":
/*!************************************************************************************!*\
  !*** ./src/javascript/custom-components/back-button/dt-back-button.component.sass ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Effra Trial", sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  border: none;
}

.back-button {
  font-family: "Effra Trial", sans-serif;
  font-size: 16px;
  color: rgb(44, 46, 53);
  border: none;
  border-radius: 20px;
  background-color: rgb(255, 200, 0);
  height: 30px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: font-weight 0.5s ease, box-shadow 0.5s ease;
}
.back-button:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  font-weight: bolder;
}
.back-button::before {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.back-button:hover::before {
  bottom: 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/back-button/dt-back-button.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;EACI,sCCsCW;EDrCX,UAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;AADJ;;AAGA;EACI,sCC8BW;ED7BX,eCCW;EDAX,sBCPI;EDQJ,YAAA;EACA,mBC2BmB;ED1BnB,kCCTK;EDUL,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,uDAAA;AAAJ;AAEI;EACI,eAAA;EACA,8CCkBS;EDjBT,mBAAA;AAAR;AAEI;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCC5BM;ED6BN,WAAA;EACA,4BAAA;AAAR;AAEI;EACI,SAAA;AAAR;;AAEA;EACI,YAAA;EACA,oBAAA;AACJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./src/javascript/custom-components/language-selector/dt-language-selector.component.sass":
/*!************************************************************************************************!*\
  !*** ./src/javascript/custom-components/language-selector/dt-language-selector.component.sass ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Effra Trial", sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

button {
  background-color: none;
  border: none;
}

.close-button {
  position: absolute;
  top: -25px;
  right: 0;
  height: 35px;
  background-color: transparent;
}
.close-button .close-icon:hover {
  fill: rgb(255, 170, 0);
  cursor: pointer;
}
.close-button-container {
  position: relative;
  width: 90%;
  height: 40px;
}
@media (min-width: 420px) {
  .close-button-container {
    width: 375px;
  }
}

.open-button {
  border: none;
  background-color: transparent;
  padding: 0;
}
.open-button > .language-flag {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.open-button > .language-flag:hover {
  cursor: pointer;
  outline: 3px solid rgb(255, 170, 0);
}

.dropdown-container {
  position: relative;
}
.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(191, 192, 191, 0.7);
}
.dropdown-menu.show {
  transform: translateY(0);
  opacity: 1;
  z-index: 1000;
}

.language-option {
  width: 90%;
  border-radius: 20px;
  margin-bottom: 10px;
}
@media (min-width: 420px) {
  .language-option {
    width: 375px;
  }
}
.language-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 20px;
  color: rgb(44, 46, 53);
  font-size: 16px;
}
.language-button:hover {
  background-color: rgb(255, 170, 0);
  cursor: pointer;
}
.language-button .language-flag {
  order: 1;
  width: 60px;
  height: 100%;
  border-radius: 20px 0 0 20px;
}
.language-button .language-name {
  display: flex;
  align-items: center;
  order: 2;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin-left: 25%;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/language-selector/dt-language-selector.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AACA;EACI,sCCuCW;EDtCX,UAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;AAAJ;;AAEA;EACI,sBAAA;EACA,YAAA;AACJ;;AACA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EAEA,6BAAA;AACJ;AACI;EACI,sBCbM;EDcN,eAAA;AACR;AACI;EACI,kBAAA;EACA,UAAA;EACA,YAAA;AACR;AACQ;EALJ;IAMQ,YAAA;EAEV;AACF;;AADA;EACI,YAAA;EACA,6BAAA;EACA,UAAA;AAIJ;AAFI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AAIR;AAFQ;EACI,eAAA;EACA,mCAAA;AAIZ;;AADI;EACI,kBAAA;AAIR;AAFI;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,2BAAA;EACA,UAAA;EACA,kDAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,0CC/DY;ADgEpB;AACQ;EACI,wBAAA;EACA,UAAA;EACA,aAAA;AACZ;;AAEI;EACI,UAAA;EACA,mBClCe;EDmCf,mBClDQ;ADmDhB;AACQ;EALJ;IAMQ,YAAA;EAEV;AACF;AADI;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,mBC7Ce;ED8Cf,sBClFA;EDmFA,eC5EO;AD+Ef;AADQ;EACI,kCCpFE;EDqFF,eAAA;AAGZ;AADQ;EACI,QAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;AAGZ;AADQ;EACI,aAAA;EACA,mBAAA;EACA,QAAA;EACA,yBAAA;EACA,qBAAA;EACA,gBCtFS;EDuFT,gBC1DW;AD6DvB","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./src/javascript/custom-components/loader/dt-loader.component.sass":
/*!**************************************************************************!*\
  !*** ./src/javascript/custom-components/loader/dt-loader.component.sass ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.loader {
  width: 100px;
  animation: spin 1.5s ease-in-out infinite;
  transform-origin: center;
}
.loader-background {
  position: fixed;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(7.5px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dot-1 {
  fill: rgb(30, 191, 241);
}

.dot-2 {
  fill: rgb(255, 200, 0);
}

.dot-3 {
  fill: rgb(236, 49, 143);
}

.dot-4 {
  fill: rgb(53, 180, 75);
}

.dot-5 {
  fill: rgb(30, 191, 241);
}

.dot-6 {
  fill: rgb(255, 200, 0);
}

.dot-7 {
  fill: rgb(236, 49, 143);
}

.dot-8 {
  fill: rgb(255, 200, 0);
}

.hidden {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/loader/dt-loader.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;EACI,YAAA;EACA,yCAAA;EACA,wBAAA;AADJ;AAGI;EACI,eAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;AADR;;AAGA;EACI;IACI,uBAAA;EAAN;EAEE;IACI,yBAAA;EAAN;AACF;AACA;EACI,uBChBG;ADiBP;;AAAA;EACI,sBChBK;ADmBT;;AAFA;EACI,uBChBG;ADqBP;;AAJA;EACI,sBCjBI;ADwBR;;AANA;EACI,uBCxBG;ADiCP;;AARA;EACI,sBCxBK;ADmCT;;AAVA;EACI,uBCxBG;ADqCP;;AAZA;EACI,sBC5BK;AD2CT;;AAbA;EACI,aAAA;AAgBJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.component.sass":
/*!****************************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-count-picker/dt-player-count-picker.component.sass ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Effra Trial", sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  border: none;
}

button {
  background-color: transparent;
}
button:hover {
  cursor: pointer;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.next-button svg,
.previous-button svg {
  fill: rgb(198, 198, 209);
}

.next-button:hover svg,
.previous-button:hover svg {
  fill: rgb(255, 200, 0);
}

.next-button,
.previous-button {
  background-color: transparent;
}
@media (min-width: 768px) {
  .next-button,
  .previous-button {
    display: none;
  }
}

.indicator {
  height: 5px;
  width: 20%;
  border-radius: 20px;
  background-color: rgb(198, 198, 209);
}
@media (min-width: 768px) {
  .indicator {
    display: none;
  }
}
@media (min-width: 420px) {
  .indicator-4 {
    display: none;
  }
}
@media (min-width: 620px) {
  .indicator-3 {
    display: none;
  }
}
.indicator-container {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  overflow-x: auto;
  scroll-snap-type: inline mandatory;
  scrollbar-width: none;
}
@media (min-width: 420px) {
  .cards {
    grid-auto-columns: 33.3%;
  }
}
@media (min-width: 620px) {
  .cards {
    grid-auto-columns: 25%;
  }
}
@media (min-width: 768px) {
  .cards {
    grid-auto-columns: 20%;
  }
}
@media (min-width: 1024px) {
  .cards {
    width: 924px;
  }
}

.card {
  width: 100%;
  aspect-ratio: 2/3;
}
.card-button {
  width: 100%;
  padding: 7.5% 5%;
  display: flex;
  scroll-snap-align: start;
  border: 3px solid transparent;
  border-radius: 7.5%;
}
.card-button:hover {
  border: 3px solid rgb(236, 49, 143);
}
.card-slider {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.card-title {
  font-weight: 100;
  font-size: 18px;
  margin: 20px 0;
  text-align: center;
}
@media (min-width: 420px) {
  .card-title {
    font-size: 24px;
  }
}

.hidden {
  visibility: hidden;
  pointer-events: none;
}

.displaynone {
  display: none;
}

.active {
  background-color: rgb(255, 200, 0);
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
.card-button {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in 0.75s ease-out forwards;
}
.card-button:nth-child(1) {
  animation-delay: 0.4s;
}
.card-button:nth-child(2) {
  animation-delay: 0.6s;
}
.card-button:nth-child(3) {
  animation-delay: 0.8s;
}
.card-button:nth-child(4) {
  animation-delay: 1s;
}
.card-button:nth-child(5) {
  animation-delay: 1.2s;
}

.card-title {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in 1.7s ease-out forwards;
}

.slide-out {
  animation: slide-out 0.5s ease-in forwards;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/player-count-picker/dt-player-count-picker.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;EACI,sCCsCW;EDrCX,UAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;AADJ;;AAGA;EACI,6BAAA;AAAJ;AACI;EACI,eAAA;AACR;;AACA;EACI,WAAA;EACA,aAAA;EACA,6BAAA;AAEJ;;AAAA;;EAEI,wBCpBS;ADuBb;;AADA;;EAEI,sBCnBK;ADuBT;;AAFA;;EAEI,6BAAA;AAKJ;AAJI;EAHJ;;IAIQ,aAAA;EAQN;AACF;;AAPA;EACI,WAAA;EACA,UAAA;EACA,mBCKmB;EDJnB,oCCpCS;AD8Cb;AARI;EANJ;IAOQ,aAAA;EAWN;AACF;AATQ;EADJ;IAEQ,aAAA;EAYV;AACF;AAXQ;EADJ;IAEQ,aAAA;EAcV;AACF;AAbI;EACI,UAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAeR;;AAbA;EACI,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kCAAA;EACA,qBAAA;AAgBJ;AAdI;EARJ;IASQ,wBAAA;EAiBN;AACF;AAhBI;EAXJ;IAYQ,sBAAA;EAmBN;AACF;AAlBI;EAdJ;IAeQ,sBAAA;EAqBN;AACF;AApBI;EAjBJ;IAkBQ,YAAA;EAuBN;AACF;;AAtBA;EACI,WAAA;EACA,iBAAA;AAyBJ;AAvBI;EACI,WAAA;EACA,gBC1BO;ED2BP,aAAA;EACA,wBAAA;EACA,6BAAA;EACA,mBC7Ba;ADsDrB;AAvBQ;EACI,mCAAA;AAyBZ;AAvBI;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;AAyBR;AAvBI;EACI,gBC/EY;EDgFZ,eAAA;EACA,cAAA;EACA,kBAAA;AAyBR;AAvBQ;EANJ;IAOQ,eC3FG;EDqHb;AACF;;AAzBA;EACI,kBAAA;EACA,oBAAA;AA4BJ;;AA1BA;EACI,aAAA;AA6BJ;;AA3BA;EACI,kCC5GK;AD0IT;;AA1BA;EACI;IACI,UAAA;IACA,wBAAA;EA6BN;AACF;AA5BA;EACI;IACI,UAAA;IACA,wBAAA;EA8BN;EA5BE;IACI,UAAA;IACA,2BAAA;EA8BN;AACF;AA7BA;EACI,UAAA;EACA,4BAAA;EACA,2CAAA;AA+BJ;AA7BI;EACI,qBAAA;AA+BR;AA7BI;EACI,qBAAA;AA+BR;AA7BI;EACI,qBAAA;AA+BR;AA7BI;EACI,mBAAA;AA+BR;AA7BI;EACI,qBAAA;AA+BR;;AA7BA;EACI,UAAA;EACA,4BAAA;EACA,0CAAA;AAgCJ;;AA9BA;EACI,0CAAA;AAiCJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./src/javascript/custom-components/player-name-input/dt-player-name-input.component.sass":
/*!************************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-name-input/dt-player-name-input.component.sass ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Effra Trial", sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  border: none;
}

.name-input {
  height: 40px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 0 15px;
  border: 2px solid rgb(255, 170, 0);
  background-color: rgba(255, 200, 0, 0.4);
  color: rgb(44, 46, 53);
  font-size: 20px;
  text-align: center;
}
@media (min-width: 1024px) {
  .name-input {
    font-size: 24px;
  }
}
.name-input:focus {
  outline: none;
}
.name-input::placeholder {
  color: rgb(44, 46, 53);
  font-weight: 100;
}
.name-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  color: rgb(44, 46, 53);
}
.name-input-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .name-input-title {
    font-size: 24px;
  }
}
.name-input-confirm {
  height: 30px;
  border-radius: 20px;
  width: 100%;
  font-size: 16px;
  color: rgb(44, 46, 53);
  background-color: rgb(255, 200, 0);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: font-weight 0.5s ease, box-shadow 0.5s ease;
}
.name-input-confirm:hover {
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  cursor: pointer;
  font-weight: bolder;
}
.name-input-confirm::before {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.name-input-confirm:hover::before {
  bottom: 0;
}

.input-wrapper {
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 620px) {
  .input-wrapper {
    width: 450px;
  }
}

.button-container {
  display: flex;
  justify-content: space-between;
}

dt-back-button {
  width: 100%;
  margin-right: 5px;
}

.warning {
  border: 2px solid red;
}
.warning-icon {
  position: absolute;
  top: 8px;
  left: 50px;
  fill: red;
  height: 20px;
}

.hidden {
  display: none;
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
.name-input-container {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in 0.75s ease-out forwards;
}

.slide-out {
  animation: slide-out 0.5s ease-in forwards;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/player-name-input/dt-player-name-input.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;EACI,sCCsCW;EDrCX,UAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;AADJ;;AAGA;EACI,YAAA;EACA,WAAA;EACA,mBC6BmB;ED5BnB,mBAAA;EACA,eAAA;EACA,kCAAA;EACA,wCAAA;EACA,sBCZI;EDaJ,eAAA;EACA,kBAAA;AAAJ;AAEI;EAZJ;IAaQ,eCTO;EDUb;AACF;AAAI;EACI,aAAA;AAER;AADI;EACI,sBCtBA;EDuBA,gBCTY;ADYpB;AADI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;EACA,sBC9BA;ADiCR;AADI;EACI,eAAA;EACA,gBClBU;EDmBV,kBAAA;EACA,mBCdK;ADiBb;AADQ;EANJ;IAOQ,eC/BG;EDmCb;AACF;AAHI;EACI,YAAA;EACA,mBCPe;EDQf,WAAA;EACA,eCtCO;EDuCP,sBC9CA;ED+CA,kCC9CC;ED+CD,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,uDAAA;AAKR;AAHQ;EACI,8CChBK;EDiBL,eAAA;EACA,mBAAA;AAKZ;AAHQ;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCC/DE;EDgEF,WAAA;EACA,4BAAA;AAKZ;AAHQ;EACI,SAAA;AAKZ;;AAHA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAMJ;AAJI;EANJ;IAOQ,YAAA;EAON;AACF;;AANA;EACI,aAAA;EACA,8BAAA;AASJ;;AAPA;EACI,WAAA;EACA,iBAAA;AAUJ;;AARA;EACI,qBAAA;AAWJ;AATI;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,SCzDQ;ED0DR,YAAA;AAWR;;AATA;EACI,aAAA;AAYJ;;AARA;EACI;IACI,UAAA;IACA,wBAAA;EAWN;AACF;AAVA;EACI;IACI,UAAA;IACA,wBAAA;EAYN;EAVE;IACI,UAAA;IACA,2BAAA;EAYN;AACF;AAXA;EACI,UAAA;EACA,4BAAA;EACA,2CAAA;AAaJ;;AAXA;EACI,0CAAA;AAcJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./src/javascript/custom-components/score-display/dt-score-display.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/javascript/custom-components/score-display/dt-score-display.component.sass ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Effra Trial", sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  border: none;
}

.score-display-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 500;
}

.players-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  column-gap: 5px;
}
@media (min-width: 620px) {
  .players-wrapper {
    column-gap: 10px;
  }
}
@media (min-width: 768px) {
  .players-wrapper {
    column-gap: 15px;
  }
}
@media (min-width: 1024px) {
  .players-wrapper {
    width: 930px;
    align-self: center;
  }
}

.player-container {
  flex: 1 1 calc(50% - 10px);
  margin-bottom: 10px;
  max-width: calc(50% - 10px);
}
@media (min-width: 620px) {
  .player-container {
    margin-bottom: 20px;
    flex: 1 1 calc(33.3% - 10px);
    max-width: calc(33.3% - 10px);
  }
}
@media (min-width: 1024px) {
  .player-container {
    max-width: 300px;
  }
}

.name,
.score,
.score-input {
  border-radius: 20px;
  height: 40px;
  width: 100%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
}
.name[type=number],
.score[type=number],
.score-input[type=number] {
  -moz-appearance: textfield;
}

.name {
  background-color: rgb(236, 49, 143);
  font-weight: 600;
  margin-bottom: 5px;
}

.score {
  border: 3px solid rgb(30, 191, 241);
  font-weight: 100;
}

.score-input {
  margin-bottom: 15px;
  font-weight: 400;
  background-color: rgba(255, 200, 0, 0.4);
  border: 3px solid rgb(255, 170, 0);
}
.score-input::placeholder {
  color: rgb(44, 46, 53);
  font-size: 24px;
  font-weight: 100;
}
.score-input-container {
  display: flex;
  flex-direction: column;
}
@media (min-width: 620px) {
  .score-input-container {
    width: 300px;
    margin: 0 auto;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (min-width: 1024px) {
  .score-input-container {
    width: 450px;
  }
}
.score-input-title {
  text-align: center;
  margin-bottom: 5px;
}

.input-wrapper {
  position: relative;
}

.button-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

dt-back-button {
  width: 49%;
}

.add-button {
  background-color: rgb(255, 200, 0);
  border-radius: 20px;
  height: 30px;
  width: 49%;
  font-family: "Effra Trial", sans-serif;
  font-size: 16px;
  color: rgb(44, 46, 53);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: font-weight 0.5s, box-shadow 0.5s ease;
}
.add-button:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  font-weight: bolder;
}
.add-button::before {
  cursor: pointer;
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.add-button:hover::before {
  bottom: 0;
}

.new-game-button {
  background-color: rgb(255, 200, 0);
  border-radius: 20px;
  height: 40px;
  width: 100%;
  margin-top: 10px;
  font-family: "Effra Trial", sans-serif;
  font-size: 16px;
  color: rgb(44, 46, 53);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: font-weight 0.5s ease, box-shadow 0.5s ease;
}
.new-game-button:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  font-weight: bolder;
}
.new-game-button::before {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.new-game-button:hover::before {
  bottom: 0;
}

.message-dialog-open {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 100vw;
  height: 350px;
  padding: 15px 10px;
  font-size: 24px;
  border-radius: 10px;
}
@media (min-width: 620px) {
  .message-dialog-open {
    width: 560px;
  }
}
.message-dialog-text {
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  width: 75%;
}
.message-dialog-button {
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: rgb(255, 200, 0);
  font-size: 16px;
  color: rgb(44, 46, 53);
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: font-weight 0.5s ease, box-shadow 0.5s ease;
}
@media (min-width: 420px) {
  .message-dialog-button {
    width: 380px;
  }
}
.message-dialog-button:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  font-weight: bolder;
}
.message-dialog-button::before {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.message-dialog-button:hover::before {
  bottom: 0;
}

.new-game-dialog-open {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 100vw;
  height: 300px;
  border-radius: 10px;
  padding: 35px 10px 15px 10px;
}
@media (min-width: 620px) {
  .new-game-dialog-open {
    width: 560px;
  }
}
.new-game-dialog-text {
  text-align: center;
  font-size: 24px;
  padding: 15px 35px;
}
.new-game-dialog-close-button {
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: transparent;
  height: 35px;
  width: 35px;
}
.new-game-dialog-close-button svg:hover {
  fill: rgb(255, 200, 0);
  cursor: pointer;
}
.new-game-dialog-button-container {
  display: flex;
  justify-content: space-between;
}
.new-game-dialog-yes-button, .new-game-dialog-no-button {
  width: 49%;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(255, 200, 0);
  color: rgb(44, 46, 53);
  font-size: 16px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: font-weight 0.5s ease, box-shadow 0.5s ease;
}
.new-game-dialog-yes-button:hover, .new-game-dialog-no-button:hover {
  box-shadow: 3px 3px 3px 0px rgb(153, 153, 153);
  cursor: pointer;
  font-weight: bolder;
}
.new-game-dialog-yes-button::before, .new-game-dialog-no-button::before {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 0);
  z-index: -1;
  transition: bottom 0.5s ease;
}
.new-game-dialog-yes-button:hover::before, .new-game-dialog-no-button:hover::before {
  bottom: 0;
}

dialog[open]::backdrop {
  background-color: rgba(191, 192, 191, 0.7);
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.warning {
  border: 2px solid red;
}
.warning-icon {
  position: absolute;
  top: 9px;
  left: 50px;
  fill: red;
  height: 20px;
}

.hidden {
  display: none;
}

.eliminated {
  opacity: 0.5;
}

.disabled {
  opacity: 0.4;
  pointer-events: none;
}

@keyframes slide-by {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
.score-display-wrapper {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in 0.75s ease-out forwards;
}

.slide-out {
  animation: slide-out 0.5s ease-in forwards;
}`, "",{"version":3,"sources":["webpack://./src/javascript/custom-components/score-display/dt-score-display.component.sass","webpack://./src/styles/_variables.sass"],"names":[],"mappings":"AAEA;EACI,sCCsCW;EDrCX,UAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;AADJ;;AAGA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;AAAJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EACA,mBCMS;EDLT,eAAA;AACJ;AACI;EAPJ;IAQQ,gBCCQ;EDCd;AACF;AADI;EAVJ;IAWQ,gBCHK;EDOX;AACF;AAHI;EAbJ;IAcQ,YAAA;IACA,kBAAA;EAMN;AACF;;AALA;EACI,0BAAA;EACA,mBCVY;EDWZ,2BAAA;AAQJ;AANI;EALJ;IAMQ,mBCbK;IDcL,4BAAA;IACA,6BAAA;EASN;AACF;AARI;EAVJ;IAWQ,gBAAA;EAWN;AACF;;AAVA;;;EAGI,mBCTmB;EDUnB,YAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAaJ;AAZI;;;EACI,0BAAA;AAgBR;;AAdA;EACI,mCCvDG;EDwDH,gBC3Cc;ED4Cd,kBAAA;AAiBJ;;AAfA;EACI,mCAAA;EACA,gBClDgB;ADoEpB;;AAhBA;EACI,mBC/CS;EDgDT,gBCrDiB;EDsDjB,wCCVqB;EDWrB,kCAAA;AAmBJ;AAjBI;EACI,sBCzEA;ED0EA,eClEO;EDmEP,gBC7DY;ADgFpB;AAjBI;EACI,aAAA;EACA,sBAAA;AAmBR;AAjBQ;EAJJ;IAKQ,YAAA;IACA,cAAA;IACA,kBAAA;IACA,aAAA;IACA,SAAA;IACA,2BAAA;EAoBV;AACF;AAnBQ;EAZJ;IAaQ,YAAA;EAsBV;AACF;AArBI;EACI,kBAAA;EACA,kBAAA;AAuBR;;AArBA;EACI,kBAAA;AAwBJ;;AAtBA;EACI,aAAA;EACA,8BAAA;EACA,eAAA;AAyBJ;;AAvBA;EACI,UAAA;AA0BJ;;AAxBA;EACI,kCC3GK;ED4GL,mBCzEmB;ED0EnB,YAAA;EACA,UAAA;EACA,sCC7EW;ED8EX,eC1GW;ED2GX,sBClHI;EDmHJ,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,kDAAA;AA2BJ;AAzBI;EACI,eAAA;EACA,8CCpFS;EDqFT,mBAAA;AA2BR;AAzBI;EACI,eAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCCnIM;EDoIN,WAAA;EACA,4BAAA;AA2BR;AAzBI;EACI,SAAA;AA2BR;;AAzBA;EACI,kCC5IK;ED6IL,mBC1GmB;ED2GnB,YAAA;EACA,WAAA;EACA,gBC5HY;ED6HZ,sCC/GW;EDgHX,eC5IW;ED6IX,sBCpJI;EDqJJ,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,uDAAA;AA4BJ;AA1BI;EACI,eAAA;EACA,8CCtHS;EDuHT,mBAAA;AA4BR;AA1BI;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCCpKM;EDqKN,WAAA;EACA,4BAAA;AA4BR;AA1BI;EACI,SAAA;AA4BR;;AAzBI;EACI,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,eClLO;EDmLP,mBAAA;AA4BR;AA1BQ;EAfJ;IAgBQ,YAAA;EA6BV;AACF;AA5BI;EACI,kBAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;AA8BR;AA5BI;EACI,YAAA;EACA,WAAA;EACA,mBCtKe;EDuKf,kCC1MC;ED2MD,eCrMO;EDsMP,sBC7MA;ED8MA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,uDAAA;AA8BR;AA5BQ;EAdJ;IAeQ,YAAA;EA+BV;AACF;AA9BQ;EACI,eAAA;EACA,8CCpLK;EDqLL,mBAAA;AAgCZ;AA/BQ;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCCjOE;EDkOF,WAAA;EACA,4BAAA;AAiCZ;AA/BQ;EACI,SAAA;AAiCZ;;AA9BI;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,4BAAA;AAiCR;AA/BQ;EAbJ;IAcQ,YAAA;EAkCV;AACF;AAjCI;EACI,kBAAA;EACA,eCrPO;EDsPP,kBAAA;AAmCR;AAjCI;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,6BAAA;EACA,YAAA;EACA,WAAA;AAmCR;AAlCQ;EACI,sBCvQH;EDwQG,eAAA;AAoCZ;AAlCI;EACI,aAAA;EACA,8BAAA;AAoCR;AAlCI;EAEI,UAAA;EACA,YAAA;EACA,mBC/Oe;EDgPf,kCCnRC;EDoRD,sBCrRA;EDsRA,eC/QO;EDgRP,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,uDAAA;AAmCR;AAjCQ;EACI,8CCvPK;EDwPL,eAAA;EACA,mBAAA;AAmCZ;AAjCQ;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kCCtSE;EDuSF,WAAA;EACA,4BAAA;AAmCZ;AAjCQ;EACI,SAAA;AAmCZ;;AAjCA;EACI,0CCnTgB;ADuVpB;;AAlCA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAqCJ;;AAnCA;EACI,qBAAA;AAsCJ;AApCI;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;AAsCR;;AApCA;EACI,aAAA;AAuCJ;;AArCA;EACI,YAAA;AAwCJ;;AAtCA;EACI,YAAA;EACA,oBAAA;AAyCJ;;AAtCA;EACI;IACI,UAAA;IACA,4BAAA;EAyCN;EAxCE;IACI,UAAA;IACA,wBAAA;EA0CN;EAzCE;IACI,UAAA;IACA,2BAAA;EA2CN;AACF;AA1CA;EACI;IACI,UAAA;IACA,wBAAA;EA4CN;AACF;AA3CA;EACI;IACI,UAAA;IACA,wBAAA;EA6CN;EA3CE;IACI,UAAA;IACA,2BAAA;EA6CN;AACF;AA5CA;EACI,UAAA;EACA,4BAAA;EACA,2CAAA;AA8CJ;;AA5CA;EACI,0CAAA;AA+CJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/javascript/custom-components/back-button/dt-back-button.html":
/*!**************************************************************************!*\
  !*** ./src/javascript/custom-components/back-button/dt-back-button.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<button class="back-button"></button>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/javascript/custom-components/language-selector/dt-language-selector.html":
/*!**************************************************************************************!*\
  !*** ./src/javascript/custom-components/language-selector/dt-language-selector.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<button class="open-button"></button>

<div class="dropdown-container" id="language-selector">
  <ul class="dropdown-menu">
    <li class="close-button-container">
      <button class="close-button">
        <svg
          class="close-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="35"
          height="35"
        >
          <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
    </li>
  </ul>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/javascript/custom-components/loader/dt-loader.html":
/*!****************************************************************!*\
  !*** ./src/javascript/custom-components/loader/dt-loader.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="loader-background"></div>

<svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path class="dot-1" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-2" d="M450 105.8a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-3" d="M490 260a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-4" d="M450 414.2a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-5" d="M304 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-6" d="M158 414.2a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-7" d="M118 260a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />

  <path class="dot-8" d="M158 105.8a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
</svg>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.html":
/*!******************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-count-picker/dt-player-count-picker.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="card-slider">
  <h2 class="card-title">SELECTER HET AANTAL SPELERS:</h2>
  <div class="cards"></div>
  <div class="button-container">
    <button class="previous-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        height="30px"
        width="30px"
      >
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
    </button>
    <div class="indicator-container">
      <div class="indicator indicator-1"></div>
      <div class="indicator indicator-2"></div>
      <div class="indicator indicator-3"></div>
      <div class="indicator indicator-4"></div>
    </div>
    <button class="next-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        height="30px"
        width="30px"
      >
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        />
      </svg>
    </button>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/javascript/custom-components/player-name-input/dt-player-name-input.html":
/*!**************************************************************************************!*\
  !*** ./src/javascript/custom-components/player-name-input/dt-player-name-input.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="name-input-container">
  <h2 class="name-input-title">Voer de naam in van:</h2>
  <div class="input-wrapper">
    <svg
      class="warning-icon hidden"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
      />
    </svg>
    <input type="text" class="name-input" placeholder="Speler" />
    <div class="button-container">
      <dt-back-button></dt-back-button>
      <button class="name-input-confirm">Voeg toe</button>
    </div>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/javascript/custom-components/score-display/dt-score-display.html":
/*!******************************************************************************!*\
  !*** ./src/javascript/custom-components/score-display/dt-score-display.html ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="score-display-wrapper">
  <div class="players-wrapper"></div>

  <div class="score-input-container">
    <h2 class="score-input-title">Voer score in:</h2>
    <div class="input-wrapper">
      <svg
        class="warning-icon hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
        />
      </svg>
      <input
        type="number"
        class="score-input"
        required
        min="0"
        inputmode="numeric"
      />
    </div>

    <div class="button-container">
      <dt-back-button></dt-back-button>
      <button class="add-button">voeg toe</button>
      <button class="new-game-button">nieuw spel</button>
    </div>
  </div>

  <dialog class="message-dialog">
    <div class="message-dialog-text"></div>
    <button class="message-dialog-button">OK</button>
  </dialog>

  <dialog class="new-game-dialog">
    <button class="new-game-dialog-close-button">
      <svg
        class="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width="35"
        height="35"
      >
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </button>

    <div class="new-game-dialog-text"></div>

    <div class="new-game-dialog-button-container">
      <button class="new-game-dialog-no-button"></button>
      <button class="new-game-dialog-yes-button"></button>
    </div>
  </dialog>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/canvas-confetti/dist/confetti.module.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/canvas-confetti/dist/confetti.module.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// canvas-confetti v1.9.3 built on 2024-04-30T22:19:17.794Z
var module = {};

// source content
/* globals Map */

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
  var canDrawBitmap = (function () {
    // this mostly supports ssr
    if (!global.OffscreenCanvas) {
      return false;
    }

    var canvas = new OffscreenCanvas(1, 1);
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, 1, 1);
    var bitmap = canvas.transferToImageBitmap();

    try {
      ctx.createPattern(bitmap, 'no-repeat');
    } catch (e) {
      return false;
    }

    return true;
  })();

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var bitmapMapper = (function (skipTransform, map) {
    // see https://github.com/catdad/canvas-confetti/issues/209
    // creating canvases is actually pretty expensive, so we should create a
    // 1:1 map for bitmap:canvas, so that we can animate the confetti in
    // a performant manner, but also not store them forever so that we don't
    // have a memory leak
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }

        if (map.has(bitmap)) {
          return map.get(bitmap);
        }

        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);

        map.set(bitmap, canvas);

        return canvas;
      },
      clear: function () {
        map.clear();
      }
    };
  })(canDrawBitmap, new Map());

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;

            bitmapMapper.clear();

            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;

    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + (10 * fetti.scalar);
      fetti.wobbleY = fetti.y + (10 * fetti.scalar);

      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
      fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';

    context.beginPath();

    if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === 'bitmap') {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;

      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);

      // apply the transform matrix from the confetti shape
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));

      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
      pattern.setTransform(matrix);

      context.globalAlpha = (1 - progress);
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - (width / 2),
        fetti.y - (height / 2),
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var flat = !!prop(options, 'flat');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar,
            flat: flat
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas); 
          }
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);

    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));

    var t2 = new Path2D();
    // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));

    return t2;
  }

  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error('path confetti are not supported in this browser');
    }

    var path, matrix;

    if (typeof pathData === 'string') {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }

    var path2d = new Path2D(path);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    if (!matrix) {
      // attempt to figure out the width of the path, up to 1000x1000
      var maxSize = 1000;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;

      // do some line skipping... this is faster than checking
      // every pixel and will be mostly still correct
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      width = maxX - minX;
      height = maxY - minY;

      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize/width, maxDesiredSize/height);

      matrix = [
        scale, 0, 0, scale,
        -Math.round((width/2) + minX) * scale,
        -Math.round((height/2) + minY) * scale
      ];
    }

    return {
      type: 'path',
      path: path,
      matrix: matrix
    };
  }

  function shapeFromText(textData) {
    var text,
        scalar = 1,
        color = '#000000',
        // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';

    if (typeof textData === 'string') {
      text = textData;
    } else {
      text = textData.text;
      scalar = 'scalar' in textData ? textData.scalar : scalar;
      fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
      color = 'color' in textData ? textData.color : color;
    }

    // all other confetti are 10 pixels,
    // so this pixel size is the de-facto 100% scale confetti
    var fontSize = 10 * scalar;
    var font = '' + fontSize + 'px ' + fontFamily;

    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext('2d');

    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);

    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;

    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);

    var scale = 1 / scalar;

    return {
      type: 'bitmap',
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module.exports);
var create = module.exports.create;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.sass */ "./src/styles/main.sass");
/* harmony import */ var _javascript_custom_components_back_button_dt_back_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/custom-components/back-button/dt-back-button.js */ "./src/javascript/custom-components/back-button/dt-back-button.js");
/* harmony import */ var _javascript_custom_components_language_selector_dt_language_selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/custom-components/language-selector/dt-language-selector.js */ "./src/javascript/custom-components/language-selector/dt-language-selector.js");
/* harmony import */ var _javascript_custom_components_player_count_picker_dt_player_count_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/custom-components/player-count-picker/dt-player-count-picker.js */ "./src/javascript/custom-components/player-count-picker/dt-player-count-picker.js");
/* harmony import */ var _javascript_custom_components_player_name_input_dt_player_name_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript/custom-components/player-name-input/dt-player-name-input.js */ "./src/javascript/custom-components/player-name-input/dt-player-name-input.js");
/* harmony import */ var _javascript_custom_components_score_display_dt_score_display_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascript/custom-components/score-display/dt-score-display.js */ "./src/javascript/custom-components/score-display/dt-score-display.js");
/* harmony import */ var _javascript_custom_components_loader_dt_loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./javascript/custom-components/loader/dt-loader.js */ "./src/javascript/custom-components/loader/dt-loader.js");
/* harmony import */ var _javascript_modules_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./javascript/modules/utils.js */ "./src/javascript/modules/utils.js");
/* harmony import */ var _javascript_modules_languages_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./javascript/modules/languages.js */ "./src/javascript/modules/languages.js");










(0,_javascript_modules_utils_js__WEBPACK_IMPORTED_MODULE_8__.fetchImage)('assets/onder_de_10_logo.png', document.querySelector('.logo-link'), 'logo-footer');
document.addEventListener('language-changed', function (e) {
  (0,_javascript_modules_languages_js__WEBPACK_IMPORTED_MODULE_9__.translate)(e.detail.title, document.querySelector('.header-title'));
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.cf89aee7f8be21fe314a.js.map