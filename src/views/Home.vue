<template>
<div class="margin-top">
  <section class="container">
      <h3 class="text-center text-muted m-4">News</h3>
      <CardList :storiesIndex="storiesIndex" />
      <div class="load-more"></div>
      <div class="d-flex justify-content-center mb-5">
        <button data-button="load-more" type="button" class="btn btn-primary">Load More</button>
      </div>
  </section>
  <section class="bg-white jumbotron justify-content-center mb-0 row">
    <div class="d-flex align-items-center">
      <img src="@/assets/images/icon.png" class="icon">
      <h5 class="font-weight-normal mb-0">&nbsp;Find out more at</h5>
      <h5 class="text-primary mb-0">&nbsp;www.people.com</h5>
    </div>
  </section>
</div>
</template>

<script>
import loadMoreItems from '../assets/functions/loadMoreItems'
import CardList from '../components/CardList'

export default {
  name: 'Home',
  components: { CardList },
  data () {
    return {
      storiesIndex: 0
    }
  },
  mounted () {
    const loadMoreBtn = document.querySelector('[data-button="load-more"]')
    loadMoreBtn.addEventListener('click', this.loadMoreHandler)
  },
  methods: {
    loadMoreHandler: function () {
      const nextItems = this.storiesIndex + 9
      const loadMore = this.$el.querySelector('.load-more')

      loadMoreItems(loadMore, nextItems)
      this.storiesIndex = nextItems
    }
  }
}
</script>
