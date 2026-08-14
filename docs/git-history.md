# Git履歴の対応

受講者はバグ導入コミットへチェックアウトし、Issueだけを根拠に再現・観測・修正・回帰テスト追加を行います。その後、修正コミットと`solutions/`を比較してください。`master`はすべての修正を含み、全テストが成功する状態です。

| ID | バグ導入コミット | 修正コミット | 比較の主対象 |
| --- | --- | --- | --- |
| D01 | `1e93d27` | `fae3ef0` | BFFの下流配送障害変換 |
| D02 | `c8b6e55` | `db9cb2b` | Redisへの空追跡結果保存 |
| D03 | `a07d7bf` | `f11d738` | WireMock追跡スタブの優先度 |
| D04 | `9e3eb82` | `774e263` | 配達証明の本文配置 |
| D05 | `5723c5d` | `8b6b5f5` | 配達証明XMLのnamespace |
| D06 | `0c87868` | `1ffe08f` | 集荷枠Entityの楽観ロック |
| D07 | `85ecbf2` | `6708f6c` | 配送履歴の一括クエリ |
| D08 | `6b5529e` | `7226ce1` | 返品受付のTransaction境界 |
| D09 | `8b80819` | `7bc60a9` | 最新配送イベントの必須値 |
| D10 | `b527837` | `fed6e6f` | 外部配送連携へのrequestId |
| D11 | `6819859` | `477898f` | KubernetesのRedisサービス名 |
| D12 | `747992e` | `aefdc2f` | 追跡番号ごとのQuery cache key |

たとえばD02は次のように始めます。

```bash
git checkout c8b6e55
# Issueを読み、再現・観測・最小修正・回帰テスト追加を行う
git diff c8b6e55 db9cb2b -- backend/src/main/java/com/example/sales/customers/CustomerCachePolicy.java
git checkout master
```
