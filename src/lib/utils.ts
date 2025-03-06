import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

import { getErrorMsg, isAbortError } from './common';
import { logger } from './logger/client-logger';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const logAndToastError = (message: string, error?: any) => {
  if (isAbortError(error)) return;

  logger.error(message, error);
  toast.error(error ? `${message}: ${getErrorMsg(error)}` : message);
};
