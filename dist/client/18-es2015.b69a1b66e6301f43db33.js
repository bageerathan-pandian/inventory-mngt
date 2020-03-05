(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{No4M:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__("8Y7J"),animations_1=__webpack_require__("GS7A"),common_1=__webpack_require__("SVse"),domhandler_1=__webpack_require__("sdDj"),objectutils_1=__webpack_require__("P3jN"),shared_1=__webpack_require__("7LN8"),forms_1=__webpack_require__("s7LF"),scrolling_1=__webpack_require__("hOhj"),filterutils_1=__webpack_require__("v3c8"),tooltip_1=__webpack_require__("g4HV");exports.MULTISELECT_VALUE_ACCESSOR={provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef((function(){return MultiSelect})),multi:!0};var MultiSelectItem=function(){function MultiSelectItem(){this.onClick=new core_1.EventEmitter,this.onKeydown=new core_1.EventEmitter}return MultiSelectItem.prototype.onOptionClick=function(event){this.onClick.emit({originalEvent:event,option:this.option})},MultiSelectItem.prototype.onOptionKeydown=function(event){this.onKeydown.emit({originalEvent:event,option:this.option})},__decorate([core_1.Input(),__metadata("design:type",Object)],MultiSelectItem.prototype,"option",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelectItem.prototype,"selected",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelectItem.prototype,"disabled",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelectItem.prototype,"visible",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelectItem.prototype,"itemSize",void 0),__decorate([core_1.Input(),__metadata("design:type",core_1.TemplateRef)],MultiSelectItem.prototype,"template",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelectItem.prototype,"maxSelectionLimitReached",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelectItem.prototype,"onClick",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelectItem.prototype,"onKeydown",void 0),__decorate([core_1.Component({selector:"p-multiSelectItem",template:'\n        <li class="ui-multiselect-item ui-corner-all" (click)="onOptionClick($event)" (keydown)="onOptionKeydown($event)" [attr.aria-label]="option.label"\n            [style.display]="visible ? \'block\' : \'none\'" [attr.tabindex]="option.disabled ? null : \'0\'" [ngStyle]="{\'height\': itemSize + \'px\'}"\n            [ngClass]="{\'ui-state-highlight\': selected, \'ui-state-disabled\': (option.disabled || (maxSelectionLimitReached && !selected))}">\n            <div class="ui-chkbox ui-widget">\n                <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"\n                    [ngClass]="{\'ui-state-active\': selected}">\n                    <span class="ui-chkbox-icon ui-clickable" [ngClass]="{\'pi pi-check\': selected}"></span>\n                </div>\n            </div>\n            <span *ngIf="!template">{{option.label}}</span>\n            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>\n        </li>\n    '})],MultiSelectItem)}();exports.MultiSelectItem=MultiSelectItem;var MultiSelect=function(){function MultiSelect(el,renderer,cd){this.el=el,this.renderer=renderer,this.cd=cd,this.scrollHeight="200px",this._defaultLabel="Choose",this.filter=!0,this.displaySelectedLabel=!0,this.maxSelectedLabels=3,this.selectedItemsLabel="{0} items selected",this.showToggleAll=!0,this.emptyFilterMessage="No results found",this.resetFilterOnHide=!1,this.dropdownIcon="pi pi-chevron-down",this.showHeader=!0,this.autoZIndex=!0,this.baseZIndex=0,this.filterBy="label",this.showTransitionOptions="225ms ease-out",this.hideTransitionOptions="195ms ease-in",this.filterMatchMode="contains",this.tooltip="",this.tooltipPosition="right",this.tooltipPositionStyle="absolute",this.onChange=new core_1.EventEmitter,this.onFocus=new core_1.EventEmitter,this.onBlur=new core_1.EventEmitter,this.onClick=new core_1.EventEmitter,this.onPanelShow=new core_1.EventEmitter,this.onPanelHide=new core_1.EventEmitter,this.onModelChange=function(){},this.onModelTouched=function(){},this.disabledSelectedOptions=[]}return Object.defineProperty(MultiSelect.prototype,"defaultLabel",{get:function(){return this._defaultLabel},set:function(val){this._defaultLabel=val,this.updateLabel()},enumerable:!0,configurable:!0}),Object.defineProperty(MultiSelect.prototype,"options",{get:function(){return this._options},set:function(val){var opts=this.optionLabel?objectutils_1.ObjectUtils.generateSelectItems(val,this.optionLabel):val;this.visibleOptions=opts,this._options=opts,this.updateLabel(),this.filterValue&&this.filterValue.length&&this.activateFilter()},enumerable:!0,configurable:!0}),MultiSelect.prototype.ngOnInit=function(){this.updateLabel()},MultiSelect.prototype.ngAfterContentInit=function(){var _this=this;this.templates.forEach((function(item){switch(item.getType()){case"item":_this.itemTemplate=item.template;break;case"selectedItems":_this.selectedItemsTemplate=item.template;break;default:_this.itemTemplate=item.template}}))},MultiSelect.prototype.ngAfterViewInit=function(){this.overlayVisible&&this.show()},MultiSelect.prototype.ngAfterViewChecked=function(){this.filtered&&(this.alignOverlay(),this.filtered=!1)},MultiSelect.prototype.writeValue=function(value){this.value=value,this.updateLabel(),this.updateFilledState(),this.setDisabledSelectedOptions(),this.checkSelectionLimit(),this.cd.markForCheck()},MultiSelect.prototype.checkSelectionLimit=function(){this.selectionLimit&&this.value&&this.value.length===this.selectionLimit&&(this.maxSelectionLimitReached=!0)},MultiSelect.prototype.updateFilledState=function(){this.filled=null!=this.valuesAsString&&this.valuesAsString.length>0},MultiSelect.prototype.registerOnChange=function(fn){this.onModelChange=fn},MultiSelect.prototype.registerOnTouched=function(fn){this.onModelTouched=fn},MultiSelect.prototype.setDisabledState=function(val){this.disabled=val},MultiSelect.prototype.onOptionClick=function(event){var option=event.option;if(!option.disabled){var optionValue=option.value,selectionIndex=this.findSelectionIndex(optionValue);-1!=selectionIndex?(this.value=this.value.filter((function(val,i){return i!=selectionIndex})),this.selectionLimit&&(this.maxSelectionLimitReached=!1)):((!this.selectionLimit||!this.value||this.value.length<this.selectionLimit)&&(this.value=(this.value||[]).concat([optionValue])),this.checkSelectionLimit()),this.onModelChange(this.value),this.onChange.emit({originalEvent:event.originalEvent,value:this.value,itemValue:optionValue}),this.updateLabel(),this.updateFilledState()}},MultiSelect.prototype.isSelected=function(value){return-1!=this.findSelectionIndex(value)},MultiSelect.prototype.findSelectionIndex=function(val){var index=-1;if(this.value)for(var i=0;i<this.value.length;i++)if(objectutils_1.ObjectUtils.equals(this.value[i],val,this.dataKey)){index=i;break}return index},MultiSelect.prototype.toggleAll=function(event){if(this.isAllChecked())if(this.disabledSelectedOptions&&this.disabledSelectedOptions.length>0){var value=[];value=this.disabledSelectedOptions.slice(),this.value=value}else this.value=[];else{var opts=this.getVisibleOptions();if(opts){value=[],this.disabledSelectedOptions&&this.disabledSelectedOptions.length>0&&(value=this.disabledSelectedOptions.slice());for(var i=0;i<opts.length;i++)opts[i].disabled||value.push(opts[i].value);this.value=value}}this.onModelChange(this.value),this.onChange.emit({originalEvent:event,value:this.value}),this.updateLabel()},MultiSelect.prototype.isAllChecked=function(){if(this.filterValue&&this.filterValue.trim().length)return this.value&&this.visibleOptions&&this.visibleOptions.length&&this.isAllVisibleOptionsChecked();var optionCount=this.getEnabledOptionCount();return this.value&&this.options&&this.value.length>0&&this.value.length==optionCount+this.disabledSelectedOptions.length},MultiSelect.prototype.isAllVisibleOptionsChecked=function(){if(this.visibleOptions&&0!==this.visibleOptions.length){for(var _i=0,_a=this.visibleOptions;_i<_a.length;_i++)if(!this.isSelected(_a[_i].value))return!1;return!0}return!1},MultiSelect.prototype.getEnabledOptionCount=function(){if(this.options){for(var count=0,_i=0,_a=this.options;_i<_a.length;_i++)_a[_i].disabled||count++;return count}return 0},MultiSelect.prototype.setDisabledSelectedOptions=function(){if(this.options&&(this.disabledSelectedOptions=[],this.value))for(var _i=0,_a=this.options;_i<_a.length;_i++){var opt=_a[_i];opt.disabled&&this.isSelected(opt.value)&&this.disabledSelectedOptions.push(opt.value)}},MultiSelect.prototype.show=function(){var _this=this;this.overlayVisible||(this.overlayVisible=!0),this.filter&&setTimeout((function(){null!=_this.filterInputChild&&_this.filterInputChild.nativeElement.focus()}),200),this.bindDocumentClickListener()},MultiSelect.prototype.onOverlayAnimationStart=function(event){switch(event.toState){case"visible":this.overlay=event.element,this.appendOverlay(),this.autoZIndex&&(this.overlay.style.zIndex=String(this.baseZIndex+ ++domhandler_1.DomHandler.zindex)),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.onPanelShow.emit();break;case"void":this.onOverlayHide()}},MultiSelect.prototype.appendOverlay=function(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):domhandler_1.DomHandler.appendChild(this.overlay,this.appendTo),this.overlay.style.minWidth=domhandler_1.DomHandler.getWidth(this.containerViewChild.nativeElement)+"px")},MultiSelect.prototype.restoreOverlayAppend=function(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)},MultiSelect.prototype.alignOverlay=function(){this.overlay&&(this.appendTo?domhandler_1.DomHandler.absolutePosition(this.overlay,this.containerViewChild.nativeElement):domhandler_1.DomHandler.relativePosition(this.overlay,this.containerViewChild.nativeElement))},MultiSelect.prototype.hide=function(){this.overlayVisible=!1,this.unbindDocumentClickListener(),this.resetFilterOnHide&&(this.filterInputChild.nativeElement.value="",this.onFilter()),this.onPanelHide.emit()},MultiSelect.prototype.close=function(event){this.hide(),event.preventDefault(),event.stopPropagation()},MultiSelect.prototype.onMouseclick=function(event,input){this.disabled||this.readonly||(this.onClick.emit(event),this.panelClick||(this.overlayVisible?this.hide():(input.focus(),this.show())),this.selfClick=!0)},MultiSelect.prototype.onInputFocus=function(event){this.focus=!0,this.onFocus.emit({originalEvent:event})},MultiSelect.prototype.onInputBlur=function(event){this.focus=!1,this.onBlur.emit({originalEvent:event}),this.onModelTouched()},MultiSelect.prototype.onOptionKeydown=function(event){if(!this.readonly)switch(event.originalEvent.which){case 40:var nextItem=this.findNextItem(event.originalEvent.target.parentElement);nextItem&&nextItem.focus(),event.originalEvent.preventDefault();break;case 38:var prevItem=this.findPrevItem(event.originalEvent.target.parentElement);prevItem&&prevItem.focus(),event.originalEvent.preventDefault();break;case 13:this.onOptionClick(event),event.originalEvent.preventDefault()}},MultiSelect.prototype.findNextItem=function(item){var nextItem=item.nextElementSibling;return nextItem?domhandler_1.DomHandler.hasClass(nextItem.children[0],"ui-state-disabled")||domhandler_1.DomHandler.isHidden(nextItem.children[0])?this.findNextItem(nextItem):nextItem.children[0]:null},MultiSelect.prototype.findPrevItem=function(item){var prevItem=item.previousElementSibling;return prevItem?domhandler_1.DomHandler.hasClass(prevItem.children[0],"ui-state-disabled")||domhandler_1.DomHandler.isHidden(prevItem.children[0])?this.findPrevItem(prevItem):prevItem.children[0]:null},MultiSelect.prototype.onKeydown=function(event){switch(event.which){case 40:!this.overlayVisible&&event.altKey&&this.show();break;case 32:this.overlayVisible||(this.show(),event.preventDefault());break;case 27:this.hide()}},MultiSelect.prototype.updateLabel=function(){if(this.value&&this.options&&this.value.length&&this.displaySelectedLabel){for(var label="",i=0;i<this.value.length;i++){var itemLabel=this.findLabelByValue(this.value[i]);itemLabel&&(label.length>0&&(label+=", "),label+=itemLabel)}if(this.value.length<=this.maxSelectedLabels)this.valuesAsString=label;else{var pattern=/{(.*?)}/;this.valuesAsString=pattern.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0],this.value.length+""):this.selectedItemsLabel}}else this.valuesAsString=this.defaultLabel},MultiSelect.prototype.findLabelByValue=function(val){for(var label=null,i=0;i<this.options.length;i++){var option=this.options[i];if(null==val&&null==option.value||objectutils_1.ObjectUtils.equals(val,option.value,this.dataKey)){label=option.label;break}}return label},MultiSelect.prototype.onFilter=function(){var inputValue=this.filterInputChild.nativeElement.value;inputValue&&inputValue.length?(this.filterValue=inputValue,this.activateFilter()):(this.filterValue=null,this.visibleOptions=this.options,this.filtered=!1)},MultiSelect.prototype.activateFilter=function(){if(this.options&&this.options.length){var searchFields=this.filterBy.split(",");this.visibleOptions=filterutils_1.FilterUtils.filter(this.options,searchFields,this.filterValue,this.filterMatchMode),this.filtered=!0}},MultiSelect.prototype.isItemVisible=function(option){if(!this.filterValue||!this.filterValue.trim().length)return!0;for(var i=0;i<this.visibleOptions.length;i++)if(this.visibleOptions[i].value==option.value)return!0},MultiSelect.prototype.getVisibleOptions=function(){return this.visibleOptions||this.options},MultiSelect.prototype.onHeaderCheckboxFocus=function(){this.headerCheckboxFocus=!0},MultiSelect.prototype.onHeaderCheckboxBlur=function(){this.headerCheckboxFocus=!1},MultiSelect.prototype.bindDocumentClickListener=function(){var _this=this;this.documentClickListener||(this.documentClickListener=this.renderer.listen("document","click",(function(){_this.selfClick||_this.panelClick||!_this.overlayVisible||_this.hide(),_this.selfClick=!1,_this.panelClick=!1,_this.cd.markForCheck()})))},MultiSelect.prototype.unbindDocumentClickListener=function(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)},MultiSelect.prototype.bindDocumentResizeListener=function(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)},MultiSelect.prototype.unbindDocumentResizeListener=function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},MultiSelect.prototype.onWindowResize=function(){domhandler_1.DomHandler.isAndroid()||this.hide()},MultiSelect.prototype.onOverlayHide=function(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.overlay=null},MultiSelect.prototype.ngOnDestroy=function(){this.restoreOverlayAppend(),this.onOverlayHide()},__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"scrollHeight",void 0),__decorate([core_1.Input(),__metadata("design:type",String),__metadata("design:paramtypes",[String])],MultiSelect.prototype,"defaultLabel",null),__decorate([core_1.Input(),__metadata("design:type",Object)],MultiSelect.prototype,"style",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"styleClass",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MultiSelect.prototype,"panelStyle",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"panelStyleClass",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"inputId",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"disabled",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"readonly",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"filter",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"filterPlaceHolder",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"overlayVisible",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelect.prototype,"tabindex",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MultiSelect.prototype,"appendTo",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"dataKey",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"name",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"displaySelectedLabel",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelect.prototype,"maxSelectedLabels",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelect.prototype,"selectionLimit",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"selectedItemsLabel",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"showToggleAll",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"emptyFilterMessage",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"resetFilterOnHide",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"dropdownIcon",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"optionLabel",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"showHeader",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"autoZIndex",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelect.prototype,"baseZIndex",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"filterBy",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MultiSelect.prototype,"virtualScroll",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MultiSelect.prototype,"itemSize",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"showTransitionOptions",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"hideTransitionOptions",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"ariaFilterLabel",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"filterMatchMode",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"tooltip",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"tooltipPosition",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"tooltipPositionStyle",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MultiSelect.prototype,"tooltipStyleClass",void 0),__decorate([core_1.ViewChild("container",{static:!1}),__metadata("design:type",core_1.ElementRef)],MultiSelect.prototype,"containerViewChild",void 0),__decorate([core_1.ViewChild("filterInput",{static:!1}),__metadata("design:type",core_1.ElementRef)],MultiSelect.prototype,"filterInputChild",void 0),__decorate([core_1.ContentChild(shared_1.Footer,{static:!1}),__metadata("design:type",Object)],MultiSelect.prototype,"footerFacet",void 0),__decorate([core_1.ContentChild(shared_1.Header,{static:!1}),__metadata("design:type",Object)],MultiSelect.prototype,"headerFacet",void 0),__decorate([core_1.ContentChildren(shared_1.PrimeTemplate),__metadata("design:type",core_1.QueryList)],MultiSelect.prototype,"templates",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onChange",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onFocus",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onBlur",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onClick",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onPanelShow",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MultiSelect.prototype,"onPanelHide",void 0),__decorate([core_1.Input(),__metadata("design:type",Array),__metadata("design:paramtypes",[Array])],MultiSelect.prototype,"options",null),__decorate([core_1.Component({selector:"p-multiSelect",template:'\n        <div #container [ngClass]="{\'ui-multiselect ui-widget ui-state-default ui-corner-all\':true,\'ui-multiselect-open\':overlayVisible,\'ui-state-focus\':focus,\'ui-state-disabled\': disabled}" [ngStyle]="style" [class]="styleClass"\n            (click)="onMouseclick($event,in)">\n            <div class="ui-helper-hidden-accessible">\n                <input #in type="text" readonly="readonly" [attr.id]="inputId" [attr.name]="name" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"\n                       [disabled]="disabled" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)">\n            </div>\n            <div class="ui-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">\n                <span class="ui-multiselect-label ui-corner-all">\n                    <ng-container *ngIf="!selectedItemsTemplate">{{valuesAsString}}</ng-container>\n                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: {$implicit: value}"></ng-container>\n                </span>\n            </div>\n            <div [ngClass]="{\'ui-multiselect-trigger ui-state-default ui-corner-right\':true}">\n                <span class="ui-multiselect-trigger-icon ui-clickable" [ngClass]="dropdownIcon"></span>\n            </div>\n            <div *ngIf="overlayVisible" [ngClass]="[\'ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow\']" [@overlayAnimation]="{value: \'visible\', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)"\n                [ngStyle]="panelStyle" [class]="panelStyleClass" (click)="panelClick=true">\n                <div class="ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix" [ngClass]="{\'ui-multiselect-header-no-toggleall\': !showToggleAll}" *ngIf="showHeader">\n                <ng-content select="p-header"></ng-content>  \n                <div class="ui-chkbox ui-widget" *ngIf="showToggleAll && !selectionLimit">\n                        <div class="ui-helper-hidden-accessible">\n                            <input type="checkbox" readonly="readonly" [checked]="isAllChecked()" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)">\n                        </div>\n                        <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" [ngClass]="{\'ui-state-active\':isAllChecked(), \'ui-state-focus\': headerCheckboxFocus}" (click)="toggleAll($event)">\n                            <span class="ui-chkbox-icon ui-clickable" [ngClass]="{\'pi pi-check\':isAllChecked()}"></span>\n                        </div>\n                    </div>\n                    <div class="ui-multiselect-filter-container" *ngIf="filter">\n                        <input #filterInput type="text" role="textbox" [value]="filterValue||\'\'" (input)="onFilter()" class="ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">\n                        <span class="ui-multiselect-filter-icon pi pi-search"></span>\n                    </div>\n                    <a class="ui-multiselect-close ui-corner-all" tabindex="0" (click)="close($event)" (keydown.enter)="close($event)">\n                        <span class="pi pi-times"></span>\n                    </a>\n                </div>\n                <div class="ui-multiselect-items-wrapper" [style.max-height]="virtualScroll ? \'auto\' : (scrollHeight||\'auto\')">\n                    <ul class="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">\n                        <ng-container *ngIf="!virtualScroll; else virtualScrollList">\n                            <ng-template ngFor let-option let-i="index" [ngForOf]="options">\n                                <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)" \n                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [visible]="isItemVisible(option)" [template]="itemTemplate"></p-multiSelectItem>\n                            </ng-template>\n                        </ng-container>\n                        <ng-template #virtualScrollList>\n                            <cdk-virtual-scroll-viewport #viewport [ngStyle]="{\'height\': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && visibleOptions && visibleOptions.length">\n                                <ng-container *cdkVirtualFor="let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">\n                                    <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)" \n                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [visible]="isItemVisible(option)" [template]="itemTemplate" [itemSize]="itemSize"></p-multiSelectItem>\n                                </ng-container>\n                            </cdk-virtual-scroll-viewport>\n                        </ng-template>\n                        <li *ngIf="filter && visibleOptions && visibleOptions.length === 0" class="ui-multiselect-empty-message">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n                <div class="ui-multiselect-footer ui-widget-content" *ngIf="footerFacet">\n                    <ng-content select="p-footer"></ng-content>\n                </div>\n            </div>\n        </div>\n    ',animations:[animations_1.trigger("overlayAnimation",[animations_1.state("void",animations_1.style({transform:"translateY(5%)",opacity:0})),animations_1.state("visible",animations_1.style({transform:"translateY(0)",opacity:1})),animations_1.transition("void => visible",animations_1.animate("{{showTransitionParams}}")),animations_1.transition("visible => void",animations_1.animate("{{hideTransitionParams}}"))])],host:{"[class.ui-inputwrapper-filled]":"filled","[class.ui-inputwrapper-focus]":"focus"},providers:[exports.MULTISELECT_VALUE_ACCESSOR]}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2,core_1.ChangeDetectorRef])],MultiSelect)}();exports.MultiSelect=MultiSelect;var MultiSelectModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,shared_1.SharedModule,scrolling_1.ScrollingModule,tooltip_1.TooltipModule],exports:[MultiSelect,shared_1.SharedModule,scrolling_1.ScrollingModule],declarations:[MultiSelect,MultiSelectItem]})],(function(){}));exports.MultiSelectModule=MultiSelectModule}}]);