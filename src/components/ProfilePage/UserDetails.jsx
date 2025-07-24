import { useState } from "react";
import { useSelector } from "react-redux";
import { userAvatar } from "../../utils/functions/avatarGenerator";

const UserDetails = () => {
    const user = useSelector(state => state.auth.user);

    return (
        user &&
        <div className="user-dets-container w-full">
            <div className="user-image w-[70%] aspect-square rounded-full overflow-hidden border-2 border-gray-800">
                {
                    user.image ?
                        <img className="w-full h-full object-cover" src={user.image} alt={`${user.username}_image`} /> :
                        <img className="w-full h-full object-cover" src={(userAvatar(user.username))} />
                }
            </div>
        </div>
    )
}

export default UserDetails;