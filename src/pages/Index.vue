<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Weather />
      </div>
      <div class="col-xs-12 col-sm-6">
        <Search />
      </div>
    </div>

    <div class="row">
      <div
        class="q-pa-sm col-xs-12 col-sm-6 col-md-4"
        v-for="venue in venues"
        :key="venue.id"
      >
        <Venue
          :title="venue.name"
          :address="venue.address"
          :icon="venue.category_image"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import Search from 'src/components/Search.vue'
import Venue from 'src/components/Venue.vue'
import Weather from 'src/components/Weather.vue'

export default {
  name: 'PageIndex',
  components: { Search, Venue, Weather },
  computed: {
    city() {
      return this.$store.getters['main/city'].toUpperCase()
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
        await this.$store.dispatch('main/getVenues', value)
      }
    }
  }
}
</script>
