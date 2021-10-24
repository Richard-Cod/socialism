import Head from 'next/head'
import React from 'react'
import PostForm from '../app/components/shared/PostForm'
import PagesLayout from '../app/layout/PagesLayout'

export default function Home() {

  
  return (
   <PagesLayout>
      <div className="py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="w-72 border-4 border-blue-900">
         <PostForm />
        </div>

       
    </div>
   </PagesLayout>
  )
}
