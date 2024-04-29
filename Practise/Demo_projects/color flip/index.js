var i = 0;
const colors = ["red", "green", "blue", "alpha", "yellow", "cyan", "orange", "maroon", "magenta"];

function changeColor() {

    document.getElementsByTagName("body")[0].style.backgroundColor = colors[i++];
    if (i > colors.length - 1) {
        i = 0;
    }

}