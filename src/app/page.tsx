import * as React from "react";
import Image from 'next/image';
import Container from "./components/atoms/container";
import Background from "./components/atoms/background";
import ContentWrapper from "./components/atoms/content_wrapper";
import Header from "./components/atoms/header";
import Navbar from "./components/atoms/navbar";

export default function Home() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                
                <Header>
                  <Navbar />
                </Header>

            </ContentWrapper>
        </Background>
    </Container>

// //     <ContentWrapper> F
// //         <Header>
// //           <Navbar />
// //         </Header>
// //     </ContentWrapper>
// //     <Background_2 />

//     <div className="flex flex-col justify-center bg-slate-900 min-h-screen">         {/* <Container> */}
//       <div className="flex overflow-hidden relative flex-col items-start w-full mix-blend-color-dodge min-h-screen"> {/* <Background> */}
//         {/* <Image
//           loading="lazy"
//           src="your-background-image-src"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0"
//         /> */}
//         <div className="flex relative gap-5 justify-between self-stretch px-5 md:px-20 py-8 w-full bg-slate-900 flex-wrap"> {/* <ContentWrapper> */}
//           <div className="flex gap-5 justify-between">
//             {/* <Image
//               loading="lazy"
//               src="your-first-image-src"
//               alt="First Image"
//               width={89}
//               height={89}
//               className="shrink-0"
//             />
//             <Image
//               loading="lazy"
//               src="your-second-image-src"
//               alt="Second Image"
//               width={110}
//               height={110}
//               className="shrink-0"
//             /> */}
//           </div>
//           <div className="flex gap-5 items-center my-auto text-xl font-bold text-yellow-400 flex-wrap">
//             <div className="my-auto">HOME</div>
//             <div className="flex-auto my-auto">DASHBOARD</div>
//             <div className="flex-auto my-auto">MY PROFILE</div>
//             <div className="flex-auto my-auto">MY STATISTIC</div>
//             <div className="justify-center px-5 py-3.5 text-green-50 bg-yellow-400 whitespace-nowrap">
//               LOGIN
//             </div>
//           </div>
//         </div>
//         <div className="flex relative flex-col mt-10 md:mt-32 ml-5 md:ml-20 max-w-full text-4xl md:text-5xl text-white leading-tight">
//           <div>Welcome to</div>
//           <div className="mt-5 md:mt-7 font-extrabold text-yellow-400">
//             LECTURER AVAILABILITY SYSTEM
//           </div>
//           <div className="mt-5 text-2xl leading-10">
//             Department of Information Technology
//             <br />
//             State Polytechnic of Malang
//           </div>
//         </div>
//         <div className="flex overflow-hidden relative flex-col items-start pt-20 mt-10 md:mt-36 max-w-full min-h-[500px] w-full">
//           {/* <Image
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab8dc088790c2aef697ab617ba643c6e49eadc6b1affcc7eb8030bd2accb123?"
//             alt="Content Image"
//             layout="fill"
//             objectFit="cover"
//             className="absolute inset-0"
//           /> */}
//           <div className="relative mt-10 md:mt-32 w-full min-h-[299px]" />
//         </div>
//       </div>      {/* </Background> */}
//     </div>        
  );
}
