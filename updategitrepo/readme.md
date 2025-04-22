# 🧰 GitHub + VS Code Guide

This README helps you:

- 🛠️ Create a new GitHub repository and push your VS Code project
- ✅ Add a new file using VS Code and push it to GitHub

---

## 🛠️ Step-by-Step: Create a New GitHub Repo and Push from VS Code

### ✅ Step 1: Create a New Repository on GitHub

1. Go to [https://github.com](https://github.com)
2. Click the **“+”** icon (top-right corner) → Choose **“New repository”**
3. Fill in the details:
   - **Repository name**: e.g., `my-js-project`
   - Description: *(optional)*
   - Choose **Public** or **Private**
   - **Do NOT** check "Initialize with a README"
4. Click **Create repository**

✅ Keep that page open — you’ll need the repo URL for the next steps.

---

### ✅ Step 2: Open Terminal in VS Code

- Open your project folder in VS Code
- Open the terminal:
  - `Ctrl + ~` (or `Cmd + ~` on Mac)
  - Or use the menu: `Terminal > New Terminal`

---

### ✅ Step 3: Initialize Git Locally

```bash
git init
```
### ✅ Step 4: Add and Commit Your Files
```
git add .
git commit -m "Initial commit"
 
```
### ✅ Step 5: Connect to GitHub Remote Repository 
``` 
git remote add origin  < git rop link >

```
### ✅ Step 6: Push to GitHub 
```
git branch -M main
git push -u origin main 
``
