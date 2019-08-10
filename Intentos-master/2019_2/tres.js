function mostrar()
{
	var localidad;
	var localidadMinima;
	var zona;
	var zonaSur = 0;
	var temperatura;
	var temperaturaM40 = 0;
	var temperaturaCero = 0;
	var temperaturasPares = 0;
	var habitantes;
	var menosHabitantes = 0;
	var promedioHabitantes = 0;
	var seguir = "s";
	var flag = 0;



	do
	{
		localidad = prompt(" Ingrese localidad");
		zona = prompt("Ingrese si es de zona norte - sur - este - oeste ")
		
		habitantes = parseInt(prompt("ingrese cantidad de habitantes"));
		while(isNaN(habitantes) || habitantes < 1 || habitantes > 40)
		{
			alert("Ese no es un numero valido");
			habitantes = parseInt(prompt("Reingrese cantidad de habitantes"));
		}
		
		temperatura = parseInt(prompt("Ingrese temperatura"));
		while(isNaN(temperatura) || temperatura < -50 || temperatura > 50)
		{
			alert("Ese no es una temperatura valida");
			temperatura = parseInt(prompt("Reingrese temperatura"));
		}

		if(zona =="sur")
		{
			zonaSur++;
		}

		
		if(temperatura % 2 ==0)
		{
			temperaturasPares++;
		}
		
		if(temperatura>40)
		{
			temperaturaM40++;
		}
		
		if(temperatura<temperaturaCero || flag ==0)
		{
			temperaturaCero = temperatura;
			localidadMinima = localidad;
		}
		
		if(localidad<localidad || flag == 0)
		
		{
			menosHabitantes = localidad;
			flag = 1;
		}

		promedioHabitantes = promedioHabitantes + habitantes;
		
		seguir = prompt("Quiere seguir?");



	}while(seguir == "s");



	promedioHabitantes = promedioHabitantes / 2;
	
	document.write("La cantidad de temperaturas pares " + temperaturasPares + "<br>");
	document.write("El nombre de la localidad con menos habitantes " + menosHabitantes + "<br>");
	document.write("La cantidad localidades que superan los 40 grados de temperatura " + temperaturaM40 + "<br>");
	document.write("El promedio de habitantes entre las localidades ingresadas " + promedioHabitantes + "<br>");
	document.write("La temperatura mínima ingresada es " + temperaturaCero + " y nombre de la localidad que registro esa temperatura " + localidadMinima + "<br>");
	document.write("la cantidad de lugares con la zona mas calurosa " + zonaSur + "<br>");
	
	

	


	alert("tres");
}
