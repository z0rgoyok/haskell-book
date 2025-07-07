# Makefile для управления Haskell Learning App

# Переменные
APP_NAME=haskell-learning-app
IMAGE_NAME=haskell-app
PORT=8080
DEV_PORT=3000

# Цвета для вывода
GREEN=\033[0;32m
YELLOW=\033[1;33m
RED=\033[0;31m
NC=\033[0m # No Color

.PHONY: help build run stop clean dev logs shell health

# Показать помощь
help:
	@echo "$(GREEN)Haskell Learning App - Docker Commands$(NC)"
	@echo ""
	@echo "$(YELLOW)Основные команды:$(NC)"
	@echo "  build     - Собрать Docker образ"
	@echo "  run       - Запустить приложение (production)"
	@echo "  dev       - Запустить в режиме разработки"
	@echo "  stop      - Остановить контейнеры"
	@echo "  restart   - Перезапустить приложение"
	@echo "  clean     - Удалить контейнеры и образы"
	@echo ""
	@echo "$(YELLOW)Утилиты:$(NC)"
	@echo "  logs      - Показать логи"
	@echo "  shell     - Подключиться к контейнеру"
	@echo "  health    - Проверить состояние"
	@echo "  ps        - Показать запущенные контейнеры"
	@echo ""
	@echo "$(YELLOW)URL:$(NC)"
	@echo "  Production: http://localhost:$(PORT)"
	@echo "  Development: http://localhost:$(DEV_PORT)"

# Собрать образ
build:
	@echo "$(GREEN)Сборка Docker образа...$(NC)"
	docker-compose build

# Запустить в production режиме
run:
	@echo "$(GREEN)Запуск приложения в production режиме...$(NC)"
	docker-compose up -d
	@echo "$(GREEN)Приложение запущено: http://localhost:$(PORT)$(NC)"

# Запустить в режиме разработки
dev:
	@echo "$(GREEN)Запуск в режиме разработки...$(NC)"
	docker-compose --profile dev up -d haskell-dev
	@echo "$(GREEN)Режим разработки: http://localhost:$(DEV_PORT)$(NC)"

# Остановить контейнеры
stop:
	@echo "$(YELLOW)Остановка контейнеров...$(NC)"
	docker-compose down

# Перезапустить
restart: stop run

# Показать логи
logs:
	@echo "$(GREEN)Логи приложения:$(NC)"
	docker-compose logs -f

# Показать логи только основного сервиса
logs-app:
	@echo "$(GREEN)Логи основного приложения:$(NC)"
	docker-compose logs -f haskell-app

# Подключиться к контейнеру
shell:
	@echo "$(GREEN)Подключение к контейнеру...$(NC)"
	docker exec -it $(APP_NAME) /bin/sh

# Проверить состояние
health:
	@echo "$(GREEN)Проверка состояния контейнеров:$(NC)"
	docker-compose ps

# Показать запущенные контейнеры
ps:
	@echo "$(GREEN)Запущенные контейнеры:$(NC)"
	docker ps --filter "label=com.docker.compose.project=haskell-learning"

# Очистить все
clean:
	@echo "$(RED)Удаление контейнеров и образов...$(NC)"
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -f

# Полная очистка (включая volumes)
clean-all:
	@echo "$(RED)Полная очистка...$(NC)"
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -af --volumes

# Пересобрать и запустить
rebuild: clean build run

# Показать информацию о системе
info:
	@echo "$(GREEN)Информация о Docker:$(NC)"
	docker version
	docker-compose version
	@echo ""
	@echo "$(GREEN)Использование диска:$(NC)"
	docker system df

# Запустить с логами
run-logs: run logs

# Быстрый старт для разработки
quick-dev: build dev
	@echo "$(GREEN)Быстрый старт для разработки завершен!$(NC)"

# Быстрый старт для production
quick-prod: build run
	@echo "$(GREEN)Быстрый старт для production завершен!$(NC)" 