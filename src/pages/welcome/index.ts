export function initWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  // console.log(boton);

  div.innerHTML = `
  <custom-header></custom-header>
    <h1 class= "title">Te damos la bienvenida a esta pagina</h1>
    <p class= "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas neque velit vitae, rerum vero tempora quam amet veritatis quibusdam culpa soluta quasi harum magni nemo reiciendis molestiae. Modi, quis.</p>
    <h3 class= "subtitle">Para continuar ingresá tu nombre</h3>
    
    <div class="form">
      <label class= "label">Nombre</label>
      <input type= "text" class="input"/>
    </div>

    <button class="boton">Comenzar</button>

    <custom-footer></custom-footer>
  `;

  style.textContent = `

    body{
      margin: 0;
    }

    .title{
      font-size: 52px;
      padding: 20px;
      margin: 0;
    }
    .text{
      padding:10px;
      font-size: 18px;
    }

    .subtitle{
      font-size: 22px;
    }

    .form{
      display: flex;
      flex-direction: column;
      margin:0 30px 10px 30px;
    }

    .label{
      padding: 10px;
    }

    .input{
      height: 55px;
      width: 312px;
      left: 0px;
      top: 24px;
      border-radius: 4px;
    }

    .boton{
      height: 55px;
      width: 312px;
      border-radius: 4px;
      background: #9CBBE9;
      font-size: 22px;
      margin:20px 30px 20px 30px;
    }
  `;
  const boton = div.querySelector(".boton");
  boton?.addEventListener("click", () => {
    params.goTo("/step1");
  });

  div.appendChild(style);

  return div;
}
