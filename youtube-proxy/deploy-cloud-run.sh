#!/bin/bash
# プロジェクトルートの .env からGEMINI_API_KEYを読み込む
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"

if [ -f "$ENV_FILE" ]; then
  export $(grep -v '^#' "$ENV_FILE" | grep 'GEMINI_API_KEY' | xargs)
  echo "✅ .env から GEMINI_API_KEY を読み込みました"
fi

if [ -z "$GEMINI_API_KEY" ]; then
  echo "ERROR: GEMINI_API_KEY が設定されていません"
  echo ".env ファイルに GEMINI_API_KEY=your-api-key を追加してください"
  exit 1
fi

gcloud run deploy youtube-proxy-server --project history-app-premium --source . --platform managed --region asia-northeast1 --allow-unauthenticated --min-instances 0 --max-instances 10 --memory 512Mi --cpu 1 --timeout 60s --set-env-vars "NODE_ENV=production,GEMINI_API_KEY=${GEMINI_API_KEY}"
