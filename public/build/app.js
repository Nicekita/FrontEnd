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
        document.location.href = "/";
        document.cookie = 'login=' + encodeURIComponent(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#login').val()) + '; max-age=3600;path=/';
        document.cookie = 'password=' + encodeURIComponent(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password').val()) + '; max-age=3600;path=/';
      } else console.log('Регистрация не удалась.');
    });
    return false;
  });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~base~save"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInBvc3RKU09OIiwidXJsIiwiZGF0YSIsImZ1bmMiLCJwb3N0IiwiJGRhdGEiLCJzZXJpYWxpemUiLCJhdXRoIiwibG9jYXRpb24iLCJocmVmIiwiY29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtDQUdBOztBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJGLCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVHLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0FMLGlEQUFDLENBQUNNLFFBQUYsR0FBYSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLElBQXBCLEVBQ2I7QUFDSVQsbURBQUMsQ0FBQ1UsSUFBRixDQUFPSCxHQUFQLEVBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCLE1BQXhCO0FBQ0gsS0FIRDs7QUFLQSxRQUFJRSxLQUFLLEdBQUdYLDZDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWSxTQUFoQixFQUFaO0FBQ0FaLGlEQUFDLENBQUNNLFFBQUYsQ0FBVyxhQUFYLEVBQTBCTiw2Q0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlksU0FBaEIsRUFBMUIsRUFBdUQsVUFBVUosSUFBVixFQUFnQjtBQUVuRSxVQUFJQSxJQUFJLENBQUNLLElBQUwsSUFBYSxHQUFqQixFQUFxQjtBQUFDVCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUE0Q0osZ0JBQVEsQ0FBQ2EsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsR0FBekI7QUFDOURkLGdCQUFRLENBQUNlLE1BQVQsR0FBa0IsV0FBV0Msa0JBQWtCLENBQUNqQiw2Q0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZa0IsR0FBWixFQUFELENBQTdCLEdBQWlELHVCQUFuRTtBQUNBakIsZ0JBQVEsQ0FBQ2UsTUFBVCxHQUFrQixjQUFjQyxrQkFBa0IsQ0FBQ2pCLDZDQUFDLENBQUMsV0FBRCxDQUFELENBQWVrQixHQUFmLEVBQUQsQ0FBaEMsR0FBdUQsdUJBQXpFO0FBRUgsT0FKRCxNQUlPZCxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNWLEtBUEQ7QUFTQSxXQUFPLEtBQVA7QUFDSCxHQWxCRDtBQW1CSCxDQXBCRDtBQTBCQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVosRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIiNidG5cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRiy4uLicpO1xuICAgICAgICAkLnBvc3RKU09OID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmdW5jKVxuICAgICAgICB7XG4gICAgICAgICAgICAkLnBvc3QodXJsLCBkYXRhLCBmdW5jLCAnanNvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRkYXRhID0gJChcIiNhamF4X2Zvcm1cIikuc2VyaWFsaXplKCk7XG4gICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvJywgJChcIiNhamF4X2Zvcm1cIikuc2VyaWFsaXplKCksIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmF1dGggPT0gJzEnKXtjb25zb2xlLmxvZygn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9GA0L7RiNC70LAg0YPRgdC/0LXRiNC90L4hJyk7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnbG9naW49JyArIGVuY29kZVVSSUNvbXBvbmVudCgkKCcjbG9naW4nKS52YWwoKSkrJzsgbWF4LWFnZT0zNjAwO3BhdGg9Lyc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ3Bhc3N3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoJCgnI3Bhc3N3b3JkJykudmFsKCkpKyc7IG1heC1hZ2U9MzYwMDtwYXRoPS8nO1xuXG4gICAgICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QtSDRg9C00LDQu9Cw0YHRjC4nKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59KTtcblxuXG5cblxuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==