import React from 'react'
import { connect } from 'react-redux'
import getAllPostsCall from '../../../app/services/posts/getAllPostsCall'
import LoaderComponent from './LoaderComponent'
import Post from './Post'



function Posts({user}) {
    const [posts, setposts] = React.useState([])
    const [loadingPost, setloadingPost] = React.useState(false)

    React.useEffect(() => {

        const asyncFunc = async () => {
            setloadingPost(true)

            const result = await getAllPostsCall()
            console.log(result)

            if(result){
                setposts(result)
            }
            setloadingPost(false)
        }

        asyncFunc()

    }, [])



    return (
        <div className="w-full">

            
{loadingPost && <div className="w-full px-4 py-2 bg-white">
            <LoaderComponent /> 
    </div> }
            {posts?.length === 0 && !loadingPost && <h1> No post yet </h1>}

            {posts?.map((post) => <Post key={post._id} postData={post} propUser={user} />)}

        
            
        </div>
    )
}


const mapStateToProps = state => {
    return ({
         user: state.user.value
     })
  };
  
  const mapDispatchToProps = {
  };
  
  Posts = connect(mapStateToProps, mapDispatchToProps)(Posts)
  export default Posts;

  

