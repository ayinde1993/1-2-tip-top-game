#!/bin/bash

set -e  # Exit on error
set -o pipefail  # Catch errors in pipelines

LOG_FILE="/var/log/deploy.log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "Starting deployment at $(date)"

# Navigate to project directory
cd /var/www/my-project

# Detect branch (passed as an argument or default to 'prod')
BRANCH=${1:-prod}
export BRANCH

# Pull latest code
echo "Pulling latest changes from GitHub..."
git pull origin $BRANCH --no-edit

# Build and restart containers
echo "Building and restarting containers..."
docker-compose down
docker-compose up -d --build

# Sync files to AWS S3
echo "Syncing files to AWS S3..."
rclone sync ./frontend/build s3:mybucket/$BRANCH --delete
rclone sync ./backend s3:mybucket/$BRANCH --delete

# Restart necessary services
echo "Restarting services..."
docker restart jenkins sonarqube traefik prometheus grafana

# Clear old backups (keep last 7 days)
echo "Cleaning old backups..."
rclone delete --min-age 7d s3:mybackupbucket/archive/

echo "Deployment completed successfully at $(date)!"
