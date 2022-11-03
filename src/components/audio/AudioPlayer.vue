<template>
  <div>
    <div class="container">
      <!-- Cover-->
      <div>
        <picture class="cover">
          <img :src="cover" alt="music-cover" width="100" height="100"/>
        </picture>
        <!--Cover-->
      </div>
      <div style="display: flex; flex-direction: column; margin-left: 20px;">

      <!-- Info-->
      <div class="info">
        <div class="music">{{name}}</div>
        <div class="artist">{{artist}}</div>
      </div>
      <!-- Info-->

      <!-- Time -->
      <div class="time">
        <div class="count">{{currentDate}}</div>
        <div class="count">{{getTime}}</div>
      </div>
      <!--Time -->

      <!--Progress-->
      <div class="music-info">
        <div class="progress-container" @click="setProgress">
          <div class="progress" :style="{ width: progressValue + '%'}"></div>
        </div>
      </div>
      <!--Progress-->

      <!--Navigation-->
      <div class="navigation">
        <button class="action-btn" @click="prevSong">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button class="action-btn action-btn-big" @click="playSong()">
          <svg v-if="isPlay" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,16L10,16c-0.55,0-1-0.45-1-1V9 c0-0.55,0.45-1,1-1l0,0c0.55,0,1,0.45,1,1v6C11,15.55,10.55,16,10,16z M14,16L14,16c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1l0,0 c0.55,0,1,0.45,1,1v6C15,15.55,14.55,16,14,16z"/></g></g></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,14.67V9.33c0-0.79,0.88-1.27,1.54-0.84 l4.15,2.67c0.61,0.39,0.61,1.29,0,1.68l-4.15,2.67C10.38,15.94,9.5,15.46,9.5,14.67z"/></g></svg>
          </button>
        <button class="action-btn" @click="nextSong">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>
      <!--Navigation-->

      <!--Audio-->
      <audio :src="music" ref="myAudio" @ended="nextSong" @timeupdate="[updateProgress, currentTimeCalc]"></audio>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AudioPlayer",

    data() {
      return {
        musics:[
          {
            name: "The Lonely Shepherd",
            artist: "Gheorge Zamfir",
            cover: "https://i.scdn.co/image/ab67616d0000b273fecfac11994325a39cd03dec",
            source: "https://github.com/ramazanyamac/vue-music-player/blob/master/music/The-Lonely-Shepherd.mp3?raw=true",
          },
          {
            name: "Once Upon a Time in the West",
            artist: "Ennio Morricone",
            cover: "https://i.scdn.co/image/ab67616d0000b2732b23062e3b70cc2725b4f960",
            source: "https://github.com/ramazanyamac/vue-music-player/blob/master/music/Once-Upon-a-Time-in-the-West.mp3?raw=true",
          },
          {
            name: "So Was Red",
            artist: "Thomas Newman",
            cover: "https://i.scdn.co/image/ab67616d0000b273e710c1f5b228046932790031",
            source: "https://github.com/ramazanyamac/vue-music-player/blob/master/music/So-Was-Red.mp3?raw=true",
          },
          {
            name: "Leaving Wallbrook/On The Road",
            artist: "Hans Zimmer",
            cover: "https://i.scdn.co/image/ab67616d0000b273bf5889f82cc38018de92724a",
            source: "https://github.com/ramazanyamac/vue-music-player/blob/master/music/On-The-Road.mp3?raw=true",
          },
          {
            name: "Cast Away",
            artist: "Geek Music",
            cover: "https://i.scdn.co/image/ab67616d0000b2733eff8e9536d0f0db4260e03a",
            source: "https://github.com/ramazanyamac/vue-music-player/blob/master/music/Cast-Away.mp3?raw=true",
          },
        ],
        songIndex: 0,
        music: null,
        cover: null,
        name: null,
        artist: null,
        isPlay: false,
        progressValue: null,
        currentDate: null,
        duration: null,
        isRandom: false,
      }
    },
    methods: {
      loadSong() {
        this.music = this.musics[this.songIndex].source;
        this.cover = this.musics[this.songIndex].cover;
        this.name = this.musics[this.songIndex].name;
        this.artist = this.musics[this.songIndex].artist;
        const audio = new Audio(this.musics[this.songIndex].source);

        audio.onloadedmetadata = () => {
          this.duration = audio.duration;
        }

        this.$refs.myAudio.load()
      },
      playSong() {
        this.isPlay = !this.isPlay;

        if(this.isPlay) {
          this.$refs.myAudio.play()
        } else {
          this.$refs.myAudio.pause()
        }

      },
      refreshSong(){
        this.isPlay = true;

        if(this.isPlay) {
          var playPromise =  this.$refs.myAudio.play();
          if(playPromise !== undefined){
            playPromise.then(() => {
              this.$refs.myAudio.pause();
            })
          }
        }
      },
      randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },
      prevSong() {
        if(this.random){
          this.songIndex = this.songIndex - this.randomNumber(1,this.musics.length);
        } else {
          this.songIndex--;
        }

        if (this.songIndex < 0) {
          this.songIndex = this.musics.length - 1;
        }

        this.loadSong();
        this.refreshSong();
      },
      nextSong() {
        if(this.random){
          this.songIndex = this.songIndex + this.randomNumber(1,this.musics.length);
        } else {
          this.songIndex++;
        }

        if (this.songIndex > this.musics.length - 1) {
          this.songIndex = 0;
        }

        this.loadSong();
        this.isPlay = false;

      },
      updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        this.progressValue = progressPercent;
      },
      setProgress(e) {
        const width = e.target.parentElement.clientWidth;
        const clickX = e.offsetX;
        const duration = this.$refs.myAudio.duration;
        this.$refs.myAudio.currentTime = (clickX / width) * duration;
      },
      timeCalculate(time){
        var
            current_minute = parseInt(time / 60) % 60,
            current_seconds_long = time % 60,
            current_seconds = current_seconds_long.toFixed(),
            current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

        return current_time;
      },
      currentTimeCalc(){
        this.currentDate = this.timeCalculate(this.$refs.myAudio.currentTime)
      },
    },
    computed: {
      getTime: function(){
        return this.timeCalculate(this.duration)
      },
      title: function(){
        return this.isPlay ? 'Now Playing' : 'Pause'
      },
      reload: function(){
        return this.isRandom && 'action-btn-active';
      },
    },
    watch: {

    },
    mounted(){
      this.loadSong();
    },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  margin: auto;
}

