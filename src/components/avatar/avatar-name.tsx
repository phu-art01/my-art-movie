import Avatar from './avatra';
import clsx from 'clsx';

interface Props {
  src: string;
  name: string;
  subTile?: string;
  titleColor?: string;
  subColor?: string;
  textColor?: string;
}

const AvatarName = ({ src, name }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 mr-4">
        <Avatar src={src} />
      </div>
      <div>{name}</div>
    </div>
  )
}
export const CAvatarName = ({ src, name, subTile, titleColor, subColor, textColor }: Props) => {
  const tColor = (!textColor && !titleColor) ? 'text-primary-2' : titleColor || textColor
  const sColor = (!textColor && !subColor) ? 'text-green-2' : subColor || textColor
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 mr-4">
        <Avatar src={src} />
      </div>
      <div className="flex flex-col">
        <div className={clsx("font-bold leading-normal w-40 truncate", tColor)}>{name}</div>
        {subTile && <div className={clsx("text-xs", sColor)}>{subTile}</div>}
      </div>
    </div>
  )
}

export default AvatarName
