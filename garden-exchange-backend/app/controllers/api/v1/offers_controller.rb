class Api::V1::OffersController < ApplicationController
    def index
        offers = Offer.where(sender_id: current_user.id).or(Offer.where(recipient_id: current_user.id))
        render json: OfferSerializer.new(offers).to_serialized_json
    end

    def create
        offer = current_user.sent_offers.new(offer_params)
            offer.recipient_id = offer.listing.user_id 
            if offer.save
                render json: OfferSerializer.new(offer).to_serialized_json
            else
                render json: {error: 'Error creating offer'}
            end
    end

    def destroy
        byebug
        offer = Offer.find_by_id(params[:id])
        offer.delete
    end

    private

    def offer_params
        params.require(:offer).permit(:category, :item, :details, :qty, :listing_id, :sender_id, :status, :date)
    end

end
