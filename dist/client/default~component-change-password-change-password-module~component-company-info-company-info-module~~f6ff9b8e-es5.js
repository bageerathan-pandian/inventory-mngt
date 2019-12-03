function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default~component-change-password-change-password-module~component-company-info-company-info-module~~f6ff9b8e"],{/***/"./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js":/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js ***!
  \***************************************************************************************************/ /*! no static exports found */ /***/function node_modulesNgxGooglePlacesAutocompleteBundlesNgxGooglePlacesAutocompleteUmdJs(module,exports,__webpack_require__){(function(global,factory){true?factory(exports,__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js")):undefined})(this,function(exports,_angular_core){'use strict';var Options=function(){/**
     * @param {?=} opt
     */function Options(opt){if(!opt)return;Object.assign(this,opt)}return Options}();var GooglePlaceDirective=function(){/**
     * @param {?} el
     * @param {?} ngZone
     */function GooglePlaceDirective(el,ngZone){this.el=el;this.ngZone=ngZone;this.onAddressChange=new _angular_core.EventEmitter}/**
     * @return {?}
     */GooglePlaceDirective.prototype.ngAfterViewInit=function(){if(!this.options)this.options=new Options;this.initialize()};/**
     * @return {?}
     */GooglePlaceDirective.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)};/**
     * @return {?}
     */GooglePlaceDirective.prototype.initialize=function(){var _this=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options);if(!this.autocomplete)throw new Error("Autocomplete is not initialized");if(!this.autocomplete.addListener!=null){this.eventListener=this.autocomplete.addListener("place_changed",function(){_this.handleChangeEvent()})}this.el.nativeElement.addEventListener("keydown",function(event){if(!event.key){return}var/** @type {?} */key=event.key.toLowerCase();if(key=="enter"&&event.target===_this.el.nativeElement){event.preventDefault();event.stopPropagation()}});// according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487
if(window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)){setTimeout(function(){var/** @type {?} */containers=document.getElementsByClassName("pac-container");if(containers){var/** @type {?} */arr=Array.from(containers);if(arr){for(var _i=0,arr_1=arr;_i<arr_1.length;_i++){var container=arr_1[_i];if(!container)continue;container.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}}},500)}};/**
     * @return {?}
     */GooglePlaceDirective.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);this.autocomplete.setTypes(this.options.types)};/**
     * @return {?}
     */GooglePlaceDirective.prototype.handleChangeEvent=function(){var _this=this;this.ngZone.run(function(){_this.place=_this.autocomplete.getPlace();if(_this.place&&_this.place.place_id){_this.onAddressChange.emit(_this.place)}})};GooglePlaceDirective.decorators=[{type:_angular_core.Directive,args:[{selector:"[ngx-google-places-autocomplete]",exportAs:"ngx-places"}]}];/**
     * @nocollapse
     */GooglePlaceDirective.ctorParameters=function(){return[{type:_angular_core.ElementRef},{type:_angular_core.NgZone}]};GooglePlaceDirective.propDecorators={"options":[{type:_angular_core.Input,args:["options"]}],"onAddressChange":[{type:_angular_core.Output}]};return GooglePlaceDirective}();var GooglePlaceModule=function(){function GooglePlaceModule(){}GooglePlaceModule.decorators=[{type:_angular_core.NgModule,args:[{declarations:[GooglePlaceDirective],exports:[GooglePlaceDirective]}]}];/**
     * @nocollapse
     */GooglePlaceModule.ctorParameters=function(){return[]};return GooglePlaceModule}();exports.GooglePlaceModule=GooglePlaceModule;exports.GooglePlaceDirective=GooglePlaceDirective;Object.defineProperty(exports,"__esModule",{value:true})});/***/},/***/"./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js":/*!**********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js ***!
  \**********************************************************************/ /*! exports provided: ImageCropperComponent, ImageCropperModule */ /***/function node_modulesNgxImageCropperFesm2015NgxImageCropperJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ImageCropperComponent",function(){return ImageCropperComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ImageCropperModule",function(){return ImageCropperModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} srcBase64
 * @return {?}
 */function resetExifOrientation(srcBase64){try{/** @type {?} */var exifRotation=getExifRotation(srcBase64);if(exifRotation>1){return transformBase64BasedOnExifRotation(srcBase64,exifRotation)}else{return Promise.resolve(srcBase64)}}catch(ex){return Promise.reject(ex)}}/**
 * @param {?} srcBase64
 * @param {?} exifRotation
 * @return {?}
 */function transformBase64BasedOnExifRotation(srcBase64,exifRotation){return new Promise(/**
     * @param {?} resolve
     * @param {?} reject
     * @return {?}
     */function(resolve,reject){/** @type {?} */var img=new Image;img.onload=/**
         * @return {?}
         */function(){/** @type {?} */var width=img.width;/** @type {?} */var height=img.height;/** @type {?} */var canvas=document.createElement("canvas");/** @type {?} */var ctx=canvas.getContext("2d");if(ctx){if(4<exifRotation&&exifRotation<9){canvas.width=height;canvas.height=width}else{canvas.width=width;canvas.height=height}transformCanvas(ctx,exifRotation,width,height);ctx.drawImage(img,0,0);resolve(canvas.toDataURL())}else{reject(new Error("No context"))}};img.src=srcBase64})}/**
 * @param {?} imageBase64
 * @return {?}
 */function getExifRotation(imageBase64){/** @type {?} */var view=new DataView(base64ToArrayBuffer(imageBase64));if(view.getUint16(0,false)!=65496){return-2}/** @type {?} */var length=view.byteLength;/** @type {?} */var offset=2;while(offset<length){if(view.getUint16(offset+2,false)<=8)return-1;/** @type {?} */var marker=view.getUint16(offset,false);offset+=2;if(marker==65505){if(view.getUint32(offset+=2,false)!=1165519206){return-1}/** @type {?} */var little=view.getUint16(offset+=6,false)==18761;offset+=view.getUint32(offset+4,little);/** @type {?} */var tags=view.getUint16(offset,little);offset+=2;for(var i=0;i<tags;i++){if(view.getUint16(offset+i*12,little)==274){return view.getUint16(offset+i*12+8,little)}}}else if((marker&65280)!=65280){break}else{offset+=view.getUint16(offset,false)}}return-1}/**
 * @param {?} imageBase64
 * @return {?}
 */function base64ToArrayBuffer(imageBase64){imageBase64=imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi,"");/** @type {?} */var binaryString=atob(imageBase64);/** @type {?} */var len=binaryString.length;/** @type {?} */var bytes=new Uint8Array(len);for(var i=0;i<len;i++){bytes[i]=binaryString.charCodeAt(i)}return bytes.buffer}/**
 * @param {?} ctx
 * @param {?} orientation
 * @param {?} width
 * @param {?} height
 * @return {?}
 */function transformCanvas(ctx,orientation,width,height){switch(orientation){case 2:ctx.transform(-1,0,0,1,width,0);break;case 3:ctx.transform(-1,0,0,-1,width,height);break;case 4:ctx.transform(1,0,0,-1,0,height);break;case 5:ctx.transform(0,1,1,0,0,0);break;case 6:ctx.transform(0,1,-1,0,height,0);break;case 7:ctx.transform(0,-1,-1,0,height,width);break;case 8:ctx.transform(0,-1,1,0,0,width);break;}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */ /**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @param {?=} resizeCanvas
 * @return {?}
 */function resizeCanvas(canvas,width,height,resizeCanvas){if(resizeCanvas===void 0){resizeCanvas=true}/** @type {?} */var width_source=canvas.width;/** @type {?} */var height_source=canvas.height;width=Math.round(width);height=Math.round(height);/** @type {?} */var ratio_w=width_source/width;/** @type {?} */var ratio_h=height_source/height;/** @type {?} */var ratio_w_half=Math.ceil(ratio_w/2);/** @type {?} */var ratio_h_half=Math.ceil(ratio_h/2);/** @type {?} */var ctx=canvas.getContext("2d");if(ctx){/** @type {?} */var img=ctx.getImageData(0,0,width_source,height_source);/** @type {?} */var img2=ctx.createImageData(width,height);/** @type {?} */var data=img.data;/** @type {?} */var data2=img2.data;for(var j=0;j<height;j++){for(var i=0;i<width;i++){/** @type {?} */var x2=(i+j*width)*4;/** @type {?} */var center_y=j*ratio_h;/** @type {?} */var weight=0;/** @type {?} */var weights=0;/** @type {?} */var weights_alpha=0;/** @type {?} */var gx_r=0;/** @type {?} */var gx_g=0;/** @type {?} */var gx_b=0;/** @type {?} */var gx_a=0;/** @type {?} */var xx_start=Math.floor(i*ratio_w);/** @type {?} */var yy_start=Math.floor(j*ratio_h);/** @type {?} */var xx_stop=Math.ceil((i+1)*ratio_w);/** @type {?} */var yy_stop=Math.ceil((j+1)*ratio_h);xx_stop=Math.min(xx_stop,width_source);yy_stop=Math.min(yy_stop,height_source);for(var yy=yy_start;yy<yy_stop;yy++){/** @type {?} */var dy=Math.abs(center_y-yy)/ratio_h_half;/** @type {?} */var center_x=i*ratio_w;/** @type {?} */var w0=dy*dy;for(var xx=xx_start;xx<xx_stop;xx++){/** @type {?} */var dx=Math.abs(center_x-xx)/ratio_w_half;/** @type {?} */var w=Math.sqrt(w0+dx*dx);if(w>=1){//pixel too far
continue}//hermite filter
weight=2*w*w*w-3*w*w+1;/** @type {?} */var pos_x=4*(xx+yy*width_source);//alpha
gx_a+=weight*data[pos_x+3];weights_alpha+=weight;//colors
if(data[pos_x+3]<255)weight=weight*data[pos_x+3]/250;gx_r+=weight*data[pos_x];gx_g+=weight*data[pos_x+1];gx_b+=weight*data[pos_x+2];weights+=weight}}data2[x2]=gx_r/weights;data2[x2+1]=gx_g/weights;data2[x2+2]=gx_b/weights;data2[x2+3]=gx_a/weights_alpha}}//clear and resize canvas
if(resizeCanvas){canvas.width=width;canvas.height=height}else{ctx.clearRect(0,0,width_source,height_source)}//draw
ctx.putImageData(img2,0,0)}}/**
 * @param {?} srcBase64
 * @param {?} aspectRatio
 * @return {?}
 */function _fitImageToAspectRatio(srcBase64,aspectRatio){return new Promise(/**
     * @param {?} resolve
     * @param {?} reject
     * @return {?}
     */function(resolve,reject){/** @type {?} */var img=new Image;img.onload=/**
         * @return {?}
         */function(){/** @type {?} */var canvas=document.createElement("canvas");/** @type {?} */var ctx=canvas.getContext("2d");if(ctx){/** @type {?} */var minWidthToContain=img.height*aspectRatio;/** @type {?} */var minHeightToContain=img.width/aspectRatio;canvas.width=Math.max(img.width,minWidthToContain);canvas.height=Math.max(img.height,minHeightToContain);/** @type {?} */var dx=(canvas.width-img.width)/2;/** @type {?} */var dy=(canvas.height-img.height)/2;ctx.drawImage(img,dx,dy);resolve(canvas.toDataURL())}else{reject(new Error("No context"))}};img.src=srcBase64})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ImageCropperComponent=/*#__PURE__*/function(){/**
     * @param {?} sanitizer
     * @param {?} cd
     * @param {?} zone
     */function ImageCropperComponent(sanitizer,cd,zone){this.sanitizer=sanitizer;this.cd=cd;this.zone=zone;this.setImageMaxSizeRetries=0;this.cropperScaledMinWidth=20;this.cropperScaledMinHeight=20;this.marginLeft="0px";this.imageVisible=false;this.format="png";this.outputType="base64";this.maintainAspectRatio=true;this.aspectRatio=1;this.resizeToWidth=0;this.resizeToHeight=0;this.cropperMinWidth=0;this.cropperMinHeight=0;this.roundCropper=false;this.onlyScaleDown=false;this.imageQuality=92;this.autoCrop=true;this.containWithinAspectRatio=false;this.cropper={x1:-100,y1:-100,x2:10000,y2:10000};this.alignImage="center";this.imageCropped=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.startCropImage=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.imageLoaded=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.cropperReady=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.loadImageFailed=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.initCropper()}/**
     * @param {?} event
     * @return {?}
     */var _proto=ImageCropperComponent.prototype;/**
     * @param {?} changes
     * @return {?}
     */_proto.ngOnChanges=function ngOnChanges(changes){if(changes.cropper){this.setMaxSize();this.setCropperScaledMinSize();this.checkCropperPosition(false);this.doAutoCrop();this.cd.markForCheck()}if(changes.aspectRatio&&this.imageVisible){this.resetCropperPosition()}}/**
     * @private
     * @return {?}
     */;_proto.initCropper=function initCropper(){this.imageVisible=false;this.originalImage=null;this.safeImgDataUrl="data:image/png;base64,iVBORw0KGg"+"oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU"+"AAarVyFEAAAAASUVORK5CYII=";this.moveStart={active:false,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0};this.maxSize={width:0,height:0};this.originalSize={width:0,height:0};this.cropper.x1=-100;this.cropper.y1=-100;this.cropper.x2=10000;this.cropper.y2=10000}/**
     * @private
     * @param {?} file
     * @return {?}
     */;_proto.loadImageFile=function loadImageFile(file){var _this2=this;/** @type {?} */var fileReader=new FileReader;fileReader.onload=/**
         * @param {?} event
         * @return {?}
         */function(event){/** @type {?} */var imageType=file.type;if(_this2.isValidImageType(imageType)){_this2.checkExifAndLoadBase64Image(event.target.result)}else{_this2.loadImageFailed.emit()}};fileReader.readAsDataURL(file)}/**
     * @private
     * @param {?} type
     * @return {?}
     */;_proto.isValidImageType=function isValidImageType(type){return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type)}/**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */;_proto.checkExifAndLoadBase64Image=function checkExifAndLoadBase64Image(imageBase64){var _this3=this;resetExifOrientation(imageBase64).then(/**
         * @param {?} resultBase64
         * @return {?}
         */function(resultBase64){return _this3.fitImageToAspectRatio(resultBase64)}).then(/**
         * @param {?} resultBase64
         * @return {?}
         */function(resultBase64){return _this3.loadBase64Image(resultBase64)}).catch(/**
         * @return {?}
         */function(){return _this3.loadImageFailed.emit()})}/**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */;_proto.fitImageToAspectRatio=function fitImageToAspectRatio(imageBase64){return this.containWithinAspectRatio?_fitImageToAspectRatio(imageBase64,this.aspectRatio):Promise.resolve(imageBase64)}/**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */;_proto.loadBase64Image=function loadBase64Image(imageBase64){var _this4=this;this.originalBase64=imageBase64;this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);this.originalImage=new Image;this.originalImage.onload=/**
         * @return {?}
         */function(){_this4.originalSize.width=_this4.originalImage.width;_this4.originalSize.height=_this4.originalImage.height;_this4.cd.markForCheck()};this.originalImage.src=imageBase64}/**
     * @return {?}
     */;_proto.imageLoadedInView=function imageLoadedInView(){var _this5=this;if(this.originalImage!=null){this.imageLoaded.emit();this.setImageMaxSizeRetries=0;setTimeout(/**
             * @return {?}
             */function(){return _this5.checkImageMaxSizeRecursively()})}}/**
     * @private
     * @return {?}
     */;_proto.checkImageMaxSizeRecursively=function checkImageMaxSizeRecursively(){var _this6=this;if(this.setImageMaxSizeRetries>40){this.loadImageFailed.emit()}else if(this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0){this.setMaxSize();this.setCropperScaledMinSize();this.resetCropperPosition();this.cropperReady.emit();this.cd.markForCheck()}else{this.setImageMaxSizeRetries++;setTimeout(/**
             * @return {?}
             */function(){_this6.checkImageMaxSizeRecursively()},50)}}/**
     * @return {?}
     */;_proto.onResize=function onResize(){this.resizeCropperPosition();this.setMaxSize();this.setCropperScaledMinSize()}/**
     * @return {?}
     */;_proto.rotateLeft=function rotateLeft(){this.transformBase64(8)}/**
     * @return {?}
     */;_proto.rotateRight=function rotateRight(){this.transformBase64(6)}/**
     * @return {?}
     */;_proto.flipHorizontal=function flipHorizontal(){this.transformBase64(2)}/**
     * @return {?}
     */;_proto.flipVertical=function flipVertical(){this.transformBase64(4)}/**
     * @private
     * @param {?} exifOrientation
     * @return {?}
     */;_proto.transformBase64=function transformBase64(exifOrientation){var _this7=this;if(this.originalBase64){transformBase64BasedOnExifRotation(this.originalBase64,exifOrientation).then(/**
             * @param {?} resultBase64
             * @return {?}
             */function(resultBase64){return _this7.fitImageToAspectRatio(resultBase64)}).then(/**
             * @param {?} rotatedBase64
             * @return {?}
             */function(rotatedBase64){return _this7.loadBase64Image(rotatedBase64)})}}/**
     * @private
     * @return {?}
     */;_proto.resizeCropperPosition=function resizeCropperPosition(){/** @type {?} */var sourceImageElement=this.sourceImage.nativeElement;if(this.maxSize.width!==sourceImageElement.offsetWidth||this.maxSize.height!==sourceImageElement.offsetHeight){this.cropper.x1=this.cropper.x1*sourceImageElement.offsetWidth/this.maxSize.width;this.cropper.x2=this.cropper.x2*sourceImageElement.offsetWidth/this.maxSize.width;this.cropper.y1=this.cropper.y1*sourceImageElement.offsetHeight/this.maxSize.height;this.cropper.y2=this.cropper.y2*sourceImageElement.offsetHeight/this.maxSize.height}}/**
     * @private
     * @return {?}
     */;_proto.resetCropperPosition=function resetCropperPosition(){/** @type {?} */var sourceImageElement=this.sourceImage.nativeElement;if(!this.maintainAspectRatio){this.cropper.x1=0;this.cropper.x2=sourceImageElement.offsetWidth;this.cropper.y1=0;this.cropper.y2=sourceImageElement.offsetHeight}else if(sourceImageElement.offsetWidth/this.aspectRatio<sourceImageElement.offsetHeight){this.cropper.x1=0;this.cropper.x2=sourceImageElement.offsetWidth;/** @type {?} */var cropperHeight=sourceImageElement.offsetWidth/this.aspectRatio;this.cropper.y1=(sourceImageElement.offsetHeight-cropperHeight)/2;this.cropper.y2=this.cropper.y1+cropperHeight}else{this.cropper.y1=0;this.cropper.y2=sourceImageElement.offsetHeight;/** @type {?} */var cropperWidth=sourceImageElement.offsetHeight*this.aspectRatio;this.cropper.x1=(sourceImageElement.offsetWidth-cropperWidth)/2;this.cropper.x2=this.cropper.x1+cropperWidth}this.doAutoCrop();this.imageVisible=true}/**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */;_proto.startMove=function startMove(event,moveType,position){if(position===void 0){position=null}event.preventDefault();this.moveStart=Object.assign({active:true,type:moveType,position:position,clientX:this.getClientX(event),clientY:this.getClientY(event)},this.cropper)}/**
     * @param {?} event
     * @return {?}
     */;_proto.moveImg=function moveImg(event){if(this.moveStart.active){event.stopPropagation();event.preventDefault();if(this.moveStart.type==="move"){this.move(event);this.checkCropperPosition(true)}else if(this.moveStart.type==="resize"){this.resize(event);this.checkCropperPosition(false)}this.cd.detectChanges()}}/**
     * @private
     * @return {?}
     */;_proto.setMaxSize=function setMaxSize(){if(this.sourceImage){/** @type {?} */var sourceImageElement=this.sourceImage.nativeElement;this.maxSize.width=sourceImageElement.offsetWidth;this.maxSize.height=sourceImageElement.offsetHeight;this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}}/**
     * @private
     * @return {?}
     */;_proto.setCropperScaledMinSize=function setCropperScaledMinSize(){if(this.originalImage){this.setCropperScaledMinWidth();this.setCropperScaledMinHeight()}else{this.cropperScaledMinWidth=20;this.cropperScaledMinHeight=20}}/**
     * @private
     * @return {?}
     */;_proto.setCropperScaledMinWidth=function setCropperScaledMinWidth(){this.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.originalImage.width*this.maxSize.width):20}/**
     * @private
     * @return {?}
     */;_proto.setCropperScaledMinHeight=function setCropperScaledMinHeight(){if(this.maintainAspectRatio){this.cropperScaledMinHeight=Math.max(20,this.cropperScaledMinWidth/this.aspectRatio)}else if(this.cropperMinHeight>0){this.cropperScaledMinHeight=Math.max(20,this.cropperMinHeight/this.originalImage.height*this.maxSize.height)}else{this.cropperScaledMinHeight=20}}/**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */;_proto.checkCropperPosition=function checkCropperPosition(maintainSize){if(maintainSize===void 0){maintainSize=false}if(this.cropper.x1<0){this.cropper.x2-=maintainSize?this.cropper.x1:0;this.cropper.x1=0}if(this.cropper.y1<0){this.cropper.y2-=maintainSize?this.cropper.y1:0;this.cropper.y1=0}if(this.cropper.x2>this.maxSize.width){this.cropper.x1-=maintainSize?this.cropper.x2-this.maxSize.width:0;this.cropper.x2=this.maxSize.width}if(this.cropper.y2>this.maxSize.height){this.cropper.y1-=maintainSize?this.cropper.y2-this.maxSize.height:0;this.cropper.y2=this.maxSize.height}}/**
     * @return {?}
     */;_proto.moveStop=function moveStop(){if(this.moveStart.active){this.moveStart.active=false;this.doAutoCrop()}}/**
     * @private
     * @param {?} event
     * @return {?}
     */;_proto.move=function move(event){/** @type {?} */var diffX=this.getClientX(event)-this.moveStart.clientX;/** @type {?} */var diffY=this.getClientY(event)-this.moveStart.clientY;this.cropper.x1=this.moveStart.x1+diffX;this.cropper.y1=this.moveStart.y1+diffY;this.cropper.x2=this.moveStart.x2+diffX;this.cropper.y2=this.moveStart.y2+diffY}/**
     * @private
     * @param {?} event
     * @return {?}
     */;_proto.resize=function resize(event){/** @type {?} */var diffX=this.getClientX(event)-this.moveStart.clientX;/** @type {?} */var diffY=this.getClientY(event)-this.moveStart.clientY;switch(this.moveStart.position){case"left":this.cropper.x1=Math.min(this.moveStart.x1+diffX,this.cropper.x2-this.cropperScaledMinWidth);break;case"topleft":this.cropper.x1=Math.min(this.moveStart.x1+diffX,this.cropper.x2-this.cropperScaledMinWidth);this.cropper.y1=Math.min(this.moveStart.y1+diffY,this.cropper.y2-this.cropperScaledMinHeight);break;case"top":this.cropper.y1=Math.min(this.moveStart.y1+diffY,this.cropper.y2-this.cropperScaledMinHeight);break;case"topright":this.cropper.x2=Math.max(this.moveStart.x2+diffX,this.cropper.x1+this.cropperScaledMinWidth);this.cropper.y1=Math.min(this.moveStart.y1+diffY,this.cropper.y2-this.cropperScaledMinHeight);break;case"right":this.cropper.x2=Math.max(this.moveStart.x2+diffX,this.cropper.x1+this.cropperScaledMinWidth);break;case"bottomright":this.cropper.x2=Math.max(this.moveStart.x2+diffX,this.cropper.x1+this.cropperScaledMinWidth);this.cropper.y2=Math.max(this.moveStart.y2+diffY,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottom":this.cropper.y2=Math.max(this.moveStart.y2+diffY,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottomleft":this.cropper.x1=Math.min(this.moveStart.x1+diffX,this.cropper.x2-this.cropperScaledMinWidth);this.cropper.y2=Math.max(this.moveStart.y2+diffY,this.cropper.y1+this.cropperScaledMinHeight);break;}if(this.maintainAspectRatio){this.checkAspectRatio()}}/**
     * @private
     * @return {?}
     */;_proto.checkAspectRatio=function checkAspectRatio(){/** @type {?} */var overflowX=0;/** @type {?} */var overflowY=0;switch(this.moveStart.position){case"top":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio;overflowX=Math.max(this.cropper.x2-this.maxSize.width,0);overflowY=Math.max(0-this.cropper.y1,0);if(overflowX>0||overflowY>0){this.cropper.x2-=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y1+=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;case"bottom":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio;overflowX=Math.max(this.cropper.x2-this.maxSize.width,0);overflowY=Math.max(this.cropper.y2-this.maxSize.height,0);if(overflowX>0||overflowY>0){this.cropper.x2-=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y2-=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;case"topleft":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio;overflowX=Math.max(0-this.cropper.x1,0);overflowY=Math.max(0-this.cropper.y1,0);if(overflowX>0||overflowY>0){this.cropper.x1+=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y1+=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;case"topright":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio;overflowX=Math.max(this.cropper.x2-this.maxSize.width,0);overflowY=Math.max(0-this.cropper.y1,0);if(overflowX>0||overflowY>0){this.cropper.x2-=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y1+=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;case"right":case"bottomright":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio;overflowX=Math.max(this.cropper.x2-this.maxSize.width,0);overflowY=Math.max(this.cropper.y2-this.maxSize.height,0);if(overflowX>0||overflowY>0){this.cropper.x2-=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y2-=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;case"left":case"bottomleft":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio;overflowX=Math.max(0-this.cropper.x1,0);overflowY=Math.max(this.cropper.y2-this.maxSize.height,0);if(overflowX>0||overflowY>0){this.cropper.x1+=overflowY*this.aspectRatio>overflowX?overflowY*this.aspectRatio:overflowX;this.cropper.y2-=overflowY*this.aspectRatio>overflowX?overflowY:overflowX/this.aspectRatio}break;}}/**
     * @private
     * @return {?}
     */;_proto.doAutoCrop=function doAutoCrop(){if(this.autoCrop){this.crop()}}/**
     * @param {?=} outputType
     * @return {?}
     */;_proto.crop=function crop(outputType){if(outputType===void 0){outputType=this.outputType}if(this.sourceImage.nativeElement&&this.originalImage!=null){this.startCropImage.emit();/** @type {?} */var imagePosition=this.getImagePosition();/** @type {?} */var width=imagePosition.x2-imagePosition.x1;/** @type {?} */var height=imagePosition.y2-imagePosition.y1;/** @type {?} */var cropCanvas=/** @type {?} */document.createElement("canvas");cropCanvas.width=width;cropCanvas.height=height;/** @type {?} */var ctx=cropCanvas.getContext("2d");if(ctx){if(this.backgroundColor!=null){ctx.fillStyle=this.backgroundColor;ctx.fillRect(0,0,width,height)}ctx.drawImage(this.originalImage,imagePosition.x1,imagePosition.y1,width,height,0,0,width,height);/** @type {?} */var output={width:width,height:height,imagePosition:imagePosition,cropperPosition:Object.assign({},this.cropper)};/** @type {?} */var resizeRatio=this.getResizeRatio(width,height);if(resizeRatio!==1){output.width=Math.round(width*resizeRatio);output.height=this.maintainAspectRatio?Math.round(output.width/this.aspectRatio):Math.round(height*resizeRatio);resizeCanvas(cropCanvas,output.width,output.height)}return this.cropToOutputType(outputType,cropCanvas,output)}}return null}/**
     * @private
     * @return {?}
     */;_proto.getImagePosition=function getImagePosition(){/** @type {?} */var sourceImageElement=this.sourceImage.nativeElement;/** @type {?} */var ratio=this.originalSize.width/sourceImageElement.offsetWidth;return{x1:Math.round(this.cropper.x1*ratio),y1:Math.round(this.cropper.y1*ratio),x2:Math.min(Math.round(this.cropper.x2*ratio),this.originalSize.width),y2:Math.min(Math.round(this.cropper.y2*ratio),this.originalSize.height)}}/**
     * @private
     * @param {?} outputType
     * @param {?} cropCanvas
     * @param {?} output
     * @return {?}
     */;_proto.cropToOutputType=function cropToOutputType(outputType,cropCanvas,output){var _this8=this;switch(outputType){case"file":return this.cropToFile(cropCanvas).then(/**
                 * @param {?} result
                 * @return {?}
                 */function(result){output.file=result;_this8.imageCropped.emit(output);return output});case"both":output.base64=this.cropToBase64(cropCanvas);return this.cropToFile(cropCanvas).then(/**
                 * @param {?} result
                 * @return {?}
                 */function(result){output.file=result;_this8.imageCropped.emit(output);return output});default:output.base64=this.cropToBase64(cropCanvas);this.imageCropped.emit(output);return output;}}/**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */;_proto.cropToBase64=function cropToBase64(cropCanvas){return cropCanvas.toDataURL("image/"+this.format,this.getQuality())}/**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */;_proto.cropToFile=function cropToFile(cropCanvas){var _this9=this;return new Promise(/**
         * @param {?} resolve
         * @return {?}
         */function(resolve){cropCanvas.toBlob(/**
             * @param {?} result
             * @return {?}
             */function(result){return _this9.zone.run(/**
             * @return {?}
             */function(){return resolve(result)})},"image/"+_this9.format,_this9.getQuality())})}/**
     * @private
     * @return {?}
     */;_proto.getQuality=function getQuality(){return Math.min(1,Math.max(0,this.imageQuality/100))}/**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */;_proto.getResizeRatio=function getResizeRatio(width,height){if(this.resizeToWidth>0){if(!this.onlyScaleDown||width>this.resizeToWidth){return this.resizeToWidth/width}}else if(this.resizeToHeight>0){if(!this.onlyScaleDown||height>this.resizeToHeight){return this.resizeToHeight/height}}return 1}/**
     * @private
     * @param {?} event
     * @return {?}
     */;_proto.getClientX=function getClientX(event){return event.touches&&event.touches[0]&&event.touches[0].clientX||event.clientX}/**
     * @private
     * @param {?} event
     * @return {?}
     */;_proto.getClientY=function getClientY(event){return event.touches&&event.touches[0]&&event.touches[0].clientY||event.clientY};_createClass(ImageCropperComponent,[{key:"imageChangedEvent",set:function set(event){this.initCropper();if(event&&event.target&&event.target.files&&event.target.files.length>0){this.loadImageFile(event.target.files[0])}}/**
     * @param {?} imageBase64
     * @return {?}
     */},{key:"imageBase64",set:function set(imageBase64){this.initCropper();this.checkExifAndLoadBase64Image(imageBase64)}/**
     * @param {?} file
     * @return {?}
     */},{key:"imageFile",set:function set(file){this.initCropper();if(file){this.loadImageFile(file)}}}]);return ImageCropperComponent}();ImageCropperComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"image-cropper",template:"<div [style.background]=\"imageVisible && backgroundColor\">\n    <img\n        #sourceImage\n        class=\"source-image\"\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        (load)=\"imageLoadedInView()\"\n    />\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n    >\n        <div\n                (mousedown)=\"startMove($event, 'move')\"\n                (touchstart)=\"startMove($event, 'move')\"\n                class=\"move\"\n        >&nbsp;</div>\n        <span\n                class=\"resize topleft\"\n                (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize topright\"\n                (mousedown)=\"startMove($event, 'resize', 'topright')\"\n                (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomright\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomleft\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize-bar top\"\n                (mousedown)=\"startMove($event, 'resize', 'top')\"\n                (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n                class=\"resize-bar right\"\n                (mousedown)=\"startMove($event, 'resize', 'right')\"\n                (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n                class=\"resize-bar bottom\"\n                (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n                class=\"resize-bar left\"\n                (mousedown)=\"startMove($event, 'resize', 'left')\"\n                (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,styles:[":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div img.source-image{max-width:100%;max-height:100%}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}:host .cropper.rounded .move{border-radius:100%}"]}]}];/** @nocollapse */ImageCropperComponent.ctorParameters=function(){return[{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]}]};ImageCropperComponent.propDecorators={sourceImage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["sourceImage",{static:true}]}],imageChangedEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],imageBase64:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],imageFile:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],format:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outputType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maintainAspectRatio:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],aspectRatio:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],resizeToWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],resizeToHeight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],cropperMinWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],cropperMinHeight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],roundCropper:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onlyScaleDown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],imageQuality:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],autoCrop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],containWithinAspectRatio:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],cropper:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],alignImage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["style.text-align"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],imageCropped:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],startCropImage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],imageLoaded:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],cropperReady:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],loadImageFailed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onResize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["window:resize"]}],moveImg:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["document:mousemove",["$event"]]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["document:touchmove",["$event"]]}],moveStop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["document:mouseup"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["document:touchend"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ImageCropperModule=function ImageCropperModule(){};ImageCropperModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],declarations:[ImageCropperComponent],exports:[ImageCropperComponent]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=ngx-image-cropper.js.map
/***/},/***/"./node_modules/primeng/components/inputswitch/inputswitch.js":/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
  \********************************************************************/ /*! no static exports found */ /***/function node_modulesPrimengComponentsInputswitchInputswitchJs(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}return c>3&&r&&Object.defineProperty(target,key,r),r};var __metadata=this&&this.__metadata||function(k,v){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(k,v)};Object.defineProperty(exports,"__esModule",{value:true});var core_1=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var common_1=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");var forms_1=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");exports.INPUTSWITCH_VALUE_ACCESSOR={provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return InputSwitch}),multi:true};var InputSwitch=/** @class */function(){function InputSwitch(cd){this.cd=cd;this.onChange=new core_1.EventEmitter;this.checked=false;this.focused=false;this.onModelChange=function(){};this.onModelTouched=function(){}}InputSwitch.prototype.onClick=function(event,cb){if(!this.disabled&&!this.readonly){this.toggle(event);cb.focus()}};InputSwitch.prototype.onInputChange=function(event){if(!this.readonly){var inputChecked=event.target.checked;this.updateModel(event,inputChecked)}};InputSwitch.prototype.toggle=function(event){this.updateModel(event,!this.checked)};InputSwitch.prototype.updateModel=function(event,value){this.checked=value;this.onModelChange(this.checked);this.onChange.emit({originalEvent:event,checked:this.checked})};InputSwitch.prototype.onFocus=function(event){this.focused=true};InputSwitch.prototype.onBlur=function(event){this.focused=false;this.onModelTouched()};InputSwitch.prototype.writeValue=function(checked){this.checked=checked;this.cd.markForCheck()};InputSwitch.prototype.registerOnChange=function(fn){this.onModelChange=fn};InputSwitch.prototype.registerOnTouched=function(fn){this.onModelTouched=fn};InputSwitch.prototype.setDisabledState=function(val){this.disabled=val};__decorate([core_1.Input(),__metadata("design:type",Object)],InputSwitch.prototype,"style",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],InputSwitch.prototype,"styleClass",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],InputSwitch.prototype,"tabindex",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],InputSwitch.prototype,"inputId",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],InputSwitch.prototype,"name",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],InputSwitch.prototype,"disabled",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],InputSwitch.prototype,"readonly",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],InputSwitch.prototype,"onChange",void 0);InputSwitch=__decorate([core_1.Component({selector:"p-inputSwitch",template:"\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",providers:[exports.INPUTSWITCH_VALUE_ACCESSOR]}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef])],InputSwitch);return InputSwitch}();exports.InputSwitch=InputSwitch;var InputSwitchModule=/** @class */function(){function InputSwitchModule(){}InputSwitchModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],exports:[InputSwitch],declarations:[InputSwitch]})],InputSwitchModule);return InputSwitchModule}();exports.InputSwitchModule=InputSwitchModule;//# sourceMappingURL=inputswitch.js.map
