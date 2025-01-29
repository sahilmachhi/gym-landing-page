import { PricingCards } from "./ui/pricingCard";
import { content } from "@/lib/constant";

const PlansSection = () => {
  const { plans } = content;
  return (
    <div className="pt-[140px]" id="plan">
      <section className="mx-auto text-center flex items-center flex-col justify-center container md:px-10">
        <h2 className="text-center text-3xl font-bold  tracking-tight text-white md:text-5xl max-w-4xl">
          {plans.header}
        </h2>
        <p className="text-center text-2xl mt-6 text-white/70 max-w-5xl">
          {plans.description}
        </p>
        <PricingCards tiers={plans.membershipPlans} />
      </section>
    </div>
  );
};

export default PlansSection;
