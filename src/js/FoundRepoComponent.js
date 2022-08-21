export class FoundRepoComponent {
  constructor() {
    this.items = []
    this.listFoundRepo = document.createElement('ul')
    this.listFoundRepo.classList.add('found-repo')
  }

  createItems() {
    this.items.forEach((item, ind) => {
      const li = document.createElement('li')
      li.classList.add('found-repo_item')
      li.dataset.item = ind
      li.textContent = item
      this.listFoundRepo.append(li)
    })
  }

  render() {
    this.createItems()
    return this.listFoundRepo
  }
}
