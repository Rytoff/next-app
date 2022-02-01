import Head from 'next/head'
import Link from 'next/link'

export function MainLayout({ children, title = 'NEXT.js' }) {
  return (
    <>
      <Head>
        <title>{title} | NEXT app</title>
        <meta name="description" content="next.js course for beginers" />
        <meta name="keywords" content="next.js, react, javascript, node.js" />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  )
}
