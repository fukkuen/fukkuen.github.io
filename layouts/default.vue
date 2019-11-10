<template lang="pug">
  div
    header
      h1 fukkuen.com
      nav
        nuxt-link(to="/works") works
        nuxt-link(to="/bio") bio
      main
        nuxt
</template>

<style lang="stylus">
  header
    padding 24px
    text-align center
    h1
      margin 8px
      font-size 12px

  nav
    margin 24px
    a
      padding 8px
</style>
