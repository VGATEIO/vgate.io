<template>
  <div>
    <three-column :list="list"></three-column>
    <nuxt-link :to="localePath('tokenList')">
      <div class="more">
        {{ $t('indexPage.token.more') }}
        <img src="~/assets/images/index/more.svg"/>
      </div>
    </nuxt-link>
  </div>
</template>

<script type="text/babel">
import ThreeColumn from "../../ThreeColumn.vue" 

export default {
  components: {
    ThreeColumn
  },
  data: function () {
    return {
    };
  },
  computed: {
    list() {
      return [{
        key: 'eth',
        img:  require('~/assets/images/index/eth.svg')
      }, {
        key: 'vite',
        img:  require('~/assets/images/index/eth.svg')
      }, {
        key: 'grin',
        img:  require('~/assets/images/index/eth.svg')
      }];
    }
  },
  methods: {
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";
.more {
  text-align: center;
  margin-top: 27px;
  margin-bottom: 88px;
  font-size:16px;
  font-family:$font-family-title;
  font-weight:600;
  color:$common-active-color;
  line-height:20px;
  img {
    margin-left: 6px;
    vertical-align: top;
  }
}
</style>
