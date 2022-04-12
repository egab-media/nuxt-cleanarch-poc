import {
  GetterTree,
  ActionTree,
  MutationTree
} from 'vuex'
import { PitchEntity } from '@@/src/firebase/functions/src/app/modules/pitch/domain/PitchEntity'

export const state = () => ({
  loading: false,
  pitches: [] as PitchEntity[],
  error: null as string | null
})

type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  totalPitches: state => state.pitches.length
}

export enum MutationTypes {
  GET_RECENT_PITCHES = 'GET_RECENT_PITCHES',
}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  createPitch({ commit }, pitch: PitchEntity) {
    const ref = this.$fire.firestore
      .collection('pitches')

    ref.add(pitch)
  }
}
