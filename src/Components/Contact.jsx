import React from 'react'
import Msg from '../assets/msg-icon.png'
import Mail from '../assets/mail-icon.png'
import location from '../assets/location-icon.png'
import call from '../assets/phone-icon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cd40681-1aac-4b9f-9ed7-cbe2b1172050");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("")
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <div id='Contact' className='mt-30'>
      <div className='flex justify-center flex-col'>
        <h1 className=' text-[16px] p-3 mx-auto text-blue-800' text>CONTACT</h1>
        <h1 className='text-4xl mx-auto font-medium'>Get In Touch</h1>
      </div>
      <div className='flex justify-evenly max-lg:flex-col max-lg:justify-center max-lg:items-center'>
          <div className=''>
            <div className='flex gap-5 mt-20'>
            <h1 className='text-3xl font-medium'>Send us a message</h1>
            <img src={Msg} alt="" className='w-10' />
          </div>
          <div>
            <p className='text-[16px] text-gray-600 w-130 max-lg:text-[14px] max-lg:text-center max-lg:w-70 mt-5'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <div className='flex mt-5 gap-3'>
              <img src={Mail} alt="" className='items-center mt-1 w-8 h-6' />
              <p className='text-[20px] items-center text-gray-600'> pranamshaw09@gmail.com </p>
            </div>
            <div className='flex gap-3 mt-3'>
              <img src={call} alt="" className='w-8' />
              <p><p className='text-[20px] items-center text-gray-600'> +91 6289771022 </p></p>
            </div>
            <div className='flex gap-3 mt-3'>
              <img src={location} alt="" className='w-7' />
              <p><p className='text-[20px] items-center text-gray-600 '>400 SpringField Drive</p></p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <form onSubmit={onSubmit}>
          <label className='text-[16px] text-gray-600 font-medium' htmlFor="">Your Name</label>
          <br />
          <input name='Name' className='bg-[#ebecfe] border-1 w-[600px] max-xl:w-[400px] max-md:w-[300px] border-[#111]   text-[16px] p-3 mb-5 h-[40px]' type="text" placeholder='Enter your name' required />
          <br />
          <label className='text-[16px] text-gray-600 font-medium' htmlFor="">Your Number</label>
          <br />
          <input name='Phone' className='bg-[#ebecfe] border-1 w-[600px] max-xl:w-[400px] max-md:w-[300px] border-[#111]  text-[16px] p-3 mb-5 h-[40px]' type="tel" placeholder='Enter your mobile number' required />
          <br />
          <label className='text-[16px] text-gray-600 font-medium' htmlFor="">Your Email</label>
          <br />
          <input name='Email' className='bg-[#ebecfe] border-1 w-[600px] max-xl:w-[400px] max-md:w-[300px] border-[#111]  text-[16px] p-3 mb-5 h-[40px]' type="email" placeholder='Enter your email' required />
          <br />
          <label className='text-[16px] text-gray-600 font-medium' htmlFor="">Your Message</label>
          <br />
          <textarea name="Message" placeholder='Enter your message' className='bg-[#ebecfe] border-1 w-[600px] max-xl:w-[400px] max-md:w-[300px] border-[#111] h-[200px]  text-[16px] p-3' required id=""></textarea>
          <br />
          <button type='submit' className='flex gap-3 text-[16px] bg-blue-800 text-white px-10 py-3 border-2 border-blue-800 rounded-md hover:bg-transparent hover:text-black transition-all duration-150 cursor-pointer group'>{`${result ? result : "Send Message"}`}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact