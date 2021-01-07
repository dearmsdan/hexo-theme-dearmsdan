
var tn=0;
var tli=document.getElementById("contain").getElementsByTagName("label");
rollText_tt=setInterval("rollText(tn)",100);
function rollText(n){
	clearInterval(rollText_tt);
	tn++;
if (tn>=tli.length){tn=0;}
	rollText_tt=setInterval("rollText(tn)",2000); 
for (var j=0; j<tli.length; j++){
	tli[j].style.display=j==n?"block":"none";
	}
}