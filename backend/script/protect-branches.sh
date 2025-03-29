#!/bin/bash
# Charge les variables depuis .env
set -a
source .env
set +a

# Script pour protéger les branches : main, preprod, develop

# Branches à protéger
BRANCHES=("main" "preprod" "develop")

for BRANCH in "${BRANCHES[@]}"; do
  echo "🔐 Application des règles de protection sur la branche: $BRANCH"

  curl -X PUT -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "$API_URL/repos/$GITHUB_USER/$REPO_NAME/branches/$BRANCH/protection" \
    -d '{
      "required_status_checks": {
        "strict": true,
        "contexts": []
      },
      "enforce_admins": true,
      "required_pull_request_reviews": {
        "required_approving_review_count": 1
      },
      "restrictions": null
    }'

  echo "✅ Protection appliquée sur $BRANCH"
done

echo "✅ Toutes les branches sont maintenant sécurisées !"
