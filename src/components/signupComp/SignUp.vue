<template>
    <div class="signup">
         <div class="signup-wrapper">
        <div id="heading"><h2>SignUp</h2></div>
           <form  method="post" class="signupform">
             
                    <label for="uname"><b>First Name</b></label>
                    <input type="text" class="input" placeholder="Enter Firstname" name="uname" required>
                    
                    <label for="uname"><b>Last Name</b></label>
                     <input type="text" class="input" placeholder="Enter Lastname" name="uname" required>
              

                    

                      <label for="email"><b>Email Address</b></label>
                    <input type="text" class="input" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" class="input" placeholder="Enter Password" name="psw" required>
                        
                       <div>
                            <button type="submit" id="submit" @click="register()">Register</button>
                        </div>
                    
           </form>
        </div>
    </div>
</template>
<script lang="ts">
import Signup from "@/components/signupComp/SignUp";
export default Signup;
</script>

<style  lang="less" scoped src="@/components/signupComp/SignUp.less"></style>
