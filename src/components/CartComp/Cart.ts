import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/NavbarComp/Navbar.vue";
import EmptyCart from "@/components/CartComp/EmptyCart.vue";
import Footer from "@/components/footerComp/Footer.vue";
import Summary from "@/components/CartComp/SummaryComp/Summary.vue";
import swal from "sweetalert";
@Component({
    components: {
    'Navbar':Navbar,
    'EmptyCart':EmptyCart,
    'Footer':Footer,
    'Summary':Summary
    }
})
export default class Cart extends Vue {
    get cartItems(){
        
       return this.$store.state.cartItems;
        
    };
    totalPrice(){
        let price=0;
        this.$store.state.cartItems.map((el:any)=>{
            price += el["quantity"] * el["Price"]
        });
        return price;
    };
   
    checkout(){
        swal("Good Job!","Your Order is placed successfully!","success").then(
           value=>{
                window.location.href="/cart";
            }
        );
    };
    addtoCart(bookid:any){
        this.$store.dispatch("addtoCart",bookid);
    };
    removeItem(bookid:any){
        this.$store.dispatch("removeItem",bookid);
 
    }
}
