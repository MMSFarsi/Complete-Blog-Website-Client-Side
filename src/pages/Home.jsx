import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Faq from '../components/Faq'
import JoinWithUs from '../components/JoinWithUs'
import Newsletter from '../components/Newsletter'
import PopularBlogs from '../components/PopularBlogs'
import RecentBlog from '../components/RecentBlog'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <PopularBlogs></PopularBlogs>
        <RecentBlog></RecentBlog>
        <Newsletter></Newsletter>
        <Faq></Faq>
        <JoinWithUs></JoinWithUs>
        <ContactUs></ContactUs>
       
    </div>
  )
}

export default Home