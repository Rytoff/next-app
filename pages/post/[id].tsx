import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MainLayout } from '../../components/MainLayout'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { MyPost } from '../../interfaces/post'

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await res.json()
      setPost(data)
    }
    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return (
      <MainLayout>
        <p>loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Post">
      <h1>Post {post.id}</h1>
      <hr />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={'/posts'}>
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null }
  }
  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`)
  const post: MyPost[] = await res.json()
  return { post }
}
// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return { post: null }
//   // }
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await res.json()
//   return { props: { post } }
// }
