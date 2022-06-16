
export default function Team() {
    return(
        <>
                <section className="bgteam w-full h-64 md:h-team md:-mb-2  ">
                    <img 
                    alt="title_team" 
                    className="mx-auto w-32 h-12 md:w-60 md:h-20 "
                    src="./img/title_team.png"/>
                    <div className="flex w-3/5  py-2 md:py-24  mx-auto  ">
                        <img 
                        alt="gallery" 
                        className="block object-cover object-center w-1/2 h-auto "
                        src="./img/windows_team.png"/>
                        <img 
                        alt="gallery" 
                        className="block object-cover object-center w-1/2 h-auto "
                        src="./img/windows_team.png"/>
                    </div>
                </section>
        </>
    )
}