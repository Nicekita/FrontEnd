import $ from "jquery";

module.exports = function hello(){

    $.post('http://projectpractice/Api/public/',{ login: "user1", password: "2pm" }, function(data)
    {
        var items = [];
        $.each(data, function(key, val,json){
            items.push('<li id="' + key + '">' + val.login + '  ' + val.password + '</li>');
        });

        $('<ul/>', {
            'class': 'my-new-list',
            html: items.join('')
        }).appendTo('body');
    },'json')
};