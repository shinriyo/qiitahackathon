require 'rubygems'
require 'sinatra'
require 'oauth2'
require 'json'
 
def new_client
  OAuth2::Client.new('cd00dee9bd0f2d50ea8b', '01730451b3f7e21102b47b519d6d640b7dde48a5', :site => 'https://github.com',
    :authorize_path => '/login/oauth/authorize', :access_token_path => '/login/oauth/access_token')
end
 
get "/" do
  %(<p>Update the <code>#new_client</code> method in the sinatra app and <a href="/auth/github">try to authorize</a>.</p>)
end
 
# access this to request a token from facebook. 
get '/auth/github' do
  url = new_client.web_server.authorize_url(
    :redirect_uri => redirect_uri,
    :scope => 'email,offline_access'
  )
  puts "Redirecting to URL: #{url.inspect}"
  redirect url
end
 
# If the user authorizes it, this request gets your access token
# and makes a successful api call.
get '/auth/github/callback' do
  begin
    access_token = new_client.web_server.get_access_token(params[:code], :redirect_uri => redirect_uri)
    user = JSON.parse(access_token.get('/api/v2/json/user/show'))
    "<p>Your OAuth access token: #{access_token.token}</p><p>Your extended profile data:\n#{user.inspect}</p>"
  rescue OAuth2::HTTPError
    %(<p>Outdated ?code=#{params[:code]}:</p><p>#{$!}</p><p><a href="/auth/github">Retry</a></p>)
  end
end
 
def redirect_uri(path = '/auth/github/callback', query = nil)
  uri = URI.parse(request.url)
  uri.path  = path
  uri.query = query
  uri.to_s
end
