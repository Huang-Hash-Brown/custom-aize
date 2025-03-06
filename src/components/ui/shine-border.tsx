'use client';

import { cn } from '@/lib/utils';

type TColorProp = string | string[];

interface ShineBorderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  animated?: boolean;
  staticBorderColor?: string;
  className?: string;
  innerClassName?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * // FIXME: tailwindcss 4 not support inline variable override
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param animated controls whether the border should animate
 * @param staticBorderColor defines the border color when animation is disabled
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export const ShineBorder = ({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = ['#A07CFE', '#FE8FB5', '#FFBE7B'],
  animated = true,
  staticBorderColor = 'var(--color-border)',
  className,
  innerClassName,
  style,
  children,
  ...props
}: ShineBorderProps) => (
  <div
    {...props}
    style={
      {
        '--border-radius': `${borderRadius}px`,
        '--border-width': `${borderWidth}px`,
        '--duration': `${duration}s`,
        '--mask-linear-gradient': `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        '--background-radial-gradient': animated
          ? `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(',') : color},transparent,transparent)`
          : `linear-gradient(${staticBorderColor}, ${staticBorderColor})`,

        ...style
      } as React.CSSProperties
    }
    className={cn(
      'relative z-0 grid w-fit place-items-center rounded-[var(--border-radius)] overflow-hidden',
      className
    )}
  >
    <div
      className={cn(
        'before:pointer-events-none before:z-10 before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[var(--border-radius)] before:p-[var(--border-width)] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)]',
        animated && 'motion-safe:before:animate-shine',
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
);
