import React from 'react'
import blog1 from '../../assets/blog/blogimg1.jpg'
import Footer from '../Footer/Footer'

const BlogDetial = [
  {
    id: 1,
    title: 'Top E-commerce Strategies for 2024',
    desc: 'Discover the most effective e-commerce strategies for increasing your sales in 2024. From optimizing your website for conversions to leveraging social media marketing, this blog provides actionable tips to help your online store thrive.',
    img:'https://flone.jamstacktemplates.dev/assets/img/blog/blog-5.jpg',
    date:'22/feb/20204'
  },
  {
    id: 2,
    title: ' The Power of Personalization',
    desc: 'Personalization is key to winning over todays online shoppers. This blog explores the importance of personalized recommendations, targeted marketing, and customized shopping experiences to boost customer satisfaction and loyalty.',
    img:'https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date:'22/feb/20204'
  },
  {
    id: 3,
    title: ' Sustainable Going Green with Your Online Store',
    desc: 'As consumers become more environmentally conscious, sustainability in e-commerce is more important than ever. This blog discusses eco-friendly practices, from sustainable packaging to ethical sourcing, and how they can enhance your brand image and appeal to green-minded customers.',
    img:'https://media.istockphoto.com/id/1389547553/photo/beautiful-afro-woman.webp?s=1024x1024&w=is&k=20&c=4H4Bu6VMRPugYtntGPf_AsSFfUuNcSuYY9pTAh6CASc=',
    date:'22/feb/20204'
  },
  {
    id: 4,
    title: 'Navigating the World of Mobile ',
    desc: 'With the rise of mobile shopping, optimizing your e-commerce site for mobile users is crucial. This blog offers insights into mobile-friendly design, payment options, and marketing strategies to capture the growing mobile commerce market.',
    img:'https://media.istockphoto.com/id/921504204/photo/women-are-shopping-in-the-summer-she-is-using-a-credit-card-and-enjoys-shopping.jpg?s=1024x1024&w=is&k=20&c=bRhNxaNHOHZNSzln9OroEIMZI5SnTCWBH7X-h0VaLdo=',
    date:'22/feb/20204'
  },
  {
    id: 5,
    title: ' High-Quality Product',
    desc: 'Visual appeal is critical in online shopping. This blog highlights the importance of using high-quality product images and offers tips on how to capture and display your products in the best possible light to attract and convert shoppers.',
    img:blog1,
    date:'22/feb/20204'
  },
  {
    id: 6,
    title: 'Exploring the Benefits Sites',
    desc: 'Live chat can significantly enhance customer service and support. This blog explores the advantages of implementing live chat on your e-commerce site, including improving response times, increasing customer satisfaction, and boosting sales.',
    img:'https://media.istockphoto.com/id/1092844736/photo/studio-shot-of-young-beautiful-woman.webp?s=1024x1024&w=is&k=20&c=DzKE3OEkg6nV7F2k5vXkNbzs4TvBguFethY9V9A7hHY=',
    date:'22/feb/20204'
  },
  
]

function Blog() {
  return (
    <>      
    <div className="container ">
        <div className="row flex-row-reverse pt-[30px] pb-[50px] pl-[90px] ">
          <div className='col-lg-5 '>
              <div className="grid grid-cols-1 sm:grid-cols-2  ">
                {BlogDetial.map((data)=>(
                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in">
                <div className="blog-wrap-2 mb-[38px] w-[84%] shadow-xl p-4 ">
                  <div key={data.id} className="blog-img-2 pb-4">
                    <img  src={data.img} className='h-[300px] w-[500px] object-cover  rounded-md  '/>
                  </div>
                  <div className='blog-content-2'>
                    <h4 className='font-semibold '>{data.title}</h4>
                    <p className='text-sm text-gray-600 '>{data.desc}</p>
                  </div>
                </div>
              </div>
                ))} 
              </div>
            </div>
          </div>
        
        </div>
        <Footer/>
        </>

    
  )
}
export default Blog