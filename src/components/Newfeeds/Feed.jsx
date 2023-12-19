import { RxHamburgerMenu } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";
import { useToggleContext } from "../../contexts/ToggleContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { database } from "../../configs/firebase";
import {collection , getDoc, getDocs} from 'firebase/firestore';



const Feed = () => {
    const {toggleEffect} = useToggleContext();
    const [love , setLove] = useState(false);
    const handleClick = () => {
        setLove(!love);
    }

    // blog post state
    const [post , setPost] = useState([]);
    const [loading , setLoading] = useState(true);
    const postCollection = collection(database , 'posts')
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const snapshot = await getDocs(postCollection);
                let newPost = [];
                snapshot.forEach((doc) => {
                    newPost.push({id: doc.id , ...doc.data() });
                })
                setPost(newPost);
                setLoading(false);
                console.log(newPost);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchPost();
    } , []);
    

    return ( 
        <div className="w-full h-[80vh] shadow-md bg-base-200 overflow-y-scroll rounded-lg">
            <div className="m-2 flex justify-between rounded-md p-2">
                <div className="flex justify-center gap-2 text-black">
                    <Link to="/post" className="flex justify-center bg-yellow-600 font-bold items-center gap-1 px-3 py-1 rounded-lg">
                       <CiCirclePlus className="font-bold"/>
                       <p className="text-sm">New Post</p> 
                    </Link>
                    {/* <Link className="flex justify-center bg-red-500 font-bold items-center gap-1 px-3 py-1 rounded-lg">
                       <FaUsersViewfinder className="font-bold"/>
                       <p className="text-sm">Suggestion</p> 
                    </Link> */}
                </div>
                <button onClick={toggleEffect}>
                    <RxHamburgerMenu/>
                </button>
            </div>
            <hr />
            {/* Newfeed area */}

            {post && post.map((p) => (
            <div className="w-full h-[10.2rem] bg-base-300 my-1" key={p.id}>
                {/* <img
                    src="https://wwwnc.cdc.gov/travel/images/mountain-biker.jpg"
                    className="w-full h-full object-cover p-1 rounded-md"
                    alt="Responsive Image"
                /> */}
                <div className="">
                    <div className="h-[5rem] overflow-y-scroll pl-2" >
                        <p className="font-light text-sm">{p.article}</p>
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
                                    <p className="text-sm">{p.like} Likes</p>
                                </div>
                                <div className="flex justify-center gap-2 items-center">
                                    <FaRegCommentDots/>
                                    <p className="text-sm">{p.comment.length} Comments</p>
                                </div>
                                <div className="flex justify-center gap-2 items-center">
                                    <p className="text-sm text-green-500"></p>
                                </div>
                            </div>
                    </div>
                    <hr />
                </div>
                
            </div>
            ))}

        </div>
     );
}
 
export default Feed;