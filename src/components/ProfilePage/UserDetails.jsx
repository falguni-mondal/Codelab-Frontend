import { useSelector } from "react-redux";

const UserDetails = () => {
    const user = useSelector(state => state.auth.user)
    return(
        user &&
        <div className="user-dets-container w-full">
            <div className="user-image w-[70%] aspect-square rounded-full overflow-hidden">
                {
                    user.image ?
                    <img className="w-full h-full object-cover" src={user.image} alt={`${user.username}_image`} /> :
                    <div className="w-full h-full flex justify-center items-center" style={{background : user.background}}>
                        <p className="text-[6rem] leading-0 font-semibold">{user.username.charAt(0).toUpperCase()}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserDetails;