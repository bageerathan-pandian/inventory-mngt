(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-login-login-module"],{

/***/ "./node_modules/ng2-loading-spinner/fesm2015/ng2-loading-spinner.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-loading-spinner/fesm2015/ng2-loading-spinner.js ***!
  \**************************************************************************/
/*! exports provided: ANIMATION_TYPES, Ng2LoadingSpinnerModule, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_TYPES", function() { return ANIMATION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2LoadingSpinnerModule", function() { return Ng2LoadingSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Ng2LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Ng2LoadingSpinnerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANIMATION_TYPES = {
    dualCircle: 'dualCircle',
    scalingBars: 'scalingBars',
    chasingDots: 'chasingDots',
    bouncingDots: 'bouncingDots',
    fadingCircle: 'fadingCircle',
    halfCircle: 'halfCircle',
    cubeGrid: 'cubeGrid'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng2LoadingSpinnerComponent {
    /**
     * @param {?} vcRef
     */
    constructor(vcRef) {
        this.vcRef = vcRef;
        this.ANIMATION_TYPES = ANIMATION_TYPES;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Ng2LoadingSpinnerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-loading-spinner',
                template: `
        <div class="backdrop"
             [ngStyle]="{'background-color': config.backdropColor, 'border-radius': config.backdropBorderRadius}"></div>

        <div class="wrapper"
             [ngClass]="[config.spinnerPosition, config.spinnerSize]"
             [ngStyle]="{'color': config.spinnerColor, 'font-size': config.spinnerFontSize}">
            <ng-container *ngIf="!template">
                <!-- DUAL CIRCLE SPINNER -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.dualCircle"
                     class="dual-circle"></div>


                <!-- SCALING BARS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.scalingBars"
                     class="scaling-bars"></div>


                <!-- CHASING DOTS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.chasingDots"
                     class="chasing-dots"></div>


                <!-- BOUNCING DOTS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.bouncingDots"
                     class="bouncing-dots">
                    <div class="bounce-1"></div>
                    <div class="bounce-2"></div>
                    <div class="bounce-3"></div>
                </div>


                <!-- FADING CIRCLE -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.fadingCircle"
                     class="fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>

                <!-- HALF CIRCLE -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.halfCircle" class="half-circle"></div>

                <!-- CUBIC GRID -->
                <div class="sk-cube-grid cube-grid" *ngIf="config?.animationType === ANIMATION_TYPES.cubeGrid">
                    <div class="sk-cube sk-cube1"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube2"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube3"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube4"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube5"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube6"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube7"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube8"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube9"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                </div>
            </ng-container>

            <ng-container *ngTemplateOutlet="template"></ng-container>
        </div>
    `,
                styles: [`
        .backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
        }

        .wrapper {
            position: absolute;
            z-index: 2001;
        }

        /* POSITIONING SPINNER */
        .left {
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
        }

        .right {
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
        }

        .top {
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
        }

        .bottom {
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
        }

        .top-right {
            top: 5px;
            right: 5px;
        }

        .top-left {
            top: 5px;
            left: 5px;
        }

        .bottom-right {
            bottom: 5px;
            right: 5px;
        }

        .bottom-left {
            bottom: 5px;
            left: 5px;
        }

        .center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        /***********************/
        /* SIZING      SPINNER */
        /***********************/
        .xs {
            font-size: 0.5rem;
        }

        .sm {
            font-size: 1rem;
        }

        .md {
            font-size: 1.5rem;
        }

        .lg {
            font-size: 2rem;
        }

        .xl {
            font-size: 2.5rem;
        }

        /***********************/
        /* DUAL CIRCLE SPINNER */
        /***********************/
        .dual-circle {
            display: inline-block;
        }

        .dual-circle:after {
            content: " ";
            display: block;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            border: .1em solid currentColor;
            border-color: currentColor transparent currentColor transparent;
            animation: dual-cricle-anim 1.2s linear infinite;
        }

        @keyframes dual-cricle-anim {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        /***********************/
        /* SCALING BARS SPINNER */
        /***********************/

        .center .scaling-bars,
        .top .scaling-bars,
        .bottom .scaling-bars {
            left: 0;
        }

        .left .scaling-bars,
        .top-left .scaling-bars,
        .top-bottom .scaling-bars {
            left: 1.5em;
        }

        .right .scaling-bars,
        .top-right .scaling-bars,
        .bottom-right .scaling-bars {
            right: 1.5em;
        }

        .scaling-bars,
        .scaling-bars:before,
        .scaling-bars:after {
            background: currentColor;
            -webkit-animation: scaling-bars-anim 1s infinite ease-in-out;
            animation: scaling-bars-anim 1s infinite ease-in-out;
            width: 1em;
            height: 2em;
        }

        .scaling-bars {
            color: currentColor;
            text-indent: -9999em;
            position: relative;
            font-size: .5em;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        .scaling-bars:before,
        .scaling-bars:after {
            position: absolute;
            top: 0;
            content: '';
        }

        .scaling-bars:before {
            left: -1.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .scaling-bars:after {
            left: 1.5em;
        }

        @-webkit-keyframes scaling-bars-anim {
            0%,
            80%,
            100% {
                box-shadow: 0 0;
                height: 4em;
            }
            40% {
                box-shadow: 0 -2em;
                height: 5em;
            }
        }

        @keyframes scaling-bars-anim {
            0%,
            80%,
            100% {
                box-shadow: 0 0;
                height: 4em;
            }
            40% {
                box-shadow: 0 -2em;
                height: 5em;
            }
        }

        /***********************/
        /* CHASING DOTS SPINNER */
        /***********************/
        .chasing-dots {
            color: currentColor;
            font-size: 1.5em;
            text-indent: -9999em;
            overflow: hidden;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            position: relative;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
            animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        }

        @-webkit-keyframes load6 {
            0% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            5%,
            95% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            10%,
            59% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
            }
            20% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
            }
            38% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
            }
            100% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
        }

        @keyframes load6 {
            0% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            5%,
            95% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            10%,
            59% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
            }
            20% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
            }
            38% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
            }
            100% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
        }

        @-webkit-keyframes round {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes round {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        /***********************/
        /* BOUNCING DOTS SPINNER */
        /***********************/

        .bouncing-dots {
            font-size: inherit;
            text-align: center;
        }

        .bouncing-dots > div {
            width: 1em;
            height: 1em;
            background-color: currentColor;
            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        }

        .bouncing-dots .bounce-1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .bouncing-dots .bounce-2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0)
            }
            40% {
                -webkit-transform: scale(1.0)
            }
        }

        @keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
            }
        }

        /***********************/
        /* FADING CIRCLE SPINNER */
        /***********************/

        .fading-circle {
            font-size: inherit;
            width: 2em;
            height: 2em;
            position: relative;
        }

        .fading-circle .sk-circle {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .fading-circle .sk-circle:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: currentColor;
            border-radius: 100%;
            -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        }

        .fading-circle .sk-circle2 {
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            transform: rotate(30deg);
        }

        .fading-circle .sk-circle3 {
            -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            transform: rotate(60deg);
        }

        .fading-circle .sk-circle4 {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
        }

        .fading-circle .sk-circle5 {
            -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            transform: rotate(120deg);
        }

        .fading-circle .sk-circle6 {
            -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
            transform: rotate(150deg);
        }

        .fading-circle .sk-circle7 {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }

        .fading-circle .sk-circle8 {
            -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
            transform: rotate(210deg);
        }

        .fading-circle .sk-circle9 {
            -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
            transform: rotate(240deg);
        }

        .fading-circle .sk-circle10 {
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg);
        }

        .fading-circle .sk-circle11 {
            -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
            transform: rotate(300deg);
        }

        .fading-circle .sk-circle12 {
            -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
            transform: rotate(330deg);
        }

        .fading-circle .sk-circle2:before {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }

        .fading-circle .sk-circle3:before {
            -webkit-animation-delay: -1s;
            animation-delay: -1s;
        }

        .fading-circle .sk-circle4:before {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }

        .fading-circle .sk-circle5:before {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }

        .fading-circle .sk-circle6:before {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }

        .fading-circle .sk-circle7:before {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }

        .fading-circle .sk-circle8:before {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }

        .fading-circle .sk-circle9:before {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }

        .fading-circle .sk-circle10:before {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }

        .fading-circle .sk-circle11:before {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }

        .fading-circle .sk-circle12:before {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
        }

        @-webkit-keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }

        @keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }

        /***********************/
        /* HALF CIRCLE SPINNER */
        /***********************/

        .half-circle {
            width: 2em;
            height: 2em;
            display: inline-block;
            border: .2em solid transparent;
            border-left-color: currentColor;
            border-top-color: currentColor;
            animation: rotate 600ms infinite linear;
            border-radius: 50%;
        }

        @keyframes rotate {
            to {
                transform: rotate(1turn)
            }
        }


        /***********************/
        /* CUBIC GRID SPINNER */
        /***********************/
        .sk-cube-grid {
            width: 2em;
            height: 2em;
        }

        .sk-cube-grid .sk-cube {
            width: 33%;
            height: 33%;
            float: left;
            -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }
        .sk-cube-grid .sk-cube1 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
        .sk-cube-grid .sk-cube2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
        .sk-cube-grid .sk-cube3 {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
        .sk-cube-grid .sk-cube4 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
        .sk-cube-grid .sk-cube5 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
        .sk-cube-grid .sk-cube6 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
        .sk-cube-grid .sk-cube7 {
            -webkit-animation-delay: 0s;
            animation-delay: 0s; }
        .sk-cube-grid .sk-cube8 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
        .sk-cube-grid .sk-cube9 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

        @-webkit-keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            } 35% {
                  -webkit-transform: scale3D(0, 0, 1);
                  transform: scale3D(0, 0, 1);
              }
        }

        @keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            } 35% {
                  -webkit-transform: scale3D(0, 0, 1);
                  transform: scale3D(0, 0, 1);
              }
        }


    `]
            },] },
];
/** @nocollapse */
Ng2LoadingSpinnerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
Ng2LoadingSpinnerComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const findIndex = function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};
/** @type {?} */
const objectValues = function (obj) {
    /** @type {?} */
    let values = [];
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            values.push(obj[item]);
        }
    }
    return values;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.config = this.config || {};
        this.defaultConfig = {
            animationType: this.config.animationType || ANIMATION_TYPES.fadingCircle,
            backdropColor: this.config.backdropColor || 'rgba(0, 0, 0, 0.3)',
            spinnerColor: this.config.spinnerColor || '#fff',
            spinnerPosition: this.config.spinnerPosition || 'center',
            backdropBorderRadius: this.config.backdropBorderRadius || '0',
            spinnerSize: this.config.spinnerSize || 'md',
            spinnerFontSize: this.config.spinnerFontSize || ''
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    normalizeConfigs(config) {
        if (!config) {
            config = this.defaultConfig;
            return config;
        }
        if (config.spinnerSize === '' && config.spinnerFontSize === '') {
            config.spinnerFontSize = '1rem';
        }
        for (const option in this.defaultConfig) {
            if (!config[option]) {
                config[option] = this.defaultConfig[option];
            }
        }
        if (findIndex(objectValues(ANIMATION_TYPES), config['animationType']) === -1) {
            config['animationType'] = ANIMATION_TYPES.fadingCircle;
        }
        return config;
    }
}
ConfigService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['loadingConfig',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng2LoadingSpinnerDirective {
    /**
     * @param {?} el
     * @param {?} vcRef
     * @param {?} cfResolver
     * @param {?} renderer
     * @param {?} configService
     */
    constructor(el, vcRef, cfResolver, renderer, configService) {
        this.el = el;
        this.vcRef = vcRef;
        this.cfResolver = cfResolver;
        this.renderer = renderer;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setPosition();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.show) {
            if (changes.show.currentValue) {
                this.createSpinner();
            }
            else {
                this.destroySpinner();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroySpinner();
    }
    /**
     * @return {?}
     */
    setPosition() {
        /** @type {?} */
        const elPosition = this.el.nativeElement.style.position;
        if (elPosition === 'relative' || elPosition === 'absolute') {
            return;
        }
        this.el.nativeElement.style.position = 'relative';
    }
    /**
     * @return {?}
     */
    createSpinner() {
        /** @type {?} */
        const spinnerCF = this.cfResolver.resolveComponentFactory(Ng2LoadingSpinnerComponent);
        this.spinnerComponentRef = this.vcRef.createComponent(spinnerCF);
        this.config = this.configService.normalizeConfigs(this.config);
        this.spinnerComponentRef.instance.config = this.config;
        this.spinnerComponentRef.instance.template = this.template;
        this.renderer.appendChild(this.vcRef.element.nativeElement, this.spinnerComponentRef.injector.get(Ng2LoadingSpinnerComponent).vcRef.element.nativeElement);
    }
    /**
     * @return {?}
     */
    destroySpinner() {
        if (this.spinnerComponentRef) {
            this.spinnerComponentRef.destroy();
        }
    }
}
Ng2LoadingSpinnerDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ng2-loading]',
                providers: [ConfigService]
            },] },
];
/** @nocollapse */
Ng2LoadingSpinnerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ConfigService }
];
Ng2LoadingSpinnerDirective.propDecorators = {
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ng2-loading',] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng2LoadingSpinnerModule {
    /**
     * @param {?} globalConfig
     * @return {?}
     */
    static forRoot(globalConfig) {
        return {
            ngModule: Ng2LoadingSpinnerModule,
            providers: [{ provide: 'loadingConfig', useValue: globalConfig }]
        };
    }
}
Ng2LoadingSpinnerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [Ng2LoadingSpinnerComponent, Ng2LoadingSpinnerDirective],
                exports: [Ng2LoadingSpinnerDirective],
                entryComponents: [Ng2LoadingSpinnerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWxvYWRpbmctc3Bpbm5lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWxvYWRpbmctc3Bpbm5lci9saWIvYW5pbWF0aW9uLXR5cGVzLnRzIiwibmc6Ly9uZzItbG9hZGluZy1zcGlubmVyL2xpYi9uZzItbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWxvYWRpbmctc3Bpbm5lci9saWIvdXRpbHMudHMiLCJuZzovL25nMi1sb2FkaW5nLXNwaW5uZXIvbGliL2NvbmZpZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItbG9hZGluZy1zcGlubmVyL2xpYi9uZzItbG9hZGluZy1zcGlubmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWxvYWRpbmctc3Bpbm5lci9saWIvbmcyLWxvYWRpbmctc3Bpbm5lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9UWVBFUyAgPSB7XG4gICAgZHVhbENpcmNsZTogJ2R1YWxDaXJjbGUnLFxuICAgIHNjYWxpbmdCYXJzOiAnc2NhbGluZ0JhcnMnLFxuICAgIGNoYXNpbmdEb3RzOiAnY2hhc2luZ0RvdHMnLFxuICAgIGJvdW5jaW5nRG90czogJ2JvdW5jaW5nRG90cycsXG4gICAgZmFkaW5nQ2lyY2xlOiAnZmFkaW5nQ2lyY2xlJyxcbiAgICBoYWxmQ2lyY2xlOiAnaGFsZkNpcmNsZScsXG4gICAgY3ViZUdyaWQ6ICdjdWJlR3JpZCdcbn07XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fVFlQRVN9IGZyb20gJy4vYW5pbWF0aW9uLXR5cGVzJztcbmltcG9ydCB7TmcyTG9hZGluZ1NwaW5uZXJDb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItbG9hZGluZy1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIlxuICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZy5iYWNrZHJvcENvbG9yLCAnYm9yZGVyLXJhZGl1cyc6IGNvbmZpZy5iYWNrZHJvcEJvcmRlclJhZGl1c31cIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwiW2NvbmZpZy5zcGlubmVyUG9zaXRpb24sIGNvbmZpZy5zcGlubmVyU2l6ZV1cIlxuICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjb25maWcuc3Bpbm5lckNvbG9yLCAnZm9udC1zaXplJzogY29uZmlnLnNwaW5uZXJGb250U2l6ZX1cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8IS0tIERVQUwgQ0lSQ0xFIFNQSU5ORVIgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZSA9PT0gQU5JTUFUSU9OX1RZUEVTLmR1YWxDaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkdWFsLWNpcmNsZVwiPjwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8IS0tIFNDQUxJTkcgQkFSUyAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5hbmltYXRpb25UeXBlID09PSBBTklNQVRJT05fVFlQRVMuc2NhbGluZ0JhcnNcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzY2FsaW5nLWJhcnNcIj48L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPCEtLSBDSEFTSU5HIERPVFMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZSA9PT0gQU5JTUFUSU9OX1RZUEVTLmNoYXNpbmdEb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hhc2luZy1kb3RzXCI+PC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwhLS0gQk9VTkNJTkcgRE9UUyAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5hbmltYXRpb25UeXBlID09PSBBTklNQVRJT05fVFlQRVMuYm91bmNpbmdEb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm91bmNpbmctZG90c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlLTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZS0yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UtM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8IS0tIEZBRElORyBDSVJDTEUgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZSA9PT0gQU5JTUFUSU9OX1RZUEVTLmZhZGluZ0NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhZGluZy1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTEgc2stY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jaXJjbGUyIHNrLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlMyBzay1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTQgc2stY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jaXJjbGU1IHNrLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlNiBzay1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTcgc2stY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jaXJjbGU4IHNrLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlOSBzay1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWNpcmNsZTEwIHNrLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY2lyY2xlMTEgc2stY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jaXJjbGUxMiBzay1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSEFMRiBDSVJDTEUgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZSA9PT0gQU5JTUFUSU9OX1RZUEVTLmhhbGZDaXJjbGVcIiBjbGFzcz1cImhhbGYtY2lyY2xlXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENVQklDIEdSSUQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUtZ3JpZCBjdWJlLWdyaWRcIiAqbmdJZj1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZSA9PT0gQU5JTUFUSU9OX1RZUEVTLmN1YmVHcmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNwaW5uZXJDb2xvcn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc3Bpbm5lckNvbG9yfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zcGlubmVyQ29sb3J9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNwaW5uZXJDb2xvcn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc3Bpbm5lckNvbG9yfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zcGlubmVyQ29sb3J9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNwaW5uZXJDb2xvcn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc3Bpbm5lckNvbG9yfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zcGlubmVyQ29sb3J9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYmFja2Ryb3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBQT1NJVElPTklORyBTUElOTkVSICovXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3Age1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm90dG9tIHtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1yaWdodCB7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWxlZnQge1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3R0b20tbGVmdCB7XG4gICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogU0laSU5HICAgICAgU1BJTk5FUiAqL1xuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIC54cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubGcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnhsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBEVUFMIENJUkNMRSBTUElOTkVSICovXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLmR1YWwtY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5kdWFsLWNpcmNsZTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogLjFlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvciB0cmFuc3BhcmVudCBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBhbmltYXRpb246IGR1YWwtY3JpY2xlLWFuaW0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGR1YWwtY3JpY2xlLWFuaW0ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogU0NBTElORyBCQVJTIFNQSU5ORVIgKi9cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIC5jZW50ZXIgLnNjYWxpbmctYmFycyxcbiAgICAgICAgLnRvcCAuc2NhbGluZy1iYXJzLFxuICAgICAgICAuYm90dG9tIC5zY2FsaW5nLWJhcnMge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IC5zY2FsaW5nLWJhcnMsXG4gICAgICAgIC50b3AtbGVmdCAuc2NhbGluZy1iYXJzLFxuICAgICAgICAudG9wLWJvdHRvbSAuc2NhbGluZy1iYXJzIHtcbiAgICAgICAgICAgIGxlZnQ6IDEuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0IC5zY2FsaW5nLWJhcnMsXG4gICAgICAgIC50b3AtcmlnaHQgLnNjYWxpbmctYmFycyxcbiAgICAgICAgLmJvdHRvbS1yaWdodCAuc2NhbGluZy1iYXJzIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2FsaW5nLWJhcnMsXG4gICAgICAgIC5zY2FsaW5nLWJhcnM6YmVmb3JlLFxuICAgICAgICAuc2NhbGluZy1iYXJzOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsaW5nLWJhcnMtYW5pbSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2NhbGluZy1iYXJzLWFuaW0gMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2NhbGluZy1iYXJzIHtcbiAgICAgICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjVlbTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2FsaW5nLWJhcnM6YmVmb3JlLFxuICAgICAgICAuc2NhbGluZy1iYXJzOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjYWxpbmctYmFyczpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogLTEuNWVtO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjYWxpbmctYmFyczphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiAxLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzY2FsaW5nLWJhcnMtYW5pbSB7XG4gICAgICAgICAgICAwJSxcbiAgICAgICAgICAgIDgwJSxcbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBzY2FsaW5nLWJhcnMtYW5pbSB7XG4gICAgICAgICAgICAwJSxcbiAgICAgICAgICAgIDgwJSxcbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBDSEFTSU5HIERPVFMgU1BJTk5FUiAqL1xuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIC5jaGFzaW5nLWRvdHMge1xuICAgICAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNSUsXG4gICAgICAgICAgICA5NSUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMCUsXG4gICAgICAgICAgICA1OSUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAzOCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNSUsXG4gICAgICAgICAgICA5NSUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMCUsXG4gICAgICAgICAgICA1OSUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAzOCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcm91bmQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogQk9VTkNJTkcgRE9UUyBTUElOTkVSICovXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAuYm91bmNpbmctZG90cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYm91bmNpbmctZG90cyA+IGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvdW5jaW5nLWRvdHMgLmJvdW5jZS0xIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3VuY2luZy1kb3RzIC5ib3VuY2UtMiB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAgICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIC8qIEZBRElORyBDSVJDTEUgU1BJTk5FUiAqL1xuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgLmZhZGluZy1jaXJjbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNpcmNsZUZhZGVEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUZhZGVEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMyB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNCB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNiB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNyB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTAge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMiB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUzOmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlRmFkZURlbGF5IHtcbiAgICAgICAgICAgIDAlLCAzOSUsIDEwMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWNpcmNsZUZhZGVEZWxheSB7XG4gICAgICAgICAgICAwJSwgMzklLCAxMDAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBIQUxGIENJUkNMRSBTUElOTkVSICovXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAuMmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDYwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBDVUJJQyBHUklEIFNQSU5ORVIgKi9cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAuc2stY3ViZS1ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xuICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIGhlaWdodDogMzMlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUxIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU0IHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4gICAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU3IHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IH1cbiAgICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cbiAgICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgIH0gMzUlIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgICAgICAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgICAgICB9IDM1JSB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkxvYWRpbmdTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogTmcyTG9hZGluZ1NwaW5uZXJDb25maWc7XG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBBTklNQVRJT05fVFlQRVMgPSBBTklNQVRJT05fVFlQRVM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZmluZEluZGV4ID0gZnVuY3Rpb24gKGFycjogYW55W10sIGl0ZW06IGFueSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xufTtcblxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VmFsdWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtpdGVtXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTsiLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJTmcyTG9hZGluZ1NwaW5uZXJDb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7QU5JTUFUSU9OX1RZUEVTfSBmcm9tICcuL2FuaW1hdGlvbi10eXBlcyc7XG5pbXBvcnQge2ZpbmRJbmRleCwgb2JqZWN0VmFsdWVzfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0Q29uZmlnOiBJTmcyTG9hZGluZ1NwaW5uZXJDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdsb2FkaW5nQ29uZmlnJykgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IElOZzJMb2FkaW5nU3Bpbm5lckNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWcgPSAge1xuICAgICAgICAgICAgYW5pbWF0aW9uVHlwZTogdGhpcy5jb25maWcuYW5pbWF0aW9uVHlwZSB8fCBBTklNQVRJT05fVFlQRVMuZmFkaW5nQ2lyY2xlLFxuICAgICAgICAgICAgYmFja2Ryb3BDb2xvcjogdGhpcy5jb25maWcuYmFja2Ryb3BDb2xvciB8fCAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgICAgICAgICAgIHNwaW5uZXJDb2xvcjogdGhpcy5jb25maWcuc3Bpbm5lckNvbG9yIHx8ICcjZmZmJyxcbiAgICAgICAgICAgIHNwaW5uZXJQb3NpdGlvbjogdGhpcy5jb25maWcuc3Bpbm5lclBvc2l0aW9uIHx8ICdjZW50ZXInLFxuICAgICAgICAgICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM6IHRoaXMuY29uZmlnLmJhY2tkcm9wQm9yZGVyUmFkaXVzIHx8ICcwJyxcbiAgICAgICAgICAgIHNwaW5uZXJTaXplOiB0aGlzLmNvbmZpZy5zcGlubmVyU2l6ZSB8fCAnbWQnLFxuICAgICAgICAgICAgc3Bpbm5lckZvbnRTaXplOiB0aGlzLmNvbmZpZy5zcGlubmVyRm9udFNpemUgfHwgJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBub3JtYWxpemVDb25maWdzKGNvbmZpZzogSU5nMkxvYWRpbmdTcGlubmVyQ29uZmlnKSB7XG4gICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5zcGlubmVyU2l6ZSA9PT0gJycgJiYgY29uZmlnLnNwaW5uZXJGb250U2l6ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zcGlubmVyRm9udFNpemUgPSAnMXJlbSc7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLmRlZmF1bHRDb25maWcpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnW29wdGlvbl0pIHtcbiAgICAgICAgICAgICAgICBjb25maWdbb3B0aW9uXSA9IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbmRJbmRleChvYmplY3RWYWx1ZXMoQU5JTUFUSU9OX1RZUEVTKSwgY29uZmlnWydhbmltYXRpb25UeXBlJ10pID09PSAtMSkge1xuICAgICAgICAgICAgY29uZmlnWydhbmltYXRpb25UeXBlJ10gPSBBTklNQVRJT05fVFlQRVMuZmFkaW5nQ2lyY2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyTG9hZGluZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL25nMi1sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3IgOiAnW25nMi1sb2FkaW5nXScsXG4gICAgcHJvdmlkZXJzOiBbIENvbmZpZ1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOZzJMb2FkaW5nU3Bpbm5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCduZzItbG9hZGluZycpIHNob3c7XG4gICAgQElucHV0KCkgY29uZmlnO1xuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHJpdmF0ZSBzcGlubmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TmcyTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIGNmUmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5zaG93KSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5zaG93LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3Bpbm5lcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTcGlubmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVNwaW5uZXIoKTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGVsUG9zaXRpb24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb247XG4gICAgICAgIGlmIChlbFBvc2l0aW9uID09PSAncmVsYXRpdmUnIHx8IGVsUG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuXG4gICAgY3JlYXRlU3Bpbm5lciAoKSB7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJDRiAgICAgICAgICA9IHRoaXMuY2ZSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZzJMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudFJlZiA9IHRoaXMudmNSZWYuY3JlYXRlQ29tcG9uZW50KHNwaW5uZXJDRik7XG5cblxuICAgICAgICB0aGlzLmNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uubm9ybWFsaXplQ29uZmlncyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgICA9IHRoaXMuY29uZmlnO1xuICAgICAgICB0aGlzLnNwaW5uZXJDb21wb25lbnRSZWYuaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLnZjUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudFJlZi5pbmplY3Rvci5nZXQoTmcyTG9hZGluZ1NwaW5uZXJDb21wb25lbnQpLnZjUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRlc3Ryb3lTcGlubmVyICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Bpbm5lckNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyQ29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge05nMkxvYWRpbmdTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuL25nMi1sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7TmcyTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmV9IGZyb20gJy4vbmcyLWxvYWRpbmctc3Bpbm5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtJTmcyTG9hZGluZ1NwaW5uZXJDb25maWd9IGZyb20gJy4vY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbTmcyTG9hZGluZ1NwaW5uZXJDb21wb25lbnQsIE5nMkxvYWRpbmdTcGlubmVyRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbTmcyTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmVdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW05nMkxvYWRpbmdTcGlubmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZzJMb2FkaW5nU3Bpbm5lck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZ2xvYmFsQ29uZmlnOiBJTmcyTG9hZGluZ1NwaW5uZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZzJMb2FkaW5nU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiAnbG9hZGluZ0NvbmZpZycsIHVzZVZhbHVlOiBnbG9iYWxDb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztB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

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p-toast position=\"top-right\"></p-toast> -->\n<div  class=\"ui-g-12 ui-md-4 ui-md-offset-4\">\n    \n<p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\n<div class=\"ui-g-12\"  style=\"text-align: center\">\n        <a routerLink=\"/login\">\n          <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"width: 100px;\">\n        </a>\n    </div>\n    <p-card  class=\"login-form ui-g-12 ui-md-12\" >\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" style=\"text-align: center\">\n        <div class=\"ui-g ui-fluid\">\n\n                <div class=\"ui-g-12 ui-md-12\">\n                    <h2>Login</h2>\n                    <span>with your business Account</span>\n                </div>\n        \n            <div class=\"ui-g-12 ui-md-12\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"User Email\" formControlName=\"user_email\" required >              \n               </div>\n                <p class=\"error-msg\" *ngIf=\"!loginForm.controls['user_email'].valid && (loginForm.controls['user_email'].dirty || loginForm.controls['user_email'].touched)\">\n                    <em *ngIf=\"loginForm.controls['user_email'].errors['required']\"> User Email is required    </em>\n                    <em *ngIf=\"loginForm.controls['user_email'].errors['pattern']\">  Invalid Email    </em>\n                 </p>\n            \n            </div>\n      \n            \n      \n            <div class=\"ui-g-12 ui-md-12\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-key\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"Password\" formControlName=\"user_pwd\" required>         \n                </div>\n                <p class=\"error-msg\" *ngIf=\"!loginForm.controls['user_pwd'].valid && (loginForm.controls['user_pwd'].dirty || loginForm.controls['user_pwd'].touched)\">\n                        <em *ngIf=\"loginForm.controls['user_pwd'].errors['required']\">Password is required  </em>\n                     </p>\n               \n            </div>\n            \n            <div class=\"ui-g-6 ui-md-6\">\n            <p-checkbox name=\"groupname\" label=\"Remember Me\" formControlName=\"rememberMe\"></p-checkbox>\n          </div>\n          </div>\n        <p-footer>\n            <button pButton type=\"submit\" label=\"Login\"  class=\"ui-button-raised \" style=\"margin-right: .25em;    width: 100%;\" ></button>\n        </p-footer>\n      </form>\n      <p>------------------ Or ------------------</p>\n      <p-footer>\n                    <p >Don't have an account? <a  rel=\"noopener noreferrer\"  routerLink=\"/register\" >Register</a></p>\n                \n                  \n                <a  rel=\"noopener noreferrer\"  routerLink=\"/forgot-password\" >Forgot Password?</a>\n           \n      </p-footer>\n    </p-card>\n    \n    <div style=\"text-align: center\">\n        <div>2019@ Ownwaysoft.com Made with <span class=\"color-red\">❤</span>.</div>\n        <div>Version : 1.0.0</div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/component/login/login-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/login/login-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/component/login/login.component.ts");




