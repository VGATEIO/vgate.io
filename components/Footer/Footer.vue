<template>
  <footer class="footer">
    <div class="container footer-content is-flex">
      <div class="left">
        <img src="~/assets/images/logo_footer.svg"/>
        <div class="logo is-flex">
          <div class="logo-item" v-for="(item, index) in logoList" :key="index">
            <a :href="item.url" target="_blank">
              <img :src="item.img"/>
            </a>
          </div>
        </div>
      </div>
      <div class="right is-flex">
        <a
          href="http://x.vite.net"
          target="_blank"
          class="nav-item single-nav">
          {{$t(`nav.transaction`)}}
        </a>
        <a
          href="https://vgate.zendesk.com"
          target="_blank"
          class="nav-item single-nav">
          {{$t(`nav.support`)}}
        </a>
        <div class="nav-item footer-item">
          <token-nav></token-nav>
        </div>
        <div class="nav-item footer-item">
          <footer-menu 
            :footer-name="$t(`nav.explain`)"
            :secondary-list="navExplainList">
          </footer-menu>
        </div>
      </div>
    </div>
    <div class="bottom">
      © 2018-2019 VGATE. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
  import FooterMenu from "./FooterMenu.vue";
  import TokenNav from "./TokenNav.vue";
  import config from "~/config";
  
  export default {
    components: {
      FooterMenu,
      TokenNav
    },
    data() {
      return {
        navs: ['transaction'],
        navExplainList: config.navs.navExplainList
      };
    },
    computed: {
      logoList() {
        return [{
          img: require('~/assets/images/index/twitter.svg'),
          url: 'https://twitter.com/VGATE2'
        }, {
          img: require('~/assets/images/index/discord.svg'),
          url: 'https://discord.gg/rrSRqWt'
        }, {
          img: require('~/assets/images/index/forum.svg'),
          url: 'https://forum.vite.net/user/vgate'
        }, {
          img: require('~/assets/images/index/email.svg'),
          url: 'mailto:vgateservice@gmail.com'
        }];
      } 
    },
    methods: {
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   @import "~assets/css/vars";
   .footer-item {
     align-items: start;
   }
  .footer {
    background-color: white;
    padding: 57px 0 30px;
    .footer-content {
      justify-content: space-between;
    }
    .logo {
      margin-top: 30px;
      .logo-item {
        margin-right: 22px;
      }
    }
    .single-nav {
      color: #54565A;
      align-items: start;
      font-size:14px;
      font-family:$font-family-title;
      font-weight:600;
      line-height:20px;
    }
    .bottom {
      margin-top: 30px;
      text-align: center;
      font-size:13px;
      font-family: $font-family-main;
      font-weight:400;
      color:rgba(91,108,148,1);
      line-height:18px;
    }
  }
</style>
