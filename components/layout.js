import NavBar from "./navbar";
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className=" min-h-screen flex">
            <Head>
                <title>National Academy</title>
            </Head>
            <NavBar />
            <div className='bg-white flex-grow mt-1 mr-2 mb-2 rounded-lg p-4'>{children}</div>
        </div>
    )
}