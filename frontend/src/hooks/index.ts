import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Post{
    "id": string;
    "title": string;
    "content": string;
    "author":{
        "name":string;
    }
}

export const usePost = ({id}:{id:string}) => {
    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState<Post>();

    useEffect(()=>{axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
        headers:{
            Authorization: localStorage.getItem("jwt")
        }
    })
        .then(response=>{
            setPost(response.data.post);
            setLoading(false);
        }) 
    },[id])
    return {loading,post}
}

export const usePosts = () => {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState<Post[]>([]);

    useEffect(()=>{axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
        headers:{
            Authorization: localStorage.getItem("jwt")
        }
    })
        .then(response=>{
            setPosts(response.data.posts);
            setLoading(false);
        }) 
    },[])
    return {loading,posts}
}
