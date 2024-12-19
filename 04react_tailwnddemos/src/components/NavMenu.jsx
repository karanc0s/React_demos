import {useState} from "react";

export default function NavMenu() {
    const data = [
        {
            title: "Home",
            data:[]
        },
        {
            title: "Seminars",
            data:[
                "Seminar 1",
                "Seminar 2",
                "Seminar 3",
            ],
        },
        {
            title: "Seminars",
            data:[
                "Seminar 1",
                "Seminar 2",
                "Seminar 3",
            ],
        },
        {
            title: "Seminars",
            data:[
                "Seminar 1",
                "Seminar 2",
                "Seminar 3",
            ],
        }
    ];
    const [currTab, setCurrTab] = useState(-1);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className=" bg-blue-300 ">

                <div className="flex bg-blue-600  ">
                    {data.map((item, index) => (
                        <div className="bg-red-200 m-3" key={index} onMouseEnter={()=>{
                            console.log(index);
                            setCurrTab(index);
                        }}>
                            <h3>{item.title}</h3>
                        </div>
                    ))}

                    <div className="p-5 mt-5 text-gray-900 absolute visible group-hover:visible bg-blue-400">
                        <a>asdfadfadfasd asd fas df asdf as df as dfasd f adsf asd f f {currTab}</a>
                    </div>

                </div>







                <div className="p-5 mt-5text-gray-900 absolute invisible group-hover:visible bg-blue-400">
                    <a>asdfadfadfasd asd fas df asdf as df as dfasd f adsf asd f f</a>
                </div>


            </div>
        </nav>


    );
}