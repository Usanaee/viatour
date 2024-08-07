# Viatour

A comprehensive tourism web interface featuring both a user side and an admin panel.
<video width="1500" controls src="https://github.com/user-attachments/assets/65622f75-6d01-46fb-8009-718b3766454d" />
 ## Live View On Your Tab
Click Here For Live View: [Live Demo](https://worldtourbyviatour.vercel.app/)

## Table of Contents 📑

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contact](#contact)

## About 

Viatour is a feature-rich web application designed for the tourism industry. It includes a user-friendly interface for tourists and a powerful admin panel for managing tours, bookings, and other essential aspects of a tourism business.

<div style="display: flex; gap: 25px;">
  <img  width="45%" src="https://github.com/user-attachments/assets/d587d5a2-6318-494c-bbe9-311450ce62d5" alt="user-side" >
  <img  width="45%" src="https://github.com/user-attachments/assets/3ba24745-997c-4570-8016-e4ca04510f3e" alt="admin-view"  />
</div>

## Features 🥇

### User Side
- **Tour Listings**: Browse through various tours with detailed descriptions.
- **Booking System**: Easy and secure tour booking process.
- **Responsive Design**: Optimized for all devices, ensuring a seamless experience.
- **Interactive Maps**: View tour locations on interactive maps.

### Admin Panel
- **Tour Management**: Add, edit, and delete tour information.
- **Booking Management**: View and manage bookings.
- **User Management**: Manage user accounts and permissions.
- **Analytics Dashboard**: View statistics and insights about tours and bookings.

## Technologies Used 🛠️

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and build processes.
- **Vercel**: For deployment.

## Folder Structure 📂

```plaintext
viatour/
│
├── public/
│   │   ├── icon.png
│   │   └── ...
│   │
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── UserSide/
│   │   │   ├── Breadcrums.jsx
│   │   │   ├── BolgCard.jsx
│   │   │   └── InputFied.jsx
│   │   │   └── .......
│   │
│   ├── pages/
│   │   ├── UserSide/
│   │   │   ├── HomePage.jsx
│   │   │   ├── TourDetails.jsx
│   │   │   └── ...
│   │   │
│   │   ├── AdminPanel/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Booking.jsx
│   │   │   └── ......
│   │
│   │   ├── routes/
│   │   │   ├── App.jsx
│   │
│   │   ├── Common/
│   │   │   ├── index.js
│   │
│   │   ├── Section/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PictureGallery.jsx
│   │   │   ├── Fillter.jsx
│   │   │   ├── .....
│   │   │   ├── Fotter.jsx
│   │
│
├── .index.html
├── .gitignore
├── package.json
├── README.md
└── ...


## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/Usanaee/viatour.git
```

2. Navigate to the project directory:

```bash
  cd viatour
```

3. Install the dependencies:

```bash
   npm install
```

### Running the Project

```bash
  npm run dev
```

Open your browser and visit http://localhost:3000 to see the project in action.


## Deployment

You can deploy this project using Vercel by doing following these steps:

1. Install Vercel CLI:
```bash
  npm install -g vercel
```

2. Deploy the project:
```bash
  vercel

```


## Authors

<h1>- Repository Made By Usama Naeem 🖤</h1>


