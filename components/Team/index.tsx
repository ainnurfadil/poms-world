
export default function Team() {
    return(
        <>
                <section className="bgteam w-full">
                    <img 
                    alt="title_team" 
                    className="mx-auto w-32 h-12 md:w-60 md:h-20 relative z-10"
                    src="./img/title_team.png"/>
                    <div className="flex w-3/5 pt-3 pb-2 md:py-12  lg:py-24 mx-auto">
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