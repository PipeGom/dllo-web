const getDataForm = () => {
    
    const txtName = document.getElementById("txtName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtTask = document.getElementById("txtTask").value
    const acceptConditions = document.getElementById("acceptConditions").checked
    const typeA = document.getElementById("typeA").checked
    const typeB = document.getElementById("typeB").checked

    // Json {clave : valor} Si son iguales no se tiene que poner dos veces
    const data = {
        name: txtName,  /** se crea el json Clave valor */
        email: txtEmail,
        Task : txtTask,
        acceptCondition : acceptConditions,
        typeA,
        typeB
    }

    console.log(data);
}


let estudiantes = new Array();

estudiantes.push({"nombre":"EL pepe", id:123})
estudiantes.push({"nombre":"Maritza", id:1234})

estudiantes.forEach((x) => console.log(x.nombre))

/*for (let i = 0; i < estudiantes.length; i++) {
    if(estudiantes[i].nombre == "Maritza"){
        console.log
    }
}*/









