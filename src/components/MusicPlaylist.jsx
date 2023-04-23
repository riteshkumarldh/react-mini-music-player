import { musicData } from "../data";

const MusicPlaylist = ({ sidebar, setSidebar, curIndex, setCurIndex }) => {
  return (
    <>
      {sidebar && (
        <>
          <div
            onClick={() => setSidebar(false)}
            className="fixed top-0 left-0 w-full h-screen bg-slate-200 opacity-25 z-40"
          ></div>
        </>
      )}
      <aside
        className={`${
          sidebar ? "right-0" : "right-[-320px]"
        } transition-all duration-300 fixed right-0 top-0 max-w-xs w-full h-screen bg-slate-900 text-slate-400 z-50 overflow-y-scroll`}
      >
        <button
          className="absolute top-2 left-2 rounded hover:bg-slate-700"
          onClick={() => setSidebar(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            fill=" rgb(148 163 184)"
          >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </button>

        <div className="my-24 flex flex-col gap-10">
          {musicData.map((music, index) => {
            return (
              <button
                key={index}
                className={`${
                  curIndex === index ? "opacity-80" : null
                } flex flex-col items-center`}
                onClick={() => setCurIndex(index)}
              >
                <figure className="w-[60%] rounded-2xl overflow-hidden aspect-square ">
                  <img
                    src={music.backgroundImage}
                    alt={music.title}
                    className={`${
                      curIndex === index
                        ? "border-2 rounded-2xl border-slate-200"
                        : null
                    } w-full h-full object-cover`}
                  />
                </figure>
                <p>{music.title}</p>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default MusicPlaylist;
