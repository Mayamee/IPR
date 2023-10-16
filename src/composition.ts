import fs from "node:fs/promises";

interface IConsumer {
  log(message: string): void;
}

class FSConsumer implements IConsumer {
  log(message: string) {
    fs.appendFile("log_composition.txt", message);
  }
}

class Logger {
  private _consumer: IConsumer | undefined;

  constructor() {
    /* Сильная связь */
    this._consumer = new FSConsumer();
  }

  log(message: string) {
    this._consumer?.log(message);
  }
}

/* Composition */

const logger = new Logger();

logger.log(`Hello World! ${new Date().toISOString()}`);

/* Composition */
