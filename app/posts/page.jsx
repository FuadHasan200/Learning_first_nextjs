import Link from "next/link";
import  style  from "./post.module.css";

export const getPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data;
}

export default async function PostPage() {
    const posts = await getPosts();
    console.log(posts)
  return (
    <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        { 
            posts.map((singlePost) => {
                return (
                    <div key={singlePost.id} >
                        <p className={`text-2xl font-semibold ${style["back"]}`}>{singlePost.title}</p>
                        <p>{singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`}>Details</Link>
                    </div>
                )
            })
        }
    </div>
  )
}
