
// مستنيه api

//api code
// import React, { useState, useEffect } from 'react';

// const API_BASE_URL = "PUT_REAL_API_URL_HERE"; // 👈 هنا تحطي اللينك الحقيقي

// const SIRSDashboard = () => {
//   const [stats, setStats] = useState([]);
//   const [reports, setReports] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // 🔹 Stats API
//         const statsRes = await fetch(`${API_BASE_URL}/dashboard/stats`);
//         const statsData = await statsRes.json();

//         // 🔹 Reports API
//         const reportsRes = await fetch(`${API_BASE_URL}/dashboard/reports`);
//         const reportsData = await reportsRes.json();

//         // 🔹 Activities API
//         const activitiesRes = await fetch(`${API_BASE_URL}/dashboard/activities`);
//         const activitiesData = await activitiesRes.json();

//         setStats(statsData);
//         setReports(reportsData);
//         setActivities(activitiesData);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load dashboard data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading dashboard...</div>;
//   if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

//   return (
//     <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen">
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 flex flex-col">
//           <div className="p-4 flex flex-col gap-4 h-full">
//             <div className="flex items-center gap-3 px-2">
//               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmCCJo-oM5ZKmlrCtQENmVJBtzVJtaVzufiWbTAg0kV0cHKlxh0PTc3iZjlwnhKXRS3U9YYXeM9ZM-gqTO79ZlrYZph7QZMwmfHbEIE60HKfcr3nZD5Kji3RDCc48S3Nq5ZKI5o2f0LV17QIU0Y3SME820GaOXgGSvmvZeAaIgY4E5zLbmWz2daKgnviDIMY4ybB5Ab_ToEygkkNfVJpVXyfByYen4xrBKBQ22lFKDm-1lo64vLz7yVF_Ud38-POgVguV4muxNjdYn")'}}></div>
//               <div className="flex flex-col">
//                 <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">SIRS</h1>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Smart Incident Reporting</p>
//               </div>
//             </div>
            
//             <nav className="flex flex-col gap-2 mt-4 flex-grow">
//               <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:bg-primary/30 dark:text-white" href="#">
//                 <span className="material-symbols-outlined text-primary dark:text-white">dashboard</span>
//                 <p className="text-sm font-medium leading-normal">Dashboard</p>
//               </a>
//               {['description', 'map', 'bar_chart', 'settings'].map((icon) => (
//                 <a key={icon} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" href="#">
//                   <span className="material-symbols-outlined">{icon}</span>
//                   <p className="text-sm font-medium leading-normal capitalize">{icon === 'description' ? 'Reports' : icon === 'bar_chart' ? 'Analytics' : icon}</p>
//                 </a>
//               ))}
//             </nav>

//             <div className="flex flex-col gap-1">
//               <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" href="#">
//                 <span className="material-symbols-outlined">logout</span>
//                 <p className="text-sm font-medium leading-normal">Log out</p>
//               </a>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto">
//           <div className="p-8">
//             {/* Heading */}
//             <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//               <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard</p>
//               <div className="flex items-center gap-4">
//                 <button className="relative rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
//                   <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
//                   <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
//                 </button>
//                 <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5LAPsZSi2mFfit8bktmFbvTYtwDKVDCw5jW0LQJ0pyhDpM8vn_xbzsU60klQ4u1-iL4bE6U8yjgiLRLrx9uqH6m4o1XXDvd7K8vIOMYuauUqLkoifONpaJwdTcMmJ6JdrWwDB8NCL-btWsjK2207gOL1HMsxVAsPPVzBorO8gzKMquUyf2RpK4ys_YfUs2nMpqmnQfZTMw5se7A3J3_aOdUMeSB9NJnnT4mu43qDnKwMOMzoiaZlakoN7S--CWT17ZDfImJzoNnc")'}}></div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
//               {stats.map((stat, i) => (
//                 <div key={i} className={`flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900/50 border ${stat.border} stat-card`}>
//                   <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-normal">{stat.label}</p>
//                   <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">{stat.value}</p>
//                   <p className={`${stat.trendClass} text-sm font-medium leading-normal`}>{stat.trend}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Reports Table */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2 flex flex-col gap-8">
//                 <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
//                   <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Latest Reports</h2>
//                     <a className="text-sm font-medium text-primary hover:underline" href="#">View All</a>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                       <thead>
//                         <tr className="border-b border-gray-200 dark:border-gray-800">
//                           <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Incident ID</th>
//                           <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Type</th>
//                           <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Status</th>
//                           <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Reported Time</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {reports.map((r, idx) => (
//                           <tr key={idx} className="border-b border-gray-200 dark:border-gray-800">
//                             <td className="px-4 py-3 text-gray-800 dark:text-gray-200 text-sm">{r.id}</td>
//                             <td className="px-4 py-3 text-gray-800 dark:text-gray-200 text-sm">{r.type}</td>
//                             <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${r.badge}`}>{r.status}</span></td>
//                             <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">{r.time}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="lg:col-span-1 flex flex-col gap-8">
//                 <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
//                   <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Recent Activity</h2>
//                   <div className="flex flex-col gap-4">
//                     {activities.map((act, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <div className={`p-2 ${act.bg} dark:${act.bg}/50 rounded-full`}>
//                           <span className={`material-symbols-outlined ${act.iconCol} text-base`}>{act.type}</span>
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-800 dark:text-gray-200">{act.text} <span className="font-bold">{act.id}</span></p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">{act.time}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SIRSDashboard;





