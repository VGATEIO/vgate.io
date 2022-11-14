<template>
  <div class="clause-page">
    <div class="page-title">
      <div class="container">
        {{ $t('clausePage.title') }}
      </div>
    </div>
    <div class="container">
      <div class="content-wrapper">
        {{ $t('clausePage.update') }}
        <common-text :text-list="textList"></common-text>
      </div>
    </div>
  </div>
  
</template>

<script type="text/babel">
  import CommonText from "~/components/CommonText.vue";

  export default {
    components: {
      CommonText
    },
    data: function () {
      return {
      };
    },
    computed: {
      textList() {
        return this.$t('clausePage.explain.textList');
      },
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars.scss";
  .content-wrapper {
    margin-top: 60px;
    padding-bottom: 84px;
  }
</style>
