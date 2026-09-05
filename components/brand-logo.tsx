import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  iconSize?: number;
  imageHeight?: string;
  showIcon?: boolean;
}

export function BrandLogo({
  className = "",
  iconSize = 30,
  imageHeight = "h-5.5 md:h-6",
  showIcon = true,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {showIcon && (
        <div
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src="/icon.png"
            alt="CODENRS Icon"
            width={iconSize}
            height={iconSize}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}
      <div className={`relative ${imageHeight} w-auto flex items-center`}>
        {/* Dark Mode Wordmark (CODE is White) */}
        <Image
          src="/wordmark-dark.png"
          alt="CODENRS"
          width={150}
          height={26}
          className={`hidden dark:block ${imageHeight} w-auto object-contain`}
          priority
        />
        {/* Light Mode Wordmark (CODE is Deep Slate/Black #0F172A) */}
        <Image
          src="/wordmark-light.png"
          alt="CODENRS"
          width={150}
          height={26}
          className={`block dark:hidden ${imageHeight} w-auto object-contain`}
          priority
        />
      </div>
    </div>
  );
}
