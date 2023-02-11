import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './ProfileScreen.css'

export default function ProfileScreen() {
   const user = useSelector(selectUser)

   return (
      <div className="profileScreen">
         <Nav />
         <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
               <img
                  src="https://i.pinimg.com/474x/c6/6a/73/c66a732387c737fa97526841cbdc0938.jpg"
                  alt=""
               />
               <div className="profileScreen__details">
                  <h2>{user.email}</h2>
                  <div className="profileScreen__plans">
                     <h3>Plans</h3>
                     <button
                        className="profileScreen__signOut"
                        onClick={() => auth.signOut()}
                     >
                        Sign Out
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
