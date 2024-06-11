$('form').on('submit', function(e){
    e.preventDefault();
})

$('form button').click(function() {
    const nomeTarefa = $('#nome_tarefa').val();
    const novoItem = $('<li style="display: none"></li>');

    $(`<p>${nomeTarefa}</p>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#nome_tarefa').val('');
})

$('ul').on('click', 'p', function() {
    $(this).toggleClass('linha');
    $(this).toggleClass('clicado');
});
