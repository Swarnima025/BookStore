
import { Component, Vue } from "vue-property-decorator";
import swal from "sweetalert";

@Component
export default class Footer extends Vue {

 rating () {
swal({
  title: "Rate Us!",
  text: "Hope u like our website!",
  icon: "warning",
  buttons: ["Can do better!", "Exceptional!"],
  dangerMode: false,
})
.then((happy) => {
  if (happy) {
    swal("Wohooo!!! Thanks for your valuable feedback!", {
      icon: "success",
    });
  } else {
    swal("Thanks for your rating! We will live upto your expectations soon!");
  }
});
 
}
 

}
