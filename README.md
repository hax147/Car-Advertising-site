# AutoVision - Car Showcase Website

A modern, responsive car showcase website built with HTML, CSS, and JavaScript. Features include car browsing, brand filtering, image changing, authentication, and beautiful animations.

## 🚗 Features

### ✅ **Core Functionality**
- **35 Cars Total** (7 cars per brand across 5 brands)
- **Picture Changing**: Click "🔄 Change Image" button on any car card
- **Brand Filtering**: Filter cars by brand with beautiful icons
- **Cross Button**: Clear filter button appears when any brand is selected
- **Modal Details**: Click "View Details" to see car information and price
- **Home Slideshow**: Beautiful background images that change automatically

### ✅ **Authentication System**
- **Login Page**: Email and password authentication
- **Signup Page**: User registration with validation
- **Session Management**: Login state persistence

### ✅ **Animations & UX**
- **Scroll Animations**: Cards animate in as you scroll
- **Hover Effects**: Smooth transitions and transforms
- **Modal Animations**: Slide-in/out effects
- **Loading Animations**: Staggered card appearances
- **Responsive Design**: Works on all devices

### ✅ **Brands & Cars**
- **Tesla** (7 cars): Model S, Model 3, Model X, Model Y, Cybertruck, Roadster, Semi
- **BMW** (7 cars): X5, 3 Series, 5 Series, X3, i4, M3, X7
- **Audi** (7 cars): A6, Q5, A4, e-tron, RS6, Q8, TT
- **Toyota** (7 cars): Corolla, Camry, RAV4, Highlander, Prius, Tacoma, 4Runner
- **Honda** (7 cars): Civic, Accord, CR-V, Pilot, HR-V, Passport, Ridgeline

## 📁 Folder Structure

```
project-folder/
├── index.html              # Main homepage with navigation
├── login.html              # Login page with authentication
├── signup.html             # Signup page with registration
├── README.md               # This file
├── css/
│   └── style.css           # All styling and animations
├── js/
│   └── script.js           # All JavaScript functionality
└── images/                 # Car images and slideshow
    ├── slideshow1.jpg      # Home page slideshow image 1
    ├── slideshow2.jpg      # Home page slideshow image 2
    ├── slideshow3.jpg      # Home page slideshow image 3
    ├── slideshow4.jpg      # Home page slideshow image 4
    ├── slideshow5.jpg      # Home page slideshow image 5
    ├── tesla1.jpg          # Tesla Model S
    ├── tesla2.jpg          # Tesla Model 3
    ├── tesla3.jpg          # Tesla Model X
    ├── tesla4.jpg          # Tesla Model Y
    ├── tesla5.jpg          # Tesla Cybertruck
    ├── tesla6.jpg          # Tesla Roadster
    ├── tesla7.jpg          # Tesla Semi
    ├── bmw1.jpg            # BMW X5
    ├── bmw2.jpg            # BMW 3 Series
    ├── bmw3.jpg            # BMW 5 Series
    ├── bmw4.jpg            # BMW X3
    ├── bmw5.jpg            # BMW i4
    ├── bmw6.jpg            # BMW M3
    ├── bmw7.jpg            # BMW X7
    ├── audi1.jpg           # Audi A6
    ├── audi2.jpg           # Audi Q5
    ├── audi3.jpg           # Audi A4
    ├── audi4.jpg           # Audi e-tron
    ├── audi5.jpg           # Audi RS6
    ├── audi6.jpg           # Audi Q8
    ├── audi7.jpg           # Audi TT
    ├── toyota1.jpg         # Toyota Corolla
    ├── toyota2.jpg         # Toyota Camry
    ├── toyota3.jpg         # Toyota RAV4
    ├── toyota4.jpg         # Toyota Highlander
    ├── toyota5.jpg         # Toyota Prius
    ├── toyota6.jpg         # Toyota Tacoma
    ├── toyota7.jpg         # Toyota 4Runner
    ├── honda1.jpg          # Honda Civic
    ├── honda2.jpg          # Honda Accord
    ├── honda3.jpg          # Honda CR-V
    ├── honda4.jpg          # Honda Pilot
    ├── honda5.jpg          # Honda HR-V
    ├── honda6.jpg          # Honda Passport
    ├── honda7.jpg          # Honda Ridgeline
    ├── placeholder1.jpg    # Placeholder for additional car images
    ├── placeholder2.jpg    # Placeholder for additional car images
    ├── placeholder3.jpg    # Placeholder for additional car images
    └── placeholder4.jpg    # Placeholder for additional car images
```

## 🚀 Setup Instructions

### 1. **Download/Clone the Project**
```bash
# If using Git
git clone <repository-url>
cd project-folder

# Or download and extract the ZIP file
```

### 2. **Add Images**
- Place car images in the `images/` folder
- Name them exactly as shown in the folder structure above
- For slideshow images, use high-quality car showcase photos
- For car images, use front/side view photos of each car model

### 3. **Run with Live Server**
1. Open the project in **VS Code**
2. Install the **Live Server** extension if not already installed
3. Right-click on `index.html` and select **"Open with Live Server"**
4. The website will open in your browser at `http://localhost:5500`

### 4. **Alternative: Python Server**
```bash
# Navigate to project folder
cd project-folder

# Start Python server
python -m http.server 8000

# Open browser and go to
# http://localhost:8000
```

## 🎨 Customization

### **Adding More Cars**
1. Edit `js/script.js`
2. Add new car objects to the `cars` array
3. Follow the existing format with brand, name, image, details, featured, and price

### **Changing Colors**
1. Edit `css/style.css`
2. Modify the gradient colors in the `body` background
3. Update button colors and hover effects

### **Adding More Brands**
1. Add brand buttons in `index.html`
2. Add brand filtering logic in `js/script.js`
3. Add corresponding car images

## 🔧 Technical Details

### **Technologies Used**
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Dynamic functionality and interactions
- **Local Storage**: User authentication and session management

### **Key Features**
- **Responsive Design**: Mobile-first approach
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized images and smooth animations

### **Browser Support**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Mobile Responsive

The website is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎯 User Experience

### **Home Page**
- Beautiful slideshow background
- Featured cars section
- Smooth navigation

### **Brands Page**
- Filter by brand with icons
- Clear filter functionality
- Animated card transitions

### **Car Details**
- Modal popup with car information
- Price display
- Multiple image support

### **Authentication**
- Clean login/signup forms
- Form validation
- Session persistence

## 🚀 Future Enhancements

- [ ] Backend integration for real authentication
- [ ] Database for car information
- [ ] User favorites and wishlist
- [ ] Car comparison feature
- [ ] Advanced filtering (price, year, etc.)
- [ ] Search functionality
- [ ] Admin panel for content management

---

**Created with ❤️ for car enthusiasts everywhere!** 