<template>
  <div>
    <q-card bordered class="my-card" style="border-color: #1876D1">
      <q-card-section style="height: 190px; overflow:auto;">
        <q-item>
          <q-item-section>
            <div class="text-subtitle1 text-weight-medium">{{ title }}</div>
          </q-item-section>

          <q-item-section avatar>
            <q-avatar color="primary" size="70px">
              <img :src="icon" />
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-item>
          <div class="text-caption text-grey">{{ address }}</div>
        </q-item>
      </q-card-section>

      <q-separator color="primary" />

      <q-card-actions>
        <q-btn
          color="primary"
          class="full-width"
          rounded
          label="View Details"
          @click="getDetails"
          :loading="loading"
        />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="showDetails" v-if="venue">
      <q-card style="width: 600px; max-width: 90vw;">
        <q-img :src="venue.photo" style="max-height: 60vh" />

        <q-card-section>
          <q-btn
            v-if="venue.website"
            fab
            color="primary"
            icon="web"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            type="a"
            :href="venue.website"
            target="_blank"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ venue.name }}
            </div>
            <div
              class="col-auto text-grey text-body q-pt-md row no-wrap items-center"
            >
              <q-icon name="thumb_up" />
              {{ venue.likes + ' likes' }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-body1 text-grey">
            {{ venue.address }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-body2" v-for="(value, key) in contacts" :key="key">
            <span class="text-grey"> {{ key }} : </span>
            <span>{{ value }} </span>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
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
    },
    id: {
      type: String
    }
  },
  computed: {
    venue() {
      return this.$store.getters['main/venue']
    },
    contacts() {
      return this.$store.getters['main/venue']['contacts']
    }
  },
  data: () => ({
    showDetails: false,
    loading: false
  }),
  methods: {
    async getDetails() {
      this.loading = true
      await this.$store.dispatch('main/getVenue', this.id)
      this.showDetails = true
      this.loading = false
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 250px
</style>
