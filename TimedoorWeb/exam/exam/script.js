// JS Nomor 1
function changeImage(element) {
    element.setAttribute("src", "img-header2.png")
}

function changeImageBack(element) {
    element.setAttribute("src", "img-header1.png")

}

// JS Nomor 2
var btnLike = document.querySelector('#green')
var btnDislike = document.querySelector('#red')

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor() {
    if (btnDislike.classList.contains('red')) {
        btnDislike.classList.remove('red')
    }

    this.classList.toggle('green')
}

function dislikeColor() {
    if (btnLike.classList.contains('green')) {
        btnLike.classList.remove('green')
    }

    this.classList.toggle('red')
}