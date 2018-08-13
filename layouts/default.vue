<template lang="pug">
  .site
    .site-header fukkuen
    nuxt
</template>

<style lang="stylus">
html
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

body
  padding 20px
  line-height 1.67

p
  margin-bottom 1em

*, *:before, *:after
  box-sizing: border-box;
  margin: 0;

.site
  margin 0 auto
  max-width 680px

  &-header
    text-align center
    margin 40px 0
    font-size 20px
</style>

