import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/NavbarComp/Navbar.vue";
import EmptyWishlist from "@/components/WishlistComp/EmptyWishlist.vue";
import Footer from "@/components/footerComp/Footer.vue";
@Component({
    components: {
    'Navbar':Navbar,
    'EmptyWishlist':EmptyWishlist,
    'Footer':Footer
    }
})
export default class Wishlist extends Vue {   
   get wishlistItems(){
    
        return this.$store.state.wishlistItems;
        
     };
     removeWishlist(favbook:any){
        this.$store.dispatch("removeWishlist",favbook);
    };
     quantity(){
         let quantity=0;
         this.$store.state.wishlistItems.map((el:any)=>{
             quantity = el["quantity"];
         });
         return quantity;
     };
    
}

   