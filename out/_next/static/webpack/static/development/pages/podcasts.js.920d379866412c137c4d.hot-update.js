webpackHotUpdate("static\\development\\pages\\podcasts.js",{

/***/ "./components/podcast/PodcastCard.js":
/*!*******************************************!*\
  !*** ./components/podcast/PodcastCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_PodcastServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/PodcastServices */ "./services/PodcastServices.js");

var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\components\\podcast\\PodcastCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class PodcastCard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {} // podcast: ""
    // componentDidMount() {
    //     this.setState({podcast: this.props.podcast})
    // }
    );

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (length > 170) {
        return __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }
        }, p.substring(0, 170), " ...");
      } else {
        return __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 20
          }
        }, p);
      }
    });
  }

  render() {
    // const {podcast} = this.props;
    console.log(this.props.podcast._id); // if (podcast === ""){
    //     return(<div></div>)
    // } else {

    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/podcast/[id]",
      as: "/podcast/".concat(this.props.podcast._id),
      key: this.props.index,
      prefetch: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "podcast-outer-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "podcast-image-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("img", {
      id: "podcast-thumbnail-image",
      src: this.props.podcast.image,
      alt: "Podcast Thumbnail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "podcast-information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "podcast-heading-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, this.props.podcast.influencer.name.firstName, " ", this.props.podcast.influencer.name.lastName), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, this.props.podcast.time)), __jsx("div", {
      className: "podcast-description-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, this.props.podcast.title), this.shrinkParagraph(this.props.podcast.description)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PodcastCard);

/***/ })

})
//# sourceMappingURL=podcasts.js.920d379866412c137c4d.hot-update.js.map