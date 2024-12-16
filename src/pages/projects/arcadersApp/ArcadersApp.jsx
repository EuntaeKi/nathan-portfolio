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
        <div className="flex flex-col justify-center items-center flex-wrap gap-8 p-8 md:gap-0">
          <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-full text-center">
            PROJECT OVERVIEW
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 min-h-svh">
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              <div className="text-app-accent text-3xl">GOAL</div>
              <div className="text-sm border-4 border-app-accent rounded-3xl p-8">
                MY PRODUCT WILL LET <div className="text-app-accent inline">USERS BUILD COMMUNITIES</div> & GAIN USEFUL
                DESCRIPTIONS OF THE GAMES WHICH WILL AFFECT <div className="text-app-accent inline">USERS LOOKING FOR NEW
                  GAMES</div> TO PLAY BY EMPHASIZING CATEGORIES & DESCRIPTIONS OF THE
                GAMES, PROVIDING COMMUNITY PLATFORM, & UTILIZING SIMPLE
                ORGANIZATION. I WILL MEASURE EFFECTIVENESS BY INTEGRATED USER
                EVALUATION (RATING).{" "}
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
        <div className="flex flex-col items-start min-h-svh py-8 xl:p-0">
          <div className="bg-app-accent text-white rounded-3xl py-3 max-w-[600px] w-11/12 text-center self-center mb-8">
            RESEARCH
          </div>
          <div className="flex flex-col items-start bg-[#ff4949c7] py-4 px-4 gap-8">
            {/* Header */}
            <div className="bg-transparent text-white border-white border-4 rounded-full py-3 px-6 text-center self-center">
              USER PERSONA
            </div>
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
                    SHE HAS TWO OTHER SIBLINGS WHO LOVES TO PLAY GAME WITH. THESE
                    THREE GIRLS ALSO LOVE TO WATCH STREAMERS AND INFLUENCERS
                    PLAYING GAMES AND OFTEN TRIES THE SAME GAME FOR THEMSELVES.
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
                    OFTEN USES THE ONLINE COMMUNITY TO SOCIALIZE WITH HIS ONLINE &
                    OFFLINE PEERS. HIS EXPLORATIVE PERSONALITY MAKES HIM
                    CONSTANTLY LOOK FOR NEW GAMES TO ENTERTAIN HIM AND HIS DISCORD
                    GROUP MEMBERS.
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-1/3">
                  <img
                    src={`${imagePath}arcaders_profile_arnold.png`}
                    alt="Arnold"
                  />
                  <div className="text-center text-wrap">
                    “GAMES ARE GREAT ENVIRONMENT TO SOCIALIZE. I WANT TO EXPAND MY
                    SOCIAL NETWORK THERE”
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
                  THIS USER GROUPS’ MAJOR CONCERN WAS THE ORGANIZATION, NAVIGATION, AND THE COMPLICATION OF THE EXISTING GAME PREVIEW APPS. THEY WANTED SPECIFIC INFORMATION TO BE INCLUDED DUE TO THEIR NEED TO PLAY WITH THEIR PEERS. USERS WANTED A SIMPL, YET ACCURATE GAME PREVIEWS SO THEY COULD FIND GAMES THAT THEY CAN ENJOY THEMSELVES, WITH THEIR SPOUSE, KIDS, OR FRIENDS.
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
                    MAIN PAGE HAS IMAGE, ADDITIONAL TOOL TAB ON TOP OF THE
                    APP’S TOOL TAB (DEFAULT SETTING), SIMPLE DESCRIPTION
                    WITH OVERALL RATING FROM THE USERS
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
                    THE GENERAL DESCRIPTION IS PROVIDED, BUT BY THE
                    PRODUCERS. SOME USERS FIND IT DIFFICULT TO NOTICE WHAT
                    KIND OF GAME IT ACTUALLY IS.
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
                    USERS CAN LEAVE THEIR OWN REVIEWS AND BRIEFLY
                    COMMUNICATE THROUGH LIKE OR DISLIKE OTHER USER’S
                    REVIEWS.
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
                      CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR
                      OWN EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN
                      OR NOT PROVIDED.
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
                      CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR
                      OWN EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN
                      OR NOT PROVIDED.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Remaining Sections */}
        <div className="flex flex-col text-center gap-48">
          {/* Testing Designs */}
          <div className="flex flex-col items-center gap-12">
            <div className="text-2xl text-gray-500">TESTING DESIGNS</div>
            <div className="flex gap-12 flex-wrap justify-center">
              <img
                src={`${imagePath}arcaders_testing_design_1.png`}
                alt="Wireframe and flow design on Arcaders' app"
                className="z-0 block"
              />
              <img
                src={`${imagePath}arcaders_testing_design_2.png`}
                alt="Prototype design on Arcaders' app"
                className="z-0 block"
              />
            </div>
          </div>
          {/* Confirming Interaction */}
          <div className="flex flex-wrap-reverse items-center justify-center gap-16 p-8">
            <div className="flex flex-col items-center w-full min-[830px]:w-[500px] text-xs">
              <div className="text-gray-500 text-2xl mb-6 text-center sm:text-left">
                SIMPLE DESCRIPTION
              </div>
              <div className="max-w-[400px] min-[830px]:max-w-none text-center">
                MOBILE ARCADERS APP HAS LETTER LIMITATION WHICH REQUIRES REVIEWERS AND GAMER PRODUCERS TO PROVIDE SIMPLE DESCRIPTION OF THE GAME.
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={`${imagePath}arcaders_confirming_interaction.png`}
                alt="Arcaders' app screen on the game League of Legends, showing an option to add the game to the list"
                className="z-0"
              />
            </div>
            <div className="flex flex-col items-center w-full min-[830px]:w-[500px] text-xs">
              <div className="text-gray-500 text-2xl mb-6 text-center sm:text-left">
                CONFIRMING INTERACTION
              </div>
              <div className="max-w-[400px] min-[830px]:max-w-none text-left">
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
          {/* Community */}
          <div className="flex flex-wrap justify-center gap-12 items-center p-8">
            <div className="flex flex-col w-full md:w-[500px]">
              <div className="text-gray-500 text-2xl mb-6">
                COMMUNITY: GAMERS AND STREAMERS
              </div>
              <div className="text-xs text-left">
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
              <div className="text-gray-500 text-2xl mb-6">INTERACTIVE CUSTOMIZATION</div>
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
                alt="Main login screen on the Arcaders' app"
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
            {/* White Board */}
            <img
              src={`${imagePath}arcaders_whiteboard.png`}
              alt="Main login screen on the Arcaders' app"
              className="z-0"
            />
          </div>
          {/* Improvements */}
          <div className="flex flex-col gap-8 items-center p-8">
            <div className="flex flex-col w-1/2 items-center">
              <div className="text-gray-500 text-2xl mb-8">
                ROOM FOR IMPROVEMENTS
              </div>
              <ul className="text-xs text-left list-decimal ml-10">
                <li className="mb-6">
                  MAKING CONNECTIONS WITH OTHER COMPANIES
                  <br />
                  EXPLORING COLLABORATING METHODS WITH MAJOR COMPANIES LIKE YOUTUBE, INSTAGRAM, TWITTER, ETC. I THINK PROVIDING BRIDGES FOR PRE-EXISING USER/GROUP POOL FROM THESE MAINSTREAM SERVICES MAY BE AN ATTRACTIVE OPTION FOR A LOT OF SERVICES, BUT I ALSO RECOGNIZED THAT THESE CAN BE CHALLENGING DUE TO VARIOUS REASONS SUCH AS COPYRIGHTS. I WISH I HAD MORE TIME TO UNDERSTAND THE DYNAMICS OF COLLABORATIONS.
                </li>
                <li>
                  I BELIEVE THAT THE CUSTOMIZING COMPONENT WOULD HAVE BEEN MORE
                  THOROUGH IF I WORKED WITH A TECH TEAM, WHICH WOULD HAVE
                  CREATED A LOGIC BEHIND THE COLLECTED RAW DATA. AS A UX
                  RESEARCHER, I WOULD HAVE CONTACTED DATA ANALYST TO MODIFY THE
                  CUSTOMIZATION WITH THEM.
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-1/2 items-center">
              <div className="text-gray-500 text-2xl mb-8">
                CONCLUSION
              </div>
              <ul className="text-xs list-decimal ml-10">
                <li className="mb-6">
                  NEED OF WORKING AS A TEAM
                  <br />
                  <br />
                  LAUNCHING A PRODUCT WITH GOOD LOGIC SHOULD BE BASED ON GOOD
                  RESEARCH ON THE MARKET/FIELD. ONCE THE RESEARCH IS FIRM, THE
                  PRODUCT SHOULD BE DESIGNED WITH INTENTIONS AND CLEAR AIMS.
                  MODERN TREND OFTEN REQUIRES THE PRODUCT/SERVICE TO COLLECT,
                  ANALYZE, AND UTILIZE DATA TO PROVIDE MORE PERSONALIZED USER
                  EXPERIENCE FOR THE CUSTOMERS. ONCE I LEARNED THESE LIMITATIONS
                  OF WORKING ALONE, I ASSEMBLED A SMALL TEAM INCLUDING A
                  BUSINESS RESEARCHER, MYSELF, AND A TECHNICIAN TO LAUNCH OUR
                  OWN SERVICE.
                </li>
                <li>
                  WEBSITE DESIGN
                  <br />
                  <br />I LEARNED THAT I WAS ENJOYING THE PROCESS OF PLANNING
                  AND ACTUALLY DESIGNING PRODUCTS. I WANTED TO EXPAND THIS
                  PROJECT TO WEBSITE DESIGN. CHECK OUT MY ARCADERS WEBSITE
                  PROJECT BELOW.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ArcadersFooter />
      </div>
    </>
  );
};

export default ArcadersApp;
