<template lang="pug">
  .site
    .work-item
      .work-item__info Solo Exhibition
      .work-item__main
        .work-item__title Present Continuous
        .work-item__subtitle 現在進行
        img(src="~/assets/present-continuous-01.jpg").work-item__img
      .work-item__foot
        .dl-ac
          .work-item__headline 能被體驗的物理現象 ｜Physical Phenomenon with emotion
          span ->
        .work-item__foot__year 2018

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
  @import '../stylus/components/index.styl'
  .work-item
    max-width 680px
    margin 48px auto
    display block
    text-align left
    &__info
      text-transform uppercase
      font-size 11px
      margin-bottom 16px
      color #8e8e8e
    &__main
      background #F6F6F6
      position relative
      margin 0 24px 0 0
      padding 56px 56px 72px 56px
      border-radius 8px
    &__foot
      background #fefefe
      min-height 56px
      padding 24px 56px 24px 56px
      margin-left 112px
      margin-top -32px
      position relative
      z-index 1
      border-radius 8px
      font-size 12px
      line-height 1.2
      &__year
        position absolute
        left 56px
        padding 16px 24px
        border-radius 8px
        bottom -32px
        background #b5b5b5
        color white

    &__img
      width 200px
      border-radius 8px
      position absolute
      right 56px
      top -32px
    &__title
      letter-spacing 2px
      font-size 24px
</style>
