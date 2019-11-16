<template lang="pug">
	div
		header.site-header
			h1
				nuxt-link(to="/") fukkuen
			nav
				nuxt-link(to="/works") works
				nuxt-link(to="/blog") blog
				nuxt-link(to="/sounds") sounds
				nuxt-link(to="/bio") bio
				// nuxt-link(to="/bio")
				a(href="https://www.instagram.com/fukkuen33" target="_blank").ig-btn
					dl-icon(name="ig")
		main.site-main
			nuxt
		footer.site-footer © 2019 fukkuen.com
</template>

<style lang="stylus">
	@import '../stylus/components'
	.site-header
		padding 24px
		text-align center
		h1
			font-size 1rem
			letter-spacing 1px

		nav
			display flex
			align-items center
			justify-content center
			a
				display inline-block
				padding 8px 16px
				position relative
				&.nuxt-link-active
					&:before
						position absolute
						bottom 0
						left 50%
						margin-left -3px
						content ''
						display block
						background alpha(black, .6)
						width 6px
						height 6px
						border-radius 8px
			.ig-btn
				fill #808080
				display flex

	.site-main
		max-width 800px
		padding 20px 20px 40px 20px
		margin 0 auto
		@media(max-width 600px)
			padding-top 0

	.site-footer
		background #dadada
		text-align center
		font-size 11px
		padding 24px
</style>
