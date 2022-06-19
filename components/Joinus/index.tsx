// import Image from "next/image";

export default function Joinus() {
  return (
    <>
      <div className="w-full relative bgjoinus ">
        <div className="absolute inset-x-0 joinus__wrapper">

          <img
            alt="title_roadmap"
            className="mx-auto w-24 h-10 md:w-60 md:h-20 lg:-mt-48"
            src="./img/title_joinus.png" />

          <div className="px-5 md:px-10">
            <div className="flex mx-auto justify-between items-center">
              <div>
                <img
                  className="h-10 w-auto sm:h-14 lg:h-24"
                  src="./img/poms_world.png"
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-auto h-6 md:h-20 px-2 md:px-8 py-0.5 md:py-3"
                  src="./img/logo_codesid.png" />
                <img
                  alt="gallery"
                  className="block object-cover object-center w-auto h-6 md:h-20 px-2 md:px-8 py-0.5 md:py-3 "
                  src="./img/logo_codesid.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}