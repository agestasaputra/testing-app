<template>
  <div>
    <!-- <index-desktop v-if="!isMobile" />
    <index-mobile v-else /> -->
    <Dashboard />
    <!-- <h1> hai </h1> -->
  </div>
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
