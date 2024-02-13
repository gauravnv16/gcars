import { BookingForm } from "../Forms/BookingForm";
import "./css/styles.css";

export const Header = () => {
  return (
    <header className="header flex items-center justify-center text-center flex-col">
      <main className="grid place-items-center">
        <section className="header-content flex flex-col  justify-center p-5 rounded text-white ">
          <h1 className="text-3xl">
            Best Self Drive Car Rental in Chennai - Explore Chennai with Premium
            Car Rentals
          </h1>

          <p className="text-xl my-5">
            Looking for the best self-drive car rental in Chennai? Discover
            premium car rental options to explore Chennai at your own pace
          </p>
          <section className="backdrop-blur-sm flex items-center justify-center">
            <span className="bg-blue-500 p-3 mr-2 flex justify-center rounded-full">
              <i className="fa-solid fa-play text-lg mx-3" />
            </span>
            Steps in renting a car
          </section>
        </section>
        <BookingForm />
      </main>
    </header>
  );
};
