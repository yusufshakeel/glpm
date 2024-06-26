'use strict';

const HOME_DIR = require('os').homedir();
const GLPM_COMMAND = 'glpm';
const GLPM_CONFIG_FILE = '.glpmrc';
const GLPM_CONFIG_FILE_PATH = `${HOME_DIR}/${GLPM_CONFIG_FILE}`;
const DEFAULT_API_TIMEOUT = process.env.DEFAULT_API_TIMEOUT || 5000;
const PER_PAGE = process.env.PER_PAGE || 16;
const CHECK_STATUS_EVERY_N_MILLISECONDS = process.env.CHECK_STATUS_EVERY_N_MILLISECONDS || 60000;
const DEFAULT_API_ENDPOINT = process.env.DEFAULT_API_ENDPOINT || 'https://gitlab.com/api/v4';
const HTTP_WIRE_LOGGING = process.env.HTTP_WIRE_LOGGING === 'enabled';

module.exports = {
  HOME_DIR,
  GLPM_COMMAND,
  GLPM_CONFIG_FILE,
  GLPM_CONFIG_FILE_PATH,
  DEFAULT_API_TIMEOUT,
  PER_PAGE,
  CHECK_STATUS_EVERY_N_MILLISECONDS,
  DEFAULT_API_ENDPOINT,
  HTTP_WIRE_LOGGING,
  MESSAGE: {
    PRESS_CTRL_C_AT_ANY_TIME_TO_QUIT: 'Press Ctrl+C at any time to quit.'
  },
  DATE_TIME: {
    LOCAL_DATE_TIME_FORMAT: {
      LOCALES: 'en-GB',
      OPTION: {
        year: 'numeric',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
  },
  SERVER: {
    HTTP_PORT: process.env.HTTP_PORT || 9000
  }
};
