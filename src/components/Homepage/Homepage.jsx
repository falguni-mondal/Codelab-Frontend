import Works from './userWorks/Works';
import Feeds from './homeFeeds/Feeds';
import Updates from './updatesSection/Updates';


const Homepage = () => {
  return (
    <div className='w-full flex' id='homepage'>
      <Works />
      <div className="content-page w-[75%] h-[90vh] overflow-y-auto flex pr-10 prime-bg">
        <Feeds />
        <Updates />
      </div>
    </div>
  )
}

export default Homepage