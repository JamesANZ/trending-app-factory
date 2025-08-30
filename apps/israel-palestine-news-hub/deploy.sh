#!/bin/bash

# Israel-Palestine News Hub - Deployment Script
# This script provides various deployment options for the web application

echo "🕊️ Israel-Palestine News Hub - Deployment Script"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the app directory."
    exit 1
fi

echo "✅ App files found. Choose your deployment method:"
echo ""

echo "1) Local Development Server (Python - Port 8007)"
echo "2) Local Development Server (Node.js - Port 8007)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting Python HTTP server on port 8007..."
        echo "📱 Open your browser and go to: http://localhost:8007"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8007
        ;;
    2)
        echo ""
        echo "🚀 Starting Node.js HTTP server on port 8007..."
        echo "📱 Open your browser and go to: http://localhost:8007"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        npx http-server -p 8007
        ;;
    3)
        echo ""
        echo "🌐 Netlify Deployment Instructions:"
        echo "=================================="
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/Login to your account"
        echo "3. Drag and drop the entire 'israel-palestine-news-hub' folder to the deploy area"
        echo "4. Wait for deployment to complete"
        echo "5. Your app will be available at a Netlify subdomain"
        echo "6. You can set a custom domain in the site settings"
        echo ""
        echo "✅ Netlify provides:"
        echo "   - Automatic HTTPS"
        echo "   - Global CDN"
        echo "   - Continuous deployment"
        echo "   - Form handling"
        echo ""
        ;;
    4)
        echo ""
        echo "🚀 Vercel Deployment Instructions:"
        echo "================================="
        echo "1. Go to https://vercel.com"
        echo "2. Sign up/Login with your GitHub account"
        echo "3. Click 'New Project'"
        echo "4. Import your GitHub repository"
        echo "5. Set the root directory to 'apps/israel-palestine-news-hub'"
        echo "6. Deploy"
        echo ""
        echo "✅ Vercel provides:"
        echo "   - Automatic deployments"
        echo "   - Global edge network"
        echo "   - Serverless functions"
        echo "   - Analytics"
        echo ""
        ;;
    5)
        echo ""
        echo "📚 GitHub Pages Deployment Instructions:"
        echo "======================================="
        echo "1. Push your code to GitHub repository"
        echo "2. Go to repository Settings > Pages"
        echo "3. Set source to 'Deploy from a branch'"
        echo "4. Select 'main' branch and '/docs' folder"
        echo "5. Or set source to 'main' branch and root folder"
        echo "6. Your app will be available at:"
        echo "   https://[username].github.io/[repository-name]/apps/israel-palestine-news-hub/"
        echo ""
        echo "✅ GitHub Pages provides:"
        echo "   - Free hosting"
        echo "   - Automatic HTTPS"
        echo "   - Version control integration"
        echo ""
        ;;
    6)
        echo ""
        echo "🖥️  Traditional Web Server Deployment:"
        echo "====================================="
        echo "1. Upload all files to your web server"
        echo "2. Ensure the server is configured for static file serving"
        echo "3. Set up your domain and SSL certificate"
        echo "4. Configure server to serve index.html for directory requests"
        echo ""
        echo "📁 Files to upload:"
        echo "   - index.html"
        echo "   - style.css"
        echo "   - script.js"
        echo "   - All other assets"
        echo ""
        echo "🔧 Server Configuration:"
        echo "   - Enable gzip compression"
        echo "   - Set proper cache headers"
        echo "   - Configure CORS if needed"
        echo ""
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "📖 For more information, check the README.md file"
echo "🌐 Live demo: https://jamesanz.github.io/trending-app-factory/apps/israel-palestine-news-hub/"
echo ""
echo "🕊️ Thank you for using Israel-Palestine News Hub!" 