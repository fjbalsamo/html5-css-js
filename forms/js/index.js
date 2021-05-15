/**
 * aca vamos a guardar la info de todas las personas que registremos
 */
const vectorPersonas = [];

const init = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evitar el compoartamiento por defecto del formulario

    const person = {
      firstname: String(document.getElementById("firstname").value),
      lastname: String(document.getElementById("lastname").value),
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
        console.log(person);

        vectorPersonas.push(person) // agrego un objeto directamente

        //creo el objeo dentro del metodo push
        // vectorPersonas.push({
        //     firstname,
        //     lastname,
        //     color
        // })

        //exparso el objeto dento del metodo push
        // vectorPersonas.push({ ...person })

    }

    console.log(vectorPersonas)

  });
};

init();
