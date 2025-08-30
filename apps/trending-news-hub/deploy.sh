#!/bin/bash

# Trending News Hub - Deployment Script
# This script helps deploy the app to various hosting platforms

echo "🔥 Trending News Hub - Deployment Script"
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
echo "1) Local Development Server (Python - Port 8002)"
echo "2) Local Development Server (Node.js - Port 8002)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🚀 Starting Python development server on port 8002..."
        echo "📱 Open http://localhost:8002 in your browser"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8002
        ;;
    2)
        echo "🚀 Starting Node.js development server on port 8002..."
        echo "📱 Open http://localhost:8002 in your browser"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        if command -v npx &> /dev/null; then
            npx serve . -p 8002
        else
            echo "❌ npx not found. Please install Node.js first."
            exit 1
        fi
        ;;
    3)
        echo "🌐 Netlify Deployment Instructions:"
        echo "1) Go to https://netlify.com"
        echo "2) Drag and drop this entire folder to the deploy area"
        echo "3) Wait for deployment to complete"
        echo "4) Your app will be live at a Netlify URL"
        echo "5) You can customize the domain later"
        echo ""
        echo "📁 Ready to deploy: $(pwd)"
        ;;
    4)
        echo "🚀 Vercel Deployment Instructions:"
        echo "1) Go to https://vercel.com"
        echo "2) Import your GitHub repository"
        echo "3) Select the trending-news-hub folder"
        echo "4) Deploy with default settings"
        echo "5) Your app will be live at a Vercel URL"
        echo ""
        echo "📁 Ready to deploy: $(pwd)"
        ;;
    5)
        echo "📚 GitHub Pages Deployment Instructions:"
        echo "1) Push your code to GitHub"
        echo "2) Go to repository Settings > Pages"
        echo "3) Select source branch (usually main)"
        echo "4) Select root folder (/)"
        echo "5) Save and wait for deployment"
        echo "6) Your app will be live at username.github.io/repository"
        echo ""
        echo "📁 Ready to deploy: $(pwd)"
        ;;
    6)
        echo "🖥️  Traditional Web Server Deployment:"
        echo "1) Upload all files to your web server"
        echo "2) Ensure index.html is in the root directory"
        echo "3) Set proper file permissions (644 for files, 755 for directories)"
        echo "4) Test your deployment"
        echo ""
        echo "📁 Files to upload:"
        ls -la
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo "📱 Your Trending News Hub should now be accessible"
echo "🔧 For support, check the README.md file" 