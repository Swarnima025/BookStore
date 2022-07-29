<template>
    <div class="products">
     <div class="container">
      
      <li v-for="book in booklist.collection" :key="book.title" class="item-block" >
           <div class="book-item">
              <div class="imgdiv"><li ><img :src="book.img" alt='book-image' class="image" @click="About(book.id)"/></li></div>
              <li class="title">{{book.Title}} </li>
              <li class="author">By: {{book.Author}} </li>
              <li  class="book-desc"> <div class="overflow-ellipsis">{{book.Desc}}<span class="tooltiptext">tooltip</span></div></li>
              <li class="price">Rs.{{book.Price}} </li>
              <div class="button">
              <li><button id="cart"  @click="addtoCart(book)">Add to Cart</button></li>
              <li ><button id="wishlist" @click.once="addtoWishlist(book)">Wishlist</button></li>
              </div>
            </div>   
      </li>
     
     </div>  
    </div>
</template>
<script lang="ts">
import ItemCard from "@/components/ItemCardComp/ItemCard";
export default ItemCard;

</script>
<style lang="less" src="@/components/ItemCardComp/ItemCard.less"></style>