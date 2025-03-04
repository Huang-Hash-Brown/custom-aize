import { BaseLogger } from './base-logger'

export class WebviewLogger extends BaseLogger {
  protected isDev(): boolean {
    return process.env.NODE_ENV !== 'production'
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected outputLog(message: string): void {}

  async saveLogsToFile(): Promise<void> {}

  destroy(): void {}
}

export const logger = new WebviewLogger({
  name: 'customaize',
  level: 'info'
})

export type ClientLogger = typeof logger
