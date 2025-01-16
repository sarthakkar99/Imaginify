// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;

// import { UserButton } from "@clerk/nextjs";
// import React from "react";

// // app/(root)/page.tsx
// export default function RootPage() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <UserButton />
//     </div>
//   );
// }
// app/(root)/page.tsx
// import { UserButton } from '@clerk/nextjs';
// import React from 'react';

// export default function RootPage() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <UserButton />
//     </div>
//   );
// }
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function RootPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <UserButton />
    </div>
  );
}

// import { navLinks } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"

// const Home = async ({ searchParams }: SearchParamProps) => {
//   const page = Number(searchParams?.page) || 1;
//   const searchQuery = (searchParams?.query as string) || '';

//   const images = await getAllImages({ page, searchQuery})

//   return (
//     <>
//       <section className="home">
//         <h1 className="home-heading">
//           Unleash Your Creative Vision with Imaginify
//         </h1>
//         <ul className="flex-center w-full gap-20">
//           {navLinks.slice(1, 5).map((link) => (
//             <Link
//               key={link.route}
//               href={link.route}
//               className="flex-center flex-col gap-2"
//             >
//               <li className="flex-center w-fit rounded-full bg-white p-4">
//                 <Image src={link.icon} alt="image" width={24} height={24} />
//               </li>
//               <p className="p-14-medium text-center text-white">{link.label}</p>
//             </Link>
//           ))}
//         </ul>
//       </section>

//       <section className="sm:mt-12">
//         <Collection 
//           hasSearch={true}
//           images={images?.data}
//           totalPages={images?.totalPage}
//           page={page}
//         />
//       </section>
//     </>
//   )
// }

// export default Home
