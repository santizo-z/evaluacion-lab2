function cajas(){
let main = document.querySelector(".main");
for (let i=0; i <= 10; i++ ){
    let div = document.createElement("div")
        div.innerHTML = `<div class="caja">
        <h1 class="titulo2">Our product</h1>
          <div class="imagen">
           <img class="imagen2" src=https://cdn.shopify.com/s/files/1/0605/2125/1051/products/unisex-fleece-hoodie-black-front-616fac24a0801_1445x.jpg?v=1634708527" alt="">
          </div>
          <p class="texto2">new product</p>
      </div>`;
        main.appendChild(div);
    }
  }
cajas();