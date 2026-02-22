// import React, { createContext, useState, useContext } from 'react';

// // Create Context
// const IncidentContext = createContext();

// // Mock Incidents Data
// const MOCK_INCIDENTS = [
//   { id: 'INC-001', type: 'Fire', location: 'Maadi, Cairo', latLng: [29.9602, 31.2569], status: 'Active', description: 'Building fire reported in residential area.', time: 'July 15, 2024, 10:30' },
//   { id: 'INC-002', type: 'Crime', location: 'Zamalek, Cairo', latLng: [30.0626, 31.2222], status: 'Pending', description: 'Theft reported near the club.', time: 'July 15, 2024, 11:15' },
//   { id: 'INC-003', type: 'Medical', location: 'Nasr City', latLng: [30.0561, 31.3301], status: 'Resolved', description: 'Medical emergency in Nasr City.', time: 'July 15, 2024, 09:00' },
//   { id: 'INC-004', type: 'Infrastructure', location: 'Downtown', latLng: [30.0444, 31.2357], status: 'Active', description: 'Water main break on main street.', time: 'July 15, 2024, 08:45' },
//   { id: 'INC-005', type: 'Fire', location: 'Heliopolis', latLng: [30.0901, 31.3236], status: 'In Progress', description: 'Small shop fire, units on scene.', time: 'July 15, 2024, 12:00' },
//   { id: 'INC-006', type: 'Crime', location: 'Giza', latLng: [30.0131, 31.2089], status: 'Active', description: 'Street robbery reported.', time: 'July 15, 2024, 01:30' },
//   { id: 'INC-007', type: 'Medical', location: 'Dokki', latLng: [30.0395, 31.2113], status: 'Pending', description: 'Elderly person needs assistance.', time: 'July 15, 2024, 02:00' },
//   { id: 'INC-008', type: 'Infrastructure', location: 'New Cairo', latLng: [30.0298, 31.4883], status: 'Resolved', description: 'Road maintenance completed.', time: 'July 15, 2024, 07:30' },
//   { id: 'INC-009', type: 'Fire', location: 'Shubra', latLng: [30.0971, 31.2454], status: 'In Progress', description: 'Electrical fire in apartment.', time: 'July 15, 2024, 03:15' },
//   { id: 'INC-010', type: 'Crime', location: 'Abbassia', latLng: [30.0634, 31.2847], status: 'Active', description: 'Disturbance in public square.', time: 'July 15, 2024, 04:00' },
//   { id: 'INC-011', type: 'Medical', location: 'Mokattam', latLng: [30.0202, 31.3005], status: 'Active', description: 'Respiratory distress call.', time: 'July 15, 2024, 05:20' },
//   { id: 'INC-012', type: 'Infrastructure', location: 'Mohandessin', latLng: [30.0520, 31.1980], status: 'Resolved', description: 'Traffic light repaired.', time: 'July 15, 2024, 06:10' },
//   { id: 'INC-013', type: 'Fire', location: 'Garden City', latLng: [30.0367, 31.2301], status: 'Pending', description: 'Kitchen fire reported.', time: 'July 15, 2024, 08:00' },
//   { id: 'INC-014', type: 'Crime', location: 'Old Cairo', latLng: [30.0081, 31.2312], status: 'In Progress', description: 'Suspicious vehicle reported.', time: 'July 15, 2024, 09:45' },
//   { id: 'INC-015', type: 'Medical', location: 'Sheraton', latLng: [30.1105, 31.3800], status: 'Active', description: 'First aid required at mall.', time: 'July 15, 2024, 11:00' }
// ];

// // Provider Component
// // export const IncidentProvider = ({ children }) => {
// //   const [selectedIncident, setSelectedIncident] = useState(MOCK_INCIDENTS[0]);
// //   const [incidents, setIncidents] = useState(MOCK_INCIDENTS);
// //   const [filters, setFilters] = useState({
// //     category: '',
// //     priority: '',
// //     status: '',
// //     aiConfidence: '',
// //     dateRange: ''
// //   });

// // جوه ملف IncidentContext.js
// export const IncidentProvider = ({ children }) => {
//   const [selectedIncident, setSelectedIncident] = useState(null);
//   const [filters, setFilters] = useState({
//     incidentTypes: ['Fire', 'Crime', 'Medical', 'Infrastructure'],
//     severity: 1
//   });

//   const selectIncident = (incident) => {
//     setSelectedIncident(incident);
//   };

//   return (
//     <IncidentContext.Provider value={{ 
//       selectedIncident, 
//       selectIncident, 
//       filters, 
//       setFilters, // تأكدي إن دي موجودة هنا
//       MOCK_INCIDENTS 
//     }}>
//       {children}
//     </IncidentContext.Provider>
//   );
// };




//   // Select an incident (accessible from any page)
//   const selectIncident = (incident) => {
//     console.log('Selected incident globally:', incident);
//     setSelectedIncident(incident);
//   };

//   // Update filters
//   const updateFilters = (newFilters) => {
//     setFilters(prev => ({
//       ...prev,
//       ...newFilters
//     }));
//   };

