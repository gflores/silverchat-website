<template lang="pug">
  .home
    .top
      a.login(:href="appUrl") Login

      .logo
        span.silver Silver
        span.chat chat
      .subtitle Unlock your website's full potential
      .direct-call
        .silverchat-location

    .bottom
</template>

<script>


export default {
  data(){
    return {
      instantCallButtonClicked: false
    };
  },
  created() {
    Silverchat.init({roomId: process.env.VUE_APP_ROOM_ID, selector: ".silverchat-location", isMicRequired: false});
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
  .bottom {
    height: 7%;
    background: hsla(210, 14%, 6%, 1);
  }







  // header {
  //   display: flex;
  //   align-items: center;
  //   height: 60px;
  //   box-sizing: border-box;
  //   padding: 0px 20px;
  //   background: hsla(210, 4%, 90%, 1);
  //   justify-content: space-between;

  //   @media only screen and (min-width: 720px) {
  //     padding: 0px 50px;
  //   }

  //   .logo {
  //     height: 20px;
  //   }
  //   .login {
  //     text-decoration: none;
  //     color: #26292c;
  //     font-size: 18px;
  //   }
  // }
  // .flex {
  //   display: flex;
  //   flex-direction: column;
  //   height: calc(100% - 60px);
  // }
  // @keyframes fade-in {
  //   from {opacity: 0;}
  //   to {opacity: 1;}
  // }
  // // @keyframes background-fade-out {
  // //   from {background: hsla(120, 91%, 34%, 1);}
  // //   to {background: initial}
  // // }
  // section {
  //   padding: 40px 20px;

  //   .direct-call {
  //     margin-top: 40px;
  //     width: 100%;
  //     max-width: 360px;
  //     // transition: height 1s;
  //     // animation: fade-in 2s, background-fade-out 5s ease-in;

  //     animation: fade-in 2s;
  //     &.active {
  //       height: 355px;
  //     }
  //     .silverchat-location {
  //       height: 55px;
  //       background: hsla(120, 91%, 34%, 1);
  //     }
  //   }

  //   &.s1 {
  //     background: white;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;

  //     .title {
  //       font-family: 'PantonBlack';
  //       font-size: 34px;
  //       text-align: center;
  //       line-height: 1.2em;
  //       max-width: 500px;
  //     }
  //     .subtitle {
  //       margin-top: 20px;
  //       font-size: 20px;
  //       line-height: 1.5em;
  //       text-align: center;
  //     }

  //     .fine-text {
  //       margin-top: 20px;
  //       font-size: 14px;
  //       line-height: 1.5em;
  //       text-align: center;
  //     }
  //   }

  //   &.s2 {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     background: #7c8994;
  //     flex-grow: 1;
  //     color: #e5e6e7;
  //     font-size: 20px;
  //     // font-weight: bold;
  //     padding: 20px;
  //     text-align: center;
  //   }

  // }
</style>