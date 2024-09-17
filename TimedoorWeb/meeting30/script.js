var close = document.querySelectorAll('.close');

for(let i = 0; i < close.length; i++) {
   close[i].addEventListener('click', function(e){
      e.target.parentElement.style.display = 'none';
      e.preventDefault()
      e.stopPropagation()
   });
};

var item = document.querySelectorAll('.item');
for (let i = 0; i < item.length; i++) {
item[i].addEventListener('click', function(e){
alert( 'item' +i+ 'clicked');
})
}