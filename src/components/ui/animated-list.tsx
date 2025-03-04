'use client'

import React, { Children, ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  disableAnimation?: boolean
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  className,
  children,
  disableAnimation = false
}) => (
  <div className={cn(`flex flex-col items-center gap-4`, className)}>
    {disableAnimation ? (
      children
    ) : (
      <AnimatePresence>
        {Children.map(children, child => (
          <AnimatedListItem key={(child as ReactElement).key}>
            {child}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    )}
  </div>
)

AnimatedList.displayName = 'AnimatedList'

interface AnimatedListItemProps {
  children: React.ReactNode
}

export const AnimatedListItem = ({ children }: AnimatedListItemProps) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 50,
      scale: 0.9
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay: 0.1
      }
    }}
    layout={false}
    className="mx-auto w-full"
    style={{ willChange: 'auto' }}
  >
    {children}
  </motion.div>
)
