#!/bin/bash

# College Football Hub - Deployment Script
# This script helps deploy the app to various hosting platforms

echo "🏈 College Football Hub - Deployment Script"
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
echo "1) Local Development Server (Python - Port 8004)"
echo "2) Local Development Server (Node.js - Port 8004)"
echo "3) Netlify (Drag & Drop)"
echo "4) Vercel (Import Repository)"
echo "5) GitHub Pages"
echo "6) Traditional Web Server"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting Python development server on port 8004..."
        echo "📱 Open your browser and go to: http://localhost:8004"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8004
        ;;
    2)
        echo ""
        echo "🚀 Starting Node.js development server on port 8004..."
        echo "📱 Open your browser and go to: http://localhost:8004"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        if command -v npx &> /dev/null; then
            npx http-server -p 8004
        else
            echo "❌ Error: npx not found. Please install Node.js first."
            exit 1
        fi
        ;;
    3)
        echo ""
        echo "🌐 Deploying to Netlify..."
        echo ""
        echo "📋 Steps to deploy:"
        echo "1. Go to https://app.netlify.com/"
        echo "2. Drag and drop this entire folder to the deploy area"
        echo "3. Wait for deployment to complete"
        echo "4. Your app will be available at a unique URL"
        echo ""
        echo "💡 Pro tip: You can also connect your GitHub repository for automatic deployments!"
        ;;
    4)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo ""
        echo "📋 Steps to deploy:"
        echo "1. Go to https://vercel.com/"
        echo "2. Click 'New Project'"
        echo "3. Import your GitHub repository"
        echo "4. Vercel will automatically detect it's a static site"
        echo "5. Click 'Deploy' and wait for completion"
        echo ""
        echo "💡 Pro tip: Vercel provides automatic deployments on every git push!"
        ;;
    5)
        echo ""
        echo "📚 Deploying to GitHub Pages..."
        echo ""
        echo "📋 Steps to deploy:"
        echo "1. Push your code to GitHub"
        echo "2. Go to your repository Settings"
        echo "3. Scroll down to 'Pages' section"
        echo "4. Select 'main' branch as source"
        echo "5. Choose '/ (root)' folder"
        echo "6. Click 'Save' and wait for deployment"
        echo ""
        echo "💡 Pro tip: Your app will be available at: https://yourusername.github.io/repository-name"
        ;;
    6)
        echo ""
        echo "🖥️  Deploying to Traditional Web Server..."
        echo ""
        echo "📋 Steps to deploy:"
        echo "1. Upload all files to your web server via FTP/SFTP"
        echo "2. Ensure index.html is in the root directory"
        echo "3. Set proper file permissions (644 for files, 755 for directories)"
        echo "4. Test your website at your domain"
        echo ""
        echo "💡 Pro tip: Make sure your web server supports static file hosting!"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo ""
echo "📱 Your College Football Hub is now accessible!"
echo "🏈 Go College Football! 🏈" 