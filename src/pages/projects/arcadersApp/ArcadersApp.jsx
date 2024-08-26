import React, { useEffect, useState } from "react";

import "./ArcadersApp.css";

const ArcadersApp = ({ setPageColor }) => {
    const imagePath = `${process.env.PUBLIC_URL}/img/`;

    useEffect(() => {
        setPageColor("#FFFFFF");
    }, [setPageColor]);

    return (
        <>
            <div className="arcaders-app-container block">
                <div className="arcaders-app-intro h-svh">
                    <div className="flex text-gray-400 w-full justify-around">
                        <div className="w-1/3">
                            PROJECT:
                        </div>
                        <div className="w-1/3">
                            PROJECT TYPE:
                        </div>
                    </div>
                    <div className="flex w-full justify-around">
                        <div className="w-1/3 text-6xl">
                            ARCADERS'
                        </div>
                        <div className="w-1/3 text-xl text-nowrap">
                            10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
                        </div>
                    </div>
                    <div className="flex w-full justify-around">
                        <div className="w-1/3 text-2xl">
                            ALL-AROUND GAME REVIEW APP
                        </div>
                        <div className="w-1/3" />
                    </div>
                </div>
                <div className="flex bg-black h-svh flex-row justify-center items-center">
                    <div className="flex flex-col w-1/3 min-w-1/3">
                        <div className="flex flex-col w-100 mb-8">
                            <div className="text-gray-400 text-2xl mb-6">GOAL</div>
                            <div className="text-sm">MY PRODUCT WILL LET USERS BUILD COMMUNITIES & GAIN USEFUL DESCRIPTIONS OF THE GAMES WHICH WILL AFFECT USERS LOOKING FOR NEW GAMES TO PLAY BY EMPHASIZING CATEGORIES & DESCRIPTIONS OF THE GAMES, PROVIDING COMMUNITY PLATFORM, & UTILIZING SIMPLE ORGANIZATION. I WILL MEASURE EFFECTIVENESS BY INTEGRATED USER EVALUATION (RATING). </div>
                        </div>
                        <div className="flex flex-col w-100">
                            <div className="text-gray-400 text-2xl mb-6">PAIN POINT</div>
                            <div className="text-sm">
                                SIMPLE, SIMPLE, AND SIMPLE! EXISTTNG GAME REVIEW SERVICES CAN BE IMPROVED IN TERMS OF
                                <ul>
                                    <li>1) ORGANIZATION</li>
                                    <li>2) INTERACTION</li>
                                    <li>3) SIMPLICITY</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 min-w-1/3 align-middle">
                        <div className="flex justify-center">
                            <img src={`${imagePath}arcaders_icon_organization.png`} alt="Organization Icon" />
                        </div>
                        <div className="flex justify-center gap-10">
                            <img src={`${imagePath}arcaders_icon_interaction.png`} alt="Interaction Icon" />
                            <img src={`${imagePath}arcaders_icon_simplicity.png`} alt="Simplicity Icon" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-500 h-svh items-start">
                    <div className="flex flex-row justify-between">
                        <div className="flex bg-white w-1/3 text-black border-4 border-black text-[6.5px] p-4 h-fit gap-6 rotate-[-12deg]">
                            <div className="flex flex-col gap-8 w-1/3 items-center">
                                <div className="text-[10px]">PERSONA 2: NANCY</div>
                                <div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">AGE:</div>
                                        <div className="grid-span-9 ms-4">17</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">EDUCATION:</div>
                                        <div className="grid-span-9 ms-4">HIGH SCHOOL</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">LOCATION:</div>
                                        <div className="grid-span-9 ms-4">SEATTLE, WA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">FAMILY:</div>
                                        <div className="grid-span-9 ms-4">TWO SIBLINGS</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">OCCUPATION:</div>
                                        <div className="grid-span-9 ms-4">STUDENT</div>
                                    </div>
                                </div>
                                <div className="border-black border-4 p-2 text-[5px]">
                                    NANCY IS A 17-YEAR-OLD HIGHSCHOOL STUDENT WHO LOVES GAMING. SHE HAS TWO OTHER SIBLINGS WHO LOVES TO PLAY GAME WITH. THESE THREE GIRLS ALSO LOVE TO WATCH STREAMERS AND INFLUENCERS PLAYING GAMES AND OFTEN TRIES THE SAME GAME FOR THEMSELVES.
                                </div>
                            </div>
                            <div className="flex flex-col w-1/3 items-center gap-4">
                                <img src={`${imagePath}arcaders_profile_nancy.png`} alt="Nancy" />
                                <div className="text-center">“MY FAVORITE STREAMERS KNOW ALL THE GOOD GAMES.”</div>
                            </div>
                            <div className="flex flex-col items-center w-1/3 gap-3">
                                <div className="text-[10px] text-gray-500">GOAL</div>
                                <ul className="list-disc ms-3">
                                    <li>STAY UP TO “TREND”</li>
                                    <li>SPEND FUN TIME WITH HERSELF AND HER SIBLINGS</li>
                                    <li>TRY GAMES THAT THE STREAMERS THAT SHE FOLLOW PLAYS</li>
                                </ul>
                                <div className="text-[10px] text-gray-500">FRUSTRATIONS</div>
                                <ul className="list-disc ms-3">
                                    <li>TIGHT BUDGET</li>
                                    <li>THE DESCRIPTION DOESN’T CLEARLY STATE WHETHER SHE CAN PLAY IT WITH HER SIBLINGS</li>
                                    <li>HARD TO TELL WHICH GAME IS PLAYED BY THE STREAMER WITHOUT THOROUGHLY LOOKING AT THE STREAM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex bg-white w-1/3 text-black border-4 border-black text-[6.5px] p-4 h-fit gap-6 rotate-[12deg]">
                            <div className="flex flex-col gap-8 w-1/3 items-center">
                                <div className="text-[10px]">PERSONA 1: ARNOLD</div>
                                <div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">AGE:</div>
                                        <div className="grid-span-9 ms-4">22</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">EDUCATION:</div>
                                        <div className="grid-span-9 ms-4">BA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">LOCATION:</div>
                                        <div className="grid-span-9 ms-4">LOS ANGELES, CA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">FAMILY:</div>
                                        <div className="grid-span-9 ms-4">SINGLE</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-span-3 opacity-60 text-right">OCCUPATION:</div>
                                        <div className="grid-span-9 ms-4">JUNIOR PROGRAMMER</div>
                                    </div>
                                </div>
                                <div className="border-black border-4 p-2 text-[5px]">
                                    ARNOLD IS A 22-YEAR-OLD JUNIOR PROGRAMMER WHO LIVES IN DOWNTOWN LA, CALIFORNIA. ARNOLD IS PASSIONATE AT GAMING AND OFTEN USES THE ONLINE COMMUNITY TO SOCIALIZE WITH HIS ONLINE & OFFLINE PEERS. HIS EXPLORATIVE PERSONALITY MAKES HIM CONSTANTLY LOOK FOR NEW GAMES TO ENTERTAIN HIM AND HIS DISCORD GROUP MEMBERS.
                                </div>
                            </div>
                            <div className="flex flex-col w-1/3 items-center gap-4">
                                <img src={`${imagePath}arcaders_profile_arnold.png`} alt="Arnold" />
                                <div className="text-center">“GAMES ARE GREAT ENVIRONMENT TO SOCIALIZE. I WANT TO EXPAND MY SOCIAL NETWORK THERE”</div>
                            </div>
                            <div className="flex flex-col items-center w-1/3 gap-3">
                                <div className="text-[10px] text-gray-500">GOAL</div>
                                <ul className="list-disc ms-3">
                                    <li>SOCIALIZE WITH HIS COLLEAGUES/COWORKERS</li>
                                    <li>UTILIZE HIS FREE TIME WITH OTHERS</li>
                                    <li>FIND NEW GAMES THAT FITS HIS TASTE</li>
                                </ul>
                                <div className="text-[10px] text-gray-500">FRUSTRATIONS</div>
                                <ul className="list-disc ms-3">
                                    <li>TIGHT BUDGET</li>
                                    <li>THE DESCRIPTION DOESN’T CLEARLY STATE WHETHER SHE CAN PLAY IT WITH HER SIBLINGS</li>
                                    <li>HARD TO TELL WHICH GAME IS PLAYED BY THE STREAMER WITHOUT THOROUGHLY LOOKING AT THE STREAM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white w-1/3 text-black border-4 border-black text-[6.5px] p-4 h-fit gap-6 rotate-[12deg]">
                        <div className="flex flex-col gap-8 w-1/3 items-center">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArcadersApp;