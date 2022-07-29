import Vue from "vue";
import Vuex from "vuex";
import books from "@/assets/book_list.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booklist: books.collection,
    cartItemCount:0,
    wishlistItemCount:0,
    wishlistItems:[],
    cartItems: [],
    search:[]
  },
  

  
  mutations: {
    // filteredRecords(state:any,payload:any){
  
    //   const item:any = payload;
    //   if(state.search.length>0){
    //     const bool = state.search.some((i:any)=> i.Title === item.Title)
    //     if(bool){
    //       const itemIndex= state.search.findIndex((el:any)=> el.id === item.id)
    //       state.search[itemIndex];
    //     }
    //     else{
    //       state.search.push(item)
    //     }
        
    //   }
    //   else{
    //     state.search.push(item)
    //   }
    // },
   
  addtoCart(state:any,payload:any){
  
    let item:any = payload;
    item = {...item,quantity:1}
    if(state.cartItems.length>0){
      const bool = state.cartItems.some((i:any)=> i.id === item.id)
      if(bool){
        const itemIndex= state.cartItems.findIndex((el:any)=> el.id === item.id)
        state.cartItems[itemIndex]["quantity"]++;
      }
      else{
        state.cartItems.push(item)
      }
      
    }
    else{
      state.cartItems.push(item)
    }
    state.cartItemCount++

  },
  removeItem(state:any, payload){
    let item:any = payload;
    item = {...item,quantity:1}
    if(state.cartItems.length> 0){
      const bool= state.cartItems.some((i:any)=>i.id ===item.id)
      if(bool){
        const index= state.cartItems.findIndex((el:any)=>el.id=== item.id)
        if(state.cartItems[index]["quantity"]!==0){
        state.cartItems[index]["quantity"]-= 1
        state.cartItemCount--
        }
        if(state.cartItems[index]["quantity"]=== 0){
          state.cartItems.splice(index,1)
        }
      
    }

  }
  },
  addtoWishlist(state:any,payload:any){
    let itemwishlist:any = payload;
    itemwishlist = {...itemwishlist,quantity:1}
    if(state.wishlistItems.length>0){
      const bool = state.wishlistItems.some((a:any)=> a.id === itemwishlist.id)
      if(bool){
        const itemId= state.wishlistItems.findIndex((el:any)=> el.id === itemwishlist.id)
          state.wishlistItems[itemId]["quantity"]++;
      }
      else{
        state.wishlistItems.push(itemwishlist)
      }
      
    }
    else{
      state.wishlistItems.push(itemwishlist)
    }
    state.wishlistItemCount++

  },
  removeWishlist(state:any, payload){
    let itemwishlist:any = payload;
    itemwishlist = {...itemwishlist,quantity:1}
    if(state.wishlistItems.length> 0){
      const bool= state.wishlistItems.some((a:any)=>a.id ===itemwishlist.id)
      if(bool){
        const itemId= state.wishlistItems.findIndex((el:any)=>el.id=== itemwishlist.id)
        if(state.wishlistItems[itemId]["quantity"]!==0){
        state.wishlistItems[itemId]["quantity"]--
        state.wishlistItemCount--
        }
        if(state.wishlistItems[itemId]["quantity"]=== 0){
          state.wishlistItems.splice(itemId,1)
        }

    }

  }
  },
},
  actions: {
    addtoCart:(context,payload)=>{
      context.commit("addtoCart",payload)
    },
    removeItem:(context,payload)=>{
      context.commit("removeItem",payload)
  },
  addtoWishlist:(context,payload)=>{
    context.commit("addtoWishlist",payload)
  },
  removeWishlist:(context, payload)=>{
    context.commit("removeWishlist",payload)
  },
 
},
  modules: {},
});
