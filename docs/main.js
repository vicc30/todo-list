/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  margin-top: 80px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/common/constructor.js":
/*!***********************************!*\
  !*** ./src/common/constructor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n//Constructor for new project\nclass Project {\n    constructor(name) {\n        this.projectName = name;\n        this.tasks = [];\n        this.projectInfo = () => {\n            return (this.tasks);\n        }\n    }\n}\n//Constructor for new Task\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.taskTitle = title;\n        this.taskDesc = description;\n        this.taskDate = dueDate;\n        this.taskPriority = priority;\n        this.checked = false;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common/constructor.js?");

/***/ }),

/***/ "./src/common/data.js":
/*!****************************!*\
  !*** ./src/common/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/common/constructor.js\");\n//Import constructor for new Project and new Class\n\n//Set all projects to null at the beggining\nlet allProjects = [];\n\n//Creates some sample data\n//Programming Project\nallProjects.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Project('Programming'));\nallProjects[0].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('To Do App', 'Make the application as TOP instructions', '05/02/21', 'high'));\nallProjects[0].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Library Project', 'Make the application as TOP instructions', '05/01/21', 'high'));\n//Home Project\nallProjects.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Project('Home'));\nallProjects[1].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Shop', 'Shop the meals', '05/02/21', 'normal'));\nallProjects[1].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Paint the house', 'Buy all needed', '21/02/21', 'low'));\nallProjects[1].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Buy some clothes', 'Buy clothes', '21/02/21', 'low'));\nallProjects[1].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Plant a tree', 'Buy a tree', '21/02/21', 'low'));\nallProjects[1].tasks.push(new _constructor__WEBPACK_IMPORTED_MODULE_0__.Task('Make something', 'Buy all ', '21/02/21', 'low'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allProjects);\n\n//# sourceURL=webpack://todo-list/./src/common/data.js?");

/***/ }),

/***/ "./src/handler/addProject.js":
/*!***********************************!*\
  !*** ./src/handler/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/data */ \"./src/common/data.js\");\n/* harmony import */ var _common_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constructor */ \"./src/common/constructor.js\");\n\n//Import constructor for new Project and new Class\n\n\n\nconst addProject = () => {\n    //Data selection from new Project Form\n    var name = document.getElementById('newProjectForm').elements[0].value;\n    //Push the data to a new Project class constructor if the value is not empty\n    if (name != \"\") _common_data__WEBPACK_IMPORTED_MODULE_0__.default.push(new _common_constructor__WEBPACK_IMPORTED_MODULE_1__.Project(name));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n//# sourceURL=webpack://todo-list/./src/handler/addProject.js?");

/***/ }),

/***/ "./src/handler/addTask.js":
/*!********************************!*\
  !*** ./src/handler/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/data */ \"./src/common/data.js\");\n/* harmony import */ var _common_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constructor */ \"./src/common/constructor.js\");\n\n\n\nconst newTask = () => {\n    //Selects the project name with active class and get the text content of anchor tag\n    var project = document.querySelector('.list-group-item.active')\n        .firstChild\n        .textContent;\n    console.log(project);\n    //Looks trough allProject to find if the project name is equal to active name\n    for (var i = 0; i < _common_data__WEBPACK_IMPORTED_MODULE_0__.default.length; i++) {\n        //if true push new Task with the form entries\n        if (_common_data__WEBPACK_IMPORTED_MODULE_0__.default[i].projectName === project.trim()) {\n            //Selects data from newTaskForm\n            var title = document.getElementById('newTaskForm').elements[0].value;\n            var description = document.getElementById('newTaskForm').elements[1].value;\n            var date = document.getElementById('newTaskForm').elements[2].value;\n            var priority = document.getElementById('newTaskForm').elements[3].value;\n\n            //If any value is empty it doesnt continue\n            if (title != \"\" || description != \"\" || date != \"\") {\n                _common_data__WEBPACK_IMPORTED_MODULE_0__.default[i].tasks.push(new _common_constructor__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, date, priority));\n            }\n            console.log(_common_data__WEBPACK_IMPORTED_MODULE_0__.default[i].tasks);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://todo-list/./src/handler/addTask.js?");

/***/ }),

/***/ "./src/handler/removeProject.js":
/*!**************************************!*\
  !*** ./src/handler/removeProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeProject = () => {\n\n    console.log(\"clicked remove project\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeProject);\n\n//# sourceURL=webpack://todo-list/./src/handler/removeProject.js?");

/***/ }),

