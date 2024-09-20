import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Search, TrendingUp, Users, Zap, DollarSign } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">JobHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Find Jobs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Post a Job
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center ">
        <section className=" py-12 md:py-24 lg:py-32 xl:py-48 bg-background ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Dream Job
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Search thousands of job listings from top companies. Your next career move starts here.
                </p>
              </div>
              <div className="w-full max-w-3xl space-y-2">
                <form className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                  <Input className="w-full" placeholder="Job title or keywords" type="text" />
                  <Input className="w-full" placeholder="Location" type="text" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search Jobs
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Job Listings
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Senior Software Engineer</CardTitle>
                  <CardDescription>TechCorp Inc.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">$120,000 - $160,000</span>
                  </div>
                  <p className="text-sm">Join our team to build cutting-edge web applications using the latest technologies.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Manager</CardTitle>
                  <CardDescription>GrowthBoost Marketing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">New York, NY</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">$90,000 - $120,000</span>
                  </div>
                  <p className="text-sm">Lead our marketing efforts and drive growth for our clients across various industries.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="secondary">Digital Marketing</Badge>
                    <Badge variant="secondary">SEO</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Scientist</CardTitle>
                  <CardDescription>AI Innovations Ltd.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Remote</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">$100,000 - $140,000</span>
                  </div>
                  <p className="text-sm">Develop machine learning models and analyze complex datasets to drive business decisions.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose JobHub?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold">Fast Job Matching</h3>
                <p className="text-sm text-muted-foreground">Our AI-powered algorithm finds the perfect job matches for you in seconds.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold">Extensive Network</h3>
                <p className="text-sm text-muted-foreground">Connect with thousands of employers and millions of job seekers.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold">Career Growth</h3>
                <p className="text-sm text-muted-foreground">Access resources and tools to help you advance in your career.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Next Opportunity?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who have found their dream jobs through JobHub.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 JobHub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}