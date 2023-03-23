function cajas(){
let main = document.querySelector(".main");
for (let i=0; i <= 10; i++ ){
    let div = document.createElement("div")
        div.innerHTML = `<div class="caja">
        <h1 class="titulo2">Our product</h1>
          <div class="imagen">
             <h2>imagen</h2>
          </div>
          <p class="texto2">new product</p>
      </div>`;
        main.appendChild(div);
    }
  }
cajas();