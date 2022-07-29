import { Component,Prop, Vue } from "vue-property-decorator";

@Component
export default class Summary extends Vue {
    @Prop() totalPrice!:number;
    public shipping=50;
    

 
     };

    
    

