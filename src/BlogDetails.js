import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
 
const BlogDetails = () => {
    const {id} = useParams();
    console.log(id);
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+id.trim());
    const history = useHistory();


    const handleClick= () => {
        fetch('http://localhost:8000/blogs/'+id.trim(), {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error  && <div> { error } </div>}
            { blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div> { blog.body } </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            }
             
        </div>
     );
}
 
export default BlogDetails;