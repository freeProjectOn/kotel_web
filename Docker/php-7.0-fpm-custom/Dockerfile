
FROM php:7.1-fpm
#FROM php:7.0-fpm

# Install modules
RUN apt-get update && apt-get install -y \
	libfreetype6-dev \
	libjpeg62-turbo-dev \
	libmcrypt-dev \
	libpng12-dev \
	 msmtp \
    imagemagick \
    libssl-dev \
    libxml2-dev \
    libicu-dev \
    libxslt-dev \
    wget git vim ruby ruby-dev libcurl4-openssl-dev \
mc 

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install gd

RUN docker-php-ext-install mcrypt



# pdo
RUN docker-php-ext-install pdo_mysql  \
    && apt-get install -y php5-mysql \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_pgsql \
    && apt-get install -y libsqlite3-dev \
	&& docker-php-ext-install pdo_sqlite

# Install OH-MY-ZSH to see pretty terminal and ditch the bash
RUN apt-get install -y zsh
RUN curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | bash 


RUN pecl install --onlyreqdeps --force redis \
	&& rm -rf /tmp/pear \
	&& docker-php-ext-enable redis

CMD ["php-fpm"]