/***/},/***/"./node_modules/primeng/components/password/password.js":/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/password/password.js ***!
  \**************************************************************/ /*! no static exports found */ /***/function node_modulesPrimengComponentsPasswordPasswordJs(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}return c>3&&r&&Object.defineProperty(target,key,r),r};var __metadata=this&&this.__metadata||function(k,v){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(k,v)};Object.defineProperty(exports,"__esModule",{value:true});var core_1=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var common_1=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");var domhandler_1=__webpack_require__(/*! ../dom/domhandler */"./node_modules/primeng/components/dom/domhandler.js");var Password=/** @class */function(){function Password(el,zone){this.el=el;this.zone=zone;this.promptLabel="Enter a password";this.weakLabel="Weak";this.mediumLabel="Medium";this.strongLabel="Strong";this.feedback=true}Object.defineProperty(Password.prototype,"showPassword",{set:function set(show){this.el.nativeElement.type=show?"text":"password"},enumerable:true,configurable:true});Password.prototype.ngDoCheck=function(){this.updateFilledState()};//To trigger change detection to manage ui-state-filled for material labels when there is no value binding
Password.prototype.onInput=function(e){this.updateFilledState()};Password.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length};Password.prototype.createPanel=function(){this.panel=document.createElement("div");this.panel.className="ui-password-panel ui-widget ui-state-highlight ui-corner-all";this.meter=document.createElement("div");this.meter.className="ui-password-meter";this.info=document.createElement("div");this.info.className="ui-password-info";this.info.textContent=this.promptLabel;this.panel.appendChild(this.meter);this.panel.appendChild(this.info);this.panel.style.minWidth=domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement)+"px";document.body.appendChild(this.panel)};Password.prototype.onFocus=function(e){var _this=this;if(this.feedback){if(!this.panel){this.createPanel()}this.panel.style.zIndex=String(++domhandler_1.DomHandler.zindex);this.zone.runOutsideAngular(function(){setTimeout(function(){domhandler_1.DomHandler.addClass(_this.panel,"ui-password-panel-visible");domhandler_1.DomHandler.removeClass(_this.panel,"ui-password-panel-hidden")},1);domhandler_1.DomHandler.absolutePosition(_this.panel,_this.el.nativeElement)})}};Password.prototype.onBlur=function(e){var _this=this;if(this.feedback){domhandler_1.DomHandler.addClass(this.panel,"ui-password-panel-hidden");domhandler_1.DomHandler.removeClass(this.panel,"ui-password-panel-visible");this.zone.runOutsideAngular(function(){setTimeout(function(){_this.ngOnDestroy()},150)})}};Password.prototype.onKeyup=function(e){if(this.feedback){var value=e.target.value,label=null,meterPos=null;if(value.length===0){label=this.promptLabel;meterPos="0px 0px"}else{var score=this.testStrength(value);if(score<30){label=this.weakLabel;meterPos="0px -10px"}else if(score>=30&&score<80){label=this.mediumLabel;meterPos="0px -20px"}else if(score>=80){label=this.strongLabel;meterPos="0px -30px"}}this.meter.style.backgroundPosition=meterPos;this.info.textContent=label}};Password.prototype.testStrength=function(str){var grade=0;var val;val=str.match("[0-9]");grade+=this.normalize(val?val.length:1/4,1)*25;val=str.match("[a-zA-Z]");grade+=this.normalize(val?val.length:1/2,3)*10;val=str.match("[!@#$%^&*?_~.,;=]");grade+=this.normalize(val?val.length:1/6,1)*35;val=str.match("[A-Z]");grade+=this.normalize(val?val.length:1/6,1)*30;grade*=str.length/8;return grade>100?100:grade};Password.prototype.normalize=function(x,y){var diff=x-y;if(diff<=0)return x/y;else return 1+0.5*(x/(x+y/4))};Object.defineProperty(Password.prototype,"disabled",{get:function get(){return this.el.nativeElement.disabled},enumerable:true,configurable:true});Password.prototype.ngOnDestroy=function(){if(this.panel){document.body.removeChild(this.panel);this.panel=null;this.meter=null;this.info=null}};__decorate([core_1.Input(),__metadata("design:type",String)],Password.prototype,"promptLabel",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],Password.prototype,"weakLabel",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],Password.prototype,"mediumLabel",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],Password.prototype,"strongLabel",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],Password.prototype,"feedback",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],Password.prototype,"showPassword",null);__decorate([core_1.HostListener("input",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],Password.prototype,"onInput",null);__decorate([core_1.HostListener("focus",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],Password.prototype,"onFocus",null);__decorate([core_1.HostListener("blur",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],Password.prototype,"onBlur",null);__decorate([core_1.HostListener("keyup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],Password.prototype,"onKeyup",null);Password=__decorate([core_1.Directive({selector:"[pPassword]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.NgZone])],Password);return Password}();exports.Password=Password;var PasswordModule=/** @class */function(){function PasswordModule(){}PasswordModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],exports:[Password],declarations:[Password]})],PasswordModule);return PasswordModule}();exports.PasswordModule=PasswordModule;//# sourceMappingURL=password.js.map
/***/},/***/"./node_modules/primeng/inputswitch.js":/*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesPrimengInputswitchJs(module,exports,__webpack_require__){"use strict";/* Shorthand */function __export(m){for(var p in m){if(!exports.hasOwnProperty(p))exports[p]=m[p]}}Object.defineProperty(exports,"__esModule",{value:true});__export(__webpack_require__(/*! ./components/inputswitch/inputswitch */"./node_modules/primeng/components/inputswitch/inputswitch.js"));/***/},/***/"./node_modules/primeng/password.js":/*!******************************************!*\
  !*** ./node_modules/primeng/password.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesPrimengPasswordJs(module,exports,__webpack_require__){"use strict";/* Shorthand */function __export(m){for(var p in m){if(!exports.hasOwnProperty(p))exports[p]=m[p]}}Object.defineProperty(exports,"__esModule",{value:true});__export(__webpack_require__(/*! ./components/password/password */"./node_modules/primeng/components/password/password.js"));/***/}}]);//# sourceMappingURL=default~component-change-password-change-password-module~component-company-info-company-info-module~~f6ff9b8e-es2015.js.map
//# sourceMappingURL=default~component-change-password-change-password-module~component-company-info-company-info-module~~f6ff9b8e-es5.js.map