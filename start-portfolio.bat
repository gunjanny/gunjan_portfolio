@echo off
title Gunjan Yadav - Portfolio Server
cd /d "C:\Users\welcome\Desktop\my-portfolio"
echo ========================================================
echo    Starting Gunjan Yadav's Portfolio Website...
echo ========================================================
echo.
echo Opening browser at http://localhost:5173 ...
timeout /t 2 /nobreak >nul
start "" "http://localhost:5173"
call npm.cmd run dev
pause
