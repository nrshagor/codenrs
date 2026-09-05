import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showIcon?: boolean;
}

export function BrandLogo({
  className = "",
  iconSize = 38,
  textSize = "text-2xl md:text-[26px]",
  showIcon = true,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
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
      <div className="relative h-7 md:h-8 w-auto flex items-center">
        {/* Dark Mode Wordmark (CODE is White) */}
        <Image
          src="/wordmark-dark.png"
          alt="CODENRS"
          width={180}
          height={32}
          className="hidden dark:block h-7 md:h-8 w-auto object-contain"
          priority
        />
        {/* Light Mode Wordmark (CODE is Deep Slate/Black #0F172A) */}
        <Image
          src="/wordmark-light.png"
          alt="CODENRS"
          width={180}
          height={32}
          className="block dark:hidden h-7 md:h-8 w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
