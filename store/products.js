const products = {
    namespaced: true,
    state: () => { 
        const state = {
          products:[
              {
                  abc:123
              }
          ]
        }
        return state;
      
     },
    mutations: {  
        setProduct(state,product){
            state.products = product;
        }
     },
    actions: { 
       
     },
    getters: { 
        getBestSellerProduct: (state) =>{
            return state.products;
        }
     }
  }


export default products;