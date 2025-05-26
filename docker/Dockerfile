FROM php:8.3-apache

# Instalar extensões necessárias
RUN apt-get update && apt-get install -y \
    zip unzip git curl libzip-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Habilita o mod_rewrite do Apache
RUN a2enmod rewrite

WORKDIR /var/www/html
