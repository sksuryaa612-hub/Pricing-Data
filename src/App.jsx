import "./App.css";
import PricingCard from "./components/PricingCard";
import pricingPlans from "./data/pricingData";

function App() {
  return (
    <div className="app">
      <div className="cards-container">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default App;