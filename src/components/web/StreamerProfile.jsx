import React from "react";

const StreamerProfile = ({ streamer, keywords, painPointsNeeds }) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/`;

  return (
    <>
      <div className="bg-web-dirty-white rounded-3xl text-black flex flex-col items-center p-12 gap-6 mx-16">
        <div className="font-clash-medium text-3xl">Comment</div>
        <div className="flex w-full gap-7 flex-wrap xl:flex-nowrap">
          {/* Left Panel */}
          <div className="flex flex-col gap-4 w-full xl:w-1/3">
            {/* Interest items */}
            <div className="flex gap-3 flex-wrap">
              {keywords.map((e) => {
                return (
                  <div className="bg-web-dark-blue py-3 px-4 text-white font-clash-semibold text-xl rounded-full">
                    {e}
                  </div>
                );
              })}
            </div>
            {/* Profile */}
            <div className="bg-white rounded-3xl flex flex-col items-center gap-12 p-12">
              <img
                src={`${imagePath}arcaders_web_ideate_streamer_1.png`}
                alt="profile"
                className="min-w-[241px]"
              />
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 font-clash-semibold text-right">
                  <div className="text-3xl">{streamer.Name}</div>
                  <div className="text-lg">Location</div>
                  <div className="text-lg">Occupation</div>
                </div>
                <div className="flex flex-col gap-4 font-clash-semibold text-lg text-left text-web-gray justify-end">
                  <div className="">
                    {streamer.Age} | {streamer.Sex}
                  </div>
                  <div>{streamer.Location}</div>
                  <div>{streamer.Occupation}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="w-full">
            {/* Pain Point & Needs */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-around">
                <div className="font-clash-semibold text-3xl text-web-dark-blue">
                  Pain Point
                </div>
                <div className="font-clash-semibold text-3xl text-web-dark-blue">
                  Needs
                </div>
              </div>
              {painPointsNeeds.map((e) => {
                return (
                  <div className="flex justify-between font-clash-medium text-xl bg-white rounded-full items-center text-center">
                    <div className="flex justify-center py-6 w-1/2">
                      {e.painPoint}
                    </div>
                    <div className="flex justify-center bg-web-dark-blue/15 text-web-dark-blue border-4 border-web-dark-blue py-6 w-1/2 rounded-full">
                      {e.need}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamerProfile;
