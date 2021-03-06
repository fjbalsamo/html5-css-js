/**
 * aca vamos a guardar la info de todas las personas que registremos
 */
const vectorPersonas = [];

let indexRef = -1;

const init = () => {
  const form = document.getElementById("form");
  // document.getElementById('deleteBtn').addEventListener('click', (e) => {})
  document.getElementById('clearBtn').addEventListener('click', e => {
    clear()
  })
  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evitar el compoartamiento por defecto del formulario

    const person = {
      firstname: String(document.getElementById("firstname").value).toLowerCase(),
      lastname: String(document.getElementById("lastname").value).toLowerCase(),
      color: String(document.getElementById("color").value),
      createAt: new Date().getTime(),
    };

    //destrutureing
    const { firstname, lastname, color } = person;

    if (
      firstname.trim().length == 0 ||
      lastname.trim().length == 0 ||
      color.trim().length == 0
    ) {
      alert("todos los campos son obligatorios");
    }else{
      if(indexRef >=0){
        vectorPersonas[indexRef] = {...person};
      }else{
        vectorPersonas.push(person) // agrego un objeto directamente
        //creo el objeo dentro del metodo push
        // vectorPersonas.push({
        //     firstname,
        //     lastname,
        //     color
        // })
  
        //exparso el objeto dento del metodo push
        // vectorPersonas.push({ ...person })
  
        //rederizando los datos en la vista
      }        

        render();
        //limpiando el formulario
        clear();
    }

  });
};


const render = () => {

  console.log(`line 51 - este es el vector personas:\n`, vectorPersonas);

  if (vectorPersonas.length == 0) {
    document.getElementById('data').innerHTML = `
    <tr>
      <td colspan="4" class="text-center">No hay datos</td>
    </tr>
    `;
  }else{
    // let data = ''
    // for(let i=0; i<vectorPersonas.length; i++){
    //   const per= vectorPersonas[i];
    //   data+=`<tr>
    //     <td>${per.firstname}</td>
    //     <td>${per.lastname}</td>
    //     <td>${per.color}</td>
    //     <td>boton</td>
    //   </tr>`;
    // }
    // document.getElementById('data').innerHTML = data;

    document.getElementById('data').innerHTML = vectorPersonas
    .map((persona, index) => {
      return `<tr>
        <td class="text-uppercase">${persona.firstname}</td>
        <td class="text-uppercase">${persona.lastname}</td>
        <td style="background-color: ${persona.color}"></td>
        <td>
          <button class="btn btn-primary" onclick="setPersonToEdit(${index})">
            Editar
          </button>
        </td>
      </tr>`;
    }).join('');
    
    //console.log(`line 80 - este es el vector de strings:\n`, dataArray);
  }

}

const setPersonToEdit = (index) => {
  indexRef = index;
  const persona = vectorPersonas[index];
  const { firstname, lastname, color }  = persona;

  document.getElementById("firstname").value = firstname;  
  document.getElementById("lastname").value = lastname;
  document.getElementById("color").value = color;
  document.getElementById('deleteBtn').style.display='block';
}

const deletePerson = () => {
  if(confirm('Quiere eliminar este registro?')) {
    vectorPersonas.splice(indexRef, 1);
    console.log(vectorPersonas);
    render()
    clear()
  }
}

const clear = () => {

  indexRef = -1;
  
  document.getElementById('deleteBtn').style.display = 'none';
  
  const form = document.getElementById('form')

  form.reset();
  
  document.getElementById('firstname').focus();

}


const handlePress = () => {
  
  document.getElementById('firstname').addEventListener('keypress', (evento) => {
    const firstname = String(document.getElementById('firstname').value);
    if(evento.key.toLowerCase() === 'enter'){
      evento.preventDefault();
      if(firstname.trim().length >0){
        document.getElementById('lastname').focus();
      }
    }
    // console.log(evento)
  })

  document.getElementById('lastname').addEventListener('keypress', (evento) => {
    const lastname = String(document.getElementById('lastname').value);
    if(evento.key.toLowerCase() === 'enter'){
      evento.preventDefault();
      if(lastname.trim().length>0){
        document.getElementById('color').focus();        
      }
    }
  })
}

init();

render();

handlePress();

const vector = ['hola', 'soy', 'un', 'vector'];

console.log(vector);

const vectorATexto = vector.join('_');

console.log(vectorATexto)
