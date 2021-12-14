<template>
  <Dashboard />
</template>

<script>
import Dashboard from '@/src/dashboard/index.vue'

export default {
  name: 'Index',
  components: {
    Dashboard
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>
