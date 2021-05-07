function gestionarFicheroXML(xmlDoc){
	let capa = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		capa.innerHTML = capa.innerHTML + "<p>" + alumnos[i].textContent + "</p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}
