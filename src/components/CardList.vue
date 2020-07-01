<template>
    <div class="row">
        <div v-for="story in stories"
            :key="story.index"
            class="col-sm-12 col-md-6 col-lg-4 mb-5">
            <Card :storyTitle="story.title" :commentIds="story.kids" />
        </div>
    </div>
</template>

<script>
import Card from './Card'
import getData from '../assets/functions/getData'
import getDataFromArray from '../assets/functions/getDataFromArray'

export default {
  name: 'CardList',
  components: { Card },
  props: [ 'storiesIndex' ],
  data () {
    return {
      storyIndex: this.storiesIndex,
      stories: []
    }
  },
  async beforeMount () {
    const newStoryIds = await getData('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const groupIndex = this.storyIndex + 9
    const selectedIds = newStoryIds.data.slice(this.storyIndex, groupIndex)
    const stories = await getDataFromArray(selectedIds, groupIndex)
    this.stories = stories
  }
}
</script>
