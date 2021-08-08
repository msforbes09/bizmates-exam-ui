<template>
  <q-dialog v-model="show">
    <q-card style="width: 400px; max-width: 90vw;">
      <q-card-section class="q-pa-md">
        <div class="text-h6">Select City To Start</div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section class="q-pa-sm">
        <q-list>
          <Drawer v-for="link in cities" :key="link.title" v-bind="link" />
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import Drawer from 'src/components/Drawer.vue'

export default {
  name: 'Selection',
  components: { Drawer },
  computed: {
    cities() {
      return this.$store.getters['main/cities']
    }
  },
  data: () => ({
    show: true
  })
}
</script>
