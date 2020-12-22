function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~purchase-report-purchase-report-module~sales-report-sales-report-module"], {
  /***/
  "./node_modules/ngx-daterangepicker-material/fesm2015/ngx-daterangepicker-material.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/ngx-daterangepicker-material/fesm2015/ngx-daterangepicker-material.js ***!
    \********************************************************************************************/

  /*! exports provided: DaterangepickerComponent, DaterangepickerDirective, DefaultLocaleConfig, LOCALE_CONFIG, LocaleService, NgxDaterangepickerMd */

  /***/
  function node_modulesNgxDaterangepickerMaterialFesm2015NgxDaterangepickerMaterialJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaterangepickerComponent", function () {
      return DaterangepickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaterangepickerDirective", function () {
      return DaterangepickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLocaleConfig", function () {
      return DefaultLocaleConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCALE_CONFIG", function () {
      return LOCALE_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return LocaleService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxDaterangepickerMd", function () {
      return NgxDaterangepickerMd;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
    var LOCALE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('daterangepicker.config');
    /**
     *  DefaultLocaleConfig
     */

    var DefaultLocaleConfig = {
      direction: 'ltr',
      separator: ' - ',
      weekLabel: 'W',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      clearLabel: 'Clear',
      customRangeLabel: 'Custom range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    };

    var LocaleService = /*#__PURE__*/function () {
      function LocaleService(_config) {
        _classCallCheck(this, LocaleService);

        this._config = _config;
      }

      _createClass(LocaleService, [{
        key: "config",
        get: function get() {
          if (!this._config) {
            return DefaultLocaleConfig;
          }

          return Object.assign({}, DefaultLocaleConfig, this._config);
        }
      }]);

      return LocaleService;
    }();

    LocaleService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [LOCALE_CONFIG]
        }]
      }];
    };

    LocaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(LOCALE_CONFIG))], LocaleService);
    var DaterangepickerComponent_1;
    var moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;
    var SideEnum;

    (function (SideEnum) {
      SideEnum["left"] = "left";
      SideEnum["right"] = "right";
    })(SideEnum || (SideEnum = {}));

    var DaterangepickerComponent = DaterangepickerComponent_1 = /*#__PURE__*/function () {
      function DaterangepickerComponent(el, _ref, _localeService) {
        _classCallCheck(this, DaterangepickerComponent);

        this.el = el;
        this._ref = _ref;
        this._localeService = _localeService;
        this._old = {
          start: null,
          end: null
        };
        this.calendarVariables = {
          left: {},
          right: {}
        };
        this.tooltiptext = []; // for storing tooltiptext

        this.timepickerVariables = {
          left: {},
          right: {}
        };
        this.daterangepicker = {
          start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        };
        this.applyBtn = {
          disabled: false
        };
        this.startDate = moment$1().startOf('day');
        this.endDate = moment$1().endOf('day');
        this.dateLimit = null; // used in template for compile time support of enum values.

        this.sideEnum = SideEnum;
        this.minDate = null;
        this.maxDate = null;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.linkedCalendars = false;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.maxSpan = false;
        this.lockStartDate = false; // timepicker variables

        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false; // end of timepicker variables

        this.showClearButton = false;
        this.firstMonthDayClass = null;
        this.lastMonthDayClass = null;
        this.emptyWeekRowClass = null;
        this.firstDayOfNextMonthClass = null;
        this.lastDayOfPreviousMonthClass = null;
        this._locale = {}; // custom ranges

        this._ranges = {};
        this.showCancel = false;
        this.keepCalendarOpeningWithRange = false;
        this.showRangeLabelOnInput = false;
        this.customRangeDirection = false;
        this.rangesArray = []; // some state information

        this.isShown = false;
        this.inline = true;
        this.leftCalendar = {};
        this.rightCalendar = {};
        this.showCalInRanges = false;
        this.options = {}; // should get some opt from user

        this.closeOnAutoApply = true;
        this.choosedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(DaterangepickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._buildLocale();

          var daysOfWeek = _toConsumableArray(this.locale.daysOfWeek);

          if (this.locale.firstDay !== 0) {
            var iterator = this.locale.firstDay;

            while (iterator > 0) {
              daysOfWeek.push(daysOfWeek.shift());
              iterator--;
            }
          }

          this.locale.daysOfWeek = daysOfWeek;

          if (this.inline) {
            this._old.start = this.startDate.clone();
            this._old.end = this.endDate.clone();
          }

          if (this.startDate && this.timePicker) {
            this.setStartDate(this.startDate);
            this.renderTimePicker(SideEnum.left);
          }

          if (this.endDate && this.timePicker) {
            this.setEndDate(this.endDate);
            this.renderTimePicker(SideEnum.right);
          }

          this.updateMonthsInView();
          this.renderCalendar(SideEnum.left);
          this.renderCalendar(SideEnum.right);
          this.renderRanges();
        }
      }, {
        key: "renderRanges",
        value: function renderRanges() {
          this.rangesArray = [];
          var start, end;

          if (typeof this.ranges === 'object') {
            for (var range in this.ranges) {
              if (this.ranges[range]) {
                if (typeof this.ranges[range][0] === 'string') {
                  start = moment$1(this.ranges[range][0], this.locale.format);
                } else {
                  start = moment$1(this.ranges[range][0]);
                }

                if (typeof this.ranges[range][1] === 'string') {
                  end = moment$1(this.ranges[range][1], this.locale.format);
                } else {
                  end = moment$1(this.ranges[range][1]);
                } // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.


                if (this.minDate && start.isBefore(this.minDate)) {
                  start = this.minDate.clone();
                }

                var maxDate = this.maxDate;

                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                  maxDate = start.clone().add(this.maxSpan);
                }

                if (maxDate && end.isAfter(maxDate)) {
                  end = maxDate.clone();
                } // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.


                if (this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day') || maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day')) {
                  continue;
                } // Support unicode chars in the range names.


                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;
                this.ranges[rangeHtml] = [start, end];
              }
            }

            for (var _range in this.ranges) {
              if (this.ranges[_range]) {
                this.rangesArray.push(_range);
              }
            }

            if (this.showCustomRangeLabel) {
              this.rangesArray.push(this.locale.customRangeLabel);
            }

            this.showCalInRanges = !this.rangesArray.length || this.alwaysShowCalendars;

            if (!this.timePicker) {
              this.startDate = this.startDate.startOf('day');
              this.endDate = this.endDate.endOf('day');
            }
          }
        }
      }, {
        key: "renderTimePicker",
        value: function renderTimePicker(side) {
          if (side === SideEnum.right && !this.endDate) {
            return;
          }

          var selected, minDate;
          var maxDate = this.maxDate;

          if (side === SideEnum.left) {
            selected = this.startDate.clone(), minDate = this.minDate;
          } else if (side === SideEnum.right) {
            selected = this.endDate.clone(), minDate = this.startDate;
          }

          var start = this.timePicker24Hour ? 0 : 1;
          var end = this.timePicker24Hour ? 23 : 12;
          this.timepickerVariables[side] = {
            hours: [],
            minutes: [],
            minutesLabel: [],
            seconds: [],
            secondsLabel: [],
            disabledHours: [],
            disabledMinutes: [],
            disabledSeconds: [],
            selectedHour: 0,
            selectedMinute: 0,
            selectedSecond: 0
          }; // generate hours

          for (var i = start; i <= end; i++) {
            var i_in_24 = i;

            if (!this.timePicker24Hour) {
              i_in_24 = selected.hour() >= 12 ? i === 12 ? 12 : i + 12 : i === 12 ? 0 : i;
            }

            var time = selected.clone().hour(i_in_24);
            var disabled = false;

            if (minDate && time.minute(59).isBefore(minDate)) {
              disabled = true;
            }

            if (maxDate && time.minute(0).isAfter(maxDate)) {
              disabled = true;
            }

            this.timepickerVariables[side].hours.push(i);

            if (i_in_24 === selected.hour() && !disabled) {
              this.timepickerVariables[side].selectedHour = i;
            } else if (disabled) {
              this.timepickerVariables[side].disabledHours.push(i);
            }
          } // generate minutes


          for (var _i = 0; _i < 60; _i += this.timePickerIncrement) {
            var padded = _i < 10 ? '0' + _i : _i;

            var _time = selected.clone().minute(_i);

            var _disabled = false;

            if (minDate && _time.second(59).isBefore(minDate)) {
              _disabled = true;
            }

            if (maxDate && _time.second(0).isAfter(maxDate)) {
              _disabled = true;
            }

            this.timepickerVariables[side].minutes.push(_i);
            this.timepickerVariables[side].minutesLabel.push(padded);

            if (selected.minute() === _i && !_disabled) {
              this.timepickerVariables[side].selectedMinute = _i;
            } else if (_disabled) {
              this.timepickerVariables[side].disabledMinutes.push(_i);
            }
          } // generate seconds


          if (this.timePickerSeconds) {
            for (var _i2 = 0; _i2 < 60; _i2++) {
              var _padded = _i2 < 10 ? '0' + _i2 : _i2;

              var _time2 = selected.clone().second(_i2);

              var _disabled2 = false;

              if (minDate && _time2.isBefore(minDate)) {
                _disabled2 = true;
              }

              if (maxDate && _time2.isAfter(maxDate)) {
                _disabled2 = true;
              }

              this.timepickerVariables[side].seconds.push(_i2);
              this.timepickerVariables[side].secondsLabel.push(_padded);

              if (selected.second() === _i2 && !_disabled2) {
                this.timepickerVariables[side].selectedSecond = _i2;
              } else if (_disabled2) {
                this.timepickerVariables[side].disabledSeconds.push(_i2);
              }
            }
          } // generate AM/PM


          if (!this.timePicker24Hour) {
            var am_html = '';
            var pm_html = '';

            if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) {
              this.timepickerVariables[side].amDisabled = true;
            }

            if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) {
              this.timepickerVariables[side].pmDisabled = true;
            }

            if (selected.hour() >= 12) {
              this.timepickerVariables[side].ampmModel = 'PM';
            } else {
              this.timepickerVariables[side].ampmModel = 'AM';
            }
          }

          this.timepickerVariables[side].selected = selected;
        }
      }, {
        key: "renderCalendar",
        value: function renderCalendar(side) {
          var mainCalendar = side === SideEnum.left ? this.leftCalendar : this.rightCalendar;
          var month = mainCalendar.month.month();
          var year = mainCalendar.month.year();
          var hour = mainCalendar.month.hour();
          var minute = mainCalendar.month.minute();
          var second = mainCalendar.month.second();
          var daysInMonth = moment$1([year, month]).daysInMonth();
          var firstDay = moment$1([year, month, 1]);
          var lastDay = moment$1([year, month, daysInMonth]);
          var lastMonth = moment$1(firstDay).subtract(1, 'month').month();
          var lastYear = moment$1(firstDay).subtract(1, 'month').year();
          var daysInLastMonth = moment$1([lastYear, lastMonth]).daysInMonth();
          var dayOfWeek = firstDay.day(); // initialize a 6 rows x 7 columns array for the calendar

          var calendar = [];
          calendar.firstDay = firstDay;
          calendar.lastDay = lastDay;

          for (var i = 0; i < 6; i++) {
            calendar[i] = [];
          } // populate the calendar with date objects


          var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;

          if (startDay > daysInLastMonth) {
            startDay -= 7;
          }

          if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
          }

          var curDate = moment$1([lastYear, lastMonth, startDay, 12, minute, second]);

          for (var _i3 = 0, col = 0, row = 0; _i3 < 42; _i3++, col++, curDate = moment$1(curDate).add(24, 'hour')) {
            if (_i3 > 0 && col % 7 === 0) {
              col = 0;
              row++;
            }

            calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
            curDate.hour(12);

            if (this.minDate && calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side === 'left') {
              calendar[row][col] = this.minDate.clone();
            }

            if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') === this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side === 'right') {
              calendar[row][col] = this.maxDate.clone();
            }
          } // make the calendar object available to hoverDate/clickDate


          if (side === SideEnum.left) {
            this.leftCalendar.calendar = calendar;
          } else {
            this.rightCalendar.calendar = calendar;
          } //
          // Display the calendar
          //


          var minDate = side === 'left' ? this.minDate : this.startDate;
          var maxDate = this.maxDate; // adjust maxDate to reflect the dateLimit setting in order to
          // grey out end dates beyond the dateLimit

          if (this.endDate === null && this.dateLimit) {
            var maxLimit = this.startDate.clone().add(this.dateLimit, 'day').endOf('day');

            if (!maxDate || maxLimit.isBefore(maxDate)) {
              maxDate = maxLimit;
            }
          }

          this.calendarVariables[side] = {
            month: month,
            year: year,
            hour: hour,
            minute: minute,
            second: second,
            daysInMonth: daysInMonth,
            firstDay: firstDay,
            lastDay: lastDay,
            lastMonth: lastMonth,
            lastYear: lastYear,
            daysInLastMonth: daysInLastMonth,
            dayOfWeek: dayOfWeek,
            // other vars
            calRows: Array.from(Array(6).keys()),
            calCols: Array.from(Array(7).keys()),
            classes: {},
            minDate: minDate,
            maxDate: maxDate,
            calendar: calendar
          };

          if (this.showDropdowns) {
            var currentMonth = calendar[1][1].month();
            var currentYear = calendar[1][1].year();
            var realCurrentYear = moment$1().year();
            var maxYear = maxDate && maxDate.year() || realCurrentYear + 5;
            var minYear = minDate && minDate.year() || realCurrentYear - 50;
            var inMinYear = currentYear === minYear;
            var inMaxYear = currentYear === maxYear;
            var years = [];

            for (var y = minYear; y <= maxYear; y++) {
              years.push(y);
            }

            this.calendarVariables[side].dropdowns = {
              currentMonth: currentMonth,
              currentYear: currentYear,
              maxYear: maxYear,
              minYear: minYear,
              inMinYear: inMinYear,
              inMaxYear: inMaxYear,
              monthArrays: Array.from(Array(12).keys()),
              yearArrays: years
            };
          }

          this._buildCells(calendar, side);
        }
      }, {
        key: "setStartDate",
        value: function setStartDate(startDate) {
          if (typeof startDate === 'string') {
            this.startDate = moment$1(startDate, this.locale.format);
          }

          if (typeof startDate === 'object') {
            this.startDate = moment$1(startDate);
          }

          if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
          }

          if (this.timePicker && this.timePickerIncrement) {
            this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
          }

          if (this.minDate && this.startDate.isBefore(this.minDate)) {
            this.startDate = this.minDate.clone();

            if (this.timePicker && this.timePickerIncrement) {
              this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
          }

          if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
            this.startDate = this.maxDate.clone();

            if (this.timePicker && this.timePickerIncrement) {
              this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
          }

          if (!this.isShown) {
            this.updateElement();
          }

          this.startDateChanged.emit({
            startDate: this.startDate
          });
          this.updateMonthsInView();
        }
      }, {
        key: "setEndDate",
        value: function setEndDate(endDate) {
          if (typeof endDate === 'string') {
            this.endDate = moment$1(endDate, this.locale.format);
          }

          if (typeof endDate === 'object') {
            this.endDate = moment$1(endDate);
          }

          if (!this.timePicker) {
            this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');
          }

          if (this.timePicker && this.timePickerIncrement) {
            this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
          }

          if (this.endDate.isBefore(this.startDate)) {
            this.endDate = this.startDate.clone();
          }

          if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
            this.endDate = this.maxDate.clone();
          }

          if (this.dateLimit && this.startDate.clone().add(this.dateLimit, 'day').isBefore(this.endDate)) {
            this.endDate = this.startDate.clone().add(this.dateLimit, 'day');
          }

          if (!this.isShown) {// this.updateElement();
          }

          this.endDateChanged.emit({
            endDate: this.endDate
          });
          this.updateMonthsInView();
        }
      }, {
        key: "isInvalidDate",
        value: function isInvalidDate(date) {
          return false;
        }
      }, {
        key: "isCustomDate",
        value: function isCustomDate(date) {
          return false;
        }
      }, {
        key: "isTooltipDate",
        value: function isTooltipDate(date) {
          return null;
        }
      }, {
        key: "updateView",
        value: function updateView() {
          if (this.timePicker) {
            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);
          }

          this.updateMonthsInView();
          this.updateCalendars();
        }
      }, {
        key: "updateMonthsInView",
        value: function updateMonthsInView() {
          if (this.endDate) {
            // if both dates are visible already, do nothing
            if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate && this.leftCalendar && this.startDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') || this.startDate && this.rightCalendar && this.startDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM'))) {
              return;
            }

            if (this.startDate) {
              this.leftCalendar.month = this.startDate.clone().date(2);

              if (!this.linkedCalendars && (this.endDate.month() !== this.startDate.month() || this.endDate.year() !== this.startDate.year())) {
                this.rightCalendar.month = this.endDate.clone().date(2);
              } else {
                this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
              }
            }
          } else {
            if (this.leftCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM')) {
              this.leftCalendar.month = this.startDate.clone().date(2);
              this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
            }
          }

          if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
            this.rightCalendar.month = this.maxDate.clone().date(2);
            this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
          }
        }
        /**
         *  This is responsible for updating the calendars
         */

      }, {
        key: "updateCalendars",
        value: function updateCalendars() {
          this.renderCalendar(SideEnum.left);
          this.renderCalendar(SideEnum.right);

          if (this.endDate === null) {
            return;
          }

          this.calculateChosenLabel();
        }
      }, {
        key: "updateElement",
        value: function updateElement() {
          var format = this.locale.displayFormat ? this.locale.displayFormat : this.locale.format;

          if (!this.singleDatePicker && this.autoUpdateInput) {
            if (this.startDate && this.endDate) {
              // if we use ranges and should show range label on input
              if (this.rangesArray.length && this.showRangeLabelOnInput === true && this.chosenRange && this.locale.customRangeLabel !== this.chosenRange) {
                this.chosenLabel = this.chosenRange;
              } else {
                this.chosenLabel = this.startDate.format(format) + this.locale.separator + this.endDate.format(format);
              }
            }
          } else if (this.autoUpdateInput) {
            this.chosenLabel = this.startDate.format(format);
          }
        }
      }, {
        key: "remove",
        value: function remove() {
          this.isShown = false;
        }
        /**
         * this should calculate the label
         */

      }, {
        key: "calculateChosenLabel",
        value: function calculateChosenLabel() {
          if (!this.locale || !this.locale.separator) {
            this._buildLocale();
          }

          var customRange = true;
          var i = 0;

          if (this.rangesArray.length > 0) {
            for (var range in this.ranges) {
              if (this.ranges[range]) {
                if (this.timePicker) {
                  var format = this.timePickerSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm'; // ignore times when comparing dates if time picker seconds is not enabled

                  if (this.startDate.format(format) === this.ranges[range][0].format(format) && this.endDate.format(format) === this.ranges[range][1].format(format)) {
                    customRange = false;
                    this.chosenRange = this.rangesArray[i];
                    break;
                  }
                } else {
                  // ignore times when comparing dates if time picker is not enabled
                  if (this.startDate.format('YYYY-MM-DD') === this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') === this.ranges[range][1].format('YYYY-MM-DD')) {
                    customRange = false;
                    this.chosenRange = this.rangesArray[i];
                    break;
                  }
                }

                i++;
              }
            }

            if (customRange) {
              if (this.showCustomRangeLabel) {
                this.chosenRange = this.locale.customRangeLabel;
              } else {
                this.chosenRange = null;
              } // if custom label: show calendar


              this.showCalInRanges = true;
            }
          }

          this.updateElement();
        }
      }, {
        key: "clickApply",
        value: function clickApply(e) {
          if (!this.singleDatePicker && this.startDate && !this.endDate) {
            this.endDate = this.startDate.clone();
            this.calculateChosenLabel();
          }

          if (this.isInvalidDate && this.startDate && this.endDate) {
            // get if there are invalid date between range
            var d = this.startDate.clone();

            while (d.isBefore(this.endDate)) {
              if (this.isInvalidDate(d)) {
                this.endDate = d.subtract(1, 'days');
                this.calculateChosenLabel();
                break;
              }

              d.add(1, 'days');
            }
          }

          if (this.chosenLabel) {
            this.choosedDate.emit({
              chosenLabel: this.chosenLabel,
              startDate: this.startDate,
              endDate: this.endDate
            });
          }

          this.datesUpdated.emit({
            startDate: this.startDate,
            endDate: this.endDate
          });

          if (e || this.closeOnAutoApply && !e) {
            this.hide();
          }
        }
      }, {
        key: "clickCancel",
        value: function clickCancel(e) {
          this.startDate = this._old.start;
          this.endDate = this._old.end;

          if (this.inline) {
            this.updateView();
          }

          this.hide();
        }
        /**
         * called when month is changed
         * @param monthEvent get value in event.target.value
         * @param side left or right
         */

      }, {
        key: "monthChanged",
        value: function monthChanged(monthEvent, side) {
          var year = this.calendarVariables[side].dropdowns.currentYear;
          var month = parseInt(monthEvent.target.value, 10);
          this.monthOrYearChanged(month, year, side);
        }
        /**
         * called when year is changed
         * @param yearEvent get value in event.target.value
         * @param side left or right
         */

      }, {
        key: "yearChanged",
        value: function yearChanged(yearEvent, side) {
          var month = this.calendarVariables[side].dropdowns.currentMonth;
          var year = parseInt(yearEvent.target.value, 10);
          this.monthOrYearChanged(month, year, side);
        }
        /**
         * called when time is changed
         * @param timeEvent  an event
         * @param side left or right
         */

      }, {
        key: "timeChanged",
        value: function timeChanged(timeEvent, side) {
          var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
          var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
          var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;

          if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;

            if (ampm === 'PM' && hour < 12) {
              hour += 12;
            }

            if (ampm === 'AM' && hour === 12) {
              hour = 0;
            }
          }

          if (side === SideEnum.left) {
            var start = this.startDate.clone();
            start.hour(hour);
            start.minute(minute);
            start.second(second);
            this.setStartDate(start);

            if (this.singleDatePicker) {
              this.endDate = this.startDate.clone();
            } else if (this.endDate && this.endDate.format('YYYY-MM-DD') === start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
              this.setEndDate(start.clone());
            }
          } else if (this.endDate) {
            var end = this.endDate.clone();
            end.hour(hour);
            end.minute(minute);
            end.second(second);
            this.setEndDate(end);
          } // update the calendars so all clickable dates reflect the new time component


          this.updateCalendars(); // re-render the time pickers because changing one selection can affect what's enabled in another

          this.renderTimePicker(SideEnum.left);
          this.renderTimePicker(SideEnum.right);

          if (this.autoApply) {
            this.clickApply();
          }
        }
        /**
         *  call when month or year changed
         * @param month month number 0 -11
         * @param year year eg: 1995
         * @param side left or right
         */

      }, {
        key: "monthOrYearChanged",
        value: function monthOrYearChanged(month, year, side) {
          var isLeft = side === SideEnum.left;

          if (!isLeft) {
            if (year < this.startDate.year() || year === this.startDate.year() && month < this.startDate.month()) {
              month = this.startDate.month();
              year = this.startDate.year();
            }
          }

          if (this.minDate) {
            if (year < this.minDate.year() || year === this.minDate.year() && month < this.minDate.month()) {
              month = this.minDate.month();
              year = this.minDate.year();
            }
          }

          if (this.maxDate) {
            if (year > this.maxDate.year() || year === this.maxDate.year() && month > this.maxDate.month()) {
              month = this.maxDate.month();
              year = this.maxDate.year();
            }
          }

          this.calendarVariables[side].dropdowns.currentYear = year;
          this.calendarVariables[side].dropdowns.currentMonth = month;

          if (isLeft) {
            this.leftCalendar.month.month(month).year(year);

            if (this.linkedCalendars) {
              this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            }
          } else {
            this.rightCalendar.month.month(month).year(year);

            if (this.linkedCalendars) {
              this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
          }

          this.updateCalendars();
        }
        /**
         * Click on previous month
         * @param side left or right calendar
         */

      }, {
        key: "clickPrev",
        value: function clickPrev(side) {
          if (side === SideEnum.left) {
            this.leftCalendar.month.subtract(1, 'month');

            if (this.linkedCalendars) {
              this.rightCalendar.month.subtract(1, 'month');
            }
          } else {
            this.rightCalendar.month.subtract(1, 'month');
          }

          this.updateCalendars();
        }
        /**
         * Click on next month
         * @param side left or right calendar
         */

      }, {
        key: "clickNext",
        value: function clickNext(side) {
          if (side === SideEnum.left) {
            this.leftCalendar.month.add(1, 'month');
          } else {
            this.rightCalendar.month.add(1, 'month');

            if (this.linkedCalendars) {
              this.leftCalendar.month.add(1, 'month');
            }
          }

          this.updateCalendars();
        }
        /**
         * When hovering a date
         * @param e event: get value by e.target.value
         * @param side left or right
         * @param row row position of the current date clicked
         * @param col col position of the current date clicked
         */

      }, {
        key: "hoverDate",
        value: function hoverDate(e, side, row, col) {
          var leftCalDate = this.calendarVariables.left.calendar[row][col];
          var rightCalDate = this.calendarVariables.right.calendar[row][col];
          var tooltip = side === SideEnum.left ? this.tooltiptext[leftCalDate] : this.tooltiptext[rightCalDate];

          if (tooltip.length > 0) {
            e.target.setAttribute('title', tooltip);
          }
        }
        /**
         * When selecting a date
         * @param e event: get value by e.target.value
         * @param side left or right
         * @param row row position of the current date clicked
         * @param col col position of the current date clicked
         */

      }, {
        key: "clickDate",
        value: function clickDate(e, side, row, col) {
          if (e.target.tagName === 'TD') {
            if (!e.target.classList.contains('available')) {
              return;
            }
          } else if (e.target.tagName === 'SPAN') {
            if (!e.target.parentElement.classList.contains('available')) {
              return;
            }
          }

          if (this.rangesArray.length) {
            this.chosenRange = this.locale.customRangeLabel;
          }

          var date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

          if ((this.endDate || date.isBefore(this.startDate, 'day') && this.customRangeDirection === false) && this.lockStartDate === false) {
            // picking start
            if (this.timePicker) {
              date = this._getDateWithTime(date, SideEnum.left);
            }

            this.endDate = null;
            this.setStartDate(date.clone());
          } else if (!this.endDate && date.isBefore(this.startDate) && this.customRangeDirection === false) {
            // special case: clicking the same date for start/end,
            // but the time of the end date is before the start date
            this.setEndDate(this.startDate.clone());
          } else {
            // picking end
            if (this.timePicker) {
              date = this._getDateWithTime(date, SideEnum.right);
            }

            if (date.isBefore(this.startDate, 'day') === true && this.customRangeDirection === true) {
              this.setEndDate(this.startDate);
              this.setStartDate(date.clone());
            } else {
              this.setEndDate(date.clone());
            }

            if (this.autoApply) {
              this.calculateChosenLabel();
              this.clickApply();
            }
          }

          if (this.singleDatePicker) {
            this.setEndDate(this.startDate);
            this.updateElement();

            if (this.autoApply) {
              this.clickApply();
            }
          }

          this.updateView();

          if (this.autoApply && this.startDate && this.endDate) {
            this.clickApply();
          } // This is to cancel the blur event handler if the mouse was in one of the inputs


          e.stopPropagation();
        }
        /**
         *  Click on the custom range
         * @param e: Event
         * @param label
         */

      }, {
        key: "clickRange",
        value: function clickRange(e, label) {
          this.chosenRange = label;

          if (label === this.locale.customRangeLabel) {
            this.isShown = true; // show calendars

            this.showCalInRanges = true;
          } else {
            var dates = this.ranges[label];
            this.startDate = dates[0].clone();
            this.endDate = dates[1].clone();

            if (this.showRangeLabelOnInput && label !== this.locale.customRangeLabel) {
              this.chosenLabel = label;
            } else {
              this.calculateChosenLabel();
            }

            this.showCalInRanges = !this.rangesArray.length || this.alwaysShowCalendars;

            if (!this.timePicker) {
              this.startDate.startOf('day');
              this.endDate.endOf('day');
            }

            if (!this.alwaysShowCalendars) {
              this.isShown = false; // hide calendars
            }

            this.rangeClicked.emit({
              label: label,
              dates: dates
            });

            if (!this.keepCalendarOpeningWithRange) {
              this.clickApply();
            } else {
              if (!this.alwaysShowCalendars) {
                return this.clickApply();
              }

              if (this.maxDate && this.maxDate.isSame(dates[0], 'month')) {
                this.rightCalendar.month.month(dates[0].month());
                this.rightCalendar.month.year(dates[0].year());
                this.leftCalendar.month.month(dates[0].month() - 1);
                this.leftCalendar.month.year(dates[1].year());
              } else {
                this.leftCalendar.month.month(dates[0].month());
                this.leftCalendar.month.year(dates[0].year()); // get the next year

                var nextMonth = dates[0].clone().add(1, 'month');
                this.rightCalendar.month.month(nextMonth.month());
                this.rightCalendar.month.year(nextMonth.year());
              }

              this.updateCalendars();

              if (this.timePicker) {
                this.renderTimePicker(SideEnum.left);
                this.renderTimePicker(SideEnum.right);
              }
            }
          }
        }
      }, {
        key: "show",
        value: function show(e) {
          if (this.isShown) {
            return;
          }

          this._old.start = this.startDate.clone();
          this._old.end = this.endDate.clone();
          this.isShown = true;
          this.updateView();
        }
      }, {
        key: "hide",
        value: function hide(e) {
          if (!this.isShown) {
            return;
          } // incomplete date selection, revert to last values


          if (!this.endDate) {
            if (this._old.start) {
              this.startDate = this._old.start.clone();
            }

            if (this._old.end) {
              this.endDate = this._old.end.clone();
            }
          } // if a new date range was selected, invoke the user callback function


          if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) {} // this.callback(this.startDate, this.endDate, this.chosenLabel);
          // if picker is attached to a text input, update it


          this.updateElement();
          this.isShown = false;

          this._ref.detectChanges();
        }
        /**
         * handle click on all element in the component, useful for outside of click
         * @param e event
         */

      }, {
        key: "handleInternalClick",
        value: function handleInternalClick(e) {
          e.stopPropagation();
        }
        /**
         * update the locale options
         * @param locale
         */

      }, {
        key: "updateLocale",
        value: function updateLocale(locale) {
          for (var key in locale) {
            if (locale.hasOwnProperty(key)) {
              this.locale[key] = locale[key];

              if (key === 'customRangeLabel') {
                this.renderRanges();
              }
            }
          }
        }
        /**
         *  clear the daterange picker
         */

      }, {
        key: "clear",
        value: function clear() {
          this.startDate = moment$1().startOf('day');
          this.endDate = moment$1().endOf('day');
          this.choosedDate.emit({
            chosenLabel: '',
            startDate: null,
            endDate: null
          });
          this.datesUpdated.emit({
            startDate: null,
            endDate: null
          });
          this.hide();
        }
        /**
         * Find out if the selected range should be disabled if it doesn't
         * fit into minDate and maxDate limitations.
         */

      }, {
        key: "disableRange",
        value: function disableRange(range) {
          var _this = this;

          if (range === this.locale.customRangeLabel) {
            return false;
          }

          var rangeMarkers = this.ranges[range];
          var areBothBefore = rangeMarkers.every(function (date) {
            if (!_this.minDate) {
              return false;
            }

            return date.isBefore(_this.minDate);
          });
          var areBothAfter = rangeMarkers.every(function (date) {
            if (!_this.maxDate) {
              return false;
            }

            return date.isAfter(_this.maxDate);
          });
          return areBothBefore || areBothAfter;
        }
        /**
         *
         * @param date the date to add time
         * @param side left or right
         */

      }, {
        key: "_getDateWithTime",
        value: function _getDateWithTime(date, side) {
          var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);

          if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;

            if (ampm === 'PM' && hour < 12) {
              hour += 12;
            }

            if (ampm === 'AM' && hour === 12) {
              hour = 0;
            }
          }

          var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
          var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
          return date.clone().hour(hour).minute(minute).second(second);
        }
        /**
         *  build the locale config
         */

      }, {
        key: "_buildLocale",
        value: function _buildLocale() {
          this.locale = Object.assign({}, this._localeService.config, this.locale);

          if (!this.locale.format) {
            if (this.timePicker) {
              this.locale.format = moment$1.localeData().longDateFormat('lll');
            } else {
              this.locale.format = moment$1.localeData().longDateFormat('L');
            }
          }
        }
      }, {
        key: "_buildCells",
        value: function _buildCells(calendar, side) {
          for (var row = 0; row < 6; row++) {
            this.calendarVariables[side].classes[row] = {};
            var rowClasses = [];

            if (this.emptyWeekRowClass && !this.hasCurrentMonthDays(this.calendarVariables[side].month, calendar[row])) {
              rowClasses.push(this.emptyWeekRowClass);
            }

            for (var col = 0; col < 7; col++) {
              var classes = []; // highlight today's date

              if (calendar[row][col].isSame(new Date(), 'day')) {
                classes.push('today');
              } // highlight weekends


              if (calendar[row][col].isoWeekday() > 5) {
                classes.push('weekend');
              } // grey out the dates in other months displayed at beginning and end of this calendar


              if (calendar[row][col].month() !== calendar[1][1].month()) {
                classes.push('off'); // mark the last day of the previous month in this calendar

                if (this.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() || calendar[1][1].month() === 0) && calendar[row][col].date() === this.calendarVariables[side].daysInLastMonth) {
                  classes.push(this.lastDayOfPreviousMonthClass);
                } // mark the first day of the next month in this calendar


                if (this.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() || calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                  classes.push(this.firstDayOfNextMonthClass);
                }
              } // mark the first day of the current month with a custom class


              if (this.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.firstDay.date()) {
                classes.push(this.firstMonthDayClass);
              } // mark the last day of the current month with a custom class


              if (this.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.lastDay.date()) {
                classes.push(this.lastMonthDayClass);
              } // don't allow selection of dates before the minimum date


              if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) {
                classes.push('off', 'disabled');
              } // don't allow selection of dates after the maximum date


              if (this.calendarVariables[side].maxDate && calendar[row][col].isAfter(this.calendarVariables[side].maxDate, 'day')) {
                classes.push('off', 'disabled');
              } // don't allow selection of date if a custom function decides it's invalid


              if (this.isInvalidDate(calendar[row][col])) {
                classes.push('off', 'disabled', 'invalid');
              } // highlight the currently selected start date


              if (this.startDate && calendar[row][col].format('YYYY-MM-DD') === this.startDate.format('YYYY-MM-DD')) {
                classes.push('active', 'start-date');
              } // highlight the currently selected end date


              if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') === this.endDate.format('YYYY-MM-DD')) {
                classes.push('active', 'end-date');
              } // highlight dates in-between the selected dates


              if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) {
                classes.push('in-range');
              } // apply custom classes for this date


              var isCustom = this.isCustomDate(calendar[row][col]);

              if (isCustom !== false) {
                if (typeof isCustom === 'string') {
                  classes.push(isCustom);
                } else {
                  Array.prototype.push.apply(classes, isCustom);
                }
              } // apply custom tooltip for this date


              var isTooltip = this.isTooltipDate(calendar[row][col]);

              if (isTooltip) {
                if (typeof isTooltip === 'string') {
                  this.tooltiptext[calendar[row][col]] = isTooltip; // setting tooltiptext for custom date
                } else {
                  this.tooltiptext[calendar[row][col]] = 'Put the tooltip as the returned value of isTooltipDate';
                }
              } else {
                this.tooltiptext[calendar[row][col]] = '';
              } // store classes var


              var cname = '',
                  disabled = false;

              for (var i = 0; i < classes.length; i++) {
                cname += classes[i] + ' ';

                if (classes[i] === 'disabled') {
                  disabled = true;
                }
              }

              if (!disabled) {
                cname += 'available';
              }

              this.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
            }

            this.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
          }
        }
        /**
         * Find out if the current calendar row has current month days
         * (as opposed to consisting of only previous/next month days)
         */

      }, {
        key: "hasCurrentMonthDays",
        value: function hasCurrentMonthDays(currentMonth, row) {
          for (var day = 0; day < 7; day++) {
            if (row[day].month() === currentMonth) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "locale",
        set: function set(value) {
          this._locale = Object.assign({}, this._localeService.config, value);
        },
        get: function get() {
          return this._locale;
        }
      }, {
        key: "ranges",
        set: function set(value) {
          this._ranges = value;
          this.renderRanges();
        },
        get: function get() {
          return this._ranges;
        }
      }]);

      return DaterangepickerComponent;
    }();

    DaterangepickerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: LocaleService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "startDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "endDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "dateLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "autoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "singleDatePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showDropdowns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showISOWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "linkedCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "autoUpdateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "alwaysShowCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "maxSpan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lockStartDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePicker24Hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePickerIncrement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePickerSeconds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showClearButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "firstMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lastMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "emptyWeekRowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "firstDayOfNextMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lastDayOfPreviousMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "locale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "ranges", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showCustomRangeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "keepCalendarOpeningWithRange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showRangeLabelOnInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "customRangeDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "drops", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "opens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "closeOnAutoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "choosedDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "rangeClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "datesUpdated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "startDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "endDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('pickerContainer')], DaterangepickerComponent.prototype, "pickerContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isInvalidDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isCustomDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isTooltipDate", null);
    DaterangepickerComponent = DaterangepickerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ngx-daterangepicker-material',
      template: "<div class=\"md-drppicker\" #pickerContainer\n[ngClass]=\"{\n    ltr: locale.direction === 'ltr',\n    rtl: this.locale.direction === 'rtl',\n    'shown': isShown || inline,\n    'hidden': !isShown && !inline,\n    'inline': inline,\n    'double': !singleDatePicker && showCalInRanges,\n    'show-ranges': rangesArray.length\n}\" [class]=\"'drops-' + drops + '-' + opens\">\n    <div class=\"ranges\">\n        <ul>\n          <li *ngFor=\"let range of rangesArray\">\n            <button type=\"button\"\n                    (click)=\"clickRange($event, range)\"\n                    [disabled]=\"disableRange(range)\"\n                    [ngClass]=\"{'active': range === chosenRange}\">{{range}}</button>\n          </li>\n        </ul>\n    </div>\n    <div class=\"calendar\" [ngClass]=\"{right: singleDatePicker, left: !singleDatePicker}\"\n        *ngIf=\"showCalInRanges\">\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true)\">\n                            <th (click)=\"clickPrev(sideEnum.left)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!(!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month drp-animate\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.left.dropdowns\">\n                                <div class=\"dropdowns\">\n                                        {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}\n                                        <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.left)\">\n                                                <option\n                                                [disabled]=\"(calendarVariables.left.dropdowns.inMinYear && m < calendarVariables.left.minDate.month()) || (calendarVariables.left.dropdowns.inMaxYear && m > calendarVariables.left.maxDate.month())\"\n                                                *ngFor=\"let m of calendarVariables.left.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.left.dropdowns.currentMonth == m\">\n                                                    {{locale.monthNames[m]}}\n                                                </option>\n                                        </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                    {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                                    <select class=\"yearselect\"  (change)=\"yearChanged($event, sideEnum.left)\">\n                                        <option *ngFor=\"let y of calendarVariables.left.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.left.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.left.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}  {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                        <ng-container *ngIf=\"(!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker )\">\n                            <th class=\"next available\" (click)=\"clickNext(sideEnum.left)\">\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker ))\">\n                            <th></th>\n                        </ng-container>\n                    </tr>\n                    <tr class='week-days'>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody class=\"drp-animate\">\n                    <tr *ngFor=\"let row of calendarVariables.left.calRows\" [class]=\"calendarVariables.left.classes[row].classList\">\n                        <!-- add week number -->\n                        <td  class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <!-- cal -->\n                        <td *ngFor=\"let col of calendarVariables.left.calCols\" [class]=\"calendarVariables.left.classes[row][col]\" (click)=\"clickDate($event, sideEnum.left, row, col)\" (mouseenter)=\"hoverDate($event, sideEnum.left, row, col)\">\n                            <span>{{calendarVariables.left.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"hourselect select-item\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.left.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item secondselect\" *ngIf=\"timePickerSeconds\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.left.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item ampmselect\" *ngIf=\"!timePicker24Hour\" [(ngModel)]=\"timepickerVariables.left.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.left.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.left.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"calendar right\"\n        *ngIf=\"showCalInRanges && !singleDatePicker\"\n        >\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"(!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars)\">\n                            <th (click)=\"clickPrev(sideEnum.right)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.right.dropdowns\">\n                                <div class=\"dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}\n                                    <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.right)\">\n                                            <option\n                                            [disabled]=\"(calendarVariables.right.dropdowns.inMinYear && m < calendarVariables.right.minDate.month()) || (calendarVariables.right.dropdowns.inMaxYear && m > calendarVariables.right.maxDate.month())\"\n                                            *ngFor=\"let m of calendarVariables.right.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.right.dropdowns.currentMonth == m\">\n                                                {{locale.monthNames[m]}}\n                                            </option>\n                                    </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                        {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                                        <select class=\"yearselect\" (change)=\"yearChanged($event, sideEnum.right)\">\n                                        <option *ngFor=\"let y of calendarVariables.right.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.right.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.right.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}  {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                            <ng-container *ngIf=\"!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true)\">\n                                <th class=\"next available\" (click)=\"clickNext(sideEnum.right)\">\n                                </th>\n                            </ng-container>\n                            <ng-container *ngIf=\"!(!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true))\">\n                                <th></th>\n                            </ng-container>\n                    </tr>\n\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of calendarVariables.right.calRows\" [class]=\"calendarVariables.right.classes[row].classList\">\n                        <td class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <td *ngFor=\"let col of calendarVariables.right.calCols\" [class]=\"calendarVariables.right.classes[row][col]\" (click)=\"clickDate($event, sideEnum.right, row, col)\" (mouseenter)=\"hoverDate($event, sideEnum.right, row, col)\">\n                            <span>{{calendarVariables.right.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"select-item hourselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.right.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"timePickerSeconds\" class=\"select-item secondselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.right.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"!timePicker24Hour\" class=\"select-item ampmselect\" [(ngModel)]=\"timepickerVariables.right.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.right.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.right.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"buttons\" *ngIf=\"!autoApply && ( !rangesArray.length || (showCalInRanges && !singleDatePicker))\">\n        <div class=\"buttons_input\">\n            <button  *ngIf=\"showClearButton\" class=\"btn btn-default clear\" type=\"button\" (click)=\"clear()\" [title]=\"locale.clearLabel\">\n                {{locale.clearLabel}}\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 -5 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>\n            </button>\n            <button class=\"btn btn-default\" *ngIf=\"showCancel\" type=\"button\" (click)=\"clickCancel($event)\">{{locale.cancelLabel}}</button>\n            <button class=\"btn\"  [disabled]=\"applyBtn.disabled\" type=\"button\" (click)=\"clickApply($event)\">{{locale.applyLabel}}</button>\n        </div>\n    </div>\n</div>\n",
      host: {
        '(click)': 'handleInternalClick($event)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return DaterangepickerComponent_1;
        }),
        multi: true
      }],
      styles: [".md-drppicker{position:absolute;font-family:Roboto,sans-serif;color:inherit;border-radius:4px;width:278px;padding:4px;margin-top:-10px;overflow:hidden;z-index:1000;font-size:14px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12)}.md-drppicker.double{width:auto}.md-drppicker.inline{position:relative;display:inline-block}.md-drppicker:after,.md-drppicker:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:''}.md-drppicker.openscenter:after,.md-drppicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.md-drppicker.single .calendar,.md-drppicker.single .ranges{float:none}.md-drppicker.shown{transform:scale(1);transition:.1s ease-in-out;transform-origin:0 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.shown.drops-up-left{transform-origin:100% 100%}.md-drppicker.shown.drops-up-right{transform-origin:0 100%}.md-drppicker.shown.drops-down-left{transform-origin:100% 0}.md-drppicker.shown.drops-down-right{transform-origin:0 0}.md-drppicker.shown.drops-down-center{transform-origin:NaN}.md-drppicker.shown.drops-up-center{transform-origin:50%}.md-drppicker.shown .calendar{display:block}.md-drppicker.hidden{transition:.1s;transform:scale(0);transform-origin:0 0;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.hidden.drops-up-left{transform-origin:100% 100%}.md-drppicker.hidden.drops-up-right{transform-origin:0 100%}.md-drppicker.hidden.drops-down-left{transform-origin:100% 0}.md-drppicker.hidden.drops-down-right{transform-origin:0 0}.md-drppicker.hidden.drops-down-center{transform-origin:NaN}.md-drppicker.hidden.drops-up-center{transform-origin:50%}.md-drppicker.hidden .calendar{display:none}.md-drppicker .calendar{max-width:270px;margin:4px}.md-drppicker .calendar.single .calendar-table{border:none}.md-drppicker .calendar td,.md-drppicker .calendar th{padding:0;white-space:nowrap;text-align:center;min-width:32px}.md-drppicker .calendar td span,.md-drppicker .calendar th span{pointer-events:none}.md-drppicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.md-drppicker table{width:100%;margin:0}.md-drppicker th{color:#988c8c}.md-drppicker td,.md-drppicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer;height:2em;width:2em}.md-drppicker td.available.prev,.md-drppicker th.available.prev{display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.prev:hover,.md-drppicker th.available.prev:hover{margin:0}.md-drppicker td.available.next,.md-drppicker th.available.next{transform:rotate(180deg);display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.next:hover,.md-drppicker th.available.next:hover{margin:0;transform:rotate(180deg)}.md-drppicker td.available:hover,.md-drppicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit;background-repeat:no-repeat;background-size:.5em;background-position:center;margin:.25em 0;opacity:.8;border-radius:2em;transform:scale(1);transition:450ms cubic-bezier(.23,1,.32,1)}.md-drppicker td.week,.md-drppicker th.week{font-size:80%;color:#ccc}.md-drppicker td{margin:.25em 0;opacity:.8;transition:450ms cubic-bezier(.23,1,.32,1);border-radius:2em;transform:scale(1)}.md-drppicker td.off,.md-drppicker td.off.end-date,.md-drppicker td.off.in-range,.md-drppicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.md-drppicker td.in-range{background-color:#dde2e4;border-color:transparent;color:#000;border-radius:0}.md-drppicker td.start-date{border-radius:2em 0 0 2em}.md-drppicker td.end-date{border-radius:0 2em 2em 0}.md-drppicker td.start-date.end-date{border-radius:4px}.md-drppicker td.active{transition:background .3s ease-out;background:rgba(0,0,0,.1)}.md-drppicker td.active,.md-drppicker td.active:hover{background-color:#3f51b5;border-color:transparent;color:#fff}.md-drppicker th.month{width:auto}.md-drppicker option.disabled,.md-drppicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.md-drppicker .dropdowns{background-repeat:no-repeat;background-size:10px;background-position-y:center;background-position-x:right;width:50px;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)}.md-drppicker .dropdowns select{display:inline-block;background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.md-drppicker .dropdowns select.ampmselect,.md-drppicker .dropdowns select.hourselect,.md-drppicker .dropdowns select.minuteselect,.md-drppicker .dropdowns select.secondselect{width:50px;margin:0 auto;background:#eee;border:1px solid #eee;padding:2px;outline:0;font-size:12px}.md-drppicker .dropdowns select.monthselect,.md-drppicker .dropdowns select.yearselect{font-size:12px;height:auto;cursor:pointer;opacity:0;position:absolute;top:0;left:0;margin:0;padding:0}.md-drppicker th.month>div{position:relative;display:inline-block}.md-drppicker .calendar-time{text-align:center;margin:4px auto 0;line-height:30px;position:relative}.md-drppicker .calendar-time .select{display:inline}.md-drppicker .calendar-time .select .select-item{display:inline-block;width:auto;position:relative;font-family:inherit;background-color:transparent;padding:10px 10px 10px 0;font-size:18px;border-radius:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}.md-drppicker .calendar-time .select .select-item:after{position:absolute;top:18px;right:10px;width:0;height:0;padding:0;content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid rgba(0,0,0,.12);pointer-events:none}.md-drppicker .calendar-time .select .select-item:focus{outline:0}.md-drppicker .calendar-time .select .select-item .select-label{color:rgba(0,0,0,.26);font-size:16px;font-weight:400;position:absolute;pointer-events:none;left:0;top:10px;transition:.2s}.md-drppicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.md-drppicker .label-input{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 auto 5px;padding:0 0 0 28px;width:100%}.md-drppicker .label-input.active{border:1px solid #08c;border-radius:4px}.md-drppicker .md-drppicker_input{position:relative;padding:0 30px 0 0}.md-drppicker .md-drppicker_input i,.md-drppicker .md-drppicker_input svg{position:absolute;left:8px;top:8px}.md-drppicker.rtl .label-input{padding-right:28px;padding-left:6px}.md-drppicker.rtl .md-drppicker_input i,.md-drppicker.rtl .md-drppicker_input svg{left:auto;right:8px}.md-drppicker .show-ranges .drp-calendar.left{border-left:1px solid #ddd}.md-drppicker .ranges{float:none;text-align:left;margin:0}.md-drppicker .ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.md-drppicker .ranges ul li{font-size:12px}.md-drppicker .ranges ul li button{padding:8px 12px;width:100%;background:0 0;border:none;text-align:left;cursor:pointer}.md-drppicker .ranges ul li button.active{background-color:#3f51b5;color:#fff}.md-drppicker .ranges ul li button[disabled]{opacity:.3}.md-drppicker .ranges ul li button:active{background:0 0}.md-drppicker .ranges ul li:hover{background-color:#eee}.md-drppicker .show-calendar .ranges{margin-top:8px}.md-drppicker [hidden]{display:none}.md-drppicker .buttons{text-align:right;margin:0 5px 5px 0}.md-drppicker .btn{position:relative;overflow:hidden;border-width:0;outline:0;padding:0 6px;cursor:pointer;border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.6);background-color:#3f51b5;color:#ecf0f1;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none}.md-drppicker .btn:focus,.md-drppicker .btn:hover{background-color:#3f51b5}.md-drppicker .btn>*{position:relative}.md-drppicker .btn span{display:block;padding:12px 24px}.md-drppicker .btn:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}.md-drppicker .btn:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}.md-drppicker .btn:disabled{opacity:.5}.md-drppicker .btn.btn-default{color:#000;background-color:#dcdcdc}.md-drppicker .clear{box-shadow:none;background-color:#fff!important}.md-drppicker .clear svg{color:#eb3232;fill:currentColor}@media (min-width:564px){.md-drppicker{width:auto}.md-drppicker.single .calendar.left{clear:none}.md-drppicker.ltr{direction:ltr;text-align:left}.md-drppicker.ltr .calendar.left{clear:left}.md-drppicker.ltr .calendar.left .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;padding-right:12px}.md-drppicker.ltr .calendar.right{margin-left:0}.md-drppicker.ltr .calendar.right .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.ltr .left .md-drppicker_input,.md-drppicker.ltr .right .md-drppicker_input{padding-right:35px}.md-drppicker.ltr .calendar,.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl{direction:rtl;text-align:right}.md-drppicker.rtl .calendar.left{clear:right;margin-left:0}.md-drppicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.rtl .calendar.right{margin-right:0}.md-drppicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.md-drppicker.rtl .calendar.left .calendar-table,.md-drppicker.rtl .left .md-drppicker_input{padding-left:12px}.md-drppicker.rtl .calendar,.md-drppicker.rtl .ranges{text-align:right;float:right}.drp-animate{transform:translate(0);transition:transform .2s,opacity .2s}.drp-animate.drp-picker-site-this{transition-timing-function:linear}.drp-animate.drp-animate-right{transform:translateX(10%);opacity:0}.drp-animate.drp-animate-left{transform:translateX(-10%);opacity:0}}@media (min-width:730px){.md-drppicker .ranges{width:auto}.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl .ranges{float:right}.md-drppicker .calendar.left{clear:none!important}}"]
    })], DaterangepickerComponent);
    var DaterangepickerDirective_1;
    var moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;

    var DaterangepickerDirective = DaterangepickerDirective_1 = /*#__PURE__*/function () {
      function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
        _classCallCheck(this, DaterangepickerDirective);

        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._localeService = _localeService;
        this.elementRef = elementRef;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this.dateLimit = null;
        this.showCancel = false;
        this.lockStartDate = false; // timepicker variables

        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.closeOnAutoApply = true;
        this._locale = {};
        this._endKey = 'endDate';
        this._startKey = 'startDate';
        this.notForChangesProperty = ['locale', 'endKey', 'startKey'];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.drops = 'down';
        this.opens = 'auto';

        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);

        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = componentRef.instance;
        this.picker.inline = false; // set inline to false for all directive usage
      }

      _createClass(DaterangepickerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.picker.startDateChanged.asObservable().subscribe(function (itemChanged) {
            _this2.startDateChanged.emit(itemChanged);
          });
          this.picker.endDateChanged.asObservable().subscribe(function (itemChanged) {
            _this2.endDateChanged.emit(itemChanged);
          });
          this.picker.rangeClicked.asObservable().subscribe(function (range) {
            _this2.rangeClicked.emit(range);
          });
          this.picker.datesUpdated.asObservable().subscribe(function (range) {
            _this2.datesUpdated.emit(range);
          });
          this.picker.choosedDate.asObservable().subscribe(function (change) {
            if (change) {
              var value = {};
              value[_this2._startKey] = change.startDate;
              value[_this2._endKey] = change.endDate;
              _this2.value = value;

              _this2.onChange.emit(value);

              if (typeof change.chosenLabel === 'string') {
                _this2._el.nativeElement.value = change.chosenLabel;
              }
            }
          });
          this.picker.firstMonthDayClass = this.firstMonthDayClass;
          this.picker.lastMonthDayClass = this.lastMonthDayClass;
          this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
          this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
          this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
          this.picker.drops = this.drops;
          this.picker.opens = this.opens;
          this.localeDiffer = this.differs.find(this.locale).create();
          this.picker.closeOnAutoApply = this.closeOnAutoApply;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
              if (this.notForChangesProperty.indexOf(change) === -1) {
                this.picker[change] = changes[change].currentValue;
              }
            }
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.localeDiffer) {
            var changes = this.localeDiffer.diff(this.locale);

            if (changes) {
              this.picker.updateLocale(this.locale);
            }
          }
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this._onTouched();
        }
      }, {
        key: "open",
        value: function open(event) {
          var _this3 = this;

          this.picker.show(event);
          setTimeout(function () {
            _this3.setPosition();
          });
        }
      }, {
        key: "hide",
        value: function hide(e) {
          this.picker.hide(e);
        }
      }, {
        key: "toggle",
        value: function toggle(e) {
          if (this.picker.isShown) {
            this.hide(e);
          } else {
            this.open(e);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.picker.clear();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.setValue(value);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
      }, {
        key: "setValue",
        value: function setValue(val) {
          if (val) {
            this.value = val;

            if (val[this._startKey]) {
              this.picker.setStartDate(val[this._startKey]);
            }

            if (val[this._endKey]) {
              this.picker.setEndDate(val[this._endKey]);
            }

            this.picker.calculateChosenLabel();

            if (this.picker.chosenLabel) {
              this._el.nativeElement.value = this.picker.chosenLabel;
            }
          } else {
            this.picker.clear();
          }
        }
        /**
         * Set position of the calendar
         */

      }, {
        key: "setPosition",
        value: function setPosition() {
          var style;
          var containerTop;
          var container = this.picker.pickerContainer.nativeElement;
          var element = this._el.nativeElement;

          if (this.drops && this.drops === 'up') {
            containerTop = element.offsetTop - container.clientHeight + 'px';
          } else {
            containerTop = 'auto';
          }

          if (this.opens === 'left') {
            style = {
              top: containerTop,
              left: element.offsetLeft - container.clientWidth + element.clientWidth + 'px',
              right: 'auto'
            };
          } else if (this.opens === 'center') {
            style = {
              top: containerTop,
              left: element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2 + 'px',
              right: 'auto'
            };
          } else if (this.opens === 'right') {
            style = {
              top: containerTop,
              left: element.offsetLeft + 'px',
              right: 'auto'
            };
          } else {
            var position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;

            if (position < 0) {
              style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
              };
            } else {
              style = {
                top: containerTop,
                left: position + 'px',
                right: 'auto'
              };
            }
          }

          if (style) {
            this._renderer.setStyle(container, 'top', style.top);

            this._renderer.setStyle(container, 'left', style.left);

            this._renderer.setStyle(container, 'right', style.right);
          }
        }
      }, {
        key: "inputChanged",
        value: function inputChanged(e) {
          if (e.target.tagName.toLowerCase() !== 'input') {
            return;
          }

          if (!e.target.value.length) {
            return;
          }

          var dateString = e.target.value.split(this.picker.locale.separator);
          var start = null,
              end = null;

          if (dateString.length === 2) {
            start = moment$2(dateString[0], this.picker.locale.format);
            end = moment$2(dateString[1], this.picker.locale.format);
          }

          if (this.singleDatePicker || start === null || end === null) {
            start = moment$2(e.target.value, this.picker.locale.format);
            end = start;
          }

          if (!start.isValid() || !end.isValid()) {
            return;
          }

          this.picker.setStartDate(start);
          this.picker.setEndDate(end);
          this.picker.updateView();
        }
        /**
         * For click outside of the calendar's container
         * @param event event object
         */

      }, {
        key: "outsideClick",
        value: function outsideClick(event) {
          if (!event.target) {
            return;
          }

          if (event.target.classList.contains('ngx-daterangepicker-action')) {
            return;
          }

          if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hide();
          }
        }
      }, {
        key: "locale",
        set: function set(value) {
          this._locale = Object.assign({}, this._localeService.config, value);
        },
        get: function get() {
          return this._locale;
        }
      }, {
        key: "startKey",
        set: function set(value) {
          if (value !== null) {
            this._startKey = value;
          } else {
            this._startKey = 'startDate';
          }
        }
      }, {
        key: "endKey",
        set: function set(value) {
          if (value !== null) {
            this._endKey = value;
          } else {
            this._endKey = 'endDate';
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value || null;
        },
        set: function set(val) {
          this._value = val;

          this._onChange(val);

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return DaterangepickerDirective;
    }();

    DaterangepickerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
      }, {
        type: LocaleService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "autoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "alwaysShowCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showCustomRangeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "linkedCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "dateLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "singleDatePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showISOWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showDropdowns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isInvalidDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isCustomDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isTooltipDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showClearButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "customRangeDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "ranges", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "opens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "drops", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lastMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "emptyWeekRowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "firstDayOfNextMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lastDayOfPreviousMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "keepCalendarOpeningWithRange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showRangeLabelOnInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lockStartDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePicker24Hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePickerIncrement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePickerSeconds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "closeOnAutoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "locale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "_endKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "startKey", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "endKey", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('change')], DaterangepickerDirective.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('rangeClicked')], DaterangepickerDirective.prototype, "rangeClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('datesUpdated')], DaterangepickerDirective.prototype, "datesUpdated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerDirective.prototype, "startDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerDirective.prototype, "endDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event'])], DaterangepickerDirective.prototype, "outsideClick", null);
    DaterangepickerDirective = DaterangepickerDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: 'input[ngxDaterangepickerMd]',
      host: {
        '(keyup.esc)': 'hide()',
        '(blur)': 'onBlur()',
        '(click)': 'open()',
        '(keyup)': 'inputChanged($event)'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return DaterangepickerDirective_1;
        }),
        multi: true
      }]
    })], DaterangepickerDirective);
    var NgxDaterangepickerMd_1;

    var NgxDaterangepickerMd = NgxDaterangepickerMd_1 = /*#__PURE__*/function () {
      function NgxDaterangepickerMd() {
        _classCallCheck(this, NgxDaterangepickerMd);
      }

      _createClass(NgxDaterangepickerMd, null, [{
        key: "forRoot",
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NgxDaterangepickerMd_1,
            providers: [{
              provide: LOCALE_CONFIG,
              useValue: config
            }, {
              provide: LocaleService,
              useClass: LocaleService,
              deps: [LOCALE_CONFIG]
            }]
          };
        }
      }]);

      return NgxDaterangepickerMd;
    }();

    NgxDaterangepickerMd = NgxDaterangepickerMd_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [DaterangepickerComponent, DaterangepickerDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [],
      exports: [DaterangepickerComponent, DaterangepickerDirective],
      entryComponents: [DaterangepickerComponent]
    })], NgxDaterangepickerMd);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-daterangepicker-material.js.map

    /***/
  },

  /***/
  "./src/app/shared/report.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/report.service.ts ***!
    \******************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppSharedReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
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


    var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ReportService = /*#__PURE__*/function () {
      function ReportService(httpClient, sessionService) {
        _classCallCheck(this, ReportService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(ReportService, [{
        key: "getSalesReportByCompany",
        value: function getSalesReportByCompany(from_date, to_date) {
          var data = {
            company_id: this.sessionService.getItem('company_id'),
            from_date: from_date,
            to_date: to_date
          };
          var body = JSON.stringify(data);
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/api/report/get-sales-report', body, {
            headers: httpHeaders
          });
        }
      }, {
        key: "getPurchaseReportByCompany",
        value: function getPurchaseReportByCompany(from_date, to_date) {
          var data = {
            company_id: this.sessionService.getItem('company_id'),
            from_date: from_date,
            to_date: to_date
          };
          var body = JSON.stringify(data);
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/api/report/get-purchase-report', body, {
            headers: httpHeaders
          });
        }
      }]);

      return ReportService;
    }();

    ReportService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
      }];
    };

    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])], ReportService);
    /***/
  }
}]);
//# sourceMappingURL=default~purchase-report-purchase-report-module~sales-report-sales-report-module-es5.js.map