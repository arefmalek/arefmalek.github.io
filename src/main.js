import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue} from 'bootstrap-vue'

// icons for social links page
import {BIcon, BIconGithub, BIconLinkedin, BIconYoutube, BIconPencil, BIconMusicNote} from 'bootstrap-vue'
// needed for nicer cards
import { BCard } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// icons for social link thing
Vue.component("BIcon", BIcon)
Vue.component("BIconGithub", BIconGithub)
Vue.component("BIconLinkedin", BIconLinkedin)
Vue.component("BIconPencil", BIconPencil)
Vue.component("BIconMusicNote", BIconMusicNote)
Vue.component("BIconYoutube", BIconYoutube)
Vue.component('b-card', BCard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')