//mock data code
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SIRSDashboard = () => {
  // --- States ---
  const [stats, setStats] = useState([]);
  const [reports, setReports] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();


const volumeData = [
    { day: 'Mon', count: 12 },
    { day: 'Tue', count: 18 },
    { day: 'Wed', count: 15 },
    { day: 'Thu', count: 25 },
    { day: 'Fri', count: 20 },
    { day: 'Sat', count: 28 },
    { day: 'Sun', count: 35 },
  ];

  const [notifications, setNotifications] = useState([
    { id: 1, text: "New High Priority Incident", time: "5 mins ago", icon: "priority_high", color: "text-red-600" },
    { id: 2, text: "Incident #1254 Resolved", time: "15 mins ago", icon: "check_circle", color: "text-green-600" },
    { id: 3, text: "New Report Submitted", time: "1 hour ago", icon: "flag", color: "text-yellow-600" }
  ]);

  useEffect(() => {
    // --- Mock Data ---
    const fetchData = async () => {
      // محاكاة تأخير التحميل
      await new Promise((res) => setTimeout(res, 800));

      setStats([
        { label: "Total Reports", value: "1,426", trend: "+5.2%", trendClass: "text-green-600", border: "border-gray-200" },
        { label: "Pending", value: "82", trend: "+1.5%", trendClass: "text-green-600", border: "border-gray-200" },
        { label: "In Progress", value: "45", trend: "-2.1%", trendClass: "text-red-600", border: "border-gray-200" },
        { label: "Resolved", value: "1,291", trend: "+8.0%", trendClass: "text-green-600", border: "border-gray-200" },
        { label: "High Priority", value: "8", trend: "+12.5%", trendClass: "text-green-600", border: "border-red-500/50" }
      ]);

      setReports([
        { id: "#1256", type: "Traffic Accident", status: "In Progress", badge: "bg-orange-100 text-orange-800", time: "2 mins ago" },
        { id: "#1255", type: "Fire", status: "Resolved", badge: "bg-green-100 text-green-800", time: "28 mins ago" },
        { id: "#1254", type: "Medical Emergency", status: "High Priority", badge: "bg-red-100 text-red-800", time: "45 mins ago" },
        { id: "#1252", type: "Public Disturbance", status: "Pending", badge: "bg-gray-100 text-gray-800", time: "2 hours ago" }
      ]);

      setActivities([
        { id: "#1254", type: "priority_high", bg: "bg-red-100", iconCol: "text-red-600", text: "New High Priority Incident", time: "45 mins ago" },
        { id: "#1253", type: "task_alt", bg: "bg-green-100", iconCol: "text-green-600", text: "Incident has been resolved", time: "1 hour ago" },
        { id: "#1250", type: "add_comment", bg: "bg-blue-100", iconCol: "text-primary", text: "New comment on Incident", time: "3 hours ago" }
      ]);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="w-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard</p>
              <div className="flex items-center gap-4 relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-40">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-gray-900 dark:text-white font-bold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notif) => (
                          <div key={notif.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                            <div className="flex items-start gap-3">
                              <span className={`material-symbols-outlined ${notif.color}`}>{notif.icon}</span>
                              <div className="flex-1">
                                <p className="text-gray-900 dark:text-gray-100 text-sm font-medium">{notif.text}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{notif.time}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">No notifications</div>
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-center">
                      <Link to="/notifications" className="text-primary text-sm font-medium hover:underline">View All</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className={`flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900/50 border ${stat.border} stat-card`}>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-normal">{stat.label}</p>
                  <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">{stat.value}</p>
                  <p className={`${stat.trendClass} text-sm font-medium leading-normal`}>{stat.trend}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Graph */}
                {/* <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Incident Volume (Last 7 Days)</h2>
                  <img className="w-full h-64 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzWZqjUhQ-zWks5xLs1-bh69ZP9FbDHHiqusFoKi2ejkECgqcg9MakNbWiYexs2Q7QWYA-memZ8fuxqT9GkRaBLIwMcvjvOhT8uuZL5sCOorD1EHOLqYKX9e5GIAbFJZ5QRxPYCdVP4qzBUpM_V1lGCUgLAGjVkptAkLZO3DN6iAJEChoAvku6xNzPSNBzzKKbhdNGyC4_3iKyvXEK-0MZsMIWL9DPiWmp5-IeXrQ8OAnML0N4PBHzPourtHHXEwBffHiWBWcTdye7" alt="Trend Graph" />
                </div> */}
                <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h2 className="text-gray-900 dark:text-white text-lg font-bold mb-6">Incident Volume (Last 7 Days)</h2>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}} 
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#0284c7" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#0284c7' }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>




                {/* Table */}
                <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Latest Reports</h2>
                    <Link to="/reports" className="text-sm font-medium text-primary hover:underline">View All</Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-800">
                          <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Incident ID</th>
                          <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Type</th>
                          <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Status</th>
                          <th className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm font-medium">Reported Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reports.map((r, idx) => (
                          <tr key={idx} className="border-b border-gray-200 dark:border-gray-800">
                            <td className="px-4 py-3 text-gray-800 dark:text-gray-200 text-sm">{r.id}</td>
                            <td className="px-4 py-3 text-gray-800 dark:text-gray-200 text-sm">{r.type}</td>
                            <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${r.badge}`}>{r.status}</span></td>
                            <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">{r.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                {/* Hotspots */}
                {/* <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Incident Hotspots</h2>
                    <button onClick={() => setIsMapExpanded(!isMapExpanded)} className="text-sm font-medium text-primary hover:underline">
                      {isMapExpanded ? "Collapse" : "Full Map"}
                    </button>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfDqLE_f3pN59KtCgxChknR0RGa9SsN8JYW0KUPVd2RiirHNequIbcfqoyPqxIjLVH-U_UliaRj_aTjQtHvlV3WmluZhsjmn2lVqf2W0XcmOtWdHqazOBx9HHO9uOMIvleUEn1Di0_4UHUvzBkn0BZzs1o1hlucu3UHYx39N_HTF-jZ2qlhCIvu1471A7I0QFixBnOyXFHYKy91I3mNr-Ta0dDPsap9lMvlaipWU-VfUiIGXI0kB7kyTe-Xu_kRfg53T6N_Fzy43r" 
                      alt="Heatmap" 
                      onClick={() => setIsMapExpanded(!isMapExpanded)}
                    />
                  </div>
                </div> */}

                {/* Hotspots */}
{/* <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Incident Hotspots</h2>
    
    
    <button 
      onClick={() => navigate('/map')} 
      className="text-sm font-medium text-primary hover:underline"
    >
      Full Map
    </button>
  </div>
  
  <div className="aspect-square rounded-lg overflow-hidden relative group">
    <img 
      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" 
      src="https://api.placeholder.com/400x400?text=Map+Preview" 
      alt="Heatmap" 
      onClick={() => navigate('/map')} // تروح للماب لما تضغطي على الصورة كمان
    />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />
  </div>
</div> */}
{/* Hotspots Section - الكود الأصلي بتاعك بالظبط */}
<div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Incident Hotspots</h2>
    <button 
      onClick={() => navigate('/map')} 
      className="text-sm font-medium text-primary hover:underline"
    >
      Full Map
    </button>
  </div>
  <div className="aspect-square rounded-lg overflow-hidden">
    <img 
      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
      // ده اللينك اللي كان في كودك الأصلي
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfDqLE_f3pN59KtCgxChknR0RGa9SsN8JYW0KUPVd2RiirHNequIbcfqoyPqxIjLVH-U_UliaRj_aTjQtHvlV3WmluZhsjmn2lVqf2W0XcmOtWdHqazOBx9HHO9uOMIvleUEn1Di0_4UHUvzBkn0BZzs1o1hlucu3UHYx39N_HTF-jZ2qlhCIvu1471A7I0QFixBnOyXFHYKy91I3mNr-Ta0dDPsap9lMvlaipWU-VfUiIGXI0kB7kyTe-Xu_kRfg53T6N_Fzy43r" 
      alt="Heatmap" 
      onClick={() => navigate('/map')}
    />
  </div>
</div>

                {/* Fullscreen Map Overlay */}
                {isMapExpanded && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="relative w-full h-full">
                      <button 
                        onClick={() => setIsMapExpanded(false)}
                        className="absolute top-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="material-symbols-outlined text-gray-900 dark:text-white">close</span>
                      </button>
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfDqLE_f3pN59KtCgxChknR0RGa9SsN8JYW0KUPVd2RiirHNequIbcfqoyPqxIjLVH-U_UliaRj_aTjQtHvlV3WmluZhsjmn2lVqf2W0XcmOtWdHqazOBx9HHO9uOMIvleUEn1Di0_4UHUvzBkn0BZzs1o1hlucu3UHYx39N_HTF-jZ2qlhCIvu1471A7I0QFixBnOyXFHYKy91I3mNr-Ta0dDPsap9lMvlaipWU-VfUiIGXI0kB7kyTe-Xu_kRfg53T6N_Fzy43r" 
                        alt="Full Map" 
                      />
                    </div>
                  </div>
                )}

                {/* Activities */}
                <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-4">Recent Activity</h2>
                  <div className="flex flex-col gap-4">
                    {activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`p-2 ${act.bg} dark:${act.bg}/50 rounded-full`}>
                          <span className={`material-symbols-outlined ${act.iconCol} text-base`}>{act.type}</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-200">{act.text} <span className="font-bold">{act.id}</span></p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SIRSDashboard;



