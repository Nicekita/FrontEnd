/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';


import $ from 'jquery';
let divisionid =0;

let ValueForDivision="";
let DateNormalize = function (date){
return date.substr(0,10)
}
$.postJSON = function(url, data, func)
{
        $.post(url, data, func, 'json');
}
function ListOf(eventid,divname){
        $.postJSON('http://Api/div',{table: "division"},function (data) {
                let ListOfDivisions="";
                let selected=""
                for (let i=0;i<data.length-1;i++){

                        if (data[i]["divisionname"]==divname){
                                selected ="selected"
                                ValueForDivision="data[i][\"divisionname\"]";
                        }
                        ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] +'">'+data[i]["divisionname"]+'</option>\n';

                        selected =""
                }
                console.log(ListOfDivisions);
                return ListOfDivisions;
        })
}
function ListOf1(eventid,etname){
        $.postJSON('http://Api/div',{table: "eventtype"},function (data) {
                let ListOfEventTypes="";
                let selected=""
                for (let i=0;i<data.length-1;i++){
                        if (eventid== false)
                        {
                                ListOfEventTypes = ListOfEventTypes + ' <option '+ ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
                                selected = ""
                        } else {
                                if (data[i]["eventtypename"] == etname) {
                                        selected = "selected";


                                }
                                ListOfEventTypes = ListOfEventTypes + ' <option ' + selected + ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
                                selected = ""
                        }
                }
                return ListOfEventTypes;


        })
}
let event2 = function(division){
        let ListOfDivisions="";
        let ListOfEventTypes="";
        $.postJSON('http://Api/div',{table: "division"},function (data) {
                ListOfDivisions="";
                let divisionname = "";
                let selected=""
                for (let i=0;i<data.length-1;i++){

                        if (data[i]["divisionid"]==division){
                                selected ="selected"
                                divisionname = data[i]["divisionname"];

                        }
                        ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] +'">'+data[i]["divisionname"]+'</option>\n';

                        selected =""
                }

                $.postJSON('http://Api/div',{table: "eventtype"},function (data) {
                        ListOfEventTypes="";
                        let selected=""
                        for (let i=0;i<data.length-1;i++){

                                ListOfEventTypes = ListOfEventTypes + ' <option '+ ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';


                        }
                        $("#events").empty();
                        let EditDiv = document.createElement('div');
                        EditDiv.className = "Edit"
                        EditDiv.innerHTML = `<form action="" id="form1"><div><p><b>Код мероприятия:</b><br>
        <input type="text" id = "eventid" name="eventid" value=''>
            </div>
            <div>
    <p><b>Название:</b><br>
        <input type="text" name = "eventname" value=''>
    </p>
                </div>
            <div>
    <p><b>Место проведения:</b><br>
        <textarea id = "eventplace" name="eventplace" ></textarea>
    </p>
                </div>
            <div>
    <p><b>Дата и время проведения:</b><br>
        <input id = "eventdate" name="eventdate" type="date" value=''>
    </p>
                </div>
            <div>
    <p><b>Преподаватель:</b><br>
        <textarea id = "teacher" name="teacher"></textarea>
    </p>
                </div>
            <div>
    <p><b>Максимальное кол-во участников:</b><br>
        <input id = "usermax" type="text" name="usermax" value=''>
    </p>
                </div>
            <div>
    <p><b>Прочая информация:</b><br>
        <textarea id = "addinfo" name="addinfo" ></textarea>
    </p>
                </div>
            <div>
    <p><b>Подразделение:</b><br>
        <select id = "divisionname" disabled name="divisionname">
          
${ListOfDivisions}       
 <input type="hidden" name="divisionname" value='${divisionname}'> 
  </select></p>
                </div>
            <div>
    <p><b>Тип мероприятия:</b><br>
        <select id = "eventtypename" name="eventtypename">
            <option selected disabled>Выберите тип мероприятия</option>
            
  ${ListOfEventTypes}      </select></p>
                </div>
                </form><section class="light">

                <img src="images/save.png"  width="92" height="80" alt="Сохранить" id="save" name="save">
                <img src="images/exit.png" width="90" height="86" alt="Удалить" id="exit">



        </section>`;
                        $(document).on("cut copy paste","#usermax",function(e) {
                                e.preventDefault();
                        });
                        $("#events").append(EditDiv);
                        $('#usermax').on('keyup', function(){
                                $(this).val($(this).val().replace (/\D/, ''));
                        });
                        $("#save").click(function () {
                                let SaveOrEdit;



                                SaveOrEdit = "save"

                                $.postJSON('http://Api/'+SaveOrEdit,$("#form1").serialize(),function (data) {
                                        if (data['error']==true){
                                                alert('Произошла ошибка. Проверьте введенные данные');
                                        }
                                        else{
                                                alert('Сохранение произведено успешно');
                                                $("#events").empty();
                                        }
                                })
                        });
                        $("#exit").click(function () {
                                $("#events").empty();
                        });
                        $("#delete").click(function () {
                                $.postJSON('http://Api/delete',$("#form1").serialize(),function (data) {
                                        if (data['error']==true){
                                                alert('Произошла ошибка. Проверьте введенные данные');
                                        }
                                        else{
                                                $("#events").empty();

                                                alert('Удаление произведено успешно');
                                        }


                                })
                        });


                })
        })


}
let event = function(eventid,divname,etname,disabled){
        let ListOfDivisions="";
        let ListOfEventTypes="";
        $.postJSON('http://Api/div',{table: "division"},function (data) {
                ListOfDivisions="";
                let selected=""
                for (let i=0;i<data.length-1;i++){

                        if (data[i]["divisionname"]==divname){
                                selected ="selected"
                                ValueForDivision="data[i][\"divisionname\"]";
                        }
                        ListOfDivisions = ListOfDivisions + ' <option ' + selected + ' value="' + data[i]["divisionname"] +'">'+data[i]["divisionname"]+'</option>\n';

                        selected =""
                }
                $.postJSON('http://Api/div',{table: "eventtype"},function (data) {
                        ListOfEventTypes="";
                        let selected=""
                        for (let i=0;i<data.length-1;i++){
                                if (eventid== false)
                                {
                                        ListOfEventTypes = ListOfEventTypes + ' <option '+ ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
                                        selected = ""
                                } else {
                                        if (data[i]["eventtypename"] == etname) {
                                                selected = "selected";


                                        }
                                        ListOfEventTypes = ListOfEventTypes + ' <option ' + selected + ' value="' + data[i]["eventtypename"] + '">' + data[i]["eventtypename"] + '</option>\n';
                                        selected = ""
                                }
                        }
                        $.postJSON('http://Api/div', {table:"events inner join eventtype on events.eventtypeid=eventtype.eventtypeid inner join division on events.divisionid=division.divisionid where events.divisionid = '" + divisionid+"'"}, function (data) {
                                for (let i=0; i<data.length-1; i++) {
                                        if (data[i]["eventid"] == eventid) {


                                                let EditDiv = document.createElement('div');
                                                EditDiv.className = "Edit"
                                                EditDiv.innerHTML = `<form action="" id="form1"><div><p><b>Код мероприятия:</b><br>
        <input type="text" id = "eventid" name="eventid" ${disabled} value='${data[i]['eventid']}'>
        <input type="hidden" name="eventid" value='${data[i]['eventid']}'>
            </div>
            <div>
    <p><b>Название:</b><br>
        <input type="text" name = "eventname" value='${data[i]['eventname']}'>
    </p>
                </div>
            <div>
    <p><b>Место проведения:</b><br>
        <textarea id = "eventplace" name="eventplace" >${data[i]['eventplace']}</textarea>
    </p>
                </div>
            <div>
    <p><b>Дата и время проведения:</b><br>
        <input id = "eventdate" name="eventdate" type="date" value='${DateNormalize(data[i]['eventdate'])}'>
    </p>
                </div>
            <div>
    <p><b>Преподаватель:</b><br>
        <textarea id = "teacher" name="teacher">${data[i]['teacher']}</textarea>
    </p>
                </div>
            <div>
    <p><b>Максимальное кол-во участников:</b><br>
        <input id = "usermax" type="text" name="usermax" value='${data[i]['usermax']}'>
    </p>
                </div>
            <div>
    <p><b>Прочая информация:</b><br>
        <textarea id = "addinfo" name="addinfo" >${data[i]['addinfo']}</textarea>
    </p>
                </div>
            <div>
    <p><b>Подразделение:</b><br>
        <select disabled id = "divisionname" name="divisionname">
          
${ListOfDivisions}       
 <input type="hidden" name="divisionname" value='${data[i]['divisionname']}'> 
  </select></p>
                </div>
            <div>
    <p><b>Тип мероприятия:</b><br>
        <select id = "eventtypename" name="eventtypename">
            <option disabled>Выберите тип мероприятия</option>
            
  ${ListOfEventTypes}      </select></p>
                </div>
                </form><section class="light">

                <img src="images/save.png"  width="92" height="80" alt="Сохранить" id="save" name="save">
                <img src="images/delete.png" width="90" height="86" alt="Удалить" id="delete">
                <img src="images/exit.png" width="90" height="86" alt="Удалить" id="exit">



        </section>`;

                                                $("#events").append(EditDiv);
                                                $(document).on("cut copy paste","#usermax",function(e) {
                                                        e.preventDefault();
                                                });
                                                $('#usermax').on('keyup', function(){
                                                        $(this).val($(this).val().replace (/\D/, ''));
                                                });
                                                $("#save").click(function () {
                                                        let SaveOrEdit;

                                                        if (disabled=='disabled')
                                                        {
                                                                SaveOrEdit = "edit"
                                                        }
                                                        else
                                                        {
                                                                SaveOrEdit = "save"
                                                        }
                                                        $.postJSON('http://Api/'+SaveOrEdit,$("#form1").serialize(),function (data) {
                                                                if (data['error']==true){
                                                                        alert('Произошла ошибка. Проверьте введенные данные');
                                                                }
                                                                else{
                                                                        alert('Редактирование/Сохранение произведено успешно');
                                                                }
                                                        })
                                                });
                                                $("#exit").click(function () {
                                                        $("#events").empty();
                                                });
                                                $("#delete").click(function () {
                                                        $.postJSON('http://Api/delete',$("#form1").serialize(),function (data) {
                                                                if (data['error']==true){
                                                                        alert('Произошла ошибка. Проверьте введенные данные');
                                                                }
                                                                else{
                                                                        $("#events").empty();
                                                                        alert('Удаление произведено успешно');
                                                                }


                                                        })
                                                });
                                        }
                                }
                        });


                })

        })


        $("#events").empty();

}
let event1 = function(div){


        divisionid=div;
        $.postJSON('http://Api/div', {table:"events inner join eventtype on events.eventtypeid=eventtype.eventtypeid inner join division on events.divisionid=division.divisionid where events.divisionid = '" + divisionid+"'"}, function (data) {
                $("#events").empty();

                for (let i=0; i<data.length-1; i++) {
                        let div = document.createElement('div');
                        div.innerHTML = data[i]["eventname"]+" <br /> Место проведения:"+data[i]["eventplace"]+"; Дата проведения: "+data[i]["eventdate"]+"; Преподаватель: "+data[i]["teacher"]+"; Максимальное кол-во участников: "+data[i]["usermax"]+"; Тип мероприятия: "+data[i]["eventtypename"]+"; Подразделение: "+data[i]["divisionname"]+"; Учебный год: "+data[i]["eventyear"]+"; Учебный семестр: "+data[i]["eventsemestr"];
                        div.id = data[i]["eventid"];
                        div.className = "event"
                        div.onclick =function () {
                                event(div.id,data[i]["divisionname"],data[i]["eventtypename"],'disabled');
                        };

                        events.append(div);
                }
                let addEvent = document.createElement('div');
                addEvent.innerHTML = '<img src = "images/AddNew.png" height="50" width="50">';
                addEvent.id = "addEvent";
                addEvent.className = "event";

                addEvent.onclick =function () {
                        event2(divisionid);
                };
                $("#events").append(addEvent);


        });
}
let closeIFrame = function(){
        $('iframe').remove();
}

