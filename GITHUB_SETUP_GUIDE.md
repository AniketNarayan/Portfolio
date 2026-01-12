# Multiple GitHub Accounts Setup Guide

## ✅ Step 1: Add SSH Keys to GitHub

### For Personal Account:
1. Copy your personal SSH key:
   ```bash
   cat ~/.ssh/user-2.pub | pbcopy
   ```
2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste the key and save

### For Work Account:
1. Copy your work SSH key:
   ```bash
   cat ~/.ssh/id_ed25519.pub | pbcopy
   ```
2. Go to your company GitHub: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste the key and save

---

## ✅ Step 2: Configure Git Per-Repository

### For Personal Projects (like this Portfolio):

```bash
# Navigate to your project
cd /Users/an108201/Learnings/Resume/Portfolio

# Initialize git (if not already done)
git init

# Set local Git config for THIS repository only
git config user.name "Your Personal Name"
git config user.email "aniket.narayan27@gmail.com"

# Set remote using personal account
git remote add origin git@github.com-personal:YourUsername/portfolio.git
```

### For Work Projects:

```bash
# Navigate to work project
cd /path/to/work/project

# Set local Git config for THIS repository only
git config user.name "Aniket Narayan"
git config user.email "aniket.narayan@aristocrat.com"

# Set remote using work account
git remote add origin git@github.com-work:CompanyName/project.git
```

---

## ✅ Step 3: How to Use

### Cloning Repositories:

**Personal repo:**
```bash
git clone git@github.com-personal:username/repo.git
```

**Work repo:**
```bash
git clone git@github.com-work:company/repo.git
```

### Changing Remote URL:

**Switch existing repo to personal:**
```bash
git remote set-url origin git@github.com-personal:username/repo.git
```

**Switch existing repo to work:**
```bash
git remote set-url origin git@github.com-work:company/repo.git
```

---

## ✅ Step 4: Verify Setup

Test your connections:

```bash
# Test personal account
ssh -T git@github.com-personal
# Should say: "Hi YourUsername! You've successfully authenticated..."

# Test work account
ssh -T git@github.com-work
# Should say: "Hi YourWorkUsername! You've successfully authenticated..."
```

---

## 🔄 Quick Switch Helper Scripts

See `switch-to-personal.sh` and `switch-to-work.sh` for easy switching!



