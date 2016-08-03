import { createSelector } from 'reselect'

const getFruits = state => state.fruits

const storeSelector = createSelector(
  getFruits,
  (fruits) => ({ fruits })
)

export default storeSelector
