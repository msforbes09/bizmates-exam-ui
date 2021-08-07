<template>
  <q-page>
    <Search />
    <template>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          v-for="venue in venues"
          :key="venue.id"
          flat
          bordered
          class=" my-card"
        >
          <q-card-section>
            <div class="text-h6">{{ venue.name }}</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="text-subtitle2">{{ venue.address }}</div>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-page>
</template>

<script>
import Search from 'src/components/Search.vue'

export default {
  name: 'PageIndex',
  components: { Search },
  computed: {
    city() {
      return this.$store.getters['main/city']
    },
    weather() {
      return this.$store.getters['main/weather']
    },
    venues() {
      return this.$store.getters['main/venues']
    }
  },
  async mounted() {
    await this.$store.dispatch('main/getWeather', this.$route.params)
    await this.$store.dispatch('main/getVenues', this.$route.params)
  },
  watch: {
    '$route.params': {
      async handler(value) {
        await this.$store.dispatch('main/getWeather', value)
        await this.$store.dispatch('main/getVenues', this.$route.params)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
