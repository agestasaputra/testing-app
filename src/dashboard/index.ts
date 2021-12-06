import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  useContext
} from '@nuxtjs/composition-api'
import DashboardDesktop from './desktop/index.vue'
import DashboardMobile from './mobile/index.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    DashboardDesktop,
    DashboardMobile
  },
  setup () {
    const context : any = useContext()
    const state = reactive({
      screen: 'desktop'
    })

    onMounted(() => {
      const pageType = context.$pageHandler()
      state.screen = pageType

      window.onresize = () => {
        onWindowChanged()
      }
    })

    function onWindowChanged () {
      const pageType = context.$pageHandler()
      state.screen = pageType
    }

    return {
      ...toRefs(state)
    }
  }
})
