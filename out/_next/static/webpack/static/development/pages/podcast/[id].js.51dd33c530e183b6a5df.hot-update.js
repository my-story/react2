webpackHotUpdate("static\\development\\pages\\podcast\\[id].js",{

/***/ "./pages/podcast/[id].js":
/*!*******************************!*\
  !*** ./pages/podcast/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_PodcastServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/PodcastServices */ "./services/PodcastServices.js");
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var _components_survivalKit_SurvivalKit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/survivalKit/SurvivalKit */ "./components/survivalKit/SurvivalKit.js");

var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\pages\\podcast\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class PodcastDetail extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      podcast: "",
      kit: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchPodcast", () => {
      const {
        id
      } = this.props;
      _services_PodcastServices__WEBPACK_IMPORTED_MODULE_2__["default"].getOne(id).then(podcast => {
        this.setState({
          podcast
        });
        this.fetchKits(podcast.influencer._id);
      }).catch(err => console.log(err));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchKits", id => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_3__["default"].getKit(id).then(kit => this.setState({
        kit
      })).then(err => console.log(err));
    });
  }

  static getInitialProps({
    query: {
      id
    }
  }) {
    return {
      id
    };
  }

  componentDidMount() {
    this.fetchPodcast();
  }

  render() {
    const {
      podcast
    } = this.state;

    if (podcast === "") {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      });
    } else {
      return __jsx("div", {
        className: "podcast-detail-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx("iframe", {
        src: "//html5-player.libsyn.com/embed/episode/id/14252078/height/360/theme/standard/thumbnail/yes/direction/backward/",
        height: "360",
        width: "100%",
        scrolling: "no",
        allowfullscreen: true,
        webkitallowfullscreen: true,
        mozallowfullscreen: true,
        oallowfullscreen: true,
        msallowfullscreen: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "podcast-header-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }, __jsx("p", {
        id: "categories-podcast",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      }, "Categories "), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }
      }, podcast.title), __jsx("div", {
        className: "name-and-share",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 29
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 33
        }
      }, podcast.influencer.name.firstName, " ", podcast.influencer.name.lastName, " | ", podcast.time)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      }, "Share")))), __jsx("div", {
        className: "podcast-detail-description-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      }, podcast.description), __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      }, "Who is ", podcast.influencer.name.firstName, " ", podcast.influencer.name.lastName, " ?"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }
      }, podcast.influencer.description)), __jsx("div", {
        className: "podcast-detail-kit-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx("p", {
        id: "survival-kit-word",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }
      }, "SURVIVAL KITS"), __jsx(_components_survivalKit_SurvivalKit__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: podcast.influencer._id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 24
        }
      })));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PodcastDetail);

/***/ })

})
//# sourceMappingURL=[id].js.51dd33c530e183b6a5df.hot-update.js.map