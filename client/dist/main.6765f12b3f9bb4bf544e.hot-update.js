webpackHotUpdate("main",{

/***/ "./client/src/components/mainImage.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/mainImage.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactjs-popup */ \"./node_modules/reactjs-popup/reactjs-popup.es.js\");\n/* harmony import */ var _popupZoom_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupZoom.jsx */ \"./client/src/components/popupZoom.jsx\");\n\n\n\n\n\nvar MainImage = function MainImage(_ref) {\n  var mainImage = _ref.mainImage,\n      arrowClick = _ref.arrowClick,\n      mainImageHover = _ref.mainImageHover;\n  console.log('MainImage', mainImage);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_popupZoom_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    mainImage: mainImage,\n    mainImageHover: mainImageHover\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"favorites\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: \"heart\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav-prev\",\n    onClick: function onClick(e) {\n      arrowClick(e.currentTarget);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: \"chevron-left\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav-next\",\n    onClick: function onClick(e) {\n      arrowClick(e.currentTarget);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: \"chevron-right\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainImage);\n\n//# sourceURL=webpack:///./client/src/components/mainImage.jsx?");

/***/ })

})