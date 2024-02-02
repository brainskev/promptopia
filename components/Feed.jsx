'use client';

import {useState, useEffect } from 'react'
import promptCatd from './PromptCard';
const PromptCard = ({ data, handleTagClick }) =>


const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const handleSearchange = (e) => {

  }
 return (
    <section className='feed'>
      <form className='relative w-full fles-center'>
        <input
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        />
      </form>
      promptCardList
    </section>
  )
}

export default feed