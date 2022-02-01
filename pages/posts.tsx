import { NextPageContext } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import { MyPost } from '../interfaces/post'

interface PostPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostPageProps) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts`)
      const json = await res.json()
      setPosts(json)
    }
    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Posts">
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null }
  }
  const res = await fetch(`${process.env.API_URL}/posts`)
  const posts: MyPost[] = await res.json()
  return { posts }
}
