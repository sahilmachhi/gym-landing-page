import {PricingCards} from "./ui/pricingCard";


const membershipPlans = [
    {
        name: "Basic Membership",
        price: 30,
        interval: "per month",
        features: [
            "Access to all gym equipment", "Free initial fitness assessment", "Open gym hours access", "Locker room and shower access",
        ],
        description: "Beginners or casual gym-goers who want basic access.",
        cta: {
            text: "Sign Up for Basic Plan",
            href: "#"


        },
        highlight: true
    }, {
        name: "Premium Membership",
        price: 60,
        interval: "per month",
        features: [
            "Includes all Basic Membership benefits",
            "Unlimited group classes (Yoga, Zumba, HIIT, etc.)",
            "2 personal training sessions per month",
            "Access to special events and workshops",
            "Priority support and premium locker access",
        ],
        description: "Fitness enthusiasts seeking a comprehensive gym experience.",
        cta: {
            text: "Upgrade to Premium Plan",
            href: "#"
        }
    },
];

const PlansSection = () => {

    return (<div className='pt-[140px]' id="plan">
        <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
            <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Flexible Membership Plans to Suit Your Fitness Goals</h2>
            <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Choose a plan that works best for you. Whether you're just starting your fitness journey or looking to take your workouts to the next level, our membership options offer something for everyone. Enjoy transparent pricing with no hidden fees!</p>
            <PricingCards tiers={membershipPlans}/>
        </section>
    </div>);
};

export default PlansSection;
