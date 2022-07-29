import { Component, Vue } from "vue-property-decorator";
import books from "@/assets/book_list.json";
@Component
export default class Filter extends Vue {

    public booklist:any=[];
    public bookTitle:any=[];

    mounted(){
        
        this.booklist=books;
        this.bookTitle=this.$route.params.Title;


    };
}