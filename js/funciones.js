const modal = document.querySelector(".modal");
const miniaturas = document.querySelectorAll(".galeria a");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;
let rutasImg = [];

//al hacer click en cualquiera de las miniaturas, la clase visible se le pone a la modal

/*miniaturas[0].addEventListener("click", (evento) => {
    evento.preventDefault();
    modal.classList.add("visible");
})*/

miniaturas.forEach((miniatura,indice) => {
    rutasImg.push(miniatura.getAttribute("href"));

    miniatura.addEventListener("click", (evento) => {
        evento.preventDefault();
        imgActual = indice;
        imgModal.setAttribute("src",rutasImg[imgActual]);
        modal.classList.add("visible");
    });
});

//al hacer click en la modal, se le quita la clave visible
modal.addEventListener("click", function(){
    modal.classList.remove("visible");
});

//navegacion entre las imágenes
flechas.forEach((flecha,indice) => {
    flecha.addEventListener("click", (evento) => {
        evento.stopPropagation();
        if(indice == 0){
            imgActual = imgActual > 0 ? imgActual - 1 : miniaturas.length - 1;
        }else{
            imgActual = imgActual < 8 ? imgActual + 1 : 0;
        }
        imgModal.setAttribute("src",rutasImg[imgActual]);
    });
});
