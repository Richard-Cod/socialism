import React from 'react'


import { toast , ToastContainer } from 'react-toastify';
import { connect } from 'react-redux'

import PagesLayout from '../app/layout/PagesLayout'
import HeadSection from '../app/components/ProfilePage/HeadSection';
import AboutSection from '../app/components/ProfilePage/AboutSection';
import FriendsSection from '../app/components/ProfilePage/FriendsSection';
import Posts from '../app/components/ProfilePage/Posts';
import Footer from '../app/components/shared/Footer';


function Profile({user}) {

    return (
      <PagesLayout>
            <div>

{user && 

   <div className="bg-repeat-y bg-cover " style={{
       backgroundImage : "url('/bg-gray.webp')",
       height : "100vh"
   }}>

        <div className="lg:mx-44 sm:pt-5 min-h-[100vh] ">
            <HeadSection user={user} />

                <div className="lg:flex">
                    <div className="lg:mr-6 lg:min-w-[40%]">
                        <AboutSection user={user} />

                        <FriendsSection user={user} />
                    </div>


                    { <Posts user={user} />}

                   
                </div>

         </div>
            <Footer />


</div>

}
<ToastContainer />
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

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default Profile;

