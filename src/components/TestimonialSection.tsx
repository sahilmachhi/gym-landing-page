
import {AnimatedTestimonials} from "./ui/animated-testimonials";
import jessica from "../../public/Testimonials/Marc-Fitt-1024x1167.jpg"
import david from "../../public/Testimonials/cvlym6da6zt91.jpg"
import sophia from "../../public/Testimonials/d9f3411ad6acc46e8f9355c6c68f81cc.jpg"
import Michael from "../../public/Testimonials/fit girl.jpeg"
import Emily from "../../public/Testimonials/stvv.jpg"

const TestimonialSection = () => {
    const testimonials = [
        {
            quote: "Joining this gym was the best decision I’ve ever made. The trainers are so motivating, and the environment keeps me coming back every day!",
            name: "Jessica Brown",
            designation: "Member since 2022",
            src: jessica
        },
        {
            quote: "The state-of-the-art equipment and supportive community have helped me achieve fitness goals I never thought were possible.",
            name: "David Miller",
            designation: "Member since 2021",
            src: david
        },
        {
            quote: "I love the variety of classes offered here! The instructors make every session engaging and fun.",
            name: "Sophia Johnson",
            designation: "Yoga Enthusiast",
            src: sophia
        },
        {
            quote: "This gym has been life-changing. The personalized training plans and dietary guidance have helped me lose 15kg in just six months!",
            name: "Michael Lee",
            designation: "Fitness Transformation Member",
            src: Michael
        }, {
            quote: "The community here is so welcoming. I’ve made friends who push me to do better every single day.",
            name: "Emily Davis",
            designation: "Community Member",
            src: Emily
        },
    ];
    return (
        <>
            <div className='mt-[140px]'>
                <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                    <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>What Our Members Say</h2>
                    <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Hear from our members about their incredible fitness journeys, their successes, and why they love being part of our community.</p>
                    <div>
                        <AnimatedTestimonials testimonials={testimonials}/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TestimonialSection;
