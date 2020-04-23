class Api::V1::UsersController < ApplicationController
    def create 
        user = User.new(user_params)
            if user.save
                session[:user_id] = user.id
                render json: UserSerializer.new(user).to_serialized_json
            else
                resp = {
                    error: user.errors.full_messages.to_sentence
                }
                render json: {errors: 'Error creating user'}
            end
    end

    def show
        user = User.find_by_id(params[:id])
        render json: UserSerializer.new(user).to_serialized_json
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :city, :state)
    end

end
