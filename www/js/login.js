function cadastro() {

	var postTo = 'http://app.alexjonas.com.br/postoapp/login.php';

    var nome = $('#cadastrarNome').val() ;
    var senha = $('#cadastrarSenha').val();

    console.log(nome);



	$.post( postTo,({ acao : 'cadastrar',
		              nome : nome, 
		             senha : senha

		            }), function( data ) {

	});

}


function logar () {
	
	var postTo = 'http://app.alexjonas.com.br/postoapp/login.php';

    var nome = $('#logarNome').val() ;
    var senha = $('#logarSenha').val();

    console.log(nome);

	$.post( postTo,({ acao : 'logar',
		              nome : nome, 
		             senha : senha

		            }), 
		function( data ) {

			alert(data);

			var ver =  JSON.parse(data);

			// Retorna um JSON indicando a variavel = OK
			if (ver['res'] === 'ok') {

				// Retorna um ALERT de logado
				alert('logado');

				//salvar no cache
				//direciona para pagina
				window.location.replace("menu.html");

				window.localStorage.setItem('id_usuario', ver['cod'] ) ;
				console.log(window.localStorage.getItem('id_usuario'));

			}else{
				console.log('login ou senha errado');
			}
		}
	);
}