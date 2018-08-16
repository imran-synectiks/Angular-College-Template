import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    // {
    //     path: '', title: 'Personal', icon: '', study: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    // },
    {
    path: '/starter', title: 'Dashboard', icon: 'mdi mdi-view-dashboard', class: '', label: '', labelClass: '', extralink: false, submenu: []
  },
 {
    path: '/countries', title: 'Data-sharing', icon: 'mdi mdi-pen', class: 'has-arrow', label: '', labelClass: '', extralink: false,
   submenu: [
     { path: '/child', title: 'Child', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
     { path: '/parent', title: 'Parent', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
     { path: '/sibling', title: 'Sibling', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }

   ]
  },

  {
    path: '/study', title: 'Class', icon: 'mdi mdi-presentation', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      // { path: '//study/classadd', title: 'Add New', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      //
      // { path: '//study/classlist', title: 'Class List', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      {
        path: '/class-add', title: 'study-add', icon: 'mdi mdi-view-dashboard', class: '', label: '', labelClass: '', extralink: false, submenu: []
      },
      {
        path: '/class-list', title: 'study-list', icon: 'mdi mdi-view-dashboard', class: '', label: '', labelClass: '', extralink: false, submenu: []
      },
    ]
  },

  {
    path: '/subject', title: 'Subject', icon: 'mdi mdi-book-open', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/subject/subjectadd', title: 'Add New', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/subject/subjectlist', title: 'Subject List', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/student', title: 'Student', icon: 'mdi mdi-school', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/student/student-item', title: 'Add New', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/student/studentlist', title: 'Student List', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/attendance', title: 'Attendance', icon: 'mdi mdi-human-male-female', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/attendance/addfromfile', title: 'Add from File', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/attendance/attendanceadd', title: 'Add', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/attendance/attendanceview', title: 'View', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/marks', title: 'Marks', icon: 'mdi mdi-pen', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/marks/marksadd', title: 'Add New', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/marks/markslist', title: 'Marks List', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/result', title: 'Result', icon: 'mdi mdi-chart-bar', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/result/generate', title: 'Generate', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/result/search', title: 'Search', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/result/searchpublic', title: 'Search Public', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/promotion', title: 'Promotion', icon: 'mdi mdi-gift', class: '', label: '', labelClass: '', extralink: false, submenu: []
  },

  {
    path: '/accounting', title: 'Accounting', icon: 'mdi mdi-bank', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/accounting/sectors', title: 'Sectors', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/accounting/addincome', title: 'Add Income', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/accounting/viewincome', title: 'View Income', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/accounting/addexpense', title: 'Add Expense', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/accounting/viewexpense', title: 'View Expense', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/sms', title: 'SMS', icon: 'mdi mdi-message', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/sms/formats', title: 'SMS Formats', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/sms/send', title: 'Send Bulk SMS', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/sms/log', title: 'SMS Log', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/reports', title: 'Reports', icon: 'mdi mdi-chart-line', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/reports/marksheet', title: 'Marksheet', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/attendance', title: 'Attendance', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/monthlyattendance', title: 'Monthly Attendance', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/tabulationsheet', title: 'Tabulationsheet', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/accounttype', title: 'Account by Type', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/accountbalance', title: 'Account Balance', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/reports/barcodegenerate', title: 'Barcode Generate', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },

  {
    path: '/settings', title: 'Settings', icon: 'mdi mdi-settings', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/settings/gparules', title: 'GPA Rules', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/user/', title: 'Users', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/settings/holidays', title: 'Holidays', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/settings/classoffdays', title: 'Class Off Days', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/settings/institute', title: 'Institute', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },
  {
      path: '', title: '', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
  },

];

