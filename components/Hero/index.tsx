import ApngComponent from 'react-apng';
export default function Hero() {
    return(
        <>
            <div className=" h-130 w-full md:h-hero md:w-full bg-birunavbar py-auto bghero ">
              <img
                className="h-24 md:h-56 w-auto mx-auto"
                src="./img/poms_world.png"
                alt=""
              />
              <div className="w-full h-faq  relative">

                
                <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-1/4 h-auto absolute top-40 left-14 md:left-64 md:top-80"
                src="./img/hero/anim_bush.png"/>
                {/* <img
                  className="w-1/4 h-auto absolute top-40 left-14 md:left-64 md:top-80"
                  src="./img/hero/bush.png"
                  alt=""
                /> */}


                <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-24 md:w-60 h-auto absolute top-20 right-12 md:right-72 md:top-40"
                src="./img/hero/anim_treeRight.png"/>
                {/* <img
                  className="w-24 md:w-60 h-auto absolute top-20 right-12 md:right-72 md:top-40"
                  src="./img/hero/treeRight.png"
                  alt=""
                /> */}


                {/* <img
                  className=" w-2/4 h-auto mx-auto "
                  src="./img/col_05.png"
                  alt=""
                /> */}
                <img
                  className=" w-2/4 md:w-2/5 h-auto absolute left-25 md:left-130 md:top-0"
                  src="./img/col_04.png"
                  alt=""
                />


                <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-24 md:w-80 h-auto absolute top-36 left-2 md:left-5 md:bottom-36"
                src="./img/hero/anim_treeLeftBotomCorner.png"/>
                {/* <img
                  className="w-24 md:w-80 h-auto absolute top-36 left-2 md:left-5 md:bottom-36"
                  src="./img/hero/treeLeftBotomCorner.png"
                  alt=""
                /> */}


                
                <ApngComponent
                autoPlay={true}
                // rate={2}
                className="w-25 md:w-80 h-auto absolute right-0 top-36 md:right-20 md:top-72"
                src="./img/hero/anim_treeRightBotomCorner.png"/>
                {/* <img
                  className="w-25 md:w-80 h-auto absolute right-0 top-36 md:right-20 md:top-72"
                  src="./img/hero/treeRightBotomCorner.png"
                  alt=""
                /> */}


                <img
                  className="w-20 md:w-60 h-auto absolute top-48 right-12 md:right-64 md:top-135"
                  src="./img/hero/char_03.png"
                  alt=""
                />


                <img
                  className="w-20 md:w-60 h-auto absolute left-10 top-52 md:left-40 md:top-138"
                  src="./img/hero/char_04.png"
                  alt=""
                />
                

              </div>

            </div>
        </>
    )
}