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
      } else alert('Регистрация не удалась.');
    });
    return false;
  });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~base~save"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInBvc3RKU09OIiwidXJsIiwiZGF0YSIsImZ1bmMiLCJwb3N0IiwiJGRhdGEiLCJzZXJpYWxpemUiLCJhdXRoIiwibG9jYXRpb24iLCJocmVmIiwiY29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidmFsIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBR0E7O0FBQ0E7QUFFQUEsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsK0NBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUcsS0FBVixDQUFnQixZQUFVO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFDQUwsaURBQUMsQ0FBQ00sUUFBRixHQUFhLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsSUFBcEIsRUFDYjtBQUNJVCxtREFBQyxDQUFDVSxJQUFGLENBQU9ILEdBQVAsRUFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0IsTUFBeEI7QUFDSCxLQUhEOztBQUtBLFFBQUlFLEtBQUssR0FBR1gsNkNBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JZLFNBQWhCLEVBQVo7QUFDQVosaURBQUMsQ0FBQ00sUUFBRixDQUFXLGFBQVgsRUFBMEJOLDZDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWSxTQUFoQixFQUExQixFQUF1RCxVQUFVSixJQUFWLEVBQWdCO0FBRW5FLFVBQUlBLElBQUksQ0FBQ0ssSUFBTCxJQUFhLEdBQWpCLEVBQXFCO0FBQUNULGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQTRDSixnQkFBUSxDQUFDYSxRQUFULENBQWtCQyxJQUFsQixHQUF5QixHQUF6QjtBQUM5RGQsZ0JBQVEsQ0FBQ2UsTUFBVCxHQUFrQixXQUFXQyxrQkFBa0IsQ0FBQ2pCLDZDQUFDLENBQUMsUUFBRCxDQUFELENBQVlrQixHQUFaLEVBQUQsQ0FBN0IsR0FBaUQsdUJBQW5FO0FBQ0FqQixnQkFBUSxDQUFDZSxNQUFULEdBQWtCLGNBQWNDLGtCQUFrQixDQUFDakIsNkNBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWtCLEdBQWYsRUFBRCxDQUFoQyxHQUF1RCx1QkFBekU7QUFFSCxPQUpELE1BSU9DLEtBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ1YsS0FQRDtBQVNBLFdBQU8sS0FBUDtBQUNILEdBbEJEO0FBbUJILENBcEJEO0FBMEJBZixPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiI2J0blwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygn0J7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLLi4uJyk7XG4gICAgICAgICQucG9zdEpTT04gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZ1bmMpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQucG9zdCh1cmwsIGRhdGEsIGZ1bmMsICdqc29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGRhdGEgPSAkKFwiI2FqYXhfZm9ybVwiKS5zZXJpYWxpemUoKTtcbiAgICAgICAgJC5wb3N0SlNPTignaHR0cDovL0FwaS8nLCAkKFwiI2FqYXhfZm9ybVwiKS5zZXJpYWxpemUoKSwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgaWYgKGRhdGEuYXV0aCA9PSAnMScpe2NvbnNvbGUubG9nKCfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0YDQvtGI0LvQsCDRg9GB0L/QtdGI0L3QviEnKTsgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdsb2dpbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KCQoJyNsb2dpbicpLnZhbCgpKSsnOyBtYXgtYWdlPTM2MDA7cGF0aD0vJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAncGFzc3dvcmQ9JyArIGVuY29kZVVSSUNvbXBvbmVudCgkKCcjcGFzc3dvcmQnKS52YWwoKSkrJzsgbWF4LWFnZT0zNjAwO3BhdGg9Lyc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBhbGVydCgn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvdC1INGD0LTQsNC70LDRgdGMLicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pO1xuXG5cblxuXG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9