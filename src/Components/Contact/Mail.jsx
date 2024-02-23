import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Mail = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_vnx5e2n'
    const templateID = 'template_7vr9ypp'
    const publicKey = 'dKo9VH6zeG1fYZeMa'

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert("Your email is sent. We have also send you a response mail.")
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      navigate("/")
    })
  }

  // const navigate = useNavigate();
  // const EmailSent = () => {
  //   navigate("/")
  // }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex -mt-32 flex-col rounded-2xl p-10 bg-gray-400 shadow-xl shadow-gray-700 mdmax:p-5">
        <h1 className="m-auto text-xl text-red-600 font-bold">Mail Us</h1>
        
        <input type="text" name="user_name" placeholder="Name" autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 placeholder:text-gray-600" value={name} onChange={(e) => setName(e.target.value)} />
        
        <input type="email" name="user_email" placeholder='Email' autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 placeholder:text-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <input type="text" name="user_number" placeholder='Phone Number' autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 placeholder:text-gray-600" value={phone} onChange={(e) => setPhone(e.target.value)} />
        
        <textarea name="message" placeholder='Message' autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 resize-none placeholder:text-gray-600" value={message} onChange={(e) => setMessage(e.target.value)}/>
        
        <input type="submit" value="Send" className="w-32 h-10 my-2 rounded-lg font-bold m-auto bg-blue-500 active:bg-blue-900 active:scale-110" />
      </form>
    </div>
  )
}

export default Mail