var isOpened = false;

window.onload = function() {
    var hMenu = document.getElementById("hamburger_bar");
    var hBar = document.getElementById("hBar");
    var cButton = document.getElementById("hButton");
    
    hMenu.onanimationend = function() {
        if(!isOpened) hMenu.style.display = "none";
    }

    hBar.addEventListener("click", function(e) {
        isOpened = true;
        hMenu.style.display = "block";
        hMenu.classList.remove("close_bar");
        hMenu.classList.add("open_bar");
        hMenu.style.left = 0; 
    });

    cButton.addEventListener("click", function(e) {
        isOpened = false;
        hMenu.classList.remove("open_bar");
        hMenu.classList.add("close_bar"); 
    })
}
