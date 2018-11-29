<template>
  <Row>
    <div class="wrapper">
      <h4>
        <Icon type="heart"></Icon>&nbsp;save
      </h4>
    </div>
    <div class="wrapper">
      <Input v-model="value1" @on-change="value1Change"></Input>
    </div>
    <div class="wrapper">
      <Input v-model="value2" @on-change="value2Change"></Input>
    </div>
  </Row>
</template>
<script>
  export default {
    name: "submit",
    data() {
      return {
        value1:'',
        value2:''
      }
    },
    methods:{
      value1Change:function() {
        let obj = this;
        this.$emit('value1', obj.value1);
      },
      value2Change:function() {
        let obj = this;
        this.$emit('value2', obj.value2);
      }
    }
  }
</script>
