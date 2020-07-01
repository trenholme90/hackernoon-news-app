import Vue from 'vue'
import CardList from '../../components/CardList.vue'

async function loadMoreItems (targetDiv, nextItems) {
  const NewCardList = Vue.extend(CardList)
  const cardListInstance = new NewCardList({
    propsData: { storiesIndex: nextItems }
  })
  cardListInstance.$mount() // pass nothing
  targetDiv.appendChild(cardListInstance.$el)
}

export default loadMoreItems
