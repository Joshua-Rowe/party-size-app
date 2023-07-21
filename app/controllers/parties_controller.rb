class PartiesController < ApplicationController
  before_action :set_party, only: %i[ show update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /parties/1
  # GET /parties/1.json
  def show
  end

  # POST /parties
  # POST /parties.json
  def create
    @party = Party.new(party_params)

    if @party.save
      render json: @party, status: :created
    else
      render json: @party.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_party
      @party = Party.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def party_params
      params.require(:party).permit(:size)
    end
end
