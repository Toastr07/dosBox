class DosBox {
    /**
     * 
     * @param {string} id 
     * @param {string} url 
     * @param {boolean} paused 
     * @param {boolean} fullScreen 
     * @param {boolean} mouseCapture 
     * @param {string} theme 
     */
    constructor(id, url, paused = false, fullScreen = false, mouseCapture = false, theme = "dark") {
        this.id = id;
        this.url = url;
        this.paused = paused;
        this.fullScreen = fullScreen;
        this.mouseCapture = mouseCapture;
        this.theme = theme;

        this.player = Dos(document.getElementById(this.id),
        {
            url: this.url,
            mouseCapture: this.mouseCapture,
	        theme: this.theme,
            kiosk: true,
            autoStart: true
        });

        this.setPaused(this.paused);
        if (this.fullScreen) this.setFullScreen(true);
    }

    /**
     * @param {string} paused
     */
    setPaused(paused) {
        this.paused = paused;
        this.player.setPaused(this.paused);
    }

    /**
     * @param {boolean} fullScreen 
     */
    setFullScreen(fullScreen) {
        this.fullScreen = fullScreen;
        this.player.setFullScreen(this.fullScreen);
    }

    /**
     * @param {boolean} mouseCapture 
     */
    setMouseCapture(mouseCapture) {
        this.mouseCapture = mouseCapture;
        this.player.setMouseCapture(this.mouseCapture);
    }

    /**
     * @param {string} theme 
     */
    setTheme(theme) {
        this.theme = theme;
        this.player.setTheme(this.theme);
    }
}