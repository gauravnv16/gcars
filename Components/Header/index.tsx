import "./css/styles.css";

export const Header = () => {
  return (
    <header className="flex items-center justify-center text-center flex-col">
      <main className="flex justify-center">
        <section className="flex flex-col  justify-center p-3 rounded text-white">
          <h1 className="text-3xl">
            Best Self Drive Car Rental in Chennai - Explore Chennai with Premium
            Car Rentals
          </h1>
          <p className="text-xl my-3">
            Looking for the best self-drive car rental in Chennai? Discover
            premium car rental options to explore Chennai at your own pace
          </p>
          <section className="backdrop-blur-sm ">
            <i className="fa-solid fa-play bg-blue-500 p-4 rounded-full text-xs mx-3" />
            Steps in renting a car
          </section>
        </section>
      </main>
    </header>
  );
};
