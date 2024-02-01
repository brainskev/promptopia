"use client";

import {useState} from 'react'
import { usSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';




const createPrompt = () => {
  const [submitting, setsubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const CreatePrompt = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag:post.tag
        })
      })
      if (response.ok) {
        console.log(error)
      }
    } catch (error) {
      
    }setsubmitting(false);

  }


  return (
    <Form
    type='Create'
    post={post}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default createPrompt