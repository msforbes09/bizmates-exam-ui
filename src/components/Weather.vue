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
          <div class="col-xs-12 col-md-5">
            <div class="text-subtitle2 text-red text-center">
              {{ weather.date_time }}
            </div>
            <div class="text-h5 text-grey-9 text-center">{{ city }}, JP</div>
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
        <q-btn
          color="primary"
          flat
          label="Weather Forecast"
          @click="checkForecast"
          :loading="showWeatherForecastLoading"
        />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="showWeatherForecast">
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="q-py-none">
          <q-table
            hide-header
            flat
            :data="weatherForecast"
            :columns="columns"
            row-key="date_time"
            :pagination="pagination"
            :rows-per-page-options="[10]"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="time" :props="props" style="width: 30%">
                  <span class="text-caption">
                    {{ props.row.date_time }}
                  </span>
                </q-td>

                <q-td key="temp" :props="props" style="width: 30%">
                  <q-avatar style="margin-top: -10px; margin-bottom: -10px">
                    <img :src="props.row.icon" />
                  </q-avatar>
                  {{
                    props.row.temp_min != props.row.temp_max
                      ? props.row.temp_min + '/' + props.row.temp_max
                      : props.row.temp_min
                  }}
                  <span>&#176;</span> C
                </q-td>

                <q-td key="desc" :props="props" style="width: 40%">
                  <span class="text-caption">
                    {{ props.row.description }}
                  </span>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-dialog>
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
    },
    weatherForecast() {
      return this.$store.getters['main/weatherForecast']
    }
  },
  data: () => ({
    showWeatherForecast: false,
    showWeatherForecastLoading: false,
    columns: [
      {
        name: 'time',
        align: 'left'
      },
      {
        name: 'temp',
        align: 'left'
      },
      {
        name: 'desc',
        align: 'left'
      }
    ],
    pagination: {
      page: 1,
      rowsPerPage: 10
    }
  }),
  methods: {
    async checkForecast() {
      this.showWeatherForecastLoading = true
      await this.$store.dispatch('main/getWeatherForecast', {
        city: this.city.toLowerCase()
      })
      this.showWeatherForecast = true
      this.showWeatherForecastLoading = false
    }
  }
}
</script>
