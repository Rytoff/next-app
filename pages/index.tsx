import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
export default function Index() {
  return (
    <MainLayout title='Home'>
      
      <h1>Index Page</h1>
      <h2>Created With Next.js</h2>
      {/* <p><Link href="/"><a>Home</a></Link></p> */}
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit
        amet mauris commodo quis imperdiet. In nulla posuere sollicitudin
        aliquam ultrices. Enim eu turpis egestas pretium aenean pharetra magna
        ac. Ut morbi tincidunt augue interdum velit.
      </p>
    </MainLayout>
  )
}
