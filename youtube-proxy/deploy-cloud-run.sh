#!/bin/bash
gcloud run deploy youtube-proxy-server --project history-app-premium --source . --platform managed --region asia-northeast1 --allow-unauthenticated --min-instances 0 --max-instances 10 --memory 512Mi --cpu 1 --timeout 60s --set-env-vars "NODE_ENV=production,GEMINI_API_KEY=AIzaSyCxkN0FknseWZ7P4YDABUOUV78GxDAhBiQ"
