

# Rentoo Web

Rentoo is a responsive car rental web application built with **React** and **Tailwind CSS**. The platform allows users to explore and book cars across multiple cities, view car details, manage bookings, and contact car agencies. The application also includes an owner dashboard for managing listed cars.

---

## Features

- **Homepage & Hero Section:** Attractive carousel with "Search & Booking" form for destinations and dates.
- **Listings Page:** Browse cars with filter options (body type, price range) and sorting functionality.
- **Car Details Page:** Detailed car information, availability check, and agency contact options.
- **User Dashboard:**
  - **My Bookings:** View and manage user bookings.
  - **Owner Dashboard:** Add, list, and manage cars.
- **Contact & Blog Pages:** Reach out to Rentoo support and read informational articles.
- **Testimonials & Featured Cars:** Display customer reviews and top cars with Swiper slider.
- **Responsive Navbar & Footer:** Navigation, search bar, and social media links.
- **React Toastify:** Notifications for user actions (e.g., booking, login).

---

## Technologies Used

- **Frontend:** React, React Router DOM, Tailwind CSS
- **State Management:** React Context API
- **Carousel:** Swiper.js
- **Icons & Assets:** Custom SVG icons and images
- **Notifications:** React Toastify

---

## How Key Pages Are Created

### 1. **Home Page**
- The **Home.jsx** page is built using several reusable components:
  - **Hero.jsx:** Displays a carousel with search form, date pickers, and destination selection.
  - **FeaturedCar.jsx:** Uses `Swiper` to showcase top cars, filtered by destination and other criteria.
  - **Testimonial.jsx:** Displays user reviews with rating stars.
  - **Blog.jsx:** Shows recent blog posts.
- **Global state** (ShopContext) is used for shared data like cart items or search states.

### 2. **Car Listing Page**
- **Listing.jsx** allows users to filter and sort cars:
  - Filters include **body type** and **price range**.
  - Sorting options are **Relevance**, **Low to High**, and **High to Low**.
  - Uses `useMemo` to efficiently filter and sort cars from `dummyCars`.
  - Search input allows users to search by **city, country, or car title**.
  - Paginated results are displayed using the **Item.jsx** component for each car.
  - 
   ![Car Listing] (https://github.com/hasnine-emon/Rentoroo/blob/main/Screenshot%202025-11-26%20120633.png?raw=true)
### 3. **Car Booking / Details Page**
- **CarDetails.jsx** shows detailed car information:
  - Displays **images**, **price**, **specs**, **features**, and **agency contact info**.
  - Users can select **Pick-Up** and **Drop-Off** dates to check availability.
  - Buttons allow contacting the agency via **email** or **phone**.
  - The page uses `useParams` from React Router to fetch the specific car by its `id`.
  - The **CarImage.jsx** component shows car images dynamically.

---



