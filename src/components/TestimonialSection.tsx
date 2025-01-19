"use client"
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const TestimonialSection = () => {
    const testimonials = [
        {
          quote: "Joining this gym was the best decision I’ve ever made. The trainers are so motivating, and the environment keeps me coming back every day!",
          name: "Jessica Brown",
          designation: "Member since 2022",
          src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          quote: "The state-of-the-art equipment and supportive community have helped me achieve fitness goals I never thought were possible.",
          name: "David Miller",
          designation: "Member since 2021",
          src: "https://unsplash.com/photos/man-in-black-shorts-running-on-street-i6zMB3yy-jE",
        },
        {
          quote: "I love the variety of classes offered here! The instructors make every session engaging and fun.",
          name: "Sophia Johnson",
          designation: "Yoga Enthusiast",
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          quote: "This gym has been life-changing. The personalized training plans and dietary guidance have helped me lose 15kg in just six months!",
          name: "Michael Lee",
          designation: "Fitness Transformation Member",
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          quote: "The community here is so welcoming. I’ve made friends who push me to do better every single day.",
          name: "Emily Davis",
          designation: "Community Member",
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ];      
    return (
        <>
            <div className='mt-[140px]'>
                <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                    <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>What Our Members Say</h2>
                    <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Hear from our members about their incredible fitness journeys, their successes, and why they love being part of our community.</p>
                    <div>
                    <AnimatedTestimonials testimonials={testimonials} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default TestimonialSection;
