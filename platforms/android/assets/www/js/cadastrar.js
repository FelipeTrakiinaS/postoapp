function cadastro() {

	var postTo = 'http://localhost/postoapp/cadastrar.php';

    var nomePosto = $('#cadastrarNomePosto').val() ;
    var Latitude = $('#cadastrarLatitude').val();
    var Longitude = $('#cadastrarLongitude').val();
    var Valor = $('#cadastrarValor').val();
    var Cidade = $('#cadastrarCidade').val();
    var Combustivel = $('#cadastrarCombustivel').val();


    console.log(nomePosto);



	$.post( postTo,({ acao : 'cadastrar',
		             nomePosto : nomePosto, 
		             Latitude : Latitude,
		             Longitude : Longitude,
		             Valor : Valor,
		             Cidade : Cidade,
		             Combustivel : Combustivel

		            }), function( data ) {

	});

}


function Cadastrar () {
	
	var postTo = 'http://localhost/postoapp/cadastrar.php';

    var nomePosto = $('#cadastroNomePosto').val() ;
    var Latitude = $('#cadastroLatitude').val();
    var Longitude = $('#cadastroLongitude').val();
    var Valor = $('#cadastroValor').val();
    var Combustivel = $('#cadastroCombustivel').val();


    console.log(nomePosto);



	$.post( postTo,({ acao : 'cadastro',
		             nomePosto : nomePosto, 
		             Latitude : Latitude,
		             Longitude : Longitude,
		             Valor : Valor,
		             Cidade : Cidade,
		             Combustivel : Combustivel

		            }), 
		function( data ) {

			alert(data);

			var ver =  JSON.parse(data);



			if (ver['res'] === 'ok') {

				alert('Cadastrado');

				//salvar no cache
				//direciona para pagina
				// window.location.replace("C:/Users/Acer%20Aspire%20V5/Documents/GitHub/postoapp/www/index.html");
				window.location.replace("http://localhost/postoapp/cadastrar.php");

			}else{
				console.log('Falha ao cadastrar');
			}



		}
	);


}