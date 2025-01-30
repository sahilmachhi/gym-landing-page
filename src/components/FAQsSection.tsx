import { FaqSection } from "./ui/faq";
import { content } from "@/lib/constant";

const FAQsSection = () => {
    const {faq} = content

    return (
        <div className='mt-[140px]'>
            <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                <h2 className='text-center text-3xl poppins-bold  tracking-tight text-white md:text-5xl max-w-4xl'>{faq.header}</h2>
                <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl inter-description'>{faq.description}</p>
                <div className="mt-8 w-full">
                <FaqSection items={faq.faqs}/>
                </div>
            </section>

        </div>
    );
};

export default FAQsSection;
