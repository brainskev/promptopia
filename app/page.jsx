
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-centre flex-col' >
    <h1 className='head_text text-center'>
      Discover & Share
       <br className='max-md:hidden'/>
      <span className='orange_gradient'> AI-Powered Promtps</span>
    </h1>
    <p className='desc text-center' >
       promptia is an open-source AI prompting tool for modern world to discover, create and share creative Promtps prompts
    </p>
  
   <Feed/>
    </section>
  )
}

export default Home