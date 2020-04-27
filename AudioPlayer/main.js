function MusicPlayer(audioUrl) {
    this.audio = new Audio(audioUrl);
    this.event()
};

MusicPlayer.prototype.event = function () {
    document.querySelector('.playButton').addEventListener('click', function () {
        document.querySelector('.playButton').style.display = 'none';
        document.querySelector('.pauseButton').style.display = 'block';
        this.audio.play();
    }.bind(this));
    document.querySelector('.pauseButton').addEventListener('click', function () {
        document.querySelector('.pauseButton').style.display = 'none';
        document.querySelector('.playButton').style.display = 'block';
        this.audio.pause();
    }.bind(this));
    document.querySelector('.stopButton').addEventListener('click', function () {
        document.querySelector('.pauseButton').style.display = 'none';
        document.querySelector('.playButton').style.display = 'block';
        this.audio.currentTime = 0.0;
        this.audio.pause();
    }.bind(this));

};
let song = new MusicPlayer('https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3');