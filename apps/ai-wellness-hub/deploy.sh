#!/bin/bash

echo "🚀 AI Wellness Hub - Deployment Script"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the ai-wellness-hub directory"
    echo "   Current directory: $(pwd)"
    echo "   Expected files: index.html, style.css, script.js"
    exit 1
fi

echo "✅ Found AI Wellness Hub files:"
ls -la *.html *.css *.js *.json *.md 2>/dev/null | head -10
echo ""

echo "Choose your deployment method:"
echo "1) Local Development Server (Python - Port 8005)"
echo "2) Local Development Server (Node.js - Port 8005)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting Python HTTP server on port 8005..."
        echo "   Open your browser and go to: http://localhost:8005"
        echo "   Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8005
        ;;
    2)
        echo ""
        echo "🚀 Starting Node.js HTTP server on port 8005..."
        echo "   Make sure you have 'http-server' installed: npm install -g http-server"
        echo "   Open your browser and go to: http://localhost:8005"
        echo "   Press Ctrl+C to stop the server"
        echo ""
        npx http-server -p 8005
        ;;
    3)
        echo ""
        echo "🌐 Netlify Deployment Instructions:"
        echo "=================================="
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop the entire ai-wellness-hub folder"
        echo "3. Wait for deployment to complete"
        echo "4. Your app will be available at: https://[random-name].netlify.app"
        echo "5. You can customize the URL in the site settings"
        echo ""
        echo "📁 Files to upload:"
        echo "   - index.html"
        echo "   - style.css"
        echo "   - script.js"
        echo "   - package.json"
        echo "   - README.md"
        echo ""
        ;;
    4)
        echo ""
        echo "🚀 Vercel Deployment Instructions:"
        echo "================================="
        echo "1. Go to https://vercel.com/"
        echo "2. Click 'New Project'"
        echo "3. Import your GitHub repository"
        echo "4. Select the ai-wellness-hub directory"
        echo "5. Deploy with default settings"
        echo "6. Your app will be available at: https://[project-name].vercel.app"
        echo ""
        ;;
    5)
        echo ""
        echo "📚 GitHub Pages Deployment Instructions:"
        echo "======================================="
        echo "1. Push your code to GitHub"
        echo "2. Go to repository Settings > Pages"
        echo "3. Select 'Deploy from a branch'"
        echo "4. Choose 'main' branch and '/docs' folder"
        echo "5. Copy the ai-wellness-hub files to a 'docs' folder"
        echo "6. Your app will be available at: https://[username].github.io/[repo-name]/"
        echo ""
        ;;
    6)
        echo ""
        echo "🖥️  Traditional Web Server Deployment:"
        echo "====================================="
        echo "1. Upload all files to your web server:"
        echo "   - index.html"
        echo "   - style.css"
        echo "   - script.js"
        echo "   - package.json"
        echo "   - README.md"
        echo ""
        echo "2. Ensure your server supports:"
        echo "   - Static file serving"
        echo "   - HTTPS (recommended)"
        echo "   - Modern browser features"
        echo ""
        echo "3. Test your deployment by visiting your domain"
        echo ""
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "🎉 AI Wellness Hub deployment completed!"
echo ""
echo "📱 App Features Available:"
echo "   - AI Wellness Tools & Apps"
echo "   - Personalized AI Wellness Plans"
echo "   - Interactive Forms & Modals"
echo "   - Responsive Design"
echo "   - Modern Animations"
echo ""
echo "🔗 Live Demo: https://jamesanz.github.io/trending-app-factory/apps/ai-wellness-hub/"
echo "📚 Documentation: README.md"
echo ""
echo "Happy coding! 🚀" 