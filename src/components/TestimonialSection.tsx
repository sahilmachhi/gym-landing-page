import {AnimatedTestimonials} from "./ui/animated-testimonials";
import { content } from "@/lib/constant";

const TestimonialSection = () => {
    const {testimonial} = content;
    return (
        <>
            <div className='mt-[140px]'>
                <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                    <h2 className='text-center text-3xl poppins-bold  tracking-tight text-white md:text-5xl max-w-4xl '>{testimonial.header}</h2>
                    <p className='text-center text-2xl inter-description mt-6 text-white/70 max-w-5xl'>{testimonial.description}</p>
                    <div>
                        <AnimatedTestimonials testimonials={testimonial.testimonials}/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TestimonialSection;
