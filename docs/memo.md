# Source Stage GitHub (OAuth アプリ経由) に必要なもの
- CodePipeline > 設定 > 接続 > GitHub Organization
- ソースレポジトリ > GitHub Organization に所属
- GitHub 個人アカウント > Personal access tokens classic
- Secrets Manager > トークンを登録 > github-token
名前はドキュメントで指定:
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines.CodePipelineSource.html

# よく使うコマンド
aws configure sso
aws sso login --profile admin
cdk bootstrap --profile admin
