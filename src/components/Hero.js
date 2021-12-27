import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../images/Browser.png'

const Hero = () => {
  return (
    <section className='z-40 h-full'>
    <div className='bg-white'>
    <div className="absolute top-24 left-16 w-20 h-20 md:top-32 lg:left-1 md:w-80 md:h-80 md:opacity-25 bg-purple-400 rounded-r-full mix-blend-normal filter blur-3xl"></div>
    <div className="absolute top-96 right-4 w-20 h-20 md:top-96 md:right-32 md:w-80 md:h-80 md:opacity-25 bg-yellow-200 rounded-full mix-blend-normal filter blur-3xl"></div>
    <div className="absolute -bottom-72 left-16 w-20 h-20 md:-bottom-96 md:left-72 md:w-80 md:h-80 md:opacity-25 bg-pink-900 rounded-b-full mix-blend-normal filter blur-3xl"></div>
    </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-tighter tracking-wide mb-4 gradient">Skull <span className="gradient">Machina</span></h1>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:justify-center">
                <div>
                  <Link className="mt-4 py-2 px-6 font-mono bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-bold text-gray-400 text-xl transition duration-300 ease-in-out items-center" to="/">Mint</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center">
              <img src={ImageOne} alt="play" className="object-cover w-full h-full" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


  )
}

export default Hero

