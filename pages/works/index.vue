<template lang="pug">
  .site
    nuxt-link.work-item(v-for="(w,i) in list" :to="w.to" :key="i")
      .work-item__info {{w.meta}}
      .work-item__main
        .work-item__title {{w.title_zh}}
        .work-item__subtitle {{w.title_en}}
        img(:src="w.image").work-item__img
      .work-item__foot
        .dl-ac
          .work-item__headline {{w.headline_zh}} | {{w.headline_en}}
          // span ->
        .work-item__foot__year {{w.year}}

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data () {
    return {
      list: [
        {
          title_en: 'Armenia Walk',
          title_zh: '當時的頻率',
          headline_en: '',
          headline_zh: '有時候我會更有興趣看一位藝術家的日記和自傳多於他的作品',
          image: require('~/assets/armenia.jpg'),
          year: '2019 Feb',
          meta: 'Hand-written diary, video diary',
          to: '/works/armenia'
        },
        {
          title_en: '14 Recurrence',
          title_zh: '14迴',
          headline_en: '',
          headline_zh: '有時候我會更有興趣看一位藝術家的日記和自傳多於他的作品',
          image: require('~/assets/14-recurrence.jpg'),
          year: '2017 June',
          meta: 'Performance (with Namiji)',
          to: '/works/armenia'
        },
        {
          title_en: 'Present Continuous',
          title_zh: '現在進行',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/present-continuous-01.jpg'),
          year: '2016 Aug',
          meta: 'Solo Exhibition',
          to: '/works/present-continous'
        },
        {
          title_en: 'WCH Assemblage',
          title_zh: '黃竹坑聚疊',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/Assemblage.jpg'),
          year: '2015',
          meta: 'Solo Exhibition',
          to: '/works/armenia'
        },
        {
          title_en: 'WCH Assemblage Performance',
          title_zh: '黃竹坑聚疊',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/Assemblage.jpg'),
          year: '2015',
          meta: 'Solo Exhibition',
          to: '/works/armenia'
        },
        {
          title_en: 'Listen not Listen',
          title_zh: '聽到聽不到',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/listen-not-listen.jpg'),
          year: '20159月－20161月',
          meta: 'Solo Exhibition',
          to: '/works/armenia'
        },
        {
          title_en: '_scape',
          title_zh: '空景',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/animoscape2014_2.jpg'),
          year: '2014 Aug',
          meta: 'Sound Installation',
          to: '/works/armenia'
        },
        {
          title_en: 'The Telescope',
          title_zh: 'The Telescope',
          headline_en: 'Physical phenomenon with emotion',
          headline_zh: '能被體驗的物理現象',
          image: require('~/assets/the-telescope.jpg'),
          year: '2012 Aug',
          meta: 'Sound Installation',
          to: '/works/armenia'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/components/index.styl'
  .work-item
    max-width 680px
    margin 120px auto
    display block
    text-align left
    &__info
      text-transform uppercase
      font-size 10px
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
      margin-bottom 36px
      position relative
      z-index 1
      border-radius 8px
      font-size 12px
      line-height 1.2
      font-weight bold
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
      font-weight bold
    &__subtitle
      font-size 16px
</style>
