import MyButton from "../../../global/elements/form/button";


const FollowSuggestionBox : React.FC = () => {

    return (
        <div className={"w-full flex justify-between space-x-2 space-x-reverse"}>
            <img className="w-8 h-8 rounded-full self-start" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="" />
            <div className={"flex flex-col space-y-1 w-6/12"}>
                <h4 className="font-bold"> جین فیشر </h4>
                {/* خط بعد باید تعداد حروفی مشخص شده داشته باشد */}
                <h5 className="text-gray-700 text-sm font-light">  یک برنامه نویس، یک سئوکار تازه کار </h5>
            </div>
            <MyButton classes="self-center w-4/12 lg:px-1" color="white"> دنبال کردن </MyButton>
        </div>
    )
}

export default FollowSuggestionBox;