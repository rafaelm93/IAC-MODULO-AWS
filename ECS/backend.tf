provider "aws" {
  region  = "us-east-2"
  version = "~> 3.0"
}

terraform {
  backend "s3" {
    bucket = "terraform-rm"
    key    = "fargate/fargate.tfstate"
    region = "us-east-2"
  }
} 