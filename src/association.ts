import fs from "node:fs/promises";

interface IConsumer {
  log(message: string): void;
}

class FsConsumer implements IConsumer {
  constructor(private readonly file: string) {}

  log(message: string) {
    fs.appendFile(this.file, `${message}\n`);
  }
}

/* Association */

class Logger {
  _consumer: IConsumer | null = null;

  set consumer(destination: IConsumer | null) {
    this._consumer = destination;
  }

  log(message: string) {
    this._consumer?.log(message);
  }
}

const logger = new Logger();
const fsConsumer = new FsConsumer("log_association.txt");

logger.consumer = console;

logger.log("Hello, world!");

logger.consumer = fsConsumer;

logger.log(`Hello, world! ${new Date().toISOString()}`);

/* Association */
