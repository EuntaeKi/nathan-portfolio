import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Emoji from "react-emoji-render";

// Register required chart components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const UserJourney = () => {
  return (
    <div className="p-8 bg-white text-black text-lg font-clash-medium flex flex-col justify-center gap-12 text-center">
      <div className="text-web-dark-blue text-4xl font-clash-semibold">
        User Journey
      </div>

      {/* Step Row */}
      <div className="grid grid-cols-11 gap-4 items-center">
        <Header title="Step" />
        <Step title="Search for a game" number={1} />
        <Step title="Watch a gaming stream" number={2} />
        <Step title="Discuss with peers" number={3} />
        <Step title="Play the game" number={4} />
        <Step title="Leave a review" number={5} />
      </div>

      {/* Behavior Row */}
      <div className="grid grid-cols-11 gap-4 items-center">
        <Header title="Behavior" />
        <Behavior description="Look for games to play with peers" />
        <Behavior description="Tries to look up what games their favorite streamer played" />
        <Behavior description="Discuss what game to play with friends" />
        <Behavior description="Tries playing the game" />
        <Behavior description="Leaves a review about the game based on the gameplay" />
      </div>

      {/* Emotion Row */}
      <div className="grid grid-cols-11 gap-4 items-center border-t-2 border-b-2 border-dashed border-web-gray py-8">
        <Header title="Emotion" />
        <div className="col-span-10">
          <div className="grid grid-cols-10">
            <div className="col-span-1"></div>
            <EmotionSection />
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-10">
            <Emotion
              emoji="🙂"
              description="Excited to play a new game! Where do I find one though?"
              yPos={-120}
            />
            <Emotion
              emoji="😐"
              description="Is this the one my streamer played? I can't tell."
              yPos={-50}
            />
            <Emotion
              emoji="😊"
              description="Whatever the game is we will enjoy it together!"
              yPos={-120}
            />
            <Emotion
              emoji="😞"
              description="This is not what I expected. What a disappointment."
              yPos={-40}
            />
            <Emotion
              emoji="😞"
              description="The interface looks boring. What's the point of reviewing?"
              yPos={-40}
            />
          </div>
        </div>
      </div>

      {/* Pain Point Row */}
      <div className="grid grid-cols-11 gap-4 items-center">
        <Header title="Pain Point" />
        <PainPoint description="Too much information to consider" />
        <PainPoint description="Takes extra research to figure out what game is streamed" />
        <PainPoint description="The expectation built from reviews were not met" />
        <PainPoint description="Minimum interaction after leaving review. Boring UI/UX design." />
      </div>

      {/* Opportunity Row */}
      <div className="grid grid-cols-11 gap-4 items-center">
        <Header title="Opportunity" />
        <Opportunity description="Provide customized recommendations" />
        <Opportunity description="Build a direct pathway that connects streamers and gamers" />
        <Opportunity description="Provide useful and accurate reviews" />
        <Opportunity description="Community-based review platform for users to stay active. Visually appealing UI/UX design." />
      </div>
    </div>
  );
};

// Component for row headers
const Header = ({ title }) => (
  <div className="text-web-gray text-xl">{title}</div>
);

// Components for each step, behavior, emotion, pain point, and opportunity
const Step = ({ title, number }) => (
  <div className="text-black relative flex items-center justify-center col-span-2">
    <div className="text-web-dark-blue text-lg absolute bottom-4 -left-4">{`0${number}`}</div>
    {title}
  </div>
);

const Behavior = ({ description }) => (
  <div className="col-span-2">{description}</div>
);

const Emotion = ({ emoji, description, yPos }) => (
  <div className="flex flex-col items-center justify-center col-span-2">
    <span className="text-3xl">{emoji}</span>
    <div className="mt-2 p-2 bg-gray-300 rounded-3xl text-center text-pretty">
      {description}
    </div>
  </div>
);

const PainPoint = ({ description }) => (
  <div className="col-span-2 p-4 rounded-3xl bg-[#E4E7F6]">{description}</div>
);

const Opportunity = ({ description }) => (
  <div className="text-white col-span-2 p-4 rounded-3xl bg-web-dark-blue">
    {description}
  </div>
);

const EmojiImage = ({ emoji }) => <Emoji text={`:${emoji}:`} />;

const EmotionSection = () => {
  //   const data = {
  //     // pointStyle: ["😊", "😐", "🙂", "😞", "😐"],
  //     datasets: [
  //       {
  //         label: "Test",
  //         pointRadius: 20,
  //         pointHoverRadius: 20,
  //         pointHitRadius: "😊",
  //         data: 1,
  //       },
  //     ],
  //   };
  const img = <EmojiImage emoji="kissing_face_with_closed_eyes" />;
  const data = {
    labels: ["", "", "", "", ""], // Empty labels for each point to avoid any axis labels
    datasets: [
      {
        label: "",
        data: [80, 60, 75, 50, 65], // Example y-axis values representing emotion levels
        borderColor: "#4b60c0",
        pointRadius: 10,
        fill: false,
        tension: 0, // Curved line for a smoother appearance
        pointStyle: [img, "star", "star", "star", "star"], // Set the pointStyle to 'circle', as the custom emoji will be drawn
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default UserJourney;
