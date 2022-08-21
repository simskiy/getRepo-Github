import {CardComponent} from './CardComponent'

export class ListCardsComponent {
  constructor(observer) {
    this.cards = []
    this.list = document.createElement('ul')
    this.list.classList.add('repo-list')
    this.observer = observer
  }

  render() {
    this.cards.forEach((card, ind) => {
      card.dataset.card = ind
      this.list.append(card)
    })
    return this.list
  }

  addCard() {
    const card = new CardComponent(this.values)
    this.cards.push(card)
  }
}
