import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { PostAuthor } from "./PostAuthor";

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <PostAuthor userId={post.user}/>
            <p className="post-content">{post.content.substring(0,100)}</p>
            <Link 
                to={`/posts/${post.id}`}
                className='button muted-button'
            >
                View Post
            </Link>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}