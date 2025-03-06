import { BaseLogger, type BaseLoggerOptions } from './base-logger';

export class ServerLogger extends BaseLogger {
  private _isDev: boolean | undefined;

  constructor(options: BaseLoggerOptions) {
    super(options);
  }

  protected isDev(): boolean {
    if (this._isDev === undefined) {
      this._isDev = process.env.NODE_ENV !== 'production';
    }
    return this._isDev;
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected outputLog(message: string): void {}

  async saveLogsToFile(): Promise<void> {}

  destroy(): void {}
}

export const logger = new ServerLogger({
  name: 'customaize',
  level: 'info'
});
