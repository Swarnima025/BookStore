<template>
    <div class="container">
      <div class="logo"  @click="goToHome()">
      <font-awesome-icon icon="fa-solid fa-book-open" size="2x"/>
      <h3 id="logoname">BOOKSTORE</h3>
      </div> 
       <div class="search">
        <input type="text" class="searchinput" placeholder="SEARCH FOR BOOKS..." v-model="search" />
        <div id="searchicon" @click="filteredRecords()" ><font-awesome-icon icon="fa-solid fa-magnifying-glass" color="white" size="lg"  /></div> 
        <div v-for="item in items" :key="item.Title">
          {{item.Title}}
          
      </div> 
      </div>     
      <div class="icons">
          <div class="wrapper">
            <i id="cart-navbar"> <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" @click="goToCart()"/></i>
            <span class="cart-count">{{count()}}</span>
         </div>
          <div class="wrapperwishlist">
             <i id="heart"> <font-awesome-icon icon="fa-regular fa-heart" size="lg" @click="goToWishlist()"/> </i>
             <span class="cart-count">{{wishlistcount()}}</span>
          </div>

          <div> <button  @click="goToLogin()">LOGIN</button></div>
      </div>
      
    </div>
</template>

<script lang="ts">
import Navbar from "@/components/NavbarComp/Navbar";
export default Navbar;
</script>

<style  lang="less" scoped src="@/components/NavbarComp/Navbar.less"></style>

