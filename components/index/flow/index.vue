<template>
  <section>
    <div 
      class="flow__common is-flex" 
      v-for="(item, index) in list" 
      :key="index"
      :id="item">
      <img :src="require(`~/assets/images/index/flow${index+1}.svg`)" />
      <text-card 
        :class="`mt flow__${item}-text`"
        :title="$t(`indexPage.flow.${item}.title`)"
        :explain="$t(`indexPage.flow.${item}.explain`)"
        :text-list="$t(`indexPage.flow.${item}.textList`)"
        :inner-link-name="$t(`indexPage.flow.${item}.btn`)"
        :inner-link="link[item].to">
      </text-card>
    </div>
  </section>
</template>

<script type="text/babel">
import textCard from './textCard';

export default {
  components: {
    textCard
  },
  data: function () {
    return {
      list: ['vote', 'pay'],
    };
  },
  computed: {
    link() {
      return {
        vote: {
          to: 'voteApplication'
        },
        pay: {
          to: 'pay'
        }
      };
    }
  },
  methods: {
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";

section {
  img {
    width: 540px;
    margin-top: -50px;
    // @include touch {
    //   width: 480px;
    // }
    // @include mobile {
    //   width: 350px;
    //   margin-bottom: 30px;
    // }
  }
  .flow__common {
    margin-top: 90px; 
    // @include mobile {
    //   flex-direction: column;
    // }
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    // @include mobile {
    //   &:nth-child(odd) {
    //     flex-direction: column;
    //   }
    // }
    img {
      align-self: center;
    }
  }
  .flow__pay-text {
    margin-left: 50px; 
    // @include mobile {
    //   margin-left: 0px; 
    // }
  }
  .flow__vote-text {
    margin-right: 50px; 
    // @include mobile {
    //   margin-right: 0px; 
    // }
  }
}
</style>
