// //lay danh sach
// let slideList = document.querySelectorAll(".slide");
// console.log(slideList);


// //gắn cho slide đầu tiên hien thị slide mặc định là slide 1 ( có currentIndex = 0)
// let currentIndex= 0;
// slideList[currentIndex].style.display= "block";


// // //tạo 2 nút bấm prev và next
// function preview() {
//     currentIndex--;
//     slideList[currentIndex].style.display ="none";
//     if (currentIndex < 0){
//         currentIndex = slideList.length - 1;
//     }
//     console.log(slideList[currentIndex]);
//     slideList[currentIndex].style.display= "block";
// }

// function next() {
//     currentIndex++;
//     slideList[currentIndex].style.display ="none";
//     if (currentIndex > slideList.length - 1){
//         currentIndex=0;
//     }
//     slideList[currentIndex].style.display= "block";
// }

// //-------------------------------------------------------------slide img---------------------------------------------------------


// // Open the Modal
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
// 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// slider img nos content

// const slideList = document.getElementsByClassName("slideshow-img__list");
// console.log(slideList);

// let currentIndex = 0;
// slideList[currentIndex].style.display = "block";

// function preview(){
//   slideList[currentIndex].style.display = "none";
//   currentIndex--;
//   if (currentIndex < 0){
//     currentIndex = slideList.length - 1;
//   }
//   slideList[currentIndex].style.display = "block";
// }

const slideList = document.querySelector(".slideshow-img__list");
const dragging = (e) => {
  slideList.scrollLeft = e.pageX;
  
}

 slideList.addEventListener("mousemove", dragging);