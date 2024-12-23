import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./ArcadersWeb.css";
import CommentBox from "../../../components/web/CommentBox";
import StreamerProfile from "../../../components/web/StreamerProfile";
import UserJourney from "../../../components/web/UserJourney";
import ProjectGoal from "../../../components/web/ProjectGoal";
import UserFlow from "../../../components/web/UserFlow";
import DottedLine from "../../../components/web/DottedLine";
import ArcadersFooter from "../../../components/web/ArcadersFooter";

const importAll = (context) => {
  const images = {};
  context.keys().forEach((key) => {
    images[key.replace("./", "")] = context(key);
  });
  return images;
};

const ArcadersWeb = ({ setPageColor }) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/`;
  const publicFilePath = `${process.env.PUBLIC_URL}/files/`;
  const flowChart = [
    {
      label: "Set-up",
      isFilled: true,
      children: [
        {
          label: "Log In",
          isFilled: false,
          children: [
            {
              label: "Main Page",
              isFilled: true,
              children: [
                {
                  label: "Select Game",
                  isFilled: true,
                  children: [
                    {
                      label: "Streamer Review",
                      isFilled: false,
                      children: [
                        {
                          label: "Add Review",
                          isFilled: false,
                          children: [
                            {
                              label: "Add Game",
                              isFilled: false,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Select Streamer",
                  isFilled: true,
                  children: [
                    {
                      label: "Select Game",
                      isFilled: false,
                      children: [
                        {
                          label: "Streamer's Review",
                          isFilled: false,
                          children: [
                            {
                              label: "Add Streamer",
                              isFilled: false,
                              children: [
                                {
                                  label: "Add Game",
                                  isFilled: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "About Us",
                  isFilled: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const iconImages = importAll(
    require.context("../../../assets/imgs/", false, /arcaders_web_icons_*/)
  );

  useEffect(() => {
    setPageColor("#FFFFFF");
  }, [setPageColor]);

  return (
    <>
      <Helmet>
        <title>NS | Arcaders Website</title>
      </Helmet>
      {/* Outer Container */}
      {/* Outer margin should be m-8 */}
      <div className="flex flex-col bg-web-bg w-full">
        {/* Landing Section */}
        <div className="flex flex-wrap justify-around w-full min-h-svh items-center">
          <div className="flex flex-col justify-around h-full pt-32 pb-8 min-[1376px]:py-0">
            {/* Logo */}
            <div className="relative flex flex-col font-bebas-neue">
              <img
                src={`${imagePath}arcaders_web_icon.png`}
                alt="Arcaders icon glowing in blue"
                className="absolute -top-20 left-0 min-[1756px]:-left-24 bg-blend-lighten"
              />
              <h1 className="text-8xl font-bebas-neue">ARCADERS</h1>
              <div className="text-xl text-white/50 -mt-3">
                ULTIMATE GAME REVIEW WEBSITE
              </div>
            </div>
            {/* Project Description */}
            <div className="flex flex-col font-bebas-neue text-2xl gap-3">
              <div className="flex">
                <div className="flex-4 text-web-blue">TYPE</div>
                <div className="flex-5 text-web-gray">PERSONAL PROJECT</div>
              </div>
              <div className="flex">
                <div className="flex-4 text-web-blue">DESIGN PERIOD</div>
                <div className="flex-5 text-web-gray">2023.3 - 6</div>
              </div>
              <div className="flex">
                <div className="flex-4 text-web-blue">PARTICIPATION</div>
                <div className="flex-5 text-web-gray">UX/UI</div>
              </div>
              <div className="flex">
                <div className="flex-4 text-web-blue">TOOLS</div>
                <div className="flex-5 text-web-gray">FIGMA, GOOGLE FORMS</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${imagePath}arcaders_web_main.png`}
              alt="Laptop with a screenshot of Arcaders Website in the monitor"
            />
          </div>
        </div>
        {/* 01. Content Section */}
        <div className="flex flex-col min-h-svh justify-center gap-8 px-8">
          {/* Section Header */}
          <div className="self-center md:self-auto mb-0 md:mb-16 ml-0 md:ml-20">
            <div className="font-bebas-neue text-xl">01</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">Contents</h2>
          </div>
          {/* Section Body */}
          <div className="flex justify-around flex-wrap gap-2">
            <div className="flex flex-col bg-white rounded-[48px] w-[22rem] gap-8 items-center text-center p-10">
              <div className="text-4xl sm:text-5xl text-web-dark-blue font-clash-semibold">
                Background
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-web-gray font-clash-medium">
                  Selecting Topic
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Brainstorming
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Research
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[48px] w-[22rem] gap-8 items-center text-center p-10">
              <div className="text-4xl sm:text-5xl text-web-dark-blue font-clash-semibold">
                Ideate
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-web-gray font-clash-medium">
                  User Review
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Persona Survey
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Insights
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[48px] w-[22rem] gap-8 items-center text-center p-10">
              <div className="text-4xl sm:text-5xl text-web-dark-blue font-clash-semibold">
                Design
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-web-gray font-clash-medium">
                  User Flow
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Keywords
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Visualization
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[48px] w-[22rem] gap-8 items-center text-center p-10">
              <div className="text-4xl sm:text-5xl text-web-dark-blue font-clash-semibold">
                Conclusion
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-web-gray font-clash-medium">
                  Final UI/UX
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Prototype
                </div>
                <div className="text-xl text-web-gray font-clash-medium">
                  Wrap-up
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 02. Background Section */}
        <div className="flex flex-col bg-black">
          {/* Section Header */}
          <div className="self-center md:self-auto mb-0 md:mb-16 ml-0 md:ml-20 pt-16">
            <div className="font-bebas-neue text-xl">02</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">
              Background
            </h2>
          </div>
          {/* Section Body Gamepad */}
          <div className="flex flex-col min-h-svh items-center justify-end text-center border-b-4 border-white/50 px-8">
            <div className="font-clash-semibold text-5xl mb-8">
              How do I find the games that I <br />
              want to play?
            </div>
            <div className="font-clash-medium text-xl -mb-8 z-20">
              Where do users often look for new games? <br />
              How do they determine whether if they want to actually play?
            </div>
            <img
              src={`${imagePath}arcaders_web_background_img.png`}
              alt="Gamepad with 'x' mark in the background"
              className="z-10"
            />
          </div>
          {/* Section Body Brainstorming */}
          <div className="flex flex-col bg-web-bg font-clash-medium justify-center items-center py-16 px-8">
            <div className="container">
              <div className="text-4xl sm:text-5xl mb-6">Brainstorming</div>
              <div className="text-xl">
                To outline the research plan, I selected 3 main themes:
                Community, Concision, and Stream. Through industry-relevant user
                research design, I envisioned to transform gamers’ need to real
                life design.
              </div>
            </div>
          </div>
          {/* Section Body Three Grids */}
          <div className="flex flex-col xl:flex-row w-full text-center">
            {/* Section Community */}
            <div
              className="w-full xl:w-1/3 h-max-content xl:min-h-full bg-center"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_community.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full px-8 text-center">
                <div className="flex flex-col h-max-content justify-between text-center pt-16">
                  <div className="font-clash-bold text-5xl sm:text-6xl">
                    Community
                  </div>
                </div>
                <div className="flex flex-col items-center py-12">
                  <div className="font-clash-semibold text-3xl w-fit mb-12">
                    Space for gamers to <br />
                    crerate a community
                  </div>
                  <img
                    src={`${imagePath}arcaders_web_background_community_diagram.png`}
                    alt="Survey result for 'Did video game expand your social circles?'. It had 4000 respondents, where 88% replied with 'Games expanded my social circles', sourced from Statistica"
                  />
                </div>
              </div>
            </div>
            {/* Section Concision */}
            <div
              className="w-full xl:w-1/3 h-max-content xl:min-h-full bg-center"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_concision.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full px-8 text-center">
                <div className="flex flex-col h-max-content justify-between pt-16">
                  <div className="font-clash-bold text-5xl sm:text-6xl">
                    Concision
                  </div>
                </div>
                <div className="flex flex-col items-center py-12">
                  <div className="font-clash-semibold text-3xl w-fit mb-12">
                    Simple, yet well-organized <br />
                    guide for gamers looking for <br />
                    new games
                  </div>
                  <img
                    src={`${imagePath}arcaders_web_background_concision_diagram.png`}
                    alt="Survey result for 'Did video game expand your social circles?'. It had 4000 respondents, where 88% replied with 'Games expanded my social circles', sourced from Statistica"
                  />
                </div>
              </div>
            </div>
            {/* Section Stream */}
            <div
              className="w-full xl:w-1/3 h-max-content xl:min-h-full bg-center"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_stream.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full px-8 text-center">
                <div className="flex flex-col h-max-content justify-between text-center pt-16">
                  <div className="font-clash-bold text-5xl sm:text-6xl">
                    Stream
                  </div>
                </div>
                <div className="flex flex-col items-center py-12">
                  <div className="font-clash-semibold text-3xl w-fit mb-12">
                    Connection between <br />
                    streamers and gamers
                  </div>
                  <img
                    src={`${imagePath}arcaders_web_background_stream_diagram.png`}
                    alt="Survey result for 'Did video game expand your social circles?'. It had 4000 respondents, where 88% replied with 'Games expanded my social circles', sourced from Statistica"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 03. Ideate */}
        <div className="flex flex-col min-h-svh gap-12">
          {/* Section Header */}
          <div className="self-center md:self-auto mb-0 md:mb-16 ml-0 md:ml-20 pt-16">
            <div className="font-bebas-neue text-xl">03</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">Ideate</h2>
          </div>
          {/* Section Body Comments */}
          <div className="flex flex-col items-center text-center px-8">
            <div className="mb-[5.5rem]">
              <div className="font-clash-medium text-2xl text-white">
                User Reviews & Persona
              </div>
              <div className="font-clash-medium text-xl text-web-gray">
                User’s comment on existing game review services. <br />I asked
                32 gamers located in the US.
              </div>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-12">
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_gamepad_comment.png"
                avatarImage="arcaders_web_ideate_avatar_1.png"
                username="Gamergirl22"
                comment="So many <br /> advertisements."
                altText="Gamepad shaped comment box"
              />
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_square_comment.png"
                avatarImage="arcaders_web_ideate_avatar_2.png"
                username="KitingSam"
                comment="Not enough information<br /> about the actual game"
                altText="Rectangle shaped comment box"
                commentBoxStyle="bottom-[3rem] sm:bottom-[5.5rem]"
              />
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_gamepad_comment.png"
                avatarImage="arcaders_web_ideate_avatar_3.png"
                username="CalmKate"
                comment="Too many UI tabs <br /> that I don't use"
                altText="Gamepad shaped comment box"
              />
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_square_comment.png"
                avatarImage="arcaders_web_ideate_avatar_4.png"
                username="FragileVictor"
                comment="Boring UI/UX Design."
                altText="Rectangle shaped comment box"
                commentBoxStyle="bottom-[3rem] sm:bottom-[5.5rem]"
              />
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_gamepad_comment.png"
                avatarImage="arcaders_web_ideate_avatar_5.png"
                username="HappyJoe"
                comment="Little to no real <br /> gameplay"
                altText="Gamepad shaped comment box"
              />
              <CommentBox
                imagePath={imagePath}
                commentImage="arcaders_web_ideate_square_comment.png"
                avatarImage="arcaders_web_ideate_avatar_6.png"
                username="WatchingTim"
                comment="Wish I could know what <br /> my streamer played."
                altText="Rectangle shaped comment box"
                commentBoxStyle="bottom-[3rem] sm:bottom-[5.5rem]"
              />
            </div>
          </div>
          {/* Section Body Profiles */}
          <div className="flex flex-col gap-12 px-8">
            <StreamerProfile
              comment="I want to know what my favorite streamer plays. It’s hard to find what games they played before."
              streamer={{
                Name: "Jackson",
                Age: 26,
                Sex: "male",
                Location: "NY, USA",
                Occupation: "Student",
                ProfileImage: `${imagePath}arcaders_web_ideate_streamer_1.png`,
              }}
              keywords={[
                "#GAMEISLIFE",
                "#FAN",
                "#UI/UX",
                "#VIEWING_GAME",
                "#STREAM",
              ]}
              painPointsNeeds={[
                {
                  painPoint: "Hard to find what my streamers played before",
                  need: "Product that connects game reviews with streamers",
                },
                {
                  painPoint:
                    "Existing review services are overwhelming and subjective",
                  need: "Simple and useful  review format",
                },
                {
                  painPoint: "Complicated and boring UI",
                  need: "Intuitive and organized interface",
                },
              ]}
              profileSliders={[
                {
                  label: "Game Activity",
                  value: "9",
                },
                {
                  label: "New Games",
                  value: "5",
                },
                {
                  label: "Stream Participation",
                  value: "9",
                },
                {
                  label: "Social Level",
                  value: "5",
                },
              ]}
            />
            <StreamerProfile
              comment="I am constantly looking for new games to play with my friends. I play game to expand my social circles."
              streamer={{
                Name: "Kate",
                Age: 31,
                Sex: "female",
                Location: "NC, USA",
                Occupation: "Consultant",
                ProfileImage: `${imagePath}arcaders_web_ideate_streamer_2.png`,
              }}
              keywords={[
                "#FRIENDS",
                "#SOCIAL-NETWORK",
                "#NEWDOPAMINE",
                "#GAMEISLIFE",
              ]}
              painPointsNeeds={[
                {
                  painPoint: "Hard to find new games I want to play",
                  need: "Platform that provide customized recommendation",
                },
                {
                  painPoint: "Can't agree on what game to play with my friends",
                  need: "Game review service that I can communicate with peers",
                },
                {
                  painPoint:
                    "All the information is scattered around different sections",
                  need: "Practical information grouped together",
                },
              ]}
              profileSliders={[
                {
                  label: "Game Activity",
                  value: "9",
                },
                {
                  label: "New Games",
                  value: "9",
                },
                {
                  label: "Stream Participation",
                  value: "2",
                },
                {
                  label: "Social Level",
                  value: "9",
                },
              ]}
            />
          </div>
          {/* Insight #1 */}
          <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col bg-web-dark-blue text-white gap-4 font-clash-semibold items-center w-5/6 self-center py-8 px-4 rounded-3xl text-center mb-12">
              <div className="text-4xl">Insight #1</div>
              <div className="text-2xl">
                Wide variety of game review platforms is overwhelming for users.
              </div>
            </div>
            {/* User Journey */}
            <UserJourney />
          </div>
          {/* Insight #2 */}
          <div className="flex flex-col w-full justify-center items-center gap-4 px-8">
            <div className="flex flex-col bg-web-dark-blue text-white gap-4 font-clash-semibold items-center w-5/6 self-center py-8 px-4 rounded-3xl text-center mb-12">
              <div className="text-4xl">Insight #2</div>
              <div className="text-2xl">
                For users, game is an opportunity to socialize. They often form
                online communities based on different games. These communities
                often share similar preferences on which games they play.
              </div>
            </div>
            <div className="border-l-2 border-dashed border-white h-32"></div>
            {/* Project Goal */}
            <div className="flex flex-col items-center font-clash-semibold text-center gap-4">
              <div className="text-white text-4xl">Project Goal</div>
              <div className="text-web-gray text-3xl">
                Design a Simple & Customizable Game Reviewing Community
              </div>
              <div className="flex flex-wrap gap-8 w-full justify-center">
                <ProjectGoal
                  title="Customization"
                  hashtag="JustforU"
                  description="Based on user profile,  Arcaders provide customized experience for gamers"
                />
                <ProjectGoal
                  title="Community-based"
                  hashtag="Together"
                  description="Interaction between streamers, peers, and strangers are encouraged"
                />
                <ProjectGoal
                  title="Intuitive"
                  hashtag="SimpleIsBest"
                  description="Keep the UI simple, organized, and yet visually appealing"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 04. Design */}
        <div className="flex flex-col gap-12 font-clash-semibold pb-8">
          {/* Section Header */}
          <div className="self-center md:self-auto mb-0 md:mb-16 ml-0 md:ml-20 pt-16">
            <div className="font-bebas-neue text-xl">04</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">Design</h2>
          </div>
          {/* User Flow */}
          <div className="w-full flex flex-col items-center">
            <h4 className="mb-6 text-2xl font-clash-semibold">Userflow</h4>
            <UserFlow data={flowChart} />
          </div>
          <div className="flex flex-col items-center gap-8 px-8">
            {/* Style Guide */}
            <h3 className="font-clash-semibold text-2xl">Style Guide</h3>
            <div className="flex gap-8 flex-wrap justify-center w-full">
              <div className="flex flex-col gap-8 flex-wrap justify-start items-center 2xl:items-end">
                {/* Typography */}
                <div className="flex flex-col bg-[#404040] p-8 rounded-3xl gap-6 max-w-[500px] sm:w-[500px]">
                  <h4 className="font-clash-semibold text-2xl">Typography</h4>
                  <div className="flex flex-col gap-4 text-wrap md:text-nowrap">
                    <div className="flex justify-between">
                      <div className="font-rubik text-xl font-extrabold basis-1/2">
                        Arcaders
                      </div>
                      <div className="font-rubik text-xl font-extrabold basis-1/2 text-[#8990A8]">
                        Rubik ExtraBold
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-rubik text-xl font-bold basis-1/2">
                        Provide Customized
                      </div>
                      <div className="font-rubik text-xl font-bold basis-1/2 text-[#8990A8]">
                        Rubik Bold
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-bebas-text-xl neue basis-1/2">
                        REVIEW SERVICE
                      </div>
                      <div className="font-bebas-text-xl neue basis-1/2 text-[#8990A8]">
                        BEBAS NEUE REGULAR
                      </div>
                    </div>
                  </div>
                </div>
                {/* Icons */}
                <div className="flex flex-col bg-[#404040] p-8 rounded-3xl gap-6 max-w-[900px]">
                  <h4 className="font-clash-semibold text-2xl">Icons</h4>
                  <div className="flex gap-4 flex-wrap">
                    {Object.keys(iconImages).map((name, index) => (
                      <div key={index} className="basis-[calc(11%-1rem)]">
                        <img
                          src={iconImages[name]}
                          alt={name}
                          className="w-[50px] h-[50px] min-w-[50px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Colors */}
              <div className="flex flex-col bg-[#404040] p-8 rounded-3xl gap-6 max-w-[500px] h-max">
                <h4 className="font-clash-semibold text-2xl">Colors</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex justify-center items-end bg-[#1B1B23] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #1B1B23
                  </div>
                  <div className="flex justify-center items-end bg-[#323131] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #323131
                  </div>
                  <div className="flex justify-center items-end bg-[#8990A8] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #8990A8
                  </div>
                  <div className="flex justify-center items-end bg-[#142252] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #142252
                  </div>
                  <div className="flex justify-center items-end bg-[#3340D8] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #3340D8
                  </div>
                  <div className="flex justify-center items-end bg-[#7BDDFF] min-w-24 max-w-24 sm:min-w-32 sm:max-w-32 h-24 sm:h-32 basis-[calc(33%-1rem)]">
                    #7BDDFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Web Page Walk-through */}
        <div className="flex flex-col bg-white text-black font-clash-semibold pb-8 items-center px-8">
          {/* Onboarding */}
          <div className="flex flex-col justify-center items-center p-10 gap-4 text-center">
            <h3 className="text-web-dark-blue text-2xl font-clash-semibold">
              Onboarding
            </h3>
            <div className="font-clash-medium text-xl">
              We show what you might be interested in
            </div>
            <div className="font-clash-medium text-xl text-web-gray">
              The first page that user face is a simple onboarding process
            </div>
          </div>
          {/* Video Demo */}
          <div className="flex flex-col justify-center">
            <video
              autoPlay
              className="w-full h-full mb-8"
              loop={true}
              muted={true}
            >
              <source
                src={publicFilePath + "arcaders_web_onboarding.mp4"}
                type="video/mp4"
              />
              Your browser does not support video element
            </video>
            <div className="flex items-center justify-center">
              <div className="hidden sm:block transform -translate-y-1/2">
                <DottedLine
                  isHorizontal={false}
                  isCirclePositionStart={null}
                  className="h-16 ml-1/4"
                />
                <DottedLine
                  isHorizontal={true}
                  isCirclePositionStart={false}
                  className="w-16 ml-1/4"
                />
              </div>
              <div className="flex flex-col text-2xl ml-4 sm:items-start items-center text-center sm:text-start">
                <div className="block sm:hidden transform -translate-y-1/2">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={false}
                    className="h-16 ml-1/4"
                  />
                </div>
                <div>Customization</div>
                <div className="font-clash-medium text-web-gray">
                  This simple, image-based survey demonstrates what Arcaders
                  provide for users in a nutshell.
                </div>
              </div>
            </div>
            {/* Login */}
            <div className="flex flex-wrap w-full text-center min-h-svh justify-center items-center">
              <div className="flex flex-col w-full md:w-1/2 p-8 gap-12">
                <h3 className="text-web-dark-blue text-2xl font-clash-semibold">
                  LOGIN
                </h3>
                <div className="font-clash-medium text-2xl">
                  You can connect your account from three major game live
                  streaming platform including Youtube, Twitch, and Chzzk
                </div>
                <div className="font-clash-medium text-2xl text-web-gray">
                  No matter where you are, you can always access your account
                  through overlay log in tab.{" "}
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
                <img
                  src={imagePath + "arcaders_web_login.png"}
                  alt="Login Page for Arcaders Web"
                  className="w-full xl:w-3/4"
                />
              </div>
            </div>
            {/* Game Review */}
            <div className="flex flex-wrap w-full text-center justify-center items-center">
              <div className="flex flex-col w-full p-8 gap-12 justify-center items-center">
                <h3 className="text-web-dark-blue text-2xl font-clash-semibold">
                  Game Review Page
                </h3>
                <div className="font-clash-medium text-2xl max-w-[600px]">
                  Arcaders aim to provide minimum length of information while
                  its easy to understand. To do so, Arcaders utilizes keywords,
                  image-based cards.
                </div>
                <div className="font-clash-medium text-2xl text-web-gray w-full sm:w-[450px]">
                  I also wanted to keep the website pages entertaining and fun
                  to watch. Organization was also not left alone.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 min-[1567px]:gap-0 mb-8">
              {/* Point 1 */}
              {/* Height set to be height of the image */}
              <div className="flex flex-wrap justify-center items-center md:min-h-[420px] flex-col min-[1567px]:flex-row">
                <div className="flex flex-col gap-4 text-center min-[1567px]:text-start items-center min-[1567px]:items-start">
                  <div className="text-xl text-web-dark-blue">Point 1:</div>
                  <div className="text-white text-xl py-6 px-8 bg-web-dark-blue w-fit rounded-md">
                    Categories
                  </div>
                  <div className="max-w-[450px] font-clash-medium text-2xl text-web-gray">
                    Every games are tagged and grouped on these categories.
                    These keywords are utilized to customize the recommendations
                    for users as well.
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                {/* Breakpoint at flex wrap point */}
                <div className="hidden min-[1567px]:block">
                  <DottedLine
                    isHorizontal={true}
                    isCirclePositionStart={true}
                    className="w-[100px] ml-1/4"
                  />
                </div>
                {/* Wrapper for View Port Visibility */}
                <div className="block min-[1567px]:hidden">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={true}
                    className="h-16 ml-1/4"
                  />
                </div>

                <img
                  src={imagePath + "arcaders_web_game_review_1.png"}
                  alt="Game review page on Arcaders Web showing rating (4.1) of League of Legends"
                />
              </div>
              {/* Point 2 */}
              {/* Height set to be height of the image */}
              <div className="flex flex-wrap justify-center items-center md:min-h-[810px] flex-col min-[1567px]:flex-row">
                <div className="flex flex-col gap-4 text-center min-[1567px]:text-start items-center min-[1567px]:items-start">
                  <div className="text-xl text-web-dark-blue">Point 2:</div>
                  <div className="text-white text-xl py-6 px-8 bg-web-dark-blue w-fit rounded-md">
                    Game Summary
                  </div>
                  <div className="max-w-[450px] font-clash-medium text-2xl text-web-gray">
                    Actual gameplay and multiple images are considered to be
                    essential in the game description section. Users can collect
                    useful information intuitively here.
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                {/* Breakpoint at flex wrap point */}
                <div className="hidden min-[1567px]:flex items-center">
                  <DottedLine
                    isHorizontal={true}
                    isCirclePositionStart={true}
                    className="w-16 ml-1/4"
                  />
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={null}
                    className="h-48 ml-1/4"
                  />
                  <div className="flex flex-col h-48 justify-between">
                    <DottedLine
                      isHorizontal={true}
                      isCirclePositionStart={null}
                      className="w-8"
                    />
                    <DottedLine
                      isHorizontal={true}
                      isCirclePositionStart={null}
                      className="w-8"
                    />
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                <div className="block min-[1567px]:hidden">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={true}
                    className="h-16 ml-1/4"
                  />
                </div>
                <img
                  src={imagePath + "arcaders_web_game_review_2.png"}
                  alt="Game review page on Arcaders Web showing the objective of League of Legends"
                />
              </div>
              {/* Point 3 */}
              {/* Height set to be height of the image */}
              <div className="flex flex-wrap justify-center items-center md:min-h-[420px] flex-col min-[1567px]:flex-row">
                <div className="flex flex-col gap-4 text-center min-[1567px]:text-start items-center min-[1567px]:items-start">
                  <div className="text-xl text-web-dark-blue">Point 3:</div>
                  <div className="text-white text-xl py-6 px-8 bg-web-dark-blue w-fit rounded-md">
                    Game Summary
                  </div>
                  <div className="max-w-[450px] font-clash-medium text-2xl text-web-gray">
                    You can interact and respond to others reviews including
                    your favorite streamers who also played the same game.{" "}
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                {/* Breakpoint at flex wrap point */}
                <div className="hidden min-[1567px]:block">
                  <DottedLine
                    isHorizontal={true}
                    isCirclePositionStart={true}
                    className="w-[100px] ml-1/4"
                  />
                </div>
                {/* Wrapper for View Port Visibility */}
                <div className="block min-[1567px]:hidden">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={true}
                    className="h-16 ml-1/4"
                  />
                </div>
                <img
                  src={imagePath + "arcaders_web_game_review_3.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
              </div>
            </div>
            {/* Streamers Page */}
            <div className="flex flex-col gap-8 min-[1567px]:gap-0">
              {/* Overview */}
              {/* Height set to be height of the image */}
              <div className="flex flex-wrap justify-center items-center md:min-h-[420px] flex-col min-[1567px]:flex-row">
                <img
                  className="hidden min-[1567px]:flex"
                  src={imagePath + "arcaders_web_streamers_1.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
                <div className="flex flex-col gap-4 text-center min-[1567px]:text-start mb-8 min-[1567px]:mb-0 ml-0 min-[1567px]:ml-4">
                  <div className="flex flex-col w-full gap-12 justify-center ml-0 min-[1567px]:ml-[100px] items-center min-[1567px]:items-start">
                    <h3 className="text-web-dark-blue text-2xl font-clash-semibold">
                      Streamer Page
                    </h3>
                    <div className="font-clash-medium text-2xl max-w-[450px]">
                      One of the leading factor that enables Arcaders to be an
                      active community is streamers who demonstrate the game
                      plays and lead the communicate between gamers.
                    </div>
                    <div className="font-clash-medium text-2xl text-web-gray w-full sm:w-[450px]">
                      Connect your streaming account with Arcaders to build your
                      own stream page!
                    </div>
                  </div>
                </div>
                <img
                  className="flex min-[1567px]:hidden"
                  src={imagePath + "arcaders_web_streamers_1.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
              </div>
              {/* Point 1 */}
              <div className="flex flex-wrap justify-center items-center md:min-h-[420px] flex-col min-[1567px]:flex-row">
                {/* Images */}
                <img
                  className="hidden min-[1567px]:flex"
                  src={imagePath + "arcaders_web_streamers_2.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />

                {/* Lines */}
                <div className="hidden min-[1567px]:flex items-center">
                  <div className="flex flex-col h-48 justify-between">
                    <DottedLine
                      isHorizontal={true}
                      isCirclePositionStart={null}
                      className="w-8"
                    />
                    <DottedLine
                      isHorizontal={true}
                      isCirclePositionStart={null}
                      className="w-8"
                    />
                  </div>
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={null}
                    className="h-48 ml-1/4"
                  />
                  <DottedLine
                    isHorizontal={true}
                    isCirclePositionStart={false}
                    className="w-16 ml-1/4"
                  />
                </div>
                {/* Text Block */}
                <div className="flex flex-col gap-4 text-center min-[1567px]:text-start items-center min-[1567px]:items-start mb-8 min-[1567px]:mb-0 ml-0 min-[1567px]:ml-4">
                  <div className="text-xl text-web-dark-blue">Point 1:</div>
                  <div className="text-white text-xl py-6 px-8 bg-web-dark-blue w-fit rounded-md">
                    Game Time
                  </div>
                  <div className="max-w-[450px] font-clash-medium text-2xl text-web-gray">
                    Users can easily access what other games were played by this
                    streamer. If they are live streaming, Arcaders will let the
                    user know.
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                <div className="block min-[1567px]:hidden">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={true}
                    className="h-16 ml-1/4"
                  />
                </div>
                {/* Mobile Images */}
                <img
                  className="flex min-[1567px]:hidden"
                  src={imagePath + "arcaders_web_streamers_2.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
              </div>
              {/* Point 2 */}
              <div className="flex flex-wrap justify-center items-center flex-col min-[1567px]:flex-row">
                {/* Image */}
                <img
                  className="hidden min-[1567px]:flex"
                  src={imagePath + "arcaders_web_streamers_3.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
                <div className="hidden min-[1567px]:flex items-center">
                  <DottedLine
                    isHorizontal={true}
                    isCirclePositionStart={false}
                    className="w-[100px]"
                  />
                </div>
                {/* Text Block */}
                <div className="flex flex-col gap-2 text-center min-[1567px]:text-start items-center min-[1567px]:items-start mb-8 min-[1567px]:mb-0 ml-0 min-[1567px]:ml-4">
                  <div className="text-xl text-web-dark-blue">Point 2:</div>
                  <div className="text-white text-xl py-6 px-8 bg-web-dark-blue w-fit rounded-md">
                    Community
                  </div>
                  <div className="max-w-[450px] font-clash-medium text-2xl text-web-gray">
                    Users can comment and rate the streamer’s review on games.
                    Top 4 comments are displayed.
                  </div>
                </div>
                {/* Wrapper for View Port Visibility */}
                <div className="block min-[1567px]:hidden">
                  <DottedLine
                    isHorizontal={false}
                    isCirclePositionStart={true}
                    className="h-16 ml-1/4"
                  />
                </div>
                {/* Mobile Image */}
                <img
                  className="flex min-[1567px]:hidden"
                  src={imagePath + "arcaders_web_streamers_3.png"}
                  alt="Game review page on Arcaders Web showing the list of streamers who played the game and users' comment on the game"
                />
              </div>
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

export default ArcadersWeb;
