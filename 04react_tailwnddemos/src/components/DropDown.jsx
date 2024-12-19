import drop from '/src/assets/dropdown.svg'

export default function DropDown({
    label = "Label",
    data = ["Item 1", "Item 2", "Item 3"],
    showLeftImage = false,
    leftImageUri = "",
    showRightImage = false,
    rightImageUri = "",

                                 }) {
    return (
        <div className="group/item relative cursor-pointer  bg-blue-700">

            <div
                className="text-md font-extralight flex items-center justify-between space-x-2 text-white p-2 bg-maroon group-hover/item:bg-white group-hover/item:text-maroon">
                <h4>{label}</h4>
                <img className="m-0 p-0 w-5 h-5 " src={drop} alt="Drop down"/>




            </div>

            <div
                className="invisible absolute z-50 flex w-full flex-row bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover/item:visible">

                <ul>
                    {data.map((item, index) => (
                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" key={index}>{item}</a>
                    ))}
                </ul>

            </div>
        </div>

)
    ;
}

