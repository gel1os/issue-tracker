export default class LocalStorage {
  static get(name) {
    return window.localStorage.getItem(name);
  }

  static save(name, data) {
    window.localStorage.setItem(name, data);
  }
}