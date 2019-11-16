import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import '../icons'
console.log('hi')
Vue.use(SvgIcon, {
	tagName: 'dl-icon',
	classPrefix: 'dl',
	defaultWidth: '1em',
	defaultHeight: '1em'
})
