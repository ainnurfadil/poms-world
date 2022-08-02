// import ApngComponent from 'react-apng';

export default function Hero() {
    return(
        <>
            <div className="w-full md:w-full bg-birunavbar py-auto bghero overflow-hidden">
              <img
                className="mx-auto hero__logo"
                src="./img/poms_world.png"
                alt=""
              />

              <div className="w-full h-full relative">
                {/* Kite */}
                <img
                  className="absolute hero__kite"
                  src="./img/hero/anim_kite.gif"
                  alt="kite animation"
                />

                {/* Bush */}
                {/* <img
                  className="w-1/4 h-auto absolute top-40 left-14 md:left-64 md:top-80"
                  src="./img/hero/bush.png"
                  alt=""
                /> */}
                <video className="absolute hero__bush" muted autoPlay loop>
                  <source src="./img/hero/bush.webm" type="video/webm" />
                  Your browser is not supported!
                </video>

                {/* Tree Right */}
                {/* <img
                  className="w-24 md:w-60 h-auto absolute top-20 right-12 md:right-72 md:top-40"
                  src="./img/hero/treeRight.png"
                  alt=""
                /> */}
                <video className="absolute hero__tree-right" muted autoPlay loop>
                  <source src="./img/hero/treeRight.webm" type="video/webm" />
                  Your browser is not supported!
                </video>


                {/* <img
                  className=" w-2/4 h-auto mx-auto "
                  src="./img/col_05.png"
                  alt=""
                /> */}
                {/* <img
                  className=" w-2/4 md:w-2/5 h-auto absolute left-1/2 -translate-x-1/2 md:top-0"
                  src="./img/col_04.png"
                  alt=""
                /> */}
                <video className="w-2/4 md:w-2/5 h-auto absolute left-1/2 -translate-x-1/2 md:top-0" muted autoPlay loop>
                  <source src="./img/hero/frontPage.webm" type="video/webm" />
                  Your browser is not supported!
                </video>


                {/* Tree Left Bottom */}
                {/* <img
                  className="w-24 md:w-80 h-auto absolute top-36 left-2 md:left-5 md:bottom-36"
                  src="./img/hero/treeLeftBotomCorner.png"
                  alt=""
                /> */}
                <video className="absolute hero__tree-left-bottom" muted autoPlay loop>
                  <source src="./img/hero/treeLeftBottomCorner.webm" type="video/webm" />
                  Your browser is not supported!
                </video>


                {/* Tree Right Bottom */}
                {/* <img
                  className="w-25 md:w-80 h-auto absolute right-0 top-36 md:right-20 md:top-72"
                  src="./img/hero/treeRightBotomCorner.png"
                  alt=""
                /> */}
                <video className="absolute hero__tree-right-bottom" muted autoPlay loop>
                  <source src="./img/hero/treeRightBottomCorner.webm" type="video/webm" />
                  Your browser is not supported!
                </video>


                {/* <img
                  className="absolute hero__char3"
                  src="./img/hero/char_03.png"
                  alt=""
                /> */}
                <video className="absolute hero__char3" muted autoPlay loop>
                  <source src="./img/hero/astronauts.webm" type="video/webm" />
                  Your browser is not supported!
                </video>

                <video className="absolute hero__detective" muted autoPlay loop>
                  <source src="./img/hero/detective.webm" type="video/webm" />
                  Your browser is not supported!
                </video>

                {/* <img
                  className="absolute hero__char4"
                  src="./img/hero/char_04.png"
                  alt=""
                /> */}
                <video className="absolute hero__char4" muted autoPlay loop>
                  <source src="./img/hero/kirby.webm" type="video/webm" />
                  Your browser is not supported!
                </video>


              </div>

            </div>
        </>
    )
}