const ProfileBtn = ({ name, image = null, bg = null, setRevealMenu }) => {

    return (
        <div onClick={() => setRevealMenu(prev => !prev)} className='flex gap-1.5 items-center cursor-pointer'>
            <p>{name}</p>
            <div id="user-profile-image" className={`w-[1.8rem] h-[1.8rem] rounded-full flex justify-center items-center`} style={{ background: `${bg}` }}>
                {
                    image ?
                        <img className='w-full h-full object-cover' src={image} alt={`${name}_image`} />
                        :
                        <p className='font-medium mix-blend-plus-lighter'>{name.charAt(0).toUpperCase()}</p>
                }
            </div>
        </div>
    )
}

export default ProfileBtn