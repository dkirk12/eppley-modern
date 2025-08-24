# PowerShell script to zip the project for distribution
# Excludes node_modules, build, dist, and .git folders

$exclude = @('node_modules', 'build', 'dist', '.git')
$items = Get-ChildItem -Path . -Exclude $exclude
Compress-Archive -Path $items -DestinationPath eppley-modern.zip -Force -CompressionLevel Optimal
Write-Host 'Created eppley-modern.zip (excluding node_modules, build, dist, .git)'
