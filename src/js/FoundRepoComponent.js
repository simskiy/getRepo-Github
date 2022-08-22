export class FoundRepoComponent {
  constructor(observer) {
    this.items = []
    this.listFoundRepo = document.createElement('ul')
    this.listFoundRepo.classList.add('found-repo')
    this.observer = observer
    this.addItems()
  }

  addItems() {
    this.observer.subscribe('input:request', (data) => {
      const result = []
      data.forEach((item) => result.push([item.name, item.owner.login, item.stargazers_count]))
      this.items = result
      this.removeItems()
      return this.render()
    })
  }

  removeItems() {
    this.listFoundRepo.innerHTML = ''
  }

  createItems() {
    this.items.forEach((item, ind) => {
      const li = document.createElement('li')
      li.classList.add('found-repo_item')
      li.dataset.item = ind
      li.textContent = item[0]
      this.listFoundRepo.append(li)
    })
  }

  render() {
    this.createItems()
    return this.listFoundRepo
  }
}
