import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
    return (
        <div className='relative'>
            {/* image */}
            <div className="w-full h-[90vh] overflow-hidden flex items-end">
                <img src="/heroImage.jpg" alt="Wanderwise hero section" className="w-full" />
            </div>


            {/* overlay  */}
            <div className='w-full h-[90vh] bg-black absolute top-0 opacity-60'>

            </div>


            {/* content  */}
            <div className='absolute top-0 w-full h-[90vh] flex items-center justify-center'>
                <div className="w-1/2 mx-auto text-center">
                    <h1 className='text-5xl font-bold text-white'>Plan your trips with Wanderwise</h1>

                    <p className="text-white mt-6 text-xl leading-8 tracking-wider">
                        Wanderwise is a travel planning app that helps you plan your trips with ease. Invite your friends, create itineraries, and share your travel plans with others. Start planning your next adventure today!
                    </p>

                    <CustomButton text="Get Started" className="mt-4" />

                    <CustomButton text="Learn More"  />

                </div>
            </div>



        </div>
    )
}

export default Hero