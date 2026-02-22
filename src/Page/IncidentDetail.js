// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentDetail = () => {
//   const { id } = useParams();
//   const { selectedIncident, MOCK_INCIDENTS } = useIncident();
  
//   const [reportData, setReportData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);

//   useEffect(() => {
//     const fetchReportDetails = async () => {
//       setLoading(true);
//       try {
//         // Try to find the incident by ID from context or MOCK_INCIDENTS
//         const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
//           ? selectedIncident 
//           : MOCK_INCIDENTS.find(inc => inc.id === id);

//         if (incident) {
//           const mockData = {
//             id: incident.id || "#INC-2024-08-15-001",
//             type: incident.type || "Fire",
//             location: incident.location || "Unknown Location",
//             time: incident.time || Date.now(),
//             status: incident.status || "In Progress",
//             priority: incident.priority || "High",
//             category: incident.type || "Fire",
//             description: incident.description || "Detailed incident description...",
//             reporter: { name: "John D.", time: incident.time || "August 15, 2024, 10:32 AM" },
//             aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] },
//             timeline: [
//               { id: 1, text: `Status: ${incident.status}`, sub: `Report ID: ${incident.id}`, icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//               { id: 2, text: `Type: ${incident.type}`, sub: `Location: ${incident.location}`, icon: "assignment_ind", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
//               { id: 3, text: "Report Details", sub: `Time: ${incident.time}`, icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//             ]
//           };
//           setReportData(mockData);
//         } else {
//           // Fallback to default mock data
//           const mockData = {
//             id: id || "#INC-2024-08-15-001",
//             status: "In Progress",
//             priority: "High",
//             category: "Infrastructure",
//             description: "A large pothole has formed on the eastbound lane of Elm Street...",
//             reporter: { name: "John D.", time: "August 15, 2024, 10:32 AM" },
//             aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] },
//             timeline: [
//               { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//               { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
//               { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//             ]
//           };
//           setReportData(mockData);
//         }
//       } catch (error) {
//         console.error("Error fetching report details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReportDetails();
//   }, [id, selectedIncident, MOCK_INCIDENTS]);

//   if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">Loading Report Details...</div>;

//   const handleRefresh = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   };

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//         <div className="max-w-7xl mx-auto">
//           {/* PageHeading */}
//           <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//             <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
//             <div className="flex items-center gap-2 relative">
//               <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//                 <span className="material-symbols-outlined text-base">download</span> Download Report
//               </button>
//               <button 
//                 onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
//                 className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Toggle details"
//               >
//                 <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
//               </button>
//               <button 
//                 onClick={handleRefresh}
//                 className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`}
//                 title="Refresh"
//               >
//                 <span className="material-symbols-outlined">refresh</span>
//               </button>
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="More options"
//               >
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>
              
//               {/* Menu Dropdown */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                   <div className="py-2">
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">edit</span>
//                       <span>Edit Report</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">share</span>
//                       <span>Share</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span>
//                       <span>Print</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">archive</span>
//                       <span>Archive</span>
//                     </button>
//                     <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                     <button className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">delete</span>
//                       <span>Delete Report</span>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </header>

//           {/* Chips - Dynamic Values */}
//           <div className="flex gap-3 mb-8 flex-wrap">
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
//               <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
//             </div>
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//               <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
//             </div>
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//               <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
//             </div>
//           </div>

