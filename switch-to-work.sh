#!/bin/bash

# Switch current repository to use work GitHub account

REPO_PATH=$(pwd)

if [ ! -d "$REPO_PATH/.git" ]; then
    echo "❌ Error: Not a git repository!"
    exit 1
fi

# Set work Git config for this repo
git config user.name "Aniket Narayan"
git config user.email "aniket.narayan@aristocrat.com"

# Update remote URL if it exists
if git remote get-url origin &>/dev/null; then
    CURRENT_URL=$(git remote get-url origin)
    
    # Replace github.com with github.com-work
    NEW_URL=$(echo "$CURRENT_URL" | sed 's/github\.com/github.com-work/g' | sed 's/github\.com-personal/github.com-work/g')
    
    git remote set-url origin "$NEW_URL"
    echo "✅ Switched to work account"
    echo "   Remote: $NEW_URL"
else
    echo "⚠️  No remote 'origin' found. Set it manually:"
    echo "   git remote add origin git@github.com-work:company/repo.git"
fi

echo ""
echo "📋 Current config:"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo "   Remote: $(git remote get-url origin 2>/dev/null || echo 'Not set')"

