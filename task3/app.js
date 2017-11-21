$(document).ready(function(){
    $('#root').append('<ul></ul>');
    var element = $('<li></li>');
    $('#root ul').append(element);
    $('#root ul li').append('<span></span>');
    $('#root ul li span').text('Сделать задание #3 по web-программированию');
    $('#root ul li').append('<button class="button_for_delete">Удалить</button>');
    $('.button_for_delete').click(function(ev){$(this).parent().remove()});
    $('#root').append('<input id="add_task_input"><button id="add_task">Добавить</button>');
    $('#add_task').click(function(){
        var element = $('<li></li>');
        $('#root ul').append(element);
        $('#root ul li').last().append('<span></span>');
        $('#root ul li span').last().text($('#add_task_input').val());
        $('#root ul li').last().append('<button class="button_for_delete">Удалить</button>');
        $('.button_for_delete').click(function(ev){$(this).parent().remove()});
    });
});