# Trending App Builder

> **AI Development Specification**: Read this README, find what's trending online right now, then build one simple web application for the top trending topic.

## 🎯 Mission

Search the internet for trending topics (Google Trends, Reddit, social media). Pick the most popular trending topic and build a simple, focused web application that serves that specific trend. Build one app at a time.

## 🏗 How It Works

### The Process

1. **Search for Trends**: Check multiple sources to find what's hot right now
2. **Pick the Hottest**: Choose the single most trending/popular topic
3. **Build an App**: Create a simple web application focused on that specific trending topic
4. **Make it Standalone**: The app should work independently and be ready to deploy

### What Kind of Apps to Build

- If "iPhone 15 problems" is trending → Build a troubleshooting guide app
- If "Taylor Swift concert tickets" is hot → Build a ticket finder/info app
- If "sourdough recipe" is popular → Build a recipe guide app
- If "stock market crash" is trending → Build a news/analysis app
- If "how to lose weight" is trending → Build a fitness tips app

The app should directly serve what people are searching for.

## 📁 Project Structure

Keep everything in one repository but each trending app gets its own folder:

```
trending-app-builder/
├── apps/
│   ├── iphone-15-troubleshoot/    # Today's trending app
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   ├── package.json
│   │   ├── RESEARCH.md            # Trend analysis & decision rationale
│   │   └── CHANGELOG.md           # Project update history
│   ├── taylor-swift-tickets/      # Yesterday's trending app
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   ├── package.json
│   │   ├── RESEARCH.md
│   │   └── CHANGELOG.md
│   └── sourdough-guide/           # Last week's trending app
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       ├── package.json
│       ├── RESEARCH.md
│       └── CHANGELOG.md
├── README.md                      # This file
└── package.json                   # Main project config
```

## 🎨 App Requirements

### Technical Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript only
- **Backend**: Node.js if needed (for API calls, data fetching)
- **Styling**: Pure CSS, keep it clean and responsive
- **No frameworks**: No React, Vue, or complex build tools
- **Self-contained**: Each app folder should work independently

### App Features

- **Focused Content**: Address exactly what people are trending about
- **Mobile Responsive**: Works on phones and desktops
- **Fast Loading**: Keep it simple and lightweight
- **Good Design**: Clean, modern look that doesn't distract from content
- **Useful Information**: Actually helpful for someone searching that trend

### Content Strategy

- **Real Information**: Don't make up facts, use real data when possible
- **Current**: Information should be up-to-date and relevant
- **Actionable**: Give users something they can actually do/use
- **Complete**: Cover the topic thoroughly but concisely

## 🔍 Trend Detection Strategy

### Sources to Check

- **Google Trends**: RSS feeds and daily trending searches
- **Reddit**: Hot posts, rising content, popular subreddits
- **Twitter/X**: Trending hashtags, topics, and conversations
- **News Sites**: Breaking news, viral stories, current events
- **Hacker News**: Tech trends, startup discussions, developer topics
- **Y Combinator**: Startup trends, tech innovations, business discussions
- **Social Media**: General buzz across platforms

### Trending Data Sources (Use These URLs)

- **Google Trends RSS**: `https://trends.google.com/trends/trendingsearches/daily/rss?geo=US`
- **Google News RSS**: `https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en`
- **Reddit Hot Posts**: `https://www.reddit.com/r/all/hot.json?limit=25`
- **Reddit Rising**: `https://www.reddit.com/r/all/rising.json?limit=25`
- **Hacker News Top**: `https://hacker-news.firebaseio.com/v0/topstories.json`
- **Trends24 (Twitter)**: `https://trends24.in/united-states/`
- **XTrends (Twitter)**: `https://xtrends.iamrohit.in/`

### Getting Trend Data

- **Try Everything**: Use web scraping, APIs, RSS feeds, or any method available
- **Be Creative**: If official APIs don't work, scrape HTML, parse RSS, check social feeds
- **Multiple Sources**: Cross-reference trends from different platforms for accuracy
- **Real-Time Data**: Get the most current trending information available

### Critical Requirement

**If you cannot successfully retrieve trending data from any source, ERROR and STOP immediately.**

Do not proceed with building an app without real trending data. The entire purpose is to build apps based on what's actually trending right now. Without real trend data, there is no point in continuing.

### Selection Criteria

- **Volume**: High search/mention volume
- **Recency**: Trending right now, not last week
- **Buildable**: Can actually create a useful app for this topic
- **Value**: Will help people searching for this information

## 📊 Documentation Requirements

### RESEARCH.md (Required in each project)

Every project must include a `RESEARCH.md` file that documents:

**Trend Analysis**

- What trending data was found from each source
- Specific metrics (volumes, rankings, engagement numbers)
- Cross-platform comparison of the trend
- Why this trend was selected over others

**Decision Rationale**

- Why this specific topic was chosen
- What type of app would best serve this trend
- Target audience analysis
- Expected user needs and pain points

