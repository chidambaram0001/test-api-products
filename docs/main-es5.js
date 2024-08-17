function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header>\n  <div>Produts</div>\n  <div><a href=\"#\">Logout</a></div>\n</header>\n<section>\n  <productlist></productlist>\n</section>\n<footer>\n  Copy Rights @2024 \n\n</footer>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html": (
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_popup_popupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-content></ng-content>\r\n<h3>Product Details</h3> \r\n<div class=\"images\">\r\n    <carousel>\r\n        <ng-container *ngFor=\"let item of modelData.images;\">\r\n          <ng-container *carouselItem>\r\n            <div class=\"item\"><img src={{item}} /></div>\r\n          </ng-container>\r\n        </ng-container>\r\n    </carousel>\r\n</div>\r\n<div class=\"prd-details\">\r\n    <div class=\"titledesc\">\r\n        <h5>{{modelData.title}}</h5>\r\n        <div class=\"desc\">{{modelData.description}}</div>\r\n    </div>\r\n    \r\n    <br/>\r\n    <div class=\"about\">\r\n        <div>\r\n            <h6>Brand</h6> \r\n            <label>{{modelData.brand}}</label>\r\n        </div>\r\n        <div>\r\n            <h6>Category</h6> \r\n            <label> {{modelData.category}}</label>\r\n        </div>\r\n       \r\n        <div class=\"star\">\r\n            <h6>Rating</h6>\r\n            <span class=\"fa fa-star\" *ngFor=\"let i of starCount\" [ngClass]=\"i?'checked':''\"></span>\r\n            <!-- <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n            <span class=\"fa fa-star\"></span> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"buy\">\r\n        <div class=\"price\"> ₹ {{modelData.price}}</div>\r\n        <button class=\"btn btn-primary\"> Buy </button>\r\n    </div>\r\n   \r\n</div>\r\n\r\n\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/product.list.html": (
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/product.list.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_productlist_productListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"outerlist\">\r\n        <div class=\"title\"> Product List</div>\r\n        <div class=\"sort\">\r\n            <label> Sort by</label>\r\n            <select (change)=\"handleSort($event)\">\r\n                <option value=\"rating\">Rating</option>\r\n                <option value=\"discountPercentage\">Discount Percentage</option>\r\n                <option value=\"price\">Price</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"outerprdlist\">\r\n        <div class=\"outercontent\" *ngFor=\"let i of prodList\">\r\n            <a href=\"javascript:void(0)\" (click)=\"showPopup(i.id)\">\r\n                <div class=\"img\">\r\n                    <img src=\"{{i.thumbnail}}\" alt=\"{{i.title}}\"/>\r\n                </div>\r\n                <h5>{{i.title}}</h5>\r\n                <label class=\"desc\">{{i.description}}</label>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"page\">\r\n        <button class=\"prev btn-primary\" (click)=\"handlePrev()\" [attr.disabled]=\"isdisabled\"> <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> </button>\r\n        <button class=\"nxt btn-primary\" (click)=\"handleNext()\"> <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<popup *ngIf=\"showPopupFlag\" class=\"popup\" [curPrdData]=\"selecteData\"><i class=\"fa fa-times close\" aria-hidden=\"true\" (click)=\"handleClose()\"></i></popup>\r\n<div class=\"overlay\" *ngIf=\"showPopupFlag\"> </div>\r\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app.component.scss": (
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #000;\n  color: #fff;\n  margin: 0px;\n  padding: 10px;\n}\nheader a {\n  color: #fff;\n}\nfooter {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\nsection {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXHRlc3QtYXBpLXByb2R1Y3RzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FER0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBRUksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4OztcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5oZWFkZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'Aspire-produts';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _productlist_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./productlist/product.list.component */"./src/app/productlist/product.list.component.ts");
    /* harmony import */
    var _productlist_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./productlist/product.service */"./src/app/productlist/product.service.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./popup/popup.component */"./src/app/popup/popup.component.ts");
    /* harmony import */
    var _popup_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./popup/carousel.component */"./src/app/popup/carousel.component.ts");
    /* harmony import */
    var _popup_carousel_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./popup/carousel-item.directive */"./src/app/popup/carousel-item.directive.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _productlist_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["Popup"], _popup_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _popup_carousel_item_directive__WEBPACK_IMPORTED_MODULE_9__["CarouselItemDirective"], _popup_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItemElement"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
      providers: [_productlist_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/popup/carousel-item.directive.ts": (
  /*!**************************************************!*\
    !*** ./src/app/popup/carousel-item.directive.ts ***!
    \**************************************************/
  /*! exports provided: CarouselItemDirective */
  /***/
  function _src_app_popup_carouselItemDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function () {
      return CarouselItemDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CarouselItemDirective = /*#__PURE__*/_createClass(function CarouselItemDirective(tpl) {
      _classCallCheck(this, CarouselItemDirective);
      this.tpl = tpl;
    });
    CarouselItemDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };
    CarouselItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[carouselItem]'
    })], CarouselItemDirective);

    /***/
  }),
  /***/"./src/app/popup/carousel.component.ts": (
  /*!*********************************************!*\
    !*** ./src/app/popup/carousel.component.ts ***!
    \*********************************************/
  /*! exports provided: CarouselItemElement, CarouselComponent */
  /***/
  function _src_app_popup_carouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function () {
      return CarouselItemElement;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./carousel-item.directive */"./src/app/popup/carousel-item.directive.ts");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    var CarouselItemElement = /*#__PURE__*/_createClass(function CarouselItemElement() {
      _classCallCheck(this, CarouselItemElement);
    });
    CarouselItemElement = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '.carousel-item-opt'
    })], CarouselItemElement);
    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(builder) {
        _classCallCheck(this, CarouselComponent);
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
      }
      return _createClass(CarouselComponent, [{
        key: "next",
        value: function next() {
          if (this.currentSlide + 1 === this.items.length) return;
          this.currentSlide = (this.currentSlide + 1) % this.items.length;
          var offset = this.currentSlide * this.itemWidth;
          var myAnimation = this.buildAnimation(offset);
          this.player = myAnimation.create(this.carousel.nativeElement);
          this.player.play();
        }
      }, {
        key: "buildAnimation",
        value: function buildAnimation(offset) {
          return this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            transform: "translateX(-".concat(offset, "px)")
          }))]);
        }
      }, {
        key: "prev",
        value: function prev() {
          if (this.currentSlide === 0) return;
          this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
          var offset = this.currentSlide * this.itemWidth;
          var myAnimation = this.buildAnimation(offset);
          this.player = myAnimation.create(this.carousel.nativeElement);
          this.player.play();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;
          // For some reason only here I need to add setTimeout, in my local env it's working without this.
          setTimeout(function () {
            _this.itemWidth = _this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            _this.carouselWrapperStyle = {
              width: "".concat(_this.itemWidth, "px")
            };
          });
        }
      }]);
    }();
    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__["AnimationBuilder"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__["CarouselItemDirective"])], CarouselComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(CarouselItemElement, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], CarouselComponent.prototype, "itemsElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      "static": false
    })], CarouselComponent.prototype, "carousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "timing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "showControls", void 0);
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carousel',
      exportAs: 'carousel',
      template: "\n    <section class=\"carousel-wrapper-opt\" [ngStyle]=\"carouselWrapperStyle\">\n      <ul class=\"carousel-inner-opt\" #carousel>\n        <li *ngFor=\"let item of items;\" class=\"carousel-item-opt\">\n          <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n        </li>\n      </ul>\n    </section>\n    <div *ngIf=\"showControls\" class=\"controls\" style=\"margin-top: 1em\">\n    \n      <button (click)=\"prev()\" class=\"btn btn-default\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      <button (click)=\"next()\" class=\"btn btn-default\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></button>\n    </div>\n  ",
      styles: ["\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      width: 6000px;\n    }\n\n    .carousel-wrapper-opt {\n      overflow: hidden;\n    }\n\n    .carousel-inner-opt {\n      display: flex;\n    }\n\n  "]
    })], CarouselComponent);

    /***/
  }),
  /***/"./src/app/popup/popup.component.ts": (
  /*!******************************************!*\
    !*** ./src/app/popup/popup.component.ts ***!
    \******************************************/
  /*! exports provided: Popup */
  /***/
  function _src_app_popup_popupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Popup", function () {
      return Popup;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var Popup = /*#__PURE__*/function () {
      function Popup() {
        _classCallCheck(this, Popup);
        this.starCount = [];
      }
      return _createClass(Popup, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log(this.curPrdData);
          this.modelData = this.curPrdData[0];
          var len = Math.floor(this.modelData.rating);
          for (var i = 0; i < 5; i++) {
            if (i < len - 1) {
              this.starCount.push(true);
            } else {
              this.starCount.push(false);
            }
          }
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Popup.prototype, "curPrdData", void 0);
    Popup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "popup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./popup.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./popup.scss */"./src/app/popup/popup.scss"))["default"]]
    })], Popup);

    /***/
  }),
  /***/"./src/app/popup/popup.scss": (
  /*!**********************************!*\
    !*** ./src/app/popup/popup.scss ***!
    \**********************************/
  /*! exports provided: default */
  /***/
  function _src_app_popup_popupScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".popup {\n  position: absolute;\n  top: 2%;\n  background: #fff;\n  margin: 0 auto;\n  left: 25%;\n  z-index: 2;\n  width: 50%;\n  border: 2px solid #bdb7b7;\n}\n.popup > h3 {\n  padding: 10px;\n  border-bottom: 1px solid #bdb7b7;\n}\n.popup .images, .popup .prd-details {\n  padding: 10px;\n}\n.overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  background: #000;\n  opacity: 0.5;\n  top: 0;\n}\n.close {\n  font-weight: bold;\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  color: #bdb7b7;\n  top: 11px;\n}\ncarousel {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.about > div {\n  padding-right: 6%;\n}\n.star .checked {\n  color: orange;\n}\n.buy {\n  text-align: right;\n}\n.price {\n  color: red;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvRDpcXEFuZ3VsYXJcXHRlc3QtYXBpLXByb2R1Y3RzL3NyY1xcYXBwXFxwb3B1cFxccG9wdXAuc2NzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtBQ0VSO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ0VKO0FEQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0dKO0FEREE7RUFDSSxZQUFBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREFFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREZJO0VBQ0ksaUJBQUE7QUNJUjtBRENJO0VBQ0ksYUFBQTtBQ0VSO0FEQ0U7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmRiN2I3O1xyXG4gICAgPiBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYjdiNztcclxuICAgIH1cclxuICAgIC5pbWFnZXMsLnByZC1kZXRhaWxze1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRvcDogMDtcclxufVxyXG4uY2xvc2V7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNiZGI3Yjc7XHJcbiAgICB0b3A6IDExcHg7XHJcbn1cclxuY2Fyb3VzZWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hYm91dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICA+IGRpdntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGFye1xyXG4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmJ1eXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAucHJpY2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSIsIi5wb3B1cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDI1JTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2JkYjdiNztcbn1cbi5wb3B1cCA+IGgzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGI3Yjc7XG59XG4ucG9wdXAgLmltYWdlcywgLnBvcHVwIC5wcmQtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRvcDogMDtcbn1cblxuLmNsb3NlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNiZGI3Yjc7XG4gIHRvcDogMTFweDtcbn1cblxuY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hYm91dCA+IGRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDYlO1xufVxuXG4uc3RhciAuY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idXkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/productlist/product.list.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/productlist/product.list.component.ts ***!
    \*******************************************************/
  /*! exports provided: ProductList */
  /***/
  function _src_app_productlist_productListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProductList", function () {
      return ProductList;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./product.service */"./src/app/productlist/product.service.ts");
    var ProductList = /*#__PURE__*/function () {
      function ProductList(prdService) {
        _classCallCheck(this, ProductList);
        this.prdService = prdService;
        this.prodList = [];
        this.curPage = 0;
        //protected isdisabled = true;
        this.showPopupFlag = false;
        this.selecteData = [];
      }
      return _createClass(ProductList, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.prdService.getProductList().subscribe(function (data) {
            _this2.prodList = data.products;
            console.log(document.getElementsByTagName("body")[0].clientHeight);
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {}
      }, {
        key: "handleSort",
        value: function handleSort(e) {
          var sortby = e.target.value;
          this.prodList.sort(function (a, b) {
            return a[sortby] - b[sortby];
          });
        }
      }, {
        key: "handlePrev",
        value: function handlePrev() {
          this.getPageList(false);
        }
      }, {
        key: "handleNext",
        value: function handleNext() {
          this.getPageList(true);
        }
      }, {
        key: "getPageList",
        value: function getPageList(isNxt) {
          var _this3 = this;
          //this.isdisabled = true
          if (isNxt) {
            this.curPage += 12;
          } else {
            this.curPage -= 12;
          }
          if (this.curPage < 0) {
            //  this.isdisabled = false
            return;
          }
          this.prdService.getProductList(12, this.curPage).subscribe(function (data) {
            _this3.prodList = data.products;
          });
        }
      }, {
        key: "showPopup",
        value: function showPopup(id) {
          this.showPopupFlag = true;
          this.selecteData = this.prodList.filter(function (val) {
            return val.id === id;
          });
          window.scrollTo(0, 0);
          document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
      }, {
        key: "handleClose",
        value: function handleClose() {
          this.showPopupFlag = false;
          document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }
      }]);
    }();
    ProductList.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };
    ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "productlist",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./product.list.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/product.list.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./product.styles.scss */"./src/app/productlist/product.styles.scss"))["default"]]
    })], ProductList);

    /***/
  }),
  /***/"./src/app/productlist/product.service.ts": (
  /*!************************************************!*\
    !*** ./src/app/productlist/product.service.ts ***!
    \************************************************/
  /*! exports provided: ProductService */
  /***/
  function _src_app_productlist_productServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ProductService = /*#__PURE__*/function () {
      function ProductService(htp) {
        _classCallCheck(this, ProductService);
        this.htp = htp;
      }
      return _createClass(ProductService, [{
        key: "getProductList",
        value: function getProductList() {
          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return this.htp.get("https://dummyjson.com/products?limit=" + count + "&skip=" + page);
        }
      }]);
    }();
    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], ProductService);

    /***/
  }),
  /***/"./src/app/productlist/product.styles.scss": (
  /*!*************************************************!*\
    !*** ./src/app/productlist/product.styles.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_productlist_productStylesScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".outerlist {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 20px;\n}\n.outerlist .sort {\n  padding-right: 20px;\n}\n.outerlist .sort label {\n  display: block;\n}\n.outerlist .title {\n  font-weight: bold;\n}\n.outerprdlist {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n.outerprdlist a {\n  text-decoration: none;\n}\n.outerprdlist .outercontent {\n  flex-basis: 23%;\n  align-self: center;\n  border: 1px solid gray;\n  padding: 11px;\n  max-height: 350px;\n  overflow: hidden;\n  margin-bottom: 25px;\n}\n.outerprdlist .outercontent h5 {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  text-wrap: nowrap;\n  color: #000;\n}\n.outerprdlist .outercontent .img {\n  max-width: 100%;\n}\n.outerprdlist .outercontent .img img {\n  max-width: 100%;\n}\n.outerprdlist .outercontent .desc {\n  width: 83%;\n  overflow: hidden;\n  display: inline-block;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #000;\n}\n.page {\n  display: flex;\n  justify-content: right;\n  flex-direction: row;\n  margin-bottom: 10px;\n}\n.page button {\n  background-color: #3847aa;\n  background-color: #3847aa;\n  color: #fff;\n  margin-right: 10px;\n  padding: 3px;\n  font-weight: bold;\n}\n.page button:disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGxpc3QvRDpcXEFuZ3VsYXJcXHRlc3QtYXBpLXByb2R1Y3RzL3NyY1xcYXBwXFxwcm9kdWN0bGlzdFxccHJvZHVjdC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvcHJvZHVjdGxpc3QvcHJvZHVjdC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FEQ1E7RUFDSSxxQkFBQTtBQ0NaO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBRVEsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ2hCO0FESVE7RUFDSSxlQUFBO0FDRlo7QURJWTtFQUNJLGVBQUE7QUNGaEI7QURLUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0haO0FEUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNKUjtBREtRO0VBQ0ksWUFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdGxpc3QvcHJvZHVjdC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3V0ZXJsaXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC5zb3J0e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLm91dGVycHJkbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgLm91dGVyY29udGVudHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAyMyU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgcGFkZGluZzogMTFweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2N7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNzEsIDE3MCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDdhYTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi5vdXRlcmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLm91dGVybGlzdCAuc29ydCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4ub3V0ZXJsaXN0IC5zb3J0IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ub3V0ZXJsaXN0IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3V0ZXJwcmRsaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ub3V0ZXJwcmRsaXN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ub3V0ZXJwcmRsaXN0IC5vdXRlcmNvbnRlbnQge1xuICBmbGV4LWJhc2lzOiAyMyU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMTFweDtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ub3V0ZXJwcmRsaXN0IC5vdXRlcmNvbnRlbnQgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjVweDtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm91dGVycHJkbGlzdCAub3V0ZXJjb250ZW50IC5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ub3V0ZXJwcmRsaXN0IC5vdXRlcmNvbnRlbnQgLmltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ub3V0ZXJwcmRsaXN0IC5vdXRlcmNvbnRlbnQgLmRlc2Mge1xuICB3aWR0aDogODMlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGFnZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0N2FhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0N2FhO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2UgYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! D:\Angular\test-api-products\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map