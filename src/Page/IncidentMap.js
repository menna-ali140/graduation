// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentMap = () => {
//   const navigate = useNavigate();
//   const { selectedIncident, selectIncident, MOCK_INCIDENTS } = useIncident();

//   // --- State Management ---
//   const [isHeatmapEnabled, setIsHeatmapEnabled] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [zoom, setZoom] = useState(1);
//   const [selectedDate, setSelectedDate] = useState(5);
  
//   // Filter states
//   const [filters, setFilters] = useState({
//     incidentTypes: ['Fire', 'Crime'],
//     severity: 3
//   });

//   // Zoom functions
//   const handleZoomIn = () => {
//     setZoom(prev => Math.min(prev + 0.5, 3));
//     console.log('Zoom In:', zoom + 0.5);
//   };

//   const handleZoomOut = () => {
//     setZoom(prev => Math.max(prev - 0.5, 0.5));
//     console.log('Zoom Out:', zoom - 0.5);
//   };

//   // Calendar date selection
//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     console.log('Selected date:', date);
//   };

//   // Perform search
//   const handleSearch = (query) => {
//     console.log('Searching for:', query);
//     setSearchQuery(query);
//     if (query.trim()) {
//       const found = MOCK_INCIDENTS.find(inc => 
//         inc.id.toLowerCase().includes(query.toLowerCase()) || 
//         inc.location.toLowerCase().includes(query.toLowerCase())
//       );
//       console.log('Found incident:', found);
//       if (found) {
//         selectIncident(found);
//       }
//     }
//   };

//   // Handle incident type filter
//   const toggleIncidentType = (type) => {
//     console.log('Toggling:', type);
//     setFilters(prev => {
//       const newTypes = prev.incidentTypes.includes(type)
//         ? prev.incidentTypes.filter(t => t !== type)
//         : [...prev.incidentTypes, type];
//       console.log('New incident types:', newTypes);
//       return {
//         ...prev,
//         incidentTypes: newTypes
//       };
//     });
//   };

//   // Handle severity level change
//   const handleSeverityChange = (value) => {
//     console.log('Severity changed to:', value);
//     setFilters(prev => ({
//       ...prev,
//       severity: parseInt(value)
//     }));
//   };

//   // Apply filters
//   const handleApplyFilters = () => {
//     console.log('Applying filters:', filters);
//     const filtered = MOCK_INCIDENTS.filter(inc => 
//       filters.incidentTypes.includes(inc.type)
//     );
//     console.log('Filtered incidents:', filtered);
//     if (filtered.length > 0) {
//       selectIncident(filtered[0]);
//       alert(`Applied filters. Found ${filtered.length} incident(s).`);
//     } else {
//       alert('No incidents match your filters.');
//     }
//   };

//   // Clear all filters
//   const handleClearFilters = () => {
//     console.log('Clearing filters');
//     setFilters({
//       incidentTypes: ['Fire', 'Crime'],
//       severity: 3
//     });
//     setSearchQuery('');
//     selectIncident(MOCK_INCIDENTS[0]);
//     alert('Filters cleared');
//   };

//   // View full report
//   const handleViewFullReport = () => {
//     if (selectedIncident) {
//       navigate(`/reports/${selectedIncident.id}`);
//     }
//   };

//   return (
//     <div className="flex w-full h-full">
//         {/* Map Background */}
//         <div className="flex-1 bg-cover bg-center relative overflow-hidden" style={{
//           backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOfDqLE_f3pN59KtCgxChknR0RGa9SsN8JYW0KUPVd2RiirHNequIbcfqoyPqxIjLVH-U_UliaRj_aTjQtHvlV3WmluZhsjmn2lVqf2W0XcmOtWdHqazOBx9HHO9uOMIvleUEn1Di0_4UHUvzBkn0BZzs1o1hlucu3UHYx39N_HTF-jZ2qlhCIvu1471A7I0QFixBnOyXFHYKy91I3mNr-Ta0dDPsap9lMvlaipWU-VfUiIGXI0kB7kyTe-Xu_kRfg53T6N_Fzy43r')",
//           backgroundSize: `${zoom * 100}%`,
//           transition: 'background-size 0.3s ease'
//         }}>
//           {/* Map Search */}
//           <div className="absolute top-4 left-4 w-full max-w-md">
//             <div className="flex w-full h-12 items-stretch rounded-lg shadow-lg">
//               <div className="flex bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
//                 <span className="material-symbols-outlined text-gray-500">search</span>
//               </div>
//               <input 
//                 className="flex-1 rounded-r-lg border-none bg-white dark:bg-gray-800 h-full px-4 text-gray-900 dark:text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary" 
//                 placeholder="Search for an address or incident ID"
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Map Controls */}
//           <div className="absolute top-4 right-4 flex flex-col items-end gap-3">
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center p-1 space-x-2">
//               <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 ml-2">local_fire_department</span>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input 
//                   type="checkbox" 
//                   className="sr-only peer" 
//                   checked={isHeatmapEnabled}
//                   onChange={() => setIsHeatmapEnabled(!isHeatmapEnabled)}
//                 />
//                 <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//               </label>
//               <span className="text-sm font-medium mr-2 text-gray-700 dark:text-gray-200">Heatmap</span>
//             </div>
            
//             <div className="flex flex-col gap-0.5 shadow-lg">
//               <button 
//                 onClick={handleZoomIn}
//                 className="size-10 flex items-center justify-center rounded-t-lg bg-white dark:bg-gray-800 hover:bg-[#022F72] hover:text-white dark:hover:bg-[#022F72] transition-colors"
//               >
//                 <span className="material-symbols-outlined">add</span>
//               </button>
//               <button 
//                 onClick={handleZoomOut}
//                 className="size-10 flex items-center justify-center rounded-b-lg bg-white dark:bg-gray-800 hover:bg-[#022F72] hover:text-white dark:hover:bg-[#022F72] transition-colors"
//               >
//                 <span className="material-symbols-outlined">remove</span>
//               </button>
//             </div>
            
//             <div className="text-xs font-semibold text-center bg-white dark:bg-gray-800 rounded px-2 py-1 shadow-lg">
//               {(zoom * 100).toFixed(0)}%
//             </div>
            
//             <button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//               <span className="material-symbols-outlined">my_location</span>
//             </button>
//           </div>

