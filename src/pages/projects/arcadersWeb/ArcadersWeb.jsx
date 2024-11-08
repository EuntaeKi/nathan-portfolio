import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./ArcadersWeb.css";
import CommentBox from "../../../components/web/CommentBox";
import StreamerProfile from "../../../components/web/StreamerProfile";

const ArcadersWeb = ({ setPageColor }) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/`;

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
        <div className="flex min-h-svh">
          <div className="flex justify-around w-full items-center">
            <div className="flex flex-col justify-around h-full">
              {/* Logo */}
              <div className="relative flex flex-col font-bebas-neue">
                <img
                  src={`${imagePath}arcaders_web_icon.png`}
                  alt="Arcaders icon glowing in blue"
                  className="absolute -top-20 -left-24 bg-blend-lighten"
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
                  <div className="flex-5 text-web-gray">
                    FIGMA, GOOGLE FORMS
                  </div>
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
        </div>
        {/* 01. Content Section */}
        <div className="flex flex-col min-h-svh justify-center">
          {/* Section Header */}
          <div className="mb-16 ml-20">
            <div className="font-bebas-neue text-xl">01</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">Contents</h2>
          </div>
          {/* Section Body */}
          <div className="flex justify-around flex-wrap gap-2">
            <div className="flex flex-col bg-white rounded-[48px] w-[22rem] gap-8 items-center text-center p-10">
              <div className="text-5xl text-web-dark-blue font-clash-semibold">
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
              <div className="text-5xl text-web-dark-blue font-clash-semibold">
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
              <div className="text-5xl text-web-dark-blue font-clash-semibold">
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
              <div className="text-5xl text-web-dark-blue font-clash-semibold">
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
          <div className="mb-16 ml-20 pt-16">
            <div className="font-bebas-neue text-xl">02</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">
              Background
            </h2>
          </div>
          {/* Section Body Gamepad */}
          <div className="flex flex-col min-h-svh items-center justify-end text-center border-b-4 border-white/50">
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
          <div className="flex flex-col bg-web-bg font-clash-medium justify-center items-center py-16">
            <div className="container">
              <div className="text-5xl mb-6">Brainstorming</div>
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
              className="w-full xl:w-1/3 h-max-content xl:h-[150svh]"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_community.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full">
                <div className="flex flex-col h-max-content justify-between text-center pt-16">
                  <div className="font-clash-bold text-6xl">Community</div>
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
              className="w-full xl:w-1/3 h-max-content xl:h-[150svh]"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_concision.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full">
                <div className="flex flex-col h-max-content justify-between pt-16">
                  <div className="font-clash-bold text-6xl">Concision</div>
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
              className="w-full xl:w-1/3 h-max-content xl:h-[150svh]"
              style={{
                backgroundImage: `url(${imagePath}arcaders_web_background_stream.png)`,
              }}
            >
              <div className="flex flex-col justify-between h-max-content bg-web-img-background-gradient h-full text-center">
                <div className="flex flex-col h-max-content justify-between text-center pt-16">
                  <div className="font-clash-bold text-6xl">Stream</div>
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
        <div className="flex flex-col min-h-svh">
          {/* Section Header */}
          <div className="mb-16 ml-20 pt-16">
            <div className="font-bebas-neue text-xl">03</div>
            <h2 className="font-clash-medium text-5xl ml-4 -mt-2">Ideate</h2>
          </div>
          {/* Section Body Comments */}
          <div className="flex flex-col items-center text-center">
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
                commentBoxStyle="bottom-[5.5rem]"
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
                commentBoxStyle="bottom-[5.5rem]"
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
                commentBoxStyle="bottom-[5.5rem]"
              />
            </div>
          </div>
          {/* Section Body Profiles #1 */}
          <StreamerProfile
            streamer={{
              Name: "Jackson",
              Age: 26,
              Sex: "male",
              Location: "NY, USA",
              Occupation: "Student",
            }}
            keywords={[
              "#GAMEISLIFE",
              "#FAN",
              "#UI/UX",
              "#VIEWING-GAME",
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
          />
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

export default ArcadersWeb;
