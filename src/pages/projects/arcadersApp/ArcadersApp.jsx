import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./ArcadersApp.css";

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
      <div className="font-press-start-2p block">
        {/* Introduction */}
        <div className="arcaders-app-intro min-h-svh">
          <div className="flex items-center justify-start xl:justify-center flex-wrap gap-8 p-8">
            <div className="flex flex-col gap-8">
              <div className="text-gray-400">PROJECT:</div>
              <div className="text-white text-4xl md:text-6xl break-all">
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
        <div className="flex justify-center items-center flex-wrap gap-8 min-h-svh bg-black p-8">
          <div className="flex flex-col gap-8 w-full md:w-1/3">
            <div className="text-gray-400 text-2xl">GOAL</div>
            <div className="text-sm">
              MY PRODUCT WILL LET USERS BUILD COMMUNITIES & GAIN USEFUL
              DESCRIPTIONS OF THE GAMES WHICH WILL AFFECT USERS LOOKING FOR NEW
              GAMES TO PLAY BY EMPHASIZING CATEGORIES & DESCRIPTIONS OF THE
              GAMES, PROVIDING COMMUNITY PLATFORM, & UTILIZING SIMPLE
              ORGANIZATION. I WILL MEASURE EFFECTIVENESS BY INTEGRATED USER
              EVALUATION (RATING).{" "}
            </div>
            <div className="text-gray-400 text-2xl">PAIN POINT</div>
            <div className="text-sm">
              SIMPLE, SIMPLE, AND SIMPLE! EXISTTNG GAME REVIEW SERVICES CAN BE
              IMPROVED IN TERMS OF
              <ul>
                <li>1) ORGANIZATION</li>
                <li>2) INTERACTION</li>
                <li>3) SIMPLICITY</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-1/3 min-w-1/3 align-middle">
            <div className="flex justify-center">
              <img
                src={`${imagePath}arcaders_icon_organization.png`}
                alt="Organization Icon"
              />
            </div>
            <div className="flex justify-center gap-10">
              <img
                src={`${imagePath}arcaders_icon_interaction.png`}
                alt="Interaction Icon"
              />
              <img
                src={`${imagePath}arcaders_icon_simplicity.png`}
                alt="Simplicity Icon"
              />
            </div>
          </div>
        </div>
        {/* Persona */}
        <div className="flex flex-col items-start bg-gray-500 min-h-svh pt-8 px-4 xl:p-0">
          <div className="flex justify-center xl:justify-between flex-wrap gap-8">
            {/* Nancy */}
            <div className="flex gap-6 flex-wrap sm:flex-nowrap w-full xl:w-1/3 max-w-[600px] xl:max-w-none xl:min-w-[600px] h-fit bg-white text-black border-4 border-black text-[6.5px] p-4 rotate-0 xl:rotate-[-12deg]">
              {/* Column 1 */}
              <div className="flex flex-col items-center gap-8 w-full sm:w-1/3">
                <div className="text-[10px]">PERSONA 2: NANCY</div>
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
                <div className="text-[10px]">PERSONA 1: ARNOLD</div>
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
          <div className="flex self-center flex-wrap gap-6 w-full xl:w-1/3 h-fit max-w-[750px] xl:max-w-none bg-white text-black border-4 border-black text-[6.5px] p-4 py-8 px-16 my-8">
            <div className="flex flex-col gap-8 items-center w-full xl:w-1/3">
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
            <div className="flex flex-col gap-8 items-center w-full xl:w-1/3">
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
            <div className="flex flex-col gap-8 items-center w-full xl:w-1/3">
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
          <div className="flex bg-white w-1/3 self-center text-black border-4 border-black text-[6.5px] p-4 h-fit gap-6 py-8 px-16">
            <div className="flex flex-col items-center gap-4">
              <div className="text-gray-500 text-[10px]">USER RESEARCH</div>
              <div className="flex border border-black w-full"></div>
              <div className="text-center text-[9px]">
                PREVIEWS AVAILABLE IN THE MARKET ARE OFTEN HARD TO NAVIGATE
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-black mt-[-10rem] justify-center mb-24">
          <div className="flex flex-col mt-80 gap-16">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="text-gray-500">COMPETITIVE AUDIT I: </div>
                <img
                  src={`${imagePath}arcaders_app_steam.png`}
                  alt="Steam Icon"
                />
                STEAM
              </div>
              <div>
                <div className={`relative opacity-0 hover-show`}>
                  <div className="z-10 absolute w-full h-[1145px] bg-gray-900">
                    <div className="h-[312px] flex items-center opacity-0 hover-show">
                      <div className="ml-8">
                        <div className="text-2xl w-fit">ALL IN ONE</div>
                        <div className="text-[7px] w-64">
                          MAIN PAGE HAS IMAGE, ADDITIONAL TOOL TAB ON TOP OF THE
                          APP’S TOOL TAB (DEFAULT SETTING), SIMPLE DESCRIPTION
                          WITH OVERALL RATING FROM THE USERS
                        </div>
                      </div>
                      <img
                        src={`${imagePath}arcaders_competitive_audit_steam_1_masked.png`}
                        alt="Masking of Steam's Baldur's Gate 3 page on overview"
                        className="z-20 h-[228px] translate-x-[14px] translate-y-[-1px]"
                      />
                    </div>
                    <div className="ml-24 h-[302px] flex items-center opacity-0 hover-show">
                      <img
                        src={`${imagePath}arcaders_competitive_audit_steam_2_masked.png`}
                        alt="Masking of Steam's Baldur's Gate 3 page on description"
                        className="z-20 h-[205px] translate-x-[15px] translate-y-[73px]"
                      />
                      <div className="ml-12 mt-16">
                        <div className="text-2xl w-fit">ABOUT</div>
                        <div className="text-[7px] w-64">
                          THE GENERAL DESCRIPTION IS PROVIDED, BUT BY THE
                          PRODUCERS. SOME USERS FIND IT DIFFICULT TO NOTICE WHAT
                          KIND OF GAME IT ACTUALLY IS.
                        </div>
                      </div>
                    </div>
                    <div className="h-[531px] flex items-center opacity-0 hover-show">
                      <img
                        src={`${imagePath}arcaders_competitive_audit_steam_3_masked.png`}
                        alt="Masking of Steam's Baldur's Gate 3 page on review"
                        className="z-20 h-[340px] translate-x-[-24px] translate-y-[-89px]"
                      />
                      <div className="ml-8 mb-32">
                        <div className="text-2xl w-fit">REVIEWS</div>
                        <div className="text-[7px] w-64">
                          USERS CAN LEAVE THEIR OWN REVIEWS AND BRIEFLY
                          COMMUNICATE THROUGH LIKE OR DISLIKE OTHER USER’S
                          REVIEWS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_1.png`}
                  alt="Baldur's Gate 3 page on Steam"
                  className="z-0"
                />
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_2.png`}
                  alt="Baldur's Gate 3 game description on Steam"
                  className="z-0"
                />
                <img
                  src={`${imagePath}arcaders_competitive_audit_steam_3.png`}
                  alt="Baldur's Gate 3 reviews on Steam"
                  className="z-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="text-gray-500">COMPETITIVE AUDIT II: </div>
                <img
                  src={`${imagePath}arcaders_app_metacritic.png`}
                  alt="Metacritic Icon"
                />
                METACRITIC
              </div>
              <div>
                <div className={`relative opacity-0 hover-show`}>
                  <div className="z-10 absolute w-full h-[598px] bg-gray-900">
                    <div className="h-[598px] flex items-start opacity-0 hover-show">
                      <div className="flex ml-24 mt-32 flex-col justify-center">
                        <div className="text-2xl w-fit">METASCORE</div>
                        <div className="text-[7px] w-64">
                          CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR
                          OWN EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN
                          OR NOT PROVIDED.
                        </div>
                      </div>
                      <img
                        src={`${imagePath}arcaders_competitive_audit_metacritic_mask.png`}
                        alt="Masking of Metacritic's Baldur's Gate 3 page on overview"
                        className="z-20 h-[276px] translate-x-[57px] translate-y-[25px]"
                      />
                    </div>
                  </div>
                </div>
                <img
                  src={`${imagePath}arcaders_competitive_audit_metacritic.png`}
                  alt="Baldur's Gate 3 review on Metacritic"
                  className="z-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="text-gray-500">COMPETITIVE AUDIT III: </div>
                <img
                  src={`${imagePath}arcaders_app_gamespot.png`}
                  alt="Gamespot Icon"
                />
                GAMESPOT
              </div>
              <div>
                <div className={`relative opacity-0 hover-show`}>
                  <div className="z-10 absolute w-full h-[685px] bg-gray-900">
                    <div className="h-[685px] flex items-start opacity-0 hover-show">
                      <img
                        src={`${imagePath}arcaders_competitive_audit_gamespot_mask.png`}
                        alt="Masking of Gamespot's Baldur's Gate 3 page on overview article"
                        className="z-20 h-[261px] translate-x-[35px] translate-y-[23px]"
                      />
                      <div className="ml-16 mt-24">
                        <div className="text-2xl w-fit">ARTICLES</div>
                        <div className="text-[7px] w-64">
                          CENTERED ON REVIEW “SCORES” BY BOTH USERS AND THEIR
                          OWN EVALUATIONS. DESCRIPTION OF THE GAMES ARE HIDDEN
                          OR NOT PROVIDED.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={`${imagePath}arcaders_competitive_audit_gamespot.png`}
                  alt="Gamespot's Baldur's Gate 3 page on overview article"
                  className="z-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-48">
          <div className="flex flex-col items-center gap-12">
            <div className="text-2xl text-gray-500">TESTING DESIGNS:</div>
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
          <div className="flex items-center justify-center gap-16">
            <div className="flex items-center">
              <img
                src={`${imagePath}arcaders_confirming_interaction_1.png`}
                alt="Arcaders' app screen on the game League of Legends, showing an option to add the game to the list"
                className="z-0"
              />
              <img
                src={`${imagePath}arcaders_confirming_interaction_arrow.png`}
                alt="Arrow showing the connection between the first and second screen"
                className="z-10 mt-[116px] mx-[-36px]"
              />
              <img
                src={`${imagePath}arcaders_confirming_interaction_2.png`}
                alt="Arcaders' app screen on the game League of Legends confirming an option to add the game to the list"
                className="z-0"
              />
            </div>
            <div className="flex flex-col w-1/3 text-xs">
              <div className="text-gray-500 text-2xl mb-6">
                CONFIRMING INTERACTION:
              </div>
              <div>
                ADDING CONFIRMATION INTERACTION WHEN USERS MAKING MAJOR
                DECISIONS SUCH AS
                <ul className="list-decimal ml-9">
                  <li>ADDING GAMES/STREAMERS TO MYLIST</li>
                  <li>LOG-IN & REGISTERING ACCOUNT PROCESS</li>
                  <li>ADJUSTING FILTERS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-12 items-center">
            <div className="flex flex-col w-1/3">
              <div className="text-gray-500 text-2xl mb-6">CUSTOMIZATION:</div>
              <div className="text-xs">
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
            <div className="w-1/4 text-xs">
              THE COLLECTED DATA ARE APPLIED TO RECOMMENDED GAMES AND STREAMER
              LIST.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="flex flex-col w-1/4">
              <div className="text-gray-500 text-2xl mb-6">
                GAMERS AND STREAMERS:
              </div>
              <div className="text-xs">
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
            <div className="flex justify-end">
              <img
                src={`${imagePath}arcaders_gamers_streamers_1.png`}
                alt="Arcaders' app screen on a streamer's overview page showing League of Legends and StarCraft videos"
                className="z-20 rotate-[-30deg] translate-x-11 translate-y-5"
              />
              <img
                src={`${imagePath}arcaders_gamers_streamers_2.png`}
                alt="Arcaders' app screen asking what streamers the user watches, listing out random streamers"
                className="z-10"
              />
              <img
                src={`${imagePath}arcaders_gamers_streamers_3.png`}
                alt="Arcaders' app screen listing out streamers the user follows"
                className="z-0 rotate-[15deg] translate-x-[-1.25rem] translate-y-5"
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-12 items-center">
            <div className="flex gap-8">
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
            <div className="flex flex-col h-[1500px]">
              <img
                src={`${imagePath}arcaders_screen_4.png`}
                alt="Different search page showing recommended games or genre on the Arcaders' app"
                className="z-0 translate-x-[-75%]"
              />
              <img
                src={`${imagePath}arcaders_screen_5.png`}
                alt="Different search page showing user's favorite games or daily and weekly popular games on the Arcaders' app"
                className="z-0 translate-x-[-25%] translate-y-[-75%]"
              />
              <img
                src={`${imagePath}arcaders_screen_6.png`}
                alt="Different search page showing recently added games on the Arcaders' app"
                className="z-0 translate-x-[25%] translate-y-[-150%]"
              />
              <img
                src={`${imagePath}arcaders_screen_7.png`}
                alt="Overlay for confirming the addition of the game to the list on the Arcaders' app"
                className="z-0 translate-x-[75%] translate-y-[-225%]"
              />
            </div>
            <img
              src={`${imagePath}arcaders_whiteboard.png`}
              alt="Main login screen on the Arcaders' app"
              className="z-0"
            />
          </div>
          <div className="flex flex-col gap-24 items-center">
            <div className="flex flex-col w-1/2 items-center">
              <div className="text-gray-500 text-2xl mb-16">
                IF I HAD MORE RESOURCES:
              </div>
              <ul className="text-xs list-decimal ml-10">
                <li className="mb-6">
                  EXPLORING COLLABORATING METHODS WITH MAJOR COMPANIES LIKE
                  YOUTUBE, INSTAGRAM, TWITTER, ETC. I THINK PROVIDING BRIDGES
                  FOR PRE-EXISING USER/GROUP POOL FROM THESE MAINSTREAM SERVICES
                  MAY BE AN ATTRACTIVE OPTION FOR A LOT OF SERVICES, BUT I ALSO
                  RECOGNIZED THAT THESE CAN BE CHALLENGING DUE TO VARIOUS
                  REASONS SUCH AS COPYRIGHTS. I WISH I HAD MORE TIME TO
                  UNDERSTAND THE DYNAMICS OF COLLABORATIONS.
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
              <div className="text-gray-500 text-2xl mb-16">
                WHAT DID I LEARN AND WHAT’S NEXT:
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
          <div className="flex justify-center">
            <ArcadersFooter />
          </div>
        </div>
      </div>
    </>
  );
};

const ArcadersFooter = () => {
  return (
    <>
      <div className="border-white border-4 w-4/5"></div>
    </>
  );
};

export default ArcadersApp;
