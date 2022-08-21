import {InputComponent} from '@js/InputComponent'
import {ListCardsComponent} from '@js/ListCardsComponent'
import {Observer} from '@js/Observer'

export class GetRepo {
  constructor(el) {
    this.el = el
    this.observer = new Observer()
    this.inputElement = new InputComponent(this.observer)
    this.listCardsComponent = new ListCardsComponent(this.observer)
    this.el.addEventListener('change', this.search.bind(this))
  }

  render() {
    this.el.append(this.inputElement.render())
    this.el.append(this.listCardsComponent.render())
  }

  async search() {
    const url = `https://api.github.com/search/repositories?q=${this.inputElement.value}`
    return await fetch(url).then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          this.addItems(res.items.splice(0, 5))
        })
      } else {
        console.log('request failed')
      }
    })
  }

  addItems(items) {
    // this.inputElement.addItems(items)
    console.log(items)
  }
}
