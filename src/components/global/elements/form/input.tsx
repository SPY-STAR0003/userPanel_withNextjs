// libraries
import {useField} from "formik";

interface MyInputProps {
    size ?: string
    classes ?: string    
    placeholder : string
    visibleIcon ?: any
    hiddenIcon ?: any
    type?: string
    name: string
    groupClasses ?: string
}

const MyInput : React.FC<MyInputProps> = ({groupClasses, size, classes, visibleIcon, hiddenIcon, ...props}) => {
    
    const [field, meta] = useField(props)

    return (
        <div className={`${groupClasses} flex flex-col items-center`}>
            <input
                className={`${classes} border-b-2 placeholder:text-gray-500 text-stone-800 font-bold transition duration-300 focus:border-b-yellow-400 outline-none px-4 py-2 rounded-sm bg-transparent`}
                {...props}
                {...field}
            />
            {meta.touched && meta.error && <div className={"text-rose-600 text-sm font-bold mt-4"}>
                {meta.error}    
            </div>}
        </div>
        
    )
}

export default MyInput