import { useInView } from "@/hooks/useAnimations";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Student",
    price: "500",
    period: "/month",
    description: "Perfect for students looking to learn and improve their game.",
    features: [
      { text: "Access to 4 courts", included: true },
      { text: "Group training sessions", included: true },
      { text: "Basic equipment access", included: true },
      { text: "Monthly tournament entry", included: false },
      { text: "1-on-1 coaching", included: false },
      { text: "Video analysis", included: false },
      { text: "Priority court booking", included: false },
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Member",
    price: "1,200",
    period: "/month",
    description: "For serious players who want full club access and coaching.",
    features: [
      { text: "Access to all 8 courts", included: true },
      { text: "Group training sessions", included: true },
      { text: "Full equipment access", included: true },
      { text: "Monthly tournament entry", included: true },
      { text: "2x 1-on-1 coaching/month", included: true },
      { text: "Video analysis", included: true },
      { text: "Priority court booking", included: false },
    ],
    highlight: true,
    cta: "Join Now",
  },
  {
    name: "Premium",
    price: "2,500",
    period: "/month",
    description: "Elite membership with unlimited access and personal coaching.",
    features: [
      { text: "Access to all 8 courts", included: true },
      { text: "Unlimited training sessions", included: true },
      { text: "Full equipment access", included: true },
      { text: "All tournament entries", included: true },
      { text: "Unlimited 1-on-1 coaching", included: true },
      { text: "Advanced video analysis", included: true },
      { text: "Priority court booking", included: true },
    ],
    highlight: false,
    cta: "Go Premium",
  },
];

const MembershipSection = () => {
  const { isInView, ref } = useInView(0.1);

  return (
    <section id="membership" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            12 // Pricing
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Membership Cost
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Choose the plan that fits your goals. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 transition-all duration-500 ${
                plan.highlight
                  ? "card-dark border-primary/50 shadow-[0_0_30px_hsl(var(--primary)_/_0.1)]"
                  : "card-dark"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {plan.highlight && (
                <>
                  <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
                    Most Popular
                  </div>
                </>
              )}

              <h3 className="font-display text-xl uppercase tracking-wider mb-2 text-foreground">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">BDT</span>
                <span className={`font-display text-4xl md:text-5xl font-bold ml-1 ${plan.highlight ? "text-primary neon-text" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-muted-foreground" : "text-muted-foreground/40"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
