class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        error: 'Email ou senha incorreto'
      }
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      message: 'sign out'
    }
  end

end