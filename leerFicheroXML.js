function gestionarFicheroXML(xmlDoc){
	
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		alert(alumnos[i])
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("leerFicheroXML.xml","xml");
})
