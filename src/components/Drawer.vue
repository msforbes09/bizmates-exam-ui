<template>
  <q-item clickable :to="link">
    <q-item-section avatar>
      <q-avatar color="teal-3" text-color="white">{{
        title.substring(0, 2)
      }}</q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