const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  text-align: center;\n}\n\n.loagin-wrapper {\n  margin-top: 10%;\n}\n\n.error-msg {\n  font-size: 10px;\n  color: #f1061c;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL0U6XFxvd253YXlzb2Z0LmNvbVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEVUE7RUFDRSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIHdpZHRoOiA0MDBweDtcclxuICAvLyBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHRvcDogMDtcclxuICAvLyBib3R0b206IDA7XHJcbiAgLy8gbGVmdDogMDtcclxuICAvLyByaWdodDogMDtcclxuICAvLyBtYXJnaW46IGF1dG87XHJcbn1cclxuLmxvYWdpbi13cmFwcGVye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmVycm9yLW1zZ3tcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2YxMDYxYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iLCIubG9naW4tZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvYWdpbi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2YxMDYxYztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let LoginComponent = class LoginComponent {
    constructor(auth, _fb, messageService, router) {
        this.auth = auth;
        this._fb = _fb;
        this.messageService = messageService;
        this.router = router;
        if (this.auth.isLogedIn()) {
            this.router.navigate(["/dashboard"]);
        }
        this.socket = io(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url);
        this.loginForm = this._fb.group({
            // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rememberMe: [""]
        });
    }
    ngOnInit() {
    }
    checkValidity() {
        Object.keys(this.loginForm.controls).forEach((key) => {
            this.loginForm.controls[key].markAsDirty();
        });
    }
    onLogin() {
        if (this.loginForm.invalid) {
            this.checkValidity();
            return false;
        }
        console.log(this.loginForm.value);
        this.showSpinner = true;
        this.auth.logIn(this.loginForm.value)
            .subscribe((data) => {
            console.log('data', data);
            this.showSpinner = false;
            this.messageService.clear();
            if (data.user.status == 0) {
                this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Your account is deactivated by Company admin!' });
                return false;
            }
            if (data.user.status == 2) {
                this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Your account has been expired. Contact App!' });
                return false;
            }
            if (data.token) {
                setTimeout(() => {
                    this.socket.emit('loginTodo', data.user);
                    localStorage.setItem('secret_token', data.token);
                    localStorage.setItem('user_details', JSON.stringify(data.user));
                    localStorage.setItem('client_company_id', data.user.company_details_id._id);
                    this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Login success!' });
                    localStorage.setItem("inventryLogedIn", "1");
                    this.router.navigate(["/dashboard"]);
                }, 2000);
            }
            else {
                this.messageService.clear();
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Check your User Name/Password' });
            }
        }, error => {
            console.log('er', error);
            this.showSpinner = false;
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
            // localStorage.setItem("inventryLogedIn", "1");
            // this.router.navigate(["/dashboard"]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/component/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/login/login.module.ts ***!
  \*************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/component/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm2015/ng2-loading-spinner.js");














let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_9__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
            ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["Ng2LoadingSpinnerModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=component-login-login-module-es2015.js.map