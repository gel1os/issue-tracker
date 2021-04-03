import LocalStorage from './LocalStorage';

class DataStorage {
  constructor(DataStorageImpl) {
    this.storage = DataStorageImpl;
  }

  get(name) {
    return this.storage.get(name);
  }

  save(name, data) {
    this.storage.save(name, data);
  }
}

export default new DataStorage(LocalStorage);