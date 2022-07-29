import { Component, Vue } from "vue-property-decorator";
import books from "@/assets/book_list.json";
@Component
export default class ItemCard extends Vue {

    public booklist:any=[];
    public search='';
    public items:any=[];
    
    
    


    mounted(){
        
        this.booklist=books;
    };
    computed(){
       this.booklist.map((srv: { img: any; })=> srv.img = require(`@/assets/${srv.img}`));
        return this.booklist;
    };
    About(proId: any){
        this.$router.push({name:'BookDesc',params:{id:proId}}); 
       
 };
 addtoCart(id:any){
    this.$store.commit("addtoCart",id);

};
addtoWishlist(id:any){
    this.$store.commit("addtoWishlist",id);
};
    
}


        