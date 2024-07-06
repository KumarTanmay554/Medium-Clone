import { Appbar } from '../components/Appbar'
import { PostCard } from '../components/PostCard'
import { PostSkeleton } from '../components/PostSkeleton';
import { usePosts } from '../hooks';

export const Posts = () => {
    const {loading,posts} = usePosts();

    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="max-w-xl">
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                </div>
            </div>
            </div>
    }

    return (
        <div>
            <Appbar/>
        <div className="flex justify-center">
            <div className="max-w-xl">
                {posts?.map(post=><PostCard key={post.id} id={post.id} authorName={post.author.name || "Anonymous"} title={post.title} content={post.content} publishedDate="248"/>)}
            </div>
        </div>
        </div>
    )
}