
export default function Synopsis() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap bgsynopsis items-center justify-center md:px-8">
        <div className="w-full md:w-1/5 lg:2/5">
          <img
            className="h-full w-full object-contain section-synopsis__char"
            src="./img/char_synopsis.png"
            alt=""
          />
        </div>
        <div className="w-full sm:w-4/5 lg:w-3/5 h-auto my-auto" >
          <div className="md:pl-8 lg:pl-32 sm:pr-12 lg:pr-0 text-ijo pb-20 md:pb-0 px-5 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center md:text-left font-bold" >Synopsis</h1>
            <p className="mt-8 text-xl md:text-2xl lg:text-3xl  text-center md:text-left" > A 12 years old boy will do whatever he can to get the girl of his dreams. For that he must find Lorax. a grumpy but charming creature who fights to protect his world.</p>
          </div>
        </div>

      </div>
    </>
  )
}