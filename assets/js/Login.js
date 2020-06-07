import $ from 'jquery';
export default function login() {

            console.log('Отправка формы...');
            $.postJSON = function(url, data, func)
            {
                $.post(url, data, func, 'json');
            }

            var $data = $("#ajax_form").serialize();
            $.postJSON('http://Api/', $("#ajax_form").serialize(), function (data) {

                if (data.auth == '1'){console.log('Регистрация прошла успешно!'); document.location.href = "/";} else console.log('Регистрация не удалась.')
            });

            return false; // или return false;

};