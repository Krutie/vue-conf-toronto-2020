import Vue from 'vue'

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/angle-left'
import 'vue-awesome/icons/angle-right'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/pencil-alt'
import 'vue-awesome/icons/hand-pointer'
import 'vue-awesome/icons/link'
import 'vue-awesome/icons/brands/github'

/* Register component globally */
import Icon from 'vue-awesome/components/Icon.vue'

Vue.component('icon', Icon)
