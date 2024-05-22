import { useEffect, useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string;
  src: string;
}

export default function ProgressiveImg({ placeholderSrc, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.fetchPriority = 'high';

    img.onload = () => {
      setImgSrc(props.src);
    };
  }, [props.src]);

  return <img {...props} src={imgSrc}></img>;
}
