const menus = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          products: []
        }
      ]
    case 'EDIT_MENU':
      return  state.map(menu =>
          (menu.id === action.id)
            ? {...menu, text:action.text}
            : menu
        )
    case 'DEL_MENU':
      state.splice(action.index, 1)
      return [...state]


    case 'ADD_PRODUCT' :
      return state.map(menu => {
      if (menu.id === action.id) {
        let newP = [...menu.products]
        newP.push({text:action.text, price:action.price});
        return {...menu, products: newP}
        } else {
          return menu
        }
      })

    case 'EDIT_PRODUCT':
    return state.map(menu => {
    if (menu.id === action.id) {
      let newP = [...menu.products]
      newP[action.index].text=action.text;
      return {...menu, products: newP}
      } else {
        return menu
      }
    })

    case 'EDIT_PRICE':
    return state.map(menu => {
    if (menu.id === action.id) {
      let newP = [...menu.products]
      newP[action.index].price=action.price;
      return {...menu, products: newP}
      } else {
        return menu
      }
    })

    case 'DEL_PRODUCT':
    console.log(action.index);
    return state.map(menu => {
    if (menu.id === action.id) {
      let newP = [...menu.products]
      newP.splice(action.index, 1);
      return {...menu, products: newP}
      } else {
        return menu
      }
    })

    default:
      return state
  }
}

export default menus
