function parallax(element,distance,speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll",function(){
    parallax("header",window.scrollY,1);
    parallax(".ball",window.scrollY,0.4);
});