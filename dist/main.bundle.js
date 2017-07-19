webpackJsonp([0,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__superTable_module__ = __webpack_require__(364);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__superTable_module__, "SuperTableModule")) __webpack_require__.d(__webpack_exports__, "SuperTableModule", function() { return __WEBPACK_IMPORTED_MODULE_0__superTable_module__["SuperTableModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__superTable_module__, "SuperTableCell")) __webpack_require__.d(__webpack_exports__, "SuperTableCell", function() { return __WEBPACK_IMPORTED_MODULE_0__superTable_module__["SuperTableCell"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__superTable_module__, "superTableSorters")) __webpack_require__.d(__webpack_exports__, "superTableSorters", function() { return __WEBPACK_IMPORTED_MODULE_0__superTable_module__["superTableSorters"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__superTable_module__, "superTableFilters")) __webpack_require__.d(__webpack_exports__, "superTableFilters", function() { return __WEBPACK_IMPORTED_MODULE_0__superTable_module__["superTableFilters"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superTable_component__ = __webpack_require__(241);
/* unused harmony namespace reexport */

// all components that will be codegen'd need to be exported for AOT to work

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InstrumentComponent = (function (_super) {
    __extends(InstrumentComponent, _super);
    function InstrumentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InstrumentComponent;
}(__WEBPACK_IMPORTED_MODULE_1__lib__["SuperTableCell"]));
InstrumentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-instrument-cell',
        template: "<span class=\"badge badge-primary\">{{ value }}</span>"
    })
], InstrumentComponent);

//# sourceMappingURL=instrument.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SuperTableState__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperTable = (function () {
    function SuperTable(el, state) {
        this.el = el;
        this.state = state;
        // properties
        this.isReady = false;
        this.hasError = false;
    }
    SuperTable.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.state.stateChanged$.subscribe(function () { return _this.sortAndFilterRows(); });
    };
    SuperTable.prototype.ngAfterContentInit = function () {
        if (this.options.autoHeight) {
            var parentHeight = this.el.nativeElement.parentElement.clientHeight;
            this.setTableHeight(parentHeight);
        }
        this.isReady = true;
    };
    SuperTable.prototype.ngOnChanges = function (changes) {
        // Inform state of columns changes
        if (changes['columns'] && changes['columns'].isFirstChange()) {
            this.state.setColumns(changes['columns'].currentValue);
        }
        this.sortAndFilterRows();
    };
    SuperTable.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SuperTable.prototype.setTableHeight = function (totalHeight) {
        // calculate header height
        var headerHeight = this.el.nativeElement.querySelector('super-table-head').offsetHeight;
        // subtract it from totalHeight, set bodyHeight to result
        this.bodyHeight = totalHeight - headerHeight;
    };
    SuperTable.prototype.sortAndFilterRows = function () {
        var _this = this;
        // Filtering
        var activeFilterColumns = this.state.columns.filter(function (c) {
            return !!c.def.filter && !!c.def.filter.isActive(c.filterValue);
        });
        if (activeFilterColumns.length) {
            this.filteredSortedRows = this.rows.filter(function (row) {
                for (var i = 0; i < activeFilterColumns.length; i++) {
                    var colState = activeFilterColumns[i];
                    var val = row[colState.def.key];
                    var filterResult = colState.def.filter.fn(colState.filterValue, val, row);
                    if (filterResult === false) {
                        return false;
                    }
                }
                return true;
            });
        }
        else {
            this.filteredSortedRows = this.rows.slice();
        }
        // Sorting
        this.filteredSortedRows.sort(function (a, b) {
            for (var i = 0; i < _this.state.sortStack.length; i++) {
                var colState = _this.state.sortStack[i];
                var val1 = a[colState.def.key];
                var val2 = b[colState.def.key];
                var compareResult = colState.sortOrder === 'ASC'
                    ? colState.def.sort(val1, val2, a, b)
                    : colState.def.sort(val2, val1, b, a);
                if (compareResult !== 0) {
                    return compareResult;
                }
            }
            return 0;
        });
    };
    return SuperTable;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTable.prototype, "rows", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTable.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableOptions"]) === "function" && _a || Object)
], SuperTable.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTable.prototype, "tableClasses", void 0);
SuperTable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'super-table',
        template: "\n    <super-table-head [tableClasses]=\"tableClasses\"></super-table-head>\n\n    <super-table-body\n      *ngIf=\"isReady\"\n      [rows]=\"filteredSortedRows\"\n      [tableClasses]=\"tableClasses\"\n      [options]=\"options\"\n      [style.height]=\"bodyHeight + 'px'\"\n      [bodyHeight]=\"bodyHeight\">\n    </super-table-body>\n\n    <div\n      class=\"loading-message\"\n      *ngIf=\"!isReady && !hasError\">\n      Loading...\n    </div>\n\n    <div *ngIf=\"hasError\">An error occurred.</div>\n  ",
        styles: ["\n    :host {\n      position: relative;\n      display: block;\n    }\n    .loading-message {\n      text-align: center;\n    }\n  "],
        providers: [__WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */]) === "function" && _c || Object])
], SuperTable);

