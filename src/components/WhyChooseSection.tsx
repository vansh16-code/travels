import { Check } from "lucide-react"

export default function WhyChooseSection() {
  const reasons = [
    {
      title: "Clean & Sanitized Vehicles",
      description: "All our vehicles are thoroughly cleaned and sanitized for your safety"
    },
    {
      title: "Highly Experienced Drivers",
      description: "Professional drivers with years of experience in mountain terrain"
    },
    {
      title: "Affordable & Transparent Pricing",
      description: "No hidden charges, clear pricing with best value for money"
    },
    {
      title: "24×7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs"
    },
    {
      title: "On-Time Pickup & Drop",
      description: "Punctual service ensuring you never miss your schedule"
    },
    {
      title: "All India Permit Vehicles",
      description: "Travel anywhere across India without any restrictions"
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Dreamscape Travels?
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted travel partner committed to making every journey memorable and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
