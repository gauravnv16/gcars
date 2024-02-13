export const BookingForm = () => {
  return (
    <article className="bg-white p-1 rounded-full flex items-center booking-form justify-center">
      <span className="booking-form-heading-main flex justify-between w-full p-4 px-6">
        <h4 className="booking-form-heading text-sm text-left  uppercase ">
          Plan your trip
        </h4>
        <i className="fa-solid fa-map-marked-alt text-2xl map" />
      </span>
      <form
        className="flex w-full text-left text-gray-800 m-2 items-center"
        style={{
          flexWrap: "wrap",
        }}
      >
        <LocationInput title="PICK-UP LOCATION" name="from" />
        <DatePicker title="PICK-UP DATE" name="pickup" />
        <LocationInput title="DROP-OFF LOCATION" name="to" />
        <DatePicker title="DROP-OFF DATE" name="dropoff" />
        <button className="bg-blue-500 text-white p-2 px-5 rounded-full mt-3">
          Search
        </button>
      </form>
    </article>
  );
};

function LocationInput(props: { title: string; name: string }) {
  return (
    <section className="booking-form-section-main flex flex-col text-left text-gray-800 m-2">
      <h5 className="text-xs px-3"> {props.title}</h5>
      <section className="border p-2 px-3 rounded-full booking-form-input">
        <i className="fa-solid fa-map-marker-alt mr-2" />
        <input
          type="text"
          placeholder="City, Airport, Station, etc"
          className="text-xs focus:outline-none"
          name={props.name}
        />
      </section>
    </section>
  );
}

function DatePicker(props: { title: string; name: string }) {
  return (
    <section className="booking-form-section-main flex flex-col text-left text-gray-800 m-2">
      <h5 className="text-xs px-3">{props.title}</h5>
      <section className="border p-2 px-3 rounded-full booking-form-input">
        <i className="fa-solid fa-calendar-day mr-2" />
        <input
          type="date"
          className="text-xs focus:outline-none datepicker-autohide"
          name={props.name}
        />
      </section>
    </section>
  );
}
