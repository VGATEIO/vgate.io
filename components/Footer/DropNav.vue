<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="lang-dropdown-menu">
        <span >{{ footerName }}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content" v-if="list.length">
        <a 
          class="dropdown-item" 
          target="_blank" 
          :href="item.to"
          v-for="(item, index) in list" 
          :key="index"
          v-if="item.type && item.type === 'outer'"
          >
          {{$t(`nav.${item.name}`)}}
        </a>
        <nuxt-link
          :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
          class="dropdown-item" 
          v-for="(item, index) in list" 
          :key="index"
          v-if="item.type && item.type === 'inner'">
          {{$t(`nav.${item.name}`)}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  // secondaryList   item {type: inner/outer, name: xxx, to: xxx}
  import config from '~/config';

  export default {
    props: {
      footerName: {
        type: String,
        default: ''
      },
      secondaryList: {
        type: Array,
        default: ()=> []
      }
    },
    computed: {
      list() {
        return this.secondaryList;
      }
    },
    data () {
      return {
        voteMap: config.urls.vote
      };
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars";

  .lang-btn {
    .dropdown-trigger {
      .btn__click {
        color: #5B6C94;
        &:hover {
          color:#5B6C94;
        }
      }
      button {
        font-size: 14px;
        height: 1em;
        color: #5B6C94;
        background: transparent;
        padding: 0 0 0 0;
        border-radius: 0.35rem;
        border: transparent;
        font-family: $font-family-light;
        &:focus {
          border: none;
          box-shadow: none;
        }
        &:hover {
          color: #5B6C94;
        }
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: #5B6C94;
          &:hover {
            color: $common-active-color
          }
        }
      }
    }
  }
</style>
