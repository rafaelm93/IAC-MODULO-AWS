variable "aws_region" {
  default     = "us-east-2"
  description = "Region of Amazon AWS"
}

variable "storage" {
  type        = number
  default     = 20
  description = "The allocated storage"
}

variable "storage_type" {
  type        = string
  default     = "gp2"
  description = "The type of the storage"
}

variable "engine" {
  type        = string
  default     = "postgres"
  description = "The database engine"
}

variable "engine_version" {
  default     = "12.7"
  type        = number
  description = "The engine version for database"
}

variable "instance_type" {
  default     = "db.t2.micro"
  type        = string
  description = "The RDS instance class"
}

variable "db_username" {
  default     = "labadmin"
  type        = string
  description = "Username of the database"
}

variable "db_name" {
  default = "lab"
  type    = string
}

variable "port" {
  default     = "5432"
  type        = number
  description = "The database port"
}

variable "identifier" {
  default     = "database-lab"
  type        = string
  description = "The name of the RDS instance"
}

variable "parameter_group_name" {
  default     = "default.postgres12"
  type        = string
  description = "Name of the DB parameter group to associate"
}

variable "snapshot" {
  default     = "true"
  type        = string
  description = "skip snapshot"
}

variable "default_tags" {
  type = map(any)
  default = {
    Name : "IAC",
    Team : "IAC",
    Application : "IAC",
    Environment : "Dev",
    Terraform : "Yes",
    Owner : "IAC"
  }
}

variable "parameters" {
  type = list(
    object({
      type        = string,
      name        = string,
      description = string,
      value       = string,
    })
  )
  default = []
}

variable "subnet_ids" {
  type = list(string)
}

variable "proj_name" {
  type    = string
  default = "lab"
}

variable "vpc_id" {
  type = string
}

variable "publicly_accessible_rds" {
  type = bool
}