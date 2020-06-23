(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/base.js":
/*!***************************!*\
  !*** ./assets/js/base.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


var divisionid = 0;
var ValueForDivision = "";

var DateNormalize = function DateNormalize(date) {
  return date.substr(0, 10);
};

jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON = function (url, data, func) {
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, data, func, 'json');
};

function ListOf(eventid, divname) {
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "division"
  }, function (data) {
    var ListOfDivisions = "";
    var selected = "";

    for (var i = 0; i < data.length - 1; i++) {
      if (data[i]["divisionname"] == divname) {
        selected = "selected";
        ValueForDivision = "data[i][\"divisionname\"]";
      }

      ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] + '">' + data[i]["divisionname"] + '</option>\n';
      selected = "";
    }

    console.log(ListOfDivisions);
    return ListOfDivisions;
  });
}

function ListOf1(eventid, etname) {
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "eventtype"
  }, function (data) {
    var ListOfEventTypes = "";
    var selected = "";

    for (var i = 0; i < data.length - 1; i++) {
      if (eventid == false) {
        ListOfEventTypes = ListOfEventTypes + ' <option ' + ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
        selected = "";
      } else {
        if (data[i]["eventtypename"] == etname) {
          selected = "selected";
        }

        ListOfEventTypes = ListOfEventTypes + ' <option ' + selected + ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
        selected = "";
      }
    }

    return ListOfEventTypes;
  });
}

var event2 = function event2(division) {
  var ListOfDivisions = "";
  var ListOfEventTypes = "";
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "division"
  }, function (data) {
    ListOfDivisions = "";
    var divisionname = "";
    var selected = "";

    for (var i = 0; i < data.length - 1; i++) {
      if (data[i]["divisionid"] == division) {
        selected = "selected";
        divisionname = data[i]["divisionname"];
      }

      ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] + '">' + data[i]["divisionname"] + '</option>\n';
      selected = "";
    }

    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
      table: "eventtype"
    }, function (data) {
      ListOfEventTypes = "";
      var selected = "";

      for (var _i = 0; _i < data.length - 1; _i++) {
        ListOfEventTypes = ListOfEventTypes + ' <option ' + ' value="' + data[_i]["eventtypename"] + '">' + data[_i]["eventtypename"] + '</option>\n';
      }

      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
      var EditDiv = document.createElement('div');
      EditDiv.className = "Edit";
      EditDiv.innerHTML = "<form action=\"\" id=\"form1\"><div><p><b>\u041A\u043E\u0434 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:</b><br>\n        <input type=\"text\" id = \"eventid\" name=\"eventid\" value=''>\n            </div>\n            <div>\n    <p><b>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:</b><br>\n        <input type=\"text\" name = \"eventname\" value=''>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F:</b><br>\n        <textarea id = \"eventplace\" name=\"eventplace\" ></textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F:</b><br>\n        <input id = \"eventdate\" name=\"eventdate\" type=\"date\" value=''>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C:</b><br>\n        <textarea id = \"teacher\" name=\"teacher\"></textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432:</b><br>\n        <input id = \"usermax\" type=\"text\" name=\"usermax\" value=''>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u0440\u043E\u0447\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:</b><br>\n        <textarea id = \"addinfo\" name=\"addinfo\" ></textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435:</b><br>\n        <select id = \"divisionname\" disabled name=\"divisionname\">\n          \n".concat(ListOfDivisions, "       \n <input type=\"hidden\" name=\"divisionname\" value='").concat(divisionname, "'> \n  </select></p>\n                </div>\n            <div>\n    <p><b>\u0422\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:</b><br>\n        <select id = \"eventtypename\" name=\"eventtypename\">\n            <option selected disabled>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</option>\n            \n  ").concat(ListOfEventTypes, "      </select></p>\n                </div>\n                </form><section class=\"light\">\n\n                <img src=\"images/save.png\"  width=\"92\" height=\"80\" alt=\"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\" id=\"save\" name=\"save\">\n                <img src=\"images/exit.png\" width=\"90\" height=\"86\" alt=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C\" id=\"exit\">\n\n\n\n        </section>");
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on("cut copy paste", "#usermax", function (e) {
        e.preventDefault();
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").append(EditDiv);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#usermax').on('keyup', function () {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).val(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).val().replace(/\D/, ''));
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#save").click(function () {
        var SaveOrEdit;
        SaveOrEdit = "save";
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/' + SaveOrEdit, jquery__WEBPACK_IMPORTED_MODULE_5___default()("#form1").serialize(), function (data) {
          if (data['error'] == true) {
            alert('Произошла ошибка. Проверьте введенные данные');
          } else {
            alert('Сохранение произведено успешно');
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
          }
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#exit").click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#delete").click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/delete', jquery__WEBPACK_IMPORTED_MODULE_5___default()("#form1").serialize(), function (data) {
          if (data['error'] == true) {
            alert('Произошла ошибка. Проверьте введенные данные');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
            alert('Удаление произведено успешно');
          }
        });
      });
    });
  });
};

var event = function event(eventid, divname, etname, disabled) {
  var ListOfDivisions = "";
  var ListOfEventTypes = "";
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "division"
  }, function (data) {
    ListOfDivisions = "";
    var selected = "";

    for (var i = 0; i < data.length - 1; i++) {
      if (data[i]["divisionname"] == divname) {
        selected = "selected";
        ValueForDivision = "data[i][\"divisionname\"]";
      }

      ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] + '">' + data[i]["divisionname"] + '</option>\n';
      selected = "";
    }

    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
      table: "eventtype"
    }, function (data) {
      ListOfEventTypes = "";
      var selected = "";

      for (var _i2 = 0; _i2 < data.length - 1; _i2++) {
        if (eventid == false) {
          ListOfEventTypes = ListOfEventTypes + ' <option ' + ' value="' + data[_i2]["eventtypename"] + '">' + data[_i2]["eventtypename"] + '</option>\n';
          selected = "";
        } else {
          if (data[_i2]["eventtypename"] == etname) {
            selected = "selected";
          }

          ListOfEventTypes = ListOfEventTypes + ' <option ' + selected + ' value="' + data[_i2]["eventtypename"] + '">' + data[_i2]["eventtypename"] + '</option>\n';
          selected = "";
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
        table: "events inner join eventtype on events.eventtypeid=eventtype.eventtypeid inner join division on events.divisionid=division.divisionid where events.divisionid = '" + divisionid + "'"
      }, function (data) {
        for (var _i3 = 0; _i3 < data.length - 1; _i3++) {
          if (data[_i3]["eventid"] == eventid) {
            var EditDiv = document.createElement('div');
            EditDiv.className = "Edit";
            EditDiv.innerHTML = "<form action=\"\" id=\"form1\"><div><p><b>\u041A\u043E\u0434 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:</b><br>\n        <input type=\"text\" id = \"eventid\" name=\"eventid\" ".concat(disabled, " value='").concat(data[_i3]['eventid'], "'>\n        <input type=\"hidden\" name=\"eventid\" value='").concat(data[_i3]['eventid'], "'>\n            </div>\n            <div>\n    <p><b>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:</b><br>\n        <input type=\"text\" name = \"eventname\" value='").concat(data[_i3]['eventname'], "'>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F:</b><br>\n        <textarea id = \"eventplace\" name=\"eventplace\" >").concat(data[_i3]['eventplace'], "</textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F:</b><br>\n        <input id = \"eventdate\" name=\"eventdate\" type=\"date\" value='").concat(DateNormalize(data[_i3]['eventdate']), "'>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C:</b><br>\n        <textarea id = \"teacher\" name=\"teacher\">").concat(data[_i3]['teacher'], "</textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432:</b><br>\n        <input id = \"usermax\" type=\"text\" name=\"usermax\" value='").concat(data[_i3]['usermax'], "'>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u0440\u043E\u0447\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:</b><br>\n        <textarea id = \"addinfo\" name=\"addinfo\" >").concat(data[_i3]['addinfo'], "</textarea>\n    </p>\n                </div>\n            <div>\n    <p><b>\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435:</b><br>\n        <select disabled id = \"divisionname\" name=\"divisionname\">\n          \n").concat(ListOfDivisions, "       \n <input type=\"hidden\" name=\"divisionname\" value='").concat(data[_i3]['divisionname'], "'> \n  </select></p>\n                </div>\n            <div>\n    <p><b>\u0422\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:</b><br>\n        <select id = \"eventtypename\" name=\"eventtypename\">\n            <option disabled>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</option>\n            \n  ").concat(ListOfEventTypes, "      </select></p>\n                </div>\n                </form><section class=\"light\">\n\n                <img src=\"images/save.png\"  width=\"92\" height=\"80\" alt=\"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\" id=\"save\" name=\"save\">\n                <img src=\"images/delete.png\" width=\"90\" height=\"86\" alt=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C\" id=\"delete\">\n                <img src=\"images/exit.png\" width=\"90\" height=\"86\" alt=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C\" id=\"exit\">\n\n\n\n        </section>");
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").append(EditDiv);
            jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on("cut copy paste", "#usermax", function (e) {
              e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#usermax').on('keyup', function () {
              jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).val(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).val().replace(/\D/, ''));
            });
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#save").click(function () {
              var SaveOrEdit;

              if (disabled == 'disabled') {
                SaveOrEdit = "edit";
              } else {
                SaveOrEdit = "save";
              }

              jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/' + SaveOrEdit, jquery__WEBPACK_IMPORTED_MODULE_5___default()("#form1").serialize(), function (data) {
                if (data['error'] == true) {
                  alert('Произошла ошибка. Проверьте введенные данные');
                } else {
                  alert('Редактирование/Сохранение произведено успешно');
                }
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#exit").click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
            });
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#delete").click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/delete', jquery__WEBPACK_IMPORTED_MODULE_5___default()("#form1").serialize(), function (data) {
                if (data['error'] == true) {
                  alert('Произошла ошибка. Проверьте введенные данные');
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
                  alert('Удаление произведено успешно');
                }
              });
            });
          }
        }
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();
};

var event1 = function event1(div) {
  divisionid = div;
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "events inner join eventtype on events.eventtypeid=eventtype.eventtypeid inner join division on events.divisionid=division.divisionid where events.divisionid = '" + divisionid + "'"
  }, function (data) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").empty();

    var _loop = function _loop(i) {
      var div = document.createElement('div');
      div.innerHTML = data[i]["eventname"] + " <br /> Место проведения:" + data[i]["eventplace"] + "; Дата проведения: " + data[i]["eventdate"] + "; Преподаватель: " + data[i]["teacher"] + "; Максимальное кол-во участников: " + data[i]["usermax"] + "; Тип мероприятия: " + data[i]["eventtypename"] + "; Подразделение: " + data[i]["divisionname"] + "; Учебный год: " + data[i]["eventyear"] + "; Учебный семестр: " + data[i]["eventsemestr"];
      div.id = data[i]["eventid"];
      div.className = "event";

      div.onclick = function () {
        event(div.id, data[i]["divisionname"], data[i]["eventtypename"], 'disabled');
      };

      events.append(div);
    };

    for (var i = 0; i < data.length - 1; i++) {
      _loop(i);
    }

    var addEvent = document.createElement('div');
    addEvent.innerHTML = '<img src = "images/AddNew.png" height="50" width="50">';
    addEvent.id = "addEvent";
    addEvent.className = "event";

    addEvent.onclick = function () {
      event2(divisionid);
    };

    jquery__WEBPACK_IMPORTED_MODULE_5___default()("#events").append(addEvent);
  });
};

var closeIFrame = function closeIFrame() {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('iframe').remove();
};

function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;

  if (cookie.length > 0) {
    offset = cookie.indexOf(search);

    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset);

      if (end == -1) {
        end = cookie.length;
      }

      setStr = unescape(cookie.substring(offset, end));
    }
  }

  return setStr;
}

function onstart() {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()("#divs").empty();
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/div', {
    table: "division"
  }, function (data) {
    var _loop2 = function _loop2(i) {
      var div = document.createElement('div');
      div.innerHTML = data[i]["divisionname"];
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#divs").append(div);
      div.id = data[i]["divisionid"];
      div["class"] = "main";

      div.onclick = function () {
        event1(div.id);
      };
    };

    for (var i = 0; i < data.length - 1; i++) {
      _loop2(i);
    }

    var addDiv = document.createElement('div');
    addDiv.innerHTML = '<img src = "images/AddNew.png" height="50" width="50">';
    jquery__WEBPACK_IMPORTED_MODULE_5___default()("#divs").append(addDiv);
    addDiv.id = "addDiv";
    addDiv["class"] = "Add";
    var added = false;

    addDiv.onclick = function () {
      if (added == false) {
        added = true;
        addDiv.innerHTML = '<form action ="" id = "NewDiv"><p>Введите код подразделения: <input type="text" name="divisionid" value="">' + '</p>Введите название подразделения: <input type="text" name="divisionname"></form>' + '<input type="button" value="Добавить" id="addDivbtn" > ' + '<input type="button" value="Отменить" id ="closeAddDiv">';
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#addDivbtn").click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/adddiv', jquery__WEBPACK_IMPORTED_MODULE_5___default()("#NewDiv").serialize(), function (data) {
            if (data['error'] == true) {
              alert('Произошла ошибка. Проверьте введенные данные');
            } else {
              onstart();
            }
          });
        });
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#closeAddDiv").click(function () {
          onstart();
        });
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#divs").append(addDiv);
      }
    };
  });
}

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.postJSON('http://Api/', {
    login: getCookie('login'),
    password: getCookie('password')
  }, function (data) {
    if (data.auth == '1') {
      console.log('Регистрация прошла успешно!');
    } else document.location.href = "/login";
  });
  onstart();
  return false;
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/base.js","runtime","vendors~app~base~save","vendors~base"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jhc2UuanMiXSwibmFtZXMiOlsiZGl2aXNpb25pZCIsIlZhbHVlRm9yRGl2aXNpb24iLCJEYXRlTm9ybWFsaXplIiwiZGF0ZSIsInN1YnN0ciIsIiQiLCJwb3N0SlNPTiIsInVybCIsImRhdGEiLCJmdW5jIiwicG9zdCIsIkxpc3RPZiIsImV2ZW50aWQiLCJkaXZuYW1lIiwidGFibGUiLCJMaXN0T2ZEaXZpc2lvbnMiLCJzZWxlY3RlZCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiTGlzdE9mMSIsImV0bmFtZSIsIkxpc3RPZkV2ZW50VHlwZXMiLCJldmVudDIiLCJkaXZpc2lvbiIsImRpdmlzaW9ubmFtZSIsImVtcHR5IiwiRWRpdERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kIiwidmFsIiwicmVwbGFjZSIsImNsaWNrIiwiU2F2ZU9yRWRpdCIsInNlcmlhbGl6ZSIsImFsZXJ0IiwiZXZlbnQiLCJkaXNhYmxlZCIsImV2ZW50MSIsImRpdiIsImlkIiwib25jbGljayIsImV2ZW50cyIsImFkZEV2ZW50IiwiY2xvc2VJRnJhbWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJuYW1lIiwiY29va2llIiwic2VhcmNoIiwic2V0U3RyIiwib2Zmc2V0IiwiZW5kIiwiaW5kZXhPZiIsInVuZXNjYXBlIiwic3Vic3RyaW5nIiwib25zdGFydCIsImFkZERpdiIsImFkZGVkIiwicmVhZHkiLCJsb2dpbiIsInBhc3N3b3JkIiwiYXV0aCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQSxJQUFJQSxVQUFV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QUNSLFdBUEQ7QUFRUCxTQVZEO0FBV0ExRCxxREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtDLEtBQWxCLENBQXdCLFlBQVk7QUFDNUJ3QixpQkFBTztBQUNkLFNBRkQ7QUFHQTFELHFEQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQixNQUFYLENBQWtCNEIsTUFBbEI7QUFDUDtBQUNSLEtBekJEO0FBMEJQLEdBN0NEO0FBOENQOztBQUVEM0QsNkNBQUMsQ0FBQ3dCLFFBQUQsQ0FBRCxDQUFZcUMsS0FBWixDQUFrQixZQUFXO0FBRXJCN0QsK0NBQUMsQ0FBQ0MsUUFBRixDQUFXLGFBQVgsRUFBMEI7QUFBQzZELFNBQUssRUFBQ2QsU0FBUyxDQUFDLE9BQUQsQ0FBaEI7QUFBMEJlLFlBQVEsRUFBQ2YsU0FBUyxDQUFDLFVBQUQ7QUFBNUMsR0FBMUIsRUFBcUYsVUFBVTdDLElBQVYsRUFBZ0I7QUFFOUYsUUFBSUEsSUFBSSxDQUFDNkQsSUFBTCxJQUFhLEdBQWpCLEVBQXFCO0FBQUNsRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUVwQixLQUZGLE1BRVFTLFFBQVEsQ0FBQ3lDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCLFFBQXpCO0FBQ2QsR0FMRDtBQU9BUixTQUFPO0FBUVAsU0FBTyxLQUFQO0FBRVAsQ0FuQkQ7QUEwQkE1QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5cclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmxldCBkaXZpc2lvbmlkID0wO1xyXG5cclxubGV0IFZhbHVlRm9yRGl2aXNpb249XCJcIjtcclxubGV0IERhdGVOb3JtYWxpemUgPSBmdW5jdGlvbiAoZGF0ZSl7XHJcbnJldHVybiBkYXRlLnN1YnN0cigwLDEwKVxyXG59XHJcbiQucG9zdEpTT04gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZ1bmMpXHJcbntcclxuICAgICAgICAkLnBvc3QodXJsLCBkYXRhLCBmdW5jLCAnanNvbicpO1xyXG59XHJcbmZ1bmN0aW9uIExpc3RPZihldmVudGlkLGRpdm5hbWUpe1xyXG4gICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvZGl2Jyx7dGFibGU6IFwiZGl2aXNpb25cIn0sZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBMaXN0T2ZEaXZpc2lvbnM9XCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZD1cIlwiXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxkYXRhLmxlbmd0aC0xO2krKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVtcImRpdmlzaW9ubmFtZVwiXT09ZGl2bmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlRm9yRGl2aXNpb249XCJkYXRhW2ldW1xcXCJkaXZpc2lvbm5hbWVcXFwiXVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpc3RPZkRpdmlzaW9ucyA9IExpc3RPZkRpdmlzaW9ucyArICcgPG9wdGlvbiAnICsgc2VsZWN0ZWQgKyAnIHZhbHVlPVwiJyArIGRhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0gKydcIj4nK2RhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0rJzwvb3B0aW9uPlxcbic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9XCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coTGlzdE9mRGl2aXNpb25zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBMaXN0T2ZEaXZpc2lvbnM7XHJcbiAgICAgICAgfSlcclxufVxyXG5mdW5jdGlvbiBMaXN0T2YxKGV2ZW50aWQsZXRuYW1lKXtcclxuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpL2Rpdicse3RhYmxlOiBcImV2ZW50dHlwZVwifSxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IExpc3RPZkV2ZW50VHlwZXM9XCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZD1cIlwiXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxkYXRhLmxlbmd0aC0xO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudGlkPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0T2ZFdmVudFR5cGVzID0gTGlzdE9mRXZlbnRUeXBlcyArICcgPG9wdGlvbiAnKyAnIHZhbHVlPVwiJyArIGRhdGFbaV1bXCJldmVudHR5cGVuYW1lXCJdICsgJ1wiPicgKyBkYXRhW2ldW1wiZXZlbnR0eXBlbmFtZVwiXSArICc8L29wdGlvbj5cXG4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldW1wiZXZlbnR0eXBlbmFtZVwiXSA9PSBldG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RPZkV2ZW50VHlwZXMgPSBMaXN0T2ZFdmVudFR5cGVzICsgJyA8b3B0aW9uICcgKyBzZWxlY3RlZCArICcgdmFsdWU9XCInICsgZGF0YVtpXVtcImV2ZW50dHlwZW5hbWVcIl0gKyAnXCI+JyArIGRhdGFbaV1bXCJldmVudHR5cGVuYW1lXCJdICsgJzwvb3B0aW9uPlxcbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBMaXN0T2ZFdmVudFR5cGVzO1xyXG5cclxuXHJcbiAgICAgICAgfSlcclxufVxyXG5sZXQgZXZlbnQyID0gZnVuY3Rpb24oZGl2aXNpb24pe1xyXG4gICAgICAgIGxldCBMaXN0T2ZEaXZpc2lvbnM9XCJcIjtcclxuICAgICAgICBsZXQgTGlzdE9mRXZlbnRUeXBlcz1cIlwiO1xyXG4gICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvZGl2Jyx7dGFibGU6IFwiZGl2aXNpb25cIn0sZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIExpc3RPZkRpdmlzaW9ucz1cIlwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdmlzaW9ubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8ZGF0YS5sZW5ndGgtMTtpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bXCJkaXZpc2lvbmlkXCJdPT1kaXZpc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9ubmFtZSA9IGRhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpc3RPZkRpdmlzaW9ucyA9IExpc3RPZkRpdmlzaW9ucyArICcgPG9wdGlvbiAnICsgc2VsZWN0ZWQgKyAnIHZhbHVlPVwiJyArIGRhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0gKydcIj4nK2RhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0rJzwvb3B0aW9uPlxcbic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9XCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvZGl2Jyx7dGFibGU6IFwiZXZlbnR0eXBlXCJ9LGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpc3RPZkV2ZW50VHlwZXM9XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8ZGF0YS5sZW5ndGgtMTtpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0T2ZFdmVudFR5cGVzID0gTGlzdE9mRXZlbnRUeXBlcyArICcgPG9wdGlvbiAnKyAnIHZhbHVlPVwiJyArIGRhdGFbaV1bXCJldmVudHR5cGVuYW1lXCJdICsgJ1wiPicgKyBkYXRhW2ldW1wiZXZlbnR0eXBlbmFtZVwiXSArICc8L29wdGlvbj5cXG4nO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNldmVudHNcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdERpdi5jbGFzc05hbWUgPSBcIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZGl0RGl2LmlubmVySFRNTCA9IGA8Zm9ybSBhY3Rpb249XCJcIiBpZD1cImZvcm0xXCI+PGRpdj48cD48Yj7QmtC+0LQg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjzo8L2I+PGJyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJldmVudGlkXCIgbmFtZT1cImV2ZW50aWRcIiB2YWx1ZT0nJz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7QndCw0LfQstCw0L3QuNC1OjwvYj48YnI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiZXZlbnRuYW1lXCIgdmFsdWU9Jyc+XHJcbiAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgIDxwPjxiPtCc0LXRgdGC0L4g0L/RgNC+0LLQtdC00LXQvdC40Y86PC9iPjxicj5cclxuICAgICAgICA8dGV4dGFyZWEgaWQgPSBcImV2ZW50cGxhY2VcIiBuYW1lPVwiZXZlbnRwbGFjZVwiID48L3RleHRhcmVhPlxyXG4gICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7QlNCw0YLQsCDQuCDQstGA0LXQvNGPINC/0YDQvtCy0LXQtNC10L3QuNGPOjwvYj48YnI+XHJcbiAgICAgICAgPGlucHV0IGlkID0gXCJldmVudGRhdGVcIiBuYW1lPVwiZXZlbnRkYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0nJz5cclxuICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0J/RgNC10L/QvtC00LDQstCw0YLQtdC70Yw6PC9iPjxicj5cclxuICAgICAgICA8dGV4dGFyZWEgaWQgPSBcInRlYWNoZXJcIiBuYW1lPVwidGVhY2hlclwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgIDxwPjxiPtCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQutC+0Lst0LLQviDRg9GH0LDRgdGC0L3QuNC60L7Qsjo8L2I+PGJyPlxyXG4gICAgICAgIDxpbnB1dCBpZCA9IFwidXNlcm1heFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJtYXhcIiB2YWx1ZT0nJz5cclxuICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0J/RgNC+0YfQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPOjwvYj48YnI+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkID0gXCJhZGRpbmZvXCIgbmFtZT1cImFkZGluZm9cIiA+PC90ZXh0YXJlYT5cclxuICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LU6PC9iPjxicj5cclxuICAgICAgICA8c2VsZWN0IGlkID0gXCJkaXZpc2lvbm5hbWVcIiBkaXNhYmxlZCBuYW1lPVwiZGl2aXNpb25uYW1lXCI+XHJcbiAgICAgICAgICBcclxuJHtMaXN0T2ZEaXZpc2lvbnN9ICAgICAgIFxyXG4gPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGl2aXNpb25uYW1lXCIgdmFsdWU9JyR7ZGl2aXNpb25uYW1lfSc+IFxyXG4gIDwvc2VsZWN0PjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0KLQuNC/INC80LXRgNC+0L/RgNC40Y/RgtC40Y86PC9iPjxicj5cclxuICAgICAgICA8c2VsZWN0IGlkID0gXCJldmVudHR5cGVuYW1lXCIgbmFtZT1cImV2ZW50dHlwZW5hbWVcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZD7QktGL0LHQtdGA0LjRgtC1INGC0LjQvyDQvNC10YDQvtC/0YDQuNGP0YLQuNGPPC9vcHRpb24+XHJcbiAgICAgICAgICAgIFxyXG4gICR7TGlzdE9mRXZlbnRUeXBlc30gICAgICA8L3NlbGVjdD48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT48c2VjdGlvbiBjbGFzcz1cImxpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc2F2ZS5wbmdcIiAgd2lkdGg9XCI5MlwiIGhlaWdodD1cIjgwXCIgYWx0PVwi0KHQvtGF0YDQsNC90LjRgtGMXCIgaWQ9XCJzYXZlXCIgbmFtZT1cInNhdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2V4aXQucG5nXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjg2XCIgYWx0PVwi0KPQtNCw0LvQuNGC0YxcIiBpZD1cImV4aXRcIj5cclxuXHJcblxyXG5cclxuICAgICAgICA8L3NlY3Rpb24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oXCJjdXQgY29weSBwYXN0ZVwiLFwiI3VzZXJtYXhcIixmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNldmVudHNcIikuYXBwZW5kKEVkaXREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdXNlcm1heCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS52YWwoKS5yZXBsYWNlICgvXFxELywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2F2ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFNhdmVPckVkaXQ7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZU9yRWRpdCA9IFwic2F2ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvJytTYXZlT3JFZGl0LCQoXCIjZm9ybTFcIikuc2VyaWFsaXplKCksZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWydlcnJvciddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQstCy0LXQtNC10L3QvdGL0LUg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KHQvtGF0YDQsNC90LXQvdC40LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QviDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V2ZW50c1wiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4aXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZXZlbnRzXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5wb3N0SlNPTignaHR0cDovL0FwaS9kZWxldGUnLCQoXCIjZm9ybTFcIikuc2VyaWFsaXplKCksZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWydlcnJvciddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQstCy0LXQtNC10L3QvdGL0LUg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V2ZW50c1wiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cj0LTQsNC70LXQvdC40LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QviDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG59XHJcbmxldCBldmVudCA9IGZ1bmN0aW9uKGV2ZW50aWQsZGl2bmFtZSxldG5hbWUsZGlzYWJsZWQpe1xyXG4gICAgICAgIGxldCBMaXN0T2ZEaXZpc2lvbnM9XCJcIjtcclxuICAgICAgICBsZXQgTGlzdE9mRXZlbnRUeXBlcz1cIlwiO1xyXG4gICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvZGl2Jyx7dGFibGU6IFwiZGl2aXNpb25cIn0sZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIExpc3RPZkRpdmlzaW9ucz1cIlwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkPVwiXCJcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPGRhdGEubGVuZ3RoLTE7aSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldW1wiZGl2aXNpb25uYW1lXCJdPT1kaXZuYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWVGb3JEaXZpc2lvbj1cImRhdGFbaV1bXFxcImRpdmlzaW9ubmFtZVxcXCJdXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGlzdE9mRGl2aXNpb25zID0gTGlzdE9mRGl2aXNpb25zICsgJyA8b3B0aW9uICcgKyBzZWxlY3RlZCArICcgdmFsdWU9XCInICsgZGF0YVtpXVtcImRpdmlzaW9ubmFtZVwiXSArJ1wiPicrZGF0YVtpXVtcImRpdmlzaW9ubmFtZVwiXSsnPC9vcHRpb24+XFxuJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID1cIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpL2Rpdicse3RhYmxlOiBcImV2ZW50dHlwZVwifSxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXN0T2ZFdmVudFR5cGVzPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPGRhdGEubGVuZ3RoLTE7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRpZD09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RPZkV2ZW50VHlwZXMgPSBMaXN0T2ZFdmVudFR5cGVzICsgJyA8b3B0aW9uICcrICcgdmFsdWU9XCInICsgZGF0YVtpXVtcImV2ZW50dHlwZW5hbWVcIl0gKyAnXCI+JyArIGRhdGFbaV1bXCJldmVudHR5cGVuYW1lXCJdICsgJzwvb3B0aW9uPlxcbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bXCJldmVudHR5cGVuYW1lXCJdID09IGV0bmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdE9mRXZlbnRUeXBlcyA9IExpc3RPZkV2ZW50VHlwZXMgKyAnIDxvcHRpb24gJyArIHNlbGVjdGVkICsgJyB2YWx1ZT1cIicgKyBkYXRhW2ldW1wiZXZlbnR0eXBlbmFtZVwiXSArICdcIj4nICsgZGF0YVtpXVtcImV2ZW50dHlwZW5hbWVcIl0gKyAnPC9vcHRpb24+XFxuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpL2RpdicsIHt0YWJsZTpcImV2ZW50cyBpbm5lciBqb2luIGV2ZW50dHlwZSBvbiBldmVudHMuZXZlbnR0eXBlaWQ9ZXZlbnR0eXBlLmV2ZW50dHlwZWlkIGlubmVyIGpvaW4gZGl2aXNpb24gb24gZXZlbnRzLmRpdmlzaW9uaWQ9ZGl2aXNpb24uZGl2aXNpb25pZCB3aGVyZSBldmVudHMuZGl2aXNpb25pZCA9ICdcIiArIGRpdmlzaW9uaWQrXCInXCJ9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxkYXRhLmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldW1wiZXZlbnRpZFwiXSA9PSBldmVudGlkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdERpdi5jbGFzc05hbWUgPSBcIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0RGl2LmlubmVySFRNTCA9IGA8Zm9ybSBhY3Rpb249XCJcIiBpZD1cImZvcm0xXCI+PGRpdj48cD48Yj7QmtC+0LQg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjzo8L2I+PGJyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJldmVudGlkXCIgbmFtZT1cImV2ZW50aWRcIiAke2Rpc2FibGVkfSB2YWx1ZT0nJHtkYXRhW2ldWydldmVudGlkJ119Jz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJldmVudGlkXCIgdmFsdWU9JyR7ZGF0YVtpXVsnZXZlbnRpZCddfSc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0J3QsNC30LLQsNC90LjQtTo8L2I+PGJyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWUgPSBcImV2ZW50bmFtZVwiIHZhbHVlPScke2RhdGFbaV1bJ2V2ZW50bmFtZSddfSc+XHJcbiAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgIDxwPjxiPtCc0LXRgdGC0L4g0L/RgNC+0LLQtdC00LXQvdC40Y86PC9iPjxicj5cclxuICAgICAgICA8dGV4dGFyZWEgaWQgPSBcImV2ZW50cGxhY2VcIiBuYW1lPVwiZXZlbnRwbGFjZVwiID4ke2RhdGFbaV1bJ2V2ZW50cGxhY2UnXX08L3RleHRhcmVhPlxyXG4gICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7QlNCw0YLQsCDQuCDQstGA0LXQvNGPINC/0YDQvtCy0LXQtNC10L3QuNGPOjwvYj48YnI+XHJcbiAgICAgICAgPGlucHV0IGlkID0gXCJldmVudGRhdGVcIiBuYW1lPVwiZXZlbnRkYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0nJHtEYXRlTm9ybWFsaXplKGRhdGFbaV1bJ2V2ZW50ZGF0ZSddKX0nPlxyXG4gICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7Qn9GA0LXQv9C+0LTQsNCy0LDRgtC10LvRjDo8L2I+PGJyPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBpZCA9IFwidGVhY2hlclwiIG5hbWU9XCJ0ZWFjaGVyXCI+JHtkYXRhW2ldWyd0ZWFjaGVyJ119PC90ZXh0YXJlYT5cclxuICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgPHA+PGI+0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC60L7Quy3QstC+INGD0YfQsNGB0YLQvdC40LrQvtCyOjwvYj48YnI+XHJcbiAgICAgICAgPGlucHV0IGlkID0gXCJ1c2VybWF4XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm1heFwiIHZhbHVlPScke2RhdGFbaV1bJ3VzZXJtYXgnXX0nPlxyXG4gICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7Qn9GA0L7Rh9Cw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y86PC9iPjxicj5cclxuICAgICAgICA8dGV4dGFyZWEgaWQgPSBcImFkZGluZm9cIiBuYW1lPVwiYWRkaW5mb1wiID4ke2RhdGFbaV1bJ2FkZGluZm8nXX08L3RleHRhcmVhPlxyXG4gICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICA8cD48Yj7Qn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTo8L2I+PGJyPlxyXG4gICAgICAgIDxzZWxlY3QgZGlzYWJsZWQgaWQgPSBcImRpdmlzaW9ubmFtZVwiIG5hbWU9XCJkaXZpc2lvbm5hbWVcIj5cclxuICAgICAgICAgIFxyXG4ke0xpc3RPZkRpdmlzaW9uc30gICAgICAgXHJcbiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkaXZpc2lvbm5hbWVcIiB2YWx1ZT0nJHtkYXRhW2ldWydkaXZpc2lvbm5hbWUnXX0nPiBcclxuICA8L3NlbGVjdD48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgIDxwPjxiPtCi0LjQvyDQvNC10YDQvtC/0YDQuNGP0YLQuNGPOjwvYj48YnI+XHJcbiAgICAgICAgPHNlbGVjdCBpZCA9IFwiZXZlbnR0eXBlbmFtZVwiIG5hbWU9XCJldmVudHR5cGVuYW1lXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+0JLRi9Cx0LXRgNC40YLQtSDRgtC40L8g0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjzwvb3B0aW9uPlxyXG4gICAgICAgICAgICBcclxuICAke0xpc3RPZkV2ZW50VHlwZXN9ICAgICAgPC9zZWxlY3Q+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+PHNlY3Rpb24gY2xhc3M9XCJsaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3NhdmUucG5nXCIgIHdpZHRoPVwiOTJcIiBoZWlnaHQ9XCI4MFwiIGFsdD1cItCh0L7RhdGA0LDQvdC40YLRjFwiIGlkPVwic2F2ZVwiIG5hbWU9XCJzYXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kZWxldGUucG5nXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjg2XCIgYWx0PVwi0KPQtNCw0LvQuNGC0YxcIiBpZD1cImRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZXhpdC5wbmdcIiB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiODZcIiBhbHQ9XCLQo9C00LDQu9C40YLRjFwiIGlkPVwiZXhpdFwiPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNldmVudHNcIikuYXBwZW5kKEVkaXREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbihcImN1dCBjb3B5IHBhc3RlXCIsXCIjdXNlcm1heFwiLGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjdXNlcm1heCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS52YWwoKS5yZXBsYWNlICgvXFxELywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2F2ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFNhdmVPckVkaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlZD09J2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlT3JFZGl0ID0gXCJlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVPckVkaXQgPSBcInNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpLycrU2F2ZU9yRWRpdCwkKFwiI2Zvcm0xXCIpLnNlcmlhbGl6ZSgpLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVsnZXJyb3InXT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUg0LLQstC10LTQtdC90L3Ri9C1INC00LDQvdC90YvQtScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUv0KHQvtGF0YDQsNC90LXQvdC40LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QviDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4aXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZXZlbnRzXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5wb3N0SlNPTignaHR0cDovL0FwaS9kZWxldGUnLCQoXCIjZm9ybTFcIikuc2VyaWFsaXplKCksZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWydlcnJvciddPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQstCy0LXQtNC10L3QvdGL0LUg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V2ZW50c1wiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KPQtNCw0LvQtdC90LjQtSDQv9GA0L7QuNC30LLQtdC00LXQvdC+INGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJChcIiNldmVudHNcIikuZW1wdHkoKTtcclxuXHJcbn1cclxubGV0IGV2ZW50MSA9IGZ1bmN0aW9uKGRpdil7XHJcblxyXG5cclxuICAgICAgICBkaXZpc2lvbmlkPWRpdjtcclxuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpL2RpdicsIHt0YWJsZTpcImV2ZW50cyBpbm5lciBqb2luIGV2ZW50dHlwZSBvbiBldmVudHMuZXZlbnR0eXBlaWQ9ZXZlbnR0eXBlLmV2ZW50dHlwZWlkIGlubmVyIGpvaW4gZGl2aXNpb24gb24gZXZlbnRzLmRpdmlzaW9uaWQ9ZGl2aXNpb24uZGl2aXNpb25pZCB3aGVyZSBldmVudHMuZGl2aXNpb25pZCA9ICdcIiArIGRpdmlzaW9uaWQrXCInXCJ9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNldmVudHNcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGRhdGFbaV1bXCJldmVudG5hbWVcIl0rXCIgPGJyIC8+INCc0LXRgdGC0L4g0L/RgNC+0LLQtdC00LXQvdC40Y86XCIrZGF0YVtpXVtcImV2ZW50cGxhY2VcIl0rXCI7INCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPOiBcIitkYXRhW2ldW1wiZXZlbnRkYXRlXCJdK1wiOyDQn9GA0LXQv9C+0LTQsNCy0LDRgtC10LvRjDogXCIrZGF0YVtpXVtcInRlYWNoZXJcIl0rXCI7INCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQutC+0Lst0LLQviDRg9GH0LDRgdGC0L3QuNC60L7QsjogXCIrZGF0YVtpXVtcInVzZXJtYXhcIl0rXCI7INCi0LjQvyDQvNC10YDQvtC/0YDQuNGP0YLQuNGPOiBcIitkYXRhW2ldW1wiZXZlbnR0eXBlbmFtZVwiXStcIjsg0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LU6IFwiK2RhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0rXCI7INCj0YfQtdCx0L3Ri9C5INCz0L7QtDogXCIrZGF0YVtpXVtcImV2ZW50eWVhclwiXStcIjsg0KPRh9C10LHQvdGL0Lkg0YHQtdC80LXRgdGC0YA6IFwiK2RhdGFbaV1bXCJldmVudHNlbWVzdHJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pZCA9IGRhdGFbaV1bXCJldmVudGlkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5vbmNsaWNrID1mdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQoZGl2LmlkLGRhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl0sZGF0YVtpXVtcImV2ZW50dHlwZW5hbWVcIl0sJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50LmlubmVySFRNTCA9ICc8aW1nIHNyYyA9IFwiaW1hZ2VzL0FkZE5ldy5wbmdcIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiNTBcIj4nO1xyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQuaWQgPSBcImFkZEV2ZW50XCI7XHJcbiAgICAgICAgICAgICAgICBhZGRFdmVudC5jbGFzc05hbWUgPSBcImV2ZW50XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQub25jbGljayA9ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDIoZGl2aXNpb25pZCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgJChcIiNldmVudHNcIikuYXBwZW5kKGFkZEV2ZW50KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG59XHJcbmxldCBjbG9zZUlGcmFtZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnaWZyYW1lJykucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IFwiIFwiICsgZG9jdW1lbnQuY29va2llO1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSBcIiBcIiArIG5hbWUgKyBcIj1cIjtcclxuICAgICAgICBsZXQgc2V0U3RyID0gbnVsbDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBsZXQgZW5kID0gMDtcclxuICAgICAgICBpZiAoY29va2llLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGNvb2tpZS5pbmRleE9mKHNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBzZWFyY2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb29raWUuaW5kZXhPZihcIjtcIiwgb2Zmc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gY29va2llLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHIgPSB1bmVzY2FwZShjb29raWUuc3Vic3RyaW5nKG9mZnNldCwgZW5kKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybihzZXRTdHIpO1xyXG59XHJcbmZ1bmN0aW9uIG9uc3RhcnQoKXtcclxuICAgICAgICAkKFwiI2RpdnNcIikuZW1wdHkoKTtcclxuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpL2RpdicsIHt0YWJsZTpcImRpdmlzaW9uXCJ9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGRhdGFbaV1bXCJkaXZpc2lvbm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGl2c1wiKS5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlkID0gZGF0YVtpXVtcImRpdmlzaW9uaWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzcyA9IFwibWFpblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYub25jbGljayA9ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50MShkaXYuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYWRkRGl2LmlubmVySFRNTCA9ICc8aW1nIHNyYyA9IFwiaW1hZ2VzL0FkZE5ldy5wbmdcIiBoZWlnaHQ9XCI1MFwiIHdpZHRoPVwiNTBcIj4nO1xyXG4gICAgICAgICAgICAgICAgJChcIiNkaXZzXCIpLmFwcGVuZChhZGREaXYpO1xyXG4gICAgICAgICAgICAgICAgYWRkRGl2LmlkID0gXCJhZGREaXZcIjtcclxuICAgICAgICAgICAgICAgIGFkZERpdi5jbGFzcyA9IFwiQWRkXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGFkZERpdi5vbmNsaWNrID1mdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZD09ZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpdi5pbm5lckhUTUwgPSAnPGZvcm0gYWN0aW9uID1cIlwiIGlkID0gXCJOZXdEaXZcIj48cD7QktCy0LXQtNC40YLQtSDQutC+0LQg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y86IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXZpc2lvbmlkXCIgdmFsdWU9XCJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvcD7QktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGl2aXNpb25uYW1lXCI+PC9mb3JtPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cItCU0L7QsdCw0LLQuNGC0YxcIiBpZD1cImFkZERpdmJ0blwiID4gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi0J7RgtC80LXQvdC40YLRjFwiIGlkID1cImNsb3NlQWRkRGl2XCI+J1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZGREaXZidG5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQucG9zdEpTT04oJ2h0dHA6Ly9BcGkvYWRkZGl2JywgJChcIiNOZXdEaXZcIikuc2VyaWFsaXplKCksZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbJ2Vycm9yJ109PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUg0LLQstC10LTQtdC90L3Ri9C1INC00LDQvdC90YvQtScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjbG9zZUFkZERpdlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RpdnNcIikuYXBwZW5kKGFkZERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkLnBvc3RKU09OKCdodHRwOi8vQXBpLycsIHtsb2dpbjpnZXRDb29raWUoJ2xvZ2luJykscGFzc3dvcmQ6Z2V0Q29va2llKCdwYXNzd29yZCcpfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmF1dGggPT0gJzEnKXtjb25zb2xlLmxvZygn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9GA0L7RiNC70LAg0YPRgdC/0LXRiNC90L4hJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9uc3RhcnQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=