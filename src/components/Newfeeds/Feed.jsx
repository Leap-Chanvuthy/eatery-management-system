import { RxHamburgerMenu } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";
import { useToggleContext } from "../../contexts/ToggleContext";
import { Link } from "react-router-dom";
import { useState } from "react";



const Feed = () => {
    const {toggleEffect} = useToggleContext();
    const [love , setLove] = useState(false);
    const handleClick = () => {
        setLove(!love);
    }
    

    return ( 
        <div className="w-full h-[80vh] shadow-md bg-base-200 overflow-y-scroll rounded-lg">
            <div className="m-2 flex justify-between rounded-md p-2">
                <div className="flex justify-center gap-2 text-black">
                    <Link className="flex justify-center bg-green-500 font-bold items-center gap-1 px-3 py-1 rounded-lg">
                       <CiCirclePlus className="font-bold"/>
                       <p className="text-sm">New Post</p> 
                    </Link>
                    <Link className="flex justify-center bg-red-500 font-bold items-center gap-1 px-3 py-1 rounded-lg">
                       <FaUsersViewfinder className="font-bold"/>
                       <p className="text-sm">Suggestion</p> 
                    </Link>
                </div>
                <button onClick={toggleEffect}>
                    <RxHamburgerMenu/>
                </button>
            </div>
            <hr />
            {/* Newfeed area */}
            <div className="w-full h-[15rem] bg-base-300 my-1 shadow-md ">
                <img
                    src="https://wwwnc.cdc.gov/travel/images/mountain-biker.jpg"
                    className="w-full h-full object-cover p-1 rounded-md"
                    alt="Responsive Image"
                />
                <div className=" ">
                    <div className="h-[5rem] overflow-y-scroll p-2" >
                        <p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates, eaque eligendi magni fuga animi enim veritatis! Asperiores, blanditiis minima natus maiores, beatae et, nobis a dignissimos quidem praesentium laboriosam?</p>
                    </div>
                    <div className="bg-base-300 p-2 lg:flex md:block items-center gap-6 w-full h-[5rem] ">
                            <div className="flex gap-3 items-center">
                                <div className="mask mask-squircle w-8 h-8 avatar">
                                    <img src="https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG" alt="Avatar Tailwind CSS Component" />
                                </div>
                                <p className="font-bold text-sm text-gray-400">Leap Chanvuthy</p>
                            </div>
                            <div className="flex justify-start pl-11 gap-6">
                                <div className="flex justify-center gap-2 items-center">
                                    <button onClick={handleClick}><FaHeart className={`${love? 'text-red-500' : 'text-white-500' } `} /></button>
                                    <p className="text-sm">102 Likes</p>
                                </div>
                                <div className="flex justify-center gap-2 items-center">
                                    <FaRegCommentDots/>
                                    <p className="text-sm">10 Comments</p>
                                </div>
                                <div className="flex justify-center gap-2 items-center">
                                    <p className="text-sm">2 minutes ago</p>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

            
        </div>
     );
}
 
export default Feed;