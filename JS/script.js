function calcularPrecioTotal () {

  debugger
  let cantEnt=document.getElementById("cantEntradas").value;

 
  let porcDesc=document.getElementById("porcDescuento").value
 


  let descuento =(cantEnt*200) * porcDesc / 100
  
  
 
  let precioFin=(cantEnt*200)- descuento
 
  

  


  document.getElementById("precrioFinalTotal").innerHTML=`Precio Total: $ ${precioFin}`


 

  
}

