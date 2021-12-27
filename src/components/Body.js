import React from "react";
import Pack from '../images/0007.png'
import { Link } from 'react-router-dom';


const Body = () => {
  return (
    <>

<section className="text-blueGray-700 about" id="about">
    <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-center md:text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-8 md:text-left text-2xl font-black tracking-wide gradient md:text-5xl title-font"> About Skullmachina </h1>
            <p className="font-mono mb-8 text-base leading-relaxed text-center md:text-left text-gray-400 break-normal"> Skullmachina is a collection of 500 cyborg skeletons NFTs living on the Solana blockchain. Your cyborg acts as your membership card which opens you to a variety of members-only benefits and first pick for new releases.</p>
            <div className=" md:items-start md:justify-items-start grid">
                <button className="font-mono flex items-center px-6 py-2 mt-auto font-semibold text-gray-400 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"><Link to="/">Join Us</Link> </button>

            </div>
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
    <img src={Pack} alt="mobile" className="w-full rounded-lg" />
        </div>
    </div>
</section>


<section className="bg-black" id="roadmap">
<div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 gradient"
          >
            
            <div className="flex flex-row-reverse md:contents">
              <div
                className="about col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1 tracking-wide gradient">Phase 1</h3>
                <p className="leading-tight text-justify text-gray-400 font-mono break-words">
                  Initial minting launch <br />
                  NFT minting on secondary markets
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 shadow"
                ></div>
              </div>
            </div>
            
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 shadow"
                ></div>
              </div>
              <div
                className="about col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1 tracking-wide gradient">Phase 2</h3>
                <p className="leading-tight text-justify text-gray-400 font-mono">
                  Launch of gaming avatars and assets <br />
                  Release of gaming token
                </p>
              </div>
            </div>
           
            <div className="flex flex-row-reverse md:contents">
              <div
                className="about col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1 gradient">Phase 3</h3>
                <p className="leading-tight text-justify text-gray-400 font-mono">
                  Launch of gaming platform
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 shadow"
                ></div>
              </div>
            </div>
           
          
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 shadow"
                ></div>
              </div>
              <div
                className="about col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1 tracking-wide gradient">Phase 4</h3>
                <p className="leading-tight text-justify font-mono text-gray-400">
                  Additional features and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
</section>

    {/* Question section */}
    <section className="about" id="faq">
    <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
    <blockquote className="relative p-8 mb-4">
      <h2 className="text-xl md:text-5xl font-bold tracking-wide gradient text-center">Questions</h2>
      </blockquote>
      </div>
      </div>
      <div className="w-full md:w-6/12 px-4">
        <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
              </div>
              <h6 className="text-xl mb-1 font-semibold tracking-wide gradient">Is there a whitelist?</h6>
              <p className="font-mono mb-4 text-gray-400">Yes, there would be whitelist for this project and priorities will be accorded to members with the launched NFTs.</p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
              </div>
              <h6 className="text-xl mb-1 font-semibold tracking-wide gradient">Why should I care?</h6>
              <p className="font-mono mb-4 text-gray-400">This is an opportunity to be part of the gaming metaverse in Solana and also to support undergraduates who are going into NFT.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
              </div>
              <h6 className="text-xl mb-1 font-semibold tracking-wide gradient">Will this be listed in secondary markets?</h6>
              <p className="font-mono mb-4 text-gray-400">Ofcourse! We would be listing in secondary markets like Solanart after minting</p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
</svg>
              </div>
              <h6 className="text-xl mb-1 font-semibold tracking-wide gradient">Is there a roadmap?</h6>
              <p className="font-mono mb-4 text-gray-400">Yes we have a roadmap which would be updated as each phase goes on.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>





<section className="relative bg-black" id="team">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 about pointer-events-none" aria-hidden="true"></div>
    

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-wide gradient">Our Team</h2>
            <p className="font-mono text-xl text-gray-400">Humanoids behind the making of the machina</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-black rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-900" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-wide mb-1 gradient">Benbyx</h4>
              <p className="font-mono text-gray-400 text-center"><Link className="text-purple-900" to='/'>Benbyx</Link> is a product designer and mentor. He loves the application of colors and shapes for personification.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-black rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-900" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-wide mb-1 gradient">AdaIhueze</h4>
              <p className="font-mono text-gray-400 text-center"><Link className="text-purple-900" to='/'>AdaIhueze</Link> is a computer programmer with sauce. She functions better at night than the day that can explain the obsession with coffee.</p>
            </div>

             {/* 3rd item */}
             <div className="relative flex flex-col items-center p-6 bg-black rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-900" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-wide mb-1 gradient">Favalcodes</h4>
              <p className="font-mono text-gray-400 text-center"><Link className="text-purple-900" to='/'>Favalcodes</Link> is a software developer who destresses with humor. She loves getting things done and in an organized way.</p>
            </div>

          </div>

        </div>
      </div>
    </section>

   
    
   </>
  );
};

export default Body;