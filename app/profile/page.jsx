"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";


const myProfile = () => {
  const {data: session } = useSession():
  

  useEffect = () => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();


      setPosts(data);
    }

    console.log
  }


    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }


  return (
    <Profile
        name="My"
        desc="Welcome to your personolized profile page"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
     
    />
)}

export default myProfile