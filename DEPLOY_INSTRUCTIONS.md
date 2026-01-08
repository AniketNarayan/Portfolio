# 🚀 Deploy Your Portfolio - Step by Step

## ✅ Step 1: Add SSH Key to GitHub (Do this first!)

1. **Copy your SSH key** (already copied above):
   ```
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDlnqMfHUmlB55bq04zrkCGnM2LU67cGWpyiMSC8s+lztuf7WrEIv5aha/Hqx7EEJ5a9um2myAqW9xIvArUCJjAcie+2Iz5BytKBL+Vk6AP1YjBLeq9R8CTQVfpP+kH7YgzH2zKmNPTQLcrJkOR2WowTELnN7yOe2A0aXe7yDwSaLx9FLhxX04tcZqsdqG09cktI739AnEwEgnG3iUXcArzjRksWsXYVp5pxYVRdU9zunAPIBBe7pqYrcQrDzfwijB3ioyIdvCHBK7Yxru9hyKDBhEJrRIrP8VZGfgQzYP+XbhqTQ8Ua8ObTpgoyWYOvlmKhX/S/epfwEsqXA5rTGP0QDWiKueitwwPSO9ZRfw3uyE8M7ku0O5vK9PBfFvKGI8yYLSBxRjR58OsjHIn8yu+033jNfp0K06zknpnHxK7O4P4VWMwLvSSNb6MLeO6cTI0YvdZvvVYv/tITcLcm1S+0iy04cKZqqMCDC/wS5exZVBsKKxZoyucPGyB8xaOmYqOBg4COYSCUObpxNH4E0KEULEEoc43KuzH7RtnWP1wXnCzbOnLISxeZ83znvZKSr8nY5VXk7ioZ4Tl4gcU6Yzz5KVWUmPOzilBMYsi2lw9Gt4P5jNX4MScSuBqplcM+PMfq0SgXjt0IusFnnwz5+NC4abg4KAwlZDB1a3tUYNv3Q== aniket.narayan27@gmail.com
   ```

2. **Go to GitHub**: https://github.com/settings/keys
3. **Click "New SSH key"**
4. **Title**: "MacBook Personal" (or any name you like)
5. **Key type**: Authentication Key
6. **Key**: Paste the entire key above
7. **Click "Add SSH key"**

---

## ✅ Step 2: Create GitHub Repository

1. **Go to**: https://github.com/new
2. **Repository name**: `portfolio` (or any name you prefer)
3. **Description**: "My personal portfolio website"
4. **Visibility**: 
   - ✅ **Public** (recommended - free hosting works better)
   - Or Private (if you prefer)
5. **DO NOT** check "Add a README file" (we already have code)
6. **DO NOT** add .gitignore or license (we have them)
7. **Click "Create repository"**

---

## ✅ Step 3: Push Your Code

After creating the repo, GitHub will show you commands. **But use these instead** (with personal account):

```bash
# Make sure you're in the Portfolio directory
cd /Users/an108201/Learnings/Resume/Portfolio

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin git@github.com-personal:YOUR_USERNAME/portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

**Example** (if your username is "AniketNarayan"):
```bash
git remote add origin git@github.com-personal:AniketNarayan/portfolio.git
git push -u origin main
```

---

## ✅ Step 4: Deploy to Vercel (Free Hosting)

### Option A: Using Vercel Website (Easiest)

1. **Go to**: https://vercel.com
2. **Sign up** with your **personal GitHub account**
3. **Click "Add New Project"**
4. **Import your repository**: Select `portfolio`
5. **Vercel will auto-detect**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Click "Deploy"**
7. **Wait 1-2 minutes** → Your site is live! 🎉

Your site will be at: `https://portfolio-xxxxx.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from Portfolio directory)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your personal account
# - Link to existing project? No
# - Project name? portfolio
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

---

## ✅ Step 5: Custom Domain (Optional)

### Important Notes:
- **Vercel's default domain** (`portfolio-silk-gamma-21.vercel.app`) works automatically - you can't rename it
- **To use a custom domain**, you must own the domain (e.g., `aniketnarayan.dev`, `aniketnarayan.com`)
- **You cannot change** the default `.vercel.app` domain name

### Adding a Custom Domain:

1. **In Vercel Dashboard**: Go to your project → Settings → Domains
2. **Add your domain**: e.g., `aniketnarayan.dev` or `portfolio.aniketnarayan.com`
3. **Update DNS** (Vercel will show you how):
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use A records if provided
4. **Wait for DNS propagation** (up to 48 hours)
5. **Free SSL** certificate automatically!

### ⚠️ Common Mistake:
- **Don't try to rename** the default Vercel domain (e.g., changing `portfolio-silk-gamma-21.vercel.app` to `ani-portfolio-vercel.app`)
- This will cause "Invalid Configuration" error
- Use the original domain Vercel gave you, or add a custom domain you own

---

## 🎯 Quick Checklist

- [ ] SSH key added to GitHub
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Site deployed and live
- [ ] (Optional) Custom domain configured

---

## 🐛 Troubleshooting

### "Permission denied" when pushing?
- Make sure you added SSH key to GitHub (Step 1)
- Test: `ssh -T git@github.com-personal`
- Should say: "Hi YourUsername! You've successfully authenticated..."

### Build fails on Vercel?
- Check build logs in Vercel dashboard
- Make sure `package.json` has correct scripts
- Try building locally: `npm run build`

### "Invalid Configuration" error for domain?
1. **Go to**: Vercel Dashboard → Your Project → Settings → Domains
2. **Click "Edit"** next to the domain showing the error
3. **Check DNS Configuration**:
   - For custom domains: Make sure DNS records are correctly set up
   - CNAME should point to `cname.vercel-dns.com`
   - Or use A records if Vercel provides IP addresses
4. **Click "Refresh"** to re-verify the domain
5. **If still not working**: Remove the domain and re-add it
6. **Wait for DNS propagation** (can take up to 48 hours)
7. **For default Vercel domains** (`*.vercel.app`): These should work automatically - try removing and letting Vercel reassign

### Need to update code?
```bash
git add .
git commit -m "Update portfolio"
git push
# Vercel will auto-deploy!
```

---

## 📝 Next Steps After Deployment

1. **Get your live URL**:
   - Go to Vercel Dashboard → Your Project
   - Copy the URL (e.g., `https://portfolio-silk-gamma-21.vercel.app`)

2. **Add to LinkedIn** 🚀:
   - **Option A - Featured Section** (Recommended):
     - Go to your LinkedIn profile → "Add profile section" → "Featured"
     - Click "+" → "Link" → Paste your portfolio URL
     - Add title: "My Portfolio" or "Personal Website"
   - **Option B - Contact Info**:
     - Edit your profile → "Contact info" → "Add website"
     - Select "Personal website" → Paste URL
   - **Option C - About Section**:
     - Edit "About" section → Add: "Check out my portfolio: [your-url]"

3. **Update your resume** with the live URL

4. **Add to your email signature**:
   - Include: "View my portfolio: [your-url]"

5. **Share on social media** 🎉:
   - Post about your new portfolio on LinkedIn, Twitter, etc.

6. **Keep it updated** with new projects!

Good luck! 🎉

