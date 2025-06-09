// import { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// const AuthForms = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log('Login data:', { email: formData.email, password: formData.password });
//       // Add your login logic here
//     } else {
//       if (formData.password !== formData.confirmPassword) {
//         alert("Passwords don't match!");
//         return;
//       }
//       console.log('Signup data:', { 
//         name: formData.name, 
//         email: formData.email, 
//         password: formData.password 
//       });
//       // Add your signup logic here
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           {/* Toggle between Login and Signup */}
//           <div className="flex border-b border-pink-100">
//             <button
//               className={`flex-1 py-4 px-6 font-medium text-center ${isLogin ? 'bg-pink-100 text-pink-700' : 'text-pink-500 hover:bg-pink-50'}`}
//               onClick={() => setIsLogin(true)}
//             >
//               Login
//             </button>
//             <button
//               className={`flex-1 py-4 px-6 font-medium text-center ${!isLogin ? 'bg-pink-100 text-pink-700' : 'text-pink-500 hover:bg-pink-50'}`}
//               onClick={() => setIsLogin(false)}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="p-6 space-y-6">
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-pink-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//             )}

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-pink-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-pink-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
//                 placeholder="Enter your password"
//                 required
//                 minLength="6"
//               />
//             </div>

//             {!isLogin && (
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-pink-700 mb-1">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
//                   placeholder="Confirm your password"
//                   required
//                   minLength="6"
//                 />
//               </div>
//             )}

//             <div className="flex items-center justify-between">
//               {isLogin && (
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 text-pink-600 focus:ring-pink-300 border-pink-200 rounded"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-pink-700">
//                     Remember me
//                   </label>
//                 </div>
//               )}

//               {isLogin && (
//                 <div className="text-sm">
//                   <a href="/forgot-password" className="font-medium text-pink-600 hover:text-pink-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
//             >
//               {isLogin ? 'Sign in' : 'Sign up'}
//             </button>
//           </form>

//           {isLogin && (
//             <div className="px-6 pb-6 text-center">
//               <p className="text-sm text-pink-600">
//                 Don't have an account?{' '}
//                 <button
//                   onClick={() => setIsLogin(false)}
//                   className="font-medium text-pink-700 hover:text-pink-600"
//                 >
//                   Sign up
//                 </button>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default AuthForms;

import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const AuthForms = () => {
  const { setUser } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await axios.post(
          `${API_BASE}/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );
        if(res.data.status === 200){
           setUser(res.data.data);
          localStorage.setItem('user', JSON.stringify(res.data.data));
         
          toast.success(res.data.message);
          setTimeout(()=>{
             navigate('/dashboard');
          },3000)
         
        }
        else{
          toast.error(res.data.message);
        }

      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords don't match!");
          return;
        }

        const res = await axios.post(
          `${API_BASE}/signup`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );

        toast.success(res.data.message);
        setIsLogin(true);
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Something went wrong';
      toast.error(message);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b border-pink-100">
              <button
                className={`flex-1 py-4 px-6 font-medium text-center ${
                  isLogin
                    ? 'bg-pink-100 text-pink-700'
                    : 'text-pink-500 hover:bg-pink-50'
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-4 px-6 font-medium text-center ${
                  !isLogin
                    ? 'bg-pink-100 text-pink-700'
                    : 'text-pink-500 hover:bg-pink-50'
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-pink-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-pink-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-pink-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                  minLength="6"
                />
              </div>

              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-pink-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                    minLength="6"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                {isLogin && (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-pink-600 focus:ring-pink-300 border-pink-200 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-pink-700"
                    >
                      Remember me
                    </label>
                  </div>
                )}
                {isLogin && (
                  <div className="text-sm">
                    <a
                      href="/forgot-password"
                      className="font-medium text-pink-600 hover:text-pink-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </form>

            {isLogin && (
              <div className="px-6 pb-6 text-center">
                <p className="text-sm text-pink-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-pink-700 hover:text-pink-600"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthForms;
