function footer(){
    let componetes = ` <img class="imagenes" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png" alt="">
    
    <a href="./index.html"><button>
        <h3>Home</h3>
    </button></a>
    <a href="./about.html"><button>
        <h3>About</h3>
    </button></a>
    <a href="./contact.html"><button>
        <h3>Contact</h3>
    </button></a>`;

    let menu_del_dom2 = document.querySelector(".pie_de_pagina")

    menu_del_dom2.innerHTML= componetes
}
footer();

