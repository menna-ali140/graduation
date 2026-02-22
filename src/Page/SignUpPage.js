// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     department: '',
//     agreeTerms: false
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required';
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Confirm password is required';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     if (!formData.department) {
//       newErrors.department = 'Department is required';
//     }
//     if (!formData.agreeTerms) {
//       newErrors.agreeTerms = 'You must agree to the terms';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length === 0) {
//       alert('Account created successfully!');
//       navigate('/');
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* SignUp Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Create New Account
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Join our incident reporting system.
//                 </p>
//               </div>

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 {/* Full Name */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Full Name</label>
//                   <input
//                     className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                   />
//                   {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Email Address</label>
//                   <input
//                     className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>

//                 {/* Department */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Department</label>
//                   <select
//                     className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleInputChange}
//                   >
//                     <option value="">Select Department</option>
//                     <option value="fire">Fire Department</option>
//                     <option value="police">Police Department</option>
//                     <option value="medical">Medical Department</option>
//                     <option value="infrastructure">Infrastructure</option>
//                     <option value="coordination">Coordination</option>
//                   </select>
//                   {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Password</label>
//                   <input
//                     className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Confirm Password</label>
//                   <input
//                     className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="Confirm your password"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                   />
//                   {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//                 </div>

//                 {/* Terms Checkbox */}
//                 <div className="flex items-center gap-2">
//                   <input
//                     className="w-4 h-4 rounded border-slate-300"
//                     type="checkbox"
//                     name="agreeTerms"
//                     checked={formData.agreeTerms}
//                     onChange={handleInputChange}
//                     id="terms"
//                   />
//                   <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
//                     I agree to the Terms and Conditions
//                   </label>
//                 </div>
//                 {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium hover:bg-[#022F72]/90 transition-colors"
//                 >
//                   Create Account
//                 </button>
//               </form>

//               {/* Login Link */}
//               <div className="text-center text-sm">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Already have an account?{" "}
//                   <Link to="/" className="text-[#022F72] font-semibold hover:underline">
//                     Sign in here
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="text-center text-sm text-slate-500 mt-6">
//             © 2024 Incident Reporting Authority
//           </footer>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;








import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.department) {
      newErrors.department = 'Department is required';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      alert('Account created successfully!');
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">

          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[#022F72] text-4xl">
                security
              </span>
              <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
                Smart Incident Reporting System
              </h1>
            </div>
          </div>

          {/* SignUp Card */}
          <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
            <div className="flex flex-col space-y-6">

              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
                  Create New Account
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Join our incident reporting system.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Full Name</label>
                  <input
                    className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Email Address</label>
                  <input
                    className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Department */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Department</label>
                  <select
                    className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    <option value="fire">Fire Department</option>
                    <option value="police">Police Department</option>
                    <option value="medical">Medical Department</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="coordination">Coordination</option>
                  </select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Password</label>
                  <input
                    className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Confirm Password</label>
                  <input
                    className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 rounded border-slate-300"
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    id="terms"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium hover:bg-[#022F72]/90 transition-colors"
                >
                  Create Account
                </button>
              </form>

              {/* Login Link */}
              <div className="text-center text-sm">
                <p className="text-slate-600 dark:text-slate-400">
                  Already have an account?{" "}
                  <Link to="/" className="text-[#022F72] font-semibold hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>

            </div>
          </div>

          {/* Footer (مطابق للـ Login) */}
          <div className="text-center text-sm text-slate-500 dark:text-slate-400 space-y-2 break-words mt-6">
            <p>
              Unauthorized access is strictly prohibited. All activities are monitored.
            </p>

            <div className="flex justify-center items-center gap-x-4">
              <p>© 2024 Incident Reporting Authority</p>
              <span>·</span>
              <a className="hover:text-primary hover:underline" href="#">
                Help & Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