//           {/* Report Preview Drawer */}
//           {selectedIncident && (
//             <div className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-6 shadow-2xl-top rounded-t-xl transition-transform duration-300 ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
//               <button 
//                 onClick={() => selectIncident(null)}
//                 className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
//               >
//                 <span className="material-symbols-outlined text-2xl">close</span>
//               </button>
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center size-12 bg-red-100 dark:bg-red-900/50 rounded-lg">
//                     <span className="material-symbols-outlined text-red-500 text-3xl">local_fire_department</span>
//                   </div>
//                 </div>
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-bold text-gray-900 dark:text-white">Incident ID: {selectedIncident.id}</h2>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">{selectedIncident.location}</p>
//                   <div className="mt-2 flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
//                     <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">calendar_today</span>{selectedIncident.time}</span>
//                     <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">task_alt</span>Status: {selectedIncident.status}</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{selectedIncident.description}</p>
//                 </div>
//                 <div className="flex-shrink-0 ml-auto self-center">
//                   <button 
//                     onClick={handleViewFullReport}
//                     className="bg-[#022F72] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#022F72]/90 transition-colors"
//                   >
//                     View Full Report
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//       {/* Filter Sidebar */}
//       <aside className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col">
//         <h3 className="text-gray-900 dark:text-white text-lg font-bold px-8 pb-2 pt-8">Filters</h3>
        
//         {/* Current Selections Display */}
//         <div className="px-4 py-3 bg-blue-50 dark:bg-blue-900/20 mx-4 rounded text-sm mb-3">
//           <p className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Active Filters:</p>
//           <p className="text-blue-800 dark:text-blue-200">Types: {filters.incidentTypes.length > 0 ? filters.incidentTypes.join(', ') : 'None'}</p>
//           <p className="text-blue-800 dark:text-blue-200">Severity: {filters.severity}/5</p>
//           {searchQuery && <p className="text-blue-800 dark:text-blue-200">Search: "{searchQuery}"</p>}
//         </div>

//         <div className="flex-grow overflow-y-auto px-4">
          
//           {/* Date Range Calendar Placeholder */}
//           <div className="py-4 border-b border-gray-200 dark:border-gray-700">
//             <p className="text-sm font-semibold mb-3">Date Range</p>
//             <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Selected: July {selectedDate}, 2024</p>
//             <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-2">
//                <div className="flex items-center justify-between mb-2">
//                   <span className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_left</span>
//                   <span className="font-bold text-sm">July 2024</span>
//                   <span className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_right</span>
//                </div>
//                <div className="grid grid-cols-7 text-[10px] text-center font-bold mb-1">
//                  {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
//                </div>
//                <div className="grid grid-cols-7 gap-1 text-center text-xs">
//                   {[...Array(31)].map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => handleDateSelect(i + 1)}
//                       className={`py-1 rounded-full cursor-pointer transition-colors ${
//                         selectedDate === i + 1 
//                           ? 'bg-[#022F72] text-white font-bold' 
//                           : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                       }`}
//                     >
//                       {i+1}
//                     </button>
//                   ))}
//                </div>
//             </div>
//           </div>

//           {/* Incident Type Checkboxes */}
//           <div className="py-4 border-b border-gray-200 dark:border-gray-700">
//             <p className="text-sm font-semibold mb-2">Incident Type</p>
//             {['Fire', 'Medical', 'Crime', 'Infrastructure'].map(type => (
//               <label key={type} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded transition">
//                 <input 
//                   type="checkbox" 
//                   className="h-5 w-5 rounded border-gray-300 bg-white dark:bg-gray-700 text-[#022F72] focus:ring-0 accent-[#022F72]" 
//                   checked={filters.incidentTypes.includes(type)}
//                   onChange={() => toggleIncidentType(type)}
//                 />
//                 <span className="text-sm text-gray-900 dark:text-white">{type}</span>
//                 {filters.incidentTypes.includes(type) && <span className="ml-auto text-green-600 text-xs">✓</span>}
//               </label>
//             ))}
//           </div>

//           {/* Severity Range */}
//           <div className="py-4 border-b border-gray-200 dark:border-gray-700">
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-semibold">Severity Level</p>
//               <span className="inline-block bg-[#022F72] text-white px-3 py-1 rounded text-xs font-bold">
//                 {filters.severity}/5
//               </span>
//             </div>
            
//             {/* Severity Display */}
//             <div className="flex items-center justify-between mb-3 text-xs text-gray-600 dark:text-gray-400">
//               <span>Low</span>
//               <span className="text-[#022F72] font-semibold">
//                 {filters.severity === 1 && 'Very Low'}
//                 {filters.severity === 2 && 'Low'}
//                 {filters.severity === 3 && 'Medium'}
//                 {filters.severity === 4 && 'High'}
//                 {filters.severity === 5 && 'Critical'}
//               </span>
//               <span>High</span>
//             </div>
            
//             <input 
//               type="range" 
//               className="w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-lg appearance-none accent-[#022F72] cursor-pointer" 
//               min="1" 
//               max="5" 
//               value={filters.severity}
//               onChange={(e) => handleSeverityChange(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Filter Actions */}
//         <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
//           <button 
//             onClick={handleClearFilters}
//             className="flex-1 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//           >
//             Clear
//           </button>
//           <button 
//             onClick={handleApplyFilters}
//             className="flex-1 py-3 bg-[#022F72] text-white rounded-lg text-sm font-semibold hover:bg-[#022F72]/90 transition-colors"
//           >
//             Apply
//           </button>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default IncidentMap;








// IncidentMap.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const IncidentMap = () => {
//   const navigate = useNavigate();
//   const { selectedIncident, selectIncident, MOCK_INCIDENTS } = useIncident();

//   const [zoom, setZoom] = useState(13);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isHeatmapEnabled, setIsHeatmapEnabled] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(5);

//   const [filters, setFilters] = useState({
//     incidentTypes: ['Fire', 'Crime'],
//     severity: 3
//   });

