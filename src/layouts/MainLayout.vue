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
    icon: 'school',
    link: 'tokyo'
  },
  {
    title: 'Yokohama',
    icon: 'code',
    link: 'yokohama'
  },
  {
    title: 'Kyoto',
    icon: 'chat',
    link: 'kyoto'
  },
  {
    title: 'Osaka',
    icon: 'record_voice_over',
    link: 'osaka'
  },
  {
    title: 'Sapporo',
    icon: 'rss_feed',
    link: 'sapporo'
  },
  {
    title: 'Nagoya',
    icon: 'public',
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
  }
}
</script>
