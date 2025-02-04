# Vérification base de donnée

Dans un premier temps on va récupérer l'id de notre db via la commande 

```
docker ps

CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                               NAMES
7ceb2f0d9906   mysql:8.0   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:3306->3306/tcp, 33060/tcp   projectdockercompose-db-1
```

Puis on va accéder à notre docker en ligne de commande via 

```bash
docker exec -it 7ceb2f0d9906 mysql -uroot -proot
```

Nous sommes dans notre serveur SQL :

```
SHOW TABLES FROM todolist;
```

Nous avons besoin pour que l'applicatif soit fonctionnel de modifier la méthode d'authentification du user MySQL

```SQL
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;
```

