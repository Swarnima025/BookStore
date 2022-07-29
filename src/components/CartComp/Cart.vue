<template>
<div class="shoppingcart">
    <Navbar/>
     <h3 >My Cart</h3>
    <div class="mycart" v-if="totalPrice() !== 0 ">
                
                <div class="cart-body">
                    <h4>Cart</h4>
                    <ul>
                        <li v-for="items in cartItems" :key="items.id" id="final-purchase">
                            <div class="display">
                                <img :src="items.img"/>
                                <h5>{{items.Title}}</h5>
                                <div>
                                    <button class="remove" type="button" @click="removeItem(items)">-</button>
                                    <span class="quantity">{{items.quantity}}</span>
                                    <button class="add" type="button" @click="addtoCart(items)">+</button>
                                </div>
                                <h5>{{items.Price}}</h5>
                            </div>
                        </li>
                    </ul>
                 </div>
                  <div class="summary">
                    <h4>Summary</h4>
                    <Summary v-bind:totalPrice="totalPrice()"/>
                    <div>
                        <button id="checkout" @click="checkout">Checkout</button>
                    </div>

                 </div>
  

        
    </div>
   <EmptyCart v-else/>
    <Footer/>

</div>
</template>

<script lang="ts">
import Cart from "@/components/CartComp/Cart";
export default Cart;
</script>

<style lang="less" src="@/components/CartComp/Cart.less"></style>
