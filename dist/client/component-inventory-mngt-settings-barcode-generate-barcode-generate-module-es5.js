function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-settings-barcode-generate-barcode-generate-module"], {
  /***/
  "./node_modules/jsbarcode/bin/JsBarcode.js":
  /*!*************************************************!*\
    !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinJsBarcodeJs(module, exports, __webpack_require__) {
    "use strict";

    var _barcodes = __webpack_require__(
    /*! ./barcodes/ */
    "./node_modules/jsbarcode/bin/barcodes/index.js");

    var _barcodes2 = _interopRequireDefault(_barcodes);

    var _merge = __webpack_require__(
    /*! ./help/merge.js */
    "./node_modules/jsbarcode/bin/help/merge.js");

    var _merge2 = _interopRequireDefault(_merge);

    var _linearizeEncodings = __webpack_require__(
    /*! ./help/linearizeEncodings.js */
    "./node_modules/jsbarcode/bin/help/linearizeEncodings.js");

    var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

    var _fixOptions = __webpack_require__(
    /*! ./help/fixOptions.js */
    "./node_modules/jsbarcode/bin/help/fixOptions.js");

    var _fixOptions2 = _interopRequireDefault(_fixOptions);

    var _getRenderProperties = __webpack_require__(
    /*! ./help/getRenderProperties.js */
    "./node_modules/jsbarcode/bin/help/getRenderProperties.js");

    var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

    var _optionsFromStrings = __webpack_require__(
    /*! ./help/optionsFromStrings.js */
    "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

    var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

    var _ErrorHandler = __webpack_require__(
    /*! ./exceptions/ErrorHandler.js */
    "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

    var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

    var _exceptions = __webpack_require__(
    /*! ./exceptions/exceptions.js */
    "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

    var _defaults = __webpack_require__(
    /*! ./options/defaults.js */
    "./node_modules/jsbarcode/bin/options/defaults.js");

    var _defaults2 = _interopRequireDefault(_defaults);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    } // The protype of the object returned from the JsBarcode() call
    // Help functions


    var API = function API() {}; // The first call of the library API
    // Will return an object with all barcodes calls and the data that is used
    // by the renderers
    // Default values
    // Exceptions
    // Import all the barcodes


    var JsBarcode = function JsBarcode(element, text, options) {
      var api = new API();

      if (typeof element === "undefined") {
        throw Error("No element to render on was provided.");
      } // Variables that will be pased through the API calls


      api._renderProperties = (0, _getRenderProperties2.default)(element);
      api._encodings = [];
      api._options = _defaults2.default;
      api._errorHandler = new _ErrorHandler2.default(api); // If text is set, use the simple syntax (render the barcode directly)

      if (typeof text !== "undefined") {
        options = options || {};

        if (!options.format) {
          options.format = autoSelectBarcode();
        }

        api.options(options)[options.format](text, options).render();
      }

      return api;
    }; // To make tests work TODO: remove


    JsBarcode.getModule = function (name) {
      return _barcodes2.default[name];
    }; // Register all barcodes


    for (var name in _barcodes2.default) {
      if (_barcodes2.default.hasOwnProperty(name)) {
        // Security check if the propery is a prototype property
        registerBarcode(_barcodes2.default, name);
      }
    }

    function registerBarcode(barcodes, name) {
      API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
        var api = this;
        return api._errorHandler.wrapBarcodeCall(function () {
          // Ensure text is options.text
          options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;
          var newOptions = (0, _merge2.default)(api._options, options);
          newOptions = (0, _optionsFromStrings2.default)(newOptions);
          var Encoder = barcodes[name];
          var encoded = encode(text, Encoder, newOptions);

          api._encodings.push(encoded);

          return api;
        });
      };
    } // encode() handles the Encoder call and builds the binary string to be rendered


    function encode(text, Encoder, options) {
      // Ensure that text is a string
      text = "" + text;
      var encoder = new Encoder(text, options); // If the input is not valid for the encoder, throw error.
      // If the valid callback option is set, call it instead of throwing error

      if (!encoder.valid()) {
        throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
      } // Make a request for the binary data (and other infromation) that should be rendered


      var encoded = encoder.encode(); // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
      // Convert to [1-1, 1-2, 2, 3-1, 3-2]

      encoded = (0, _linearizeEncodings2.default)(encoded); // Merge

      for (var i = 0; i < encoded.length; i++) {
        encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
      }

      return encoded;
    }

    function autoSelectBarcode() {
      // If CODE128 exists. Use it
      if (_barcodes2.default["CODE128"]) {
        return "CODE128";
      } // Else, take the first (probably only) barcode


      return Object.keys(_barcodes2.default)[0];
    } // Sets global encoder options
    // Added to the api by the JsBarcode function


    API.prototype.options = function (options) {
      this._options = (0, _merge2.default)(this._options, options);
      return this;
    }; // Will create a blank space (usually in between barcodes)


    API.prototype.blank = function (size) {
      var zeroes = new Array(size + 1).join("0");

      this._encodings.push({
        data: zeroes
      });

      return this;
    }; // Initialize JsBarcode on all HTML elements defined.


    API.prototype.init = function () {
      // Should do nothing if no elements where found
      if (!this._renderProperties) {
        return;
      } // Make sure renderProperies is an array


      if (!Array.isArray(this._renderProperties)) {
        this._renderProperties = [this._renderProperties];
      }

      var renderProperty;

      for (var i in this._renderProperties) {
        renderProperty = this._renderProperties[i];
        var options = (0, _merge2.default)(this._options, renderProperty.options);

        if (options.format == "auto") {
          options.format = autoSelectBarcode();
        }

        this._errorHandler.wrapBarcodeCall(function () {
          var text = options.value;

          var Encoder = _barcodes2.default[options.format.toUpperCase()];

          var encoded = encode(text, Encoder, options);
          render(renderProperty, encoded, options);
        });
      }
    }; // The render API call. Calls the real render function.


    API.prototype.render = function () {
      if (!this._renderProperties) {
        throw new _exceptions.NoElementException();
      }

      if (Array.isArray(this._renderProperties)) {
        for (var i = 0; i < this._renderProperties.length; i++) {
          render(this._renderProperties[i], this._encodings, this._options);
        }
      } else {
        render(this._renderProperties, this._encodings, this._options);
      }

      return this;
    };

    API.prototype._defaults = _defaults2.default; // Prepares the encodings and calls the renderer

    function render(renderProperties, encodings, options) {
      encodings = (0, _linearizeEncodings2.default)(encodings);

      for (var i = 0; i < encodings.length; i++) {
        encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
        (0, _fixOptions2.default)(encodings[i].options);
      }

      (0, _fixOptions2.default)(options);
      var Renderer = renderProperties.renderer;
      var renderer = new Renderer(renderProperties.element, encodings, options);
      renderer.render();

      if (renderProperties.afterRender) {
        renderProperties.afterRender();
      }
    } // Export to browser


    if (typeof window !== "undefined") {
      window.JsBarcode = JsBarcode;
    } // Export to jQuery

    /*global jQuery */


    if (typeof jQuery !== 'undefined') {
      jQuery.fn.JsBarcode = function (content, options) {
        var elementArray = [];
        jQuery(this).each(function () {
          elementArray.push(this);
        });
        return JsBarcode(elementArray, content, options);
      };
    } // Export to commonJS


    module.exports = JsBarcode;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/Barcode.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesBarcodeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Barcode = function Barcode(data, options) {
      _classCallCheck(this, Barcode);

      this.data = data;
      this.text = options.text || data;
      this.options = options;
    };

    exports.default = Barcode;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js":
  /*!****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128CODE128Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // This is the master class,
    // it does require the start code to be included in the string


    var CODE128 = function (_Barcode) {
      _inherits(CODE128, _Barcode);

      function CODE128(data, options) {
        _classCallCheck(this, CODE128); // Get array of ascii codes from data


        var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

        _this.bytes = data.split('').map(function (char) {
          return char.charCodeAt(0);
        });
        return _this;
      }

      _createClass(CODE128, [{
        key: 'valid',
        value: function valid() {
          // ASCII value ranges 0-127, 200-211
          return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
        } // The public encoding function

      }, {
        key: 'encode',
        value: function encode() {
          var bytes = this.bytes; // Remove the start code from the bytes and set its index

          var startIndex = bytes.shift() - 105; // Get start set by index

          var startSet = _constants.SET_BY_CODE[startIndex];

          if (startSet === undefined) {
            throw new RangeError('The encoding does not start with a start character.');
          }

          if (this.shouldEncodeAsEan128() === true) {
            bytes.unshift(_constants.FNC1);
          } // Start encode with the right type


          var encodingResult = CODE128.next(bytes, 1, startSet);
          return {
            text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
            data: // Add the start bits
            CODE128.getBar(startIndex) + // Add the encoded bits
            encodingResult.result + // Add the checksum
            CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + // Add the end bits
            CODE128.getBar(_constants.STOP)
          };
        } // GS1-128/EAN-128

      }, {
        key: 'shouldEncodeAsEan128',
        value: function shouldEncodeAsEan128() {
          var isEAN128 = this.options.ean128 || false;

          if (typeof isEAN128 === 'string') {
            isEAN128 = isEAN128.toLowerCase() === 'true';
          }

          return isEAN128;
        } // Get a bar symbol by index

      }], [{
        key: 'getBar',
        value: function getBar(index) {
          return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
        } // Correct an index by a set and shift it from the bytes array

      }, {
        key: 'correctIndex',
        value: function correctIndex(bytes, set) {
          if (set === _constants.SET_A) {
            var charCode = bytes.shift();
            return charCode < 32 ? charCode + 64 : charCode - 32;
          } else if (set === _constants.SET_B) {
            return bytes.shift() - 32;
          } else {
            return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
          }
        }
      }, {
        key: 'next',
        value: function next(bytes, pos, set) {
          if (!bytes.length) {
            return {
              result: '',
              checksum: 0
            };
          }

          var nextCode = void 0,
              index = void 0; // Special characters

          if (bytes[0] >= 200) {
            index = bytes.shift() - 105;
            var nextSet = _constants.SWAP[index]; // Swap to other set

            if (nextSet !== undefined) {
              nextCode = CODE128.next(bytes, pos + 1, nextSet);
            } // Continue on current set but encode a special character
            else {
                // Shift
                if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
                  // Convert the next character so that is encoded correctly
                  bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
                }

                nextCode = CODE128.next(bytes, pos + 1, set);
              }
          } // Continue encoding
          else {
              index = CODE128.correctIndex(bytes, set);
              nextCode = CODE128.next(bytes, pos + 1, set);
            } // Get the correct binary encoding and calculate the weight


          var enc = CODE128.getBar(index);
          var weight = index * pos;
          return {
            result: enc + nextCode.result,
            checksum: weight + nextCode.checksum
          };
        }
      }]);

      return CODE128;
    }(_Barcode3.default);

    exports.default = CODE128;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128CODE128AJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _CODE2 = __webpack_require__(
    /*! ./CODE128.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

    var _CODE3 = _interopRequireDefault(_CODE2);

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var CODE128A = function (_CODE) {
      _inherits(CODE128A, _CODE);

      function CODE128A(string, options) {
        _classCallCheck(this, CODE128A);

        return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
      }

      _createClass(CODE128A, [{
        key: 'valid',
        value: function valid() {
          return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
        }
      }]);

      return CODE128A;
    }(_CODE3.default);

    exports.default = CODE128A;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128CODE128BJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _CODE2 = __webpack_require__(
    /*! ./CODE128.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

    var _CODE3 = _interopRequireDefault(_CODE2);

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var CODE128B = function (_CODE) {
      _inherits(CODE128B, _CODE);

      function CODE128B(string, options) {
        _classCallCheck(this, CODE128B);

        return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
      }

      _createClass(CODE128B, [{
        key: 'valid',
        value: function valid() {
          return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
        }
      }]);

      return CODE128B;
    }(_CODE3.default);

    exports.default = CODE128B;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128CODE128CJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _CODE2 = __webpack_require__(
    /*! ./CODE128.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

    var _CODE3 = _interopRequireDefault(_CODE2);

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var CODE128C = function (_CODE) {
      _inherits(CODE128C, _CODE);

      function CODE128C(string, options) {
        _classCallCheck(this, CODE128C);

        return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
      }

      _createClass(CODE128C, [{
        key: 'valid',
        value: function valid() {
          return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
        }
      }]);

      return CODE128C;
    }(_CODE3.default);

    exports.default = CODE128C;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128CODE128_AUTOJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _CODE2 = __webpack_require__(
    /*! ./CODE128 */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

    var _CODE3 = _interopRequireDefault(_CODE2);

    var _auto = __webpack_require__(
    /*! ./auto */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

    var _auto2 = _interopRequireDefault(_auto);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var CODE128AUTO = function (_CODE) {
      _inherits(CODE128AUTO, _CODE);

      function CODE128AUTO(data, options) {
        _classCallCheck(this, CODE128AUTO); // ASCII value ranges 0-127, 200-211


        if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
          var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
        } else {
          var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
        }

        return _possibleConstructorReturn(_this);
      }

      return CODE128AUTO;
    }(_CODE3.default);

    exports.default = CODE128AUTO;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128AutoJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js"); // Match Set functions


    var matchSetALength = function matchSetALength(string) {
      return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
    };

    var matchSetBLength = function matchSetBLength(string) {
      return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
    };

    var matchSetC = function matchSetC(string) {
      return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
    }; // CODE128A or CODE128B


    function autoSelectFromAB(string, isA) {
      var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
      var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

      if (untilC) {
        return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
      }

      var chars = string.match(new RegExp('^' + ranges + '+'))[0];

      if (chars.length === string.length) {
        return string;
      }

      return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
    } // CODE128C


    function autoSelectFromC(string) {
      var cMatch = matchSetC(string);
      var length = cMatch.length;

      if (length === string.length) {
        return string;
      }

      string = string.substring(length); // Select A/B depending on the longest match

      var isA = matchSetALength(string) >= matchSetBLength(string);
      return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
    } // Detect Code Set (A, B or C) and format the string


    exports.default = function (string) {
      var newString = void 0;
      var cLength = matchSetC(string).length; // Select 128C if the string start with enough digits

      if (cLength >= 2) {
        newString = _constants.C_START_CHAR + autoSelectFromC(string);
      } else {
        // Select A/B depending on the longest match
        var isA = matchSetALength(string) > matchSetBLength(string);
        newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
      }

      return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
      function (match, char) {
        return String.fromCharCode(203) + char;
      });
    };
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js":
  /*!******************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128ConstantsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _SET_BY_CODE;

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    } // constants for internal usage


    var SET_A = exports.SET_A = 0;
    var SET_B = exports.SET_B = 1;
    var SET_C = exports.SET_C = 2; // Special characters

    var SHIFT = exports.SHIFT = 98;
    var START_A = exports.START_A = 103;
    var START_B = exports.START_B = 104;
    var START_C = exports.START_C = 105;
    var MODULO = exports.MODULO = 103;
    var STOP = exports.STOP = 106;
    var FNC1 = exports.FNC1 = 207; // Get set by start code

    var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE); // Get next set by code

    var SWAP = exports.SWAP = {
      101: SET_A,
      100: SET_B,
      99: SET_C
    };
    var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105

    var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105

    var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105
    // 128A (Code Set A)
    // ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4

    var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]"; // 128B (Code Set B)
    // ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4

    var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]"; // 128C (Code Set C)
    // 00–99 (encodes two digits with a single code point) and FNC1

    var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)"; // CODE128 includes 107 symbols:
    // 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
    // Each symbol consist of three black bars (1) and three white spaces (0).

    var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE128IndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

    var _CODE128_AUTO = __webpack_require__(
    /*! ./CODE128_AUTO.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

    var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

    var _CODE128A = __webpack_require__(
    /*! ./CODE128A.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

    var _CODE128A2 = _interopRequireDefault(_CODE128A);

    var _CODE128B = __webpack_require__(
    /*! ./CODE128B.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

    var _CODE128B2 = _interopRequireDefault(_CODE128B);

    var _CODE128C = __webpack_require__(
    /*! ./CODE128C.js */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

    var _CODE128C2 = _interopRequireDefault(_CODE128C);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.CODE128 = _CODE128_AUTO2.default;
    exports.CODE128A = _CODE128A2.default;
    exports.CODE128B = _CODE128B2.default;
    exports.CODE128C = _CODE128C2.default;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCODE39IndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CODE39 = undefined;

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/Code_39#Encoding


    var CODE39 = function (_Barcode) {
      _inherits(CODE39, _Barcode);

      function CODE39(data, options) {
        _classCallCheck(this, CODE39);

        data = data.toUpperCase(); // Calculate mod43 checksum if enabled

        if (options.mod43) {
          data += getCharacter(mod43checksum(data));
        }

        return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
      }

      _createClass(CODE39, [{
        key: "encode",
        value: function encode() {
          // First character is always a *
          var result = getEncoding("*"); // Take every character and add the binary representation to the result

          for (var i = 0; i < this.data.length; i++) {
            result += getEncoding(this.data[i]) + "0";
          } // Last character is always a *


          result += getEncoding("*");
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
        }
      }]);

      return CODE39;
    }(_Barcode3.default); // All characters. The position in the array is the (checksum) value


    var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"]; // The decimal representation of the characters, is converted to the
    // corresponding binary with the getEncoding function

    var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]; // Get the binary representation of a character by converting the encodings
    // from decimal to binary

    function getEncoding(character) {
      return getBinary(characterValue(character));
    }

    function getBinary(characterValue) {
      return encodings[characterValue].toString(2);
    }

    function getCharacter(characterValue) {
      return characters[characterValue];
    }

    function characterValue(character) {
      return characters.indexOf(character);
    }

    function mod43checksum(data) {
      var checksum = 0;

      for (var i = 0; i < data.length; i++) {
        checksum += characterValue(data[i]);
      }

      checksum = checksum % 43;
      return checksum;
    }

    exports.CODE39 = CODE39;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js":
  /*!************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEANJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

    var _encoder = __webpack_require__(
    /*! ./encoder */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

    var _encoder2 = _interopRequireDefault(_encoder);

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Base class for EAN8 & EAN13


    var EAN = function (_Barcode) {
      _inherits(EAN, _Barcode);

      function EAN(data, options) {
        _classCallCheck(this, EAN); // Make sure the font is not bigger than the space between the guard bars


        var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

        _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize; // Make the guard bars go down half the way of the text

        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }

      _createClass(EAN, [{
        key: 'encode',
        value: function encode() {
          return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
        }
      }, {
        key: 'leftText',
        value: function leftText(from, to) {
          return this.text.substr(from, to);
        }
      }, {
        key: 'leftEncode',
        value: function leftEncode(data, structure) {
          return (0, _encoder2.default)(data, structure);
        }
      }, {
        key: 'rightText',
        value: function rightText(from, to) {
          return this.text.substr(from, to);
        }
      }, {
        key: 'rightEncode',
        value: function rightEncode(data, structure) {
          return (0, _encoder2.default)(data, structure);
        }
      }, {
        key: 'encodeGuarded',
        value: function encodeGuarded() {
          var textOptions = {
            fontSize: this.fontSize
          };
          var guardOptions = {
            height: this.guardHeight
          };
          return [{
            data: _constants.SIDE_BIN,
            options: guardOptions
          }, {
            data: this.leftEncode(),
            text: this.leftText(),
            options: textOptions
          }, {
            data: _constants.MIDDLE_BIN,
            options: guardOptions
          }, {
            data: this.rightEncode(),
            text: this.rightText(),
            options: textOptions
          }, {
            data: _constants.SIDE_BIN,
            options: guardOptions
          }];
        }
      }, {
        key: 'encodeFlat',
        value: function encodeFlat() {
          var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
          return {
            data: data.join(''),
            text: this.text
          };
        }
      }]);

      return EAN;
    }(_Barcode3.default);

    exports.default = EAN;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEAN13Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

    var _EAN2 = __webpack_require__(
    /*! ./EAN */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

    var _EAN3 = _interopRequireDefault(_EAN2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode
    // Calculate the checksum digit
    // https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


    var checksum = function checksum(number) {
      var res = number.substr(0, 12).split('').map(function (n) {
        return +n;
      }).reduce(function (sum, a, idx) {
        return idx % 2 ? sum + a * 3 : sum + a;
      }, 0);
      return (10 - res % 10) % 10;
    };

    var EAN13 = function (_EAN) {
      _inherits(EAN13, _EAN);

      function EAN13(data, options) {
        _classCallCheck(this, EAN13); // Add checksum if it does not exist


        if (data.search(/^[0-9]{12}$/) !== -1) {
          data += checksum(data);
        } // Adds a last character to the end of the barcode


        var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

        _this.lastChar = options.lastChar;
        return _this;
      }

      _createClass(EAN13, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
        }
      }, {
        key: 'leftText',
        value: function leftText() {
          return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
        }
      }, {
        key: 'leftEncode',
        value: function leftEncode() {
          var data = this.data.substr(1, 6);
          var structure = _constants.EAN13_STRUCTURE[this.data[0]];
          return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
        }
      }, {
        key: 'rightText',
        value: function rightText() {
          return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
        }
      }, {
        key: 'rightEncode',
        value: function rightEncode() {
          var data = this.data.substr(7, 6);
          return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
        } // The "standard" way of printing EAN13 barcodes with guard bars

      }, {
        key: 'encodeGuarded',
        value: function encodeGuarded() {
          var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this); // Extend data with left digit & last character


          if (this.options.displayValue) {
            data.unshift({
              data: '000000000000',
              text: this.text.substr(0, 1),
              options: {
                textAlign: 'left',
                fontSize: this.fontSize
              }
            });

            if (this.options.lastChar) {
              data.push({
                data: '00'
              });
              data.push({
                data: '00000',
                text: this.options.lastChar,
                options: {
                  fontSize: this.fontSize
                }
              });
            }
          }

          return data;
        }
      }]);

      return EAN13;
    }(_EAN3.default);

    exports.default = EAN13;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEAN2Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

    var _encoder = __webpack_require__(
    /*! ./encoder */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

    var _encoder2 = _interopRequireDefault(_encoder);

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/EAN_2#Encoding


    var EAN2 = function (_Barcode) {
      _inherits(EAN2, _Barcode);

      function EAN2(data, options) {
        _classCallCheck(this, EAN2);

        return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
      }

      _createClass(EAN2, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^[0-9]{2}$/) !== -1;
        }
      }, {
        key: 'encode',
        value: function encode() {
          // Choose the structure based on the number mod 4
          var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];

          return {
            // Start bits + Encode the two digits with 01 in between
            data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
            text: this.text
          };
        }
      }]);

      return EAN2;
    }(_Barcode3.default);

    exports.default = EAN2;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEAN5Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

    var _encoder = __webpack_require__(
    /*! ./encoder */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

    var _encoder2 = _interopRequireDefault(_encoder);

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/EAN_5#Encoding


    var checksum = function checksum(data) {
      var result = data.split('').map(function (n) {
        return +n;
      }).reduce(function (sum, a, idx) {
        return idx % 2 ? sum + a * 9 : sum + a * 3;
      }, 0);
      return result % 10;
    };

    var EAN5 = function (_Barcode) {
      _inherits(EAN5, _Barcode);

      function EAN5(data, options) {
        _classCallCheck(this, EAN5);

        return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
      }

      _createClass(EAN5, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^[0-9]{5}$/) !== -1;
        }
      }, {
        key: 'encode',
        value: function encode() {
          var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];

          return {
            data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
            text: this.text
          };
        }
      }]);

      return EAN5;
    }(_Barcode3.default);

    exports.default = EAN5;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEAN8Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var _EAN2 = __webpack_require__(
    /*! ./EAN */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

    var _EAN3 = _interopRequireDefault(_EAN2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // http://www.barcodeisland.com/ean8.phtml
    // Calculate the checksum digit


    var checksum = function checksum(number) {
      var res = number.substr(0, 7).split('').map(function (n) {
        return +n;
      }).reduce(function (sum, a, idx) {
        return idx % 2 ? sum + a : sum + a * 3;
      }, 0);
      return (10 - res % 10) % 10;
    };

    var EAN8 = function (_EAN) {
      _inherits(EAN8, _EAN);

      function EAN8(data, options) {
        _classCallCheck(this, EAN8); // Add checksum if it does not exist


        if (data.search(/^[0-9]{7}$/) !== -1) {
          data += checksum(data);
        }

        return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
      }

      _createClass(EAN8, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
        }
      }, {
        key: 'leftText',
        value: function leftText() {
          return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
        }
      }, {
        key: 'leftEncode',
        value: function leftEncode() {
          var data = this.data.substr(0, 4);
          return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
        }
      }, {
        key: 'rightText',
        value: function rightText() {
          return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
        }
      }, {
        key: 'rightEncode',
        value: function rightEncode() {
          var data = this.data.substr(4, 4);
          return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
        }
      }]);

      return EAN8;
    }(_EAN3.default);

    exports.default = EAN8;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js":
  /*!************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCUPCJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    exports.checksum = checksum;

    var _encoder = __webpack_require__(
    /*! ./encoder */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

    var _encoder2 = _interopRequireDefault(_encoder);

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding


    var UPC = function (_Barcode) {
      _inherits(UPC, _Barcode);

      function UPC(data, options) {
        _classCallCheck(this, UPC); // Add checksum if it does not exist


        if (data.search(/^[0-9]{11}$/) !== -1) {
          data += checksum(data);
        }

        var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

        _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

        if (options.fontSize > options.width * 10) {
          _this.fontSize = options.width * 10;
        } else {
          _this.fontSize = options.fontSize;
        } // Make the guard bars go down half the way of the text


        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }

      _createClass(UPC, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
        }
      }, {
        key: "encode",
        value: function encode() {
          if (this.options.flat) {
            return this.flatEncoding();
          } else {
            return this.guardedEncoding();
          }
        }
      }, {
        key: "flatEncoding",
        value: function flatEncoding() {
          var result = "";
          result += "101";
          result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
          result += "01010";
          result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
          result += "101";
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "guardedEncoding",
        value: function guardedEncoding() {
          var result = []; // Add the first digit

          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text.substr(0, 1),
              options: {
                textAlign: "left",
                fontSize: this.fontSize
              }
            });
          } // Add the guard bars


          result.push({
            data: "101" + (0, _encoder2.default)(this.data[0], "L"),
            options: {
              height: this.guardHeight
            }
          }); // Add the left side

          result.push({
            data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
            text: this.text.substr(1, 5),
            options: {
              fontSize: this.fontSize
            }
          }); // Add the middle bits

          result.push({
            data: "01010",
            options: {
              height: this.guardHeight
            }
          }); // Add the right side

          result.push({
            data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
            text: this.text.substr(6, 5),
            options: {
              fontSize: this.fontSize
            }
          }); // Add the end bits

          result.push({
            data: (0, _encoder2.default)(this.data[11], "R") + "101",
            options: {
              height: this.guardHeight
            }
          }); // Add the last digit

          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text.substr(11, 1),
              options: {
                textAlign: "right",
                fontSize: this.fontSize
              }
            });
          }

          return result;
        }
      }]);

      return UPC;
    }(_Barcode3.default); // Calulate the checksum digit
    // https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


    function checksum(number) {
      var result = 0;
      var i;

      for (i = 1; i < 11; i += 2) {
        result += parseInt(number[i]);
      }

      for (i = 0; i < 11; i += 2) {
        result += parseInt(number[i]) * 3;
      }

      return (10 - result % 10) % 10;
    }

    exports.default = UPC;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCUPCEJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _encoder = __webpack_require__(
    /*! ./encoder */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

    var _encoder2 = _interopRequireDefault(_encoder);

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    var _UPC = __webpack_require__(
    /*! ./UPC.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation:
    // https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
    //
    // UPC-E documentation:
    // https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E


    var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
    var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

    var UPCE = function (_Barcode) {
      _inherits(UPCE, _Barcode);

      function UPCE(data, options) {
        _classCallCheck(this, UPCE);

        var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options)); // Code may be 6 or 8 digits;
        // A 7 digit code is ambiguous as to whether the extra digit
        // is a UPC-A check or number system digit.


        _this.isValid = false;

        if (data.search(/^[0-9]{6}$/) !== -1) {
          _this.middleDigits = data;
          _this.upcA = expandToUPCA(data, "0");
          _this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
          _this.isValid = true;
        } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
          _this.middleDigits = data.substring(1, data.length - 1);
          _this.upcA = expandToUPCA(_this.middleDigits, data[0]);

          if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
            _this.isValid = true;
          } else {
            // checksum mismatch
            return _possibleConstructorReturn(_this);
          }
        } else {
          return _possibleConstructorReturn(_this);
        }

        _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

        if (options.fontSize > options.width * 10) {
          _this.fontSize = options.width * 10;
        } else {
          _this.fontSize = options.fontSize;
        } // Make the guard bars go down half the way of the text


        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }

      _createClass(UPCE, [{
        key: 'valid',
        value: function valid() {
          return this.isValid;
        }
      }, {
        key: 'encode',
        value: function encode() {
          if (this.options.flat) {
            return this.flatEncoding();
          } else {
            return this.guardedEncoding();
          }
        }
      }, {
        key: 'flatEncoding',
        value: function flatEncoding() {
          var result = "";
          result += "101";
          result += this.encodeMiddleDigits();
          result += "010101";
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: 'guardedEncoding',
        value: function guardedEncoding() {
          var result = []; // Add the UPC-A number system digit beneath the quiet zone

          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text[0],
              options: {
                textAlign: "left",
                fontSize: this.fontSize
              }
            });
          } // Add the guard bars


          result.push({
            data: "101",
            options: {
              height: this.guardHeight
            }
          }); // Add the 6 UPC-E digits

          result.push({
            data: this.encodeMiddleDigits(),
            text: this.text.substring(1, 7),
            options: {
              fontSize: this.fontSize
            }
          }); // Add the end bits

          result.push({
            data: "010101",
            options: {
              height: this.guardHeight
            }
          }); // Add the UPC-A check digit beneath the quiet zone

          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text[7],
              options: {
                textAlign: "right",
                fontSize: this.fontSize
              }
            });
          }

          return result;
        }
      }, {
        key: 'encodeMiddleDigits',
        value: function encodeMiddleDigits() {
          var numberSystem = this.upcA[0];
          var checkDigit = this.upcA[this.upcA.length - 1];
          var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
          return (0, _encoder2.default)(this.middleDigits, parity);
        }
      }]);

      return UPCE;
    }(_Barcode3.default);

    function expandToUPCA(middleDigits, numberSystem) {
      var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
      var expansion = EXPANSIONS[lastUpcE];
      var result = "";
      var digitIndex = 0;

      for (var i = 0; i < expansion.length; i++) {
        var c = expansion[i];

        if (c === 'X') {
          result += middleDigits[digitIndex++];
        } else {
          result += c;
        }
      }

      result = '' + numberSystem + result;
      return '' + result + (0, _UPC.checksum)(result);
    }

    exports.default = UPCE;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js":
  /*!******************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCConstantsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    }); // Standard start end and middle bits

    var SIDE_BIN = exports.SIDE_BIN = '101';
    var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';
    var BINARIES = exports.BINARIES = {
      'L': [// The L (left) type of encoding
      '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
      'G': [// The G type of encoding
      '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
      'R': [// The R (right) type of encoding
      '1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
      'O': [// The O (odd) encoding for UPC-E
      '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
      'E': [// The E (even) encoding for UPC-E
      '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
    }; // Define the EAN-2 structure

    var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG']; // Define the EAN-5 structure

    var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG']; // Define the EAN-13 structure

    var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js":
  /*!****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCEncoderJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js"); // Encode data string


    var encode = function encode(data, structure, separator) {
      var encoded = data.split('').map(function (val, idx) {
        return _constants.BINARIES[structure[idx]];
      }).map(function (val, idx) {
        return val ? val[data[idx]] : '';
      });

      if (separator) {
        var last = data.length - 1;
        encoded = encoded.map(function (val, idx) {
          return idx < last ? val + separator : val;
        });
      }

      return encoded.join('');
    };

    exports.default = encode;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesEAN_UPCIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

    var _EAN = __webpack_require__(
    /*! ./EAN13.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

    var _EAN2 = _interopRequireDefault(_EAN);

    var _EAN3 = __webpack_require__(
    /*! ./EAN8.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

    var _EAN4 = _interopRequireDefault(_EAN3);

    var _EAN5 = __webpack_require__(
    /*! ./EAN5.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

    var _EAN6 = _interopRequireDefault(_EAN5);

    var _EAN7 = __webpack_require__(
    /*! ./EAN2.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

    var _EAN8 = _interopRequireDefault(_EAN7);

    var _UPC = __webpack_require__(
    /*! ./UPC.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

    var _UPC2 = _interopRequireDefault(_UPC);

    var _UPCE = __webpack_require__(
    /*! ./UPCE.js */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

    var _UPCE2 = _interopRequireDefault(_UPCE);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.EAN13 = _EAN2.default;
    exports.EAN8 = _EAN4.default;
    exports.EAN5 = _EAN6.default;
    exports.EAN2 = _EAN8.default;
    exports.UPC = _UPC2.default;
    exports.UPCE = _UPCE2.default;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesGenericBarcodeIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GenericBarcode = undefined;

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var GenericBarcode = function (_Barcode) {
      _inherits(GenericBarcode, _Barcode);

      function GenericBarcode(data, options) {
        _classCallCheck(this, GenericBarcode);

        return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
      } // Return the corresponding binary numbers for the data provided


      _createClass(GenericBarcode, [{
        key: "encode",
        value: function encode() {
          return {
            data: "10101010101010101010101010101010101010101",
            text: this.text
          };
        } // Resturn true/false if the string provided is valid for this encoder

      }, {
        key: "valid",
        value: function valid() {
          return true;
        }
      }]);

      return GenericBarcode;
    }(_Barcode3.default);

    exports.GenericBarcode = GenericBarcode;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesITFITFJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _constants = __webpack_require__(
    /*! ./constants */
    "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ITF = function (_Barcode) {
      _inherits(ITF, _Barcode);

      function ITF() {
        _classCallCheck(this, ITF);

        return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
      }

      _createClass(ITF, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^([0-9]{2})+$/) !== -1;
        }
      }, {
        key: 'encode',
        value: function encode() {
          var _this2 = this; // Calculate all the digit pairs


          var encoded = this.data.match(/.{2}/g).map(function (pair) {
            return _this2.encodePair(pair);
          }).join('');
          return {
            data: _constants.START_BIN + encoded + _constants.END_BIN,
            text: this.text
          };
        } // Calculate the data of a number pair

      }, {
        key: 'encodePair',
        value: function encodePair(pair) {
          var second = _constants.BINARIES[pair[1]];
          return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
            return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
          }).join('');
        }
      }]);

      return ITF;
    }(_Barcode3.default);

    exports.default = ITF;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js":
  /*!**********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesITFITF14Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _ITF2 = __webpack_require__(
    /*! ./ITF */
    "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

    var _ITF3 = _interopRequireDefault(_ITF2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Calculate the checksum digit


    var checksum = function checksum(data) {
      var res = data.substr(0, 13).split('').map(function (num) {
        return parseInt(num, 10);
      }).reduce(function (sum, n, idx) {
        return sum + n * (3 - idx % 2 * 2);
      }, 0);
      return Math.ceil(res / 10) * 10 - res;
    };

    var ITF14 = function (_ITF) {
      _inherits(ITF14, _ITF);

      function ITF14(data, options) {
        _classCallCheck(this, ITF14); // Add checksum if it does not exist


        if (data.search(/^[0-9]{13}$/) !== -1) {
          data += checksum(data);
        }

        return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
      }

      _createClass(ITF14, [{
        key: 'valid',
        value: function valid() {
          return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
        }
      }]);

      return ITF14;
    }(_ITF3.default);

    exports.default = ITF14;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesITFConstantsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var START_BIN = exports.START_BIN = '1010';
    var END_BIN = exports.END_BIN = '11101';
    var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/ITF/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesITFIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ITF14 = exports.ITF = undefined;

    var _ITF = __webpack_require__(
    /*! ./ITF */
    "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

    var _ITF2 = _interopRequireDefault(_ITF);

    var _ITF3 = __webpack_require__(
    /*! ./ITF14 */
    "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

    var _ITF4 = _interopRequireDefault(_ITF3);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.ITF = _ITF2.default;
    exports.ITF14 = _ITF4.default;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIMSIJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation
    // https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup


    var MSI = function (_Barcode) {
      _inherits(MSI, _Barcode);

      function MSI(data, options) {
        _classCallCheck(this, MSI);

        return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
      }

      _createClass(MSI, [{
        key: "encode",
        value: function encode() {
          // Start bits
          var ret = "110";

          for (var i = 0; i < this.data.length; i++) {
            // Convert the character to binary (always 4 binary digits)
            var digit = parseInt(this.data[i]);
            var bin = digit.toString(2);
            bin = addZeroes(bin, 4 - bin.length); // Add 100 for every zero and 110 for every 1

            for (var b = 0; b < bin.length; b++) {
              ret += bin[b] == "0" ? "100" : "110";
            }
          } // End bits


          ret += "1001";
          return {
            data: ret,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]+$/) !== -1;
        }
      }]);

      return MSI;
    }(_Barcode3.default);

    function addZeroes(number, n) {
      for (var i = 0; i < n; i++) {
        number = "0" + number;
      }

      return number;
    }

    exports.default = MSI;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js":
  /*!**********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIMSI10Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _MSI2 = __webpack_require__(
    /*! ./MSI.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

    var _MSI3 = _interopRequireDefault(_MSI2);

    var _checksums = __webpack_require__(
    /*! ./checksums.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MSI10 = function (_MSI) {
      _inherits(MSI10, _MSI);

      function MSI10(data, options) {
        _classCallCheck(this, MSI10);

        return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
      }

      return MSI10;
    }(_MSI3.default);

    exports.default = MSI10;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js":
  /*!************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIMSI1010Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _MSI2 = __webpack_require__(
    /*! ./MSI.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

    var _MSI3 = _interopRequireDefault(_MSI2);

    var _checksums = __webpack_require__(
    /*! ./checksums.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MSI1010 = function (_MSI) {
      _inherits(MSI1010, _MSI);

      function MSI1010(data, options) {
        _classCallCheck(this, MSI1010);

        data += (0, _checksums.mod10)(data);
        data += (0, _checksums.mod10)(data);
        return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
      }

      return MSI1010;
    }(_MSI3.default);

    exports.default = MSI1010;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js":
  /*!**********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIMSI11Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _MSI2 = __webpack_require__(
    /*! ./MSI.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

    var _MSI3 = _interopRequireDefault(_MSI2);

    var _checksums = __webpack_require__(
    /*! ./checksums.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MSI11 = function (_MSI) {
      _inherits(MSI11, _MSI);

      function MSI11(data, options) {
        _classCallCheck(this, MSI11);

        return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
      }

      return MSI11;
    }(_MSI3.default);

    exports.default = MSI11;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js":
  /*!************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIMSI1110Js(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _MSI2 = __webpack_require__(
    /*! ./MSI.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

    var _MSI3 = _interopRequireDefault(_MSI2);

    var _checksums = __webpack_require__(
    /*! ./checksums.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MSI1110 = function (_MSI) {
      _inherits(MSI1110, _MSI);

      function MSI1110(data, options) {
        _classCallCheck(this, MSI1110);

        data += (0, _checksums.mod11)(data);
        data += (0, _checksums.mod10)(data);
        return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
      }

      return MSI1110;
    }(_MSI3.default);

    exports.default = MSI1110;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIChecksumsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mod10 = mod10;
    exports.mod11 = mod11;

    function mod10(number) {
      var sum = 0;

      for (var i = 0; i < number.length; i++) {
        var n = parseInt(number[i]);

        if ((i + number.length) % 2 === 0) {
          sum += n;
        } else {
          sum += n * 2 % 10 + Math.floor(n * 2 / 10);
        }
      }

      return (10 - sum % 10) % 10;
    }

    function mod11(number) {
      var sum = 0;
      var weights = [2, 3, 4, 5, 6, 7];

      for (var i = 0; i < number.length; i++) {
        var n = parseInt(number[number.length - 1 - i]);
        sum += weights[i % weights.length] * n;
      }

      return (11 - sum % 11) % 11;
    }
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/MSI/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesMSIIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

    var _MSI = __webpack_require__(
    /*! ./MSI.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

    var _MSI2 = _interopRequireDefault(_MSI);

    var _MSI3 = __webpack_require__(
    /*! ./MSI10.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

    var _MSI4 = _interopRequireDefault(_MSI3);

    var _MSI5 = __webpack_require__(
    /*! ./MSI11.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

    var _MSI6 = _interopRequireDefault(_MSI5);

    var _MSI7 = __webpack_require__(
    /*! ./MSI1010.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

    var _MSI8 = _interopRequireDefault(_MSI7);

    var _MSI9 = __webpack_require__(
    /*! ./MSI1110.js */
    "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

    var _MSI10 = _interopRequireDefault(_MSI9);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.MSI = _MSI2.default;
    exports.MSI10 = _MSI4.default;
    exports.MSI11 = _MSI6.default;
    exports.MSI1010 = _MSI8.default;
    exports.MSI1110 = _MSI10.default;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/codabar/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesCodabarIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.codabar = undefined;

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding specification:
    // http://www.barcodeisland.com/codabar.phtml


    var codabar = function (_Barcode) {
      _inherits(codabar, _Barcode);

      function codabar(data, options) {
        _classCallCheck(this, codabar);

        if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
          data = "A" + data + "A";
        }

        var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

        _this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
        return _this;
      }

      _createClass(codabar, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
        }
      }, {
        key: "encode",
        value: function encode() {
          var result = [];
          var encodings = this.getEncodings();

          for (var i = 0; i < this.data.length; i++) {
            result.push(encodings[this.data.charAt(i)]); // for all characters except the last, append a narrow-space ("0")

            if (i !== this.data.length - 1) {
              result.push("0");
            }
          }

          return {
            text: this.text,
            data: result.join('')
          };
        }
      }, {
        key: "getEncodings",
        value: function getEncodings() {
          return {
            "0": "101010011",
            "1": "101011001",
            "2": "101001011",
            "3": "110010101",
            "4": "101101001",
            "5": "110101001",
            "6": "100101011",
            "7": "100101101",
            "8": "100110101",
            "9": "110100101",
            "-": "101001101",
            "$": "101100101",
            ":": "1101011011",
            "/": "1101101011",
            ".": "1101101101",
            "+": "101100110011",
            "A": "1011001001",
            "B": "1001001011",
            "C": "1010010011",
            "D": "1010011001"
          };
        }
      }]);

      return codabar;
    }(_Barcode3.default);

    exports.codabar = codabar;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _CODE = __webpack_require__(
    /*! ./CODE39/ */
    "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

    var _CODE2 = __webpack_require__(
    /*! ./CODE128/ */
    "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

    var _EAN_UPC = __webpack_require__(
    /*! ./EAN_UPC/ */
    "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

    var _ITF = __webpack_require__(
    /*! ./ITF/ */
    "./node_modules/jsbarcode/bin/barcodes/ITF/index.js");

    var _MSI = __webpack_require__(
    /*! ./MSI/ */
    "./node_modules/jsbarcode/bin/barcodes/MSI/index.js");

    var _pharmacode = __webpack_require__(
    /*! ./pharmacode/ */
    "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

    var _codabar = __webpack_require__(
    /*! ./codabar */
    "./node_modules/jsbarcode/bin/barcodes/codabar/index.js");

    var _GenericBarcode = __webpack_require__(
    /*! ./GenericBarcode/ */
    "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

    exports.default = {
      CODE39: _CODE.CODE39,
      CODE128: _CODE2.CODE128,
      CODE128A: _CODE2.CODE128A,
      CODE128B: _CODE2.CODE128B,
      CODE128C: _CODE2.CODE128C,
      EAN13: _EAN_UPC.EAN13,
      EAN8: _EAN_UPC.EAN8,
      EAN5: _EAN_UPC.EAN5,
      EAN2: _EAN_UPC.EAN2,
      UPC: _EAN_UPC.UPC,
      UPCE: _EAN_UPC.UPCE,
      ITF14: _ITF.ITF14,
      ITF: _ITF.ITF,
      MSI: _MSI.MSI,
      MSI10: _MSI.MSI10,
      MSI11: _MSI.MSI11,
      MSI1010: _MSI.MSI1010,
      MSI1110: _MSI.MSI1110,
      pharmacode: _pharmacode.pharmacode,
      codabar: _codabar.codabar,
      GenericBarcode: _GenericBarcode.GenericBarcode
    };
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinBarcodesPharmacodeIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pharmacode = undefined;

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _Barcode2 = __webpack_require__(
    /*! ../Barcode.js */
    "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

    var _Barcode3 = _interopRequireDefault(_Barcode2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } // Encoding documentation
    // http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf


    var pharmacode = function (_Barcode) {
      _inherits(pharmacode, _Barcode);

      function pharmacode(data, options) {
        _classCallCheck(this, pharmacode);

        var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

        _this.number = parseInt(data, 10);
        return _this;
      }

      _createClass(pharmacode, [{
        key: "encode",
        value: function encode() {
          var z = this.number;
          var result = ""; // http://i.imgur.com/RMm4UDJ.png
          // (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)

          while (!isNaN(z) && z != 0) {
            if (z % 2 === 0) {
              // Even
              result = "11100" + result;
              z = (z - 2) / 2;
            } else {
              // Odd
              result = "100" + result;
              z = (z - 1) / 2;
            }
          } // Remove the two last zeroes


          result = result.slice(0, -2);
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.number >= 3 && this.number <= 131070;
        }
      }]);

      return pharmacode;
    }(_Barcode3.default);

    exports.pharmacode = pharmacode;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js":
  /*!***************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinExceptionsErrorHandlerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /*eslint no-console: 0 */


    var ErrorHandler = function () {
      function ErrorHandler(api) {
        _classCallCheck(this, ErrorHandler);

        this.api = api;
      }

      _createClass(ErrorHandler, [{
        key: "handleCatch",
        value: function handleCatch(e) {
          // If babel supported extending of Error in a correct way instanceof would be used here
          if (e.name === "InvalidInputException") {
            if (this.api._options.valid !== this.api._defaults.valid) {
              this.api._options.valid(false);
            } else {
              throw e.message;
            }
          } else {
            throw e;
          }

          this.api.render = function () {};
        }
      }, {
        key: "wrapBarcodeCall",
        value: function wrapBarcodeCall(func) {
          try {
            var result = func.apply(undefined, arguments);

            this.api._options.valid(true);

            return result;
          } catch (e) {
            this.handleCatch(e);
            return this.api;
          }
        }
      }]);

      return ErrorHandler;
    }();

    exports.default = ErrorHandler;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/exceptions/exceptions.js":
  /*!*************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinExceptionsExceptionsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var InvalidInputException = function (_Error) {
      _inherits(InvalidInputException, _Error);

      function InvalidInputException(symbology, input) {
        _classCallCheck(this, InvalidInputException);

        var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

        _this.name = "InvalidInputException";
        _this.symbology = symbology;
        _this.input = input;
        _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
        return _this;
      }

      return InvalidInputException;
    }(Error);

    var InvalidElementException = function (_Error2) {
      _inherits(InvalidElementException, _Error2);

      function InvalidElementException() {
        _classCallCheck(this, InvalidElementException);

        var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

        _this2.name = "InvalidElementException";
        _this2.message = "Not supported type to render on";
        return _this2;
      }

      return InvalidElementException;
    }(Error);

    var NoElementException = function (_Error3) {
      _inherits(NoElementException, _Error3);

      function NoElementException() {
        _classCallCheck(this, NoElementException);

        var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

        _this3.name = "NoElementException";
        _this3.message = "No element to render on.";
        return _this3;
      }

      return NoElementException;
    }(Error);

    exports.InvalidInputException = InvalidInputException;
    exports.InvalidElementException = InvalidElementException;
    exports.NoElementException = NoElementException;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/help/fixOptions.js":
  /*!*******************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpFixOptionsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = fixOptions;

    function fixOptions(options) {
      // Fix the margins
      options.marginTop = options.marginTop || options.margin;
      options.marginBottom = options.marginBottom || options.margin;
      options.marginRight = options.marginRight || options.margin;
      options.marginLeft = options.marginLeft || options.margin;
      return options;
    }
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js":
  /*!******************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpGetOptionsFromElementJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _optionsFromStrings = __webpack_require__(
    /*! ./optionsFromStrings.js */
    "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

    var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

    var _defaults = __webpack_require__(
    /*! ../options/defaults.js */
    "./node_modules/jsbarcode/bin/options/defaults.js");

    var _defaults2 = _interopRequireDefault(_defaults);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function getOptionsFromElement(element) {
      var options = {};

      for (var property in _defaults2.default) {
        if (_defaults2.default.hasOwnProperty(property)) {
          // jsbarcode-*
          if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
            options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
          } // data-*


          if (element.hasAttribute("data-" + property.toLowerCase())) {
            options[property] = element.getAttribute("data-" + property.toLowerCase());
          }
        }
      }

      options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value"); // Since all atributes are string they need to be converted to integers

      options = (0, _optionsFromStrings2.default)(options);
      return options;
    }

    exports.default = getOptionsFromElement;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/help/getRenderProperties.js":
  /*!****************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpGetRenderPropertiesJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    /* global HTMLImageElement */

    /* global HTMLCanvasElement */

    /* global SVGElement */


    var _getOptionsFromElement = __webpack_require__(
    /*! ./getOptionsFromElement.js */
    "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

    var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

    var _renderers = __webpack_require__(
    /*! ../renderers */
    "./node_modules/jsbarcode/bin/renderers/index.js");

    var _renderers2 = _interopRequireDefault(_renderers);

    var _exceptions = __webpack_require__(
    /*! ../exceptions/exceptions.js */
    "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    } // Takes an element and returns an object with information about how
    // it should be rendered
    // This could also return an array with these objects
    // {
    //   element: The element that the renderer should draw on
    //   renderer: The name of the renderer
    //   afterRender (optional): If something has to done after the renderer
    //     completed, calls afterRender (function)
    //   options (optional): Options that can be defined in the element
    // }


    function getRenderProperties(element) {
      // If the element is a string, query select call again
      if (typeof element === "string") {
        return querySelectedRenderProperties(element);
      } // If element is array. Recursivly call with every object in the array
      else if (Array.isArray(element)) {
          var returnArray = [];

          for (var i = 0; i < element.length; i++) {
            returnArray.push(getRenderProperties(element[i]));
          }

          return returnArray;
        } // If element, render on canvas and set the uri as src
        else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
            return newCanvasRenderProperties(element);
          } // If SVG
          else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
              return {
                element: element,
                options: (0, _getOptionsFromElement2.default)(element),
                renderer: _renderers2.default.SVGRenderer
              };
            } // If canvas (in browser)
            else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
                return {
                  element: element,
                  options: (0, _getOptionsFromElement2.default)(element),
                  renderer: _renderers2.default.CanvasRenderer
                };
              } // If canvas (in node)
              else if (element && element.getContext) {
                  return {
                    element: element,
                    renderer: _renderers2.default.CanvasRenderer
                  };
                } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
                  return {
                    element: element,
                    renderer: _renderers2.default.ObjectRenderer
                  };
                } else {
                  throw new _exceptions.InvalidElementException();
                }
    }

    function querySelectedRenderProperties(string) {
      var selector = document.querySelectorAll(string);

      if (selector.length === 0) {
        return undefined;
      } else {
        var returnArray = [];

        for (var i = 0; i < selector.length; i++) {
          returnArray.push(getRenderProperties(selector[i]));
        }

        return returnArray;
      }
    }

    function newCanvasRenderProperties(imgElement) {
      var canvas = document.createElement('canvas');
      return {
        element: canvas,
        options: (0, _getOptionsFromElement2.default)(imgElement),
        renderer: _renderers2.default.CanvasRenderer,
        afterRender: function afterRender() {
          imgElement.setAttribute("src", canvas.toDataURL());
        }
      };
    }

    exports.default = getRenderProperties;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/help/linearizeEncodings.js":
  /*!***************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpLinearizeEncodingsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = linearizeEncodings; // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
    // Convert to [1-1, 1-2, 2, 3-1, 3-2]

    function linearizeEncodings(encodings) {
      var linearEncodings = [];

      function nextLevel(encoded) {
        if (Array.isArray(encoded)) {
          for (var i = 0; i < encoded.length; i++) {
            nextLevel(encoded[i]);
          }
        } else {
          encoded.text = encoded.text || "";
          encoded.data = encoded.data || "";
          linearEncodings.push(encoded);
        }
      }

      nextLevel(encodings);
      return linearEncodings;
    }
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/help/merge.js":
  /*!**************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpMergeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    exports.default = function (old, replaceObj) {
      return _extends({}, old, replaceObj);
    };
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/help/optionsFromStrings.js":
  /*!***************************************************************!*\
    !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinHelpOptionsFromStringsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = optionsFromStrings; // Convert string to integers/booleans where it should be

    function optionsFromStrings(options) {
      var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

      for (var intOption in intOptions) {
        if (intOptions.hasOwnProperty(intOption)) {
          intOption = intOptions[intOption];

          if (typeof options[intOption] === "string") {
            options[intOption] = parseInt(options[intOption], 10);
          }
        }
      }

      if (typeof options["displayValue"] === "string") {
        options["displayValue"] = options["displayValue"] != "false";
      }

      return options;
    }
    /***/

  },

  /***/
  "./node_modules/jsbarcode/bin/options/defaults.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinOptionsDefaultsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var defaults = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: true,
      fontOptions: "",
      font: "monospace",
      text: undefined,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      fontSize: 20,
      background: "#ffffff",
      lineColor: "#000000",
      margin: 10,
      marginTop: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
      valid: function valid() {}
    };
    exports.default = defaults;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/renderers/canvas.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinRenderersCanvasJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _merge = __webpack_require__(
    /*! ../help/merge.js */
    "./node_modules/jsbarcode/bin/help/merge.js");

    var _merge2 = _interopRequireDefault(_merge);

    var _shared = __webpack_require__(
    /*! ./shared.js */
    "./node_modules/jsbarcode/bin/renderers/shared.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var CanvasRenderer = function () {
      function CanvasRenderer(canvas, encodings, options) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas;
        this.encodings = encodings;
        this.options = options;
      }

      _createClass(CanvasRenderer, [{
        key: "render",
        value: function render() {
          // Abort if the browser does not support HTML5 canvas
          if (!this.canvas.getContext) {
            throw new Error('The browser does not support canvas.');
          }

          this.prepareCanvas();

          for (var i = 0; i < this.encodings.length; i++) {
            var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
            this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
            this.drawCanvasText(encodingOptions, this.encodings[i]);
            this.moveCanvasDrawing(this.encodings[i]);
          }

          this.restoreCanvas();
        }
      }, {
        key: "prepareCanvas",
        value: function prepareCanvas() {
          // Get the canvas context
          var ctx = this.canvas.getContext("2d");
          ctx.save();
          (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
          var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
          var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
          this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
          this.canvas.height = maxHeight; // Paint the canvas

          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

          if (this.options.background) {
            ctx.fillStyle = this.options.background;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          }

          ctx.translate(this.options.marginLeft, 0);
        }
      }, {
        key: "drawCanvasBarcode",
        value: function drawCanvasBarcode(options, encoding) {
          // Get the canvas context
          var ctx = this.canvas.getContext("2d");
          var binary = encoding.data; // Creates the barcode out of the encoded binary

          var yFrom;

          if (options.textPosition == "top") {
            yFrom = options.marginTop + options.fontSize + options.textMargin;
          } else {
            yFrom = options.marginTop;
          }

          ctx.fillStyle = options.lineColor;

          for (var b = 0; b < binary.length; b++) {
            var x = b * options.width + encoding.barcodePadding;

            if (binary[b] === "1") {
              ctx.fillRect(x, yFrom, options.width, options.height);
            } else if (binary[b]) {
              ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
            }
          }
        }
      }, {
        key: "drawCanvasText",
        value: function drawCanvasText(options, encoding) {
          // Get the canvas context
          var ctx = this.canvas.getContext("2d");
          var font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Draw the text if displayValue is set

          if (options.displayValue) {
            var x, y;

            if (options.textPosition == "top") {
              y = options.marginTop + options.fontSize - options.textMargin;
            } else {
              y = options.height + options.textMargin + options.marginTop + options.fontSize;
            }

            ctx.font = font; // Draw the text in the correct X depending on the textAlign option

            if (options.textAlign == "left" || encoding.barcodePadding > 0) {
              x = 0;
              ctx.textAlign = 'left';
            } else if (options.textAlign == "right") {
              x = encoding.width - 1;
              ctx.textAlign = 'right';
            } // In all other cases, center the text
            else {
                x = encoding.width / 2;
                ctx.textAlign = 'center';
              }

            ctx.fillText(encoding.text, x, y);
          }
        }
      }, {
        key: "moveCanvasDrawing",
        value: function moveCanvasDrawing(encoding) {
          var ctx = this.canvas.getContext("2d");
          ctx.translate(encoding.width, 0);
        }
      }, {
        key: "restoreCanvas",
        value: function restoreCanvas() {
          // Get the canvas context
          var ctx = this.canvas.getContext("2d");
          ctx.restore();
        }
      }]);

      return CanvasRenderer;
    }();

    exports.default = CanvasRenderer;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/renderers/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinRenderersIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _canvas = __webpack_require__(
    /*! ./canvas.js */
    "./node_modules/jsbarcode/bin/renderers/canvas.js");

    var _canvas2 = _interopRequireDefault(_canvas);

    var _svg = __webpack_require__(
    /*! ./svg.js */
    "./node_modules/jsbarcode/bin/renderers/svg.js");

    var _svg2 = _interopRequireDefault(_svg);

    var _object = __webpack_require__(
    /*! ./object.js */
    "./node_modules/jsbarcode/bin/renderers/object.js");

    var _object2 = _interopRequireDefault(_object);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = {
      CanvasRenderer: _canvas2.default,
      SVGRenderer: _svg2.default,
      ObjectRenderer: _object2.default
    };
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/renderers/object.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinRenderersObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var ObjectRenderer = function () {
      function ObjectRenderer(object, encodings, options) {
        _classCallCheck(this, ObjectRenderer);

        this.object = object;
        this.encodings = encodings;
        this.options = options;
      }

      _createClass(ObjectRenderer, [{
        key: "render",
        value: function render() {
          this.object.encodings = this.encodings;
        }
      }]);

      return ObjectRenderer;
    }();

    exports.default = ObjectRenderer;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/renderers/shared.js":
  /*!********************************************************!*\
    !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinRenderersSharedJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

    var _merge = __webpack_require__(
    /*! ../help/merge.js */
    "./node_modules/jsbarcode/bin/help/merge.js");

    var _merge2 = _interopRequireDefault(_merge);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function getEncodingHeight(encoding, options) {
      return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
    }

    function getBarcodePadding(textWidth, barcodeWidth, options) {
      if (options.displayValue && barcodeWidth < textWidth) {
        if (options.textAlign == "center") {
          return Math.floor((textWidth - barcodeWidth) / 2);
        } else if (options.textAlign == "left") {
          return 0;
        } else if (options.textAlign == "right") {
          return Math.floor(textWidth - barcodeWidth);
        }
      }

      return 0;
    }

    function calculateEncodingAttributes(encodings, barcodeOptions, context) {
      for (var i = 0; i < encodings.length; i++) {
        var encoding = encodings[i];
        var options = (0, _merge2.default)(barcodeOptions, encoding.options); // Calculate the width of the encoding

        var textWidth;

        if (options.displayValue) {
          textWidth = messureText(encoding.text, options, context);
        } else {
          textWidth = 0;
        }

        var barcodeWidth = encoding.data.length * options.width;
        encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
        encoding.height = getEncodingHeight(encoding, options);
        encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
      }
    }

    function getTotalWidthOfEncodings(encodings) {
      var totalWidth = 0;

      for (var i = 0; i < encodings.length; i++) {
        totalWidth += encodings[i].width;
      }

      return totalWidth;
    }

    function getMaximumHeightOfEncodings(encodings) {
      var maxHeight = 0;

      for (var i = 0; i < encodings.length; i++) {
        if (encodings[i].height > maxHeight) {
          maxHeight = encodings[i].height;
        }
      }

      return maxHeight;
    }

    function messureText(string, options, context) {
      var ctx;

      if (context) {
        ctx = context;
      } else if (typeof document !== "undefined") {
        ctx = document.createElement("canvas").getContext("2d");
      } else {
        // If the text cannot be messured we will return 0.
        // This will make some barcode with big text render incorrectly
        return 0;
      }

      ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Calculate the width of the encoding

      var size = ctx.measureText(string).width;
      return size;
    }

    exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
    exports.getEncodingHeight = getEncodingHeight;
    exports.getBarcodePadding = getBarcodePadding;
    exports.calculateEncodingAttributes = calculateEncodingAttributes;
    exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;
    /***/
  },

  /***/
  "./node_modules/jsbarcode/bin/renderers/svg.js":
  /*!*****************************************************!*\
    !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJsbarcodeBinRenderersSvgJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _merge = __webpack_require__(
    /*! ../help/merge.js */
    "./node_modules/jsbarcode/bin/help/merge.js");

    var _merge2 = _interopRequireDefault(_merge);

    var _shared = __webpack_require__(
    /*! ./shared.js */
    "./node_modules/jsbarcode/bin/renderers/shared.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var svgns = "http://www.w3.org/2000/svg";

    var SVGRenderer = function () {
      function SVGRenderer(svg, encodings, options) {
        _classCallCheck(this, SVGRenderer);

        this.svg = svg;
        this.encodings = encodings;
        this.options = options;
        this.document = options.xmlDocument || document;
      }

      _createClass(SVGRenderer, [{
        key: "render",
        value: function render() {
          var currentX = this.options.marginLeft;
          this.prepareSVG();

          for (var i = 0; i < this.encodings.length; i++) {
            var encoding = this.encodings[i];
            var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
            var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
            this.setGroupOptions(group, encodingOptions);
            this.drawSvgBarcode(group, encodingOptions, encoding);
            this.drawSVGText(group, encodingOptions, encoding);
            currentX += encoding.width;
          }
        }
      }, {
        key: "prepareSVG",
        value: function prepareSVG() {
          // Clear the SVG
          while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
          }

          (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
          var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
          var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
          var width = totalWidth + this.options.marginLeft + this.options.marginRight;
          this.setSvgAttributes(width, maxHeight);

          if (this.options.background) {
            this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
          }
        }
      }, {
        key: "drawSvgBarcode",
        value: function drawSvgBarcode(parent, options, encoding) {
          var binary = encoding.data; // Creates the barcode out of the encoded binary

          var yFrom;

          if (options.textPosition == "top") {
            yFrom = options.fontSize + options.textMargin;
          } else {
            yFrom = 0;
          }

          var barWidth = 0;
          var x = 0;

          for (var b = 0; b < binary.length; b++) {
            x = b * options.width + encoding.barcodePadding;

            if (binary[b] === "1") {
              barWidth++;
            } else if (barWidth > 0) {
              this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
              barWidth = 0;
            }
          } // Last draw is needed since the barcode ends with 1


          if (barWidth > 0) {
            this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
          }
        }
      }, {
        key: "drawSVGText",
        value: function drawSVGText(parent, options, encoding) {
          var textElem = this.document.createElementNS(svgns, 'text'); // Draw the text if displayValue is set

          if (options.displayValue) {
            var x, y;
            textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

            if (options.textPosition == "top") {
              y = options.fontSize - options.textMargin;
            } else {
              y = options.height + options.textMargin + options.fontSize;
            } // Draw the text in the correct X depending on the textAlign option


            if (options.textAlign == "left" || encoding.barcodePadding > 0) {
              x = 0;
              textElem.setAttribute("text-anchor", "start");
            } else if (options.textAlign == "right") {
              x = encoding.width - 1;
              textElem.setAttribute("text-anchor", "end");
            } // In all other cases, center the text
            else {
                x = encoding.width / 2;
                textElem.setAttribute("text-anchor", "middle");
              }

            textElem.setAttribute("x", x);
            textElem.setAttribute("y", y);
            textElem.appendChild(this.document.createTextNode(encoding.text));
            parent.appendChild(textElem);
          }
        }
      }, {
        key: "setSvgAttributes",
        value: function setSvgAttributes(width, height) {
          var svg = this.svg;
          svg.setAttribute("width", width + "px");
          svg.setAttribute("height", height + "px");
          svg.setAttribute("x", "0px");
          svg.setAttribute("y", "0px");
          svg.setAttribute("viewBox", "0 0 " + width + " " + height);
          svg.setAttribute("xmlns", svgns);
          svg.setAttribute("version", "1.1");
          svg.setAttribute("style", "transform: translate(0,0)");
        }
      }, {
        key: "createGroup",
        value: function createGroup(x, y, parent) {
          var group = this.document.createElementNS(svgns, 'g');
          group.setAttribute("transform", "translate(" + x + ", " + y + ")");
          parent.appendChild(group);
          return group;
        }
      }, {
        key: "setGroupOptions",
        value: function setGroupOptions(group, options) {
          group.setAttribute("style", "fill:" + options.lineColor + ";");
        }
      }, {
        key: "drawRect",
        value: function drawRect(x, y, width, height, parent) {
          var rect = this.document.createElementNS(svgns, 'rect');
          rect.setAttribute("x", x);
          rect.setAttribute("y", y);
          rect.setAttribute("width", width);
          rect.setAttribute("height", height);
          parent.appendChild(rect);
          return rect;
        }
      }]);

      return SVGRenderer;
    }();

    exports.default = SVGRenderer;
    /***/
  },

  /***/
  "./node_modules/ngx-barcode/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/ngx-barcode/index.js ***!
    \*******************************************/

  /*! exports provided: NgxBarcodeModule, NgxBarcodeComponent */

  /***/
  function node_modulesNgxBarcodeIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxBarcodeModule", function () {
      return NgxBarcodeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxBarcodeComponent", function () {
      return NgxBarcodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var jsbarcode = __webpack_require__(
    /*! jsbarcode */
    "./node_modules/jsbarcode/bin/JsBarcode.js");

    var NgxBarcodeComponent = function () {
      /**
       * @param {?} renderer
       */
      function NgxBarcodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'svg';
        this.cssClass = 'barcode'; // this should be done more elegantly

        this.format = 'CODE128';
        this.lineColor = '#000000';
        this.width = 2;
        this.height = 100;
        this.displayValue = false;
        this.fontOptions = '';
        this.font = 'monospace';
        this.textAlign = 'center';
        this.textPosition = 'bottom';
        this.textMargin = 2;
        this.fontSize = 20;
        this.background = '#ffffff';
        this.margin = 10;
        this.marginTop = 10;
        this.marginBottom = 10;
        this.marginLeft = 10;
        this.marginRight = 10;
        this.value = '';

        this.valid = function () {
          return true;
        };
      }

      Object.defineProperty(NgxBarcodeComponent.prototype, "options", {
        /**
         * @return {?}
         */
        get: function get() {
          return {
            format: this.format,
            lineColor: this.lineColor,
            width: this.width,
            height: this.height,
            displayValue: this.displayValue,
            fontOptions: this.fontOptions,
            font: this.font,
            textAlign: this.textAlign,
            textPosition: this.textPosition,
            textMargin: this.textMargin,
            fontSize: this.fontSize,
            background: this.background,
            margin: this.margin,
            marginTop: this.marginTop,
            marginBottom: this.marginBottom,
            marginLeft: this.marginLeft,
            marginRight: this.marginRight,
            valid: this.valid
          };
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @return {?}
       */

      NgxBarcodeComponent.prototype.ngOnChanges = function () {
        this.createBarcode();
      };
      /**
       * @return {?}
       */


      NgxBarcodeComponent.prototype.createBarcode = function () {
        if (!this.value) {
          return;
        }

        var
        /** @type {?} */
        element;

        switch (this.elementType) {
          case 'img':
            element = this.renderer.createElement('img');
            break;

          case 'canvas':
            element = this.renderer.createElement('canvas');
            break;

          case 'svg':
          default:
            element = this.renderer.createElement('svg', 'svg');
        }

        jsbarcode(element, this.value, this.options);

        for (var _i = 0, _a = this.bcElement.nativeElement.childNodes; _i < _a.length; _i++) {
          var node = _a[_i];
          this.renderer.removeChild(this.bcElement.nativeElement, node);
        }

        this.renderer.appendChild(this.bcElement.nativeElement, element);
      };

      NgxBarcodeComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-barcode',
          template: "<div #bcElement [class]=\"cssClass\"></div>",
          styles: []
        }]
      }];
      /**
       * @nocollapse
       */

      NgxBarcodeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      NgxBarcodeComponent.propDecorators = {
        'elementType': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-element-type']
        }],
        'cssClass': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-class']
        }],
        'format': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-format']
        }],
        'lineColor': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-line-color']
        }],
        'width': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-width']
        }],
        'height': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-height']
        }],
        'displayValue': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-display-value']
        }],
        'fontOptions': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-font-options']
        }],
        'font': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-font']
        }],
        'textAlign': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-text-align']
        }],
        'textPosition': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-text-position']
        }],
        'textMargin': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-text-margin']
        }],
        'fontSize': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-font-size']
        }],
        'background': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-background']
        }],
        'margin': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-margin']
        }],
        'marginTop': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-margin-top']
        }],
        'marginBottom': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-margin-bottom']
        }],
        'marginLeft': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-margin-left']
        }],
        'marginRight': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-margin-right']
        }],
        'value': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-value']
        }],
        'bcElement': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['bcElement']
        }],
        'valid': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['bc-valid']
        }]
      };
      return NgxBarcodeComponent;
    }();

    var NgxBarcodeModule = function () {
      function NgxBarcodeModule() {}
      /**
       * @return {?}
       */


      NgxBarcodeModule.forRoot = function () {
        return {
          ngModule: NgxBarcodeModule,
          providers: []
        };
      };

      NgxBarcodeModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [NgxBarcodeComponent],
          exports: [NgxBarcodeComponent]
        }]
      }];
      /**
       * @nocollapse
       */

      NgxBarcodeModule.ctorParameters = function () {
        return [];
      };

      return NgxBarcodeModule;
    }();
    /***/

  },

  /***/
  "./node_modules/primeng/breadcrumb.js":
  /*!********************************************!*\
    !*** ./node_modules/primeng/breadcrumb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengBreadcrumbJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/breadcrumb/breadcrumb */
    "./node_modules/primeng/components/breadcrumb/breadcrumb.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/components/breadcrumb/breadcrumb.js":
  /*!******************************************************************!*\
    !*** ./node_modules/primeng/components/breadcrumb/breadcrumb.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsBreadcrumbBreadcrumbJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Breadcrumb =
    /** @class */
    function () {
      function Breadcrumb() {}

      Breadcrumb.prototype.itemClick = function (event, item) {
        if (item.disabled) {
          event.preventDefault();
          return;
        }

        if (!item.url) {
          event.preventDefault();
        }

        if (item.command) {
          item.command({
            originalEvent: event,
            item: item
          });
        }
      };

      Breadcrumb.prototype.onHomeClick = function (event) {
        if (this.home) {
          this.itemClick(event, this.home);
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", Array)], Breadcrumb.prototype, "model", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Breadcrumb.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Breadcrumb.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Breadcrumb.prototype, "home", void 0);

      Breadcrumb = __decorate([core_1.Component({
        selector: 'p-breadcrumb',
        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'\">\n            <ul>\n                <li class=\"ui-breadcrumb-home\" *ngIf=\"home\">\n                    <a *ngIf=\"!home.routerLink\" [href]=\"home.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\"[attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                    <a *ngIf=\"home.routerLink\" [routerLink]=\"home.routerLink\" [queryParams]=\"home.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"home.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\" [attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                </li>\n                <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"model&&home\"></li>\n                <ng-template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li role=\"menuitem\">\n                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\"  [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                    <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"!end\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    "
      })], Breadcrumb);
      return Breadcrumb;
    }();

    exports.Breadcrumb = Breadcrumb;

    var BreadcrumbModule =
    /** @class */
    function () {
      function BreadcrumbModule() {}

      BreadcrumbModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        exports: [Breadcrumb, router_1.RouterModule],
        declarations: [Breadcrumb]
      })], BreadcrumbModule);
      return BreadcrumbModule;
    }();

    exports.BreadcrumbModule = BreadcrumbModule; //# sourceMappingURL=breadcrumb.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSettingsBarcodeGenerateBarcodeGenerateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div style=\"margin-top: 15px;\">\r\n<h1>\r\n        {{title}}\r\n      </h1>\r\n      <ngx-barcode [bc-value]=\"value\" [bc-display-value]=\"true\"></ngx-barcode>\r\n</div> -->\r\n\r\n\r\n\r\n<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<div style=\"margin-top: 15px;\">\r\n       \r\n<p-card >\r\n<p-table  #dt   [value]=\"stocksList\"  [columns]=\"cols\" dataKey=\"_id\"  [paginator]=\"true\" [loading]=\"loading\" [rowsPerPageOptions]=\"[10,50,100]\"  [globalFilterFields]=\"['_id','stock_name','stock_qty','buying_price','selling_price','product_details']\" [rows]=\"10\" >\r\n\r\n<ng-template pTemplate=\"caption\">\r\n<div style=\"text-align: right\">        \r\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \r\n    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\r\n</div>\r\n</ng-template>\r\n<ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n          <th style=\"width: 3em\">\r\n                  <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n              </th>\r\n          <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\r\n                  {{col.header}}\r\n                  <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n              </th>\r\n    <!-- <th style=\"width: 10%;\">\r\n            <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\"  pTooltip=\"Add new stock\" tooltipPosition=\"top\"></button>\r\n\r\n    </th> -->\r\n</tr>\r\n<!-- <tr>\r\n    <th ></th>\r\n    <th *ngFor=\"let col of columns\" pResizableColumn>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\r\n    </th>            \r\n    <th ></th>\r\n</tr> -->\r\n\r\n</ng-template>\r\n<ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\" >\r\n    <tr [pSelectableRow]=\"rowData\">\r\n            <td >\r\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                </td>\r\n                <td>\r\n                        {{rowData.stock_code}}\r\n                  </td>\r\n                <td>\r\n                        <!-- {{rowData._id}} -->\r\n                        <ngx-barcode [bc-value]=\"rowData._id\" [bc-display-value]=\"true\"></ngx-barcode>\r\n                  </td>\r\n    <td>              \r\n            {{rowData.stock_name}}\r\n    </td>\r\n    <!-- <td>              \r\n        {{rowData.category_details_id.category_name}}\r\n    </td> -->\r\n    <td>\r\n            {{rowData.stock_qty}}\r\n    </td>\r\n    <!-- <td>\r\n        {{rowData.buying_price  | currency : 'INR':true}}\r\n</td>\r\n<td>\r\n    {{rowData.selling_price  | currency : 'INR':true}}\r\n</td>\r\n<td>\r\n{{rowData.product_details}}\r\n</td>\r\n<td>\r\n        {{rowData.unit_details_id?.unit_name}}\r\n</td>\r\n<td>\r\n    {{rowData.updatedAt | date:'medium'}}\r\n</td> -->\r\n<td style=\"text-align: center\">\r\n    <!-- <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch>  -->\r\n    <ng-container *ngIf=\"rowData.status == 1; then thenTemplate; else elseTemplate\"></ng-container>\r\n    <ng-template #thenTemplate>\r\n      Active\r\n    </ng-template>\r\n    <ng-template #elseTemplate>\r\n      Deactive\r\n    </ng-template>\r\n    \r\n    </td>\r\n    <!-- <td style=\"text-align:center\">\r\n        <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\r\n       <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\r\n    </td> -->\r\n</tr>\r\n</ng-template>\r\n\r\n<ng-template pTemplate=\"paginatorleft\" let-state>\r\nShowing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{stocksList?.length}}</strong> entries\r\n</ng-template>\r\n\r\n</p-table>\r\n\r\n\r\n</p-card>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: BarcodeGenerateRoutingModule */

  /***/
  function srcAppComponentInventoryMngtSettingsBarcodeGenerateBarcodeGenerateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarcodeGenerateRoutingModule", function () {
      return BarcodeGenerateRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _barcode_generate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./barcode-generate.component */
    "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.ts");

    var routes = [{
      path: '',
      component: _barcode_generate_component__WEBPACK_IMPORTED_MODULE_3__["BarcodeGenerateComponent"]
    }];

    var BarcodeGenerateRoutingModule = function BarcodeGenerateRoutingModule() {
      _classCallCheck2(this, BarcodeGenerateRoutingModule);
    };

    BarcodeGenerateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BarcodeGenerateRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSettingsBarcodeGenerateBarcodeGenerateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zZXR0aW5ncy9iYXJjb2RlLWdlbmVyYXRlL2JhcmNvZGUtZ2VuZXJhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: BarcodeGenerateComponent */

  /***/
  function srcAppComponentInventoryMngtSettingsBarcodeGenerateBarcodeGenerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarcodeGenerateComponent", function () {
      return BarcodeGenerateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var BarcodeGenerateComponent = /*#__PURE__*/function () {
      function BarcodeGenerateComponent(router, auth, stockService, commonService, sessionService) {
        var _this4 = this;

        _classCallCheck2(this, BarcodeGenerateComponent);

        this.router = router;
        this.auth = auth;
        this.stockService = stockService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.title = 'barcode';
        this.value = 'bwaysoft';
        this.bradCrum = [{
          label: '',
          icon: 'pi pi-home',
          command: function command(event) {
            _this4.router.navigate(['/inventory-mngt/dashboard']);
          }
        }, {
          label: 'Settings',
          command: function command(event) {
            _this4.router.navigate(['/inventory-mngt/settings']);
          }
        }, {
          label: 'Barcode Genarate'
        }];
        this.getStocksByCompany();
        this.cols = [{
          field: 'stock_code',
          header: 'Code'
        }, {
          field: '_id',
          header: 'Barcode'
        }, {
          field: 'stock_name',
          header: 'Stock Name'
        }, // { field: 'category_details_id', header: 'Category' },
        {
          field: 'stock_qty',
          header: 'Stock Qty'
        }, // { field: 'buying_price', header: 'Buying Price' },
        // { field: 'selling_price', header: 'Selling Price' },
        // { field: 'product_details', header: 'Product Details' },
        // { field: 'unit_details_id', header: 'Unit' },
        // { field: 'updatedAt', header: 'Updated Date' },
        {
          field: 'status',
          header: 'Status'
        } // { field: '', header: 'Action' }
        ];
      }

      _createClass2(BarcodeGenerateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStocksByCompany",
        value: function getStocksByCompany() {
          var _this5 = this;

          this.loading = true;
          this.stockService.getStockByCompany().subscribe(function (data) {
            console.log('stocksList', data);
            _this5.stocksList = data;
            _this5.loading = false;
          });
        }
      }]);

      return BarcodeGenerateComponent;
    }();

    BarcodeGenerateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }];
    };

    BarcodeGenerateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-barcode-generate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barcode-generate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./barcode-generate.component.scss */
      "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], BarcodeGenerateComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: BarcodeGenerateModule */

  /***/
  function srcAppComponentInventoryMngtSettingsBarcodeGenerateBarcodeGenerateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarcodeGenerateModule", function () {
      return BarcodeGenerateModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _barcode_generate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./barcode-generate-routing.module */
    "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate-routing.module.ts");
    /* harmony import */


    var _barcode_generate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./barcode-generate.component */
    "./src/app/component/inventory-mngt/settings/barcode-generate/barcode-generate.component.ts");
    /* harmony import */


    var ngx_barcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-barcode */
    "./node_modules/ngx-barcode/index.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);

    var BarcodeGenerateModule = function BarcodeGenerateModule() {
      _classCallCheck2(this, BarcodeGenerateModule);
    };

    BarcodeGenerateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_barcode_generate_component__WEBPACK_IMPORTED_MODULE_4__["BarcodeGenerateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _barcode_generate_routing_module__WEBPACK_IMPORTED_MODULE_3__["BarcodeGenerateRoutingModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_5__["NgxBarcodeModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__["ProgressSpinnerModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_card__WEBPACK_IMPORTED_MODULE_8__["CardModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"]]
    })], BarcodeGenerateModule);
    /***/
  },

  /***/
  "./src/app/shared/common.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/common.service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(httpClient) {
        _classCallCheck2(this, CommonService);

        this.httpClient = httpClient;
      }

      _createClass2(CommonService, [{
        key: "leftPad",
        value: function leftPad(type, number, targetLength) {
          var output = number + '';

          while (output.length < targetLength) {
            output = '0' + output;
          }

          return type + '-' + output;
        }
      }, {
        key: "incrCode",
        value: function incrCode(type, count) {
          var cCode = Number(count) + 1;
          console.log('cCode', cCode);
          return this.leftPad(type, cCode, 4);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CommonService);
    /***/
  },

  /***/
  "./src/app/shared/stock.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/stock.service.ts ***!
    \*****************************************/

  /*! exports provided: StockService */

  /***/
  function srcAppSharedStockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockService", function () {
      return StockService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var StockService = /*#__PURE__*/function () {
      function StockService(httpClient, sessionService) {
        _classCallCheck2(this, StockService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass2(StockService, [{
        key: "getStock",
        value: function getStock() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock');
        }
      }, {
        key: "getStockByCompany",
        value: function getStockByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "getStockByCompanySlug",
        value: function getStockByCompanySlug() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-slug/' + this.sessionService.getItem('slug'));
        }
      }, {
        key: "getStockByCompanyActive",
        value: function getStockByCompanyActive() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-active/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addStock",
        value: function addStock(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateStock",
        value: function updateStock(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteStock",
        value: function deleteStock(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + id);
        }
      }]);

      return StockService;
    }();

    StockService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], StockService);
    /***/
  }
}]);
//# sourceMappingURL=component-inventory-mngt-settings-barcode-generate-barcode-generate-module-es5.js.map