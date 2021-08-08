<template>
  <div class="row">
    <div class="q-pa-sm col-xs-12">
      <q-select
        outlined
        dense
        behavior="dialog"
        v-model="category"
        color="teal"
        :options="categories"
        option-label="name"
        option-value="id"
        label="Select Category"
      >
        <template v-slot:append v-if="category">
          <q-avatar color="teal-3">
            <img :src="category.icon" />
          </q-avatar>
        </template>
      </q-select>
    </div>
    <div class="q-pa-sm col-xs-12">
      <q-select
        outlined
        dense
        :disable="!category"
        behavior="dialog"
        color="teal"
        v-model="sub_category"
        :options="sub_categories"
        option-label="name"
        option-value="id"
        label="Select Sub-category"
      >
        <template v-slot:append v-if="sub_category">
          <q-avatar color="teal-3">
            <img :src="sub_category.icon" />
          </q-avatar>
        </template>
      </q-select>
    </div>
    <div class="q-pa-sm col-xs-12">
      <q-input
        outlined
        dense
        color="teal"
        debounce="500"
        v-model="search"
        label="Search"
      >
        <template v-slot:append>
          <q-icon name="search" color="teal-3" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    city() {
      return this.$store.getters['main/city']
    },
    categories() {
      return this.$store.getters['main/categories']
    }
  },
  data: () => ({
    search: '',
    category: null,
    sub_category: null,
    sub_categories: []
  }),
  watch: {
    async category(value) {
      this.sub_category = null

      if (value) {
        console.log(value.icon)
        this.sub_categories = value.sub_categories
        await this.$store.dispatch('main/getVenues', {
          city: this.city,
          category: value.id,
          q: this.search
        })
      }
    },
    async sub_category(value) {
      if (value) {
        await this.$store.dispatch('main/getVenues', {
          city: this.city,
          category: value.id,
          q: this.search
        })
      }
    },
    async search(value) {
      let category = this.sub_category ?? null

      if (!category) {
        category = this.category ?? null
      }

      await this.$store.dispatch('main/getVenues', {
        city: this.city,
        category: category ? category.id : null,
        q: value
      })
    }
  }
}
</script>
