
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"
const BlogDetails = () => {
    
    // const {id} = useParams()
    const {data : blog , isLoading , error} = useFetch('http://localhost:3300/blogs/1')
    console.log(blog)
    console.log("here=>")
    return (  
        <div className="blog-details">
           {isLoading && <div> is Loading...</div>}
           {error && <div> error : {error}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>written by : {blog.author}</p>
                   <div>{blog.body}</div>
               </article>
           )}

        </div>
    );
}
 
export default BlogDetails;