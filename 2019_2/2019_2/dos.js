function mostrar()
{

  var mascota;
  var peso;
  var edad;
  var edadMax = 0;
  var nombre;
  var nombreMax;
  var menos10 = 0;
  var contadorpeso = 0;
  var flag = 0;

  
  for(i=0; i<4; i++)
  {
    mascota = prompt("Ingrese la Especie de su mascota: ");
    while(mascota != "perro" && mascota != "gato")
    {
      alert("Esa no es una mascota valida ");
      mascota = prompt("Reingrese mascota: ");
      
    }
    
    edad = parseInt(prompt("Ingrese la edad de la mascota: "));
    while(edad <=1 && edad >=25 )
    {
      alert("esa no es una edad posible")
      edad = parseInt(prompt("Reingrese la edad de la mascota: "));
      
    }
    
    peso = parseInt(prompt("Ingrese peso de la mascota: "));
    while(peso<=0 && peso>=101)
    {
      alert("Ese no es un peso valido")
      peso = parseInt(prompt("Ingrese peso de la mascota: "));
    }
    
    nombre = prompt("Ingrese el Nombre de su mascota: ");


    if(peso >1 && peso<100)
    {
      contadorpeso = contadorpeso + peso;
    }

    if(edad > edadMax && mascota== "perro" || flag==0)
    {
    edadMax = edad;
    nombreMax = nombre; 
    flag =1;
    }
    
    if(peso<10 && edad>10 )
    {
      menos10++;
    }
  }
  
    
  contadorpeso = contadorpeso / 4;

  document.write("El promedio de los pesos totales " + contadorpeso + "<br>");
  document.write(" El nombre de la mascota mas vieja es " + nombreMax + "<br>" );
  document.write("La cantidad animales menores a 10 kilos de mas de 10 años son:" + menos10 + + "<br>");





  alert("dos");
}
