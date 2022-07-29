<template>
    <div class="login" >
    <div class="login-wrapper">
        <div id="heading"><h2>Login</h2></div>
           <form  method="post" class="loginform">
             
                    <label for="uname"><b>Username</b></label>
                    <input type="text" class="input" placeholder="Enter Username" name="uname" required>

                   
                        <label for="psw"><b>Password</b></label>
                        <input type="type" class="input" placeholder="Enter Password" name="psw" required>
                        <!-- <button @click="password()">{{btntxt}}</button> -->
                    
                    <button type="submit" id="submit" @click="login()">Login</button>
                     <div class="link">
                        <router-link to="/forgot-password">Forgot password ?</router-link>
                        <router-link to="/signup">New User?</router-link>
                    </div>
           </form>
        </div>
    </div>
</template>
<script lang="ts">
import Login from "@/components/LoginPage/Login";
 
export default Login;
</script>
<style lang="less" src="@/components/LoginPage/Login.less"></style>