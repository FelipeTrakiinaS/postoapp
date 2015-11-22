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



			if (ver['res'] === 'ok') {

				alert('logado');

				//salvar no cache
				//direciona para pagina
				// window.location.replace("C:/Users/Acer%20Aspire%20V5/Documents/GitHub/postoapp/www/index.html");
				window.location.replace("http://app.alexjonas.com.br/postoapp/cadastrar.php");

			}else{
				console.log('login ou senha errado');
			}



		}
	);


}