var _a, _b, _c;
//# sourceMappingURL=superTable.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTableCell; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuperTableCell = (function () {
    function SuperTableCell() {
    }
    return SuperTableCell;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableCell.prototype, "row", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _a || Object)
], SuperTableCell.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], SuperTableCell.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableCell.prototype, "value", void 0);
SuperTableCell = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: ""
    })
], SuperTableCell);

var _a;
//# sourceMappingURL=superTableCell.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 250;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(361);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(375)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instrument_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__demo_component__["a" /* DemoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__instrument_component__["a" /* InstrumentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__lib__["SuperTableModule"]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__instrument_component__["a" /* InstrumentComponent */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTableState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sortCycle = ['ASC', 'DESC', null];
var getNextSortOrder = function (currentSortOrder) {
    var nextIndex = (sortCycle.indexOf(currentSortOrder) + 1) % sortCycle.length;
    return sortCycle[nextIndex];
};
var SuperTableState = (function () {
    function SuperTableState() {
        // publicly exposed properties
        this.hasAnyFilters = false;
        this.sortStack = [];
        // source of observable
        this.stateChangedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this);
        this.stateChanged$ = this.stateChangedSource.asObservable();
    }
    SuperTableState.prototype.setColumns = function (columns) {
        var _this = this;
        this.columns = columns.map(function (c) {
            if (!!c.filter) {
                _this.hasAnyFilters = true;
            }
            return {
                id: c.id,
                filterValue: null,
                sortOrder: null,
                isHidden: false,
                width: c.width || null,
                def: c,
                hasSort: !!c.sort,
                hasFilter: !!c.filter
            };
        });
    };
    SuperTableState.prototype.toggleSort = function (colState, doNotClear) {
        // Set next sort order
        colState.sortOrder = getNextSortOrder(colState.sortOrder);
        // Check if we are clearing the rest of the sort stack or not
        if (doNotClear) {
            var curIndex = this.sortStack.indexOf(colState);
            if (curIndex === -1) {
                this.sortStack.push(colState);
            }
            else if (!colState.sortOrder) {
                this.sortStack.splice(curIndex, 1);
            }
        }
        else {
            this.sortStack = colState.sortOrder ? [colState] : [];
            this.columns.forEach(function (column) {
                if (column !== colState) {
                    column.sortOrder = null;
                }
            });
        }
        this.notify();
    };
    SuperTableState.prototype.notify = function () {
        this.stateChangedSource.next(this);
    };
    return SuperTableState;
}());
SuperTableState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SuperTableState);

//# sourceMappingURL=SuperTableState.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrument_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var INSTRUMENTS = [
    'sax',
    'trumpet',
    'trombone',
    'piano',
    'keys',
    'drums'
];
var DemoComponent = (function () {
    function DemoComponent() {
        this.tableClasses = ['table', 'table-bordered'];
        this.rows = [];
        this.NUM_ROWS = 10000;
        this.columns = [
            {
                id: 'firstName',
                key: 'firstName',
                label: 'First',
                width: 100,
                sort: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableSorters"].STRING,
                filter: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableFilters"].STRING
            },
            {
                id: 'lastName',
                key: 'lastName',
                label: 'Last',
                sort: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableSorters"].STRING,
                filter: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableFilters"].STRING
            },
            {
                id: 'instrument',
                key: 'instrument',
                label: 'Instrument',
                sort: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableSorters"].STRING,
                component: __WEBPACK_IMPORTED_MODULE_2__instrument_component__["a" /* InstrumentComponent */],
                filter: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableFilters"].ENUM,
                filterChoices: INSTRUMENTS
            },
            {
                id: 'height',
                key: 'height',
                label: 'Height',
                sort: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableSorters"].NUMBER,
                filter: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableFilters"].NUMBER,
                format: function (value, row, colState) {
                    var numValue = value;
                    var feet = Math.floor(numValue / 12);
                    var inches = numValue % 12;
                    return feet + "'" + inches + "\"";
                }
            },
            {
                id: 'dob',
                key: 'dob',
                label: 'Birthday',
                sort: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableSorters"].NUMBER,
                filter: __WEBPACK_IMPORTED_MODULE_1__lib__["superTableFilters"].DATE
            }
        ];
        this.options = {
            autoHeight: true // auto size the table to the parent element
        };
        this.lastNames = [
            'Davis',
            'Monk',
            'Gordon',
            'Coltrane',
            'Henderson',
            'Rollins'
        ];
        this.firstNames = [
            'Miles',
            'Thelonious',
            'Dexter',
            'John',
            'Joe',
            'Sonny'
        ];
        this.instruments = INSTRUMENTS;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.rows = this.generateRows(this.NUM_ROWS);
    };
    DemoComponent.prototype.generateRows = function (count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push({
                firstName: this.chooseRandom(this.firstNames),
                lastName: this.chooseRandom(this.lastNames),
                height: Math.floor(Math.random() * 30) + 60,
                dob: new Date(Date.now() - (Math.random() * 30 + 15) * 365 * 24 * 60 * 60 * 1000),
                instrument: this.chooseRandom(this.instruments)
            });
        }
        return result;
    };
    DemoComponent.prototype.chooseRandom = function (choices) {
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-demo-app',
        template: "\n    <p class=\"mt-3 mb-2\">\n      The following table has {{NUM_ROWS}} rows, and uses row-virtualization so\n      the DOM is not overloaded. All sorting and filtering occurs on the client\n      side.\n    </p>\n    <super-table\n      [rows]=\"rows\"\n      [columns]=\"columns\"\n      [options]=\"options\"\n      [tableClasses]=\"tableClasses\">\n    </super-table>\n  ",
        styles: ["\n    :host {\n      width: 80%;\n      display: block;\n      margin: 0 auto;\n      height: 600px;\n    }\n  "]
    })
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyRows; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DummyRows = (function () {
    function DummyRows() {
        this.BG_IMAGE_DATA = [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAlCAYAAACDKIOp',
            'AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiuH',
            'v37n+G////MzAxAMHQIQACDAC7twbaN2nkgwAAAABJRU5ErkJggg=='
        ].join('');
    }
    DummyRows.prototype.rowStyleHeight = function () {
        var height = this.rowHeight * this.rowCount;
        return height + "px";
    };
    DummyRows.prototype.backgroundSize = function () {
        return "auto " + this.rowHeight + "px";
    };
    return DummyRows;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], DummyRows.prototype, "rowHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], DummyRows.prototype, "rowCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], DummyRows.prototype, "columnCount", void 0);
