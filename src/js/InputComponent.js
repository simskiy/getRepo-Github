import {FoundRepoComponent} from './FoundRepoComponent'

export class InputComponent {
  constructor(observer) {
    this.inputWrapper = document.createElement('div')
    this.input = document.createElement('input')
    this.params = {
      type: 'text',
      placeholder: 'Введите имя репозитория',
      className: 'gg-input'
    }
    this.foundRepoComponent = new FoundRepoComponent()
    this.observer = observer
  }

  get value() {
    return this.input.value
  }

  set value(data) {
    this.input.value = data
  }

  createWrapper() {
    this.inputWrapper.classList.add('input-wrapper')
    for (const param in this.params) {
      this.input[param] = this.params[param]
    }
    this.inputWrapper.append(this.input)
    this.inputWrapper.append(this.createList())
  }

  createList() {
    return this.foundRepoComponent.render()
  }

  render() {
    this.createWrapper()
    return this.inputWrapper
  }
}
