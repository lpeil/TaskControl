class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {
        user: @user,
        token: token
      }
    else
      render json: {
        status: 500,
        error: 'Email ou senha incorreto'
      }
    end
  end

  def destroy
    session = nil
    render json: {
      message: 'sign out'
    }
  end
end