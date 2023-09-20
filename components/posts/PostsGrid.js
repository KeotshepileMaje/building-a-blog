import PostItem from "./PostItem"
import classes from './PostsGrid.module.css'

export default function PostGrid(props) {
    const { posts } = props

    return(
        <ul className={classes.grid}>
            {
                posts.map(
                    (post)=>(
                        <PostItem 
                            key = {posts.slug} 
                            post =  {post}
                        />
                    )
                )
            }
        </ul>
    )
}