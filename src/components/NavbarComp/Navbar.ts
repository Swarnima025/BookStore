import { Component, Vue } from "vue-property-decorator";
import books from "@/assets/book_list.json";
@Component
export default class Navbar extends Vue {
   public booklist:any=[];
   public items:any=[];
   public search='';

   
   public bookId:any=[];
   mounted(){
        
      this.booklist=books;
      this.bookId=this.$route.params.Title;
      
  };
  goToHome(){
       
          this.$router.push('/'); 

  };
      goToCart(){
                this.$router.push('/cart'); 
               
                   };

      goToWishlist(){
               this.$router.push('/wishlist'); 
                       
                };

      goToLogin(){
                this.$router.push('/login'); 
               };
         filteredRecords(){
      
                this.items=  this.booklist.collection.filter((item:any)=>item.Title.toLowerCase().includes(this.search.toLowerCase()))
                console.log(this.items);
                return(this.items);
               //  this.$emit('getData' ,this.items);
      //          filteredRecords(){
      //            return  this.$store.getters.filteredRecords;

                 
          }; 
           count(){
            return this.$store.state.cartItemCount;
           } 
           wishlistcount(){
            return this.$store.state.wishlistItemCount;
           }               
      }
  

     

