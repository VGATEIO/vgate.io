<template>
  <div>
    <div class="secondary-button">
      <span>{{ $t(`nav.token`) }}</span>
    </div>
    <!-- <drop-nav 
      :footer-name="$t('nav.vote')"
      :secondary-list="navVoteList"></drop-nav> -->
    <footer-menu 
      :secondary-list="navTokenList">
    </footer-menu>
  </div>
</template>

<script type="text/babel">
import config from '~/config';
import FooterMenu from './FooterMenu.vue';
import DropNav from './DropNav.vue';

export default {
  components: { 
    FooterMenu,
    DropNav
  },
  props: {
  },
  computed:{
    url(){
      return {
        
      };
    }
  },
  data() {
    return {
      // navVoteList: config.navs.navVoteList,
      navTokenList: config.navs.navVoteList.concat(config.navs.navTokenList),
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";
  .secondary-button {
    color: #54565A;
    padding: 0 0 0 0;
    font-size:14px;
    font-family:$font-family-title;
    font-weight:600;
    line-height:20px;
    margin-bottom: 8px;
    &:focus {
      border: none;
      box-shadow: none;
    }
    &:hover {
      color: #54565A;
    }
  }
</style>
