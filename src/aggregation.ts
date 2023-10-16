interface IConsumer {
  log(message: string): void;
}

class Logger {
  constructor(private _consumer: IConsumer | null = null) {}

  log(message: string) {
    this._consumer?.log(message);
  }
}

/* Aggregation */

const logger = new Logger(console);

logger.log("Hello, world!");

/* Aggregation */
