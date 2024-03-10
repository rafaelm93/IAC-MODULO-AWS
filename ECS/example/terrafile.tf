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

module "app-deploy" {
  source                 = "../"
  containers_definitions = data.template_file.containers_definitions_json.rendered
  environment            = "unleash"
  app_name               = "unleash"
  app_count              = "2"
  app_port               = "80"
  fargate_version        = "1.4.0"
  cloudwatch_group_name  = "unleash"
}

output "load_balancer_dns_name" {
  value = "http://${module.app-deploy.loadbalance_dns_name}"
}

data "template_file" "containers_definitions_json" {
  template = file("./containers_definitions.json")

  vars = {
    APP_VERSION = var.APP_VERSION
    APP_IMAGE   = var.APP_IMAGE
    AWS_ACCOUNT = var.AWS_ACCOUNT
  }
}

variable "APP_VERSION" {
  default   = "latest"
  description = "Version comes from git commit in Makefile"
}

variable "APP_IMAGE" {
  default   = "unleash"
  description = "Name comes from variable APP_IMAGE in Makefile"
}

variable "AWS_ACCOUNT" {
  default   = "012904518392"
  description = "Get the value of variable AWS_ACCOUNT in Makefile"
}
