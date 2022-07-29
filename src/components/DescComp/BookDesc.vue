<template>
  <div class="about">
    <Navbar/>
    <div id="about"><h2>Welcome to About Page</h2></div>
    <li v-for="book in booklist.collection" :key="book.Title" class="book-block" >
      <div v-if="proId == book.id" >
             <div class="book-desc"></div>
              <div ><li><img :src="book.img" alt='book-image' class="bookimage" /></li></div>
              <div class = "description">
              <li class="booktitle">{{book.Title}} </li>
              <li class="genre" >Genre:  {{book.Genre}} </li>
              <li class="publisher" >Publisher:  {{book.Publisher}} </li>
              <li class="desc" ><p>{{book.Desc}}</p></li>
             </div>
             <div>
              <button id="back" @click="goToHome()">Go Back</button>
              <button type="button"  id="back" @click="removeItem(book)"> Remove Item</button>
               <button type="button"   id="back" @click="addtoCart(book)" >Add Item</button>
             </div>
      </div>
    </li>
    <Footer/>
 </div>
</template>

<script lang="ts">
import BookDesc from "@/components/DescComp/BookDesc";

export default BookDesc;
</script>

<!-- <style lang="less" src="@/components/DescComp/BookDesc.less"></style> -->

