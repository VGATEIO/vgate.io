<template>
  <div class="">
    <div class="secondary-button">
      <span>{{ footerName }}</span>
    </div>
    <div class="secondary-menu" role="menu">
      <div class="secondary-content" v-if="list.length">
        <div
          class="secondary-item-wrapper"
          v-for="(item, index) in list" 
          :key="index"
          v-if="item.type && item.type === 'outer'"
           >
          <a 
            class="secondary-item"
            target="_blank" 
            :href="item.to"
            >
            {{$t(`nav.${item.name}`)}}
          </a>
        </div>
        <div
          class="secondary-item-wrapper"
          v-if="item.type && item.type === 'inner'"
          v-for="(item, index) in list" 
          :key="index">
          <nuxt-link
            :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
            class="secondary-item">
            {{$t(`nav.${item.name}`)}}
          </nuxt-link>
        </div>
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
  
  .secondary-menu {
    .secondary-content {
      .secondary-item-wrapper {
        margin-bottom: 8px;
      }
      .secondary-item {
        font-size:14px;
        color: #5B6C94;
        &:hover {
          color: #5B6C94;
        }
      }
    }
  }
</style>
