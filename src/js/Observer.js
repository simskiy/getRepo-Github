export class Observer {
  constructor() {
    this.listeners = {}
  }
  // Уведомляем слушателей
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления или добавляем новго слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] ||[]
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter((listener) => listener !== fn)
    }
  }
}
