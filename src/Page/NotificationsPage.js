import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New High Priority Incident Reported", type: "priority_high", color: "bg-red-100 text-red-800", icon: "text-red-600", time: "5 mins ago", read: false },
    { id: 2, text: "Incident #1254 has been Resolved", type: "check_circle", color: "bg-green-100 text-green-800", icon: "text-green-600", time: "15 mins ago", read: false },
    { id: 3, text: "New Report Submitted by Citizen", type: "flag", color: "bg-yellow-100 text-yellow-800", icon: "text-yellow-600", time: "1 hour ago", read: true },
    { id: 4, text: "System Maintenance Scheduled", type: "construction", color: "bg-blue-100 text-blue-800", icon: "text-blue-600", time: "2 hours ago", read: true },
    { id: 5, text: "3 New Reports Pending Review", type: "mail", color: "bg-purple-100 text-purple-800", icon: "text-purple-600", time: "3 hours ago", read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="w-full p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {unreadCount > 0 ? `${unreadCount} new notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div 
                key={notif.id}
                className={`p-4 rounded-lg border transition-colors ${
                  notif.read 
                    ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${notif.color}`}>
                    <span className={`material-symbols-outlined ${notif.icon}`}>{notif.type}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 dark:text-white font-medium">{notif.text}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{notif.time}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="px-3 py-1 rounded bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Mark Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="p-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 block mb-4">done_all</span>
              <p className="text-gray-500 dark:text-gray-400 text-lg">No notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
