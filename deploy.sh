#!/bin/bash

# PlayFunBuild - Vercel Deployment Script
echo "🧸 Deploying PlayFunBuild to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Add and commit any new changes
echo "📝 Committing latest changes..."
git add .
git status

# Ask for commit message
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update: $(date '+%Y-%m-%d %H:%M')"
fi

git commit -m "$commit_msg"

# Push to GitHub (if using GitHub integration)
echo "📤 Pushing to GitHub..."
git push origin main

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your PlayFunBuild website is now live!"

# Open the deployed site
read -p "Open the live site in browser? (y/n): " open_site
if [[ $open_site =~ ^[Yy]$ ]]; then
    vercel --prod | grep -o 'https://[^[:space:]]*' | xargs open
fi