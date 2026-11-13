import { useEffect, useState } from 'react';
import { Home } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#DCE6DC]/45 ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#DCE6DC] via-[#FAF7F0] to-[#DCE6DC]/60 p-6 text-center text-[#526B5C]"
        >
          <Home className="h-8 w-8 stroke-[1.5]" aria-hidden="true" />
          <p className="max-w-xs text-xs font-medium tracking-wide text-[#303A35]/80">
            {alt}
          </p>
        </div>
      )}
    </div>
  );
}
