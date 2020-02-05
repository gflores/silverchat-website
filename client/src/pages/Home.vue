<template lang="pug">
  .home
    header
      img.logo(src="images/logo.png")
      a.login(:href="appUrl") Login
    .flex
      section.s1
        .title Unlock your website's full potential
        .subtitle Interact with your visitors in real-time
        .direct-call
          .silverchat-location
        .subtitle Instant voice and video calls to your traffic.
        //- .fine-text(v-if="instantCallButtonClicked == false") Try instant calling !
      section.s2
        .coming-soon Contact: <b>+65 8138 3605</b><br/><br/>Take control of your customer engagement
      

    //- iframe(width="600px" height="600px" src="https://app.silverchat.co/play/xrp/client" allow="camera;microphone")

</template>

<script>


export default {
  data(){
    return {
      instantCallButtonClicked: false
    };
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
  header {
    display: flex;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    padding: 0px 20px;
    background: hsla(210, 4%, 90%, 1);
    justify-content: space-between;

    @media only screen and (min-width: 720px) {
      padding: 0px 50px;
    }

    .logo {
      height: 20px;
    }
    .login {
      text-decoration: none;
      color: #26292c;
      font-size: 18px;
    }
  }
  .flex {
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
  }
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  // @keyframes background-fade-out {
  //   from {background: hsla(120, 91%, 34%, 1);}
  //   to {background: initial}
  // }
  section {
    padding: 40px 20px;

    .direct-call {
      margin-top: 40px;
      width: 100%;
      max-width: 360px;
      // transition: height 1s;
      // animation: fade-in 2s, background-fade-out 5s ease-in;

      animation: fade-in 2s;
      &.active {
        height: 355px;
      }
      .silverchat-location {
        height: 55px;
        background: hsla(120, 91%, 34%, 1);
      }
    }

    &.s1 {
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-family: 'PantonBlack';
        font-size: 34px;
        text-align: center;
        line-height: 1.2em;
        max-width: 500px;
      }
      .subtitle {
        margin-top: 20px;
        font-size: 20px;
        line-height: 1.5em;
        text-align: center;
      }

      .fine-text {
        margin-top: 20px;
        font-size: 14px;
        line-height: 1.5em;
        text-align: center;
      }
    }

    &.s2 {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #7c8994;
      flex-grow: 1;
      color: #e5e6e7;
      font-size: 20px;
      // font-weight: bold;
      padding: 20px;
      text-align: center;
    }

  }
</style>