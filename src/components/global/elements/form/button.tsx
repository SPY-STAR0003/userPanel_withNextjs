interface MyButtonProps {
    size ?: string
    classes ?: string    
    Icon ?: any
    type?: string
    children: any
    color?: string
}

interface ButtonColorsType {
    name: string,
    css : string
}

const MyButton : React.FC<MyButtonProps> = ({size, classes, color, Icon, type, children}) => {
    
    let colors : ButtonColorsType[] = [
        { name : "purple", css : "bg-purple-800 hover:bg-purple-900" },
        { name : "error", css : "bg-rose-600 hover:bg-rose-700 " },
        { name : "success", css : "bg-green-500 hover:bg-green-600" },
        { name : "warning", css : "bg-yellow-500 hover:bg-yellow-600" },
        { name : "primary", css : "bg-cyan-500 hover:bg-cyan-600" },
    ]

    let colorBtn : string = "";

    colors.forEach((item : ButtonColorsType) => {
        if (item.name === color) {
            colorBtn = item.css
        }
    })

    return (
        <button
            className={`${classes} ${colorBtn} px-6 py-2 text-white`}
        >
            {children}
        </button>
    )
}

export default MyButton