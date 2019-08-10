function mostrar()
{

	var numero;
	var letra;
	var seguir;
	var contadorPares = 0;
	var contadorImpares = 0;
	var contadorCeros = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var numeroMax = 0;
	var numeroMin = 0;
	var letraMax;
	var promedio = 0;
	var flag = 0;

	do
	{
		letra = prompt("Ingrese una letra");
		numero = parseInt(prompt("Ingrese un nuumero entre -100 y 100"));
		
		while(isNaN(numero) || numero < -50 || numero > 50)
		{
			alert("Ese no es un numero valido");
			numero = parseInt(prompt("Reingrese un numero entre -100 y 100"));
		}
		
			if(numero == 0)
			{
				contadorCeros++;
			}
			else if(numero % 2 == 0)
			{
				contadorPares++;
			}
			else
			{
				contadorImpares++;
			}

		if(numero %2 == 0 && numero>0)
		{
			contadorPos = contadorPos + numero;
		}

		if(numero<=0)
		{
			contadorNeg = numero + contadorNeg;
		}

		if(numeroMax<numero || flag== 0)
		{
			numeroMax = numero;
			letraMax = letra;
		}

		if(numeroMin>numero || flag== 0)
		{
			numeroMin = numero;
			flag=1;
		}

		seguir = prompt("Desea seguir?");

	}while(seguir =="s");

	promedio = contadorPos / 2;

	document.write("La cantidad de números pares " + contadorPares + "<br>" );
	document.write("La cantidad de números impares " + contadorImpares + "<br>" );
	document.write("La cantidad de ceros " + contadorCeros + "<br>" );
	document.write("El promedio de todos los números positivos ingresados " + promedio + "<br>" );
	document.write("La suma de todos los números negativos " + contadorNeg + "<br>" );
	document.write("El número maximo es " + numeroMax + "<br>" + " la letra máxima es " + letraMax + " y la letra mínima es " + numeroMin + "<br>" );
	
	alert("cuatro");
}
