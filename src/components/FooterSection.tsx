import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerContent = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Membership Plans", href: "/membership" },
    { name: "Classes", href: "/classes" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Careers", href: "/careers" },
    { name: "Feedback", href: "/feedback" },
  ],
  socialMedia: [
    { platform: "Facebook", href: "https://facebook.com/YourGym", icon: Facebook },
    { platform: "Instagram", href: "https://instagram.com/YourGym", icon: Instagram },
    { platform: "Twitter", href: "https://twitter.com/YourGym", icon: Twitter },
    { platform: "YouTube", href: "https://youtube.com/YourGym", icon: Youtube },
  ],
  contactInfo: {
    address: "123 Fitness Street, Wellness City, Fitland 45678",
    email: "contact@yourgym.com",
    phone: "+1 (555) 123-4567",
    businessHours: "Mon - Sat: 6 AM - 9 PM | Sun: 8 AM - 5 PM",
  },
  newsletter: {
    title: "Join Our Community",
    description: "Subscribe to receive the latest updates, offers, and fitness tips straight to your inbox.",
  },
}

function Footer() {
  return (
    <footer className="bg-black text-blue-100 py-12">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Support</h2>
            <ul className="space-y-2">
              {footerContent.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Contact Info</h2>
            <address className="not-italic">
              <p>{footerContent.contactInfo.address}</p>
              <p className="mt-2">
                <a href={`mailto:${footerContent.contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                  {footerContent.contactInfo.email}
                </a>
              </p>
              <p className="mt-2">
                <a href={`tel:${footerContent.contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                  {footerContent.contactInfo.phone}
                </a>
              </p>
              <p className="mt-2">{footerContent.contactInfo.businessHours}</p>
            </address>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">{footerContent.newsletter.title}</h2>
            <p className="mb-4">{footerContent.newsletter.description}</p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-blue-800 text-blue-100 border-blue-700 focus:border-blue-600 placeholder-blue-400"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-wrap justify-between items-center">
            <p>&copy; {new Date().getFullYear()} YourGym. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              {footerContent.socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer