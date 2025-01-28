// hero section
import WomenGym from "../../public/Hero/fd748581-3be3-4115-a8db-cce18866934e.jpg";
import ManGym from "../../public/Hero/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background.jpg";

// about section
import gymImage from "../../public/pexels-willpicturethis-1954524.jpg";

// feature section images
import personalTraining from "../../public/Features/istockphoto-1503324969-612x612.jpg";
import Classes from "../../public/Features/64a12c30d307e16231853618_group fitness class.webp";
import Strength from "../../public/Features/tacticalphysique1200x630-min.jpeg";

// image section
import imageOne from "../../public/gallary/66c718c13f75fe606893703a_gallery-image-02.jpg";
import imageTwo from "../../public/gallary/66c718c13f75fe606893703b_gallery-image-01.jpg";
import imageThree from "../../public/gallary/66c718c13f75fe606893704b_gallery-image-04.jpg";
import imageFour from "../../public/gallary/66c718c13f75fe606893704c_gallery-image-03.jpg";
// import imageFive from "../../public/gallary/66c718c13f75fe606893703a_gallery-image-06.avif";
// import imageSix from "../../public/gallary/66c718c13f75fe606893703a_gallery-image-07.avif";

// trainer images
import Priya from "../../public/GymTrainers/Personal-Trainer-Portraits.jpg";
import Michael from "../../public/GymTrainers/roles-and-responsibilities-of-a-personal-trainer-1024x683.jpg";
import Sarah from "../../public/GymTrainers/portrait-gym-trainer-using-digital-tablet_107420-30388.jpg";

// testimonails images
import jessica from "../../public/Testimonials/Marc-Fitt-1024x1167.jpg";
import david from "../../public/Testimonials/cvlym6da6zt91.jpg";
import sophia from "../../public/Testimonials/d9f3411ad6acc46e8f9355c6c68f81cc.jpg";
import Michaels from "../../public/Testimonials/fit girl.jpeg";
import Emily from "../../public/Testimonials/stvv.jpg";

