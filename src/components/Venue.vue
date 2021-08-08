<template>
  <q-card flat bordered class="my-card" style="border-color: #1876D1">
    <q-card-section style="height: 190px">
      <q-item>
        <q-item-section>
          <div class="text-subtitle1 text-weight-medium">{{ title }}</div>
        </q-item-section>

        <q-item-section avatar>
          <q-avatar color="teal-3" size="70px">
            <img :src="icon" />
          </q-avatar>
        </q-item-section>
      </q-item>

      <q-item>
        <div class="text-caption">{{ address }}</div>
      </q-item>
    </q-card-section>

    <q-separator color="primary" />

    <q-card-actions>
      <q-btn
        color="teal"
        outline
        class="full-width"
        rounded
        label="View Details"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'Venue',
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 250px
</style>