//   const fireIcon = new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/482/482566.png',
//     iconSize: [30, 30],
//   });

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query.trim()) {
//       const found = MOCK_INCIDENTS.find(inc =>
//         inc.id.toLowerCase().includes(query.toLowerCase()) ||
//         inc.location.toLowerCase().includes(query.toLowerCase())
//       );
//       if (found) selectIncident(found);
//     }
//   };

//   const toggleIncidentType = (type) => {
//     setFilters(prev => {
//       const newTypes = prev.incidentTypes.includes(type)
//         ? prev.incidentTypes.filter(t => t !== type)
//         : [...prev.incidentTypes, type];
//       return { ...prev, incidentTypes: newTypes };
//     });
//   };

//   const handleSeverityChange = (value) => {
//     setFilters(prev => ({ ...prev, severity: parseInt(value) }));
//   };

//   const handleApplyFilters = () => {
//     const filtered = MOCK_INCIDENTS.filter(inc =>
//       filters.incidentTypes.includes(inc.type)
//     );
//     if (filtered.length > 0) {
//       selectIncident(filtered[0]);
//       alert(`Applied filters. Found ${filtered.length} incident(s).`);
//     } else {
//       alert('No incidents match your filters.');
//     }
//   };

//   const handleClearFilters = () => {
//     setFilters({ incidentTypes: ['Fire', 'Crime'], severity: 3 });
//     setSearchQuery('');
//     selectIncident(MOCK_INCIDENTS[0]);
//   };

//   const handleViewFullReport = () => {
//     if (selectedIncident) navigate(`/reports/${selectedIncident.id}`);
//   };

//   const handleDateSelect = (date) => setSelectedDate(date);

//   const defaultCenter = MOCK_INCIDENTS[0]?.latLng || [30.0444, 31.2357];

//   return (
//     <div className="flex w-full h-screen">

//       {/* Map Section */}
//       <div className="flex-1 relative">

//         {/* Search Box */}
//         <div className="absolute top-4 left-4 w-full max-w-md z-[1000] pointer-events-auto">
//           <div className="flex w-full h-12 items-stretch rounded-lg shadow-lg">
//             <div className="flex bg-white items-center justify-center pl-4 rounded-l-lg">
//               <span className="material-symbols-outlined text-gray-500">search</span>
//             </div>
//             <input
//               className="flex-1 rounded-r-lg border-none bg-white h-full px-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-[#022F72]"
//               placeholder="Search for an address or incident ID"
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Map Controls */}
//         <div className="absolute top-4 right-4 flex flex-col items-end gap-3 z-[1000] pointer-events-auto">
//           <div className="bg-white rounded-lg shadow-lg flex items-center p-1 space-x-2">
//             <span className="material-symbols-outlined text-gray-600 ml-2">local_fire_department</span>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={isHeatmapEnabled}
//                 onChange={() => setIsHeatmapEnabled(!isHeatmapEnabled)}
//               />
//               <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#022F72] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//             </label>
//             <span className="text-sm font-medium mr-2 text-gray-700">Heatmap</span>
//           </div>

//           <div className="flex flex-col shadow-lg">
//             <button 
//               onClick={() => setZoom(prev => Math.min(prev + 1, 18))} 
//               className="w-10 h-10 flex items-center justify-center rounded-t-lg bg-white hover:bg-[#022F72] hover:text-white transition-colors border-b border-gray-200"
//             >
//               <span className="material-symbols-outlined">add</span>
//             </button>
//             <button 
//               onClick={() => setZoom(prev => Math.max(prev - 1, 1))} 
//               className="w-10 h-10 flex items-center justify-center rounded-b-lg bg-white hover:bg-[#022F72] hover:text-white transition-colors"
//             >
//               <span className="material-symbols-outlined">remove</span>
//             </button>
//           </div>
//         </div>

//         <MapContainer
//           center={selectedIncident?.latLng || defaultCenter}
//           zoom={zoom}
//           style={{ height: '100%', width: '100%', zIndex: 0 }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {MOCK_INCIDENTS.map(inc => (
//             <Marker
//               key={inc.id}
//               position={inc.latLng || defaultCenter}
//               icon={fireIcon}
//               eventHandlers={{
//                 click: () => selectIncident(inc)
//               }}
//             >
//               <Popup>
//                 <strong>{inc.type}</strong><br />
//                 {inc.location}<br />
//                 {inc.status}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>

//         {/* Bottom Card */}
//         {selectedIncident && (
//           <div className="absolute bottom-0 left-0 right-0 bg-white p-6 z-[1000] shadow-xl rounded-tl-xl rounded-tr-xl">
//             <button
//               onClick={() => selectIncident(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//             >
//               <span className="material-symbols-outlined text-2xl">close</span>
//             </button>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center size-12 bg-red-100 rounded-lg">
//                   <span className="material-symbols-outlined text-red-500 text-3xl">local_fire_department</span>
//                 </div>
//               </div>

//               <div className="flex-grow">
//                 <h2 className="text-lg font-bold text-gray-900">
//                   Incident ID: {selectedIncident.id}
//                 </h2>
//                 <p className="text-sm text-gray-500">{selectedIncident.location}</p>

//                 <div className="mt-2 flex items-center gap-4 text-sm text-gray-700">
//                   <span className="flex items-center gap-1.5">
//                     <span className="material-symbols-outlined text-base">calendar_today</span>
//                     {selectedIncident.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <span className="material-symbols-outlined text-base">task_alt</span>
//                     Status: {selectedIncident.status}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-600">{selectedIncident.description}</p>
//               </div>

//               <div className="flex-shrink-0 ml-auto self-center">
//                 <button
//                   onClick={handleViewFullReport}
//                   className="bg-[#022F72] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#022F72]/90 transition-colors"
//                 >
//                   View Full Report
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sidebar */}
//       <aside className="w-80 bg-white border-l border-gray-200 flex flex-col">

//         <h3 className="text-gray-900 text-lg font-bold px-8 pb-2 pt-8">
//           Filters
//         </h3>

//         <div className="px-4 py-3 bg-blue-50 mx-4 rounded text-sm mb-3">
//           <p className="font-semibold text-blue-900 mb-2">Active Filters:</p>
//           <p className="text-blue-800">
//             Types: {filters.incidentTypes.length > 0 ? filters.incidentTypes.join(', ') : 'None'}
//           </p>
//           <p className="text-blue-800">Severity: {filters.severity}/5</p>
//           {searchQuery && <p className="text-blue-800">Search: "{searchQuery}"</p>}
//           <p className="text-blue-800">Date: July {selectedDate}, 2024</p>
//         </div>

