import { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { database } from "../../configs/firebase";
import {collection , getDoc, getDocs} from 'firebase/firestore';



const Feed = () => {
    const [posts , setPosts] = useState([]);
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
                setPosts(newPost);
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

        <div className="mx-auto mt-10 grid  max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl bg-gray-800 rounded-sm flex-col items-start justify-between">
              <div className="group relative">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" className="w-full" />
                <div className="flex justify-between items-center px-4 py-2">
                    <h3 className=" text-lg font-semibold  text-gray-200 ">title</h3>
                    <div className="flex justify-center items-center gap-2">
                        <CiTimer className="text-gray-200"/>
                        <time dateTime={post.createdAt} className="text-gray-200 text-xs">date</time>
                    </div>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-500 px-4">{post.article}</p>
              </div>
              <div className="relative mt-8 px-4 py-2 flex items-center gap-x-4">
                <img src='https://example.com' className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-200">
                    <a href='https://example.com'>
                      <span className="absolute inset-0" />
                      author name
                    </a>
                  </p>
                  <p className="text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </article>
          ))}
        </div>
    );
}
 
export default Feed;