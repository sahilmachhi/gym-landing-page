import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { content } from "@/lib/constant"
function Footer() {
const {footer} = content
  return (
    <footer className="bg-black text-blue-100 py-12">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
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
              {footer.quickLinks.map((link) => (
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
              <p>{footer.contactInfo.address}</p>
              <p className="mt-2">
                <a href={`mailto:${footer.contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                  {footer.contactInfo.email}
                </a>
              </p>
              <p className="mt-2">
                <a href={`tel:${footer.contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                  {footer.contactInfo.phone}
                </a>
              </p>
              <p className="mt-2">{footer.contactInfo.businessHours}</p>
            </address>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">{footer.newsletter.title}</h2>
            <p className="mb-4">{footer.newsletter.description}</p>
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
              {footer.socialMedia.map((social) => (
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