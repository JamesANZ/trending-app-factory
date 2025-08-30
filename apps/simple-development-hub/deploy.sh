#!/bin/bash

# Simple Development Hub - Deployment Script
# This script helps deploy the app to various hosting platforms

echo "🚀 Simple Development Hub - Deployment Script"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the app directory."
    exit 1
fi

echo "✅ App files found successfully"
echo ""

# Show deployment options
echo "Choose your deployment method:"
echo "1) Local Development Server (Python - Port 8003)"
echo "2) Local Development Server (Node.js - Port 8003)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🚀 Starting Python development server on port 8003..."
        echo "📱 Open your browser and go to: http://localhost:8003"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8003
        ;;
    2)
        echo "🚀 Starting Node.js development server on port 8003..."
        echo "📱 Open your browser and go to: http://localhost:8003"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        npx http-server -p 8003
        ;;
    3)
        echo "🌐 Deploying to Netlify..."
        echo ""
        echo "📋 Steps:"
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop this entire folder"
        echo "3. Wait for deployment to complete"
        echo "4. Your app will be live at a Netlify URL"
        echo ""
        echo "💡 Pro tip: You can also connect your GitHub repository for automatic deployments!"
        ;;
    4)
        echo "🚀 Deploying to Vercel..."
        echo ""
        echo "📋 Steps:"
        echo "1. Go to https://vercel.com/"
        echo "2. Click 'New Project'"
        echo "3. Import your GitHub repository"
        echo "4. Vercel will automatically detect it's a static site"
        echo "5. Click 'Deploy'"
        echo ""
        echo "💡 Pro tip: Vercel provides automatic deployments on every push!"
        ;;
    5)
        echo "📚 Deploying to GitHub Pages..."
        echo ""
        echo "📋 Steps:"
        echo "1. Push your code to a GitHub repository"
        echo "2. Go to repository Settings > Pages"
        echo "3. Select 'Deploy from a branch'"
        echo "4. Choose 'main' branch and '/ (root)' folder"
        echo "5. Click 'Save'"
        echo ""
        echo "💡 Pro tip: Your app will be available at: https://username.github.io/repository-name"
        ;;
    6)
        echo "🖥️  Deploying to Traditional Web Server..."
        echo ""
        echo "📋 Steps:"
        echo "1. Upload all files to your web server"
        echo "2. Ensure index.html is in the root directory"
        echo "3. Configure your web server to serve static files"
        echo "4. Set up your domain to point to the server"
        echo ""
        echo "💡 Pro tip: Make sure your server supports HTTPS for better security!"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo ""
echo "📖 For more information, check the README.md file"
echo "🔗 Original trending article: https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/"
echo "🔥 Hacker News discussion: https://news.ycombinator.com/item?id=45068091" 