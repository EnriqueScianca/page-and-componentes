export function initStep1(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  <custom-header></custom-header>
    <h1 class= "title">Necesitamos algunos datos más</h1>

    <div class="form">
    <label class= "label">Email</label>
    <input type= "text" class="input"/>

    <label class= "label">Comida Favorita</label>
    <input type= "text" class="input"/>

    <label class= "label">Lo que quieras</label>
    <input type= "text" class="input"/>
  </div>

  <div class="botonera">
  <button class="botonContinuar">Continuar</button>
  <button class="botonVolver">Volver</button>
  </div>

    <custom-footer></custom-footer>
  `;

  style.innerHTML = `

  body{
    margin: 0;
  }  
    .title{
      padding: 10px;
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

    .botonContinuar{
      height: 55px;
      width: 312px;
      border-radius: 4px;
      background: #9CBBE9;
      font-size: 22px;
      margin:20px 30px 20px 30px;
    }

    .botonVolver{
      height: 55px;
      width: 312px;
      border-radius: 4px;
      background: white;
      font-size: 22px;
      margin:20px 30px 20px 30px;
    }



    .botonera{
      display: flex;
      flex-direction:column;
    }
  `;

  div.appendChild(style);

  const botonContinuar = div.querySelector(".botonContinuar");
  botonContinuar?.addEventListener("click", () => {
    params.goTo("/thankyou");
  });

  const botonVolver = div.querySelector(".botonVolver");
  botonVolver?.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
