import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import Posts from '../app/components/ProfilePage/Posts'
import PostForm from '../app/components/shared/PostForm'
import PagesLayout from '../app/layout/PagesLayout'

function Home({user}) {

  
  return (
   <PagesLayout>
      <div className="py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex">

      <div className="w-[25%] border-4 border-blue-900">
         <PostForm />
        </div>



          <div className="w-1/2 mx-2">

            <Posts />

          </div>

          <div className="w-[25%] border-4 border-blue-900">
           <PostForm />
           </div>


      </div>


      

        

       
    </div>
   </PagesLayout>
  )
}



const mapStateToProps = state => {
  return ({
       user: state.user.value
   })
};

const mapDispatchToProps = {
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;
