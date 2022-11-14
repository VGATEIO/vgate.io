<template>
  <div class="text-card">
    <div class="text__card-title">
      {{ title }}
    </div>
    <div class="text__card-content">
      <div class="text__card-explain">
        {{ explain }}
      </div>
      <div class="is-flex text__item">
        <div 
          class="name"
          v-for="(item, index) in textList" 
          :key="index" 
          v-if="textList.length">
          {{ item }}
          <img 
            class="item-img"
            :src="require(`~/assets/images/index/next.svg`)" 
            v-if="index + 1 !== textList.length"/>
        </div>
      </div>
      <nuxt-link
        :to="localePath(innerLink)" 
        v-if="innerLink">
        <div class="text__inner-link">
          {{ innerLinkName }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    explain: {
      type: String,
      default: ''
    },
    innerLinkName: {
      type: String,
      default: ''
    },
    innerLink: {
      type: String,
      default: ''
    },
    textList: {
      type: Array,
      default: () => []
    }
  },  
  data: function () {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";
.text-card {
  font-family:$font-family-title;
  .text__card-title {
    font-size:24px;
    font-weight:600;
    color: $content-title-color;
    line-height:36px;
  }
  .text__card-content {
    font-size:14px;
    line-height:18px;
    .text__card-explain {
      font-family: $font-family-main;
      line-height:22px;
      margin: 20px 0 10px;
    }
    .text__item {
      flex-wrap: wrap;
    }
    .name {
      font-family: $font-family-main;
      line-height: 40px;
    }
    .item-img {
      margin: 2px 6px;
    }
  }
  a {
    color: white;
  }
  .text__inner-link {
    margin-top: 30px;
    width:140px;
    height:48px;
    background:rgba(31,219,132,1);
    box-shadow:0px 8px 34px 0px rgba(31,219,132,0.6);
    border-radius:5px;
    line-height: 48px;
    text-align: center;
    
  }
}
</style>
