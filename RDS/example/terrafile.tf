provider "aws" {
  region = "us-east-2"
}

module "rds_lab" {
  source                  = "../"
  subnet_ids              = ["subnet-0ed52d8e2feb9be35", "subnet-061293834317a504d", "subnet-080554c2e67a8bc11" ]
  proj_name               = "lab"
  vpc_id                  = "vpc-0fcbed91d9672dcd1"
  port                    = 5432
  storage                 = 20
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "16.1"
  instance_type           = "db.m5d.large"
  db_name                 = "lab"
  db_username             = "user0"
  identifier              = "database-lab"
  parameter_group_name    = "default.postgres16"
  snapshot                = true
  publicly_accessible_rds = true
  default_tags = {
    Name : "RDS_lab",
    Team : "IAC",
    Application : "unleashe",
    Environment : "Production",
    Terraform : "Yes",
    Owner : "IAC"
  }
  parameters = [{
    name        = "sentry_dsn",
    description = "Parâmetro referente à variável de ambiente SENTRY_DSN",
    type        = "String",
    value       = " "
    },
    {
      name        = "spidermon_telegram_fake",
      description = "Parâmetro referente à variável de ambiente SPIDERMON_TELEGRAM_FAKE"
      type        = "String"
      value       = " "
    },
    {
      name        = "spidermon_sentry_fake",
      description = "Parâmetro referente à variável de ambiente SPIDERMON_SENTRY_FAKE"
      type        = "String"
      value       = " "
    },
    {
      name        = "django_settings_module",
      description = "Parâmetro referente à variável de ambiente DJANGO_SETTINGS_MODULE"
      type        = "String"
      value       = " "

    },
    {
      name        = "django_configuration",
      description = "Parâmetro referente à variável de ambiente DJANGO_CONFIGURATION"
      type        = "String"
      value       = " "
    },
    {
      name        = "django_secret_key",
      description = "Parâmetro referente à variável de ambiente DJANGO_SECRET_KEY"
      type        = "String"
      value       = " "
    },
    {
      name        = "access_token_lifetime_in_minutes",
      description = "Parâmetro referente à variável de ambiente ACCESS_TOKEN_LIFETIME_IN_MINUTES"
      type        = "String"
      value       = " "
    },
    {
      name        = "refresh_token_lifetime_in_minutes",
      description = "Parâmetro referente à variável de ambiente REFRESH_TOKEN_LIFETIME_IN_MINUTES"
      type        = "String"
      value       = " "

    },
    {
      name        = "aws_s3_bucket",
      description = "Parâmetro referente à variável de ambiente AWS_S3_BUCKET"
      type        = "String"
      value       = " "
    },
    {
      name        = "aws_s3_bucket_folder",
      description = "Parâmetro referente à variável de ambiente AWS_S3_BUCKET_FOLDER"
      type        = "String"
      value       = " "
    },
    {
      name        = "aws_s3_region",
      description = "Parâmetro referente à variável de ambiente AWS_S3_REGION"
      type        = "String"
      value       = " "
  }]

}
