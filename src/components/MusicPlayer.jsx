import { useState, useRef, useEffect } from "react";
import { musicData } from "../data";

const MusicPlayer = ({ curIndex, setCurIndex }) => {
  const audioPlayer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [playingTime, setPlayingTime] = useState(0);
  const [bar, setBar] = useState(0);

  useEffect(() => {
    audioPlayer.current.src = musicData[curIndex].musicPath;

    setTimeout(() => {
      // total duration
      const duration = Math.floor(audioPlayer.current.duration);
      setTotalDuration(duration);
    }, 100);

    if (playing) {
      audioPlayer.current.play();
    }
  }, [curIndex, totalDuration]);

  const formatDuration = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `0${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  // playing and pausing music on button click
  const togglePlay = () => {
    if (playing) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();

      setInterval(() => {
        setPlayingTime(Math.floor(audioPlayer.current.currentTime));
        setBar(
          (Math.floor(audioPlayer.current.currentTime) /
            Math.floor(audioPlayer.current.duration)) *
            100
        );
      }, 1000);
    }
    setPlaying((prev) => !prev);
  };
  // next music on button click
  const nextMusic = () => {
    if (curIndex === musicData.length - 1) {
      setCurIndex(0);
    } else {
      setCurIndex((prev) => prev + 1);
    }
  };
  // prev music on button click
  const prevMusic = () => {
    if (curIndex === 0) {
      setCurIndex(musicData.length - 1);
    } else {
      setCurIndex((prev) => prev - 1);
    }
  };
  // handle Audio
  const handleAudio = () => {
    if (curIndex === musicData.length - 1) {
      setCurIndex(0);
      return;
    }
    setCurIndex((prev) => prev + 1);
  };

  return (
    <>
      <audio src="" ref={audioPlayer} onEnded={handleAudio}></audio>
      <main className="min-h-screen pt-24 pb-10">
        <div className="container mx-auto px-5 lg:max-w-4xl">
          <div className="grid gap-8">
            {/* song poster */}
            <figure className="w-[75%] md:w-1/2 rounded-xl overflow-hidden m-auto aspect-square">
              <img
                src={musicData[curIndex].posterUrl}
                alt={musicData[curIndex].title}
                className="h-full w-full object-cover"
              />
            </figure>

            <div className="text-slate-300 w-full">
              {/* song details */}
              <div className="text-center">
                <h1 className="font-semibold text-3xl lg:text-5xl">
                  {musicData[curIndex].title}
                </h1>
                <div className="mt-4 mb-2 font-light text-base lg:mt-8 lg:mb-3 lg:text-lg">
                  <span className="mr-2">{musicData[curIndex].album} ||</span>
                  <span>{musicData[curIndex].year}</span>
                </div>
                <p className="text-slate-400 text-base lg:text-lg">
                  {musicData[curIndex].artist}
                </p>
              </div>

              {/* controls */}
              <div className="mt-10">
                {/* range */}
                <div className="relative z-0">
                  <div className="h-2 w-full bg-slate-400 rounded cursor-pointer"></div>
                  <div
                    style={{ width: `${bar}%` }}
                    className={`absolute top-0 left-0 h-full bg-violet-700 rounded`}
                  ></div>
                </div>
                {/* timings */}
                <div className="flex justify-between mt-1 px-2">
                  <p>{playingTime ? formatDuration(playingTime) : "00:00"}</p>
                  <p>{formatDuration(totalDuration)}</p>
                </div>
                {/* all control button */}
                <div className="flex justify-around items-center mt-4">
                  {/* prev button */}
                  <button onClick={prevMusic}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36"
                      viewBox="0 96 960 960"
                      width="36"
                      fill="rgb(148 163 184)"
                      className="lg:w-10 lg:h-10"
                    >
                      <path d="M220 816V336h60v480h-60Zm520 0L394 576l346-240v480Zm-60-240Zm0 125V451L499 576l181 125Z" />
                    </svg>
                  </button>
                  {/* skip prev */}
                  <button
                    onClick={() => {
                      setPlayingTime(
                        Math.floor((audioPlayer.current.currentTime -= 5))
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 96 960 960"
                      width="30"
                      fill="rgb(148 163 184)"
                      className="lg:w-9 lg:h-9"
                    >
                      <path d="M480 976q-75 0-140.5-28T225 871q-49-49-77-114.5T120 616h60q0 125 87.5 212.5T480 916q125 0 212.5-87.5T780 616q0-125-85-212.5T485 316h-22l73 73-42 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735 361q49 49 77 114.5T840 616q0 75-28 140.5T735 871q-49 49-114.5 77T480 976ZM380 746v-50h127v-56H380V485h176v49H430v57h92q14 0 24 10t10 24v87q0 14-10 24t-24 10H380Z" />
                    </svg>
                  </button>
                  {/* play button */}
                  <button
                    className="h-20 w-20 bg-slate-300 grid place-items-center rounded-full"
                    onClick={togglePlay}
                  >
                    {!playing ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36"
                        viewBox="0 96 960 960"
                        width="36"
                        fill="black"
                        className="lg:w-10 lg:h-10"
                      >
                        <path d="M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36"
                        viewBox="0 96 960 960"
                        width="36"
                        fill="black"
                        className="lg:w-10 lg:h-10"
                      >
                        <path d="M525 856V296h235v560H525Zm-325 0V296h235v560H200Zm385-60h115V356H585v440Zm-325 0h115V356H260v440Zm0-440v440-440Zm325 0v440-440Z" />
                      </svg>
                    )}
                  </button>
                  {/* forward */}
                  <button
                    onClick={() => {
                      setPlayingTime(
                        Math.floor((audioPlayer.current.currentTime += 5))
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 96 960 960"
                      width="30"
                      fill="rgb(148 163 184)"
                      className="lg:w-9 lg:h-9"
                    >
                      <path d="M480 976q-75 0-140.5-28T225 871q-49-49-77-114.5T120 616q0-75 28-140.5T225 361q49-49 114.5-77T480 256h21l-78-78 41-41 147 147-147 147-41-41 74-74h-17q-125.357 0-212.679 87.321Q180 490.643 180 616t87.321 212.679Q354.643 916 480 916t212.679-87.321Q780 741.357 780 616h60q0 75-28 140.5T735 871q-49 49-114.5 77T480 976ZM380 746v-50h127v-56H380V485h176v49H430v57h92q14.45 0 24.225 9.775Q556 610.55 556 625v87q0 14.45-9.775 24.225Q536.45 746 522 746H380Z" />
                    </svg>
                  </button>
                  {/* next button */}
                  <button onClick={nextMusic}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36"
                      viewBox="0 96 960 960"
                      width="36"
                      fill="rgb(148 163 184)"
                      className="lg:w-10 lg:h-10"
                    >
                      <path d="M680 816V336h60v480h-60Zm-460 0V336l346 240-346 240Zm60-240Zm0 125 181-125-181-125v250Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MusicPlayer;
