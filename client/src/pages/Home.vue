<template lang="pug">
  div
    header
      span Silverchat
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
  header {
    height: 72px;
    padding: 20px;
  }
  section {
    padding: 40px 20px;

    .direct-call {
      background: green;
      width: 100%;
    }

    &.s2 {
      background: grey;
    }

  }
</style>