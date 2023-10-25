import React from 'react'
import HeroImg from "../../assets/Hero.png"
import { useCss } from 'react-use'

export default function Hero() {

    const HeroHeading = useCss({
        color: '#1D3444',
        fontSize: '44px',
    })

    const HeroThumbText = useCss({
        color: 'rgba(57, 65, 73, 0.50)',
        fontSize: '18px',
    })


    return (
        <section className="bg-bg-main body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className={`${HeroHeading} mb-4 font-medium text-gray-900`}>
                        Before they sold out
                        <br className="hidden lg:inline-block" />
                        readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg text-lg">
                            See Our Services
                        </button>
                        <button className="ml-4 inline-flex text-orange-500  border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                            See All Services
                        </button>
                    </div>
                    <div>
                        <p className={` ${HeroThumbText} mt-4`}>Work With thousands Companies</p>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={HeroImg}
                    />
                </div>
            </div>
        </section>

    )
}
