/**
 * Представляет класс Singleton.
 */
class Singleton {
  private static instance: Singleton | null = null;
  private constructor() {}

  /**
   * Возвращает экземпляр класса Singleton.
   * Если экземпляр не существует, то создает его.
   * @returns {Singleton} Экземпляр класса Singleton.
   */
  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton === singleton2); // true
