FROM node:6.9.1
MAINTAINER Jacinto Arias <jarias@elrocin.es>
ENV REFRESHED_AT 2016-11-11

RUN useradd --user-group --create-home --shell /bin/false app ; \
    apt-get update ; \
    apt-get install -y \
      build-essential \
      ruby \
      ruby-dev ; \
    gem install \
      bundler

ENV HOME=/home/app

COPY package.json Gemfile $HOME/web/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/web/

RUN npm install ; \
    bundle install --path vender/bundle

EXPOSE 4000

CMD ["npm", "run", "gulp"]
