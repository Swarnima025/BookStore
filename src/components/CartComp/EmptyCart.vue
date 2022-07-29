<template>
  <div class="emptycart">
    <div id="cart-empty"> <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg"/></div>
    <h2 id="empty">Your Cart is Empty</h2><br/>
    <h2 id="redirect">Go to HomePage to add items!!</h2>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less">
.emptycart{
    width: 100%;
    height: 100%;
   
}
#cart-empty{
    font-size: 100px;
    margin: 20px;
    
}
#empty{
    color:rgb(241, 11, 11);
    font-family: 'Times New Roman', Times, serif;
    margin-top:30px;

}
#redirect{
    color:rgb(3, 3, 77);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin:30px;
}

</style>