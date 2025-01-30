import Link from "next/link"
import {ArrowRight} from "lucide-react"
import { content } from "@/lib/constant"

export default function CTASection() {
    const {cta} = content
    return (
        <div className='pt-[140px] relative' id="cta">
            <div className="absolute w-full h-[80px] bottom-0 bg-gradient-to-b from-transparent  to-black"></div>
            <div className="absolute w-full h-[60px] bg-gradient-to-b from-black to-transparent"></div>
            <section className="bg-gradient-to-br from-gray-800 via-black/60 to-gray-700 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className='text-center text-3xl poppins-bold  tracking-tight text-white md:text-5xl max-w-4xl'>{cta.header}</h2>
                    <p className='text-center text-2xl inter-description mt-6 text-white/70 max-w-5xl'>{cta.description}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 poppins-bold">
                        <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition duration-150 ease-in-out shadow-lg hover:shadow-xl">
                            {cta.leftctabtn}
                            <ArrowRight className="ml-2 -mr-1 h-5 w-5"/>
                        </Link>
                        <Link href="/free-pass" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out shadow-lg hover:shadow-xl">
                            {cta.rightctabtn}
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-400 poppins-bold">{cta.discount}</p>
                </div>
            </section>
        </div>
    )
}
