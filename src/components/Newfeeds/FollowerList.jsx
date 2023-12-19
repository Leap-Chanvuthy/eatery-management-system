import { useState , useEffect } from "react";
import { followers } from "../../data/Follower";
import { useToggleContext } from "../../contexts/ToggleContext";
import { RiErrorWarningFill } from "react-icons/ri";


const FollowerList = () => {
    const [follower , setFollower] = useState([]);
    const [loading , setLoading] = useState(true);
    const {isOpen , toggleEffect} = useToggleContext();
    useEffect(() => {
        setFollower(followers)
        setLoading(false);
    })

    return ( 
        <div className={` ${isOpen ? '' : 'hidden' } w-[50vh] shadow-md bg-base-200 h-[80vh] overflow-y-scroll rounded-lg`}>
            <div className="flex justify-between items-center px-4">
                <h5 className="text-center m-2 font-bold">Who You're Followed</h5>
                <button onClick={toggleEffect} ><RiErrorWarningFill className="text-red-500"/></button>
            </div>
            {loading && <h4>Loading</h4>}
            <div>
                <table className="table">
                    <tbody>
                    {follower && follower.map((f) => (
                    <tr key={f.id}>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-8 h-8">
                                        <img src="https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{f.name}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="text-green-600">{f.followersCount} - Followers</p>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default FollowerList;