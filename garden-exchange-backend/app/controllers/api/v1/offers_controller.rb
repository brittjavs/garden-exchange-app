class Api::V1::OffersController < ApplicationController
    def index
        offers = Offer.all
        render json: OfferSerializer.new(offers).to_serialized_json
    end

    def create
        offer = Offer.new(offer_params)
            if offer.save
                render json: OfferSerializer.new(offer).to_serialized_json
            else
                render json: {error: 'Error creating offer'}
            end
    end

    def destroy
        offer = Offer.find_by_id(params[:id])
        offer.delete
    end

    private

    def offer_params
        params.require(:offer).permit(:category, :item, :details, :qty, :listing_id, :sender_id, :recipient_id, :status, :date)
    end

end
