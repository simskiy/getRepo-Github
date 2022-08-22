import {CardComponent} from './CardComponent'

export class ListCardsComponent {
  constructor(params) {
    this.cards = []
    this.list = document.createElement('ul')
    this.list.classList.add('repo-list')
    this.observer = params.observer
    this.subscribeListeners()
  }

  subscribeListeners() {
    this.observer.subscribe('input:select', (data) => {
      this.addCard(data)
      this.createItems()
    })
    this.observer.subscribe('card:close', (data) => {
      this.cards.splice(data, 1)
      this.createItems()
    })
  }

  createItems() {
    this.list.innerHTML = null
    this.cards.forEach((card, ind) => {
      card.dataset.card = ind
      this.list.append(card)
    })
  }

  render() {
    this.createItems()
    return this.list
  }

  addCard(params) {
    const card = new CardComponent({values: params, observer: this.observer})
    this.cards.push(card.createItem())
  }
}
