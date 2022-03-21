<template>
  <v-row>
    <v-col v-for="pitch in pitches" :key="pitch.title" cols="4">
      <v-card>
        <v-card-title>
          {{ pitch.title }}
        </v-card-title>

        <v-card-text>
          {{ pitch.body }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Pitch } from '@@/src/modules/pitch/domain/Pitch'

export default Vue.extend({
  name: 'ArticleList',
  props: {
    pitches: {
      type: Array,
      required: true
    } as PropOptions<Pitch[]>
  }
})
</script>

<style scoped>

</style>
