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
    Icon ?: any
    style ?: "solid" | "underlined" | "gray" | "bordered"
}

interface MyInputStylesProps {
    name: string, css: string
}

const MyInput : React.FC<MyInputProps> = ({groupClasses, style = "underlined", Icon, size, classes, visibleIcon, hiddenIcon, ...props}) => {

    const InputStyles : MyInputStylesProps[] = [
        { name : "underlined", css : "border-b-2 focus:border-b-yellow-400 bg-transparent"},
        { name : "solid" , css : "bg-white focus:scale-105 focus:shadow-lg" },
        { name : "gray", css : "bg-gray-200/70 focus:scale-105 placeholder:text-gray-400"},
        { name : "bordered", css : "border border-gray-400 !rounded-3xl focus:scale-105" }
    ]

    let inputStyle : string = "";

    InputStyles.forEach((item : MyInputStylesProps) => {
        if (item.name === style) inputStyle = item.css 
    })
    
    const [field, meta] = useField(props)

    return (
        <div className={`${groupClasses} relative flex flex-col items-center`}>
            <input
                className={`text-stone-800 placeholder:text-gray-500 font-bold transition duration-300 outline-none px-4 py-2 rounded-sm
                    ${classes} ${inputStyle}
                `}
                {...props}
                {...field}
            />
            {
                Icon && (<button type="submit"> {Icon} </button>)
            }
            {meta.touched && meta.error && <div className={"text-rose-600 text-sm font-bold mt-4"}>
                {meta.error}    
            </div>}
        </div>
        
    )
}

export default MyInput