function rotateGif(element) {
    element.style.transform ="translate(0x, 0px)";
    element.style.transform ="rotate(180deg)"
  }
  function rotateBack(element) {
    element.style.transform ="translate(0px, 0px)";
    element.style.transform ="rotate(90deg)"
  }

  function scrolling() {
    document.getElementById("div").style.color = "grey";
 }
 function keypress() {
    var content = document.getElementById("div")
    content.innerHTML = "You pressed a key!"
    content.style.color = "red"  
   }

var btn = document.querySelector(".button");

btn.onclick = () => {
  alert("Hello World!");
};

var btn = document.querySelector(".button2");

btn.addEventListener('click', function() {
  alert("Hello World!");
});

btn.addEventListener('click', function() {
  console.log("Hello Programmer!");
});