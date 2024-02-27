import React from 'react'

interface Props {
  src: string;
  width: number;
  height: number;
}

const Avatar = ({ src, height, width }: Props) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="relative rounded-full w-full h-full overflow-hidden shadow m-0">
      <img
        alt="Avatar"
        src={src}
        width={width || "256"}
        height={height || "256"}
        className={`m-0 w-full h-auto transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => {
          setLoading(false);
        }}
      />
      {loading && <div className="absolute w-full h-full top-0 animate-pulse bg-gray-100 dark:bg-gray-900" />}
    </div>
  );
}

export default Avatar