//         <div className="flex-grow overflow-y-auto px-4">
//           {/* Date Calendar */}
//           <div className="py-4 border-b border-gray-200">
//             <p className="text-sm font-semibold mb-3">Date Range</p>
//             <div className="bg-gray-50 rounded-lg p-2">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_left</span>
//                 <span className="font-bold text-sm">July 2024</span>
//                 <span className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_right</span>
//               </div>

//               <div className="grid grid-cols-7 text-[10px] text-center font-bold mb-1">
//                 {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
//               </div>

//               <div className="grid grid-cols-7 gap-1 text-center text-xs">
//                 {[...Array(31)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => handleDateSelect(i + 1)}
//                     className={`py-1 rounded-full cursor-pointer transition-colors ${
//                       selectedDate === i + 1 
//                         ? 'bg-[#022F72] text-white font-bold' 
//                         : 'hover:bg-gray-200'
//                     }`}
//                   >
//                     {i+1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Incident Type */}
//           <div className="py-4 border-b border-gray-200">
//             <p className="text-sm font-semibold mb-2">Incident Type</p>
//             {['Fire', 'Medical', 'Crime', 'Infrastructure'].map(type => (
//               <label key={type} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 px-2 rounded transition">
//                 <input
//                   type="checkbox"
//                   className="h-5 w-5 rounded border-gray-300 bg-white text-[#022F72] focus:ring-0 accent-[#022F72]"
//                   checked={filters.incidentTypes.includes(type)}
//                   onChange={() => toggleIncidentType(type)}
//                 />
//                 <span className="text-sm text-gray-900">{type}</span>
//                 {filters.incidentTypes.includes(type) && <span className="ml-auto text-green-600 text-xs">✓</span>}
//               </label>
//             ))}
//           </div>

//           {/* Severity */}
//           <div className="py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-semibold">Severity Level</p>
//               <span className="inline-block bg-[#022F72] text-white px-3 py-1 rounded text-xs font-bold">
//                 {filters.severity}/5
//               </span>
//             </div>

//             <div className="flex items-center justify-between mb-3 text-xs text-gray-600">
//               <span>Low</span>
//               <span className="text-[#022F72] font-semibold">
//                 {filters.severity === 1 && 'Very Low'}
//                 {filters.severity === 2 && 'Low'}
//                 {filters.severity === 3 && 'Medium'}
//                 {filters.severity === 4 && 'High'}
//                 {filters.severity === 5 && 'Critical'}
//               </span>
//               <span>High</span>
//             </div>

//             <input
//               type="range"
//               className="w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-lg appearance-none accent-[#022F72] cursor-pointer"
//               min="1"
//               max="5"
//               value={filters.severity}
//               onChange={(e) => handleSeverityChange(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="p-4 border-t border-gray-200 flex gap-3">
//           <button
//             onClick={handleClearFilters}
//             className="flex-1 py-3 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
//           >
//             Clear
//           </button>
//           <button
//             onClick={handleApplyFilters}
//             className="flex-1 py-3 bg-[#022F72] text-white rounded-lg text-sm font-semibold hover:bg-[#022F72]/90 transition-colors"
//           >
//             Apply
//           </button>
//         </div>

//       </aside>
//     </div>
//   );
// };

// export default IncidentMap;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { MapContainer, TileLayer,  Popup,CircleMarker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';



// const IncidentMap = () => {
//   const navigate = useNavigate();
//   const { selectedIncident, selectIncident, MOCK_INCIDENTS,filters,setFilters } = useIncident();
  
//   const [zoom, setZoom] = useState(13);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isHeatmapEnabled, setIsHeatmapEnabled] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(5);
//   const [month, setMonth] = useState(7);
//   const [year, setYear] = useState(2024);

 


// //   const MY_NEW_INCIDENTS = [
// //   { id: 'INC-001', type: 'Fire', location: 'Maadi, Cairo', latLng: [29.9602, 31.2569], status: 'Active', severity: 5, description: 'Building fire reported', time: '10:30 AM' },
// //   { id: 'INC-002', type: 'Crime', location: 'Zamalek, Cairo', latLng: [30.0626, 31.2222], status: 'Pending', severity: 3, description: 'Theft incident', time: '11:15 AM' },
// //   { id: 'INC-003', type: 'Medical', location: 'Nasr City', latLng: [30.0561, 31.3301], status: 'Resolved', severity: 2, description: 'Medical emergency', time: '09:00 AM' },
// //   { id: 'INC-004', type: 'Infrastructure', location: 'Downtown', latLng: [30.0444, 31.2357], status: 'Active', severity: 4, description: 'Water leak', time: '08:45 AM' },
// //   { id: 'INC-005', type: 'Fire', location: 'Heliopolis', latLng: [30.0901, 31.3236], status: 'In Progress', severity: 4, description: 'Small fire', time: '12:00 PM' },
// //   { id: 'INC-006', type: 'Crime', location: 'Giza', latLng: [30.0131, 31.2089], status: 'Active', severity: 5, description: 'Robbery', time: '01:30 PM' },
// //   { id: 'INC-007', type: 'Medical', location: 'Dokki', latLng: [30.0395, 31.2113], status: 'Pending', severity: 3, description: 'Fainting case', time: '02:00 PM' },
// //   { id: 'INC-008', type: 'Infrastructure', location: 'New Cairo', latLng: [30.0298, 31.4883], status: 'Resolved', severity: 1, description: 'Road repair', time: '07:30 AM' },
// //   { id: 'INC-009', type: 'Fire', location: 'Shubra', latLng: [30.0971, 31.2454], status: 'In Progress', severity: 4, description: 'Electrical fire', time: '03:15 PM' },
// //   { id: 'INC-010', type: 'Crime', location: 'Abbassia', latLng: [30.0634, 31.2847], status: 'Active', severity: 4, description: 'Street fight', time: '04:00 PM' },
// //   { id: 'INC-011', type: 'Medical', location: 'Mokattam', latLng: [30.0202, 31.3005], status: 'Active', severity: 3, description: 'Accident injury', time: '05:20 PM' },
// //   { id: 'INC-012', type: 'Infrastructure', location: 'Mohandessin', latLng: [30.0520, 31.1980], status: 'Resolved', severity: 2, description: 'Street light out', time: '06:10 PM' },
// //   { id: 'INC-013', type: 'Fire', location: 'Garden City', latLng: [30.0367, 31.2301], status: 'Pending', severity: 5, description: 'Kitchen fire', time: '08:00 PM' },
// //   { id: 'INC-014', type: 'Crime', location: 'Old Cairo', latLng: [30.0081, 31.2312], status: 'In Progress', severity: 3, description: 'Vandalism', time: '09:45 PM' },
// //   { id: 'INC-015', type: 'Medical', location: 'Sheraton', latLng: [30.1105, 31.3800], status: 'Active', severity: 4, description: 'Allergic reaction', time: '11:00 PM' }
// // ];
//   // const fireIcon = new L.Icon({
//   //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/482/482566.png',
//   //   iconSize: [30, 30],
//   // });
//   // تعريف الأيقونة الحمراء عشان تظهر بوضوح
// const redIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

