<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Weather App
        </q-toolbar-title>

        <div v-if="weather" class="text-weight-medium">
          <span>{{ city }}, JP: </span>
          <span>{{ weather.feels_like }} <span>&#176;</span> C</span>
          <q-avatar>
            <img :src="weather.icon" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <Drawer
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from 'src/components/Drawer.vue'

const linksData = [
  {
    title: 'Tokyo',
    link: 'tokyo'
  },
  {
    title: 'Yokohama',
    link: 'yokohama'
  },
  {
    title: 'Kyoto',
    link: 'kyoto'
  },
  {
    title: 'Osaka',
    link: 'osaka'
  },
  {
    title: 'Sapporo',
    link: 'sapporo'
  },
  {
    title: 'Nagoya',
    link: 'nagoya'
  }
]

export default {
  name: 'MainLayout',
  components: { Drawer },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
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
