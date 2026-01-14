#!/bin/bash

# Script to push portfolio to personal GitHub
# Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "❌ Error: Please provide your GitHub username"
    echo "Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME"
    echo ""
    echo "Example: ./push-to-github.sh AniketNarayan"
    exit 1
fi

USERNAME=$1
REPO_NAME="portfolio"

echo "🚀 Setting up GitHub repository..."
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "git@github.com-personal:${USERNAME}/${REPO_NAME}.git"
else
    echo "✅ Adding remote..."
    git remote add origin "git@github.com-personal:${USERNAME}/${REPO_NAME}.git"
fi

echo ""
echo "📋 Configuration:"
echo "   Remote: git@github.com-personal:${USERNAME}/${REPO_NAME}.git"
echo "   User: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo ""

# Test SSH connection
echo "🔐 Testing SSH connection..."
if ssh -T git@github.com-personal &>/dev/null; then
    echo "✅ SSH connection successful!"
else
    echo "❌ SSH connection failed!"
    echo ""
    echo "Please make sure:"
    echo "1. You've added your SSH key to GitHub"
    echo "2. Your key is at: ~/.ssh/user-2.pub"
    echo "3. Go to: https://github.com/settings/keys"
    exit 1
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code is on GitHub!"
    echo ""
    echo "🔗 Repository URL:"
    echo "   https://github.com/${USERNAME}/${REPO_NAME}"
    echo ""
    echo "🚀 Next step: Deploy to Vercel"
    echo "   1. Go to: https://vercel.com"
    echo "   2. Sign up with GitHub"
    echo "   3. Import your repository"
    echo "   4. Deploy!"
else
    echo ""
    echo "❌ Push failed. Check the error above."
    exit 1
fi





