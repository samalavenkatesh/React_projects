import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    

    

    return ( 
        <div className="home">
            { error && <div> {error} </div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />  }
            {/* Reusing Components */}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Vijay')} title = "Mario's Blogs!" />   */}
             
        </div>
     );
}
 
export default Home;