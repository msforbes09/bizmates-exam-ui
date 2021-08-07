<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        rounded
        outlined
        v-model="category"
        :options="categories"
        option-label="name"
        option-value="id"
        label="Select Category"
      />
      <q-select
        rounded
        outlined
        v-model="sub_category"
        :options="sub_categories"
        option-label="name"
        option-value="id"
        label="Select Sub-category"
      />
      <q-input
        rounded
        outlined
        debounce="500"
        v-model="search"
        label="Search"
      />
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
