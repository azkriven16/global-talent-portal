"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorldMapDotted from "@/components/ui/world-map-dotted";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Globe,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const HomeSection = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute inset-0 -top-20 -z-[1]"
      >
        <WorldMapDotted />
      </motion.div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant="outline" className="mb-6">
                ✨ Global Talent Solutions
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
              <h1 className="mb-6 text-pretty text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
                Connecting the World to Opportunity
              </h1>
              <p className="mb-8 max-w-xl text-base text-muted-foreground sm:text-lg lg:text-xl">
                Find the right people. Build the right team. Globally.
              </p>

              <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild className="w-full sm:w-auto">
                  <a href={"/"}>Get Started</a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={"/"}>
                    Learn More
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center gap-4 md:mb-16">
            <Badge variant="outline" className="mb-2">
              <Sparkles className="mr-2 h-3 w-3" />
              Our Impact
            </Badge>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl">
              Trusted by Companies Worldwide
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg max-w-2xl">
              Join thousands of satisfied clients who&apos;ve found their
              perfect talent match through our platform
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                id: "stat-1",
                value: "50+",
                label: "Countries Reached",
                icon: Globe,
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconColor: "text-blue-500",
              },
              {
                id: "stat-2",
                value: "1000+",
                label: "Professionals Connected",
                icon: Rocket,
                gradient: "from-purple-500/10 to-pink-500/10",
                iconColor: "text-purple-500",
              },
              {
                id: "stat-3",
                value: "95%",
                label: "Client Satisfaction",
                icon: Sparkles,
                gradient: "from-amber-500/10 to-orange-500/10",
                iconColor: "text-amber-500",
              },
              {
                id: "stat-4",
                value: "24/7",
                label: "Support Available",
                icon: Zap,
                gradient: "from-green-500/10 to-emerald-500/10",
                iconColor: "text-green-500",
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`rounded-full bg-primary/5 p-3 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="h-1 w-12 rounded-full bg-primary/20 group-hover:w-16 group-hover:bg-primary/40 transition-all duration-300"></div>
                    </div>
                    <div className="text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                      {stat.value}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Find Your Next Great Hire With Us!
              </h2>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Global Talent Portal connects employers with top-tier talent
                across the globe. Streamline your hiring process and discover
                exceptional candidates ready to contribute to your
                company&apos;s success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-primary/20 pb-3">
                <Badge className="w-fit">Our Mission</Badge>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Empowering Growth Through Talent
                </h3>
              </div>

              <p className="text-base text-muted-foreground sm:text-lg">
                Connecting employers with exceptional talent, fostering growth,
                and driving global success through strategic staffing solutions.
                Our mission is to empower businesses by providing access to a
                diverse pool of highly skilled professionals.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    emoji: "🌐",
                    title: "Global Reach",
                    description:
                      "Access a worldwide network of talented professionals across multiple industries and skill sets, breaking down geographical barriers.",
                  },
                  {
                    emoji: "🎯",
                    title: "Precision Matching",
                    description:
                      "Our advanced matching technology connects you with candidates who align perfectly with your company culture and requirements.",
                  },
                  {
                    emoji: "⚡",
                    title: "Fast & Efficient",
                    description:
                      "Streamlined hiring process that saves you time and resources while delivering quality candidates quickly.",
                  },
                  {
                    emoji: "🤝",
                    title: "Dedicated Support",
                    description:
                      "Expert guidance throughout your hiring journey with 24/7 support to ensure your success every step of the way.",
                  },
                  {
                    emoji: "💼",
                    title: "Vetted Professionals",
                    description:
                      "All candidates undergo thorough screening and verification to ensure you're connecting with qualified, reliable talent.",
                  },
                  {
                    emoji: "📈",
                    title: "Scalable Solutions",
                    description:
                      "Whether you're hiring one specialist or building an entire team, our platform scales to meet your growing business needs.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-primary/5"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                      {item.emoji}
                    </span>
                    <div className="space-y-1">
                      <strong className="text-base font-medium sm:text-lg">
                        {item.title}
                      </strong>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Title Section */}
            <div className="mx-auto max-w-4xl space-y-4 pb-8 text-center md:pb-12">
              <Badge variant="outline" className="border-primary/30">
                <Sparkles className="mr-2 h-3 w-3" />
                FEATURES
              </Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Why Choose Global Talent Portal
              </h2>
              <p className="pt-2 text-base text-muted-foreground sm:text-lg lg:text-xl max-w-3xl mx-auto">
                Discover the powerful features that make finding and connecting
                with top talent effortless and efficient.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Feature 1 - Main Feature */}
              <Card className="group relative col-span-1 overflow-visible border border-primary/10 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 lg:col-span-2">
                <div className="absolute -right-2 top-1/2 h-20 w-1 -translate-y-1/2 transform rounded-full bg-primary/20 transition-all duration-500 group-hover:h-40 group-hover:bg-primary/40"></div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <CardContent className="relative h-full p-6 sm:p-8">
                  <div className="absolute -left-2 -top-6 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 text-primary-foreground shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-full flex-col pt-6">
                    <div className="mb-2 inline-flex">
                      <Badge variant="secondary" className="text-xs">
                        Premium
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">
                      AI-Powered Talent Matching
                    </h3>
                    <p className="mb-6 text-sm text-muted-foreground sm:text-base leading-relaxed">
                      Our advanced AI algorithms analyze thousands of data
                      points to connect you with candidates who not only have
                      the{" "}
                      <span className="font-semibold text-foreground">
                        right skills
                      </span>{" "}
                      but also fit your{" "}
                      <span className="font-semibold text-foreground">
                        company culture
                      </span>{" "}
                      perfectly.
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        01
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rotate-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl opacity-90 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110"></div>
              </Card>

              {/* Feature 2 */}
              <Card className="group relative border-0 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <CardContent className="relative h-full p-6 sm:p-8">
                  <div className="absolute -left-2 -top-6 rounded-xl bg-background p-3 text-foreground shadow-xl transition-transform group-hover:scale-110">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-full flex-col pt-6">
                    <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                      Real-Time Analytics Dashboard
                    </h3>
                    <p className="mb-6 text-sm text-primary-foreground/90 sm:text-base leading-relaxed">
                      Track your hiring pipeline with comprehensive analytics.
                      Monitor application rates, candidate quality scores, and
                      time-to-hire metrics in one powerful dashboard.
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-sm font-medium text-primary-foreground/70">
                        02
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-background opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="group relative border border-secondary/20 bg-secondary/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 hover:border-secondary/40">
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-2xl"></div>
                <CardContent className="relative h-full p-6 sm:p-8">
                  <div className="absolute -left-2 -top-6 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 p-3 text-secondary-foreground shadow-xl transition-transform group-hover:scale-110">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-full flex-col pt-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-secondary sm:text-2xl">
                      Seamless Communication Hub
                    </h3>
                    <p className="mb-6 text-sm text-muted-foreground sm:text-base leading-relaxed">
                      Built-in messaging, video interviews, and scheduling tools
                      keep all candidate interactions organized in one place.
                      Never miss a follow-up again.
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        03
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-secondary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="group relative border-0 bg-gradient-to-br from-secondary/90 to-secondary text-secondary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105">
                <div className="absolute h-full w-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <CardContent className="relative h-full p-6 sm:p-8">
                  <div className="absolute -left-2 -top-6 rounded-xl bg-background p-3 text-foreground shadow-xl transition-transform group-hover:scale-110">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-full flex-col pt-6">
                    <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                      Lightning-Fast Hiring Process
                    </h3>
                    <p className="mb-6 text-sm text-secondary-foreground/90 sm:text-base leading-relaxed">
                      Reduce your time-to-hire by up to 60% with automated
                      screening, instant notifications, and streamlined
                      workflows that eliminate bottlenecks.
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-sm font-medium text-secondary-foreground/70">
                        04
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-background opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="group relative border border-primary/10 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-primary/10 blur-2xl"></div>
                <CardContent className="relative h-full p-6 sm:p-8">
                  <div className="absolute -left-2 -top-6 rounded-xl bg-gradient-to-br from-primary/90 to-primary/70 p-3 text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-full flex-col pt-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">
                      Global Talent Pool Access
                    </h3>
                    <p className="mb-6 text-sm text-muted-foreground sm:text-base leading-relaxed">
                      Connect with qualified professionals from over 50
                      countries. Break geographical barriers and build truly
                      diverse, world-class teams.
                    </p>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        05
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl"></div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/5 opacity-50"></div>

              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>

              {/* Content */}
              <div className="relative flex flex-col items-center gap-6 px-6 py-12 text-center sm:gap-8 sm:px-12 md:py-20 lg:px-16">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-background/50 backdrop-blur-sm"
                >
                  <Sparkles className="mr-2 h-3 w-3" />
                  <span className="font-medium">Get started today</span>
                </Badge>

                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                  Ready to Transform Your Hiring?
                </h2>

                <p className="text-base text-muted-foreground sm:text-lg lg:text-xl max-w-2xl">
                  Join hundreds of companies that trust us to find their next
                  great team members. Let&apos;s build something amazing
                  together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button variant="default" size="lg" className="group" asChild>
                    <Link href="/">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="group" asChild>
                    <Link href="/">
                      Schedule a Demo
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold">
                        👤
                      </div>
                      <div className="h-8 w-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold">
                        👤
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-xs font-bold">
                        👤
                      </div>
                    </div>
                    <span className="font-medium">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="font-medium">95% Satisfaction Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Bottom glow effect */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center md:mb-16">
              <Badge variant="outline" className="mb-4">
                <span className="font-medium">FAQ</span>
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Everything you need to know about our platform and services
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent rounded-full"></div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    id: "faq-1",
                    question:
                      "What services does Global Talent Portal provide?",
                    answer:
                      "We offer comprehensive talent acquisition services including global recruitment, international staffing, talent matching, diversity recruiting, HR consulting, and career development programs.",
                    icon: Globe,
                  },
                  {
                    id: "faq-2",
                    question: "How do I get started as an employer?",
                    answer:
                      "Simply fill out our contact form indicating you're an employer, and our team will reach out to discuss your hiring needs and how we can help you find exceptional talent.",
                    icon: Rocket,
                  },
                  {
                    id: "faq-3",
                    question:
                      "Are you currently accepting job seeker applications?",
                    answer:
                      "Yes! We're building a robust network of talented professionals. Reach out through our contact form to get connected with opportunities that match your skills.",
                    icon: Sparkles,
                  },
                  {
                    id: "faq-4",
                    question: "What makes Global Talent Portal different?",
                    answer:
                      "We focus on genuine connections between employers and professionals worldwide, with an emphasis on cultural fit, skills alignment, and long-term success for both parties.",
                    icon: Zap,
                  },
                  {
                    id: "faq-5",
                    question: "Do you operate internationally?",
                    answer:
                      "Absolutely. Our platform is designed to connect talent and employers across the globe, breaking down geographical barriers to find the perfect match.",
                    icon: Globe,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm px-6 py-2 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      <AccordionTrigger className="relative cursor-pointer text-left text-base font-semibold hover:no-underline sm:text-lg md:text-xl [&[data-state=open]>div>svg:first-child]:text-primary [&[data-state=open]>div>svg:first-child]:rotate-12 [&[data-state=open]>div>svg:first-child]:scale-110">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                            <Icon className="h-5 w-5 transition-transform duration-300" />
                          </div>
                          <span className="flex-1">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="relative pl-14 text-sm text-muted-foreground sm:text-base md:text-lg">
                        <div className="pt-2 pb-2">{item.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center md:mt-16 w-full">
              <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-primary/5 px-8 py-6 backdrop-blur-sm w-full">
                <p className="text-base font-medium sm:text-lg">
                  Still have questions?
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
