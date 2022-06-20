export default function Collection() {
    return (
        <section className="text-gray-700 bgcollection w-full lg:pb-32">
            <img
                alt="title_roadmap"
                className="mx-auto w-36 h-14 md:w-60 md:h-20 "
                src="./img/title_collection.png" />
            <div className="overflow-y-auto h-auto w-full flex px-5 text-ijo lg:px-20 m-auto py-12 md:py-4 lg:pt-20 lg:pb-4">
                <img className="-ml-1 md:-ml-0 mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_01.png" alt='image1' title='image1' />
                <img className="mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_02.png" alt='image2' title='image2' />
                <img className="mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_03.png" alt='image3' title='image3' />
                <img className="mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_04.png" alt='image4' title='image4' />
                <img className="mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_05.png" alt='image5' title='image5' />
                <img className="mx-3 md:mt-0 w-full md:w-1/5" src="./img/col_06.png" alt='image6' title='image6' />
            </div>
        </section>
    )
}
