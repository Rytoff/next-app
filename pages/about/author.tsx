import Link from 'next/link'
export default function Author() {
  return (
    <>
      <h1>Author Page</h1>
      <p><Link href="/"><a>Home</a></Link></p>
      <p><Link href="/about"><a>About</a></Link></p>
      <p><Link href="/posts"><a>Posts</a></Link></p>
    </>
  )
}
