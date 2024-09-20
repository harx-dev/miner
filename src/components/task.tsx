import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

const features = [
  { title: "Task Management", description: "Create, assign, and track tasks with ease" },
  { title: "Team Collaboration", description: "Work together seamlessly with real-time updates" },
  { title: "Time Tracking", description: "Monitor project hours and boost productivity" },
  { title: "Reporting & Analytics", description: "Gain insights with powerful data visualization" },
]

const pricingPlans = [
  {
    name: "Basic",
    price: 9.99,
    features: ["Up to 5 team members", "100 tasks per month", "Basic reporting", "Email support"],
  },
  {
    name: "Pro",
    price: 24.99,
    features: ["Up to 20 team members", "Unlimited tasks", "Advanced reporting", "Priority support"],
  },
  {
    name: "Enterprise",
    price: 49.99,
    features: ["Unlimited team members", "Unlimited tasks", "Custom reporting", "24/7 dedicated support"],
  },
]

export default function TaskMasterLanding() {
  const [email, setEmail] = useState("")

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement sign-up logic here
    console.log("Signing up with email:", email)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TaskMaster</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Streamline Your Projects with TaskMaster</h2>
            <p className="text-xl mb-8">The all-in-one project management solution for teams of all sizes</p>
            <form onSubmit={handleSignUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-sm"
              />
              <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </form>
            <p className="mt-4 text-sm">No credit card required. 14-day free trial.</p>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">How TaskMaster Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex-1">
                <img src="/placeholder.svg?height=300&width=400" alt="TaskMaster Dashboard" className="rounded-lg shadow-lg" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-4">Intuitive Dashboard</h3>
                <p className="mb-4">Get a bird's-eye view of your projects with our user-friendly dashboard. Track progress, manage tasks, and collaborate with your team - all in one place.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    Real-time project updates
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    Customizable workflows
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    Integration with popular tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Flexible Pricing Plans</h2>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>
                          <span className="text-3xl font-bold">${plan.price}</span> / month
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">{index === 1 ? "Start Free Trial" : "Choose Plan"}</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="annual">
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>
                          <span className="text-3xl font-bold">${(plan.price * 0.8).toFixed(2)}</span> / month
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">{index === 1 ? "Start Free Trial" : "Choose Plan"}</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
            <p className="text-xl mb-8">Join thousands of teams already using TaskMaster to streamline their projects</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TaskMaster</h3>
              <p className="text-gray-400">Empowering teams to achieve more, together.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}