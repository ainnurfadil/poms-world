import ApngComponent from 'react-apng';
import treeLeft from './img/tree_left.png';

export default function Roadmap() {
    return(
        <>
          <div className=" h-auto md:h-282 w-full bg-red-300 py-auto justify-center bgroadmap ">
              
            <img 
            alt="title_roadmap" 
            className=" mx-auto w-32 h-12 md:w-56 md:h-20 "
            src="./img/title_roadmap.png"/>

            <div className="flex py-12 md:py-32 justify-center w-full h-full relative">
              
              <ApngComponent
              autoPlay={true}
              // rate={2}
              className=" w-1/5 h-auto absolute bottom-0 left-0 md:bottom-20"
              src="./img/anim_treeLeft.png"/>

              <img 
              alt=""
              className=" w-3/5 h-auto mb-14 md:mb-32"
              src="./img/line_roadmap.png"/>

              <ApngComponent 
              alt=""
              autoPlay={true}
              // rate={2}
              className=" w-1/5 h-auto absolute bottom-0 right-0 md:bottom-20"
              src="./img/anim_treeRight.png"/>

            </div>
          </div>
        </>
    )
}