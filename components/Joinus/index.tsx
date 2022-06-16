import Image from "next/image";

export default function Joinus() {
    return(
        <>
            <div className="h-32 md:h-joinus w-full  relative bgjoinus ">
              <div className="absolute inset-x-0 bottom-0">
              <img 
              alt="title_roadmap" 
              className="mx-auto w-24 h-10 md:w-60 md:h-20 "
              src="./img/title_joinus.png"/>
                <div className="flex w-3/5   mx-auto justify-center">
                  <img 
                  alt="gallery" 
                  className="block object-cover object-center w-auto h-6 md:h-28 px-2 md:px-8 py-0.5 md:py-3"
                  src="./img/logo_codesid.png"/>
                  <img 
                  alt="gallery" 
                  className="block object-cover object-center w-auto h-6 md:h-28 px-2 md:px-8 py-0.5 md:py-3 "
                  src="./img/logo_codesid.png"/>
                </div>
              </div>
            </div>
        </>
    )
}