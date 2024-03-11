data "aws_vpc" "main" {
  tags = {
    Name = var.environment
  }
}

# data "aws_subnet_ids" "private_A" {
#   vpc_id = data.aws_vpc.main.id
#   tags = {
#     Name = "Private_A"
#   }
# }

# data "aws_subnet_ids" "public_A" {
#   vpc_id = data.aws_vpc.main.id
#   tags = {
#     Name = "Public_A"
#   }
# }

# data "aws_subnet_ids" "private_B" {
#   vpc_id = data.aws_vpc.main.id
#   tags = {
#     Name = "Private_B"
#   }
# }

# data "aws_subnet_ids" "public_B" {
#   vpc_id = data.aws_vpc.main.id
#   tags = {
#     Name = "Public_B"
#   }
# }

data "aws_ecs_cluster" "main" {
  cluster_name = var.environment
}

data "aws_caller_identity" "current" {
}