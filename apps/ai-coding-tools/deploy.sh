#!/bin/bash

# AI Coding Tools Hub - Deployment Script
# This script helps deploy the app to various hosting platforms

echo "🚀 AI Coding Tools Hub - Deployment Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the app directory."
    exit 1
fi

echo "✅ App files found successfully"
echo ""

# Show deployment options
echo "Choose your deployment method:"
echo "1) Local Development Server (Python)"
echo "2) Local Development Server (Node.js)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🐍 Starting Python development server..."
        echo "📱 Open http://localhost:8000 in your browser"
        echo "🛑 Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8000
        ;;
    2)
        echo "📦 Starting Node.js development server..."
        echo "📱 Open http://localhost:3000 in your browser"
        echo "🛑 Press Ctrl+C to stop the server"
        echo ""
        npx serve . -p 3000
        ;;
    3)
        echo "🌐 Netlify Deployment Instructions:"
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop this entire folder to the deploy area"
        echo "3. Wait for deployment to complete"
        echo "4. Your app will be live at a Netlify URL"
        echo "5. You can customize the domain in settings"
        echo ""
        echo "✅ No build step required - static files deploy instantly!"
        ;;
    4)
        echo "⚡ Vercel Deployment Instructions:"
        echo "1. Go to https://vercel.com/"
        echo "2. Import your GitHub repository"
        echo "3. Vercel will auto-detect it's a static site"
        echo "4. Deploy with zero configuration"
        echo "5. Your app will be live globally on Vercel's edge network"
        echo ""
        echo "✅ No build step required - static files deploy instantly!"
        ;;
    5)
        echo "📚 GitHub Pages Deployment Instructions:"
        echo "1. Push your code to a GitHub repository"
        echo "2. Go to repository Settings > Pages"
        echo "3. Select 'Deploy from a branch'"
        echo "4. Choose 'main' branch and '/ (root)' folder"
        echo "5. Click Save - deployment will start automatically"
        echo ""
        echo "✅ Your app will be live at: https://username.github.io/repository-name"
        ;;
    6)
        echo "🖥️ Traditional Web Server Deployment:"
        echo "1. Upload all files to your web server"
        echo "2. Ensure index.html is in the root directory"
        echo "3. Configure your web server (Apache/Nginx)"
        echo "4. Set up your domain and SSL certificate"
        echo "5. Test your deployment"
        echo ""
        echo "✅ Works with any web server that serves static files!"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment complete! Your AI Coding Tools Hub is now live."
echo "📖 Check the README.md for more detailed instructions." 