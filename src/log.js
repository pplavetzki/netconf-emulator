import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label.toUpperCase() };
    },
  },
});

function normalizeFields(fields) {
  if (!fields || typeof fields !== 'object') return undefined;
  const normalized = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined) normalized[key] = value;
  }
  return normalized;
}

export function logDebug(component, message, fields) {
  logger.debug({ component, ...normalizeFields(fields) }, message);
}

export function logInfo(component, message, fields) {
  logger.info({ component, ...normalizeFields(fields) }, message);
}

export function logWarn(component, message, fields) {
  logger.warn({ component, ...normalizeFields(fields) }, message);
}

export function logError(component, message, fields) {
  logger.error({ component, ...normalizeFields(fields) }, message);
}