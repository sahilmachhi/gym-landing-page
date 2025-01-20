import Link from "next/link"
import {ArrowRight} from "lucide-react"

export default function CTASection() {
    return (
        <div className='mt-[140px] relative'>
            <div className="absolute w-full h-[80px] bottom-0 bg-gradient-to-b from-transparent  to-black"></div>
            <div className="absolute w-full h-[60px] bg-gradient-to-b from-black to-transparent"></div>
            <section className="bg-gradient-to-br from-gray-800 via-black/60 to-gray-700 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Take the First Step Towards a Healthier You!</h2>
                    <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>
                        Ready to transform your fitness journey? Sign up today and unlock access to our world-class facilities, expert
                                  trainers, and engaging group classes. Whether you're a beginner or a fitness enthusiast, we have everything
                                  you need to reach your goals. Don't wait—start now!</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition duration-150 ease-in-out shadow-lg hover:shadow-xl">
                            Sign Up Today
                            <ArrowRight className="ml-2 -mr-1 h-5 w-5"/>
                        </Link>
                        <Link href="/free-pass" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out shadow-lg hover:shadow-xl">
                            Get Your Free Day Pass
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">Limited Time Offer: Join now and get 20% off your first month!</p>
                </div>
            </section>
        </div>
    )
}