function getCookie(name) {
        let cookie = " " + document.cookie;
        let search = " " + name + "=";
        let setStr = null;
        let offset = 0;
        let end = 0;
        if (cookie.length > 0) {
                offset = cookie.indexOf(search);
                if (offset != -1) {
                        offset += search.length;
                        end = cookie.indexOf(";", offset)
                        if (end == -1) {
                                end = cookie.length;
                        }
                        setStr = unescape(cookie.substring(offset, end));
                }
        }
        return(setStr);
}
function onstart(){
        $("#divs").empty();
        $.postJSON('http://Api/div', {table:"division"}, function (data) {


                for (let i=0; i<data.length-1; i++) {
                        let div = document.createElement('div');
                        div.innerHTML = data[i]["divisionname"];
                        $("#divs").append(div);
                        div.id = data[i]["divisionid"];
                        div.class = "main";
                        div.onclick =function () {
                                event1(div.id);
                        };
                }
                let addDiv = document.createElement('div');
                addDiv.innerHTML = '<img src = "images/AddNew.png" height="50" width="50">';
                $("#divs").append(addDiv);
                addDiv.id = "addDiv";
                addDiv.class = "Add";
                let added = false;
                addDiv.onclick =function () {
                        if (added==false) {
                                added=true;
                                addDiv.innerHTML = '<form action ="" id = "NewDiv"><p>Введите код подразделения: <input type="text" name="divisionid" value="">' +
                                    '</p>Введите название подразделения: <input type="text" name="divisionname"></form>' +
                                    '<input type="button" value="Добавить" id="addDivbtn" > ' +
                                    '<input type="button" value="Отменить" id ="closeAddDiv">'


                                $("#addDivbtn").click(function () {

                                        $.postJSON('http://Api/adddiv', $("#NewDiv").serialize(),function (data) {
                                                if (data['error']==true){
                                                        alert('Произошла ошибка. Проверьте введенные данные');
                                                }
                                                else{
                                                        onstart();
                                                }
                                        })
                                })
                                $("#closeAddDiv").click(function () {
                                        onstart();
                                })
                                $("#divs").append(addDiv);
                        }
                };
        });
}

$(document).ready(function() {

        $.postJSON('http://Api/', {login:getCookie('login'),password:getCookie('password')}, function (data) {

               if (data.auth == '1'){console.log('Регистрация прошла успешно!');

                } else document.location.href = "/login"
        });

        onstart();







        return false;

});






console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
