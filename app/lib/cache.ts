type EntryWithId = {
  id: string;
};

class Cache {
  private entries = new Map<string, any>();
  private expirationEntries = new Map<string, number>();

  get<T = any>(key: string): T | undefined {
    if (
      this.expirationEntries.has(key) &&
      (this.expirationEntries.get(key) ?? 0) < Date.now()
    ) {
      this.deleteEntry(key);
      return;
    }

    return this.entries.get(key);
  }

  getChildById<T = any>(key: string, id: string): T | undefined {
    const data = this.get<T[]>(key);

    if (!data) {
      return;
    }

    return data?.find((entry) => (entry as EntryWithId).id === id);
  }

  set<T = any>(key: string, value: T): void {
    this.entries.set(key, value);
    this.expirationEntries.set(key, Date.now() + 1000 * 60 * 15);
  }

  has(key: string): boolean {
    return this.entries.has(key);
  }

  deleteEntry(key: string): void {
    this.entries.delete(key);
  }

  deleteChildById<T = any>(key: string, id: string): void {
    const data = this.get<T[]>(key);

    if (!data) {
      return;
    }

    const newData = data.filter((entry) => (entry as EntryWithId).id !== id);

    this.set(key, newData);
  }

  clear(): void {
    this.entries.clear();
  }
}

type ExtendedGlobal = typeof globalThis & {
  cache: Cache;
};

export default () => {
  const extendedGlobal = global as ExtendedGlobal;

  if (!extendedGlobal.cache) {
    extendedGlobal.cache = new Cache();
  }

  return extendedGlobal.cache;
};
