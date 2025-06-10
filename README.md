# StyleWow - Your Personal  Fashion Assistant  

🌟 **Discover outfits tailored to your body shape, skin tone, occasion, and budget!**  

StyleWow is a **smart fashion recommendation engine** that helps you find the perfect outfits by analyzing your preferences and scraping real-time fashion deals from **Amazon, Myntra, and Flipkart**.  

---

## ✨ Key Features  

### **1. Personalized Outfit Recommendations**  
- **Body Shape Analysis** (Apple, Pear, Hourglass, Rectangle, Inverted Triangle)  
- **Skin Tone Matching** (Cool, Warm, Neutral undertones)  
- **Occasion-Based Filtering** (Casual, Party, Workwear, Wedding, etc.)  
- **Budget-Friendly Picks** (Set your price range: Low, Mid, High)  

### **2. AI-Powered Fashion Quiz**  
📝 Take a quick quiz to get **customized outfit suggestions** based on:  
✔ Body type  
✔ Preferred colors  
✔ Style (Boho, Classic, Edgy, etc.)  
✔ Budget range  

### **3. Real-Time Web Scraping**  
🛒 **Automatically fetches trending outfits** from:  
- **Myntra** (Trending ethnic & western wear)  
- **Amazon Fashion** (Best deals & discounts)  
- **Flipkart** (Affordable fashion picks)  

### **4. User Dashboard**  
- **Save favorite outfits** to your Wishlist  
- **View full purchase history**  
- **Edit profile & preferences**  

### **5. Mobile-Friendly & Responsive**  
📱 Works seamlessly on **desktop, tablet & mobile**.  

---

## 🚀 How It Works  

### **Step 1: Take the Style Quiz**  
🔹 Answer questions about your:  
- Body shape  
- Skin tone  
- Preferred colors  
- Occasion (Casual, Party, Work, etc.)  
- Budget range  

### **Step 2: Get Generated Recommendations**  
🤖 Our system analyzes your inputs and **scrapes Amazon, Myntra & Flipkart** to suggest outfits that:  
✅ Flatter your body shape  
✅ Match your skin tone  
✅ Fit your budget  
✅ Suit the occasion  

### **Step 3: Save & Shop!**  
❤️ **Add favorites to your Wishlist**  
🛒 **Click to buy directly** from the linked store  

---

## 🛠️ Tech Stack  

| Frontend | Backend | APIs & Scraping | Styling |
|----------|---------|-----------------|---------|
| React.js | Node.js (optional) | Axios | Tailwind CSS |
| Vite | Express (optional) | Cheerio (Web Scraping) | PostCSS |
| Context API | Firebase (Auth) | Puppeteer (Web Scraping) | CSS Modules |

---



## Project Structure

```sh
.
├── public/ 
├── src/
│   ├── assets/ 
│   ├── components/
│   │   ├── AuthForms.jsx 
│   │   ├── DashboardContent.jsx 
│   │   ├── FashionQuizForm.jsx 
│   │   ├── Footer.jsx 
│   │   ├── ForgotPassword.jsx 
│   │   ├── MobileHeader.jsx 
│   │   ├── Navbar.jsx 
│   │   ├── NavDash.jsx 
│   │   ├── ProfileContent.jsx 
│   │   ├── Sidebar.jsx 
│   │   ├── ViewFullHistory.jsx 
│   │   ├── WishlistContent.jsx 
│   ├── context/
│   │   └── AuthContext.jsx 
│   ├── pages/
│   │   ├── Homepage.jsx 
│   │   ├── UserDashbaord.jsx 
│   ├── App.jsx 
│   ├── main.jsx 
│   ├── App.css 
│   ├── index.css 
├── .env 
├── package.json 
├── tailwind.config.js 
├── postcss.config.js 
├── vite.config.js 
└── README.

```
---


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/stylewow.git
   cd stylewow

   ```

2. **Install dependencies:**
```sh 
npm install
# or
yarn install
```

3. **Configure environment variables:**

* Copy .env.example to .env and set the required API endpoints and secrets.

4. **Start the development server:**
```sh
npm run dev
# or
yarn dev
```

## 📜 License

MIT License

Copyright (c) 2025 StyleWow

Permission is hereby granted...
