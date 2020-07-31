<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{open: open}" @click="open = !open">{{ selected }}</div>
    <div class="items" :class="{selectHide: !open}">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; $emit('input', option)"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.selected {
 
  border: 1px solid #858586;
      border-radius: 0px;
    background-color: #fff;
    border: #a5a5a5 1px solid;
    font-family: NunitoSanExtraBold;
    font-size: 16px;
  padding-left: 15px;
  padding-right: 25px;
  cursor: pointer;
  user-select: none;
  

}

.selected.open {
     -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
}

.selected:after {
  position: absolute;
  content: "";
      top: 50%;
    transform: translateY(-50%);
  right: 10px;

  border-color: #fff transparent transparent transparent;
  width:20px ;
  height: 20px;
   background: #fff url(../assets/images/icon_down_black.png) no-repeat 96% center /
      12px auto;
}

.items {
  overflow: hidden;
  border-right: 1px solid #808080 ;
  border-left: 1px solid #808080 ;
  border-bottom: 1px solid #808080 ;
  position: absolute;
  left: 0;
  right: 0;
  z-index:2;
  background: #fff;
  color:#000;

    padding: 5px 1px 5px 6px;
    display: flex;
    flex-wrap: wrap;
}

.item {
  cursor: pointer;
  user-select: none;
      width: 25%;
    float: left;
        text-align: center;
    font-size: 16px;
    border: #808080 1px solid;
    margin-left: -1px;
    margin-bottom: -1px;
}

.item:hover {
  background-color: #f5f5f5;
}

.selectHide {
  display: none;
}
</style>