//   // Get filtered incidents
//   const getFilteredIncidents = () => {
//     return incidents.filter(inc => {
//       const categoryMatch = !filters.category || inc.type === filters.category;
//       return categoryMatch;
//     });
//   };

//   const value = {
//     selectedIncident,
//     selectIncident,
//     incidents,
//     MOCK_INCIDENTS,
//     filters,
//     updateFilters,
//     getFilteredIncidents
//   };

//   return (
//     <IncidentContext.Provider value={value}>
//       {children}
//     </IncidentContext.Provider>
//   );
// };

// // Custom Hook to use the Context
// export const useIncident = () => {
//   const context = useContext(IncidentContext);
//   if (!context) {
//     throw new Error('useIncident must be used within IncidentProvider');
//   }
//   return context;
// };



import React, { createContext, useState, useContext } from 'react';

const IncidentContext = createContext();

// 1. الداتا كاملة (15 بلاغ)
export const MOCK_INCIDENTS = [
  { id: 'INC-001', type: 'Fire', location: 'Maadi, Cairo', latLng: [29.9602, 31.2569], status: 'Active', severity: 5, description: 'Building fire reported in residential area.', time: '10:30 AM' },
  { id: 'INC-002', type: 'Crime', location: 'Zamalek, Cairo', latLng: [30.0626, 31.2222], status: 'Pending', severity: 3, description: 'Theft reported near the club.', time: '11:15 AM' },
  { id: 'INC-003', type: 'Medical', location: 'Nasr City', latLng: [30.0561, 31.3301], status: 'Resolved', severity: 2, description: 'Medical emergency in Nasr City.', time: '09:00 AM' },
  { id: 'INC-004', type: 'Infrastructure', location: 'Downtown', latLng: [30.0444, 31.2357], status: 'Active', severity: 4, description: 'Water main break on main street.', time: '08:45 AM' },
  { id: 'INC-005', type: 'Fire', location: 'Heliopolis', latLng: [30.0901, 31.3236], status: 'In Progress', severity: 4, description: 'Small shop fire, units on scene.', time: '12:00 PM' },
  { id: 'INC-006', type: 'Crime', location: 'Giza', latLng: [30.0131, 31.2089], status: 'Active', severity: 5, description: 'Street robbery reported.', time: '01:30 PM' },
  { id: 'INC-007', type: 'Medical', location: 'Dokki', latLng: [30.0395, 31.2113], status: 'Pending', severity: 3, description: 'Elderly person needs assistance.', time: '02:00 PM' },
  { id: 'INC-008', type: 'Infrastructure', location: 'New Cairo', latLng: [30.0298, 31.4883], status: 'Resolved', severity: 1, description: 'Road maintenance completed.', time: '07:30 AM' },
  { id: 'INC-009', type: 'Fire', location: 'Shubra', latLng: [30.0971, 31.2454], status: 'In Progress', severity: 4, description: 'Electrical fire in apartment.', time: '03:15 PM' },
  { id: 'INC-010', type: 'Crime', location: 'Abbassia', latLng: [30.0634, 31.2847], status: 'Active', severity: 4, description: 'Disturbance in public square.', time: '04:00 PM' },
  { id: 'INC-011', type: 'Medical', location: 'Mokattam', latLng: [30.0202, 31.3005], status: 'Active', severity: 3, description: 'Respiratory distress call.', time: '05:20 PM' },
  { id: 'INC-012', type: 'Infrastructure', location: 'Mohandessin', latLng: [30.0520, 31.1980], status: 'Resolved', severity: 2, description: 'Traffic light repaired.', time: '06:10 PM' },
  { id: 'INC-013', type: 'Fire', location: 'Garden City', latLng: [30.0367, 31.2301], status: 'Pending', severity: 5, description: 'Kitchen fire reported.', time: '08:00 PM' },
  { id: 'INC-014', type: 'Crime', location: 'Old Cairo', latLng: [30.0081, 31.2312], status: 'In Progress', severity: 3, description: 'Suspicious vehicle reported.', time: '09:45 PM' },
  { id: 'INC-015', type: 'Medical', location: 'Sheraton', latLng: [30.1105, 31.3800], status: 'Active', severity: 4, description: 'First aid required at mall.', time: '11:00 PM' }
];

// 2. الـ Provider
export const IncidentProvider = ({ children }) => {
  const [selectedIncident, setSelectedIncident] = useState(MOCK_INCIDENTS[0]);
  const [filters, setFilters] = useState({
    incidentTypes: ['Fire', 'Crime', 'Medical', 'Infrastructure'],
    severity: 1
  });

  const value = {
    selectedIncident,
    selectIncident: (inc) => setSelectedIncident(inc),
    filters,
    setFilters,
    MOCK_INCIDENTS
  };

  return (
    <IncidentContext.Provider value={value}>
      {children}
    </IncidentContext.Provider>
  );
};

// 3. الـ Hook
export const useIncident = () => {
  const context = useContext(IncidentContext);
  if (!context) throw new Error('useIncident must be used within Provider');
  return context;
};