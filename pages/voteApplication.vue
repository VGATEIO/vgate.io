<template>
  <div class="vote-application-page">
    <div class="page-title">
      <div class="container">
        {{ this.$t('voteApplicationPage.title') }}
      </div>
    </div>
    <div class="container">
      <flow-chart :list="list" keyStr="vote" :title="title" class="mt"></flow-chart>
      <common-text :text-list="textList" :title="textTitle"></common-text>
      <div class="submit-wrapper">
        <a :href="applyForm" target="_blank">
          <div class="submit">
            {{ this.$t('payPage.submit') }}
          </div>
        </a>
      </div>
    </div>
  </div>
  
</template>

<script type="text/babel">
  import FlowChart from "~/components/Flow/FlowChart.vue";
  import CommonText from "~/components/CommonText.vue";

  export default {
    components: {
      FlowChart,
      CommonText
    },
    data: function () {
      return {
        textTitle: this.$t('voteApplicationPage.explain.title'),
        title: this.$t('vote.title'),
        applyForm: this.$i18n.locale == 'en'? 'https://forms.gle/jrJy72BdqZdyUP6KA':'https://forms.gle/kM7YvrJeAQmLfJoE8'
      };
    },
    computed: {
      textList() {
        return this.$t('voteApplicationPage.explain.textList');
      },
      list() {
        return [{
          key: "s1",
          img: require('~/assets/images/vote/1.svg')
        }, {
          key: "s2",
          img: require('~/assets/images/vote/2.svg')
        }, {
          key: "s3",
          img: require('~/assets/images/vote/3.svg')
        }, {
          key: "s4",
          img: require('~/assets/images/vote/4.svg')
        }, {
          key: "s5",
          img: require('~/assets/images/vote/5.svg')
        }, {
          key: "s6",
          img: require('~/assets/images/vote/6.svg')
        }]
      }
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars.scss";
  .mt {
    margin-top: 60px;
  }
  .submit-wrapper {
    margin-top: 20px;
    padding-bottom: 121px;
  }
  .submit {
    margin: 0 auto;
    width:240px;
    height:56px;
    background:rgba(31,219,132,1);
    box-shadow:0px 8px 34px 0px rgba(31,219,132,0.6);
    border-radius:5px;
    color: white;
    line-height: 56px;
    text-align: center;
  }
</style>
