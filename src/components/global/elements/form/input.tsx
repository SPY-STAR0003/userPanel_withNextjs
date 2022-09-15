

interface MyInputProps {
    size ?: string
    classes ?: string    
    placeholder : string
    visibleIcon ?: any
    hiddenIcon ?: any
    type?: string
}

const MyInput : React.FC<MyInputProps> = ({size, classes, visibleIcon, hiddenIcon, ...props}) => {
    
    return (
        <input
            className={`${classes} border-b-2 placeholder:text-gray-500 text-stone-800 font-bold transition duration-300 focus:border-b-yellow-400 outline-none px-4 py-2 rounded-sm bg-transparent`}
            {...props}
        />
    )
}

export default MyInput