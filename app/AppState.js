import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  /** @type {import('./Models/Image').Image} */
  // @ts-ignore
  images = null

 /** @type {import('./Models/Quote').Quote} */
  // @ts-ignore
  quotes = null

  /** @type {import('./Models/Todo').Todo[]} */
  todos = []

  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  weather = ''
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