.cover img {
  object-fit: cover;
  width: 70px;
  border-radius: 10px;
  height: 70px;
}

.info {
  text-align: left;
}

.info .music {
  font-size: 16px;
  font-weight: 600;
}

.info .artist {
  font-size: 12px;
  font-weight: 400;
}

.time {
  display: none;
  justify-content: space-between;
}

.time .count {
  font-size: 13px;
  font-weight: 400;
  display: none;
}

.navigation {
  display: flex;
  align-items: center;
  z-index: 1;
}

.action-btn {
  background-color: transparent;
  border: 0;
  color: #b2b3b9;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
}

.action-btn.action-btn-big {
  fill: #383b44;
  font-size: 30px;
}

.action-btn.action-btn-active {
  fill: #383b44;
}

.action-btn.action-btn-random {
  fill: #383b44;
}

.action-btn.action-btn-left {
  position: absolute;
  left: 30px;
  margin: 0;
}

.action-btn.action-btn-right {
  position: absolute;
  right: 30px;
  margin: 0;
}

.action-btn:focus {
  outline: 0;
}

.music-info {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 0 0;
  width: 100%;
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  z-index: 0;
  opacity: 1;
}

.music-container.play .music-info {
  opacity: 1;
  transform: translateY(-100%);
}

.music-info h4 {
  margin: 0;
}

.progress-container {
  display: none;
  background: #edeaed;
  border-radius: 5px;
  cursor: pointer;
  height: 8px;
  width: 100%;
}

.progress {
  position: relative;
  background-color: #ff54b0;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
</style>