<template>
  <div class="products">
     <div class="container">
      
     <li v-for="book in booklist.collection" :key="book.Title" class="item-block" >
        <div v-if="bookTitle == book.Title" >

           <div class="book-item">
              <div class="imgdiv"><li><img :src="book.img" alt='book-image' class="image" /></li></div>
              <li class="title">{{book.Title}} </li>
              <li class="author">By: {{book.Author}} </li>
              <li class="price">Rs.{{book.Price}} </li>
              <div class="button">
              <li><button id="cart">Add to Cart</button></li>
              <li ><button id="wishlist">Wishlist</button></li>
              </div>
            </div>   
        </div>
      </li>
       </div>  
    </div>
</template>

<script lang="ts">
import Filter from "@/components/FilterComp/Filter";
export default Filter;

</script>