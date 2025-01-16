// // "use client"
// // import React from 'react'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// // import { usePathname } from 'next/navigation';
// // import { navLinks } from '@/constants';
// // const Sidebar = () => {
// //     const pathname = usePathname()
// //   return (
// //     <aside className='sidebar'>
// //         <div className='flex size-full flex-col gap-4'>
// //             <Link href= "/" className="sidebar-logo">
// //                 <Image src = "/public/assests/images/logo-text.svg" alt="logo" width={180} height={28}/>

// //             </Link>
// //             <nav className='sidebar-nav'>
// //                 <SignedIn>
// //                 <ul className="sidebar-nav_elements">
// //               {navLinks.slice(6).map((link) => {
// //                 const isActive = link.route === pathname

// //                 return (
// //                   <li key={link.route} className={`sidebar-nav_element group ${
// //                     isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
// //                   }`}>
// //                     <Link className="sidebar-link" href={link.route}>
// //                       <Image 
// //                         src={link.icon}
// //                         alt="logo"
// //                         width={24}
// //                         height={24}
// //                         className={`${isActive && 'brightness-200'}`}
// //                       />
// //                       {link.label}
// //                     </Link>
// //                   </li>
// //                 )
// //               })}

// //               <li className="flex-center cursor-pointer gap-2 p-4">
// //                 <UserButton showName />
// //               </li>
// //             </ul>
// //                 </SignedIn>
// //             </nav>
// //         </div>

// //     </aside>
// //   )
// // }

// // export default Sidebar
// "use client";

// i{28}
//           />
//         </Link>
// mport React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SignedIn, UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import { navLinks } from "@/constants";

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="sidebar bg-gray-100 w-64 h-screen p-4 shadow-md">
//       <div className="flex flex-col items-start gap-6">
//         {/* Logo */}
//         <Link href="/" className="sidebar-logo mb-4">
//           <Image
//             src="/assets/images/logo-text.svg"
//             alt="logo"
//             width={180}
//             height=
//         {/* Navigation Links */}
//         <SignedIn>
//           <nav>
//             <ul className="space-y-2">
//               {navLinks.map((link) => {
//                 const isActive = link.route === pathname;
//                 return (
//                   <li
//                     key={link.route}
//                     className={`p-2 rounded-md ${
//                       isActive
//                         ? "bg-purple-gradient text-white"
//                         : "text-gray-700"
//                     }`}
//                   >
//                     <Link href={link.route} className="flex items-center gap-2">
//                       <Image
//                         src={link.icon}
//                         alt={link.label}
//                         width={20}
//                         height={20}
//                         className={'${isActive && 'brightness-200'}'}
//                       />
//                       {link.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* User Button */}
//           <div className="mt-6">
//             <UserButton/>
//           </div>
//         </SignedIn>
//       </div>
//     </aside>
//   );
// }
// "use client";
// import React from "react";

// // Simulating navLinks data that would normally come from constants
// const navLinks = [
//   {
//     label: "Home",
//     route: "/",
//     icon: "/assets/icons/home.svg",
//   },
//   {
//     label: "Image Restore",
//     route: "/transformations/add/restore",
//     icon: "/assets/icons/image.svg",
//   },
//   // ... other nav links
// ];

// export default function Sidebar() {
//   // Since we can't use usePathname, we'll use window.location.pathname
//   const [pathname, setPathname] = React.useState("/");

//   React.useEffect(() => {
//     setPathname(window.location.pathname);
//   }, []);

//   return (
//     <aside className="sidebar bg-gray-100 w-64 h-screen p-4 shadow-md">
//       <div className="flex flex-col items-start gap-6">
//         <a href="/" className="sidebar-logo mb-4">
//           <img
//             src="/assets/images/logo-text.svg"
//             alt="logo"
//             className="w-[180px] h-[28px]"
//           />
//         </a>
        