DummyRows = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[dummy-rows]',
        template: "\n    <tr [style.height]=\"rowStyleHeight()\">\n      <td\n        [attr.colspan]=\"columnCount\"\n        [style.backgroundImage]=\"'url(' + BG_IMAGE_DATA + ')'\"\n        [style.backgroundSize]=\"backgroundSize()\">\n      </td>\n    </tr>\n  ",
        styles: ["\n    :host {\n      border: none !important;\n    }\n    td {\n      padding: 0 !important;\n      border: none !important;\n      background-repeat: repeat;\n      background-position: 0 -1px;\n    }\n\n  "]
    })
], DummyRows);

//# sourceMappingURL=dummyRows.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SuperTableState__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnumFilterDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnumFilterDropdown = (function () {
    function EnumFilterDropdown(state, el) {
        this.state = state;
        this.el = el;
    }
    EnumFilterDropdown.prototype.ngOnInit = function () {
        var styles = this.el.nativeElement.style;
        styles.top = this.top + 'px';
        styles.left = this.left + 'px';
        styles.width = this.width + 'px';
    };
    EnumFilterDropdown.prototype.ngOnDestroy = function () {
        // to ensure that references to parent component
        // do not prevent GC
        this.destroyMe = null;
    };
    EnumFilterDropdown.prototype.onChoiceChange = function () {
        this.state.notify();
    };
    EnumFilterDropdown.prototype.showAll = function () {
        var _this = this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"])(this.column.filterValue, function (val, key) {
            _this.column.filterValue[key] = true;
        });
        this.state.notify();
        this.destroyMe();
    };
    return EnumFilterDropdown;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _a || Object)
], EnumFilterDropdown.prototype, "column", void 0);
EnumFilterDropdown = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'super-table-enum-filter-dropdown',
        template: "\n    <div class=\"clear-filter\">\n      <button class=\"btn btn-secondary clear-filter-btn\" role=\"button\" (click)=\"showAll()\">show all</button>\n    </div>\n    <div *ngFor=\"let choice of column.def.filterChoices\">\n      <input type=\"checkbox\" [(ngModel)]=\"column.filterValue[choice]\" (ngModelChange)=\"onChoiceChange($event)\" />\n      {{ choice }}\n    </div>\n    <button role=\"button\" class=\"close-dropdown\" (click)=\"destroyMe()\">&times;</button>\n  ",
        styles: ["\n    :host {\n      position: absolute;\n      background: white;\n      padding: 5px 10px;\n      border: 1px solid #ddd;\n      box-shadow: 0 1px 10px -1px rgba(0,0,0,0.2);\n    }\n    .clear-filter {\n      border-bottom: 1px solid #DDD;\n      padding: 5px 0;\n    }\n    .close-dropdown {\n      position: absolute;\n      top: 5px;\n      right: 10px;\n      border: none;\n      background: transparent;\n      color: #CCC;\n      display: block;\n      width: 20px;\n      height: 20px;\n      line-height: 20px;\n    }\n    .close-dropdown:hover {\n      color: #AAA;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _c || Object])
], EnumFilterDropdown);

