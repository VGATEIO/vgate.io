<template>
  <div class="contact-wrapper">
    <div class="container contact-content">
      <div class="contact-title">{{ $t('indexPage.contact.title') }}</div>
      <div class="contact-footer is-flex">
        <div class="is-flex">
          <img src="~/assets/images/index/twitter-green.svg"/>
          <a href="https://twitter.com/VGATE2" target="_blank">https://twitter.com/VGATE2</a>
        </div>
        <div class="is-flex">
          <img src="~/assets/images/index/email-green.svg"/>
          <a href="mailto:vgateservice@gmail.com" target="_blank">vgateservice@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
    },
    data: function () {
      return {
      };
    },
    methods: {

    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/css/vars";
.contact-wrapper {
  background-color: $background-color;
  height: 280px;
  width: 100%;
  .contact-content {
    height: 100%;
    background: no-repeat url("~/assets/images/index/contact_bg.svg") 100% 0%;
  }
  .contact-title {
    text-align: center;
    font-size:40px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:48px;
    padding-top: 62px;
  }
  .contact-footer {
    justify-content: space-around;
    margin-top: 50px;
    line-height: 60px;
    a {
      color: white;
      display: inline-block;
      margin-left: 20px;
    }
  }
}

</style>
