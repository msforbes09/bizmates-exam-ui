<template>
  <div class="row q-pa-sm">
    <q-card
      v-if="weather"
      flat
      bordered
      style="width: 100%; border-color: #1876D1;"
    >
      <q-card-section>
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <div class="text-subtitle2 text-red">
              {{ weather.date_time }}
            </div>
            <div class="text-h4 text-grey-9">{{ city }}, JP</div>
          </div>
          <div class="col-sm-12 col-md-7">
            <q-item dense>
              <q-item-section avatar>
                <q-avatar size="75px">
                  <img :src="weather.icon" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <div class="text-h4 text-weight-medium text-grey-9">
                  {{ weather.feels_like }} <span>&#176;</span> C
                </div>
                <div class="text-subtitle2">{{ weather.description }}</div>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>

      <q-separator color="primary" />

      <q-card-actions align="right">
        <q-btn color="primary" flat label="Weather Forecast" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  computed: {
    city() {
      return this.$store.getters['main/city'].toUpperCase()
    },
    weather() {
      return this.$store.getters['main/weather']
    }
  }
}
</script>
