'use client';

/* eslint-disable react-compiler/react-compiler */
import { useRef } from 'react';
import { createQueryClient } from '@/contexts/query-client';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Toaster } from '@/components/ui/sonner';

export interface StoreProvidersProps {
  children: React.ReactNode;
}

export const StoreProviders = ({ children }: StoreProvidersProps) => ({
  children
});

export interface ChatProvidersProps extends StoreProvidersProps {
  children: React.ReactNode;
  disableEffect?: boolean;
}

export const Providers = ({ children }: React.PropsWithChildren) => {
  const queryClientRef = useRef<QueryClient>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = createQueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster position="top-center" />
        <TooltipProvider>{children}</TooltipProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};
