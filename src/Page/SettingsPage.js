// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SettingsPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('user@example.com');
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [changePassword, setChangePassword] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   const [settings, setSettings] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//     pushNotifications: true,
//     theme: 'light',
//     language: 'en'
//   });

//   const handlePasswordChange = (e) => {
//     setChangePassword({
//       ...changePassword,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSavePassword = () => {
//     if (changePassword.newPassword !== changePassword.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     if (changePassword.newPassword.length < 6) {
//       alert('Password must be at least 6 characters');
//       return;
//     }
//     alert('Password updated successfully');
//     setChangePassword({
//       oldPassword: '',
//       newPassword: '',
//       confirmPassword: ''
//     });
//     setShowPasswordForm(false);
//   };

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       navigate('/');
//     }
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Warning: This will permanently delete your account. Are you sure?')) {
//       alert('Account deleted successfully');
//       navigate('/');
//     }
//   };

//   const handleSettingChange = (key) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const handleSelectChange = (key, value) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-2xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-bold">Settings</h1>
//             <p className="text-slate-500 dark:text-slate-400 text-base mt-2">Manage your account settings and preferences</p>
//           </div>

//           {/* Settings Sections */}
//           <div className="space-y-6">
//             {/* Account Settings */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Account Settings</h2>
              
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Email Address</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">{email}</p>
//                   </div>
//                   <button className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium">
//                     Change
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Password</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated 3 months ago</p>
//                   </div>
//                   <button 
//                     onClick={() => setShowPasswordForm(!showPasswordForm)}
//                     className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
//                   >
//                     Change
//                   </button>
//                 </div>

//                 {showPasswordForm && (
//                   <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <div className="space-y-3">
//                       <input
//                         type="password"
//                         name="oldPassword"
//                         placeholder="Current Password"
//                         value={changePassword.oldPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="newPassword"
//                         placeholder="New Password"
//                         value={changePassword.newPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm New Password"
//                         value={changePassword.confirmPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <div className="flex gap-2">
//                         <button
//                           onClick={handleSavePassword}
//                           className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setShowPasswordForm(false)}
//                           className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Notification Settings */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Notifications</h2>
              
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Email Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive email updates</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.emailNotifications}
//                       onChange={() => handleSettingChange('emailNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">SMS Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive SMS alerts</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.smsNotifications}
//                       onChange={() => handleSettingChange('smsNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Push Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive push notifications</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.pushNotifications}
//                       onChange={() => handleSettingChange('pushNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Preferences */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Preferences</h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Language</label>
//                   <select
//                     value={settings.language}
//                     onChange={(e) => handleSelectChange('language', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="en">English</option>
//                     <option value="ar">العربية</option>
//                     <option value="fr">Français</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Theme</label>
//                   <select
//                     value={settings.theme}
//                     onChange={(e) => handleSelectChange('theme', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                     <option value="auto">Auto</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Danger Zone */}
//             <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
//               <h2 className="text-red-900 dark:text-red-400 text-xl font-bold mb-4">Danger Zone</h2>
              
//               <div className="space-y-3">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
//                 >
//                   Logout
//                 </button>

//                 <button
//                   onClick={handleDeleteAccount}
//                   className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//                 >
//                   Delete Account
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Save Button */}
//           <div className="mt-8 flex gap-2">
//             <button className="flex-1 px-6 py-3 bg-[#022F72] text-white rounded-lg hover:bg-[#022F72]/90 transition-colors font-medium">
//               Save Changes
//             </button>
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  // Account
  const [email, setEmail] = useState('user@example.com');
  const [emailInput, setEmailInput] = useState(email);
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Password
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [changePassword, setChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notifications & Preferences
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    theme: 'light',
    language: 'en'
  });

  // Handlers
  const handlePasswordChange = (e) => {
    setChangePassword({ ...changePassword, [e.target.name]: e.target.value });
  };

  const handleSavePassword = () => {
    if (changePassword.newPassword !== changePassword.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (changePassword.newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    alert('Password updated successfully');
    setChangePassword({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordForm(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) navigate('/');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Warning: This will permanently delete your account. Are you sure?')) {
      alert('Account deleted successfully');
      navigate('/');
    }
  };

  const handleSettingChange = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveEmail = () => {
    if (!emailInput.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    setEmail(emailInput);
    setShowEmailForm(false);
    alert('Email updated successfully');
  };

  const handleSaveAll = () => {
    // هنا ممكن تضيف ارسال البيانات للـ API
    alert('All changes saved!');
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-bold">Settings</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base mt-2">Manage your account settings and preferences</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">

            {/* Account Settings */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Account Settings</h2>
              
              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">Email Address</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{email}</p>
                  </div>
                  <button 
                    onClick={() => setShowEmailForm(!showEmailForm)}
                    className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
                  >
                    Change
                  </button>
                </div>

                {showEmailForm && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="space-y-3">
                      <input
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter new email"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveEmail}
                          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setShowEmailForm(false)}
                          className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Password */}
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">Password</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated 3 months ago</p>
                  </div>
                  <button 
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                    className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
                  >
                    Change
                  </button>
                </div>

                {showPasswordForm && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="space-y-3">
                      <input
                        type="password"
                        name="oldPassword"
                        placeholder="Current Password"
                        value={changePassword.oldPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={changePassword.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={changePassword.confirmPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSavePassword}
                          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setShowPasswordForm(false)}
                          className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Notifications</h2>
              <div className="space-y-3">
                {['emailNotifications', 'smsNotifications', 'pushNotifications'].map((key) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">
                        {key === 'emailNotifications' ? 'Email Notifications' :
                         key === 'smsNotifications' ? 'SMS Notifications' : 'Push Notifications'}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {key === 'emailNotifications' ? 'Receive email updates' :
                         key === 'smsNotifications' ? 'Receive SMS alerts' : 'Receive push notifications'}
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings[key]}
                        onChange={() => handleSettingChange(key)}
                        className="w-5 h-5"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-900 dark:text-white font-medium mb-2">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSelectChange('language', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                  >
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-900 dark:text-white font-medium mb-2">Theme</label>
                  <select
                    value={settings.theme}
                    onChange={(e) => handleSelectChange('theme', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            {/* <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <h2 className="text-red-900 dark:text-red-400 text-xl font-bold mb-4">Danger Zone</h2>
              <div className="space-y-3">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Logout
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Delete Account
                </button>
              </div>
            </div> */}

          </div>

          {/* Save Button */}
          <div className="mt-8 flex gap-2">
            <button 
              onClick={handleSaveAll}
              className="flex-1 px-6 py-3 bg-[#022F72] text-white rounded-lg hover:bg-[#022F72]/90 transition-colors font-medium"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
