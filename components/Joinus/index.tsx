// import Image from "next/image";

export default function Joinus() {
  return (
    <>
      <div className="w-full relative bgjoinus ">
        <div className="absolute inset-x-0 joinus__wrapper">

          <img
            alt="title_roadmap"
            className="mx-auto w-24 h-10 md:w-60 md:h-20"
            src="./img/title_joinus.png" />

          <div className="px-5 md:px-10">
            <div className="flex mx-auto justify-between items-center">
              <div>
                <a href="#">
                  <img
                    className="h-10 w-auto sm:h-14 lg:h-24"
                    src="./img/poms_world.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex items-center">
                <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="gallery"
                    className="drop-shadow-lg hover:drop-shadow-2xl block object-cover object-center w-auto h-6 md:h-20 px-2 md:px-8 py-0.5 md:py-3"
                    src="./img/opensea.png" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="gallery"
                    className="drop-shadow-lg hover:drop-shadow-2xl block object-cover object-center w-auto h-6 md:h-20 px-2 md:px-8 py-0.5 md:py-3 "
                    src="./img/twitter.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}