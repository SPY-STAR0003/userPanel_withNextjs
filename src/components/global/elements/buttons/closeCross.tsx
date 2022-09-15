
interface CloseCrossProps {
    clickHandler: (value : boolean) => void
    clickValue ?: boolean
    position ?: string
    isAbsolute ?: boolean
}

const CloseCross : React.FC<CloseCrossProps> = ({clickHandler, position, isAbsolute}) => {

    return (
        <span onClick={() => clickHandler(false)} className={`${!isAbsolute && "absolute"} ${position ?? "-top-5 right-1"} cursor-pointer rotate-45 text-4xl text-violet-700 `}> + </span>
    )
}

export default CloseCross;