const initCanvas = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 657;
  canvas.height = 352;
  let image = new Image();
  image.src = "./images/bart_blackboard.jpg";

  image.onload = function () {
    ctx.drawImage(image, 0, 0);
  };
};

const handleForm = () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("text").value;
    writeCanvas(text);
  });
};

/**
 * escribe el texto que se le pasa por parametro dentro del canvas
 * @param {string} text
 */
const writeCanvas = (text) => {
  // console.log(`line.28 aqui el texto respeta los saltos de linea:\n`, text);
  const textLines = text.split('\n');
  if(textLines.length > 4) return alert('noooo! no escribas mas de 4 lineas!!');
  // console.log(`line.29 textLines:\n`, textLines)
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "60px Simpson";
  ctx.fillStyle = "white";
  textLines.map((line, index) => {
      const y = index+1;
      ctx.fillText(line, 25, 70*y, 500);
  })
};

initCanvas();
handleForm();
