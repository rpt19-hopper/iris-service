webpackHotUpdate("main",{

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./client/src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_imageView_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/imageView.jsx */ \"./client/src/components/imageView.jsx\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__[\"library\"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"fab\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faChevronRight\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faHeart\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faExpandAlt\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faHandPointer\"]);\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      productNumber: 549504785,\n      imageList: [\"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg\", \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg\"],\n      mainImage: {\n        url: \"https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg\",\n        index: 0\n      },\n      zoom: false,\n      hover: false\n    };\n    _this.getUrls = _this.getUrls = _this.getUrls.bind(_assertThisInitialized(_this));\n    _this.handleClickOnArrow = _this.handleClickOnArrow.bind(_assertThisInitialized(_this));\n    _this.handleClickOnThumbnail = _this.handleClickOnThumbnail.bind(_assertThisInitialized(_this));\n    _this.handleHoverOnMainImage = _this.handleHoverOnMainImage.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var productId = window.location.pathname.split('/')[2] || this.state.productNumber;\n      this.setState({\n        productNumber: productId\n      }, function () {\n        _this2.getUrls(_this2.state.productNumber);\n      });\n    }\n  }, {\n    key: \"getUrls\",\n    value: function getUrls(productNumber) {\n      var _this3 = this;\n\n      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax(\"http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/product/\".concat(productNumber), {\n        success: function success(imageObj) {\n          var parsedObj = JSON.parse(imageObj);\n          var imageUrls = parsedObj.imageUrls;\n\n          _this3.setState({\n            imageList: imageUrls,\n            mainImage: {\n              url: imageUrls[0],\n              index: 0\n            }\n          });\n        }\n      });\n    }\n  }, {\n    key: \"handleClickOnArrow\",\n    value: function handleClickOnArrow(target) {\n      var currIndex = this.state.mainImage.index;\n      var imageList = this.state.imageList;\n\n      if (target.className === 'nav-prev') {\n        if (currIndex === 0) {\n          this.setState({\n            mainImage: {\n              url: imageList[imageList.length - 1],\n              index: imageList.length - 1\n            }\n          });\n        } else {\n          this.setState({\n            mainImage: {\n              url: imageList[currIndex - 1],\n              index: currIndex - 1\n            }\n          });\n        }\n      }\n\n      if (target.className === 'nav-next') {\n        if (currIndex === imageList.length - 1) {\n          this.setState({\n            mainImage: {\n              url: imageList[0],\n              index: 0\n            }\n          });\n        } else {\n          this.setState({\n            mainImage: {\n              url: imageList[currIndex + 1],\n              index: currIndex + 1\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: \"handleClickOnThumbnail\",\n    value: function handleClickOnThumbnail(target, index) {\n      this.setState({\n        mainImage: {\n          url: target.src,\n          index: index\n        }\n      });\n    }\n  }, {\n    key: \"handleHoverOnMainImage\",\n    value: function handleHoverOnMainImage() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"normal\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_imageView_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        images: this.state.imageList,\n        mainImage: this.state.mainImage.url,\n        arrowClick: this.handleClickOnArrow,\n        thumbnailClick: this.handleClickOnThumbnail,\n        hoverMainImage: this.handleHoverOnMainImage\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('image'));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/src/app.jsx?");

/***/ })

})