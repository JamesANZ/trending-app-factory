#!/bin/bash

# College Football Weekend Hub - Deployment Script
# This script provides multiple deployment options for the College Football Weekend Hub

echo "🏈 College Football Weekend Hub - Deployment Options"
echo "=================================================="
echo ""

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to start local development server
start_local_server() {
    echo "Starting local development server..."
    
    if command_exists python3; then
        echo "Using Python 3 HTTP server on port 8008..."
        python3 -m http.server 8008 &
        echo "✅ Server started! Open http://localhost:8008 in your browser"
        echo "Press Ctrl+C to stop the server"
        wait
    elif command_exists python; then
        echo "Using Python HTTP server on port 8008..."
        python -m http.server 8008 &
        echo "✅ Server started! Open http://localhost:8008 in your browser"
        echo "Press Ctrl+C to stop the server"
        wait
    else
        echo "❌ Python not found. Please install Python or use an alternative method."
        return 1
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "📤 Deploying to Netlify..."
    echo ""
    echo "To deploy to Netlify:"
    echo "1. Go to https://app.netlify.com/"
    echo "2. Drag and drop the 'college-football-weekend-hub' folder"
    echo "3. Wait for deployment to complete"
    echo "4. Your site will be live at a Netlify URL"
    echo ""
    echo "Alternative: Use Netlify CLI if installed"
    if command_exists netlify; then
        echo "Netlify CLI detected. Run: netlify deploy"
    fi
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "📤 Deploying to Vercel..."
    echo ""
    echo "To deploy to Vercel:"
    echo "1. Go to https://vercel.com/"
    echo "2. Import your GitHub repository"
    echo "3. Select the 'college-football-weekend-hub' folder"
    echo "4. Deploy automatically"
    echo ""
    echo "Alternative: Use Vercel CLI if installed"
    if command_exists vercel; then
        echo "Vercel CLI detected. Run: vercel"
    fi
}

# Function to deploy to GitHub Pages
deploy_github_pages() {
    echo "📤 Deploying to GitHub Pages..."
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Push your code to GitHub"
    echo "2. Go to repository Settings > Pages"
    echo "3. Select source branch (usually main)"
    echo "4. Select folder (usually /docs or root)"
    echo "5. Save and wait for deployment"
    echo ""
    echo "Your site will be available at:"
    echo "https://[username].github.io/[repository-name]/apps/college-football-weekend-hub/"
}

# Function to deploy to traditional web server
deploy_traditional() {
    echo "📤 Deploying to Traditional Web Server..."
    echo ""
    echo "To deploy to a traditional web server:"
    echo "1. Upload all files to your web server"
    echo "2. Ensure index.html is in the root directory"
    echo "3. Configure your web server (Apache/Nginx)"
    echo "4. Set up domain and SSL certificate"
    echo ""
    echo "File structure should be:"
    echo "/var/www/html/college-football-weekend-hub/"
    echo "├── index.html"
    echo "├── style.css"
    echo "├── script.js"
    echo "└── README.md"
}

# Function to test the application
test_application() {
    echo "🧪 Testing the application..."
    echo ""
    
    # Check if files exist
    if [ -f "index.html" ]; then
        echo "✅ index.html found"
    else
        echo "❌ index.html not found"
        return 1
    fi
    
    if [ -f "style.css" ]; then
        echo "✅ style.css found"
    else
        echo "❌ style.css not found"
        return 1
    fi
    
    if [ -f "script.js" ]; then
        echo "✅ script.js found"
    else
        echo "❌ script.js not found"
        return 1
    fi
    
    echo ""
    echo "✅ All files present. Application is ready for deployment!"
}

# Main menu
while true; do
    echo ""
    echo "Choose your deployment method:"
    echo "1) Local Development Server (Python - Port 8008)"
    echo "2) Local Development Server (Node.js - Port 8008)"
    echo "3) Netlify (Drag & Drop)"
    echo "4) Vercel (Import Repository)"
    echo "5) GitHub Pages"
    echo "6) Traditional Web Server"
    echo "7) Test Application"
    echo "8) Exit"
    echo ""
    read -p "Enter your choice (1-8): " choice
    
    case $choice in
        1)
            start_local_server
            ;;
        2)
            if command_exists node; then
                echo "Using Node.js server on port 8008..."
                if command_exists npx; then
                    npx serve . -p 8008
                else
                    echo "❌ npx not found. Please install Node.js and npm."
                fi
            else
                echo "❌ Node.js not found. Please install Node.js or use Python option."
            fi
            ;;
        3)
            deploy_netlify
            ;;
        4)
            deploy_vercel
            ;;
        5)
            deploy_github_pages
            ;;
        6)
            deploy_traditional
            ;;
        7)
            test_application
            ;;
        8)
            echo "👋 Goodbye! Go Seminoles! 🏈"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please enter a number between 1-8."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done 