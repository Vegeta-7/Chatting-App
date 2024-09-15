import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md';
import { CiLock } from 'react-icons/ci';
import { FaRegEye, FaEyeSlash, FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { PiFingerprint } from 'react-icons/pi'
import axios from 'axios';

const Register = ({ signIn, setSignIn }) => {
    const navigate = useNavigate();
    const [see, setSee] = useState(true);
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState('');

    const handleChange=({currentTarget: input})=>{
        setData({...data,[input.name]:input.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{            
            const url = "http://localhost:3000/api/register";            
            const {data:res} = await axios.post(url,data);
            navigate("/home");
            console.log(res.message)
        }catch(error){
            if(error.response && error.response.status>=400 && error.response.status<=500){
                setError(error.response.data.message);
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 m-4">
            <form className="bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold mb-6">
                    Register
                </h2>
                <p className="text-sm text-center mb-6">By registering in you agree to our <a href="/terms" className="text-green-500">Term and privacy policy</a></p>
                <div className="flex gap-4 mb-4">          
                    <button className={`flex-1 py-2 ${signIn ? 'border-b-2 border-b-blue-400':''}`} onClick={()=>{setSignIn(true)}}>Login</button>
                    <button className={`flex-1 py-2 ${!signIn ? 'border-b-2 border-b-blue-400':''}`} onClick={()=>{setSignIn(false)}}>Register</button>
                </div>
                <div className="space-y-6">
                    <div className='flex w-full py-2 px-4 border-b-2 border-b-gray-300 items-center'>
                        <MdOutlineMail />
                        <input type="email" placeholder="Email Address" className='ml-2 w-full outline-none' onChange={handleChange} name='email'/>
                    </div>
                    <div className='flex w-full py-2 px-4 border-b-2 border-b-gray-300 items-center'>
                        <CiLock />
                        <input type={ see ? 'password' : 'text' } placeholder="Password" className='ml-2 w-full outline-none' onChange={handleChange} name='password'/>
                        <span onClick={()=>{setSee(!see)}} className='cursor-pointer'>
                            { !see ? <FaRegEye />: <FaEyeSlash/> }
                        </span>
                    </div>          
                </div>
                <div className="flex justify-between items-center mt-4 mb-6">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm">Remember password</label>
                    </div>
                    <a href="/forgot" className="text-sm text-blue-500">Forget password</a>
                </div>
                {error && (
                    <div className='w-96 p-3 m-1 mx-0 text-sm text-white rounded text-center' style={{ backgroundColor: '#f34646' }}>
                        {error}
                    </div>
                )}
                <button className="w-full bg-blue-500 py-3 rounded text-white" type='submit'>Register</button>
                <p className="text-center my-6 text-sm">or connect with</p>
                <div className="flex justify-center gap-4">
                    <a href="/facebook" className="text-white bg-blue-800 rounded-full p-1"><FaFacebook /></a>
                    <a href="/instagram" className="text-white bg-blue-600 p-1 rounded-full"><FaInstagram /></a>
                    <a href="/pinterest" className="text-white bg-red-600 p-1 rounded-full"><FaPinterest /></a>
                    <a href="/linkedin" className="text-white bg-blue-600 p-1 rounded-full"><FaLinkedin /></a>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <PiFingerprint className='h-14 w-14 bg-[#0386D0] text-white rounded-lg'/>
                </div>
            </form>
        </div>
    )
}

export default Register