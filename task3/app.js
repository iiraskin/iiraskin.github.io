$(document).redy(function(){
    $('#root').append(<ul></ul>);
    var element = $('<li><span></span><button class="button_for_delete">�������</button></li>');
    $('span', element).text("������� ������� #3 �� web-����������������");
    $('#root ul').append(element);
    $('button_for_delete', element).click(function(ev){$(this).parent().remove()});
    $('#root').append('<input id="add_task_input"><button id="add_task">��������</button>');
    $('#add_task').click(function(){
        var element = $('<li><span></span><button class="button_for_delete">�������</button></li>');
        $('span', element).text("#add_task_input");
        $('#root ul').append(element);
        $('button_for_delete', element).click(function(ev){$(this).parent().remove()});
    });
});