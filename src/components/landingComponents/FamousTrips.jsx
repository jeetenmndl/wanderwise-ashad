import React from 'react'
import { useNavigate } from 'react-router-dom'

const tripsData = [
    {
        title: "Swoyambhunath Stupa",
        content: "Swoyambhunath Stupa, also known as the Monkey Temple, is a UNESCO World Heritage Site and one of the most iconic landmarks in Kathmandu.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k7vHanc8Tjj7j1HhaePNVFoC5_OcIvSGPk4YRprdw2NvezFTO-4mPiXz&s=10",
        link: "/about"
    },
    {
        title: "Personalized Itineraries",
        content: "Create customized travel itineraries tailored to your destination, interests, and travel preferences.",
        image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/12/22171359/pokhra.jpg",
        link: "/features"
    },
    {
        title: "Smart Travel Planning",
        content: "Plan your trips effortlessly with smart recommendations for destinations, activities, stays, and more.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMFw6ERV7TKgIY5ERqSt-YaitLwVFEDwrn2TnsU2alt8tKmCTQDfts1qJ&s=10",
        link: "/contact"
    },
    {
        title: "Discover New Experiences",
        content: "Explore exciting destinations, hidden gems, and unforgettable experiences to make every journey special.",
        image: "https://www.acethehimalaya.com/wp-content/uploads/2024/03/best-places-to-visit-in-nepal.jpg.webp",
        link: "/"
    },
]

const FamousTrips = () => {

    const navigate = useNavigate();

    return (
        <div className='px-20 py-24'>
            {/* heading */}
            <div>
                <h2 className='text-4xl font-bold text-center'>Famous Trips</h2>
            </div>

            {/* content  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
                {
                    tripsData.map((feature, index)=>{
                        return (
                            <div key={index} onClick={()=>{navigate(feature.link)}} className='border rounded p-4 border-gray-300'>

                               <div className="w-full h-40 overflow-hidden mb-4">
                                <img className="w-full" src={feature.image} alt={feature.title} />
                               </div>
                                
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p>{feature.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FamousTrips