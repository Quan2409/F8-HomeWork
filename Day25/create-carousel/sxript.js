// Create Element
var carousel = document.querySelector(".carousel");
var innerCarousel = document.querySelector(".carousel-inner");
var carouselNav = document.querySelector(".carouselNav");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

//Get list of Items (image)
var carouselItems = innerCarousel.children;

//Calculate width of one Items
var itemWidth = innerCarousel.clientWidth;
//clientWith: Return width of a element
console.log(itemWidth);

//Calculate total size all items
var totalWidth = itemWidth * carouselItems.length;

//Update CSS for inner Carousel
innerCarousel.style.width = `${totalWidth}px`;

var position = 0;
// Lắng nghe sự kiện khi click vào nút next
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    //tính toán ra được tọa độ
    position -= itemWidth;
    //Update CSS
    innerCarousel.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    //tính toán ra được tọa độ
    position += itemWidth;
    //Update CSS
    innerCarousel.style.translate = `${position}px`;
  }
});
