#!/bin/bash

# This script helps set up multiple GitHub accounts
# Run this to update your SSH config

cat > ~/.ssh/config << 'EOF'
# Company GitHub Account (Aristocrat)
Host github.com-work
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_ed25519
   IdentitiesOnly yes

# Personal GitHub Account
Host github.com-personal
   HostName github.com
   User git
   IdentityFile ~/.ssh/user-2
   IdentitiesOnly yes

# Default (will use work account)
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_ed25519
   IdentitiesOnly yes
EOF

echo "✅ SSH config updated!"
echo ""
echo "📝 Next steps:"
echo "1. Add your SSH keys to GitHub:"
echo "   - Work key (id_ed25519.pub): Add to company GitHub account"
echo "   - Personal key (user-2.pub): Add to personal GitHub account"
echo ""
echo "2. For personal repos, use: git@github.com-personal:username/repo.git"
echo "3. For work repos, use: git@github.com-work:company/repo.git"

