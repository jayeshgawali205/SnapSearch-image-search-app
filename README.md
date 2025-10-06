SnapSearch: A Live Image Search App

A modern, responsive image search application built with React and Vite that allows users to search and browse photos using the Pixabay API.

--Features--

Image Search: Search for photos using keywords
Responsive Grid Layout: Beautiful 3-column grid display of images
Image Details: View photographer name, likes, downloads, and tags
Loading States: Visual feedback during API requests
Clean UI: Modern design with Tailwind CSS

--Technologies Used--

React 19.1.0 - JavaScript library for building user interfaces
Vite 7.0.5 - Next-generation frontend build tool
Tailwind CSS 4.1.11 - Utility-first CSS framework
Pixabay API - Free image and video API

--Prerequisites--
Before running this project, make sure you have:

Node.js (v18 or higher recommended)
npm or yarn package manager
Pixabay API Key (free from Pixabay)

--Installation--

1.Clone the repository
    git clone (https://github.com/jayeshgawali205/SnapSearch-image-search-app)
    cd gallary

2.Install dependencies
    npm install

3.Set up environment variables
Create a .env file in the root directory:
    VITE_PIXABAY_API_KEY=51392399-a16d77a7d40348b3eebe6ce2a

To get your API key:

Visit Pixabay API Documentation
Sign up for a free account
Copy your API key from the dashboard

4.Start the development server
    npm run dev


--How It Works--

1.Search Functionality:

User enters a search term in the search box
On form submission, the search term updates the state
useEffect hook triggers an API call to Pixabay


2.API Integration:

Fetches images from Pixabay API based on search query
Returns photo metadata including URLs, user info, and statistics
Handles loading states during API requests


3.Image Display:

Images are displayed in a responsive 3-column grid
Each card shows the image, photographer name, likes, downloads, and tags
Tags are limited to 5 per image for clean display


4.State Management:

images: Stores the array of image data from API
isLoading: Manages loading state
term: Stores the current search query


--API Reference--

This app uses the Pixabay API:
Endpoint: https://pixabay.com/api/

--Styling--
The app uses Tailwind CSS v4 with the Vite plugin for styling. 

--Live Demo  --
Click here to view the live site
(https://jayeshgawali205.github.io/SnapSearch-image-search-app/)
