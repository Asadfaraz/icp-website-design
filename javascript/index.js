var myIndex = 0;
carousel();

function carousel() {
let i;
let images = document.getElementsByClassName("mySlides");
console.log('slides: ', images);
console.log('images length: ', images.length);


for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
}

myIndex++;
if (myIndex > images.length) {
    myIndex = 1;
}
images[myIndex - 1].style.display = "block";
setTimeout(carousel, 2000); // Change image every 2 seconds
}