<template>
<div class="wishlist">
    <Navbar/>
    <h2>My Wishlist</h2>
     <div v-if="quantity()!== 0">

            <table>
                    <tr v-for="favbook in wishlistItems" :key="favbook.id" >
                        <div class="display">
                           <td> <img  class="favbook" :src="favbook.img"/></td>
                           <td><h5>{{favbook.Title}}</h5></td>
                           <td><h5>Rs.{{favbook.Price}}</h5></td>
                           <td><button type="button" class="removewishlist" @click="removeWishlist(favbook)">Remove from Wishlist</button></td>
                        </div>
                        
                    </tr>
            </table>

    </div> 
    <EmptyWishlist v-else/>
    <Footer/>

</div>
</template>

<script lang="ts">
import Wishlist from "@/components/WishlistComp/Wishlist";
export default Wishlist;
</script>
<style  lang="less" scoped src="@/components/WishlistComp/Wishlist.less"></style>
