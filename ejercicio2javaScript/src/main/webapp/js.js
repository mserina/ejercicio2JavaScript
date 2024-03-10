/**
 * 
 */

 
 function fechaComparacion(){
	 var fechaActual = new Date();
	 
	 //variables
	  var diaActual = fechaActual.getDate();
	  var mesActual = fechaActual.getMonth(); 
	  var anyoActual = fechaActual.getFullYear();
	  
	 //objeto fecha con propiedades (dia, mes, anyo)
	 var fecha = {
		 diaActual:  diaActual,
		 mes: mes,
		 anyo: anyoActual
	 }
	 
	 var dia = fecha.getDay;
	 
	 //array con el nombre de los meses
	 
	 var mesInsertado = prompt("Inserte numero del mes");
	 var nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	 var mesNombre = nombresMeses[mesInsertado];
	 
	 //objeto calendario con propiedades
	 var calendario = {
		 dia: diaActual,
		 mes: mesNombre,
		 anyo: anyoActual
	 }
	 
	 if(fecha.mes == mesInsertado){
		 
		 alert("Es hoy");
	 }
	 else{
		 
		 alert("Aun falta");
	 }
 }