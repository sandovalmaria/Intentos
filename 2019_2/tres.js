function mostrar()
{
	var localidad;
	var localidadMinima;
	var temperatura;
	var temperaturaMinima = 0;
	var temperaturaMaxima = 0;
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
		temperatura = parseInt(prompt("Ingrese temperatura"));
		habitantes = parseInt(prompt("ingrese cantidad de habitantes"));
		
		while(habitantes <1 && habitantes > 40)
		{
			alert = prompt("Ese no es un numero valido");
			habitantes = parseInt(prompt("Reingrese cantidad de habitantes"));
		}
		
		while(temperatura < 0 && temperatura > 50)
		{
			alert = prompt("Ese no es na temperatura valida");
			temperatura = parseInt(prompt("Reingrese temperatura"));
		}

		
		if(temperatura % 2 ==0)
		{
			temperaturasPares++;
		}
		
		if(temperatura>40)
		{
			temperatura++;
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

	
	alert("menor temperatura" + temperaturaCero);
	alert("mayor temperatura" + temperaturaMaxima);
	alert("Menor cantidad de habitantes minima" + menosHabitantes);
	alert ("Temperaturas pares" + temperaturasPares);

	


	alert("tres");
}
