<template>
  <div 
    class="public"
    :class="`is-${routeName}-public`">
    <div 
      class="navbar headroom"
      :class="`is-${routeName}-header`">
      <div 
        class="container"
        :class="{ 'is-open': navbarActive }"
        @click="onNavClick">
        <no-ssr>
          <div class="navbar-brand">
            <div @click="onLogoClick">
              <nuxt-link
                class="navbar-item nav-item"
                :to="localePath('index')">
                <logo-without-words class="logo"></logo-without-words>
              </nuxt-link>
            </div>
            <!-- <div
              class="navbar-burger"
              @click="onBurgerClick">
              <span></span>
              <span></span>
              <span></span>
            </div> -->
          </div>
        </no-ssr>
        <div
          class="navbar-menu"
          :class="{ 'is-active': navbarActive, collapsing: collapsing }">
          <div class="navbar-end">
            <a
              href="http://x.vite.net"
              target="_blank"
              class="nav-item single-nav">
              {{$t(`nav.transaction`)}}
            </a>
            <nuxt-link
              :key="item"
              :to="localePath(item)"
              class="nav-item"
              :class="{'active': routeName === item}"
              v-for="item in navs">
              {{$t(`nav.${item}`)}}
            </nuxt-link>
            <div class="nav-item">
              <secondary-menu 
                :footer-name="$t(`nav.vote`)"
                :secondary-list="navVoteList">
              </secondary-menu>
            </div>
            <a
              href="https://vgate.zendesk.com"
              target="_blank"
              class="nav-item single-nav">
              {{$t(`nav.support`)}}
            </a>
            <div class="nav-item">
              <secondary-menu 
                :footer-name="$t(`nav.explain`)"
                :secondary-list="navExplainList">
              </secondary-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
      class="nuxt-content"
      :class="`is-${routeName}-page`">
      <nuxt :keep-alive="true" />
    </div>
    <vite-footer></vite-footer>
  </div>
</template>

<script>
import viteFooter from "~/components/Footer/Footer.vue";
import logoWithoutWords from "~/components/logoWithoutWords.vue";
import SecondaryMenu  from "~/components/SecondaryMenu.vue";
import LangSelect from "~/components/LangSelect.vue";
import config from "~/config";

export default {
  components: {
    logoWithoutWords,
    viteFooter,
    LangSelect,
    SecondaryMenu
  },
  head() {
    let { routeName } = this;
    let title = this.$t(`nav.${routeName}`) + ' - ' + this.$t('head.title');
    return {
      title
    };
  },
  computed: {
    routeName () {
      if (!this.$route || !this.$route.name) return 'index';
      return this.$route.name.split('__')[0];
    },
  },
  data() {
    return {
      navExplainList: config.navs.navExplainList,
      navVoteList: config.navs.navVoteList,
      urls: config.urls,
      navs: ['tokenList', 'pay'],
      navbarActive: false,
      collapsing: false
    };
  },
  methods: {
    onNavClick (e) {
      let { target } = e;
      if (
        target &&
        target.className &&
        typeof target.className === 'string' &&
        target.className.indexOf('nav-item') > -1
      ) {
        this.navbarActive = false;
      }
    },
    onLogoClick () {
      this.navbarActive = false;
    },
    onBurgerClick () {
      this.collapsing = true;
      this.navbarActive = !this.navbarActive;
      setTimeout(() => {
        this.collapsing = false;
      }, 500);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";
.logo {
  margin-top: 6px;
}
.navbar {
  padding-top: 30px;
  border-bottom: 1px solid transparent;
  z-index: 222222;
  background-color: $background-color;
  @include mobile {
    padding-top: 20px;
  }
  // &.headroom--not-top {
  //   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  //   background: white;
  // }
  .container {
    @include mobile {
      display: flex;
    }
  }
  .navbar-brand {
    height: 66px;
    .nav-item {
      height: 100%;
      background-color: transparent;
      cursor: pointer;
    }
  }
  .navbar-menu {
    @include mobile {
      margin-right: -.75rem;
      flex-grow: 1;
      flex-shrink: 0;
      align-items: stretch;
      display: flex;
      background-color: transparent;
      box-shadow: none;
      padding: 0 0;
    }
  }
  .navbar-end {
    @include mobile {
      justify-content: flex-end;
      margin-left: auto;
      align-items: stretch;
      display: flex;
    }
  }
  
  .nav-item-logo {
    padding: 0 57px 0 0;
  }
  .navbar-item  {
    padding: 0 0 0 10px;
  }
}

.is-index-header {
  background-color: transparent;
}
.nuxt-content {
  background-color: $background-page-color;
}
</style>