//   // const handleSearch = (query) => {
//   //   setSearchQuery(query);
//   //   if (query.trim()) {
//   //     const found = MOCK_INCIDENTS.find(inc =>
//   //       inc.id.toLowerCase().includes(query.toLowerCase()) ||
//   //       inc.location.toLowerCase().includes(query.toLowerCase())
//   //     );
//   //     if (found) selectIncident(found);
//   //   }
//   // };
//   const handleSearch = (query) => {
//   setSearchQuery(query);

//   if (!query.trim()) return;

//   const found = MOCK_INCIDENTS.find(inc =>
//     inc.id.toLowerCase().includes(query.toLowerCase()) ||
//     inc.location.toLowerCase().includes(query.toLowerCase())
//   );

//   if (found) {
//     selectIncident(found);
//   }
// };

//   const toggleIncidentType = (type) => {
//     setFilters(prev => {
//       const newTypes = prev.incidentTypes.includes(type)
//         ? prev.incidentTypes.filter(t => t !== type)
//         : [...prev.incidentTypes, type];
//       return { ...prev, incidentTypes: newTypes };
//     });
//   };

//   const handleSeverityChange = (value) => {
//     setFilters(prev => ({ ...prev, severity: parseInt(value) }));
//   };

//   // const handleApplyFilters = () => {
//   //   const filtered = MOCK_INCIDENTS.filter(inc =>
//   //     filters.incidentTypes.includes(inc.type)
//   //   );
//   //   if (filtered.length > 0) {
//   //     selectIncident(filtered[0]);
//   //     alert(`Applied filters. Found ${filtered.length} incident(s).`);
//   //   } else {
//   //     alert('No incidents match your filters.');
//   //   }
//   // };

//   const handleApplyFilters = () => {
//   const filtered = MOCK_INCIDENTS.filter(inc =>
//     filters.incidentTypes.includes(inc.type) && inc.severity >= filters.severity
//   );
  
//   if (filtered.length > 0) {
//     selectIncident(filtered[0]); // بيختار أول واحد في المفلترين يظهره تحت
//   } else {
//     alert('No incidents match your filters.');
//   }
// };
//   const handleClearFilters = () => {
//     setFilters({ incidentTypes: ['Fire', 'Crime'], severity: 3 });
//     setSearchQuery('');
//     selectIncident(MOCK_INCIDENTS[0]);
//   };

//   const handleViewFullReport = () => {
//     if (selectedIncident) navigate(`/reports/${selectedIncident.id}`);
//   };

//   const handleDateSelect = (date) => setSelectedDate(date);

//   const defaultCenter = MOCK_INCIDENTS[0]?.latLng || [30.0444, 31.2357];
//   const handlePrevMonth = () => {
//   setMonth(prev => {
//     if (prev === 1) {
//       setYear(y => y - 1);
//       return 12;
//     }
//     return prev - 1;
//   });
// };

// const handleNextMonth = () => {
//   setMonth(prev => {
//     if (prev === 12) {
//       setYear(y => y + 1);
//       return 1;
//     }
//     return prev + 1;
//   });
// };


// // النسخة دي "مؤمنة" تماماً ضد أي Undefined
//   const filteredIncidents = (MOCK_INCIDENTS || []).filter(inc => {
//     // لو الـ filters مش موجودة، اعتبري النوع صح والخطورة صح عشان مفيش حاجة تضرب
//     const matchesType = filters?.incidentTypes ? filters.incidentTypes.includes(inc.type) : true;
//     const matchesSeverity = filters?.severity !== undefined ? inc.severity >= filters.severity : true;
    
//     return matchesType && matchesSeverity;
//   });
//   return (
//     <div className="flex w-full h-screen">

//       {/* Map Section */}
//       <div className="flex-1 relative">

//         {/* Search Box */}
//         <div className="absolute top-4 left-4 w-full max-w-md z-[1000] pointer-events-auto">
//           <div className="flex w-full h-12 items-stretch rounded-lg shadow-lg">
//             <div className="flex bg-white items-center justify-center pl-4 rounded-l-lg">
//               <span className="material-symbols-outlined text-gray-500">search</span>
//             </div>
//             <input
//               className="flex-1 rounded-r-lg border-none bg-white h-full px-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-[#022F72]"
//               placeholder="Search for an address or incident ID"
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Map Controls */}
//         <div className="absolute top-4 right-4 flex flex-col items-end gap-3 z-[1000] pointer-events-auto">
//           <div className="bg-white rounded-lg shadow-lg flex items-center p-1 space-x-2">
//             <span className="material-symbols-outlined text-gray-600 ml-2">local_fire_department</span>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={isHeatmapEnabled}
//                 onChange={() => setIsHeatmapEnabled(!isHeatmapEnabled)}
//               />
//               <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#022F72] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//             </label>
//             <span className="text-sm font-medium mr-2 text-gray-700">Heatmap</span>
//           </div>

//           <div className="flex flex-col shadow-lg">
//             <button 
//               onClick={() => setZoom(prev => Math.min(prev + 1, 18))} 
//               className="w-10 h-10 flex items-center justify-center rounded-t-lg bg-white hover:bg-[#022F72] hover:text-white transition-colors border-b border-gray-200"
//             >
//               <span className="material-symbols-outlined">add</span>
//             </button>
//             <button 
//               onClick={() => setZoom(prev => Math.max(prev - 1, 1))} 
//               className="w-10 h-10 flex items-center justify-center rounded-b-lg bg-white hover:bg-[#022F72] hover:text-white transition-colors"
//             >
//               <span className="material-symbols-outlined">remove</span>
//             </button>
//           </div>
//         </div>



