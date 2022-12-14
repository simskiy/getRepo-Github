import {FoundRepoComponent} from './FoundRepoComponent'

export class InputComponent {
  constructor(params) {
    this.inputWrapper = document.createElement('div')
    this.inputElement = document.createElement('input')
    this.params = {
      type: 'text',
      placeholder: 'Введите имя репозитория',
      className: 'gg-input'
    }
    this.foundRepoComponent = new FoundRepoComponent(params.observer)
    this.observer = params.observer
    this.inputElement.addEventListener('input', this.search.apply(this))
    this.list = this.foundRepoComponent.render()
    this.subscribeListeners()
  }

  subscribeListeners() {
    this.observer.subscribe('input:request', () => {
      this.list.remove()
      this.inputWrapper.append(this.list)
    })

    this.observer.subscribe('input:select', () => {
      this.list.remove()
      this.inputElement.value = null
      this.inputElement.focus()
    })

    this.observer.subscribe('card:close', () => this.inputElement.focus())
  }

  setComponent() {
    this.inputElement.setAttribute('autofocus', true)
    for (const param in this.params) {
      this.inputElement[param] = this.params[param]
    }
    this.inputWrapper.classList.add('input-wrapper')

    this.observer.subscribe('input:request', () => {
      this.list.remove()
      this.inputWrapper.append(this.list)
    })

    this.observer.subscribe('input:select', () => {
      this.list.remove()
      this.inputElement.value = null
    })
  }

  render() {
    this.setComponent()
    this.inputWrapper.append(this.inputElement)
    this.inputWrapper.append(this.list)
    return this.inputWrapper
  }

  search(fn = this.request) {
    let timer = null
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, 300)
    }
  }

  async request() {
    const url = `https://api.github.com/search/repositories?q=${this.inputElement.value}`
    return await fetch(url).then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          this.observer.emit('input:request', res.items.splice(0, 5))
        })
      } else {
        console.log('request failed')
        this.inputElement.value = null
      }
    })
  }
}
