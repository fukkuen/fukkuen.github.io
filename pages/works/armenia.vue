<template lang="pug">
	article.page
		header
			img(src="~/assets/armenia.jpg")
			h1 Armenia Walk
			h2 當時的頻率
		.section
			h3 About
			p It is a handwritten diary and a video documentary about my solo trip to Armenia
			h3 Initiative
			p 彷彿受到一種召喚及引力，獨自去一個中亞的國度成為了一種對自己的責任，否則我就不完整。2018年8月我都了亞美利亞，離開舒適圈，這趟旅程旨在探索、成長和自我對話，我也希望在這個時間(29 歲)留下我的經歷和想法，所以寫了日記，及後整理為一本小書。
			h3 Exhibition: Nothing Can Come Closer (無法取得位置)
			p It has already been two years and a half since my last piece. The current exhibition is stemmed from a journey a half year ago. To construct a part of “myself” from this experience is as critical as to create.
			p Traveling solo is such a dynamic trajectory of life - When you are on your own, without your family and a temporary work contract around you, what is left? Under such a situation, what are you looking for, what is the relationship between you and your journey, you and yourself? Sometimes, I am more interested in reading the diaries or autobiographies from an artist than his works, an honest trajectory is not less than the creation itself.
			p This exhibition is, yet, a combination of the two, I invited eight artists to showcase a work about traveling. Some works are inspired by reading, exchanging with others, artist in residency or simply a solo journey drifting around a foreign place. In their works, which aspect is more meaningful? To me, perhaps it’s a question yet to be answered by the audience.
			iframe(width="560" height="315" src="https://www.youtube.com/embed/6kH9GFzesng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
			.dl-row
				.dl-col.xs6
					img(src="~/assets/armenia-ex1.jpg")
				.dl-col.xs6
					img(src="~/assets/armenia-ex2.jpg")
			img(src="~/assets/armenia-ex3.jpg")

</template>

<script>
	export default {
		name: 'abc',

		head () {
			return {
				title: 'Armenia Walk'
			}
		}
	}
</script>

<style lang="stylus">
	.feature-img
		border-radius 8px
		margin 0 audo
		max-width 600px
</style>
