import { userAvatar } from "../../utils/functions/avatarGenerator"

const ProfileBtn = ({ uname, image = null, bg, setRevealMenu }) => {

    return (
        <div onClick={() => setRevealMenu(prev => !prev)} className='flex gap-1.5 items-center cursor-pointer'>
            <p>{uname}</p>
            <div id="user-profile-image" className={`w-[1.8rem] h-[1.8rem] rounded-full flex justify-center items-center overflow-hidden`}>
                {
                    image ?
                        <img className='w-full h-full object-cover' src={image} alt={`${uname}_image`} />
                        :
                        <img className="w-full h-full object-cover" src={(userAvatar(uname))} />

                }
            </div>
        </div>
    )
}

export default ProfileBtn