/***/ "./src/handler/removeTask.js":
/*!***********************************!*\
  !*** ./src/handler/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (project, task) => {\n\n    console.log(\"clicked remove task to remove \" + project + \" project, and \" + task + \" task\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://todo-list/./src/handler/removeTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/data */ \"./src/common/data.js\");\n/* harmony import */ var _render_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/reset */ \"./src/render/reset.js\");\n/* harmony import */ var _handler_addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler/addProject */ \"./src/handler/addProject.js\");\n/* harmony import */ var _handler_removeProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler/removeProject */ \"./src/handler/removeProject.js\");\n/* harmony import */ var _handler_addTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handler/addTask */ \"./src/handler/addTask.js\");\n/* harmony import */ var _handler_removeTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handler/removeTask */ \"./src/handler/removeTask.js\");\n\n//Import styles\n\n//import data constructor for demo\n\n//Import reset module\n\n//Import onclick handlers\n\n\n\n\n\n//Initialize render projects then tasks.\n(0,_render_reset__WEBPACK_IMPORTED_MODULE_2__.default)(_common_data__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//Initialize handler events\n//Add Project\ndocument.getElementById('new-project').onclick = (e) => {\n    (0,_handler_addProject__WEBPACK_IMPORTED_MODULE_3__.default)();\n    //Re render items\n    (0,_render_reset__WEBPACK_IMPORTED_MODULE_2__.default)(_common_data__WEBPACK_IMPORTED_MODULE_1__.default);\n}\ndocument.getElementById('remove-project').onclick = (e) => {\n    ;(0,_handler_removeProject__WEBPACK_IMPORTED_MODULE_4__.default)();\n}\ndocument.getElementById('new-task').onclick = () => {\n    ;(0,_handler_addTask__WEBPACK_IMPORTED_MODULE_5__.default)();\n    (0,_render_reset__WEBPACK_IMPORTED_MODULE_2__.default)(_common_data__WEBPACK_IMPORTED_MODULE_1__.default);\n}\n\n//Multiple elements selector remove-task\nvar task = document.getElementsByClassName('remove-task');\nfor (var i = 0; i < task.length; i++) {\n    task[i].addEventListener(\"click\", (e) => {\n        //get data project name and task name\n        var str = e.currentTarget.getAttribute('data-remove').split(',');\n        var project = str[0];\n        var task = str[1];\n        (0,_handler_removeTask__WEBPACK_IMPORTED_MODULE_6__.default)(project, task);\n    });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render/renderProjects.js":
/*!**************************************!*\
  !*** ./src/render/renderProjects.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderProjects = (allProjects) => {\n    //Render Projects on list-tab\n    document.getElementById('list-tab').innerHTML = allProjects.map((project) => {\n        //Get the length of each project\n        const projectLength = Object.keys(project.tasks).length;\n        //Returns the list group of each project\n        return (\n            `\n            <a class=\"list-group-item list-group-item-action\" id=\"list-${project.projectName.toLowerCase()}-list\"\n                data-bs-toggle=\"list\" href=\"#list-${project.projectName.toLowerCase()}\" role=\"tab\"\n                aria-controls=\"${project.projectName.toLowerCase()}\">${project.projectName} <span\n                    class=\"badge rounded-pill bg-secondary\">${projectLength}</span>\n            <span class=\"visually-hidden\">number of tasks in ${project.projectName}</span></a>\n        `\n        );\n    }).join('');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);\n\n//# sourceURL=webpack://todo-list/./src/render/renderProjects.js?");

/***/ }),

/***/ "./src/render/renderTask.js":
/*!**********************************!*\
  !*** ./src/render/renderTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderTask = (allProjects) => {\n    //Select all projects and for each calls renderItem\n    allProjects.forEach((element) => {\n        //Selects each task object\n        var tasks = element.tasks;\n        //Selects projectName\n        var name = element.projectName;\n        console.log(name);\n\n        /**Select tabContent and add head for each project\n         * Then map each task and render in tbody-projectName\n         **/\n        document.getElementById('nav-tabContent').innerHTML +=\n            `<div class=\"tab-pane fade show\" id=\"list-${name.toLowerCase()}\" role=\"tabpanel\"\n                aria-labelledby=\"list-${name.toLowerCase()}-list\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"></th>\n                            <th>Title</th>\n                            <th>Description</th>\n                            <th>Due Date</th>\n                            <th>Priority</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"tbody-${name.toLowerCase()}\">             \n                    </tbody>\n                </table>\n            </div>\n        `;\n        /**Maps task in each project and appends it */\n        tasks.map((task) => {\n            document.getElementById(`tbody-${name.toLowerCase()}`).innerHTML +=\n                `\n            <tr>\n                <th scope=\"col\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=${task.checked}\n                        aria-label=\"Checkbox for task\">\n                </th>\n                <td>${task.taskTitle}</td>\n                <td>${task.taskDesc}</td>\n                <td>${task.taskDate}</td>\n                <td>${task.taskPriority}</td>\n                <td><a class=\"remove-task\" data-remove='${name},${task.taskTitle}'><span class=\"badge rounded-pill bg-danger\">-</span>\n                    <span class=\"visually-hidden\">Remove task ${task.taskTitle}</span></a>\n                </td>\n            </tr>\n            `\n        });\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTask);\n\n//# sourceURL=webpack://todo-list/./src/render/renderTask.js?");

/***/ }),

/***/ "./src/render/reset.js":
/*!*****************************!*\
  !*** ./src/render/reset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ \"./src/render/renderProjects.js\");\n/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ \"./src/render/renderTask.js\");\n\n\n//Reset the screen and render data elements\n\nconst reset = (allProjects) => {\n    document.getElementById('list-tab').innerHTML = \"\";\n    document.getElementById('nav-tabContent').innerHTML = \"\";\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__.default)(allProjects);\n    (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.default)(allProjects);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);\n\n//# sourceURL=webpack://todo-list/./src/render/reset.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;