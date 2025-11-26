import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
  priority?: boolean;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function ProgressiveImage({
  src = '',
  alt = '',
  className = '',
  wrapperClassName = '',
  priority = false,
  onLoad,
  width,
  height,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--color-gray-light)] animate-pulse z-10" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        className={cn(
          'w-full h-full object-cover transition-[opacity,filter] duration-500 relative z-0',
          isLoaded ? 'opacity-100 blur-0' : 'opacity-100 blur-sm',
          className
        )}
        {...props}
      />
    </div>
  );
}

