# Fullstack Marketplace

Complete marketplace to study.

## Get the Container IP (To connect into the DB Admin)
```docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id```
