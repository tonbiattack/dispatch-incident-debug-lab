#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
pnpm typecheck
pnpm test
mvn -q -f backend/pom.xml test
git diff --check
test -f README.md
test -f DESIGN.md
test -f coverage-matrix.md
test -f SUMMARY.md
for id in D01 D02 D03 D04 D05 D06 D07 D08 D09 D10 D11 D12; do
  test -f "docs/issues/${id}.md"
  test -f "solutions/${id}.md"
done
