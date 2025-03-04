'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const tabListVariants = cva(
  'inline-flex items-center justify-center bg-muted text-muted-foreground rounded-lg p-1',
  {
    variants: {
      mode: {
        default: '',
        underlined:
          'w-full justify-start rounded-none border-b text-foreground bg-transparent p-0'
      }
    },
    defaultVariants: {
      mode: 'default'
    }
  }
)

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 px-3 py-1 rounded-md',
  {
    variants: {
      mode: {
        default:
          'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm',
        underlined:
          'relative text-md h-full rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-1 pt-1 font-semibold text-foreground/60 shadow-none transition-none data-[state=active]:border-b-primary'
      }
    },
    defaultVariants: {
      mode: 'default'
    }
  }
)

const TabsList: React.FC<
  React.ComponentPropsWithRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabListVariants>
> = ({ ref, className, mode, ...props }) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabListVariants({ className, mode }))}
    {...props}
  />
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger: React.FC<
  React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
> = ({ ref, className, mode, ...props }) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ className, mode }))}
    {...props}
  />
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent: React.FC<
  React.ComponentPropsWithRef<typeof TabsPrimitive.Content>
> = ({ ref, className, ...props }) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
