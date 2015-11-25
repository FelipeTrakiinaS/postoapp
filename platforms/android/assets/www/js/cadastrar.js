function cadastro() {

	var postTo = 'http://app.alexjonas.com.br/postoapp/cadastrar.php';

    var nomePosto = $('#NomePosto').val() ;
    var Latitude = $('#Latitude').val();
    var Longitude = $('#Longitude').val();
    var Valor = $('#Valor').val();
    var Cidade = $('#Cidade').val();
    var Combustivel = $('#Combustivel').val();
    var idUsuario = window.localStorage.getItem('id_usuario');


    console.log(nomePosto);
    console.log(Latitude);
    console.log(Longitude);
    console.log(Valor);
    console.log(Cidade);
    console.log(Combustivel);



	$.post( postTo,({ acao : 'cadastrar',
		             nomePosto : nomePosto, 
		             Latitude : Latitude,
		             Longitude : Longitude,
		             Valor : Valor,
		             Cidade : Cidade,
		             Combustivel : Combustivel,
		             idUsuario : idUsuario

		            }), function( data ) {
		console.log(data);

				$('#limpar').click();




	});


}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}