// {/* <MapContainer
//   center={[30.0444, 31.2357]}
//   zoom={12}
//   style={{ height: '100%', width: '100%', zIndex: 0 }}
// >
//   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//   {MOCK_INCIDENTS.map(inc => {
//     // 1. هنا بنحدد لون لكل نوع بلاغ
//     let markerColor;
//     switch (inc.type) {
//       case 'Fire': markerColor = '#ef4444'; break;      // أحمر
//       case 'Crime': markerColor = '#1e293b'; break;     // أسود (كحلي غامق)
//       case 'Medical': markerColor = '#f97316'; break;   // برتقالي
//       case 'Infrastructure': markerColor = '#06b6d4'; break; // لبني (Cyan)
//       default: markerColor = '#3b82f6';                // أزرق افتراضي
//     }

//     return (
//       <CircleMarker
//         key={inc.id}
//         center={inc.latLng}
//         radius={9}
//         pathOptions={{
//           fillColor: markerColor, // اللون اللي اخترناه فوق
//           fillOpacity: 0.8,
//           color: 'white',        // برواز أبيض خفيف عشان النقطة تنطق
//           weight: 2,
//         }}
//         eventHandlers={{
//           click: () => selectIncident(inc)
//         }}
//       >
//         <Popup>
//           <div className="text-center">
//             <strong style={{ color: markerColor }}>{inc.type}</strong><br />
//             <span className="text-xs">{inc.location}</span>
//           </div>
//         </Popup>
//       </CircleMarker>
//     );
//   })}
// </MapContainer> */}

// {/* <MapContainer center={[30.0444, 31.2357]} zoom={12} style={{ height: '100%', width: '100%' }}>
//   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

  
//   {filteredIncidents.map(inc => {
   
//     let markerColor = inc.type === 'Fire' ? '#ef4444' : inc.type === 'Crime' ? '#1e293b' : inc.type === 'Medical' ? '#f97316' : '#06b6d4';

//     return (
//       <CircleMarker
//         key={inc.id}
//         center={inc.latLng}
//         radius={9}
//         pathOptions={{ fillColor: markerColor, fillOpacity: 0.8, color: 'white', weight: 2 }}
//         eventHandlers={{
//           // لما تدوسي على النقطة، الكارت اللي تحت يتفتح ببيانات الموك داتا
//           click: () => selectIncident(inc) 
//         }}
//       >
//         <Popup>
//           <strong>{inc.type}</strong><br />
//           {inc.location}
//         </Popup>
//       </CircleMarker>
//     );
//   })}
// </MapContainer> */}
// <MapContainer center={[30.0444, 31.2357]} zoom={12} style={{ height: '100%', width: '100%' }}>
//   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//   {/* السطر اللي جاي ده هو أهم تعديل */}
//   {filteredIncidents.map(inc => {
//     let markerColor = inc.type === 'Fire' ? '#ef4444' : inc.type === 'Crime' ? '#1e293b' : inc.type === 'Medical' ? '#f97316' : '#06b6d4';

//     return (
//       <CircleMarker
//         key={inc.id}
//         center={inc.latLng}
//         radius={9}
//         pathOptions={{ fillColor: markerColor, fillOpacity: 0.8, color: 'white', weight: 2 }}
//         eventHandlers={{
//           click: () => selectIncident(inc) 
//         }}
//       >
//         <Popup>
//           <strong>{inc.type}</strong><br />
//           {inc.location}
//         </Popup>
//       </CircleMarker>
//     );
//   })}
// </MapContainer>



//         {/* Bottom Card */}
//         {selectedIncident && (
//           <div className="absolute bottom-0 left-0 right-0 bg-white p-6 z-[1000] shadow-xl rounded-tl-xl rounded-tr-xl">
//             <button
//               onClick={() => selectIncident(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//             >
//               <span className="material-symbols-outlined text-2xl">close</span>
//             </button>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center size-12 bg-red-100 rounded-lg">
//                   <span className="material-symbols-outlined text-red-500 text-3xl">local_fire_department</span>
//                 </div>
//               </div>

//               <div className="flex-grow">
//                 <h2 className="text-lg font-bold text-gray-900">
//                   Incident ID: {selectedIncident.id}
//                 </h2>
//                 <p className="text-sm text-gray-500">{selectedIncident.location}</p>

//                 <div className="mt-2 flex items-center gap-4 text-sm text-gray-700">
//                   <span className="flex items-center gap-1.5">
//                     <span className="material-symbols-outlined text-base">calendar_today</span>
//                     {selectedIncident.time}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <span className="material-symbols-outlined text-base">task_alt</span>
//                     Status: {selectedIncident.status}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-600">{selectedIncident.description}</p>
//               </div>

//               <div className="flex-shrink-0 ml-auto self-center">
//                 <button
//                   onClick={handleViewFullReport}
//                   className="bg-[#022F72] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#022F72]/90 transition-colors"
//                 >
//                   View Full Report
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sidebar */}
//       <aside className="w-80 bg-white border-l border-gray-200 flex flex-col">

//         <h3 className="text-gray-900 text-lg font-bold px-8 pb-2 pt-8">
//           Filters
//         </h3>

//         <div className="px-4 py-3 bg-blue-50 mx-4 rounded text-sm mb-3">
//           <p className="font-semibold text-blue-900 mb-2">Active Filters:</p>
//           <p className="text-blue-800">
//             Types: {filters.incidentTypes.length > 0 ? filters.incidentTypes.join(', ') : 'None'}
//           </p>
//           <p className="text-blue-800">Severity: {filters.severity}/5</p>
//           {searchQuery && <p className="text-blue-800">Search: "{searchQuery}"</p>}
//           <p className="text-blue-800">Date: July {selectedDate}, 2024</p>
//         </div>

//         <div className="flex-grow overflow-y-auto px-4">
//           {/* Date Calendar */}
//           <div className="py-4 border-b border-gray-200">
//             <p className="text-sm font-semibold mb-3">Date Range</p>
//             <div className="bg-gray-50 rounded-lg p-2">
//               <div className="flex items-center justify-between mb-2">

//                 <span
//                 onClick={handlePrevMonth}
//                 className="material-symbols-outlined cursor-pointer hover:text-[#022F72]"
//               >
//                 chevron_left
//               </span>
            
