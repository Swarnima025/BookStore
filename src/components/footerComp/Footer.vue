<template>
    <footer>
        <div class="footer-container pt-5">
            <div class="row">
                <div class="col-md-3 col-6">
                    <ul style="list-style-type: none">
                        <li class="text-light font-weigh-bold pb-2">
                            Get to know us</li>
                        <li><a class="footer-link font-weight-light" href="#">
                            About us
                        </a> </li>
                        <li><a class="footer-link font-weight-light" href="#">
                            Android App
                        </a> </li>
                        <li><a class="footer-link font-weight-light" href="#">
                            Ios App </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 col-6">
                    <ul style="list-style-type: none">
                        <li class="text-light font-weigh-bold pb-2">
                            Connect with us</li>
                        <li><a class="footer-link font-weight-light" href="#">
                            About us
                        </a> </li>
                        <li><a class="footer-link font-weight-light" href="#">
                            Android App
                        </a> </li>
                        <li><a class="footer-link font-weight-light" href="#">
                            Ios App
                        </a> </li>
                    </ul>
                </div>
                
                <div class="rating">
                   <h5>How was your experience with the website?</h5> 
                    <button @click="rating()">Give us a rating!!</button>
                </div>

                
            </div>

        </div>
    </footer>
</template>

<script lang="ts">

        import Footer from "@/components/footerComp/Footer";
        export default Footer;

</script>

<style lang="less" src="@/components/footerComp/Footer.less">
</style>