import { Component,Vue } from "vue-property-decorator";
import swal from "sweetalert";

@Component
export default class SignUp extends Vue {
    register(){
        swal("Welcome BookWorm!!","Registered successfully!","success").then(
           value=>{
                window.location.href="/login";
            }
        );
    };
    

}