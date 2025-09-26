"use client";

export default function VehicleColors({
  model = "t1",
  colorsPath = "/models/t1/colors",
  totalColors = 6,
  colorNames = ["rojo", "plata", "negro", "blanco", "gris", "azul"],
}) {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Colors Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tu estilo, tu color
          </h3>
          <p className="text-gray-300 text-lg">
            Explora la paleta disponible y encuentra el que conecta contigo.
          </p>
        </div>

        {/* Simple Colors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto px-8">
          {colorNames.map((colorName, index) => (
            <div key={index} className="text-center">
              <div className="relative group cursor-pointer flex flex-col items-center">
                <img
                  src={`${colorsPath}/${
                    model === "x70-plus" ? "x70-plus" : model
                  }-${colorName}.png`}
                  alt={`${model.toUpperCase()} Color ${colorName}`}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105 object-contain"
                />
                <div className="mt-2">
                  <span className="text-white text-sm font-medium capitalize">
                    {colorName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
