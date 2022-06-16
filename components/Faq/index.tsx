
export default function Faq() {
    return(
                <section className="text-ijo bgfaq h-auto md:h-faq ">
                    
                    <h1 className="text-2xl md:text-6xl font-medium text-center text-white  md:py-0">
                        Frequently Asked Question
                    </h1>

                    <div className="flex py-4 md:py-10 justify-between w-full h-full relative">
              
                    <img 
                    alt="" 
                    className="w-2/5 md:w-1/5 h-auto absolute bottom-4 md:bottom-14 md:left-0"
                    src="./img/faq_tree_left.png"/>

                    <div className="container mx-auto w-4/5 md:w-3/5 z-10 md:z-0">
                        
                        <div className="flex flex-wrap text-base md:text-2xl">
                            <div className="w-full px-4 py-2 ">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4 ">
                                    How Long is this site live?
                                    </summary>

                                    <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-cyan-200 rounded-md py-2 px-4">
                                    Can I install/upload anything I want on there?
                                    </summary>

                                    <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4">
                                    How can I migrate to another site?
                                    </summary>

                                    <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4">
                                    Can I change the domain you give me?
                                    </summary>

                                    <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4">
                                    How many sites I can create at once?
                                    </summary>

                                    <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4">
                                    How can I communicate with you?
                                    </summary>

                                    <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. 
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>

                    <img 
                    alt="" 
                    className="w-2/5 md:w-1/5 h-auto absolute bottom-4 md:bottom-14 right-0 "
                    src="./img/faq_bush_right.png"/>

                    </div>

                    
                    
                    
                   
                </section>
    )
}