import Feed from "../components/Newfeeds/Feed";
import FollowerList from "../components/Newfeeds/FollowerList";

const Home = () => {
    return ( 
        <div className="m-5 flex justify-between gap-5" >
            <Feed/>
            <FollowerList/>
        </div>
     );
}
 
export default Home;