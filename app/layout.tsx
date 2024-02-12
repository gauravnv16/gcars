import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCars Rentals",
  description: "Your Car Rental Company - Quality Vehicles for Hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Experience seamless and reliable car rental services in Chennai, tailored to meet your every travel need with unparalleled convenience and exceptional customer satisfaction"
        />
        <meta
          name="keywords"
          content="car rental, vehicle hire, transportation,Car rental Chennai, Chennai car hire, Rent a car Chennai, Chennai airport car rental, Self-drive cars Chennai, Luxury car rental Chennai, Cheap car rental Chennai, Affordable car hire Chennai, Premium car rental Chennai, Economy car rental Chennai, Chauffeur-driven cars Chennai, Weekend car rental Chennai, Monthly car rental Chennai, Wedding car rental Chennai, Outstation car hire Chennai, SUV rental Chennai, Sedan car rental Chennai, Hatchback rental Chennai, Van rental Chennai, Tempo Traveller rental Chennai, Corporate car rental Chennai, One-way car rental Chennai, Hourly car rental Chennai, Daily car rental Chennai, Luxury SUV rental Chennai, Airport transfer car rental Chennai, Family car rental Chennai, Group travel car rental Chennai, 7-seater car rental Chennai, 9-seater car rental Chennai, Budget car rental Chennai, Executive car rental Chennai, VIP car rental Chennai, MUV rental Chennai, Convertible car rental Chennai, Hybrid car rental Chennai, Electric car rental Chennai, Pet-friendly car rental Chennai, Long-term car rental Chennai, Short-term car rental Chennai, Sports car rental Chennai, Green car rental Chennai, Student car rental Chennai, Senior citizen car rental Chennai, Foreigner-friendly car rental Chennai, GPS-enabled car rental Chennai, Car rental with driver Chennai, GPS navigation car rental Chennai, Automatic car rental Chennai, Manual car rental Chennai, 24-hour car rental Chennai, Business trip car rental Chennai, Solo travel car rental Chennai, Airport pickup car rental Chennai, Insurance-covered car rental Chennai, GPS tracking car rental Chennai, Business class car rental Chennai, Leisure car rental Chennai, Tourist car rental Chennai, Weekend getaway car rental Chennai, Road trip car rental Chennai, Adventure car rental Chennai, Monthly subscription car rental Chennai, Film shoot car rental Chennai, Car rental app Chennai, Contactless car rental Chennai, Affordable luxury car rental Chennai, Film industry car rental Chennai, Celebrity car rental Chennai, Disabled-friendly car rental Chennai, Student discount car rental Chennai, Expatriate car rental Chennai, 24/7 emergency car rental Chennai, Destination wedding car rental Chennai, Car leasing Chennai, Self-drive wedding car rental Chennai, Family vacation car rental Chennai, Emergency car replacement Chennai, Hybrid SUV rental Chennai, Exotic car rental Chennai, Heritage car rental Chennai, Car rental loyalty program Chennai, Medical tourism car rental Chennai, Event car rental Chennai, Luxury van rental Chennai, GPS rental Chennai, Weekend special car rental Chennai, Adventure tourism car rental Chennai, Economy SUV rental Chennai, Open-top car rental Chennai, Student road trip car rental Chennai, Special occasion car rental Chennai, Test drive car rental Chennai, Urban mobility car rental Chennai, GPS tour car rental Chennai, Conference car rental Chennai, College reunion car rental Chennai, Eco-friendly car rental Chennai, Car rental for local sightseeing Chennai, Car rental for pilgrimage Chennai, Local events car rental Chennai, International tourist car rental Chennai, Corporate event car rental Chennai, City tour car rental Chennai, Historical places car rental Chennai, Car rental for business meetings Chennai, VIP event car rental Chennai, Luxury sedan car rental Chennai, Wine tour car rental Chennai, Off-road adventure car rental Chennai, Car rental for wildlife safari Chennai, Beach tour car rental Chennai, Backwater tour car rental Chennai, Honeymoon car rental Chennai, Car rental for temple visits Chennai, Educational tour car rental Chennai, Mountain tour car rental Chennai, Seaside retreat car rental Chennai, Car rental for museum visits Chennai, Car rental for art gallery visits Chennai, Nature trail car rental Chennai, Self-drive holiday car rental Chennai, Car rental for spiritual retreats Chennai, Shopping spree car rental Chennai, Adventure sports car rental Chennai, Lakeside tour car rental Chennai, Bird watching car rental Chennai, Car rental for historical monuments Chennai, City lights tour car rental Chennai, Car rental for cultural festivals Chennai, Culinary tour car rental Chennai, Car rental for music festivals Chennai, Photography tour car rental Chennai, Car rental for astronomy events Chennai, Yoga retreat car rental Chennai, Car rental for wellness retreats Chennai, Waterfront tour car rental Chennai, Desert tour car rental Chennai, Art and craft tour car rental Chennai, Car rental for literary events Chennai, Heritage tour car rental Chennai, Car rental for architectural tours Chennai, Wine and dine tour car rental Chennai, Farm visit car rental Chennai, Nature conservation tour car rental Chennai, Car rental for garden visits Chennai, Car rental for film festivals Chennai, Car rental for marathons Chennai, Adventure race car rental Chennai, Car rental for corporate retreats Chennai, Car rental for historical reenactments Chennai, Car rental for business expos Chennai, Car rental for tech conferences Chennai, Car rental for fashion shows Chennai, Car rental for food festivals Chennai, Car rental for charity events Chennai, Car rental for cultural parades Chennai, Car rental for eco-friendly events Chennai, Car rental for film premieres Chennai, Car rental for trade shows Chennai, Car rental for vintage car exhibitions Chennai, Car rental for product launches Chennai, Car rental for musical concerts Chennai, Car rental for art exhibitions Chennai, Car rental for dance performances Chennai, Car rental for comedy shows Chennai, Car rental for theater productions Chennai, Car rental for gaming events Chennai, Car rental for hackathons Chennai, Car rental for startup events Chennai, Car rental for workshops Chennai, Car rental for training sessions Chennai, Car rental for seminars Chennai, Car rental for business seminars Chennai, Car rental for academic conferences Chennai, Car rental for religious gatherings Chennai, Car rental for community events Chennai, Car rental for corporate workshops Chennai, Car rental for motivational talks Chennai, Car rental for technology seminars Chennai, Car rental for educational events Chennai, Car rental for networking events Chennai, Car rental for career fairs Chennai, Car rental for job fairs Chennai."
        />
        <meta name="author" content="Your Company Name" />
        <title>Your Car Rental Company - Quality Vehicles for Hire</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
