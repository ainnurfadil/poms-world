export default function Faq() {
    const questions = [
        {
            title: 'How Long is this site live?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },
        {
            title: 'Can I install/upload anything I want on there?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },
        {
            title: 'How can I migrate to another site?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },
        {
            title: 'Can I change the domain you give me?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },
        {
            title: 'How many sites I can create at once?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },
        {
            title: 'How can I communicate with you?',
            answer: 'Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua.'
        },

    ]
    return (
        <section className="text-ijo bgfaq h-auto md:h-faq md:pt-4">

            <h1 className="text-2xl md:text-6xl font-medium text-center text-white">
                Frequently Asked Question
            </h1>

            <div className="flex py-4 md:py-10 justify-between w-full h-full relative">

                <img
                    alt=""
                    className="w-2/5 md:w-1/5 h-auto absolute bottom-4 md:bottom-14 md:left-0"
                    src="./img/faq_tree_left.png" />

                <div className="container mx-auto w-4/5 md:w-3/5 z-10 md:z-0 h-full overflow-y-auto">

                    <div className="flex flex-wrap text-base md:text-2xl">
                        <div className="w-full px-4 py-2 ">
                            {questions.map((question, index) => (
                                <details className="mb-4" key={index+question.title}>
                                    <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4 ">
                                        {question.title}
                                    </summary>

                                    <div className="p-4">
                                        {question.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    className="w-2/5 md:w-1/5 h-auto absolute bottom-4 md:bottom-14 right-0 "
                    src="./img/faq_bush_right.png" />

            </div>

        </section>
    )
}