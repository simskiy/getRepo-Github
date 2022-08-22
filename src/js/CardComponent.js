export class CardComponent {
  constructor(params) {
    this.values = params
    this.params = {
      itemClass: 'repo-list_item',
      tableClass: 'card',
      trClass: 'card_name',
      tdValue: ['Name', 'Owner', 'Stars']
    }
  }

  createItem() {
    const item = createElem('li', this.params.itemClass)
    const table = createElem('table', this.params.tableClass)
    item.append(table)
    this.params.tdValue.forEach((item, ind) => {
      const row = createElem('tr', this.params.trClass)
      const td1 = createElem('td', null, item)
      const td2 = createElem('td', null, this.values[ind])
      table.append(row)
      row.append(td1, td2)
    })
    return item
  }
}

function createElem(tag, className, text) {
  const element = document.createElement(tag)
  if (className) element.classList.add(className)
  if (text) element.textContent = text
  return element
}
