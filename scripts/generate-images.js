const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const images = [
    { name: 'web-design-1.jpg', width: 400, height: 300, color: '#3B82F6', title: 'Modern Web Design' },
    { name: 'mobile-app-1.jpg', width: 300, height: 500, color: '#10B981', title: 'Mobile App Interface' },
    { name: 'brand-identity-1.jpg', width: 500, height: 350, color: '#F59E0B', title: 'Brand Identity System' },
    { name: 'ecommerce-1.jpg', width: 450, height: 280, color: '#EF4444', title: 'E-commerce Platform' },
    { name: 'social-media-1.jpg', width: 320, height: 320, color: '#8B5CF6', title: 'Social Media Graphics' },
    { name: 'dashboard-1.jpg', width: 600, height: 400, color: '#06B6D4', title: 'Dashboard Design' },
    { name: 'print-ad-1.jpg', width: 400, height: 600, color: '#84CC16', title: 'Print Advertisement' },
    { name: 'product-photo-1.jpg', width: 350, height: 350, color: '#F97316', title: 'Product Photography' },
    { name: 'ux-flow-1.jpg', width: 500, height: 300, color: '#EC4899', title: 'User Experience Flow' },
    { name: 'typography-1.jpg', width: 380, height: 450, color: '#6366F1', title: 'Typography Study' },
    { name: 'icon-set-1.jpg', width: 300, height: 300, color: '#14B8A6', title: 'Icon Set Design' },
    { name: 'landing-page-1.jpg', width: 450, height: 320, color: '#F43F5E', title: 'Landing Page Design' }
];

function generateImage(imageData) {
    const canvas = createCanvas(imageData.width, imageData.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = imageData.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255,255,255,0.1)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text
    ctx.fillStyle = 'white';
    ctx.font = `bold ${Math.min(canvas.width, canvas.height) / 15}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(imageData.title, canvas.width / 2, canvas.height / 2);

    // Dimensions text
    ctx.font = `${Math.min(canvas.width, canvas.height) / 25}px Arial`;
    ctx.fillText(`${canvas.width} × ${canvas.height}`, canvas.width / 2, canvas.height / 2 + 40);

    return canvas.toBuffer('image/jpeg', { quality: 0.8 });
}

// Ensure images directory exists
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate all images
images.forEach((imageData) => {
    const buffer = generateImage(imageData);
    const filePath = path.join(imagesDir, imageData.name);
    fs.writeFileSync(filePath, buffer);
    console.log(`Generated: ${imageData.name}`);
});

console.log('All placeholder images generated successfully!');
