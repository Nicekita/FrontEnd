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
      } else console.log('Регистрация не удалась.');
    });
    return false; // или return false;
  });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~base"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInBvc3RKU09OIiwidXJsIiwiZGF0YSIsImZ1bmMiLCJwb3N0IiwiJGRhdGEiLCJzZXJpYWxpemUiLCJhdXRoIiwibG9jYXRpb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtDQUdBOztBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJGLCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVHLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0FMLGlEQUFDLENBQUNNLFFBQUYsR0FBYSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLElBQXBCLEVBQ2I7QUFDSVQsbURBQUMsQ0FBQ1UsSUFBRixDQUFPSCxHQUFQLEVBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCLE1BQXhCO0FBQ0gsS0FIRDs7QUFLQSxRQUFJRSxLQUFLLEdBQUdYLDZDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWSxTQUFoQixFQUFaO0FBQ0FaLGlEQUFDLENBQUNNLFFBQUYsQ0FBVyxhQUFYLEVBQTBCTiw2Q0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlksU0FBaEIsRUFBMUIsRUFBdUQsVUFBVUosSUFBVixFQUFnQjtBQUVuRSxVQUFJQSxJQUFJLENBQUNLLElBQUwsSUFBYSxHQUFqQixFQUFxQjtBQUFDVCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUE0Q0osZ0JBQVEsQ0FBQ2EsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsR0FBekI7QUFBOEIsT0FBaEcsTUFBc0dYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ3pHLEtBSEQ7QUFLQSxXQUFPLEtBQVAsQ0Fic0IsQ0FhUjtBQUNqQixHQWREO0FBZUgsQ0FoQkQ7QUFzQkFELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoXCIjYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQutCwINGE0L7RgNC80YsuLi4nKTtcbiAgICAgICAgJC5wb3N0SlNPTiA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZnVuYylcbiAgICAgICAge1xuICAgICAgICAgICAgJC5wb3N0KHVybCwgZGF0YSwgZnVuYywgJ2pzb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkZGF0YSA9ICQoXCIjYWpheF9mb3JtXCIpLnNlcmlhbGl6ZSgpO1xuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpLycsICQoXCIjYWpheF9mb3JtXCIpLnNlcmlhbGl6ZSgpLCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5hdXRoID09ICcxJyl7Y29uc29sZS5sb2coJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/RgNC+0YjQu9CwINGD0YHQv9C10YjQvdC+IScpOyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCIvXCI7fSBlbHNlIGNvbnNvbGUubG9nKCfQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC90LUg0YPQtNCw0LvQsNGB0YwuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyDQuNC70LggcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7XG5cblxuXG5cblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=