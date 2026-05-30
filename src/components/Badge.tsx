import { IconType } from "react-icons";

interface TechBadgeProps {
  Icon: IconType;
  name: string;
  color: string;
  borderColor: string;
  textColor: string;
  onClick?: () => void;
}

export default function Badge({Icon, name, color, borderColor, textColor, onClick}: TechBadgeProps) {
    return (
        <div className={`${color} bg-slate-500/20 flex items-center gap-2 px-4 py-1 w-fit rounded-2xl border-2 border-slate-300/20 ${borderColor} text-white uppercase font-bold cursor-pointer transition-colors duration-300 group`} onClick={() => {onClick
        }}>
            <Icon className={`${textColor} transition-colors duration-300`}/>
            <span className={`${textColor} transition-colors duration-300`}>{name}</span>
        </div>
    )
}