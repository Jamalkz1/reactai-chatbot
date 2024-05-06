import * as Sentry from '@sentry/node';

export function initializeSentry(dsn: string) {
  Sentry.init({
    dsn,
    tracesSampleRate: 1.0,
  });
}