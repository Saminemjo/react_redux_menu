import { combineReducers } from 'redux'
import menus from './menus'
import visibilityFilter from './visibilityFilter'

const menuApp = combineReducers({
  menus,
  visibilityFilter
})

export default menuApp
