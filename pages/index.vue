<template>
  <div class="page-home">
    <div class="page-top-bg">
      <div class="container page-content">
        <div class="top-content">
          <div class="content-title">{{ $t('indexPage.name') }}</div>
          <span class="green-icon"></span>
          <div class="content-desc">{{ $t('indexPage.desc') }}</div>
          <div class="btn-wrapper">
            <a href="https://x.vite.net/" target="_blank">
              <div class="btn">{{ this.$t('indexPage.btn') }}</div>
            </a>
          </div>
        </div>

        <div class="notice">
          <div class="notice_title is-flex">
            <img src="~/assets/images/index/notice.svg" />
            <div class="notice-text">{{ $t('indexPage.notice.title') }}</div>
          </div>
          <div class="notice-desc">
            <div
              class="desc-item"
              v-for="(item, index) in $t('indexPage.notice.desc')"
              :key="index"
            >
              <a :href="descLinks[index]">{{ item }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-bottom-bg">
      <div class="container page-main-content">
        <div class="flow">
          <div class="item-title">{{ $t('indexPage.flow.title') }}</div>
          <flow></flow>
        </div>
        <!-- <div class="popular-token">
          <div class="item-title">
            {{ $t('indexPage.token.title') }}
          </div>
          <token></token>
        </div>-->
      </div>
      <div class="contact-us">
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelect from "~/components/LangSelect.vue";
import flow from "~/components/index/flow/index.vue";
import token from "~/components/index/token/index.vue";
import Contact from "~/components/index/Contact.vue";

export default {
  components: {
    LangSelect,
    flow,
    token,
    Contact
  },
  data() {
    return {};
  },
  computed: {
    descLinks() {
      return this.$i18n.locale === "zh"
        ? ["https://forum.vite.net/topic/1844/"]
        : [
            "https://forum.vite.net/topic/1845/the-result-of-vote-for-listing-the-first-round"
          ];
    }
  },
  mounted() {}
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "~assets/css/vars";
a {
  color: $common-text-color;
}
.flow {
  margin-bottom: 160px;
}

.item-title {
  padding-top: 123px;
  font-size: 40px;
  font-family: $font-family-title;
  font-weight: 600;
  color: $content-title-color;
  line-height: 44px;
  text-align: center;
}

.page-home {
  .page-top-bg {
    background: center / cover no-repeat url("~assets/images/index/dots_bg.svg"),
      no-repeat url("~assets/images/index/logo.svg") 80% 0%;
    background-color: $background-color;
    margin-top: -96px;
  }
  .page-content {
    padding-top: 233px;
    color: $common-text-color;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 18px;
    min-height: 860px;
    .top-content {
      font-family: $font-family-title;
      color: $common-title-color;
      font-weight: 600;
      .content-title {
        font-size: 44px;
        line-height: 48px;
      }
      .green-icon {
        margin-top: 20px;
        display: inline-block;
        width: 60px;
        height: 4px;
        background: $common-active-color;
      }
      .content-desc {
        margin-top: 23px;
        width: 474px;
        font-size: 14px;
        line-height: 30px;
      }
      .btn-wrapper {
        margin-top: 20px;
        padding-bottom: 65px;
      }
      .btn {
        width: 240px;
        height: 56px;
        background: rgba(31, 219, 132, 1);
        box-shadow: 0px 8px 34px 0px rgba(31, 219, 132, 0.6);
        border-radius: 5px;
        color: white;
        line-height: 56px;
        text-align: center;
      }
    }

    .notice {
      position: absolute;
      left: 0;
      top: 760px;
      width: 100%;
      height: 206px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 34px 0px rgba(210, 210, 210, 0.5);
      border-radius: 10px;
      padding: 30px 40px 36px;
      .notice-text {
        line-height: 60px;
        margin-left: 20px;
        font-size: 16px;
        font-family: $font-family-title;
        font-weight: 600;
        color: rgba(3, 29, 91, 1);
      }
      .notice-desc {
        margin-left: 82px;
        .desc-item {
          margin-bottom: 6px;
          font-size: 14px;
          font-family: $font-family-main;
          font-weight: 400;
          color: $common-text-color;
          line-height: 22px;
        }
      }
    }
  }
  .page-bottom-bg {
    margin-top: 116px;
  }
  .page-main-content {
    font-size: 14px;
    font-family: $font-family-main;
    font-weight: 400;
    color: $common-text-color;
    line-height: 22px;
  }
}

@media (max-width: $MQNarrow) {
}

@media (max-width: $MQMobile) {
}
</style>
