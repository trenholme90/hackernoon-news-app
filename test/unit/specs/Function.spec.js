import getData from '@/assets/functions/getData'
import getDataFromArray from '@/assets/functions/getDataFromArray'
import loadMoreItems from '@/assets/functions/loadMoreItems'

describe('getData function', () => {
  it('should return data from api', async () => {
    const url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
    const res = await getData(url)
    expect(res.status).toBe(200)
    expect(res.data.length).toBeGreaterThanOrEqual(1)
    expect(typeof (res.data[0])).toBe('number')
  })
})

describe('getDataFromArray function', () => {
  it('should loop through array of IDs and return data from api', async () => {
    const selectedIds = [23690511, 23690509, 23690508, 23690473, 23690462, 23690461, 23690457, 23690448, 23690443]
    const res = await getDataFromArray(selectedIds)
    expect(res.length).toBeGreaterThanOrEqual(1)
    expect(typeof (res[0].id)).toBe('number')
    expect(typeof (res[0].title)).toBe('string')
  })
})

describe('loadMoreItems function', () => {
  it('should create new CardList component', async () => {
    document.body.innerHTML = `<div class="loadMore"></div>`
    const targetDiv = document.querySelector('.loadMore')
    const nextItems = 9
    await loadMoreItems(targetDiv, nextItems)
    expect(targetDiv.firstElementChild.classList.value).toBe('row')
  })
})
