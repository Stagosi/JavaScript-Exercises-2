function areaResult (){
var as = parseInt(document.getElementById("aSide").value);
var bs = parseInt(document.getElementById("bSide").value);
var cs = parseInt(document.getElementById("cSide").value);

var s = (as + bs + cs) / 2; 
var a = s * (s-as) * (s-bs) * (s-cs);
var areaOfT = Math.sqrt(a);
var areaOfTriangle = areaOfT.toFixed(2);
 
document.getElementById("result").innerHTML = areaOfTriangle;
}
