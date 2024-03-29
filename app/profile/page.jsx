"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { fetchData } from "next-auth/client/_utils";


const myProfile = () => {
  const {data: session } = useSession();

  const [posts, setPosts] = useState([]);



  useEffect = () => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();


      setPosts(data);
    }

    if ()fetchData();
  }, []):


    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }


  return (
    <Profile
        name="My"
        desc="Welcome to your personolized profile page"
        data={[posts]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
     
    />
)}

export default myProfile