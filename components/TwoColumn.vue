<template>
  <div class="two-column is-flex" >
    <div class="two-column-mobile is-flex">
      <div 
        v-for="(item, index) in list" 
        :key="index" 
        class="two-column-item" 
        v-if="list.length">
        <div class="two-column__wrapper is-flex">
          <div class="two-column__content">
            <div class="two-column__title is-flex">
              <img :src="item.img"/>
              <div class="token-title">{{ $t(`votePage.project.${item.key}.title`) }}</div>
            </div>
            <div class="desc">{{ $t(`votePage.project.${item.key}.desc`) }}</div>
            <div class="is-flex btn-wrapper">
              <a :href="voteLink" target="_blank">
                <div class="btn ">{{ $t('votePage.btn') }}</div>
              </a>
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
      }
    },
    computed: {
      voteLink() {
        return this.$i18n.locale === 'zh' 
          ? 'http://vgateforum.mikecrm.com/0stu9cI'
          : 'https://docs.google.com/forms/d/1FI-R4T57Gh1WAp74qdw9PESC6U_oh00XgrLzCWHouiU/edit'
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

.two-column {
  margin-top: 60px; 
  
  // @include mobile {
  //   justify-content: center;
  //   align-items: center;
  // }
  .two-column-mobile {
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
  .two-column-item {
    margin-bottom: 30px;
    // @include mobile {
    //   box-sizing: border-box;
    //   margin-bottom: 50px;
    // }
  }
  
  
  .two-column__wrapper {
    border-left: 3px solid $common-active-color;
    box-shadow:0px 7px 24px 0px rgba(83,83,83,0.1);
    border-radius: 0 6px 6px 0;
    justify-content: center;
    width: 570px;
    height: 220px;
    .two-column__content {
      padding: 30px;
      box-sizing: border-box;
      position: relative;
    }
    
  }
  .two-column__title {
    line-height: 31px;
    .token-title {
      font-size:24px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(50,50,92,1);
    }
  }
  
  .desc {
    overflow-y: scroll;
    height: 44px;
    margin-top: 20px;
    font-size:14px;
    line-height:22px;
    margin-bottom: 20px;
    color:#5B6C94;
  }
  .btn-wrapper {
    justify-content: flex-end;
    .btn {
      width:160px;
      height:49px;
      line-height: 49px;
      text-align: center;
      color: white;
      background:$common-active-color;
      border-radius:5px;
    }
  }
}
</style>
