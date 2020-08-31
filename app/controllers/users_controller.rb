class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        error: @user.errors.full_messages
      }
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end