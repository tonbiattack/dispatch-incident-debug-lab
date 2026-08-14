# 観測ランブック

まずブラウザの`X-Request-Id`、HTTPステータス、応答本文を記録します。次にBFF、Backend、外部配送連携のログを同じIDで検索し、どの境界で値またはステータスが変わったかを確認します。

追跡結果が不正な場合は、WireMockの受信履歴、選択されたmapping、Redisのキー・値・TTLを比較します。集荷枠や返品の不整合では、SQLログ、更新件数、version、Transaction境界、最終DB状態を順に確認します。Kubernetes問題では、Podイベント、注入済み環境変数、Service名、probe応答を確認します。
