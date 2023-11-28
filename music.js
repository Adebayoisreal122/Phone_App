let musicList = document.getElementById("music-list");
let musicLinks = musicList.getElementsByTagName("a");
let music = document.getElementById("music");
for (var i = 0; i < musicLinks.length; i++) {
    musicLinks[i].onclick = function (event) {
        event.preventDefault();
        let musicFile = this.getAttribute("href");
        music.src = musicFile;
        music.play();
    }
}