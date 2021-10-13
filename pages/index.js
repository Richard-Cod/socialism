import Head from 'next/head'
import React from 'react'
import manageJwtToken from '../utils/manageJwtToken'

export default function Home() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

       
    </div>
  )
}
