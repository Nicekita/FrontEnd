/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';



$(document).ready(function() {
    $("#btn").click(function(){
        console.log('Отправка формы...');
        $.postJSON = function(url, data, func)
        {
            $.post(url, data, func, 'json');
        }

        var $data = $("#ajax_form").serialize();
        $.postJSON('http://Api/', $("#ajax_form").serialize(), function (data) {
            
            if (data.auth == '1'){console.log('Регистрация прошла успешно!')} else console.log('Регистрация не удалась.')
        });

        return false; // или return false;
    });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
