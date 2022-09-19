
interface TooltipProps {
    value: string;
    width ?: string; // tailwindClass
}

const Tooltip : React.FC<TooltipProps> = ({value, width = "w-24"}) => {

    return (
        <span className={`group-hover:block hidden absolute ${width} lg:right-14 lg:top-0.5 ${width === "w-14" ? "-left-3" : "-left-8"} -top-12 bg-gray-900 text-white text-sm px-2 py-1 rounded-md text-center`}> {value} </span>
    )
}

export default Tooltip;