//           {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 flex flex-col gap-8">
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <img className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwHVVjDcrhjoreE48lpV65NrV1ER7AQfKILTI9FeXMCuNLJIQrdf9N92t2xIJN3gebRe2vXSFGMzUZyfVo9lKHdZHW59eVGP4tCdOJt5UQyOEQwShjf9AzRpaozShVFt_bjnlLDEFLFC12qWPQWSxvnRDDZ4QXGO5NOsDAWljoMphF19tpNxAv75zaIXw9bpcp2ZncUkE0ltP1rxxHsKkloAzRI7FhQr8Wxf-4K5w-ZG4rZddm_2PXdDZ17zmVfKA5c09Jq4DnS_7j" alt="Media 1"/>
//                   <img className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByQl_twm0gmLW8j0b7Cjv3F5Ntriy6J5gsIj2JVbXQE3Ke6ctPsrICdDNBID9N2-U7MTX9b8adq7-NJKltJFD6uNOhA1zxsv5RlCbeC2og2EK9JO4TAMyH1lOBNbtk67b5S7Qhckg7i1sKcnfp7g7fb-f_uGLPcn_nJJtmaVrnw0uV4subrk9pj10ds_aOl4lFDctzf8MqyIobqjSC8QAOBQncBgMKBlI6T6B8TKKIGN5xpv8n0GmxwjaX3OBNstxIV4hCHRl9X80y" alt="Media 2"/>
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative">
//                     <img className="rounded-lg aspect-video object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLFbRRjIMPlkOpG5Ppa_rJbmTS_x1sNmLZdQgz-1gPAElH1_HavZEiYZOBg35R6uiWx_GXwoFtSaMAD4-KTSNhNcpJnJAysDbUG9D3wHNbTOijVufI8tHPsKRQo1jRsttXO5p30HqU26ul2acB3gy-PVgns4XFKlv39NXYYxDBsSqcEyjJ8WmifqXMh03CRo80FLX27p_8y5J1BoqiRBufI-a0STVFe9gnEt0tCRUfIrwgU4HK8h7HyAcabn_-t-XWa4J4ekVB1pU" alt="Video thumb"/>
//                     <span className="material-symbols-outlined text-white text-5xl absolute">play_circle</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
//                   <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMLaA4IgrDDhBYONE10OHSY7rD0fiAhNNC5m7oInMfI-ms7NusBSraPuprXTFyhh4RZf-VWjpXhoWvTAu432spD5n63UxXkWv8x3ru1Hg5UXlhMEJp3D45RZxewPXq3SwnZ_olhumiriHXe2A0f3X66mOdB8ymFEKe23lXxAnbMultYMKKLHyU-aBnRMRgOfvWWnhOq-9YW2Qhs8Yz3rzKc8Xk0O8wPr8fZbnn52IY106DU_RqK7fZ9gP3qvw5shOT1tSVVdK6Y2m" alt="Map View"/>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 flex flex-col gap-8">
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full">Update Status</button>
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full">Add Internal Note</button>
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full">Escalate</button>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.name}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.time}</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {reportData.aiAnalysis.entities.map(entity => (
//                         <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
//                 <div className="flex flex-col gap-6">
//                   {reportData.timeline.map((item, index) => (
//                     <div className="flex gap-4" key={item.id}>
//                       <div className="flex flex-col items-center">
//                         <div className={`flex items-center justify-center size-8 rounded-full ${item.color}`}>
//                           <span className="material-symbols-outlined text-base">{item.icon}</span>
//                         </div>
//                         {index !== reportData.timeline.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
//                       </div>
//                       <div>
//                         <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
//                         <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           )}
//         </div>
//     </div>
//   );
// };

// export default IncidentDetail;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon issue with Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// const IncidentDetail = () => {
//   const { id } = useParams();
//   const { selectedIncident, MOCK_INCIDENTS } = useIncident();

//   const [reportData, setReportData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);

//   useEffect(() => {
//     const fetchReportDetails = async () => {
//       setLoading(true);
//       try {
//         const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
//           ? selectedIncident 
//           : MOCK_INCIDENTS.find(inc => inc.id === id);

//         const mockData = incident
//           ? {
//               id: incident.id || "#INC-2024-08-15-001",
//               type: incident.type || "Fire",
//               location: incident.location || "Unknown Location",
//               time: incident.time || "July 15, 2024, 14:32",
//               status: incident.status || "In Progress",
//               priority: incident.priority || "High",
//               category: incident.type || "Fire",
//               description: incident.description || "Detailed incident description...",
//               reporter: { name: "John D.", time: incident.time || "July 15, 2024, 14:32" },
//               aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] },
//               timeline: [
//                 { id: 1, text: `Status: ${incident.status}`, sub: `Report ID: ${incident.id}`, icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//                 { id: 2, text: `Type: ${incident.type}`, sub: `Location: ${incident.location}`, icon: "assignment_ind", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
//                 { id: 3, text: "Report Details", sub: `Time: ${incident.time}`, icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//               ]
//             }
//           : {
//               id: id || "#INC-2024-08-15-001",
//               status: "In Progress",
//               priority: "High",
//               category: "Infrastructure",
//               description: "A large pothole has formed on the eastbound lane of Elm Street...",
//               reporter: { name: "John D.", time: "July 15, 2024, 14:32" },
//               aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] },
//               timeline: [
//                 { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//                 { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
//                 { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//               ]
//             };

//         setReportData(mockData);
//       } catch (error) {
//         console.error("Error fetching report details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReportDetails();
//   }, [id, selectedIncident, MOCK_INCIDENTS]);

//   if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">Loading Report Details...</div>;

//   const handleRefresh = () => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 500);
//   };

//   const handleAction = (action) => console.log('Action clicked:', action);

