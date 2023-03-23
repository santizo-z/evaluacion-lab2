function menu(){
    let componente = `
    
    <a href="./inicio.html"> <button> <img class="emoji" src="https://cdn-icons-png.flaticon.com/512/16/16033.png?w=740&t=st=1679320922~exp=1679321522~hmac=d3cb326a99545739b78a49d1cb4a20815c32604627c388992c3f8f36ed4c58cb" alt=""></button></a>
    `;

    let menu_del_dom = document.querySelector(".menu")

    menu_del_dom.innerHTML= componente

}
menu();