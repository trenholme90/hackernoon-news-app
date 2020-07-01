<template>
    <div class="card h-100">
        <div class="position-relative">
            <img src="@/assets/images/Programmer-working-in-a-software-developing-company-office-665158684_5379x3586.jpeg" class="card-img-top" alt="Programmer working in office">
            <img src="@/assets/images/play-icon.png" class="card-img-overlay card-img-overlay-br w-25" alt="Play video icon">
        </div>
        <div class="card-body">
            <h5 class="card-title text-primary">{{ title }}</h5>
            <div class="card-text">Lorem elit enim culpa aute duis. Et adipisicing esse id labore aliqua. Voluptate qui reprehenderit laborum mollit amet. Ex esse exercitation pariatur dolor. Dolor occaecat qui adipisicing et non esse fugiat culpa dolore dolore.</div>
        </div>
        <div class="card-footer">
            <div class="badge badge-secondary text-white">Gaming</div>
            <div class="badge badge-secondary text-white">Wow</div>
        </div>
    </div>
</template>

<script>
import getDataFromArray from '../assets/functions/getDataFromArray'

export default {
  name: 'Card',
  props: [ 'storyTitle', 'commentIds' ],
  data () {
    return {
      title: this.storyTitle,
      commentIDs: this.commentIds || false
    }
  },
  mounted () {
    const commentIds = this.commentIDs
    this.$el.addEventListener('click', async function () {
      if (commentIds) {
        const commentsData = await getDataFromArray(commentIds)
        commentsData.forEach(comment => {
          comment.deleted ? console.log('This comment has been deleted') : console.log(comment.text)
        })
      } else { console.log('There are no comments for this article') }
    })
  }
}
</script>
