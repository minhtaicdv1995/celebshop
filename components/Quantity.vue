<template>
     <div class="quantity-toggle">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
</template>


<script>
export default {
    data () {
    return {
      quantity: 1
    }
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        
      } else {
        this.quantity--
      }
    }
  }
}
</script>
<style  scoped>
 
  
  .quantity-toggle{
display: flex;
  }
 .quantity-toggle input {
    border: 0;
   border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
    width:100%;
     font-size: 16px;
     font-weight: bold;
  }
  
  .quantity-toggle button {
   border: 1px solid #ddd;
    padding: .5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 16px;
    cursor: pointer;
  }
  .quantity-toggle button:hover {
    background: #f15e2c;
    color: #fff;
}

</style>