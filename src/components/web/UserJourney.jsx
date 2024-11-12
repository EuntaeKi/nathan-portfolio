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

const emojiToCanvas = (emoji, fontSize = 32) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions based on font size
  canvas.width = fontSize * 1.5;
  canvas.height = fontSize * 1.5;

  // Draw emoji on the canvas
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, canvas.width / 2, canvas.height / 2);

  return canvas;
};

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
      <div className="grid grid-cols-11 items-center border-t-2 border-b-2 border-dashed border-web-gray py-8">
        <Header title="Emotion" />
        <div className="col-span-10">
          <div className="grid grid-cols-10 h-56">
            <EmotionSection />
          </div>
          <div className="grid grid-cols-10 gap-4 relative">
            <Emotion
              description="Excited to play a new game! Where do I find one though?"
              yPos={-60}
            />
            <Emotion
              description="Is this the one my streamer played? I can't tell."
              yPos={-30}
            />
            <Emotion
              description="Whatever the game is we will enjoy it together!"
              yPos={-70}
            />
            <Emotion
              description="This is not what I expected. What a disappointment."
              yPos={-10}
            />
            <Emotion
              description="The interface looks boring. What's the point of reviewing?"
              yPos={-10}
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

const Emotion = ({ description, yPos }) => (
  <div
    className="col-span-2 p-2 bg-gray-300 rounded-3xl text-center text-pretty relative"
    style={{ top: yPos }}
  >
    {description}
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

const EmotionSection = () => {
  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [60, 30, 70, 10, 10],
        borderColor: "#4b60c0",
        borderWidth: 6,
        pointRadius: 32,
        fill: false,
        tension: 0,
        pointStyle: [
          emojiToCanvas("🙂", 32),
          emojiToCanvas("😐", 32),
          emojiToCanvas("😊", 32),
          emojiToCanvas("😞", 32),
          emojiToCanvas("😞", 32),
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: (ctx) => {
        const chart = ctx.chart;
        const width = chart.width;
        const height = chart.height;

        // Define padding as a percentage of chart width and height
        const paddingPercentage = {
          top: 0.05,
          bottom: 0.05,
          left: 0.1,
          right: 0.1,
        };

        return {
          top: height * paddingPercentage.top,
          bottom: height * paddingPercentage.bottom,
          left: width * paddingPercentage.left,
          right: width * paddingPercentage.right,
        };
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
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

  return <Line className="col-span-auto" data={data} options={options} />;
};

export default UserJourney;
