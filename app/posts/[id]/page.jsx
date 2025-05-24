
export const getSinglePost = async (post_id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = res.json();
    return data;
}

export default async function SinglePostpage({ params }) {
    const p = await params;
    const singlePost = await getSinglePost(p.id);
  return (
    <div className="flex justify-center place-items-start">
        <div className="card w-96 space-y-2">
            <h1 className="font-semibold text-3xl ">{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    </div>
  )
}
