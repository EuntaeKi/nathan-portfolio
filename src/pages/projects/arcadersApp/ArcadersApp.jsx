import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./ArcadersApp.css";
import ArcadersFooter from "../../../components/web/ArcadersFooter";

const ArcadersApp = ({ setPageColor }) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/`;

  useEffect(() => {
    setPageColor("#FFFFFF");
  }, [setPageColor]);

  return (
    <>
      <Helmet>
        <title>NS | Arcaders App</title>
      </Helmet>
      <div className="font-press-start-2p block bg-[#222222]">
        {/* Introduction */}
        <div className="arcaders-app-intro min-h-svh">
          <div className="flex items-center justify-start xl:justify-center flex-wrap gap-8 p-8">
            <div className="flex flex-col gap-8">
              <div className="text-gray-400">PROJECT:</div>
              <div className="text-white text-4xl md:text-6xl break-all min-w-[330px]">
                ARCADERS'
              </div>
              <div className="text-2xl">ALL-AROUND GAME REVIEW APP</div>
            </div>
            <div className="flex flex-col gap-8 self-start">
              <div className="text-gray-400">PROJECT TYPE:</div>
              <div className="text-white text-xl">
                10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
              </div>
            </div>
          </div>
        </div>
        {/* Goals & Pain Point */}
        <div className="flex flex-col justify-center items-center flex-wrap gap-8 md:gap-0 min-h-svh p-8">
          <div className="bg-app-accent text-white rounded-3xl mb-8 py-3 max-w-[600px] w-full text-center">
            PROJECT OVERVIEW
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 w-full">
            <div className="flex flex-col gap-8 w-fit md:w-1/2">
              <div className="text-app-accent text-3xl">GOAL</div>
              <div className="text-sm border-4 border-app-accent rounded-3xl p-8">
                MY PRODUCT WILL LET{" "}
                <div className="text-app-accent inline">
                  USERS BUILD COMMUNITIES
                </div>{" "}
                & GAIN USEFUL DESCRIPTIONS OF THE GAMES WHICH WILL AFFECT{" "}
                <div className="text-app-accent inline">
                  USERS LOOKING FOR NEW GAMES
                </div>{" "}
                TO PLAY BY EMPHASIZING CATEGORIES & DESCRIPTIONS OF THE GAMES,
                PROVIDING COMMUNITY PLATFORM, & UTILIZING SIMPLE ORGANIZATION. I
                WILL MEASURE EFFECTIVENESS BY INTEGRATED USER EVALUATION
                (RATING).{" "}
              </div>
              <div className="text-app-accent text-3xl">PAIN POINT</div>
              <div className="text-sm border-4 border-app-accent rounded-3xl p-8">
                SIMPLE, SIMPLE, AND SIMPLE! EXISTTNG GAME REVIEW SERVICES CAN BE
                IMPROVED IN TERMS OF
                <ul>
                  <li>1) ORGANIZATION</li>
                  <li>2) INTERACTION</li>
                  <li>3) SIMPLICITY</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-1/3 min-w-1/3 align-middle gap-4">
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <img
                    src={`${imagePath}arcaders_icon_organization.png`}
                    alt="Organization Icon"
                    className="w-[130px]"
                  />
                  <div>ORGANIZATION</div>
                </div>
              </div>
              <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center">
                  <img
                    src={`${imagePath}arcaders_icon_interaction.png`}
                    alt="Interaction Icon"
                    className="w-[130px]"
                  />
                  <div>INTERACTION</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={`${imagePath}arcaders_icon_simplicity.png`}
                    alt="Simplicity Icon"
                    className="w-[130px]"
                  />
                  <div>SIMPLICITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Persona */}
        <div className="flex flex-col items-start min-h-svh p-8">
          <div className="text-app-accent text-3xl self-center mb-10">
            RESEARCH
          </div>

          {/* Header */}
          <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center self-center mb-0 md:mb-16">
            USER PERSONA
          </div>
          <div className="flex flex-col items-start py-4 gap-8">
            {/* Personas */}
            <div className="flex justify-center xl:justify-between gap-8 flex-wrap">
              {/* Nancy */}
              <div className="flex gap-6 flex-wrap sm:flex-nowrap w-full xl:w-1/3 max-w-[600px] xl:max-w-none xl:min-w-[600px] h-fit bg-white text-black border-4 border-black text-[6.5px] p-4 rotate-0 xl:rotate-[-12deg]">
                {/* Column 1 */}
                <div className="flex flex-col items-center gap-8 w-full sm:w-1/3">
                  <div className="text-[10px]">PERSONA 1: NANCY</div>
                  <div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        AGE:
                      </div>
                      <div className="grid-span-9 ms-4">17</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        EDUCATION:
                      </div>
                      <div className="grid-span-9 ms-4">HIGH SCHOOL</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        LOCATION:
                      </div>
                      <div className="grid-span-9 ms-4">SEATTLE, WA</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        FAMILY:
                      </div>
                      <div className="grid-span-9 ms-4">TWO SIBLINGS</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        OCCUPATION:
                      </div>
                      <div className="grid-span-9 ms-4">STUDENT</div>
                    </div>
                  </div>
                  <div className="max-w-[200px] border-black border-4 p-2 text-[5px]">
                    NANCY IS A 17-YEAR-OLD HIGHSCHOOL STUDENT WHO LOVES GAMING.
                    SHE HAS TWO OTHER SIBLINGS WHO LOVES TO PLAY GAME WITH.
                    THESE THREE GIRLS ALSO LOVE TO WATCH STREAMERS AND
                    INFLUENCERS PLAYING GAMES AND OFTEN TRIES THE SAME GAME FOR
                    THEMSELVES.
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-1/3">
                  <img
                    src={`${imagePath}arcaders_profile_nancy.png`}
                    alt="Nancy"
                  />
                  <div className="text-center text-wrap">
                    “MY FAVORITE STREAMERS KNOW ALL THE GOOD GAMES.”
                  </div>
                </div>
                {/* Column 3 */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-1/3">
                  <div className="text-[10px] text-gray-500">GOAL</div>
                  <ul className="list-disc ms-3">
                    <li>STAY UP TO “TREND”</li>
                    <li>SPEND FUN TIME WITH HERSELF AND HER SIBLINGS</li>
                    <li>TRY GAMES THAT THE STREAMERS THAT SHE FOLLOW PLAYS</li>
                  </ul>
                  <div className="text-[10px] text-gray-500">FRUSTRATIONS</div>
                  <ul className="list-disc ms-3">
                    <li>TIGHT BUDGET</li>
                    <li>
                      THE DESCRIPTION DOESN’T CLEARLY STATE WHETHER SHE CAN PLAY
                      IT WITH HER SIBLINGS
                    </li>
                    <li>
                      HARD TO TELL WHICH GAME IS PLAYED BY THE STREAMER WITHOUT
                      THOROUGHLY LOOKING AT THE STREAM
                    </li>
                  </ul>
                </div>
              </div>
              {/* Arnold */}
              <div className="flex gap-6 flex-wrap sm:flex-nowrap w-full xl:w-1/3 max-w-[600px] xl:max-w-none xl:min-w-[600px] h-fit bg-white text-black border-4 border-black text-[6.5px] p-4 rotate-0 xl:rotate-[12deg]">
                {/* Column 1 */}
                <div className="flex flex-col items-center gap-8 w-full sm:w-1/3">
                  <div className="text-[10px]">PERSONA 2: ARNOLD</div>
                  <div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        AGE:
                      </div>
                      <div className="grid-span-9 ms-4">22</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        EDUCATION:
                      </div>
                      <div className="grid-span-9 ms-4">BA</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        LOCATION:
                      </div>
                      <div className="grid-span-9 ms-4">LOS ANGELES, CA</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        FAMILY:
                      </div>
                      <div className="grid-span-9 ms-4">SINGLE</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="grid-span-3 opacity-60 text-right">
                        OCCUPATION:
                      </div>
                      <div className="grid-span-9 ms-4">JUNIOR PROGRAMMER</div>
                    </div>
                  </div>
                  <div className="max-w-[200px] border-black border-4 p-2 text-[5px]">
                    ARNOLD IS A 22-YEAR-OLD JUNIOR PROGRAMMER WHO LIVES IN
                    DOWNTOWN LA, CALIFORNIA. ARNOLD IS PASSIONATE AT GAMING AND
                    OFTEN USES THE ONLINE COMMUNITY TO SOCIALIZE WITH HIS ONLINE
                    & OFFLINE PEERS. HIS EXPLORATIVE PERSONALITY MAKES HIM
                    CONSTANTLY LOOK FOR NEW GAMES TO ENTERTAIN HIM AND HIS
                    DISCORD GROUP MEMBERS.
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-1/3">
                  <img
                    src={`${imagePath}arcaders_profile_arnold.png`}
                    alt="Arnold"
                  />
                  <div className="text-center text-wrap">
                    “GAMES ARE GREAT ENVIRONMENT TO SOCIALIZE. I WANT TO EXPAND
                    MY SOCIAL NETWORK THERE”
                  </div>
                </div>
                {/* Column 3s */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-1/3">
                  <div className="text-[10px] text-gray-500">GOAL</div>
                  <ul className="list-disc ms-3">
                    <li>SOCIALIZE WITH HIS COLLEAGUES/COWORKERS</li>
                    <li>UTILIZE HIS FREE TIME WITH OTHERS</li>
                    <li>FIND NEW GAMES THAT FITS HIS TASTE</li>
                  </ul>
                  <div className="text-[10px] text-gray-500">FRUSTRATIONS</div>
                  <ul className="list-disc ms-3">
                    <li>TIGHT BUDGET</li>
                    <li>
                      THE DESCRIPTION DOESN’T CLEARLY STATE WHETHER SHE CAN PLAY
                      IT WITH HER SIBLINGS
                    </li>
                    <li>
                      HARD TO TELL WHICH GAME IS PLAYED BY THE STREAMER WITHOUT
                      THOROUGHLY LOOKING AT THE STREAM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Focus Points */}
            <div className="flex self-center justify-center flex-wrap w-full lg:w-1/2 h-fit min-w-0 sm:min-w-[600px] max-w-[600px] lg:max-w-none bg-white text-black border-4 border-black text-[6.5px] p-8">
              {/* 1. Organization */}
              <div className="flex flex-col gap-8 items-center w-full lg:w-1/4">
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="text-lg w-16 h-16 flex items-center justify-center rounded-full border-4 border-black">
                    1
                  </div>
                  <div className="flex border border-black w-full"></div>
                  <div className="text-gray-500 text-[11px] mb-4 w-full text-center">
                    ORGANIZATION
                  </div>
                  <div className="text-center text-[9px] w-full">
                    PREVIEWS AVAILABLE IN THE MARKET ARE OFTEN HARD TO NAVIGATE
                  </div>
                </div>
              </div>
              {/* 2. Informative */}
              <div className="flex flex-col gap-8 items-center w-full lg:w-1/4">
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="text-lg w-16 h-16 flex items-center justify-center rounded-full border-4 border-black">
                    2
                  </div>
                  <div className="flex border border-black w-full"></div>
                  <div className="text-gray-500 text-[11px] mb-4 w-full text-center">
                    INFORMATIVE
                  </div>
                  <div className="text-center text-[9px] w-full">
                    MAJOR GAME PROVIDES / PREVIEWERS ARE LACKING INFORMATION OR
                    PROVIDE MISLEADING DESCRIPTIONS
                  </div>
                </div>
              </div>
              {/* 3. Visual Appeal */}
              <div className="flex flex-col gap-8 items-center w-full lg:w-1/4">
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="text-lg w-16 h-16 flex items-center justify-center rounded-full border-4 border-black">
                    3
                  </div>
                  <div className="flex border border-black w-full"></div>
                  <div className="text-gray-500 text-[10px] mb-4 w-full text-center">
                    VISUAL APPEAL
                  </div>
                  <div className="text-center text-[9px] w-full">
                    USERS ARE WANTING MORE INTERACTIVE, AND ENTERTAINING
                    INTERFACES THAT ARE VISUALLY APPEALING
                  </div>
                </div>
              </div>
            </div>
            {/* User Research */}
            <div className="flex self-center flex-wrap sm:flex-nowrap w-full xl:w-1/3 max-w-[600px] xl:max-w-none xl:min-w-[600px] h-fit bg-white text-black border-4 border-black text-[6.5px] p-4">
              <div className="flex flex-col items-center gap-4">
                <div className="text-gray-500 text-[10px]">USER RESEARCH</div>
                <div className="flex border border-black w-full"></div>
                <div className="text-center text-[9px]">
                  THIS USER GROUPS’ MAJOR CONCERN WAS THE ORGANIZATION,
                  NAVIGATION, AND THE COMPLICATION OF THE EXISTING GAME PREVIEW
                  APPS. THEY WANTED SPECIFIC INFORMATION TO BE INCLUDED DUE TO
                  THEIR NEED TO PLAY WITH THEIR PEERS. USERS WANTED A SIMPL, YET
                  ACCURATE GAME PREVIEWS SO THEY COULD FIND GAMES THAT THEY CAN
                  ENJOY THEMSELVES, WITH THEIR SPOUSE, KIDS, OR FRIENDS.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Competitive Audit */}
        <div className="flex flex-col justify-center items-center w-full gap-12 p-8">
          <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center mb-8">
            COMPETITVE AUDIT
          </div>
          {/* 1. Steam */}
          <div className="flex flex-col items-center w-full gap-8">
            <div className="flex items-center gap-4">
              <img
                src={`${imagePath}arcaders_app_steam.png`}
                alt="Steam Icon"
              />
              STEAM
            </div>
            <div className="flex flex-wrap justify-around w-full gap-8">
              <div className="flex flex-col items-center gap-8 md:gap-12">
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_1_masked.png`}
                  alt="Masking of Steam's Baldur's Gate 3 page on overview"
                />
                <div className="flex flex-col items-center gap-8">
                  <div className="text-2xl underline">ALL IN ONE</div>
                  <div className="max-w-[400px] text-center">
                    MAIN PAGE HAS IMAGE, ADDITIONAL TOOL TAB ON TOP OF THE APP’S
                    TOOL TAB (DEFAULT SETTING), SIMPLE DESCRIPTION WITH OVERALL
                    RATING FROM THE USERS
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 md:gap-12">
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_2_masked.png`}
                  alt="Masking of Steam's Baldur's Gate 3 page on description"
                />
                <div className="flex flex-col items-center gap-8">
                  <div className="text-2xl underline">ABOUT</div>
                  <div className="max-w-[400px] text-center">
                    THE GENERAL DESCRIPTION IS PROVIDED, BUT BY THE PRODUCERS.
                    SOME USERS FIND IT DIFFICULT TO NOTICE WHAT KIND OF GAME IT
                    ACTUALLY IS.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 md:gap-12">
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_3_masked.png`}
                  alt="Masking of Steam's Baldur's Gate 3 page on review"
                />
                <div className="flex flex-col items-center gap-8">
                  <div className="text-2xl underline">REVIEWS</div>
                  <div className="max-w-[400px] text-center">
                    USERS CAN LEAVE THEIR OWN REVIEWS AND BRIEFLY COMMUNICATE
                    THROUGH LIKE OR DISLIKE OTHER USER’S REVIEWS.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-12">
            {/* 2. Metacritic */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                <img
                  src={`${imagePath}arcaders_app_metacritic.png`}
                  alt="Metacritic Icon"
                />
                METACRITIC
              </div>
              <div className="flex flex-wrap justify-around gap-8">
                <div className="flex flex-col items-center gap-8 md:gap-12">
                  <img
                    src={`${imagePath}arcaders_competitive_audit_metacritic_mask.png`}
                    alt="Masking of Metacritic's Baldur's Gate 3 page on overview"
                  />
                  <div className="flex flex-col items-center gap-8">
                    <div className="text-2xl underline">METASCORE</div>
                    <div className="max-w-[400px] text-center">
                      CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR OWN
                      EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN OR NOT
                      PROVIDED.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3. Gamespot */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                <img
                  src={`${imagePath}arcaders_app_gamespot.png`}
                  alt="Gamespot Icon"
                />
                GAMESPOT
              </div>
              <div className="flex flex-wrap justify-around gap-8">
                <div className="flex flex-col items-center gap-8 md:gap-12">
                  <img
                    src={`${imagePath}arcaders_competitive_audit_gamespot_mask.png`}
                    alt="Masking of Gamespot's Baldur's Gate 3 page on overview article"
                  />
                  <div className="flex flex-col items-center gap-8">
                    <div className="text-2xl underline">ARTICLES</div>
                    <div className="max-w-[400px] text-center">
                      CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR OWN
                      EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN OR NOT
                      PROVIDED.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Insights */}
          <div className="flex flex-col items-center border-app-accent border-4 rounded-3xl p-8 text-center w-full max-w-screen-lg">
            <div className="text-2xl mb-8">INSIGHT FROM RESEARCH</div>
            <div className="max-w-screen-md">
              EACH OF THE COMPETITORS HAVE VERY DIFFERENT WAYS TO ATTRACT USERS.
              STEAM,THE POWERHOUSE OF THE MARKET, HAD THE MOST ALL-AROUND
              FEATURES. HOWERVER, USERS WANTED MORE STRAIGHTFORWARD AND SIMPLE
              INTERFACE THAT WILL EXPLAIN WHAT PRESENTED GAMES ARE AND ENABLE
              USERS TO BUILD A COMMUNITY OF GAMERS.
            </div>
          </div>
        </div>
        {/* Remaining Sections */}
        <div className="flex flex-col text-center gap-12">
          {/* Wireframing */}
          <div className="flex flex-col items-center gap-12 p-8 pb-0">
            <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center">
              WIREFRAMING
            </div>
            <div className="flex flex-wrap justify-center">
              <img
                src={`${imagePath}arcaders_testing_design_1.png`}
                alt="Wireframe and flow design on Arcaders' app"
                className="z-0"
              />
              <img
                src={`${imagePath}arcaders_testing_design_2.png`}
                alt="Prototype design on Arcaders' app"
                className="z-0"
              />
            </div>
          </div>
          {/* Confirming Interaction */}
          <div className="flex flex-col items-center p-8">
            <div className="bg-app-accent text-white text-center rounded-3xl py-3 max-w-[600px] w-full mb-8">
              TESTING DESIGNS
            </div>
            <div className="flex flex-wrap items-center justify-center gap-16">
              <div className="flex flex-col items-center gap-8 w-full min-[830px]:w-[500px] text-xs">
                <div className="bg-app-accent text-white text-xl text-center rounded-3xl px-8 py-3 w-fit">
                  SIMPLE DESCRIPTION
                </div>
                <div className="max-w-[400px] min-[830px]:max-w-none text-center text-base">
                  MOBILE ARCADERS APP HAS LETTER LIMITATION WHICH REQUIRES
                  REVIEWERS AND GAMER PRODUCERS TO PROVIDE SIMPLE DESCRIPTION OF
                  THE GAME.
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={`${imagePath}arcaders_confirming_interaction.png`}
                  alt="Arcaders' app screen on the game League of Legends, showing an option to add the game to the list"
                  className="z-0"
                />
              </div>
              <div className="flex flex-col items-center gap-8 w-full min-[830px]:w-[500px] text-xs">
                <div className="bg-app-accent text-white text-xl text-center rounded-3xl px-8 py-3 w-fit">
                  CONFIRMING INTERACTION
                </div>
                <div className="max-w-[400px] min-[830px]:max-w-none text-left text-base">
                  ADDING CONFIRMATION INTERACTION WHEN USERS MAKING MAJOR
                  DECISIONS SUCH AS:
                  <ul className="list-decimal w-fit ml-9">
                    <li>ADDING GAMES/STREAMERS TO MYLIST</li>
                    <li>LOG-IN & REGISTERING ACCOUNT PROCESS</li>
                    <li>ADJUSTING FILTERS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Community */}
          <div className="flex flex-wrap justify-center gap-12 items-center p-8">
            <div className="flex flex-col w-full md:w-[500px]">
              <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center mb-8">
                COMMUNITY: <br />
                GAMERS AND STREAMERS
              </div>
              <div className="text-left">
                ACCORDING TO THE INTERVIEW/USABILITY STUDY, LARGE PORTION OF
                ONLINE GAMING COMMUNITY AND STREAM VIEWERS’ COMMUNITY
                OVERLAPPED.
                <br />
                <br />
                TO STRENGTHEN THE CUSTOMIZING PROCESS, PREFERENCE OF STREAMERS
                IS ADDED TO THE SURVEY PAGE ALONG WITH A SEPARATE STREAMER &
                GAME REVIEW PAGES.
              </div>
            </div>
            <div className="flex justify-center md:justify-end flex-wrap md:flex-nowrap gap-8 md:gap-0">
              <img
                src={`${imagePath}arcaders_gamers_streamers_1.png`}
                alt="Arcaders' app screen on a streamer's overview page showing League of Legends and StarCraft videos"
                className="z-20 rotate-0 md:rotate-[-30deg]  translate-x-0 md:translate-x-11 translate-y-0 md:translate-y-5"
              />
              <img
                src={`${imagePath}arcaders_gamers_streamers_2.png`}
                alt="Arcaders' app screen asking what streamers the user watches, listing out random streamers"
                className="z-10"
              />
              <img
                src={`${imagePath}arcaders_gamers_streamers_3.png`}
                alt="Arcaders' app screen listing out streamers the user follows"
                className="z-0 rotate-0 md:rotate-[15deg] translate-x-0 md:translate-x-[-1.25rem] translate-y-0 md:translate-y-5"
              />
            </div>
          </div>
          {/* Customization */}
          <div className="flex justify-center gap-12 items-center p-8 flex-wrap">
            <div className="flex flex-col w-full lg:w-1/3">
              <div className="self-center bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center mb-8">
                INTERACTIVE CUSTOMIZATION
              </div>
              <div className="text-base">
                ARCADERS’ PROVIDE CUSTOMIZED EXPERIENCE FOR THE USERS BY
                COLLECTING SURVEY DATA WHILE SETTING UP THE ACCOUNT FOR THE
                FIRST TIME. THESE SURVEY INCLUDES STRAIGHTFORWARD IMAGES AND
                TEXTUAL QUESTIONS AND ANSWER FORMATS.{" "}
              </div>
            </div>
            <img
              src={`${imagePath}arcaders_customization.png`}
              alt="Arcaders' survey screen where the user can select games and streamers and another Arcaders' survey screen with a question asking 'How many people do you play games with in general?'"
              className="z-0"
            />
            <div className="w-full lg:w-1/4 max-w-[300px] text-base text-left">
              THE COLLECTED DATA ARE APPLIED TO RECOMMENDED GAMES AND STREAMER
              LIST.
            </div>
          </div>
          {/* Pages & Stylesheets */}
          <div className="flex flex-col flex-wrap justify-center gap-12 items-center p-8">
            {/* Three Images */}
            <div className="flex flex-wrap gap-8 justify-center">
              <img
                src={`${imagePath}arcaders_screen_1.png`}
                alt="Main log in screen on the Arcaders' app"
                className="z-0"
              />
              <img
                src={`${imagePath}arcaders_screen_2.png`}
                alt="Contact information on the Arcaders' app"
                className="z-0"
              />
              <img
                src={`${imagePath}arcaders_screen_3.png`}
                alt="Main search page on the Arcaders' app, showing different games like Overcooked or Tetris"
                className="z-0"
              />
            </div>
            {/* Four Images */}
            <div className="flex flex-col flex-wrap lg:flex-nowrap gap-8 lg:gap-0 max-h-full lg:max-h-[1500px]">
              <img
                src={`${imagePath}arcaders_screen_4.png`}
                alt="Different search page showing recommended games or genre on the Arcaders' app"
                className="z-0 translate-x-0 lg:translate-x-[-75%]"
              />
              <img
                src={`${imagePath}arcaders_screen_5.png`}
                alt="Different search page showing user's favorite games or daily and weekly popular games on the Arcaders' app"
                className="z-0 translate-x-0 lg:translate-x-[-25%] translate-y-0 lg:translate-y-[-75%]"
              />
              <img
                src={`${imagePath}arcaders_screen_6.png`}
                alt="Different search page showing recently added games on the Arcaders' app"
                className="z-0 translate-x-0 lg:translate-x-[25%] translate-y-0 lg:translate-y-[-150%]"
              />
              <img
                src={`${imagePath}arcaders_screen_7.png`}
                alt="Overlay for confirming the addition of the game to the list on the Arcaders' app"
                className="z-0 translate-x-0 lg:translate-x-[75%] translate-y-0 lg:translate-y-[-225%]"
              />
            </div>
            {/* Design Board */}
            <div className="flex flex-wrap gap-8 font-arcade text-start justify-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-start gap-4">
                  <div className="text-[#E6EA16]">Arcade Normal Font Style</div>
                  <div className="flex gap-12">
                    <div className="flex flex-col items-end">
                      <div className="text-[2.5rem]">ARS</div>
                      <div className="text-[1.875rem]">ARS</div>
                      <div className="text-[1.5625rem]">ARS</div>
                      <div className="text-[1.25rem]">ARS</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-[2.5rem]">40PX</div>
                      <div className="text-[1.875rem]">30PX</div>
                      <div className="text-[1.5625rem]">25PX</div>
                      <div className="text-[1.25rem]">20PX</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="text-[#E6EA16]">Quoted Comments</div>
                  <div>
                    “QUOTATION MARKS <br />
                    FOR EMPHASIS”
                  </div>
                </div>
                <div className="flex flex-wrap gap-12">
                  <div className="flex flex-col gap-8 w-full sm:w-auto">
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#E6EA16]">Ratings</div>
                      <div className="flex gap-2">
                        <div>5.0</div>
                        <div className="text-[#F2D643]">*****</div>
                        <div>(5)</div>
                      </div>
                      <div className="flex gap-2">
                        <div>1.0</div>
                        <div className="flex">
                          <div className="text-[#F2D643]">*</div>****
                        </div>
                        <div>(10)</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#E6EA16]">Pagination</div>
                      <div className="flex w-full max-w-48">
                        <div className="w-1/5 border-4"></div>
                        <div className="w-4/5 border-4 border-[#D9D9D999]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full sm:w-auto">
                    <div className="text-[#E6EA16]">Filters</div>
                    <div className="text-[#043BFF] text-[6px] border-4 border-[#043BFF] w-fit py-2 px-3">
                      I WANT TO KEEP IT CLASSIC
                    </div>
                    <div className="text-[#ffffff] text-[6px] border-4 border-[#ffffff] w-fit py-2 px-3">
                      MULTIPLAYER
                    </div>
                    <div className="text-[#FF4949] text-[6px] border-4 border-[#FF4949] w-fit py-2 px-3">
                      HORROR
                    </div>
                    <div className="text-[#F2D643] text-[6px] border-4 border-[#F2D643] w-fit py-2 px-3">
                      ROLE PLAYER
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 max-w-[400px]">
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Add Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_add_icon.png`}
                      alt="Add icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Back Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_back_icon.png`}
                      alt="Back icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Question Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_question_icon.png`}
                      alt="Question icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Heart Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_heart_icon.png`}
                      alt="Heart icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Search Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_search_icon.png`}
                      alt="Search icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-24">
                    <div className="text-[#E6EA16]">Like Button</div>
                    <img
                      src={`${imagePath}arcaders_app_design_like_icon.png`}
                      alt="Like icon used for Arcaders App"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-[#E6EA16]">Search Bar</div>
                    <img
                      src={`${imagePath}arcaders_app_design_search.png`}
                      alt="Search bar used in Arcaders App"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-[#E6EA16]">Search Bar with Filter</div>
                    <img
                      src={`${imagePath}arcaders_app_design_search_filter.png`}
                      alt="Search bar with filter icon used in Arcaders App"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="text-[#E6EA16]">Tool Tab A</div>
                      <img
                        src={`${imagePath}arcaders_app_design_tooltab_a.png`}
                        alt="Tooltab design used in Arcaders App"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-[#E6EA16]">Tool Tab B</div>
                      <img
                        src={`${imagePath}arcaders_app_design_tooltab_b.png`}
                        alt="Alternative tooltab design used in Arcaders App"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="text-[#E6EA16]">My List Tool Tab</div>
                      <img
                        src={`${imagePath}arcaders_app_design_tooltab_mylist.png`}
                        alt="My List tab's tooltab design used in Arcaders App"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="text-[#E6EA16]">Log In Troubleshoot</div>
                      <img
                        src={`${imagePath}arcaders_app_design_login_troubleshoot.png`}
                        alt="Log In troubleshoot design used in Arcaders App"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="text-[#E6EA16] text-base">
                      Option Default
                    </div>
                    <div className="border-white border-4 w-fit p-3">
                      ALL ALONE!
                    </div>
                    <div className="border-white border-4 w-fit p-3">TWO</div>
                    <div className="border-white border-4 w-fit p-3">
                      MORE THAN TWO
                    </div>
                    <div className="border-[#043BFF] bg-[#043BFF] border-4 w-fit p-3">
                      YES I DO!
                    </div>
                    <div className="border-[#F34444] bg-[#F34444] border-4 w-fit p-3">
                      NOPE
                    </div>
                    <div className="border-[#043BFF] bg-[#043BFF] border-4 p-3 text-center">
                      CONFIRM
                    </div>
                    <div className="border-[#043BFF] bg-[#043BFF] border-4 w-fit p-3">
                      YES
                    </div>
                    <div className="border-[#043BFF] bg-[#043BFF] border-4 max-w-52 p-3 text-center">
                      CONTINUE
                    </div>
                    <div className="border-[#043BFF] bg-[#043BFF] border-4  max-w-52 p-3 text-center">
                      ADD TO MY LIST
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="text-[#E6EA16] text-base">Selected</div>
                    <div className="border-white bg-[#043BFF] border-4 w-fit p-3">
                      ALL ALONE!
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 w-fit p-3">
                      TWO
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 w-fit p-3">
                      MORE THAN TWO
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 w-fit p-3">
                      YES I DO!
                    </div>
                    <div className="border-white bg-[#F34444] border-4 w-fit p-3">
                      NOPE
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 p-3 text-center">
                      CONFIRM
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 w-fit p-3">
                      YES
                    </div>
                    <div className="border-white bg-[#043BFF] border-4 max-w-52 p-3 text-center">
                      CONTINUE
                    </div>
                    <div className="border-white bg-[#043BFF] border-4  max-w-52 p-3 text-center">
                      ADD TO MY LIST
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="text-[#E6EA16] text-base">Log In Tabs</div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      EMAIL
                    </div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      CREATE ACCOUNT
                    </div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      LOG IN
                    </div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      PASSWORD
                    </div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      ACCOUNT NAME
                    </div>
                    <div className="border-white bg-white border-4 p-3 text-[#B1B1B1] text-center">
                      PASSWORD CHECK
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap gap-4 bg-[#D9D9D980] p-8">
                  <div className="text-[#E6EA16]">Colors</div>
                  <div className="flex flex-wrap gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="w-20 h-20 bg-[#043BFF]"></div>
                      <div className="text-[#043BFF] text-sm">#043BFF</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-20 h-20 bg-[#F2D643]"></div>
                      <div className="text-[#F2D643] text-sm">#F2D643</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-20 h-20 bg-[#F34444]"></div>
                      <div className="text-[#F34444] text-sm">#F34444</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-20 h-20 bg-[#FFFFFF]"></div>
                      <div className="text-[#FFFFFF] text-sm">#FFFFFF</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-20 h-20 bg-[#B1B1B1]"></div>
                      <div className="text-[#B1B1B1] text-sm">#B1B1B1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Improvements */}
          <div className="flex flex-col gap-8 items-center p-8">
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center mb-8">
                ROOM FOR IMPROVEMENTS
              </div>
              <ul className="text-left list-decimal ml-10">
                <li className="mb-6">
                  MAKING CONNECTIONS WITH OTHER COMPANIES
                  <br />
                  <br />
                  EXPLORING COLLABORATION METHODS WITH MAJOR COMPANIES LIKE
                  YOUTUBE, INSTAGRAM, TWITTER, AND OTHERS CAN PROVIDE BRIDGES
                  FOR PRE-EXISTING USER AND GROUP POOLS FROM THESE MAINSTREAM
                  SERVICES. THIS APPROACH MAY BE AN ATTRACTIVE OPTION FOR MANY
                  SERVICES. HOWEVER, I ALSO RECOGNIZE THAT SUCH COLLABORATIONS
                  CAN BE CHALLENGING DUE TO VARIOUS FACTORS, SUCH AS COPYRIGHT
                  ISSUES. I WISH I HAD MORE TIME TO FULLY UNDERSTAND THE
                  DYNAMICS OF THESE PARTNERSHIPS.
                </li>
                <li>
                  I BELIEVE THE CUSTOMIZATION COMPONENT COULD HAVE BEEN MORE
                  ROBUST IF I HAD WORKED WITH A TECHNICAL TEAM. COLLABORATING
                  WITH SUCH A TEAM WOULD HAVE ALLOWED US TO CREATE LOGIC BEHIND
                  THE COLLECTED RAW DATA. AS A UX RESEARCHER, I WOULD HAVE
                  ENGAGED WITH DATA ANALYSTS TO REFINE AND IMPROVE CUSTOMIZATION
                  FEATURES.
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center mb-8">
                CONCLUSION
              </div>
              <ul className="text-left list-decimal ml-10">
                <li className="mb-6">
                  THE NEED FOR TEAMWORK
                  <br />
                  <br />
                  LAUNCHING A SUCCESSFUL PRODUCT WITH STRONG LOGIC REQUIRES
                  THOROUGH RESEARCH INTO THE MARKET AND FIELD. ONCE THE RESEARCH
                  IS SOLID, THE PRODUCT SHOULD BE DESIGNED WITH CLEAR INTENTIONS
                  AND WELL-DEFINED OBJECTIVES. MODERN TRENDS OFTEN DEMAND THAT
                  PRODUCTS AND SERVICES COLLECT, ANALYZE, AND UTILIZE DATA TO
                  OFFER MORE PERSONALIZED USER EXPERIENCES.
                  <br />
                  <br />
                  AFTER RECOGNIZING THE LIMITATIONS OF WORKING ALONE, I
                  ASSEMBLED A SMALL TEAM COMPRISING A BUSINESS RESEARCHER, A
                  TECHNICIAN, AND MYSELF TO COLLABORATIVELY LAUNCH OUR OWN
                  SERVICE.
                </li>
                <li>
                  WEBSITE DESIGN
                  <br />
                  <br />I DISCOVERED THAT I ENJOY THE PROCESS OF PLANNING AND
                  DESIGNING PRODUCTS. THIS REALIZATION MOTIVATED ME TO EXPAND
                  THIS PROJECT INTO WEBSITE DESIGN. CHECK OUT MY ARCADERS
                  WEBSITE PROJECT BELOW!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 sm:py-24">
          <div className="text-2xl sm:text-4xl font-clash-semibold">
            Thank you!
          </div>
        </div>
        <ArcadersFooter />
      </div>
    </>
  );
};

export default ArcadersApp;