// footer icons
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const content = {
  navbar: {
    navbarItems: [
      {
        href: "#home",
        text: "Home",
      },
      {
        href: "#about",
        text: "About",
      },
      {
        href: "#features",
        text: "Features",
      },
      {
        href: "#plan",
        text: "Plans",
      },
      {
        href: "#trainer",
        text: "Trainer",
      },
      {
        href: "#contact",
        text: "Contact",
      },
    ],
    mobileNavItems: [
      {
        href: "#home",
        text: "Home",
      },
      {
        href: "#about",
        text: "About",
      },
      {
        href: "#features",
        text: "Features",
      },
      {
        href: "#contact",
        text: "Contact",
      },
    ],
  },
  hero: {
    header: "Celebrate fitness goal with your mates with same",
    Highlight: "mindset",
    button: "Get Membership",
    imageSection: {
      WomenGym,
      ManGym,
    },
  },
  about: {
    header: " A Legacy of Strength and Fitness",
    description:
      "At ManOfSteel, we empower individuals to achieve their fitness goals with expert trainers, state-of-the-art equipment, and a welcoming community.",
    image: gymImage,
  },
  feature: {
    header: "Transform Your Fitness Journey with Our Exceptional Features",
    description:
      "Discover a world-class gym experience designed to cater to every fitness level. From personalized training sessions to energizing group classes and cutting-edge strength and conditioning programs, we offer everything you need to achieve your goals.",
    CardContent: [
      {
        title: "One-on-One Personal Training",
        description:
          "Achieve your fitness goals faster with personalized training programs tailored to your needs. Our certified trainers provide expert guidance and motivation to help you every step of the way.",
        image: personalTraining,
        CTA: "Book a Free Session",
      },
      {
        title: "Fun & Engaging Group Classes",
        description:
          "Join our high-energy group classes like yoga, Zumba, HIIT, and more. Work out with others, stay motivated, and make fitness a fun experience.",
        image: Classes,
        CTA: "View Class Schedule",
      },
      {
        title: "Strength & Conditioning Workouts",
        description:
          "Build muscle, increase endurance, and improve overall fitness with our cutting-edge equipment and expertly designed strength training programs.",
        image: Strength,
        CTA: "Get Started Today",
      },
    ],
  },
  plans: {
    header: "Flexible Membership Plans to Suit Your Fitness Goals",
    description:
      "Choose a plan that works best for you. Whether you're just starting your fitness journey or looking to take your workouts to the next level, our membership options offer something for everyone. Enjoy transparent pricing with no hidden fees!",
    membershipPlans: [
      {
        name: "Basic Membership",
        price: 30,
        interval: "per month",
        features: [
          "Access to all gym equipment",
          "Free initial fitness assessment",
          "Open gym hours access",
          "Locker room and shower access",
        ],
        description: "Beginners or casual gym-goers who want basic access.",
        cta: {
          text: "Sign Up for Basic Plan",
          href: "#",
        },
        highlight: true,
      },
      {
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
        description:
          "Fitness enthusiasts seeking a comprehensive gym experience.",
        cta: {
          text: "Upgrade to Premium Plan",
          href: "#",
        },
      },
    ],
  },
  trainer: {
    header: "Meet Our Expert Trainers",
    description:
      "Our team of certified trainers is dedicated to helping you achieve your fitness goals. With diverse specializations, years of experience, and a passion for health and wellness, they are here to guide, motivate, and inspire you every step of the way. Whether you’re a beginner or a seasoned athlete, our trainers provide personalized support to ensure your success.",
    trainers: [
      {
        name: "Alexander",
        specialization: "Strength Training & Weightlifting",
        certifications: [
          "Certified Strength and Conditioning Specialist (CSCS)",
          "USA Weightlifting Level 1 Coach",
        ],
        experience: "8+ years",
        quote: "I believe in building strength—inside and out.",
        image: Sarah, // Replace with actual image URL
      },
      {
        name: "Michael Lee",
        specialization:
          "High-Intensity Interval Training (HIIT) & Functional Fitness",
        certifications: [
          "Certified Personal Trainer (CPT) by NASM",
          "TRX Suspension Training Certified",
        ],
        experience: "5+ years",
        quote: "Fitness is about pushing limits and redefining possibilities.",
        image: Michael, // Replace with actual image URL
      },
      {
        name: "Priya Desai",
        specialization: "Yoga & Flexibility Training",
        certifications: [
          "Registered Yoga Teacher (RYT 200)",
          "Certified Pilates Instructor",
        ],
        experience: "6+ years",
        quote: "A strong body starts with a peaceful mind.",
        image: Priya, // Replace with actual image URL
      },
    ],
  },
  gallary: {
    header: "Explore Our World-Class Facilities",
    description:
      "Step into a space designed for your fitness journey. Our state-of-the-art gym features top-notch equipment, dynamic workout areas, comfortable locker rooms, and inspiring group classes. Take a visual tour and see how we’ve created an environment to motivate, energize, and empower you to achieve your goals.",
    image: {
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
    },
  },
  testimonial: {
    header: "What Our Members Say",
    description:
      "Hear from our members about their incredible fitness journeys, their successes, and why they love being part of our community.",
    testimonials: [
      {
        quote:
          "Joining this gym was the best decision I’ve ever made. The trainers are so motivating, and the environment keeps me coming back every day!",
        name: "Jessica Brown",
        designation: "Member since 2022",
        src: jessica,
      },
      {
        quote:
          "The state-of-the-art equipment and supportive community have helped me achieve fitness goals I never thought were possible.",
        name: "David Miller",
        designation: "Member since 2021",
        src: david,
      },
      {
        quote:
          "I love the variety of classes offered here! The instructors make every session engaging and fun.",
        name: "Sophia Johnson",
        designation: "Yoga Enthusiast",
        src: sophia,
      },
      {
        quote:
          "This gym has been life-changing. The personalized training plans and dietary guidance have helped me lose 15kg in just six months!",
        name: "Michael Lee",
        designation: "Fitness Transformation Member",
        src: Michaels,
      },
      {
        quote:
          "The community here is so welcoming. I’ve made friends who push me to do better every single day.",
        name: "Emily Davis",
        designation: "Community Member",
        src: Emily,
      },
    ],
  },
  contact: {
    header: "Get in Touch with Us",
    description:
      "Have questions or need assistance? Reach out using the contact form, email, or phone. You can also visit us—check the map for directions. We’re here to help you start your fitness journey!",
    phone: {
      phoneHeader: "Call Us Directly At",
      phoneNumber: 470 - 601 - 1911,
    },
    email: {
      emailHeader: "Chat With Our Team",
      email: "email@pagedone.com",
    },
  },
  faq: {
    header: "Frequently Asked Questions",
    description:
      "Our gym is open Monday to Friday from 5:00 AM to 10:00 PM and on weekends from 6:00 AM to 8:00 PM.",
    faqs: [
      {
        question: "What are your operating hours?",
        answer:
          "Our gym is open Monday to Friday from 5:00 AM to 10:00 PM and on weekends from 6:00 AM to 8:00 PM.",
      },
      {
        question: "Do you offer personal training sessions?",
        answer:
          "Yes, we have certified personal trainers available to help you achieve your fitness goals. You can book sessions tailored to your needs.",
      },
      {
        question: "Are there any group classes available?",
        answer:
          "Absolutely! We offer a variety of group classes, including yoga, HIIT, Zumba, and strength training. Check our schedule for the latest updates.",
      },
      {
        question: "Is there a trial membership option?",
        answer:
          "Yes, we offer a 7-day trial pass for new members to experience our facilities and classes before committing to a membership.",
      },
    ],
  },
  cta: {
    header: "Take the First Step Towards a Healthier You!",
    description:
      "Ready to transform your fitness journey? Sign up today and unlock access to our world-class facilities, expert trainers, and engaging group classes. Whether you're a beginner or a fitness enthusiast, we have everything you need to reach your goals. Don't wait—start now!",
    leftctabtn: "Sign Up Today",
    rightctabtn: "Get Your Free Day Pass",
    discount: "Limited Time Offer: Join now and get 20% off your first month!",
  },
  footer: {
    quickLinks: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Membership Plans",
        href: "/membership",
      },
      {
        name: "Classes",
        href: "/classes",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
    support: [
      {
        name: "FAQs",
        href: "/faqs",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        href: "/terms-conditions",
      },
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Feedback",
        href: "/feedback",
      },
    ],
    socialMedia: [
      {
        platform: "Facebook",
        href: "https://facebook.com/YourGym",
        icon: Facebook,
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/YourGym",
        icon: Instagram,
      },
      {
        platform: "Twitter",
        href: "https://twitter.com/YourGym",
        icon: Twitter,
      },
      {
        platform: "YouTube",
        href: "https://youtube.com/YourGym",
        icon: Youtube,
      },
    ],
    contactInfo: {
      address: "123 Fitness Street, Wellness City, Fitland 45678",
      email: "contact@yourgym.com",
      phone: "+1 (555) 123-4567",
      businessHours: "Mon - Sat: 6 AM - 9 PM | Sun: 8 AM - 5 PM",
    },
    newsletter: {
      title: "Join Our Community",
      description:
        "Subscribe to receive the latest updates, offers, and fitness tips straight to your inbox.",
    },
  },
};
