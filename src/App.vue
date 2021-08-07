<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  async mounted() {
    await this.$store.dispatch('main/getCategories')
  }
}
</script>
