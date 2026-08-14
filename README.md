# Dispatch Incident Debug Lab

`Dispatch Incident Debug Lab` は、配送追跡・集荷枠予約・返品受付を題材にしたフルスタックのデバッグ練習教材です。画面の症状だけで原因を断定せず、HTTP、構造化ログ、PostgreSQL、Redis、WireMock、Kubernetes設定を根拠に切り分けます。

## 構成

Nuxt 3 は NestJS BFF のみを呼び、BFFはSpring Bootの配送業務APIへ接続します。BackendはPostgreSQL、Redis、外部配送事業者を模したWireMockを利用します。各境界では`X-Request-Id`を伝播し、同じ操作を横断して追跡します。

| コマンド | 用途 |
| --- | --- |
| `pnpm install` | Node依存関係を導入する。 |
| `./scripts/verify.sh` | 型検査、Nodeテスト、Backendテスト、文書、差分を確認する。 |
| `docker compose up --build` | フルスタック環境を起動する。 |
| `git checkout <bug-commit>` | 任意の不具合の再現状態を開く。 |

## 学習の進め方

`docs/issues/`から一問を選び、対応するバグ導入コミットに切り替えます。解答を開かずに再現条件を固定し、Browser、BFF、Backend、Redis、PostgreSQL、WireMock、manifestのうち必要な箇所を観測してください。自分で最小修正と回帰テストを作った後に、`solutions/`と修正コミットを比較します。
