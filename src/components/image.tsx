interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

export function Image({ src, alt, width = 'w-24', height = 'h-24' }: ImageProps) {
    return (
        <div>
            <img className={`object-contain ${width} ${height}`} src={src} alt={alt} />
        </div>
    );
}
