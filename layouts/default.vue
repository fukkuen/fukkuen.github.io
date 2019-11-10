<template lang="pug">
  div
    header
      h1
        nuxt-link(to="/") fukkuen.com
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
      letter-spacing 1px
      margin 8px
      font-size 12px

  nav
    margin 24px
    a
      padding 8px
      &.nuxt-link-active
        font-weight bold

  main
    max-width 800px
    margin 0 auto

  p
    margin 16px 0
    &:first-child
      margin-top 0
    &:last-child
      margin-bottom 0
</style>
