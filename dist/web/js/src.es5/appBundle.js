"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var appBundle = function () {
  'use strict';
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var RDKLogo = /*#__PURE__*/function (_lng$Component) {
    _inherits(RDKLogo, _lng$Component);

    var _super = _createSuper(RDKLogo);

    function RDKLogo() {
      _classCallCheck(this, RDKLogo);

      return _super.apply(this, arguments);
    }

    _createClass(RDKLogo, [{
      key: "_init",
      value: function _init() {
        this._logoAnimation = this.animation({
          duration: 1.1,
          repeat: 0,
          stopMethod: 'immediate',
          actions: [{
            t: 'BarBlue',
            p: 'x',
            v: {
              0: -140,
              1: 0
            }
          }, {
            t: 'BarBlue',
            p: 'alpha',
            v: {
              0: 0,
              0.15: 0,
              0.4: 1,
              1: 1
            }
          }, {
            t: 'BarYellow',
            p: 'x',
            v: {
              0: -120,
              1: 0
            }
          }, {
            t: 'BarYellow',
            p: 'alpha',
            v: {
              0: 0,
              0.05: 0,
              0.3: 1,
              1: 1
            }
          }, {
            t: 'BarGreen',
            p: 'x',
            v: {
              0: -100,
              1: 0
            }
          }, {
            t: 'BarGreen',
            p: 'alpha',
            v: {
              0: 0,
              0.005: 0,
              0.2: 1,
              1: 1
            }
          }, {
            t: 'BarOrange',
            p: 'x',
            v: {
              0: -80,
              1: 0
            }
          }, {
            t: 'BarOrange',
            p: 'alpha',
            v: {
              0: 0,
              0.0005: 0,
              0.1: 1,
              1: 1
            }
          }, {
            t: 'LetterR',
            p: 'x',
            v: {
              0: 350,
              1: 500
            }
          }, {
            t: 'LetterR',
            p: 'alpha',
            v: {
              0: 0,
              0.05: 0,
              0.5: 1,
              1: 1
            }
          }, {
            t: 'LetterD',
            p: 'x',
            v: {
              0: 800,
              1: 990
            }
          }, {
            t: 'LetterD',
            p: 'alpha',
            v: {
              0: 0,
              0.15: 0,
              0.6: 1,
              1: 1
            }
          }, {
            t: 'LetterK',
            p: 'x',
            v: {
              0: 1250,
              1: 1480
            }
          }, {
            t: 'LetterK',
            p: 'alpha',
            v: {
              0: 0,
              0.25: 0,
              0.7: 1,
              1: 1
            }
          }]
        });
      }
    }, {
      key: "start",
      value: function start() {
        this._logoAnimation.start();
      }
    }, {
      key: "stop",
      value: function stop() {
        this._logoAnimation.stop();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 1897,
          h: 372,
          LetterR: {
            alpha: 0.0001,
            x: 500,
            y: 0,
            w: 436,
            h: 372,
            src: App.getPath('images/logo/Letter_R.png')
          },
          LetterD: {
            alpha: 0.0001,
            x: 1000,
            y: 0,
            w: 431,
            h: 372,
            src: App.getPath('images/logo/Letter_D.png')
          },
          LetterK: {
            alpha: 0.0001,
            x: 1500,
            y: 0,
            w: 397,
            h: 372,
            src: App.getPath('images/logo/Letter_K.png')
          },
          BarBlue: {
            alpha: 0.0001,
            x: 0,
            y: 0,
            w: 449,
            h: 71,
            rect: true,
            color: 0xFF14B0DD
          },
          BarYellow: {
            alpha: 0.0001,
            x: 0,
            y: 100,
            w: 449,
            h: 71,
            rect: true,
            color: 0xFFF9B82D
          },
          BarGreen: {
            alpha: 0.0001,
            x: 0,
            y: 200,
            w: 449,
            h: 71,
            rect: true,
            color: 0xFF9AC235
          },
          BarOrange: {
            alpha: 0.0001,
            x: 0,
            y: 300,
            w: 449,
            h: 71,
            rect: true,
            color: 0xFFEF7D24
          }
        };
      }
    }]);

    return RDKLogo;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var Icons = /*#__PURE__*/function (_lng$Component2) {
    _inherits(Icons, _lng$Component2);

    var _super2 = _createSuper(Icons);

    function Icons() {
      _classCallCheck(this, Icons);

      return _super2.apply(this, arguments);
    }

    _createClass(Icons, [{
      key: "_init",
      value: function _init() {
        this._iconAnimation = this.animation({
          duration: 4.2,
          delay: 2.78,
          repeat: 0,
          stopMethod: 'immediate',
          actions: [{
            t: 'Icon01',
            p: 'scale',
            v: {
              0.2: 0,
              0.35: 1
            }
          }, {
            t: 'Icon01',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }, {
            t: 'Icon02',
            p: 'scale',
            v: {
              0.215: 0,
              0.365: 1
            }
          }, {
            t: 'Icon02',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }, {
            t: 'Icon03',
            p: 'scale',
            v: {
              0.23: 0,
              0.38: 1
            }
          }, {
            t: 'Icon03',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }, {
            t: 'Icon04',
            p: 'scale',
            v: {
              0.255: 0,
              0.395: 1
            }
          }, {
            t: 'Icon04',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }, {
            t: 'Icon05',
            p: 'scale',
            v: {
              0.27: 0,
              0.41: 1
            }
          }, {
            t: 'Icon06',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }, {
            t: 'Icon06',
            p: 'scale',
            v: {
              0.285: 0,
              0.435: 1
            }
          }, {
            t: 'Icon06',
            p: 'rotation',
            v: {
              0.2: -0.5,
              0.35: 0
            }
          }]
        });
      }
    }, {
      key: "start",
      value: function start() {
        this._iconAnimation.start();
      }
    }, {
      key: "stop",
      value: function stop() {
        this._iconAnimation.stop();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Icon01: {
            mount: 0.5,
            scale: 0,
            x: 0,
            y: 0,
            w: 167,
            h: 167,
            src: App.getPath('images/assets/icon_01.png')
          },
          Icon02: {
            mount: 0.5,
            scale: 0,
            x: 115,
            y: -205,
            w: 167,
            h: 167,
            src: App.getPath('images/assets/icon_02.png')
          },
          Icon03: {
            mount: 0.5,
            scale: 0,
            x: 315,
            y: -325,
            w: 167,
            h: 167,
            src: App.getPath('images/assets/icon_03.png')
          },
          Icon04: {
            mount: 0.5,
            scale: 0,
            x: 575,
            y: -325,
            w: 167,
            h: 167,
            src: App.getPath('images/assets/icon_04.png')
          },
          Icon05: {
            mount: 0.5,
            scale: 0,
            x: 800,
            y: -205,
            w: 167,
            h: 167,
            src: App.getPath('images/assets/icon_05.png')
          },
          Icon06: {
            mount: 0.5,
            scale: 0,
            x: 910,
            y: 0,
            w: 170,
            h: 170,
            src: App.getPath('images/assets/icon_06.png')
          }
        };
      }
    }]);

    return Icons;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var Message = /*#__PURE__*/function (_lng$Component3) {
    _inherits(Message, _lng$Component3);

    var _super3 = _createSuper(Message);

    function Message() {
      _classCallCheck(this, Message);

      return _super3.apply(this, arguments);
    }

    _createClass(Message, [{
      key: "message",
      set: function set(v) {
        this._message = v;
        this.tag('Message').text.text = v;
      },
      get: function get() {
        return this._message;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Message: {
            color: 0xFF3B646C,
            text: {
              text: '',
              fontSize: 26
            }
          }
        };
      }
    }]);

    return Message;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var WifiItem = /*#__PURE__*/function (_lng$Component4) {
    _inherits(WifiItem, _lng$Component4);

    var _super4 = _createSuper(WifiItem);

    function WifiItem() {
      _classCallCheck(this, WifiItem);

      return _super4.apply(this, arguments);
    }

    _createClass(WifiItem, [{
      key: "_focus",
      value: function _focus() {
        this.color = 0xFF377FAC;
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.color = 0xFF0E2B3D;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        this.fireAncestors('$onWifiItemSelect', {
          item: this.item
        });
      }
    }, {
      key: "item",
      set: function set(v) {
        this._item = v;
        this.patch({
          WifiStrenghtIcon: {
            src: App.getPath(WifiItem.getIconWifiStrength(v.strength))
          },
          WifiProtectedIcon: {
            src: App.getPath(WifiItem.getIconWifiProtected(v["protected"]))
          },
          Label: {
            text: {
              text: v.name || 'Unknown'
            }
          }
        });
      },
      get: function get() {
        return this._item;
      }
    }, {
      key: "introAnimation",
      set: function set(delay) {
        var _this = this;

        this.showAnimation = this.animation({
          duration: 1,
          delay: delay,
          stopMethod: 'immediate',
          actions: [{
            p: 'x',
            v: {
              0: 800,
              1: 0
            }
          }]
        });
        setTimeout(function () {
          _this.showAnimation.start();
        }, 1000);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          x: 800,
          w: 800,
          h: 80,
          rect: true,
          color: 0xFF0E2B3D,
          WifiStrenghtIcon: {
            w: 50,
            h: 50,
            x: 25,
            y: 15,
            src: App.getPath('images/icons/icon_wifi.png')
          },
          WifiProtectedIcon: {
            w: 25,
            h: 25,
            x: 60,
            y: 45
          },
          Label: {
            x: 100,
            mountY: 0.4,
            y: 40,
            text: {
              text: 'Unknown',
              fontSize: 32,
              maxLines: 1,
              wordWrapWidth: 650
            }
          }
        };
      }
    }, {
      key: "getIconWifiStrength",
      value: function getIconWifiStrength(v) {
        switch (true) {
          case v >= 0 && v < 20:
            return 'images/icons/icon_wifi_01.png';

          case v >= 20 && v < 40:
            return 'images/icons/icon_wifi_02.png';

          case v >= 40 && v < 60:
            return 'images/icons/icon_wifi_03.png';

          case v >= 60 && v < 80:
            return 'images/icons/icon_wifi_04.png';

          case v >= 80 && v <= 100:
            return 'images/icons/icon_wifi_05.png';

          default:
            return 'images/icons/icon_wifi.png';
        }
      }
    }, {
      key: "getIconWifiProtected",
      value: function getIconWifiProtected(wifiProtected) {
        if (wifiProtected) {
          return 'images/icons/icon_wifi_protected_true.png';
        } else {
          return 'images/icons/icon_wifi_protected_false.png';
        }
      }
    }]);

    return WifiItem;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var WifiList = /*#__PURE__*/function (_lng$Component5) {
    _inherits(WifiList, _lng$Component5);

    var _super5 = _createSuper(WifiList);

    function WifiList() {
      _classCallCheck(this, WifiList);

      return _super5.apply(this, arguments);
    }

    _createClass(WifiList, [{
      key: "open",
      value: function open() {}
    }, {
      key: "close",
      value: function close() {}
    }, {
      key: "_init",
      value: function _init() {
        this._index = 0;
        this.gridY = 0;
      }
    }, {
      key: "moveList",
      value: function moveList(dir) {
        if (dir === 'up') {
          this.gridY -= 510;
        } else if (dir === 'down') {
          this.gridY += 510;
        }

        this.tag('WifiList').patch({
          smooth: {
            y: this.gridY
          }
        });
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        if (this.index > 0) {
          this.index--;

          if (this.index % 6 === 5 && this.index !== 0) {
            this.moveList('down');
          }
        }
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        var listEnd = this.tag('WifiList').children.length - 1;

        if (this.index < listEnd) {
          this.index++;

          if (this.index % 6 === 0 && this.index <= listEnd) {
            this.moveList('up');
          }
        }
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('WifiList').children[this.index];
      }
    }, {
      key: "index",
      set: function set(v) {
        this._index = v;
      },
      get: function get() {
        return this._index;
      }
    }, {
      key: "items",
      set: function set(v) {
        if (!(v && Array.isArray(v) && v.length)) return;
        this.tag('WifiList').children = v.map(function (item, idx) {
          return {
            type: WifiItem,
            introAnimation: idx * 0.2,
            item: item,
            y: idx * 85
          };
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 800,
          h: 510,
          clipping: true,
          WifiList: {}
        };
      }
    }]);

    return WifiList;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var ThunderJS = function () {
    function l(e) {
      return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function n(n, e) {
      var t = Object.keys(n);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })), t.push.apply(t, o);
      }

      return t;
    }

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = null;
    "undefined" != typeof WebSocket ? t = WebSocket : "undefined" != typeof MozWebSocket ? t = MozWebSocket : void 0 !== e ? t = e.WebSocket || e.MozWebSocket : "undefined" != typeof window ? t = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (t = self.WebSocket || self.MozWebSocket);

    function f(t) {
      return new Promise(function (e, n) {
        if (i) e(i);else try {
          c || ((c = new r(function (e) {
            return [e && e.protocol || "ws://", e && e.host || "localhost", ":" + (e && e.port || 80), e && e.endpoint || "/jsonrpc"].join("");
          }(t), "notification")).addEventListener("message", function (e) {
            !function (e) {
              if ("string" == typeof e && (e = JSON.parse(e.normalize().replace(/\\x([0-9A-Fa-f]{2})/g, ""))), e.id) {
                var n = a[e.id];
                n ? ("result" in e ? n.resolve(e.result) : n.reject(e.error), delete a[e.id]) : console.log("no pending request found with id " + e.id);
              }
            }(e.data);
          }), c.addEventListener("message", function (e) {
            !function (n) {
              if ("string" == typeof n && (n = JSON.parse(n.normalize().replace(/\\x([0-9A-Fa-f]{2})/g, ""))), !n.id && n.method) {
                var e = u[n.method];
                e && Array.isArray(e) && e.length ? e.forEach(function (e) {
                  e(n.params);
                }) : console.log("no callbacks for " + n.method);
              }
            }(e.data);
          })), c.addEventListener("open", function () {
            e(i = c);
          });
        } catch (e) {
          n(e);
        }
      });
    }

    function o(s) {
      return {
        request: function request(i, c, u) {
          return new Promise(function (e, n) {
            var t = p += 1,
                o = function (e, n, t) {
              var o;
              return (o = t && t.version) ? o : e && (e[n] || e["default"]) || 1;
            }(s.versions, i, u),
                r = function (e, n, t, o, r) {
              o && delete o.version;
              var i = {
                jsonrpc: "2.0",
                id: e,
                method: [n, r, t].join(".")
              };
              return !o && !1 !== o || "object" === l(o) && 0 === Object.keys(o).length || (i.params = o), i;
            }(t, i, c, u, o);

            s.debug && (console.log(" "), console.log("API REQUEST:"), console.log(JSON.stringify(r, null, 2)), console.log(" ")), a[t] = {
              body: r,
              resolve: e,
              reject: n
            }, function (e, n) {
              f(e).then(function (e) {
                e.send(JSON.stringify(n));
              })["catch"](console.error);
            }(s, r);
          });
        }
      };
    }

    var r = t,
        a = {},
        u = {},
        i = null,
        c = null,
        p = 0,
        s = {
      DeviceInfo: {
        freeRam: function freeRam(e) {
          return this.call("systeminfo", e).then(function (e) {
            return e.freeram;
          });
        },
        version: function version(e) {
          return this.call("systeminfo", e).then(function (e) {
            return e.version;
          });
        }
      }
    };

    function d(n, t, e) {
      var o = this,
          r = function (e, n, t) {
        var o = y(e, n);

        if (!u[o]) {
          u[o] = [];
          var r = "register";
          var i = o.split(".").slice(0, -1).join(".");
          var c = {
            event: n,
            id: i
          };
          this.api.request(e, r, c).then()["catch"]();
        }

        return u[o].push(t), u[o].length - 1;
      }.call(this, n, t, e);

      return {
        dispose: function dispose() {
          var e = y(n, t);
          u[e].splice(r, 1), 0 === u[e].length && function (e, n) {
            var t = y(e, n);
            delete u[t];
            var o = "unregister",
                r = t.split(".").slice(0, -1).join("."),
                i = {
              event: n,
              id: r
            };
            this.api.request(e, o, i);
          }.call(o, n, t);
        }
      };
    }

    function y(e, n) {
      return ["client", e, "events", n].join(".");
    }

    var h,
        g = function t(e) {
      return {
        options: e,
        plugin: !1,
        call: function call() {
          var e = Array.prototype.slice.call(arguments);
          this.plugin && e[0] !== this.plugin && e.unshift(this.plugin);
          var n = e[0],
              t = e[1];
          return "function" == typeof this[n][t] ? this[n][t](e[2]) : this.api.request.apply(this, e);
        },
        registerPlugin: function registerPlugin(e, n) {
          this[e] = b(Object.assign(Object.create(t), n, {
            plugin: e
          }));
        },
        subscribe: function subscribe() {},
        on: function on() {
          var e = Array.prototype.slice.call(arguments);
          return this.plugin && e[0] !== this.plugin && e.unshift(this.plugin), d.apply(this, e);
        },
        once: function once() {
          console.log("todo ...");
        }
      };
    },
        b = function e(n) {
      return new Proxy(n, {
        get: function get(o, r) {
          var i = o[r];
          return "api" === r ? h : void 0 !== i ? "function" == typeof i ? -1 < ["on", "once", "subscribe"].indexOf(r) ? function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) {
              n[t] = arguments[t];
            }

            return i.apply(this, n);
          } : function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) {
              n[t] = arguments[t];
            }

            return function (t, e) {
              "object" === l(t) && ("object" !== l(t) || t.then && "function" == typeof t.then) || (t = new Promise(function (e, n) {
                t instanceof Error == !1 ? e(t) : n(t);
              }));
              var n = "function" == typeof e[e.length - 1] ? e[e.length - 1] : null;
              if (!n) return t;
              t.then(function (e) {
                return n(null, e);
              })["catch"](function (e) {
                return n(e);
              });
            }(i.apply(this, n), n);
          } : "object" === l(i) ? e(Object.assign(Object.create(g(o.options)), i, {
            plugin: r
          })) : i : !1 === o.plugin ? e(Object.assign(Object.create(g(o.options)), {}, {
            plugin: r
          })) : function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) {
              n[t] = arguments[t];
            }

            return n.unshift(r), o.call.apply(this, n);
          };
        }
      });
    };

    return function (e) {
      return h = o(e), b(function (r) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? n(i, !0).forEach(function (e) {
            var n, t, o;
            n = r, o = i[t = e], t in n ? Object.defineProperty(n, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[t] = o;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : n(i).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          });
        }

        return r;
      }({}, g(e), {}, s));
    };
  }();
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var Wifi = /*#__PURE__*/function () {
    function Wifi(config) {
      _classCallCheck(this, Wifi);

      this._thunderjs = new ThunderJS(config);
      this._networks = undefined;
    }

    _createClass(Wifi, [{
      key: "configs",
      value: function configs() {
        return this._thunderjs.call('WifiControl', 'configs');
      }
    }, {
      key: "deleteConfigs",
      value: function deleteConfigs() {
        var _this2 = this;

        return this._thunderjs.call('WifiControl', 'configs').then(function (configs) {
          configs.forEach(function (config) {
            _this2._thunderjs.call('WifiControl', 'delete', {
              ssid: config.ssid
            });
          });
        });
      }
    }, {
      key: "getNetwork",
      value: function getNetwork(ssid) {
        if (this._networks === undefined) return undefined;
        return this._networks.filter(function (n) {
          if (n.name === ssid) return true;
        })[0];
      }
    }, {
      key: "networks",
      value: function networks() {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          var _getWifiNetworks = function _getWifiNetworks() {
            _this3._thunderjs.call('WifiControl', 'networks').then(function (data) {
              if (data === undefined || data.length === undefined || data.length === 0) return;
              _this3._networks = data.filter(function (n) {
                if (n.ssid && n.ssid !== '') return true;else return false;
              }).map(function (n) {
                // the version I have has something weird with the signal strength, lets work around it, looks like an long int rollover of 4294967295
                if (n.signal > 4294967000) n.signal = 4294967295 - n.signal; // signal is measured in -dBm, which ranges from -30 dBm is 100% to -90dBm is 0%. However the value returned is positive

                var signal = 0;
                if (n.signal < 40) signal = 100;else if (n.signal < 50 && n.signal > 40) signal = 90;else if (n.signal < 60 && n.signal > 50) signal = 75;else if (n.signal < 70 && n.signal > 60) signal = 50;else if (n.signal > 80 && n.signal < 70) signal = 25;else signal = 0;
                var type;
                if (n.pairs[0].method === 'WPA') type = 'WPA';else if (n.pairs[0].method === 'WPA2') type = 'RSN';else if (n.pairs[0].method === 'WPA_WPA2') type = 'WPA RSN';else if (n.pairs[0].method === 'WEP') type = 'Unknown';else if (n.pairs[0].method === 'ESS') type = 'Unsecure';else type = 'Unkown';
                return {
                  name: n.ssid,
                  strength: signal,
                  "protected": n.pairs[0].method === 'ESS' ? false : true,
                  type: type
                };
              });
              if (_this3._wifiControlScanListener) _this3._wifiControlScanListener.dispose();
              console.log("Got ".concat(_this3._networks.length, " networks"));
              resolve(_this3._networks);
            });
          };

          _this3._wifiControlScanListener = _this3._thunderjs.on('WifiControl', 'scanresults', function (data) {
            _getWifiNetworks();
          });

          _this3._thunderjs.call('WifiControl', 'scan');

          setTimeout(_getWifiNetworks.bind(_this3), 2000);
        });
      }
    }, {
      key: "scanAndConnect",
      value: function scanAndConnect(ssid, password, type) {
        var _this4 = this;

        return new Promise(function (resolve, reject) {
          _this4.networks().then(function (networks) {
            if (_this4.getNetwork(ssid) === undefined) reject('Network does not exist');
          }).then(_this4.connect(ssid, password, type)).then(resolve());
        });
      }
    }, {
      key: "connect",
      value: function connect(ssid, password, type) {
        var _this5 = this;

        console.log("Connecting to ".concat(ssid, " with psk: ").concat(password, " and type ").concat(type));
        if (this._wifiConnectionListener) this._wifiControlScanListener.dispose(this._wifiConnectionListener);
        return this._thunderjs.call('WifiControl', "config@".concat(ssid), {
          ssid: ssid,
          accesspoint: false,
          psk: password,
          type: type
        }).then(function () {
          _this5._wifiConnectionListener = _this5._thunderjs.on('WifiControl', 'connectionchange', function () {
            console.log('Succesfully connected to wifi, storing configuration');

            _this5._thunderjs.call('WifiControl', 'store');

            console.log('Getting IP on wlan0'); // FIXME - we should be able to handle more then wlan0

            _this5._thunderjs.call('NetworkControl', 'request', {
              device: 'wlan0'
            });
          });

          _this5._thunderjs.call('WifiControl', 'connect', {
            ssid: ssid
          });
        });
      }
    }]);

    return Wifi;
  }();
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var CONNECTION_TIMEOUT = 15000;
  var WIFI_CONNECTION_TIMEOUT = 30000;

  var WPE = /*#__PURE__*/function () {
    function WPE(host, port, stage) {
      var _this6 = this;

      _classCallCheck(this, WPE);

      var config = {
        host: host,
        port: port
      };
      this._wifi = new Wifi(config);
      this._stage = stage;
      this._baseBootmanagerUrl = 'http://bootmanager.metrological.com';
      this._landingBaseBootPageDefault = 'rdk/landingpage';
      this.STATES = {
        NOIP: 1,
        HASIP: 2,
        HASTIME: 3,
        HASINTERNET: 4
      };
      this._state = this.STATES.NOIP;
      this._thunderjs = new ThunderJS(config);

      this._thunderjs.on('Controller', 'all', this._onMessage.bind(this));

      this._deviceId = undefined;

      this._thunderjs.call('DeviceInfo', 'systeminfo').then(function (systeminfo) {
        _this6._deviceId = systeminfo.deviceid;
      });

      this._userCancelled = false;
      this._wifiWizard = false;
      document.addEventListener('keyup', this._keyHandler.bind(this));
    }

    _createClass(WPE, [{
      key: "init",
      value: function init() {
        console.log('init');

        this._checkPlugins();

        this.check();
        setTimeout(this._noConnectionAfterTime.bind(this), CONNECTION_TIMEOUT);
      }
    }, {
      key: "_checkPlugins",
      value: function _checkPlugins() {
        var _this7 = this;

        /*
        this._uxPlugin = undefined;
        this._wifiPlugin = undefined;
        this._state = this.STATES.NOIP;
        */
        this._thunderjs.call('Controller', 'status').then(function (_plugins) {
          for (var i = 0; i < _plugins.length; i++) {
            var _p = _plugins[i];

            if (_p.callsign === 'UX') {
              console.log('Found UX plugin');
              _this7._uxPlugin = _p;
            }

            if (_p.callsign === 'WifiControl') {
              console.log('Found WifiControl plugin');
              _this7._wifiPlugin = _p;
            }
          }
        });
      }
      /*
       * Key handler
       */

    }, {
      key: "_keyHandler",
      value: function _keyHandler(e) {
        // cancelling is no longer available while the wifi screens are up
        if (this._wifiWizard === true) return;

        if (e.keyCode === 13) {
          console.log('user cancelled');
          this._userCancelled = true;

          this._updateUIState('UserCancelled');
        }
      }
      /*
       * Failure handlers
       */

    }, {
      key: "_noConnectionAfterTime",
      value: function _noConnectionAfterTime() {
        console.log('_noConnectionAfterTime');

        if (this._state !== this.STATES.HASINTERNET) {
          if (this._wifiPlugin === undefined) {
            this._updateUIState('NoConnection');
          } else {
            this._wifiWizard = true;

            this._checkAvailableWifiConfigs();
          }
        }
      }
    }, {
      key: "_noWiFiConnectionAfterTime",
      value: function _noWiFiConnectionAfterTime() {
        var _this8 = this;

        console.log('_noWiFiConnectionAfterTime');

        if (this._state !== this.STATES.HASINTERNET) {
          this._updateUIState('WifiConnectError'); // delete the config and render wifi list


          this._wifi.deleteConfigs().then(function () {
            _this8._wifi.networks().then(function (networks) {
              _this8._wifiNetworks = networks;

              _this8._updateUIState('WifiLocations', networks);
            });
          });
        }
      }
      /*
       * WIFI
       */

    }, {
      key: "_checkAvailableWifiConfigs",
      value: function _checkAvailableWifiConfigs() {
        var _this9 = this;

        console.log('_checkAvailableWifiConfigs');

        this._wifi.configs().then(function (configs) {
          console.log('_checkAvailableWifiConfigs configs:', configs);

          if (configs.length === 0) {
            // no wifi configs found, scan and show UI
            console.log('_checkAvailableWifiConfigs no configs found, scanning');

            _this9._updateUIState('ScanningForNetworks');

            _this9._wifi.networks().then(function (networks) {
              _this9._updateUIState('WifiLocations', networks);
            });
          } else {
            // connect to config[0]
            console.log('_checkAvailableWifiConfigs found config, connecting');

            _this9._updateUIState('ConnectingToNetwork', configs[0].ssid);

            setTimeout(_this9._noWiFiConnectionAfterTime.bind(_this9), WIFI_CONNECTION_TIMEOUT);

            _this9._wifi.scanAndConnect(configs[0].ssid, configs[0].psk, configs[0].type).then(function () {
              _this9.check();
            })["catch"](function (e) {
              _this9._updateUIState('WifiConnectError');
            });
          }
        });
      }
    }, {
      key: "connectWifi",
      value: function connectWifi(ssid, passwd) {
        var _this10 = this;

        this._updateUIState('ConnectingToNetwork', ssid);

        var network = this._wifi.getNetwork(ssid);

        setTimeout(this._noWiFiConnectionAfterTime.bind(this), WIFI_CONNECTION_TIMEOUT);

        this._wifi.connect(network.name, passwd, network.type).then(function () {
          _this10.check();
        });
      }
      /*
       * Checkers
       */

    }, {
      key: "check",
      value: function check() {
        var _this11 = this;

        // stagger checks, to make sure were not checking too much in parallel
        if (this._checkInProgress === true) return setTimeout(this.check.bind(this), 5000);
        console.log('check');
        this._checkInProgress = true;

        this._checkIPAddress().then(this._checkForTime.bind(this)).then(this._checkForInternet.bind(this)).then(function () {
          console.log('check state:', _this11._state);

          if (_this11._state >= _this11.STATES.HASTIME) {
            _this11._updateUIState('Ready');

            _this11._wifiWizard = false;
            setTimeout(function () {
              _this11._getBootmanagerUrl().then(function (data) {
                if (_this11._userCancelled === true) return;

                _this11._launchUx(data.url);
              })["catch"](function (err) {
                console.error(err);
              });
            }, 7 * 1000);
          } else {
            _this11._checkInProgress = false;
          }
        })["catch"](function (err) {
          _this11._checkInProgress = false;
          console.error('Error', err);

          _this11._updateUIState('NoConnection');
        });
      }
    }, {
      key: "_checkIPAddress",
      value: function _checkIPAddress() {
        var _this12 = this;

        console.log('_checkIPAddress');
        return this._thunderjs.DeviceInfo.addresses().then(function (data) {
          console.log('_parseNetworks', data);
          var ipList = data.filter(function (d) {
            if (d.name === 'lo' || d.ip === undefined || d.ip.length < 1) return false;else return true;
          }).map(function (d) {
            return d.ip[0];
          });

          if (ipList.length > 0) {
            _this12._updateUIState('HasLocalNetwork', ipList.toString());

            _this12._state = _this12.STATES.HASIP;
          }
        });
      }
    }, {
      key: "_checkForTime",
      value: function _checkForTime() {
        var _this13 = this;

        console.log('_checkForTime');
        return this._thunderjs.call('Controller', 'status@TimeSync').then(function (res) {
          if (res && Array.isArray(res) && res[0] && res[0].state === "activated") {
            _this13._state = _this13.STATES.HASTIME;
            console.log('_checkForTime HASTIME');
          }
        });
      }
    }, {
      key: "_checkForInternet",
      value: function _checkForInternet() {
        var _this14 = this;

        // hack to avoid calling to location sync without time, this for somehow crashed my system
        if (this._state < this.STATES.HASTIME) return Promise.resolve();
        console.log('_checkForInternet');
        return this._thunderjs.call('LocationSync', 'location').then(function (res) {
          if (res.publicip !== undefined && res.publicip !== '') {
            _this14._state = _this14.STATES.HASINTERNET;
            console.log('_checkForInternet HASINTERNET');
          }
        });
      }
    }, {
      key: "_updateUIState",
      value: function _updateUIState(state, data) {
        console.log('_updateUIState', state, data);

        this._stage._setState(state, [{
          data: data
        }]);
      }
      /*
       * Notifications
       */

    }, {
      key: "_onMessage",
      value: function _onMessage(notification) {
        console.log('_onMessage', notification);
        if (!notification) return;

        var _state;

        if (notification.data !== undefined) _state = notification.data.state;
        if (notification.callsign === 'LocationSync') this.check();
        if (notification.callsign === 'TimeSync') this.check();
        if (notification.callsign === 'NetworkControl') this.check();

        if (notification.callsign === 'WifiControl') {
          this._checkPlugins();

          setTimeout(this.check.bind(this), 5000);
        }
      }
      /*
       * Final stage handlers
       */

    }, {
      key: "_getBootmanagerUrl",
      value: function _getBootmanagerUrl(info) {
        var _this15 = this;

        var url = this._baseBootmanagerUrl;
        console.log('_getBootmanagerUrl');
        return this._getConfig().then(function (config) {
          console.log('_getBootmanagerUrl config & deviceId', config, _this15._deviceId);

          var _encodedDeviceId = encodeURIComponent(_this15._deviceId);

          if (config !== undefined && config.url !== undefined) {
            console.log('_getBootmanagerUrl by url', config.url);
            return _this15._xhr('GET', "".concat(config.url, "/").concat(_encodedDeviceId));
          } else if (config !== undefined && config.operator !== undefined) {
            console.log('_getBootmanagerUrl by operator', config.operator);
            return _this15._xhr('GET', "".concat(_this15._baseBootmanagerUrl, "/").concat(config.operator, "/").concat(_encodedDeviceId));
          } else {
            console.log('_getBootmanagerUrl default', _this15._landingBaseBootPageDefault);
            return _this15._xhr('GET', "".concat(_this15._baseBootmanagerUrl, "/").concat(_this15._landingBaseBootPageDefault));
          }
        })["catch"](function (e) {
          console.error('_getBootmanagerUrl error', e);
          console.log('_getBootmanagerUrl fallback to default', _this15._landingBaseBootPageDefault);
          return _this15._xhr('GET', "".concat(_this15._baseBootmanagerUrl, "/").concat(_this15._landingBaseBootPageDefault));
        });
      }
    }, {
      key: "_launchUx",
      value: function _launchUx(url) {
        var _this16 = this;

        //using all for now, individual states on UX through thunderjs didnt seem to work
        this._updateUIState('LaunchingUX');

        console.log('_launchUx', url);

        this._thunderjs.on('Controller', 'all', function (data) {
          if (data.callsign !== 'UX') return;

          var _data = data.data ? data.data : {};

          if (_data.state === 'activated') _this16._thunderjs.call('UX', 'state', 'resumed');
          if (_data.suspended === false) _this16._thunderjs.call('UX', 'url', url);
          if (_data.url === url && _data.loaded) setTimeout(_this16._harakiri.bind(_this16), 5000);
        });

        if (this._uxPlugin.state === 'deactivated') this._thunderjs.call('Controller', 'activate', {
          'callsign': 'UX'
        });else if (this._uxPlugin.state === 'suspended') this._thunderjs.call('UX', 'state', 'resumed');else if (this._uxPlugin.state === 'resumed') this._thunderjs.call('UX', 'url').then(function (_url) {
          if (_url === url) _this16._harakiri();else _this16._thunderjs.call('UX', 'url', url);
        });
      }
    }, {
      key: "_harakiri",
      value: function _harakiri() {
        console.log('_harakiri');

        this._thunderjs.call('Controller', 'deactivate', {
          'callsign': 'WebKitBrowser'
        });
      }
      /*
       * Utility
       */

    }, {
      key: "_getConfig",
      value: function _getConfig() {
        return this._xhr('GET', '/config.json');
      }
    }, {
      key: "_xhr",
      value: function _xhr(method, url, body) {
        return new Promise(function (resolve, reject) {
          var http = new XMLHttpRequest();

          http.onreadystatechange = function (event) {
            var req = event.target;

            if (req.readyState == 4) {
              if (req.status == 200) {
                try {
                  resolve(method === 'GET' ? JSON.parse(req.responseText) : undefined);
                } catch (err) {
                  reject(err);
                }
              } else {
                reject('XHR failed');
              }
            }
          };

          http.open(method || 'GET', url, true);
          http.send(body);
        });
      }
    }]);

    return WPE;
  }();
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var template = {
    keyWidth: 50,
    keyHeight: 70,
    horizontalSpacing: 25,
    verticalSpacing: 20,
    layouts: {
      'abc': {
        rows: [{
          keys: [{
            c: 'a'
          }, {
            c: 'b'
          }, {
            c: 'c'
          }, {
            c: 'd'
          }, {
            c: 'e'
          }, {
            c: 'f'
          }, {
            c: 'g'
          }, {
            c: 'h'
          }, {
            c: 'i'
          }, {
            c: 'j'
          }, {
            c: 'k'
          }, {
            c: 'l'
          }, {
            action: 'backspace',
            w: 125,
            source: 'images/icons/icon_backspace.png'
          }]
        }, {
          keys: [{
            c: 'm'
          }, {
            c: 'n'
          }, {
            c: 'o'
          }, {
            c: 'p'
          }, {
            c: 'q'
          }, {
            c: 'r'
          }, {
            c: 's'
          }, {
            c: 't'
          }, {
            c: 'u'
          }, {
            c: 'v'
          }, {
            c: 'w'
          }, {
            c: 'x'
          }, {
            c: 'y'
          }, {
            c: 'z'
          }]
        }, {
          keys: [{
            c: '.'
          }, {
            c: '_'
          }, {
            c: '-'
          }, {
            c: '@'
          }, {
            c: '0'
          }, {
            c: '1'
          }, {
            c: '2'
          }, {
            c: '3'
          }, {
            c: '4'
          }, {
            c: '5'
          }, {
            c: '6'
          }, {
            c: '7'
          }, {
            c: '8'
          }, {
            c: '9'
          }]
        }, {
          keys: [{
            c: ','
          }, {
            action: 'space',
            c: 'space',
            w: 650
          }, {
            action: 'toggleToLayout',
            toLayout: '#123',
            c: '!#',
            w: 125
          }, {
            action: 'toggleToLayout',
            toLayout: 'ABC',
            c: 'ABC',
            w: 125
          }]
        } // {
        // 	keys: [
        // 		{action: '.com', c: '.com', w: 125},
        // 		{action: '@gmail.com', c: '@gmail.com', w: 275},
        // 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
        // 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
        // 	]
        // }
        ]
      },
      'ABC': {
        rows: [{
          keys: [{
            c: 'A'
          }, {
            c: 'B'
          }, {
            c: 'C'
          }, {
            c: 'D'
          }, {
            c: 'E'
          }, {
            c: 'F'
          }, {
            c: 'G'
          }, {
            c: 'H'
          }, {
            c: 'I'
          }, {
            c: 'J'
          }, {
            c: 'K'
          }, {
            c: 'L'
          }, {
            action: 'backspace',
            w: 125,
            source: 'images/icons/icon_backspace.png'
          }]
        }, {
          keys: [{
            c: 'M'
          }, {
            c: 'N'
          }, {
            c: 'O'
          }, {
            c: 'P'
          }, {
            c: 'Q'
          }, {
            c: 'R'
          }, {
            c: 'S'
          }, {
            c: 'T'
          }, {
            c: 'U'
          }, {
            c: 'V'
          }, {
            c: 'W'
          }, {
            c: 'X'
          }, {
            c: 'Y'
          }, {
            c: 'Z'
          }]
        }, {
          keys: [{
            c: '.'
          }, {
            c: '_'
          }, {
            c: '-'
          }, {
            c: '@'
          }, {
            c: '0'
          }, {
            c: '1'
          }, {
            c: '2'
          }, {
            c: '3'
          }, {
            c: '4'
          }, {
            c: '5'
          }, {
            c: '6'
          }, {
            c: '7'
          }, {
            c: '8'
          }, {
            c: '9'
          }]
        }, {
          keys: [{
            c: ','
          }, {
            action: 'space',
            c: 'space',
            w: 650
          }, {
            action: 'toggleToLayout',
            toLayout: '#123',
            c: '!#',
            w: 125
          }, {
            action: 'toggleToLayout',
            toLayout: 'abc',
            c: 'abc',
            w: 125
          }]
        } // {
        // 	keys: [
        // 		{action: '.com', c: '.com', w: 125},
        // 		{action: '@gmail.com', c: '@gmail.com', w: 275},
        // 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
        // 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
        // 	]
        // }
        ]
      },
      '#123': {
        rows: [{
          keys: [{
            c: '!'
          }, {
            c: '@'
          }, {
            c: '#'
          }, {
            c: '$'
          }, {
            c: '%'
          }, {
            c: '^'
          }, {
            c: '&'
          }, {
            c: '*'
          }, {
            c: '('
          }, {
            c: ')'
          }, {
            c: '`'
          }, {
            c: '~'
          }, {
            action: 'backspace',
            w: 125,
            source: 'images/icons/icon_backspace.png'
          }]
        }, {
          keys: [{
            c: '¡'
          }, {
            c: '¿'
          }, {
            c: '∞'
          }, {
            c: '['
          }, {
            c: ']'
          }, {
            c: '{'
          }, {
            c: '}'
          }, {
            c: '\\'
          }, {
            c: '|'
          }, {
            c: '-'
          }, {
            c: '_'
          }, {
            c: '='
          }, {
            c: '+'
          }, {
            c: ';'
          }]
        }, {
          keys: [{
            c: ':'
          }, {
            c: '•'
          }, {
            c: '\"'
          }, {
            c: '\''
          }, {
            c: '<'
          }, {
            c: '>'
          }, {
            c: '.'
          }, {
            c: ','
          }, {
            c: '/'
          }, {
            c: '?'
          }]
        }, {
          keys: [{
            c: ''
          }, {
            action: 'space',
            c: 'space',
            w: 650
          }, {
            action: 'toggleToLayout',
            toLayout: 'abc',
            c: 'abc',
            w: 125
          }, {
            action: 'toggleToLayout',
            toLayout: 'ABC',
            c: 'ABC',
            w: 125
          }]
        } // {
        // 	keys: [
        // 		{action: '.com', c: '.com', w: 125},
        // 		{action: '@gmail.com', c: '@gmail.com', w: 275},
        // 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
        // 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
        // 	]
        // }
        ]
      }
    }
  };
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var KeyboardButton = /*#__PURE__*/function (_lng$Component6) {
    _inherits(KeyboardButton, _lng$Component6);

    var _super6 = _createSuper(KeyboardButton);

    function KeyboardButton() {
      _classCallCheck(this, KeyboardButton);

      return _super6.apply(this, arguments);
    }

    _createClass(KeyboardButton, [{
      key: "_update",
      value: function _update() {
        var key = this._key;
        var content = this._key.source ? {
          w: 39,
          h: 26,
          y: 30,
          src: this._key.source ? App.getPath(this._key.source) : ''
        } : {
          text: {
            text: key.c || '',
            fontFace: 'RobotoRegular',
            textAlign: 'center',
            fontSize: 36
          }
        };
        this.patch({
          UnderLine: {
            alpha: this.action !== 'input' ? 1 : 0,
            w: this.w,
            y: this.h - 3
          },
          Background: {
            w: this.w,
            h: this.h,
            rect: true,
            color: 0xFF0E2B3D
          },
          Content: _objectSpread({
            w: this.w,
            h: this.h,
            mountX: 0.5,
            mountY: 0.4,
            x: this.w / 2,
            y: this.h / 2
          }, content)
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          Background: {
            color: 0xFF377FAC
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          Background: {
            color: 0xFF0E2B3D
          }
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._update();
      }
    }, {
      key: "action",
      set: function set(v) {
        this._action = v;
      },
      get: function get() {
        return this._action;
      }
    }, {
      key: "c",
      get: function get() {
        return this.key.c;
      }
    }, {
      key: "key",
      set: function set(v) {
        this._key = v;

        if (this.active) {
          this._update();
        }
      },
      get: function get() {
        return this._key;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          UnderLine: {
            x: 0,
            y: 0,
            w: 0,
            h: 3,
            rect: true,
            color: 0xFF444444,
            alpha: 0
          },
          Background: {
            rect: true,
            color: 0xFF0E2B3D
          },
          Content: {}
        };
      }
    }]);

    return KeyboardButton;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var Keyboard = /*#__PURE__*/function (_lng$Component7) {
    _inherits(Keyboard, _lng$Component7);

    var _super7 = _createSuper(Keyboard);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      return _super7.apply(this, arguments);
    }

    _createClass(Keyboard, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this.currentKey;
      }
    }, {
      key: "_navigate",
      value: function _navigate(dir, value) {
        dir = dir === 'up' || dir === 'down' ? 'vertical' : 'horizontal';

        if (dir === 'horizontal' && this.colIndex + value < this.rowLength && this.colIndex + value > -1) {
          this.previous = null;
          return this.colIndex += value;
        } else if (dir === 'vertical' && this.rowIndex + value < this.rows.length && this.rowIndex + value > -1) {
          var currentColIndex = this.colIndex;
          var targetRow = this.rowIndex + value;

          if (this.previous && this.previous.row === targetRow) {
            var tmp = this.previous.col;
            this.previous.col = this.colIndex;
            this.colIndex = tmp;
          } else {
            var _targetRow = this.children[this.rowIndex + value];
            var targetItems = _targetRow.children;
            var ck = this.currentKey;
            var target = 0;

            for (var i = 0; i < targetItems.length; i++) {
              var ckx = this.children[this.rowIndex].x + ck.x;
              var tix = _targetRow.x + targetItems[i].x;

              if (ckx >= tix && ckx <= tix + targetItems[i].w || tix >= ckx && tix <= ckx + ck.w) {
                target = i;
                break;
              }
            }

            this.colIndex = target;
          }

          this.previous = {
            col: currentColIndex,
            row: this.rowIndex
          };
          return this.rowIndex += value;
        }

        return false;
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this17 = this;

        if (this._layout && this.keyboardTemplate.layouts[this._layout] === undefined) {
          console.error("Configured layout \"".concat(this.layout, "\" does not exist. Reverting to \"").concat(Object.keys(this.keyboardTemplate.layouts)[0], "\""));
          this._layout = null;
        }

        if (!this._layout) {
          this._layout = Object.keys(this.keyboardTemplate.layouts)[0];
        }

        var _this$keyboardTemplat = this.keyboardTemplate,
            keyWidth = _this$keyboardTemplat.keyWidth,
            keyHeight = _this$keyboardTemplat.keyHeight,
            _this$keyboardTemplat2 = _this$keyboardTemplat.horizontalSpacing,
            horizontalSpacing = _this$keyboardTemplat2 === void 0 ? 0 : _this$keyboardTemplat2,
            _this$keyboardTemplat3 = _this$keyboardTemplat.verticalSpacing,
            verticalSpacing = _this$keyboardTemplat3 === void 0 ? 0 : _this$keyboardTemplat3,
            layouts = _this$keyboardTemplat.layouts;
        this.children = layouts[this._layout].rows.map(function (row, rowIndex) {
          var keyOffset = 0;
          var _row$x = row.x,
              x = _row$x === void 0 ? 0 : _row$x,
              _row$rowVerticalSpaci = row.rowVerticalSpacing,
              rowVerticalSpacing = _row$rowVerticalSpaci === void 0 ? verticalSpacing : _row$rowVerticalSpaci,
              _row$rowHorizontalSpa = row.rowHorizontalSpacing,
              rowHorizontalSpacing = _row$rowHorizontalSpa === void 0 ? horizontalSpacing : _row$rowHorizontalSpa,
              _row$keys = row.keys,
              keys = _row$keys === void 0 ? [] : _row$keys;
          return {
            y: keyHeight * rowIndex + rowIndex * rowVerticalSpacing,
            x: x,
            children: keys.map(function (key) {
              key = Object.assign({
                action: 'input'
              }, key);
              var prevOffset = keyOffset;
              var _key = key,
                  _key$w = _key.w,
                  w = _key$w === void 0 ? keyWidth : _key$w,
                  _key$h = _key.h,
                  h = _key$h === void 0 ? keyHeight : _key$h,
                  action = _key.action,
                  toLayout = _key.toLayout;
              keyOffset += w + rowHorizontalSpacing;
              return {
                key: key,
                action: action,
                toLayout: toLayout,
                x: prevOffset,
                w: w,
                h: h,
                type: _this17.keyboardButton
              };
            })
          };
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.colIndex = 0;
        this.rowIndex = 0;
        this._value = '';
        this.previous = null;
      }
    }, {
      key: "_init",
      value: function _init() {
        this.reset();

        this._update();
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return this._navigate('right', 1);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return this._navigate('left', -1);
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this._navigate('up', -1);
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        if (this.rowIndex >= 3) {
          this.signal('onKeyboardExitDown');
        } else {
          return this._navigate('down', 1);
        }
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var key = this.currentKey;

        switch (key.action) {
          case 'input':
            this.value += key.c;
            break;

          case '.com':
          case '@gmail.com':
          case '@hotmail.com':
          case '@yahoo.com':
            this.value += key.c;
            break;

          case 'backspace':
            this.value = this.value.slice(0, -1);
            break;

          case 'space':
            if (this.value.length > 0) {
              this.value += ' ';
            }

            break;

          case 'delete':
            this.value = '';
            break;

          case 'toggleToLayout':
            this.layout = key.toLayout;
            break;

          default:
            this.signal(key.action);
        }

        this.signal('onKeyboardInputUpdate', this.value);
      }
    }, {
      key: "keyboardTemplate",
      get: function get() {
        return template;
      }
    }, {
      key: "keyboardButton",
      get: function get() {
        return KeyboardButton;
      }
    }, {
      key: "maxCharacters",
      get: function get() {
        return 40;
      }
    }, {
      key: "value",
      set: function set(v) {
        if (v.length < this.maxCharacters) {
          this._value = v;
          this.signal('valueChanged', {
            value: v
          });
        }
      },
      get: function get() {
        return this._value;
      }
    }, {
      key: "rows",
      get: function get() {
        return this.children;
      }
    }, {
      key: "rowLength",
      get: function get() {
        return this.rows[this.rowIndex].children.length;
      }
    }, {
      key: "currentKey",
      get: function get() {
        return this.children[this.rowIndex].children[this.colIndex];
      }
    }, {
      key: "layout",
      set: function set(layout) {
        this._layout = layout;

        this._update();
      },
      get: function get() {
        return this._layout;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {};
      }
    }]);

    return Keyboard;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var LoginButton = /*#__PURE__*/function (_lng$Component8) {
    _inherits(LoginButton, _lng$Component8);

    var _super8 = _createSuper(LoginButton);

    function LoginButton() {
      _classCallCheck(this, LoginButton);

      return _super8.apply(this, arguments);
    }

    _createClass(LoginButton, [{
      key: "_focus",
      value: function _focus() {
        this.patch({
          color: 0xFF377FAC
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          color: 0xFF0E2B3D
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 1025,
          h: 70,
          rect: true,
          color: 0xFF0E2B3D,
          Label: {
            x: 512,
            y: 35,
            mountX: 0.5,
            mountY: 0.4,
            color: 0xFFF1F1F1,
            text: {
              text: 'LOGIN',
              fontSize: 32
            }
          }
        };
      }
    }]);

    return LoginButton;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var WifiLogin = /*#__PURE__*/function (_lng$Component9) {
    _inherits(WifiLogin, _lng$Component9);

    var _super9 = _createSuper(WifiLogin);

    function WifiLogin() {
      _classCallCheck(this, WifiLogin);

      return _super9.apply(this, arguments);
    }

    _createClass(WifiLogin, [{
      key: "_init",
      value: function _init() {
        this.passwordLabel = '';

        this._setState('LoginKeyboard');

        this.showAnimation = this.animation({
          duration: 0.4,
          delay: 0,
          stopMethod: 'immediate',
          actions: [{
            p: 'w',
            v: {
              0: 0,
              1: 1100
            }
          }, {
            p: 'h',
            v: {
              0: 0,
              1: 640
            }
          }, {
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }]
        });
        this.hideAnimation = this.animation({
          duration: 0.4,
          delay: 0,
          stopMethod: 'immediate',
          actions: [{
            p: 'w',
            v: {
              0: 1100,
              1: 0
            }
          }, {
            p: 'h',
            v: {
              0: 640,
              1: 0
            }
          }, {
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }]
        });
      }
    }, {
      key: "showLogin",
      value: function showLogin() {
        var _this18 = this;

        if (this.wifiName) this.tag('InputLabel').text.text = "WIFI Login:  ".concat(this.wifiName);
        this.tag('LoginKeyboard').value = '';
        this.passwordLabel = '';
        this.hideAnimation.stop();
        this.showAnimation.start();
        this.showAnimation.on('finish', function () {
          _this18._setState('LoginKeyboard');
        });
      }
    }, {
      key: "hideLogin",
      value: function hideLogin() {
        this.tag('InputLabel').text.text = "WIFI Login:";
        this.showAnimation.stop();
        this.hideAnimation.start();
      }
    }, {
      key: "passwordLabel",
      set: function set(v) {
        this.tag('PasswordText').text.text = v && v.length ? ' • '.repeat(v.length) : 'Please enter your password...';
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 0,
          h: 0,
          mount: 0.5,
          alpha: 0.0001,
          rect: true,
          color: 0xFF193643,
          clipping: true,
          InputLabel: {
            x: 40,
            y: 30,
            color: 0xFFF1F1F1,
            text: {
              text: 'WIFI Login:',
              fontSize: 32
            }
          },
          Input: {
            w: 1025,
            h: 60,
            x: 40,
            y: 90,
            rect: true,
            color: 0xFF3A6269,
            PasswordText: {
              x: 20,
              mountY: 0.4,
              y: 30,
              color: 0xFFF1F1F1,
              text: {
                text: '',
                fontSize: 32
              }
            }
          },
          LoginKeyboard: {
            x: 40,
            y: 170,
            type: Keyboard,
            layout: 'abc',
            signals: {
              onKeyboardExitDown: true,
              onKeyboardInputUpdate: true
            }
          },
          LoginButton: {
            x: 40,
            y: 540,
            type: LoginButton
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this19) {
          _inherits(LoginKeyboard, _this19);

          var _super10 = _createSuper(LoginKeyboard);

          function LoginKeyboard() {
            _classCallCheck(this, LoginKeyboard);

            return _super10.apply(this, arguments);
          }

          _createClass(LoginKeyboard, [{
            key: "$enter",
            value: function $enter() {
              console.log('$enter Keyboard :');
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log('$exit Keyboard :');
            }
          }, {
            key: "onKeyboardExitDown",
            value: function onKeyboardExitDown() {
              this._setState('LoginButton');
            }
          }, {
            key: "onKeyboardInputUpdate",
            value: function onKeyboardInputUpdate(v) {
              this.passwordLabel = v;
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('LoginKeyboard');
            }
          }]);

          return LoginKeyboard;
        }(this), /*#__PURE__*/function (_this20) {
          _inherits(LoginButton$$1, _this20);

          var _super11 = _createSuper(LoginButton$$1);

          function LoginButton$$1() {
            _classCallCheck(this, LoginButton$$1);

            return _super11.apply(this, arguments);
          }

          _createClass(LoginButton$$1, [{
            key: "_handleEnter",
            value: function _handleEnter() {
              this.fireAncestors('$onLogin', {
                name: this.wifiName,
                password: this.tag('LoginKeyboard').value
              });
              this.fire('$exit');
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('LoginKeyboard');
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('LoginButton');
            }
          }]);

          return LoginButton$$1;
        }(this)];
      }
    }]);

    return WifiLogin;
  }(lng.Component);
  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


  var App = /*#__PURE__*/function (_ux$App) {
    _inherits(App, _ux$App);

    var _super12 = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super12.apply(this, arguments);
    }

    _createClass(App, [{
      key: "_init",
      value: function _init() {
        var _this21 = this;

        //this._wpe = new WPE('192.168.11.101', 80, this);
        this._wpe = new WPE('127.0.0.1', 80, this);
        this._globalAnimation = this.animation({
          duration: 7,
          repeat: 0,
          delay: 2,
          stopMethod: 'immediate',
          actions: [{
            t: 'Wrapper',
            p: 'x',
            v: {
              0.08: 840,
              0.3: 0
            }
          }, {
            t: 'Wrapper',
            p: 'y',
            v: {
              0.08: -1660,
              0.3: 0
            }
          }, {
            t: 'Wrapper',
            p: 'scale',
            v: {
              0.08: 6.4,
              0.3: 1
            }
          }, {
            t: 'RDKLogo',
            p: 'scale',
            v: {
              0.08: 0.12,
              0.2: 0.16
            }
          }, {
            t: 'Shade',
            p: 'scale',
            v: {
              0.16: {
                v: 0.4,
                s: 0.3
              },
              0.55: {
                v: 1,
                se: 1,
                sme: 1,
                sm: 1
              }
            }
          }, {
            t: 'Icons',
            p: 'y',
            v: {
              0.15: 540,
              0.80: {
                v: 470,
                se: 0.5,
                sme: 1,
                sm: 1
              }
            }
          }, {
            t: 'Clouds',
            p: 'x',
            v: {
              0.25: 525,
              1: 395
            }
          }]
        });
        setTimeout(function () {
          _this21.tag('Overlay').visible = false;

          _this21.startAnimation();
        }, 2000);
        setTimeout(function () {
          _this21._wpe.init();
        }, 2500);
        setTimeout(function () {
          if (_this21.tag('Message').message === undefined) _this21.tag('Message').message = 'Please wait...';
        }, 7000);
      }
    }, {
      key: "startAnimation",
      value: function startAnimation() {
        this.tag('RDKLogo').start();
        this.tag('Icons').start();

        this._globalAnimation.start();
      }
    }, {
      key: "stopAnimation",
      value: function stopAnimation() {
        this.tag('RDKLogo').stop();
        this.tag('Icons').stop();

        this._globalAnimation.stop();
      }
    }, {
      key: "goToUrl",
      value: function goToUrl(url) {
        window.location.href = url;
      }
    }, {
      key: "$onLogin",
      value: function $onLogin(_ref) {
        var _ref$name = _ref.name,
            name = _ref$name === void 0 ? '' : _ref$name,
            _ref$password = _ref.password,
            password = _ref$password === void 0 ? '' : _ref$password;
        console.log('$onLogin :', name, password);

        this._wpe.connectWifi(name, password);
      }
    }, {
      key: "ipAddress",
      set: function set(v) {
        this._ipAddress = v;
      },
      get: function get() {
        return this._ipAddress;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {
            w: 1920,
            h: 1080,
            rect: true,
            colorTop: 0xFF183644,
            colorBottom: 0xFF3C646D
          },
          Wrapper: {
            x: 800,
            y: -1660,
            w: 1920,
            h: 1080,
            scale: 6.4,
            Clouds: {
              x: 545,
              y: 165,
              w: 1064,
              h: 556,
              src: App.getPath('images/assets/clouds.png')
            },
            Shade: {
              x: 990,
              y: 965,
              w: 876,
              h: 858,
              scale: 0.7,
              mountY: 1,
              mountX: 0.5,
              src: App.getPath('images/assets/shade.png')
            },
            House: {
              x: 525,
              y: 445,
              w: 930,
              h: 555,
              src: App.getPath('images/assets/house.png')
            },
            Icons: {
              x: 540,
              y: 510,
              type: Icons
            },
            RDKLogo: {
              x: 820,
              y: 800,
              type: RDKLogo,
              mount: 0.5,
              scale: 0.18
            }
          },
          Message: {
            x: 80,
            y: 60,
            type: Message
          },
          MessageAdditional: {
            x: 80,
            y: 90,
            type: Message
          },
          IpAddress: {
            x: 1600,
            y: 60,
            type: Message
          },
          WifiList: {
            x: 100,
            y: 100,
            type: WifiList,
            visible: false
          },
          WifiLoginScreen: {
            x: 960,
            y: 540,
            mount: 0.5,
            type: WifiLogin
          },
          Overlay: {
            w: 1920,
            h: 1080,
            rect: true,
            color: 0xFF000000
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this22) {
          _inherits(HasLocalNetwork, _this22);

          var _super13 = _createSuper(HasLocalNetwork);

          function HasLocalNetwork() {
            _classCallCheck(this, HasLocalNetwork);

            return _super13.apply(this, arguments);
          }

          _createClass(HasLocalNetwork, [{
            key: "$enter",
            value: function $enter(state, _ref2) {
              var data = _ref2.data;
              this.tag('Message').message = "Connected!";
              this.tag('IpAddress').message = "IP: ".concat(data);
            }
          }]);

          return HasLocalNetwork;
        }(this), /*#__PURE__*/function (_this23) {
          _inherits(ConnectingToNetwork, _this23);

          var _super14 = _createSuper(ConnectingToNetwork);

          function ConnectingToNetwork() {
            _classCallCheck(this, ConnectingToNetwork);

            return _super14.apply(this, arguments);
          }

          _createClass(ConnectingToNetwork, [{
            key: "$enter",
            value: function $enter(state, _ref3) {
              var data = _ref3.data;
              this.tag('Message').message = "Connecting to: ".concat(data);
            }
          }]);

          return ConnectingToNetwork;
        }(this), /*#__PURE__*/function (_this24) {
          _inherits(ScanningForNetworks, _this24);

          var _super15 = _createSuper(ScanningForNetworks);

          function ScanningForNetworks() {
            _classCallCheck(this, ScanningForNetworks);

            return _super15.apply(this, arguments);
          }

          _createClass(ScanningForNetworks, [{
            key: "$enter",
            value: function $enter(state) {
              this.tag('Message').message = 'Scanning for networks...';
              this.tag('MessageAdditional').message = '';
            }
          }]);

          return ScanningForNetworks;
        }(this), /*#__PURE__*/function (_this25) {
          _inherits(ThunderError, _this25);

          var _super16 = _createSuper(ThunderError);

          function ThunderError() {
            _classCallCheck(this, ThunderError);

            return _super16.apply(this, arguments);
          }

          _createClass(ThunderError, [{
            key: "$enter",
            value: function $enter(state) {
              this.tag('Message').message = 'Error connecting to Thunder';
              this.tag('MessageAdditional').message = '';
            }
          }]);

          return ThunderError;
        }(this), /*#__PURE__*/function (_this26) {
          _inherits(WifiConnectError, _this26);

          var _super17 = _createSuper(WifiConnectError);

          function WifiConnectError() {
            _classCallCheck(this, WifiConnectError);

            return _super17.apply(this, arguments);
          }

          _createClass(WifiConnectError, [{
            key: "$enter",
            value: function $enter(state) {
              this.tag('Message').message = 'Error connecting to WiFi';
              this.tag('MessageAdditional').message = '';
            }
          }]);

          return WifiConnectError;
        }(this), /*#__PURE__*/function (_this27) {
          _inherits(Ready, _this27);

          var _super18 = _createSuper(Ready);

          function Ready() {
            _classCallCheck(this, Ready);

            return _super18.apply(this, arguments);
          }

          _createClass(Ready, [{
            key: "$enter",
            value: function $enter(state) {
              this.tag('Message').message = "We're ready!";
              this.tag('MessageAdditional').message = 'Press OK to cancel UX';
            }
          }]);

          return Ready;
        }(this), /*#__PURE__*/function (_this28) {
          _inherits(LaunchingUX, _this28);

          var _super19 = _createSuper(LaunchingUX);

          function LaunchingUX() {
            _classCallCheck(this, LaunchingUX);

            return _super19.apply(this, arguments);
          }

          _createClass(LaunchingUX, [{
            key: "$enter",
            value: function $enter(state) {
              this.tag('MessageAdditional').message = 'Launching UX...';
            }
          }]);

          return LaunchingUX;
        }(this), /*#__PURE__*/function (_this29) {
          _inherits(UserCancelled, _this29);

          var _super20 = _createSuper(UserCancelled);

          function UserCancelled() {
            _classCallCheck(this, UserCancelled);

            return _super20.apply(this, arguments);
          }

          _createClass(UserCancelled, [{
            key: "$enter",
            value: function $enter(state) {
              var _this30 = this;

              this.tag('MessageAdditional').message = 'Cancelled UX';
              setTimeout(function () {
                _this30.tag('MessageAdditional').message = '';
              }, 3000);
            }
          }]);

          return UserCancelled;
        }(this), /*#__PURE__*/function (_this31) {
          _inherits(GoToURL, _this31);

          var _super21 = _createSuper(GoToURL);

          function GoToURL() {
            _classCallCheck(this, GoToURL);

            return _super21.apply(this, arguments);
          }

          _createClass(GoToURL, [{
            key: "$enter",
            value: function $enter(state, _ref4) {
              var _this32 = this;

              var data = _ref4.data;

              if (this._globalAnimation.state === 4) {
                this.goToUrl(data.url);
              } else {
                this._globalAnimation.on('finish', function () {
                  _this32.goToUrl(data.url);
                });
              }
            }
          }]);

          return GoToURL;
        }(this), /*#__PURE__*/function (_this33) {
          _inherits(NoConnection, _this33);

          var _super22 = _createSuper(NoConnection);

          function NoConnection() {
            _classCallCheck(this, NoConnection);

            return _super22.apply(this, arguments);
          }

          _createClass(NoConnection, [{
            key: "$enter",
            value: function $enter() {
              this.tag('Message').message = 'No valid internet connection';
              this.tag('MessageAdditional').message = '';
            }
          }]);

          return NoConnection;
        }(this), /*#__PURE__*/function (_this34) {
          _inherits(WifiLocations, _this34);

          var _super23 = _createSuper(WifiLocations);

          function WifiLocations() {
            _classCallCheck(this, WifiLocations);

            return _super23.apply(this, arguments);
          }

          _createClass(WifiLocations, [{
            key: "$enter",
            value: function $enter(state, _ref5) {
              var data = _ref5.data;
              this.tag('WifiList').items = data;
              this.tag('WifiList').visible = true;

              this._setState('WifiLocations.LoadLocations');

              this.tag('MessageAdditional').message = '';
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag('WifiList').visible = false;
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this35) {
                _inherits(LoadLocations, _this35);

                var _super24 = _createSuper(LoadLocations);

                function LoadLocations() {
                  _classCallCheck(this, LoadLocations);

                  return _super24.apply(this, arguments);
                }

                _createClass(LoadLocations, [{
                  key: "$enter",
                  value: function $enter() {
                    this._setState('WifiLocations.Ready');
                  }
                }]);

                return LoadLocations;
              }(this), /*#__PURE__*/function (_this36) {
                _inherits(Ready, _this36);

                var _super25 = _createSuper(Ready);

                function Ready() {
                  _classCallCheck(this, Ready);

                  return _super25.apply(this, arguments);
                }

                _createClass(Ready, [{
                  key: "$enter",
                  value: function $enter() {}
                }, {
                  key: "$onWifiItemSelect",
                  value: function $onWifiItemSelect(_ref6) {
                    var item = _ref6.item;
                    console.log('$onWifiItemSelect :', item);
                    this.selectedWifiName = item.name;

                    this._setState('WifiLocations.WifiLoginScreen');
                  }
                }, {
                  key: "_getFocused",
                  value: function _getFocused() {
                    return this.tag('WifiList');
                  }
                }]);

                return Ready;
              }(this), /*#__PURE__*/function (_this37) {
                _inherits(WifiLoginScreen, _this37);

                var _super26 = _createSuper(WifiLoginScreen);

                function WifiLoginScreen() {
                  _classCallCheck(this, WifiLoginScreen);

                  return _super26.apply(this, arguments);
                }

                _createClass(WifiLoginScreen, [{
                  key: "$enter",
                  value: function $enter() {
                    // Show Keyboard
                    this.tag('WifiLoginScreen').wifiName = this.selectedWifiName;
                    this.tag('WifiLoginScreen').showLogin();
                  }
                }, {
                  key: "$exit",
                  value: function $exit() {
                    // Hide Keyboard
                    console.log('$exit :');
                    this.tag('WifiLoginScreen').hideLogin();
                  }
                }, {
                  key: "_handleBack",
                  value: function _handleBack() {
                    this._setState('WifiLocations.Ready');
                  }
                }, {
                  key: "_getFocused",
                  value: function _getFocused() {
                    return this.tag('WifiLoginScreen');
                  }
                }]);

                return WifiLoginScreen;
              }(this)];
            }
          }]);

          return WifiLocations;
        }(this)];
      }
    }]);

    return App;
  }(ux.App);

  return App;
}();
