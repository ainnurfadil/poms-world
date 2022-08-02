// import ApngComponent from 'react-apng';

export default function Roadmap() {
    return(
        <>
          <div className=" h-auto w-full bg-red-300 pt-8 md:pt-20 justify-center bgroadmap overflow-hidden">

            <img
            alt="title_roadmap"
            className=" mx-auto w-32 h-12 md:w-56 md:h-20 "
            src="./img/title_roadmap.png"/>

            <div className="flex py-12 md:pb-32 md:pt-20 justify-center w-full h-full relative">
              {/* Tree Left */}
              <video className="absolute roadmap__tree-left" muted autoPlay loop>
                <source src="./img/treeLeft.webm" type="video/webm" />
                Your browser is not supported!
              </video>

              <img
              alt=""
              className=" w-3/5 mx-auto h-auto mb-14 md:mb-32"
              src="./img/line_roadmap.png"/>

              {/* Tree Right */}
              <video className="absolute roadmap__tree-right" muted autoPlay loop>
                <source src="./img/treeRight.webm" type="video/webm" />
                Your browser is not supported!
              </video>

            </div>
          </div>
        </>
    )
}
