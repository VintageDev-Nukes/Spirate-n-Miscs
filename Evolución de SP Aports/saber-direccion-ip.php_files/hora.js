ahora = new Date();
dia = ahora.getDate();
mes = ahora.getMonth()+1;
anho = ahora.getFullYear();
hora = ahora.getHours();
minuto = ahora.getMinutes();
if(dia<10){dia="0"+dia}
if(mes<10){mes="0"+mes}
if(hora<10){hora="0"+hora}
if(minuto<10){minuto="0"+minuto}
fecha=dia+'/'+mes+'/'+anho+' '+hora+':'+minuto;

function hora_cam() {
  	ho_cj = new Date();
  	dia_cj = ho_cj.getDate();
	mes_cj = ho_cj.getMonth()+1;
	anho_cj = ho_cj.getFullYear();
	hora_cj = ho_cj.getHours();
	minuto_cj = ho_cj.getMinutes();
	segundo_cj = ho_cj.getSeconds();
	
	if(dia_cj<10){dia_cj="0"+dia_cj}
	if(mes_cj<10){mes_cj="0"+mes_cj}
	if(hora_cj<10){hora_cj="0"+hora_cj}
	if(minuto_cj<10){minuto_cj="0"+minuto_cj}
	if(segundo_cj<10){segundo_cj="0"+segundo_cj}
	
	hora_cliente=/* dia_cj+'/'+mes_cj+'/'+anho_cj+' '+ */hora_cj+':'+minuto_cj+":"+segundo_cj;
	
  	document.getElementById('hora_cl').innerHTML=hora_cliente;
}


function checkTimeZone() {
   var rightNow = new Date();
   var rightNowString = rightNow.toString();
   var lastColon = rightNowString.lastIndexOf(":");
   var rightNowZone = rightNowString.substring(lastColon + 4, rightNowString.length);
   var rightNowZone = rightNowZone.replace(/ \d\d\d\d$/,"");
   var rightNowZone = rightNowZone.replace(/ \d\d\d\d $/,"");
   var date1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);
   var date2 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0);
   var temp = date1.toGMTString();
   var date3 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
   var temp = date2.toGMTString();
   var date4 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
   var hoursDiffStdTime = (date1 - date3) / (1000 * 60 * 60);
   var hoursDiffDaylightTime = (date2 - date4) / (1000 * 60 * 60);
   if (hoursDiffDaylightTime == hoursDiffStdTime) {
      document.writeln(rightNowZone + " <br> Usas el horario normal");
   } else {
      document.writeln(rightNowZone + " <br> Usas el horario de verano");
   }
}

/* HORA */
<!--
ahora = new Date();
function fechahoy() {
	var diasemana = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
	var nombremes = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
	var ahora;
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDay();
	var num = fecha.getDate();
	ahora = diasemana[dia] + ", " + num + " de " + nombremes[mes] + " de " + ano;
	return ahora;
}

//-->