export class CardComponent {
  constructor(params) {
    this.values = params.values
    this.observer = params.observer
    this.params = {
      itemClass: 'repo-list_item',
      tableClass: 'card',
      trClass: 'card_name',
      tdValue: ['Name: ', 'Owner: ', 'Stars: ']
    }
    this.item = createElem('li', this.params.itemClass)
    this.table = createElem('table', this.params.tableClass)
    this.button = createElem('button', 'repo-list_btn')

    this.button.addEventListener('click', () => this.observer.emit('card:close', this.item.dataset.card))
  }

  createItem() {
    this.item.append(this.table)
    this.params.tdValue.forEach((item, ind) => {
      const row = createElem('tr', this.params.trClass)
      const td1 = createElem('td', null, item)
      const td2 = createElem('td', null, this.values[ind])
      this.table.append(row)
      row.append(td1, td2)
    })
    this.item.append(this.button)
    return this.item
  }
}

function createElem(tag, className, text) {
  const element = document.createElement(tag)
  if (className) element.classList.add(className)
  if (text) element.textContent = text
  return element
}
