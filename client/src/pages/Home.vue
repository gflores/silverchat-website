<template lang="pug">
  .home
    header
      img.logo(src="images/logo.png")
    .flex
      section.s1
        .title Speak and sell<br/>to your traffic
        .subtitle Instant voice or video calls from anyone visiting your website.
        //- iframe.direct-call(:class="instantCallButtonClicked ? 'active' : ''" width="600px" height="600px" src="http://localhost:3000/play/xrp/client" allow="camera;microphone")
        iframe.direct-call(:class="instantCallButtonClicked ? 'active' : ''" width="600px" height="600px" :src="icLandingUrl" allow="camera;microphone")
        .fine-text Currently in closed beta
      section.s2
        .coming-soon Coming Soon...

    //- iframe(width="600px" height="600px" src="https://app.silverchat.co/play/xrp/client" allow="camera;microphone")

</template>

<script>


export default {
  data(){
    return {
      instantCallButtonClicked: false
    };
  },
  mounted() {
    setTimeout(() => {
      console.log("XX: ", process.env);

      focus();
      var listener = addEventListener('blur', () => {
        if (document.activeElement.className == "direct-call") {
          console.log("CLICK !!!");
          this.instantCallButtonClicked = true;
        }
      });
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
      font-family: 'PantonBlack';
      src: url(/fonts/PantonBlack.otf)
  }
  .home {
    height: 100%;
    position: absolute;
  }
  header {
    display: flex;
    align-items: center;
    height: 62px;
    box-sizing: border-box;
    padding: 20px;
    background: hsla(210, 4%, 90%, 1);

    .logo {
      height: 22px;
      // padding: 6px 5px;
      // border: hsl(207, 10%, 53%) 2px solid;
      // border-radius: 6px;
    }
  }
  .flex {
    display: flex;
    flex-direction: column;
    height: calc(100% - 62px);
  }

  section {
    padding: 40px 20px;

    .direct-call {
      margin-top: 40px;
      // background: hsla(120, 91%, 34%, 1);
      width: 100%;
      height: 55px;
      border: 0;
      border-radius: 2px;
      transition: height 1s;

      &.active {
        height: 355px;
      }
    }

    &.s1 {
      .title {
        font-family: 'PantonBlack';
        font-size: 34px;
        color: #26292c;
        text-align: center;
        line-height: 1.2em;
      }
      .subtitle {
        margin-top: 20px;
        font-family: 'Source Sans Pro', sans-serif;
        color: #26292c;
        font-size: 20px;
        line-height: 1.5em;
        text-align: center;
      }

      .fine-text {
        margin-top: 20px;
        font-family: 'Source Sans Pro', sans-serif;
        color: #26292c;
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
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      font-weight: bold;
      padding: 0;
    }

  }
</style>