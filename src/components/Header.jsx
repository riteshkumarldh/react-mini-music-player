const Header = ({ setSidebar }) => {
  return (
    <header className="bg-slate-900 text-slate-400 h-20 fixed top-0 left-0 w-full z-0">
      <div className="container mx-auto px-5 flex justify-between items-center h-20">
        <button type="button" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            fill="rgb(148 163 184)"
          >
            <path d="M328 936H180q-24 0-42-18t-18-42V576q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480 216q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840 576v300q0 24-18 42t-42 18H632V640h148v-64q0-125.357-87.321-212.679Q605.357 276 480 276t-212.679 87.321Q180 450.643 180 576v64h148v296Zm-60-236h-88v176h88V700Zm424 0v176h88V700h-88Zm0 0h88-88Zm-424 0h-88 88Z" />
          </svg>
          <p className="text-3xl font-bold">Player</p>
        </button>

        <button type="button" onClick={() => setSidebar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            fill="rgb(148 163 184)"
          >
            <path d="M640.118 896Q591 896 556 862.441q-35-33.559-35-81.5t33.542-81.441Q588.083 666 636 666q16 0 31.5 3t30.5 10V336h182v71H758v375q0 47.5-34.382 80.75-34.383 33.25-83.5 33.25ZM120 726v-60h306v60H120Zm0-165v-60h473v60H120Zm0-165v-60h473v60H120Z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
