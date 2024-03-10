variable "fargate_version" {
  default     = "1.4.0"
  description = "The fargate version used to deploy inside ECS cluster."
}

variable "fargate_cpu" {
  type = number
  default     = "1024"
  description = "The maximum of CPU that the task can use."
}

variable "fargate_memory" {
  type = number
  default     = "2048"
  description = "The maximum of memory that the task can use."
}

variable "app_name" {
  type = string
  description = "How your app will be called."
}

variable "app_port" {
  type = number
  default     = "3000"
  description = "The PORT that will be used to communication between load balancer and container."
}

variable "app_count" {
  type = number
  default     = "1"
  description = "Number of tasks that will be deployed for this app."
}

variable "environment" {
  type = string
  default     = "main"
  description = "The enviroment name where that app will be deployed."
}

variable "cloudwatch_group_name" {
  type = string
  description = "CloudWatch group name where to send the logs."
}

variable "containers_definitions" {
  type = string
  description = "A JSON with all container definitions that should be run on the task. For more http://bit.do/eKzfH"
}

variable "health_check_path" {
  type = string
  default     = "/"
  description = "Default health check path"
}

variable "default_tags" {
  type = map(any)
  default = {}
  description = "Default variable the project"
}

# variable "aws_vpc" {
#   type = string
#   default     = "vpc-0fd6d5f242299b378"
#   description = "vpc"
# }

# variable "subnet_privado" {
#   type = string
#   default     = "subnet-07507183da3304aa0"
#   description = "subnet_privado"
# }

# variable "subnet_publico" {
#   type = string
#   default     = "subnet-0d1d14a7371180baa"
#   description = "subnet_publico"
# }