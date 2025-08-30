#!/bin/bash

echo "🚀 Chinese Web Trends Hub - Deployment Script"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the chinese-web-trends-hub directory."
    exit 1
fi

echo "✅ Found project files. Choose your deployment method:"
echo ""
echo "1) Local Development Server (Python - Port 8006)"
echo "2) Local Development Server (Node.js - Port 8006)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🐍 Starting Python HTTP Server on port 8006..."
        echo "📱 Open your browser and go to: http://localhost:8006"
        echo "🛑 Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8006
        ;;
    2)
        echo ""
        echo "🟢 Starting Node.js HTTP Server on port 8006..."
        echo "📱 Open your browser and go to: http://localhost:8006"
        echo "🛑 Press Ctrl+C to stop the server"
        echo ""
        if command -v npx &> /dev/null; then
            npx http-server -p 8006
        else
            echo "❌ Error: npx not found. Please install Node.js first."
            exit 1
        fi
        ;;
    3)
        echo ""
        echo "🌐 Netlify Deployment Instructions:"
        echo "=================================="
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop the entire chinese-web-trends-hub folder"
        echo "3. Wait for deployment to complete"
        echo "4. Your site will be available at a random URL"
        echo "5. You can customize the URL in site settings"
        echo ""
        echo "📁 Files to upload:"
        ls -la
        echo ""
        echo "✅ Ready for Netlify deployment!"
        ;;
    4)
        echo ""
        echo "▲ Vercel Deployment Instructions:"
        echo "================================"
        echo "1. Go to https://vercel.com/"
        echo "2. Click 'New Project'"
        echo "3. Import your Git repository"
        echo "4. Select the chinese-web-trends-hub directory"
        echo "5. Deploy with default settings"
        echo "6. Your site will be available immediately"
        echo ""
        echo "🔗 Repository: https://github.com/jamesanz/trending-app-factory"
        echo "📁 Directory: apps/chinese-web-trends-hub"
        echo ""
        echo "✅ Ready for Vercel deployment!"
        ;;
    5)
        echo ""
        echo "📚 GitHub Pages Deployment Instructions:"
        echo "======================================="
        echo "1. Push your changes to GitHub:"
        echo "   git add ."
        echo "   git commit -m 'Add Chinese Web Trends Hub'"
        echo "   git push origin main"
        echo ""
        echo "2. Go to repository Settings > Pages"
        echo "3. Select 'Deploy from a branch'"
        echo "4. Choose 'main' branch and '/docs' folder"
        echo "5. Click 'Save'"
        echo ""
        echo "🌐 Your site will be available at:"
        echo "   https://jamesanz.github.io/trending-app-factory/apps/chinese-web-trends-hub/"
        echo ""
        echo "✅ Ready for GitHub Pages deployment!"
        ;;
    6)
        echo ""
        echo "🖥️  Traditional Web Server Deployment:"
        echo "====================================="
        echo "1. Upload all files to your web server:"
        echo "   - index.html"
        echo "   - style.css"
        echo "   - script.js"
        echo "   - All other project files"
        echo ""
        echo "2. Ensure your server is configured for static files"
        echo "3. Set up your domain and SSL certificate"
        echo "4. Test your deployment"
        echo ""
        echo "📁 Files to upload:"
        ls -la
        echo ""
        echo "✅ Ready for traditional server deployment!"
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
echo "🔗 Live demo: https://jamesanz.github.io/trending-app-factory/apps/chinese-web-trends-hub/"
echo ""
echo "Thank you for using Chinese Web Trends Hub! 🇨🇳🚀" 