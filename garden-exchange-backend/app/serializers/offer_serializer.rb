class OfferSerializer
    def initialize(offer_object)
      @offer = offer_object
    end
  
    def to_serialized_json
      options = {
        include: {
          sender: {
            only: [:username]
          },
          recipient: {
            only: [:username]
          }
        },
        except: [:updated_at],
      }
      @offer.to_json(options)
    end
  
  end
  