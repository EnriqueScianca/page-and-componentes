export function initThankYou(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
    <custom-header></custom-header>
    <h1>Gracias</h1>
    <h3>Toda la información que nos brindaste es muy importante</h3>
    <button class="botonDeNada">De nada</button>
    
    <custom-footer></custom-footer>
  `;

  style.textContent = `

  body{
    margin: 0;
  }
  
  .botonDeNada{
    height: 55px;
    width: 312px;
    border-radius: 4px;
    background: #9CBBE9;
    font-size: 22px;
    margin:20px 30px 20px 30px;
  }
  `;

  const botonDeNada = div.querySelector(".botonDeNada");
  botonDeNada?.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  div.appendChild(style);

  return div;
}
