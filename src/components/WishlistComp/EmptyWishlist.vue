<template>
  <div class="emptywishlist">
    <div id="wishlist-empty"> <font-awesome-icon icon="fa-regular fa-heart" size="lg" id="wishlist-heart"/> </div>
    <h2 id="empty">Your Wishlist is Empty</h2><br/>
    <h2 id="redirect">Go to HomePage to add items!!</h2>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less">
.emptywishlist{
    width: 100%;
    height: 100%;
   
}
#wishlist-empty{
    font-size: 100px;
    margin: 20px;
    
}
#wishlist-heart{
    font-weight: bolder;
    font-size: 100px;
    color: rgb(232, 72, 72);
    margin:20px;
}


</style>