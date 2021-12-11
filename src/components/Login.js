import React from 'react';
import './styles/Login.css'

class Login extends React.Component {
    
    render() { 
        return (
            <div className=''>
                <div className='flex justify-center mt-36 h-4/5 '>
                    <div className='flex flex-col w-96 h-full rounded-lg p-20 shadow-md border-solid border-1 border-gray-800 text-slate-400 hover:shadow-lg backdrop-blur-lg backdrop-opacity-95'>
                        
                        <h6 className='text-sm mt-1 mb-1 text-white font-normal'>Username or Email Address</h6>
                        <input type="email" placeholder="name@example.com"className='bg-blue-dark-mode rounded-sm h-8 text-xs pl-4 pt-2 pb-2 border-1 border-gray-800'/>

                        <h6 className='text-sm font-normal mt-4 mb-1 text-white'>Password</h6>
                        <input type="password" placeholder="Password" className='bg-blue-dark-mode rounded-sm h-8 text-sm pl-4 pt-2 pb-2 border-1 border-gray-800'/>
                        <a href='/' className='text-xs text-orange-custom font-normal mt-1 w-56 flex justify-end pr-1'>
                            Forgot Password?
                        </a>

                    <div className='w-56 flex justify-center mt-5'>
                    <button className='bg-orange-dark-custom p-2 w-56 text-orange-custom rounded-lg flex justify-center shadow-md bg-orange-custom hover:text-white font-medium text-sm'>Log in</button>
                    </div>
                        

                    </div>
                </div>    
            </div>
            
        )
    }
}
 
export default Login;