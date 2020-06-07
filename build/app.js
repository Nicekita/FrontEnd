(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("#btn").click(function () {
    console.log('Отправка формы...');

    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.postJSON = function (url, data, func) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, data, func, 'json');
    };

    var $data = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#ajax_form").serialize();
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.postJSON('http://Api/', jquery__WEBPACK_IMPORTED_MODULE_1___default()("#ajax_form").serialize(), function (data) {
      if (data.auth == '1') {
        console.log('Регистрация прошла успешно!');
      } else console.log('Регистрация не удалась.');
    });
    return false; // или return false;
  });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInBvc3RKU09OIiwidXJsIiwiZGF0YSIsImZ1bmMiLCJwb3N0IiwiJGRhdGEiLCJzZXJpYWxpemUiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtDQUdBOztBQUNBO0FBSUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJGLCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVHLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0FMLGlEQUFDLENBQUNNLFFBQUYsR0FBYSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLElBQXBCLEVBQ2I7QUFDSVQsbURBQUMsQ0FBQ1UsSUFBRixDQUFPSCxHQUFQLEVBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCLE1BQXhCO0FBQ0gsS0FIRDs7QUFLQSxRQUFJRSxLQUFLLEdBQUdYLDZDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWSxTQUFoQixFQUFaO0FBQ0FaLGlEQUFDLENBQUNNLFFBQUYsQ0FBVyxhQUFYLEVBQTBCTiw2Q0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlksU0FBaEIsRUFBMUIsRUFBdUQsVUFBVUosSUFBVixFQUFnQjtBQUVuRSxVQUFJQSxJQUFJLENBQUNLLElBQUwsSUFBYSxHQUFqQixFQUFxQjtBQUFDVCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUEyQyxPQUFqRSxNQUF1RUQsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDMUUsS0FIRDtBQUtBLFdBQU8sS0FBUCxDQWJzQixDQWFSO0FBQ2pCLEdBZEQ7QUFlSCxDQWhCRDtBQWlCQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVosRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoXCIjYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQutCwINGE0L7RgNC80YsuLi4nKTtcbiAgICAgICAgJC5wb3N0SlNPTiA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZnVuYylcbiAgICAgICAge1xuICAgICAgICAgICAgJC5wb3N0KHVybCwgZGF0YSwgZnVuYywgJ2pzb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkZGF0YSA9ICQoXCIjYWpheF9mb3JtXCIpLnNlcmlhbGl6ZSgpO1xuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpLycsICQoXCIjYWpheF9mb3JtXCIpLnNlcmlhbGl6ZSgpLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YS5hdXRoID09ICcxJyl7Y29uc29sZS5sb2coJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/RgNC+0YjQu9CwINGD0YHQv9C10YjQvdC+IScpfSBlbHNlIGNvbnNvbGUubG9nKCfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC90LUg0YPQtNCw0LvQsNGB0YwuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyDQuNC70LggcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7XG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==