// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
  
//   // البيانات الثابتة
//   const MOCK_DATA = [
//     { id: "2024-0715-001", type: "Fire", category: "Fire", priority: "High", aiClass: "Structural Fire - 92%", status: "Pending", location: "123 Maple St", time: "02/12/2026 14:30", reporter: "Citizen-****34", description: "Initial reports indicate..." },
//     { id: "2024-0715-002", type: "Medical", category: "Medical", priority: "Medium", aiClass: "Vehicle Collision - 88%", status: "In Progress", location: "Elm & Oak Ave", time: "02/12/2026 13:55", reporter: "Officer-****12", description: "Multiple vehicle collision..." },
//     { id: "2024-0715-003", type: "Crime", category: "Crime", priority: "High", aiClass: "Cardiac Arrest - 95%", status: "Resolved", location: "456 Pine Ln", time: "02/11/2026 22:10", reporter: "Paramedic-****89", description: "Robbery incident..." },
//     { id: "2024-0715-004", type: "Infrastructure", category: "Infrastructure", priority: "Low", aiClass: "Power Outage - 76%", status: "Closed", location: "789 Birch Rd", time: "02/08/2026 18:00", reporter: "Citizen-****56", description: "Bridge maintenance..." }
//   ];

//   // States
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);
//   const [filters, setFilters] = useState({
//     dateRange: 'All',
//     category: 'All',
//     status: 'All',
//     priority: 'All',
//     aiConfidence: 'All'
//   });
//   const [filteredReports, setFilteredReports] = useState(MOCK_DATA);

//   // تطبيق جميع الفلاتر
//   useEffect(() => {
//     let result = [...MOCK_DATA];

//     // 1. Category Filter
//     if (filters.category !== 'All') {
//       result = result.filter(r => r.category === filters.category);
//     }

//     // 2. Priority Filter
//     if (filters.priority !== 'All') {
//       result = result.filter(r => r.priority === filters.priority);
//     }

//     // 3. Status Filter
//     if (filters.status !== 'All') {
//       result = result.filter(r => r.status === filters.status);
//     }

//     // 4. AI Confidence Filter
//     if (filters.aiConfidence !== 'All') {
//       const confValue = parseInt(filters.aiConfidence);
//       result = result.filter(r => {
//         const match = r.aiClass.match(/(\d+)%/);
//         if (match) {
//           const aiValue = parseInt(match[1]);
//           return aiValue >= confValue;
//         }
//         return true;
//       });
//     }

//     // 5. Date Range Filter
//     if (filters.dateRange !== 'All') {
//       const today = new Date(2026, 1, 12); // Feb 12, 2026
//       result = result.filter(r => {
//         try {
//           const [month, day, year] = r.time.split(' ')[0].split('/');
//           const reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          
//           const isToday = reportDate.toDateString() === today.toDateString();
//           const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
//           const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

//           if (filters.dateRange === 'Today') return isToday;
//           if (filters.dateRange === 'Last 7 Days') return reportDate >= last7Days;
//           if (filters.dateRange === 'Last 30 Days') return reportDate >= last30Days;
//           return true;
//         } catch (e) {
//           return true;
//         }
//       });
//     }

//     setFilteredReports(result);
//   }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

//   // Style Functions
//   const getPriorityStyle = (p) => {
//     const styles = {
//       'High': 'bg-red-600 text-white',
//       'Medium': 'bg-orange-500 text-white',
//       'Low': 'bg-green-500 text-white'
//     };
//     return styles[p] || 'bg-gray-500 text-white';
//   };

//   const getStatusStyle = (s) => {
//     const styles = {
//       'Pending': 'bg-yellow-400 text-gray-900',
//       'In Progress': 'bg-cyan-500 text-white',
//       'Resolved': 'bg-green-500 text-white',
//       'Closed': 'bg-gray-500 text-white'
//     };
//     return styles[s] || 'bg-gray-200 text-gray-800';
//   };

//   // Handlers
//   const handleFilterChange = (filterName, value) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//     setOpenFilterMenu(null);
//   };

