$(document).redy(function(){
    $('#root').append(<ul></ul>);
    var element = $('<li></li>');
    $('#root ul').append(element);
    $('li, #root ul').append(<span></span>);
    $('span, li, #root ul').text('������� ������� #3 �� web-����������������');
    $('li, #root ul').append(<button class="button_for_delete">�������</button>);
    $('button_for_delete, li, #root ul').click(function(ev){$(this).parent().remove()});
    $('#root').append('<input id="add_task_input"><button id="add_task">��������</button>');
    $('#add_task').click(function(){
        var element = $('<li></li>');
        $('#root ul').append(element);
        $('li, #root ul').append(<span></span>);
        $('span, li, #root ul').text('#add_task_input');
        $('li, #root ul').append(<button class="button_for_delete">�������</button>);
        $('button_for_delete, li, #root ul').click(function(ev){$(this).parent().remove()});
    });
});