@echo off
title Push Portfolio to GitHub
cd /d "C:\Users\welcome\Desktop\my-portfolio"
echo ========================================================
echo    Pushing Gunjan Yadav's Portfolio to GitHub...
echo ========================================================
echo.
echo Make sure you have created the repository 'portfolio' on your GitHub:
echo https://github.com/new
echo.
set /p REPO_URL="Enter your GitHub Repo URL (default is https://github.com/gunjanny/portfolio.git): "
if "%REPO_URL%"=="" set REPO_URL=https://github.com/gunjanny/portfolio.git

echo.
echo Adding remote %REPO_URL% ...
"C:\Program Files\Git\cmd\git.exe" remote remove origin 2>nul
"C:\Program Files\Git\cmd\git.exe" remote add origin %REPO_URL%
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo Pushing code to main branch...
"C:\Program Files\Git\cmd\git.exe" push -u origin main

echo.
echo Done! Check your GitHub repository.
pause
