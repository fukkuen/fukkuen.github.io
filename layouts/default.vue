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
				nuxt-link(to="/bio") IG
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
						background black
						width 6px
						height 6px
						border-radius 8px

	.site-main
		max-width 800px
		padding 20px 20px 40px 20px
		margin 0 auto

	.site-footer
		background #dadada
		text-align center
		font-size 11px
		padding 24px
</style>
