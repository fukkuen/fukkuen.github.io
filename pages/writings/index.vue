<template lang="pug">
  .work-list
    router-link(:to="{name: 'writings-id', params: {id: work.id}}").work-item(v-for="work in writings" :key="work.id")
      h3 {{work.title}}
      p {{work.location}} | {{work.time}}
</template>

<script>
  export default {
    computed: {
      writings () {
        return this.$store.state.writings
      }
    }
  }
</script>
