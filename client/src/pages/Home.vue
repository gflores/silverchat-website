<template lang="pug">
  .home
    header
      img.logo(src="images/logo.png")
    .flex
      section.s1
        .title Convert traffic into sales calls
        .subtitle Direct voice or video calls from anyone visiting your website.
        .direct-call Direct Call
      section.s2
        .coming-soon Coming Soon...

    //- iframe(width="600px" height="600px" src="https://app.silverchat.co/play/xrp/client" allow="camera;microphone")

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @font-face {
      font-family: 'PantonExtraBold';
      src: url(https://d26ik0aqrns2ec.cloudfront.net/Panton/ExtraBold.eot), url(https://d26ik0aqrns2ec.cloudfront.net/Panton/ExtraBold.otf), url(https://d26ik0aqrns2ec.cloudfront.net/Panton/ExtraBold.woff2), url(https://d26ik0aqrns2ec.cloudfront.net/Panton/ExtraBold.ttf), url(https://d26ik0aqrns2ec.cloudfront.net/Panton/ExtraBold.woff)
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
    height: calc(100% - 72px);
  }

  section {
    padding: 40px 20px;

    .direct-call {
      background: green;
      width: 100%;
    }

    &.s1 {
    }

    &.s2 {
      display: flex;
      justify-content: center;
      align-items: center;
      background: grey;
      flex-grow: 1;
    }

  }
</style>