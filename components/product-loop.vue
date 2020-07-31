<template>
  <div class="thumbnail">
    
    <div class="cont-item">
    
      <div class="soldout-text"   v-if="product.stock_status == 'outofstock'">HẾT HÀNG</div>
     <nuxt-link class="black-rect" :to="'/products/' + product.id" :title="product.name"  v-if="product.stock_status == 'outofstock'">
     </nuxt-link>
      <nuxt-link :to="'/products/' + product.id" :title="product.name">
        <img v-if="product.images.length > 0" :src="product.images[0].src" :alt="product.name" />
        <svg v-else class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M324.5 212.7H203c-1.6 0-2.8 1.3-2.8 2.8V308c0 1.6 1.3 2.8 2.8 2.8h121.6c1.6 0 2.8-1.3 2.8-2.8v-92.5c0-1.6-1.3-2.8-2.9-2.8zm1.1 95.3c0 .6-.5 1.1-1.1 1.1H203c-.6 0-1.1-.5-1.1-1.1v-92.5c0-.6.5-1.1 1.1-1.1h121.6c.6 0 1.1.5 1.1 1.1V308z"></path><path d="M210.4 299.5H240v.1s.1 0 .2-.1h75.2v-76.2h-105v76.2zm1.8-7.2l20-20c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l1.5 1.5 16.8 16.8c-12.9 3.3-20.7 6.3-22.8 7.2h-27.7v-5.5zm101.5-10.1c-20.1 1.7-36.7 4.8-49.1 7.9l-16.9-16.9 26.3-26.3c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l27.5 27.5v7.8zm-68.9 15.5c9.7-3.5 33.9-10.9 68.9-13.8v13.8h-68.9zm68.9-72.7v46.8l-26.2-26.2c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-26.3 26.3-.9-.9c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-18.8 18.8V225h101.4z"></path><path d="M232.8 254c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.7 8.3 8.3 8.3zm0-14.9c3.6 0 6.6 2.9 6.6 6.6s-2.9 6.6-6.6 6.6-6.6-2.9-6.6-6.6 3-6.6 6.6-6.6z"></path></svg>
     <div class="button" v-show="buyNow" v-if="product.stock_status !== 'outofstock'">
         <span class="btn btn-prd1-buynow hidden-xs hidden-sm">MUA NGAY</span>
       </div>
      </nuxt-link>
    </div>

    <div class="caption">
      <nuxt-link :to="{name:'products',params: {id: product.id}}" :title="product.name">
        <h3 class="name">{{product.name}} {{product.id}}</h3>
        <!--
        <h3 class="color" v-if="product.attributes.length > 0">{{product.attributes[0].options[0]}}</h3>
       -->

        <h3 class="price">
          {{formatPrice(product.price)}}đ
          <span
            class="price-real"
            v-if="product.on_sale"
          >{{formatPrice(product.regular_price)}}đ</span>
        </h3>
       
      </nuxt-link>
    </div>
     
  </div>
</template>

<script>
export default {
  props: ["product","buyNow"],
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

