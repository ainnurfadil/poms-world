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
        <section className="text-ijo bgfaq md:pt-4">

            <h1 className="text-2xl md:text-6xl font-medium text-center text-white relative z-10 px-5">
                Frequently Asked Question
            </h1>

            <div className="flex py-4 md:py-10 justify-between w-full h-full relative pb-12 lg:pb-20">

                <img
                    alt=""
                    className="w-2/5 md:w-1/5 h-auto absolute faq__tree-left"
                    src="./img/faq_tree_left.png" />

                <div className="px-5 mx-auto sm:w-4/5 md:w-3/5 z-10 md:z-0 overflow-y-auto" style={{height: '90%'}}>
                    <div className="w-full text-base md:text-2xl">
                        {questions.map((question, index) => (
                            <details className="mb-4" key={index + question.title}>
                                <summary className="font-semibold  bg-cyan-200 rounded-md py-2 px-4 ">
                                    {question.title}
                                </summary>

                                <div className="p-4 faq__answer">
                                    {question.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                <img
                    alt=""
                    className="w-2/5 md:w-1/5 h-auto absolute right-0 faq__bush-right"
                    src="./img/faq_bush_right.png" />

            </div>

        </section>
    )
}