var EnumFilter = (function () {
    function EnumFilter(state, el, viewContainer, resolver) {
        this.state = state;
        this.el = el;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
        this.disabledChoices = new Set();
        this.disabledFilterCount = 0;
    }
    EnumFilter.prototype.ngOnInit = function () {
        var _this = this;
        // initialize filtered values to include all
        this.column.filterValue = {};
        this.column.def.filterChoices.forEach(function (choice) {
            _this.column.filterValue[choice] = true;
        });
        this.subscription = this.state.stateChanged$.subscribe(function () {
            _this.disabledFilterCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["values"])(_this.column.filterValue)
                .filter(function (isEnabled) { return !isEnabled; })
                .length;
        });
    };
    EnumFilter.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EnumFilter.prototype.toggleVisibility = function () {
        var _this = this;
        if (this.dropdown) {
            this.dropdown.destroy();
            this.dropdown = null;
        }
        else {
            var clientRect = this.el.nativeElement.getBoundingClientRect();
            var cmpFactory = this.resolver.resolveComponentFactory(EnumFilterDropdown);
            var ctxInjector = this.viewContainer.injector;
            var cmpRef = this.viewContainer.createComponent(cmpFactory, 0, ctxInjector);
            cmpRef.instance.column = this.column;
            cmpRef.instance.top = clientRect.top + clientRect.height;
            cmpRef.instance.left = clientRect.left;
            cmpRef.instance.width = clientRect.width;
            cmpRef.instance.destroyMe = function () {
                _this.toggleVisibility();
            };
            this.dropdown = cmpRef;
            document.body.appendChild(cmpRef.location.nativeElement);
        }
    };
    return EnumFilter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableFilter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableFilter"]) === "function" && _d || Object)
], EnumFilter.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _e || Object)
], EnumFilter.prototype, "column", void 0);
EnumFilter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[enum-filter]',
        template: "\n    <button\n      [attr.title]=\"filter.title\"\n      role=\"button\"\n      (click)=\"toggleVisibility($event)\"\n      [ngClass]=\"{ hasDisabled : disabledFilterCount }\">\n      <strong>{{ filter.placeholder }}:</strong>\n      <span [hidden]=\"disabledFilterCount != 0\">showing all</span>\n      <span [hidden]=\"disabledFilterCount == 0\">filtering {{disabledFilterCount}} value(s)</span>\n    </button>\n\n  ",
        styles: ["\n    :host {\n      position: relative;\n      display: block;\n      height: 100%;\n      font-size: 90%;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    button {\n      text-align: left;\n      margin: 0 5px;\n      display: block;\n      width: calc(100% - 10px);\n      height: 100%;\n      background: #ddd;\n      border: none;\n      border-radius: 2px;\n    }\n    button.hasDisabled {\n      background: rgba(22, 140, 239, 0.2);\n    }\n    .enum-filter-dropdown {\n      position: absolute;\n      top: 100%;\n      z-index: 1;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ComponentFactoryResolver */]) === "function" && _j || Object])
], EnumFilter);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=enumFilter.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__superTable_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__superTableHead_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__superTableBody_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__superTableRow_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dummyRows_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tableHeader_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__interfaces__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__superTableSorters__ = __webpack_require__(369);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "superTableSorters", function() { return __WEBPACK_IMPORTED_MODULE_10__superTableSorters__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__superTableFilters__ = __webpack_require__(366);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "superTableFilters", function() { return __WEBPACK_IMPORTED_MODULE_11__superTableFilters__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superTableCell_component__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTableCell", function() { return __WEBPACK_IMPORTED_MODULE_12__superTableCell_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tableCell_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__textFilter_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__enumFilter_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTableModule", function() { return SuperTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SuperTableModule = (function () {
    function SuperTableModule() {
    }
    return SuperTableModule;
}());
SuperTableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        // Components declared in this library
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__superTable_component__["a" /* SuperTable */],
            __WEBPACK_IMPORTED_MODULE_4__superTableHead_component__["a" /* SuperTableHead */],
            __WEBPACK_IMPORTED_MODULE_5__superTableBody_component__["a" /* SuperTableBody */],
            __WEBPACK_IMPORTED_MODULE_12__superTableCell_component__["a" /* SuperTableCell */],
            __WEBPACK_IMPORTED_MODULE_6__superTableRow_component__["a" /* SuperTableRow */],
            __WEBPACK_IMPORTED_MODULE_7__dummyRows_component__["a" /* DummyRows */],
            __WEBPACK_IMPORTED_MODULE_8__tableHeader_component__["a" /* TableHeader */],
            __WEBPACK_IMPORTED_MODULE_13__tableCell_component__["a" /* TableCell */],
            __WEBPACK_IMPORTED_MODULE_8__tableHeader_component__["b" /* Resizer */],
            __WEBPACK_IMPORTED_MODULE_14__textFilter_component__["a" /* TextFilter */],
            __WEBPACK_IMPORTED_MODULE_15__enumFilter_component__["a" /* EnumFilter */],
            __WEBPACK_IMPORTED_MODULE_15__enumFilter_component__["b" /* EnumFilterDropdown */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__superTable_component__["a" /* SuperTable */], __WEBPACK_IMPORTED_MODULE_12__superTableCell_component__["a" /* SuperTableCell */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__enumFilter_component__["b" /* EnumFilterDropdown */]
        ]
    })
], SuperTableModule);

