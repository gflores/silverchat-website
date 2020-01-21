<template lang="pug">
  .home
    header
      .logo Silverchat
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
  .home {
    height: 100%;
    position: absolute;
  }
  header {
    padding: 20px;
    .logo {
      height: 32px
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