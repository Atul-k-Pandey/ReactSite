const Home = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Navbar */}
        <header className="flex items-center justify-between py-6 text-white">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl">👨‍🍳</span>
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-orange-400">Tasty</span>{" "}
                <span className="text-yellow-300">Table</span>
              </h1>
              <p className="text-xs tracking-wide text-gray-200">
                HEALTHY FOOD
              </p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-300">Menu</a>
            <a href="#" className="hover:text-orange-300">Our Story</a>
            <a href="#" className="hover:text-orange-300">Location</a>
            <a href="#" className="hover:text-orange-300">Gift Card</a>
          </nav>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="hidden md:block border border-yellow-400 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition">
              Order online
            </button>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition">
              Book a table
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20 gap-10">
          {/* Left Text */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Experience the Taste <br />
              <span className="font-semibold">of Perfection</span>
            </h2>

            <p className="mt-4 text-gray-200 max-w-md text-sm leading-relaxed">
              TastyTable offers exceptional cuisine and warm hospitality.
              Our menu blends traditional favorites with innovative dishes,
              all made with the freshest ingredients.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-500 transition">
                Order Now
              </button>
              <button className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
                Reserve table
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b"
              alt="Food"
              className="w-[320px] md:w-[420px] rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
