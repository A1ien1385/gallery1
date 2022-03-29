

const pics = document.querySelectorAll(".pic img");
const popup = document.querySelector(".popup");
const popup__close = document.querySelector(".popup__close");
const popup__img = document.querySelector(".popup__img");
const arrow__left = document.querySelector(".popup__arrow--left");
const arrow__right = document.querySelector(".popup__arrow--right");

let imgIndex;

//następny obraz
const nextSlide = () =>
{
    if(imgIndex === pics.length - 1)
    {
        imgIndex = 0;
    }

   else
   {
   imgIndex++;    

   }
   popup__img.src = pics[imgIndex].src;
};


//poprzedni obraz
const prevSlide = () =>
{
    if(imgIndex === 0)
    {
        imgIndex = pics.length - 1;
    }

   else 
    {
    imgIndex--;
    }
 popup__img.src = pics[imgIndex].src;
};


//wyświetlanie popupa i odejmowanie klasy hidden
pics.forEach((pic, index) => {
pic.addEventListener("click", (e)=>
{
    popup.classList.remove("hidden");
    popup__img.src = e.target.src;
    imgIndex = index;

})});


//zamykanie popupa
popup__close.addEventListener("click", () =>
{
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.add("hidden");
        popup.classList.remove("fade-out");
    }, 300);
    
});


//prawa strzałka
arrow__right.addEventListener('click', nextSlide);


//lewa strzałka
arrow__left.addEventListener('click', prevSlide);


//obsługa strzałek
document.addEventListener("keydown", (e) =>
{
if (!popup.classList.contains("hidden"))
{

 if(e.code === "ArrowRight" || e.keyCode === 39)
 {
    nextSlide();
 }

 else if(e.code === "ArrowLeft" || e.keyCode === 37)
 {
     prevSlide();
 }
}
});