//# sourceMappingURL=superTable.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SuperTableState__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTableBody; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_ROW_HEIGHT = 20;
var PADDING_ROW_COUNT = 20;
var DEBOUNCE_DELAY = 250;
var SuperTableBody = (function () {
    function SuperTableBody(el, state) {
        var _this = this;
        this.el = el;
        this.state = state;
        this.visibleRows = [];
        // assume small row height at first.
        // The real height will be detected once rows are rendered.
        this.rowHeight = DEFAULT_ROW_HEIGHT;
        this.rowOffset = 0;
        this.scrollHandler = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["debounce"])(function () {
            _this.updateVisibleRows();
        }, DEBOUNCE_DELAY);
        this.resizeHandler = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["debounce"])(function () {
            _this.detectRowHeight();
            _this.updateVisibleRows();
        });
    }
    SuperTableBody.prototype.ngOnChanges = function (changes) {
        this.updateVisibleRows();
    };
    SuperTableBody.prototype.trackScroll = function () {
        this.scrollHandler();
    };
    SuperTableBody.prototype.onWindowResize = function () {
        this.resizeHandler();
    };
    SuperTableBody.prototype.updateVisibleRows = function () {
        var _this = this;
        var startIndex, endIndex;
        var currentScroll = this.el.nativeElement.scrollTop;
        startIndex = Math.floor(currentScroll / this.rowHeight - PADDING_ROW_COUNT);
        startIndex = Math.max(0, startIndex);
        this.rowOffset = startIndex;
        endIndex = Math.ceil((currentScroll + this.bodyHeight) / this.rowHeight + PADDING_ROW_COUNT);
        endIndex = Math.min(this.rows.length - 1, endIndex);
        this.visibleRows = this.rows.slice(startIndex, endIndex);
        setTimeout(function () {
            _this.detectRowHeight();
        });
    };
    SuperTableBody.prototype.detectRowHeight = function () {
        var tr = this.el.nativeElement.querySelector('tbody.visible-rows tr');
        if (tr != null) {
            this.rowHeight = tr.offsetHeight;
        }
    };
    return SuperTableBody;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableBody.prototype, "rows", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableBody.prototype, "tableClasses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], SuperTableBody.prototype, "bodyHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces__["ISuperTableOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces__["ISuperTableOptions"]) === "function" && _a || Object)
], SuperTableBody.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* HostListener */])('scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuperTableBody.prototype, "trackScroll", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* HostListener */])('resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuperTableBody.prototype, "onWindowResize", null);
SuperTableBody = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'super-table-body',
        template: "\n    <table [ngClass]=\"tableClasses\">\n      <thead class=\"sizing-thead\">\n        <tr>\n          <th scope=\"col\" *ngFor=\"let column of state.columns\" table-header [column]=\"column\" [noHeight]=\"true\"></th>\n        </tr>\n      </thead>\n      <tbody\n        class=\"dummy-rows\"\n        dummy-rows\n        [columnCount]=\"state.columns.length\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowOffset\">\n      </tbody>\n      <tbody class=\"visible-rows\">\n        <tr *ngFor=\"let row of visibleRows\" super-table-row [row]=\"row\"></tr>\n      </tbody>\n      <tbody\n        class=\"dummy-rows\"\n        dummy-rows\n        [columnCount]=\"state.columns.length\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rows.length - rowOffset - visibleRows.length - 1\">\n      </tbody>\n    </table>\n  ",
        styles: ["\n    :host {\n      display: block;\n      overflow: auto;\n    }\n    table {\n      table-layout: fixed;\n      width: 100%;\n      margin-bottom: 0;\n    }\n    thead.sizing-thead th {\n      padding: 0 !important;\n      border-width: 0;\n    }\n    tbody.dummy-rows, tbody.visible-rows {\n      border-top: none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */]) === "function" && _c || Object])
], SuperTableBody);

