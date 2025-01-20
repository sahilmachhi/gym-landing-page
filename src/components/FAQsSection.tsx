import { FaqSection } from "./ui/faq";

const FAQsSection = () => {
    const faqs = [
        {
            question: "What are your operating hours?",
            answer: "Our gym is open Monday to Friday from 5:00 AM to 10:00 PM and on weekends from 6:00 AM to 8:00 PM."
        }, {
            question: "Do you offer personal training sessions?",
            answer: "Yes, we have certified personal trainers available to help you achieve your fitness goals. You can book sessions tailored to your needs."
        }, {
            question: "Are there any group classes available?",
            answer: "Absolutely! We offer a variety of group classes, including yoga, HIIT, Zumba, and strength training. Check our schedule for the latest updates."
        }, {
            question: "Is there a trial membership option?",
            answer: "Yes, we offer a 7-day trial pass for new members to experience our facilities and classes before committing to a membership."
        },
    ];

    return (
        <div className='mt-[140px]'>
            <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Your Questions, Answered</h2>
                <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Find answers to the most common questions about our gym, services, and memberships. If you need more information, feel free to reach out!</p>
                <div className="mt-8 w-full">
                <FaqSection items={faqs}/>
                </div>
            </section>

        </div>
    );
};

export default FAQsSection;
