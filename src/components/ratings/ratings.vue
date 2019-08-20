<template>
  <cube-scroll ref="scroll" class="ratings" :options="scrollOptions">
    <div class="ratings-content">
      <div class="overview">
        
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import Star from 'components/star/star'
import RatingSelect from 'components/rating-select/rating-select'
import Split from 'components/split/split'
// import ratingMixin from 'common/mixins/rating'
import { getRatings } from 'api'
import dayjs from 'dayjs'
export default {
  name: 'ratings',
  // mixins: [ratingMixin],
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      ratings: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0 // 支持详情图片横向滚动
      }
    }
  },
  computed: {
    seller() {
      return this.data.seller || {}
    }
  },
  watch: {
    sellectType () {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }
  },
  methods: {
    fetch() {
      if(!this.fetched) {
        this.fetched = true
        getRatings({
          id: this.seller.id
        }).then((ratings) =>{
          this.ratings = tatings
        })
      }
    },
    format(time) {
      return dayjs(time).format('YYYY-MM-DD hh:mm')
    }
  },
  components: {
    Star,
    Split,
    RatingSelect
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

</style>