var _a, _b, _c;
//# sourceMappingURL=superTableBody.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return superTableFilters; });
// For date filter
var unitmap = {};
unitmap['second'] = unitmap['sec'] = unitmap['s'] = 1000;
unitmap['minute'] = unitmap['min'] = unitmap['m'] = unitmap['second'] * 60;
unitmap['hour'] = unitmap['hr'] = unitmap['h'] = unitmap['minute'] * 60;
unitmap['day'] = unitmap['d'] = unitmap['hour'] * 24;
unitmap['week'] = unitmap['wk'] = unitmap['w'] = unitmap['day'] * 7;
unitmap['month'] = unitmap['week'] * 4;
unitmap['year'] = unitmap['yr'] = unitmap['y'] = unitmap['day'] * 365;
var clauseExp = /(\d+(?:\.\d+)?)\s*([a-z]+)/;
function parseDateFilter(str) {
    // split on clauses (if any)
    var clauses = str.trim().split(',');
    var total = 0;
    // parse each clause
    for (var i = 0; i < clauses.length; i++) {
        var clause = clauses[i].trim();
        var terms = clauseExp.exec(clause);
        if (!terms) {
            continue;
        }
        var count = parseFloat(terms[1]);
        var unit = terms[2].replace(/s$/, '');
        if (!unitmap.hasOwnProperty(unit)) {
            continue;
        }
        total += count * unitmap[unit];
    }
    return total;
}
var superTableFilters = {
    STRING: {
        type: 'TEXT',
        title: 'Search by text, eg. "foo". Use "!" to ' +
            'exclude and "=" to match exact text, e.g. ' +
            '"!bar" or "=baz".',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'string search',
        fn: function (term, value, row) {
            term = term.toLowerCase().trim();
            value = String(value).toLowerCase();
            var first = term[0];
            // negate
            if (first === '!') {
                term = term.substr(1);
                if (term === '') {
                    return true;
                }
                return value.indexOf(term) === -1;
            }
            // strict
            if (first === '=') {
                term = term.substr(1);
                return term === value.trim();
            }
            // remove escaping backslashes
            term = term.replace('\\!', '!');
            term = term.replace('\\=', '=');
            return value.indexOf(term) !== -1;
        }
    },
    NUMBER: {
        type: 'TEXT',
        title: 'Search by number, e.g. "123". Optionally use comparator ' +
            'expressions like ">=10" or "<1000". Use "~" for approx. ' +
            'int values, eg. "~3" will match "3.2"',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'number search',
        fn: function (term, value, row) {
            var parsedValue = parseFloat(value);
            term = term.trim();
            var firstTwo = term.substr(0, 2);
            var firstChar = term[0];
            var against1 = parseFloat(term.substr(1));
            var against2 = parseFloat(term.substr(2));
            if (firstTwo === '<=') {
                return parsedValue <= against2;
            }
            if (firstTwo === '>=') {
                return parsedValue >= against2;
            }
            if (firstChar === '<') {
                return parsedValue < against1;
            }
            if (firstChar === '>') {
                return parsedValue > against1;
            }
            if (firstChar === '~') {
                return Math.round(parsedValue) === against1;
            }
            if (firstChar === '=') {
                return against1 === parsedValue;
            }
            return value.toString().indexOf(term.toString()) > -1;
        }
    },
    DATE: {
        type: 'TEXT',
        title: 'Search by date. Enter a date string (RFC2822 or ' +
            'ISO 8601 date). You can also type "today", "yesterday", ' +
            '"> 2 days ago", "< 1 day 2 hours ago", etc.',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'date search',
        fn: function (term, value) {
            // today
            // yesterday
            // 1 day ago
            // 2 days ago
            // < 1 day ago
            // < 10 minutes ago
            // < 10 min ago
            // < 10 minutes, 50 seconds ago
            // > 10 min, 30 sec ago
            // > 2 days ago
            // >= 1 day ago
            term = term.trim();
            if (!term) {
                return true;
            }
            var numValue = value.valueOf();
            var nowDate = new Date();
            var now = nowDate.valueOf();
            var first_char = term[0];
            var other_chars = (term.substr(1)).trim();
            var lowerbound, upperbound;
            if (first_char === '<') {
                lowerbound = now - parseDateFilter(other_chars);
                return numValue > lowerbound;
            }
            if (first_char === '>') {
                upperbound = now - parseDateFilter(other_chars);
                return numValue < upperbound;
            }
            if (term === 'today') {
                return new Date(numValue).toDateString() === nowDate.toDateString();
            }
            if (term === 'yesterday') {
                return new Date(numValue).toDateString() === new Date(now - unitmap['d']).toDateString();
            }
            var supposedDate = new Date(term);
            if (!isNaN(supposedDate.valueOf())) {
                return new Date(numValue).toDateString() === supposedDate.toDateString();
            }
            return false;
        }
    },
    ENUM: {
        type: 'ENUM',
        title: 'Click to filter rows by discreet values',
        placeholder: 'filters',
        isActive: function (filterValue) {
            if (!filterValue) {
                return false;
            }
            var filterValueObj = filterValue;
            return Object.keys(filterValueObj).some(function (key) {
                return !filterValueObj[key];
            });
        },
        fn: function (filterValue, value, row) {
            var filterValueObj = filterValue;
            return filterValueObj[value];
        }
    }
};
//# sourceMappingURL=superTableFilters.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SuperTableState__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTableHead; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuperTableHead = (function () {
    function SuperTableHead(state) {
        this.state = state;
    }
    return SuperTableHead;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableHead.prototype, "tableClasses", void 0);
