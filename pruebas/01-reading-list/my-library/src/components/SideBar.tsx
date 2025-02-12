import React, { useRef, useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  fetchMoreContent: () => void;
  favoriteContent: React.ReactNode[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  fetchMoreContent,
  favoriteContent,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      contentRef.current &&
      contentRef.current.scrollHeight - contentRef.current.scrollTop ===
        contentRef.current.clientHeight
    ) {
      fetchMoreContent();
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener("scroll", handleScroll);
      return () => {};
    }
  }, [handleScroll]);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full md:w-[45vw] border-r-white rounded-t-lg border-r-4 text-white bg-black shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between  text-black items-center p-4 border-b">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="页面-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Education"
              transform="translate(-816.000000, -48.000000)"
              fillRule="nonzero"
            >
              <g id="book_6_fill" transform="translate(816.000000, 48.000000)">
                <path
                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                  id="MingCute"
                  fillRule="nonzero"
                ></path>
                <path
                  d="M10.2684,20.158 C10.6312,20.3254 10.923,20.4923 11.1211,20.6153 C11.4058,20.792 11.6452,21 12.0005,21 C12.3486,21 12.5963,20.7907 12.8789,20.6153 C13.077,20.4923 13.3688,20.3254 13.7316,20.158 C14.4653,19.8193 15.4432,19.5 16.5,19.5 C17.7789,19.5 18.9375,19.9675 19.6793,20.3617 C20.198,20.6374 20.7708,20.5752 21.1937,20.342 C21.6214,20.106 22,19.6326 22,19 L22,6.5 C22,5.87876 21.7049,5.23692 21.1025,4.87097 C20.3279,4.40046 18.5863,3.5 16.5,3.5 C15.0568,3.5 13.7847,3.93067 12.8934,4.34204 C12.5386,4.50583 12.2368,4.66992 12,4.80962 C11.7632,4.66992 11.4614,4.50583 11.1066,4.34204 C10.2153,3.93067 8.94318,3.5 7.5,3.5 C5.41372,3.5 3.6721,4.40046 2.89751,4.87097 C2.29506,5.23692 2,5.87876 2,6.5 L2,19 C2,19.6326 2.37858,20.106 2.80631,20.342 C3.22918,20.5752 3.80203,20.6374 4.32073,20.3617 C5.06248,19.9675 6.22109,19.5 7.5,19.5 C8.55682,19.5 9.53474,19.8193 10.2684,20.158 Z"
                  id="路径"
                  fill="#FFFFFFFF"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h2 className="text-2xl flex gap-4 font-semibold text-white ml-[2em]">
          Mis lecturas
        </h2>

        <button
          onClick={onClose}
          className="text-white hover:bg-gradient-to-tl from-red-500 to-red-700 hover:text-white px-3 py-1 rounded-md ml-2"
        >
          X
        </button>
      </div>
      <div
        ref={contentRef}
        className="p-4 text-white"
        style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
      >
        {favoriteContent}
      </div>
    </div>
  );
};

export default Sidebar;
