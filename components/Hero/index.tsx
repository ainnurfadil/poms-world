// import ApngComponent from 'react-apng';

export default function Hero() {
    return(
        <>
            <div className="w-full md:w-full bg-birunavbar py-auto bghero ">
              <img
                className="mx-auto hero__logo"
                src="./img/poms_world.png"
                alt=""
              />

              <div className="w-full h-full relative">

                {/* Bush */}
                {/* <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-1/4 h-auto absolute top-40 left-14 md:left-64 md:top-80"
                src="./img/hero/anim_bush.png"/> */}
                {/* <img
                  className="w-1/4 h-auto absolute top-40 left-14 md:left-64 md:top-80"
                  src="./img/hero/bush.png"
                  alt=""
                /> */}
                <img
                className="absolute hero__bush"
                  src="./img/hero/anim_bush.gif"
                  alt="bush animation"
                />

                {/* Tree Right */}
                {/* <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-24 md:w-60 h-auto absolute top-20 right-12 md:right-72 md:top-40"
                src="./img/hero/anim_treeRight.png"/> */}
                {/* <img
                  className="w-24 md:w-60 h-auto absolute top-20 right-12 md:right-72 md:top-40"
                  src="./img/hero/treeRight.png"
                  alt=""
                /> */}
                <img
                  className="absolute hero__tree-right"
                  src="./img/hero/anim_treeRight.gif"
                  alt=""
                />


                {/* <img
                  className=" w-2/4 h-auto mx-auto "
                  src="./img/col_05.png"
                  alt=""
                /> */}
                <img
                  className=" w-2/4 md:w-2/5 h-auto absolute left-1/2 -translate-x-1/2 md:top-0"
                  src="./img/col_04.png"
                  alt=""
                />

                {/* Tree Left Bottom */}
                {/* <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-24 md:w-80 h-auto absolute top-36 left-2 md:left-5 md:bottom-36"
                src="./img/hero/anim_treeLeftBotomCorner.png"/> */}
                {/* <img
                  className="w-24 md:w-80 h-auto absolute top-36 left-2 md:left-5 md:bottom-36"
                  src="./img/hero/treeLeftBotomCorner.png"
                  alt=""
                /> */}
                <img
                  className="absolute hero__tree-left-bottom"
                  src="./img/hero/anim_treeLeftBottomCorner.gif"
                  alt="left bottom tree"
                />


                {/* Tree Right Bottom */}
                {/* <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-25 md:w-80 h-auto absolute right-0 top-36 md:right-20 md:top-72"
                src="./img/hero/anim_treeRightBotomCorner.png"/> */}
                {/* <img
                  className="w-25 md:w-80 h-auto absolute right-0 top-36 md:right-20 md:top-72"
                  src="./img/hero/treeRightBotomCorner.png"
                  alt=""
                /> */}
                <img
                  className="absolute hero__tree-right-bottom"
                  src="./img/hero/anim_treeRightBottomCorner.gif"
                  alt="right bottom tree"
                />


                <img
                  className="absolute hero__char3"
                  src="./img/hero/char_03.png"
                  alt=""
                />


                <img
                  className="absolute hero__char4"
                  src="./img/hero/char_04.png"
                  alt=""
                />


              </div>

            </div>
        </>
    )
}