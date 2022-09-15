

interface MyButtonProps {
    size ?: string
    classes ?: string    
    icon ?: string
    type?: string
    children: string
    color?: string
}

const MyButton : React.FC<MyButtonProps> = ({size, classes, color, icon, type, children}) => {
    
    return (
        <button
            className={`${classes} bg-violet-700 hover:bg-violet-900 px-6 py-2 text-white`}
        >
            {children}
        </button>
    )
}

export default MyButton