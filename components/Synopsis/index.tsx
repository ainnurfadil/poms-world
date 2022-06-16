
export default function Synopsis() {
    return(
        <>
            <div className="sm:flex  w-full bgsynopsis py-16 px-20 h-auto md:h-synopsis justify-center">
              <img
                className="h-full w-full sm:w-1/5 sm:py-0 py-3 object-contain"
                src="./img/char_synopsis.png"
                alt=""
              />
              <div className="w-full sm:w-4/5 h-auto my-auto  sm:ml-8 sm:pr-12 text-ijo justify-center" >
                  <h1 className="text-4xl md:text-6xl  text-center sm:text-left" >Synopsis</h1>
                  <p className="mt-8 text-xl md:text-3xl  text-center sm:text-left" > A 12 years old boy will do whatever he can to get the girl of his dreams. For that he must find Lorax. a grumpy but charming creature who fights to protect his world.</p>
              </div>

            </div>
        </>
    )
}