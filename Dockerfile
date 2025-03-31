# --------------- DÉBUT COUCHE OS -------------------
    FROM nginx:latest
    # --------------- FIN COUCHE OS -------------------
    
    # METADONNEES DE L'IMAGE
    LABEL version="1.0" maintainer="Félix fautant@iutbayonne.univ-pau.fr"
    
    # VARIABLES TEMPORAIRES
    ARG APT_FLAGS="-q -y"
    ARG DOCUMENTROOT="/usr/www/html"
    
    # --------------- DÉBUT COUCHE PHP ------------------
    RUN apt-get update && apt-get install -y \
        php-fpm \
        php-mysql && \
        rm -f /usr/share/nginx/html/index.html && \
        apt-get autoclean -y
    
    # Install Composer
    COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
    
    # Copier les fichiers sources dans le répertoire Nginx
    COPY ./sources/dist/projet-angular/browser /usr/app/angular
    COPY ./sources/laravel /usr/app/laravel
    COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    COPY ./start.sh /

    # --------------- OUVERTURE DU PORT 80 -------------------
    EXPOSE 80
    EXPOSE 81
    
    # --------------- DÉMARRAGE DES SERVICES -----------------
    

    CMD ["bash", "/start.sh"]


    WORKDIR /usr/app
    