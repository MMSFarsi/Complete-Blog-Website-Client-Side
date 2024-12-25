

import Banner from '../components/Banner'
import Categories from '../components/Categories'
import JoinWithUs from '../components/JoinWithUs'
import Newsletter from '../components/Newsletter'
import RecentBlog from '../components/RecentBlog'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
        <RecentBlog></RecentBlog>
        <Newsletter></Newsletter>
 
        <JoinWithUs></JoinWithUs>
       
    </div>
  )
}

export default Home