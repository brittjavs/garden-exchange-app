class ListingSerializer
    def initialize(listing_object)
      @listing = listing_object
    end
  
    def to_serialized_json
      options = {
        include: {
          user: {
            only: [:username, :city, :state]
          }
        },
        except: [:updated_at, :created_at],
      }
      @listing.to_json(options)
    end
  
  end
  