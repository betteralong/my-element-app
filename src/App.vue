<template>
  <!-- 添加touchmove -->
  <div id="app" @touchmove.prevent>
    <v-Header :seller="seller"></v-Header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
// import  qs from 'query-string'
import { getSeller } from 'api'
import VHeader from 'components/v-header/v-header'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Tab from 'components/tab/tab'
export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
        console.log('seller', this.seller)
      })
    }
  },
  components: {
    Tab,
    VHeader
  }
}
</script>
<style lang="stylus">
</style>
