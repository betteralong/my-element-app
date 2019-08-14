<template>
  <!-- 添加touchmove -->
  <div id="app" @touchmove.prevent>
    <v-Header :seller="seller"></v-Header>
  </div>
</template>

<script>
// import  qs from 'query-string'
import { getSeller } from 'api'
import VHeader from 'components/v-header/v-header'
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
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
        console.log('seller', this.seller)
      })
    }
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">
</style>
