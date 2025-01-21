'use client'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent} from "@/components/ui/card"
import {MessageSquare, Phone} from 'lucide-react'
import { start } from "repl"

export default function ContactSection() {
    return (
        <div className='pt-[140px]' id="contact">
            <section className='mx-auto text-center flex items-center flex-col justify-center container px-10'>
                <h2 className='text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl'>Get in Touch with Us</h2>
                <p className='text-center text-2xl mt-6 text-white/70 max-w-5xl'>Have questions or need assistance? Reach out using the contact form, email, or phone. You can also visit us—check the map for directions. We’re here to help you start your fitness journey!</p>

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
                    {/* Left Column - Contact Cards */}
                    <div className="space-y-6">
                        {/* Call Us Card */}
                        <Card className="bg-[#6366F1] text-white border-none rounded-3xl">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-white p-2 rounded-xl">
                                    <Phone className="h-6 w-6 text-black "/>
                                    </div>
                                    <span className="font-medium">Call Us Directly At</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-6 justify-self-start">470 - 601 - 1911</h3>
                                <Button variant="secondary" className="w-full bg-[#7C7EF2] hover:bg-[#8587F3] text-white border-none rounded-3xl">
                                    Contact Us
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Chat Card */}
                        <Card className="bg-[#f2f3f5] rounded-3xl text-black">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                <div className="bg-white p-2 rounded-xl">
                                    <MessageSquare className="h-6 w-6 text-black"/>
                                    </div>
                                    <span className="font-medium">Chat With Our Team</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-6" style={
                                    {
                                        justifySelf:"start"
                                    }
                                }>email@pagedone.com</h3>
                                <Button className="w-full bg-black text-[#d0d4db] hover:text-white hover:bg-black rounded-3xl">
                                    Contact Us
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Input type="text" placeholder="Name" className="h-12 px-4 rounded-3xl border border-[#b4b6b9]"/>
                            <div className="grid grid-cols-2 gap-4">
                                <Input type="email" placeholder="Email Address" className="h-12 px-4 rounded-3xl"/>
                                <Input type="tel" placeholder="Phone Number" className="h-12 px-4 rounded-3xl"/>
                            </div>
                            <Textarea placeholder="Message Here..." className="min-h-[200px] resize-none p-4 rounded-3xl"/>
                            <Button className="w-full h-12 rounded-3xl  text-black bg-white hover:bg-white">
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
