# Copy tab-icon.ico to favicon.ico in the public folder
# Run from the project root (PowerShell)
Copy-Item -Path ".\public\tab-icon.ico" -Destination ".\public\favicon.ico" -Force
Write-Host "Copied public/tab-icon.ico to public/favicon.ico"