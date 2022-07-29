import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/NavbarComp/Navbar.vue";
import Footer from "@/components/footerComp/Footer.vue";
import books from "@/assets/book_list.json";
@Component({
    components: {
    'Navbar':Navbar,
    'Footer':Footer
    }
})
export default class BookDesc extends Vue {

    public booklist:any=[];
    public proId:any=[];

    mounted(){
        
        this.booklist=books;
        this.proId=this.$route.params.id;


    };
    computed(){
       this.booklist.map((srv: { img: any; })=> srv.img = require(`@/assets/${srv.img}`));
        return this.booklist;
        
    };
    goToHome()
            {
                this.$router.push('/'); 

            };
    addtoCart(bookid:any){
                this.$store.commit("addtoCart",bookid);
            };
     removeItem(bookid:any){
                this.$store.commit("removeItem",bookid);
            }
            
    

    
   
    
    
    
}