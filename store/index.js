import Vuex from 'vuex';
import products from "./products";
import axios from "axios";

const store = () =>{
  return  new Vuex.Store({
        state: () => ({
            productSeller:[],
            productViewed:[],
        }),
        mutations: {
            setProductSeller(state,product){
                state.productSeller = product;
            },
            setProductViewed(state,obj){
                state.productViewed = [];
              
              
                if (localStorage.getItem("productViewed") !== null) {
                    state.productViewed = JSON.parse(localStorage.getItem("productViewed"));
                   
                    const checkDuplicateProductViewd = state.productViewed.find(val=> val.id == obj.id );
                    if(!checkDuplicateProductViewd){
                        state.productViewed.push(obj);
                        localStorage.setItem("productViewed", JSON.stringify(state.productViewed));
                    }
                    
                  } else {
                     state.productViewed.push(obj);
                    localStorage.setItem("productViewed", JSON.stringify(state.productViewed));
                  }
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){
                return  axios.get( "https://apiceleb.trungkienit.com/wp-json/wc/v3/products?consumer_key=ck_fe7141bf2f63c8ac3b453f98ffac5aeab778cc06&consumer_secret=cs_f934b0959423d9cf6c4c97f0ec23f1e6f92a44a1&category=30")
                .then(data => {
                    vuexContext.commit('setProductSeller',data.data);
                }).then(data=>{
                    console.log(data);
                })
                .catch(e=>context.e);
            },
            setProductSeller({commit},product){
                commit('setProductSeller',product);
            },
            setProductViewed({commit},obj){
                commit('setProductViewed',obj);
            },
            

        },
        getters: {
            getBestSellerProduct: (state) =>{
                return state.productSeller;
            },
            getProductViewd: (state) =>{
                return state.productViewed;
            }
          },
          modules:{
            products
          },
      })
}
export default store;