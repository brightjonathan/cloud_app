import {useState} from 'react';
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'



const Footer = () => {
  
    //date dynamic
    const year = new Date().getFullYear();
    
    const [Subscribe, setSubscribe] = useState("");

    
        const submit = (e) => {
            e.preventDefault()
        };
    
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
         
          <div>
            <h6 className='font-bold uppercase pt-2'> Solution</h6>
            <ul>
                <li className='py-1'> Marketing</li>
                <li className='py-1'> Analytics</li>
                <li className='py-1'> Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'> Cloud</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercase pt-2'> Community</h6>
            <ul>
                <li className='py-1'> Marketing</li>
                <li className='py-1'> Analytics</li>
                <li className='py-1'> Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'> Cloud</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercase pt-2'> Support</h6>
            <ul>
                <li className='py-1'> Pricing</li>
                <li className='py-1'> Analytics</li>
                <li className='py-1'> Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'> Cloud</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercase pt-2'> Company</h6>
            <ul>
                <li className='py-1'> Marketing</li>
                <li className='py-1'> Analytics</li>
                <li className='py-1'> Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'> Cloud</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercase pt-2'> Legal </h6>
            <ul>
                <li className='py-1'> Marketing</li>
                <li className='py-1'> Analytics</li>
                <li className='py-1'> Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'> Cloud</li>
            </ul>
          </div>

          <div className='col-span-2 pt-8 mt-8 md:pt-2'>
            <p className='font-bold uppercase'> Subscribe to our newsletter </p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>

            <form className='flex flex-col sm:flex-row' onSubmit={submit} >
             <input 
             type="email" 
             placeholder='Enter email..' 
             className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold'
             value={Subscribe}
             onChange={(e) => setSubscribe(e.target.value)}
             />
             <button className='p-2 mb-4 bg-black rounded-2xl py-4'>Subscribe</button>
            </form>

          </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'> @{year} Workflow, CLL. All rights reserved </p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
        <a href="https://www.linkedin.com/in/bright-jonathan-554970212/" target="_blank" rel="noopener noreferrer" > <AiFillLinkedin/> </a>
        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" > <FaTwitter/> </a>
        <a href="https://github.com/brightjonathan" target="_blank" rel="noopener noreferrer" > <AiFillGithub/> </a>
        <a href="https://www.facebook.com/home.php?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" > <AiFillFacebook/> </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" > <BsInstagram/> </a>
        </div>
      </div>

    </div>
  )
}

export default Footer;
