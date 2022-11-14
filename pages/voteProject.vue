<template>
  <div class="vote-project-page">
    <div class="page-title">
      <div class="container">
        {{ $t("votePage.title")}}
      </div>
    </div>
    <div class="container">
      <!-- <two-column :list="list"></two-column> -->
      <div class="projectList-nodata">{{ $t("votePage.noData") }}</div>
      <common-text :text-list="textList" :title="textTitle" class="mt"></common-text>
    </div>
  </div>
  
</template>

<script type="text/babel">
  import TwoColumn from "~/components/TwoColumn.vue" 
  import CommonText from "~/components/CommonText.vue";

  export default {
    components: {
      TwoColumn,
      CommonText
    },
    data: function () {
      return {
        textTitle: this.$t('votePage.explain.title'),
      };
    },
    computed: {
      textList() {
        return this.$t('votePage.explain.textList');
      },
      list() {
        return [{
          key: 'project1'
        }, {
          key: 'project2',
        }, {
          key: 'project3',
        }, {
          key: 'project1',
        }, {
          key: 'project2',
        }, {
          key: 'project3',
        }];
      }
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars.scss";
  .projectList-nodata {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    font-family: $font-family-title;
    font-size: 30px;
    color: #ccc;
  }
  .mt {
    margin-top: 40px;
    padding-bottom: 60px;
  }
  .rule-title {
    font-size:24px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(50,50,92,1);
    line-height:36px;
    margin-top: 45px;
    margin-bottom: 20px;
  }
  .rule-desc {
    font-size:14px;
    font-family:$font-family-main;
    font-weight:400;
    color:rgba(91,108,148,1);
    line-height:22px;
    padding-bottom: 80px;
  }
</style>
