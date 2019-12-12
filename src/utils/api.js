import {
  _getCategories,
  _getItems,
  _saveItem,
  _getSuperUsers,
  _saveCategory
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getCategories(),
    _getItems(),
    _getSuperUsers(),
  ]).then(([categories, items]) => ({
    categories,
    items,
  }))
}

export function saveCategory (category) {
  return _saveCategory(category)
}


export function saveItem (info) {
  return _saveItem(info)
}