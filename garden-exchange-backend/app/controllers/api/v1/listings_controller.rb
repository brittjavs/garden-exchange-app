class Api::V1::ListingsController < ApplicationController
   
    def index
        listings = Listing.all
        render json: ListingSerializer.new(listings).to_serialized_json
    end

    def create
        listing = Listing.new(listing_params)
            if listing.save
                render json: ListingSerializer.new(listing).to_serialized_json
            else
                render json: {error: "Error creating listing"}
            end
    end

    def destroy
        listing = Listing.find_by_id(params[:id])
        listing.delete
    end

    private

    def listing_params
        params.require(:listing).permit(:category, :item, :details, :qty, :user_id, :date)
    end


end
