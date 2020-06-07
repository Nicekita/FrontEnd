


function hello(){

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
};