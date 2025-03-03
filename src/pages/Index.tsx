
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bell, Shield, Package, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertMap from "@/components/alert/AlertMap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-24 pb-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in">
                    Real-time Disaster Alerts and Resource Coordination
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    Monitor critical events, receive timely alerts, and coordinate disaster response efforts efficiently.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Button asChild size="lg">
                    <Link to="/alerts">
                      View Current Alerts
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link to="/resources">
                      Resource Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <AlertMap />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-float-up">
                Comprehensive Disaster Management
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg animate-float-up" style={{ animationDelay: "0.1s" }}>
                Our platform integrates critical information from multiple sources to provide
                a complete solution for disaster preparedness and response.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-float-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-panel p-6 rounded-lg animate-scale-in">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Real-time Alerts</h3>
                <p className="text-muted-foreground">
                  Immediate notifications for earthquakes, floods, hurricanes, and other critical events.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Risk Assessment</h3>
                <p className="text-muted-foreground">
                  Advanced analysis of potential threats and impact to help prioritize responses.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Resource Management</h3>
                <p className="text-muted-foreground">
                  Track and coordinate distribution of food, medical supplies, and other critical resources.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Team Coordination</h3>
                <p className="text-muted-foreground">
                  Tools for first responders, NGOs, and government agencies to collaborate effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="mx-auto lg:mx-0 lg:order-last animate-slide-left">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-secondary">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543240809-16d5a2546e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 animate-slide-right">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Making a Difference
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform has helped communities worldwide prepare for and respond to disasters.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Alerts Issued</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">120+</div>
                    <div className="text-sm text-muted-foreground">Regions Covered</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-muted-foreground">Users Protected</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">$2M+</div>
                    <div className="text-sm text-muted-foreground">Resources Coordinated</div>
                  </div>
                </div>
                
                <div className="flex">
                  <Button asChild>
                    <Link to="/about">
                      Learn More About Our Impact
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-float-up">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Improve Your Disaster Response?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join thousands of organizations already using our platform to save lives.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row animate-float-up" style={{ animationDelay: "0.1s" }}>
                <Button size="lg" variant="secondary">
                  Register Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
