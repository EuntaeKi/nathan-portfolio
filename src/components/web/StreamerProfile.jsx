import React from 'react';

const StreamerProfile = () => {
    const imagePath = `${process.env.PUBLIC_URL}/img/`;

    return (
        <>
            <div className='bg-web-dirty-white rounded-3xl text-black flex flex-col items-center p-12 gap-6 mx-16'>
                <div className='font-clash-medium text-3xl'>
                    Comment
                </div>
                <div className='flex w-full'>
                    {/* Left Panel */}
                    <div className='flex flex-col gap-4 w-1/4'>
                        {/* Interest items */}
                        <div className='flex gap-3 flex-wrap'>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                            <div className='bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full'>#Item 1</div>
                        </div>
                        {/* Profile */}
                        <div className='bg-white rounded-3xl flex flex-col items-center gap-12 p-12'>
                            <img
                                src={`${imagePath}arcaders_web_ideate_streamer_1.png`}
                                alt="profile"
                                className='min-w-[241px]' />
                            <div className='flex gap-8'>
                                <div className='flex flex-col gap-4 font-clash-semibold text-right'>
                                    <div className='text-3xl'>Name</div>
                                    <div className='text-lg'>Location</div>
                                    <div className='text-lg'>Occupation</div>
                                </div>
                                <div className='flex flex-col gap-4 font-clash-semibold text-lg text-left text-web-gray justify-end'>
                                    <div className=''>Age | Gender</div>
                                    <div>Region, Country</div>
                                    <div>Occupation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Panel */}
                    <div>
                        {/* Pain Point & Needs */}
                        <div className='flex flex-col'>
                            <div>
                                <div>Pain Point</div>
                                <div>Needs</div>
                            </div>
                            <div className='flex bg-white rounded-3xl'>
                                <div>Pain Point #1</div>
                                <div>Needs #1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StreamerProfile;
