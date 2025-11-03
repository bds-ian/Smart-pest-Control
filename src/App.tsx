import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { 
  Bug, 
  Brain, 
  Smartphone, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Download,
  QrCode,
  Play,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Radar,
  Zap,
  Shield,
  Leaf,
  TrendingUp,
  Award,
  Target,
  Activity
} from "lucide-react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    farmName: "",
    phone: "",
    farmSize: "",
    crops: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", farmName: "", phone: "", farmSize: "", crops: "", message: "" });
  };

  const demoImages = [
    { id: 1, title: "AI Detection System", description: "Advanced AI identifying pests in real-time", url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop" },
    { id: 2, title: "Field Monitoring", description: "IoT sensors monitoring crop health across fields", url: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=1200&h=800&fit=crop" },
    { id: 3, title: "Mobile Dashboard", description: "Comprehensive mobile app for farmers", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop" },
    { id: 4, title: "Precision Treatment", description: "Targeted pest control with minimal environmental impact", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-green-600 rounded-2xl flex items-center justify-center transform rotate-45">
            <Bug className="w-6 h-6 text-white transform -rotate-45" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">
            SmartPest Control
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
          <a href="#demo" className="text-gray-700 hover:text-green-600 transition-colors">Demo</a>
          <a href="#team" className="text-gray-700 hover:text-green-600 transition-colors">Team</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
        </div>
        <Button className="bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700">
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200 animate-pulse">
          AI-Powered Pest Management
        </Badge>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-green-500 to-green-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Smart Pest Control
        </h1>
        <p className="text-2xl text-gray-700 mb-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1200">
          Intelligent pest detection and management for modern agriculture
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Combine AI, IoT sensors, and precision agriculture to protect your crops while reducing chemical usage and environmental impact.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700">
            Start Free Trial <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Watch Demo <Download className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Product Overview Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Product Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SmartPest Control leverages cutting-edge AI and IoT technology to revolutionize agricultural pest management through early detection and precision treatment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-2 border-yellow-100 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Bug className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold">The Problem</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Traditional pest control methods are reactive, imprecise, and often harmful to the environment. 
                Farmers struggle with early detection, waste resources on unnecessary treatments, and risk crop 
                losses due to late intervention.
              </p>
            </Card>
            <Card className="p-6 border-2 border-green-100 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Target Audience</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Commercial farmers, agricultural cooperatives, organic farms, greenhouse operators, and agricultural 
                consultants seeking sustainable, efficient, and cost-effective pest management solutions.
              </p>
            </Card>
            <Card className="p-6 border-2 border-lime-100 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-semibold">Our Solution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                AI-driven pest monitoring system that detects threats early, provides precision treatment recommendations, 
                reduces pesticide use by 70%, and increases crop yields while protecting the environment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video/Image Slider */}
      <section id="demo" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">See SmartPest In Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered system protects crops through real-world demonstrations
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="p-2">
            <Carousel className="w-full">
              <CarouselContent>
                {demoImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative aspect-video rounded-lg overflow-hidden group">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.description}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <Play className="mr-2" /> Watch Demo
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </Card>
        </div>
      </section>

      {/* Product Details */}
      <section id="features" className="container mx-auto px-4 py-20 bg-white rounded-3xl shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Feature Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-driven pest monitoring and precision treatment system for sustainable agriculture
          </p>
        </div>

        {/* Main Features */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Radar className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">AI Detection</h3>
                  <p className="text-sm text-gray-500">Computer vision</p>
                </div>
              </div>
              <p className="text-gray-600">
                Computer vision AI identifies pests, diseases, and beneficial insects in real-time using image recognition technology.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-600 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">IoT Sensors</h3>
                  <p className="text-sm text-gray-500">24/7 monitoring</p>
                </div>
              </div>
              <p className="text-gray-600">
                Network of smart sensors monitors environmental conditions, pest activity, and crop health 24/7 across your fields.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Predictive Analytics</h3>
                  <p className="text-sm text-gray-500">Outbreak prevention</p>
                </div>
              </div>
              <p className="text-gray-600">
                Machine learning models predict pest outbreaks before they occur, enabling proactive prevention strategies.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-600 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Precision Treatment</h3>
                  <p className="text-sm text-gray-500">70% less pesticide</p>
                </div>
              </div>
              <p className="text-gray-600">
                Targeted application recommendations reduce pesticide use by up to 70% while maintaining effective pest control.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Organic Solutions</h3>
                  <p className="text-sm text-gray-500">Sustainable farming</p>
                </div>
              </div>
              <p className="text-gray-600">
                Integration with biological control methods and organic treatment options for sustainable farming practices.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-600 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Mobile Dashboard</h3>
                  <p className="text-sm text-gray-500">Real-time alerts</p>
                </div>
              </div>
              <p className="text-gray-600">
                Comprehensive mobile app provides real-time alerts, field maps, treatment schedules, and crop health analytics.
              </p>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">How It Works</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Installation & Setup", desc: "Deploy IoT sensors and camera traps across your fields. The system calibrates to your specific crop types and local conditions." },
                { step: 2, title: "Continuous Monitoring", desc: "Sensors collect data on pest activity, crop health, weather conditions, and environmental factors in real-time." },
                { step: 3, title: "AI Analysis", desc: "Advanced AI algorithms analyze images and sensor data to identify pests, assess threat levels, and predict potential outbreaks." },
                { step: 4, title: "Smart Alerts", desc: "Receive immediate notifications on your mobile device when pest threats are detected, with location-specific information." },
                { step: 5, title: "Precision Treatment Plans", desc: "System generates targeted treatment recommendations with exact locations, timing, and recommended methods (chemical, biological, or organic)." },
                { step: 6, title: "Impact Tracking", desc: "Monitor treatment effectiveness, track pest populations over time, and analyze ROI on pest management investments." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <Card className="flex-1 p-6 bg-yellow-50 group-hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Key Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Reduce pesticide use by 70%",
              "Early pest detection prevents crop loss",
              "Save on treatment costs",
              "Increase crop yields by 15-25%",
              "Protect beneficial insects",
              "Comply with organic standards",
              "Real-time field monitoring",
              "Data-driven decision making"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Pricing Plans</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$49", unit: "/month", features: ["Up to 5 acres", "Basic AI detection", "Mobile app access", "Email support"], popular: false },
              { name: "Professional", price: "$149", unit: "/month", features: ["Up to 50 acres", "Advanced AI & analytics", "IoT sensor network", "Predictive alerts", "Priority support"], popular: true },
              { name: "Enterprise", price: "Custom", unit: "", features: ["Unlimited acres", "Custom AI models", "24/7 dedicated support", "API integration", "On-site training"], popular: false }
            ].map((plan) => (
              <Card key={plan.name} className={`p-6 border-2 ${plan.popular ? "border-green-600 relative" : ""} hover:shadow-xl transition-shadow`}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600">Best Value</Badge>}
                <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-lg text-gray-500">{plan.unit}</span></div>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-yellow-500 to-green-600" : ""}`}
                >
                  Start Trial
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experts in agricultural technology, AI, and sustainable farming practices
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Dr. Rajesh Kumar", role: "Agricultural AI Lead", initials: "RK", bio: "Expert in machine learning for agriculture", linkedin: "#" },
            { name: "Maria Gonzalez", role: "IoT Systems Engineer", initials: "MG", bio: "15+ years in smart agriculture systems", linkedin: "#" },
            { name: "Dr. Thomas Anderson", role: "Agronomist & Founder", initials: "TA", bio: "30+ years in sustainable farming practices", linkedin: "#" }
          ].map((member, i) => (
            <Card key={i} className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 group">
              <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-green-600 text-white text-xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
              <a href={member.linkedin} className="text-green-600 hover:text-green-700 inline-flex items-center gap-1">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-yellow-50 to-green-50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Farmer Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real farmers sharing their success with SmartPest Control
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              quote: "SmartPest Control saved my entire tomato crop last season. The early detection system alerted me to aphids before I could see them, allowing me to treat early and avoid major losses.",
              author: "Carlos Mendez",
              company: "Mendez Family Farm",
              rating: 5,
              role: "Farm Owner"
            },
            {
              quote: "We've reduced our pesticide costs by 65% while actually improving pest control. The precision targeting means we only treat where needed, and the AI predictions help us stay ahead of problems.",
              author: "Jennifer Lee",
              company: "Green Valley Organic Farm",
              rating: 5,
              role: "Operations Manager"
            },
            {
              quote: "The mobile app is a game-changer. I can monitor all my fields from anywhere, get instant alerts, and the treatment recommendations are spot-on. Our yields have increased by 20%.",
              author: "Ahmed Hassan",
              company: "Hassan Agriculture Co.",
              rating: 5,
              role: "Farm Director"
            },
            {
              quote: "As an organic farmer, precision treatment is crucial. SmartPest Control helps us maintain our certification while effectively managing pests. The organic treatment recommendations are excellent.",
              author: "Priya Sharma",
              company: "Sharma Organic Farms",
              rating: 5,
              role: "Farm Manager"
            }
          ].map((testimonial, i) => (
            <Card key={i} className="p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic text-lg">"{testimonial.quote}"</p>
              <Separator className="mb-4" />
              <div>
                <p className="font-semibold text-lg">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working with leading agricultural organizations to advance sustainable farming
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
          {["Agricultural Research Institute", "Precision Ag Network", "Organic Farming Alliance", "TechFarm Ventures", "Sustainable Agriculture Foundation", "Crop Science Association"].map((partner, i) => (
            <Card key={i} className="px-8 py-4 hover:shadow-lg transition-shadow cursor-pointer">
              <span className="text-gray-700 font-semibold">{partner}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-gradient-to-r from-yellow-500 to-green-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Protect Your Crops with AI</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and experience the future of sustainable pest management
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm opacity-80">
            <QrCode className="w-6 h-6" />
            <span>Scan QR code to download the mobile app</span>
          </div>
        </Card>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to protect your crops? Contact us today for a consultation or to schedule a demo.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">321 FarmTech Boulevard<br />Ames, IA 50010</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (515) 789-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@smartpest.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Youtube className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="farmName">Farm Name</Label>
                  <Input 
                    id="farmName" 
                    value={formData.farmName}
                    onChange={(e) => setFormData({...formData, farmName: e.target.value})}
                    placeholder="Farm Name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="farmSize">Farm Size</Label>
                  <Select 
                    value={formData.farmSize}
                    onValueChange={(value) => setFormData({...formData, farmSize: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1-10 acres)</SelectItem>
                      <SelectItem value="medium">Medium (11-50 acres)</SelectItem>
                      <SelectItem value="large">Large (51-200 acres)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (200+ acres)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="crops">Main Crops</Label>
                  <Select 
                    value={formData.crops}
                    onValueChange={(value) => setFormData({...formData, crops: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select crops" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="grains">Grains</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your pest management needs..."
                  className="mt-1"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-green-600">
                Send Message <ArrowRight className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-green-600 rounded-2xl flex items-center justify-center transform rotate-45">
                  <Bug className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <span className="text-xl font-bold">SmartPest Control</span>
              </div>
              <p className="text-gray-400 text-sm">Intelligent pest management for sustainable agriculture</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-4" />
          <p className="text-gray-500 text-sm text-center">© 2024 SmartPest Control. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
