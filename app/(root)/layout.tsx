// import React from 'react'

// const Layout = ({children}: {children: React.ReactNode}) => {
//   return (
//     <main className='root'> 
//         <div className='root-container'>
//         <div className='wrapper'>
//         {children}
//         </div>
//         </div>
//     </main>
        
    
//   )
// }

// export default Layout;
// app/(root)/layout.tsx
// app/(root)/layout.tsx
// import React from 'react';

// export default function RootLayout({
//   children
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <main className='root'>
//       {/* Sidebar */}
//       {/* {MobileNav} */}
//       <div className='root-container'>
//         <div className='wrapper'>
//           {children}
//         </div>
//       </div>
//     </main>
//   );
// }
// app/(root)/layout.tsx
import React from 'react';
import Sidebar from '@/components/shared/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Mobile Navigation */}
      {/* <MobileNav /> */}

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      {/* Notification Toaster */}
      {/* <Toaster /> */}
    </main>
  );
}
