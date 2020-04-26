class Api::V1::ListingsController < ApplicationController
   
    def index
        if logged_in
            listings = Listing.all
            render json: ListingSerializer.new(listings).to_serialized_json
        else
            render json: {error: "Please log in"}
        end
    end

    def show
        listing = Listing.find_by_id(params[:id])
        render json: ListingSerializer.new(listings).to_serialized_json
    end

    def create
        if logged_in
        listing = current_user.listings.new(listing_params)
            if listing.save
                render json: ListingSerializer.new(listing).to_serialized_json
            else
                render json: {error: "Error creating listing"}
            end
        else
            render json: {error: "Please log in"}
        end
    end

    def destroy      
        listing = Listing.find_by_id(params[:id])
        listing.delete
    end

    private

    def listing_params
        params.require(:listing).permit(:category, :item, :details, :qty, :user_id, :date, :wants)
    end


end
