import AllPosts from "@/components/posts/AllPosts";
import DUMMY_POSTS from "@/data/dummy";

export default function AppPostPage() {

    return(
        <AllPosts posts = {DUMMY_POSTS}/>
    )
}