<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h3 class="text-h3">
        Pitches
      </h3>
    </v-col>
    <v-col v-if="error">
      <v-alert type="error">
        {{ error }}
      </v-alert>
    </v-col>

    <v-col v-else-if="loading">
      <v-subheader>Loading Articles ...</v-subheader>
      <v-progress-linear indeterminate />
    </v-col>

    <v-col v-else>
      <article-list :pitches="pitches" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import ArticleList from '../components/ArticleList.vue'

export default {
  name: 'IndexPage',
  components: { ArticleList },
  computed: {
    ...mapState('pitch', ['pitches', 'error', 'loading'])
  },
  async mounted () {
    await this.$store.dispatch('pitch/getRecentPitches')
  }
}
</script>
