import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
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
        <ContactUs></ContactUs>
       
    </div>
  )
}

export default Home