//   const coords = { lat: 34.0522, lng: -118.2437 };

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Page Heading */}
//         <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//           <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
//           <div className="flex items-center gap-2 relative">
//             <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//               <span className="material-symbols-outlined text-base">download</span> Download Report
//             </button>
//             <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Toggle details">
//               <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
//             </button>
//             <button onClick={handleRefresh} className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`} title="Refresh">
//               <span className="material-symbols-outlined">refresh</span>
//             </button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {isMenuOpen && (
//               <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                 <div className="py-2">
//                   {['Edit Report', 'Share', 'Print', 'Archive', 'Delete Report'].map((item, idx) => (
//                     <button key={idx} className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${item.includes('Delete') ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>
//                       <span className="material-symbols-outlined text-base">{item === 'Edit Report' ? 'edit' : item === 'Share' ? 'share' : item === 'Print' ? 'print' : item === 'Archive' ? 'archive' : 'delete'}</span>
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* Chips */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
//             <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//             <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//             <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
//           </div>
//         </div>

//         {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 flex flex-col gap-8">
//               {/* Report Description */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
//               </div>

//               {/* Submitted Media - Display Only */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
//                     <span className="text-white text-sm">Media display only</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Map */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <div className="aspect-video rounded-lg overflow-hidden">
//                   <MapContainer center={[coords.lat, coords.lng]} zoom={13} className="h-full w-full rounded-lg">
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                     <Marker position={[coords.lat, coords.lng]}>
//                       <Popup>Incident Location: {reportData.location}</Popup>
//                     </Marker>
//                   </MapContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 flex flex-col gap-8">
//               {/* Actions */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   {['Update Status', 'Add Internal Note', 'Escalate'].map(a => (
//                     <button key={a} onClick={() => handleAction(a)} className={`flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg ${a === 'Update Status' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10'} transition-colors w-full`}>
//                       {a}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Reporter Info & AI Analysis & Timeline */}
//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
//                 {/* Reporter Information */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.name}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.time}</p>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {reportData.aiAnalysis.entities.map(entity => (
//                         <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Activity Timeline */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
//                   <div className="flex flex-col gap-6">
//                     {reportData.timeline.map((item, index) => (
//                       <div className="flex gap-4" key={item.id}>
//                         <div className="flex flex-col items-center">
//                           <div className={`flex items-center justify-center size-8 rounded-full ${item.color}`}>
//                             <span className="material-symbols-outlined text-base">{item.icon}</span>
//                           </div>
//                           {index !== reportData.timeline.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
//                         </div>
//                         <div>
//                           <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
//                           <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncidentDetail;





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useIncident } from '../context/IncidentContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const IncidentDetail = () => {
  const { id } = useParams();
  const { selectedIncident, MOCK_INCIDENTS } = useIncident();

  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showNoteBox, setShowNoteBox] = useState(false);
  const [internalNote, setInternalNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchReportDetails = async () => {
      setLoading(true);
      try {
        const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
          ? selectedIncident 
          : MOCK_INCIDENTS.find(inc => inc.id === id);

        const mockData = incident
          ? {
              id: incident.id || "#INC-2024-08-15-001",
              type: incident.type || "Fire",
              location: incident.location || "Unknown Location",
              time: incident.time || "July 15, 2024, 14:32",
              status: incident.status || "In Progress",
              priority: incident.priority || "High",
              category: incident.type || "Fire",
              description: incident.description || "Detailed incident description...",
              reporter: { name: "John D.", time: incident.time || "July 15, 2024, 14:32" },
              aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] },
              timeline: [
                { id: 1, text: `Status: ${incident.status}`, sub: `Report ID: ${incident.id}`, icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
                { id: 2, text: `Type: ${incident.type}`, sub: `Location: ${incident.location}`, icon: "assignment_ind", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
                { id: 3, text: "Report Details", sub: `Time: ${incident.time}`, icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
              ]
            }
          : {
              id: id || "#INC-2024-08-15-001",
              status: "In Progress",
              priority: "High",
              category: "Infrastructure",
              description: "A large pothole has formed on the eastbound lane of Elm Street...",
              reporter: { name: "John D.", time: "July 15, 2024, 14:32" },
              aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] },
              timeline: [
                { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
                { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
                { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
              ]
            };

        setReportData(mockData);
      } catch (error) {
        console.error("Error fetching report details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportDetails();
  }, [id, selectedIncident, MOCK_INCIDENTS]);

  if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">Loading Report Details...</div>;

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const handleAction = (action) => console.log('Action clicked:', action);

  const coords = { lat: 34.0522, lng: -118.2437 };
  
  const updateStatus = (newStatus) => {
  setReportData((prev) => ({
    ...prev,
    status: newStatus,
    timeline: [
      {
        id: Date.now(),
        text: `Status changed to ${newStatus}`,
        sub: "by System",
        icon: "update",
        color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
      },
      ...prev.timeline,
    ],
  }));

  setShowStatusDropdown(false);
};

const saveNote = () => {
  if (!internalNote.trim()) return;

  setNotes((prev) => [...prev, internalNote]);

  setInternalNote('');
  setShowNoteBox(false);
};
const handleEscalate = () => {
  if (!window.confirm("Are you sure you want to escalate this report?")) return;

  setReportData((prev) => ({
    ...prev,
    timeline: [
      {
        id: Date.now(),
        text: "Report escalated to higher authorities",
        sub: "Priority increased",
        icon: "priority_high",
        color: "bg-red-500/20 text-red-600 dark:text-red-400",
      },
      ...prev.timeline,
    ],
  }));
};

  return (
    <div className="w-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
          <div className="flex items-center gap-2 relative">
            <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-base">download</span> Download Report
            </button>
            <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Toggle details">
              <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <button onClick={handleRefresh} className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`} title="Refresh">
              <span className="material-symbols-outlined">refresh</span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
              <span className="material-symbols-outlined">more_vert</span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
                <div className="py-2">
                  {['Edit Report', 'Share', 'Print', 'Archive', 'Delete Report'].map((item, idx) => (
                    <button key={idx} className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${item.includes('Delete') ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>
                      <span className="material-symbols-outlined text-base">{item === 'Edit Report' ? 'edit' : item === 'Share' ? 'share' : item === 'Print' ? 'print' : item === 'Archive' ? 'archive' : 'delete'}</span>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Chips */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
            <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
            <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
            <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
          </div>
        </div>

        {isDetailsExpanded && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Report Description */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
              </div>

              {/* Submitted Media - Display Only */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-sm">Media display only</span>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <MapContainer center={[coords.lat, coords.lng]} zoom={13} className="h-full w-full rounded-lg">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[coords.lat, coords.lng]}>
                      <Popup>Incident Location: {reportData.location}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 flex flex-col gap-8">
            
              {/* Actions */}
<div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">
    Actions
  </h2>

  <div className="flex flex-col gap-3 relative">

    {/* Update Status */}
    <button
      onClick={() => setShowStatusDropdown(!showStatusDropdown)}
      className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full"
    >
      Update Status
    </button>

    {showStatusDropdown && (
      <div className="absolute z-20 top-12 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg">
        {["Pending", "In Progress", "Resolved"].map((status) => (
          <button
            key={status}
            onClick={() => updateStatus(status)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {status}
          </button>
        ))}
      </div>
    )}

    {/* Add Internal Note */}
    <button
      onClick={() => setShowNoteBox(!showNoteBox)}
      className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full"
    >
      Add Internal Note
    </button>

    {showNoteBox && (
      <div className="flex flex-col gap-2">
        <textarea
          value={internalNote}
          onChange={(e) => setInternalNote(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm bg-transparent"
          placeholder="Write your note..."
        />

        <button
          onClick={saveNote}
          className="bg-primary text-white rounded-lg h-8 text-sm"
        >
          Save Note
        </button>
      </div>
    )}

    {/* Escalate */}
    <button
      onClick={handleEscalate}
      className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-red-100 dark:hover:bg-red-900 transition-colors w-full"
    >
      Escalate
    </button>

  </div>
</div>

              {/* Reporter Info & AI Analysis & Timeline */}
              <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
                {/* Reporter Information */}
                <div className="p-6">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
                    <p className="text-text-light dark:text-text-dark">{reportData.reporter.name}</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
                    <p className="text-text-light dark:text-text-dark">{reportData.reporter.time}</p>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="p-6">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
                    <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
                    <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
                    <div className="flex flex-wrap gap-2">
                      {reportData.aiAnalysis.entities.map(entity => (
                        <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity Timeline */}
                <div className="p-6">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
                  <div className="flex flex-col gap-6">
                    {reportData.timeline.map((item, index) => (
                      <div className="flex gap-4" key={item.id}>
                        <div className="flex flex-col items-center">
                          <div className={`flex items-center justify-center size-8 rounded-full ${item.color}`}>
                            <span className="material-symbols-outlined text-base">{item.icon}</span>
                          </div>
                          {index !== reportData.timeline.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
                        </div>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
                          <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentDetail;





