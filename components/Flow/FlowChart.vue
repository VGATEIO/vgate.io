<template>
  <div>
    <div class="flow-title">{{ title }}</div>
    <div class="flow-content">
      <div class="is-flex">
        <div class="flow-wrapper" v-for="(item, index) in list" :key="index">
          <div class="flow-item is-flex">
            <img :src="item.img"/>
            <img 
              class="link" 
              src="~/assets/images/vote/link.svg"
              v-if="index + 1 !== list.length"/>
          </div>
          <div class="flow-text">
            <div class="text-text">{{ $t(`${keyStr}.${item.key}.desc`) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      list: {
        type: Array,
        default: () => []
      },
      keyStr: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
      };
    },
    watch: {
      keyStr(val) {
        console.log(val);
      }
    },
    computed: {
    },
    methods: {
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars";
  .flow-title {
    margin: 0 0 30px 0;
    font-size:24px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(50,50,92,1);
    line-height:36px;
  }
  .flow-content {
    padding-bottom: 40px;
  }
  .link {
    margin: 0 21px;
  }
  .flow-wrapper {
    .flow-text {
      text-align: center;
      margin-left: -30px;
      margin-top: 28px;
      font-size:14px;
      font-family:$font-family-main;
      font-weight:400;
      color:rgba(50,50,92,1);
      line-height:22px;
      .text-text {
        max-width: 160px;
      }
      &:last-of-type {
        width: 160px;
      }
    }
    
  }
  
</style>