**Content Strategy**

- What information users are likely searching for
- Key questions the app should answer
- Content sources and references used
- SEO considerations and keyword strategy

**Example RESEARCH.md structure:**

```markdown
# Trend Research: iPhone 15 Battery Issues

## Trend Discovery

- **Google Trends**: 50,000+ searches in last 24h
- **Reddit**: 15 hot posts in r/iPhone, r/Apple
- **Twitter**: #iPhone15Battery trending with 25K tweets
- **News**: 5 major tech blogs covering the issue

## Why This Trend

- High volume + immediate user need
- Technical problem requiring solutions
- Multiple complaint threads = app opportunity
- Can provide real value with troubleshooting guides

## App Strategy

- Focus: Battery troubleshooting and optimization
- Target: iPhone 15 owners experiencing battery drain
- Content: Step-by-step fixes, settings optimization
- Value: Immediate practical solutions
```

### CHANGELOG.md (Required in each project)

Track all changes and updates to the project:

**Change Documentation**

- Date and time of each update
- What was changed and why
- Performance improvements or bug fixes
- Content updates or additions

**Example CHANGELOG.md structure:**

```markdown
# Project Changelog: iPhone 15 Battery App

## [1.2] - 2025-08-30 14:30

### Added

- New iOS 17.1 battery calibration steps
- Dark mode toggle for better UX
- FAQ section with 10 most common issues

### Changed

- Updated troubleshooting order based on success rates
- Improved mobile responsiveness for iPhone users

## [1.1] - 2025-08-30 10:15

### Fixed

- Broken links to Apple support pages
- CSS layout issues on Safari mobile

## [1.0] - 2025-08-30 08:00

### Added

- Initial release with core troubleshooting guide
- Battery optimization settings
- Performance monitoring tips
```

### Single App Focus

1. Run trend detection to find the hottest topic
2. Research that topic thoroughly
3. Plan what kind of app would best serve people searching for it
4. Build one complete, focused application
5. Test that it works and is useful
6. Make sure it's ready to deploy independently

### App Types Based on Trends

- **How-to Trends**: Build step-by-step guide apps
- **News Trends**: Build information/analysis apps
- **Shopping Trends**: Build comparison/info apps
- **Entertainment Trends**: Build fan info/schedule apps
- **Problem Trends**: Build solution/troubleshooting apps

## 🎯 Success Criteria

### A Good Trending App Should:

- **Solve a Real Need**: Address what people are actually searching for
- **Load Fast**: Under 3 seconds on mobile
- **Look Professional**: Clean, trustworthy design
- **Work Everywhere**: Mobile, tablet, desktop
- **Be Complete**: Cover the topic comprehensively
- **Be Deployable**: Ready to host anywhere immediately

### What Makes It Valuable

- Someone searching for that trend finds exactly what they need
- Information is accurate and current
- User experience is smooth and intuitive
- App could realistically get organic traffic for that trend

## 🚨 Important Guidelines

### Keep It Simple

- No complex build processes
- No external dependencies unless absolutely necessary
- Pure HTML/CSS/JS when possible
- File-based data storage if needed

### Focus on Quality Over Quantity

- Build one great app rather than many mediocre ones
- Take time to research the trending topic properly
- Make sure content is accurate and helpful
- Polish the user experience

### Make Each App Independent

- Should work without the parent project
- Include its own package.json with deployment scripts
- Self-contained assets (CSS, JS, images)
- Ready to deploy to any static hosting service

---

## 🤖 Instructions for AI Assistant

**Your Task**: Read this specification, search for current trending topics, select the most popular one, and build a complete web application for it.

**Process**:

1. **Get Real Trend Data**: Search multiple sources for trending topics right now using any method possible (APIs, scraping, RSS feeds, etc.)
2. **Verify Success**: If you cannot get real trending data, ERROR and STOP - do not proceed without actual trend information
3. **Document Findings**: Create detailed RESEARCH.md with all trend data discovered, cross-platform analysis, and selection rationale
4. **Analyze and Select**: Pick the single hottest/most searched trend from the data you retrieved
5. **Research Thoroughly**: Understand what people want for this trend and document your strategy
6. **Build the App**: Design and build a focused web application that serves that need
7. **Create Project Structure**: Set up complete standalone app in the apps/ folder with all required files
8. **Initialize Documentation**: Create RESEARCH.md with trend analysis and CHANGELOG.md for future updates
9. **Test and Validate**: Make sure it's complete, useful, and ready to deploy

**Documentation Requirements**:

- **RESEARCH.md**: Must include trend discovery data, selection rationale, and app strategy
- **CHANGELOG.md**: Initialize for tracking future updates and changes
- **Both files**: Keep in each project folder for relevance and context

**Critical**: This project only works with real trending data. No fake trends, no assumptions, no placeholder content. Get actual trending information and document your findings thoroughly, or don't proceed at all.
