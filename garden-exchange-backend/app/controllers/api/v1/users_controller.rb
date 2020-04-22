class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def create 
        user = User.new(user_params)
            if user.save
                render json: UserSerializer.new(user).to_serialized_json
            else
                render json: {error: 'Error creating user'}
            end
    end

    def show
        user = User.find_by_id(params[:id])
        render json: UserSerializer.new(user).to_serialized_json
    end

    private
    def user_params
        params.require(:user).permit(:username, :city, :state, :password)
    end
end
