export class CardComponent {
  constructor(params) {
    this.values = [params.name, params.owner, params.stars]
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
    const row = createElem('tr', this.params.trClass)
    item.append(table)
    table.append(row)
    this.params.tdValue.forEach((item, ind) => {
      const td1 = this.createElem('td', null, this.params.tdValue[ind])
      const td2 = this.createElem('td', null, this.values[ind])
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
