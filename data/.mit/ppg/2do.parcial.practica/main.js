function borrarDatos(){
	//alert("borrar");
	//document.forma_datos.output_password.value=";;;";

}

function generarCuenta(){
	email = getFirstNameFirstChar();
	alert(email);
	last=	getLastName();
	alert(last);
	mat = getMaternalName();
	alert(mat);
	datte = getDate();

	alert(datte);


}

function getFirstNameFirstChar(){
	firstName = document.forma_datos.input_persona_nombre.value;

	if ( firstName == "" ){
		alert("El nombre es obligatorio.");
		document.forma_datos.input_persona_nombre.style="background-color: red;";
		document.forma_datos.input_persona_nombre.style="background: red;";
		return '';

	}

	charr = firstName.split('');

		if ( charr[0] == ' ' ) {

			charr[0] = '_';

		}
		else if ( charr[0] == 'ñ' ) {
			charr[0] = 'n';
		}

	charr[0] = removeTilde(charr[0]);

	document.forma_datos.input_persona_nombre.style="background: white;";
	return charr[0];

}

function getLastName(){
	lastName = document.forma_datos.input_apellido_paterno.value;

	if ( lastName == "" ){
		alert("El apellido es obligatorio.");
		document.forma_datos.input_apellido_paterno.style="background-color: red;";
		document.forma_datos.input_apellido_paterno.style="background: red;";
		return '';

	}

	document.forma_datos.input_apellido_paterno.style="background: white;";
	charr = lastName.toString().toLowerCase().split('');
	for ( i = 0; i < lastName.length; i++){
		charr[i] = removeTilde(charr[i]);
		if ( charr[i] == ' ' ) {

			charr[i] = '_';

		}
		else if ( charr[i] == 'ñ' ) {
			charr[i] = 'n';
		}


	}

	return charr.join('');

}

function getMaternalName(){
	maternalName = document.forma_datos.input_apellido_materno.value;

	if ( maternalName == "" ){
		alert("El apellido materno es obligatorio.");
		document.forma_datos.input_apellido_materno.style="background-color: red;";
		document.forma_datos.input_apellido_materno.style="background: red;";
		return '';

	}

	document.forma_datos.input_apellido_materno.style="background: white;";
	charr = maternalName.toString().toLowerCase().split('');

		charr[0] = removeTilde(charr[0]);

		if ( charr[0] == ' ' ) {

			charr[0] = '_';

		}
		else if ( charr[0] == 'ñ' ) {
			charr[0] = 'n';
		}

	return charr[0];

}

function removeTilde ( character) {
	character = character.toLowerCase();
	switch (character){
		case 'ñ':
			return 'n';
			break;
		case 'á':
			return 'a';
		case 'é':
			return 'e';
		case 'í':
			return 'i';
		case 'ó':
			return 'o';
		case 'ú':
			return 'u';
		default:
			return character;
	}
	

}

function getDate(){
	dateValue = document.forma_datos.input_nacio.value;
	return dateValue;

}