SuperTableHead = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'super-table-head',
        template: "\n    <table [ngClass]=\"tableClasses\">\n      <thead>\n        <tr>\n          <th scope=\"col\" *ngFor=\"let column of state.columns\" table-header [column]=\"column\" [ngClass]=\"{ hasSort: column.hasSort }\"></th>\n        </tr>\n        <tr *ngIf=\"state.hasAnyFilters\" class=\"filter-row\">\n          <td *ngFor=\"let column of state.columns\">\n            <div *ngIf=\"column.hasFilter\" [ngSwitch]=\"column.def.filter.type\">\n              <div *ngSwitchCase=\"'TEXT'\" text-filter [filter]=\"column.def.filter\" [column]=\"column\"></div>\n              <div *ngSwitchCase=\"'ENUM'\" enum-filter [filter]=\"column.def.filter\" [column]=\"column\"></div>\n            </div>\n          </td>\n        </tr>\n      </thead>\n    </table>\n  ",
        styles: ["\n    :host {\n      overflow-y: scroll;\n      display: block;\n    }\n    .hasSort {\n      cursor: pointer;\n    }\n    table {\n      table-layout: fixed;\n      width: 100%;\n      margin-bottom: 0;\n      border-bottom: none;\n    }\n    .filter-row td {\n      padding: 0;\n      vertical-align: middle;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */]) === "function" && _a || Object])
], SuperTableHead);

var _a;
//# sourceMappingURL=superTableHead.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SuperTableState__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTableRow; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuperTableRow = (function () {
    function SuperTableRow(state) {
        this.state = state;
    }
    return SuperTableRow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SuperTableRow.prototype, "row", void 0);
SuperTableRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[super-table-row]',
        template: "<td *ngFor=\"let column of state.columns\" table-cell [row]=\"row\" [column]=\"column\"></td>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__SuperTableState__["a" /* SuperTableState */]) === "function" && _a || Object])
], SuperTableRow);

var _a;
//# sourceMappingURL=superTableRow.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return superTableSorters; });
var superTableSorters = {
    STRING: function (val1, val2) {
        return val1.localeCompare(val2);
    },
    NUMBER: function (val1, val2) {
        return val1 - val2;
    }
};
//# sourceMappingURL=superTableSorters.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCell; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableCell = (function () {
    function TableCell(viewContainer, resolver) {
        this.viewContainer = viewContainer;
        this.resolver = resolver;
    }
    TableCell.prototype.getValue = function () {
        return this.row[this.column.def.key];
    };
    TableCell.prototype.getFormattedValue = function () {
        if (this.column.def.format) {
            return this.column.def.format(this.getValue(), this.row, this.column);
        }
        return this.getValue();
    };
    TableCell.prototype.ngAfterViewInit = function () {
        if (this.column.def.component) {
            if (this.componentRef) {
                this.componentRef.destroy();
            }
            var cmpFactory = this.resolver.resolveComponentFactory(this.column.def.component);
            var ctxInjector = this.cmpContainer.injector;
            this.componentRef = this.cmpContainer.createComponent(cmpFactory, 0, ctxInjector);
            var instance = this.componentRef.instance;
            instance['row'] = this.row;
            instance['column'] = this.column;
            instance['key'] = this.column.def.key;
            instance['value'] = this.getValue();
            this.componentRef.changeDetectorRef.detectChanges();
        }
    };
    TableCell.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    return TableCell;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], TableCell.prototype, "row", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _a || Object)
], TableCell.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('cmpContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */]) === "function" && _b || Object)
], TableCell.prototype, "cmpContainer", void 0);
TableCell = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[table-cell]',
        template: "\n    <span *ngIf=\"!column.def.component\" [attr.title]=\"getFormattedValue()\">{{ getFormattedValue() }}</span>\n    <span *ngIf=\"column.def.component\" #cmpContainer></span>\n  ",
        styles: ["\n    :host {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ComponentFactoryResolver */]) === "function" && _d || Object])
], TableCell);

var _a, _b, _c, _d;
//# sourceMappingURL=tableCell.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SuperTableState__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Resizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resizer = Resizer_1 = (function () {
    function Resizer(el) {
        this.el = el;
    }
    Resizer.prototype.grab = function (grabEvt) {
        var _this = this;
        grabEvt.preventDefault();
        var mousedownTime = Date.now();
        var initClientX = grabEvt.clientX;
        var initWidth = this.column.width || this.getActualParentWidth();
        var drag = function (event) {
            var change = event.clientX - initClientX;
            _this.column.width = Math.max(initWidth + change, Resizer_1.MIN_COLUMN_WIDTH);
        };
        var unbindDrag = function () {
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', unbindDrag);
            if (Date.now() - mousedownTime < Resizer_1.MAX_CLICK_WAIT) {
                _this.column.width = null;
            }
        };
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', unbindDrag);
    };
    Resizer.prototype.getActualParentWidth = function () {
        return this.el.nativeElement.parentElement.offsetWidth;
    };
    Resizer.prototype.stopClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return Resizer;
}());
Resizer.MAX_CLICK_WAIT = 250;
Resizer.MIN_COLUMN_WIDTH = 30;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _a || Object)
], Resizer.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], Resizer.prototype, "actualWidth", void 0);
Resizer = Resizer_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[resizer]',
        template: "<div class=\"notch\" [ngClass]=\"{ explicit: column.width }\"></div>",
        host: {
            '(click)': 'stopClick($event)',
            '(mousedown)': 'grab($event)',
            '[attr.title]': '"Click-and-drag to resize. Click to clear specified width."'
        },
        styles: ["\n    :host {\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 5px;\n      height: 100%;\n      cursor: col-resize;\n    }\n    .notch.explicit {\n      background-color: rgba(22, 140, 239, 0.2);\n    }\n    .notch {\n      width: 100%;\n      height: 50%;\n      transform: translateY(50%);\n      box-shadow: inset 1px 0 #DDD;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object])
], Resizer);

