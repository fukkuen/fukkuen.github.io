<template lang="pug">
  .work-list
    router-link(:to="{name: 'works-id', params: {id: work.id}}").work-item(v-for="work in works" :key="work.id")
      h3 {{work.title}}
      p {{work.location}} | {{work.time}}
</template>

<script>
  export default {
    computed: {
      works () {
        return this.$store.state.works
      }
    }
  }
</script>
