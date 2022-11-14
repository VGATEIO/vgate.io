<template>
  <div class="common-text">
    <div class="containner">
      <div class="main-title">{{ title }}</div>
      <div class="text-content" v-for="(item, index) in textList" :key="index">
        <div class="sub-title" v-if="item.subtitle">{{ item.subtitle }}</div>
        <div class="desc">
          <div 
            v-for="(desc, index) in item.list"  
            :key="index"
            v-if="item.list && item.list.length">
            <span v-html="desc" class="text-spec"></span>
          </div>
          <div class="ps">{{ item.ps }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      textList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars";

  .text-spec {
    a {
      color: #3273dc!important;
      &:hover {
        color: #3273dc!important;
      }
    }
  }
  .ps {
    margin-top: 10px;
  }
  .main-title {
    font-size:24px;
    font-family: $font-family-title;
    font-weight:600;
    color:rgba(50,50,92,1);
    line-height:36px;
    margin-bottom: 20px; 
  }
  .sub-title {
    font-size:16px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(91,108,148,1);
    line-height:22px;
    margin-bottom: 10px; 
  }
  .desc {
    font-size:14px;
    font-family:$font-family-main;
    font-weight:400;
    color:rgba(91,108,148,1);
    line-height:22px;
    padding-bottom: 20px;
  }
</style>
