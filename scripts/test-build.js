const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Portfolio Gallery Build...\n');

// Check if all required files exist
const requiredFiles = [
  'app/page.tsx',
  'components/Gallery.tsx',
  'lib/posts.ts',
  'tailwind.config.js',
  'package.json'
];

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    process.exit(1);
  }
});

// Check if images were generated
const imagesDir = path.join('public', 'images');
if (fs.existsSync(imagesDir)) {
  const images = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));
  console.log(`✅ Generated ${images.length} placeholder images`);
} else {
  console.log('❌ Images directory not found');
  process.exit(1);
}

// Test TypeScript compilation
console.log('\n🔧 Testing TypeScript compilation...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript compilation successful');
} catch (error) {
  console.log('❌ TypeScript compilation failed');
  process.exit(1);
}

console.log('\n🎉 All tests passed! The portfolio gallery is ready to run.');
console.log('\nTo start the development server:');
console.log('  npm run dev');
console.log('\nThen open http://localhost:3000 in your browser.');
