<template>
  <div>
    <dashboard-desktop v-if="screen === 'desktop'" />
    <dashboard-mobile v-if="screen === 'mobile'" />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped src="./index.scss" />
