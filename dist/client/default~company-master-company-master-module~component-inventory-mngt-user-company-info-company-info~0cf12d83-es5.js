function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-master-company-master-module~component-inventory-mngt-user-company-info-company-info~0cf12d83"], {
  /***/
  "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js ***!
    \***************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxGooglePlacesAutocompleteBundlesNgxGooglePlacesAutocompleteUmdJs(module, exports, __webpack_require__) {
    (function (global, factory) {
      true ? factory(exports, __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js")) : undefined;
    })(this, function (exports, _angular_core) {
      'use strict';

      var Options = function () {
        /**
         * @param {?=} opt
         */
        function Options(opt) {
          if (!opt) return;
          Object.assign(this, opt);
        }

        return Options;
      }();

      var GooglePlaceDirective = function () {
        /**
         * @param {?} el
         * @param {?} ngZone
         */
        function GooglePlaceDirective(el, ngZone) {
          this.el = el;
          this.ngZone = ngZone;
          this.onAddressChange = new _angular_core.EventEmitter();
        }
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.ngAfterViewInit = function () {
          if (!this.options) this.options = new Options();
          this.initialize();
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.isGoogleLibExists = function () {
          return !(!google || !google.maps || !google.maps.places);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.initialize = function () {
          var _this = this;

          if (!this.isGoogleLibExists()) throw new Error("Google maps library can not be found");
          this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
          if (!this.autocomplete) throw new Error("Autocomplete is not initialized");

          if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
              _this.handleChangeEvent();
            });
          }

          this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
              return;
            }

            var
            /** @type {?} */
            key = event.key.toLowerCase();

            if (key == 'enter' && event.target === _this.el.nativeElement) {
              event.preventDefault();
              event.stopPropagation();
            }
          }); // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487

          if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
              var
              /** @type {?} */
              containers = document.getElementsByClassName('pac-container');

              if (containers) {
                var
                /** @type {?} */
                arr = Array.from(containers);

                if (arr) {
                  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var container = arr_1[_i];
                    if (!container) continue;
                    container.addEventListener('touchend', function (e) {
                      e.stopImmediatePropagation();
                    });
                  }
                }
              }
            }, 500);
          }
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.reset = function () {
          this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);
          this.autocomplete.setTypes(this.options.types);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.handleChangeEvent = function () {
          var _this = this;

          this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();

            if (_this.place && _this.place.place_id) {
              _this.onAddressChange.emit(_this.place);
            }
          });
        };

        GooglePlaceDirective.decorators = [{
          type: _angular_core.Directive,
          args: [{
            selector: '[ngx-google-places-autocomplete]',
            exportAs: 'ngx-places'
          }]
        }];
        /**
         * @nocollapse
         */

        GooglePlaceDirective.ctorParameters = function () {
          return [{
            type: _angular_core.ElementRef
          }, {
            type: _angular_core.NgZone
          }];
        };

        GooglePlaceDirective.propDecorators = {
          'options': [{
            type: _angular_core.Input,
            args: ['options']
          }],
          'onAddressChange': [{
            type: _angular_core.Output
          }]
        };
        return GooglePlaceDirective;
      }();

      var GooglePlaceModule = function () {
        function GooglePlaceModule() {}

        GooglePlaceModule.decorators = [{
          type: _angular_core.NgModule,
          args: [{
            declarations: [GooglePlaceDirective],
            exports: [GooglePlaceDirective]
          }]
        }];
        /**
         * @nocollapse
         */

        GooglePlaceModule.ctorParameters = function () {
          return [];
        };

        return GooglePlaceModule;
      }();

      exports.GooglePlaceModule = GooglePlaceModule;
      exports.GooglePlaceDirective = GooglePlaceDirective;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
    /***/

  },

  /***/
  "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js ***!
    \**********************************************************************/

  /*! exports provided: ImageCropperComponent, ImageCropperModule */

  /***/
  function node_modulesNgxImageCropperFesm2015NgxImageCropperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
      return ImageCropperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function () {
      return ImageCropperModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} exifRotationOrBase64Image
     * @return {?}
     */


    function getTransformationsFromExifRotation(exifRotationOrBase64Image) {
      if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
      }

      switch (exifRotationOrBase64Image) {
        case 2:
          return {
            rotation: 0,
            flipH: true,
            flipV: false
          };

        case 3:
          return {
            rotation: 2,
            flipH: false,
            flipV: false
          };

        case 4:
          return {
            rotation: 2,
            flipH: true,
            flipV: false
          };

        case 5:
          return {
            rotation: 1,
            flipH: true,
            flipV: false
          };

        case 6:
          return {
            rotation: 1,
            flipH: false,
            flipV: false
          };

        case 7:
          return {
            rotation: 3,
            flipH: true,
            flipV: false
          };

        case 8:
          return {
            rotation: 3,
            flipH: false,
            flipV: false
          };

        default:
          return {
            rotation: 0,
            flipH: false,
            flipV: false
          };
      }
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */


    function getExifRotation(imageBase64) {
      /** @type {?} */
      var view = new DataView(base64ToArrayBuffer(imageBase64));

      if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
      }
      /** @type {?} */


      var length = view.byteLength;
      /** @type {?} */

      var offset = 2;

      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return -1;
        /** @type {?} */

        var marker = view.getUint16(offset, false);
        offset += 2;

        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) {
            return -1;
          }
          /** @type {?} */


          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          /** @type {?} */

          var tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) == 0x0112) {
              return view.getUint16(offset + i * 12 + 8, little);
            }
          }
        } else if ((marker & 0xFF00) != 0xFF00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }

      return -1;
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */


    function base64ToArrayBuffer(imageBase64) {
      imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
      /** @type {?} */

      var binaryString = atob(imageBase64);
      /** @type {?} */

      var len = binaryString.length;
      /** @type {?} */

      var bytes = new Uint8Array(len);

      for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return bytes.buffer;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*
     * Hermite resize - fast image resize/resample using Hermite filter.
     * https://github.com/viliusle/Hermite-resize
     */

    /**
     * @param {?} canvas
     * @param {?} width
     * @param {?} height
     * @param {?=} resizeCanvas
     * @return {?}
     */


    function resizeCanvas(canvas, width, height) {
      var resizeCanvas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      /** @type {?} */
      var width_source = canvas.width;
      /** @type {?} */

      var height_source = canvas.height;
      width = Math.round(width);
      height = Math.round(height);
      /** @type {?} */

      var ratio_w = width_source / width;
      /** @type {?} */

      var ratio_h = height_source / height;
      /** @type {?} */

      var ratio_w_half = Math.ceil(ratio_w / 2);
      /** @type {?} */

      var ratio_h_half = Math.ceil(ratio_h / 2);
      /** @type {?} */

      var ctx = canvas.getContext('2d');

      if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */

        var img2 = ctx.createImageData(width, height);
        /** @type {?} */

        var data = img.data;
        /** @type {?} */

        var data2 = img2.data;

        for (var j = 0; j < height; j++) {
          for (var i = 0; i < width; i++) {
            /** @type {?} */
            var x2 = (i + j * width) * 4;
            /** @type {?} */

            var center_y = j * ratio_h;
            /** @type {?} */

            var weight = 0;
            /** @type {?} */

            var weights = 0;
            /** @type {?} */

            var weights_alpha = 0;
            /** @type {?} */

            var gx_r = 0;
            /** @type {?} */

            var gx_g = 0;
            /** @type {?} */

            var gx_b = 0;
            /** @type {?} */

            var gx_a = 0;
            /** @type {?} */

            var xx_start = Math.floor(i * ratio_w);
            /** @type {?} */

            var yy_start = Math.floor(j * ratio_h);
            /** @type {?} */

            var xx_stop = Math.ceil((i + 1) * ratio_w);
            /** @type {?} */

            var yy_stop = Math.ceil((j + 1) * ratio_h);
            xx_stop = Math.min(xx_stop, width_source);
            yy_stop = Math.min(yy_stop, height_source);

            for (var yy = yy_start; yy < yy_stop; yy++) {
              /** @type {?} */
              var dy = Math.abs(center_y - yy) / ratio_h_half;
              /** @type {?} */

              var center_x = i * ratio_w;
              /** @type {?} */

              var w0 = dy * dy;

              for (var xx = xx_start; xx < xx_stop; xx++) {
                /** @type {?} */
                var dx = Math.abs(center_x - xx) / ratio_w_half;
                /** @type {?} */

                var w = Math.sqrt(w0 + dx * dx);

                if (w >= 1) {
                  //pixel too far
                  continue;
                } //hermite filter


                weight = 2 * w * w * w - 3 * w * w + 1;
                /** @type {?} */

                var pos_x = 4 * (xx + yy * width_source); //alpha

                gx_a += weight * data[pos_x + 3];
                weights_alpha += weight; //colors

                if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
                gx_r += weight * data[pos_x];
                gx_g += weight * data[pos_x + 1];
                gx_b += weight * data[pos_x + 2];
                weights += weight;
              }
            }

            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
          }
        } //clear and resize canvas


        if (resizeCanvas) {
          canvas.width = width;
          canvas.height = height;
        } else {
          ctx.clearRect(0, 0, width_source, height_source);
        } //draw


        ctx.putImageData(img2, 0, 0);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ImageCropperComponent = /*#__PURE__*/function () {
      /**
       * @param {?} sanitizer
       * @param {?} cd
       * @param {?} zone
       */
      function ImageCropperComponent(sanitizer, cd, zone) {
        _classCallCheck(this, ImageCropperComponent);

        this.sanitizer = sanitizer;
        this.cd = cd;
        this.zone = zone;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.stepSize = 3;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.outputType = 'base64';
        this.maintainAspectRatio = true;
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.containWithinAspectRatio = false;
        this.cropper = {
          x1: -100,
          y1: -100,
          x2: 10000,
          y2: 10000
        };
        this.alignImage = 'center';
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCropper();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(ImageCropperComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (this.originalImage && this.originalImage.complete && changes.containWithinAspectRatio) {
            this.transformOriginalImage();
          }

          if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
          }

          if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stepSize = this.initialStepSize;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "initCropper",
        value: function initCropper() {
          this.imageVisible = false;
          this.transformedImage = null;
          this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
          this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
          };
          this.maxSize = {
            width: 0,
            height: 0
          };
          this.originalSize = {
            width: 0,
            height: 0
          };
          this.transformedSize = {
            width: 0,
            height: 0
          };
          this.transformations = {
            rotation: 0,
            flipH: false,
            flipV: false
          };
          this.cropper.x1 = -100;
          this.cropper.y1 = -100;
          this.cropper.x2 = 10000;
          this.cropper.y2 = 10000;
        }
        /**
         * @private
         * @param {?} file
         * @return {?}
         */

      }, {
        key: "loadImageFile",
        value: function loadImageFile(file) {
          var _this2 = this;

          /** @type {?} */
          var fileReader = new FileReader();

          fileReader.onload =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var imageType = file.type;

            if (_this2.isValidImageType(imageType)) {
              _this2.checkExifAndLoadBase64Image(event.target.result);
            } else {
              _this2.loadImageFailed.emit();
            }
          };

          fileReader.readAsDataURL(file);
        }
        /**
         * @private
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "isValidImageType",
        value: function isValidImageType(type) {
          return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
        }
        /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */

      }, {
        key: "checkExifAndLoadBase64Image",
        value: function checkExifAndLoadBase64Image(imageBase64) {
          var _this3 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            /** @type {?} */
            var fail =
            /**
            * @param {?=} ex
            * @return {?}
            */
            function fail(ex) {
              _this3.originalImage = null;
              _this3.originalBase64 = null;
              reject(ex);
            };

            _this3.originalImage = new Image();

            _this3.originalImage.onload =
            /**
            * @return {?}
            */
            function () {
              _this3.originalBase64 = imageBase64;
              _this3.transformations = getTransformationsFromExifRotation(imageBase64);
              _this3.originalSize.width = _this3.originalImage.naturalWidth;
              _this3.originalSize.height = _this3.originalImage.naturalHeight;

              _this3.transformOriginalImage().then(
              /**
              * @return {?}
              */
              function () {
                return resolve();
              }).catch(fail);
            };

            _this3.originalImage.onerror = fail;
            _this3.originalImage.src = imageBase64;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkRotation",
        value: function checkRotation() {
          if (this.transformations.rotation < 0) {
            this.transformations.rotation += 4;
          }

          this.transformations.rotation = this.transformations.rotation % 4;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getTransformedSize",
        value: function getTransformedSize() {
          if (this.containWithinAspectRatio) {
            if (this.transformations.rotation % 2) {
              /** @type {?} */
              var minWidthToContain = this.originalSize.width * this.aspectRatio;
              /** @type {?} */

              var minHeightToContain = this.originalSize.height / this.aspectRatio;
              return {
                width: Math.max(this.originalSize.height, minWidthToContain),
                height: Math.max(this.originalSize.width, minHeightToContain)
              };
            } else {
              /** @type {?} */
              var _minWidthToContain = this.originalSize.height * this.aspectRatio;
              /** @type {?} */


              var _minHeightToContain = this.originalSize.width / this.aspectRatio;

              return {
                width: Math.max(this.originalSize.width, _minWidthToContain),
                height: Math.max(this.originalSize.height, _minHeightToContain)
              };
            }
          }

          if (this.transformations.rotation % 2) {
            return {
              height: this.originalSize.width,
              width: this.originalSize.height
            };
          }

          return {
            width: this.originalSize.width,
            height: this.originalSize.height
          };
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "transformImageBase64",
        value: function transformImageBase64() {
          this.checkRotation();
          /** @type {?} */

          var transformedSize = this.getTransformedSize();
          /** @type {?} */

          var canvas = document.createElement('canvas');
          canvas.width = transformedSize.width;
          canvas.height = transformedSize.height;
          /** @type {?} */

          var ctx = canvas.getContext('2d');
          ctx.setTransform(this.transformations.flipH ? -1 : 1, 0, 0, this.transformations.flipV ? -1 : 1, canvas.width / 2, canvas.height / 2);
          ctx.rotate(Math.PI * (this.transformations.rotation / 2));
          ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
          return Promise.resolve(canvas.toDataURL());
        }
        /**
         * @private
         * @param {?} transformedBase64
         * @return {?}
         */

      }, {
        key: "setTransformedImage",
        value: function setTransformedImage(transformedBase64) {
          var _this4 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            _this4.transformedBase64 = transformedBase64;
            _this4.safeImgDataUrl = _this4.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
            _this4.transformedImage = new Image();

            _this4.transformedImage.onload =
            /**
            * @return {?}
            */
            function () {
              _this4.transformedSize.width = _this4.transformedImage.naturalWidth;
              _this4.transformedSize.height = _this4.transformedImage.naturalHeight;
              resolve();

              _this4.cd.markForCheck();
            };

            _this4.transformedImage.onerror =
            /**
            * @return {?}
            */
            function () {
              _this4.transformedImage = null;
              reject();
            };

            _this4.transformedImage.src = _this4.transformedBase64;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "transformOriginalImage",
        value: function transformOriginalImage() {
          var _this5 = this;

          if (!this.originalImage || !this.originalImage.complete) {
            return Promise.reject(new Error('No Image Loaded'));
          }

          return this.transformImageBase64().then(
          /**
          * @param {?} transformedBase64
          * @return {?}
          */
          function (transformedBase64) {
            return _this5.setTransformedImage(transformedBase64);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "imageLoadedInView",
        value: function imageLoadedInView() {
          var _this6 = this;

          if (this.transformedImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this6.checkImageMaxSizeRecursively();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkImageMaxSizeRecursively",
        value: function checkImageMaxSizeRecursively() {
          var _this7 = this;

          if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
          } else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object.assign({}, this.maxSize));
            this.cd.markForCheck();
          } else {
            this.setImageMaxSizeRetries++;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this7.checkImageMaxSizeRecursively();
            }, 50);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onResize",
        value: function onResize() {
          this.resizeCropperPosition();
          this.setMaxSize();
          this.setCropperScaledMinSize();
        }
        /**
         * @return {?}
         */

      }, {
        key: "rotateLeft",
        value: function rotateLeft() {
          this.transformations.rotation--;
          this.flipAfterRotate();
          return this.transformOriginalImage();
        }
        /**
         * @return {?}
         */

      }, {
        key: "rotateRight",
        value: function rotateRight() {
          this.transformations.rotation++;
          this.flipAfterRotate();
          return this.transformOriginalImage();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "flipAfterRotate",
        value: function flipAfterRotate() {
          /** @type {?} */
          var flippedH = this.transformations.flipH;
          /** @type {?} */

          var flippedV = this.transformations.flipV;
          this.transformations.flipH = flippedV;
          this.transformations.flipV = flippedH;
        }
        /**
         * @return {?}
         */

      }, {
        key: "flipHorizontal",
        value: function flipHorizontal() {
          this.transformations.flipH = !this.transformations.flipH;
          return this.transformOriginalImage();
        }
        /**
         * @return {?}
         */

      }, {
        key: "flipVertical",
        value: function flipVertical() {
          this.transformations.flipV = !this.transformations.flipV;
          return this.transformOriginalImage();
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetImage",
        value: function resetImage() {
          this.imageBase64 = this.originalBase64;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resizeCropperPosition",
        value: function resizeCropperPosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;

          if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resetCropperPosition",
        value: function resetCropperPosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;

          if (!this.maintainAspectRatio) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
          } else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            /** @type {?} */

            var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
          } else {
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
            /** @type {?} */

            var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
          }

          this.doAutoCrop();
          this.imageVisible = true;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "keyboardAccess",
        value: function keyboardAccess(event) {
          this.changeKeyboardStepSize(event);
          this.keyboardMoveCropper(event);
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeKeyboardStepSize",
        value: function changeKeyboardStepSize(event) {
          if (event.key >= '1' && event.key <= '9') {
            this.stepSize = +event.key;
            return;
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "keyboardMoveCropper",
        value: function keyboardMoveCropper(event) {
          /** @type {?} */
          var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

          if (!keyboardWhiteList.includes(event.key)) {
            return;
          }
          /** @type {?} */


          var moveType = event.shiftKey ? 'resize' : 'move';
          /** @type {?} */

          var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
          /** @type {?} */

          var moveEvent = this.getEventForKey(event.key, this.stepSize);
          event.preventDefault();
          event.stopPropagation();
          this.startMove({
            clientX: 0,
            clientY: 0
          }, moveType, position);
          this.moveImg(moveEvent);
          this.moveStop();
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getPositionForKey",
        value: function getPositionForKey(key) {
          switch (key) {
            case 'ArrowUp':
              return 'top';

            case 'ArrowRight':
              return 'right';

            case 'ArrowDown':
              return 'bottom';

            case 'ArrowLeft':
            default:
              return 'left';
          }
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getInvertedPositionForKey",
        value: function getInvertedPositionForKey(key) {
          switch (key) {
            case 'ArrowUp':
              return 'bottom';

            case 'ArrowRight':
              return 'left';

            case 'ArrowDown':
              return 'top';

            case 'ArrowLeft':
            default:
              return 'right';
          }
        }
        /**
         * @private
         * @param {?} key
         * @param {?} stepSize
         * @return {?}
         */

      }, {
        key: "getEventForKey",
        value: function getEventForKey(key, stepSize) {
          switch (key) {
            case 'ArrowUp':
              return {
                clientX: 0,
                clientY: stepSize * -1
              };

            case 'ArrowRight':
              return {
                clientX: stepSize,
                clientY: 0
              };

            case 'ArrowDown':
              return {
                clientX: 0,
                clientY: stepSize
              };

            case 'ArrowLeft':
            default:
              return {
                clientX: stepSize * -1,
                clientY: 0
              };
          }
        }
        /**
         * @param {?} event
         * @param {?} moveType
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "startMove",
        value: function startMove(event, moveType) {
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.moveStart = Object.assign({
            active: true,
            type: moveType,
            position: position,
            clientX: this.getClientX(event),
            clientY: this.getClientY(event)
          }, this.cropper);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "moveImg",
        value: function moveImg(event) {
          if (this.moveStart.active) {
            if (event.stopPropagation) {
              event.stopPropagation();
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            if (this.moveStart.type === 'move') {
              this.move(event);
              this.checkCropperPosition(true);
            } else if (this.moveStart.type === 'resize') {
              this.resize(event);
              this.checkCropperPosition(false);
            }

            this.cd.detectChanges();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setMaxSize",
        value: function setMaxSize() {
          if (this.sourceImage) {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinSize",
        value: function setCropperScaledMinSize() {
          if (this.transformedImage) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
          } else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinWidth",
        value: function setCropperScaledMinWidth() {
          this.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width) : 20;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinHeight",
        value: function setCropperScaledMinHeight() {
          if (this.maintainAspectRatio) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
          } else if (this.cropperMinHeight > 0) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
          } else {
            this.cropperScaledMinHeight = 20;
          }
        }
        /**
         * @private
         * @param {?=} maintainSize
         * @return {?}
         */

      }, {
        key: "checkCropperPosition",
        value: function checkCropperPosition() {
          var maintainSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
          }

          if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
          }

          if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
            this.cropper.x2 = this.maxSize.width;
          }

          if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
            this.cropper.y2 = this.maxSize.height;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "moveStop",
        value: function moveStop() {
          if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "move",
        value: function move(event) {
          /** @type {?} */
          var diffX = this.getClientX(event) - this.moveStart.clientX;
          /** @type {?} */

          var diffY = this.getClientY(event) - this.moveStart.clientY;
          this.cropper.x1 = this.moveStart.x1 + diffX;
          this.cropper.y1 = this.moveStart.y1 + diffY;
          this.cropper.x2 = this.moveStart.x2 + diffX;
          this.cropper.y2 = this.moveStart.y2 + diffY;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "resize",
        value: function resize(event) {
          /** @type {?} */
          var diffX = this.getClientX(event) - this.moveStart.clientX;
          /** @type {?} */

          var diffY = this.getClientY(event) - this.moveStart.clientY;

          switch (this.moveStart.position) {
            case 'left':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              break;

            case 'topleft':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'top':
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'topright':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'right':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              break;

            case 'bottomright':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;

            case 'bottom':
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;

            case 'bottomleft':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;
          }

          if (this.maintainAspectRatio) {
            this.checkAspectRatio();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkAspectRatio",
        value: function checkAspectRatio() {
          /** @type {?} */
          var overflowX = 0;
          /** @type {?} */

          var overflowY = 0;

          switch (this.moveStart.position) {
            case 'top':
              this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'bottom':
              this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'topleft':
              this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(0 - this.cropper.x1, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'topright':
              this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'right':
            case 'bottomright':
              this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'left':
            case 'bottomleft':
              this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(0 - this.cropper.x1, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "doAutoCrop",
        value: function doAutoCrop() {
          if (this.autoCrop) {
            this.crop();
          }
        }
        /**
         * @param {?=} outputType
         * @return {?}
         */

      }, {
        key: "crop",
        value: function crop() {
          var outputType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputType;

          if (this.sourceImage.nativeElement && this.transformedImage != null) {
            this.startCropImage.emit();
            /** @type {?} */

            var imagePosition = this.getImagePosition();
            /** @type {?} */

            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */

            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */

            var cropCanvas =
            /** @type {?} */
            document.createElement('canvas');
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */

            var ctx = cropCanvas.getContext('2d');

            if (ctx) {
              if (this.backgroundColor != null) {
                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, width, height);
              }

              ctx.drawImage(this.transformedImage, imagePosition.x1, imagePosition.y1, width, height, 0, 0, width, height);
              /** @type {?} */

              var output = {
                width: width,
                height: height,
                imagePosition: imagePosition,
                cropperPosition: Object.assign({}, this.cropper),
                transform: Object.assign({}, this.transformations)
              };

              if (this.containWithinAspectRatio) {
                output.offsetImagePosition = this.getOffsetImagePosition();
              }
              /** @type {?} */


              var resizeRatio = this.getResizeRatio(width, height);

              if (resizeRatio !== 1) {
                output.width = Math.round(width * resizeRatio);
                output.height = this.maintainAspectRatio ? Math.round(output.width / this.aspectRatio) : Math.round(height * resizeRatio);
                resizeCanvas(cropCanvas, output.width, output.height);
              }

              return this.cropToOutputType(outputType, cropCanvas, output);
            }
          }

          return null;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getImagePosition",
        value: function getImagePosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;
          /** @type {?} */

          var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
          /** @type {?} */

          var out = {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.round(this.cropper.x2 * ratio),
            y2: Math.round(this.cropper.y2 * ratio)
          };

          if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
          }

          return out;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getOffsetImagePosition",
        value: function getOffsetImagePosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;
          /** @type {?} */

          var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
          /** @type {?} */

          var offsetX;
          /** @type {?} */

          var offsetY;

          if (this.transformations.rotation % 2) {
            offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
          } else {
            offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
          }
          /** @type {?} */


          var out = {
            x1: Math.round(this.cropper.x1 * ratio) - offsetX,
            y1: Math.round(this.cropper.y1 * ratio) - offsetY,
            x2: Math.round(this.cropper.x2 * ratio) - offsetX,
            y2: Math.round(this.cropper.y2 * ratio) - offsetY
          };

          if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
          }

          return out;
        }
        /**
         * @private
         * @param {?} outputType
         * @param {?} cropCanvas
         * @param {?} output
         * @return {?}
         */

      }, {
        key: "cropToOutputType",
        value: function cropToOutputType(outputType, cropCanvas, output) {
          var _this8 = this;

          switch (outputType) {
            case 'file':
              return this.cropToFile(cropCanvas).then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                output.file = result;

                _this8.imageCropped.emit(output);

                return output;
              });

            case 'both':
              output.base64 = this.cropToBase64(cropCanvas);
              return this.cropToFile(cropCanvas).then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                output.file = result;

                _this8.imageCropped.emit(output);

                return output;
              });

            default:
              output.base64 = this.cropToBase64(cropCanvas);
              this.imageCropped.emit(output);
              return output;
          }
        }
        /**
         * @private
         * @param {?} cropCanvas
         * @return {?}
         */

      }, {
        key: "cropToBase64",
        value: function cropToBase64(cropCanvas) {
          return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        }
        /**
         * @private
         * @param {?} cropCanvas
         * @return {?}
         */

      }, {
        key: "cropToFile",
        value: function cropToFile(cropCanvas) {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            cropCanvas.toBlob(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this9.zone.run(
              /**
              * @return {?}
              */
              function () {
                return resolve(result);
              });
            }, 'image/' + _this9.format, _this9.getQuality());
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getQuality",
        value: function getQuality() {
          return Math.min(1, Math.max(0, this.imageQuality / 100));
        }
        /**
         * @private
         * @param {?} width
         * @param {?} height
         * @return {?}
         */

      }, {
        key: "getResizeRatio",
        value: function getResizeRatio(width, height) {
          if (this.resizeToWidth > 0) {
            if (!this.onlyScaleDown || width > this.resizeToWidth) {
              return this.resizeToWidth / width;
            }
          } else if (this.resizeToHeight > 0) {
            if (!this.onlyScaleDown || height > this.resizeToHeight) {
              return this.resizeToHeight / height;
            }
          }

          return 1;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "getClientX",
        value: function getClientX(event) {
          return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "getClientY",
        value: function getClientY(event) {
          return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
        }
      }, {
        key: "imageChangedEvent",
        set: function set(event) {
          this.initCropper();

          if (event && event.target && event.target.files && event.target.files.length > 0) {
            this.loadImageFile(event.target.files[0]);
          }
        }
        /**
         * @param {?} imageBase64
         * @return {?}
         */

      }, {
        key: "imageBase64",
        set: function set(imageBase64) {
          this.initCropper();
          this.checkExifAndLoadBase64Image(imageBase64);
        }
        /**
         * @param {?} file
         * @return {?}
         */

      }, {
        key: "imageFile",
        set: function set(file) {
          this.initCropper();

          if (file) {
            this.loadImageFile(file);
          }
        }
      }]);

      return ImageCropperComponent;
    }();

    ImageCropperComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'image-cropper',
        template: "<div [style.background]=\"imageVisible && backgroundColor\">\n    <img\n        #sourceImage\n        class=\"source-image\"\n        *ngIf=\"safeImgDataUrl\"\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        (load)=\"imageLoadedInView()\"\n    />\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         tabindex=\"0\"\n         (keydown)=\"keyboardAccess($event)\"\n    >\n        <div\n                (mousedown)=\"startMove($event, 'move')\"\n                (touchstart)=\"startMove($event, 'move')\"\n                class=\"move\"\n        >&nbsp;</div>\n        <span\n                class=\"resize topleft\"\n                (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize topright\"\n                (mousedown)=\"startMove($event, 'resize', 'topright')\"\n                (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomright\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomleft\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize-bar top\"\n                (mousedown)=\"startMove($event, 'resize', 'top')\"\n                (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n                class=\"resize-bar right\"\n                (mousedown)=\"startMove($event, 'resize', 'right')\"\n                (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n                class=\"resize-bar bottom\"\n                (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n                class=\"resize-bar left\"\n                (mousedown)=\"startMove($event, 'resize', 'left')\"\n                (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div img.source-image{max-width:100%;max-height:100%}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
      }]
    }];
    /** @nocollapse */

    ImageCropperComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    ImageCropperComponent.propDecorators = {
      sourceImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sourceImage', {
          static: false
        }]
      }],
      imageChangedEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageBase64: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageFile: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outputType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maintainAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      aspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizeToWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizeToHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropperMinWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropperMinHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialStepSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      roundCropper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onlyScaleDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageQuality: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoCrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      containWithinAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      alignImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.text-align']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.disabled']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageCropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      startCropImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      imageLoaded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      cropperReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      loadImageFailed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }],
      moveImg: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:mousemove', ['$event']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:touchmove', ['$event']]
      }],
      moveStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:mouseup']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:touchend']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ImageCropperModule = function ImageCropperModule() {
      _classCallCheck(this, ImageCropperModule);
    };

    ImageCropperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [ImageCropperComponent],
        exports: [ImageCropperComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-image-cropper.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~company-master-company-master-module~component-inventory-mngt-user-company-info-company-info~0cf12d83-es5.js.map