console.log('hello?');

window.addEventListener('load',()=>{

  
  /**
 * import './netflix-body-js/netflix-body-movie-info.js' 
 * 
 * says it only allows modules, I don't know what to do about that
 * */

/*const button = querySelectorAll("button");

button.array.forEach(buttton => {
    buttton.addEventListener('click',()=>{
       if(buttton.class.carouselButtonPrev){
        return 1 || -1;
       }
       const offset = button.closest(".carousel").querySelector(".imgList"); 
    })
});

/*
const images = [querySelector('#img')];

let i = 0;

function slideShow(){
    images[i];

}*/

/**
 * This is the scrolling button functions section
 */

const buttonLeftEl = document.querySelector(".carouselButtonNext");

buttonLeftEl.onclick = () => {
  document.querySelector('ul').scrollLeft += 1000;
};

const buttonRightEl = document.querySelector(".carouselButtonPrev");

buttonRightEl.onclick = () => {
  document.querySelector('ul').scrollLeft -= 1000;
};
/**
 * Input code
 */

const inputEl = document.querySelector('.form-control');

inputEl.addEventListener('click', ()=>{
  inputEl.removeAttribute("readonly");
});

/**
 * This is the hover video and wishlist button section
 */

const singleSlideEl = document.querySelector(".slide");
/*const myString = `<div>
<video class="hoverVideo" controls 
src="netflix-body-video/hd0029_preview.mp4" 
width="350px" height="200px" muted autoplay loop></video>
<button class="wishlist" style="border-radius: 1;">&#10003;</button>
</div>

singleSlide.addEventListener('mouseenter', () =>{
    singleSlide.innerHTML = myString;
});
onmouseleave = (event) => { myString.hidden == true;};*/

const imgEl = document.querySelector('img'); /*would work better if the images were attached to an array*/

const videoEl = document.createElement("video");
videoEl.classList.add("hoverVideo");
videoEl.innerHTML = " controls muted autoplay loop"



singleSlideEl.addEventListener('mouseenter',() => {
  /*singleSlideEl.removeChild(imgEl);*/
  singleSlideEl.appendChild(videoEl);
  this.videoEl.value.play();
  videoEl.src = "netflix-body-video/hd0029_preview.mp4";
  this.muted = !this.muted;

  singleSlideEl.appendChild(wishlistButtonEl);
});
onmouseleave = () => {
  singleSlideEl.removeChild(videoEl);
 /* singleSlideEl.appendChild(imgEl);*/

 singleSlideEl.removeChild(wishlistButtonEl);
};

/*the video comes up but will not go back down*/


/**
 * Wishlist code
 */

const wishlistEl = document.querySelector('#wishlist');
const wishlistCarouselEl = document.querySelector("#wishlistCarousel");

const imgListEl = document.querySelector('#wishImgList');

const imgSlide = document.createElement("li");
imgSlide.classList.add("slide");

const wishlistButtonEl = document.createElement("button");
wishlistButtonEl.classList.add("wishlist");
wishlistButtonEl.innerHTML = '&#10003;';


wishlistButtonEl.addEventListener('click', ()=>{
  imgListEl.appendChild(imgSlide);
});
})
