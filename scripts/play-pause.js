AFRAME.registerComponent('play-pause', {
    init: function () {
        this.onClick = this.onClick.bind(this);
    },
    play: function () {
        this.el.addEventListener('click', this.onClick);
    },
    pause: function () {
        this.el.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl) { return; }

        if (videoEl.paused) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }
});