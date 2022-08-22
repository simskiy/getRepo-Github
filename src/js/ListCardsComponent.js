import {CardComponent} from './CardComponent'

export class ListCardsComponent {
  constructor(params) {
    this.cards = []
    this.list = document.createElement('ul')
    this.list.classList.add('repo-list')
    this.observer = params.observer
  }

  createItems() {
    this.cards.forEach((card, ind) => {
      card.dataset.card = ind
      this.list.append(card)
    })
  }

  initObserver() {
    // this.observer.subscribe('input:request', (data) => {
    //   const result = []
    //   data.forEach((item) => result.push([item.name, item.owner.login, item.stargazers_count]))
    //   result.forEach((card) => this.addCard(card))
    //   this.createItems()
    // })
  }

  render() {
    this.initObserver()
    this.createItems()
    return this.list
  }

  addCard(params) {
    const card = new CardComponent(params)
    this.cards.push(card.createItem())
  }
}
