import React from 'react'
import "../../styles/footer.css"
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer-container">
        <h2> A PROPOS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat error commodi provident aliquam aliquid eius veniam, modi amet architecto impedit distinctio. Dignissimos inventore velit sit, repellendus laborum distinctio ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est animi labore unde eos placeat obcaecati! Ipsam beatae laboriosam, quia corrupti quae deleniti cumque alias consequatur iste ea neque, repudiandae do lorem

        </p>
        <h2>SUIVEZ-NOUS</h2>
       <div className="icone">
        <FaFacebookF className='iconei'/>
        <FaTwitter className='iconei'/>
        <FaYoutube className='iconei'/>
        <FaInstagram className='iconei'/>
        <FaLinkedinIn className='iconei'/>

   
        </div>

    </div>
  )
}
