<template>
  <div class="tokenList-page">
    <div class="page-title">
      <div class="container">
        {{ $t('tokenPage.title') }}
      </div>
    </div>
    <div class="container tokenList-content">
      <!-- <div class="tokenList-nodata">{{ $t('tokenPage.noData') }}</div> -->
      <three-column :list="list"></three-column>
    </div>
  </div>

</template>

<script type="text/babel">
import ThreeColumn from "~/components/ThreeColumn.vue"

  export default {
    components: {
      ThreeColumn
    },
    data: function () {
      return {};
    },
    computed: {
      list() {
        return [{
          key: 'TERA',
          img:  require('~/assets/images/index/tera.jpg'),
          website: 'https://terafoundation.org',
          txPairs: [{
            name: 'TERA/BTC',
            link: 'https://x.vite.net/trade?symbol=TERA-000_BTC-000&category=BTC'
          }]
        }, {
          key: 'BIS',
          img:  require('~/assets/images/index/bis.png'),
          website: 'http://bismuth.cz/',
          txPairs: [{
            name: 'BIS/BTC',
            link: 'https://x.vite.net/trade?symbol=BIS-000_BTC-000&category=BTC'
          }]
        }, {
          key: 'DERO',
          img:  require('~/assets/images/index/dero.png'),
          website: 'https://dero.io',
          txPairs: [{
            name: 'DERO/BTC',
            link: 'https://x.vite.net/trade?symbol=DERO-000_BTC-000&category=BTC'
          }]
        }, {
          key: 'TRTL',
          img:  require('~/assets/images/index/trtl.jpg'),
          website: 'https://turtlecoin.lol/',
          txPairs: [{
            name: 'TRTL/ETH',
            link: 'https://x.vite.net/trade?symbol=TRTL-000_ETH-000&category=ETH'
          }]
        }, {
          key: 'ERG',
          img:  require('~/assets/images/index/erg.jpg'),
          website: 'https://ergoplatform.org/',
          txPairs: [{
            name: 'ERGO/BTC',
            link: 'https://x.vite.net/trade?symbol=ERG-000_BTC-000&category=BTC'
          }]
        }, {
          key: 'PASC',
          img:  require('~/assets/images/index/pasc.jpg'),
          website: 'https://www.pascalcoin.org/',
          txPairs: [{
            name: 'PASC/BTC',
            link: 'https://x.vite.net/trade?symbol=PASC-000_BTC-000&category=BTC'
          }]
        }, {
          key: 'DEFIS',
          img:  require('~/assets/images/index/xgm.png'),
          website: 'https://defisystem.io/',
          txPairs: [{
            name: 'XGM/BTC',
            link: 'https://x.vite.net/trade?symbol=XGM-000_BTC-000'
          }]
        }, {
          key: 'Beam',
          img:  require('~/assets/images/index/beam.jpg'),
          website: 'https://beam.mw/',
          txPairs: [{
            name: 'BEAM/BTC',
            link: 'https://x.vite.net/trade?symbol=BEAM-000_BTC-000'
          }]
        }, {
          key: 'PEG',
          img:  require('~/assets/images/index/peg.jpg'),
          website: 'https://pegnet.org/',
          txPairs: [{
            name: 'PEG/BTC',
            link: 'https://x.vite.net/trade?symbol=PEG-000_BTC-000'
          }]
        }, {
          key: 'ASK',
          img:  require('~/assets/images/index/ask.png'),
          website: 'https://permission.io/',
          txPairs: [{
            name: 'ASK/BTC',
            link: 'https://x.vite.net/trade?symbol=ASK-000_BTC-000'
          }]
        }, {
          key: 'EPIC',
          img:  require('~/assets/images/index/epic.png'),
          website: 'https://epic.tech/',
          txPairs: [{
            name: 'EPIC/BTC',
            link: 'https://x.vite.net/trade?symbol=EPIC-002_BTC-000'
          }, {
            name: 'EPIC/USDT',
            link: 'https://x.vite.net/trade?symbol=EPIC-002_BTC-000'
          }]
        }, {
          key: 'IXI',
          img:  require('~/assets/images/index/ixi.png'),
          website: 'https://www.ixian.io/',
          txPairs: [{
            name: 'IXI/USDT',
            link: 'https://x.vite.net/trade?symbol=IXI-000_USDT-000'
          }]
        }];
      }
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars.scss";
  .tokenList-content {
    padding-bottom: 185px;
  }
  .tokenList-nodata {
    text-align: center;
    margin-top: 185px;
    font-family: $font-family-title;
    font-size: 30px;
    color: #ccc;
  }
</style>
