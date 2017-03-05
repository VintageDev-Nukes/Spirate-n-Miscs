var redimensionador1 = document.documentElement.clientWidth - 55 ;
function redimensionado1() {
document.write (redimensionador1);
}
function valor1() {
document.write ("<span class=\"GloboTrans GlbMSNTOP\" style=\"position:absolute; top: -85px; left:-80px; width: ");
}
function valor1_1() {
document.write ("px; height: 30px;\">");
}
function valor1_final() {
document.write (valor1() + redimensionado1() + valor1_1());
}
