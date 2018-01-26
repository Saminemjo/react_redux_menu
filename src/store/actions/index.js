let nextMenuId = 0
export const addMenu = text => {
  return {
    type: 'ADD_MENU',
    id: nextMenuId++,
    text
  }
}
export const editMenu = (id, text) => {
  console.log(id,text);
  return {
    type: 'EDIT_MENU',
    id,
    text
  }
}

export const delMenu = index => {
  return {
    type: 'DEL_MENU',
    index
  }
}
export const addProduct = (id, text, price) => {
  return {
    type: 'ADD_PRODUCT',
    id,
    text,
    price
  }
}
export const editProduct = (id, index, text) => {
  return {
    type: 'EDIT_PRODUCT',
    id,
    index,
    text
  }
}
export const editPrice = (id, index, price) => {
  return {
    type: 'EDIT_PRICE',
    id,
    index,
    price
  }
}
export const delProduct = (id, index) => {
  return {
    type: 'DEL_PRODUCT',
    id,
    index
  }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