//                 <span className="font-bold text-sm">
//                 {new Date(year, month - 1).toLocaleString('en-US', {
//                   month: 'long'
//                 })} {year}
//               </span>
                
//                 <span
//                 onClick={handleNextMonth}
//                 className="material-symbols-outlined cursor-pointer hover:text-[#022F72]"
//               >
//                 chevron_right
//               </span>
//               </div>

//               <div className="grid grid-cols-7 text-[10px] text-center font-bold mb-1">
//                 {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
//               </div>

//               <div className="grid grid-cols-7 gap-1 text-center text-xs">
//                 {[...Array(31)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => handleDateSelect(i + 1)}
//                     className={`py-1 rounded-full cursor-pointer transition-colors ${
//                       selectedDate === i + 1 
//                         ? 'bg-[#022F72] text-white font-bold' 
//                         : 'hover:bg-gray-200'
//                     }`}
//                   >
//                     {i+1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Incident Type */}
//           <div className="py-4 border-b border-gray-200">
//             <p className="text-sm font-semibold mb-2">Incident Type</p>
//             {['Fire', 'Medical', 'Crime', 'Infrastructure'].map(type => (
//               <label key={type} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 px-2 rounded transition">
//                 <input
//                   type="checkbox"
//                   className="h-5 w-5 rounded border-gray-300 bg-white text-[#022F72] focus:ring-0 accent-[#022F72]"
//                   checked={filters.incidentTypes.includes(type)}
//                   onChange={() => toggleIncidentType(type)}
//                 />
//                 <span className="text-sm text-gray-900">{type}</span>
//                 {filters.incidentTypes.includes(type) && <span className="ml-auto text-green-600 text-xs">✓</span>}
//               </label>
//             ))}
//           </div>

//           {/* Severity */}
//           <div className="py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between mb-2">
//               <p className="text-sm font-semibold">Severity Level</p>
//               <span className="inline-block bg-[#022F72] text-white px-3 py-1 rounded text-xs font-bold">
//                 {filters.severity}/5
//               </span>
//             </div>

//             <div className="flex items-center justify-between mb-3 text-xs text-gray-600">
//               <span>Low</span>
//               <span className="text-[#022F72] font-semibold">
//                 {filters.severity === 1 && 'Very Low'}
//                 {filters.severity === 2 && 'Low'}
//                 {filters.severity === 3 && 'Medium'}
//                 {filters.severity === 4 && 'High'}
//                 {filters.severity === 5 && 'Critical'}
//               </span>
//               <span>High</span>
//             </div>

//             <input
//               type="range"
//               className="w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-lg appearance-none accent-[#022F72] cursor-pointer"
//               min="1"
//               max="5"
//               value={filters.severity}
//               onChange={(e) => handleSeverityChange(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="p-4 border-t border-gray-200 flex gap-3">
//           <button
//             onClick={handleClearFilters}
//             className="flex-1 py-3 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
//           >
//             Clear
//           </button>
//           <button
//             onClick={handleApplyFilters}
//             className="flex-1 py-3 bg-[#022F72] text-white rounded-lg text-sm font-semibold hover:bg-[#022F72]/90 transition-colors"
//           >
//             Apply
//           </button>
//         </div>

//       </aside>
//     </div>
//   );
// };

