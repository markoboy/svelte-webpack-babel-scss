import ownProperty from '@utils/own-property';

class Logger {
  /**
   * Main logger class to be used by components
   * @param {string} module The module's name
   * @param {boolean} isDev If it is development mode
   */
  constructor(module, isDev = true) {
    if (ownProperty(window, 'console') && isDev) {
      this.log = window.console.log.bind(window.console, `[${module}]`);
      this.info = window.console.info.bind(window.console, `[${module}]`);
      this.error = window.console.error.bind(window.console, `[${module}]`);
      this.warn = window.console.warn.bind(window.console, `[${module}]`);
    } else {
      this.log = () => {};
      this.info = () => {};
      this.error = () => {};
      this.warn = () => {};
    }
  }
}

export default Logger;
