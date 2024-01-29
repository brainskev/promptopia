import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';

export const metadata = {
    title: "Promtopis",
    description: "Discover & share AI promts"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout