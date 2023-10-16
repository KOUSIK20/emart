
//for add cart
export const addCart = (product) => {
  return{
    type: "ADDITEM",
    payload: product
  } 
}

//for minus item from cart

export const delCart = (product) => {
    return{
      type: "DELITEM",
      payload: product
    } 
  }

  // for remove item from cart
  export const remCart = (product) =>{
    return{
      type: "REMITEM",
      payload: product
    }
  }