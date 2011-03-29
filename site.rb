require "rubygems"
require "bundler"
require "sinatra"

Bundler.setup

get "/" do
  haml "Hola"
end