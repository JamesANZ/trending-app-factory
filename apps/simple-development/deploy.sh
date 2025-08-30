#!/bin/bash

# Simple Development - Deployment Script
# This script helps deploy the app to various hosting platforms

echo "🚀 Simple Development - Deployment Script"
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
echo "1) Local Development Server (Python - Port 8001)"
echo "2) Local Development Server (Node.js - Port 8001)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🚀 Starting Python development server on port 8001..."
        echo "📱 Open http://localhost:8001 in your browser"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8001
        ;;
    2)
        echo "🚀 Starting Node.js development server on port 8001..."
        echo "📱 Open http://localhost:8001 in your browser"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        npx http-server -p 8001
        ;;
    3)
        echo "🌐 Netlify Deployment:"
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop this folder to the deploy area"
        echo "3. Wait for deployment to complete"
        echo "4. Your app will be live at a Netlify URL"
        echo ""
        echo "💡 Pro tip: You can also connect your GitHub repository for automatic deployments"
        ;;
    4)
        echo "🚀 Vercel Deployment:"
        echo "1. Go to https://vercel.com/"
        echo "2. Import your GitHub repository"
        echo "3. Vercel will automatically detect it's a static site"
        echo "4. Deploy with one click"
        echo ""
        echo "💡 Pro tip: Vercel provides automatic deployments on every push"
        ;;
    5)
        echo "📚 GitHub Pages Deployment:"
        echo "1. Push your code to GitHub"
        echo "2. Go to repository Settings > Pages"
        echo "3. Select source branch (usually main)"
        echo "4. Your app will be live at https://username.github.io/repository-name"
        echo ""
        echo "💡 Pro tip: GitHub Pages is free and integrates with your repository"
        ;;
    6)
        echo "🖥️  Traditional Web Server:"
        echo "1. Upload all files to your web server's public directory"
        echo "2. Ensure index.html is in the root directory"
        echo "3. Set proper file permissions (644 for files, 755 for directories)"
        echo "4. Your app will be live at your domain"
        echo ""
        echo "💡 Pro tip: Use rsync for efficient file transfers:"
        echo "   rsync -avz --delete ./ user@server:/path/to/web/root/"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment instructions completed!"
echo ""
echo "📖 For more detailed instructions, check the README.md file"
echo "🔗 Original Hacker News discussion: https://news.ycombinator.com/item?id=45068091"
echo ""
echo "Remember: Do the simplest thing that could possibly work! 🚀" 