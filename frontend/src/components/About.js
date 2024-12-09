import React from 'react';
// import './AboutUs.css';

const AboutUs = () => {
  return (
    <div class="max-w-1000 mx-auto p-20 bg-blue-50 rounded-lg shadow-md">
      <br />
      <br />
      <h2 class="text-3xl mb-8 font-bold">About Us</h2>
      <p class="text-lg mb-8">Welcome to our book haven! We are passionate about literature and dedicated to sharing our love for books with the world. Our mission is to connect readers with captivating stories, insightful authors, and the vibrant community that surrounds the literary world.</p>
      <h3 class="text-3xl mb-4 font-bold">Our Team</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">John Doe</h4>
          <p class="text-lg mb-2">Founder & CEO</p>
          <p class="text-base">John is a passionate reader and entrepreneur who founded our bookstore with the vision of creating a welcoming space for book lovers of all kinds.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">Jane Smith</h4>
          <p class="text-lg mb-2">Head of Marketing</p>
          <p class="text-base">Jane brings her expertise in marketing and her love for literature together to spread the joy of reading to audiences far and wide.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">Emily Johnson</h4>
          <p class="text-lg mb-2">Content Manager</p>
          <p class="text-base">Emily ensures that our blog and social media channels are filled with engaging content that inspires and informs our readers.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">Michael Brown</h4>
          <p class="text-lg mb-2">Customer Support Specialist</p>
          <p class="text-base">Michael is dedicated to providing excellent customer service and helping readers find the perfect books for their interests.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">Sarah Adams</h4>
          <p class="text-lg mb-2">Graphic Designer</p>
          <p class="text-base">Sarah brings creativity and flair to our visual identity, designing eye-catching graphics and layouts for our website and promotional materials.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h4 class="text-xl mb-2">David Wilson</h4>
          <p class="text-lg mb-2">IT Specialist</p>
          <p class="text-base">David ensures that our website runs smoothly and efficiently, managing technical aspects such as server maintenance and troubleshooting.</p>
        </div>
      </div>
      <h3 class="text-3xl font-bold mb-4 mt-6">Our Mission</h3>
      <p class="text-lg">At our bookstore, we believe in the transformative power of books. Our mission is to foster a love of reading, inspire curiosity, and create meaningful connections through literature. We strive to be a trusted source for quality books, thoughtful recommendations, and enriching literary experiences for readers of all ages and backgrounds.</p>
    </div>

  );
}

export default AboutUs;
