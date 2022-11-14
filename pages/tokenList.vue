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
          }, {
            name: 'TERA/VITE',
            link: 'https://x.vite.net/trade?symbol=TERA-000_VITE&category=VITE'
          }]
        }, {
          key: 'BIS',
          img:  require('~/assets/images/index/bis.png'),
          website: 'http://bismuth.cz/',
          txPairs: [{
            name: 'BIS/BTC',
            link: 'https://x.vite.net/trade?symbol=BIS-000_BTC-000&category=BTC'
          }, {
            name: 'BIS/VITE',
            link: 'https://x.vite.net/trade?symbol=BIS-000_VITE&category=VITE'
          }]
        }, {
          key: 'DERO',
          img:  require('~/assets/images/index/dero.png'),
          website: 'https://dero.io',
          txPairs: [{
            name: 'DERO/BTC',
            link: 'https://x.vite.net/trade?symbol=DERO-000_BTC-000&category=BTC'
          }, {
            name: 'DERO/VITE',
            link: 'https://x.vite.net/trade?symbol=DERO-000_VITE&category=VITE'
          }]
        }, {
          key: 'TRTL',
          img:  require('~/assets/images/index/trtl.jpg'),
          website: 'https://turtlecoin.lol/',
          txPairs: [{
            name: 'TRTL/ETH',
            link: 'https://x.vite.net/trade?symbol=TRTL-000_ETH-000&category=ETH'
          }, {
            name: 'TRTL/VITE',
            link: 'https://x.vite.net/trade?symbol=TRTL-000_VITE&category=VITE'
          }]
        }, {
          key: 'ERG',
          img:  require('~/assets/images/index/erg.jpg'),
          website: 'https://ergoplatform.org/',
          txPairs: [{
            name: 'ERGO/BTC',
            link: 'https://x.vite.net/trade?symbol=ERG-000_BTC-000&category=BTC'
          }, {
            name: 'TRTL/VITE',
            link: 'https://x.vite.net/trade?symbol=ERG-000_VITE&category=VITE'
          }]
        }, {
          key: 'PASC',
          img:  require('~/assets/images/index/pasc.jpg'),
          website: 'https://www.pascalcoin.org/',
          txPairs: [{
            name: 'PASC/BTC',
            link: 'https://x.vite.net/trade?symbol=PASC-000_BTC-000&category=BTC'
          }, {
            name: 'PASC/VITE',
            link: 'https://x.vite.net/trade?symbol=PASC-000_VITE&category=VITE'
          }]
        }, {
          key: 'VFC',
          img:  require('~/assets/images/index/vfc.png'),
          website: 'https://vfcash.uk/',
          txPairs: [{
            name: 'VFC/BTC',
            link: 'https://x.vite.net/trade?symbol=VFC-000_BTC-000'
          }, {
            name: 'VFC/USDT',
            link: 'https://x.vite.net/trade?symbol=VFC-000_USDT-000'
          }]
        }, {
          key: 'GRIMM',
          img:  require('~/assets/images/index/grimm.png'),
          website: 'https://grimmw.com/',
          txPairs: [{
            name: 'GRIMM/BTC',
            link: 'https://x.vite.net/trade?symbol=GRIMM-000_BTC-000'
          }, {
            name: 'GRIMM/USDT',
            link: 'https://x.vite.net/trade?symbol=GRIMM-000_USDT-000'
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
          key: 'DUNE',
          img:  require('~/assets/images/index/dune.png'),
          website: 'https://dune.network/',
          txPairs: [{
            name: 'DUN/BTC',
            link: 'https://x.vite.net/trade?symbol=DUN-000_BTC-000'
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
          key: 'pFCT',
          img:  require('~/assets/images/index/pasc.jpg'),
          website: 'https://pegnet.org/',
          txPairs: [{
            name: 'PFCT/BTC',
            link: 'https://x.vite.net/trade?symbol=PFCT-001_BTC-000'
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
