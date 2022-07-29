<template>
  <div class="home">
    <Navbar/>
    <ItemCard/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/NavbarComp/Navbar.vue"; // @ is an alias to /src
import ItemCard from "@/components/ItemCardComp/ItemCard.vue";
import Footer from "@/components/footerComp/Footer.vue";
export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
    ItemCard,
    Footer,
},
});
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
}
</style>

