output "rds_hostname" {
  value       = aws_db_instance.lab.address
  description = "Hostname da instância RDS"
}

output "rds_port" {
  value       = aws_db_instance.lab.port
  description = "Porta da instância RDS"
}

output "rds_username" {
  value       = aws_db_instance.lab.username
  description = "Nome de usuário root da Instância RDS"
}

output "db_endpoint" {
  value       = aws_ssm_parameter.db_endpoint.arn
  description = "Endpoint de conexão da instância RDS"
}

output "db_instance_domain_auth_secret_arn" {
  description = "The ARN for the Secrets Manager secret with the self managed Active Directory credentials for the user joining the domain"
  value       = try(aws_db_instance.lab.domain_auth_secret_arn, null)
}