var TableHeader = (function () {
    function TableHeader(el, state) {
        this.el = el;
        this.state = state;
        this.noHeight = false;
        this.SORT_TITLE = 'Click to change sort order. Shift-click to sort on multiple columns.';
    }
    TableHeader.prototype.getWidth = function () {
        return (typeof this.column.width === 'number') ? this.column.width + 'px' : 'auto';
    };
    TableHeader.prototype.getValue = function () {
        return this.column.def.label;
    };
    TableHeader.prototype.handleClick = function (event) {
        event.preventDefault();
        if (this.column.hasSort) {
            this.state.toggleSort(this.column, event.shiftKey);
        }
    };
    return TableHeader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _c || Object)
], TableHeader.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], TableHeader.prototype, "noHeight", void 0);
TableHeader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[table-header]',
        host: {
            '[style.width]': 'getWidth()',
            '(click)': 'handleClick($event)'
        },
        template: "\n    <div *ngIf=\"!noHeight\" class=\"table-header-div\" title=\"SORT_TITLE\">\n      <span *ngIf=\"column.def.sort\" class=\"sort-icon\">\n        <span [ngSwitch]=\"column.sortOrder\">\n          <span class=\"asc-sort glyphicon glyphicon-sort-by-attributes\" *ngSwitchCase=\"'ASC'\"></span>\n          <span class=\"desc-sort glyphicon glyphicon-sort-by-attributes-alt\" *ngSwitchCase=\"'DESC'\"></span>\n          <span class=\"no-sort glyphicon glyphicon-sort\" *ngSwitchDefault></span>\n        </span>\n      </span>\n      {{ getValue() }}\n    </div>\n    <div *ngIf=\"!noHeight && !column.def.lockWidth\" resizer [column]=\"column\"></div>\n  ",
        styles: ["\n    :host {\n      position:relative;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n    :host:hover .sort-icon {\n      opacity: 1;\n    }\n    .table-header-div {\n      position: relative;\n    }\n    .sort-icon {\n      font-size: 70%;\n      opacity: 1;\n      color: #168cef;\n      text-shadow: 0 1px 2px rgba(22, 140, 239, 0.6);\n    }\n    .sort-icon .no-sort {\n      opacity: 0.3;\n      text-shadow: none;\n      color: black;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SuperTableState__["a" /* SuperTableState */]) === "function" && _e || Object])
], TableHeader);

var Resizer_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=tableHeader.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SuperTableState__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextFilter = (function () {
    function TextFilter(state) {
        this.state = state;
        this.onModelChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["debounce"])(function () {
            this.state.notify();
        }, 200);
    }
    TextFilter.prototype.clearFilter = function () {
        this.column.filterValue = '';
        this.state.notify();
    };
    return TextFilter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableFilter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ISuperTableFilter"]) === "function" && _a || Object)
], TextFilter.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["ColumnState"]) === "function" && _b || Object)
], TextFilter.prototype, "column", void 0);
TextFilter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[text-filter]',
        template: "\n    <input\n      class=\"form-control input-sm\"\n      type=\"text\"\n      [(ngModel)]=\"column.filterValue\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [attr.placeholder]=\"filter.placeholder\"\n      [attr.title]=\"filter.title\"\n      [ngClass]=\"{ hasContent: !!column.filterValue }\" />\n\n    <button *ngIf=\"column.filterValue\" class=\"clear-btn\" role=\"button\" (click)=\"clearFilter($event)\">&times;</button>\n  ",
        styles: ["\n    :host {\n      position: relative;\n    }\n    input {\n      width: 100%;\n      font-size: 90%;\n      border: none;\n      border-radius: 0;\n    }\n    .hasContent {\n      background: #dff7ff;\n    }\n    .clear-btn {\n      position: absolute;\n      background: transparent;\n      color: black;\n      right: 0;\n      top: 0;\n      border: none;\n      font-size: 120%;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__SuperTableState__["a" /* SuperTableState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SuperTableState__["a" /* SuperTableState */]) === "function" && _c || Object])
], TextFilter);

var _a, _b, _c;
//# sourceMappingURL=textFilter.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/andyperlitch/ngx-super-table\" class=\"hidden-xs\">\n  <img\n    style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 2000\"\n    src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\"\n    alt=\"Fork me on GitHub\"\n    data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\">\n</a>\n\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">ngx super table</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#demo\">Demo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/andyperlitch/ngx-super-table#installation\">Installation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://andyperlitch.github.io/ngx-super-table/docs/\">Documentation</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <app-demo-app></app-demo-app>\n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);


/***/ })

},[390]);
//# sourceMappingURL=main.bundle.js.map