// export default IncidentMap;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIncident } from '../context/IncidentContext';
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const IncidentMap = () => {
  const navigate = useNavigate();
  
  // بنجيب البيانات من الـ Context
  const { selectedIncident, selectIncident, MOCK_INCIDENTS, filters, setFilters } = useIncident();
  
  const [zoom, setZoom] = useState(13);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHeatmapEnabled, setIsHeatmapEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(5);
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2024);

  // تعريف الأيقونة الحمراء
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) return;
    const found = MOCK_INCIDENTS.find(inc =>
      inc.id.toLowerCase().includes(query.toLowerCase()) ||
      inc.location.toLowerCase().includes(query.toLowerCase())
    );
    if (found) selectIncident(found);
  };

  const toggleIncidentType = (type) => {
    setFilters(prev => {
      // حماية لو الـ incidentTypes مش موجودة
      const currentTypes = prev?.incidentTypes || [];
      const newTypes = currentTypes.includes(type)
        ? currentTypes.filter(t => t !== type)
        : [...currentTypes, type];
      return { ...prev, incidentTypes: newTypes };
    });
  };

  const handleSeverityChange = (value) => {
    setFilters(prev => ({ ...prev, severity: parseInt(value) }));
  };

  // const handleApplyFilters = () => {
  //   // فلترة آمنة
  //   const filtered = (MOCK_INCIDENTS || []).filter(inc => {
  //     const types = filters?.incidentTypes || [];
  //     const sev = filters?.severity || 0;
  //     return types.includes(inc.type) && inc.severity >= sev;
  //   });
    
  //   if (filtered.length > 0) {
  //     selectIncident(filtered[0]);
  //   } else {
  //     alert('No incidents match your filters.');
  //   }
  // };
  const handleApplyFilters = () => {
    // 1. بنحسب البلاغات اللي ماشية مع الاختيارات
    const filtered = (MOCK_INCIDENTS || []).filter(inc => {
      const matchesType = filters?.incidentTypes?.includes(inc.type) ?? true;
      const matchesSeverity = inc.severity >= (filters?.severity ?? 0);
      return matchesType && matchesSeverity;
    });

    // 2. بنطلع الـ Alert اللي بيطمنك إن الفلتر اشتغل
    if (filtered.length > 0) {
      alert(`Applied filters successfully! Found ${filtered.length} incident(s).`);
      selectIncident(filtered[0]); // بيفتح أول واحد في القائمة تحت
    } else {
      alert("No incidents match your current filters. Try selecting more types.");
    }
  };

  const handleClearFilters = () => {
    setFilters({ incidentTypes: ['Fire', 'Crime', 'Medical', 'Infrastructure'], severity: 1 });
    setSearchQuery('');
  };

  const handleViewFullReport = () => {
    if (selectedIncident) navigate(`/reports/${selectedIncident.id}`);
  };

  const handleDateSelect = (date) => setSelectedDate(date);

  const handlePrevMonth = () => {
    setMonth(prev => {
      if (prev === 1) { setYear(y => y - 1); return 12; }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setMonth(prev => {
      if (prev === 12) { setYear(y => y + 1); return 1; }
      return prev + 1;
    });
  };

  // المصفاة "المؤمنة" اللي بتشغل الخريطة
  const filteredIncidents = (MOCK_INCIDENTS || []).filter(inc => {
    const matchesType = filters?.incidentTypes ? filters.incidentTypes.includes(inc.type) : true;
    const matchesSeverity = filters?.severity !== undefined ? inc.severity >= filters.severity : true;
    return matchesType && matchesSeverity;
  });

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 relative">
        {/* Search Box */}
        <div className="absolute top-4 left-4 w-full max-w-md z-[1000] pointer-events-auto">
          <div className="flex w-full h-12 items-stretch rounded-lg shadow-lg">
            <div className="flex bg-white items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined text-gray-500">search</span>
            </div>
            <input
              className="flex-1 rounded-r-lg border-none bg-white h-full px-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-[#022F72]"
              placeholder="Search for an address or incident ID"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-3 z-[1000] pointer-events-auto">
          <div className="bg-white rounded-lg shadow-lg flex items-center p-1 space-x-2">
            <span className="material-symbols-outlined text-gray-600 ml-2">local_fire_department</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isHeatmapEnabled}
                onChange={() => setIsHeatmapEnabled(!isHeatmapEnabled)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#022F72] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            <span className="text-sm font-medium mr-2 text-gray-700">Heatmap</span>
          </div>
          <div className="flex flex-col shadow-lg">
            <button onClick={() => setZoom(prev => Math.min(prev + 1, 18))} className="w-10 h-10 flex items-center justify-center rounded-t-lg bg-white border-b border-gray-200 hover:bg-gray-100">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button onClick={() => setZoom(prev => Math.max(prev - 1, 1))} className="w-10 h-10 flex items-center justify-center rounded-b-lg bg-white hover:bg-gray-100">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
        </div>

        {/* Map Container */}
        <MapContainer center={[30.0444, 31.2357]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredIncidents.map(inc => {
            let markerColor = inc.type === 'Fire' ? '#ef4444' : inc.type === 'Crime' ? '#1e293b' : inc.type === 'Medical' ? '#f97316' : '#06b6d4';
            return (
              <CircleMarker
                key={inc.id}
                center={inc.latLng}
                radius={9}
                pathOptions={{ fillColor: markerColor, fillOpacity: 0.8, color: 'white', weight: 2 }}
                eventHandlers={{ click: () => selectIncident(inc) }}
              >
                <Popup><strong>{inc.type}</strong><br />{inc.location}</Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>

        {/* Bottom Card */}
        {selectedIncident && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-6 z-[1000] shadow-xl rounded-tl-xl rounded-tr-xl border-t">
            <button onClick={() => selectIncident(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center size-12 bg-red-100 rounded-lg">
                  <span className="material-symbols-outlined text-red-500 text-3xl">
                    {selectedIncident.type === 'Fire' ? 'local_fire_department' : 'warning'}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900">Incident ID: {selectedIncident.id}</h2>
                <p className="text-sm text-gray-500">{selectedIncident.location}</p>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-700">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">calendar_today</span>{selectedIncident.time}</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">task_alt</span>Status: {selectedIncident.status}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{selectedIncident.description}</p>
              </div>
              <div className="flex-shrink-0 ml-auto self-center">
                <button onClick={handleViewFullReport} className="bg-[#022F72] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#022F72]/90 transition-colors">
                  View Full Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="w-80 bg-white border-l border-gray-200 flex flex-col">
        <h3 className="text-gray-900 text-lg font-bold px-8 pb-2 pt-8">Filters</h3>
        <div className="px-4 py-3 bg-blue-50 mx-4 rounded text-sm mb-3">
          <p className="font-semibold text-blue-900 mb-2">Active Filters:</p>
          <p className="text-blue-800">Types: {filters?.incidentTypes?.length > 0 ? filters.incidentTypes.join(', ') : 'None'}</p>
          <p className="text-blue-800">Severity: {filters?.severity ?? 0}/5</p>
          <p className="text-blue-800">Date: July {selectedDate}, 2024</p>
        </div>

        <div className="flex-grow overflow-y-auto px-4">
          <div className="py-4 border-b border-gray-200">
            <p className="text-sm font-semibold mb-3">Date Range</p>
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="flex items-center justify-between mb-2">
                <span onClick={handlePrevMonth} className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_left</span>
                <span className="font-bold text-sm">{new Date(year, month - 1).toLocaleString('en-US', { month: 'long' })} {year}</span>
                <span onClick={handleNextMonth} className="material-symbols-outlined cursor-pointer hover:text-[#022F72]">chevron_right</span>
              </div>
              <div className="grid grid-cols-7 text-[10px] text-center font-bold mb-1">
                {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {[...Array(31)].map((_, i) => (
                  <button key={i} onClick={() => handleDateSelect(i + 1)} className={`py-1 rounded-full ${selectedDate === i + 1 ? 'bg-[#022F72] text-white font-bold' : 'hover:bg-gray-200'}`}>
                    {i+1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-sm font-semibold mb-2">Incident Type</p>
            {['Fire', 'Medical', 'Crime', 'Infrastructure'].map(type => (
              <label key={type} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 px-2 rounded">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 accent-[#022F72]"
                  checked={filters?.incidentTypes?.includes(type) || false}
                  onChange={() => toggleIncidentType(type)}
                />
                <span className="text-sm text-gray-900">{type}</span>
              </label>
            ))}
          </div>

          <div className="py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Severity Level</p>
              <span className="bg-[#022F72] text-white px-3 py-1 rounded text-xs font-bold">{filters?.severity ?? 0}/5</span>
            </div>
            <input
              type="range" min="1" max="5"
              className="w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-lg appearance-none cursor-pointer accent-[#022F72]"
              value={filters?.severity || 1}
              onChange={(e) => handleSeverityChange(e.target.value)}
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex gap-3">
          <button onClick={handleClearFilters} className="flex-1 py-3 border-2 border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100">Clear</button>
          <button onClick={handleApplyFilters} className="flex-1 py-3 bg-[#022F72] text-white rounded-lg text-sm font-semibold hover:bg-[#022F72]/90">Apply</button>
        </div>
      </aside>
    </div>
  );
};

export default IncidentMap;


