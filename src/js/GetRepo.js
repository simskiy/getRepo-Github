import {InputComponent} from '@js/InputComponent'
import {ListCardsComponent} from '@js/ListCardsComponent'
import {Observer} from '@js/Observer'

export class GetRepo {
  constructor(el) {
    this.el = el
    this.observer = new Observer()
    this.inputElement = new InputComponent({observer: this.observer})
    this.listCardsComponent = new ListCardsComponent({observer: this.observer})
  }

  render() {
    this.el.append(this.inputElement.render())
    this.el.append(this.listCardsComponent.render())
  }
}
