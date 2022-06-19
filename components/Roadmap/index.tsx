// import ApngComponent from 'react-apng';
// import treeLeft from './img/tree_left.png';

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
              {/* <ApngComponent
              autoPlay={true}
              // rate={2}
              className=" w-1/5 h-auto absolute bottom-0 left-0 md:bottom-20"
              src="./img/anim_treeLeft.png"/> */}
              <img
              alt="left tree animation"
              className="absolute roadmap__tree-left"
              src="./img/anim_treeLeft.gif"/>

              <img
              alt=""
              className=" w-3/5 mx-auto h-auto mb-14 md:mb-32"
              src="./img/line_roadmap.png"/>

              {/* Tree Right */}
              {/* <ApngComponent
              alt=""
              autoPlay={true}
              // rate={2}
              className=" w-1/5 h-auto absolute bottom-0 right-0 md:bottom-20"
              src="./img/anim_treeRight.png"/> */}
              <img
              alt="right tree animation"
              className="absolute roadmap__tree-right"
              src="./img/anim_treeRight.gif"/>

            </div>
          </div>
        </>
    )
}
