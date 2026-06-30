let slides = document.querySelector(".slides");

let images = document.querySelectorAll(".slide");


let index = 0;



function showSlide(){

    if(index >= images.length){

        index = 0;

    }


    if(index < 0){

        index = images.length-1;

    }



    slides.style.transform =
    `translateX(${-index * 800}px)`;

}





function nextSlide(){

    index++;

    showSlide();

}





function prevSlide(){

    index--;

    showSlide();

}




// Auto Slide

setInterval(()=>{

    nextSlide();

},3000);