//   const handleRefresh = () => {
//     setFilters({
//       dateRange: 'All',
//       category: 'All',
//       status: 'All',
//       priority: 'All',
//       aiConfidence: 'All'
//     });
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedIds(filteredReports.map(r => r.id));
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const toggleSelectId = (id) => {
//     setSelectedIds(prev => 
//       prev.includes(id) 
//         ? prev.filter(x => x !== id)
//         : [...prev, id]
//     );
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-6">
//           <p className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Incident Reports</p>
//           <p className="text-slate-500 dark:text-slate-400 text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 mb-4 relative">
//           {[
//             { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//             { label: 'Category', options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//             { label: 'Status', options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//             { label: 'Priority', options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//             { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' }
//           ].map(filter => (
//             <div key={filter.key} className="relative">
//               <button 
//                 onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                 className="flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 hover:bg-slate-50 transition-colors"
//               >
//                 <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter.label}</p>
//                 <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
//               </button>

//               {openFilterMenu === filter.key && (
//                 <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     {filter.options.map(opt => (
//                       <button 
//                         key={opt}
//                         onClick={() => handleFilterChange(filter.key, opt)} 
//                         className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
//                       >
//                         {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Toolbar */}
//         <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//           <div className="flex items-center gap-4">
//             <input 
//               type="checkbox" 
//               className="h-4 w-4 rounded border-slate-300"
//               checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//               onChange={(e) => handleSelectAll(e.target.checked)}
//             />
//             <p className="text-sm text-slate-600 dark:text-slate-400">Select all ({selectedIds.length})</p>
//           </div>
//           <div className="flex gap-2 relative">
//             <button 
//               onClick={handleRefresh}
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Refresh"
//             >
//               <span className="material-symbols-outlined">refresh</span>
//             </button>
//             <button 
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Upload"
//             >
//               <span className="material-symbols-outlined">upload</span>
//             </button>
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)} 
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="More options"
//             >
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {/* Menu */}
//             {isMenuOpen && (
//               <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                 <div className="py-2">
//                   <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                     <span className="material-symbols-outlined text-base">download</span>
//                     <span>Export as CSV</span>
//                   </button>
//                   <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                     <span className="material-symbols-outlined text-base">print</span>
//                     <span>Print</span>
//                   </button>
//                   {selectedIds.length > 0 && (
//                     <>
//                       <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                       <button className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                         <span className="material-symbols-outlined text-base">delete</span>
//                         <span>Delete Selected ({selectedIds.length})</span>
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//           <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//             <thead className="bg-slate-50 dark:bg-slate-800">
//               <tr>
//                 <th className="py-3.5 pl-4 pr-3 w-12 text-left"></th>
//                 {['Report ID', 'Category', 'Priority', 'AI Classification', 'Status', 'Location', 'Date & Time', 'Reporter Info', 'Actions'].map(h => (
//                   <th key={h} className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-50">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//               {filteredReports.length > 0 ? (
//                 filteredReports.map((r) => (
//                   <tr 
//                     key={r.id} 
//                     className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer  transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                     onClick={() => {
//                       selectIncident({
//                         id: r.id,
//                         type: r.type,
//                         location: r.location,
//                         time: r.time,
//                         status: r.status,
//                         description: r.description
//                       });
//                     }}
//                   >
//                     <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                       <input 
//                         type="checkbox" 
//                         checked={selectedIds.includes(r.id)} 
//                         onChange={() => toggleSelectId(r.id)}
//                       />
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-medium">{r.id}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.category}</td>
//                     <td className="px-3 py-4 text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>
//                         {r.priority}
//                       </span>
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.aiClass}</td>
//                     <td className="px-3 py-4 text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>
//                         {r.status}
//                       </span>
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.time}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                     <td className="px-3 py-4 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
//                       <Link to={`/reports/${r.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
//                         View Details
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
//                     No reports found matching your filters
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;






import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIncident } from '../context/IncidentContext';

