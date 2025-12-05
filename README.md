

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

## Folder Structure

Rentoo/
├─ public/
│ └─ index.html
├─ src/
│ ├─ assets/
│ │ └─ data.js, images, icons
│ ├─ components/
│ │ ├─ Header.jsx
│ │ ├─ Footer.jsx
│ │ ├─ Hero.jsx
│ │ ├─ Navbar.jsx
│ │ ├─ FeaturedCar.jsx
│ │ ├─ Testimonial.jsx
│ │ └─ Item.jsx
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Listing.jsx
│ │ ├─ CarDetails.jsx
│ │ ├─ Blog.jsx
│ │ ├─ Contact.jsx
│ │ ├─ MyBookings.jsx
│ │ └─ owner/
│ │ ├─ Dashboard.jsx
│ │ ├─ AddCar.jsx
│ │ └─ ListCar.jsx
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
└─ package.json

