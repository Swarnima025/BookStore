import { Component, Vue } from "vue-property-decorator";
import swal from "sweetalert";

@Component
export default class Login extends Vue {
   public type='password';
   public btntxt='show';
    login(){
        swal("Welcome Back!!","Successfully Logged in!","success").then(
           value=>{
                window.location.href="/";
            }
        );
    };
    // password(){
    //     if(this.type === 'password'){
    //         this.type= 'text';
    //         this.btntxt='hide';
    //     }
    //         else{
    //             this.type='password';
    //             this.btntxt='show';
    //         }
    //         }
}
    
