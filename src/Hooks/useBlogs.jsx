import { useEffect, useState } from "react";

// custom hook for blogs api call
const useBlogs = () => {
    const [ blogs, setBlogs ] = useState( [] );

    useEffect( () => {
        fetch( '/blogs.json' )
            .then( res => res.json() )
            .then( data => setBlogs( data ) );
    }, [] );

    //return blogs state variable and setBlogs state function
    return [ blogs, setBlogs ];
}

//export the entire function for external use
export default useBlogs;