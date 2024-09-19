import React, { useState } from 'react'
import Accordion from './Accordian';

const ProfilePage = () => {

    const [selector, setSelector] = useState(true);

    return (
        <div>

            <section class="relative pt-20 pb-24">
                <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" class="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
                <div class="w-full max-w-5xl mx-auto px-6 md:px-8">
                    <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                        <img src="./profile.png" alt="user-avatar-image"
                            class="border-4 border-solid border-white rounded-full object-cover" />
                    </div>
                    <div class="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                        <div class="block">
                            <h3 class="font-manrope font-bold text-xl text-gray-900 mb-1 max-sm:text-center">User name</h3>

                            <h3 class="font-manrope font-sm text-sm text-gray-900 max-sm:text-center">+91-9876543210</h3>

                            <p class="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Email: xyz1234@gamil.com</p>
                        </div>
                        
                    </div>



                    {/* accordian from here  */}

                    <Accordion/>
                    




                </div>
            </section>


        </div>
    )
}

export default ProfilePage