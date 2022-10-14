module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

Component({
  properties: {
    /**
     * @label
     * @String 标题
    */
    label: {
      type: String,
      value: ''
    },

    subTitle: {
      type: String,
      value: ''
    },

    required: {
      type: Boolean,
      value: true
    },
    /**
     * @placeholder
     * @String 输入框占位
     * 只有在type为input、select时有效
    */
    placeholder: {
      type: String,
      value: '请输入'
    },
    /**
     * @unit
     * @String 输入框后边携带单位
     * 只有在type为input时有效
    */
    unit: {
      type: String,
      value: ''
    },
    /**
     * @type
     * @String 输入框类型
     * input    输入框
     * select   下拉框
     * radio    单选框
     * textarea 文本域
    */
    type: {
      type: String,
      value: 'input'
    },

    maxlength: {
      type: Number,
      value: -1
    },

    lineHeight: {
      type: Number,
      value: 2
    },

    /**
     * @radioOption
     * @Array radio 类型的可选值
     * 例：
     * [
     *  { label: '是', value: 1 },
     *  { label: '否', value: 0 },
     * ]
    */
    radioOption: {
      type: Array,
      value: [{ label: '是', value: '1' }, { label: '否', value: '0' }]
    },
    value: {
      type: String,
      value: ''
    }
  },
  data: {
    modelValue: ''
  },
  attached: function attached() {
    // if (this.data.value || this.data.value === 0) {
    //   this.setData({
    //     modelValue: this.data.value
    //   })
    // }
  },

  methods: {
    // change事件
    change: function change(e) {
      this.setData({
        modelValue: (0, _index.formatValue)(this.data.type, e)
      });
      // 把事件传递上去
      this.triggerEvent('change', this.data.modelValue);
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var formatValue = function formatValue(type, data) {
    var value = '';
    if (type === 'input') {
        value = data.detail.value;
    }
    if (type === 'radio') {
        value = data.currentTarget.dataset.value;
    }
    if (type === 'textarea') {
        value = data.detail.value;
    }
    if (type === 'moreSelect') {
        value = data.detail.value;
    }
    return value;
};

exports.formatValue = formatValue;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map