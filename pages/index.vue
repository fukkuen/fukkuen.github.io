<template lang="pug">
  .site
</template>

<script>
export default {
  fetch ({ redirect }) {
    return redirect("/works");
  }
}
</script>

<style lang="stylus">
  @import '../stylus/components/index.styl'
</style>