const IncidentReports = () => {
  const { selectIncident } = useIncident();
  
  // البيانات الثابتة
  const MOCK_DATA = [
    { id: "2024-0715-001", type: "Fire", category: "Fire", priority: "High", aiClass: "Structural Fire - 92%", status: "Pending", location: "123 Maple St", time: "02/12/2026 14:30", reporter: "Citizen-****34", description: "Initial reports indicate..." },
    { id: "2024-0715-002", type: "Medical", category: "Medical", priority: "Medium", aiClass: "Vehicle Collision - 88%", status: "In Progress", location: "Elm & Oak Ave", time: "02/12/2026 13:55", reporter: "Officer-****12", description: "Multiple vehicle collision..." },
    { id: "2024-0715-003", type: "Crime", category: "Crime", priority: "High", aiClass: "Cardiac Arrest - 95%", status: "Resolved", location: "456 Pine Ln", time: "02/11/2026 22:10", reporter: "Paramedic-****89", description: "Robbery incident..." },
    { id: "2024-0715-004", type: "Infrastructure", category: "Infrastructure", priority: "Low", aiClass: "Power Outage - 76%", status: "Closed", location: "789 Birch Rd", time: "02/08/2026 18:00", reporter: "Citizen-****56", description: "Bridge maintenance..." }
  ];

  // States
  const [selectedIds, setSelectedIds] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFilterMenu, setOpenFilterMenu] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: 'All',
    category: 'All',
    status: 'All',
    priority: 'All',
    aiConfidence: 'All'
  });
  const [filteredReports, setFilteredReports] = useState(MOCK_DATA);

  // تطبيق جميع الفلاتر
  useEffect(() => {
    let result = [...MOCK_DATA];

    if (filters.category !== 'All') {
      result = result.filter(r => r.category === filters.category);
    }
    if (filters.priority !== 'All') {
      result = result.filter(r => r.priority === filters.priority);
    }
    if (filters.status !== 'All') {
      result = result.filter(r => r.status === filters.status);
    }
    if (filters.aiConfidence !== 'All') {
      const confValue = parseInt(filters.aiConfidence);
      result = result.filter(r => {
        const match = r.aiClass.match(/(\d+)%/);
        if (match) {
          const aiValue = parseInt(match[1]);
          return aiValue >= confValue;
        }
        return true;
      });
    }
    if (filters.dateRange !== 'All') {
      const today = new Date(2026, 1, 12); // Feb 12, 2026
      result = result.filter(r => {
        try {
          const [month, day, year] = r.time.split(' ')[0].split('/');
          const reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          
          const isToday = reportDate.toDateString() === today.toDateString();
          const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

          if (filters.dateRange === 'Today') return isToday;
          if (filters.dateRange === 'Last 7 Days') return reportDate >= last7Days;
          if (filters.dateRange === 'Last 30 Days') return reportDate >= last30Days;
          return true;
        } catch (e) {
          return true;
        }
      });
    }

    setFilteredReports(result);
  }, [filters]);

  // Style Functions
  const getPriorityStyle = (p) => {
    const styles = {
      'High': 'bg-red-600 text-white',
      'Medium': 'bg-orange-500 text-white',
      'Low': 'bg-green-500 text-white'
    };
    return styles[p] || 'bg-gray-500 text-white';
  };

  const getStatusStyle = (s) => {
    const styles = {
      'Pending': 'bg-yellow-400 text-gray-900',
      'In Progress': 'bg-cyan-500 text-white',
      'Resolved': 'bg-green-500 text-white',
      'Closed': 'bg-gray-500 text-white'
    };
    return styles[s] || 'bg-gray-200 text-gray-800';
  };

  // Handlers
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setOpenFilterMenu(null);
  };

  const handleRefresh = () => {
    setFilters({
      dateRange: 'All',
      category: 'All',
      status: 'All',
      priority: 'All',
      aiConfidence: 'All'
    });
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(filteredReports.map(r => r.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelectId = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  // Delete handler
  const handleDeleteSelected = () => {
    // هنا تقدر تضيف API call: DELETE /api/reports مع selectedIds
    console.log("Deleting reports:", selectedIds);
    // Simulate delete
    setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id)));
    setSelectedIds([]);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <p className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Incident Reports</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-4 relative">
            {[
              { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
              { label: 'Category', options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
              { label: 'Status', options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
              { label: 'Priority', options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
              { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' }
            ].map(filter => (
              <div key={filter.key} className="relative">
                <button 
                  onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
                  className="flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 hover:bg-slate-50 transition-colors"
                >
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter.label}</p>
                  <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
                </button>

                {openFilterMenu === filter.key && (
                  <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
                    <div className="py-2">
                      {filter.options.map(opt => (
                        <button 
                          key={opt}
                          onClick={() => handleFilterChange(filter.key, opt)} 
                          className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
                        >
                          {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-slate-300"
                checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400">Select all ({selectedIds.length})</p>
            </div>
            <div className="flex gap-2 relative">
              <button 
                onClick={handleRefresh}
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
                title="Refresh"
              >
                <span className="material-symbols-outlined">refresh</span>
              </button>
              {/* <button 
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
                title="Upload"
              >
                <span className="material-symbols-outlined">upload</span>
              </button> */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
                title="More options"
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>

              {/* Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-base">download</span>
                      <span>Export as CSV</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-base">print</span>
                      <span>Print</span>
                    </button>
                    {selectedIds.length > 0 && (
                      <>
                        <hr className="my-2 border-slate-200 dark:border-slate-700" />
                        <button 
                          onClick={handleDeleteSelected}
                          className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                          <span>Delete Selected ({selectedIds.length})</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 w-12 text-left"></th>
                  {['Report ID', 'Category', 'Priority', 'AI Classification', 'Status', 'Location', 'Date & Time', 'Reporter Info', 'Actions'].map(h => (
                    <th key={h} className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-50">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredReports.length > 0 ? (
                  filteredReports.map((r) => (
                    <tr 
                      key={r.id} 
                      className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer  transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                      onClick={() => {
                        selectIncident({
                          id: r.id,
                          type: r.type,
                          location: r.location,
                          time: r.time,
                          status: r.status,
                          description: r.description
                        });
                      }}
                    >
                      <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="checkbox" 
                          checked={selectedIds.includes(r.id)} 
                          onChange={() => toggleSelectId(r.id)}
                        />
                      </td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-medium">{r.id}</td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.category}</td>
                      <td className="px-3 py-4 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>
                          {r.priority}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.aiClass}</td>
                      <td className="px-3 py-4 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.time}</td>
                      <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
                      <td className="px-3 py-4 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                        <Link to={`/reports/${r.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
                      No reports found matching your filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReports;








