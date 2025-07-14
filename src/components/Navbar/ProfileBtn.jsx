import { Link } from 'react-router-dom';

const ProfileBtn = ({ name, image=null, bg=null }) => {

    return (
        <div>
            <Link to="/user/profile" className='flex gap-1.5 items-center'>
            <p>{name}</p>
                <div id="user-profile-image" className={`w-[1.8rem] h-[1.8rem] rounded-full flex justify-center items-center`}  style={{background : `${bg}`}}>
                    {
                        image ?
                        <img className='w-full h-full object-cover' src={image} alt={`${name}_image`} />
                        :
                        <p className='font-medium mix-blend-plus-lighter'>{name.charAt(0).toUpperCase()}</p>
                    }
                </div>
            </Link>
        </div>
    )
}

export default ProfileBtn