import React from "react";

const StreamerProfile = ({ comment, streamer, keywords, painPointsNeeds, profileSliders }) => {
    return (
        <>
            <div className="bg-web-dirty-white rounded-3xl text-black flex flex-col items-center p-12 gap-6 md:mx-16">
                <div className="font-clash-medium text-3xl w-1/2 web-profile-quote-before web-profile-quote-after">
                    {comment}
                </div>
                <div className="flex w-full gap-7 flex-wrap xl:flex-nowrap">
                    {/* Left Panel */}
                    <div className="flex flex-col gap-4 w-full xl:w-1/3">
                        {/* Interest items */}
                        <div className="flex gap-3 flex-wrap">
                            {keywords.map((e, index) => {
                                return (
                                    <div key={index} className="bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full">
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Profile */}
                        <div className="bg-white rounded-3xl flex flex-col items-center gap-12 p-12">
                            <img
                                src={streamer.ProfileImage}
                                alt="profile"
                                className="min-w-[241px]"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-8">
                                    <div className="font-clash-semibold text-right text-3xl w-1/2">{streamer.Name}</div>
                                    <div className="font-clash-semibold text-lg text-left text-web-gray w-1/2">{streamer.Age} | {streamer.Sex}</div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="font-clash-semibold text-right text-lg w-1/2">Location</div>
                                    <div className="font-clash-semibold text-lg text-left text-web-gray w-1/2">{streamer.Location}</div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="font-clash-semibold text-right text-lg w-1/2">Occupation</div>
                                    <div className="font-clash-semibold text-lg text-left text-web-gray w-1/2">{streamer.Occupation}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Panel */}
                    <div className="w-full flex flex-col justify-end gap-8">
                        {/* Pain Point & Needs */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row justify-around font-clash-semibold text-2xl sm:text-3xl text-web-dark-blue text-center sm:text-left">
                                <div>
                                    Pain Point
                                </div>
                                <div>
                                    Needs
                                </div>
                            </div>
                            {painPointsNeeds.map((e, index) => {
                                return (
                                    <div key={index} className="flex flex-col sm:flex-row justify-between font-clash-medium text-lg sm:text-xl bg-white rounded-full items-center text-center">
                                        <div className="flex justify-center py-4 sm:py-6 w-full sm:w-1/2">
                                            {e.painPoint}
                                        </div>
                                        <div className="flex justify-center bg-web-dark-blue/15 text-web-dark-blue border-4 border-web-dark-blue py-4 sm:py-6 w-full sm:w-1/2 rounded-full mt-4 sm:mt-0">
                                            {e.need}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap gap-6 justify-between w-full rounded-[45px] text-center py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#DFE6EB]">
                            {profileSliders.map((e, index) => {
                                return (
                                    <div key={index} className="flex flex-col sm:flex-row items-center w-full lg:w-5/12 justify-between gap-6">
                                        <div className="font-clash-semibold text-xl w-full sm:w-44 text-center sm:text-left">{e.label}</div>
                                        <div className="font-clash-semibold text-2xl text-web-gray flex gap-6 items-center">
                                            <div>Low</div>
                                            <input type="range" className="web-profile-slider [&::-webkit-slider-thumb]:web-profile-slider-thumb [&::-moz-range-thumb]:web-profile-slider-thumb" min="0" max="10" value={e.value} readOnly />
                                            <div>High</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StreamerProfile;
