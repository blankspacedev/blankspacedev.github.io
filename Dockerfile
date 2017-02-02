FROM node:6.9.1
MAINTAINER Jacinto Arias <jarias@elrocin.es>
ENV REFRESHED_AT 2016-11-20

RUN apt-get update ; \
    apt-get install -y \
      build-essential \
      ruby \
      ruby-dev ; \
    gem install \
      bundler

ENV HOME=/home/app

COPY package.json Gemfile $HOME/web/

WORKDIR $HOME/web/

RUN npm install ;
RUN bundle install

EXPOSE 4000

CMD ["npm", "run", "gulp"]
