<template lang="pug">
  .home
    .top
      .logo
        span.silver Booking
        span.chat Demo
      .direct-call
        .silverchat-location
      video.remote-img(v-if="currentRemotePicture != null && currentRemotePicture.includes('.mp4')" :src="currentRemotePicture" autoplay)
      img.remote-img(v-else :src="currentRemotePicture")
    .bottom
</template>

<script>

let vueApp;

window.SilverchatController = {
  updateSubpage(subpage) {
    vueApp.currentSubpage = subpage;
  },
  changePicture({data}) {
    vueApp.currentRemotePicture = data;
    setTimeout(() => {
      window.scroll({
        top: document.querySelector(".remote-img").offsetTop - 185,
        left: 0,
        behavior: 'smooth'
      });
    }, 300);
  }
};

export default {
  data(){
    return {
      instantCallButtonClicked: false,
      currentSubpage: null,
      currentRemotePicture: null
    };
  },
  created(){
    vueApp = this;
  },
  mounted() {
    Silverchat.init({roomId: process.env.VUE_APP_BOOKING_DEMO_ROOM_ID, selector: ".silverchat-location", isMicRequired: false});
  },
  methods: {
    clickDirectCall() {
      console.log('hello');
      this.instantCallButtonClicked = true
    }
  },
  computed: {
    appUrl() {
      return process.env.VUE_APP_APP_URL;
    }
  }
}
</script>

<style lang="scss" scoped>
//hsla(207, 20%, 20%, 1)
  @font-face {
      font-family: 'PantonBlack';
      src: url(/fonts/PantonBlack.otf)
  }
  .home {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .top {
    min-height: 93%;
    background:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;


    .login {
      position: absolute;
      top: 18.5px;
      right: 20px;
      text-decoration: none;
      color: hsla(210, 4%, 32%, 1);
      font-size: 18px;

      @media only screen and (min-width: 1080px) {
        right: 60px;
        font-size: 20px;
      }

    }

    .logo {
      margin-top: 60px;
      font-family: 'PantonBlack';
      font-size: 48px;
      line-height: 1.2em;

      @media only screen and (min-width: 720px) {
        margin-top: 30px;
      }
      @media only screen and (min-width: 1440px) {
        margin-top: 45px;
        font-size: 56px;
      }
      @media only screen and (min-width: 1680px) {
        margin-top: 60px;
        font-size: 66px;
      }

      .silver {
        color: #515f6b;
      }
      .chat {
        color: #26bf26;
      }
    }
    .subtitle {
      margin-top: 60px;
      line-height: 1.25em;
      font-size: 22px;
      text-align: center;
      @media only screen and (min-width: 1440px) {
        margin-top: 30px;
        font-size: 26px;
      }
      @media only screen and (min-width: 1680px) {
        margin-top: 40px;
        font-size: 28px;
      }
    }

    .direct-call {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      max-width: 360px;

      @media only screen and (min-width: 1440px) {
        margin-top: 80px;
        max-width: 420px;
      }
      @media only screen and (min-width: 1680px) {
        margin-top: 120px;
        max-width: 520px;
      }

      .silverchat-location {
        height: 60px;
        background: hsla(120, 91%, 34%, 1);

        @media only screen and (min-width: 1680px) {
          height: 72px;
        }
      }
    }

  }
  .remote-img {
    width: calc(100px + 72%);
  }
  .bottom {
    height: 7%;
    background: hsla(210, 14%, 6%, 1);
  }
</style>