//         <nav className="w-full">
//           <ul className="space-y-2">
//             {navLinks.map((link) => {
//               const isActive = link.route === pathname;
//               return (
//                 <li
//                   key={link.route}
//                   className={`p-2 rounded-md transition-colors ${
//                     isActive
//                       ? "bg-purple-gradient text-white"
//                       : "text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   <a 
//                     href={link.route} 
//                     className="flex items-center gap-2 w-full"
//                   >
//                     <img
//                       src={link.icon}
//                       alt={link.label}
//                       className={`w-5 h-5 ${isActive && 'brightness-200'}`}
//                     />
//                     <span>{link.label}</span>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
        
//         {/* Placeholder for user button - you'll need to implement your own user management */}
//         <div className="mt-6">
//           <button className="p-2 rounded-full bg-gray-200">
//             User
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }
// "use client";
// import React from "react";
// // C:\Users\sarth\VSCODE\image\constants\index.ts
// import { navLinks } from "/constants/index"; // Import navLinks from your index.ts file
// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { Button } from "../ui/button";
// import Link from "next/link";
// export default function Sidebar() {
//   const [pathname, setPathname] = React.useState("/");

//   React.useEffect(() => {
//     setPathname(window.location.pathname);
//   }, []);

//   return (
//     <aside className="sidebar bg-gray-100 w-64 h-screen p-4 shadow-md">
//       <div className="flex flex-col items-start gap-6">
//         <a href="/" className="sidebar-logo mb-4">
//           <img
//             src="/assets/images/logo-text.svg"
//             alt="logo"
//             className="w-[180px] h-[28px]"
//           />
//         </a>
//         <SignedIn>
//         <nav className="w-full">
//           <ul className="space-y-2">
//             {navLinks.slice(0,6).map((link) => {
//               const isActive = link.route === pathname;
//               return (
//                 <li
//                   key={link.route}
//                   className={`p-2 rounded-md transition-colors ${
//                     isActive
//                       ? "bg-purple-gradient text-white"
//                       : "text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   <a href={link.route} 
//                     className="flex items-center gap-2 w-full"
//                   >
//                     <img
//                       src={link.icon}
//                       alt={link.label}
//                       className={`w-5 h-5 ${isActive && 'brightness-200'}`}
//                     />
//                     <span>{link.label}</span>
//                   </a>
//                 </li>
//               );
//             })}
//             </ul>
//           <ul className = "sidebar-nav_elements">
//             <li className="flex-center cursor-pointer gap-2 flex-4">
//               <UserButton afterSignOutUrl="/" showName/>
//             </li>
//           </ul>
//         </nav>
//         </SignedIn>
//         <SignedOut>
//           <Button asChild className = "button bg-purple-gradient bg-cover">
//             <Link href = "/sign-in">Login</Link>

//           </Button>

//         </SignedOut>

        
//         <div className="mt-6">
//           <button className="p-2 rounded-full bg-gray-200">
//             User
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }
// "use client";
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import {
//     Sheet,
//     SheetContent,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import { SignedIn, UserButton } from '@clerk/nextjs'

// export default function MobileNav() {
//   return (
//     <header>
//         <Link href='/' className='flex items-center gap-2 md:py-2'>
//             <Image 
//                 src="/assets/images/logo-text.svg" 
//                 alt="logo" 
//                 width={180} 
//                 height={28}
//             />
//         </Link>
//         <nav className='flex items-center gap-2'>
//             <SignedIn>
//                 <UserButton afterSignOutUrl='/' />
//                 <Sheet>
//                     <SheetTrigger>
//                         <Image 
//                             src="/assets/icons/menu.svg"
//                             alt="menu"
//                             width={32}
//                             height={32}
//                             className="cursor-pointer"
//                         />
//                     </SheetTrigger>
//                     <SheetContent className='sheet-Content sm:w-64'>
//                         <>
//                             <Image 
//                                 src="/assets/images/logo-text.svg" 
//                                 alt="logo" 
//                                 width={152} 
//                                 height={23}
//                             />
//                         </>
//                     </SheetContent>
//                 </Sheet>
//             </SignedIn>
//         </nav>
//     </header>
//   )
// }
"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar