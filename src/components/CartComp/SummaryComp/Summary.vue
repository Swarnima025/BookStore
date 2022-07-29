<template>
  <div class="display">
   <table >
     <tr>
         <td><h4>Total:</h4></td>
         <td><h4>Rs.{{totalPrice}}</h4></td>
    </tr>
     <tr>
         <td><h4>PromoCode:</h4></td>
         <td><h4>BOOKSTORE</h4></td>
    </tr>
     <tr>
         <td><h4>Shipping:</h4></td>
         <td><h4>Rs.50</h4></td>
    </tr>
     <tr>
         <td><h4>SubTotal:</h4></td>
         <td><h4>Rs.parseInt(totalPrice)+parseInt(shipping) </h4></td>
    </tr>
    </table>
    </div> 
</template>

<script lang="ts">
import Summary from "@/components/CartComp/SummaryComp/Summary";
export default Summary;
</script>

<style lang="less" scoped src="@/components/CartComp/SummaryComp/Summary.less"></style>

