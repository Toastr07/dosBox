function loadPlayerImg(img) {
    let dosBox =  new DosBox("dosbox", img);

    document.getElementById("pause").addEventListener("click", () => dosBox.setPaused(!dosBox.paused));
    document.getElementById("fullScreen").addEventListener("click", () => dosBox.setFullScreen(true));
    document.getElementById("mouseCapture").addEventListener("click", () => dosBox.setMouseCapture(!dosBox.mouseCapture));
}