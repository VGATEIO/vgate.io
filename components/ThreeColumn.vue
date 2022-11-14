<template>
  <div class="three-column is-flex" >
    <div class="three-column-mobile is-flex" :class="{'three-column-spec': isCustom, 'three-column-more': isMore}">
      <div 
        v-for="(item, index) in list" 
        :key="index" 
        class="three-column-item" 
        v-if="list.length">
        <div class="three-column__wrapper is-flex">
          <div class="three-column__content">
            <a :href="item.website" target="_blank">
              <div class="three-column__title is-flex">
                <img :src="item.img" width="30px" height="30px"/>
                <div class="token-title">{{ $t(`indexPage.token.${item.key}.title`) }}</div>
              </div>
            </a>
            <div class="desc">{{ $t(`indexPage.token.${item.key}.desc`) }}</div>
            <div class="link-wrapper is-flex">
              <div class="link-content" v-for="(txPair, index) in item.txPairs" :key="index" v-if="item.txPairs && item.txPairs.length">
                <a :href="txPair.link" target="_blank">
                  <div class="btn">{{ txPair.name }}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      },
      isCustom: {
        type: Boolean,
        default: false
      },
      isMore: {
        type: Boolean,
        default: false
      }
    },
  
    data: function () {
      return {
        
      };
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";

.three-column {
  margin-top: 60px; 
  
  // @include mobile {
  //   justify-content: center;
  //   align-items: center;
  // }
  .three-column-mobile {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    // @include mobile {
    //   flex-direction: column;
    //   width: 360px;
    //   max-height: 750px;
    //   overflow-y: scroll;
    // }
  }
  .three-column-item {
    margin-bottom: 45px;
    // @include mobile {
    //   box-sizing: border-box;
    //   margin-bottom: 50px;
    // }
  }
  
  
  .three-column__wrapper {
    border-top: 3px solid $common-active-color;
    box-shadow:0px 7px 24px 0px rgba(83,83,83,0.1);
    border-radius: 0 0 6px 6px;
    justify-content: center;
    width: 360px;
    min-height: 312px;
    .three-column__content {
      padding: 40px;
      padding-bottom: 20px;
      box-sizing: border-box;
      position: relative;
    }
    
  }
  .three-column__title {
    justify-content: center;
    line-height: 31px;
    img {
      height: 30px;
      width: 30px;
    }
    .token-title {
      margin-left: 16px;
      font-size:24px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(50,50,92,1);
    }
  }
  
  .desc {
    overflow-y: scroll;
    height: 93px;
    margin-top: 30px;
    font-size:14px;
    line-height:22px;
    margin-bottom: 21px;
  }
  .link-wrapper {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .btn {
    width:135px;
    height:30px;
    background:rgba(31,219,132,0.1);
    border-radius:5px;
    border:1px solid rgba(111,222,170,1);
    line-height: 27px;
    text-align: center;
    color: #1FDB84;
    margin-bottom: 10px;
    font-size:12px;
    font-weight:600;
  }
  .three-column-spec {
    justify-content: flex-start;
    .three-column-item {
      margin-right: 25px;
      // @include mobile {
      //   margin-right: 0px; 
      // }
    }
  }
  .three-column-more {
    flex-wrap: wrap;
    justify-content: flex-start;
    .three-column-item {
      margin-right: 25px; 
      margin-bottom: 25px;
      // @include mobile {
      //   margin-right: 0px; 
      //   margin-bottom: 0px;
      // }
    }
  }
}
</style>
