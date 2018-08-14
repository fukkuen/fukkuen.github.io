<template lang="pug">
  div
    h3 {{work.title}}
    p {{work.location}} | {{work.time}}
    p(v-html="work.content")
</template>

<script>
  export default {
    computed: {
      work () {
        return this.$store.getters.writing(parseInt(this.$route.params.id)) || {}
      }
    }
  }
</script>
