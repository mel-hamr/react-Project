
import axios from "axios";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"

const BlogDetails = () => {
    
    const {id} = useParams()
    const {data : blog , isLoading , error} = useFetch('http://localhost:3300/blogs/'+ id)
    const history = useHistory()
    const deleteBlog = () =>{
        axios({
			url: "/Blogs/delete",
			method: "POST",
			data: {id: id},
		})
			.then((res) => {
				console.log("deleting Blog done succesfully");
                history.push("/")
			})
			.catch((err) => {})
    }


    return (  
        <div className="blog-details">
           {isLoading && <div> is Loading...</div>}
           {error && <div> error : {error}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>written by : {blog.author}</p>
                   <div><p>{blog.body}</p></div>
                   <button onClick={deleteBlog}>Delete Blog</button>
               </article>
           )}
        </div>
    );
}
 
export default BlogDetails;